import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StickyScrollRevealDemo } from "@/views/demoTimeline";
import ImageScrollSequence2 from "@/views/image-scroll-sequence2";

gsap.registerPlugin(ScrollTrigger);

function Experience() {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const leftPanelRef = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        if (!sectionRef.current || !leftPanelRef.current) return;

        const ctx = gsap.context(() => {
            gsap.set(leftPanelRef.current, { x: -72, rotation: -1.2, transformOrigin: "left center" });

            gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=100%",
                    scrub: 1.4,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                },
            })
                // .to(leftPanelRef.current, {
                //     x: -72,
                //     rotation: -1.2,
                //     ease: "none",
                //     duration: 0.6,
                // })
                .to(leftPanelRef.current, {
                    x: 100,
                    rotation: 0.1,
                    ease: "none",
                    duration: 0.7,
                });
        }, sectionRef);

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <div ref={sectionRef} className="relative min-h-screen w-full overflow-hidden">
            {/* Header for the entire Skills section */}
            <div className="relative mt-24 top-0 left-0 right-0 z-0 text-center">
                <h1 className="text-4xl lg:text-5xl font-bold text-white font-bold mb-2">Experience</h1> {/* Mengurangi margin bawah */}
                <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto px-4"> {/* Menambahkan margin bawah kecil */}
                    Explore my skills and expertise through this interactive timeline.
                </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 px-3 md:mt-10 md:grid-cols-[minmax(0,1fr)_440px] md:items-start md:px-6 lg:px-10">
                <div ref={leftPanelRef} className="relative z-10 md:pt-10 will-change-transform">
                    <StickyScrollRevealDemo className="w-full" />
                </div>

                <div className="relative z-20 flex items-center justify-center md:justify-end">
                    <ImageScrollSequence2 className="block md:hidden" fps={30} scrub={2.4} />
                    <ImageScrollSequence2
                        className="hidden md:flex pt-0"
                        imageClassName="h-[620px] w-[460px]"
                        fps={30}
                        scrub={2.6}
                    />
                </div>
            </div>
        </div>
    );
}

export default Experience;
