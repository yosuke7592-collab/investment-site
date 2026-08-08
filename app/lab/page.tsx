"use client";

import { useMemo, useState } from "react";

type Product = {
  id: string;
  name: string;
  asset: string;
  purpose: string;
  routes: string[];
  movement: string;
  loss: string;
  firstStep: string;
  level: string;
};

const products: Product[] = [
  { id: "fund", name: "投資信託", asset: "株・債券などをまとめて保有", purpose: "少額から長期・積立・分散を始めたい", routes: ["現物（投資信託）", "NISAで積立"], movement: "中身の資産と為替", loss: "投資額まで", firstStep: "低コストの分散型を2本比較", level: "中" },
  { id: "stock", name: "株式", asset: "会社の一部を所有", purpose: "企業を調べ、成長や配当を受け取りたい", routes: ["現物株", "信用取引"], movement: "業績・期待・金利・需給", loss: "現物は投資額まで。信用は超える場合あり", firstStep: "現物で企業1社を調べる", level: "中" },
  { id: "bond", name: "債券", asset: "国や会社へお金を貸す", purpose: "利息と満期を重視し、値動きを抑えたい", routes: ["個人向け国債", "債券ETF・投資信託"], movement: "金利と発行者の信用", loss: "商品により元本割れあり", firstStep: "個人向け国債と債券ファンドを比較", level: "低" },
  { id: "metal", name: "金・銀", asset: "貴金属そのものの価値", purpose: "通貨や株式と異なる値動きを組み合わせたい", routes: ["現物・純金積立", "ETF", "CFD・先物"], movement: "金利・為替・需給・不安心理", loss: "現物・ETFは投資額まで。CFD等は超える場合あり", firstStep: "現物と金ETFの費用を比較", level: "中" },
  { id: "fx", name: "為替（FX）", asset: "2通貨の交換比率", purpose: "通貨の上昇・下落を短中期で取引する", routes: ["外貨預金", "FX", "通貨先物"], movement: "金利差・政策・景気・資金移動", loss: "レバレッジで元手を超える場合あり", firstStep: "デモで1倍と25倍の損益差を体験", level: "非常に高い" },
  { id: "crypto", name: "暗号資産", asset: "ブロックチェーン上のデジタル資産", purpose: "新しい技術・ネットワークの価値へ投資する", routes: ["現物", "積立", "レバレッジ取引"], movement: "需給・規制・技術・市場心理", loss: "現物は投資額まで。レバレッジは超える場合あり", firstStep: "取引所・販売所と保管方法を学ぶ", level: "高" },
  { id: "reit", name: "不動産（REIT）", asset: "複数の不動産から得る賃料収入", purpose: "少額で不動産へ分散し、分配金を得たい", routes: ["J-REIT", "REIT ETF・投資信託"], movement: "賃料・金利・不動産価格", loss: "投資額まで", firstStep: "用途・地域・借入比率を比較", level: "中" },
];

const candles = [
  { o: 42, c: 49, h: 55, l: 36, v: 34 }, { o: 49, c: 45, h: 54, l: 41, v: 24 },
  { o: 45, c: 57, h: 62, l: 42, v: 58 }, { o: 57, c: 53, h: 64, l: 49, v: 39 },
  { o: 53, c: 61, h: 68, l: 50, v: 63 }, { o: 61, c: 69, h: 74, l: 58, v: 48 },
  { o: 69, c: 64, h: 76, l: 60, v: 35 }, { o: 64, c: 76, h: 81, l: 62, v: 79 },
  { o: 76, c: 72, h: 84, l: 67, v: 51 }, { o: 72, c: 82, h: 89, l: 70, v: 88 },
  { o: 82, c: 78, h: 91, l: 74, v: 46 }, { o: 78, c: 86, h: 94, l: 76, v: 70 },
];

type TradeStatus = "draft" | "pending" | "open" | "closed" | "cancelled";

