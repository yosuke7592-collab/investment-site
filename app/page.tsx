import SiteHeader from "./components/SiteHeader";

const route = [
  { no: "01", title: "前提を知る", text: "投資の本質と、ルールが必要な理由を理解する。", href: "/start", cta: "最初に読む" },
  { no: "02", title: "基礎を学ぶ", text: "お金、リスク、商品、注文の仕組みを順番に学ぶ。", href: "/lessons?week=1", cta: "第1回から学ぶ" },
  { no: "03", title: "取引の仕組みを知る", text: "現物、投資信託、ETF、先物、レバレッジが成立する理由を知る。", href: "/mechanics", cta: "仕組みから学ぶ" },
  { no: "04", title: "スタイルを選ぶ", text: "使える資金と時間から、長期かアクティブかを選ぶ。", href: "/courses", cta: "2つを比較する" },
  { no: "05", title: "ルールを作り検証する", text: "投資額、入口、損切り、出口を決め、模擬か少額で検証する。", href: "/strategies/methods", cta: "ルールを学ぶ" },
];

export default function Home() {
  return <main className="new-home">
    <SiteHeader />
    <section className="new-hero compact-hero">
      <p className="eyebrow">LEARN → CHOOSE → RULE → VERIFY</p>
      <h1>投資は、<br/><em>自分のルール</em>を<br/>作ることから始まる。</h1>
      <p className="new-lead">勝てる銘柄を探す前に、種類と仕組みを知る。自分の資金・時間・性格に合う方法を選ぶ。そして、決めたルールを守りながら検証する。そのための学習サイトです。</p>
    </section>

    <section className="home-start" aria-labelledby="start-title">
      <div className="section-heading"><p className="eyebrow">START FROM YOUR POSITION</p><h2 id="start-title">今の自分から、始める。</h2><p>最初から全部読む必要はありません。知識と目的に合う入口を選びます。</p></div>
      <div className="home-start-grid">
        <a href="/start"><span>01</span><h3>投資をまだ説明できない</h3><p>投資の本質と、なぜ自分のルールが必要なのかから始める。</p><b>はじめに読む →</b></a>
        <a href="/lessons?week=1"><span>02</span><h3>基礎を順番に学びたい</h3><p>お金、リスク、商品、注文を20回の講座でつなげて理解する。</p><b>基礎講座へ →</b></a>
        <a href="/plan"><span>03</span><h3>自分に合う方法を考えたい</h3><p>使えるお金・期間・時間から、無理のない学習ルートを整理する。</p><b>投資設計を始める →</b></a>
      </div>
    </section>

    <section className="learning-road" aria-labelledby="route-title">
      <div className="section-heading"><p className="eyebrow">ONE LEARNING ROUTE</p><h2 id="route-title">迷わないための、5つの順番</h2><p>初めてなら上から順番に。知識がある場合は必要な段階から進めます。</p></div>
      <div className="step-list">{route.map((step) => <a href={step.href} className="learning-step" key={step.no}><span className="step-no">{step.no}</span><div><h3>{step.title}</h3><p>{step.text}</p></div><b>{step.cta} <span>→</span></b></a>)}</div>
    </section>

    <section className="style-branch" aria-labelledby="style-title">
      <div className="section-heading"><p className="eyebrow">CHOOSE YOUR STYLE</p><h2 id="style-title">基礎を学んだら、2つの道へ</h2><p>優劣ではなく、目的と使える時間で選びます。両方を組み合わせることもできます。</p></div>
      <div className="style-cards">
        <a href="/long-term"><span>STYLE A</span><h3>長期資産形成</h3><p>毎日の値動きを追わず、長期・積立・分散・低コストで仕組みをつくる。</p><b>このスタイルを学ぶ →</b></a>
        <a href="/strategies"><span>STYLE B</span><h3>アクティブ投資</h3><p>商品・チャート・戦略を分析し、売買ルールを作って検証する。</p><b>このスタイルを学ぶ →</b></a>
      </div>
    </section>

    <section className="resource-grid" aria-labelledby="tools-title"><div className="section-heading"><p className="eyebrow">WHEN YOU NEED IT</p><h2 id="tools-title">迷ったときに使う</h2></div><div><a href="/glossary"><b>用語集</b><span>分からない言葉を調べる　→</span></a><a href="/services"><b>サービス比較</b><span>口座・チャート・外部デモを比べる　→</span></a></div></section>

    <section className="editorial-trust" aria-labelledby="trust-title">
      <div className="section-heading"><p className="eyebrow">OUR EDITORIAL STANDARD</p><h2 id="trust-title">売るためではなく、<br/>判断できるようにする。</h2><p>投資情報は、誰が何の目的で書いたかまで確認します。</p></div>
      <div className="trust-grid"><article><b>01</b><h3>一次情報を優先</h3><p>金融庁・J-FLEC・日本銀行・JPXなど、公的機関や制度運営者の情報を優先します。</p></article><article><b>02</b><h3>事実と考え方を分ける</h3><p>制度・仕組み・計算と、戦略例・判断基準を混同しません。</p></article><article><b>03</b><h3>広告より教材を先に</h3><p>将来広告を掲載しても、報酬で順位を変えず、広告であることを明示します。</p></article></div>
      <a className="text-link" href="/about">編集方針と情報源を見る →</a>
    </section>
  </main>;
}
