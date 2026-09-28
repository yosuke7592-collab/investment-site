type InvestmentMapProps = { compact?: boolean };

const topics = [
  { label: "株式", detail: "企業の成長に投資", href: "/mechanics", position: "stock" },
  { label: "投資信託・ETF", detail: "分散投資で安定運用", href: "/articles/etf-vs-investment-trust", position: "fund" },
  { label: "債券", detail: "安定性を重視", position: "bond" },
  { label: "REIT", detail: "不動産に投資", position: "reit" },
  { label: "金・銀", detail: "インフレに備える", position: "metal" },
  { label: "暗号資産", detail: "新しい資産クラス", position: "crypto" },
  { label: "FX", detail: "為替で取引する", position: "fx" },
];

export default function InvestmentMap({ compact = false }: InvestmentMapProps) {
  return <section className={`v2-universe${compact ? " compact" : ""}`} aria-labelledby="investment-map-title">
    <div className="v2-container v2-universe-inner">
      <div className="v2-universe-copy"><p className="v2-kicker">INVESTMENT UNIVERSE</p><h2 id="investment-map-title">投資の世界を<br />体系的に理解する。</h2><p>さまざまな投資対象の特徴や関係性をわかりやすく整理。自分に合った投資の選択肢を見つけます。</p><a href="/courses">投資の世界を見る　→</a></div>
      <div className="v2-universe-map" aria-label="投資対象の関係図">
        <svg viewBox="0 0 1000 520" aria-hidden="true" focusable="false"><defs><radialGradient id="mapGlow"><stop stopColor="#d8ff37" stopOpacity=".5"/><stop offset="1" stopColor="#d8ff37" stopOpacity="0"/></radialGradient></defs><ellipse cx="520" cy="270" rx="200" ry="130" fill="none" stroke="#87b938" strokeOpacity=".55" strokeDasharray="4 12"/><ellipse cx="520" cy="270" rx="310" ry="205" fill="none" stroke="#78c2a5" strokeOpacity=".35" strokeDasharray="3 14"/><circle cx="520" cy="270" r="135" fill="url(#mapGlow)"/><path d="M520 270 L285 115 M520 270 L715 110 M520 270 L850 225 M520 270 L790 400 M520 270 L515 455 M520 270 L250 405 M520 270 L150 240" stroke="#9bdac2" strokeOpacity=".65" strokeWidth="1.5"/><g fill="#d8ff37">{["285,115","715,110","850,225","790,400","515,455","250,405","150,240"].map((point) => { const [cx, cy] = point.split(","); return <circle key={point} cx={cx} cy={cy} r="5" />; })}</g></svg>
        <div className="universe-core"><strong>投資</strong><span>INVESTMENT</span></div>
        {topics.map((topic) => topic.href ? <a className={`universe-topic ${topic.position}`} href={topic.href} key={topic.label}><i /><span><b>{topic.label}</b><small>{topic.detail}</small></span></a> : <span className={`universe-topic ${topic.position}`} key={topic.label}><i /><span><b>{topic.label}</b><small>{topic.detail}</small></span></span>)}
      </div>
    </div>
  </section>;
}
