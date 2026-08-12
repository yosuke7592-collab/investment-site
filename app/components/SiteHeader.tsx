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
      <div className="header-inner">
        <a className="brand" href="/">
          <small>INVESTMENT PRINCIPLES</small>
          <strong>投資の原則</strong>
        </a>
        <nav aria-label="メインナビゲーション">
          {links.map((link, index) => (
            <a className={link.paths.includes(pathname) ? "current" : ""} href={link.href} key={link.id}>
              <span>{String(index + 1).padStart(2, "0")}</span>{link.label}
            </a>
          ))}
        </nav>
      </div>
    </header><PageSubnav /></>
  );
}
