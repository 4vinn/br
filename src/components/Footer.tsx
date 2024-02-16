"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="rounded-2xl bg-[#000000] dark:bg-accentDark/90 m-2 sm:m-5 flex flex-col items-center text-light dark:text-dark">
      <div className="w-[83vw]  flex flex-col text-white pt-[2rem] pb-[1rem]">
        <div className="one w-full flex flex-row justify-between py-[2rem]">
          <div className="logo">
            <Image
              src="/logo1.jpeg"
              alt="Landscape picture"
              width={140}
              height={50}
            />
          </div>
          <div>
            <span className="flex flex-row gap-5 ">
              <Link href="LinkedIn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="h-9 w-9 text-white group hover:text-[#0A66C2] hover:-skew-x-12 hover:transition transition-all ease-out duration-150 hover:transform hover:translate-z-0"
                >
                  <path
                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
              <Link href="Twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="h-9 w-9 text-white group hover:text-[#1D9BF0] hover:-skew-x-12  hover:transition transition-all ease-out duration-150 hover:transform hover:translate-z-0"
                >
                  <path
                    d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </span>
          </div>
        </div>

        <div className="two w-full flex justify-between border-b border-[#686868] py-[2rem]">
          <Link
            href="/"
            className="p-[0.5rem] tracking-[0.08rem] hover:-skew-x-12 hover:opacity-[0.6] hover:transition transition-all ease-out duration-150 hover:transform hover:translate-z-0"
          >
            TEAM ↗
          </Link>
          <Link
            href="/"
            className="p-[0.5rem] tracking-[0.08rem] hover:-skew-x-12 hover:opacity-[0.6] hover:transition transition-all ease-out duration-150 hover:transform hover:translate-z-0"
          >
            CAREER ↗
          </Link>
          <Link
            href="/"
            className="p-[0.5rem] tracking-[0.08rem] hover:-skew-x-12 hover:opacity-[0.6] hover:transition transition-all ease-out duration-150 hover:transform hover:translate-z-0"
          >
            CONTACT ↗
          </Link>
          <Link
            href="/"
            className="p-[0.5rem] tracking-[0.08rem] hover:-skew-x-12 hover:opacity-[0.6] hover:transition transition-all ease-out duration-150 hover:transform hover:translate-z-0"
          >
            PRIVACY POLICY ↗
          </Link>
          <Link
            href="/"
            className="p-[0.5rem] tracking-[0.08rem] hover:-skew-x-12 hover:opacity-[0.6] hover:transition transition-all ease-out duration-150 hover:transform hover:translate-z-0"
          >
            TERMS OF USE ↗
          </Link>
        </div>

        <div className="three w-full py-[2rem]">
          <span>BlackRabbit &copy;2024</span>
          <br />
          <br />
          <span className="font-light text-[.8rem] text-[#bbbbbb] tracking-wide ">
            <b>DISCLAIMER:</b> The reports we publish at BlackRabbit is for
            research purposes only and not financial advice. Confirm information
            independently. Bitcoin and digital assets are risky—never invest
            more than youre willing to lose. Do your own research; this report
            is for education, not investment decisions. Not financial or
            investment advice. Any capital-related decisions you make are your
            full responsibility.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
