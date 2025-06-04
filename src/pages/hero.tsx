import { DemoOne } from "@/views/background"
import { AuroraButtonDemo3 } from "@/views/button-cv"
import { Preview } from "@/views/font-morphing"
import { DemoTwo } from "@/views/profile"
import SocialMediaIcons from "@/views/social-media"

function Hero() {
  return (
    <div className="relative max-h-screen w-full">
      {/* Background shader with absolute positioning */}
      <div className="fixed inset-0 z-0">
        <DemoOne />
      </div>
      
        <div className="relative grid grid-cols-2 gap-8 w-screen p-20 h-screen">
            <div className="justify-start content-center">
            <div>
                <h1 className="text-white font-bold">Hi, It`s Fahrul Maulana</h1>
            </div>
            <div>
                <Preview/>
            </div>
            <div className="mt-4">
                <p className="text-white text-lg">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab aut, rerum repellat corrupti aliquid quaerat ut, id ad sequi quidem magni ducimus praesentium laudantium dolorum magnam maiores modi dolores voluptatibus!
                </p>
            </div>
            <div className="mt-10 flex items-center space-x-4">
              <AuroraButtonDemo3 />
              <SocialMediaIcons />
            </div>
            </div>         
            <div className="">
                <DemoTwo />
            </div>
        </div>
    </div>
  )
}

export default Hero