"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
  className,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
  className?: string;
}) => {
  const [active, setActive] = useState(0);
  const [activeButton, setActiveButton] = useState<"prev" | "next" | null>(null);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
    setActiveButton("next");
    setTimeout(() => setActiveButton(null), 300);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setActiveButton("prev");
    setTimeout(() => setActiveButton(null), 300);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);

      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div className={cn("max-w-sm md:max-w-4xl mx-auto px-4 md:px-8 lg:px-12 py-20 relative z-10", className)}>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    // Pastikan z-index maksimal hanya 40 (di bawah navbar yang z-50)
                    zIndex: isActive(index)
                      ? 40
                      : Math.min(30, testimonials.length + 2 - index),
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                <img
                  src={testimonial.src}
                  alt={testimonial.name}
                  draggable={false}
                  className="h-full w-full rounded-3xl object-cover object-center"
                />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold text-white">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-white">
              {testimonials[active].designation}
            </p>
            <motion.p className="text-lg text-white mt-8">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
  <div className="flex gap-4 pt-12 md:pt-0">
  <button
    onClick={handlePrev}
    onMouseEnter={() => setActiveButton("prev")}
    onMouseLeave={() => setActiveButton(null)}
    className={`h-7 w-7 rounded-full bg-white flex items-center justify-center group/button 
      ${activeButton === "prev" ? "border-2 border-purple-500" : "border-2 border-purple-500"} 
      transition-all duration-300`}
  >
    <span className="h-5 w-5 text-white group-hover/button:rotate-12 transition-transform duration-300">
      {"<"}
    </span>
  </button>
  <button
    onClick={handleNext}
    onMouseEnter={() => setActiveButton("next")}
    onMouseLeave={() => setActiveButton(null)}
    className={`h-7 w-7 rounded-full bg-purple-900/20 flex items-center justify-center group/button 
      ${activeButton === "next" ? "border-2 border-purple-500" : "border-2 border-purple-500"} 
      transition-all duration-300`}
  >
    <span className="h-5 w-5 text-white group-hover/button:-rotate-12 transition-transform duration-300">
      {">"}
    </span>
  </button>
</div>
        </div>
      </div>
    </div>
  );
};