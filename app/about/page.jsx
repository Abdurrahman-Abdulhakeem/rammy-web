"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Accordion from "../components/Accordion";
import Hamburger from "../components/navbar/Hamburger";
import ScalingSection from "../components/ScalingSection";

import { IoIosArrowDown } from "react-icons/io";

function About() {
  const [isVisible, setIsVisible] = useState(true);
  const [scale, setScale] = useState(1);
  const targetSection = useRef(null);

  useEffect(() => {
    const handleHideAbout = () => {
      const mainAboutPos = document
        .getElementById("main-about")
        ?.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 2;

      if (mainAboutPos < screenPosition) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      const checkScale = document
        .getElementById("check-scale")
        ?.getBoundingClientRect().top;
      const newScale = Math.min(
        1,
        Math.max(0.5, checkScale / window.innerHeight)
      );
      setScale(newScale);
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleHideAbout);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleHideAbout);
    };
  }, [isVisible]);

  return (
    <Hamburger targetSection={targetSection}>
      <section className="text-white h-[91vh]" id="aboutText">
        {isVisible && (
          <>
            <h1
              className="h-[91vh] text-center  flex items-center justify-center text-[40px] font-extrabold fixed -z-10 w-full tracking-tighter transition ease-in-out"
              style={{ transform: `scale(${scale})` }}
            >
              <span className="animate-bounceIn">ABOUT ME</span>
            </h1>
            <span className="fixed -z-10 flex flex-col items-center justify-end h-[91vh] w-full">
              <IoIosArrowDown className="text-4xl -mb-6 fadein-arrow anim-delay" />
              <IoIosArrowDown className="text-4xl mb-14 md:mb-0 fadein-arrow" />
            </span>
          </>
        )}
      </section>
      <div ref={targetSection} className="text-white flex items-center justify-end">
        <p
          className="bg-black p-5 w-max font-semibold md:mr-10"
          id="check-scale"
        >
          WHAT MAKES ME SPECIAL :)
        </p>
      </div>

      <section className="bg-black text-white flex-row items-center justify-between py-60 gap-14 md:flex">
        <div className="container w-full">
          <h1
            className="font-bold text-2xl mb-5 tracking-tighter"
            id="main-about"
          >
            HI, MY NAME IS ABDURRAHMAN.
          </h1>

          <p className="mb-4 text-sm">
            I&apos;m a passionate web developer with experience on creating dynamic
            and interactive digital solutions. My expertise lies in API
            integration, a critical component of modern web development,
            ensuring that your applications are not only functional but also
            seamlessly connected.
          </p>
          <p className="mb-4 text-sm">
            I approach web development with both creativity and logic. My
            experience in fashion design fuels my innovative ideas, while my
            chess-playing mindset sharpens my ability to strategically solve
            complex problems. This duality allows me to create digital solutions
            that are as stylish as they are efficient.
          </p>

          <p className="mb-4 text-sm">
            Just like tailoring a perfect outfit, I tailor web solutions to fit
            the unique needs of each client.
          </p>

          <p className="mb-4 text-sm">
            I follow Agile methodologies, which allow me to adapt to your
            project&apos;s evolving needs, ensuring that the final product is both
            efficient and aligned with your vision. I believe in incremental
            development and continuous improvement, making sure that each
            iteration brings us closer to your desired outcome.
          </p>
          <p className="mb-4 text-sm">
            With a commitment to quality and user satisfaction, I strive to
            create solutions that not only meet but exceed expectations. Whether
            you&apos;re looking to develop a new web application, enhance an existing
            platform, or need expert guidance, I&apos;m here to help turn your ideas
            into reality.
          </p>
        </div>
        <div className="w-full container flex-row justify-center items-center gap-7 mt-20 md:flex md:mt-0">
          <ScalingSection>
            <Image
              src={"/rammy-dark.jpg"}
              width={230}
              height={100}
              className="h-[500px] w-full md:w-[300px] mb-7 md:mb-0"
              alt="adurrahman"
            />
          </ScalingSection>
          <span className="space-y-7">
            <ScalingSection>
              <Image
                src={"/rammy.jpg"}
                width={250}
                height={100}
                className="h-[300px] w-full md:w-[250px]"
                alt="rammy"
              />
            </ScalingSection>
            <ScalingSection>
              <Image
                src={"/rammy-3.jpg"}
                width={250}
                height={100}
                className="h-[300px] w-full md:w-[250px]"
                alt="adurrahman-rammy"
              />
            </ScalingSection>
          </span>
        </div>
      </section>

      <section className="text-white items-center justify-between py-60 gap-14 flex-row space-y-20 md:flex md:space-y-0">
        <div className="container">
          <h1 className="font-bold text-2xl mb-5 tracking-tighter">
            DEVELOPMENT PROCESS
          </h1>

          <p className="max-w-xl text-sm">
            My development approach is centered around a five-step creative process
            that prioritizes in-depth research. By placing the
            user&apos;s needs at the forefront of every project, this process acts as
            a strategic blueprint, guiding each step from concept to execution.
            This thoughtful and methodical approach ensures that the final
            outcome not only meets but exceeds expectations, serving as a clear
            path toward success.
          </p>
        </div>

        <div className="container">
          <ScalingSection>
            <Accordion />
          </ScalingSection>
        </div>
      </section>
    </Hamburger>
  );
}

export default About;
