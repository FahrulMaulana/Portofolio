"use client"; 

import { motion } from "framer-motion";
import React, { useRef, useState } from "react";

function NavHeader() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ul
      className="relative mx-auto flex w-fit rounded-full border-2 border-purple-500 bg-black/20 backdrop-blur-md p-1"
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
    >
      <Tab 
        setPosition={setPosition} 
        onClick={() => scrollToSection("home")}
      >
        Home
      </Tab>
      <Tab 
        setPosition={setPosition} 
        onClick={() => scrollToSection("experience")}
      >
        Experience
      </Tab>
      <Tab 
        setPosition={setPosition} 
        onClick={() => scrollToSection("project")}
      >
        Project
      </Tab>
      <Tab 
        setPosition={setPosition} 
        onClick={() => scrollToSection("skill")}
      >
        Skill
      </Tab>
      {/* <Tab setPosition={setPosition} onClick={() => scrollToSection("contact")}>Contact</Tab> */}

      <Cursor position={position} />
    </ul>
  );
}

const Tab = ({
  children,
  setPosition,
  onClick,
}: {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<{ left: number; width: number; opacity: number }>>;
  onClick: () => void;
}) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onClick={onClick}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base transition-colors hover:text-purple-200"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }: { position: { left: number; width: number; opacity: number } }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7 rounded-full bg-purple-500 md:h-12"
    />
  );
};

export default NavHeader;
