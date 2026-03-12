export function ExperienceTimeline({ experiences }) {
  return (
    <>
      {/* MOBILE */}
      <div className="md:hidden relative">
        <div className="absolute left-2 top-0 h-full w-px bg-border" />

        <ul className="space-y-8 items-start">
          {experiences.map((exp, index) => (
            <li key={`${exp.date}-${exp.role}-${index}`} className="relative pl-10">
              <span className="absolute left-[1px] top-1.5 h-4 w-4 rounded-full bg-background border-2 border-primary" />

              <div className="text-left">
                <time className="block text-sm text-muted-foreground">{exp.date}</time>
                <div className="mt-1 font-semibold leading-snug">{exp.role}</div>
                <div className="text-sm text-muted-foreground">{exp.company}</div>

                {exp.description ? (
                  <p className="mt-2 text-sm text-muted-foreground">{exp.description}</p>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:block relative">
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-border" />

        <ul className="space-y-10">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <li key={`${exp.date}-${exp.role}-${index}`} className="relative">
                <div className="grid grid-cols-2 gap-12 items-start">
                  <div className={isLeft ? "text-right" : "order-2 text-left"}>
                    <div>
                      <time className="block text-sm text-muted-foreground">{exp.date}</time>
                      <div className="mt-1 font-semibold">{exp.role}</div>
                      <div className="text-sm text-muted-foreground">{exp.company}</div>

                      {exp.description ? (
                        <p className="mt-2 text-sm text-muted-foreground">{exp.description}</p>
                      ) : null}
                    </div>
                  </div>

                  <div className={isLeft ? "" : "order-1"} />
                </div>

                <span className="absolute left-1/2 top-4 -translate-x-1/2">
                  <span className="block h-4 w-4 rounded-full bg-background border-2 border-primary" />
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
