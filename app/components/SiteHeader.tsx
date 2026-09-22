"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import PageSubnav from "./PageSubnav";

type Props = { current?: "start" | "lessons" | "mechanics" | "courses" | "glossary" | "services" };

export default function SiteHeader({ current: _current }: Props) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const links = [
    { id: "start", label: "はじめての方", href: "/start", paths: ["/start"] },
    { id: "learn", label: "基礎を学ぶ", href: "/lessons?week=1", paths: ["/lessons", "/mechanics"] },
    { id: "style", label: "投資方法を考える", href: "/courses", paths: ["/courses", "/plan", "/long-term", "/nisa-vs-ideco", "/strategies", "/lab"] },
    { id: "find", label: "疑問を調べる", href: "/articles", paths: ["/articles", "/glossary"] },
    { id: "compare", label: "サービス比較", href: "/services", paths: ["/services"] },
  ];
  const isCurrent = (paths: string[]) => paths.some((path) => pathname === path || pathname.startsWith(`${path}/`));
  useEffect(() => setOpen(false), [pathname]);
  return (
    <><header className="simple-header unified-header">
      <div className="header-inner">
        <a className="brand" href="/">
          <small>INVESTMENT PRINCIPLES</small>
          <strong>投資の原則</strong>
        </a>
        <button className="mobile-menu-button" type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)}><span aria-hidden="true">☰</span> メニュー</button>
        <nav className="desktop-navigation" aria-label="メインナビゲーション">
          {links.map((link, index) => (
            <a className={isCurrent(link.paths) ? "current" : ""} href={link.href} key={link.id}>
              <span>{String(index + 1).padStart(2, "0")}</span>{link.label}
            </a>
          ))}
        </nav>
      </div>
      <nav id="mobile-navigation" className={`mobile-navigation${open ? " open" : ""}`} aria-label="スマートフォン用メインナビゲーション">{links.map((link) => <a className={isCurrent(link.paths) ? "current" : ""} href={link.href} key={link.id}>{link.label}<span>→</span></a>)}</nav>
    </header><PageSubnav /></>
  );
}
