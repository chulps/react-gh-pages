import React from "react";
import DeepLLogo from "./DeepLLogo.svg";
import GoogleTranslateLogo from "./GoogleTranslateLogo.svg";
import IMessageLogo from "./IMessageLogo.svg";
import ZaloLogo from "./ZaloLogo.svg";
import VoiceTraLogo from "./VoiceTraLogo.png";
import TChatLogo from "../../../LOGO/CHULPS_LOGO_ANIMATION_nucleotide.gif";
import HelloTalkLogo from "./HelloTalkLogo.png";

const features = [
  "Free",
  "No Download",
  "Auto-Translate",
  "Optional Signup",
  "Browser-Based",
  "No Device Sharing",
  "OS Agnostic",
  "100+ Languages",
  "Voice-to-Text",
  "Chat",
];

const competitors = [
  {
    name: "Google Translate",
    logo: GoogleTranslateLogo,
    free: true,
    noDownload: true,
    autoTranslate: true,
    noSignup: false,
    browserBased: true,
    noDeviceShare: false,
    osAgnostic: true,
    hundredLang: true,
    voiceToText: true,
    chat: false,
  },
  {
    name: "HelloTalk",
    logo: HelloTalkLogo,
    free: false,
    noDownload: false,
    autoTranslate: false,
    noSignup: false,
    browserBased: false,
    noDeviceShare: true,
    osAgnostic: true,
    hundredLang: true,
    voiceToText: true,
    chat: true,
    style: { objectFit: "cover", objectPosition: "left" },
  },
  {
    name: "Zalo",
    logo: ZaloLogo,
    free: true,
    noDownload: false,
    autoTranslate: false,
    noSignup: false,
    browserBased: false,
    noDeviceShare: true,
    osAgnostic: true,
    hundredLang: false,
    voiceToText: true,
    chat: true,
  },
  {
    name: "DeepL",
    logo: DeepLLogo,
    free: true,
    noDownload: false,
    autoTranslate: false,
    noSignup: false,
    browserBased: true,
    noDeviceShare: false,
    osAgnostic: true,
    hundredLang: false,
    voiceToText: true,
    chat: false,
  },
  {
    name: "iMessage",
    logo: IMessageLogo,
    free: true,
    noDownload: true,
    autoTranslate: true,
    noSignup: false,
    browserBased: false,
    noDeviceShare: true,
    osAgnostic: false,
    hundredLang: false,
    voiceToText: true,
    chat: true,
  },
  {
    name: "VoiceTra",
    logo: VoiceTraLogo,
    free: true,
    noDownload: false,
    autoTranslate: true,
    noSignup: true,
    browserBased: false,
    noDeviceShare: false,
    osAgnostic: true,
    hundredLang: true,
    voiceToText: true,
    chat: false,
  },
  {
    name: "T-Chat",
    logo: TChatLogo,
    free: true,
    noDownload: true,
    autoTranslate: true,
    noSignup: true,
    browserBased: true,
    noDeviceShare: true,
    osAgnostic: true,
    hundredLang: true,
    voiceToText: true,
    chat: true,
    style: { filter: "hue-rotate(150deg)" },
  },
];

const CompetitorsSection = () => {
  return (
    <section className="mt4">
      <label>Research and Planning</label>

      <h3>Competitor and User Research Overview</h3>
      <p className="mb1">
        The first question everyone asks is always this, "How is this better
        than Google Translate?". Google Translate is a great product! It's
        really good at what it was designed to do, which is to quickly translate
        a brief interaction with someone but it's missing some things that other
        apps do where translation is a key feature.
      </p>
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
                      loading="lazy"
                    />
                    <small>{competitor.name}</small>
                  </td>
                  <td>{competitor.free ? "✅" : "❌"}</td>
                  <td>{competitor.noDownload ? "✅" : "❌"}</td>
                  <td>{competitor.autoTranslate ? "✅" : "❌"}</td>
                  <td>{competitor.noSignup ? "✅" : "❌"}</td>
                  <td>{competitor.browserBased ? "✅" : "❌"}</td>
                  <td>{competitor.noDeviceShare ? "✅" : "❌"}</td>
                  <td>{competitor.osAgnostic ? "✅" : "❌"}</td>
                  <td>{competitor.hundredLang ? "✅" : "❌"}</td>
                  <td>{competitor.voiceToText ? "✅" : "❌"}</td>
                  <td>{competitor.chat ? "✅" : "❌"}</td>
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
          popular products like Google Translate, HelloTalk, Zalo, DeepL, iMessage,
          and VoiceTra to see what they do well and where they fall short. Pure
          translators like Google Translate, VoiceTra and DeepL offer good
          translations, but they require users share a single device which is ok
          for short interactions but it's not conducive for a long conversation. They are not chat apps.
          Zalo and iMessage makes you dig through menus to translate messages,
          and iMessage only works if everyone has an iPhone. HelloTalk
          translates a message with a single tap, but it's not free. VoiceTra is
          great for two-person chats on one device but doesn’t support group
          chats or multiple devices. None of the apps allow for multiple
          languages to be used in a group chat.
        </p>
      </div>
    </section>
  );
};

export default CompetitorsSection;
