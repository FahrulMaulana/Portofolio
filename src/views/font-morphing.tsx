import { Typewriter } from "@/components/ui/typewriter"

function Preview() {
  return (
    <div className="w-full h-full md:text-4xl lg:text-5xl sm:text-3xl text-2xl flex flex-row items-start justify-start bg-background font-normal overflow-hidden">
      <p className="whitespace-pre-wrap">
        <span className="text-white">{"I`m a "}</span>
        <Typewriter
          text={[
            "Programmer",
            "Backend Developer",
            "Frontend Developer",
          ]}
          speed={70}
          className="text-violet-500 font-bold"
          waitTime={1500}
          deleteSpeed={40}
          cursorChar={"_"}
        />
      </p>
    </div>
  )
}

export { Preview }
