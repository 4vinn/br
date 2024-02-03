// import { Poppins } from "next/font/google";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// const Poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <main>
      <div>
        <Navbar />
        <div className="h-[100vh] flex justify-center items-center flex-col text-center">
          <h2 className="text-[90px] font-bold">SOME HEADING</h2>
          <h2 className="text-[80px] font-bold mb-[25px]">
            Building the future
          </h2>
          <p className="text-[gray] mb-[15px] max-w-[800px]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
            Suspendisse urna nibh viverra non semper suscipit posuere a pede.
          </p>
          <button className="bg-[#000] w-[150px] h-[45px] text-[white] cursor-pointer">
            Learn More
          </button>
        </div>
        <div>News Letter</div>
        <div>Yt video</div>
        <div>Services</div>
        <div>Reports</div>
        <div>Blogs</div>
        <Footer />
      </div>
    </main>
  );
}
