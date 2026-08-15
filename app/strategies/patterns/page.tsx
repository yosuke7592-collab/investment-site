import SiteHeader from "../../components/SiteHeader";
import PatternDiagram from "../../components/PatternDiagram";

const groups=[
 {id:"candles",eyebrow:"01 · CANDLESTICKS",title:"ローソク足の組み合わせ",lead:"短い期間の攻防を見る形。単独では使わず、重要価格と前後の流れを確認します。",items:[
  {type:"pinbar",name:"ピンバー・長いヒゲ",level:"基本",meaning:"一方向へ進んだ価格が強く押し戻された状態。",confirm:"支持線・抵抗線の近くで出て、次の足が反転方向へ進む。",fail:"相場の途中に単独で出ただけなら根拠が弱い。",pair:"水平線・出来高"},
  {type:"engulfing",name:"包み足",level:"基本",meaning:"前の実体を次の大きな実体が包み、主導権が入れ替わった可能性を示す。",confirm:"直前の流れと逆向きの包み足が重要価格で確定する。",fail:"ヒゲを含めて必ず包む必要はなく、形だけで反転は確定しない。",pair:"支持線・高値安値"},
  {type:"inside",name:"はらみ足・インサイドバー",level:"基本",meaning:"値幅が前の足の範囲内に収まり、売買の均衡が強まった状態。",confirm:"保ち合い後、どちら側へ終値で抜けるかを見る。",fail:"中にある間は方向未定。先回りすると往復に巻き込まれる。",pair:"ブレイク・出来高"},
  {type:"doji",name:"十字線",level:"基本",meaning:"始値と終値が近く、買い手と売り手が決着できなかった状態。",confirm:"急騰・急落後や重要価格で、次の足が方向を示す。",fail:"横ばいでは頻繁に出るため、それ自体は売買シグナルではない。",pair:"上位足・次の足"},
  {type:"stars",name:"明けの明星・宵の明星",level:"深掘り",meaning:"強い流れ、迷い、反対方向の強い足という3段階の変化。",confirm:"3本目が1本目の実体へ十分戻り、重要価格と重なる。",fail:"値動きの小さい相場では意味が弱い。",pair:"出来高・RSI"},
 ]},
 {id:"reversal",eyebrow:"02 · REVERSAL",title:"反転を考えるパターン",lead:"現在の流れが弱まり、主導権が変わる可能性を見る形。ネックラインなどの確認線を抜ける前は未完成です。",items:[
  {type:"doubleTop",name:"ダブルトップ",level:"基本",meaning:"ほぼ同じ高値を二度試して超えられず、買いの勢いが弱まる。",confirm:"二つの山の間の安値（ネックライン）を終値で割る。",fail:"二番目の高値を明確に上抜けば前提が崩れる。",pair:"出来高減少・ネックライン"},
  {type:"doubleBottom",name:"ダブルボトム",level:"基本",meaning:"ほぼ同じ安値で二度買い戻され、売りの勢いが弱まる。",confirm:"二つの谷の間の高値を終値で超える。",fail:"二番目の安値を明確に割れば前提が崩れる。",pair:"出来高増加・ネックライン"},
  {type:"headShoulders",name:"三尊（ヘッド＆ショルダーズ）",level:"基本",meaning:"中央の高値が最も高く、左右の戻り高値が低くなる天井候補。",confirm:"左右の谷を結んだネックラインを割る。",fail:"右肩形成中に中央の高値を更新すれば形を見直す。",pair:"高値安値・出来高"},
  {type:"inverseHeadShoulders",name:"逆三尊",level:"基本",meaning:"中央の安値が最も深く、左右の戻り安値が浅くなる底候補。",confirm:"左右の山を結んだネックラインを上抜く。",fail:"右肩形成中に中央の安値を割れば形を見直す。",pair:"高値安値・出来高"},
  {type:"tripleTop",name:"トリプルトップ／ボトム",level:"深掘り",meaning:"同じ価格帯を三度試し、突破できない状態。",confirm:"反対側の境界を抜けて初めて完成と考える。",fail:"試す回数だけで反転を決めず、突破なら強い継続にもなり得る。",pair:"水平な価格帯"},
  {type:"rounding",name:"ラウンディングボトム",level:"深掘り",meaning:"急反転ではなく、下落から横ばい、上昇へ徐々に需給が変わる。",confirm:"長い期間で高値・安値の切り上げを確認する。",fail:"短い時間足の丸い形を無理に当てはめない。",pair:"長期MA・出来高"},
  {type:"vBottom",name:"V字反転",level:"深掘り",meaning:"急落後に同程度の強さで買い戻される、判断の難しい反転。",confirm:"戻り高値の回復と、下位足での押し目形成を待つ。",fail:"底を当てようとすると落下途中を買いやすい。",pair:"出来高・値幅"},
 ]},
 {id:"continuation",eyebrow:"03 · CONTINUATION",title:"継続を考えるパターン",lead:"トレンド中の一時停止を整理します。元の方向へ抜けるとは限らないため、完成前に決めつけません。",items:[
  {type:"flag",name:"フラッグ",level:"基本",meaning:"強い値動きの後、逆方向へ小さく傾いて調整する。",confirm:"調整の上限または下限を元のトレンド方向へ抜ける。",fail:"調整が大きくなり、直前の起点を壊す。",pair:"トレンド・出来高"},
  {type:"pennant",name:"ペナント",level:"基本",meaning:"強い値動きの後、高値と安値の幅が短期間で縮む。",confirm:"収束した範囲を出来高とともに抜ける。",fail:"形成期間が長すぎる場合は別の保ち合いとして見る。",pair:"値幅収縮・出来高"},
  {type:"ascendingTriangle",name:"上昇三角形",level:"基本",meaning:"上値は同じでも安値が切り上がり、買いが徐々に高い価格を受け入れる。",confirm:"水平な上限を終値で突破する。",fail:"切り上げていた安値を割る。",pair:"水平線・出来高"},
  {type:"descendingTriangle",name:"下降三角形",level:"深掘り",meaning:"下値は同じでも高値が切り下がり、売りが徐々に強くなる。",confirm:"水平な下限を終値で割る。",fail:"切り下げていた高値を上抜く。",pair:"水平線・出来高"},
  {type:"symmetricTriangle",name:"対称三角形",level:"深掘り",meaning:"高値切り下げと安値切り上げが同時に進み、値幅が縮む。",confirm:"どちらかへ抜けるまで方向を決めない。",fail:"最初の抜けがすぐ範囲内へ戻る。",pair:"上位足の方向"},
  {type:"rectangle",name:"レクタングル・ボックス",level:"基本",meaning:"一定の上限と下限の間で価格が往復する。",confirm:"境界を終値で抜け、可能ならリテストで維持する。",fail:"境界付近のヒゲだけを突破と判断する。",pair:"支持線・抵抗線"},
  {type:"cupHandle",name:"カップ・ウィズ・ハンドル",level:"深掘り",meaning:"丸い回復の後、小さな調整を挟んで高値突破を試す。",confirm:"取っ手部分の上限と以前の高値を超える。",fail:"取っ手の下落が深く、カップ中央へ戻る。",pair:"中長期足・出来高"},
  {type:"risingWedge",name:"ウェッジ",level:"深掘り",meaning:"高値と安値が同方向へ進みながら、値幅が縮む。",confirm:"二本の斜線のどちらを抜けたかで判断する。",fail:"上昇ウェッジ＝必ず下落、ではない。",pair:"トレンドライン・勢い"},
  {type:"channel",name:"トレンドチャネル",level:"基本",meaning:"高値側と安値側がほぼ平行に進むトレンド。",confirm:"押し安値・戻り高値と平行線への反応を見る。",fail:"線に合わせるため都合の悪い高安を無視しない。",pair:"平行線・MA"},
 ]},
 {id:"breakout",eyebrow:"04 · BREAKOUT",title:"抜け方を判断するパターン",lead:"境界を超えた事実だけでなく、終値・出来高・戻りを確認します。",items:[
  {type:"breakout",name:"レンジブレイク",level:"基本",meaning:"均衡していた価格帯から一方向へ離れる。",confirm:"終値で境界外にあり、値幅や出来高が拡大する。",fail:"抜けた直後に範囲内へ戻る。",pair:"出来高・終値"},
  {type:"retest",name:"ブレイク後のリテスト",level:"基本",meaning:"抜けた境界まで戻り、以前の抵抗が支持へ変わるか確認する。",confirm:"戻った価格帯で反転足や高値安値の切り上げが出る。",fail:"境界を越えて元のレンジ深くまで戻る。",pair:"支持抵抗の転換"},
  {type:"falseBreakout",name:"フォールスブレイク",level:"基本",meaning:"一度境界を抜けた後、すぐ元の範囲へ戻る。",confirm:"終値が範囲内へ戻り、反対方向の足が続く。",fail:"ヒゲだけでだましと断定せず、次の足を待つ。",pair:"終値・出来高"},
  {type:"gap",name:"窓開け・ギャップ",level:"深掘り",meaning:"前の価格帯と重ならずに次の取引が始まる。材料や需給の急変を示す。",confirm:"窓を維持するか、埋めて元の範囲へ戻るかを見る。",fail:"窓は必ず埋まるという前提で逆張りしない。",pair:"材料・出来高"},
 ]},
];

