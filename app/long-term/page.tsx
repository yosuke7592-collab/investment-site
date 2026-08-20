"use client";

import { useMemo, useState } from "react";
import SiteHeader from "../components/SiteHeader";

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
    <SiteHeader current="courses" />
    <section className="long-hero"><p className="eyebrow">COURSE A · LONG-TERM WEALTH BUILDING</p><h1>長期資産形成の<br/><em>基本的な考え方</em></h1><p>長期資産形成では、毎日の値動きを当てません。目的・期間・資産配分・積立額を決め、無理なく続く仕組みをつくります。</p><div className="long-principles"><span>長期</span><i>×</i><span>積立</span><i>×</i><span>分散</span><i>×</i><span>低コスト</span></div></section>

    <section className="long-roadmap"><div className="long-heading"><p className="eyebrow">LEARNING ROADMAP</p><h2>長期運用を考える主な項目</h2></div><div className="roadmap-list"><article><b>01</b><div><span>目的と期間</span><h3>目的と運用期間を決める</h3><p>生活防衛資金と近い将来に使うお金を除き、10年以上使わない資金を運用候補にします。</p></div></article><article><b>02</b><div><span>制度</span><h3>NISAの制度と対象商品</h3><p>制度を使っても値下がりリスクは消えません。まず中に入れる商品の特徴と費用を確認します。</p></div></article><article><b>03</b><div><span>商品</span><h3>投資信託・ETFの中身を比べる</h3><p>連動する指数、投資地域、資産の種類、信託報酬、純資産総額を同じ基準で比べます。</p></div></article><article><b>04</b><div><span>配分</span><h3>資産配分と値下がりへの備え</h3><p>株式・債券・現金の割合は、年齢だけでなく使用時期と下落への耐性から決めます。</p></div></article><article><b>05</b><div><span>運用ルール</span><h3>積立と運用内容の見直し</h3><p>相場予想で頻繁に変えず、積立額・配分・見直す時期を先に決めます。</p></div></article></div></section>

    <section className="allocation-lab"><div className="long-heading"><p className="eyebrow">ALLOCATION LAB</p><h2>資産配分の考え方を比べる</h2><p>以下は考え方を比較する練習例です。特定の配分を推奨するものではありません。</p></div><div className="plan-tabs">{plans.map((item) => <button key={item.id} className={planId === item.id ? "active" : ""} onClick={() => setPlanId(item.id)}>{item.name}<small>{item.note}</small></button>)}</div><div className="allocation-card"><div className="allocation-visual"><div style={{width:`${plan.stock}%`}} className="stock-part">株式 {plan.stock}%</div>{plan.bond > 0 && <div style={{width:`${plan.bond}%`}} className="bond-part">債券 {plan.bond}%</div>}<div style={{width:`${plan.cash}%`}} className="cash-part">現金 {plan.cash}%</div></div><div className="allocation-check"><span>この配分で考える問い</span><p>✓ 株式が30%下がっても積立を続けられるか</p><p>✓ 近い将来に使うお金を含めていないか</p><p>✓ 値上がりを見て途中で配分を変えないか</p></div></div></section>

    <section className="long-simulator"><div className="long-heading"><p className="eyebrow">ACCUMULATION SIMULATOR</p><h2>積立金額と期間を試算する</h2><p>年率3%が一定で続くと仮定した単純計算です。将来の運用成果を保証しません。</p></div><div className="long-sim-grid"><div className="long-controls"><label><span>毎月の積立額</span><input aria-label="毎月の積立額" type="range" min="1000" max="50000" step="1000" value={monthly} onChange={(e) => setMonthly(Number(e.target.value))}/><b>{monthly.toLocaleString()}円</b></label><label><span>積立期間</span><input aria-label="積立期間" type="range" min="5" max="40" step="5" value={years} onChange={(e) => setYears(Number(e.target.value))}/><b>{years}年</b></label></div><div className="long-result"><div><span>積み立てた元本</span><strong>{principal.toLocaleString()}円</strong></div><div><span>年率3%と仮定した結果</span><strong>{estimate.toLocaleString()}円</strong></div><p>差額は約 {(estimate - principal).toLocaleString()}円。ただし実際は毎年上下し、元本割れもあります。</p></div></div></section>

    <section className="long-exit"><div className="long-heading"><p className="eyebrow">THE EXIT MATTERS</p><h2>運用した資金を使う時期の考え方</h2><p>運用の目的は残高を最大化することではなく、必要な時に必要なお金を使えることです。</p></div><div className="exit-grid"><article><b>10年以上前</b><h3>使用時期まで余裕がある段階</h3><p>目的と下落耐性に合う配分で積み立て、短期の価格変動だけで方針を変えません。</p></article><article><b>5年前から</b><h3>使用時期が近づいた段階</h3><p>使う時期が近づいた資金を、値動きの小さい資産や現金へ段階的に移すことを検討します。</p></article><article><b>使用期</b><h3>資金を使う段階</h3><p>学費や生活費など支出時期に合わせ、必要分を計画的に取り崩します。税金と相場環境も確認します。</p></article></div><div className="worked-story"><h3>月1万円を20年間積み立てる例</h3><p>積立額は1万円と決める前に、20年後の目的額、現在用意できる元本、途中で必要になるお金を分けます。運用利回りを高く置いて不足を埋めるのではなく、積立額・期間・目標額を現実的に調整します。</p><p>年率3％のシミュレーションは計画を比べる道具であり、実際の毎年の成果や将来額を保証するものではありません。</p></div></section>
    <section className="long-rules"><div className="long-heading"><p className="eyebrow">MY LONG-TERM RULES</p><h2>長期投資のルール例</h2></div><div className="rule-table"><div><b>投資するお金</b><p>10年以上使わない余裕資金だけ</p></div><div><b>買う商品</b><p>中身・費用・リスクを説明できる分散商品</p></div><div><b>積立</b><p>家計を圧迫しない金額を毎月自動化</p></div><div><b>見直し</b><p>相場が動くたびではなく、年1回または生活変化時</p></div><div><b>売却</b><p>暴落したからではなく、目的の時期が近づいたら段階的に</p></div></div><small>内容確認日：2026年8月14日。NISA等の制度条件は最新の金融庁・金融機関情報を確認してください。</small></section>

  </main>;
}
