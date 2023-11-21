"use client";
import Image from "next/image";
import { useState, useEffect, useContext } from "react";

// import { BlogContext } from "../context/BlogContext";

/// Client-Side Rendering

const fetchBlogs = async (currentPage) => {
  const url = `https://frontend-case-api.sbdev.nl/api/posts?page=${currentPage}&perPage=4&sortBy=created_at&sortDirection=desc`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        'token': process.env.NEXT_PUBLIC_TOKEN,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Fetching error:", error);
    return null;
  }
};

export default function LatestPosts() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // const { shouldReload, resetReload } = useContext(BlogContext);

  /// Fetch the next 4 blog posts
  const loadMoreBlogs = async () => {
    setIsLoading(true);
    const nextPage = currentPage + 1;
    const newBlogs = await fetchBlogs(nextPage);

    if (newBlogs) {
      // const updatedBlogs = [...blogs, ...newBlogs.data];
      setBlogs((prevBlogs) => [...prevBlogs, ...newBlogs.data]);
      // setBlogs(updatedBlogs);
      // localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
      setCurrentPage(nextPage);
    } else {
      setError("Failed to fetch more blogs");
    }
    setIsLoading(false);
  };

  /// Fetch the initial 4 blog posts when landing on the page
  useEffect(() => {
    const loadInitialBlogs = async () => {
      const initialBlogs = await fetchBlogs(currentPage);
      if (initialBlogs) {
        setBlogs(initialBlogs.data);
      } else {
        setError("Failed to fetch blogs");
      }
    };

    loadInitialBlogs();
  }, []); // Dependencies array is empty to run only once on component mount

  return (
    <div className="flex flex-col justify-between h-full">
      {/* justify-center */}
      {blogs.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-2-1fr gap-[24px] overflow-y-auto">
          {/* < h-[458px] */}
          {blogs.map((blog) => {
            const imageUrl = blog.img_url
              ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${blog.img_url}`
              : "/default-image.png";

            // Parse and format 'created_at'
            const createdDate = new Date(blog.created_at);
            const formattedDate = createdDate
              .toLocaleDateString("en-US")
              .replace(/\//g, "-");

            return (
              <div key={blog.id} className="card">
                <div className="imageDataContainer">
                  {blog.img_url && (
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
                    <h3>{blog.category.name}</h3>
                  </div>
                </div>
                <div className="titleContentContainer">
                  <h1>{blog.title}</h1>
                  <p>{blog.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {/* Load More Button */}
      <div className="relative flex justify-center items-center bottom-0 mt-[24px]">
        <button
          onClick={loadMoreBlogs}
          disabled={isLoading}
          className="w-[158px] h-[39px] rounded-[20px] bg-customBtn"
        >
          <h2
            className="text-light h-[15px] text-xs font-bold
              !leading-[15px] tracking-[0]"
          >
            {isLoading ? "Laden..." : "Laad meer"}
          </h2>
        </button>
      </div>
    </div>
  );
}
