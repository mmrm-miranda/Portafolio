import { useLanguage } from "../../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="text-center py-8 text-[var(--text-muted)] text-sm border-t border-[var(--border)]">
      {t("footer.credit")}{" "}
      <span className="text-[var(--accent)]">Miriam Miranda Rodríguez Morales</span>
      {" · "}{new Date().getFullYear()}
    </footer>
  );
}