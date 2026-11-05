import React from "react";
import { useLanguage } from "../../../redesign/i18n";
import "./comett-design-system.css";

const copy = {
  en: {
    eyebrow: "Approved design direction",
    title: "One identity. Room for every language.",
    intro: "The Comett system brings a recognizable mark, purposeful color, and script-aware type together around one idea: make it easier to understand each other.",
    status: "Approved foundation · app implementation in progress",
    palette: "Color with a clear role",
    colors: [
      ["Navy", "#101925", "Structure and readable text."],
      ["Coral", "#EF6451", "Primary actions and attention."],
      ["Teal", "#8ED0D1", "Connection and confirmation."],
      ["Lilac", "#C7A2F2", "Language and translation context."],
    ],
    neutralLabel: "Supporting surfaces",
    neutrals: [["Warm white", "#F5F7FA"], ["Mist", "#E8EDF0"]],
    typeLabel: "Typography",
    typeTitle: "A voice for the brand. Room for every conversation.",
    typeBody: "Archivo gives short Latin headlines their character. Noto Sans script families are the direction for interface and message text, with generous line height and content-led sizing.",
    sampleLabel: "SCRIPT-SENSITIVE TYPE",
    sampleJapanese: "こんにちは、元気ですか？",
    sampleEnglish: "Hello, how are you?",
    previewLabel: "Interface details",
    previewTitle: "Meaning stays clear in every state.",
    translated: "Translated from Japanese",
    original: "こんにちは、元気ですか？",
    response: "Hello, how are you?",
    sampleButton: "Join room",
    themeLabel: "Two themes, one identity",
    dark: "Dark · navy canvas, warm-white text",
    light: "Light · warm-white canvas, navy text",
    motionLabel: "Brand motion",
    motionTitle: "A familiar orbit, with a softer pull.",
    motionBody: "The mark stays unchanged while three accent points drift around it. The preview respects reduced-motion settings.",
    guideCta: "Explore the full interactive design system",
    guideNote: "Standalone guide",
    previewNote: "Illustrative design-system specimen, not a live Comett room.",
  },
  ja: {
    eyebrow: "承認済みのデザイン方針",
    title: "ひとつのブランドに、あらゆる言語の余白を。",
    intro: "Comettのデザインシステムは、わかりやすいロゴ、役割のある色、文字体系に配慮した書体をひとつにまとめ、互いを理解しやすい会話を支えます。",
    status: "基礎デザイン承認済み · アプリへの実装は進行中",
    palette: "役割が明確なカラー",
    colors: [
      ["ネイビー", "#101925", "構造と読みやすい文字。"],
      ["コーラル", "#EF6451", "主なアクションと注目箇所。"],
      ["ティール", "#8ED0D1", "つながりと確認。"],
      ["ライラック", "#C7A2F2", "言語と翻訳の文脈。"],
    ],
    neutralLabel: "背景に使うカラー",
    neutrals: [["ウォームホワイト", "#F5F7FA"], ["ミスト", "#E8EDF0"]],
    typeLabel: "タイポグラフィ",
    typeTitle: "ブランドの個性と、あらゆる会話の読みやすさ。",
    typeBody: "Archivoは短いラテン文字の見出しに個性を加えます。UIやメッセージにはNoto Sansの文字体系別ファミリーを用い、行間にゆとりを持たせて内容に合わせて高さを調整します。",
    sampleLabel: "文字体系に配慮したサンプル",
    sampleJapanese: "こんにちは、元気ですか？",
    sampleEnglish: "Hello, how are you?",
    previewLabel: "UIコンポーネント",
    previewTitle: "どの状態でも、意味を明確に。",
    translated: "日本語から翻訳",
    original: "こんにちは、元気ですか？",
    response: "Hello, how are you?",
    sampleButton: "ルームに参加",
    themeLabel: "ふたつのテーマ、ひとつのブランド",
    dark: "ダーク · ネイビーの背景とウォームホワイトの文字",
    light: "ライト · ウォームホワイトの背景とネイビーの文字",
    motionLabel: "ブランドのモーション",
    motionTitle: "親しみのある軌道に、やわらかな引力を。",
    motionBody: "ロゴの形は変えず、3色のポイントが周りを巡ります。動きを減らす設定にも対応します。",
    guideCta: "インタラクティブなデザインシステムを見る",
    guideNote: "単体で閲覧できるガイド",
    previewNote: "デザインシステムの見本です。実際のComettルームではありません。",
  },
};

