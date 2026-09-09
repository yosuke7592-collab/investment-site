import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "運営情報・編集方針",
  description: "投資教育サイト「投資の原則」の運営会社、情報確認・更新・訂正の方針、主な参照先を公開しています。",
  alternates: { canonical: "/about" },
};

const editorialRules = [
  ["01", "一次情報を優先", "金融庁、J-FLEC、日本銀行、JPX、法令・制度運営者、各サービス提供会社の公式情報を優先します。"],
  ["02", "事実と考え方を分ける", "制度や計算上の事実と、考え方・戦略例を同じ確度で扱いません。"],
  ["03", "利益を約束しない", "必ず儲かる表現、特定銘柄の売買推奨、将来価格の断定を行いません。"],
  ["04", "損失側から説明する", "期待利益だけでなく、元本割れ、コスト、流動性、レバレッジ、詐欺リスクを説明します。"],
  ["05", "広告を明示する", "広告リンクはPR等で識別できるようにし、報酬額だけで掲載、順位、評価を決めません。"],
  ["06", "変更される情報を見直す", "制度、税制、手数料、サービス条件は確認日を示し、公式情報の変更に応じて見直します。"],
];

export default function AboutPage() {
  return <main className="about-page"><SiteHeader current="glossary" />
    <section className="about-hero"><p className="eyebrow">OPERATOR &amp; EDITORIAL POLICY</p><h1>運営情報と<br/><em>編集方針</em></h1><p>誰が、どのような基準で情報を確認し、広告と向き合っているかを公開します。</p></section>

    <section className="operator-profile trust-page-section"><div className="deep-heading"><p className="eyebrow">OPERATOR</p><h2>サイト運営情報</h2></div>
      <dl className="trust-definition-list">
        <div><dt>サイト名</dt><dd>投資の原則</dd></div>
        <div><dt>運営会社</dt><dd>株式会社SOG</dd></div>
        <div><dt>所在地</dt><dd>〒105-0013<br/>東京都港区浜松町2丁目2番15号 浜松町ダイヤビル2F</dd></div>
        <div><dt>お問い合わせ</dt><dd><a href="mailto:contact@toushi-gensoku.jp">contact@toushi-gensoku.jp</a></dd></div>
        <div><dt>サイトの目的</dt><dd>金融投資の仕組みとリスクを学び、自分に合う方法と守れるルールを考えるための教育情報を提供します。</dd></div>
        <div><dt>編集責任</dt><dd>株式会社SOGが掲載内容の企画、確認、更新および訂正に責任を持ちます。</dd></div>
      </dl>
      <div className="trust-actions"><a href="/contact">お問い合わせ・訂正依頼 →</a><a href="/affiliate-policy">広告方針を確認する →</a></div>
    </section>

    <section className="editorial-rules"><div className="deep-heading"><p className="eyebrow">OUR RULES</p><h2>編集時に確認する項目</h2><p>初心者にも理解できる言葉で、判断に必要な事実とリスクを一緒に伝えます。</p></div><div>{editorialRules.map(x=><article key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div></section>

    <section className="correction-policy trust-page-section"><div className="deep-heading"><p className="eyebrow">REVIEW &amp; CORRECTION</p><h2>確認・更新・訂正の方針</h2></div><div className="policy-grid">
      <article><h3>情報の確認</h3><p>制度やルールは公的機関、商品・手数料・提供条件は各社公式情報を基に確認します。第三者情報だけで重要事項を断定しません。</p></article>
      <article><h3>情報の更新</h3><p>変更される可能性が高い情報には確認日を付け、重要な変更を把握した場合は該当箇所を見直します。利用前には最新の公式情報も確認してください。</p></article>
      <article><h3>訂正への対応</h3><p>誤りや古い情報をご連絡いただいた場合は、参照元を再確認し、訂正が必要と判断した箇所を修正します。</p></article>
    </div><a className="inline-trust-link" href="/contact">掲載内容について連絡する →</a></section>

    <section className="primary-sources"><div className="deep-heading"><p className="eyebrow">PRIMARY SOURCES</p><h2>主な確認先</h2><p>最終判断の前には、必ず最新の公式情報を確認してください。</p></div><div><a href="https://www.fsa.go.jp/policy/nisa2/invest/" target="_blank" rel="noreferrer"><b>金融庁</b><span>資産形成の基本 ↗</span></a><a href="https://www.j-flec.go.jp/" target="_blank" rel="noreferrer"><b>J-FLEC</b><span>金融経済教育 ↗</span></a><a href="https://www.jpx.co.jp/learning/" target="_blank" rel="noreferrer"><b>JPX</b><span>投資を学ぶ ↗</span></a><a href="https://www.boj.or.jp/" target="_blank" rel="noreferrer"><b>日本銀行</b><span>金融・経済情報 ↗</span></a></div><p className="source-date">内容確認日：2026年9月6日</p></section>

    <section className="fraud-alert"><p className="eyebrow">STOP BEFORE SENDING MONEY</p><h2>投資情報を確認するときの注意点</h2><p>著名人を名乗るSNS、無登録業者、個人名義口座への振込、出金前の追加送金要求は重大な警戒サインです。</p><div><a href="https://www.fsa.go.jp/ordinary/chuui/attention.html" target="_blank" rel="noreferrer">金融庁｜詐欺的な投資勧誘への注意 ↗</a><a href="https://www.fsa.go.jp/menkyo/menkyo.html" target="_blank" rel="noreferrer">金融庁｜登録事業者を確認する ↗</a></div></section>
  </main>;
}
