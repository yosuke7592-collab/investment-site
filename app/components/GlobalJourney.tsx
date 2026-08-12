"use client";

import { usePathname } from "next/navigation";
import { SmallNav } from "./PageSubnav";

const sections = [
  { label: "基礎を学ぶ", href: "/lessons?week=1" },
  { label: "スタイルを選ぶ", href: "/courses" },
  { label: "実践する", href: "/strategies/products" },
  { label: "調べる・比較する", href: "/glossary" },
];

const nextByPath: Record<string, { label: string; href: string }> = {
  "/": { label: "最初に伝えたいこと", href: "/start" },
  "/start": { label: "基礎講座 第1回", href: "/lessons?week=1" },
  "/lessons": { label: "取引の仕組み", href: "/mechanics" },
  "/mechanics": { label: "レバレッジ", href: "/mechanics/leverage" },
  "/mechanics/leverage": { label: "投資スタイルを選ぶ", href: "/courses" },
  "/courses": { label: "長期資産形成", href: "/long-term" },
  "/long-term": { label: "アクティブ投資", href: "/strategies" },
  "/strategies": { label: "投資商品を知る", href: "/strategies/products" },
  "/strategies/products": { label: "チャートを読む", href: "/strategies/chart" },
  "/strategies/chart": { label: "手法と戦略を作る", href: "/strategies/methods" },
  "/strategies/methods": { label: "練習と検証", href: "/lab" },
  "/lab": { label: "サービスを比較する", href: "/services" },
};

export default function GlobalJourney() {
  const pathname = usePathname();
  const next = nextByPath[pathname];
  return (
    <>
      <section className="global-journey">
        <SmallNav position="bottom" />
        {next && <a className="global-next" href={next.href}><small>NEXT</small><b>次へ｜{next.label}</b><span>→</span></a>}
      </section>
      <footer className="global-principle">
        <p className="eyebrow">OUR PRINCIPLE</p>
        <blockquote>自分のルールを作り、<br/><em>そのルールを守る。</em></blockquote>
        <p>本サイトは金融教育を目的とした教材です。利益を保証したり、特定商品の売買を勧めたりするものではありません。</p>
        <nav aria-label="大項目一覧">{sections.map((section) => <a href={section.href} key={section.href}>{section.label}</a>)}</nav>
        <div><b>投資の原則</b><span>© 2026 Learn first, decide for yourself.</span></div>
      </footer>
    </>
  );
}
