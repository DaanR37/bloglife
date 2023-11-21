"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

/// Client-Side Rendering

const fetchBlogsArchive = async (currentPage) => {
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

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchBlogsArchive(currentPage);
      setPosts(result.posts);
      setPageCount(result.totalPages); // Set total pages based on API response
    };

    fetchData();
  }, [currentPage]);

  return (
    <div className="flex flex-col justify-between h-full">
      {posts.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-4-1fr gap-[24px]">
          {/* < h-[458px] */}
          {posts.map((post) => {
            const imageUrl = post.img_url
              ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${post.img_url}`
              : "/default-image.png";

            // Parse and format 'created_at'
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
                      width={200}
                      height={200}
                      className="imageHeader"
                      style={{
                        objectFit: "cover",
                        width: "100%",
                      }}
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
        nextLabel="Volgende pagina"
        previousLabel=""
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={4}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
}
