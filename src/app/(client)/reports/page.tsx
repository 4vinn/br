"use client";
import Card from "@/components/Card";
import axios from "axios";
import React, { useState, useEffect } from "react";

function Report() {
  // const reports = [
  //   {
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     author: "John Doe",
  //     date: "February 3, 2024",
  //     tag: ["Airdrop"],
  //     title: "Report 1",
  //   },
  //   {
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     author: "D. Williams",
  //     date: "February 3, 2024",
  //     tag: ["Blockchain"],
  //     title: "Report 2",
  //   },
  //   {
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     author: "V. Buterin",
  //     date: "February 3, 2024",
  //     tag: ["Blockchain"],
  //     title: "Report 3",
  //   },
  //   {
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     author: "John Doe",
  //     date: "February 3, 2024",
  //     tag: ["Technology"],
  //     title: "Report 3",
  //   },
  //   {
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     author: "John Doe",
  //     date: "February 3, 2024",
  //     tag: ["Technology"],
  //     title: "Report 3",
  //   },
  //   {
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     author: "John Doe",
  //     date: "February 3, 2024",
  //     tag: ["Technology"],
  //     title: "Report 3",
  //   },
  //   {
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     author: "John Doe",
  //     date: "February 3, 2024",
  //     tag: ["Airdrop"],
  //     title: "Report 1",
  //   },
  //   {
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     author: "D. Williams",
  //     date: "February 3, 2024",
  //     tag: ["Blockchain"],
  //     title: "Report 2",
  //   },
  //   {
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     author: "V. Buterin",
  //     date: "February 3, 2024",
  //     tag: ["Blockchain"],
  //     title: "Report 3",
  //   },
  //   {
  //     imageUrl:
  //       "https://pub-41a1a8f32abe4401b1f15c19faba731c.r2.dev/wallpaper.jpeg",
  //     author: "John Doe",
  //     date: "February 3, 2024",
  //     tag: ["Technology"],
  //     title: "Report 3",
  //   },
  //   {
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     author: "John Doe",
  //     date: "February 3, 2024",
  //     tag: ["Technology"],
  //     title: "Report 3",
  //   },
  //   {
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     author: "John Doe",
  //     date: "February 3, 2024",
  //     tag: ["Technology"],
  //     title: "Report 3",
  //   },
  //   {
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     author: "John Doe",
  //     date: "February 3, 2024",
  //     tag: ["NFT"],
  //     title: "Report 3",
  //   },
  // ];

  const tags = ["Airdrop", "Blockchain", "NFT", "Technology"];

  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  // Handle tag selection/de-selection
  const handleTagClick = (tag: string) => {
    const newSelectedTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag) // Deselect
      : [...selectedTags, tag]; // Select

    setSelectedTags(newSelectedTags);
  };

  const [reports, SetReports] = useState<any[]>([]);
  useEffect(() => {
    axios
      .post("/api/blog", {
        is_report: true,
      })
      .then((response) => {
        if (response.data.code === 0) {
          console.log(response.data.code);
          SetReports(response.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filteredReports = reports.filter((blog) =>
    selectedTags.every((tag) => blog.tag.includes(tag))
  );

  return (
    <div>
      <div className="flex flex-col w-[84vw] m-auto">
        {/* Heading + filters */}
        <div className="flex flex-row justify-between items-center py-5">
          <h2 className="text-[28px] font-bold">Reports</h2>
          <div className="flex mb-4  mt-[1vw]">
            <button
              className={`ml-2 rounded-[1rem] px-4 transition-all duration-10 ease-in-out h-[2rem] text-[grey] border-[grey] ${
                selectedTags.length === 0
                  ? "bg-black text-[white] border-black"
                  : "bg-transparent border hover:border-black hover:-skew-x-12 hover:text-black"
              }
              }`}
              onClick={() => setSelectedTags([])}
            >
              All
            </button>
            {tags.map((tag) => (
              <button
                key={tag}
                className={`ml-2 rounded-[1rem] px-4 transition-all duration-10 ease-in-out h-[2rem] text-[grey] border-[grey] ${
                  selectedTags.includes(tag)
                    ? "bg-black text-[white] border-black"
                    : "bg-transparent border hover:border-black hover:-skew-x-12 hover:text-black"
                }`}
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        {/* Displayingg filtered blogs */}
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto">
          {filteredReports.map(
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
        <div>
          {filteredReports.length === 0 && (
            <div className="text-xl font-semibold w-fit">Coming soon...</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Report;
