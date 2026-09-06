import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "広告・アフィリエイト方針",
  description: "投資の原則における広告表示、報酬と編集の独立性、サービス比較基準を公開しています。",
  alternates: { canonical: "/affiliate-policy" },
};

const policies = [
  ["広告の仕組み", "一部ページには広告・アフィリエイトリンクが含まれます。リンク経由の申込等により、運営会社の株式会社SOGが広告主またはASPから報酬を受け取る場合があります。"],
  ["広告を識別できる表示", "広告リンクは、リンク付近の「PR」「広告」等の表示により、通常の公式参照リンクと区別できるようにします。"],
  ["編集の独立性", "広告主との提携が、教材や評価の内容そのものを決定するものではありません。広告報酬の有無や報酬額だけで、掲載、順位、評価を決めません。"],
  ["比較基準", "サービス比較では、目的、取扱商品、コスト、使いやすさ・確認ポイント、利用前の注意点など、あらかじめ定めた共通基準を使用します。ランキングではなく、目的に合う選択肢を整理します。"],
  ["注意点も掲載", "利点だけでなく、コスト、リスク、利用条件、向かない可能性がある人も可能な範囲で掲載し、申込前に公式情報を確認できる導線を設けます。"],
  ["情報の見直し", "提携状況や提供条件が変わっても、必要な教育情報や注意点を不自然に削除しません。変動する情報は定期的に公式情報を確認します。"],
];

export default function AffiliatePolicyPage() { return <main className="trust-page"><SiteHeader current="glossary" />
  <section className="trust-hero"><p className="eyebrow">ADVERTISING POLICY</p><h1>広告・<br/>アフィリエイト方針</h1><p>広告収益と教材・比較情報の関係を明確にします。</p></section>
  <section className="trust-page-section"><div className="legal-list">{policies.map(([title, body], index)=><article key={title}><span>{String(index+1).padStart(2,"0")}</span><div><h2>{title}</h2><p>{body}</p></div></article>)}</div>
    <div className="trust-actions"><a href="/services">サービス比較を見る →</a><a href="/about">運営・編集方針を見る →</a></div><p className="policy-date">制定・最終更新：2026年9月6日</p>
  </section>
  </main>; }
