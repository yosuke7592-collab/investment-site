import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import { articles } from "../data/articles";

export const metadata: Metadata = { title:"初心者向け投資記事", description:"投資を始める前の疑問を、難しい言葉を避けて短く説明します。" };

export default function ArticlesPage(){return <main className="articles-page"><SiteHeader />
  <section className="content-hero"><p className="eyebrow">ANSWERS FOR BEGINNERS</p><h1>今の疑問から<br/><em>投資を理解する</em></h1><p>知りたいことだけ読める短い記事です。答えを確認したあと、必要なら体系的な教材へ進めます。</p></section>
  <section className="article-index"><header><p className="eyebrow">LATEST GUIDES</p><h2>初心者向けの記事</h2></header><div>{articles.map(a=><a href={`/articles/${a.slug}`} key={a.slug}><span>{a.category}</span><h2>{a.title}</h2><p>{a.description}</p><b>3分で読む →</b></a>)}</div></section>
</main>}
