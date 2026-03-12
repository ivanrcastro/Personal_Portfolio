import { MoveUp } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Footer = () => {
    const { t } = useTranslation();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="py-12 px-4 bg-background border-t border-border mt-12">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-6">
                
                {/* Coluna 1: Vazia */}
                <div className="hidden md:block"></div>

                {/* Coluna 2: Tudo na mesma linha */}
                <div className="flex items-center justify-center gap-4 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                    <span className="opacity-70">
                        © {new Date().getFullYear()} IVAN CASTRO // {t("footer.rights")}
                    </span>
                    
                    {/* Separador visual opcional, estilo terminal */}
                    <span className="opacity-30">|</span>

                    <div className="flex gap-4">
                        <a href="https://github.com/ivanrcastro" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                            Github
                        </a>
                        <a href="https://linkedin.com/in/ivanrcastro" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                            Linkedin
                        </a>
                    </div>
                </div>

                {/* Coluna 3: Botão Back to Top */}
                <div className="flex md:justify-end justify-center items-center">
                    <button 
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-primary transition-all duration-300"
                    >
                        <span className="opacity-40 group-hover:opacity-100">[</span>
                        <span className="mx-0.5">{t("footer.backToTop") || "Back to top"}</span>
                        <span className="opacity-40 group-hover:opacity-100">]</span>
                        
                        <MoveUp 
                            size={14} 
                            className="text-primary group-hover:-translate-y-1 transition-transform duration-300 stroke-[2px]" 
                        />
                    </button>
                </div>

            </div>
        </footer>
    );
};