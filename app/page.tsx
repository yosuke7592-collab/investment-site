const steps = [
  {
    no: "01",
    title: "前提を知る",
    text: "投資の本質と、なぜ自分のルールが必要なのかを理解する。",
    href: "/start",
    action: "最初に読む",
  },
  {
    no: "02",
    title: "商品を知る",
    text: "株・投資信託・債券・金・為替・暗号資産の違いを比べる。",
    href: "/strategies/products",
    action: "商品を比較する",
  },
  {
    no: "03",
    title: "手法を知る",
    text: "長期投資からデイトレードまで、時間と性格に合う方法を探す。",
    href: "/strategies/methods",
    action: "手法を比較する",
  },
  {
    no: "04",
    title: "練習する",
    text: "注文・約定・損切りを、実際の取引に近い流れで試す。",
    href: "/lab",
    action: "模擬取引をする",
  },
  {
    no: "05",
    title: "ルールを作る",
    text: "取引条件と許容損失を言葉にして、守れる形にする。",
    href: "/lessons?week=12",
    action: "ルールを作る",
  },
];

export default function Home() {
  return (
    <main className="new-home">
      <header className="simple-header">
        <a className="brand" href="/">
          <span className="brand-mark">18</span>
          <span>18歳からの投資の地図</span>
        </a>
        <nav aria-label="メインナビゲーション">
          <a href="/start">はじめに</a>
          <a href="/lessons?week=1">全20回講座</a>
          <a href="/glossary">用語集</a>
        </nav>
      </header>

      <section className="new-hero">
        <p className="eyebrow">MONEY, CHOICE & DISCIPLINE</p>
        <h1>
          投資は、<br />
          <em>自分のルール</em>を<br />
          作ることから始まる。
        </h1>
        <p className="new-lead">
          投資には、たくさんの商品と手法があります。だから最初から「何を買うか」を決める必要はありません。まず違いを知り、自分の資金・時間・性格に合う方法を選び、守れるルールを作ります。
        </p>
        <div className="new-actions">
          <a className="new-primary" href="/start">最初に伝えたいことを読む <span>→</span></a>
          <a className="new-secondary" href="/lessons?week=1">第1回から学ぶ</a>
        </div>
      </section>

      <section className="core-message" aria-labelledby="core-title">
        <div>
          <p className="eyebrow">THE CORE</p>
          <h2 id="core-title">お金を使って、<br />未来のリターンを得る。</h2>
        </div>
        <div className="core-copy">
          <p>株を買うことだけが投資ではありません。知識を得ること、旅に出ること、子どもの教育にお金を使うことも、広い意味では投資です。</p>
          <p>このサイトでは、その中でも金融投資を扱います。勝てる銘柄を教えるのではなく、自分で選び、判断し、続けるための考え方を学びます。</p>
        </div>
      </section>

      <section className="learning-road" aria-labelledby="road-title">
        <div className="section-heading">
          <p className="eyebrow">LEARNING ROAD</p>
          <h2 id="road-title">迷わないための、5つの順番</h2>
          <p>上から順番に進めれば、知識が実際の行動につながります。</p>
        </div>
        <div className="step-list">
          {steps.map((step) => (
            <a href={step.href} className="learning-step" key={step.no}>
              <span className="step-no">{step.no}</span>
              <div><h3>{step.title}</h3><p>{step.text}</p></div>
              <b>{step.action} <span>→</span></b>
            </a>
          ))}
        </div>
      </section>

      <section className="survival-rule">
        <p className="eyebrow">ONE RULE TO REMEMBER</p>
        <blockquote>一度で大きく取ろうとしない。<br /><em>ルールの範囲で取り、継続する。</em></blockquote>
        <p>ルールを破って一度成功することが、次の大きな失敗を呼ぶことがあります。投資の目的は、一度勝つことではなく、退場せずに検証を続けられる状態をつくることです。</p>
        <a href="/start">なぜルールが必要なのか →</a>
      </section>

      <section className="resource-grid" aria-labelledby="resource-title">
        <div className="section-heading">
          <p className="eyebrow">REFERENCE</p>
          <h2 id="resource-title">必要になったときに使う教材</h2>
        </div>
        <div>
          <a href="/lessons?week=1"><b>全20回講座</b><span>基礎から実行まで順番に学ぶ</span></a>
          <a href="/strategies/chart"><b>チャートの読み方</b><span>ローソク足と主要指標を学ぶ</span></a>
          <a href="/glossary"><b>用語集</b><span>分からない言葉をその場で確認する</span></a>
          <a href="/services"><b>サービス比較</b><span>口座や学習サービスを比べる</span></a>
        </div>
      </section>

      <footer className="new-footer">
        <b>18歳からの投資の地図</b>
        <p>本サイトは投資判断の考え方を学ぶ教材です。利益を保証したり、特定商品の売買を勧めたりするものではありません。</p>
      </footer>
    </main>
  );
}
