"use client";

import { useMemo, useState } from "react";
import SiteHeader from "../components/SiteHeader";

export default function PlanPage() {
  const [period, setPeriod] = useState("long");
  const [time, setTime] = useState("little");
  const [loss, setLoss] = useState("low");
  const [reserve, setReserve] = useState("no");
  const result = useMemo(() => {
    if (reserve === "no") return { type: "準備を優先", title: "まず、投資しないお金を分ける。", body: "生活費と近い将来に使うお金を確保してから、残った余裕資金だけを投資候補にします。投資を急がないことも大切な判断です。", href: "/lessons?week=2", cta: "第2回｜守るお金を学ぶ" };
    if (period === "long" && time === "little" && loss !== "high") return { type: "長期資産形成から学ぶ", title: "予想より、仕組みで続ける。", body: "長期・積立・分散・低コストを中心に、目的と期間に合う資産配分を学びます。NISAは商品ではなく非課税制度です。", href: "/long-term", cta: "長期資産形成へ" };
    return { type: "分析と検証も学ぶ", title: "少額・現物・記録から始める。", body: "商品、チャート、注文、損切りを学び、模擬または生活へ影響しない少額でルールを検証します。短期ほど簡単になるわけではありません。", href: "/strategies", cta: "アクティブ投資へ" };
  }, [period, time, loss, reserve]);
  return <main className="plan-page"><SiteHeader current="courses" />
    <section className="plan-hero"><p className="eyebrow">FIRST INVESTMENT PLAN</p><h1>投資方法を考えるための<br/><em>条件整理</em></h1><p>投資方法は、資金・使う時期・使える時間・耐えられる損失で変わります。いくつかの質問に答えながら、学ぶ内容を整理します。</p></section>
    <section className="plan-questions">
      <div className="plan-question"><span>01</span><div><h2>生活費と近い将来に使うお金を、分けてある？</h2><div className="choice-row"><button className={reserve==="yes"?"active":""} onClick={()=>setReserve("yes")}>分けてある</button><button className={reserve==="no"?"active":""} onClick={()=>setReserve("no")}>まだ分けていない</button></div></div></div>
      <div className="plan-question"><span>02</span><div><h2>このお金を使うまでの期間は？</h2><div className="choice-row"><button className={period==="short"?"active":""} onClick={()=>setPeriod("short")}>5年以内</button><button className={period==="middle"?"active":""} onClick={()=>setPeriod("middle")}>5〜10年</button><button className={period==="long"?"active":""} onClick={()=>setPeriod("long")}>10年以上</button></div></div></div>
      <div className="plan-question"><span>03</span><div><h2>学習と確認に使える時間は？</h2><div className="choice-row"><button className={time==="little"?"active":""} onClick={()=>setTime("little")}>月に1時間ほど</button><button className={time==="some"?"active":""} onClick={()=>setTime("some")}>週に数時間</button><button className={time==="much"?"active":""} onClick={()=>setTime("much")}>毎日確認できる</button></div></div></div>
      <div className="plan-question"><span>04</span><div><h2>一時的な下落をどこまで受け止められる？</h2><div className="choice-row"><button className={loss==="low"?"active":""} onClick={()=>setLoss("low")}>10％でも不安</button><button className={loss==="middle"?"active":""} onClick={()=>setLoss("middle")}>20％程度</button><button className={loss==="high"?"active":""} onClick={()=>setLoss("high")}>30％以上でも継続</button></div></div></div>
    </section>
    <section className="plan-result"><div><p className="eyebrow">YOUR LEARNING ROUTE</p><span>{result.type}</span><h2>{result.title}</h2><p>{result.body}</p><a href={result.href}>{result.cta} →</a></div><aside><b>これは診断ではありません</b><p>回答をもとに学ぶ順序を整理する教材です。特定の商品・配分・取引を推奨せず、将来の成果を保証しません。</p></aside></section>
    <section className="plan-safety"><p className="eyebrow">NON-NEGOTIABLE</p><h2>投資方法を考えるときの注意点</h2><div>{["生活に必要なお金を使わない","理解できない商品を買わない","利益より先に最大損失を決める","借金や高いレバレッジを急がない","結果ではなくルールを守れたか記録する"].map((x,i)=><p key={x}><b>{String(i+1).padStart(2,"0")}</b>{x}</p>)}</div></section>
  </main>;
}
