type InvestmentMapProps = { compact?: boolean };

const topics = [
  { label: "株式", detail: "企業の成長と所有", href: "/mechanics", x: 18, y: 22 },
  { label: "投資信託", detail: "分散して積み立てる", href: "/articles/etf-vs-investment-trust", x: 8, y: 54 },
  { label: "ETF", detail: "市場で売買する投信", href: "/articles/etf-vs-investment-trust", x: 76, y: 22 },
  { label: "リスク", detail: "損失と向き合う", href: "/mechanics/leverage", x: 84, y: 54 },
  { label: "投資方法", detail: "時間と目的で選ぶ", href: "/courses", x: 20, y: 82 },
  { label: "検証", detail: "ルールを確かめる", href: "/lab", x: 74, y: 82 },
];

export default function InvestmentMap({ compact = false }: InvestmentMapProps) {
  return <section className={`investment-map${compact ? " compact" : ""}`} aria-labelledby="investment-map-title">
    <div className="investment-map-copy">
      <p className="eyebrow">INVESTMENT MAP</p>
      <h2 id="investment-map-title">投資の世界を、<br />関係から理解する。</h2>
      <p>商品名だけを覚えるのではなく、目的・仕組み・リスク・時間のつながりから考えます。整備済みのテーマだけを、学習ページへ案内しています。</p>
    </div>
    <div className="investment-map-visual" aria-label="投資、商品、リスク、投資方法、検証の関係図">
      <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">
        <path d="M50 50 C34 31 25 25 18 22 M50 50 C29 52 16 54 8 54 M50 50 C66 31 75 25 76 22 M50 50 C71 52 84 54 84 54 M50 50 C34 70 24 80 20 82 M50 50 C66 70 74 80 74 82" />
        <circle cx="50" cy="50" r="17" />
        <circle cx="50" cy="50" r="7" />
      </svg>
      <div className="map-core"><b>投資</b><span>INVESTMENT</span></div>
      {topics.map((topic) => <a key={topic.label} className="map-topic" href={topic.href} style={{ left: `${topic.x}%`, top: `${topic.y}%` }}><b>{topic.label}</b><span>{topic.detail}</span><i>→</i></a>)}
    </div>
  </section>;
}
