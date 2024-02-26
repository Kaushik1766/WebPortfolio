'use client';
import Image from "next/image";
import { SparklesCore } from "./components/ui/sparkles";
import { FloatingNav } from "./components/ui/floatingNavbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import Navbar from "./components/Navbar";
import { MacbookScroll } from "./components/ui/macbook";
import Link from "next/link";
import { Boxes } from "./components/ui/backgroundBoxes";
import { cn } from "@/app/utils/cn";
import featuredProduct from './featuredProduct.jpg'
import { StickyScroll } from "./components/ui/stickyScrollReveal";
import { CardBody, CardContainer, CardItem } from "./components/ui/3dCard";
import { TextGenerateEffect } from "./components/ui/textGenerate";
import { CardStack } from "./components/ui/cardStack";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};
export default function Home() {
  const CARDS = [
    {
      id: 0,
      name: "Manu Arora",
      designation: "Senior Software Engineer",
      content: (
        <p>
          These cards are amazing, <Highlight>I want to use them</Highlight> in my
          project. Framer motion is a godsend ngl tbh fam 🙏
        </p>
      ),
    },
    {
      id: 1,
      name: "Elon Musk",
      designation: "Senior Shitposter",
      content: (
        <p>
          I dont like this Twitter thing,{" "}
          <Highlight>deleting it right away</Highlight> because yolo. Instead, I
          would like to call it <Highlight>X.com</Highlight> so that it can easily
          be confused with adult sites.
        </p>
      ),
    },
    {
      id: 2,
      name: "Tyler Durden",
      designation: "Manager Project Mayhem",
      content: (
        <p>
          The first rule of
          <Highlight>Fight Club</Highlight> is that you do not talk about fight
          club. The second rule of
          <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
          club.
        </p>
      ),
    },
  ];
  return (
    <>
      <Navbar />
      {/* brand name */}


      <div className="h-[60vh] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        <h1 className={cn("md:text-6xl text-xl font-bold text-white relative z-20")}>
          Brand Name
        </h1>
        <p className="text-center text-xl mt-2 text-neutral-300 relative z-20">
          Brand quote
        </p>
      </div>

      {/* work showcase */}
      <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
        <MacbookScroll
          title={
            <span>
              Featured Product <br />Product Description
            </span>
          }

          src={featuredProduct.src}
          showGradient={false}
        />
      </div>

      <div className="text-center text-4xl font-bold p-8">
        Our Products
      </div>

      {/* floating cards */}
      <div className="flex flex-col lg:flex-row w-full justify-evenly">
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Product Title
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Product Description
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={featuredProduct}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                View all →
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Product Title
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Product Description
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={featuredProduct}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                View all →
              </CardItem>

            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Product Title
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Product Description
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={featuredProduct}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                View all →
              </CardItem>

            </div>
          </CardBody>
        </CardContainer>
      </div>

      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className="text-5xl font-bold text-center m-5"> Our Testimonials</h1>
        <div className="w-full p-10 flex flex-col md:flex-row justify-evenly gap-4 items-center">
          <p className="text-xl w-full md:w-2/5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente porro veniam eveniet iusto. Libero saepe eveniet provident amet dolor ad, perspiciatis tenetur porro quidem rem deleniti, incidunt assumenda voluptas. Consequuntur!</p>
          <CardStack items={CARDS} />
        </div>
      </div>
      <div className="h-96"></div>
    </>

  );

}
