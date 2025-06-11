import { Component } from "@/components/ui/infinite-menu"; // Adjust path if necessary

const DemoTwo = () => {
  const items = [
    {
      image: "/foto2.jpeg",
      // link: "https://21st.dev/",
    },
    {
      image: "/foto1.jpeg",
      // link: "https://21st.dev/",
    },
    {
      image: "/foto3.jpeg",
      // link: "https://21st.dev/",
    },
    {
      image: "/foto4.jpeg",
      // link: "https://21st.dev/",
    },
  ];

  return (
    <div className="flex w-full h-full justify-center items-center">
      <div style={{ height: "100%", width: "100%", maxWidth: "100%", position: "relative" }}>
        <Component items={items} />
      </div>
    </div>
  );
};

export { DemoTwo };
