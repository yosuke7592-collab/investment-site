import SiteHeader from "../components/SiteHeader";

const checklist = [
  ["投資対象", "何を取引するのか。価格が動く理由を説明できるか。"],
  ["使う資金", "生活費とは分けた、失っても学習を続けられる金額か。"],
  ["入口", "どの条件がそろったら注文するのか。"],
  ["損切り", "予想と違ったとき、どの価格・損失額で終えるのか。"],
  ["出口", "利益を確定する条件と、保有を続ける条件は何か。"],
  ["記録", "理由、結果、感情、ルールを守れたかを残したか。"],
];

export default function PracticePage() {
  return <main className="practice-page">
    <SiteHeader />
    <section className="practice-hero"><p className="eyebrow">PRACTICE &amp; VERIFY</p><h1>画面操作より先に、<br/><em>判断を練習する。</em></h1><p>このサイト内に架空の取引画面は置きません。実際に使うサービスのデモ機能を利用し、注文前に決めたルールを守れるかを検証します。</p></section>
    <section className="practice-order"><div className="section-heading"><p className="eyebrow">BEFORE YOU PRACTICE</p><h2>練習前に決める6項目</h2><p>値動きを見てから決めるのではなく、注文前に書き出します。</p></div><div className="practice-checklist">{checklist.map((item, i) => <article key={item[0]}><span>{String(i + 1).padStart(2,"0")}</span><div><h3>{item[0]}</h3><p>{item[1]}</p></div></article>)}</div></section>
    <section className="practice-record"><p className="eyebrow">TRADE JOURNAL</p><h2>勝ったかより、<br/>ルールを守れたか。</h2><div><p><b>取引前</b>買う理由・損失上限・出口を書く</p><p><b>取引後</b>結果・感情・ルール違反を書く</p><p><b>一定回数後</b>記録をまとめてルールを見直す</p></div></section>
    <section className="practice-next"><div><p className="eyebrow">NEXT STEP</p><h2>練習環境は、目的から選ぶ</h2><p>株、FX、チャートなど、練習したい内容によって適切な外部サービスは変わります。比較ページでは、公式デモと注意点を同じ基準で整理しています。</p></div><a className="new-primary" href="/services">外部デモ・サービスを比較する <span>→</span></a></section>
  </main>;
}
