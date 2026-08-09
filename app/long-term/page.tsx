"use client";

import { useMemo, useState } from "react";

const plans = [
  { id: "steady", name: "安定重視", stock: 40, bond: 40, cash: 20, note: "値動きを抑えながら、長く続けることを優先" },
  { id: "balanced", name: "バランス", stock: 70, bond: 20, cash: 10, note: "成長を狙いながら、下落時の余力も残す" },
  { id: "growth", name: "成長重視", stock: 90, bond: 0, cash: 10, note: "長い運用期間を使い、大きな値動きも受け入れる" },
];

export default function LongTermPage() {
  const [planId, setPlanId] = useState("balanced");
  const [monthly, setMonthly] = useState(10000);
  const [years, setYears] = useState(20);
  const plan = plans.find((item) => item.id === planId) ?? plans[1];
  const principal = monthly * 12 * years;
  const estimate = useMemo(() => {
    const monthlyRate = 0.03 / 12;
    const months = years * 12;
    return Math.round(monthly * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate));
  }, [monthly, years]);

  return <main className="long-page">
    <header className="topbar"><a className="brand" href="/"><span className="brand-mark">18</span><span>投資の地図</span></a><a className="back-home" href="/#choose-path">← 2つのコースへ戻る</a></header>
    <section className="long-hero"><p className="eyebrow">COURSE A · LONG-TERM WEALTH BUILDING</p><h1>時間を味方に、<br/><em>仕組みで続ける。</em></h1><p>長期資産形成では、毎日の値動きを当てません。目的・期間・資産配分・積立額を決め、無理なく続く仕組みをつくります。</p><div className="long-principles"><span>長期</span><i>×</i><span>積立</span><i>×</i><span>分散</span><i>×</i><span>低コスト</span></div></section>

    <section className="long-roadmap"><div className="long-heading"><p className="eyebrow">LEARNING ROADMAP</p><h2>5つの順番で、<br/>自分の運用を設計する。</h2></div><div className="roadmap-list"><article><b>01</b><div><span>目的と期間</span><h3>いつ、何のために使うお金か</h3><p>生活防衛資金と近い将来に使うお金を除き、10年以上使わない資金を運用候補にします。</p></div></article><article><b>02</b><div><span>制度</span><h3>NISAは商品ではなく「非課税の箱」</h3><p>制度を使っても値下がりリスクは消えません。まず中に入れる商品の特徴と費用を確認します。</p></div></article><article><b>03</b><div><span>商品</span><h3>投資信託・ETFの中身を比べる</h3><p>連動する指数、投資地域、資産の種類、信託報酬、純資産総額を同じ基準で比べます。</p></div></article><article><b>04</b><div><span>配分</span><h3>上がりそうな資産ではなく、続けられる配分</h3><p>株式・債券・現金の割合は、年齢だけでなく使用時期と下落への耐性から決めます。</p></div></article><article><b>05</b><div><span>運用ルール</span><h3>積み立て、年に一度だけ点検する</h3><p>相場予想で頻繁に変えず、積立額・配分・見直す時期を先に決めます。</p></div></article></div></section>

    <section className="allocation-lab"><div className="long-heading"><p className="eyebrow">ALLOCATION LAB</p><h2>正解ではなく、<br/>続けられる配分を選ぶ。</h2><p>以下は考え方を比較する練習例です。特定の配分を推奨するものではありません。</p></div><div className="plan-tabs">{plans.map((item) => <button key={item.id} className={planId === item.id ? "active" : ""} onClick={() => setPlanId(item.id)}>{item.name}<small>{item.note}</small></button>)}</div><div className="allocation-card"><div className="allocation-visual"><div style={{width:`${plan.stock}%`}} className="stock-part">株式 {plan.stock}%</div>{plan.bond > 0 && <div style={{width:`${plan.bond}%`}} className="bond-part">債券 {plan.bond}%</div>}<div style={{width:`${plan.cash}%`}} className="cash-part">現金 {plan.cash}%</div></div><div className="allocation-check"><span>この配分で考える問い</span><p>✓ 株式が30%下がっても積立を続けられるか</p><p>✓ 近い将来に使うお金を含めていないか</p><p>✓ 値上がりを見て途中で配分を変えないか</p></div></div></section>

    <section className="long-simulator"><div className="long-heading"><p className="eyebrow">ACCUMULATION SIMULATOR</p><h2>積立額より先に、<br/>続けられる金額を考える。</h2><p>年率3%が一定で続くと仮定した単純計算です。将来の運用成果を保証しません。</p></div><div className="long-sim-grid"><div className="long-controls"><label><span>毎月の積立額</span><input aria-label="毎月の積立額" type="range" min="1000" max="50000" step="1000" value={monthly} onChange={(e) => setMonthly(Number(e.target.value))}/><b>{monthly.toLocaleString()}円</b></label><label><span>積立期間</span><input aria-label="積立期間" type="range" min="5" max="40" step="5" value={years} onChange={(e) => setYears(Number(e.target.value))}/><b>{years}年</b></label></div><div className="long-result"><div><span>積み立てた元本</span><strong>{principal.toLocaleString()}円</strong></div><div><span>年率3%と仮定した結果</span><strong>{estimate.toLocaleString()}円</strong></div><p>差額は約 {(estimate - principal).toLocaleString()}円。ただし実際は毎年上下し、元本割れもあります。</p></div></div></section>

    <section className="long-rules"><div className="long-heading"><p className="eyebrow">MY LONG-TERM RULES</p><h2>長期投資にも、<br/>守るルールがある。</h2></div><div className="rule-table"><div><b>投資するお金</b><p>10年以上使わない余裕資金だけ</p></div><div><b>買う商品</b><p>中身・費用・リスクを説明できる分散商品</p></div><div><b>積立</b><p>家計を圧迫しない金額を毎月自動化</p></div><div><b>見直し</b><p>相場が動くたびではなく、年1回または生活変化時</p></div><div><b>売却</b><p>暴落したからではなく、目的の時期が近づいたら段階的に</p></div></div></section>

    <section className="course-next"><p className="eyebrow">NEXT STEP</p><h2>次に作る教材</h2><div><span>01</span><p>NISA・課税口座の使い分け</p><span>02</span><p>投資信託・ETFの比較実習</p><span>03</span><p>証券会社・学習サービスの公平な比較</p></div><a href="/lab">個別株・アクティブ投資コースも見る →</a></section>
  </main>;
}
