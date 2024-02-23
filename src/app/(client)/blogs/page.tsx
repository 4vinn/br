"use client";
import Card from "@/components/Card";

import React, { useState } from "react";

function Blog() {
  const [selectedTag, setSelectedTag] = useState("all");

  const handleTagClick = (tag: React.SetStateAction<string>) => {
    setSelectedTag(tag);
  };

  const blogs = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: "John Doe",
      date: "February 3, 2024",
      tag: ["Airdrop"],
      title: "Report 1",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: "D. Williams",
      date: "February 3, 2024",
      tag: ["Blockchain"],
      title: "Report 2",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: "V. Buterin",
      date: "February 3, 2024",
      tag: ["Blockchain"],
      title: "Report 3",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: "John Doe",
      date: "February 3, 2024",
      tag: ["Technology"],
      title: "Report 3",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: "John Doe",
      date: "February 3, 2024",
      tag: ["Technology"],
      title: "Report 3",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: "John Doe",
      date: "February 3, 2024",
      tag: ["Technology"],
      title: "Report 3",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: "John Doe",
      date: "February 3, 2024",
      tag: ["Airdrop"],
      title: "Report 1",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: "D. Williams",
      date: "February 3, 2024",
      tag: ["Blockchain"],
      title: "Report 2",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: "V. Buterin",
      date: "February 3, 2024",
      tag: ["Blockchain"],
      title: "Report 3",
    },
    {
      imageUrl:
        "https://pub-41a1a8f32abe4401b1f15c19faba731c.r2.dev/wallpaper.jpeg",
      author: "John Doe",
      date: "February 3, 2024",
      tag: ["Technology"],
      title: "Report 3",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: "John Doe",
      date: "February 3, 2024",
      tag: ["Technology"],
      title: "Report 3",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: "John Doe",
      date: "February 3, 2024",
      tag: ["Technology"],
      title: "Report 3",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: "John Doe",
      date: "February 3, 2024",
      tag: ["NFT"],
      title: "Report 3",
    },
  ];

  const currentBlogs = blogs
    // .filter((blog: { tag: string[] }) => {
    //   return selectedTag === "all" || blog.tag === selectedTag;
    // })

  return (
    <div>
      <div className="flex flex-col w-[84vw] m-auto">
        {/* Heading + filters */}
        <div className="flex flex-row justify-between items-center py-5">
          <h2 className="text-[28px] font-bold">Blogs</h2>
          <div className="flex mb-4  mt-[1vw]">
            <button
              className={`ml-2 rounded-[1rem] px-4 transition-all duration-10 ease-in-out h-[2rem] text-[grey] border-[grey] ${
                selectedTag === "all"
                  ? "bg-black text-[white] border-black"
                  : "bg-transparent border hover:border-black hover:-skew-x-12 hover:text-black"
              }
              }`}
              onClick={() => handleTagClick("all")}
            >
              All
            </button>
            <button
              className={`ml-2 rounded-[1rem] px-4 transition-all duration-10 ease-in-out h-[2rem] text-[grey] border-[grey] ${
                selectedTag === "Airdrop"
                  ? "bg-black text-[white] border-black"
                  : "bg-transparent border hover:border-black hover:-skew-x-12 hover:text-black"
              }
              }`}
              onClick={() => handleTagClick("Airdrop")}
            >
              Airdrop
            </button>
            <button
              className={`ml-2 rounded-[1rem] px-4 transition-all duration-10 ease-in-out h-[2rem] text-[grey] border-[grey] ${
                selectedTag === "Blockchain"
                  ? "bg-black text-[white] border-black"
                  : "bg-transparent border hover:border-black hover:-skew-x-12 hover:text-black"
              }
              }`}
              onClick={() => handleTagClick("Blockchain")}
            >
              Blockchain
            </button>
            <button
              className={`ml-2 rounded-[1rem] px-4 transition-all duration-10 ease-in-out h-[2rem] text-[grey] border-[grey] ${
                selectedTag === "NFT"
                  ? "bg-black text-[white] border-black"
                  : "bg-transparent border hover:border-black hover:-skew-x-12 hover:text-black"
              }
              }`}
              onClick={() => handleTagClick("NFT")}
            >
              NFT
            </button>
            <button
              className={`ml-2 rounded-[1rem] px-4 transition-all duration-10 ease-in-out h-[2rem] text-[grey] border-[grey] ${
                selectedTag === "Technology"
                  ? "bg-black text-[white] border-black"
                  : "bg-transparent border hover:border-black hover:-skew-x-12 hover:text-black"
              }
              }`}
              onClick={() => handleTagClick("Technology")}
            >
              Technology
            </button>
          </div>
        </div>
        {/* Displayingg filtered blogs */}
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto">
          {currentBlogs.map(
            (
              blog: {
                imageUrl: string;
                author: string;
                date: string;
                tag: string[];
                title: string;
              },
              index: React.Key | null | undefined
            ) => (
              <Card
                key={index}
                imageUrl={blog.imageUrl}
                author={blog.author}
                date={blog.date}
                tag={blog.tag}
                title={blog.title}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Blog;
