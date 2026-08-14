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
    <section className="journal-template"><div className="section-heading"><p className="eyebrow">WHAT TO RECORD</p><h2>一取引を、同じ項目で残す。</h2><p>記憶ではなく記録で判断できるようにします。スクリーンショットも取引前と取引後の2枚を残します。</p></div><div className="journal-fields">{["日付・商品・時間足","相場の状態","エントリーの3根拠","注文価格・数量","損切り価格・予定損失","利益確定の条件","実際の損益・取引コスト","守れなかったルール","取引中の感情","取引前後のチャート画像"].map((x,i)=><p key={x}><b>{String(i+1).padStart(2,"0")}</b>{x}</p>)}</div></section>
    <section className="journal-review"><div><p className="eyebrow">REVIEW AFTER 20 TRADES</p><h2>一回ごとに手法を変えない。</h2><p>同じルールで20回を一単位として集計します。20回でも結論ではありませんが、一度の成功・失敗より冷静に比較できます。</p></div><dl><div><dt>ルール遵守率</dt><dd>守れた回数 ÷ 全取引</dd></div><div><dt>勝率</dt><dd>利益になった回数 ÷ 全取引</dd></div><div><dt>平均利益・平均損失</dt><dd>利益合計／勝ち回数、損失合計／負け回数</dd></div><div><dt>期待値</dt><dd>勝率×平均利益 − 負け率×平均損失</dd></div><div><dt>最大連敗</dt><dd>連続損失に資金と感情が耐えられたか</dd></div></dl><p className="review-rule">見直す順番：①ルール違反を減らす → ②取引コストを含める → ③条件を一つだけ変更 → ④次の20回で再検証。</p></section>
  </main>;
}
