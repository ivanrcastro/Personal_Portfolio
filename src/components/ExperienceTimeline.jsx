export function ExperienceTimeline({ experiences }) {
  if (!experiences || !Array.isArray(experiences)) return null;

  return (
    <>
      {/* MOBILE */}
      <div className="md:hidden relative">
        <div className="absolute left-2 top-0 h-full w-px bg-border" />
        <ul className="space-y-8">
          {experiences.map((exp, index) => (
            <li key={index} className="relative pl-10">
              <span className="absolute left-[1px] top-1.5 h-4 w-4 rounded-full bg-background border-2 border-primary z-10" />
              <div className="text-left">
                <time className="block text-xs font-mono text-primary uppercase">{exp.date}</time>
                <div className="mt-1 font-bold text-lg leading-tight">{exp.role}</div>
                <div className="text-sm font-medium text-muted-foreground">{exp.company}</div>
                {exp.description && (
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed border-l-2 border-border/30 pl-3">
                    {exp.description}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:block relative">
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-border" />
        <ul className="space-y-12">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <li key={index} className="relative">
                <div className="grid grid-cols-2 gap-16 items-start">
                  <div className={isLeft ? "text-right" : "invisible pointer-events-none"}>
                    <time className="block text-sm font-mono text-primary uppercase">{exp.date}</time>
                    <div className="mt-1 font-bold text-xl">{exp.role}</div>
                    <div className="text-muted-foreground font-medium mb-3">{exp.company}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-md ml-auto">{exp.description}</p>
                  </div>
                  <div className={!isLeft ? "text-left" : "invisible pointer-events-none"}>
                    <time className="block text-sm font-mono text-primary uppercase">{exp.date}</time>
                    <div className="mt-1 font-bold text-xl">{exp.role}</div>
                    <div className="text-muted-foreground font-medium mb-3">{exp.company}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-md">{exp.description}</p>
                  </div>
                </div>
                <span className="absolute left-1/2 top-4 -translate-x-1/2 h-4 w-4 rounded-full bg-background border-2 border-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}