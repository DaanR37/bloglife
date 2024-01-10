/// Client-Side-Rendering because component has interactivity on browser side and because of the use of React Hooks
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

/// Fetching the blog posts fro an extrenal API-endpoint with the use of queryparameters and a variable for pagination state management
const fetchBlogsArchive = async (currentPage) => {
  /// Template literal because I use a variable (currentPage)
  const url = `https://frontend-case-api.sbdev.nl/api/posts?page=${currentPage +
    1}&perPage=8&sortBy=created_at&sortDirection=desc`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        token: process.env.NEXT_PUBLIC_TOKEN,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    /// Sends back the response from the API-call in JSON format - parameters data and last_page are given back bij the API
    const data = await response.json();
    return { posts: data.data, totalPages: data.last_page };
  } catch (error) {
    console.error("Fetching error:", error);
    return { posts: [], totalPages: 0 };
  }
};

export default function FetchArchive() {
  const [posts, setPosts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  // const [isLoading, setIsLoading] = useState(false);

  /// Function is being called when user clicks a page number in the pagination bar
  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  /// Calls fetchBlogsArchive function when currentPage changes - updates state of posts and pageCount based on the response
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchBlogsArchive(currentPage);
      setPosts(result.posts);
      setPageCount(result.totalPages); // Sets the number of total pages based on API response - see Postman
    };

    fetchData();
  }, [currentPage]);

  return (
    <div
      className="flex flex-col justify-between items-center
       xs:mb-64"
    >
      {posts.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div
          className="grid grid-cols-4-1fr gap-[24px]
            lg:grid-cols-2-1fr lg:gap-[18px]
            xs:gap-[12px]"
        >
          {posts.map((post) => {
            const imageUrl = post.img_url
              ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${post.img_url}`
              : "/default-image.png";

            const createdDate = new Date(post.created_at);
            const formattedDate = createdDate
              .toLocaleDateString("en-US")
              .replace(/\//g, "-");

            return (
              <div key={post.id} className="cardArchive">
                <div className="imageDataContainer">
                  {post.img_url && (
                    <Image
                      src={imageUrl}
                      alt="Header Image"
                      priority={true}
                      rel="preload"
                      as="image"
                      fill
                      objectFit="cover"
                      className="imageHeader"
                    />
                  )}
                  <div className="categoryCreationDate">
                    <h3>{formattedDate}</h3>
                    <h3>{post.category.name}</h3>
                  </div>
                </div>
                <div className="titleContentContainer">
                  <h1>{post.title}</h1>
                  <p>{post.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <ReactPaginate
        onPageChange={handlePageClick}
        nextLabel="Volgende pagina ->"
        previousLabel=""
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
}
