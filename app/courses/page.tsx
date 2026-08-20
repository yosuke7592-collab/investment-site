import SiteHeader from "../components/SiteHeader";

export default function CoursesPage() {
  return <main className="courses-page">
    <SiteHeader current="courses" />
    <section className="courses-hero">
      <p className="eyebrow">CHOOSE YOUR COURSE</p>
      <h1>2つの投資コースと、<br/><em>それぞれの学習内容</em></h1>
      <p>20回の共通教材を終えたら、投資に使える時間と目的から選びます。迷ったら長期資産形成から始めてください。</p>
    </section>
    <section className="path-choice course-page-choice">
      <div className="path-grid">
        <article className="path-card long-path"><span>COURSE A</span><p className="path-type">守りながら育てる</p><h2>長期資産形成</h2><p>NISA・投資信託・ETFを使い、長期・積立・分散で将来の資産をつくります。</p><ul><li>市場全体へ分散する</li><li>毎月の積立を続ける</li><li>資産配分を定期的に戻す</li></ul><div className="path-fit"><b>向いている人</b><p>投資に多くの時間を使わず、10年以上かけて資産を育てたい。</p></div><a href="/long-term">長期資産形成を学ぶ <b>→</b></a></article>
        <article className="path-card active-path"><span>COURSE B</span><p className="path-type">自分で判断して売買する</p><h2>個別株・<br/>アクティブ投資</h2><p>企業・チャート・出来高を分析し、自分の売買ルールを作って検証します。</p><ul><li>投資対象とタイミングを選ぶ</li><li>注文・約定・損切りを管理する</li><li>取引記録からルールを改善する</li></ul><div className="path-fit"><b>向いている人</b><p>分析と検証に時間を使い、値動きと向き合って判断したい。</p></div><a href="/strategies">アクティブ投資を学ぶ <b>→</b></a></article>
      </div>
      <p className="path-note">二者択一ではありません。生活の土台は長期資産形成でつくり、余裕資金の一部でアクティブ投資を学ぶ方法もあります。</p>
    </section>
  </main>;
}
