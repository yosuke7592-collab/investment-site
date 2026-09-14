import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "NISAとiDeCoの違い｜途中で引き出せない点・税制・手数料・向いている人",
  description: "NISAとiDeCoの目的、税制、途中引き出し、利用条件、掛金・投資額、手数料、商品、向いている人を投資初心者向けに比較します。",
  alternates: { canonical: "/nisa-vs-ideco" },
  openGraph: {
    title: "NISAとiDeCoの違い｜途中で引き出せない点・税制・手数料・向いている人",
    description: "NISAとiDeCoを、税制・引き出し・費用・向いている人から初心者向けに比較します。",
    type: "article",
    url: "/nisa-vs-ideco",
  },
};

const comparison = [
  ["主な目的", "将来の幅広い目的に向けた資産形成", "老後資金を自分で準備する私的年金"],
  ["拠出・購入時の税制", "投資した金額の所得控除はない", "本人が出した掛金は全額所得控除。課税所得がない人には所得控除の効果がない"],
  ["運用時の税制", "対象商品の売却益・配当等が非課税", "運用益は制度内で非課税で再投資"],
  ["受取時の税制", "売却して引き出す際に、制度独自の受取課税はない", "年金は公的年金等控除、一時金は退職所得控除の対象。受取額や他の所得等により課税される場合がある"],
  ["途中引き出し", "売却していつでも引き出せる", "原則60歳まで自由に引き出せない。例外は厳しい要件がある"],
  ["利用条件", "原則、日本国内に住む18歳以上。1人1口座", "基本的に20歳以上65歳未満の公的年金被保険者。働き方・企業年金等で条件が異なる"],
  ["掛金・投資額", "年120万円のつみたて投資枠と年240万円の成長投資枠。合計年360万円", "月5,000円から1,000円単位。上限は公的年金の区分や企業年金等で異なる"],
  ["主な費用", "商品固有の売買手数料・信託報酬等", "加入・掛金納付・給付等の手数料、金融機関の手数料、商品の信託報酬等"],
  ["商品", "つみたて投資枠は一定の投資信託、成長投資枠は上場株式・投資信託等", "選んだ運営管理機関が提示する預貯金・保険・投資信託等"],
  ["向いている人", "使う時期を固定せず資産形成したい人", "60歳まで使わない老後資金を準備し、所得控除も確認できる人"],
];

