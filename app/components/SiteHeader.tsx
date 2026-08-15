"use client";

import { usePathname } from "next/navigation";
import PageSubnav from "./PageSubnav";

type Props = { current?: "start" | "lessons" | "mechanics" | "courses" | "glossary" | "services" };

export default function SiteHeader({ current: _current }: Props) {
  const pathname = usePathname();
  const links = [
    { id: "learn", label: "はじめから学ぶ", href: "/lessons?week=1", paths: ["/start", "/lessons", "/mechanics", "/mechanics/leverage"] },
    { id: "style", label: "投資方法を選ぶ", href: "/courses", paths: ["/courses", "/plan", "/long-term", "/strategies"] },
    { id: "practice", label: "分析・取引を学ぶ", href: "/strategies/products", paths: ["/strategies/products", "/strategies/chart", "/strategies/patterns", "/strategies/methods", "/lab"] },
    { id: "tools", label: "用語・サービス", href: "/glossary", paths: ["/glossary", "/services", "/about"] },
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
