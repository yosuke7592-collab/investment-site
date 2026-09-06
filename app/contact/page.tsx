import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "投資の原則の掲載内容、訂正、広告・提携、その他のお問い合わせ方法をご案内します。",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <main className="trust-page"><SiteHeader current="glossary" />
    <section className="trust-hero"><p className="eyebrow">CONTACT</p><h1>お問い合わせ</h1><p>掲載内容の確認や訂正、広告・提携に関するご連絡を受け付けています。</p></section>
    <section className="trust-page-section contact-section"><div className="deep-heading"><p className="eyebrow">INQUIRY TYPES</p><h2>ご連絡いただける内容</h2></div><div className="policy-grid">
      <article><h3>掲載内容について</h3><p>説明が分かりにくい箇所や、参照元についての確認。</p></article>
      <article><h3>情報の訂正依頼</h3><p>制度、商品、手数料、リンク先などの誤りや変更。</p></article>
      <article><h3>広告・提携について</h3><p>広告掲載、提携、掲載内容の確認・修正に関する連絡。</p></article>
      <article><h3>その他</h3><p>本サイトの運営に関するご意見・お問い合わせ。</p></article>
    </div>
      <div className="contact-method"><p className="eyebrow">CONTACT METHOD</p><h2>書面によるお問い合わせ</h2><address>〒105-0013<br/>東京都港区浜松町2丁目2番15号 浜松町ダイヤビル2F<br/>株式会社SOG　「投資の原則」運営窓口 宛</address><p>返信先、対象ページのURL、確認・訂正を希望する内容を具体的にご記載ください。内容を確認し、対応が必要なものについてご連絡します。</p></div>
      <aside className="trust-note"><b>オンライン窓口について</b><p>現在、公開用のメールアドレスや外部の問い合わせサービスは使用していません。正確な連絡先を安全に公開できる状態になり次第、このページで案内します。</p></aside>
    </section>
  </main>;
}
