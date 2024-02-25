'use client';
import Image from "next/image";
import { SparklesCore } from "./components/ui/sparkles";
import { FloatingNav } from "./components/ui/floatingNavbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import Navbar from "./components/Navbar";
import { MacbookScroll } from "./components/ui/macbook";
import Link from "next/link";



export default function Home() {
  return (
    <>
      <Navbar />
      {/* brand name */}
      <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
          Brand Name
        </h1>
        <div className="w-[40rem] h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={.5}
            maxSize={2}
            particleDensity={1000}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
      {/* work showcase */}
      <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
        <MacbookScroll
          title={
            <span>
              Featured Product <br />Product Description
            </span>
          }

          src={`/linear.webp`}
          showGradient={false}
        />
      </div>
      <div className="h-96"></div>
    </>
  );

}
