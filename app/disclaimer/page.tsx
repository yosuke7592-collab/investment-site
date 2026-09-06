import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "免責事項",
  description: "投資の原則が提供する金融教育情報の目的、投資リスク、情報の更新、外部サイトに関する考え方を説明します。",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() { return <main className="trust-page"><SiteHeader current="glossary" />
  <section className="trust-hero"><p className="eyebrow">DISCLAIMER</p><h1>免責事項</h1><p>情報を安全に活用していただくために、目的と責任範囲を説明します。</p></section>
  <section className="trust-page-section"><div className="legal-list">
    <article><span>01</span><div><h2>教育・情報提供を目的としています</h2><p>本サイトは、金融投資の仕組みやリスクを学ぶための教育・情報提供を目的としています。特定の金融商品、銘柄、金融機関との契約や売買を推奨することを目的としたものではありません。</p></div></article>
    <article><span>02</span><div><h2>投資判断とリスク</h2><p>投資に関する最終的な判断は、利用者ご自身の責任で行ってください。投資には価格変動等による元本割れや損失の可能性があり、利益や将来の成果は保証されません。</p></div></article>
    <article><span>03</span><div><h2>情報の正確性と更新</h2><p>信頼できる情報源を確認して掲載しますが、情報の正確性、完全性、最新性を保証するものではありません。制度、商品内容、手数料、税制、利用条件等は変更されることがあります。</p></div></article>
    <article><span>04</span><div><h2>利用・申込前の確認</h2><p>金融商品やサービスを利用・申込する前に、必ず各社の公式サイト、契約締結前交付書面、目論見書等の最新情報を確認してください。必要に応じて資格を持つ専門家へ相談してください。</p></div></article>
    <article><span>05</span><div><h2>外部サイトについて</h2><p>外部サイトの内容、提供サービス、個人情報の取扱い等は各運営者が管理しています。本サイトは、リンク先の利用によって生じた損害について責任を負いかねます。</p></div></article>
  </div><p className="policy-date">制定・最終更新：2026年9月6日</p></section>
  </main>; }
