import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteHeader from "../../components/SiteHeader";
import { articles, getArticle } from "../../data/articles";

export function generateStaticParams(){return articles.map(({slug})=>({slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const a=getArticle(slug);if(!a)return{};return{title:a.title,description:a.description,alternates:{canonical:`/articles/${a.slug}`},openGraph:{title:a.title,description:a.description,type:"article"},twitter:{title:a.title,description:a.description}}}
export default async function ArticlePage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const a=getArticle(slug);if(!a)notFound();return <main className="article-page"><SiteHeader />
  <article><nav aria-label="パンくず"><a href="/">トップ</a><span>›</span><a href="/articles">記事</a><span>›</span>{a.title}</nav>
    <header><span>{a.category}</span><h1>{a.title}</h1><p>{a.description}</p><small>最終更新：{a.updated}</small></header>
    <section className="quick-answer"><b>先に答え</b><p>{a.answer}</p></section>
    {a.points.map((p,i)=><section className="article-section" key={p.heading}><span>0{i+1}</span><div><h2>{p.heading}</h2><p>{p.body}</p></div></section>)}
    <aside className="article-next"><p>次に読む</p><h2>疑問を、まとまった知識につなげる</h2><a href={a.next.href}>{a.next.label} →</a></aside>
    {a.source&&<footer><b>主な確認先</b><a href={a.source.href} target="_blank" rel="noreferrer">{a.source.label} ↗</a><p>制度やサービスの条件は変わることがあります。最終判断の前に最新の公式情報を確認してください。</p></footer>}
  </article></main>}
