import SiteHeader from "../components/SiteHeader";

const chapters = [
  { no:"01", title:"市場と約定", text:"誰の注文が、どこで、どのように一致して価格になるのか。", href:"#market" },
  { no:"02", title:"現物・株式", text:"代金を払い、実際に資産を保有する取引の基本。", href:"#spot" },
  { no:"03", title:"投資信託・ETF", text:"同じ投資信託でも、購入方法と価格の決まり方が違う。", href:"#funds" },
  { no:"04", title:"信用・FX・CFD・先物", text:"借りる取引、差額を清算する取引、将来の契約を分ける。", href:"#derivatives" },
  { no:"05", title:"レバレッジ", text:"証拠金より大きい金額を動かせる理由と、損失の仕組み。", href:"/mechanics/leverage" },
];

export default function MechanicsPage(){return <main className="mechanics-page">
  <SiteHeader current="mechanics" />
  <section className="mechanics-hero"><p className="eyebrow">HOW FINANCIAL TRADING WORKS</p><h1>金融商品の取引が<br/><em>成立する仕組み</em></h1><p>金融商品は名前だけ覚えても使えません。誰と取引し、価格はどう決まり、お金と商品がどう動き、どこまで損をする可能性があるのか。この共通構造から理解します。</p></section>
  <nav className="mechanics-index" aria-label="この章の目次">{chapters.map(c=><a href={c.href} key={c.no}><span>{c.no}</span><div><b>{c.title}</b><p>{c.text}</p></div><i>見る →</i></a>)}</nav>

  <section className="mechanics-section" id="market"><header><span>01</span><div><p className="eyebrow">MARKET &amp; EXECUTION</p><h2>売買が成立するまで</h2></div></header><div className="mechanics-copy">
    <p>市場の基本は、売りたい人と買いたい人の注文を集めることです。ある株を1,000円で売りたい人と、1,000円で買いたい人がいれば、条件が一致して取引が成立します。これが約定です。</p>
    <div className="order-match"><div><small>買いたい人</small><strong>1,000円で100株</strong><p>買い注文</p></div><i>条件が一致<br/>約定</i><div><small>売りたい人</small><strong>1,000円で100株</strong><p>売り注文</p></div></div>
    <p>買いたい人が多く、1,000円で売る人がいなければ、買い手は1,001円、1,002円と条件を上げます。反対に売りたい人が多ければ、売り手が価格を下げます。株価は企業が毎秒決めるものではなく、市場参加者の注文が一致した価格です。</p>
    <div className="roles-grid"><article><b>投資家</b><p>買う・売る条件を決め、注文を出す。</p></article><article><b>証券会社</b><p>投資家の窓口となり、注文を取引所へ送る。</p></article><article><b>取引所</b><p>多数の注文を集め、ルールに従って成立させる。</p></article><article><b>清算・決済機関</b><p>成立後のお金と商品の受け渡しを管理する。</p></article></div>
    <div className="mechanics-note"><b>注文と約定は違う</b><p>注文を出しても、反対側に条件の合う相手がいなければ成立しません。指値は価格を管理できますが未約定になる可能性があり、成行は成立を優先しますが価格がずれる可能性があります。</p></div>
  </div></section>

  <section className="mechanics-section alt" id="spot"><header><span>02</span><div><p className="eyebrow">SPOT &amp; STOCKS</p><h2>現物取引と株式の保有</h2></div></header><div className="mechanics-copy">
    <p>現物取引では、10万円分の株を買うなら原則10万円を支払います。価格が20％上がれば評価額は12万円、20％下がれば8万円です。通常、損失の上限は投資した金額までです。</p>
    <div className="money-flow"><span>自分の現金<br/><b>10万円</b></span><i>買付</i><span>株式を保有<br/><b>10万円分</b></span><i>売却</i><span>現金へ戻る<br/><b>時価</b></span></div>
    <h3>株を買うと、そのお金は会社へ行く？</h3><p>会社が新株を発行して資金を集める「発行市場」では、資金が会社へ入ります。一方、普段の取引所で行う「流通市場」では、すでに発行された株を投資家同士で売買します。あなたの買付代金は基本的に売った投資家へ渡り、直接会社へ入るわけではありません。</p>
    <div className="two-market"><article><span>発行市場</span><h4>会社 ↔ 投資家</h4><p>新しい株式や債券を発行し、会社などが資金を調達する。</p></article><article><span>流通市場</span><h4>投資家 ↔ 投資家</h4><p>発行済みの商品を売買し、いつでも換金しやすくする。</p></article></div>
  </div></section>

  <section className="mechanics-section" id="funds"><header><span>03</span><div><p className="eyebrow">FUNDS &amp; ETF</p><h2>投資信託とETFの違い</h2></div></header><div className="mechanics-copy">
    <h3>一般的な投資信託</h3><p>多くの投資家から集めたお金を一つにまとめ、運用会社が株や債券へ投資します。投資家は株を直接保有するのではなく、そのファンドの持分を保有します。販売会社で金額を指定して購入し、保有資産の時価から計算される基準価額で取引します。</p>
    <div className="fund-flow"><span>投資家</span><i>購入・積立</i><span>販売会社</span><i>資金をまとめる</i><span>投資信託</span><i>運用</i><span>株・債券など</span></div>
    <p>一般的な投資信託の基準価額は通常1日1回計算されます。そのため注文時には最終的な購入・換金価格がまだ分からない場合があります。取引画面では、購入金額、積立額、口座区分、分配金の扱い、目論見書の確認などを選びます。</p>
    <h3>ETF</h3><p>ETFは取引所に上場している投資信託です。中には複数の株などが入っていますが、売買方法は上場株式に近く、市場が開いている間は価格が動き、成行・指値で取引できます。</p>
    <div className="compare-scroll"><table><thead><tr><th>比較</th><th>一般的な投資信託</th><th>ETF</th><th>個別株</th></tr></thead><tbody><tr><th>中身</th><td>複数資産</td><td>複数資産など</td><td>一つの会社</td></tr><tr><th>売買場所</th><td>販売会社</td><td>取引所</td><td>取引所</td></tr><tr><th>価格</th><td>原則1日1回の基準価額</td><td>市場で変動</td><td>市場で変動</td></tr><tr><th>注文</th><td>金額・口数指定など</td><td>成行・指値</td><td>成行・指値</td></tr><tr><th>確認点</th><td>中身・費用・分配方針</td><td>中身・費用・売買価格差</td><td>企業・業績・価格</td></tr></tbody></table></div>
  </div></section>

  <section className="mechanics-section alt" id="derivatives"><header><span>04</span><div><p className="eyebrow">BORROWING &amp; DERIVATIVES</p><h2>信用取引・FX・CFD・先物の仕組み</h2></div></header><div className="mechanics-copy">
    <div className="instrument-cards"><article><span>信用取引</span><h3>資金や株を借りる</h3><p>証券会社から資金を借りて株を買う、または株を借りて先に売ります。金利・貸株料・期限・追証があります。</p></article><article><span>FX</span><h3>2通貨の価格差</h3><p>通貨ペアの為替レート変化を証拠金で取引します。多くの個人向け取引では差額を清算します。</p></article><article><span>CFD</span><h3>対象価格の差額</h3><p>株価指数や金などを直接保有せず、開始と終了の価格差を清算する契約です。</p></article><article><span>先物</span><h3>将来の売買契約</h3><p>将来の決められた時点に、あらかじめ決めた条件で売買する契約です。限月と取引単位があります。</p></article></div>
    <h3>先物は、何のために生まれた？</h3><p>将来の価格変動を避けたい人同士が、今のうちに条件を固定するためです。小麦農家は収穫時の値下がりを避けたい。食品会社は仕入れ価格の値上がりを避けたい。将来売る人と買う人が価格を決めることで、それぞれの不確実性を減らせます。</p>
    <div className="futures-story"><div><b>小麦農家</b><p>将来の販売価格を固定したい</p></div><i>将来の価格を<br/>今決める</i><div><b>食品会社</b><p>将来の仕入価格を固定したい</p></div></div>
    <p>金融先物では、満期まで待たずに反対売買して差額を清算することも一般的です。商品の全額ではなく証拠金を預けるため、取引金額が証拠金を大きく上回ることがあります。</p>
  </div></section>
  <section className="course-deepening"><div className="deep-heading"><p className="eyebrow">FROM ORDER TO OWNERSHIP</p><h2>注文から保有までの流れ</h2><p>画面で「買う」を押すだけでは、まだ取引の全体は見えません。</p></div><div className="mechanism-steps"><article><b>01</b><h3>注文</h3><p>証券会社が注文を受け、取引所へ送ります。銘柄・売買・数量・価格・期限が注文条件です。</p></article><article><b>02</b><h3>約定</h3><p>反対注文と条件が一致すると売買成立。表示された現在値で必ず成立するとは限りません。</p></article><article><b>03</b><h3>清算</h3><p>誰がいくら支払い、何を受け取るかを整理します。取引相手の不履行を抑える仕組みもあります。</p></article><article><b>04</b><h3>決済・保有</h3><p>代金と証券を受け渡し、口座の保有残高へ反映します。デリバティブでは差額決済の場合があります。</p></article></div><div className="worked-story"><h3>1,000円で100株の買い指値を出した例</h3><p>売り注文が1,000円で60株、1,001円で100株なら、指値1,000円ではまず60株だけ約定し、残り40株は待機する場合があります。全部成立したと思い込まず、注文状況と約定数量を確認します。成行へ変更すれば成立を優先できますが、残りが1,001円以上で約定する可能性があります。</p><p><b>ここでの原則：</b>「買うボタン」は意思表示であり、価格と数量が確定するのは約定後です。</p></div></section>
  <section className="source-strip"><span>一次資料・内容確認 2026年8月14日</span><a href="https://www.jpx.co.jp/learning/basics/equities/index.html" target="_blank" rel="noreferrer">JPX｜株式投資の基礎 ↗</a><a href="https://www.toushin.or.jp/investmenttrust/etf/index.html" target="_blank" rel="noreferrer">投資信託協会｜ETFの仕組み ↗</a><a href="https://www.jpx.co.jp/derivatives/products/domestic/225mini/index.html" target="_blank" rel="noreferrer">JPX｜先物取引の仕組み ↗</a></section>
 </main>}
