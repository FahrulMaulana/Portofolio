import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote: "PPDB has streamlined the entire student admission process with its intuitive interface and powerful features. It's exactly what modern schools need.",
      name: "PPDB",
      designation: "Digital Enrollment Platform",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: "This platform brings clarity, control, and convenience to managing academic journals. It’s built for editors, reviewers, and authors alike.",
      name: "Journal Management",
      designation: "Research Submission & Review System",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
     quote: "ShoesStock makes it effortless to track inventory, manage stock levels, and optimize sales performance — all in one sleek platform.",
     name: "ShoesStock",
     designation: "Footwear Inventory Management System",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: "BatchCoffe helps streamline daily operations, from order-taking to payment. It’s the perfect cashier system for fast-paced café environments.",
      name: "BatchCoffe",
      designation: "Point of Sale System for Cafés",

      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
     quote: "PAW directory connects people with trusted local businesses in seconds. It’s the easiest way to discover what’s around you.",
     name: "PAW directory",
     designation: "Local Business Directory Platform",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
      <h2 className="text-5xl font-bold text-white mb-4">Newest Project</h2>
      {/* <p className="text-lg text-gray-600">
        Hear from our satisfied clients about their experiences with our platform.
      </p> */}
      </div>
      <div className="mt-12">
      <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </div>
  )
}

export { AnimatedTestimonialsDemo };
