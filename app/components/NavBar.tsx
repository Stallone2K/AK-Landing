"use client";
import { useState } from "react";
import Link from "next/link";
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="z-10 flex items-center justify-center p-10 top-0">
      <div className="gap-6 font-bold lg:flex hidden">
        <Link
          href="/"
          className="hover:text-slate-500 hover:underline cursor-pointer"
        >
          Home
        </Link>
        <Link
          href="/About"
          className="hover:text-slate-500 hover:underline cursor-pointer"
        >
          About
        </Link>
        <Link
          href="/Career"
          className="hover:text-slate-500 hover:underline cursor-pointer"
        >
          Career
        </Link>
        <Link
          href="/Gallery"
          className="hover:text-slate-500 hover:underline cursor-pointer"
        >
          Gallery
        </Link>
        <Link
          href="/Contact"
          className="hover:text-slate-500 hover:underline cursor-pointer"
        >
          Contact Us
        </Link>
      </div>
      <button
        className="lg:hidden flex flex-col justify-center w-8 h-8 bg-gray-200 rounded hover:bg-gray-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="block w-5 h-0.5 bg-black rounded-full"></span>
        <span className="block w-5 h-0.5 bg-black rounded-full mt-1"></span>
        <span className="block w-5 h-0.5 bg-black rounded-full mt-1"></span>
      </button>
      {isOpen && (
        <div className="lg:hidden flex flex-col gap-6 font-bold absolute top-10 right-0 bg-white p-4 rounded shadow-md">
          <Link
            href="/"
            className="hover:text-slate-500 hover:underline cursor-pointer"
          >
            Home
          </Link>
          <Link
            href="/About"
            className="hover:text-slate-500 hover:underline cursor-pointer"
          >
            About
          </Link>
          <Link
            href="/Career"
            className="hover:text-slate-500 hover:underline cursor-pointer"
          >
            Career
          </Link>
          <Link
            href="/Gallery"
            className="hover:text-slate-500 hover:underline cursor-pointer"
          >
            Gallery
          </Link>
          <Link
            href="/Contact"
            className="hover:text-slate-500 hover:underline cursor-pointer"
          >
            Contact Us
          </Link>
        </div>
      )}
    </div>
  );
}

export default NavBar;
