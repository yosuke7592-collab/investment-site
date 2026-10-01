import SiteHeader from "./components/SiteHeader";
import InvestmentMap from "./components/InvestmentMap";

const route = [
  { no: "01", title: "前提を知る", text: "投資の意味と全体像を理解する", href: "/start" },
  { no: "02", title: "基礎を学ぶ", text: "商品・仕組み・用語を知る", href: "/lessons?week=1" },
  { no: "03", title: "取引の仕組みを知る", text: "口座・注文・税金を知る", href: "/mechanics" },
  { no: "04", title: "スタイルを選ぶ", text: "自分に合った投資スタイルを見つける", href: "/courses" },
  { no: "05", title: "ルールを作り検証する", text: "リスク管理・運用ルールを実践・検証する", href: "/strategies/methods" },
];

const themes = [
  { icon: "◇", label: "NISA", text: "制度の仕組みや活用方法を理解する", href: "/long-term" },
  { icon: "▱", label: "投資信託", text: "特徴・選び方・注意点", href: "/articles/etf-vs-investment-trust" },
  { icon: "◌", label: "ETF", text: "投資信託との違いや活用方法", href: "/articles/etf-vs-investment-trust" },
  { icon: "⌁", label: "株式投資", text: "仕組み・注文方法・銘柄の考え方", href: "/mechanics" },
  { icon: "⌇", label: "チャート分析", text: "ローソク足・指標をテクニカル分析", href: "/strategies/chart" },
  { icon: "◇", label: "リスク管理", text: "損切り・資産配分・リスク分析", href: "/mechanics/leverage" },
];

const featured = [
  { category: "NISA", title: "NISAは投資商品ではない？制度の正しい理解", date: "2026.08.20", href: "/long-term", crop: "city" },
  { category: "基礎知識", title: "投資信託とETFの違いと、どちらを選べばよいか", date: "2026.08.20", href: "/articles/etf-vs-investment-trust", crop: "paper" },
  { category: "リスク管理", title: "50%下落した資産が元に戻るには？", date: "2026.08.20", href: "/articles/why-stop-loss", crop: "data" },
  { category: "チャート分析", title: "移動平均線とは？見方と使い方をわかりやすく", date: "2026.08.20", href: "/articles/moving-average-basics", crop: "chart" },
];

export default function Home() {
  return <main className="home-v2">
    <SiteHeader />
    <section className="v2-hero" aria-labelledby="home-title">
      <div className="v2-container v2-hero-grid">
        <div className="v2-hero-copy">
          <p className="v2-kicker">INVESTING FOR A BETTER FUTURE</p>
          <h1 id="home-title">投資は、<br /><em>自分のルール</em>を<br />作ることから始まる。</h1>
          <p>投資をこれから始める人にも、もう一度きちんと学び直したい人にも。<br className="desktop-only" />商品・市場・リスク・戦略を体系的に理解し、自分で判断するための投資メディアです。</p>
        </div>
        <div className="v2-hero-art" aria-hidden="true">
          <img src="/images/hero-rule-mountains-v2.png" alt="" />
          <div className="hero-art-grid" />
          <div className="hero-art-label"><span>KNOWLEDGE</span><span>DISCIPLINE</span><span>PERSPECTIVE</span><span>FOR A BETTER FUTURE</span></div>
          <b>01</b>
        </div>
      </div>
    </section>
    <section className="v2-entry-band" aria-label="学習の入口">
      <div className="v2-container v2-hero-entries">
          <a className="entry-first" href="/start"><i>▣</i><span><strong>はじめての方</strong><small>まず何から始めるか</small></span><b>→</b></a>
          <a href="/lessons?week=1"><i>◇</i><span><strong>基礎を整理したい</strong><small>知識をもう一度体系的に</small></span><b>→</b></a>
          <a className="entry-deep" href="/lab"><i>⌁</i><span><strong>もっと深く学びたい</strong><small>戦略・検証・応用まで</small></span><b>→</b></a>
      </div>
    </section>

    <section className="v2-explore v2-container" aria-labelledby="theme-title">
      <div className="v2-heading split-heading"><div><p className="v2-kicker">FIND YOUR ANSWER</p><h2 id="theme-title">知りたいことから探す</h2></div><p>投資に関する疑問をテーマごとに整理。<br />基礎から応用まで、あなたのペースで学べます。</p><a href="/articles">すべて見る　→</a></div>
      <div className="v2-theme-grid">{themes.map((theme) => <a href={theme.href} key={theme.label}><i>{theme.icon}</i><strong>{theme.label}</strong><span>{theme.text}</span><b>→</b></a>)}</div>
    </section>

    <InvestmentMap />

    <section className="v2-featured v2-container" aria-labelledby="featured-title">
      <div className="v2-heading split-heading"><div><p className="v2-kicker">FEATURED ARTICLES</p><h2 id="featured-title">注目の記事</h2></div><p>今、読んでおきたいテーマを厳選して紹介します。</p><a href="/articles">すべての記事を見る　→</a></div>
      <div className="v2-featured-grid">{featured.map((article) => <a className="v2-article-card" href={article.href} key={article.title}><div className={`article-image ${article.crop}`} aria-hidden="true"><img src="/images/featured-investing-v2.png" alt="" /></div><div className="article-card-copy"><span>{article.category}</span><h3>{article.title}</h3><small>{article.date}</small><b>→</b></div></a>)}</div>
    </section>

    <section className="v2-learning v2-container" aria-labelledby="route-title">
      <div className="v2-heading split-heading"><div><p className="v2-kicker">LEARN STEP BY STEP</p><h2 id="route-title">投資を学ぶ流れ</h2></div><p>基礎から応用まで、5つのステップで体系的に学べます。</p><a href="/courses">学習コースを見る　→</a></div>
      <ol>{route.map((step) => <li key={step.no}><a href={step.href}><span>{step.no}</span><div><h3>{step.title}</h3><p>{step.text}</p></div><b>→</b></a></li>)}</ol>
    </section>

    <section className="v2-promos v2-container" aria-label="学習とサービス比較への案内">
      <a className="v2-lab-panel" href="/lab"><div><p className="v2-kicker">LAB</p><h2>知識を、検証できる<br />知識へ。</h2><p>投資の考え方を、実際のデータで検証する場所。より深く、自分で考える力を育てます。</p></div><b>LABを見る　→</b></a>
      <a className="v2-service-panel" href="/services"><div><p className="v2-kicker">SERVICE</p><h2>目的に合わせた<br />サービスを比較する</h2><p>証券会社・FX・暗号資産など、目的に合ったサービスをわかりやすく比較。</p></div><b>サービス比較を見る　→</b></a>
    </section>

    <section className="v2-manifesto"><div className="v2-container"><div><p className="v2-kicker">LEARN BY STEP</p><h2>自分のルールを作り、<br />そのルールを守る。</h2></div><p>投資は、知識だけでなく、継続する力が大切です。<br />一緒に、よりよい投資の判断を学んでいきましょう。</p><a href="/start">さっそく学び始める　→</a></div></section>
  </main>;
}