export default function PatternsPage(){return <main className="patterns-page"><SiteHeader current="courses"/>
 <section className="deep-hero patterns-hero"><p className="eyebrow">CHART PATTERN ATLAS</p><h1>主なチャートパターンと<br/><em>確認するときの注意点</em></h1><p>ローソク足とチャートパターンは別物です。まず「基本」だけを学び、必要になったら「深掘り」へ進みます。</p><nav>{groups.map(g=><a href={`#${g.id}`} key={g.id}>{g.title.replace("パターン","")}</a>)}</nav></section>
 <section className="pattern-principle"><b>共通ルール</b><p>形成途中は未完成。境界を終値で抜けたか、出来高が伴うか、失敗条件をどこに置くかまで決めて使います。</p></section>
 {groups.map(g=><section className="atlas-group" id={g.id} key={g.id}><div className="deep-heading"><p className="eyebrow">{g.eyebrow}</p><h2>{g.title}</h2><p>{g.lead}</p></div><div className="atlas-grid">{g.items.map(item=><article className="atlas-card" key={item.name}><header><span>{item.level}</span><h3>{item.name}</h3></header><PatternDiagram type={item.type} label={item.name}/><p className="pattern-meaning">{item.meaning}</p><details><summary>成立条件と失敗例を見る</summary><dl><div><dt>確認すること</dt><dd>{item.confirm}</dd></div><div><dt>崩れる条件</dt><dd>{item.fail}</dd></div><div><dt>組み合わせ</dt><dd>{item.pair}</dd></div></dl></details></article>)}</div></section>)}
 <section className="pattern-end"><p className="eyebrow">DO NOT COLLECT SHAPES</p><h2>初心者が確認しやすいパターン</h2><p>すべての形を覚える必要はありません。まず見つけやすい形をいくつか選び、どの場所で現れたか、その後どう動いたかを記録します。</p><a href="/strategies/methods">手法と戦略を作る →</a></section>
 <section className="source-strip"><span>参考資料・内容確認 2026年8月15日</span><a href="https://www.fidelity.com/bin-public/060_www_fidelity_com/documents/learning-center/Idenitfying-Chart-Patterns.pdf" target="_blank" rel="noreferrer">Fidelity｜Chart Patterns ↗</a><a href="https://www.schwab.com/learn/story/how-to-read-stock-charts-and-trading-patterns" target="_blank" rel="noreferrer">Schwab｜Chart Reading ↗</a></section>
 </main>}
