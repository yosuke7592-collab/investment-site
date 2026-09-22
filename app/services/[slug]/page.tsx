import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteHeader from "../../components/SiteHeader";
import { getServiceDetail, serviceDetails } from "../../data/service-details";

export function generateStaticParams() { return serviceDetails.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceDetail(slug);
  if (!service) return {};
  const title = `${service.name}の特徴・手数料・注意点`;
  const description = `${service.name}について、取扱商品、費用、特徴、注意点、向いている可能性がある人を投資初心者向けに公式情報から整理します。`;
  return {
    title, description,
    alternates: { canonical: `/services/${slug}` },
    openGraph: { title, description, type: "article", url: `/services/${slug}` },
    twitter: { title, description },
  };
}

function List({ items }: { items: string[] }) { return <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>; }

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceDetail(slug);
  if (!service) notFound();
  return <main className="service-detail-page">
    <SiteHeader current="services" />
    <article>
      <nav aria-label="パンくず"><a href="/">トップ</a><span>›</span><a href="/services">サービス比較</a><span>›</span><a href={service.kind === "iDeCo" ? "/services#ideco" : "/services#broker"}>{service.kind === "iDeCo" ? "iDeCo" : "証券会社"}</a><span>›</span>{service.name}</nav>
      <header className="service-detail-hero"><p className="eyebrow">SERVICE DETAIL · {service.kind}</p><h1>{service.name}<br/><em>特徴・費用・注意点を確認</em></h1><p>{service.summary}</p><small>情報確認日：{service.checkedAt}</small></header>

      <section className="service-detail-answer"><b>検討候補になるのは</b><p>{service.candidate}</p></section>

      <section className="service-detail-section"><h2>主な取扱商品・制度</h2><List items={service.products} /></section>
      <section className="service-detail-section"><h2>費用・手数料を見るポイント</h2><List items={service.costPoints} /><p className="service-detail-note">手数料無料と表示されていても、対象外の取引、為替関連費用、信託報酬などがかかる場合があります。申込み前に、自分が使う商品と取引方法で確認してください。</p></section>

      <div className="service-detail-columns">
        <section><h2>主な特徴</h2><List items={service.features} /></section>
        <section><h2>メリットになり得る点</h2><List items={service.merits} /></section>
      </div>

      <section className="service-detail-caution"><h2>注意点・デメリットになり得る点</h2><List items={service.cautions} /><p>金融商品は価格や為替の変動等により損失が生じ、元本割れする可能性があります。サービス選びと商品選びは分けて考えます。</p></section>

      <div className="service-detail-fit">
        <section><h2>向いている可能性がある人</h2><List items={service.suitable} /></section>
        <section><h2>向かない可能性がある人</h2><List items={service.unsuitable} /></section>
      </div>

      <section className="service-detail-check"><h2>申込み前の確認リスト</h2><ol>{service.checklist.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ol></section>

      <section className="service-detail-sources"><h2>主な公式確認先</h2><ul>{service.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.label} ↗</a></li>)}</ul><p>制度・商品・手数料は変更されることがあります。最終判断の前に最新の公式情報と契約締結前交付書面を確認してください。</p></section>

      <section className="service-detail-action"><p className="eyebrow">NEXT STEP</p><h2>内容を理解したうえで判断する</h2>{service.affiliateCode ? <><p>このリンクはPR（アフィリエイト広告）です。広告の有無や報酬額は、掲載順や評価に使用していません。</p><div className="affiliate-link service-detail-affiliate"><small>PR</small><span dangerouslySetInnerHTML={{ __html: service.affiliateCode }} /></div></> : <><p>このサービスは現在、当サイトのアフィリエイト広告を掲載していません。必要な場合のみ、公式サイトで最新条件を確認してください。</p><a className="service-official-action" href={service.officialUrl} target="_blank" rel="noopener noreferrer">{service.name}の公式サイトを見る ↗</a></>}
      </section>
      <section className="service-detail-related"><h2>関連する教材</h2>{service.kind === "iDeCo" ? <><a href="/nisa-vs-ideco">NISAとiDeCoの違いを学ぶ →</a><a href="/long-term">長期資産形成の基本へ →</a></> : <><a href="/articles/stocks-from-10000-yen">少額から株式投資を考える →</a><a href="/mechanics">取引が成立する仕組みを学ぶ →</a></>}</section>
      <footer className="service-detail-back"><a href={service.kind === "iDeCo" ? "/services#ideco" : "/services#broker"}>← 比較一覧へ戻る</a><a href="/affiliate-policy">広告・比較方針を確認する →</a></footer>
    </article>
  </main>;
}
