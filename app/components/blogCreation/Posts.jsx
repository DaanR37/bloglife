"use client";
import { useState, useContext } from "react";
import BlogForm from "./BlogForm";
import Loader from "../Loader";
// import { BlogContext } from "../context/BlogContext";

/// Client-Side Rendering

export default function Posts() {
  const [title, setTitle] = useState("");
  const [category_id, setCategory_id] = useState(1);
  const [image, setImage] = useState(null);
  const [content, setContent] = useState("");
  const [validation, setValidation] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // const { triggerReload } = useContext(BlogContext);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!title) {
      setValidation("Voer een titel in aub");
      return;
    }
    if (!category_id) {
      setValidation("Kies een category aub");
      return;
    }
    if (!image) {
      setValidation("Kies een afbeelding aub");
      return;
    }
    if (!content) {
      setValidation("Voer een bericht in aub");
      return;
    }

    // console.log(image);
    const formDataForBlogPost = new FormData();
    formDataForBlogPost.append("title", title);
    formDataForBlogPost.append("content", content);
    formDataForBlogPost.append("category_id", category_id);
    formDataForBlogPost.append("image", image);

    try {
      setIsLoading(true);
      const resForBlogPost = await fetch("/api/posts", {
        method: "POST",
        headers: {
          token: process.env.NEXT_PUBLIC_TOKEN,
        },
        body: formDataForBlogPost,
      });

      if (!resForBlogPost.ok) {
        const error = await resForBlogPost.json();
        console.error("Error response from the server:", error);
        setValidation("Failed to create blog: " + error.message);
        return;
      } else {
        console.log("Blog is successfully created!");
        setTitle("");
        setCategory_id(1);
        setImage(null);
        setContent("");
        setValidation("");
        setSuccessMessage("Blog is succesvol aangemaakt!");
        /// Clear success message after a few seconds
        setTimeout(() => {
          setSuccessMessage("");
        }, 2500);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setValidation("An error occurred: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }
  function handleCategoryChange(e) {
    setCategory_id(parseInt(e.target.value, 10));
  }
  function handleImageChange(e) {
    setImage(e.target.files[0]);
  }
  function handleMessageChange(e) {
    setContent(e.target.value);
  }

  return (
    <>
      {isLoading && <Loader />}

      <main className={`${isLoading ? "blur-xs" : ""}`}>
        {/* {isLoading && <Loader />} */}
        <BlogForm
          title={title}
          content={content}
          category_id={category_id}
          validation={validation}
          successMessage={successMessage}
          onTitleChange={handleTitleChange}
          onSelectCategory={handleCategoryChange}
          onImageChange={handleImageChange}
          onMessageChange={handleMessageChange}
          onFormSubmit={handleFormSubmit}
        />
      </main>
    </>
  );
}