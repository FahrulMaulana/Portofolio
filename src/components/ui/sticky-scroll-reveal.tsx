"use client";
import { cn } from "@/lib/utils";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }

        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  // Removed background colors as we want transparent backgrounds
  const purpleBorderColors = [
    "rgb(168 85 247)", // purple-500
    "rgb(147 51 234)", // purple-600
    "rgb(126 34 206)", // purple-700
  ];

  // Changed gradients to use purple tones

  const linearGradients = [
    "linear-gradient(to bottom right, rgb(6 182 212), rgb(16 185 129))", // cyan-500 to emerald-500
    "linear-gradient(to bottom right, rgb(236 72 153), rgb(99 102 241))", // pink-500 to indigo-500
    "linear-gradient(to bottom right, rgb(249 115 22), rgb(234 179 8))", // orange-500 to yellow-500
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);
  const [borderColor, setBorderColor] = useState(purpleBorderColors[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
    setBorderColor(purpleBorderColors[activeCard % purpleBorderColors.length]);
  }, [activeCard]);

  return (
    <motion.div
      // Removed backgroundColor animation and using a transparent background instead
      className="h-[30rem] overflow-y-auto flex justify-start relative space-x-10 rounded-md p-10 bg-transparent border-2 border-purple-500 backdrop-blur-md mx-4 sm:mx-20"
      ref={ref}
        >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg text-slate-300 max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{ 
          background: backgroundGradient,
          borderColor: borderColor,
          borderWidth: '2px',
          borderStyle: 'solid'
        }}
        className={cn(
          "hidden lg:block h-60 w-80 rounded-md sticky top-10 overflow-hidden backdrop-blur-sm",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};