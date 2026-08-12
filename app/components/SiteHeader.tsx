"use client";

import { usePathname } from "next/navigation";
import PageSubnav from "./PageSubnav";

type Props = { current?: "start" | "lessons" | "mechanics" | "courses" | "glossary" | "services" };

export default function SiteHeader({ current: _current }: Props) {
  const pathname = usePathname();
  const links = [
    { id: "learn", label: "基礎を学ぶ", href: "/lessons?week=1", paths: ["/start", "/lessons", "/mechanics", "/mechanics/leverage"] },
    { id: "style", label: "スタイルを選ぶ", href: "/courses", paths: ["/courses", "/long-term", "/strategies"] },
    { id: "practice", label: "実践する", href: "/strategies/products", paths: ["/strategies/products", "/strategies/chart", "/strategies/methods", "/lab"] },
    { id: "tools", label: "調べる・比較する", href: "/glossary", paths: ["/glossary", "/services"] },
  ];
  return (
    <><header className="simple-header unified-header">
      <a className="brand" href="/">
        <span>投資の原則</span>
      </a>
      <nav aria-label="メインナビゲーション">
        {links.map((link) => (
          <a className={link.paths.includes(pathname) ? "current" : ""} href={link.href} key={link.id}>
            {link.label}
          </a>
        ))}
      </nav>
    </header><PageSubnav /></>
  );
}
