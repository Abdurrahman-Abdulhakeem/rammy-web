"use client";
import { useEffect, useRef, useState } from "react";

const accordionList = [
  {
    title: "DISCOVERY",
    content:
      "Understanding the full scope of the project. I take the time to learn about the project goals, challenges, and vision. This phase ensures that every decision aligns with the objectives and sets the foundation for a successful project.",
  },
  {
    title: "IDEATION",
    content:
      " I begin designing and brainstorming innovative solutions, combining technical skill with a designer’s eye for detail, ensuring that the product is not just functional, but also visually engaging.",
  },
  {
    title: "AGILE",
    content:
      "Execution is key, and my development process is built on Agile methodologies. By working in sprints, I ensure that the project evolves smoothly, adapting to changes along the way.",
  },
  {
    title: "TEST",
    content:
      " I test and optimize the project. From functionality to performance, every aspect is refined until it meets the highest standards of quality.",
  },
  {
    title: "LAUNCH",
    content:
      "When everything is perfected, it’s time to launch. But my commitment doesn’t end there. I provide ongoing support to ensure the project continues to thrive post-launch. Whether it’s updates, enhancements, or troubleshooting, I’m here to ensure that your solution remains exceptional.",
  },
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleActiveAccordion = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return accordionList.map((item, index) => (
    <AccordionItem
      key={index}
      index={index}
      title={item.title}
      content={item.content}
      isOpen={activeIndex === index}
      onClick={() => handleActiveAccordion(index)}
    />
  ));
};

export const AccordionItem = ({ index, title, content, isOpen, onClick }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isOpen
        ? `${contentRef.current.scrollHeight}px`
        : "0px";
    }
  }, [isOpen]);

  return (
    <div className="">
      <div
        onClick={onClick}
        className="flex cursor-pointer font-medium items-center w-full gap-7 p-4 bg-black relative transition duration-1000 ease-in-out"
      >
        <h1 className="after:content-[''] after:w-[1px] after:h-full after:bg-white after:absolute after:mt-[-16px] after:ml-[14px]">
          {index + 1}
        </h1>

        <h1 className="">{title}</h1>

        <h1 className="w-full flex justify-end">{isOpen ? "-" : "+"}</h1>
      </div>

      <div className="">
        <p
          ref={contentRef}
          className={`text-sm my-2 overflow-hidden transition-max-height duration-300`}
        >
          {content}
        </p>
      </div>
    </div>
  );
};

export default Accordion;
