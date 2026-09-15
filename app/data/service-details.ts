export type ServiceSource = { label: string; url: string };

export type ServiceDetail = {
  slug: string;
  name: string;
  kind: "証券会社" | "iDeCo";
  summary: string;
  candidate: string;
  products: string[];
  costPoints: string[];
  features: string[];
  merits: string[];
  cautions: string[];
  suitable: string[];
  unsuitable: string[];
  checklist: string[];
  checkedAt: string;
  sources: ServiceSource[];
  officialUrl: string;
  affiliateCode?: string;
};

const dmmAffiliate = '<a href="https://h.accesstrade.net/sp/cc?rk=0100mkk300oy0o" rel="nofollow" referrerpolicy="no-referrer-when-downgrade">DMM 株<img src="https://h.accesstrade.net/sp/rr?rk=0100mkk300oy0o" width="1" height="1" border="0" alt=""></a>';
const matsuiAffiliate = '<a href="https://h.accesstrade.net/sp/cc?rk=01000t2p00oy0o" rel="nofollow" referrerpolicy="no-referrer-when-downgrade">松井証券の日本株取引～手数料0円から～<img src="https://h.accesstrade.net/sp/rr?rk=01000t2p00oy0o" width="1" height="1" border="0" alt=""></a>';
const matsuiIdecoAffiliate = '<a href="https://h.accesstrade.net/sp/cc?rk=0100p7ck00oy0o" rel="nofollow" referrerpolicy="no-referrer-when-downgrade">松井証券のiDeCo\n<img src="https://h.accesstrade.net/sp/rr?rk=0100p7ck00oy0o" width="1" height="1" border="0" alt=""></a>';

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "dmm-kabu", name: "DMM 株", kind: "証券会社",
    summary: "国内株式と米国株式を扱うオンライン証券サービスです。NISAにも対応し、株式取引を一つの取引環境で検討できます。",
    candidate: "投資信託よりも、日本株・米国株を自分で選んで取引したい人の比較候補です。",
    products: ["国内株式（現物・信用）", "米国株式（現物・信用）", "NISA（国内株式・米国株式）", "株式累積投資「つみたてかぶ」"],
    costPoints: ["国内現物株式は1注文の約定代金に応じた手数料体系です。", "米国株式は約定代金に応じた手数料があり、円貨決済では為替コストも確認が必要です。", "NISA口座の国内株式・米国株式は取引手数料無料ですが、対象取引と為替関連費用などの条件を確認します。"],
    features: ["国内株式と米国株式を同じサービス内で扱えます。", "PC版とスマートフォン向けの取引環境があります。", "NISAは現物取引が対象です。"],
    merits: ["日本株と米国株を中心に比較したい場合、取扱範囲を絞って検討しやすい点。", "少額の注文を含め、注文額ごとの手数料を事前に確認できる点。"],
    cautions: ["投資信託を中心に積み立てたい人は、希望商品を扱う別の金融機関も比較が必要です。", "米国株は株価だけでなく為替変動の影響も受け、円貨決済では為替コストがかかります。", "信用取引は現物取引より損失が大きくなる可能性があるため、初心者は仕組みを理解するまで利用しない判断も重要です。"],
    suitable: ["日本株と米国株を主な候補にしたい人", "使う商品を株式に絞って比較できる人"],
    unsuitable: ["投資信託の積立を中心にしたい人", "為替費用や注文方法を確認せず米国株を始めたい人"],
    checklist: ["取引したい銘柄・ETFが対象か", "注文金額に対する売買手数料", "米国株の為替コストと決済方法", "NISAの対象商品と注文ルール", "重要事項説明書とリスク"],
    checkedAt: "2026年9月15日",
    sources: [
      { label: "DMM 株｜株式取引の手数料", url: "https://kabu.dmm.com/commission/" },
      { label: "DMM 株｜NISA", url: "https://kabu.dmm.com/nisa/" },
      { label: "DMM 株｜米国株式", url: "https://kabu.dmm.com/us/stock/" },
    ], officialUrl: "https://kabu.dmm.com/", affiliateCode: dmmAffiliate,
  },
  {
    slug: "matsui", name: "松井証券", kind: "証券会社",
    summary: "日本株・米国株・投資信託などを扱い、NISAにも対応するオンライン証券会社です。",
    candidate: "NISAを使いながら、日本株・米国株・投資信託を目的に応じて選びたい人の比較候補です。",
    products: ["日本株", "米国株", "投資信託・積立", "NISA", "先物・オプション、FX等"],
    costPoints: ["NISA口座の日本株・米国株・投資信託の委託手数料は、インターネット経由の場合無料です。", "投資信託には信託報酬等、米国株の円貨決済には為替関連費用がかかる場合があります。", "課税口座では商品、年齢、取引金額、取引方法によって条件が異なるため、商品別に確認します。"],
    features: ["NISAで日本株・米国株・投資信託を扱います。", "商品ごとに専用の取引画面・アプリやサポートがあります。", "投資信託の積立にも対応しています。"],
    merits: ["NISAで複数の商品を比較しながら利用できる点。", "商品別に公式の手数料・リスク情報が整理されている点。"],
    cautions: ["『手数料0円』でも、信託報酬、為替関連費用、信用取引の金利等がなくなるわけではありません。", "商品によって画面やアプリが分かれるため、使いたい商品で操作性を確認します。"],
    suitable: ["NISAで日本株・米国株・投資信託を比較したい人", "商品ごとの費用と画面を確認できる人"],
    unsuitable: ["すべての商品を一つの同じ画面だけで操作したい人", "無料表示だけで総コストを判断したい人"],
    checklist: ["利用商品の取引手数料とその他費用", "NISAの対象商品と取引ルール", "使う商品に対応する画面・アプリ", "相談窓口の受付内容", "契約締結前交付書面"],
    checkedAt: "2026年9月15日",
    sources: [
      { label: "松井証券｜NISA口座 取引ルール", url: "https://www.matsui.co.jp/nisa/rule/" },
      { label: "松井証券｜新NISA 手数料", url: "https://www.matsui.co.jp/nisa/fee/" },
      { label: "松井証券｜NISAのリスク・手数料", url: "https://www.matsui.co.jp/disclaimer/nisa.html" },
    ], officialUrl: "https://www.matsui.co.jp/", affiliateCode: matsuiAffiliate,
  },
  {
    slug: "matsui-ideco", name: "松井証券 iDeCo", kind: "iDeCo",
    summary: "松井証券が運営管理機関として提供する個人型確定拠出年金（iDeCo）のサービスです。老後資金を自分で積み立て、商品を選んで運用します。",
    candidate: "NISAとの違いと原則60歳まで引き出せない点を理解し、老後資金としてiDeCoを利用すると決めた人の比較候補です。",
    products: ["投資信託", "元本確保型商品", "運用商品を組み合わせる配分指定"],
    costPoints: ["松井証券の運営管理手数料は0円です。", "別途、加入時・掛金納付時・給付時などに制度上の手数料がかかります。", "投資信託には商品ごとの信託報酬等があります。"],
    features: ["老後資金づくりを目的とするiDeCo専用サービスです。", "複数の投資信託と元本確保型商品から選びます。", "制度と商品に関する問い合わせ窓口があります。"],
    merits: ["運営管理機関に支払う手数料が0円である点。", "商品ごとの運用方針と費用を比較して選べる点。"],
    cautions: ["iDeCoは原則60歳まで自由に引き出せません。", "運営管理手数料が0円でも、制度上の手数料や信託報酬等はかかります。", "投資信託は値下がりし、元本割れする可能性があります。受取時の税金は他の退職金・年金等との関係で変わります。"],
    suitable: ["60歳まで使わない老後資金を分けられる人", "税制、手数料、商品リスクを確認できる人"],
    unsuitable: ["近い将来に使う資金を積み立てたい人", "途中で自由に換金できることを優先する人"],
    checklist: ["自分の加入資格と掛金上限", "原則60歳まで引き出せない点", "制度上の手数料と商品の信託報酬", "商品ラインアップとリスク", "受取方法と税金"],
    checkedAt: "2026年9月15日",
    sources: [
      { label: "松井証券｜iDeCo", url: "https://www.matsui.co.jp/event/ideco02/" },
      { label: "松井証券｜iDeCoの手数料", url: "https://support.matsui.co.jp/faq/show/21900?site_domain=faq" },
      { label: "iDeCo公式｜iDeCoの特徴", url: "https://www.ideco-koushiki.jp/guide/" },
    ], officialUrl: "https://www.matsui.co.jp/event/ideco02/", affiliateCode: matsuiIdecoAffiliate,
  },
  {
    slug: "sbi-securities", name: "SBI証券", kind: "証券会社",
    summary: "日本株、外国株、投資信託、債券など幅広い金融商品を扱い、NISAにも対応するオンライン証券会社です。",
    candidate: "NISAを含め、複数の商品や市場を一つの口座で比較したい人の候補です。",
    products: ["日本株・単元未満株・ETF・REIT", "米国株を含む外国株・海外ETF", "投資信託・積立", "NISA", "債券、先物・オプション、FX等"],
    costPoints: ["国内株式の売買手数料無料にはSBI証券所定の条件があります。", "NISAでは対象となる国内株式、投資信託、米国株式・海外ETFの売買手数料が無料ですが、対象範囲と条件を確認します。", "投資信託の信託報酬、外国株の為替関連費用などは別に確認が必要です。"],
    features: ["国内外の株式、投資信託、債券など取扱範囲が広い点。", "NISAのつみたて投資枠と成長投資枠に対応しています。", "単元未満株や投信積立など少額から使える仕組みがあります。"],
    merits: ["将来使いたい商品が増えた場合にも、同じ金融機関内で選択肢を比較できる点。", "NISAで株式と投資信託を目的に応じて分けられる点。"],
    cautions: ["商品数と機能が多いため、初心者は最初に使う商品と画面を絞る必要があります。", "無料の条件外となる取引や、信託報酬・為替スプレッド等があります。", "外国株は価格変動に加えて為替変動の影響を受けます。"],
    suitable: ["幅広い商品を比較しながら長期的に使いたい人", "条件と費用を商品別に確認できる人"],
    unsuitable: ["最初から多くの商品を使い分けると迷ってしまう人", "無料表示だけで費用を判断したい人"],
    checklist: ["利用するコースと手数料無料の条件", "NISAの対象商品", "外国株の為替関連費用", "投資信託の信託報酬", "認証・サポートと操作方法"],
    checkedAt: "2026年9月15日",
    sources: [
      { label: "SBI証券｜商品別の手数料・諸費用", url: "https://www.sbisec.co.jp/ETGate/?_ControlID=WPLETmgR001Control&_DataStoreID=DSWPLETmgR001Control&burl=search_home&cat1=home&cat2=price&dir=price&file=home_price.html" },
      { label: "SBI証券｜NISA", url: "https://www.sbisec.co.jp/visitor/nisa" },
      { label: "SBI証券｜NISAの注意事項", url: "https://search.sbisec.co.jp/v2/popwin/attention/trading/nisa_01.html" },
    ], officialUrl: "https://www.sbisec.co.jp/ETGate/",
  },
  {
    slug: "mufg-esmart", name: "三菱UFJ eスマート証券", kind: "証券会社",
    summary: "旧社名のauカブコム証券から名称変更した、MUFGグループのオンライン証券会社です。日本株、米国株、投資信託などを扱い、NISAにも対応します。",
    candidate: "NISA、単元未満株、投資信託積立やMUFG関連サービスとの連携条件を比較したい人の候補です。",
    products: ["国内株式・単元未満株（プチ株®）", "米国株式", "投資信託・積立", "NISA", "先物・オプション、FX等"],
    costPoints: ["NISA口座では国内株式、プチ株®、米国株式、投資信託の取引手数料が無料です。", "NISAの米国株は円貨決済のみで、公式案内上の為替スプレッドを確認する必要があります。", "投資信託には信託報酬等、課税口座の株式には注文方法や条件による費用があります。"],
    features: ["NISAで日本株・単元未満株・米国株・投資信託を扱います。", "1株単位のプチ株®や投資信託の積立があります。", "MUFGグループやカード等の関連サービスとの連携がありますが、適用条件の確認が必要です。"],
    merits: ["少額取引と積立を含めて比較できる点。", "NISAで複数の商品を同じ基準で検討できる点。"],
    cautions: ["少額投資でも元本割れはあり、損失額が小さいと保証されるわけではありません。", "米国株のNISA取引では為替スプレッドがあり、外貨決済を選べない点を確認します。", "連携特典やポイント条件は変更される可能性があります。"],
    suitable: ["NISAで少額投資・積立も検討したい人", "関連サービスの条件まで確認して比較できる人"],
    unsuitable: ["NISAの米国株を外貨決済で取引したい人", "ポイントや優遇が常に同じと考えている人"],
    checklist: ["NISAの対象商品と手数料", "米国株の決済方法と為替スプレッド", "単元未満株の取引条件", "投資信託の信託報酬", "関連サービスの適用条件"],
    checkedAt: "2026年9月15日",
    sources: [
      { label: "三菱UFJ eスマート証券｜商品・サービス", url: "https://kabu.com/item/default.html" },
      { label: "三菱UFJ eスマート証券｜NISA", url: "https://kabu.com/item/nisa/default.html" },
      { label: "三菱UFJ eスマート証券｜NISAの手数料", url: "https://kabu.com/item/nisa/cost.html" },
    ], officialUrl: "https://kabu.com/",
  },
  {
    slug: "monex", name: "マネックス証券", kind: "証券会社",
    summary: "日本株、米国株、中国株、投資信託などを扱い、NISAや企業分析・投資情報機能にも対応するオンライン証券会社です。",
    candidate: "日本株と米国株を比較し、企業情報や分析機能も使いながら自分で判断したい人の候補です。",
    products: ["日本株", "米国株・中国株・ETF", "投資信託・積立", "NISA", "債券、先物・オプション、FX等"],
    costPoints: ["NISAで取り扱う日本株、米国株、中国株、投資信託の売買手数料は無料と案内されています。", "課税口座では商品・注文方法に応じた手数料を確認します。", "外国株は為替関連費用、投資信託は信託報酬等を含めた総コストで比較します。"],
    features: ["日本株・米国株を含む複数市場に対応しています。", "企業分析や投資情報を確認するための機能があります。", "NISAで株式と投資信託を扱います。"],
    merits: ["米国株・ETFと日本株を同じ候補内で比較できる点。", "企業の情報を確認しながら投資判断を進められる点。"],
    cautions: ["分析情報や予想は利益を保証するものではありません。", "外国株は為替変動、現地制度、取引時間等の影響を受けます。", "無料の対象外となる費用や取引条件を確認します。"],
    suitable: ["日本株・米国株・ETFを自分で調べて比較したい人", "分析機能を判断材料の一つとして使える人"],
    unsuitable: ["分析ツールの表示をそのまま売買の答えと考える人", "為替費用や外国株固有の条件を確認したくない人"],
    checklist: ["取引市場と希望銘柄の取扱い", "売買手数料と為替関連費用", "NISAの対象商品と取引ルール", "分析情報の使い方", "投資信託の信託報酬"],
    checkedAt: "2026年9月15日",
    sources: [
      { label: "マネックス証券｜NISA", url: "https://info.monex.co.jp/nisa/index.html" },
      { label: "マネックス証券｜米国株", url: "https://info.monex.co.jp/us-stock/" },
      { label: "マネックス証券｜商品・サービス", url: "https://info.monex.co.jp/" },
    ], officialUrl: "https://info.monex.co.jp/",
  },
  {
    slug: "monex-ideco", name: "マネックス証券 iDeCo", kind: "iDeCo",
    summary: "マネックス証券が運営管理機関として提供する個人型確定拠出年金（iDeCo）のサービスです。老後資金を目的に、自分で商品を選んで運用します。",
    candidate: "原則60歳まで引き出せないことを理解し、商品・費用・サポートを比較してiDeCoの金融機関を選びたい人の候補です。",
    products: ["投資信託", "元本確保型商品", "運用商品の配分指定・変更"],
    costPoints: ["マネックス証券の運営管理手数料は無料と案内されています。", "加入時や掛金納付時など、国民年金基金連合会・事務委託先金融機関に支払う制度上の手数料があります。", "投資信託には商品ごとの信託報酬等があります。"],
    features: ["iDeCo専用の商品ラインアップから選びます。", "運用商品を選ぶための情報・サポートがあります。", "加入後も配分の見直しが必要になる場合があります。"],
    merits: ["運営管理手数料が無料である点。", "老後資金として、商品と費用を比較して選べる点。"],
    cautions: ["iDeCoは原則60歳まで自由に引き出せません。", "『運営管理手数料無料』はiDeCo全体が無料という意味ではありません。", "運用商品には元本割れの可能性があり、受取時の税金は他の退職金・年金等との関係で変わります。"],
    suitable: ["老後まで使わない資金を分けられる人", "商品、手数料、受取まで比較できる人"],
    unsuitable: ["途中で使う可能性のあるお金を拠出したい人", "所得控除だけを見て資金拘束や費用を確認しない人"],
    checklist: ["加入資格と掛金上限", "原則60歳までの引き出し制限", "制度上の手数料と信託報酬", "商品ラインアップと元本割れリスク", "サポート、受取方法、税金"],
    checkedAt: "2026年9月15日",
    sources: [
      { label: "マネックス証券｜iDeCo", url: "https://info.monex.co.jp/ideco/" },
      { label: "マネックス証券｜iDeCoの各種手数料", url: "https://info.monex.co.jp/ideco/commission/index.html" },
      { label: "iDeCo公式｜iDeCoの特徴", url: "https://www.ideco-koushiki.jp/guide/" },
    ], officialUrl: "https://info.monex.co.jp/ideco/",
  },
];

export const getServiceDetail = (slug: string) => serviceDetails.find((service) => service.slug === slug);
