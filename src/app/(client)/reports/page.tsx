"use client";
import Card from "@/components/Card";

// export default function Reports() {
//   const [reports, SetReports] = useState<any[]>([]);
//   useEffect(() => {
//     axios.post('/api/blog', {
//       is_report: true,
//     }).then((response) => {
//       if (response.data.code === 0) {
//         console.log(response.data.code);
//         SetReports(response.data.data);
//       }
//     }).catch((error) => {
//       console.log(error.message);
//     })
//   }, [])
//   return (
//     <div>
//       <div className="flex flex-col ">
//         <h2 className="text-[28px] ml-[7vw]  mt-[3vw]  font-bold mb-[25px]">
//           Reports
//         </h2>

//         <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto">
//           <Card
//             imageUrl="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             author="John Doe"
//             date="February 3, 2024"
//             tag="Technology"
//             title="Report 1"
//             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//           />
//           <Card
//             imageUrl="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             author="John Doe"
//             date="February 3, 2024"
//             tag="Technology"
//             title="Report 2"
//             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//           />
//           <Card
//             imageUrl="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             author="John Doe"
//             date="February 3, 2024"
//             tag="Technology"
//             title="Report 3"
//             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//           />
//           <Card
//             imageUrl="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             author="John Doe"
//             date="February 3, 2024"
//             tag="Technology"
//             title="Report 4"
//             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//           />
//           <Card
//             imageUrl="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             author="John Doe"
//             date="February 3, 2024"
//             tag="Technology"
//             title="Report 5"
//             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//           />
//           <Card
//             imageUrl="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             author="John Doe"
//             date="February 3, 2024"
//             tag="Technology"
//             title="Report 6"
//             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//           />
//           <Card
//             imageUrl="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             author="John Doe"
//             date="February 3, 2024"
//             tag="Technology"
//             title="Report 7"
//             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//           />
//           <Card
//             imageUrl="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             author="John Doe"
//             date="February 3, 2024"
//             tag="Technology"
//             title="Report 8"
//             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

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
      tag: "Airdrop",
      title: "Report 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: "D. Williams",
      date: "February 3, 2024",
      tag: "Blockchain",
      title: "Report 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: "V. Buterin",
      date: "February 3, 2024",
      tag: "Blockchain",
      title: "Report 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: "John Doe",
      date: "February 3, 2024",
      tag: "Technology",
      title: "Report 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: "John Doe",
      date: "February 3, 2024",
      tag: "Technology",
      title: "Report 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: "John Doe",
      date: "February 3, 2024",
      tag: "Technology",
      title: "Report 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: "John Doe",
      date: "February 3, 2024",
      tag: "Airdrop",
      title: "Report 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: "D. Williams",
      date: "February 3, 2024",
      tag: "Blockchain",
      title: "Report 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: "V. Buterin",
      date: "February 3, 2024",
      tag: "Blockchain",
      title: "Report 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: "John Doe",
      date: "February 3, 2024",
      tag: "Technology",
      title: "Report 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: "John Doe",
      date: "February 3, 2024",
      tag: "Technology",
      title: "Report 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: "John Doe",
      date: "February 3, 2024",
      tag: "Technology",
      title: "Report 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    // Add more here
  ];

  return (
    <div>
      <div className="flex flex-col w-[84vw] m-auto">
        {/* Heading + filters */}
        <div className="flex flex-row justify-between items-center py-5">
          <h2 className="text-[28px] font-bold">Reports</h2>
          <div className="flex mb-4  mt-[1vw]">
            <button
              className={`ml-2 rounded-[1rem] px-4 transition-all duration-10 ease-in-out h-[2rem] text-[grey] border-[grey] ${
                selectedTag === "all"
                  ? "bg-black text-[white] border-black"
                  : "bg-transparent text-black border hover:border-black hover:-skew-x-12 hover:text-black"
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
                  : "bg-transparent text-black border hover:border-black hover:-skew-x-12 hover:text-black"
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
                  : "bg-transparent text-black border hover:border-black hover:-skew-x-12 hover:text-black"
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
                  : "bg-transparent text-black border hover:border-black hover:-skew-x-12 hover:text-black"
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
                  : "bg-transparent text-black border hover:border-black hover:-skew-x-12 hover:text-black"
              }
              }`}
              onClick={() => handleTagClick("Technology")}
            >
              Technology
            </button>
          </div>
        </div>
        {/* filtered reports */}
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto">
          {blogs.map((blog, index) => {
            if (selectedTag === "all" || blog.tag === selectedTag) {
              return (
                <Card
                  key={index}
                  imageUrl={blog.imageUrl}
                  author={blog.author}
                  date={blog.date}
                  tag={blog.tag}
                  title={blog.title}
                  description={blog.description}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
        {/* pagination */}
      </div>
    </div>
  );
}

export default Blog;

//pagination code-------------------
// import React, { useState } from "react";

// function Blog() {
//   const [selectedTag, setSelectedTag] = useState("all");
//   const [currentPage, setCurrentPage] = useState(1);
//   const blogsPerPage = 8;

//   const handleTagClick = (tag: React.SetStateAction<string>) => {
//     setSelectedTag(tag);
//     setCurrentPage(1); // Reset current page when a new tag is selected
//   };

//   const indexOfLastBlog = currentPage * blogsPerPage;
//   const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
//   const currentBlogs = blogs
//     .filter((blog: { tag: string }) => {
//       return selectedTag === "all" || blog.tag === selectedTag;
//     })
//     .slice(indexOfFirstBlog, indexOfLastBlog);

//   const paginate = (pageNumber: React.SetStateAction<number>) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div>
//       <div className="flex flex-col w-[84vw] m-auto">
//         <div className="flex flex-row justify-between items-center py-5">
//           <h2 className="text-[28px] font-bold">Reports</h2>
//           <div className="flex mb-4  mt-[1vw]">
//             {/* Filter buttons */}
//             {/* Your filter buttons code goes here */}
//           </div>
//         </div>
//         {/* Display filtered blogs */}
//         <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto">
//           {currentBlogs.map(
//             (
//               blog: {
//                 imageUrl: string;
//                 author: string;
//                 date: string;
//                 tag: string;
//                 title: string;
//                 description: string;
//               },
//               index: React.Key | null | undefined
//             ) => (
//               <Card
//                 key={index}
//                 imageUrl={blog.imageUrl}
//                 author={blog.author}
//                 date={blog.date}
//                 tag={blog.tag}
//                 title={blog.title}
//                 description={blog.description}
//               />
//             )
//           )}
//         </div>
//         {/* Pagination */}
//         <div className="flex justify-center my-4">
//           {Array.from(
//             { length: Math.ceil(blogs.length / blogsPerPage) },
//             (_, i) => (
//               <button
//                 key={i}
//                 onClick={() => paginate(i + 1)}
//                 className={`mx-1 px-3 py-1 rounded-full ${
//                   currentPage === i + 1
//                     ? "bg-black text-white"
//                     : "bg-gray-300 text-black"
//                 }`}
//               >
//                 {i + 1}
//               </button>
//             )
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Blog;
