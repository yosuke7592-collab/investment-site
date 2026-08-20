import SiteHeader from "../components/SiteHeader";

const chapters = [
  { no: "01", title: "選ぶ商品と見るデータ", text: "株・投資信託・ETF・FX・金銀・暗号資産を、利益の源泉、値動き、費用、レバレッジ、見るデータで比較します。", href: "/strategies/products", tag: "まず選ぶ" },
  { no: "02", title: "チャートを読む", text: "時間軸、ライン、ローソク足、移動平均線、主要指標を学び、必要な人だけ図鑑でパターンを深掘りします。", href: "/strategies/chart", tag: "最も使う" },
  { no: "03", title: "手法と戦略を作る", text: "スキャルピングからポジションまでを比べ、自分の生活に合う時間軸と売買ルールを決めます。", href: "/strategies/methods", tag: "ルール化" },
  { no: "04", title: "投資用語集", text: "教材で出てくる専門用語をカテゴリとキーワードから探し、その場で意味を確認できます。", href: "/glossary", tag: "困ったら戻る" },
];

export default function StrategiesHub() {
  return <main className="analysis-hub">
    <SiteHeader current="courses" />
    <section className="analysis-hero"><p className="eyebrow">ANALYSIS &amp; STRATEGY COURSE</p><h1>アクティブ投資で<br/><em>学ぶ内容</em></h1><p>チャートを眺めるだけでは判断できません。商品、時間軸、相場の状態、入口、損切り、出口を順番に決めます。</p><div className="analysis-flow"><span>商品</span><i>→</i><span>チャート</span><i>→</i><span>手法</span><i>→</i><span>戦略</span><i>→</i><span>記録</span></div></section>
    <section className="analysis-chapters"><div className="analysis-heading"><p className="eyebrow">ACTIVE INVESTING ROUTE</p><h2>商品・チャート・手法・ルール</h2><p>初めてなら01から。用語集は分からない言葉が出たときに使います。</p></div><div className="chapter-grid">{chapters.map((item) => <a href={item.href} key={item.no}><span>{item.no}</span><small>{item.tag}</small><h3>{item.title}</h3><p>{item.text}</p><b>このページを学ぶ →</b></a>)}</div></section>
  </main>;
}
