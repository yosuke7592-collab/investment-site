"use client";

import { usePathname } from "next/navigation";
import { SmallNav } from "./PageSubnav";

const sections = [
  { label: "はじめから学ぶ", href: "/lessons?week=1" },
  { label: "投資方法を選ぶ", href: "/courses" },
  { label: "分析・取引を学ぶ", href: "/strategies/products" },
  { label: "用語・サービス", href: "/glossary" },
];

const nextByPath: Record<string, { label: string; href: string }> = {
  "/": { label: "最初に伝えたいこと", href: "/start" },
  "/start": { label: "基礎講座 第1回", href: "/lessons?week=1" },
  "/mechanics": { label: "レバレッジ", href: "/mechanics/leverage" },
  "/mechanics/leverage": { label: "投資スタイルを選ぶ", href: "/courses" },
  "/courses": { label: "自分の投資設計", href: "/plan" },
  "/plan": { label: "長期資産形成", href: "/long-term" },
  "/long-term": { label: "アクティブ投資", href: "/strategies" },
  "/strategies": { label: "投資商品を知る", href: "/strategies/products" },
  "/strategies/products": { label: "チャートを読む", href: "/strategies/chart" },
  "/strategies/chart": { label: "チャートパターン図鑑", href: "/strategies/patterns" },
  "/strategies/patterns": { label: "手法と戦略を作る", href: "/strategies/methods" },
  "/strategies/methods": { label: "練習と検証", href: "/lab" },
  "/lab": { label: "サービスを比較する", href: "/services" },
  "/services": { label: "編集方針と情報源", href: "/about" },
};

export default function GlobalJourney() {
  const pathname = usePathname();
  const next = nextByPath[pathname];
  return (
    <>
      <section className="global-journey">
        <div className="global-journey-inner">
          {next && <a className="global-next" href={next.href}><small>NEXT</small><b>次へ｜{next.label}</b><span>→</span></a>}
          <SmallNav position="bottom" />
        </div>
      </section>
      <footer className="global-principle">
        <div className="footer-inner">
          <nav aria-label="大項目一覧">{sections.map((section) => <a href={section.href} key={section.href}>{section.label}</a>)}</nav>
          <p className="eyebrow">OUR PRINCIPLE</p>
          <blockquote><span>自分のルールを作り、</span><em>そのルールを守る。</em></blockquote>
          <p className="footer-note">本サイトは金融教育を目的とした教材です。利益を保証したり、特定商品の売買を勧めたりするものではありません。</p>
          <div className="footer-bottom"><a className="footer-site-name" href="/">投資の原則</a><span>© 2026 Learn first, decide for yourself.</span></div>
        </div>
      </footer>
    </>
  );
}
