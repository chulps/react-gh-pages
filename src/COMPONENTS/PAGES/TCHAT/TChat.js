import React from "react";
import { useLanguage } from "../../../redesign/i18n";
import "../../../redesign/tchat.css";

const copy = {
  en: {
    eyebrow: "Product development · Tunabear",
    title: "Comett",
    deck: "Text and video conversations that move across languages.",
    intro: "With Tunabear, I’m helping shape Comett into a multilingual communication product: quick shared rooms, account-based conversations, and live video calls with translated captions.",
    open: "Open Comett",
    note: "Live product · opens in a new tab",
    flowLabel: "A conversation, in three steps",
    steps: [
      ["01", "Create a room", "Start a new space for the conversation."],
      ["02", "Share the code", "Invite someone to join with a room ID."],
      ["03", "Talk naturally", "Write in the language that feels right to you."],
    ],
    featuresLabel: "Beyond the first message",
    featuresTitle: "One product, several ways to connect.",
    featuresIntro: "Start with a quick room, or use Comett’s account features to keep conversations going.",
    features: [
      ["01", "Chat across languages", "Choose your language and read incoming messages translated for you. Your own messages stay in the language you wrote."],
      ["02", "Meet face to face", "Create a video call and share its link or QR code. Live captions can be translated into your chosen language, with optional synthesized speech."],
      ["03", "Start with an invite", "Create a room and invite people with a five-character code, a share link, or a QR code. Rejoin your last room from the home screen."],
      ["04", "Keep in touch", "With an account, add contacts, start direct conversations, search conversation history, review past calls, and manage notifications."],
    ],
    detailsLabel: "What Comett is",
    detailsTitle: "Less setup. More conversation.",
    details: "Comett pairs easy-to-join group rooms with account-based conversations. Use a short code or invitation link to get started, then choose the tools that suit the conversation: translated chat, live video captions, or an ongoing direct conversation.",
    roleLabel: "My work",
    roleTitle: "Building the next version with Tunabear.",
    role: "At Tunabear, I work as a Business Developer while contributing to Comett’s product development.",
    roleNote: "Comett is an active product in development.",
    ctaTitle: "Want to see where it’s going?",
    cta: "Try the live app",
  },
  ja: {
    eyebrow: "プロダクト開発 · Tunabear",
    title: "Comett",
    deck: "言語の違いを越えてつながる、テキストとビデオの会話。",
    intro: "Tunabearとともに、招待制のルーム、アカウントで続ける会話、翻訳字幕付きのビデオ通話を備えた、多言語コミュニケーションプロダクトを開発しています。",
    open: "Comettを開く",
    note: "公開中のアプリ · 新しいタブで開きます",
    flowLabel: "会話までの3ステップ",
    steps: [
      ["01", "ルームを作成", "新しい会話の場を作ります。"],
      ["02", "コードを共有", "ルームIDを使って相手を招待します。"],
      ["03", "自然に話す", "自分にとって使いやすい言語で入力できます。"],
    ],
    featuresLabel: "メッセージの先へ",
    featuresTitle: "会話に合わせた、いくつものつながり方。",
    featuresIntro: "すぐに使えるルームから、アカウントで続ける会話まで。",
    features: [
      ["01", "言語を越えたチャット", "自分の言語を選ぶと、届いたメッセージをその言語で読めます。自分が送った文章は、入力した言語のままです。"],
      ["02", "顔を見ながら話す", "ビデオ通話を作成し、リンクやQRコードで招待できます。ライブ字幕は選んだ言語に翻訳でき、合成音声で読み上げることもできます。"],
      ["03", "招待からすぐに参加", "ルームを作成して、5文字のコード、共有リンク、QRコードで招待できます。ホーム画面から前回のルームに戻れます。"],
      ["04", "会話を続ける", "アカウントを使うと、連絡先の追加、個別の会話、会話履歴の検索、通話履歴の確認、通知の管理ができます。"],
    ],
    detailsLabel: "Comettについて",
    detailsTitle: "準備はシンプルに。会話をもっと自然に。",
    details: "すぐに参加できるグループルームと、アカウントで続けられる会話をひとつに。短いコードや招待リンクで始めて、翻訳チャット、ライブビデオ字幕、個別の会話など、目的に合った機能を使えます。",
    roleLabel: "担当領域",
    roleTitle: "Tunabearと次のバージョンを開発中。",
    role: "TunabearでBusiness Developerとして働きながら、Comettのプロダクト開発にも携わっています。",
    roleNote: "Comettは現在開発中のプロダクトです。",
    ctaTitle: "現在のアプリをご覧ください。",
    cta: "アプリを試す",
  },
};

