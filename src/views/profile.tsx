import { Component } from "@/components/ui/infinite-menu"; // Adjust path if necessary

const DemoTwo = () => {
  const items = [
    {
      image: "/src/assets/foto2.jpeg",
      // link: "https://21st.dev/",
    },
    {
      image: "/src/assets/foto1.jpeg",
      // link: "https://21st.dev/",
    },
    {
      image: "/src/assets/foto3.jpeg",
      // link: "https://21st.dev/",
    },
    {
      image: "/src/assets/foto4.jpeg",
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
