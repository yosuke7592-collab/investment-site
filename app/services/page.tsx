"use client";

import { useState } from "react";
import SiteHeader from "../components/SiteHeader";

type Service = {
  category: string;
  name: string;
  purpose: string;
  features: string[];
  caution: string;
  url: string;
  label: string;
  affiliateCode?: string;
  brokerDetails?: {
    costs: string;
    usability: string;
    unsuitable: string;
    checkedAt: string;
    sourceUrl: string;
    sourceLabel: string;
  };
};

const dmmKabAffiliateCode = '<a href="https://h.accesstrade.net/sp/cc?rk=0100mkk300oy0o" rel="nofollow" referrerpolicy="no-referrer-when-downgrade">DMM 株<img src="https://h.accesstrade.net/sp/rr?rk=0100mkk300oy0o" width="1" height="1" border="0" alt=""></a>';
const matsuiAffiliateCode = '<a href="https://h.accesstrade.net/sp/cc?rk=01000t2p00oy0o" rel="nofollow" referrerpolicy="no-referrer-when-downgrade">松井証券の日本株取引～手数料0円から～<img src="https://h.accesstrade.net/sp/rr?rk=01000t2p00oy0o" width="1" height="1" border="0" alt=""></a>';
const matsuiIdecoAffiliateCode = '<a href="https://h.accesstrade.net/sp/cc?rk=0100p7ck00oy0o" rel="nofollow" referrerpolicy="no-referrer-when-downgrade">松井証券のiDeCo\n<img src="https://h.accesstrade.net/sp/rr?rk=0100p7ck00oy0o" width="1" height="1" border="0" alt=""></a>';

