"use client";

import { useState } from "react";

const assetData = [
  { id: "stock", name: "株式", items: ["売上高・営業利益・キャッシュフロー", "PER・PBR・ROE", "決算発表・会社予想・業界動向", "株価・出来高・信用残"], point: "数字単体ではなく、前年・会社予想・同業他社と比べる。" },
  { id: "fx", name: "為替", items: ["政策金利・中央銀行の声明", "CPI・雇用統計・GDP", "市場予想と発表値の差", "通貨ペアの金利差・値動き"], point: "良い数字かではなく、市場予想を上回ったかを見る。" },
  { id: "metal", name: "金・銀", items: ["実質金利・米ドル", "中央銀行の保有動向", "鉱山供給・産業需要", "ETF資金流入・市場心理"], point: "不安だけで動くとは限らない。金利とドルを同時に確認する。" },
  { id: "crypto", name: "暗号資産", items: ["出来高・流動性", "規制・上場・技術更新", "供給量・保有集中", "市場全体のリスク選好"], point: "価格変動が大きく、取引所・保管・規制のリスクも分けて考える。" },
];

const strategies = [
  { id: "trend", name: "順張り", subtitle: "流れについていく", market: "高値と安値を切り上げる相場", entry: "上昇トレンド中の押し目から再上昇を確認", stop: "直近安値の下、または事前に決めた損失率", exit: "目標価格、トレンド崩れ、損益比のルール", weakness: "横ばい相場では小さな損切りが続きやすい" },
  { id: "breakout", name: "ブレイクアウト", subtitle: "価格帯を抜けた動きに乗る", market: "一定範囲の後、出来高を伴って動く相場", entry: "抵抗線を終値で超え、出来高増加を確認", stop: "抜けた価格帯へ明確に戻った場所", exit: "値幅目標、勢いの低下、事前の利益確定率", weakness: "抜けた直後に戻る「だまし」がある" },
  { id: "reversal", name: "逆張り", subtitle: "行き過ぎからの反転を待つ", market: "支持線が明確で、極端な売買が起きた相場", entry: "支持線と反転のローソク足を確認してから", stop: "支持線を明確に割れた場所", exit: "価格帯の中央・上限、または反発失敗", weakness: "強い下落では安値を買い続ける危険がある" },
  { id: "fundamental", name: "企業価値", subtitle: "業績と価格の差を考える", market: "事業の成長や改善を長めの期間で評価", entry: "投資仮説、業績、価格水準をすべて確認", stop: "仮説が崩れる決算・事業条件を先に定義", exit: "成長鈍化、割高化、より良い選択肢", weakness: "正しい分析でも市場評価に時間がかかる" },
];

