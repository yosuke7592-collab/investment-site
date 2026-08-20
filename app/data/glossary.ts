export const glossaryTerms = [
 {slug:"etf",name:"ETF",meaning:"取引所で、株のように売買できる投資信託です。",example:"日経平均株価や世界の株価指数への連動を目指す商品があります。1つの商品で多くの銘柄へ分けて投資できます。",caution:"売買価格と中身の価値に差が出ることがあります。費用、売買のしやすさ、投資先を確認します。",lesson:"/mechanics"},
 {slug:"investment-trust",name:"投資信託",meaning:"多くの人のお金をまとめ、株式や債券などで運用する商品です。",example:"毎月決まった金額を積み立てる設定ができる商品があります。",caution:"元本は保証されません。投資先、信託報酬、為替の影響を確認します。",lesson:"/mechanics"},
 {slug:"leverage",name:"レバレッジ",meaning:"預けたお金より大きな金額を取引する仕組みです。",example:"10万円を預けて100万円分を動かすと、価格1%の変化で損益は1万円になります。",caution:"利益だけでなく損失も大きくなります。倍率ではなく、実際に動かす総額を確認します。",lesson:"/mechanics/leverage"},
 {slug:"stop-loss",name:"損切り",meaning:"決めておいた条件で損失を確定し、取引を終えることです。",example:"買った理由が崩れる価格と、失ってよい上限金額を買う前に決めます。",caution:"急な値動きでは予定した価格で売れない場合があります。",lesson:"/strategies/methods"},
 {slug:"market-order",name:"成行注文",meaning:"価格を指定せず、取引の成立を優先する注文です。",example:"すぐ買いたい時に使えますが、画面で見た価格と実際の価格がずれることがあります。",caution:"値動きが速い時や注文が少ない時は、想定外の価格になりやすくなります。",lesson:"/lessons?week=3"},
 {slug:"limit-order",name:"指値注文",meaning:"買う上限、または売る下限の価格を指定する注文です。",example:"500円以下なら買う、550円以上なら売る、という指定ができます。",caution:"指定した価格に届かなければ成立しません。",lesson:"/lessons?week=3"},
 {slug:"candlestick",name:"ローソク足",meaning:"始値・高値・安値・終値を1本で表すチャートです。",example:"1日を表す日足なら、その日の4つの価格を1本にまとめます。",caution:"形だけで次の値動きは決まりません。前後の流れや価格帯も見ます。",lesson:"/strategies/chart"},
 {slug:"moving-average",name:"移動平均線",meaning:"一定期間の価格の平均をつないだ線です。",example:"25日移動平均線は、直近25日分の価格を使って計算します。",caution:"過去の価格から作るため遅れがあります。交差だけで売買を決めません。",lesson:"/strategies/chart"},
];
export const getGlossaryTerm=(slug:string)=>glossaryTerms.find(t=>t.slug===slug);
