type ExperienceItem = {
  company: string;
  role: string;
  employmentType: string;
  period: string;
  location: string;
  skills: string;
  description?: string;
  badge: string;
};

const experiences: ExperienceItem[] = [
  {
    company: "Nivessa Vinyl Records",
    role: "Full Stack Developer",
    employmentType: "Part-time",
    period: "Oct 2025 - Present · 7 mos",
    location: "Los Angeles, California, Amerika Serikat · Remote",
    skills: "MongoDB, Next.js and +2 skills",
    badge: "NV",
  },
  {
    company: "Universitas Pamulang",
    role: "Back End Developer",
    employmentType: "Full-time",
    period: "Sep 2024 - Present · 1 yr 8 mos",
    location: "Tangerang Selatan, Banten, Indonesia · On-site",
    skills: "NestJS, Node.js and +5 skills",
    badge: "UP",
  },
  {
    company: "Universitas Pamulang",
    role: "Back End Developer",
    employmentType: "Apprenticeship",
    period: "Jan 2024 - Aug 2024 · 8 mos",
    location: "Tangerang Selatan, Banten, Indonesia",
    skills: "NestJS, JavaScript and +3 skills",
    description:
      "Universitas Pamulang berada di bawah Yayasan Sasmita Jaya Group. Sebagai intern, saya membangun sistem PMB Online untuk SMK 1 Sasmita dan SMK 2 Sasmita sebagai bagian dari pengembangan ekosistem digital yayasan.",
    badge: "UP",
  },
  {
    company: "Nexinus",
    role: "Fullstack Developer",
    employmentType: "Part-time",
    period: "Jun 2025 - Dec 2025 · 7 mos",
    location: "Haldia, West Bengal, India · Remote",
    skills: "React, Node.js and +2 skills",
    badge: "NX",
  },
];

function Expirient() {
  return (
    <section className="relative w-full overflow-hidden px-4 py-16 sm:px-6 md:px-10 lg:px-14">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 text-center">
          <span className="inline-flex items-center rounded-full border border-cyan-300/40 bg-slate-950/45 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-cyan-100">
            Career Timeline
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl">Experience</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-cyan-100/80 sm:text-base">
            Perjalanan profesional saya sebagai backend dan fullstack developer.
          </p>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-[22px] top-0 w-px bg-gradient-to-b from-cyan-200/80 via-sky-300/45 to-transparent sm:left-[30px]" />

          <div className="space-y-6">
            {experiences.map((item) => (
              <article
                key={`${item.company}-${item.role}-${item.period}`}
                className="relative rounded-[1.7rem] border border-cyan-200/35 bg-gradient-to-br from-slate-900/80 via-slate-950/70 to-cyan-950/30 p-4 pl-14 shadow-[0_16px_38px_rgba(2,12,30,0.45)] backdrop-blur-lg sm:p-6 sm:pl-20"
              >
                <div className="absolute left-2 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-200/70 bg-cyan-400/25 text-xs font-bold text-cyan-100 shadow-[0_0_20px_rgba(56,189,248,0.35)] sm:left-4 sm:h-12 sm:w-12 sm:text-sm">
                  {item.badge}
                </div>

                <div className="absolute -left-1 top-7 h-3 w-3 rotate-45 border-l border-t border-cyan-200/35 bg-slate-900/85" />

                <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.1em] text-cyan-100/80">
                  <span className="rounded-full border border-cyan-200/45 bg-cyan-400/10 px-2.5 py-1">
                    {item.company}
                  </span>
                  <span className="rounded-full border border-cyan-200/30 bg-slate-900/70 px-2.5 py-1">
                    {item.employmentType}
                  </span>
                </div>

                <h3 className="mt-3 text-lg font-semibold text-white sm:text-xl">{item.role}</h3>

                <div className="mt-3 flex flex-wrap gap-2 text-xs text-cyan-50/90 sm:text-sm">
                  <span className="rounded-full border border-cyan-200/30 bg-slate-900/75 px-3 py-1.5">
                    {item.period}
                  </span>
                  <span className="rounded-full border border-cyan-200/30 bg-slate-900/75 px-3 py-1.5">
                    {item.location}
                  </span>
                </div>

                {item.description ? (
                  <p className="mt-3 rounded-2xl border border-cyan-200/25 bg-slate-900/55 px-4 py-3 text-sm leading-relaxed text-cyan-50/85">
                    {item.description}
                  </p>
                ) : null}

                <p className="mt-3 inline-flex rounded-full border border-emerald-200/30 bg-emerald-400/10 px-3 py-1.5 text-sm font-medium text-emerald-200">
                  {item.skills}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Expirient;
