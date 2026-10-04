import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "NISAで証券会社を選ぶときの確認項目｜投資信託・ETF・費用から考える",
  description: "NISAで証券会社を選ぶ前に、投資信託・ETF・日本株・海外株、費用、積立方法、操作性をどう確認するかを初心者向けに整理します。",
  alternates: { canonical: "/nisa-broker-selection" },
  openGraph: { title: "NISAで証券会社を選ぶときの確認項目", description: "投資信託・ETF・費用から、自分に必要な証券会社の条件を整理します。", type: "article", url: "/nisa-broker-selection" },
  twitter: { card: "summary", title: "NISAで証券会社を選ぶときの確認項目", description: "投資信託・ETF・費用から、自分に必要な条件を整理します。" },
};

const checks = [
  ["投資信託中心", "積立対象・積立方法・信託報酬を確認する"],
  ["ETFも買いたい", "取扱銘柄、売買方法、売買時の費用を確認する"],
  ["日本株も買いたい", "注文方法、手数料、NISAでの取扱範囲を確認する"],
  ["海外株も検討したい", "取扱国・銘柄、為替関連費用、NISAでの対象を確認する"],
  ["iDeCoも考えている", "証券口座とは別に、iDeCoの金融機関・商品・手数料を比べる"],
  ["操作性を重視", "積立設定、アプリ、認証、問い合わせ方法を実際に確認する"],
  ["費用を重視", "売買手数料だけでなく、信託報酬・為替関連費用も確認する"],
];

