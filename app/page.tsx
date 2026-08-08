"use client";

import { useEffect, useMemo, useState } from "react";

type Section = { heading: string; body: string };
type Quiz = { question: string; choices: string[]; answer: number; explanation: string };
type Lesson = {
  week: number; module: number; kicker: string; title: string; summary: string; time: string;
  goals: string[]; sections: Section[]; example: { title: string; body: string };
  mistake: string; task: string; talk: string; quizzes: Quiz[]; sources: { label: string; url: string }[];
};

const lessons: Lesson[] = [
  {
    week: 1, module: 1, kicker: "お金の土台", title: "お金の価値は、なぜ変わる？", time: "18分",
    summary: "お金の本当の価値は、金額ではなく「何を買えるか」で決まります。まず、なぜ投資を学ぶ必要があるのかを理解します。",
    goals: ["お金の3つの役割を説明できる", "名目金額と実質的な価値を区別できる", "インフレ率と金利から購買力を考えられる"],
    sections: [
      { heading: "01｜1万円は残っても、1万円の価値は変わる", body: "お金には、値段を示す、商品と交換する、将来のために残す、という3つの役割があります。財布に入れた1万円は、来年も1万円です。しかし、その1万円で買える量は変わります。投資を考える第一歩は、「いくら持っているか」と「何を買えるか」を分けることです。" },
      { heading: "02｜物価が上がると、同じ1万円で買える量が減る", body: "モノやサービスの価格が全体として継続的に上がる状態をインフレといいます。原因は一つではありません。需要の増加、原材料やエネルギー価格の上昇、人手不足による賃金上昇、円安による輸入価格の上昇などが重なります。特定商品の値上がりだけでなく、幅広い品目の変化を見る代表的な指標が消費者物価指数（CPI）です。" },
      { heading: "03｜預金が増えても、豊かになるとは限らない", body: "預金が年0.5%増えても、物価が年2%上がれば、買える量はおよそ1.5%減ります。この差を見る目安が実質金利です。近いうちに使うお金は、現金や預金で守る。長く使わないお金は、インフレに負けない方法を考える。現金か投資かの二択ではなく、使う時期で役割を分けます。" },
    ],
    example: { title: "100万円の10年後の購買力", body: "物価が毎年2%上がると、現在100万円で買えるものを10年後に買うには約122万円必要です。逆に、10年後の100万円の購買力は現在の約82万円相当です。計算は 100万円 ÷ 1.02¹⁰。小さな差でも、時間が長くなると影響が大きくなります。" },
    mistake: "「インフレだからすぐ株を買う」が結論ではありません。使う時期、値下がりへの耐性、生活防衛資金を確認して初めて投資額を決められます。",
    task: "最近値上がりした商品を3つ挙げ、総務省統計局のCPIでその品目の変化を確認する。",
    talk: "10年後に使う100万円を、現金だけで持つことのリスクは何だと思う？",
    quizzes: [
      { question: "預金金利0.5%、物価上昇率2%なら、購買力は概ねどうなる？", choices: ["年1.5%上がる", "年1.5%下がる", "変わらない"], answer: 1, explanation: "名目金利から物価上昇率を引くと概ね−1.5%です。" },
      { question: "インフレを判断するときに重視するものは？", choices: ["一商品の値上げ", "幅広いモノ・サービスの価格変化", "株価だけ"], answer: 1, explanation: "代表的な指標であるCPIは、家計が購入する幅広い品目を対象にします。" },
      { question: "この回の結論として最も適切なのは？", choices: ["現金は不要", "投資は必ず勝てる", "現金と投資は目的で使い分ける"], answer: 2, explanation: "現金には近い将来の支出を守る役割があります。" },
    ],
    sources: [{ label: "総務省統計局｜消費者物価指数", url: "https://www.stat.go.jp/data/cpi/" }, { label: "日本銀行｜物価の安定と金融政策", url: "https://www.boj.or.jp/about/education/oshiete/seisaku/b25.htm" }],
  },
  {
    week: 2, module: 1, kicker: "家計と生活設計", title: "投資の前に、守るお金をつくる", time: "17分",
    summary: "投資してよいのは、当分使わないお金だけです。使う時期ごとに、お金の置き場所を分けます。",
    goals: ["収支と資産・負債を区別できる", "生活防衛資金の意味を説明できる", "目的別にお金の置き場所を考えられる"],
    sections: [
      { heading: "01｜投資額は、収入ではなく残るお金で決まる", body: "まず、毎月いくら入り、いくら出ていくかを確認します。次に、預金などの資産と、奨学金やローンなどの負債を分けます。毎月赤字なら、投資より先に支出を直します。大切なのは一度だけ投資することではなく、相場が悪い時も無理なく続けられることです。" },
      { heading: "02｜生活防衛資金は、安値で売らないための装置", body: "病気、失業、引っ越しなど急な支出が発生したとき、現金がなければ値下がり中の資産を売らざるを得ません。生活防衛資金はリターンを生まない無駄なお金ではなく、投資を長期で続けるための保険です。必要額は生活費、収入の安定性、家族構成によって異なります。学生なら、近い学費や生活費、緊急帰省費などを先に確保します。" },
      { heading: "03｜お金を、使う時期で3つに分ける", body: "生活費と数年以内に使うお金は、預貯金で確保します。10年以上使わないお金は、投資の候補になります。その中間のお金は、定期預金や個人向け国債など、値動きの小さい方法も考えます。「増えそうか」ではなく、「いつ使うか」から置き場所を決めます。" },
    ],
    example: { title: "大学生の3つの箱", body: "①今月の生活費8万円、②半年以内の学費・緊急費30万円、③10年以上使わない資金。①②まで投資すると、相場下落時に売却が必要になります。まず①②を守り、その後に③の範囲で少額から始めます。" },
    mistake: "「若いから全額投資でよい」は誤りです。若さは運用期間を長くできますが、短期の支払い義務を消してはくれません。",
    task: "自分のお金を「1年以内」「1〜5年」「10年以上」の3つに分け、金額と目的を書く。",
    talk: "急に10万円必要になったとき、投資を売らずに用意できる？",
    quizzes: [
      { question: "生活防衛資金の主な役割は？", choices: ["高い利回りを得る", "緊急時の支出と投資の継続を守る", "税金を減らす"], answer: 1, explanation: "急な支出で、値下がり中の資産を売る事態を避けます。" },
      { question: "来年使う学費に向く考え方は？", choices: ["全額を株式へ", "価格変動の小さい場所で確保", "暗号資産へ集中"], answer: 1, explanation: "使用時期が近いお金は、リターンより確実性を優先します。" },
      { question: "投資額を決める出発点は？", choices: ["SNSの予想", "使用時期と家計", "去年上がった商品"], answer: 1, explanation: "投資額は家計と時間軸から決めます。" },
    ],
    sources: [{ label: "J-FLEC｜金融リテラシー・マップ", url: "https://www.j-flec.go.jp/conference/literacy_map/" }],
  },
  {
    week: 3, module: 2, kicker: "資産の仕組み", title: "株・債券・投資信託は何が違う？", time: "20分",
    summary: "株・債券・投資信託の違いは、お金を誰に渡し、どうやって利益が生まれるかを見ると理解できます。",
    goals: ["株式と債券の権利の違いを説明できる", "投資信託の仕組みと費用を理解する", "リターンの源泉を考えられる"],
    sections: [
      { heading: "01｜株式は会社の一部を持つ権利", body: "株式を買うと、その会社の一部を所有する株主になります。会社が利益を増やせば、配当や将来への期待を通じて株価に反映される可能性があります。一方、事業が失敗すれば株価は下がり、倒産時には価値を失うこともあります。株式のリターンは、企業が長期で価値を生み出せるかに支えられます。" },
      { heading: "02｜債券は国や会社にお金を貸す契約", body: "債券は、発行者に資金を貸し、原則として利息と満期時の元本返済を受ける仕組みです。株主より受け取る内容が契約で定められていますが、発行者の信用悪化や金利上昇で価格が下がります。安全か危険かの二択ではなく、誰に何年貸すかでリスクが変わります。" },
      { heading: "03｜投資信託は、多くの資産をまとめて持つ器", body: "投資信託は、多くの投資家から集めた資金を、運用会社が株式や債券などへ投資する仕組みです。少額で分散しやすい一方、購入時手数料、信託報酬、売却時の費用などを確認する必要があります。同じ市場に投資する商品なら、長期では費用差が結果に影響します。" },
    ],
    example: { title: "その利益は、誰が生み出す？", body: "株式の利益は会社の成長、債券の利益は借り手が払う利息から生まれます。投資信託の利益は、中に入っている株式や債券から生まれます。「なぜ増える可能性があるのか」を自分で説明できない商品は、まだ買わない。それが基本です。" },
    mistake: "投資信託なら必ず分散されて安全、ではありません。一つの国・業種だけに集中する商品や、大きな値動きをする商品もあります。中身を確認します。",
    task: "身近な上場企業を1社選び、何で売上と利益を得ているかをIRサイトで調べる。",
    talk: "会社の一部を持つことと、会社へお金を貸すことでは、何が違う？",
    quizzes: [
      { question: "株主が主に引き受けるものは？", choices: ["企業の成長成果と事業リスク", "固定された預金金利", "国の保証"], answer: 0, explanation: "株主は企業価値の上昇余地と下落リスクを引き受けます。" },
      { question: "債券価格が下がる要因になり得るのは？", choices: ["市場金利の上昇", "満期が近づくことだけ", "分散投資"], answer: 0, explanation: "市場金利が上がると、既存の低い利率の債券は相対的に魅力が低下します。" },
      { question: "投資信託で必ず確認するものは？", choices: ["名前の印象", "中身・リスク・費用", "広告の順位"], answer: 1, explanation: "器ではなく、中身と費用が重要です。" },
    ],
    sources: [{ label: "JPX｜株式投資の基礎", url: "https://www.jpx.co.jp/learning/basics/equities/index.html" }, { label: "J-FLEC｜投資信託の詳細教材", url: "https://www.j-flec.go.jp/announcements/news/20528/" }],
  },
  {
    week: 4, module: 2, kicker: "リスクの正体", title: "リスクとリターンを数字で読む", time: "20分",
    summary: "投資のリスクとは、結果が予想どおりにならないことです。何が原因で、どれほど損をする可能性があるかを数字で考えます。",
    goals: ["主な投資リスクを分類できる", "平均リターンと毎年の結果を混同しない", "損失からの回復に必要な上昇率を計算できる"],
    sections: [
      { heading: "01｜リターンは結果。リスクは結果の読めなさ", body: "投資のリスクは「損をすること」だけではありません。予想より上がることも、下がることも含めて、結果が読めないことを指します。価格、会社の信用、金利、為替、売りやすさなど、原因によって対策は変わります。値動きが大きい商品は、大きく増える可能性と大きく減る可能性の両方を持っています。" },
      { heading: "02｜平均5%でも、毎年5%増えるわけではない", body: "長期の平均リターンが5%という説明は、毎年5%を約束するものではありません。ある年に20%上がり、次の年に15%下がることもあります。過去の平均は将来の保証ではなく、観測期間や通貨によっても変わります。単一の数字ではなく、最悪期や回復期間も確認します。" },
      { heading: "03｜損失は非対称。50%下落には100%上昇が必要", body: "100万円が50%下がると50万円です。元の100万円へ戻るには、残った50万円が100%上がる必要があります。大きな損失を避けることが重要なのはこのためです。借入やレバレッジで投資すると、損失が元手を超える場合もあります。初心者はまず現物・分散・余裕資金を基本にします。" },
    ],
    example: { title: "上昇と下落は同じではない", body: "100万円が20%下落すると80万円。80万円から100万円へ戻るには25%の上昇が必要です。損失率が大きくなるほど、回復に必要な上昇率は急速に大きくなります。" },
    mistake: "「若いからリスク許容度が高い」と決めつけないこと。年齢だけでなく、収入、支出予定、性格、下落時に継続できるかで判断します。",
    task: "100万円が10%、20%、30%、50%下落した場合、元に戻るために必要な上昇率を計算する。",
    talk: "資産が30%下がったとき、保有を続けられる条件は何？",
    quizzes: [
      { question: "投資のリスクとして最も正確なのは？", choices: ["損失だけ", "結果の不確実性・振れ", "詐欺だけ"], answer: 1, explanation: "期待から上下にぶれる可能性を含みます。" },
      { question: "50%下落後、元に戻るために必要な上昇率は？", choices: ["50%", "75%", "100%"], answer: 2, explanation: "50が100へ戻るには2倍、つまり100%上昇が必要です。" },
      { question: "平均リターン5%の意味は？", choices: ["毎年5%保証", "一定期間の結果を平均した参考値", "損失しない証明"], answer: 1, explanation: "毎年の結果も将来の結果も保証しません。" },
    ],
    sources: [{ label: "金融庁｜資産形成の基本", url: "https://www.fsa.go.jp/policy/nisa2/invest/" }],
  },
  {
    week: 5, module: 3, kicker: "時間を味方に", title: "複利・長期・積立の本当の意味", time: "19分",
    summary: "複利も積立も、必ず儲かる魔法ではありません。何に効き、何には効かないのかを数字で確かめます。",
    goals: ["単利と複利を区別する", "積立投資の効果と限界を説明できる", "継続可能な投資額を考える"],
    sections: [
      { heading: "01｜複利は利益を再投資する仕組み", body: "元本だけに利益が付く単利に対し、複利は得た利益も次の利益を生みます。100万円を年5%で運用できたと仮定すると、10年後は約163万円、20年後は約265万円です。ただし5%は保証ではなく、途中で大きく下落する可能性があります。" },
      { heading: "02｜積立は価格変動を消すのではなく、購入時期を分ける", body: "一定額を定期的に投資すると、高い時には少なく、安い時には多く買います。購入時期を分散でき、始めるタイミングの迷いを減らせます。ただし下落し続ける資産を買えば損失になります。積立は優良商品を選ぶ代わりにはなりません。" },
      { heading: "03｜高い利回りより、続けられる金額を選ぶ", body: "短期間で大きく増やそうとすれば、大きく減る可能性も高くなります。若い人の強みは、最初から大金を持っていることではありません。長く続けられる時間があることです。まず無理のない金額で始め、収入が増えたら積立額を見直します。" },
    ],
    example: { title: "月1万円を20年間積み立てる", body: "元本は240万円。仮に年率3%なら約328万円、5%なら約411万円になります。ただし実際の価格は毎年揺れ、手数料や税金も影響します。シミュレーションは予言ではなく、条件差を理解する道具です。" },
    mistake: "「長期なら絶対に損しない」は誤りです。長期は結果の安定を期待しやすくしますが、商品選択、費用、売却時期のリスクは残ります。",
    task: "月5千円・1万円・2万円を、年率0%、3%、5%で20年間積み立てた結果を比較する。",
    talk: "無理なく20年間続けられる金額はいくら？その金額を増やす条件は？",
    quizzes: [
      { question: "複利とは？", choices: ["利益も再投資して運用する", "毎年同じ利益を保証する", "借金で投資する"], answer: 0, explanation: "元本と過去の利益の両方が次の運用対象になります。" },
      { question: "積立投資で残るリスクは？", choices: ["何も残らない", "投資対象自体の下落", "購入時期だけ"], answer: 1, explanation: "購入時期を分けても、資産そのもののリスクは残ります。" },
      { question: "若い投資家の大きな強みは？", choices: ["必ず高収入", "長い運用期間", "損失しないこと"], answer: 1, explanation: "時間は複利と経験の両方を積み上げます。" },
    ],
    sources: [{ label: "金融庁｜長期・積立・分散投資", url: "https://www.fsa.go.jp/policy/nisa2/invest/" }],
  },
  {
    week: 6, module: 3, kicker: "組み合わせる", title: "分散投資とポートフォリオ", time: "20分",
    summary: "分散とは、ただ数を増やすことではありません。同じ理由で一緒に下がらない資産を組み合わせることです。",
    goals: ["集中リスクを説明できる", "資産・地域・時間の分散を区別する", "自分の配分ルールをつくる"],
    sections: [
      { heading: "01｜分散は、予想が外れた時に生き残るため", body: "どれほど調べても、未来を当て続けることはできません。一つの会社、業種、国に集中すると、一つの悪い出来事で資産全体が大きく減ります。分散の目的は、最高の利益を出すことではありません。予想が外れても、投資を続けられる状態を守ることです。" },
      { heading: "02｜銘柄数ではなく、値動きの原因を分ける", body: "同じ業種の株を10社持っても、共通の景気や規制で同時に下がる可能性があります。株式と債券、国内と海外、異なる業種など、収益源やリスク要因の違いを考えます。ただし世界危機では多くの資産が同時に下がるため、分散も損失をゼロにはしません。" },
      { heading: "03｜配分を先に決め、定期的に戻す", body: "ポートフォリオは資産の組み合わせです。値上がりした資産の比率は自然に大きくなります。最初に目標比率を決め、年1回など一定の基準で元へ戻すリバランスを行うと、感情ではなくルールでリスクを管理できます。" },
    ],
    example: { title: "3銘柄でも集中している例", body: "半導体企業3社を持つと会社は分かれていますが、需要循環、設備投資、輸出規制など共通要因が多くあります。銘柄分散ではあっても、業種・要因の分散は弱い状態です。" },
    mistake: "分散しすぎて中身が分からなくなるのも問題です。理解できる範囲で、低コストかつ管理可能な形にします。",
    task: "仮の100万円を現金・国内株・海外株・債券へ配分し、各比率の理由を書く。",
    talk: "一つだけに集中したくなるのはどんな時？その判断に感情は入っていない？",
    quizzes: [
      { question: "分散投資の目的は？", choices: ["必ず利益を出す", "一つの失敗の影響を抑える", "手数料を増やす"], answer: 1, explanation: "予想が外れた際の致命傷を避けます。" },
      { question: "同業10社を持つ場合の注意点は？", choices: ["共通要因で同時に下がる", "必ず安全", "為替が消える"], answer: 0, explanation: "業種固有のリスクが残ります。" },
      { question: "リバランスとは？", choices: ["毎日売買する", "目標配分へ戻す", "一番上がった資産へ集中する"], answer: 1, explanation: "変化した資産配分を当初の方針へ戻します。" },
    ],
    sources: [{ label: "金融庁｜分散投資", url: "https://www.fsa.go.jp/policy/nisa2/invest/" }],
  },
  {
    week: 7, module: 4, kicker: "制度を使う", title: "NISAを『節税商品』と誤解しない", time: "20分",
    summary: "NISAは、投資商品ではなく税金が優遇される口座です。口座のメリットと、商品のリスクを分けて考えます。",
    goals: ["NISAと金融商品の違いを説明できる", "非課税の対象と限界を理解する", "口座選びの比較軸を持つ"],
    sections: [
      { heading: "01｜NISAは、利益に税金がかからない口座", body: "通常、株式や投資信託で得た利益には約20%の税金がかかります。NISA口座で対象商品を買うと、その利益は非課税になります。ただし、NISAで買えば安全になるわけではありません。口座の税制と、商品の値動きは別の話です。" },
      { heading: "02｜つみたて投資枠と成長投資枠", body: "つみたて投資枠は長期・積立・分散に適した一定の投資信託が対象です。成長投資枠では上場株式など、より幅広い商品を購入できます。年間投資枠や生涯の非課税保有限度額があり、売却した簿価分は翌年以降に再利用できます。制度は変更される可能性があるため、必ず金融庁の最新情報を確認します。" },
      { heading: "03｜証券会社は、商品・費用・使いやすさで比較する", body: "ポイント還元だけでなく、購入できる商品、売買手数料、積立方法、画面の分かりやすさ、問い合わせ対応、セキュリティを比較します。口座開設は投資判断の前段階です。広告報酬の高い順ではなく、利用者の目的に合うかを基準にします。" },
    ],
    example: { title: "利益10万円の税金差", body: "課税口座では利益10万円に対して約2万円の税負担が生じます。NISAなら対象となる利益は非課税です。一方、NISAで10万円損失が出ても、他の課税口座の利益との損益通算はできません。" },
    mistake: "NISAを始めることと、良い商品を選ぶことは別です。制度が有利でも、高コスト・集中型の商品を選べば大きく損失する可能性があります。",
    task: "金融庁のNISAページを読み、年間投資枠・非課税保有限度額・対象商品を自分の言葉でまとめる。",
    talk: "証券会社を選ぶとき、ポイント以外に何を比較したい？",
    quizzes: [
      { question: "NISAとは？", choices: ["元本保証商品", "投資利益の非課税制度", "高利回り預金"], answer: 1, explanation: "制度であり、投資商品そのものではありません。" },
      { question: "NISA口座の損失は？", choices: ["必ず補償される", "他の課税口座と損益通算できない", "税金で全額戻る"], answer: 1, explanation: "NISAの損失は税務上ないものと扱われます。" },
      { question: "証券会社比較で重要なのは？", choices: ["広告だけ", "商品・費用・操作性・安全性", "名前の有名さだけ"], answer: 1, explanation: "目的に沿った複数の比較軸を使います。" },
    ],
    sources: [{ label: "金融庁｜NISAを知る", url: "https://www.fsa.go.jp/policy/nisa2/know/index.html" }],
  },
  {
    week: 8, module: 4, kicker: "コストを見る", title: "手数料・税金・為替を理解する", time: "18分",
    summary: "利益を増やす方法は、値上がりを当てることだけではありません。手数料や税金を減らすことも、確実に残る金額を増やします。",
    goals: ["主な投資コストを挙げられる", "小さな費用差の長期影響を理解する", "為替変動をリターンへ反映できる"],
    sections: [
      { heading: "01｜買う時・持つ間・売る時の費用", body: "投資信託には購入時手数料、保有中に差し引かれる信託報酬、売却時の信託財産留保額などがあります。株式には売買手数料、外国資産には為替手数料が生じる場合があります。無料という表示でも、スプレッドや商品の内部費用まで確認します。" },
      { heading: "02｜年0.5%の差も、長期では大きい", body: "同じ市場へ投資し、運用前リターンが同じなら、費用が低いほど投資家に残る金額は多くなります。100万円を20年、年5%で運用できた場合、費用前は約265万円。毎年0.5%の費用差があれば、最終金額に数十万円の差が生まれます。" },
      { heading: "03｜海外資産は、資産価格と為替の二つが動く", body: "米国株がドルで10%上がっても、同時に円高が進めば円換算リターンは小さくなり、損失になる場合もあります。反対に円安は円換算リターンを押し上げます。海外分散には価値がありますが、為替は追加のリスク要因です。" },
    ],
    example: { title: "米国株+10%、ドル円−10%", body: "単純に足し引きして0%ではありません。1.10 × 0.90 = 0.99なので、円換算では約1%の損失です。複数の変化率は掛け合わせて考えます。" },
    mistake: "最安の商品が常に最善とは限りません。連動精度、流動性、商品規模、運用の安定性も合わせて確認します。",
    task: "同じ指数に連動する投資信託を2本選び、信託報酬・純資産・運用年数を比較する。",
    talk: "年0.2%の費用差を小さいと感じる？20年ならどう考える？",
    quizzes: [
      { question: "保有中に継続して発生する代表的費用は？", choices: ["信託報酬", "入学金", "固定資産税だけ"], answer: 0, explanation: "投資信託の資産から日々差し引かれます。" },
      { question: "海外資産の円換算リターンに影響するものは？", choices: ["資産価格だけ", "為替だけ", "資産価格と為替"], answer: 2, explanation: "両方の変動が円換算の結果へ影響します。" },
      { question: "商品比較で費用以外に見るものは？", choices: ["運用の安定性や規模", "ロゴの色だけ", "広告回数"], answer: 0, explanation: "低コストだけでなく商品としての品質も確認します。" },
    ],
    sources: [{ label: "J-FLEC｜資産運用・投資信託教材", url: "https://www.j-flec.go.jp/announcements/news/20528/" }],
  },
  {
    week: 9, module: 5, kicker: "企業を読む", title: "売上・利益・キャッシュフロー", time: "22分",
    summary: "株価を見る前に、その会社が何で稼いでいるかを見ます。売上・利益・現金の3つから会社の状態を読みます。",
    goals: ["売上と利益の違いを説明できる", "損益と現金の動きを区別する", "企業分析の基本質問を持つ"],
    sections: [
      { heading: "01｜売上が増えても、利益が増えるとは限らない", body: "売上は、お客さんから受け取った金額です。そこから材料費、人件費、広告費などを引いて、利益が残ります。売上が増えても、費用がそれ以上に増えれば利益は減ります。会社を見る時は「売れたか」だけでなく、「いくら残ったか」「それが続きそうか」を確認します。" },
      { heading: "02｜利益があっても現金がないことがある", body: "商品を売っても代金回収が先なら、帳簿上の利益と手元の現金は一致しません。キャッシュフロー計算書は、営業・投資・財務の活動による現金の増減を示します。成長企業では投資支出が大きいこともありますが、資金調達に依存し続けていないかを確認します。" },
      { heading: "03｜良い会社と良い投資は同じではない", body: "優れた会社でも、期待が株価に織り込まれ高すぎれば投資収益が低くなる可能性があります。反対に安い株価には、安い理由があるかもしれません。事業の質と価格の妥当性を分けて判断します。" },
    ],
    example: { title: "大学祭の店を会社として見る", body: "売上20万円、材料費8万円、人件費6万円、場所代2万円なら営業利益は4万円。売掛金が5万円残れば、利益と現金は一致しません。小さな店に置き換えると財務諸表の関係が見えます。" },
    mistake: "PERなど一つの指標だけで割安・割高を決めないこと。業種、成長率、利益の質、金利環境で妥当な水準は変わります。",
    task: "上場企業1社の決算短信を開き、売上高・営業利益・営業キャッシュフローを3年分並べる。",
    talk: "よく使うサービスの会社は、何を売り、どこに費用を使っている？",
    quizzes: [
      { question: "売上が増えれば利益も必ず増える？", choices: ["必ず増える", "費用次第で減ることもある", "利益とは無関係"], answer: 1, explanation: "原価や販管費が売上以上に増えれば利益は減ります。" },
      { question: "現金の動きを見る資料は？", choices: ["キャッシュフロー計算書", "株主名簿だけ", "広告資料"], answer: 0, explanation: "営業・投資・財務の現金増減を示します。" },
      { question: "良い会社なら株はいつでも買い？", choices: ["はい", "価格の妥当性も必要", "会社は見なくてよい"], answer: 1, explanation: "事業の質と購入価格を分けて考えます。" },
    ],
    sources: [{ label: "JPX｜決算短信・投資の基礎", url: "https://www.jpx.co.jp/learning/basics/index.html" }, { label: "EDINET｜開示書類", url: "https://disclosure2.edinet-fsa.go.jp/" }],
  },
  {
    week: 10, module: 5, kicker: "経済を読む", title: "金利・景気・為替と市場", time: "22分",
    summary: "経済ニュースを見て、すぐ売買するのは危険です。その変化が家計、企業、株価へどう伝わるかを順番に考えます。",
    goals: ["政策金利の主な波及経路を説明できる", "為替変動の複数要因を理解する", "ニュースから投資判断までの距離を取る"],
    sections: [
      { heading: "01｜金利は、お金を借りるための料金", body: "金利が上がると、住宅ローンや会社の借入負担が増えます。その結果、買い物や設備投資が減りやすくなります。一方で、預金や債券の魅力は上がります。株価は「利上げしたか」だけでなく、「市場の予想より上だったか、下だったか」でも動きます。" },
      { heading: "02｜景気と株価は同時には動かない", body: "株価は現在の景気だけでなく、半年後、一年後の企業利益を先回りして動きます。悪い経済指標で金融緩和期待が高まり、株価が上がることもあります。ニュースの良し悪しと市場の上下を単純に結びつけず、何がすでに価格へ織り込まれていたかを考えます。" },
      { heading: "03｜為替は一つの理由で説明できない", body: "金利差、貿易、投資資金、政策、リスク回避など多くの要因で通貨は動きます。円安は輸出企業の円換算利益を押し上げる一方、輸入価格と家計負担を上げます。同じ変化でも立場によって影響が違います。" },
    ],
    example: { title: "利上げニュースを読む5つの問い", body: "①予想済みか、②今後も続くか、③企業の借入負担は、④消費への影響は、⑤為替への影響は。この順で考えると「利上げ＝株安」という短絡を避けられます。" },
    mistake: "ニュースを見てすぐ売買すると、すでに市場が織り込んだ情報を後追いしがちです。情報の速さより、影響経路を理解します。",
    task: "日本銀行の直近の金融政策発表を読み、家計・企業・株・債券・為替への影響を一行ずつ書く。",
    talk: "円安は日本にとって良いこと、悪いこと、どちら？立場を分けて考えよう。",
    quizzes: [
      { question: "金利上昇で一般に起きやすいことは？", choices: ["借入コスト上昇", "借入コスト低下", "物価が必ずゼロ"], answer: 0, explanation: "企業や家計の借入負担は増えやすくなります。" },
      { question: "悪い経済指標でも株価が上がることがある理由は？", choices: ["市場が間違いだからだけ", "政策期待や織り込みとの差", "数字は無意味だから"], answer: 1, explanation: "市場は将来予想と事前期待との差で動きます。" },
      { question: "円安の影響は？", choices: ["全員に同じ", "輸出・輸入など立場で異なる", "企業に影響しない"], answer: 1, explanation: "恩恵と負担を受ける主体が異なります。" },
    ],
    sources: [{ label: "日本銀行｜金融政策", url: "https://www.boj.or.jp/mopo/index.htm" }, { label: "内閣府｜月例経済報告", url: "https://www5.cao.go.jp/keizai3/getsurei/getsurei-index.html" }],
  },
  {
    week: 11, module: 6, kicker: "自分を守る", title: "詐欺・煽り・認知バイアス", time: "18分",
    summary: "投資では、相場だけでなく、詐欺と自分の感情からもお金を守る必要があります。怪しい情報を見抜く順番を決めます。",
    goals: ["投資詐欺の警告サインを見抜く", "自分の認知バイアスを知る", "情報源を確認する習慣を持つ"],
    sections: [
      { heading: "01｜「必ず」「元本保証」「今だけ」は止まる合図", body: "高利回りを保証する、紹介者を増やせば儲かる、出金に追加送金が必要、著名人を無断使用する、といった勧誘は重大な警告サインです。取引前に金融庁の登録事業者検索で相手を確認し、SNS内だけで手続きを完結させません。" },
      { heading: "02｜人は、自分に都合のよい情報を集める", body: "保有銘柄に肯定的な情報だけを見る確証バイアス、周囲が買うと安心する群集心理、買値にこだわるアンカリング、損失確定を避ける損失回避などがあります。知識があっても消えないため、売買前のチェックリストと記録で対処します。" },
      { heading: "03｜誰が、何を根拠に、なぜ発信しているか", body: "まず、誰が発信しているかを見ます。次に、元になった公式資料を確かめます。最後に、その人が紹介料や値上がりで利益を得る立場かを確認します。アフィリエイト記事では、広告表示、比較基準、デメリット、更新日を見ます。このサイトでも、教材と広告は明確に分けます。" },
    ],
    example: { title: "SNSで『来週2倍』を見たら", body: "①発信者の登録・実名、②企業の適時開示、③根拠となる数字、④発信者の保有や報酬、⑤損失時の説明を確認。確認できなければ取引しないことが最善です。" },
    mistake: "自分だけは騙されないと思うこと自体がリスクです。焦り、欲、孤立を利用されるため、第三者へ相談する時間を置きます。",
    task: "過去に見た投資広告を一つ選び、発信者・根拠・利益相反・リスク表示の4項目で評価する。",
    talk: "自分が焦って投資判断をしそうになるのは、どんな状況？",
    quizzes: [
      { question: "出金のため追加送金を求められたら？", choices: ["すぐ送る", "送金を止め相談する", "借金して送る"], answer: 1, explanation: "典型的な詐欺の警告サインです。" },
      { question: "確証バイアスとは？", choices: ["反対意見だけ集める", "自分の考えに合う情報を重視する", "数字を計算する"], answer: 1, explanation: "保有銘柄への愛着などで起きやすい偏りです。" },
      { question: "情報を見るとき確認するものは？", choices: ["発信者・根拠・利益相反", "フォロワー数だけ", "画像の派手さ"], answer: 0, explanation: "情報の信頼性と発信動機を確認します。" },
    ],
    sources: [{ label: "金融庁｜金融事業者一括検索", url: "https://www.fsa.go.jp/news/r7/sonota/20260130/20260130.html" }, { label: "金融庁｜投資詐欺に注意", url: "https://www.fsa.go.jp/ordinary/chuui/attention.html" }],
  },
  {
    week: 12, module: 6, kicker: "自分の方針", title: "投資方針書をつくり、少額で始める", time: "25分",
    summary: "最後に、自分の投資ルールを一枚にまとめます。大切なのは、良い商品を探すことより、決めたルールを守り続けることです。",
    goals: ["自分の投資目的と期間を言語化する", "資産配分と積立額を決める", "下落時と見直し時のルールを持つ"],
    sections: [
      { heading: "01｜目的がなければ、成功か失敗かも決められない", body: "老後、住宅、学び直しなど、何のために、いつ使うかで投資方法は変わります。「お金を増やしたい」だけでは、上がるともっと欲しくなり、下がると怖くなって売ってしまいます。まず、目的、目標金額、期間、毎月出せる金額を決めます。" },
      { heading: "02｜投資方針書に7項目を書く", body: "①目的、②期間、③生活防衛資金、④毎月の積立額、⑤目標資産配分、⑥見直し頻度、⑦禁止事項を書きます。禁止事項には、借金による投資、理解できない商品、SNSだけを根拠にした売買などを入れます。" },
      { heading: "03｜少額で始め、判断の記録を残す", body: "最初の目的は最大利益ではなく、値動きの中で自分の感情と行動を知ることです。購入理由、想定リスク、売却条件を記録します。毎日の価格確認より、半年や一年ごとに家計・目的・配分を見直します。" },
    ],
    example: { title: "18歳の投資方針書例", body: "目的：30歳以降の選択肢を増やす。期間：15年以上。生活防衛資金：30万円。積立：月1万円。配分：低コストの世界分散株式80%、現金20%。見直し：年1回。禁止：借入、レバレッジ、理解できない暗号資産。これは例であり、自分の状況に合わせます。" },
    mistake: "最初から完璧な商品を探し続けて何もしないこと、逆に理解せず大金を入れること。少額・低コスト・分散で学習を始めます。",
    task: "自分の投資方針書をA4一枚で作り、信頼できる人に説明する。説明できない部分は投資前に学び直す。",
    talk: "相場が30%下落しても守りたいルールは何？",
    quizzes: [
      { question: "商品選びより先に決めるものは？", choices: ["目的・期間・家計", "人気ランキング", "短期予想"], answer: 0, explanation: "投資は目的達成の手段です。" },
      { question: "投資方針書の役割は？", choices: ["利益保証", "感情的な判断を減らす", "税金をなくす"], answer: 1, explanation: "事前のルールが相場変動時の判断軸になります。" },
      { question: "最初の少額投資で重視するものは？", choices: ["一発で最大利益", "仕組みと自分の行動を学ぶ", "毎分価格を見る"], answer: 1, explanation: "経験を記録し、再現できる判断力を育てます。" },
    ],
    sources: [{ label: "J-FLEC｜標準講義資料 2026年版", url: "https://www.j-flec.go.jp/announcements/news/23568/" }, { label: "金融庁｜資産形成の基本", url: "https://www.fsa.go.jp/policy/nisa2/invest/" }],
  },
];

