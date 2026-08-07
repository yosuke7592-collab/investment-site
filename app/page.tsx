"use client";

import { useEffect, useMemo, useState } from "react";

type Lesson = {
  week: number;
  kicker: string;
  title: string;
  summary: string;
  time: string;
  story: string;
  points: string[];
  question: string;
  choices: string[];
  answer: number;
  talk: string;
};

const lessons: Lesson[] = [
  {
    week: 1,
    kicker: "最初の一歩",
    title: "お金の価値は、なぜ変わる？",
    summary: "物価とインフレを知ると、貯金と投資の役割が見えてくる。",
    time: "5分",
    story: "10年前に100円で買えたものが、今は120円する。同じ100円でも、買える量が減れば『お金の価値が下がった』ことになります。投資を学ぶ出発点は、増やし方ではなく、お金の価値が変わる仕組みを知ることです。",
    points: ["物価が上がることをインフレという", "現金は金額が同じでも購買力が下がることがある", "貯金は守る役割、投資は将来の成長に参加する役割"],
    question: "物価が毎年上がり、預金金利がほぼ変わらない場合、現金の購買力はどうなる？",
    choices: ["上がる", "変わらない", "下がる"],
    answer: 2,
    talk: "最近『高くなったな』と感じたものは何？",
  },
  {
    week: 2,
    kicker: "守りをつくる",
    title: "貯金と投資、どちらが正解？",
    summary: "二者択一ではなく、使う時期によって役割を分ける。",
    time: "6分",
    story: "来月の家賃を株に投資すると、必要な日に値下がりしているかもしれません。一方、20年後に使うお金をすべて現金で持つと、インフレに負ける可能性があります。大切なのは、目的と時間で置き場所を変えることです。",
    points: ["近く使うお金は現金で確保する", "投資は当面使わない余裕資金で行う", "生活防衛資金をつくってから投資額を決める"],
    question: "投資に回すのに最も適しているのはどのお金？",
    choices: ["来月の生活費", "当面使う予定のない余裕資金", "借りたお金"],
    answer: 1,
    talk: "今のお金を『使う・守る・育てる』に分けるなら、どう分ける？",
  },
  {
    week: 3,
    kicker: "会社の一部を持つ",
    title: "株を買うって、どういうこと？",
    summary: "値段の上下を見る前に、株式の本当の意味を理解する。",
    time: "7分",
    story: "株を買うことは、画面上の数字を売買することではありません。会社のごく小さな一部分を所有し、その会社が生み出す価値とリスクを引き受けることです。株価の向こう側には、商品、顧客、従業員、利益があります。",
    points: ["株主は会社の一部を所有する", "会社の成長や利益が株価や配当につながる", "期待が外れれば元本割れする可能性がある"],
    question: "株式投資で最初に見るべき対象は？",
    choices: ["値動きだけ", "会社が何で価値を生むか", "SNSの人気"],
    answer: 1,
    talk: "普段使うサービスの中で、会社として調べてみたいものは？",
  },
  {
    week: 4,
    kicker: "判断の軸",
    title: "投資とギャンブルの違い",
    summary: "不確実だから同じ、ではない。判断・時間・期待値が違う。",
    time: "7分",
    story: "投資にも損失はあります。しかし、価値を生む資産を調べ、複数に分け、長い時間を味方につけることができます。根拠なく短期の値動きに賭けるほど、行動はギャンブルに近づきます。違いをつくるのは商品名より、自分の判断方法です。",
    points: ["投資には価値を生む対象と根拠がある", "分散と時間でリスクを管理できる", "必ず儲かる投資はなく、損失可能性を受け入れる必要がある"],
    question: "投資をギャンブルに近づける行動は？",
    choices: ["余裕資金で分散する", "根拠なく一つに全額を賭ける", "長期で保有する"],
    answer: 1,
    talk: "自分が納得して投資するために、最低限何を調べたい？",
  },
];

