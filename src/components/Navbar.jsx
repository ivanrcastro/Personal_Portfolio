import { useEffect, useState, useRef } from "react";
import { cn } from "../lib/utils";
import { X, Menu, ChevronDown, Globe } from 'lucide-react';
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

  const currentLang = i18n.language?.split("-")[0].toUpperCase() || "PT";

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
    setIsLangOpen(false);
    setIsMenuOpen(false); // Fecha o menu mobile se mudar a língua lá
  };

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Efeito de scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed w-full z-[100] transition-all duration-300 px-4 md:px-8",
      isScrolled 
        ? "py-4 bg-background/80 backdrop-blur-xl border-b border-border shadow-lg" 
        : "py-6 md:py-8 bg-transparent"
    )}>
      <div className="container mx-auto flex items-center justify-between">
        
        {/* LOGO / NOME */}
        <a href="#home" className={cn(
          "text-lg md:text-xl font-mono font-black tracking-tighter hover:text-primary transition-colors z-[110]",
          !isScrolled && "md:block hidden" // No topo, esconde no mobile para não chocar com o Hero
        )}>
          IVAN<span className="text-primary">.</span>CASTRO
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item.key} 
                href={item.href} 
                className="text-[11px] font-mono font-medium uppercase tracking-widest text-foreground/70 hover:text-primary transition-colors"
              >
                <span className="text-primary/40 mr-1.5 text-[10px]">{item.id}.</span>
                {t(`nav.${item.key}`)}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 border-l border-border pl-8">
            {/* Seletor de Idioma Desktop */}
            <div className="relative" ref={dropDownRef}>
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-widest hover:text-primary transition-all px-3 py-1.5 border border-transparent hover:border-border rounded"
              >
                <Globe size={14} className="text-primary/60" />
                {currentLang}
                <ChevronDown size={12} className={cn("transition-transform", isLangOpen && "rotate-180")} />
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-card border border-border shadow-2xl rounded overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                  {["en", "pt", "fr", "de"].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => changeLanguage(lang)}
                      className={cn(
                        "w-full text-left px-4 py-2.5 text-[10px] font-mono font-bold uppercase tracking-widest transition-colors border-b border-border/50 last:border-0",
                        currentLang.toLowerCase() === lang ? "text-primary bg-primary/5" : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                      )}
                    >
                      {lang === "en" ? "English" : lang === "pt" ? "Português" : lang === "fr" ? "Français" : "Deutsch"}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <ThemeToggle />
          </div>
        </div>

        {/* MOBILE ACTIONS (Theme + Menu) */}
        <div className="flex md:hidden items-center gap-3 z-[110]">
          <ThemeToggle />
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="p-2 text-primary bg-secondary/80 backdrop-blur-md rounded-lg border border-border"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE OVERLAY MENU */}
        <div className={cn(
          "fixed inset-0 bg-background/98 backdrop-blur-2xl md:hidden transition-all duration-500 flex flex-col justify-center px-8 z-[105]",
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        )}>
          <div className="space-y-8 flex flex-col">
            <span className="font-mono text-[10px] text-primary/40 tracking-[0.5em] uppercase border-b border-border pb-2">Navigation_System</span>
            {navItems.map((item) => (
              <a 
                key={item.key} 
                href={item.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl font-mono font-bold uppercase tracking-tighter flex items-center gap-4 group"
              >
                <span className="text-primary text-sm font-light">[{item.id}]</span>
                <span className="group-hover:translate-x-2 transition-transform">{t(`nav.${item.key}`)}</span>
              </a>
            ))}
            
            <div className="pt-8 border-t border-border mt-4">
               <span className="font-mono text-[10px] text-primary/40 tracking-[0.5em] uppercase block mb-4">Language_Selection</span>
               <div className="grid grid-cols-2 gap-2">
                 {["en", "pt", "fr", "de"].map((lang) => (
                   <button
                     key={lang}
                     onClick={() => changeLanguage(lang)}
                     className={cn(
                       "py-3 px-4 rounded border font-mono text-[10px] font-bold uppercase tracking-widest transition-all",
                       currentLang.toLowerCase() === lang ? "bg-primary text-primary-foreground border-primary" : "bg-secondary/50 border-border"
                     )}
                   >
                     {lang}
                   </button>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};