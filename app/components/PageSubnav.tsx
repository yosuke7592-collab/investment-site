"use client";

import { usePathname } from "next/navigation";

const groups = [
  {
    paths: ["/start", "/lessons", "/mechanics", "/mechanics/leverage"],
    links: [
      { label: "はじめに", href: "/start" },
      { label: "基礎講座", href: "/lessons?week=1" },
      { label: "取引の仕組み", href: "/mechanics" },
      { label: "レバレッジ", href: "/mechanics/leverage" },
    ],
  },
  {
    paths: ["/courses", "/plan", "/long-term", "/strategies"],
    links: [
      { label: "スタイル比較", href: "/courses" },
      { label: "投資設計", href: "/plan" },
      { label: "長期資産形成", href: "/long-term" },
      { label: "アクティブ投資", href: "/strategies" },
    ],
  },
  {
    paths: ["/strategies/products", "/strategies/chart", "/strategies/patterns", "/strategies/methods", "/lab"],
    links: [
      { label: "商品を選ぶ", href: "/strategies/products" },
      { label: "チャート", href: "/strategies/chart" },
      { label: "パターン図鑑", href: "/strategies/patterns" },
      { label: "手法・戦略", href: "/strategies/methods" },
      { label: "練習・検証", href: "/lab" },
    ],
  },
  {
    paths: ["/glossary", "/services", "/about"],
    links: [
      { label: "用語集", href: "/glossary" },
      { label: "サービス比較", href: "/services" },
      { label: "編集方針", href: "/about" },
    ],
  },
];

export function SmallNav({ position }: { position: "top" | "bottom" }) {
  const pathname = usePathname();
  const group = groups.find((item) => item.paths.includes(pathname));
  if (!group) return null;
  return <div className={`page-subnav-shell ${position}`}><nav className={`page-subnav ${position}`} aria-label="この項目のページ">
    {group.links.map((link) => <a className={pathname === link.href.split("?")[0] ? "current" : ""} href={link.href} key={link.href}>{link.label}</a>)}
  </nav></div>;
}

export default function PageSubnav() { return <SmallNav position="top" />; }
