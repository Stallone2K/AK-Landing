import React from "react";
import NavBar from "../components/NavBar";
function About() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="flex justify-center items-center h-screen max-w-[1280px] m-auto">
        <h1 className="text-8xl font-extrabold drop-shadow-lg">About</h1>
      </div>
    </div>
  );
}

export default About;
