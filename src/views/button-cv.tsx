import { AuroraButton } from "@/components/ui/aurora-button";

function AuroraButtonDemo3() {
  return (
    <AuroraButton glowClassName="from-pink-500 via-purple-500 to-green-500">
      <div className="flex items-center gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 16.5v-9m0 9l-3-3m3 3l3-3M6.75 18.75h10.5M4.5 21h15a2.25 2.25 0 002.25-2.25v-15A2.25 2.25 0 0019.5 1.5h-15A2.25 2.25 0 002.25 3.75v15A2.25 2.25 0 004.5 21z"
          />
        </svg>
        Download CV
      </div>
    </AuroraButton>
  );
}

export { AuroraButtonDemo3 };
