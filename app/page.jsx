"use client";
import Link from "next/link";
import Navbar from "./components/navbar/Navbar";
import Hamburger from "./components/navbar/Hamburger";
import ParallaxText from "./components/ParallaxText";
import ScalingSection from "./components/ScalingSection";
import { useRef } from "react";

function Home() {
  const targetSection = useRef(null);

  return (
    <Hamburger targetSection={targetSection}>
      <Navbar />
      <section className="h-[95vh] md:h-[80vh]">
        <div className="flex flex-col items-end p-20 text-2xl leading-tight font-medium h-[65vh] md:h-[40vh]">
          <h1>DEVELOPMENT</h1>
          <h1>DIGITAL</h1>
          <h1>INTERACTIVE</h1>
          <h1>API</h1>
          <h1>AGILE + EPIC</h1>
        </div>

        <div ref={targetSection} className="overflow-hidden">
          <ParallaxText
            className="font-medium font-bebas text-9xl md:text-[300px] inline-block whitespace-nowrap md:font-semibold"
            baseVelocity={-20}
          >
            ABDURRAHMAN ABDULHAKEEM ABDURRAHMAN ABDULHAKEEM
          </ParallaxText>
          <p className="block font-medium font-bebas text-3xl -mt-5 md:hidden container mx-auto">
            WEB DEVELOPER
          </p>
        </div>
      </section>

      <section className=" bg-black py-36 mt-10 relative after:absolute after:bg-black after:content-[''] after:-bottom-8 after:left-0 after:h-28 after:w-full after:-skew-y-6 ">
        <div className="container mx-auto block space-y-52 lg:space-y-0 lg:flex items-center gap-20 justify-between">
          <div className="md:flex-1">
            <h2 className="font-bold text-2xl tracking-tight">
              MY NAME IS ABDURRAHMAN
            </h2>
            <h2 className="font-bold text-2xl pb-6 tracking-tight">
              I'M <span className="text-slate-400"> A DEVELOPER.</span>
            </h2>

            <p className="font-semibold pb-6">
              Specializing in digital and interactive development and dedicated
              to crafting high-quality web experiences that meet your needs.
              While I’m deeply passionate about web development, my creativity
              extends beyond code. As a fashion designer, I enjoy bringing new
              ideas to life through design, combining innovation with style to
              create unique pieces.
            </p>

            <p className="">
              On the strategic side, I occasionally indulge in a good game of
              chess, where every move is a calculated decision. This balance
              between creativity and strategy informs my approach to
              development, ensuring that my solutions are both visually
              compelling and technically sound.
            </p>
            <button className="bg-white px-6 py-3 mt-5 text-black hover:bg-gray-400 hover:text-white hover:scale-95 transition">
              <Link href={"/about"}>About Me</Link>
            </button>
          </div>

          <ScalingSection
            className={`md:flex-1 flex items-center justify-center relative z-10 pb-10 md:pb-0 `}
          >
            <div className="z-20 h-60 w-60 md:h-64 md:w-64 xl:h-80 xl:w-80 rounded-full border-[6px] absolute mr-[150px]">
              <div className="relative">
                <span className="absolute top-14 right-24 md:top-20 md:right-32">
                  <p className="font-semibold text-sm opacity-75">PERCEPTIVE</p>
                  <ul className="list-disc pl-5 font-thin text-xs opacity-75">
                    <li>Research</li>
                    <li>Awareness</li>
                    <li>Orientation</li>
                    <li>Communication</li>
                    <li>Feelings</li>
                    <li>Methodologies</li>
                    <li>Solutions</li>
                  </ul>
                </span>
              </div>

              <div className="z-20 h-60 w-60 md:h-64 md:w-64 ml-36 xl:h-80 xl:w-80 lg:ml-32 rounded-full border-[6px] absolute xl:ml-48 -top-1.5">
                <div className="relative">
                  <span className="absolute top-14 left-24 md:top-20 md:left-32">
                    <p className="font-semibold text-sm opacity-75">TECHNOLOGIES</p>
                    <ul className="list-disc pl-5 font-thin text-xs opacity-75">
                      <li>Python</li>
                      <li>Javascript</li>
                      <li>PHP</li>
                      <li>MySQL</li>
                      <li>APIs</li>
                      <li>Git + Github</li>
                    </ul>
                  </span>
                </div>
              </div>
            </div>

            <div className="sketchfab-embed-wrapper relative ml-14 pointer-events-none">
              <div className="absolute z-[1] bg-black h-full w-[90px] bottom-0"></div>
              <div className="absolute z-[1] bg-black h-full w-20 bottom-0 right-0"></div>
              <iframe
                className="pointer-events-none"
                frameborder="0"
                allow="autoplay; fullscreen;"
                src="https://sketchfab.com/models/646573ebd2464d1188583f22cebe82b7/embed?autospin=1&autostart=1&preload=0&transparent=1&controls=0"
              >
                {" "}
              </iframe>{" "}
            </div>
          </ScalingSection>
        </div>
      </section>

      <ScalingSection
        id="contact"
        className="bg-black bg-opacity-55 p-[40px] mb-52 md:p-16 mt-40 max-w-[600px] mx-8 md:mx-auto"
      >
        <h1 className="mb-9 text-2xl leading-[1.3em] font-bold md:text-3xl">
          I’M READY TO WORK WITH YOU TO DEVELOP SOMETHING EXCEPTIONAL.
        </h1>

        <p className="font-medium text-slate-100">
          Bringing your vision to life requires more than just technical
          skills—it takes a collaborative spirit, creativity, and a commitment
          to excellence. Whether you're looking to build a robust web
          application or explore creative design solutions, I'm here to partner
          with you at every step, ensuring that the final product is not just
          functional, but truly exceptional.
        </p>

        <button className="bg-white px-6 py-3 mt-10 text-black hover:bg-gray-400 hover:text-white hover:scale-95 transition">
          <Link href={"mailto:abdurrahmanola21@gmail.com"} target="_blank">
            hello@abdurrahman.ng
          </Link>
        </button>
      </ScalingSection>
    </Hamburger>
  );
}

export default Home;
