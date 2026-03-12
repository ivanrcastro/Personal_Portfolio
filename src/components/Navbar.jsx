import { useEffect, useState, useRef } from "react";
import { cn } from "../lib/utils";
import { X, Menu, ChevronDown } from 'lucide-react';
import { useTranslation } from "react-i18next";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { key: "home", href: "#home", id: "00" },
  { key: "about", href: "#about", id: "01" },
  { key: "projects", href: "#projects", id: "03" },
  { key: "contact", href: "#contact", id: "04" },
];

export const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const dropDownRef = useRef(null);

    // Simplificação do código da língua atual
    const current = i18n.language?.split("-")[0].toUpperCase() || "PT";
    
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("lng", lng);
        setIsLangOpen(false);
    };

    // Fechar ao clicar fora - IMPORTANTE
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
                setIsLangOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={cn(
            "fixed w-full z-50 transition-all duration-300 px-6",
            isScrolled ? "py-4 bg-background/90 backdrop-blur-xl border-b border-border shadow-sm" : "py-8 bg-transparent"
        )}>
            <div className="container mx-auto flex items-center justify-between">
                
                <a href="#home" className="text-xl font-mono font-black tracking-tighter hover:text-primary transition-colors">
                    IVAN<span className="text-primary">.</span>CASTRO
                </a>

                {/* DESKTOP NAV */}
                <div className="hidden md:flex items-center gap-10">
                    <div className="flex items-center gap-8">
                        {navItems.map((item) => (
                            <a 
                                key={item.key} 
                                href={item.href} 
                                className="text-[12px] font-mono font-medium uppercase tracking-widest text-foreground/70 hover:text-primary transition-colors"
                            >
                                <span className="text-primary/40 mr-1.5 text-[10px]">{item.id}.</span>
                                {t(`nav.${item.key}`)}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-6 border-l border-border pl-8 font-mono">
                        {/* SELECTOR DE LÍNGUA CORRIGIDO */}
                        <div className="relative" ref={dropDownRef}>
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIsLangOpen(!isLangOpen);
                                }}
                                className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest hover:text-primary transition-colors py-2"
                            >
                                [{current}]
                                <ChevronDown size={12} className={cn("transition-transform duration-200", isLangOpen && "rotate-180")} />
                            </button>

                            {isLangOpen && (
                                <div className="absolute right-0 mt-2 w-28 bg-background border border-border shadow-2xl rounded-sm overflow-hidden z-[60] animate-in fade-in zoom-in-95 duration-200">
                                    {["en", "pt", "fr", "de"].map((lang) => (
                                        <button
                                            key={lang}
                                            onClick={() => changeLanguage(lang)}
                                            className={cn(
                                                "w-full text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors border-b border-border/50 last:border-0",
                                                current.toLowerCase() === lang ? "text-primary bg-primary/5" : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                                            )}
                                        >
                                            {lang === "en" ? "English" : lang === "pt" ? "Português" : lang === "fr" ? "Français" : "Deutsch"}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <ThemeToggle className="opacity-70 hover:opacity-100 transition-opacity" />
                    </div>
                </div>

                {/* MOBILE TRIGGER */}
                <button onClick={() => setIsMenuOpen(true)} className="md:hidden p-2 text-primary">
                    <Menu size={24} />
                </button>

                {/* MOBILE MENU */}
                <div className={cn(
                    "fixed inset-0 bg-background z-[100] flex flex-col transition-all duration-500",
                    isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full pointer-events-none"
                )}>
                    <div className="flex justify-end p-8">
                        <button onClick={() => setIsMenuOpen(false)} className="text-primary">
                            <X size={32} />
                        </button>
                    </div>
                    
                    <div className="flex-1 flex flex-col items-center justify-center gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item.key}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-4xl font-mono font-bold uppercase tracking-tighter hover:text-primary transition-colors"
                            >
                                <span className="text-primary text-sm align-top mr-2">{item.id}</span>
                                {t(`nav.${item.key}`)}
                            </a>
                        ))}
                    </div>

                    {/* Linguagens Mobile */}
                    <div className="p-12 border-t border-border flex flex-col items-center gap-6 bg-secondary/5">
                        <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Select Language</p>
                        <div className="flex gap-4">
                            {["en", "pt", "fr", "de"].map((l) => (
                                <button 
                                    key={l} 
                                    onClick={() => { changeLanguage(l); setIsMenuOpen(false); }}
                                    className={cn(
                                        "font-mono text-sm w-12 h-12 flex items-center justify-center rounded-full border transition-all", 
                                        current.toLowerCase() === l 
                                            ? "border-primary text-primary bg-primary/5 shadow-[0_0_15px_rgba(var(--primary),0.2)]" 
                                            : "border-border text-muted-foreground hover:border-primary/50"
                                    )}
                                >
                                    {l.toUpperCase()}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};