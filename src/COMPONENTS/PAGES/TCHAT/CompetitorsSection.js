import React from "react";
import DeepLLogo from "./DeepLLogo.svg";
import GoogleTranslateLogo from "./GoogleTranslateLogo.svg";
import IMessageLogo from "./IMessageLogo.svg";
import ZaloLogo from "./ZaloLogo.svg";
import VoiceTraLogo from "./VoiceTraLogo.png";
import TChatLogo from "../../../LOGO/CHULPS_LOGO_ANIMATION_nucleotide.gif"

const features = [
  "Auto-Translate",
  "No Signup Required",
  "Browser-Based",
  "No Device Sharing",
  "OS Agnostic",
  "Supports Multiple Languages",
  "Chat",
];

// Define competitor analysis data

const competitors = [
  {
    name: "Google Translate",
    logo: GoogleTranslateLogo,
    autoTranslate: true,
    noSignup: false,
    browserBased: true,
    noDeviceShare: false,
    osAgnostic: true,
    multiLang: true,
    chat: false,
  },
  {
    name: "Zalo",
    logo: ZaloLogo,
    autoTranslate: false,
    noSignup: false,
    browserBased: false,
    noDeviceShare: true,
    osAgnostic: true,
    multiLang: true,
    chat: true,
  },
  {
    name: "DeepL",
    logo: DeepLLogo,
    autoTranslate: false,
    noSignup: false,
    browserBased: true,
    noDeviceShare: false,
    osAgnostic: true,
    multiLang: true,
    chat: false,
  },
  {
    name: "iMessage",
    logo: IMessageLogo,
    autoTranslate: true,
    noSignup: false,
    browserBased: false,
    noDeviceShare: true,
    osAgnostic: false,
    multiLang: true,
    chat: true,
  },
  {
    name: "VoiceTra",
    logo: VoiceTraLogo,
    autoTranslate: true,
    noSignup: true,
    browserBased: false,
    noDeviceShare: false,
    osAgnostic: true,
    multiLang: true,
    chat: false,
  },
  {
    name: "T-Chat",
    logo: TChatLogo,
    autoTranslate: true,
    noSignup: true,
    browserBased: true,
    noDeviceShare: true,
    osAgnostic: true,
    multiLang: true,
    chat: true,
    style: { filter: "hue-rotate(150deg)" },
  },
];

const CompetitorsSection = () => {
  return (
    <section className="mt4">
      <label>Research and Planning</label>
      <h2 style={{ maxWidth: "var(--unit6)" }}>
        Understanding the Challenges and Opportunities
      </h2>
      <hr className="mt2 mb3" />

      <label>Competitor Analysis</label>

      <h3 className="mb1">Competitor and User Research Overview</h3>
      <div className="competitor-analysis">
        <div className="table-wrapper">
          <table>
            <tbody>
              {competitors.map((competitor, index) => (
                <tr key={index}>
                  <td className="first-column-content">
                    <img
                      className="competitor-logo"
                      src={competitor.logo ? competitor.logo : ""}
                      alt="Competitor logo"
                      style={competitor.style ? competitor.style : {}}
                    />
                    <p>{competitor.name}</p>
                  </td>
                  <td>{competitor.autoTranslate ? "✔️" : "❌"}</td>
                  <td>{competitor.noSignup ? "✔️" : "❌"}</td>
                  <td>{competitor.browserBased ? "✔️" : "❌"}</td>
                  <td>{competitor.noDeviceShare ? "✔️" : "❌"}</td>
                  <td>{competitor.osAgnostic ? "✔️" : "❌"}</td>
                  <td>{competitor.multiLang ? "✔️" : "❌"}</td>
                  <td>{competitor.chat ? "✔️" : "❌"}</td>
                </tr>
              ))}
            </tbody>
            <thead>
              <tr>
                <th>Competitor</th>
                {features.map((feature, index) => (
                  <th key={index}>{feature}</th>
                ))}
              </tr>
            </thead>
          </table>
        </div>
        <p className="mt1">
          Competitor research was a key part of creating T-Chat. I looked at
          popular tools like Google Translate, Zalo, DeepL, iMessage, and
          VoiceTra to see what they do well and where they fall short. Google
          Translate and DeepL offer good translations, but they require users to
          copy and paste text, which interrupts the conversation. Zalo makes you
          dig through menus to translate messages, and iMessage only works if
          everyone has an iPhone. VoiceTra is great for two-person chats on one
          device but doesn’t support group chats or multiple devices. By
          studying these competitors, I found gaps and opportunities to make
          something better. This research helped shape T-Chat, making sure it
          solves the problems these other tools have and offers an easy,
          real-time way for people to talk across languages.
        </p>
      </div>
    </section>
  );
};

export default CompetitorsSection;
