import { useState } from "react";
import { cn } from "../lib/utils";
import { useTranslation } from "react-i18next";

const skills = [
    
    // Industrial Automation & Robotics
    { name: "Beckhoff TwinCAT 3", level: 85, category: "automation" },
    { name: "ROS2", level: 90, category: "automation" },
    { name: "Universal Robots", level: 75, category: "automation" },
    { name: "PLC Programming", level: 85, category: "automation" },
    { name: "Industrial Vision (Sensorpart)", level: 80, category: "automation" },

    // Software Engineering & Backend
    { name: "C# / .NET", level: 85, category: "software" },
    { name: "C / C++", level: 75, category: "software" },
    { name: "SQL Server", level: 75, category: "software" },
    { name: "Python", level: 40, category: "software" },

    // Frontend 
    { name: "React / Next.js", level: 20, category: "frontend" },
    { name: "JavaScript / TypeScript", level: 40, category: "frontend" },
    { name: "Tailwind CSS", level: 30, category: "frontend" },
    { name: "HTML/CSS", level: 70, category: "frontend" },
    
    // Tools & Professional
    { name: "Git / GitLab", level: 85, category: "tools" },
    { name: "Technical Documentation", level: 90, category: "tools" },
    { name: "Agile / Scrum", level: 80, category: "tools" },
]

const categories = ["all", "software", "automation", "frontend", "tools"];

export const Skills = () => {
    const { t } = useTranslation();

    const skills = t("skills.skillsList", { returnObjects: true });
    const categories = t("skills.categories", { returnObjects: true });

    //escolher categoria
    const [activeCategory, setActiveCategory] = useState("all");
    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );

    console.log("activeCategory:", activeCategory);
    console.log("categories in skills:", skills.map(s => s.category));

    return (
    <section id="skills" className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
            
            {/* Cabeçalho Técnico 02 */}
            <div className="flex items-center gap-4 mb-16">
                <div className="h-px flex-1 bg-border" />
                <h2 className="text-3xl font-mono tracking-tighter uppercase">
                    02. {t("skills.title")} <span className="text-primary">{t("skills.title2")}</span>
                </h2>
                <div className="h-px flex-1 bg-border" />
            </div>

            {/* Filtros Estilo Terminal */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
                {categories.map((c) => (
                    <button
                        key={c.key}
                        onClick={() => setActiveCategory(c.key)}
                        className={cn(
                            "px-4 py-1 font-mono text-xs transition-all border",
                            activeCategory === c.key
                                ? "bg-primary text-primary-foreground border-primary"
                                : "bg-transparent text-muted-foreground border-border hover:border-primary/50"
                        )}
                    >
                        {activeCategory === c.key ? `> ${c.label}` : c.label}
                    </button>
                ))}
            </div>

            {/* Grid de Skills */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="bg-card/50 p-4 md:p-6 border border-border rounded-xl hover:border-primary/50 transition-all group">
                        <div className="text-left mb-4">
                            <h3 className="font-mono text-xs md:text-sm uppercase tracking-wider group-hover:text-primary transition-colors truncate">
                                {skill.name}
                            </h3>
                        </div> 
                        <div className="w-full bg-secondary h-1 rounded-full overflow-hidden">
                            <div className="bg-primary h-full origin-left animate-[grow_1.5s_ease-out]"
                                style={{width: skill.level + "%"}}
                            />
                        </div>
                        <div className="text-right mt-2">
                            <span className="text-[10px] font-mono opacity-50">{skill.level}%</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
}