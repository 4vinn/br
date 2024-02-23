import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="sticky top-0 bg-white/20 backdrop-filter backdrop-blur-[20px] z-[1000] shadow-lg">
      <div className="header  inset-x-0 top-0 flex w-[85%] justify-between m-auto py-[15px] border-b-[1px] border-black ">
        <div className="logo">
          <img src="/logo11.png" width={200}></img>
          {/* <img src="/logo2.jpeg" width={200} height={5}></img> */}
        </div>
        <div className="menu flex flex-col items-center justify-center">
          <nav>
            <ul className="flex gap-[8px] ">
              <li>
                <Link href="/">
                  <div className="px-[11px] py-[2px] hover:bg-[#060606] hover:text-white inline-block hover:-skew-x-12 hover:transition transition-all ease-out duration-150 hover:transform  ">
                    HOME
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/reports">
                  <div className="px-[11px] py-[2px] hover:bg-[#060606] hover:text-white inline-block hover:-skew-x-12 hover:transition transition-all ease-out duration-150 hover:transform hover:translate-z-0 ">
                    REPORTS
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/blogs">
                  <div className="px-[11px] py-[2px] hover:bg-[#060606] hover:text-white inline-block hover:-skew-x-12 hover:transition transition-all ease-out duration-150 hover:transform hover:translate-z-0">
                    BLOGS
                  </div>
                </Link>
              </li>
              {/* <li>
                <Link href="/account">
                  <div className="px-[11px] py-[2px] hover:bg-[#060606] hover:text-white inline-block hover:-skew-x-12 hover:transition transition-all ease-out duration-150 hover:transform hover:translate-z-0">
                    ACCOUNT
                  </div>
                </Link>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
