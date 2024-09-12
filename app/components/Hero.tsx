"use client";
import NavBar from "./NavBar";

function Hero() {
  return (
    <div className="bg-[#EAE9E9] h-screen">
      <NavBar></NavBar>
      <div className="h-screen md:max-w-[1280px] m-auto flex flex-col md:flex-row items-center justify-center">
        <div className="flex flex-col items-start justify-center h-screen gap-10">
          <h1 className="text-4xl md:text-8xl font-extrabold drop-shadow-lg">
            Furniture That Fits Your Life
          </h1>
          <div className="flex gap-4 ">
            <button className="rounded-full px-4 py-2 text-md md:text-xl font-bold bg-[#6A6A6A] text-white">
              Gallery
            </button>
            <button className="rounded-full px-4 py-2 text-md md:text-xl font-bold bg-none text-[#6A6A6A] border-2 border-[#6A6A6A]">
              Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
