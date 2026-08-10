const chapters = [
  { no: "01", title: "選ぶ商品と見るデータ", text: "株・投資信託・ETF・FX・金銀・暗号資産を、利益の源泉、値動き、費用、レバレッジ、見るデータで比較します。", href: "/strategies/products", tag: "まず選ぶ" },
  { no: "02", title: "チャートを読む", text: "時間軸、トレンド、支持線・抵抗線、ローソク足、出来高、主要指標の順に読みます。", href: "/strategies/chart", tag: "最も使う" },
  { no: "03", title: "手法と戦略を作る", text: "スキャルピングからポジションまでを比べ、自分の生活に合う時間軸と売買ルールを決めます。", href: "/strategies/methods", tag: "ルール化" },
  { no: "04", title: "投資用語集", text: "教材で出てくる専門用語をカテゴリとキーワードから探し、その場で意味を確認できます。", href: "/glossary", tag: "困ったら戻る" },
];

export default function StrategiesHub() {
  return <main className="analysis-hub">
    <header className="topbar site-header"><a className="brand" href="/"><span className="brand-mark">18</span><span>投資の地図</span></a><nav className="global-nav" aria-label="メインナビゲーション"><a href="/courses">2つのコース</a><a className="current" href="/strategies">データ・戦略</a><a href="/glossary">用語集</a><a href="/services">サービス比較</a></nav></header>
    <section className="analysis-hero"><p className="eyebrow">ANALYSIS &amp; STRATEGY COURSE</p><h1>何を見るかを決め、<br/><em>自分のルールにする。</em></h1><p>チャートを眺めるだけでは判断できません。商品、時間軸、相場の状態、入口、損切り、出口を順番に決めます。</p><div className="analysis-flow"><span>商品</span><i>→</i><span>チャート</span><i>→</i><span>手法</span><i>→</i><span>戦略</span><i>→</i><span>記録</span></div></section>
    <section className="analysis-chapters"><div className="analysis-heading"><p className="eyebrow">LEARNING MAP</p><h2>4つのページに分けて、<br/>順番に学ぶ。</h2><p>初めてなら01から。すでに取引商品が決まっている場合は、02のチャートから進んでも構いません。</p></div><div className="chapter-grid">{chapters.map((item) => <a href={item.href} key={item.no}><span>{item.no}</span><small>{item.tag}</small><h3>{item.title}</h3><p>{item.text}</p><b>詳しく学ぶ →</b></a>)}</div></section>
    <section className="analysis-principle"><p className="eyebrow">THE CORE RULE</p><blockquote>指標を増やすより、<br/><em>判断の順番を固定する。</em></blockquote><p>指標は未来を当てるものではなく、同じ条件で判断するための補助道具です。複数の根拠がそろっても損失は起こります。</p><a href="/strategies/products">01 商品選びから始める →</a></section>
  </main>;
}