const Comett = () => {
  const { lang } = useLanguage();
  const ja = lang === "ja";
  const text = copy[ja ? "ja" : "en"];

  return (
    <article className="comett-story">
      <header className="comett-hero">
        <div className="comett-hero-copy">
          <span className="comett-eyebrow"><span aria-hidden="true" className="comett-spark">✳</span>{text.eyebrow}</span>
          <h1>{text.title}<span aria-hidden="true">.</span></h1>
          <p className="comett-deck">{text.deck}</p>
          <p className="comett-intro">{text.intro}</p>
          <div className="comett-hero-actions">
            <a className="comett-button" href="https://tchat.tunabearagents.com/#/" target="_blank" rel="noopener noreferrer">{text.open}<span aria-hidden="true">↗</span></a>
            <span className="comett-live-note"><span aria-hidden="true" />{text.note}</span>
          </div>
        </div>
        <div className="comett-orbit" aria-hidden="true">
          <div className="comett-orbit-ring comett-orbit-ring-a" />
          <div className="comett-orbit-ring comett-orbit-ring-b" />
          <div className="comett-orbit-core">C<span>✳</span></div>
          <span className="comett-orbit-label">LANGUAGE / CONNECTION</span>
          <div className="comett-orbit-rotor">
            <span className="comett-orbit-point comett-point-a" />
            <span className="comett-orbit-point comett-point-b" />
            <span className="comett-orbit-point comett-point-c" />
          </div>
        </div>
      </header>

      <section className="comett-flow" aria-labelledby="comett-flow-heading">
        <div className="comett-section-head">
          <span className="comett-section-label">{text.flowLabel}</span>
          <span className="comett-section-rule" aria-hidden="true" />
        </div>
        <h2 className="comett-visually-hidden" id="comett-flow-heading">{text.flowLabel}</h2>
        <ol className="comett-steps">
          {text.steps.map(([number, title, description]) => (
            <li className="comett-step" key={number}>
              <span className="comett-step-number">{number}</span>
              <div><h3>{title}</h3><p>{description}</p></div>
              {number !== "03" && <span className="comett-step-arrow" aria-hidden="true">→</span>}
            </li>
          ))}
        </ol>
      </section>

      <section className="comett-features" aria-labelledby="comett-features-heading">
        <div className="comett-feature-intro">
          <span className="comett-section-label">{text.featuresLabel}</span>
          <h2 id="comett-features-heading">{text.featuresTitle}</h2>
          <p>{text.featuresIntro}</p>
        </div>
        <ul className="comett-feature-grid">
          {text.features.map(([number, title, description]) => (
            <li className="comett-feature" key={number}>
              <span className="comett-feature-number">{number}</span>
              <span className="comett-feature-signal" aria-hidden="true">{number === "01" ? "↗" : number === "02" ? "◉" : number === "03" ? "⌁" : "◎"}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="comett-details">
        <div className="comett-details-mark" aria-hidden="true">C<span>✳</span></div>
        <div className="comett-details-copy">
          <span className="comett-section-label">{text.detailsLabel}</span>
          <h2>{text.detailsTitle}</h2>
          <p>{text.details}</p>
        </div>
        <div className="comett-role-copy">
          <span className="comett-section-label">{text.roleLabel}</span>
          <h3>{text.roleTitle}</h3>
          <p>{text.role}</p>
          <span className="comett-role-note">{text.roleNote}</span>
        </div>
      </section>

      <footer className="comett-cta">
        <h2>{text.ctaTitle}</h2>
        <a href="https://tchat.tunabearagents.com/#/" target="_blank" rel="noopener noreferrer">{text.cta}<span aria-hidden="true">↗</span></a>
      </footer>
    </article>
  );
};

export default Comett;
