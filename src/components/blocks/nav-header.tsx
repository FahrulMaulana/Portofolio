"use client"; 

import { motion } from "framer-motion";
import React, { useRef, useState } from "react";

function NavHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const sections = [
    { id: "home", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "project", label: "Project" },
    { id: "skill", label: "Skill" },
  ];

  const scrollToSection = (sectionId: string, closeMenu = false) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -92;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }

    if (closeMenu) {
      setIsOpen(false);
    }
  };

  return (
    <nav className="relative">
      <div className="flex md:hidden">
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-200/50 bg-slate-950/70 shadow-[0_0_0_1px_rgba(56,189,248,0.28),0_10px_30px_rgba(6,42,66,0.5)] backdrop-blur-xl transition-colors"
        >
          <span className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 rounded bg-cyan-100 transition-transform duration-300 ${
                isOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 rounded bg-cyan-100 transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-5 rounded bg-cyan-100 transition-transform duration-300 ${
                isOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`md:hidden transition-all duration-300 ${
          isOpen ? "pointer-events-auto mt-3 max-h-80 opacity-100" : "pointer-events-none mt-0 max-h-0 opacity-0"
        }`}
      >
        <ul className="w-52 rounded-2xl border border-cyan-200/40 bg-slate-950/85 p-2 shadow-[0_0_0_1px_rgba(56,189,248,0.2),0_16px_40px_rgba(8,47,73,0.45)] backdrop-blur-xl">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                type="button"
                onClick={() => scrollToSection(section.id, true)}
                className="w-full rounded-xl px-3 py-2 text-left text-xs font-semibold uppercase tracking-[0.12em] text-cyan-50/90 transition-colors duration-200 hover:bg-cyan-300/15 hover:text-white"
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <ul
        className="relative mx-auto hidden w-fit items-center rounded-full border border-cyan-200/40 bg-slate-950/55 p-1.5 shadow-[0_0_0_1px_rgba(56,189,248,0.2),0_10px_35px_rgba(8,47,73,0.45)] backdrop-blur-xl md:flex"
        onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
      >
        {sections.map((section) => (
          <Tab
            key={section.id}
            setPosition={setPosition}
            onClick={() => scrollToSection(section.id)}
          >
            {section.label}
          </Tab>
        ))}

        <Cursor position={position} />
      </ul>
    </nav>
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
      className="relative z-10 block cursor-pointer rounded-full px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-cyan-50/90 transition-colors duration-300 hover:text-white md:px-5 md:py-2.5 md:text-sm"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }: { position: { left: number; width: number; opacity: number } }) => {
  return (
    <motion.li
      animate={position}
      transition={{ type: "spring", stiffness: 320, damping: 28, mass: 0.35 }}
      className="absolute z-0 h-8 rounded-full border border-cyan-100/35 bg-gradient-to-r from-cyan-400/80 via-sky-300/80 to-emerald-300/80 shadow-[0_0_24px_rgba(56,189,248,0.45)] md:h-10"
    />
  );
};

export default NavHeader;
