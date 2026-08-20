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
      <div className="section-heading"><p className="eyebrow">START FROM YOUR POSITION</p><h2 id="start-title">学習の入口を選ぶ</h2><p>最初から全部読む必要はありません。知識と目的に合う入口を選びます。</p></div>
      <div className="home-start-grid">
        <a href="/start"><span>01</span><h3>投資をまだ説明できない</h3><p>投資の本質と、なぜ自分のルールが必要なのかから始める。</p><b>はじめに読む →</b></a>
        <a href="/lessons?week=1"><span>02</span><h3>基礎を順番に学びたい</h3><p>お金、リスク、商品、注文を20回の講座でつなげて理解する。</p><b>基礎講座へ →</b></a>
        <a href="/plan"><span>03</span><h3>自分に合う方法を考えたい</h3><p>使えるお金・期間・時間から、無理のない学習ルートを整理する。</p><b>投資設計を始める →</b></a>
      </div>
    </section>


    <section className="intent-hub" aria-labelledby="intent-title">
      <div className="section-heading"><p className="eyebrow">FIND BY QUESTION</p><h2 id="intent-title">知りたいことから探す</h2><p>順番に学ぶだけでなく、今の疑問から必要なページへ進めます。</p></div>
      <div className="intent-grid">
        <a href="/mechanics"><span>仕組み</span><h3>株や投資信託は、どうやって利益が出る？</h3><p>値上がり・配当・分配金など、投資商品の基本的な仕組みを確認します。</p><b>仕組みを知る →</b></a>
        <a href="/courses"><span>選び方</span><h3>長期投資と短期売買、自分にはどちらが合う？</h3><p>資金だけでなく、使える時間や値動きとの付き合い方から考えます。</p><b>投資方法を比べる →</b></a>
        <a href="/mechanics/leverage"><span>リスク</span><h3>レバレッジは、なぜ利益も損失も大きくなる？</h3><p>証拠金と損益の関係を、数字を使って理解します。</p><b>レバレッジを学ぶ →</b></a>
        <a href="/strategies/chart"><span>チャート</span><h3>ローソク足や移動平均線は、何を見ている？</h3><p>形を暗記する前に、価格の動きから読み取れることを整理します。</p><b>チャートを学ぶ →</b></a>
        <a href="/glossary"><span>用語</span><h3>知らない投資用語をすぐ確認したい</h3><p>講座の途中で分からない言葉が出たときに、必要な用語だけ確認できます。</p><b>用語集を見る →</b></a>
        <a href="/services"><span>比較</span><h3>口座やツールは、何を基準に選べばいい？</h3><p>人気順ではなく、目的・商品・コスト・使いやすさから比較します。</p><b>選び方・比較を見る →</b></a>
      </div>
    </section>

    <section className="learning-road" aria-labelledby="route-title">
      <div className="section-heading"><p className="eyebrow">ONE LEARNING ROUTE</p><h2 id="route-title">投資を学ぶ流れ</h2><p>初めてなら上から順番に。知識がある場合は必要な段階から進めます。</p></div>
      <div className="step-list">{route.map((step) => <a href={step.href} className="learning-step" key={step.no}><span className="step-no">{step.no}</span><div><h3>{step.title}</h3><p>{step.text}</p></div><b>{step.cta} <span>→</span></b></a>)}</div>
    </section>

    <section className="home-articles" aria-labelledby="article-title"><div className="section-heading"><p className="eyebrow">QUICK ANSWERS</p><h2 id="article-title">今の疑問を、3分で解決する</h2><p>検索で見つけた疑問に短く答え、その先の教材へ案内します。</p></div><div><a href="/articles/etf-vs-investment-trust"><span>商品</span><h3>ETFと投資信託の違いは？</h3><p>売買方法と積立のしやすさから比べます。</p></a><a href="/articles/market-vs-limit-order"><span>注文</span><h3>成行と指値はどう違う？</h3><p>成立しやすさと価格の決め方を整理します。</p></a><a href="/articles/before-starting-investing"><span>始め方</span><h3>投資前に何を決めればいい？</h3><p>目的・期間・金額・やめる条件を確認します。</p></a></div><a className="text-link" href="/articles">初心者向けの記事をすべて見る →</a></section>

    <section className="style-branch" aria-labelledby="style-title">
      <div className="section-heading"><p className="eyebrow">CHOOSE YOUR STYLE</p><h2 id="style-title">目的に合わせた学習コース</h2><p>優劣ではなく、目的と使える時間で選びます。両方を組み合わせることもできます。</p></div>
      <div className="style-cards">
        <a href="/long-term"><span>STYLE A</span><h3>長期資産形成</h3><p>毎日の値動きを追わず、長期・積立・分散・低コストで仕組みをつくる。</p><b>このスタイルを学ぶ →</b></a>
        <a href="/strategies"><span>STYLE B</span><h3>アクティブ投資</h3><p>商品・チャート・戦略を分析し、売買ルールを作って検証する。</p><b>このスタイルを学ぶ →</b></a>
      </div>
    </section>

    <section className="decision-bridge" aria-labelledby="decision-title"><div className="section-heading"><p className="eyebrow">FROM LEARNING TO CHOOSING</p><h2 id="decision-title">理解したあとに、必要なものを選ぶ</h2><p>このサイトでは、教材とサービス比較を分けています。先に仕組みを理解し、必要になった段階で選択肢を比較します。</p></div><div className="decision-flow"><article><span>01</span><h3>学ぶ</h3><p>商品の仕組みやリスクを理解する。</p></article><i>→</i><article><span>02</span><h3>決める</h3><p>自分が何をしたいのかを整理する。</p></article><i>→</i><article><span>03</span><h3>比べる</h3><p>目的に必要な口座・ツールだけを比較する。</p></article></div><div className="decision-links"><a href="/glossary"><b>用語集</b><span>分からない言葉を確認する →</span></a><a href="/services"><b>サービスの選び方・比較</b><span>証券会社・デモ・チャート等を見る →</span></a></div></section>

    <section className="editorial-trust" aria-labelledby="trust-title">
      <div className="section-heading"><p className="eyebrow">OUR EDITORIAL STANDARD</p><h2 id="trust-title">このサイトの編集方針</h2><p>投資情報は、誰が何の目的で書いたかまで確認します。</p></div>
      <div className="trust-grid"><article><b>01</b><h3>一次情報を優先</h3><p>金融庁・J-FLEC・日本銀行・JPXなど、公的機関や制度運営者の情報を優先します。</p></article><article><b>02</b><h3>事実と考え方を分ける</h3><p>制度・仕組み・計算と、戦略例・判断基準を混同しません。</p></article><article><b>03</b><h3>広告より教材を先に</h3><p>将来広告を掲載しても、報酬で順位を変えず、広告であることを明示します。</p></article></div>
      <a className="text-link" href="/about">編集方針と情報源を見る →</a>
    </section>
  </main>;
}
