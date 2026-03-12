import { GraduationCap } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Academic() {
  const { t } = useTranslation();

  return (
    <>
      {/* MOBILE */}
      <div className="md:hidden space-y-6 flex flex-col justify-center">
        <div className="flex items-start gap-4">
          <div>
            <p className="font-semibold">{t("academic.bachelor")}</p>
            <p className="text-sm text-muted-foreground">{t("academic.university")}</p>
            <span className="text-xs text-muted-foreground">{t("academic.bYear")}</span>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div>
            <p className="font-semibold">{t("academic.master")}</p>
            <p className="text-sm text-muted-foreground">{t("academic.university")}</p>
            <span className="text-xs text-muted-foreground">{t("academic.mYear")}</span>
          </div>
        </div>
      </div>
      {/* Desktop */}
      <div className="hidden md:block space-y-6">
        <ol className="relative pl-16 space-y-6">
          <li className="relative">
            <div className="flex items-start gap-3">
              <GraduationCap className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-semibold">{t("academic.bachelor")}</p>
                <p className="text-sm text-muted-foreground">{t("academic.university")}</p>
                <span className="text-xs text-muted-foreground">{t("academic.bYear")}</span>
              </div>
            </div>
          </li>

          <li className="relative">
            <div className="flex items-start gap-3">
              <GraduationCap className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-semibold">{t("academic.master")}</p>
                <p className="text-sm text-muted-foreground">{t("academic.university")}</p>
                <span className="text-xs text-muted-foreground">{t("academic.mYear")}</span>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </>
  );
}