const moduleNames = ["お金と生活", "資産とリスク", "長期運用", "制度とコスト", "企業と経済", "防御と実践"];

type GlossaryItem = { short: string; detail: string; lesson: number };
const glossary: Record<string, GlossaryItem> = {
  "購買力": { short: "同じ金額で、実際にどれだけの商品やサービスを買えるか。", detail: "お金の額面ではなく、実質的な価値を見るための考え方です。物価が上がると、同じ1万円でも買える量は減ります。", lesson: 1 },
  "インフレ": { short: "モノやサービスの価格が全体として継続的に上がる状態。", detail: "需要、原材料、賃金、為替など複数の要因で起こります。資産運用では現金の購買力が下がるリスクとして考えます。", lesson: 1 },
  "消費者物価指数": { short: "家計が購入する幅広い商品・サービスの価格変化を測る指数。", detail: "英語ではCPI。特定商品の値上げではなく、物価全体の動きを捉える代表的な統計です。", lesson: 1 },
  "CPI": { short: "Consumer Price Index。日本語では消費者物価指数。", detail: "基準時点と比べて、家計が購入する商品・サービスの価格がどれだけ変化したかを示します。", lesson: 1 },
  "実質金利": { short: "名目金利から物価上昇率を差し引いて考える金利。", detail: "預金が増えた額ではなく、購買力がどれだけ増減したかを見る目安です。厳密な計算と概算は異なります。", lesson: 1 },
  "生活防衛資金": { short: "病気・失業・急な出費に備えて、すぐ使える形で確保するお金。", detail: "相場下落時に投資資産を売らずに済むため、長期投資を続ける土台にもなります。", lesson: 2 },
  "株式": { short: "会社の一部を所有する権利。", detail: "株主は企業成長の成果を受けられる一方、事業悪化や倒産による損失も引き受けます。", lesson: 3 },
  "債券": { short: "国や会社などへお金を貸したことを示す証券。", detail: "原則として利息と満期時の元本返済を受けますが、信用悪化、金利上昇、途中売却などによる損失があります。", lesson: 3 },
  "投資信託": { short: "多くの投資家のお金をまとめ、専門家が複数資産へ投資する仕組み。", detail: "少額で分散しやすい一方、中身、リスク、信託報酬などの費用を確認する必要があります。", lesson: 3 },
  "元本割れ": { short: "売却時などに、受取額が投資した元の金額を下回ること。", detail: "投資商品には元本保証がないものが多く、手数料や為替も損益へ影響します。", lesson: 4 },
  "リターン": { short: "投資から得た収益または損失の割合。", detail: "値上がり益、配当、利息などを含みます。過去のリターンは将来の結果を保証しません。", lesson: 4 },
  "レバレッジ": { short: "元手より大きな金額を取引する仕組み。", detail: "利益を拡大できる一方、損失も拡大し、場合によっては元手を超える損失が生じます。", lesson: 4 },
  "複利": { short: "得た利益も元本へ加え、次の利益を生む仕組み。", detail: "時間が長いほど効果は大きくなりますが、例示される利回りは保証ではありません。", lesson: 5 },
  "積立投資": { short: "決まった金額を定期的に投資する方法。", detail: "購入時期を分け、タイミングの迷いを減らせます。ただし投資対象そのものの下落リスクは残ります。", lesson: 5 },
  "ポートフォリオ": { short: "保有する資産の組み合わせ。", detail: "株式・債券・現金、地域、業種などの配分を通じて、目的に合ったリスクとリターンを設計します。", lesson: 6 },
  "リバランス": { short: "変化した資産配分を、あらかじめ決めた比率へ戻すこと。", detail: "値上がりした資産の一部を減らし、比率が下がった資産を増やすなど、ルールに沿ってリスクを調整します。", lesson: 6 },
  "NISA": { short: "対象となる投資利益を非課税にする制度。", detail: "商品名ではなく口座の制度です。非課税でも、購入した金融商品の価格変動リスクはなくなりません。", lesson: 7 },
  "損益通算": { short: "一定の利益と損失を相殺して税額を計算する仕組み。", detail: "NISA口座内の損失は税務上ないものとされ、課税口座の利益との損益通算はできません。", lesson: 7 },
  "信託報酬": { short: "投資信託を保有している間、資産から継続的に差し引かれる費用。", detail: "年率で表示されます。小さな差でも長期では運用結果へ影響するため、同種商品を比べる重要項目です。", lesson: 8 },
  "スプレッド": { short: "買値と売値の差。実質的な取引コストになる。", detail: "手数料無料でもスプレッドが広ければ取引コストは大きくなります。商品や時間帯で変化します。", lesson: 8 },
  "為替": { short: "異なる国の通貨を交換するときの比率。", detail: "海外資産の円換算リターンは、資産価格と為替の両方から影響を受けます。", lesson: 8 },
  "営業利益": { short: "企業が本業で生み出した利益。", detail: "売上高から売上原価と販売費・一般管理費を差し引きます。本業の収益力を見る基本指標です。", lesson: 9 },
  "キャッシュフロー": { short: "企業や家計における現金の流れ。", detail: "企業では営業・投資・財務に分けて確認します。会計上の利益と実際の現金増減は一致しないことがあります。", lesson: 9 },
  "PER": { short: "株価が1株当たり利益の何倍かを示す指標。", detail: "株価収益率。業種や成長率で妥当水準が異なるため、PERだけで割安・割高は決められません。", lesson: 9 },
  "政策金利": { short: "中央銀行が金融政策で誘導する基準的な短期金利。", detail: "借入、預金、債券、為替、企業投資などへ波及します。市場は変更そのものより事前予想との差で動くことがあります。", lesson: 10 },
  "織り込み": { short: "将来予想が、すでに現在の価格へ反映されていること。", detail: "良いニュースで価格が下がる場合、内容が事前期待を下回った可能性があります。ニュースと価格を単純に結びつけないための概念です。", lesson: 10 },
  "確証バイアス": { short: "自分の考えに合う情報を重く見て、反対情報を軽視する傾向。", detail: "保有銘柄への思い入れで起きやすいため、購入前に反対材料と売却条件も記録します。", lesson: 11 },
  "資産配分": { short: "資金を株式・債券・現金などへ、どの比率で振り分けるか。", detail: "運用結果と値動きの大部分を左右する設計です。目的、期間、損失許容度に合わせます。", lesson: 12 },
};

