type Props = { current?: "start" | "lessons" | "mechanics" | "courses" | "glossary" | "services" };

export default function SiteHeader({ current }: Props) {
  const links = [
    { id: "start", label: "はじめに", href: "/start" },
    { id: "lessons", label: "基礎講座", href: "/lessons?week=1" },
    { id: "mechanics", label: "取引の仕組み", href: "/mechanics" },
    { id: "courses", label: "投資スタイル", href: "/courses" },
    { id: "glossary", label: "用語集", href: "/glossary" },
    { id: "services", label: "サービス比較", href: "/services" },
  ];
  return (
    <header className="simple-header unified-header">
      <a className="brand" href="/">
        <span className="brand-mark">18</span>
        <span>18歳からの投資の地図</span>
      </a>
      <nav aria-label="メインナビゲーション">
        {links.map((link) => (
          <a className={current === link.id ? "current" : ""} href={link.href} key={link.id}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