export default function NisaVsIdecoPage() {
  return <main className="nisa-ideco-page"><SiteHeader current="courses" />
    <article>
      <nav aria-label="パンくず"><a href="/">トップ</a><span>›</span><a href="/long-term">長期資産形成</a><span>›</span>NISAとiDeCoの違い</nav>
      <header className="nisa-ideco-hero"><p className="eyebrow">NISA VS iDeCo</p><h1>NISAとiDeCoの違い<br/><em>途中で引き出せない点・税制・手数料・向いている人</em></h1><p>どちらが得かを先に決めるのではなく、「いつ使うお金か」を最初に考えます。NISAは途中で売却できますが、iDeCoは老後資金の制度なので、原則60歳まで自由に引き出せません。</p><small>最終更新・制度確認：2026年9月14日</small></header>

      <section className="ideco-answer"><b>先に答え</b><p>老後前に使う可能性があるお金なら、途中で引き出せるNISAの方が目的に合いやすいです。60歳まで使わない老後資金で、所得控除の効果・費用・受取時の税金まで確認できるなら、iDeCoも候補になります。両方を使う場合も、生活防衛資金を先に確保します。</p></section>

      <section className="ideco-content"><h2>NISAとは</h2><p>NISAは、口座の中で買った対象商品の売却益や配当などが非課税になる制度です。現行制度には、長期の積立・分散投資に適した一定の投資信託を扱う「つみたて投資枠」と、上場株式なども扱う「成長投資枠」があります。日本国内に住む18歳以上が原則1人1口座を開設できます。</p><p>年間投資枠はつみたて投資枠120万円、成長投資枠240万円で、併用すると年360万円です。非課税保有限度額は合計1,800万円で、そのうち成長投資枠は1,200万円までです。売却すれば現金化できますが、元本割れがなくなる制度ではありません。</p></section>

      <section className="ideco-content"><h2>iDeCoとは</h2><p>iDeCoは、自分で掛金を出し、自分で商品を選んで運用し、老後に受け取る私的年金です。基本的に20歳以上65歳未満の公的年金被保険者が加入できますが、国民年金保険料の納付状況や勤務先の企業年金などによって加入・掛金の条件が変わります。</p><div className="ideco-warning"><b>もっとも重要な違い</b><p>iDeCoは、掛金の拠出を止めても、積み立てた資産を原則60歳まで自由に引き出せません。例外となる脱退一時金は、複数の厳しい要件をすべて満たす場合に限られます。</p></div></section>

      <section className="ideco-comparison"><h2>NISAとiDeCoの比較</h2><p>表は全体像をつかむための要約です。年齢、働き方、企業年金、受取時期によって条件が変わるため、申込前に公式情報と勤務先の制度を確認してください。</p><div className="compare-scroll"><table><thead><tr><th>比較する点</th><th>NISA</th><th>iDeCo</th></tr></thead><tbody>{comparison.map(([label,nisa,ideco])=><tr key={label}><th>{label}</th><td>{nisa}</td><td>{ideco}</td></tr>)}</tbody></table></div></section>

      <section className="ideco-content"><h2>税制は「入口・運用中・出口」で分けて考える</h2><div className="tax-steps"><article><b>01 拠出・購入時</b><p>NISAに投資した金額は所得控除になりません。iDeCoで本人が支払った掛金は小規模企業共済等掛金控除の対象です。ただし、課税所得がない人は所得控除の効果を受けられません。</p></article><article><b>02 運用時</b><p>どちらも制度内の対象となる運用益は非課税です。ただし、値下がりや元本割れはあり、商品の信託報酬などは別にかかります。</p></article><article><b>03 受取時</b><p>NISAは売却して引き出せます。iDeCoは年金受取なら公的年金等控除、一時金受取なら退職所得控除の対象ですが、他の年金・退職金や受取時期との関係で税額が変わります。</p></article></div></section>

      <section className="ideco-content"><h2>iDeCoの掛金と手数料</h2><p>掛金は月5,000円から1,000円単位です。2026年9月時点の上限は、自営業者等が月6万8,000円（国民年金基金・付加保険料との合算）、企業年金のない会社員が月2万3,000円、企業年金等がある会社員・公務員が原則月2万円の範囲、専業主婦・主夫等が月2万3,000円などです。個人ごとの上限は企業年金等で変わります。</p><p>国民年金基金連合会の手数料は、新規加入時等に2,829円、掛金納付の都度105円です。これに事務委託先金融機関や運営管理機関の手数料、商品の信託報酬等が加わる場合があります。掛金納付手数料は2027年1月引落し分から月120円へ変更予定です。</p><aside className="law-change"><b>今後の制度変更</b><p>厚生労働省は、iDeCoの加入可能年齢と拠出限度額を2026年12月1日に変更予定と案内しています。これから加入する場合は、その時点の最新上限を確認してください。</p></aside></section>

      <section className="ideco-content"><h2>商品選択と元本割れ</h2><p>NISAでもiDeCoでも、制度を選ぶだけでは運用結果は決まりません。投資信託や株式などは価格が下がり、元本割れする可能性があります。iDeCoには元本確保型商品もありますが、手数料や物価上昇を含めて考える必要があります。</p><p>商品を選ぶときは、何に投資するか、値動きの大きさ、分散、信託報酬、途中で商品を変更できるかを確認します。</p></section>

      <section className="ideco-fit"><h2>どちらが向いているか</h2><div><article><h3>NISAが向いているケース</h3><ul><li>老後以外にも使う可能性がある</li><li>必要なときに売却できることを重視する</li><li>所得控除より、運用益の非課税を使いたい</li><li>まず少額で積立を経験したい</li></ul></article><article><h3>iDeCoが向いているケース</h3><ul><li>60歳まで使わない老後資金を分けられる</li><li>安定した課税所得があり、所得控除を確認できる</li><li>加入・運用・受取の手数料と税金を理解できる</li><li>途中で使えない仕組みを老後準備に生かしたい</li></ul></article></div></section>

      <section className="ideco-content"><h2>両方利用する考え方</h2><p>NISAとiDeCoは併用できます。ただし、制度枠をすべて使うことが目標ではありません。まず生活費の予備と近い将来に使うお金を現金で確保し、その後に「途中で使う可能性がある資金はNISA」「60歳まで使わない老後資金はiDeCo」のように目的で分けます。</p><h3>始める前の確認</h3><ol><li>生活防衛資金を別に確保しているか</li><li>そのお金をいつ使う予定か</li><li>iDeCoなら60歳まで引き出せなくても困らないか</li><li>所得控除の効果を受けられるか</li><li>加入・保有・受取までの手数料と税金を確認したか</li><li>商品の中身と元本割れの可能性を説明できるか</li></ol></section>

      <section className="ideco-next"><p className="eyebrow">NEXT STEP</p><h2>利用すると決めたら、金融機関を比べる</h2><p>iDeCoを使うかどうかを先に判断し、その後で金融機関ごとの取扱商品、運営管理手数料等、使いやすさ、サポートを比べます。</p><a href="/services#ideco">iDeCoの金融機関比較を見る →</a></section>

      <footer className="ideco-sources"><h2>主な公式確認先</h2><ul><li><a href="https://www.fsa.go.jp/policy/nisa2/know/" target="_blank" rel="noreferrer">金融庁｜NISAを知る ↗</a></li><li><a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/nenkin/kyoshutsu/ideco.html" target="_blank" rel="noreferrer">厚生労働省｜iDeCoの概要 ↗</a></li><li><a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/nenkin/nenkin/kyoshutsu/2025kaisei.html" target="_blank" rel="noreferrer">厚生労働省｜2025年の制度改正 ↗</a></li><li><a href="https://www.ideco-koushiki.jp/guide/" target="_blank" rel="noreferrer">iDeCo公式｜iDeCoの特徴 ↗</a></li><li><a href="https://www.ideco-koushiki.jp/faq/" target="_blank" rel="noreferrer">iDeCo公式｜よくあるご質問 ↗</a></li><li><a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1135.htm" target="_blank" rel="noreferrer">国税庁｜小規模企業共済等掛金控除 ↗</a></li></ul><p>制度・税制は変更されることがあります。加入や受取を決める前に最新の公式情報を確認し、必要に応じて税務署・税理士等へ相談してください。</p></footer>
    </article>
  </main>;
}
