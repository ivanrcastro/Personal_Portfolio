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
    setIsMenuOpen(false);
  };

  // BLOQUEIO DE SCROLL: Impede o scroll do body quando o menu está aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

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

  // Efeito de scroll para mudar a aparência da nav
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
          "text-lg md:text-xl font-mono font-black tracking-tighter hover:text-primary transition-colors z-[130]",
          !isScrolled && "md:block hidden" 
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
                <div className="absolute right-0 mt-2 w-32 bg-card border border-border shadow-2xl rounded overflow-hidden animate-in fade-in zoom-in-95 duration-200 z-[140]">
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

        {/* MOBILE ACTIONS (Botão flutua acima do overlay) */}
        <div className="flex md:hidden items-center gap-3 z-[130]">
          <ThemeToggle />
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="p-2 text-primary bg-secondary/80 backdrop-blur-md rounded-lg border border-border active:scale-95 transition-transform"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE OVERLAY MENU */}
        <div className={cn(
          "fixed inset-0 bg-background/98 backdrop-blur-2xl md:hidden transition-all duration-500 flex flex-col z-[120] h-dvh w-screen",
          isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        )}>
          <div className="flex flex-col justify-center px-10 space-y-10 h-full">
            <div className="space-y-8 flex flex-col">
              <span className="font-mono text-[10px] text-primary/40 tracking-[0.5em] uppercase border-b border-border pb-4">
                Navigation_System
              </span>
              
              <div className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <a 
                    key={item.key} 
                    href={item.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-4xl font-mono font-bold uppercase tracking-tighter flex items-center gap-4 group"
                  >
                    <span className="text-primary text-xs font-light">[{item.id}]</span>
                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                      {t(`nav.${item.key}`)}
                    </span>
                  </a>
                ))}
              </div>
              
              <div className="pt-10 border-t border-border mt-4">
                 <span className="font-mono text-[10px] text-primary/40 tracking-[0.5em] uppercase block mb-6">
                   Language_Selection
                 </span>
                 <div className="grid grid-cols-2 gap-3">
                   {["en", "pt", "fr", "de"].map((lang) => (
                     <button
                       key={lang}
                       onClick={() => changeLanguage(lang)}
                       className={cn(
                         "py-4 rounded border font-mono text-[11px] font-bold uppercase tracking-widest transition-all",
                         currentLang.toLowerCase() === lang 
                           ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20" 
                           : "bg-secondary/50 border-border active:bg-secondary"
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
      </div>
    </nav>
  );
};