function TradingSimulator() {
  const [asset, setAsset] = useState("株式");
  const [method, setMethod] = useState("spot");
  const [amount, setAmount] = useState(10000);
  const [side, setSide] = useState<"buy" | "sell">("buy");
  const [order, setOrder] = useState<"market" | "limit">("market");
  const [reason, setReason] = useState("長期で成長すると考えたため");
  const [takeProfit, setTakeProfit] = useState(10);
  const [stopLoss, setStopLoss] = useState(5);
  const [status, setStatus] = useState<TradeStatus>("draft");
  const [scenario, setScenario] = useState(0);
  const [exitAction, setExitAction] = useState<"profit" | "stop" | "hold" | null>(null);

  const leverage = method === "spot" ? 1 : method === "lev3" ? 3 : method === "lev5" ? 5 : 25;
  const exposure = amount * leverage;
  const pnl = Math.round(exposure * scenario / 100 * (side === "buy" ? 1 : -1));
  const plannedProfit = Math.round(exposure * takeProfit / 100);
  const plannedLoss = Math.round(exposure * stopLoss / 100);
  const effectiveMove = scenario * (side === "buy" ? 1 : -1);
  const shouldStop = effectiveMove <= -stopLoss;
  const shouldProfit = effectiveMove >= takeProfit;
  const ruleKept = exitAction === "stop" ? shouldStop : exitAction === "profit" ? shouldProfit : exitAction === "hold" ? !shouldStop && !shouldProfit : false;

  const resetTrade = () => { setStatus("draft"); setScenario(0); setExitAction(null); };
  const placeOrder = () => { setScenario(0); setExitAction(null); setStatus(order === "market" ? "open" : "pending"); };
  const closeTrade = (action: "profit" | "stop") => { setExitAction(action); setStatus("closed"); };

  return <section className="simulator" id="simulator">
    <div className="lab-heading"><p className="eyebrow">03 · TRADE FROM START TO FINISH</p><h2>注文から決済まで、<br/>一つの取引を完結する。</h2><p>注文前にルールを決め、約定・保有・利益確定・損切り・記録までを順番に体験します。</p></div>
    <div className="trade-flow" aria-label="模擬取引の流れ"><span className={status === "draft" ? "active" : "done"}>1 ルール</span><i>→</i><span className={status === "pending" ? "active" : status !== "draft" ? "done" : ""}>2 注文・約定</span><i>→</i><span className={status === "open" ? "active" : status === "closed" ? "done" : ""}>3 保有</span><i>→</i><span className={status === "closed" ? "active" : ""}>4 決済・記録</span></div>
    <div className="sim-grid advanced-sim">
      <div className="order-ticket">
        <div className="ticket-row"><span>1｜投資対象</span><div className="segmented">{["株式", "金", "為替", "暗号資産"].map((a) => <button className={asset === a ? "active" : ""} key={a} onClick={() => { setAsset(a); resetTrade(); }}>{a}</button>)}</div></div>
        <div className="ticket-row"><span>2｜取引方法</span><div className="segmented">{[{id:"spot",label:"現物 1倍"},{id:"lev3",label:"レバレッジ 3倍"},{id:"lev5",label:"レバレッジ 5倍"},{id:"lev25",label:"レバレッジ 25倍"}].map((m) => <button className={method === m.id ? "active" : ""} key={m.id} onClick={() => { setMethod(m.id); if (m.id === "spot") setSide("buy"); resetTrade(); }}>{m.label}</button>)}</div>{method !== "spot" && <p className="risk-alert">学習専用：倍率が上がると損失も同じ倍率で拡大します。</p>}</div>
        <div className="ticket-row"><span>3｜売買・注文方法</span><div className="dual-segments"><div className="segmented"><button className={side === "buy" ? "active" : ""} onClick={() => {setSide("buy");resetTrade();}}>買い</button><button disabled={method === "spot"} className={side === "sell" ? "active" : ""} onClick={() => {setSide("sell");resetTrade();}}>売り</button></div><div className="segmented"><button className={order === "market" ? "active" : ""} onClick={() => {setOrder("market");resetTrade();}}>成行</button><button className={order === "limit" ? "active" : ""} onClick={() => {setOrder("limit");resetTrade();}}>指値</button></div></div><small>{order === "market" ? "成行：価格を指定せず、成立を優先します。" : "指値：希望価格を指定します。価格が届かなければ未約定です。"}</small></div>
        <label className="amount-field"><span>4｜使う資金</span><div className="amount-control"><input inputMode="numeric" aria-label="模擬取引に使う資金" type="number" min="1000" max="100000" step="1000" value={amount} onChange={(e) => { setAmount(Math.max(1000, Math.min(100000, Number(e.target.value) || 1000))); resetTrade(); }}/><b>円</b></div></label>
        <div className="rule-builder"><p className="eyebrow">BEFORE ORDER · 注文前のルール</p><label><span>買う理由</span><textarea aria-label="買う理由" value={reason} onChange={(e) => setReason(e.target.value)} /></label><div className="rule-numbers"><label><span>利益確定</span><div><b>＋</b><input aria-label="利益確定率" type="number" min="1" max="50" value={takeProfit} onChange={(e) => setTakeProfit(Math.max(1, Math.min(50, Number(e.target.value) || 1)))} /><b>%</b></div></label><label><span>損切り</span><div><b>−</b><input aria-label="損切り率" type="number" min="1" max="50" value={stopLoss} onChange={(e) => setStopLoss(Math.max(1, Math.min(50, Number(e.target.value) || 1)))} /><b>%</b></div></label></div><div className="risk-budget"><p>目標利益 <b>＋{plannedProfit.toLocaleString()}円</b></p><p>最大損失 <strong>−{plannedLoss.toLocaleString()}円</strong></p></div></div>
        <div className="ticket-summary"><p>自分の資金 <b>{amount.toLocaleString()}円</b></p><p>実際に動く金額 <strong>{exposure.toLocaleString()}円</strong></p><p>倍率 <b>{leverage}倍</b></p></div>
        <button className="place-order" disabled={!reason.trim() || status !== "draft"} onClick={placeOrder}>これは練習です｜注文を出す</button>
      </div>
      <div className="position-panel trade-stage"><p className="eyebrow">ORDER → POSITION → EXIT</p>
        {status === "draft" && <div className="empty-position"><span>01</span><div><h3>先に出口を決める</h3><p>買う理由、利益確定、損切りを決めてから注文します。</p></div></div>}
        {status === "pending" && <div className="pending-order"><span className="status-badge">注文受付・未約定</span><h3>指値注文は、まだ取引が成立していません。</h3><p>市場価格が指定価格へ届くまで待機します。注文中は取消もできます。</p><div className="pending-actions"><button onClick={() => setStatus("open")}>価格が届いた｜約定する</button><button onClick={() => setStatus("cancelled")}>届かなかった｜未約定</button><button className="quiet" onClick={() => setStatus("cancelled")}>注文を取り消す</button></div></div>}
        {status === "cancelled" && <div className="result-card neutral"><span className="status-badge">取引不成立</span><h3>未約定または注文取消</h3><p>注文を出しても、必ず取引が成立するわけではありません。資金とポジションは変わりません。</p><button onClick={resetTrade}>条件を変えてもう一度</button></div>}
        {status === "open" && <><div className="execution"><span className="status-badge">約定</span><p>注文条件が合い、取引が成立しました。</p><div><span>{asset}・{side === "buy" ? "買い" : "売り"}</span><b>{exposure.toLocaleString()}円</b></div></div><p className="move-prompt">その後、価格がどう動いたか選ぶ</p><div className="scenario-buttons">{[-10, -5, -3, 5, 10, 15].map((n) => <button className={scenario === n ? "active" : ""} key={n} onClick={() => {setScenario(n);setExitAction(null);}}>{n > 0 ? "+" : ""}{n}%</button>)}</div><div className={`pnl ${pnl > 0 ? "plus" : pnl < 0 ? "minus" : ""}`}><span>含み{pnl >= 0 ? "益" : "損"}（まだ確定していない損益）</span><strong>{pnl > 0 ? "+" : ""}{pnl.toLocaleString()}円</strong><small>価格 {scenario > 0 ? "+" : ""}{scenario}% × {leverage}倍 × {side === "buy" ? "買い" : "売り"}</small></div>{scenario !== 0 && <div className={`rule-signal ${shouldStop ? "danger" : shouldProfit ? "success" : ""}`}><b>{shouldStop ? `損切りライン（−${stopLoss}%）に達しました` : shouldProfit ? `利益確定ライン（＋${takeProfit}%）に達しました` : "事前ルールの範囲内です"}</b><p>{shouldStop ? "ここで迷わず決済できるかが、ルールを守る練習です。" : shouldProfit ? "目標に達しました。欲を出してルールを変えないか確認します。" : "保有を続ける場合も、理由を言葉にします。"}</p></div>}<div className="exit-actions"><button disabled={scenario === 0 || !shouldProfit} onClick={() => closeTrade("profit")}>利益確定する</button><button className="stop-button" disabled={scenario === 0} onClick={() => closeTrade("stop")}>損切り・決済する</button><button className="hold-button" disabled={scenario === 0} onClick={() => setExitAction("hold")}>保有を続ける</button></div>{exitAction === "hold" && <p className={ruleKept ? "hold-note" : "hold-note warning-note"}>{ruleKept ? "保有継続。次の判断条件を変えずに待ちます。" : "損切りラインを超えています。『戻るかも』でルールを破っていませんか？"}</p>}</>}
        {status === "closed" && <div className={`result-card ${ruleKept ? "success" : "danger"}`}><span className="status-badge">決済・損益確定</span><h3>{exitAction === "profit" ? "利益を確定しました" : "損切りして取引を終えました"}</h3><strong>{pnl > 0 ? "+" : ""}{pnl.toLocaleString()}円</strong><p>決済すると、含み益・含み損は確定損益になります。</p><div className="trade-journal"><p className="eyebrow">TRADE JOURNAL · 取引記録</p><dl><div><dt>買った理由</dt><dd>{reason}</dd></div><div><dt>事前ルール</dt><dd>利益確定 ＋{takeProfit}% ／ 損切り −{stopLoss}%</dd></div><div><dt>実際の結果</dt><dd>{scenario > 0 ? "+" : ""}{scenario}% ／ {pnl > 0 ? "+" : ""}{pnl.toLocaleString()}円</dd></div><div><dt>ルール</dt><dd>{ruleKept ? "守れた" : "見直しが必要"}</dd></div></dl></div><button onClick={resetTrade}>次の模擬取引へ</button></div>}
      </div>
    </div>
    <div className="trade-terms"><div><b>約定</b><p>注文条件が合い、売買が成立すること。</p></div><div><b>未約定</b><p>注文は出ているが、まだ成立していない状態。</p></div><div><b>含み損益</b><p>保有中で、まだ確定していない損益。</p></div><div><b>決済</b><p>反対売買を行い、損益を確定すること。</p></div><div><b>損切り</b><p>損失拡大を防ぐため、決めた基準で決済すること。</p></div><div><b>逆指値</b><p>指定価格に達したら注文を出す仕組み。損切りに使われる。</p></div></div>
  </section>;
}

