"use client";
import Card from "@/components/Card";
import { useState,useEffect } from "react";
import axios from "axios";


export default function Reports() {
  const [blogs, SetBlogs] = useState<any[]>([]);
  useEffect(() => {
    axios.post('/api/blog', {
      is_report: false,
    }).then((response) => {
      if (response.data.code === 0) {
        console.log(response.data.code);
        SetBlogs(response.data.data);
      }
    }).catch((error) => {
      console.log(error);
    })
  }, [])


  return (
    <div>
      <div className="flex  flex-col w-[84vw] m-auto ">
        <h2 className="text-[28px] font-bold py-8">Blogs</h2>

        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto ">
          <Card
            imageUrl="https://images.unsplash.com/photo-1482686115713-0fbcaced6e28?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            author="John Doe"
            date="February 3, 2024"
            tag="Technology"
            title="Blog 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            slug="ldkjfldkfj"
          />
          <Card
            imageUrl="https://images.unsplash.com/photo-1482686115713-0fbcaced6e28?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            author="John Doe"
            date="February 3, 2024"
            tag="Technology"
            title="Blog 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            slug="ldkjfldkfj"
          />
          <Card
            imageUrl="https://images.unsplash.com/photo-1482686115713-0fbcaced6e28?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            author="John Doe"
            date="February 3, 2024"
            tag="Technology"
            title="Blog 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            slug="ldkjfldkfj"
          />
          <Card
            imageUrl="https://images.unsplash.com/photo-1482686115713-0fbcaced6e28?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            author="John Doe"
            date="February 3, 2024"
            tag="Technology"
            title="Blog 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            slug="ldkjfldkfj"
          />
          <Card
            imageUrl="https://images.unsplash.com/photo-1482686115713-0fbcaced6e28?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            author="John Doe"
            date="February 3, 2024"
            tag="Technology"
            title="Blog 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            slug="ldkjfldkfj"
          />
          <Card
            imageUrl="https://images.unsplash.com/photo-1482686115713-0fbcaced6e28?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            author="John Doe"
            date="February 3, 2024"
            tag="Technology"
            title="Blog 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            slug="ldkjfldkfj"
          />
          <Card
            imageUrl="https://images.unsplash.com/photo-1482686115713-0fbcaced6e28?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            author="John Doe"
            date="February 3, 2024"
            tag="Technology"
            title="Blog 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            slug="ldkjfldkfj"
          />
          <Card
            imageUrl="https://images.unsplash.com/photo-1482686115713-0fbcaced6e28?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            author="John Doe"
            date="February 3, 2024"
            tag="Technology"
            title="Blog 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            slug="ldkjfldkfj"
          />
        </div>
      </div>
    </div>
  );
}
