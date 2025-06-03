import { Component } from "@/components/ui/infinite-menu"; // Adjust path if necessary

const DemoTwo = () => {
  const items = [
    {
      image: "https://picsum.photos/300/300?grayscale",
      // link: "https://21st.dev/",
    },
    {
      image: "https://picsum.photos/400/400?grayscale",
      // link: "https://21st.dev/",
    },
    {
      image: "https://picsum.photos/500/500?grayscale",
      // link: "https://21st.dev/",
    },
    {
      image: "https://picsum.photos/600/600?grayscale",
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
