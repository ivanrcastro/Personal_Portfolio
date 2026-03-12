import { GraduationCap, Briefcase, Cpu } from "lucide-react";
import { useTranslation } from "react-i18next";

export const About = () => {
    const { t } = useTranslation();
    const experiences = t("about.experiences", { returnObjects: true });

    return (
        <section id="about" className="py-24 px-4 bg-background">
            <div className="container mx-auto max-w-6xl">
                
                {/* CABEÇALHO PADRÃO (Igual às outras secções) */}
                <div className="flex items-center gap-4 mb-16">
                    <div className="h-px flex-1 bg-border" />
                    <h2 className="text-3xl font-mono tracking-tighter uppercase">
                        01. {t("about.aboutLine")} <span className="text-primary">{t("about.meLine")}</span>
                    </h2>
                    <div className="h-px flex-1 bg-border" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    
                    {/* COLUNA ESQUERDA: ACADEMIC */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="flex items-center gap-3 text-primary/80">
                            <GraduationCap size={18} />
                            <h3 className="font-mono font-bold uppercase tracking-[0.2em] text-xs">
                                System.Education_log
                            </h3>
                        </div>

                        <div className="space-y-6">
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
                                <div key={index} className="group relative p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-all duration-300">
                                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                        <div className="space-y-1">
                                            <h4 className="text-xl font-black tracking-tighter uppercase group-hover:text-primary transition-colors leading-none">
                                                {exp.role}
                                            </h4>
                                            <div className="flex items-center gap-2 mt-2">
                                                <span className="h-1 w-1 bg-primary rounded-full" />
                                                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                                                    {exp.company}
                                                </p>
                                            </div>
                                        </div>
                                        <span className="font-mono text-[10px] bg-secondary px-3 py-1 border border-border rounded text-muted-foreground h-fit">
                                            [{exp.date}]
                                        </span>
                                    </div>
                                    <div className="absolute top-2 right-2 text-primary/5 group-hover:text-primary/10 transition-colors">
                                        <Briefcase size={24} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* BOTÕES DE AÇÃO */}
                {/* <div className="mt-20 flex flex-wrap gap-6 items-center">
                    <a 
                        href="#contact" 
                        className="px-8 py-3 bg-primary text-primary-foreground font-mono text-xs tracking-[0.2em] uppercase hover:opacity-90 transition-opacity"
                    >
                        &gt; {t("about.contact")}
                    </a>

                    <a 
                        href="/CV.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-8 py-3 border border-primary/30 text-primary font-mono text-xs tracking-[0.2em] uppercase hover:bg-primary/5 hover:border-primary transition-all"
                    >
                        [ {t("about.cv")} ]
                    </a>
                </div> */}
            </div>
        </section>
    );
};