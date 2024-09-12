"use client";
import Image from "next/image";
import First from "../assets/First.png";
import Second from "../assets/Second.png";
import Third from "../assets/Third.png";
import Fourth from "../assets/Fourth.png";
import Fifth from "../assets/Fifth.png";
import Sixth from "../assets/Sixth.png";
import { useState } from "react";

function New() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNavigation = (direction: "next" | "prev") => {
    if (direction === "next") {
      setCurrentIndex((currentIndex + 1) % 6);
    } else if (direction === "prev") {
      setCurrentIndex((currentIndex - 1 + 6) % 6);
    }
  };

  return (
    <div className="h-screen max-w-[1280px] m-auto flex justify-center items-center gap-5">
      <div className="w-1/2 flex items-start justify-center flex-col gap-5">
        <h1 className="text-7xl font-extrabold drop-shadow-lg">
          New In Store Now
        </h1>
        <p className="font-semibold text-gray-400">
          Get The Latest Designs With Best Prices
        </p>

        <p className="underline font-bold flex justify-center items-center gap-2">
          Check All
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="16"
            viewBox="0 0 22 16"
            fill="none"
          >
            <path
              d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM21.7071 8.70711C22.0976 8.31658 22.0976 7.68342 21.7071 7.29289L15.3431 0.928932C14.9526 0.538408 14.3195 0.538408 13.9289 0.928932C13.5384 1.31946 13.5384 1.95262 13.9289 2.34315L19.5858 8L13.9289 13.6569C13.5384 14.0474 13.5384 14.6805 13.9289 15.0711C14.3195 15.4616 14.9526 15.4616 15.3431 15.0711L21.7071 8.70711ZM1 9H21V7H1V9Z"
              fill="#23262F"
            />
          </svg>
        </p>
      </div>

      <div className="flex gap-4">
        {[First, Second, Third, Fourth, Fifth, Sixth].map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={`${
              index === currentIndex || index === (currentIndex + 1) % 6
                ? "block"
                : "hidden"
            }`}
          />
        ))}
      </div>
      <button
        className="font-bold py-2 px-4 rounded m-2"
        onClick={() => handleNavigation("next")}
      >
        <svg
          fill="#000000"
          width="50px"
          height="800px"
          viewBox="-8.5 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>next</title>
          <path d="M0 24.781v-17.594l15.281 8.813z"></path>
        </svg>
      </button>
    </div>
  );
}

export default New;
