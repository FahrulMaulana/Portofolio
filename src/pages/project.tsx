import { AnimatedTestimonialsDemo } from "@/views/project";

function Skill() {
    return (
        <div className="relative max-h-screen w-full overflow-hidden">
            {/* Header for the entire Skills section */}
            {/* <div className="absolute top-4 left-0 right-0 z-50 text-center">
                <h1 className="text-4xl font-bold text-white mb-8">Newest Project</h1>
            </div> */}
            
            <div className="bg-transparent h-screen w-screen flex items-center justify-center pt-20">
                <AnimatedTestimonialsDemo />
            </div>
        </div>
    );
}

export default Skill;
