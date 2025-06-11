import { StickyScrollRevealDemo } from "@/views/demoTimeline";

function Experience() {
    return (
        <div className="relative h-full w-full overflow-hidden">
            {/* Header for the entire Skills section */}
            <div className="relative mt-24 top-0 left-0 right-0 z-0 text-center">
                <h1 className="text-4xl lg:text-5xl font-bold text-white font-bold mb-2">Experience</h1> {/* Mengurangi margin bawah */}
                <p className="text-base sm:text-lg text-gray-300 max-w-3xl max-w-2xl mx-auto"> {/* Menambahkan margin bawah kecil */}
                    Explore my skills and expertise through this interactive timeline.
                </p>
            </div> 
            <div className="bg-transparent h-screen w-screen flex items-start justify-center content-start pt-20">
                <StickyScrollRevealDemo />
            </div>
        </div>
    );
}

export default Experience;