export default function StrategiesPage() {
  const [assetId, setAssetId] = useState("stock");
  const [strategyId, setStrategyId] = useState("trend");
  const asset = assetData.find((item) => item.id === assetId) ?? assetData[0];
  const strategy = strategies.find((item) => item.id === strategyId) ?? strategies[0];

  return <main className="strategy-page">
    <header className="topbar"><a className="brand" href="/"><span className="brand-mark">18</span><span>投資の地図</span></a><a className="back-home" href="/lab">← アクティブ投資コースへ</a></header>
    <section className="strategy-hero"><p className="eyebrow">ACTIVE COURSE · ANALYSIS &amp; STRATEGY</p><h1>見る順番を決め、<br/><em>ルールに変える。</em></h1><p>データやチャートは未来を当てる道具ではありません。根拠、入口、損切り、出口を同じ形式で考えるための道具です。</p><nav><a href="#data">1 データ</a><a href="#candles">2 ローソク足</a><a href="#examples">3 戦略例</a></nav></section>

    <section className="data-lab" id="data"><div className="strategy-heading"><p className="eyebrow">01 · DATA MAP</p><h2>投資対象ごとに、<br/>見るデータは違う。</h2><p>すべてを見る必要はありません。価格が動く理由につながる数字を、同じ順番で確認します。</p></div><div className="data-tabs">{assetData.map((item) => <button key={item.id} className={assetId === item.id ? "active" : ""} onClick={() => setAssetId(item.id)}>{item.name}</button>)}</div><div className="data-card"><div><span>CHECK DATA</span><h3>{asset.name}で確認する4項目</h3><ol>{asset.items.map((item) => <li key={item}>{item}</li>)}</ol></div><aside><span>読み方のポイント</span><p>{asset.point}</p><b>数字 → 市場予想との差 → 価格の反応</b></aside></div></section>

    <section className="candle-school" id="candles"><div className="strategy-heading"><p className="eyebrow">02 · CANDLESTICK</p><h2>一本の形より、<br/>前後の流れを見る。</h2><p>ローソク足は一定期間の始値・高値・安値・終値を表します。同じ形でも、出現場所と出来高で意味が変わります。</p></div><div className="candle-anatomy"><div className="big-candle"><span className="high-label">高値</span><i className="upper-wick"/><b/><i className="lower-wick"/><span className="open-label">始値</span><span className="close-label">終値</span><span className="low-label">安値</span></div><div className="anatomy-copy"><article><b>実体</b><p>始値と終値の差。長いほど、その期間に一方向の力が強かった。</p></article><article><b>上ヒゲ・下ヒゲ</b><p>一度進んだ価格が押し戻された跡。長さだけで反転を決めない。</p></article><article><b>陽線・陰線</b><p>終値が始値より高いか低いか。一本ではなく並びで判断する。</p></article><article><b>出来高</b><p>取引の参加量。価格が重要な水準を抜ける時の裏付けとして見る。</p></article></div></div><div className="candle-reading-order"><span>読む順番</span><div><b>1</b><p>日足・週足など期間を決める</p><i>→</i><b>2</b><p>高値と安値の方向を見る</p><i>→</i><b>3</b><p>支持線・抵抗線を引く</p><i>→</i><b>4</b><p>ローソク足と出来高を確認</p></div></div></section>

    <section className="strategy-examples" id="examples"><div className="strategy-heading"><p className="eyebrow">03 · STRATEGY EXAMPLES</p><h2>手法ではなく、<br/>一組のルールとして覚える。</h2><p>以下は学習用の例であり、利益を保証する売買推奨ではありません。</p></div><div className="strategy-tabs">{strategies.map((item) => <button key={item.id} className={strategyId === item.id ? "active" : ""} onClick={() => setStrategyId(item.id)}><b>{item.name}</b><small>{item.subtitle}</small></button>)}</div><div className="strategy-sheet"><header><p className="eyebrow">RULE SHEET</p><h3>{strategy.name}</h3><span>{strategy.subtitle}</span></header><dl><div><dt>向いている相場</dt><dd>{strategy.market}</dd></div><div><dt>入る根拠</dt><dd>{strategy.entry}</dd></div><div><dt>損切り</dt><dd>{strategy.stop}</dd></div><div><dt>利益確定・出口</dt><dd>{strategy.exit}</dd></div><div><dt>弱点</dt><dd>{strategy.weakness}</dd></div></dl><div className="strategy-check"><b>注文前の確認</b><p>□ 根拠を一文で説明できる</p><p>□ 損切り価格と最大損失を計算した</p><p>□ 損失に対して十分な利益余地がある</p><p>□ 決算・指標発表の時間を確認した</p></div></div></section>

    <section className="no-magic"><p className="eyebrow">NO MAGIC SIGNAL</p><blockquote>勝つ形を探すより、<br/><em>負け方を先に決める。</em></blockquote><p>どの戦略も勝率100%にはなりません。同じ条件を繰り返し、記録し、損失を管理できるかが重要です。</p><div><a href="/lab#simulator">模擬取引で試す →</a><a href="/services">練習サービスを比較する →</a></div></section>
  </main>;
}
