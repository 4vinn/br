"use client";
import { Poppins } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import Typed from "typed.js";
import Newsletter from "@/components/Newsletter";
import Card from "@/components/Card";
import Newsletterr from "@/components/Newsletter";
import { useEffect, useRef } from "react";

// const Poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["DeFi.", "DePin.", "RWA.", "Gaming.", "BRC20.", "Ai."],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
      showCursor: true,
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <main>
      <div>
        {/* --------------------------Hero---------------------------- */}
        <div className="3d absolute ml-[68vw] mt-[43vh] z-10">
          <video autoPlay loop muted src="/coin.webm" width={90}></video>
        </div>
        <div className="3d absolute ml-[75vw] mt-[23vh] z-10">
          <video autoPlay loop muted src="/coin.webm" width={90}></video>
        </div>
        <div className="3d absolute ml-[82vw] mt-[43vh] z-10">
          <video autoPlay loop muted src="/coin.webm" width={90}></video>
        </div>
        <div className="bganimateR h-[120vh] w-[90vw] absolute -z-[1] right-[0]  -top-[4rem] overflow-hidden">
          <Image
            layout="responsive"
            src="https://architectpartners.com/wp-content/uploads/2022/11/Graphic-main-02.svg"
            alt="bg"
            className="w-[100vw] animate-rotate ml-[50vw] -mt-[10vh] -right-[30rem] "
            width={100}
            height={100}
          />
        </div>
        <div className="bganimateL h-[120vh] w-[90vw] absolute -z-[1] -left-[30rem] -top-[4rem] overflow-hidden -scale-x-[1]">
          <Image
            layout="responsive"
            src="https://architectpartners.com/wp-content/uploads/2022/11/Graphic-main-02.svg"
            alt="bg"
            className="w-[100vw] animate-rotate ml-[30vw] -mt-[10vh] -scale-x-[1]"
            width={100}
            height={100}
          />
        </div>
        {/* <div className="blob z-[-100] w-[65vw] h-[110vh] rounded-[999px] absolute top-0 right-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-blue-200 via-blue-100 to-indigo-100"></div>
        <div className="blob z-[-100] w-[75vw] h-[100vh] rounded-[999px] absolute bottom-0 left-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-blue-300 via-green-100 to-pink-200"></div> */}
        <div className="h-[90vh] w-[90vw] py-[8rem] flex justify-cente pl-[8vw] items-left flex-col text-left">
          <div className="logo absolute ml-[65vw] mt-[12vh] "></div>
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

          <a
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
          </a>
        </div>
        {/* --------------------------Newletter---------------------------- */}
        <div className="flex flex-col items-center">
          <h1 className="text-[black] text-[30px] mb-[15px] max-w-[900px] text-center">
            Get the BlackRabbit newsletter and understand the markets!
          </h1>
          <Newsletter />
        </div>
        {/* --------------------------Video---------------------------- */}
        <div className="flex justify-center flex-col items-center text-center py-8">
          <h1 className="text-[60px] mb-[30px] mt-[80px] ">OUR VISION</h1>
          <div className=" xs:w-[90vw] md:w-[80vw] lg:w-[60vw]">
            <iframe
              // width="960"
              // height="540"
              className="w-full aspect-video"
              loading="lazy"
              //       srcdoc="<style>
              //   * {
              //   padding: 0;
              //   margin: 0;
              //   overflow: hidden;
              //   }

              //   body, html {
              //     height: 100%;
              //   }

              //   img, svg {
              //     position: absolute;
              //     width: 100%;
              //     top: 0;
              //     bottom: 0;
              //     margin: auto;
              //   }

              //   svg {
              //     filter: drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%));
              //     transition: all 250ms ease-in-out;
              //   }

              //   body:hover svg {
              //     filter: drop-shadow(1px 1px 10px hsl(206.5, 0%, 10%));
              //     transform: scale(1.2);
              //   }
              // </style>

              // <a href='https://www.youtube.com/embed/dQw4w9WgXcQ?si=beUyA_jrSpSmuh7p?autoplay=1'>
              //   <img src='https://i.ytimg.com/vi/dQw4w9WgXcQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDRxusbm2_TGTnDWEIhBTYW2cUQkw' alt='youtube video'>
              //   <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24' fill='none' stroke='#ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-play-circle'><circle cx='12' cy='12' r='10'></circle><polygon points='10 8 16 12 10 16 10 8'></polygon></svg>
              // </a>
              // "
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

          <div className="container mx-auto  lg:px-10 py-10">
            <div className="grid grid-cols-3 h-full">
              <div className=" mx-3 lg:pr-10 lg:pl-10 text-left">
                <div className="group py-10 pb-3 mt-5 h-4/6 relative bg-black  hover:bg-[springgreen] hover:shadow-[0px_0px_110px_7.5px_rgb(0,248,56,.58)] hover:-translate-y-[1.5rem] cursor-pointer transition ease-out duration-300">
                  {/* <div className="image">
                    <Image
                      src="/logo11.png"
                      alt="logo"
                      width={80}
                      height={80}
                    />
                  </div> */}
                  <div className="px-7 mt-20">
                    <h1 className="text-3xl font-bold text-white group-hover:text-[#079007] transition ease-out duration-300">
                      01.
                    </h1>
                    <h2 className="text-1xl mt-4 font-bold uppercase text-white group-hover:text-[#079007] group-hover:ml-4 transition-all ease-out duration-300">
                      To educate.
                    </h2>
                    <p className="mt-2 opacity-60 text-white group-hover:text-black group-hover:opacity-80 ">
                      At BlackRabbit Research, we prioritize your journey to
                      knowledge. Explore the realm of digital assets with us and
                      master the art of crafting a robust, diversified portfolio
                      that stands the test of time.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" mx-3 lg:pr-10 lg:pl-10 text-left ">
                <div className="group py-10  pb-3 mt-32 h-4/6 relative bg-black  hover:bg-[#146ef5] hover:shadow-[0px_0px_110px_7.5px_rgba(21,115,255,0.6)] hover:-translate-y-[1.5rem] cursor-pointer transition ease-out duration-300">
                  {/* <div className="image">
                    <Image
                      src="https://i.ibb.co/JB4GWMJ/pngegg-1.png"
                      alt="https://www.pngegg.com/en/png-zquqj/download"
                      width={80}
                      height={80}
                    />
                  </div> */}
                  <div className="px-7 mt-20">
                    <h1 className="text-3xl font-bold text-white group-hover:text-[#0000dd] transition ease-out duration-300">
                      02.
                    </h1>
                    <h2 className="text-1xl mt-4 font-bold uppercase text-white group-hover:text-[#0000dd] group-hover:ml-4 transition-all ease-out duration-300">
                      Letting our winners run.
                    </h2>
                    <p className="mt-2  opacity-60 text-white group-hover:text-black group-hover:opacity-80 ">
                      Identifying excellence is just the beginning. We invest in
                      promising protocols, adopting a patient approach to
                      nurture their potential over time. Our strategy is simple:
                      buy, hold, and let success unfold.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" mx-3 lg:pr-10 lg:pl-10 text-left">
                <div className="group py-10 pb-3 mt-72 h-4/6 relative bg-black  hover:bg-[orangered] hover:shadow-[0px_0px_110px_8.5px_rgba(255,0,0,0.4)] hover:-translate-y-[1.5rem] cursor-pointer transition ease-out duration-300">
                  {/* <div className="image">
                    <Image
                      src="https://i.ibb.co/MgnH44p/pngegg-2.png"
                      alt="https://www.pngegg.com/en/png-epwii/download"
                      width={80}
                      height={80}
                    />
                  </div> */}
                  <div className="px-7 mt-20">
                    <h1 className="text-3xl font-bold text-white group-hover:text-[#bb0000] transition ease-out duration-300">
                      03.
                    </h1>
                    <h2 className="text-1xl mt-4 font-bold uppercase text-white group-hover:text-[#bb0000] group-hover:ml-4 transition-all ease-out duration-300">
                      We talk to you every day.
                    </h2>
                    <p className="mt-2 opacity-60 text-white group-hover:text-black group-hover:opacity-100 group-hover:opacity-80 ">
                      Your success is our priority. We keep you informed with
                      timely insights and guidance, ensuring you're prepared to
                      seize opportunities as they arise. With us, you're never
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
          <div className="flex flex-col m-auto w-[84vw] py-8 md:flex-row">
            <div className="w-full md:w-1/2">
              <div className="relative h-full ml-5 mr-5 sm:mr-5">
                <span className="absolute top-0 left-0 w-full h-full mt-2 ml-2 bg-indigo-400"></span>
                <div className="relative h-full p-5 bg-white border-2 border-indigo-400 hover:scale-[1.1] ease-out duration-300 group">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 group-hover:ml-0 text-lg font-bold text-gray-800 group-hover:text-indigo-400 transition-all ease-out duration-300">
                      Asset Allocation
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-left text-xs font-medium text-indigo-400 uppercase group-hover:ml-[10rem] transition-all ease-out duration-300">
                    ------------
                  </p>
                  <p className="mb-2 text-left text-gray-800">
                    We choose the best mix of large, small, and mid cap
                    investment assets for the verticals we are tracking.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative h-full ml-5 mr-5 sm:mr-5">
                <span className="absolute top-0 left-0 w-full h-full mt-2 ml-2 bg-red-400"></span>
                <div className="relative h-full p-5 bg-white border-2 border-red-400 hover:scale-[1.1] ease-out duration-300 group">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 group-hover:ml-0 text-lg font-bold text-gray-800 group-hover:text-red-400 transition-all ease-out duration-300">
                      Analysts
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-left text-xs font-medium text-red-400 uppercase group-hover:ml-[10rem] transition-all ease-out duration-300">
                    ------------
                  </p>
                  <p className="mb-2 text-left text-gray-800">
                    Our specialized analysts possess expertise across various
                    web3 sectors, with a proven five-year history of empowering
                    investors in leveraging the potential of crypto.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative h-full ml-5 mr-5 sm:mr-5">
                <span className="absolute top-0 left-0 w-full h-full mt-2 ml-2 bg-[springgreen]"></span>
                <div className="relative h-full p-5 bg-white border-2 border-[springgreen] hover:scale-[1.05] ease-out duration-300 group">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 group-hover:ml-0 text-lg font-bold text-gray-800 group-hover:text-[springgreen] transition-all ease-out duration-300">
                      10X Your decision making
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-left text-xs font-medium text-[springgreen] uppercase group-hover:ml-[10rem] transition-all ease-out duration-300">
                    ------------
                  </p>
                  <p className="mb-2 text-left text-gray-800">
                    We bring together everything that the most ambitious crypto
                    investors and teams need to make critical decisions. We
                    synthesise the best data and craft insights.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative h-full ml-5 mr-5 sm:mr-5">
                <span className="absolute top-0 left-0 w-full h-full mt-2 ml-2 bg-blue-600"></span>
                <div className="relative h-full p-5 bg-white border-2 border-blue-600 hover:scale-[1.05] ease-out duration-300 group">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 group-hover:ml-0 text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-all ease-out duration-300">
                      Macro & Micro
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-left text-xs font-medium text-blue-600 uppercase group-hover:ml-[10rem] transition-all ease-out duration-300">
                    ------------
                  </p>
                  <p className="mb-2 text-left text-gray-800">
                    We analyze both macro and micro aspects of crypto,
                    connecting data to the broader context for a comprehensive
                    understanding of the digital asset landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
            <Card
              imageUrl="https://assets-global.website-files.com/5f73bbd13fa8b95aedaf300b/64be76e1302ddd7fd8272a56_What%20to%20Watch%20in%20AI%203-p-800.jpeg"
              author="John Doe"
              date="February 3, 2024"
              tag="Technology"
              title="Report 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />

            <Card
              imageUrl="https://assets-global.website-files.com/5f73bbd13fa8b95aedaf300b/64be76e1302ddd7fd8272a56_What%20to%20Watch%20in%20AI%203-p-800.jpeg"
              author="John Doe"
              date="February 3, 2024"
              tag="Technology"
              title="Report 2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />

            <Card
              imageUrl="https://assets-global.website-files.com/5f73bbd13fa8b95aedaf300b/64be76e1302ddd7fd8272a56_What%20to%20Watch%20in%20AI%203-p-800.jpeg"
              author="John Doe"
              date="February 3, 2024"
              tag="Technology"
              title="Report 3"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />

            <Card
              imageUrl="https://assets-global.website-files.com/5f73bbd13fa8b95aedaf300b/64be76e1302ddd7fd8272a56_What%20to%20Watch%20in%20AI%203-p-800.jpeg"
              author="John Doe"
              date="February 3, 2024"
              tag="Technology"
              title="Report 4"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
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
            <Card
              imageUrl="https://assets-global.website-files.com/5f73bbd13fa8b95aedaf300b/64be76e1302ddd7fd8272a56_What%20to%20Watch%20in%20AI%203-p-800.jpeg"
              author="John Doe"
              date="February 3, 2024"
              tag="Technology"
              title="Blog 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />

            <Card
              imageUrl="https://assets-global.website-files.com/5f73bbd13fa8b95aedaf300b/64be76e1302ddd7fd8272a56_What%20to%20Watch%20in%20AI%203-p-800.jpeg"
              author="John Doe"
              date="February 3, 2024"
              tag="Technology"
              title="Blog 2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />

            <Card
              imageUrl="https://assets-global.website-files.com/5f73bbd13fa8b95aedaf300b/64be76e1302ddd7fd8272a56_What%20to%20Watch%20in%20AI%203-p-800.jpeg"
              author="John Doe"
              date="February 3, 2024"
              tag="Technology"
              title="Blog 3"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />

            <Card
              imageUrl="https://assets-global.website-files.com/5f73bbd13fa8b95aedaf300b/64be76e1302ddd7fd8272a56_What%20to%20Watch%20in%20AI%203-p-800.jpeg"
              author="John Doe"
              date="February 3, 2024"
              tag="Technology"
              title="Blog 4"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>
        </div>
      </div>
    </main>
  );
}