export default function NisaBrokerSelectionPage() {
  return <main className="nisa-broker-page"><SiteHeader current="services" />
    <article>
      <nav aria-label="パンくず"><a href="/">トップ</a><span>›</span><a href="/long-term">長期資産形成</a><span>›</span>NISAで証券会社を選ぶ</nav>
      <header className="nisa-broker-hero"><p className="eyebrow">NISA · BROKER SELECTION</p><h1>NISAで証券会社を選ぶときの確認項目<br/><em>投資信託・ETF・費用から考える</em></h1><p>「一番よい証券会社」を先に決める必要はありません。何に投資したいか、どう買いたいか、どの機能が必要かを整理すると、自分に必要な条件を比べやすくなります。</p><small>制度・情報確認日：2026年10月4日</small></header>

      <section className="nisa-broker-answer"><b>先に確認したいこと</b><p>NISAは、対象となる株式や投資信託などから得た利益・配当等を非課税にする制度です。利用できる金融機関は1人1つなので、口座を開く前に「自分が使いたい商品」と「買い方」を確認します。投資による損失や元本割れの可能性は、NISAを利用してもなくなりません。</p></section>

      <section className="nisa-broker-section"><h2>NISA口座は金融機関によって何が違う？</h2><p>制度の基本ルールは共通ですが、取り扱う商品、積立の設定方法、注文画面、各種費用、サポートなどは金融機関ごとに異なります。比較するときは、次の項目を同じ順番で確認します。</p><div className="nisa-broker-points"><article><b>01</b><h3>取扱商品</h3><p>投資信託、国内ETF、日本株、海外株など、実際に使いたい商品を扱っているか。</p></article><article><b>02</b><h3>費用</h3><p>売買手数料だけでなく、投資信託の信託報酬や外国株の為替関連費用も確認する。</p></article><article><b>03</b><h3>買い方</h3><p>毎月積み立てたいのか、価格を見て注文したいのか。積立設定と注文方法を確認する。</p></article><article><b>04</b><h3>使いやすさ</h3><p>アプリ、認証、画面、問い合わせ方法が自分に合うかを確認する。</p></article></div></section>

      <section className="nisa-broker-section split"><div><h2>まず「何に投資したいか」を決める</h2><p>証券会社の名前から選ぶのではなく、購入したい商品の種類から考えます。投資信託中心なら積立の設定や投信の取扱範囲、ETFなら取引所での売買方法と費用、日本株・海外株なら注文や為替関連費用まで確認する項目が変わります。</p><p>制度の仕組みを確認したい場合は、先に<a href="/nisa-vs-ideco">NISAとiDeCoの違い</a>、長期で積み立てる考え方は<a href="/long-term">長期資産形成の基本</a>を確認してください。</p></div><aside><p className="eyebrow">LEARN FIRST</p><a href="/articles/etf-vs-investment-trust"><b>ETFと投資信託の違い</b><span>売買方法・価格・積立のしやすさを確認する →</span></a><a href="/glossary/etf"><b>ETFとは？</b><span>取引所で売買する仕組みを確認する →</span></a></aside></section>

      <section className="nisa-broker-section"><h2>投資信託中心なら何を見る？</h2><p>毎月の積立を考えている場合は、積立対象となる投資信託、積立金額や頻度の設定、購入時の手数料だけでなく、保有中にかかる信託報酬も確認します。つみたて投資枠では対象商品に条件がありますが、どの商品を選んでも損失が出ないという意味ではありません。</p><h2>ETFも買うなら何を見る？</h2><p>ETFは株式のように取引時間中に価格を見て売買する商品です。取扱銘柄、注文方法、売買手数料、NISAでの対象範囲を確認します。投資信託との違いをまだ説明できない場合は、先に<a href="/articles/etf-vs-investment-trust">ETFと投資信託の違い</a>から確認します。</p><h2>日本株・海外株も考えるなら？</h2><p>国内株・海外株を使う場合は、取扱範囲、注文方法、売買手数料、海外株なら為替関連費用を確認します。NISAでは現物取引に限られる場合など、サービスごとの取引ルールも必ず公式情報で確認します。</p></section>

      <section className="nisa-broker-section nisa-broker-caution"><h2>手数料だけで決めない</h2><p>「手数料無料」は重要な比較材料ですが、それだけで使いやすさや商品との相性は決まりません。自分が買いたい商品を扱っているか、積立や注文を続けられるか、為替関連費用や投資信託の保有コストを理解できるかを組み合わせて考えます。</p></section>

      <section className="nisa-broker-check"><p className="eyebrow">MY CONDITIONS</p><h2>自分の条件を整理してみる</h2><p>当てはまる項目を確認してから比較一覧へ進むと、見るべき条件を絞れます。</p><div>{checks.map(([title, body]) => <article key={title}><span aria-hidden="true">□</span><div><h3>{title}</h3><p>{body}</p></div></article>)}</div></section>

      <section className="nisa-broker-next"><p className="eyebrow">NEXT STEP</p><h2>条件が決まったら、証券会社を比較する</h2><p>比較一覧では、目的・取扱商品・費用・使いやすさ・注意点を同じ基準で確認できます。広告の有無や報酬額で掲載順は決めていません。</p><a href="/services#broker">証券会社を条件から比較する →</a></section>

      <footer className="nisa-broker-sources"><h2>主な公式確認先</h2><ul><li><a href="https://www.fsa.go.jp/policy/nisa2/know/" target="_blank" rel="noreferrer">金融庁｜NISAを知る ↗</a></li><li><a href="https://www.sbisec.co.jp/ETGate/?_ControlID=WPLETmgR001Control&_DataStoreID=DSWPLETmgR001Control&burl=search_home&cat1=home&cat2=price&dir=price%2F&file=home_price.html&getFlg=on" target="_blank" rel="noreferrer">SBI証券｜手数料・諸費用 ↗</a></li><li><a href="https://www.matsui.co.jp/nisa/rule/" target="_blank" rel="noreferrer">松井証券｜NISA口座取引ルール ↗</a></li><li><a href="https://kabu.dmm.com/nisa/" target="_blank" rel="noreferrer">DMM 株｜NISA ↗</a></li></ul><p>制度・商品・手数料は変更されることがあります。申込みや取引の前に、必ず最新の公式情報と契約締結前交付書面を確認してください。</p></footer>
    </article>
  </main>;
}
