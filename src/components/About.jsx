import { GraduationCap, Briefcase, Cpu } from "lucide-react";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();
  
  // Garante que as experiências são lidas como um array de objetos
  const experiences = t("about.experiences", { returnObjects: true }) || [];

  return (
    <section id="about" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        
        {/* CABEÇALHO DA SECÇÃO */}
        <div className="flex items-center gap-4 mb-12 md:mb-16">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-2xl md:text-3xl font-mono tracking-tighter uppercase whitespace-nowrap">
            01. {t("about.aboutLine")} <span className="text-primary">{t("about.meLine")}</span>
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* COLUNA ESQUERDA: ACADEMIC */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3 text-primary/80">
              <GraduationCap size={18} />
              <h3 className="font-mono font-bold uppercase tracking-[0.2em] text-xs">
                System.Education_log
              </h3>
            </div>

            <div className="space-y-6">
              {/* Mestrado */}
              <div className="group relative pl-6 border-l border-primary/30 hover:border-primary transition-colors">
                <span className="text-[10px] font-mono text-primary/60 tracking-widest uppercase">
                  {t("academic.mYear")} //
                </span>
                <h4 className="text-lg font-bold tracking-tight mt-1 group-hover:text-primary transition-colors">
                  {t("academic.master")}
                </h4>
                <p className="text-sm font-mono text-muted-foreground mt-1 lowercase opacity-80">
                  {t("academic.university")}
                </p>
              </div>

              {/* Licenciatura */}
              <div className="group relative pl-6 border-l border-primary/30 hover:border-primary transition-colors">
                <span className="text-[10px] font-mono text-primary/60 tracking-widest uppercase">
                  {t("academic.bYear")} //
                </span>
                <h4 className="text-lg font-bold tracking-tight mt-1 group-hover:text-primary transition-colors">
                  {t("academic.bachelor")}
                </h4>
                <p className="text-sm font-mono text-muted-foreground mt-1 lowercase opacity-80">
                  {t("academic.university")}
                </p>
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA: EXPERIENCE */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-3 text-primary/80">
              <Cpu size={18} />
              <h3 className="font-mono font-bold uppercase tracking-[0.2em] text-xs">
                System.Experience_log
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className="group relative p-5 md:p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-all duration-300 shadow-sm"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="space-y-1">
                      <h4 className="text-lg md:text-xl font-black tracking-tighter uppercase group-hover:text-primary transition-colors leading-tight">
                        {exp.role}
                      </h4>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="h-1.5 w-1.5 bg-primary rounded-full shrink-0" />
                        <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    
                    <span className="font-mono text-[10px] bg-secondary/50 px-3 py-1 border border-border rounded text-muted-foreground whitespace-nowrap w-fit self-start">
                      [{exp.date}]
                    </span>
                  </div>
                  
                  {/* Descrição em formato de Logs/Bullets */}
                  {exp.description && (
                    <ul className="mt-5 space-y-3 border-t border-border/50 pt-5">
                      {exp.description.split(" • ").map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-primary font-mono text-xs mt-1 shrink-0">
                            &gt;
                          </span>
                          <span className="font-mono text-[12px] uppercase tracking-tight text-muted-foreground/90 leading-relaxed">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Ícone decorativo de fundo */}
                  <div className="absolute top-4 right-4 text-primary/5 group-hover:text-primary/10 transition-colors pointer-events-none">
                    <Briefcase size={20} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};