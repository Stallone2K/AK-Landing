"use client";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Environment } from "@react-three/drei";
// import HeroImage from "../assets/HeroImage.jpg";
// import Chair from "./Chair";
import NavBar from "./NavBar";
import Image from "next/image";
import Chair from "../assets/Chair.png";
function Hero() {
  return (
    <div className="bg-[#EAE9E9] h-screen top-0">
      <NavBar></NavBar>
      <div className="h-screen max-w-[1280px] m-auto flex items-center justify-center">
        <div className="flex flex-col items-start justify-center h-screen gap-10">
          <h1 className="text-8xl font-extrabold drop-shadow-lg	">
            Furniture That Fits Your Life
          </h1>
          <div className="flex gap-4">
            <button className="rounded-full px-4 py-2 text-xl font-bold bg-[#6A6A6A] text-white">
              Gallery
            </button>
            <button className="rounded-full px-4 py-2 text-xl font-bold bg-none text-[#6A6A6A] border-2 border-[#6A6A6A]">
              Brochure
            </button>
          </div>
        </div>
        {/* <Canvas>
          <OrbitControls />
          <ambientLight intensity={1} />
          <spotLight
            position={[0, 25, 0]}
            angle={1.3}
            penumbra={1}
            castShadow
            intensity={2}
            shadow-bias={-0.0001}
          />
          <Environment preset="studio" />

          <Chair></Chair>
        </Canvas> */}
        <Image src={Chair} alt="Chair"></Image>
      </div>
    </div>
  );
}
export default Hero;
