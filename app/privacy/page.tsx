import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "投資の原則における利用者情報、Cookie、外部サービス、広告・アフィリエイトの取扱いを説明します。",
  alternates: { canonical: "/privacy" },
};

const items = [
  ["取得する可能性のある情報", "サイトへのアクセス時に、IPアドレス、ブラウザ・端末の種類、参照元、閲覧日時、閲覧ページ等がサーバーの運用ログとして記録される場合があります。書面でお問い合わせをいただいた場合は、氏名、住所、連絡先、お問い合わせ内容等を受領する場合があります。"],
  ["利用目的", "サイトの安定運用、不正利用の防止、障害調査、内容改善、お問い合わせへの確認・回答のために利用します。"],
  ["Cookie等", "本サイトは、ページ表示や外部サービスとの接続に伴いCookie等が利用される場合があります。現時点で、本サイト独自の会員識別や行動履歴を用いた広告配信は行っていません。ブラウザの設定でCookieを制限できます。"],
  ["アクセス解析", "現時点で、Google Analytics等の外部アクセス解析サービスはサイトに導入していません。導入する場合は、利用するサービスと取得情報を本ポリシーに追記します。"],
  ["広告・アフィリエイト", "一部ページにはアフィリエイトリンクと計測用タグが含まれます。リンクを経由した申込等の判定に必要な情報が、広告主またはASPによりCookie等を通じて処理される場合があります。本サイトが広告リンクから氏名や口座情報を取得することはありません。"],
  ["第三者提供", "法令に基づく場合を除き、取得した個人情報を本人の同意なく第三者へ提供しません。ただし、外部リンク先やアフィリエイトリンク先での情報の取扱いには、各サービスのプライバシーポリシーが適用されます。"],
  ["外部サービス", "本サイトには公的機関、金融機関、出版社、チャートサービス、ASP等の外部サイトへのリンクがあります。移動先の利用条件や情報管理は各運営者が定めます。"],
  ["安全管理", "受領した情報は利用目的の範囲で取り扱い、不正アクセス、紛失、漏えい等を防ぐため合理的な安全管理に努めます。不要になった情報は適切に廃棄します。"],
  ["ポリシーの変更", "利用する機能や法令等の変更に応じて、本ポリシーを見直すことがあります。重要な変更は本ページでお知らせします。"],
];

export default function PrivacyPage() { return <main className="trust-page"><SiteHeader current="glossary" />
  <section className="trust-hero"><p className="eyebrow">PRIVACY POLICY</p><h1>プライバシーポリシー</h1><p>本サイトで扱う情報と、その利用範囲を説明します。</p></section>
  <section className="trust-page-section"><div className="legal-list">{items.map(([title, body], index)=><article key={title}><span>{String(index+1).padStart(2,"0")}</span><div><h2>{title}</h2><p>{body}</p></div></article>)}</div>
    <div className="contact-method compact"><h2>運営者・お問い合わせ先</h2><p>株式会社SOG<br/>〒105-0013 東京都港区浜松町2丁目2番15号 浜松町ダイヤビル2F</p><a className="inline-trust-link" href="/contact">お問い合わせ方法を見る →</a></div><p className="policy-date">制定・最終更新：2026年9月6日</p>
  </section>
  </main>; }