export default function LabPage() {
  const [selected, setSelected] = useState("fund");
  const [asset, setAsset] = useState("株式");
  const [method, setMethod] = useState("spot");
  const [amount, setAmount] = useState(10000);
  const [side, setSide] = useState<"buy" | "sell">("buy");
  const [order, setOrder] = useState<"market" | "limit">("market");
  const [opened, setOpened] = useState(false);
  const [scenario, setScenario] = useState(0);
  const product = products.find((p) => p.id === selected) ?? products[0];
  const leverage = method === "spot" ? 1 : method === "lev3" ? 3 : method === "lev5" ? 5 : 25;
  const exposure = amount * leverage;
  const pnl = useMemo(() => Math.round(exposure * scenario / 100 * (side === "buy" ? 1 : -1)), [exposure, scenario, side]);
  const reset = () => { setOpened(false); setScenario(0); };

  return <main className="lab-page">
    <header className="topbar"><a className="brand" href="/"><span className="brand-mark">18</span><span>投資の地図</span></a><a className="back-home" href="/">← 学習の地図へ戻る</a></header>
    <section className="lab-hero"><p className="eyebrow">PRODUCT &amp; TRADING LAB</p><h1>選ぶ。見る。<br/><em>動かして理解する。</em></h1><p>商品説明、取引画面、模擬注文を一つずつ体験します。ここで動く金額はすべて練習用です。</p><nav><a href="#products">1 商品を選ぶ</a><a href="#screen">2 画面を読む</a><a href="#simulator">3 注文を試す</a></nav></section>

    <section className="product-lab" id="products"><div className="lab-heading"><p className="eyebrow">01 · PRODUCT SELECTION</p><h2>何に投資し、<br/>どの方法を使うか。</h2><p>「資産」と「取引方法」を分けます。同じ金でも、現物・ETF・CFDでは費用と危険度が変わります。</p></div><div className="product-tabs" role="tablist">{products.map((p) => <button role="tab" aria-selected={selected === p.id} className={selected === p.id ? "active" : ""} key={p.id} onClick={() => setSelected(p.id)}>{p.name}<small>危険度 {p.level}</small></button>)}</div><div className="product-detail"><div className="product-main"><p className="eyebrow">SELECTED ASSET</p><h3>{product.name}</h3><p className="product-purpose">{product.purpose}</p><dl><div><dt>投資対象</dt><dd>{product.asset}</dd></div><div><dt>価格が動く理由</dt><dd>{product.movement}</dd></div><div><dt>最大損失の考え方</dt><dd>{product.loss}</dd></div><div><dt>最初の練習</dt><dd>{product.firstStep}</dd></div></dl></div><div className="route-box"><span>同じ資産でも方法が違う</span>{product.routes.map((route, i) => <div key={route}><b>{String(i + 1).padStart(2, "0")}</b><p>{route}</p></div>)}<p className="route-warning">レバレッジを使う方法は、値動きだけでなく証拠金・強制決済・追証の理解が必要です。</p></div></div></section>

    <section className="screen-lab" id="screen"><div className="lab-heading"><p className="eyebrow">02 · SCREEN MAP</p><h2>一般的な取引画面を、<br/>5つに分けて見る。</h2><p>会社ごとに配置は違っても、確認する情報はほぼ共通です。</p></div><div className="screen-mock trading-screen"><div className="mock-top"><div><span className="screen-number">①</span><b>銘柄・商品</b><strong>サンプル株式会社</strong><small>1234・東証</small></div><div className="quote"><span>現在値</span><strong>1,248.0</strong><em>+18.0（+1.46%）</em></div></div><div className="mock-chart"><div className="chart-head"><span><i>②</i> 価格・チャート・出来高</span><div><b>日足</b><b>週足</b><b>月足</b></div></div><div className="price-axis"><span>1,280</span><span>1,240</span><span>1,200</span></div><div className="candlestick-chart" aria-label="ローソク足チャートの例">{candles.map((c, i) => { const up = c.c >= c.o; return <div className="candle-column" key={i}><div className={`candle ${up ? "up" : "down"}`} style={{top:`${100-c.h}%`, height:`${c.h-c.l}%`}}><i style={{top:`${Math.min(c.o,c.c)-c.l}%`,height:`${Math.max(4,Math.abs(c.c-c.o))}%`}}/></div><div className={`volume ${up ? "up" : "down"}`} style={{height:`${c.v}%`}}/></div>})}</div><div className="chart-caption"><span>ローソク足</span><span>出来高</span></div></div><div className="mock-order"><span><i>③</i> 注文</span><label>売買 <b>買う</b></label><label>方法 <b>成行</b></label><label>数量 <b>10株</b></label><button>注文内容を確認</button></div><div className="mock-account"><span><i>④</i> 口座・買付余力</span><b>100,000円</b></div><div className="mock-holdings"><span><i>⑤</i> 保有商品・評価損益</span><b>まだ保有していません</b></div></div><p className="screen-note">まず銘柄を確認し、現在値と値動きを見る。次に注文条件と買付余力を確認し、注文後は保有状況を見る。この順番を覚えれば、初めての画面でも迷いにくくなります。</p></section>

    <TradingSimulator />
    <section className="lab-principle"><p>練習の目的は、利益を出すことではありません。</p><blockquote>自分のルールを作り、<br/><em>そのルールを守る。</em></blockquote><a href="/">学習の地図へ戻る →</a></section>
  </main>;
}