export default function Home() {
  const [active, setActive] = useState(0);
  const [completed, setCompleted] = useState<number[]>([]);
  const [choice, setChoice] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("investment-map-progress");
    if (saved) setCompleted(JSON.parse(saved));
  }, []);

  const lesson = lessons[active];
  const progress = useMemo(() => Math.round((completed.length / lessons.length) * 100), [completed]);

  function checkAnswer() {
    if (choice === null) return;
    setShowAnswer(true);
    if (choice === lesson.answer && !completed.includes(lesson.week)) {
      const next = [...completed, lesson.week];
      setCompleted(next);
      localStorage.setItem("investment-map-progress", JSON.stringify(next));
    }
  }

  function selectLesson(index: number) {
    setActive(index);
    setChoice(null);
    setShowAnswer(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="18歳からの投資の地図 トップ">
          <span className="brand-mark">18</span>
          <span>投資の地図</span>
        </a>
        <div className="progress-mini"><span>{progress}%</span><div><i style={{ width: `${progress}%` }} /></div></div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">MONEY & INVESTING · FIRST 4 WEEKS</p>
          <h1>未来のお金を、<br /><em>自分で考える力</em>を。</h1>
          <p className="lead">儲かる銘柄を教える場所ではありません。お金と経済の仕組みを知り、自分で判断するための週1回・5分のレッスンです。</p>
          <button className="primary" onClick={() => document.getElementById("lesson")?.scrollIntoView({ behavior: "smooth" })}>今週のレッスンを始める <span>→</span></button>
        </div>
        <div className="hero-orbit" aria-hidden="true">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="coin"><span>¥</span></div>
          <span className="orbit-label label-a">THINK</span><span className="orbit-label label-b">LEARN</span><span className="orbit-label label-c">DECIDE</span>
        </div>
      </section>

      <section className="map-section">
        <div className="section-heading"><p className="eyebrow">YOUR LEARNING MAP</p><h2>最初の4週間</h2><p>正解を急がず、まず土台から。毎週ひとつずつ進みます。</p></div>
        <div className="lesson-grid">
          {lessons.map((item, index) => (
            <button key={item.week} className={`lesson-card ${active === index ? "active" : ""}`} onClick={() => selectLesson(index)}>
              <span className="week">WEEK {String(item.week).padStart(2, "0")}</span>
              <strong>{item.title}</strong>
              <span className="card-bottom">{item.time}<b>{completed.includes(item.week) ? "✓ 完了" : "→"}</b></span>
            </button>
          ))}
        </div>
      </section>

      <section className="lesson-shell" id="lesson">
        <aside>
          <p className="week-large">0{lesson.week}</p>
          <p className="kicker">{lesson.kicker}</p>
          <div className="side-line" />
          <p className="side-note">読む時間<br /><strong>{lesson.time}</strong></p>
        </aside>
        <article className="lesson-content">
          <h2>{lesson.title}</h2>
          <p className="summary">{lesson.summary}</p>
          <p className="story">{lesson.story}</p>
          <div className="takeaways">
            <p>今日の3ポイント</p>
            {lesson.points.map((point, index) => <div key={point}><span>0{index + 1}</span><p>{point}</p></div>)}
          </div>

          <div className="quiz">
            <p className="eyebrow">QUICK CHECK</p>
            <h3>{lesson.question}</h3>
            <div className="choices">
              {lesson.choices.map((item, index) => (
                <button key={item} onClick={() => { setChoice(index); setShowAnswer(false); }} className={choice === index ? "selected" : ""}><span>{String.fromCharCode(65 + index)}</span>{item}</button>
              ))}
            </div>
            <button className="check" onClick={checkAnswer} disabled={choice === null}>答えを確認する</button>
            {showAnswer && <p className={`feedback ${choice === lesson.answer ? "correct" : "wrong"}`}>{choice === lesson.answer ? "正解。今週のレッスンは完了です。" : "もう一度、3つのポイントを見直してみよう。"}</p>}
          </div>

          <div className="talk-card"><span>今週、話してみること</span><p>「{lesson.talk}」</p></div>
          {active < lessons.length - 1 && <button className="next" onClick={() => selectLesson(active + 1)}>次のレッスンを見る <span>→</span></button>}
        </article>
      </section>

      <section className="principle">
        <p className="eyebrow">OUR PRINCIPLE</p>
        <blockquote>何を買うかより、<br /><em>なぜそう考えたか。</em></blockquote>
        <p>このサイトは金融教育を目的としており、特定の金融商品を推奨するものではありません。投資には元本割れを含むリスクがあります。</p>
      </section>

      <footer><div className="brand"><span className="brand-mark">18</span><span>投資の地図</span></div><p>© 2026 Investment Map. Learn first, decide for yourself.</p></footer>
    </main>
  );
}
