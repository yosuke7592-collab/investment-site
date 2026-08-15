"use client";

import { useState } from "react";
import SiteHeader from "../components/SiteHeader";

type Service = { category: string; name: string; purpose: string; features: string[]; caution: string; url: string; label: string };

const services: Service[] = [
  { category: "broker", name: "SBI証券", purpose: "長期資産形成・NISAの候補", features: ["NISA", "国内株式", "投資信託・積立"], caution: "取扱商品が多いため、最初に使う機能を絞る。", url: "https://site0.sbisec.co.jp/marble/nisa/top.do", label: "公式サイトを見る" },
  { category: "broker", name: "楽天証券", purpose: "長期資産形成・NISAの候補", features: ["NISA", "国内・米国株式", "投資信託・積立"], caution: "ポイント条件や手数料は最新情報を確認する。", url: "https://www.rakuten-sec.co.jp/web/nisa/", label: "公式サイトを見る" },
  { category: "broker", name: "松井証券", purpose: "株式・投資信託を学びながら使う候補", features: ["NISA", "日本株・米国株", "投資信託・FX"], caution: "商品ごとにアプリや取引画面が異なる場合がある。", url: "https://www.matsui.co.jp/nisa/", label: "公式サイトを見る" },
  { category: "broker", name: "マネックス証券", purpose: "日本株・米国株・企業分析を重視する候補", features: ["NISA", "日本株・米国株", "投資信託"], caution: "無料条件や為替関連費用を商品別に確認する。", url: "https://info.monex.co.jp/nisa/index.html", label: "公式サイトを見る" },
  { category: "sim", name: "TradingView ペーパートレード", purpose: "チャート分析と注文練習", features: ["仮想資金", "チャート上で発注", "多様な市場を観察"], caution: "実取引の約定・心理・税金を完全には再現しない。", url: "https://jp.tradingview.com/support/solutions/43000516466/", label: "公式説明を見る" },
  { category: "sim", name: "moomoo証券 デモ取引", purpose: "日本株・米国株などの画面操作練習", features: ["入金不要", "仮想資金", "株式・ETF等のデモ"], caution: "対応商品・利用条件はアプリ内の最新表示を確認する。", url: "https://www.moomoo.com/jp/papertrading", label: "公式サイトを見る" },
  { category: "sim", name: "DMM FX デモ取引", purpose: "FXの注文・決済画面を体験", features: ["PC・スマホ対応", "指値・逆指値等", "仮想資金"], caution: "FXはレバレッジ商品。本取引を始める理由にはしない。", url: "https://fx.dmm.com/demo/", label: "公式サイトを見る" },
  { category: "chart", name: "TradingView", purpose: "ローソク足・出来高・指標の確認", features: ["複数時間足", "描画ツール", "ウォッチリスト"], caution: "指標を増やしすぎず、最初は価格と出来高から始める。", url: "https://jp.tradingview.com/", label: "公式サイトを見る" },
  { category: "book", name: "ウォール街のランダム・ウォーカー", purpose: "長期・インデックス投資の考え方", features: ["市場予測の難しさ", "分散", "長期資産形成"], caution: "版によって内容・価格が異なるため最新版を確認する。", url: "https://www.amazon.co.jp/dp/453235823X", label: "書籍ページを見る" },
  { category: "book", name: "ファンダメンタル投資の教科書", purpose: "企業業績と株価指標の基礎", features: ["決算書", "PER・PBR", "企業分析"], caution: "掲載事例の数字ではなく、分析手順を学ぶ。", url: "https://www.diamond.co.jp/book/9784478107041.html", label: "出版社ページを見る" },
  { category: "book", name: "株価チャートの教科書", purpose: "チャートと売買タイミングの基礎", features: ["ローソク足", "トレンド", "売買判断"], caution: "チャートだけで必ず勝てるという意味ではない。", url: "https://www.diamond.co.jp/book/9784478029077.html", label: "出版社ページを見る" },
];

const categories = [
  { id: "all", name: "すべて" }, { id: "broker", name: "証券会社" }, { id: "sim", name: "デモ取引" }, { id: "chart", name: "チャート" }, { id: "book", name: "参考書" },
];

export default function ServicesPage() {
  const [category, setCategory] = useState("all");
  const visible = category === "all" ? services : services.filter((item) => item.category === category);
  return <main className="services-page">
    <SiteHeader current="services" />
    <section className="services-hero"><p className="eyebrow">LEARNING SERVICES GUIDE</p><h1>投資を学ぶための<br/><em>サービス・参考書比較</em></h1><p>口座数や特典ではなく、「何を学びたいか」を先に決めます。現在は広告リンクを使用せず、公式ページへ案内しています。</p><div className="ad-status"><b>広告・アフィリエイト</b><span>現在は未掲載</span><p>将来掲載する場合は、広告であることと比較基準を明示します。</p></div></section>

    <section className="comparison-rule"><div className="services-heading"><p className="eyebrow">BEFORE COMPARING</p><h2>サービスを比較する主な項目</h2></div><div className="compare-steps"><article><b>01</b><h3>目的</h3><p>積立、企業分析、チャート、注文練習など、学びたい内容を確認します。</p></article><article><b>02</b><h3>扱う商品</h3><p>現物、投資信託、株式、FXなど、扱っている商品を確認します。</p></article><article><b>03</b><h3>総コスト</h3><p>手数料に加え、スプレッド、為替手数料、保有中の費用も確認します。</p></article><article><b>04</b><h3>操作と安全</h3><p>画面の分かりやすさ、注文確認、二段階認証、問い合わせ方法を確認します。</p></article></div></section>

    <section className="services-list"><div className="services-heading"><p className="eyebrow">COMPARE</p><h2>サービス・参考書</h2><p>掲載内容は2026年8月14日時点の公式情報を基にしています。申込前に必ず公式サイトで最新条件を確認してください。</p></div><div className="service-filters">{categories.map((item) => <button key={item.id} className={category === item.id ? "active" : ""} onClick={() => setCategory(item.id)}>{item.name}</button>)}</div><div className="service-grid">{visible.map((item) => <article className="service-card" key={item.name}><span>{categories.find((cat) => cat.id === item.category)?.name}</span><h3>{item.name}</h3><p className="service-purpose">{item.purpose}</p><ul>{item.features.map((feature) => <li key={feature}>✓ {feature}</li>)}</ul><div className="service-caution"><b>確認点</b><p>{item.caution}</p></div><a href={item.url} target="_blank" rel="noopener noreferrer">{item.label} <b>↗</b></a></article>)}</div></section>

    <section className="affiliate-ready"><p className="eyebrow">AFFILIATE READY</p><h2>広告を掲載する場合の編集方針</h2><div><span>比較基準を固定</span><p>報酬額で順位を変えない</p><span>広告を明示</span><p>リンク付近に「広告」を表示</p><span>デメリットも掲載</span><p>向かない人と注意点を消さない</p><span>更新日を表示</span><p>料金・条件・提供状況を定期確認</p></div><nav><a href="/long-term">長期資産形成 →</a><a href="/strategies">アクティブ投資 →</a></nav></section>
  </main>;
}
