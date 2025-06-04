import { LogoCarouselDemo } from "@/views/carousel";

function Skill() {
    return (
        <div className="relative max-h-screen w-full overflow-hidden">
            {/* Header for the entire Skills section */}
            {/* <div className="absolute top-4 left-0 right-0 z-50 text-center">
                <h1 className="text-4xl font-bold mb-4 text-white">My Skills</h1>
                <p className="text-white max-w-2xl mx-auto px-4">
                    Explore my skills and expertise through this interactive timeline.
                </p>
            </div> */}
            
            {/* <div className="relative grid grid-cols-2 gap-8 w-screen p-20 h-screen bg-transparent"> */}
                <div className="bg-transparent h-screen w-screen flex items-center justify-center">
                    <LogoCarouselDemo/>
                </div>
                {/* <div className="bg-transparent">
                    <DisplayCardsDemo/>
                </div>
            </div> */}
        </div>
    )
}

export default Skill;