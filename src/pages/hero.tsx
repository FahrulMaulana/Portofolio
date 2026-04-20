import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { DemoOne } from "@/views/background"
import { AuroraButtonDemo3 } from "@/views/button-cv"
import { Preview } from "@/views/font-morphing"
import ImageScrollSequence from "@/views/image-scroll-sequence"
import SocialMediaIcons from "@/views/social-media"

gsap.registerPlugin(ScrollTrigger)

function Hero() {
  const heroRef = useRef<HTMLDivElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    if (!heroRef.current || !contentRef.current) return

    ScrollTrigger.getById("hero-content-pin")?.kill()

    const trigger = ScrollTrigger.create({
      id: "hero-content-pin",
      trigger: heroRef.current,
      start: "top top",
      end: "+=50%",
      pin: contentRef.current,
      pinSpacing: true,
      scrub: true,
      anticipatePin: 1,
    })

    return () => {
      trigger.kill()
    }
  }, [])

  return (
    <div ref={heroRef} className="relative h-screen w-full">
      {/* Background shader with absolute positioning */}
      <div className="absolute inset-0 z-0">
        <DemoOne />
      </div>
      
      {/* Responsive container */}
      <div ref={contentRef} className="relative z-10 w-screen h-screen">
        <div className="flex flex-col h-full w-full p-4 sm:p-8 md:p-12 lg:p-20">
          <ImageScrollSequence className="block md:hidden" totalFrames={120} fps={30} scrub={2.4} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 flex-grow ">
            <div className="flex flex-col justify-center md:order-2">
              <div>
                <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">Hi, It`s Fahrul Maulana</h1>
              </div>
              <div className="mt-2 md:mt-4">
                <Preview/>
              </div>
              <div className="mt-2 md:mt-4">
                <p className="text-white text-sm sm:text-base md:text-lg xl:text-lg =">
                  I'm a passionate Fullstack Developer with experience in building scalable web applications from front to back. I enjoy crafting clean, efficient code and turning complex problems into elegant solutions. With a strong foundation in both frontend and backend technologies, I aim to build user-focused, high-performance digital products.
                </p>
              </div>
              {/* Mobile Only Button and Social Icons with correct order */}
              <div className=" mt-3 block md:hidden">
                <div className="flex flex-col space-y-4">
                  <div className="w-full">
                    <SocialMediaIcons />
                  </div>
                  <div className="w-45 mt-3">
                    <AuroraButtonDemo3 />
                  </div>
                </div>
              </div>
              
              {/* Desktop Only Button and Social Icons */}
              <div className="mt-10 hidden md:flex items-center space-x-4">
                <div>
                  <AuroraButtonDemo3 />
                </div>
                <div>
                  <SocialMediaIcons />
                </div>
              </div>
            </div>
            
            {/* Profile image column - hanya tampil pada desktop */}
            <div className="mt-5 hidden md:flex items-center justify-center md:order-1">
              <ImageScrollSequence
                className="hidden md:flex pt-0"
                imageClassName="h-[620px] w-[460px]"
                totalFrames={120}
                fps={30}
                scrub={2.6}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero