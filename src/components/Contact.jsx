import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Contact = () => {
    const { t } = useTranslation();

    return (
        <section id="contact" className="py-24 px-4 bg-background">
            <div className="container mx-auto max-w-6xl">
                
                {/* Cabeçalho Técnico 04 */}
                <div className="flex items-center gap-4 mb-16">
                    <div className="h-px flex-1 bg-border" />
                    <h2 className="text-3xl font-mono tracking-tighter uppercase">
                        04. {t("contact.title")} <span className="text-primary">{t("contact.title2")}</span>
                    </h2>
                    <div className="h-px flex-1 bg-border" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    
                    {/* Coluna da Esquerda: Info */}
                    <div className="space-y-8">
                        <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                            // {t("contact.subtitle")}
                        </p>
                        
                        <div className="space-y-4">
                            {/* Email Card */}
                            <div className="flex items-center gap-4 p-5 border border-border bg-card/50 rounded-xl group hover:border-primary/50 transition-colors">
                                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h4 className="font-mono text-xs uppercase opacity-50">Email_Address</h4>
                                    <a href="mailto:ivanrcastro6@gmail.com" className="text-sm font-bold hover:text-primary transition-colors">
                                        ivanrcastro6@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Location Card */}
                            <div className="flex items-center gap-4 p-5 border border-border bg-card/50 rounded-xl group hover:border-primary/50 transition-colors">
                                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="font-mono text-xs uppercase opacity-50">Current_Location</h4>
                                    <p className="text-sm font-bold">Porto, Portugal</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Coluna da Direita: Social & CTA */}
                    <div className="flex flex-col gap-8 bg-secondary/20 p-8 rounded-2xl border border-dashed border-border">
                        <div>
                            <h4 className="font-mono text-xs uppercase tracking-widest mb-6 opacity-60 text-center md:text-left">
                                system_connect:
                            </h4>
                            <div className="flex justify-center md:justify-start gap-4">
                                <a 
                                    href="https://linkedin.com/in/ivan-castro-472552232/" 
                                    target="_blank" 
                                    className="p-4 border border-border rounded-xl bg-card hover:border-primary hover:text-primary hover:translate-y-[-4px] transition-all"
                                >
                                    <Linkedin size={24} />
                                </a>
                                <a 
                                    href="https://github.com/ivanrcastro" 
                                    target="_blank" 
                                    className="p-4 border border-border rounded-xl bg-card hover:border-primary hover:text-primary hover:translate-y-[-4px] transition-all"
                                >
                                    <Github size={24} />
                                </a>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-border">
                            <a 
                                href="mailto:ivanrcastro6@gmail.com"
                                className="w-full py-4 bg-primary text-primary-foreground font-mono text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                            >
                            &gt; {t("contact.sendButton")} 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};