const glossaryTerms = Object.keys(glossary).sort((a, b) => b.length - a.length);
const glossaryPattern = new RegExp(`(${glossaryTerms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "g");

function AnnotatedText({ text, onTerm }: { text: string; onTerm: (term: string) => void }) {
  return <>{text.split(glossaryPattern).map((part, index) => glossary[part]
    ? <button type="button" className="term" onClick={() => onTerm(part)} key={`${part}-${index}`}>{part}<sup>?</sup></button>
    : <span key={`${part}-${index}`}>{part}</span>)}</>;
}

export default function Home() {
  const [active, setActive] = useState(0);
  const [completed, setCompleted] = useState<number[]>([]);
  const [answers, setAnswers] = useState<(number | null)[]>([null, null, null]);
  const [checked, setChecked] = useState(false);
  const [openTerm, setOpenTerm] = useState<string | null>(null);

  useEffect(() => { const saved = localStorage.getItem("investment-map-progress-v2"); if (saved) setCompleted(JSON.parse(saved)); }, []);
  const lesson = lessons[active];
  const progress = useMemo(() => Math.round((completed.length / lessons.length) * 100), [completed]);
  const allCorrect = lesson.quizzes.every((q, i) => answers[i] === q.answer);

  function selectLesson(index: number) { setActive(index); setAnswers([null, null, null]); setChecked(false); setTimeout(() => document.getElementById("lesson")?.scrollIntoView({ behavior: "smooth" }), 20); }
  function goToLesson(week: number) { setOpenTerm(null); selectLesson(week - 1); }
  function checkAnswers() {
    setChecked(true);
    if (allCorrect && !completed.includes(lesson.week)) { const next = [...completed, lesson.week]; setCompleted(next); localStorage.setItem("investment-map-progress-v2", JSON.stringify(next)); }
  }

  return <main>
    <header className="topbar"><a className="brand" href="#top"><span className="brand-mark">18</span><span>投資の地図</span></a><div className="progress-mini"><span>{progress}%</span><div><i style={{ width: `${progress}%` }} /></div></div></header>
    <section className="hero" id="top"><div className="hero-copy"><p className="eyebrow">12-WEEK INVESTMENT FOUNDATION</p><h1>未来のお金を、<br/><em>自分で考える力</em>を。</h1><p className="lead">「何を買えばいいか」ではなく、「どう考えて決めるか」を学ぶ。知識ゼロから、自分の投資ルールを作るまでの全12回です。</p><button className="primary" onClick={() => document.getElementById("curriculum")?.scrollIntoView({behavior:"smooth"})}>第1回から始める <span>→</span></button></div><div className="hero-orbit" aria-hidden="true"><div className="orbit"/><div className="orbit orbit-two"/><div className="coin"><span>¥</span></div><span className="orbit-label label-a">THINK</span><span className="orbit-label label-b">LEARN</span><span className="orbit-label label-c">DECIDE</span></div></section>
    <section className="course-intro"><p className="eyebrow">HOW TO LEARN</p><h2>一度で覚えなくていい。<br/>使いながら身につける。</h2><div className="intro-grid"><div><b>01</b><strong>まず結論をつかむ</strong><p>何のために学ぶ回なのかを知る。</p></div><div><b>02</b><strong>具体例で確かめる</strong><p>数字とユウのケースに置き換える。</p></div><div><b>03</b><strong>自分の言葉にする</strong><p>クイズと実践課題で考え直す。</p></div></div><div className="journey"><p className="eyebrow">THE STORY OF 12 WEEKS</p><div><span>守る</span><i>→</i><span>知る</span><i>→</i><span>組み合わせる</span><i>→</i><span>選ぶ</span><i>→</i><span>読む</span><i>→</i><span>ルールにする</span></div><p>前の回で学んだことを、次の回で使います。最後は、12回の知識を自分の投資ルールへまとめます。</p></div></section>
    <section className="map-section" id="curriculum"><div className="section-heading"><p className="eyebrow">YOUR LEARNING MAP</p><h2>全12回の地図</h2><p>「何を買うか」は最後。まず生活を守り、リスクと仕組みを理解してから実践へ進みます。</p></div>{[1,2,3,4,5,6].map(mod=><div className="module-row" key={mod}><div className="module-title"><span>MODULE {String(mod).padStart(2,"0")}</span><strong>{moduleNames[mod-1]}</strong></div><div className="module-lessons">{lessons.map((item,index)=>item.module===mod&&<button key={item.week} className={`lesson-card ${active===index?"active":""}`} onClick={()=>selectLesson(index)}><span className="week">WEEK {String(item.week).padStart(2,"0")}</span><strong>{item.title}</strong><span className="card-bottom">{item.time}<b>{completed.includes(item.week)?"✓ 完了":"→"}</b></span></button>)}</div></div>)}</section>
    <section className="lesson-shell" id="lesson"><aside><p className="week-large">{String(lesson.week).padStart(2,"0")}</p><p className="kicker">{lesson.kicker}</p><div className="side-line"/><p className="side-note">学習時間<br/><strong>{lesson.time}</strong></p><nav className="lesson-nav">{lessons.map((l,i)=><button aria-label={`第${l.week}回へ`} key={l.week} className={active===i?"current":""} onClick={()=>selectLesson(i)}>{l.week}</button>)}</nav></aside><article className="lesson-content"><p className="eyebrow">WEEK {String(lesson.week).padStart(2,"0")} · MODULE {lesson.module}</p><h2>{lesson.title}</h2><p className="summary"><AnnotatedText text={lesson.summary} onTerm={setOpenTerm}/></p><div className="flow-card"><div><span>ここまで</span><p>{active===0?"投資を学ぶ出発点です。まず、お金そのものの価値から考えます。":`前回「${lessons[active-1].title}」で、${lessons[active-1].kicker}を学びました。`}</p></div><div className="flow-now"><span>今回</span><p>{lesson.summary}</p></div><div><span>この次</span><p>{active===lessons.length-1?"12回の知識を、自分のルールとして実行し、記録し、見直していきます。":`次回「${lessons[active+1].title}」で、今回の知識を次の判断へつなげます。`}</p></div></div><p className="term-guide">点線の専門用語を押すと、その場で意味を確認できます。</p><div className="goals"><span>この回のゴール</span>{lesson.goals.map(g=><p key={g}>✓ <AnnotatedText text={g} onTerm={setOpenTerm}/></p>)}</div>{lesson.sections.map(s=><section className="reading-section" key={s.heading}><h3>{s.heading}</h3><p><AnnotatedText text={s.body} onTerm={setOpenTerm}/></p></section>)}<div className="number-example"><span>ユウのケース｜数字で考える</span><h3>{lesson.example.title}</h3><p><AnnotatedText text={lesson.example.body} onTerm={setOpenTerm}/></p></div><div className="warning"><span>よくある誤解</span><p><AnnotatedText text={lesson.mistake} onTerm={setOpenTerm}/></p></div><div className="practice"><span>今週の実践課題</span><p><AnnotatedText text={lesson.task} onTerm={setOpenTerm}/></p></div><div className="quiz"><p className="eyebrow">UNDERSTANDING CHECK</p><h3>3問すべて、自分の言葉で考えてから選ぼう。</h3>{lesson.quizzes.map((q,qi)=><div className="quiz-item" key={q.question}><h4>{qi+1}. {q.question}</h4><div className="choices">{q.choices.map((c,ci)=><button key={c} onClick={()=>{const next=[...answers];next[qi]=ci;setAnswers(next);setChecked(false)}} className={answers[qi]===ci?"selected":""}><span>{String.fromCharCode(65+ci)}</span>{c}</button>)}</div>{checked&&<p className={answers[qi]===q.answer?"correct":"wrong"}>{answers[qi]===q.answer?"正解。":"もう一度考えよう。"} {q.explanation}</p>}</div>)}<button className="check" onClick={checkAnswers} disabled={answers.some(a=>a===null)}>採点する</button>{checked&&allCorrect&&<p className="completion">✓ 第{lesson.week}回を完了しました</p>}</div><div className="talk-card"><span>親子で話す問い</span><p>「{lesson.talk}」</p></div><div className="sources"><span>公式資料・さらに学ぶ</span>{lesson.sources.map(s=><a href={s.url} target="_blank" rel="noreferrer" key={s.url}>{s.label} ↗</a>)}</div><div className="lesson-actions">{active>0&&<button onClick={()=>selectLesson(active-1)}>← 前の回</button>}{active<lessons.length-1&&<button className="next" onClick={()=>selectLesson(active+1)}>次の回 →</button>}</div></article></section>
    <section className="future-monetization"><p className="eyebrow">INDEPENDENT FIRST</p><h2>教材と広告を、混ぜない。</h2><p>将来、証券口座・書籍・学習サービスの比較記事を追加する場合も、広告であること、比較基準、費用、デメリット、更新日を明示します。報酬の高さではなく、学習者の目的との適合を優先します。</p><div><span>学習教材</span><b>理解と判断力を育てる</b><span>比較ガイド</span><b>選択肢を公平に比べる</b><span>広告</span><b>明確に表示して分離する</b></div></section>
    <section className="principle"><p className="eyebrow">OUR PRINCIPLE</p><blockquote>自分のルールを作り、<br/><em>そのルールを守る。</em></blockquote><p>本サイトは金融教育を目的とし、個別の投資助言や特定商品の推奨を行うものではありません。投資には元本割れを含むリスクがあります。制度や数値は公式情報で最新内容をご確認ください。</p></section>
    <footer><div className="brand"><span className="brand-mark">18</span><span>投資の地図</span></div><p>© 2026 Investment Map. Learn first, decide for yourself.</p></footer>
    {openTerm && <div className="term-overlay" role="presentation" onClick={()=>setOpenTerm(null)}><section className="term-window" role="dialog" aria-modal="true" aria-labelledby="term-title" onClick={e=>e.stopPropagation()}><button className="term-close" aria-label="用語説明を閉じる" onClick={()=>setOpenTerm(null)}>×</button><p className="eyebrow">INVESTMENT WORD</p><h2 id="term-title">{openTerm}</h2><p className="term-short">{glossary[openTerm].short}</p><div><span>もう少し詳しく</span><p>{glossary[openTerm].detail}</p></div><button className="term-deep" onClick={()=>goToLesson(glossary[openTerm].lesson)}>第{glossary[openTerm].lesson}回で詳しく学ぶ <b>→</b></button></section></div>}
  </main>;
}
