import { useState } from "react";
import { Github, Lock, ExternalLink, Youtube, FileText } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "../lib/utils";

export const Projects = () => {
    const { t } = useTranslation();
    const [activeCategory, setActiveCategory] = useState("all");

    const categories = t("projects.categories", { returnObjects: true }) || [];
    const allProjects = t("projects.items", { returnObjects: true }) || [];

    const filteredProjects = activeCategory === "all"
        ? allProjects
        : allProjects.filter(project => project.category === activeCategory);

    return (
        <section id="projects" className="py-24 px-4 bg-background">
            <div className="container mx-auto max-w-6xl">

                {/* Cabeçalho */}
                <div className="flex items-center gap-4 mb-16">
                    <div className="h-px flex-1 bg-border" />
                    <h2 className="text-3xl font-mono tracking-tighter uppercase flex gap-2">
                        <span className="text-muted-foreground">03. {t("projects.title")}</span>
                        <span className="text-primary font-bold">{t("projects.title2")}</span>
                    </h2>
                    <div className="h-px flex-1 bg-border" />
                </div>

                {/* Filtros */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat.key}
                            onClick={() => setActiveCategory(cat.key)}
                            className={cn(
                                "px-4 py-1 font-mono text-xs transition-all border",
                                activeCategory === cat.key
                                    ? "bg-primary text-primary-foreground border-primary"
                                    : "bg-transparent text-muted-foreground border-border hover:border-primary/50"
                            )}
                        >
                            {activeCategory === cat.key ? `[ ${cat.label} ]` : cat.label}
                        </button>
                    ))}
                </div>

                {/* Grid de Projetos */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-all shadow-sm">
                            {/* Imagem */}
                            <div className="h-48 overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 relative">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                {!project.appUrl && !project.youtubeUrls && !project.thesisUrl && (
                                    <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm px-2 py-1 rounded border border-border">
                                        <span className="text-[9px] font-mono uppercase tracking-tighter flex items-center gap-1">
                                            <Lock size={10} /> Proprietary
                                        </span>
                                    </div>
                                )}
                            </div>

                            <div className="p-6">
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-2 py-0.5 text-[10px] font-mono uppercase bg-primary/5 text-primary border border-primary/20 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-bold mb-2 uppercase tracking-tight group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-6 leading-relaxed whitespace-normal">
                                    {project.description}
                                </p>

                                {/* Links de Ação */}
                                <div className="flex flex-wrap justify-end gap-4 pt-4 border-t border-border/40">

                                    {/* Link da App */}
                                    {project.appUrl && (
                                        <a href={project.appUrl} target="_blank" rel="noreferrer"
                                            className="text-xs font-mono flex items-center gap-2 text-primary hover:underline">
                                            {project.appLabel || "LAUNCH_APP"} <ExternalLink size={14} />
                                        </a>
                                    )}

                                    {/* PDF da Tese */}
                                    {project.thesisUrl && (
                                        <a href={project.thesisUrl} target="_blank" rel="noreferrer"
                                            className="text-xs font-mono flex items-center gap-2 text-primary hover:underline">
                                            {project.thesisLabel || "READ_THESIS"} <FileText size={14} />
                                        </a>
                                    )}

                                    {/* Vídeos do YouTube (pode ser um array) */}
                                    {project.youtubeUrls && project.youtubeUrls.map((video, i) => (
                                        <a key={i} href={video.url} target="_blank" rel="noreferrer"
                                            className="text-xs font-mono flex items-center gap-2 text-primary hover:underline">
                                            {video.label} <Youtube size={14} />
                                        </a>
                                    ))}

                                    {/* NDA / sem links */}
                                    {!project.appUrl && !project.thesisUrl && !project.youtubeUrls && (
                                        <div className="text-[10px] font-mono text-muted-foreground flex items-center gap-2 opacity-60 italic">
                                            {project.restrictedLabel || t("projects.restricted")}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};