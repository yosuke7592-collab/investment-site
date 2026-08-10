export default function CoursesPage() {
  return <main className="courses-page">
    <header className="topbar site-header">
      <a className="brand" href="/"><span className="brand-mark">18</span><span>投資の地図</span></a>
      <nav className="global-nav" aria-label="メインナビゲーション">
        <a className="current" href="/courses">2つのコース</a><a href="/strategies">データ・戦略</a><a href="/glossary">用語集</a><a href="/services">サービス比較</a>
      </nav>
    </header>
    <section className="courses-hero">
      <p className="eyebrow">CHOOSE YOUR COURSE</p>
      <h1>目的に合わせて、<br/><em>学ぶ道を選ぶ。</em></h1>
      <p>20回の共通教材を終えたら、投資に使える時間と目的から選びます。迷ったら長期資産形成から始めてください。</p>
    </section>
    <section className="path-choice course-page-choice">
      <div className="path-grid">
        <article className="path-card long-path"><span>COURSE A</span><p className="path-type">守りながら育てる</p><h2>長期資産形成</h2><p>NISA・投資信託・ETFを使い、長期・積立・分散で将来の資産をつくります。</p><ul><li>市場全体へ分散する</li><li>毎月の積立を続ける</li><li>資産配分を定期的に戻す</li></ul><div className="path-fit"><b>向いている人</b><p>投資に多くの時間を使わず、10年以上かけて資産を育てたい。</p></div><a href="/long-term">長期資産形成を学ぶ <b>→</b></a></article>
        <article className="path-card active-path"><span>COURSE B</span><p className="path-type">自分で判断して売買する</p><h2>個別株・<br/>アクティブ投資</h2><p>企業・チャート・出来高を分析し、自分の売買ルールを作って検証します。</p><ul><li>投資対象とタイミングを選ぶ</li><li>注文・約定・損切りを管理する</li><li>取引記録からルールを改善する</li></ul><div className="path-fit"><b>向いている人</b><p>分析と検証に時間を使い、値動きと向き合って判断したい。</p></div><a href="/lab">アクティブ投資を学ぶ <b>→</b></a></article>
      </div>
      <div className="course-tools"><p className="eyebrow">LEARNING TOOLS</p><h2>コースを選んだ後に使う教材</h2><div><a href="/strategies"><b>データ・戦略ラボ</b><span>ローソク足・出来高・4つの戦略例 →</span></a><a href="/services"><b>サービス比較</b><span>証券会社・デモ取引・参考書を比較 →</span></a></div></div>
      <p className="path-note">二者択一ではありません。生活の土台は長期資産形成でつくり、余裕資金の一部でアクティブ投資を学ぶ方法もあります。</p>
    </section>
  </main>;
}
