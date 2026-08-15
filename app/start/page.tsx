import SiteHeader from "../components/SiteHeader";

export default function StartPage() {
  return (
    <main className="start-page">
      <SiteHeader current="start" />

      <article className="start-article">
        <header className="start-title">
          <p className="eyebrow">BEFORE YOU INVEST</p>
          <h1>投資について、<br />最初に知っておきたいこと</h1>
          <p>ここに書かれていることが、このサイトで学ぶすべての土台です。</p>
        </header>

        <section className="start-chapter opening">
          <span>01</span>
          <div>
            <h2>投資という言葉の意味</h2>
            <p>「投資」と聞くと、株や投資信託、FXを思い浮かべるかもしれません。しかし、投資はそれだけではありません。</p>
            <p>将来のために知識や技術を身につける。知らない土地へ行き、新しい価値観に触れる。美味しい料理を食べ、経験を増やす。子どもの教育にお金を使う。</p>
            <p>これらも広い意味では、自分や誰かの未来にお金を使う投資です。</p>
            <blockquote>今あるお金を使い、<br /><em>将来のリターンを得ようとすること。</em></blockquote>
            <p>これが投資の本質です。リターンはお金だけではありません。知識、経験、人とのつながり、将来の選択肢もリターンになります。</p>
            <p>このサイトでは、その中でも「お金を増やすことを目的とした金融投資」について学んでいきます。</p>
          </div>
        </section>

        <section className="start-chapter">
          <span>02</span>
          <div>
            <h2>金融投資の種類と選び方</h2>
            <p>金融投資には、株式、投資信託、債券、為替、金、暗号資産など、さまざまな投資先があります。方法にも、長期投資、積立投資、スイングトレード、デイトレードなどがあります。</p>
            <p>どれか一つが絶対に正しいわけではありません。使える資金、使える時間、目指す利益、許容できる損失が人によって違うからです。</p>
            <div className="plain-point"><b>大切なのは、誰かの成功例をそのまま真似することではない。</b><p>特徴を理解し、自分の資金と生活に合う投資先・手法を選びます。</p></div>
          </div>
        </section>

        <section className="start-chapter">
          <span>03</span>
          <div>
            <h2>取引ルールが必要な理由</h2>
            <p>投資を続けられる人と、市場から退場する人。その違いを分ける大きな要因の一つが、自分で決めたルールを守れるかどうかです。</p>
            <ul><li>一度の取引に使う金額</li><li>どの条件で買うか</li><li>どこまで下がったら損失を確定するか</li><li>どこまで上がったら利益を確定するか</li><li>どのようなときは取引しないか</li></ul>
            <p>こうした条件を、お金が動いて感情が揺れる前に決めておきます。</p>
          </div>
        </section>

        <section className="emotion-loop" aria-labelledby="loop-title">
          <p className="eyebrow">THE NEGATIVE LOOP</p>
          <h2 id="loop-title">感情によって判断が変わる流れ</h2>
          <ol><li><b>ルールを破る</b><span>予定外の取引をする</span></li><li><b>たまたま利益が出る</b><span>「次も大丈夫」と思う</span></li><li><b>次は損失が出る</b><span>取り返すために金額を増やす</span></li><li><b>損失を認められない</b><span>「戻るはず」とルールを変える</span></li></ol>
          <p>危険なのは、ルールを破った直後に失敗することだけではありません。むしろ、一度成功してしまうことです。その経験が次の無理な取引を正当化します。</p>
        </section>

        <section className="start-chapter">
          <span>04</span>
          <div>
            <h2>少ない資金とレバレッジ</h2>
            <p>投資に使える金額が少ないと、短期間で大きく増やしたくなります。そこで目に入りやすいのが、少ない資金で大きな金額を動かすレバレッジ取引です。</p>
            <p>レバレッジは近道ではありません。利益を大きくする可能性と同時に、損失も大きくします。倍率が上がるほど、小さな値動きでも感情が揺れ、ルールを守ることが難しくなります。</p>
            <div className="number-example"><span>例</span><p>10万円で100万円分を取引すると、価格が5%逆に動いただけで損失は5万円。元手の半分を失います。</p></div>
            <p>一度で大きく取る必要はありません。自分が許容できる損失の範囲で取引し、検証を続けられることのほうが重要です。</p>
          </div>
        </section>

        <section className="start-chapter">
          <span>05</span>
          <div>
            <h2>取引記録とルールの見直し</h2>
            <p>最初から完璧なルールを作れる人はいません。ルールは、取引結果を記録し、検証しながら改善するものです。</p>
            <p>ただし、取引中の感情で条件を変えることと、記録をもとに冷静に見直すことは別です。ルールを破るのではなく、検証によってルールを育てます。</p>
          </div>
        </section>

        <section className="start-goal">
          <p className="eyebrow">THE GOAL</p>
          <h2>このサイトで学ぶ内容</h2>
          <ol><li>投資商品の種類と仕組みを知る</li><li>投資手法の特徴とリスクを理解する</li><li>自分の資金・時間・性格に合う方法を選ぶ</li><li>自分の取引ルールを作る</li><li>模擬取引や少額取引から始める</li><li>結果を記録して検証する</li><li>ルールを守りながら改善する</li></ol>
          <blockquote>投資で大切なのは、<br />一度だけ大きく勝つことではない。<br /><em>市場に残り、学び続けること。</em></blockquote>
        </section>
      </article>
    </main>
  );
}
