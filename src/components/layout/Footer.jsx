
export default function Footer() {
  return (
    <footer className="text-center py-8 text-[var(--text-muted)] text-sm border-t border-[var(--border)]">
      Diseñado y desarrollado por{" "}
      <span className="text-[var(--accent)]">Miriam Miranda Rodríguez Morales</span>
      {" · "}{new Date().getFullYear()}
    </footer>
  );
}