const services: Service[] = [
  { category: "broker", name: "SBI証券", purpose: "長期積立、NISA、幅広い商品の比較", features: ["NISA", "国内・外国株式", "投資信託・債券等"], caution: "商品や取引方法によってリスクと費用が異なる。利用する機能を決め、各商品の重要書面を確認する。", url: "https://site0.sbisec.co.jp/marble/nisa/top.do", label: "公式サイトを見る", brokerDetails: { costs: "国内・外国株式の売買手数料、投資信託の信託報酬、為替関連費用などを商品別に確認。", usability: "取扱範囲が広いため、目的の商品まで迷わず操作できるか、認証・サポート方法を確認。", unsuitable: "最初から多くの商品を使い分けるより、機能を絞って始めたい人。", checkedAt: "2026年9月6日", sourceUrl: "https://www.sbisec.co.jp/ETGate", sourceLabel: "SBI証券 公式サイト" } },
  { category: "broker", name: "楽天証券", purpose: "長期積立、NISA、株式・投資信託の利用", features: ["NISA", "国内・外国株式", "投資信託・積立"], caution: "ポイントや手数料の適用条件は変更されることがあるため、利用前に最新条件を確認する。", url: "https://www.rakuten-sec.co.jp/web/nisa/", label: "公式サイトを見る", brokerDetails: { costs: "株式の売買手数料、投資信託の信託報酬、為替関連費用、ポイント利用条件を確認。", usability: "積立設定、アプリ・取引画面、楽天グループサービスとの連携条件を確認。", unsuitable: "ポイント条件を確認せず、常に同じ還元や優遇を受けられると考えている人。", checkedAt: "2026年9月6日", sourceUrl: "https://www.rakuten-sec.co.jp/", sourceLabel: "楽天証券 公式サイト" } },
  { category: "broker", name: "松井証券", purpose: "NISA、日本株・米国株、投資信託の利用", features: ["NISA", "日本株・米国株", "投資信託・FX"], caution: "商品ごとに取引画面やアプリ、手数料体系が異なる場合がある。", url: "https://h.accesstrade.net/sp/cc?rk=01000t2p00oy0o", label: "松井証券を見る", affiliateCode: matsuiAffiliateCode, brokerDetails: { costs: "商品・年齢・取引金額等による手数料条件、投資信託の信託報酬、為替関連費用を確認。", usability: "利用する商品に対応する画面・アプリ、相談・サポート方法を確認。", unsuitable: "複数商品を一つの同じ操作画面だけで完結させたい人。", checkedAt: "2026年9月14日", sourceUrl: "https://www.matsui.co.jp/", sourceLabel: "松井証券 公式サイト" } },
  { category: "broker", name: "マネックス証券", purpose: "日本株・米国株、NISA、企業分析の利用", features: ["NISA", "日本株・米国株", "投資信託"], caution: "手数料無料等の表示は対象取引と適用条件を確認し、為替関連費用も含めて比べる。", url: "https://info.monex.co.jp/nisa/index.html", label: "公式サイトを見る", brokerDetails: { costs: "国内・外国株式の売買手数料、為替関連費用、投資信託の信託報酬を確認。", usability: "企業分析情報、米国株を含む取引画面、積立・NISAの設定手順を確認。", unsuitable: "表示された無料条件がすべての取引に一律適用されると考えている人。", checkedAt: "2026年9月6日", sourceUrl: "https://info.monex.co.jp/", sourceLabel: "マネックス証券 公式情報" } },
  { category: "broker", name: "三菱UFJ eスマート証券", purpose: "NISA、少額投資、株式・投資信託の利用", features: ["NISA", "国内・米国株式", "投資信託・積立"], caution: "少額から利用できる商品でも元本割れはあり、注文方法や商品別の費用確認が必要。", url: "https://kabu.com/nisa/", label: "公式サイトを見る", brokerDetails: { costs: "株式の売買手数料、投資信託の信託報酬、為替関連費用、少額取引固有の条件を確認。", usability: "NISA・積立設定、アプリの注文確認、MUFGグループの関連サービスとの条件を確認。", unsuitable: "少額投資なら損失リスクやコストを確認しなくてよいと考えている人。", checkedAt: "2026年9月6日", sourceUrl: "https://kabu.com/", sourceLabel: "三菱UFJ eスマート証券 公式サイト" } },
  { category: "broker", name: "DMM 株", purpose: "日本株・米国株を一つの口座で検討", features: ["NISA", "日本株・米国株", "取引ツール・アプリ"], caution: "取引商品ごとの手数料・為替関連費用・注文方法を確認する。投資には元本割れなどのリスクがある。", url: "https://h.accesstrade.net/sp/cc?rk=0100mkk300oy0o", label: "DMM 株を見る", affiliateCode: dmmKabAffiliateCode, brokerDetails: { costs: "国内・米国株式の売買手数料、為替関連費用、入出金等の条件を確認。", usability: "日本株・米国株の注文画面、アプリ、認証・問い合わせ方法を確認。", unsuitable: "投資信託など、掲載された取扱範囲外の商品を中心に利用したい人。", checkedAt: "2026年9月6日", sourceUrl: "https://kabu.dmm.com/service/fee/", sourceLabel: "DMM 株 公式手数料情報" } },
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
    <section className="services-hero"><p className="eyebrow">LEARNING SERVICES GUIDE</p><h1>投資を学ぶための<br/><em>サービス・参考書比較</em></h1><p>口座数や特典ではなく、「何を学びたいか」を先に決めます。一部に広告リンクを含みますが、比較基準はすべてのサービスで共通です。</p><div className="ad-status"><b>広告・アフィリエイト</b><span>一部にPRを含みます</span><p>広告報酬で順位を決めず、比較基準を固定し、注意点も掲載します。</p></div></section>

    <section className="service-purpose-section"><div className="services-heading"><p className="eyebrow">CHOOSE BY PURPOSE</p><h2>やりたいことから選ぶ</h2><p>人気順ではなく、目的に必要な機能だけを比べます。</p></div><div><button onClick={()=>setCategory("broker")}><b>長期積立・NISA</b><span>投資信託、積立設定、費用を見る</span></button><button onClick={()=>setCategory("broker")}><b>日本株・米国株・ETF</b><span>取扱商品、注文、為替費用を見る</span></button><button onClick={()=>setCategory("sim")}><b>お金を使わず練習</b><span>デモ取引で注文画面を試す</span></button><button onClick={()=>setCategory("chart")}><b>チャートを分析</b><span>時間足、描画、指標を比べる</span></button></div></section>

    <section className="comparison-rule"><div className="services-heading"><p className="eyebrow">BEFORE COMPARING</p><h2>サービスを比較する主な項目</h2></div><div className="compare-steps"><article><b>01</b><h3>目的</h3><p>積立、企業分析、チャート、注文練習など、学びたい内容を確認します。</p></article><article><b>02</b><h3>扱う商品</h3><p>現物、投資信託、株式、FXなど、扱っている商品を確認します。</p></article><article><b>03</b><h3>総コスト</h3><p>手数料に加え、スプレッド、為替手数料、保有中の費用も確認します。</p></article><article><b>04</b><h3>操作と安全</h3><p>画面の分かりやすさ、注文確認、二段階認証、問い合わせ方法を確認します。</p></article></div></section>

    <section className="services-list"><div className="services-heading"><p className="eyebrow">COMPARE</p><h2>サービス・参考書</h2><p>証券会社は同じ項目で整理しています。掲載内容は2026年9月6日時点の公式情報・広告主情報を基にしています。申込前に必ず公式サイトで最新条件を確認してください。</p></div><div className="service-filters">{categories.map((item) => <button key={item.id} className={category === item.id ? "active" : ""} onClick={() => setCategory(item.id)}>{item.name}</button>)}</div><div className="service-grid">{visible.map((item) => <article className={`service-card${item.brokerDetails ? " broker-card" : ""}`} key={item.name}><span>{categories.find((cat) => cat.id === item.category)?.name}</span><h3>{item.name}</h3><div className="service-field"><b>想定する利用目的</b><p className="service-purpose-copy">{item.purpose}</p></div><div className="service-field"><b>主な取扱商品・機能</b><ul>{item.features.map((feature) => <li key={feature}>✓ {feature}</li>)}</ul></div>{item.brokerDetails && <dl className="broker-details"><div><dt>確認すべきコスト</dt><dd>{item.brokerDetails.costs}</dd></div><div><dt>使いやすさ／確認ポイント</dt><dd>{item.brokerDetails.usability}</dd></div><div><dt>利用前の注意点</dt><dd>{item.caution}</dd></div><div><dt>向かない可能性がある人</dt><dd>{item.brokerDetails.unsuitable}</dd></div><div><dt>情報確認日</dt><dd>{item.brokerDetails.checkedAt}</dd></div></dl>}{!item.brokerDetails && <div className="service-caution"><b>確認点</b><p>{item.caution}</p></div>}{item.brokerDetails && <a className="official-source" href={item.brokerDetails.sourceUrl} target="_blank" rel="noopener noreferrer">公式参照先｜{item.brokerDetails.sourceLabel} ↗</a>}{item.affiliateCode ? <div className="affiliate-link"><small>PR</small><span dangerouslySetInnerHTML={{ __html: item.affiliateCode }} /></div> : <a href={item.url} target="_blank" rel="noopener noreferrer">{item.label} <b>↗</b></a>}</article>)}</div></section>

    <section className="ideco-services" id="ideco"><div className="services-heading"><p className="eyebrow">iDeCo PROVIDER</p><h2>iDeCoの金融機関選び</h2><p>iDeCoは通常の証券口座と異なり、原則60歳まで自由に引き出せません。まず制度を理解し、利用すると決めた場合だけ商品・費用・支援体制を比べます。</p></div><div className="ideco-learning-link"><p>制度の違いを先に確認したい方へ</p><a href="/nisa-vs-ideco">NISAとiDeCoの違いを学ぶ →</a></div><article className="ideco-provider-card"><header><span>iDeCo</span><h3>松井証券 iDeCo</h3><p>老後資金づくりのためにiDeCoを利用すると決めた人が、金融機関を比較する際の候補です。</p></header><dl><div><dt>取扱商品</dt><dd>投資信託と元本確保型商品を含む40種類。法令上はターゲットシリーズを1商品と数えるため31商品です。</dd></div><div><dt>運営管理手数料等</dt><dd>松井証券の運営管理手数料は0円です。別途、国民年金基金連合会・事務委託先金融機関の手数料や、商品の信託報酬等がかかります。</dd></div><div><dt>使いやすさ</dt><dd>商品ラインアップ、情報画面、申込・運用手続きが自分に理解しやすいかを確認します。</dd></div><div><dt>サポート</dt><dd>電話や問い合わせ窓口の受付内容・時間を、申込前に公式サイトで確認します。</dd></div><div><dt>注意点</dt><dd>運用結果によって受取額が変わり、元本割れもあります。原則60歳まで自由に引き出せません。</dd></div><div><dt>向かない可能性がある人</dt><dd>近い将来に使う資金を積み立てたい人、途中で自由に換金できることを優先する人。</dd></div><div><dt>情報確認日</dt><dd>2026年9月14日</dd></div></dl><a className="official-source" href="https://www.matsui.co.jp/event/ideco02/" target="_blank" rel="noopener noreferrer">公式参照先｜松井証券 iDeCo公式情報 ↗</a><div className="affiliate-link"><small>PR</small><span dangerouslySetInnerHTML={{ __html: matsuiIdecoAffiliateCode }} /></div></article></section>

    <section className="affiliate-ready"><p className="eyebrow">AFFILIATE POLICY</p><h2>広告と比較情報を分ける</h2><div><span>比較基準を固定</span><p>目的・商品・コスト・使いやすさ等を共通項目で確認</p><span>報酬から独立</span><p>報酬の有無や金額だけで掲載、順位、評価を決めない</p><span>広告を明示</span><p>広告リンク付近に「PR」等を表示</p><span>注意点も掲載</span><p>向かない可能性がある人とリスクも掲載</p></div><nav><a href="/affiliate-policy">広告・アフィリエイト方針 →</a><a href="/about">運営・編集方針 →</a></nav></section>
  </main>;
}
