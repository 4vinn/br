"use client";

import { getPlaneKeyframes } from "@/lib/getPlaneKeyframes";
import { getTrailsKeyframes } from "@/lib/getTrailsKeyframes";
import { gsap } from "gsap";
import { FormEvent, useRef, useState } from "react";

function Newsletter() {
  const [input, setInput] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [active, setActive] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { to, fromTo, set } = gsap;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = input;
    const button = buttonRef.current;

    if (!email || !button) return;

    if (!active) {
      setActive(true);
      to(button, {
        keyframes: getPlaneKeyframes(set, fromTo, button, setActive, setInput),
      });
      to(button, { keyframes: getTrailsKeyframes(button) });
    }

    // const res = await fetch("", {
    //   body: JSON.stringify({ email }),
    //   headers: { "" },
    //   method: "POST",
    // });
    // const data = await res.json();
  };

  return (
    <div className="flex flex-col space-y-8 md:w-[400px]">
      <form
        onSubmit={handleSubmit}
        className="newsletter-form mt-10 animate-fade-in-3"
      >
        <div className="group flex items-center gap-x-4 py-1 pl-4 pr-1 border rounded-[40px] shadow-outline-gray transition-all duration-300">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your email"
            required
            type="email"
            className="flex-1 text-black outline-none placeholder-lightgrey bg-transparent group-focus-within:placeholder-black "
          />
          <button
            ref={buttonRef}
            className={`${
              active && "active"
            } disabled:!bg-transparent disabled:grayscale-[65%] disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base`}
            disabled={!input}
            type="submit"
          >
            <span className="default">Subscribe</span>
            <span className="success">
              <svg viewBox="0 0 16 16">
                <polyline points="3.75 9 7 12 13 5"></polyline>
              </svg>
              Done
            </span>
            <svg className="trails" viewBox="0 0 33 64">
              <path d="M26,4 C28,13.3333333 29,22.6666667 29,32 C29,41.3333333 28,50.6666667 26,60"></path>
              <path d="M6,4 C8,13.3333333 9,22.6666667 9,32 C9,41.3333333 8,50.6666667 6,60"></path>
            </svg>
            <div className="plane">
              <div className="left"></div>
              <div className="right"></div>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Newsletter;
