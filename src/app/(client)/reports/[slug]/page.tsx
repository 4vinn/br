"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import Card from "@/components/Card";

const RPage = () => {
  const pathname = usePathname();
  const slug = pathname.split("/")[2];
  const [blog, setBlog] = useState<any>({});
  const [blogContent, setBlogContent] = useState<string>("");
  const [contentHeadings, setContentHeadings] = useState<any>([]);
  const [recentReports, setRecentReports] = useState<any[]>([]);

  useEffect(() => {
    axios
      .post("/api/blog", {
        is_report: true,
        slug: slug,
      })
      .then((res) => {
        console.log(res);
        setBlog(res.data.data[0]);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, [slug]);

  useEffect(() => {
    console.log(blog.content);
    axios
      .get(blog.content)
      .then((res1) => {
        setBlogContent(res1.data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, [blog]);

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(blogContent, "text/html");

    const headings = document.querySelectorAll("h1");
    const list_of_content_array: any[] = [];
    for (let x = 0; x < headings.length; x++) {
      list_of_content_array.push(headings[x].textContent);
    }
    setContentHeadings(list_of_content_array);
  }, [blogContent]);

  // For recommended reports
  useEffect(() => {
    axios
      .get("/api/blog")
      .then((res2) => {
        setRecentReports(res2.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="w-full">
      <div className="pl-1 pr-1 w-[84vw] m-auto flex flex-row">
        <div className="toc mt-5 pt-5 border-[1px] border-solid border-dark text-dark rounded-lg p-4 sticky top-[6rem] max-h-[80vh] overflow-hidden overflow-y-auto ">
          <div className="border-b-[1px] border-[#28281e] w-[20vw] py-2 text-xl font-medium">
            Table of contents
          </div>
          <div className="pt-3">
            <ul>
              {contentHeadings.map((content: any, index: number) => {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      document
                        .querySelectorAll("h1")
                        [index].scrollIntoView({ behavior: "smooth" });
                    }}
                    className="flex justify-start items-center gap-4 cursor-pointer"
                  >
                    <div>
                      {/* <Image
                        src={"/arrow2.png"}
                        alt={"arrow"}
                        width={30}
                        height={40}
                      /> */}
                      ⪢
                    </div>
                    <p>{content}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="post pt-5 w-[60vw] pl-[3.25rem]">
          <div className="flex flex-col items-start">
            <h1 className="text-5xl font-medium py-5 w-full text-left">
              {blog.title}
            </h1>

            <div className="meta w-full items-center flex text-[.8rem] text-[#28281e] border-b-[2px] pb-[.5rem] gap-20">
              <span>{blog.author}</span>
              <span>{blog.published}</span>
              <div className="flex justify-center items-center">
                {blog.tags?.map((tagname: any, index: number) => {
                  return (
                    <span
                      key={index}
                      className="text-[#55ee6ac9] font-semibold px-1 py-[0.1rem] mx-1 my-1 text-[0.8rem] border border-[#55ee6ac9] "
                    >
                      {tagname.name}
                    </span>
                  );
                })}
              </div>
            </div>
            {<div dangerouslySetInnerHTML={{ __html: blogContent }}></div>}
          </div>
        </div>
      </div>
      <div className="recommended pl-1 pr-1 w-[84vw] m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {recentReports.slice(0, 4).map((item: any) => {
          return (
            <Card
              key={item.slug}
              imageUrl={item.thumbnail.data}
              author={item.author}
              date={item.published}
              tag={item.tags}
              title={item.title}
            />
          );
        })}
      </div>
      <div className="recommended pl-1 pr-1 w-[84vw] m-auto">
        {recentReports.length === 0 && (
          <div className="text-xl font-semibold w-fit">
            You will soon get the reports live here...
          </div>
        )}
      </div>
    </div>
  );
};

export default BPage;
