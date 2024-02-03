import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    // <div className="w-full h-28 border-b-[1px] border-black">
    //   <img src="/logo1.jpeg" width={200}></img>
    //   <Link href={"/"}>Home</Link>
    //   <Link href={"/blogs"}>Blogs</Link>
    //   <Link href={"/reports"}>Reports</Link>
    //   <Link href={"/account"}>Account</Link>
    // </div>

    <div>
      <div className="header inset-x-0 top-0 flex w-[80%] justify-between m-auto py-[30px] border-b-[1px] border-black ">
        <div className="logo">
          <img src="/logo11.png" width={200}></img>
          {/* <img src="/logo2.jpeg" width={200} height={5}></img> */}
        </div>
        <div className="menu flex flex-col items-center">
          <nav>
            <ul className="flex gap-[20px]">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/blogs"}>Blogs</Link>
              </li>
              <li>
                <Link href={"/reports"}>Reports</Link>
              </li>
              <li>
                <Link href={"/account"}>Account</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
