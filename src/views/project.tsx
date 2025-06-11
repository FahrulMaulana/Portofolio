import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote: "PPDB has streamlined the entire student admission process with its intuitive interface and powerful features. It's exactly what modern schools need.",
      name: "PPDB",
      designation: "Digital Enrollment Platform",
      src: "/ppdb.png",
    },
    {
      quote: "This platform brings clarity, control, and convenience to managing academic journals. It’s built for editors, reviewers, and authors alike.",
      name: "Journal Management",
      designation: "Research Submission & Review System",
      src: "/majour.png",
    },
    {
      quote: "YTMP3 is a simple application I built to download MP3 audio from YouTube videos. users can easily paste a YouTube link and download audio files.",
      name: "YTMP3",
      designation: "YouTube to MP3 Downloader",
      src: "/mp3.png",
    },
    {
      quote: "I developed a modern and responsive company profile website for Indian Jaya The website showcases the company's services, project gallery, and contact information in a clean and user-friendly layout.",
      name: "Company Profile",
      designation: "Welding Workshop Business Website",

      src: "/12.png",
    },
    {
     quote: "PAW directory connects people with trusted local businesses in seconds. It’s the easiest way to discover what’s around you.",
     name: "PAW directory",
     designation: "Local Business Directory Platform",
      src: "/b2.png",
    },
  ];

  return (
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12">
  <div className="text-center mb-8 md:mb-12">
    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 px-4">
      Newest Project
    </h2>
    <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto px-4">
      Check out some of my recent projects and applications I've built.
    </p>
  </div>
  <div className="pb-20 overflow-visible">
    <AnimatedTestimonials 
      testimonials={testimonials} 
      className="overflow-visible py-4"
    />
  </div>
</div>
  )
}

export { AnimatedTestimonialsDemo };
