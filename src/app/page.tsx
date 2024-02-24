"use client";
import Link from "next/link";
import Image from "next/image";
import Typed from "typed.js";
import Newsletter from "../components/Newsletter";
import Card from "../components/Card";
import React, { MouseEvent, useEffect, useRef, useState } from "react";
import Sectors from "@/components/Sectors";
import dynamic from "next/dynamic";
import axios from "axios";
export default function Home() {
  const el = useRef(null);
  const [recentBlogs, setRecentBlogs] = useState<any>([]);
  const [recentReports, setRecentReports] = useState<any>([]);

  const fetchData = async (is_report: boolean) => {
    try {
      const response = await axios.post("/api/blog", {
        is_report: is_report,
        recent: true,
      });
      if (response.data.code === 0) {
        if (is_report) {
          setRecentReports(response.data.data);
        } else {
          setRecentBlogs(response.data.data);
        }
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["DeFi.", "DePin.", "RWA.", "Gaming.", "BRC20.", "AI."],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
      showCursor: true,
    });

    fetchData(true);
    fetchData(false);

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);

  const Earth = dynamic(() => import("@/components/Earth"), {
    ssr: false,
    loading: () => <Image src="/as.png" alt="earth" width={300} height={300} />,
  });

  return (
    <main>
      <div>
        {/* --------------------------Hero---------------------------- */}

        <div className="3d absolute ml-[65vw] mt-[10vh] z-10 w-[28rem] h-[28rem]">
          <Earth />
        </div>
        <div className="bganimateR h-[120vh] w-[90vw] absolute -z-[1] right-[0] -top-[4rem] overflow-hidden">
          <Image
            // layout="responsive"
            src="/Graphic.svg"
            alt="bg"
            className="w-[100vw] animate-rotate ml-[50vw] -mt-[10vh] -right-[30rem] "
            width={100}
            height={100}
          />
        </div>
        <div className="bganimateL h-[120vh] w-[90vw] absolute -z-[1] -left-[30rem] -top-[4rem] overflow-hidden -scale-x-[1]">
          <Image
            // layout="responsive"
            src="/Graphic.svg"
            alt="bg"
            className="w-[100vw] animate-rotate ml-[30vw] -mt-[10vh] -scale-x-[1]"
            width={100}
            height={100}
          />
        </div>
        {/* <div className="blob z-[-100] w-[65vw] h-[110vh] rounded-[999px] absolute top-0 right-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-blue-200 via-blue-100 to-indigo-100"></div>
        <div className="blob z-[-100] w-[75vw] h-[100vh] rounded-[999px] absolute bottom-0 left-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-blue-300 via-green-100 to-pink-200"></div> */}
        <div className="h-[90vh] w-[90vw] py-[8rem] flex justify-cente pl-[8vw] items-left flex-col text-left">
          <h2 className="text-[30px] sm:text-[40px] md:text-[60px] font-bold ">
            We operate at the
          </h2>

          <h2 className="text-[30px] sm:text-[50px] md:text-[70px] font-bold pb-[2rem] animate-title">
            forefront of <span ref={el} className="text-[#edc460]"></span>
          </h2>
          <p className=" text-[gray] pb-[.5rem] font-bold">
            Your trusted digital asset partner to help you tackle challenges,
            make bold moves, and bring big ideas to life.
          </p>
          <p className="text-[gray] pb-[3.5rem] max-w-[900px]">
            Delivering simplified actional insights in the digital asset space
            requires relentless research and focus. Blackrabbit collects,
            organizes, and provides valuable information and insights to
            long-term investors.
          </p>

          <Link
            href="/about"
            className="relative w-[8rem] inline-flex items-center justify-center  px-5 py-6 overflow-hidden font-medium transition duration-300 ease-out border-2 border-black rounded-full shadow-md group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full duration-300 -translate-x-full bg-transparent group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="black"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-white bg-black transition-all duration-300 transform group-hover:translate-x-full ease">
              Learn More
            </span>
          </Link>
        </div>
        {/* --------------------------Newletter---------------------------- */}
        <div className="flex flex-col items-center bg-black w-[83vw] mx-auto py-20 px-20 rounded-[1.5rem]">
          <h1 className="text-white text-[30px] mb-[15px] max-w-[900px] text-center">
            Get the BlackRabbit newsletter and understand the markets!
          </h1>
          <Newsletter />
        </div>
        {/* --------------------------Video---------------------------- */}
        <div className="flex justify-center flex-col items-center text-center py-8">
          <h1 className="text-[60px] mb-[30px] mt-[80px] ">OUR VISION</h1>
          <div className="absolute -z-10 h-[50vh] w-full overflow-hidden opacity-[0.09]">
            <Image
              src="/whirl.svg"
              fill
              className="scaleAnimation absolute object-cover w-full overflow-visible"
              alt="Background Whirl"
            />
          </div>
          <div className=" sm:w-[90vw] md:w-[80vw] lg:w-[50vw]">
            <iframe
              // width="960"
              // height="540"
              className="w-full aspect-video"
              loading="lazy"
              srcDoc="<style>
                * {
                padding: 0;
                margin: 0;
                overflow: hidden;
                }

                body, html {
                  height: 100%;
                }

                img, svg {
                  position: absolute;
                  width: 100%;
                  top: 0;
                  bottom: 0;
                  margin: auto;
                  border-radius: 2rem;
                }

                svg {
                  filter: drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%));
                  transition: all 250ms ease-in-out;
                }

                body:hover svg {
                  filter: drop-shadow(1px 1px 10px hsl(206.5, 0%, 10%));
                  transform: scale(1.2);
                }
              </style>

              <a href='https://www.youtube.com/embed/dQw4w9WgXcQ?si=beUyA_jrSpSmuh7p?autoplay=1'>
                <img src='https://i.ytimg.com/vi/dQw4w9WgXcQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDRxusbm2_TGTnDWEIhBTYW2cUQkw' alt='youtube video'>
                <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24' fill='none' stroke='#ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-play-circle'><circle cx='12' cy='12' r='10'></circle><polygon points='10 8 16 12 10 16 10 8'></polygon></svg>
              </a>
              "
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=beUyA_jrSpSmuh7p"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
          <span className="py-[2rem] text-[1.2rem] xs:w-[10vw] md:w-[80vw] lg:w-[60vw]">
            With BlackRabbit, you stay ahead of the market at your very best,
            every day. With us, you drive growth and achieve more. With us, you
            can make informed decisions.
          </span>
        </div>
        {/* --------------------------promise---------------------------- */}
        <div className="flex justify-center flex-col items-center text-center py-8">
          <div className="w-[84vw] flex justify-between border-b-[2px]">
            <h1 className="text-[2.5rem]">OUR PROMISE TO YOU</h1>
          </div>

          <div className="w-[84vw] mx-auto  lg:px-1 py-10">
            <div className="grid  lg:grid-cols-3 h-full gap-6 ">
              <div className="text-left">
                <div className="group h-full py-3 bg-black hover:bg-[#3F7575]  hover:-translate-y-[1rem] rounded-[1rem] transition ease-out duration-300">
                  <div className="image px-[1rem] mt-6 group-hover:px-[2rem] fill-white group-hover:fill-[#D0FF5F] transition-all ease-out duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="80px"
                      height="80px"
                      viewBox="0 0 1024 1024"
                      // fill="#000000"
                      id="icon"
                      version="1.1"
                    >
                      <path d="M513.147 584.708c-15.947 0-39.468-1.747-61.040-10.031l-172.596-66.501h-84.542v103.565c0 31.84 23.684 67.975 52.884 80.663l208.987 90.967c29.2 12.688 76.605 12.743 105.841 0.127l211.263-91.222c29.218-12.615 52.921-48.697 52.921-80.537v-103.565h-93.298l-152.954 64.48c-18.386 7.773-42.38 12.051-67.466 12.051zM46.313 372.991l416.19 160.363c29.728 11.433 77.605 10.686 106.951-1.693l397.458-167.536v247.18l-24.558 81.938h71.015l-25.413-82.794v-256.319h-0.71c17.167-11.833 13.162-26.596-12.252-35.681l-404.357-143.888c-30.001-10.704-78.479-10.25-108.299 0.946l-415.844 156.449c-29.819 11.214-29.891 29.6-0.182 41.033z" />
                    </svg>
                  </div>
                  <div className="px-7 mt-6">
                    <h1 className="text-2xl font-bold text-[#e8e8e8] group-hover:text-[#D0FF5F] transition ease-out duration-300">
                      01.
                    </h1>
                    <h2 className="text-1xl mt-4 font-bold uppercase text-[#e8e8e8] group-hover:text-[#D0FF5F] group-hover:ml-4 transition-all ease-out duration-300">
                      To educate.
                    </h2>
                    <p className="my-6  text-[#e1e1e1] opacity-[0.7] group-hover:text-[#D0FF5F]  ">
                      At BlackRabbit Research, we prioritize your journey to
                      knowledge. Explore the realm of digital assets with us and
                      master the art of crafting a robust, diversified portfolio
                      that stands the test of time.
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-left ">
                <div className="group h-full py-3  bg-black  hover:bg-[#0053F5]  hover:-translate-y-[1rem] rounded-[1rem] cursor-default transition ease-out duration-300">
                  <div className="image px-[1rem] mt-6 group-hover:px-[2rem] fill-white group-hover:fill-[#D7C5AF] transition-all ease-out duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      id="Capa_1"
                      width="80px"
                      height="80px"
                      viewBox="0 0 440 440"
                    >
                      <g>
                        <g>
                          <path d="M390.06,362.087h-98.135v-7.937c6.968-4.521,11.397-12.33,11.397-21.01c0-13.82-11.245-25.063-25.067-25.063h-23.63    c5.48-2.007,9.062-7.575,8.311-13.615L248.684,180.32c3.088-4.218,4.985-9.223,4.985-14.816l0.019-71.041    c29.055-11.022,66.911-39.934,71.65-43.6c4.649-3.597,5.502-10.28,1.907-14.929c-3.597-4.648-10.281-5.502-14.93-1.908    c-12.146,9.391-45.337,32.976-67.113,40.899c-0.644-0.299-8.17-3.79-10.636-4.933l-4.719-3.978    c-0.326-0.275-0.802-0.254-1.104,0.045l-7.477,7.437c-0.302,0.31-0.219,0.752-0.219,0.752l1.131,7.098l7.041,50.766    c0.053,0.374-0.054,0.752-0.293,1.043l-7.882,9.632c-0.255,0.314-0.64,0.496-1.047,0.496c-0.406,0-0.791-0.182-1.048-0.496    l-7.88-9.632c-0.241-0.291-0.346-0.669-0.293-1.043l5.509-39.708l2.877-18.083c0,0,0.097-0.532-0.206-0.823l-7.478-7.438    c-0.145-0.147-0.338-0.226-0.532-0.236c-0.005-0.001-0.005-0.005-0.005-0.009l-0.012,0.009c-0.196-0.005-0.393,0.057-0.556,0.191    l-4.675,3.944c-2.391,1.093-9.996,4.57-10.873,4.978c-21.775-7.911-54.994-31.516-67.146-40.911    c-4.65-3.595-11.335-2.741-14.929,1.908c-3.596,4.648-2.742,11.332,1.906,14.929c4.739,3.666,42.595,32.576,71.647,43.6    l0.02,71.041c0,5.594,1.899,10.599,4.986,14.816l-14.248,114.143c-0.751,6.04,2.829,11.607,8.311,13.615H161.74    c-13.821,0-25.067,11.244-25.067,25.062c0,8.682,4.43,16.49,11.397,21.01v7.938H49.938c-13.821,0-25.067,11.244-25.067,25.065    c0,8.493,4.321,17.411,11.397,21.896V440h20.13v-45.26c0,0-11.397-1.006-11.397-7.588c0-2.723,2.215-4.937,4.938-4.937h118.265    V341.25c0,0-11.398-3.1-11.398-8.107c0-2.721,2.217-4.933,4.938-4.933h116.512c2.722,0,4.938,2.212,4.938,4.933    c0,5.008-11.399,8.107-11.399,8.107v40.968h118.267c2.723,0,4.938,2.214,4.938,4.937c0,6.582-11.398,7.588-11.398,7.588V440    h20.132v-30.95c7.074-4.485,11.396-13.403,11.396-21.896C415.127,373.332,403.881,362.087,390.06,362.087z M194.197,308.078    c4.36-1.602,7.697-5.514,8.313-10.438l12.912-103.438c1.537,0.216,3.067,0.329,4.574,0.329c1.508,0,3.04-0.113,4.579-0.329    l12.913,103.438c0.615,4.926,3.953,8.836,8.314,10.438H194.197z" />
                          <path d="M227.531,360.58h-4.004c-0.786,0-1.562,0.193-2.256,0.566l-11.061,5.92c-1.938,1.036-2.92,3.263-2.38,5.394l0.37,1.459    c0.362,1.429,1.364,2.61,2.713,3.204c1.35,0.593,2.897,0.53,4.195-0.172l4.495-2.425v43.313c0,2.643,2.142,4.783,4.784,4.783    h3.144c2.641,0,4.782-2.142,4.782-4.783v-52.478C232.312,362.72,230.172,360.58,227.531,360.58z" />
                          <path d="M219.996,65.815c15.57,0,27.188-14.506,27.453-38.832C247.617,10.101,239.58,0,219.996,0    c-19.581,0-27.62,10.101-27.449,26.982C192.811,51.309,204.427,65.815,219.996,65.815z" />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="px-7 mt-6">
                    <h1 className="text-2xl font-bold text-[#e8e8e8] group-hover:text-[#D7C5AF]  transition ease-out duration-300">
                      02.
                    </h1>
                    <h2 className="text-1xl mt-4 font-bold uppercase text-[#e8e8e8] group-hover:text-[#D7C5AF] group-hover:ml-4 transition-all ease-out duration-300">
                      Letting our winners run.
                    </h2>
                    <p className="my-6  text-[#e1e1e1] opacity-[0.7] group-hover:text-[#D7C5AF] ">
                      Identifying excellence is just the beginning. We invest in
                      promising protocols, adopting a patient approach to
                      nurture their potential over time. Our strategy is simple:
                      buy, hold, and let success unfold.
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-left">
                <div className="group py-3 bg-black  hover:bg-[#9848FF]  hover:-translate-y-[1rem] rounded-[1rem] cursor-default transition ease-out duration-300">
                  <div className="image px-[1rem] mt-6 group-hover:px-[2rem] fill-white group-hover:fill-[#CFD7FF] transition-all ease-out duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      id="_x31_"
                      width="80px"
                      height="80px"
                      viewBox="0 0 128 128"
                    >
                      <g>
                        <ellipse
                          transform="matrix(0.9659 -0.2588 0.2588 0.9659 -11.3148 8.9075)"
                          cx="28.2"
                          cy="47.4"
                          rx="7.8"
                          ry="7.8"
                        />
                        <path d="M37.4,97.5h-9.5c0,0-0.5,0-0.9,0c-4.3-0.4-8-3.5-9.1-7.8l-6.5-24.2c-0.4-1.4-1.8-2.1-3-1.8c-1.4,0.4-2.1,1.8-1.8,3   l6.4,24.2c1.7,6.3,7,10.9,13.5,11.4c0.6,0.1,1.3,0.1,1.3,0.1h9.5c1.4,0,2.4-1.1,2.5-2.5C39.8,98.5,38.8,97.5,37.4,97.5z" />
                        <path d="M48.6,83.9h-13c-0.3-4.9-1.1-9.8-2.3-14.7c-0.1-0.4-0.4-1.4-0.4-1.5c-1.7-6.3-7.7-10.3-14-9.7c0,0-0.8,0.1-1,0.1   c-2.3,0.6-3.7,3-3.1,5.4l6.7,24.9c0.7,2.8,3.1,4.9,6.1,5.1h0.6h15.5v17.8c0,2.7,2.1,4.9,4.9,4.9c2.7,0,4.9-2.1,4.9-4.9V88.8   c0-1.3-0.5-2.5-1.5-3.4C51.1,84.4,49.8,83.9,48.6,83.9z" />
                      </g>
                      <g>
                        <ellipse
                          transform="matrix(0.2588 -0.9659 0.9659 0.2588 29.3697 133.1303)"
                          cx="101.4"
                          cy="47.4"
                          rx="7.8"
                          ry="7.8"
                        />
                        <path d="M90.2,97.5h9.5c0,0,0.5,0,0.9,0c4.3-0.4,8-3.5,9.1-7.8l6.5-24.2c0.4-1.4,1.8-2.1,3-1.8c1.4,0.4,2.1,1.8,1.8,3l-6.4,24.2   c-1.7,6.3-7,10.9-13.5,11.4c-0.6,0.1-1.3,0.1-1.3,0.1h-9.5c-1.4,0-2.4-1.1-2.5-2.5C87.8,98.5,88.9,97.5,90.2,97.5z" />
                        <path d="M79,83.9h13c0.3-4.9,1.1-9.8,2.3-14.7c0.1-0.4,0.4-1.4,0.4-1.5c1.7-6.3,7.7-10.3,14-9.7c0,0,0.8,0.1,1,0.1   c2.3,0.6,3.7,3,3.1,5.4L106,88.4c-0.7,2.8-3.1,4.9-6.1,5.1h-0.6H83.9v17.8c0,2.7-2.1,4.9-4.9,4.9s-4.9-2.1-4.9-4.9V88.8   c0-1.3,0.5-2.5,1.5-3.4C76.5,84.4,77.8,83.9,79,83.9z" />
                      </g>
                      <rect x="38.8" y="70.8" width="50.6" height="6" />
                    </svg>
                  </div>
                  <div className="px-7 mt-6">
                    <h1 className="text-2xl font-bold text-[#e8e8e8] group-hover:text-[#CFD7FF]  transition ease-out duration-300">
                      03.
                    </h1>
                    <h2 className="text-1xl mt-4 font-bold uppercase text-[#e8e8e8] group-hover:text-[#CFD7FF] group-hover:ml-4 transition-all ease-out duration-300">
                      We talk to you every day.
                    </h2>
                    <p className="my-6  text-[#e1e1e1] opacity-[0.8] group-hover:text-[#CFD7FF] ">
                      Your success is our priority. We keep you informed with
                      timely insights and guidance, ensuring youre prepared to
                      seize opportunities as they arise. With us, youre never
                      alone on your investment journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* --------------------------why br---------------------------- */}
        <div className="flex justify-center flex-col items-center text-center py-8">
          <div className="w-[84vw] flex justify-between border-b-[2px]">
            <h1 className="text-[2.5rem]">WHY CHOOSE BLACKRABBIT?</h1>
          </div>
          <div className="w-[84vw] p-8 gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
            <div className="w-full ">
              <div className="relative h-full">
                <span className="absolute top-0 left-0 w-full h-full mt-2 ml-2 bg-black rounded-[2rem]"></span>
                <div className="group relative h-full p-5 bg-white border-2 border-black hover:border-indigo-400 hover:scale-[1.07] ease-out duration-300 rounded-[2rem] ">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 group-hover:ml-0 text-lg font-bold text-gray-800 group-hover:text-indigo-400 transition-all ease-out duration-300">
                      Asset Allocation
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-left text-xs font-medium text-black group-hover:text-indigo-400 uppercase group-hover:ml-[10rem] transition-all ease-out duration-300">
                    ───────
                  </p>
                  <p className="mb-2 text-left text-gray-800 group-hover:text-indigo-600">
                    We choose the best mix of large, small, and mid cap
                    investment assets for the verticals we are tracking.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full ">
              <div className="relative h-full">
                <span className="absolute top-0 left-0 w-full h-full mt-2 ml-2 bg-black rounded-[2rem]"></span>
                <div className="relative h-full p-5 bg-white border-2 border-black hover:border-red-400 hover:scale-[1.07] ease-out duration-300 group rounded-[2rem]">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 group-hover:ml-0 text-lg font-bold text-gray-800 group-hover:text-red-400 transition-all ease-out duration-300">
                      Analysts
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-left text-xs font-medium text-black group-hover:text-red-400 uppercase group-hover:ml-[10rem] transition-all ease-out duration-300">
                    ───────
                  </p>
                  <p className="mb-2 text-left text-gray-800 group-hover:text-red-400">
                    Our specialized analysts possess expertise across various
                    web3 sectors, with a proven five-year history of empowering
                    investors in leveraging the potential of crypto.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full ">
              <div className="relative h-full">
                <span className="absolute top-0 left-0 w-full h-full mt-2 ml-2 bg-black rounded-[2rem]"></span>
                <div className="relative h-full p-5 bg-white border-2 border-black hover:border-[springgreen] hover:scale-[1.07] ease-out duration-300 group rounded-[2rem]">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 group-hover:ml-0 text-lg font-bold text-gray-800 group-hover:text-[springgreen] transition-all ease-out duration-300">
                      10X Your decision making
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-left text-xs font-medium text-black group-hover:text-[springgreen] uppercase group-hover:ml-[10rem] transition-all ease-out duration-300">
                    ───────
                  </p>
                  <p className="mb-2 text-left text-gray-800 group-hover:text-green-400">
                    We bring together everything that the most ambitious crypto
                    investors and teams need to make critical decisions. We
                    synthesise the best data and craft insights.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full ">
              <div className="relative h-full">
                <span className="absolute top-0 left-0 w-full h-full mt-2 ml-2 bg-black rounded-[2rem]"></span>
                <div className="relative h-full p-5 bg-white border-2 border-black hover:border-blue-600 hover:scale-[1.07] ease-out duration-300 group rounded-[2rem]">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 group-hover:ml-0 text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-all ease-out duration-300">
                      Macro & Micro
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-left text-xs font-medium text-black group-hover:text-blue-600 uppercase group-hover:ml-[10rem] transition-all ease-out duration-300">
                    ───────
                  </p>
                  <p className="mb-2 text-left text-gray-800 group-hover:text-blue-600">
                    We analyze both macro and micro aspects of crypto,
                    connecting data to the broader context for a comprehensive
                    understanding of the digital asset landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* --------------------------sectors---------------------------- */}
        <div className="w-[84vw] m-auto py-8">
          <div className="w-[84vw] flex justify-between border-b-[2px]">
            <h1 className="text-[2.5rem]">WHAT SECTORS WE TRACK? </h1>
          </div>
          <Sectors />
        </div>
        {/* --------------------------reports---------------------------- */}
        <div className="flex justify-center flex-col items-center text-center py-8">
          <div className="w-[84vw] flex justify-between items-end border-b-[2px]">
            <h1 className="text-[2.5rem]">INSIGHTS FOR REPORTS</h1>
            <Link
              href="/reports"
              className="relative w-[6rem] inline-flex items-center justify-center  px-5 py-5 overflow-hidden font-medium transition duration-300 ease-out border-2 border-black shadow-md group"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full duration-300 -translate-x-full bg-transparent group-hover:translate-x-0 ease">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="black"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-white bg-black transition-all duration-300 transform group-hover:translate-x-full ease">
                View All
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {recentReports.map((item: any) => {
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
          <div>
            {recentReports.length === 0 && (
              <div className="text-xl font-semibold w-fit">
                You will soon get the reports live here...
              </div>
            )}
          </div>
        </div>
        {/* --------------------------blogs---------------------------- */}
        <div className="flex justify-center flex-col items-center text-center pb-[4rem]">
          <div className="w-[84vw] flex justify-between items-end border-b-[2px]">
            <h1 className="text-[2.5rem]">DIGEST FOR BLOGS</h1>
            <Link
              href="/blogs"
              className="relative w-[6rem] inline-flex items-center justify-center  px-5 py-5 overflow-hidden font-medium transition duration-300 ease-out border-2 border-black shadow-md group"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full duration-300 -translate-x-full bg-transparent group-hover:translate-x-0 ease">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="black"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-white bg-black transition-all duration-300 transform group-hover:translate-x-full ease">
                View All
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {recentBlogs.map((item: any) => {
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
          <div>
            {recentBlogs.length === 0 && (
              <div className="text-xl font-semibold w-fit">
                You will soon get the blogs live here...
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