const DesignSystemSection = () => {
  const { lang } = useLanguage();
  const ja = lang === "ja";
  const text = copy[ja ? "ja" : "en"];

  return (
    <section className="comett-design" aria-labelledby="comett-design-title">
      <div className="comett-design-heading">
        <div>
          <span className="comett-design-eyebrow"><img className="comett-design-mark" src={`${process.env.PUBLIC_URL || ""}/images/comett-mark-coral.svg`} alt="" aria-hidden="true" />{text.eyebrow}</span>
          <h2 id="comett-design-title">{text.title}</h2>
          <p>{text.intro}</p>
        </div>
        <span className="comett-design-status">{text.status}</span>
      </div>

      <div className="comett-design-system-grid">
        <article className="comett-design-palette">
          <div className="comett-design-card-head">
            <span>01 / COLOR</span>
            <h3>{text.palette}</h3>
          </div>
          <ul className="comett-color-list">
            {text.colors.map(([name, hex, role]) => (
              <li className="comett-color" key={hex}>
                <span className="comett-color-chip" style={{ "--swatch": hex, "--swatch-ink": hex === "#101925" ? "#F5F7FA" : "#101925" }} aria-hidden="true" />
                <span><strong>{name}</strong><code>{hex}</code><small>{role}</small></span>
              </li>
            ))}
          </ul>
          <div className="comett-neutral-row">
            <span>{text.neutralLabel}</span>
            {text.neutrals.map(([name, hex]) => <span key={hex}><i style={{ "--swatch": hex }} aria-hidden="true" />{name} <code>{hex}</code></span>)}
          </div>
        </article>

        <article className="comett-design-type">
          <div className="comett-design-card-head">
            <span>02 / TYPOGRAPHY</span>
            <h3>{text.typeLabel}</h3>
          </div>
          <p className="comett-design-type-title">{text.typeTitle}</p>
          <p>{text.typeBody}</p>
          <div className="comett-type-specimen">
            <span>{text.sampleLabel}</span>
            <p lang="ja">{text.sampleJapanese}</p>
            <small>{text.sampleEnglish}</small>
          </div>
        </article>

        <article className="comett-design-components">
          <div className="comett-design-card-head">
            <span>03 / COMPONENTS</span>
            <h3>{text.previewLabel}</h3>
          </div>
          <h4>{text.previewTitle}</h4>
          <div className="comett-message-preview" aria-label={text.previewNote}>
            <div><span className="comett-message-avatar" aria-hidden="true">R</span><span className="comett-message-meta">Rin · 日本語</span></div>
            <p lang="ja">{text.original}</p>
            <div className="comett-translation-tag"><span aria-hidden="true">↗</span>{text.translated}</div>
            <p className="comett-translated-message">{text.response}</p>
          </div>
          <div className="comett-sample-action" aria-hidden="true">{text.sampleButton}<span>→</span></div>
          <small className="comett-preview-note">{text.previewNote}</small>
        </article>

        <article className="comett-design-themes">
          <div className="comett-design-card-head">
            <span>04 / THEMES</span>
            <h3>{text.themeLabel}</h3>
          </div>
          <div className="comett-theme-pair">
            <div className="comett-theme-sample comett-theme-dark"><span className="comett-theme-dot"/><span className="comett-theme-lines"><i/><i/></span><b aria-hidden="true">Aa</b></div>
            <div className="comett-theme-sample comett-theme-light"><span className="comett-theme-dot"/><span className="comett-theme-lines"><i/><i/></span><b aria-hidden="true">Aa</b></div>
          </div>
          <div className="comett-theme-captions"><p>{text.dark}</p><p>{text.light}</p></div>
          <div className="comett-motion-row">
            <div className="comett-mini-orbit" aria-hidden="true"><span/><span/><span/><img className="comett-mini-mark" src={`${process.env.PUBLIC_URL || ""}/images/comett-mark-coral.svg`} alt="" aria-hidden="true" /></div>
            <div><span className="comett-motion-label">{text.motionLabel}</span><h4>{text.motionTitle}</h4><p>{text.motionBody}</p></div>
          </div>
        </article>
      </div>

      <div className="comett-design-footer">
        <span>{text.guideNote}</span>
        <a href={`${process.env.PUBLIC_URL || ""}/Comett-Design-System-Guide.html`} target="_blank" rel="noopener noreferrer">{text.guideCta}<span aria-hidden="true">↗</span></a>
      </div>
    </section>
  );
};

export default DesignSystemSection;
