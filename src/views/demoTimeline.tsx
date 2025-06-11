"use client";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "Backend Developer at Universitas Pamulang",
    description:
    "As a backend developer at Universitas Pamulang, I was responsible for building and maintaining scalable RESTful APIs, managing databases using Prisma ORM, and implementing authentication and role-based access control. I collaborated closely with frontend developers to ensure seamless integration and contributed to several campus systems that improved administrative workflows and student services.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img
          src="/UNPAM_logo1.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="placeholder image"
        />
      </div>
    ),
  },
  {
   title: "Junior Web Developer at Nexinus",
   description:
   "At Nexinus, I worked as a junior web developer where I was responsible for building and customizing the admin dashboard using Refine JS. I helped implement dynamic data tables, authentication, role-based access, and CRUD functionalities. This experience strengthened my front-end development skills and taught me how to deliver maintainable and user-friendly admin interfaces.",

    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img
          src="/nexinus_logo.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="placeholder image"
        />
      </div>
    ),
  },
  // {
  //   title: "Version control",
  //   description:
  //     "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
  //   content: (
  //     <div className="h-full w-full flex items-center justify-center text-white">
  //       <img
  //         src="https://picsum.photos/500/500?grayscale"
  //         width={300}
  //         height={300}
  //         className="h-full w-full object-cover"
  //         alt="placeholder image"
  //       />
  //     </div>
  //   ),
  // },
  // {
  //   title: "Running out of content",
  //   description:
  //     "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
  //   content: (
  //     <div className="h-full w-full flex items-center justify-center text-white">
  //       <img
  //         src="https://picsum.photos/600/600?grayscale"
  //         width={300}
  //         height={300}
  //         className="h-full w-full object-cover"
  //         alt="placeholder image"
  //       />
  //     </div>
  //   ),
  // },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="">
      <StickyScroll content={content} />
    </div>
  );
}
