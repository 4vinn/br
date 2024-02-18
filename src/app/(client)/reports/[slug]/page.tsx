"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import axios from "axios";

const RPage = () => {
  const pathname = usePathname();
  const slug = pathname.split("/")[2];
  const [report, setReport] = useState<any>({});

  useEffect(() => {
    axios.post("/api/blog", {
      is_report: true,
      slug: slug
    }).then((res) => {
      setReport(res.data.data[0]);
    }).catch((error: any) => {
      console.log(error);
    })
  }, [slug])


  return (
    <div className="w-full">
      <div className="pl-1 pr-1 w-[84vw] m-auto flex flex-row">
        <div className="toc mt-5 pt-5 border-[1px] border-solid border-dark text-dark  rounded-lg p-4 sticky top-6 max-h-[80vh] overflow-hidden overflow-y-auto ">
          <div className="border-b-[1px] border-[#28281e] w-[20vw] py-2 text-xl font-medium">
            Table of contents
          </div>

          <div className="pt-3">
            <ul className="table-of-contents">

            </ul>
          </div>
        </div>

        <div className="post pt-5 w-[60vw] pl-[3.25rem]">
          <div className="flex flex-col items-start">
            <Image
              className=""
              src="https://images.unsplash.com/photo-1482686115713-0fbcaced6e28?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="thumbnail"
              width={400}
              height={400}
            ></Image>

            <h1 className="text-5xl font-medium py-5 w-full text-left">
              Some Title for the Blog Post
            </h1>

            <div className="meta w-full flex text-[.8rem] text-[#28281e] border-b-[2px] pb-[.5rem] gap-20">
              <span>Author</span>
              <span>Date</span>
              <span className="text-[#55ee6ac9] px-1 py-[0.1rem] text-[.78rem] border border-[#55ee6ac9]">
                #Tag
              </span>
            </div>
            {<div dangerouslySetInnerHTML={{ __html: report.content }} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RPage;
