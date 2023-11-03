"use client";
require("dotenv").config();
import { useState } from "react";
import CreateBlog from "../components/CreateBlog";

export default function Home() {
  const [title, setTitle] = useState("");
  const [category_id, setCategory_id] = useState("1");  //// Naar kijken!!!!!
  const [image, setImage] = useState(null);
  const [content, setContent] = useState("");
  const [validation, setValidation] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

    /* Fetch Longer Syntax - Try and catch error */
    // try {
    //   setIsLoading(true);
    //   const response = await fetch(
    //     "https://frontend-case-api.sbdev.nl/api/posts",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ title, content, category_id, image }),
    //     }
    //   );

    //   if (response.ok) {
    //     console.log("Blog is succesvol aangemaakt!");
    //     setTitle("");
    //     setCategory_id("");
    //     setContent("");
    //     setImage(null);
    //     setValidation("");
    //     setSuccessMessage("Blog is succesvol aangemaakt!");
    //     // Clear success message after 3 seconds
    //     setTimeout(() => {
    //       setSuccessMessage("");
    //     }, 2000);
    //   } else {
    //     console.error("Failed to create blog");
    //   }
    // } catch (error) {
    //   console.error("Error creating blog:", error);
    // } finally {
    //   setIsLoading(false);
    // }

    /* Fetch Shorter Syntax - Net Ninja Example */
    const newBlog = {
      title,
      category_id,
      image,
      content,
    };

    const apiKey = process.env.NEXT_PUBLIC_TOKEN;

    const headers = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
    }

    console.log(headers); // Log the headers before making the request
    const res = await fetch("https://frontend-case-api.sbdev.nl/api/posts", {
      method: "POST",
      headers,
      body: JSON.stringify(newBlog),
    });

    if (res.status === 201) {
      console.log("Blog is succesvol aangemaakt!");
      setTitle("");
      setCategory_id("");
      setContent("");
      setImage(null);
      setValidation("");
      setSuccessMessage("Blog is succesvol aangemaakt!");
    } else {
      console.error("Failed to create blog");
    }
  };

  // router.refresh();
  // setIsLoading(false)

  function handleTitleChange(e) {
    setTitle(e.target.value);
  };
  function handleCategoryChange(e) {
    setCategory_id(e.target.value);
  };
  function handleImageChange(e) {
    setImage(e.target.files[0]);
  };
  function handleMessageChange(e) {
    setContent(e.target.value);
  };

  return (
    <main className="home relative flex w-full min-h-screen justify-center">
      <div
        className="absolute w-[1116px] mt-[272px]
            grid grid-cols-12-71px gap-[24px]"
      >
        {/* Form Container */}
        <div
          className="bg-light
            col-span-5 h-[659px]
            p-[24px]"
        >
          <CreateBlog
            title={title}
            category_id={category_id}
            content={content}
            validation={validation}
            successMessage={successMessage}
            onTitleChange={handleTitleChange}
            onSelectCategory={handleCategoryChange}
            onImageChange={handleImageChange}
            onMessageChange={handleMessageChange}
            onFormSubmit={handleFormSubmit}
          />
        </div>
        {/* BlogPost Grid Container */}
        <div
          className="bg-light
            col-start-6 col-span-12 h-[659px]
            p-[24px]"
        >
          {/* FETCH BLOGPOST OR ROUTE HANDLER HERE!! */}
        </div>
      </div>
    </main>
  );
}
