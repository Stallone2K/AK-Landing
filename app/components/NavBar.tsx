import { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-center h-10 p-10 top-0">
      <div className="gap-6 font-bold lg:flex hidden">
        <h3 className="hover:text-slate-500 hover:underline cursor-pointer">
          Home
        </h3>
        <h3 className="hover:text-slate-500 hover:underline cursor-pointer">
          About
        </h3>
        <h3 className="hover:text-slate-500 hover:underline cursor-pointer">
          Career
        </h3>
        <h3 className="hover:text-slate-500 hover:underline cursor-pointer">
          Gallery
        </h3>
        <h3 className="hover:text-slate-500 hover:underline cursor-pointer">
          Contact Us
        </h3>
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
          <h3 className="hover:text-slate-500 hover:underline cursor-pointer">
            Home
          </h3>
          <h3 className="hover:text-slate-500 hover:underline cursor-pointer">
            About
          </h3>
          <h3 className="hover:text-slate-500 hover:underline cursor-pointer">
            Career
          </h3>
          <h3 className="hover:text-slate-500 hover:underline cursor-pointer">
            Gallery
          </h3>
          <h3 className="hover:text-slate-500 hover:underline cursor-pointer">
            Contact Us
          </h3>
        </div>
      )}
    </div>
  );
}

export default NavBar;
