import React, { lazy, Suspense } from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { Header, Footer, PageMotion, Home, WorkPage, Services, Contact, NotFound, Meta, ContactBand, Arrow } from './redesign/Site';
import { email, projects } from './redesign/content';
import { LanguageProvider } from './redesign/i18n';
import { useLanguage } from './redesign/i18n';

const MindVault=lazy(()=>import('./COMPONENTS/PAGES/MINDVAULT/MindVault'));
const Xprize=lazy(()=>import('./COMPONENTS/PAGES/XPRIZE/Xprize'));
const Yarden=lazy(()=>import('./COMPONENTS/PAGES/YARDEN/Yarden'));
const Foundry=lazy(()=>import('./COMPONENTS/PAGES/FOUNDRY/Foundry'));
const CRIGenetics=lazy(()=>import('./COMPONENTS/PAGES/CRIGENETICS/CRIGenetics'));
const Nucleotide=lazy(()=>import('./COMPONENTS/PAGES/NUCLEOTIDE/Nucleotide'));
const Clicktool=lazy(()=>import('./COMPONENTS/PAGES/CLICKTOOL/Clicktool'));
const TChat=lazy(()=>import('./COMPONENTS/PAGES/TCHAT/TChat'));
const Covid=lazy(()=>import('./COMPONENTS/PAGES/COVID/Covid'));
const Resume=lazy(()=>import('./COMPONENTS/PAGES/RESUME/Resume'));
const DesignProcess=lazy(()=>import('./COMPONENTS/PAGES/DESIGN-PROCESS/DesignProcess'));
function Case({title,description,descriptionJa,children,resume=false}){const {lang}=useLanguage();const ja=lang==='ja';return <><div className="case-frame"><div className="case-topbar"><Link to="/projects/">← {ja?'制作事例一覧':'All work'}</Link><span>{resume?(ja?'プロダクトチーム・採用担当者向け':'For product teams'):(ja?'プロダクトデザイン・エンジニアリング':'Product design + engineering')}</span></div><p className="case-description">{ja&&descriptionJa?descriptionJa:description}</p>{ja&&<p className="case-language-note" lang="ja">{resume?'職務経歴の詳細は英語で記載しています。':'以下の詳細な制作記録は英語で記載しています。上記に日本語の概要を掲載しています。'}</p>}{resume&&<div className="resume-note">{ja?'シニアプロダクトデザイナー、UXエンジニアの採用に関する情報です。この職務経歴書は過去に公開した記録を保持しており、日付とPDFには以前の「現在」表記が含まれます。最新の職務経歴書はメールでお問い合わせください。':'For senior Product Designer and UX Engineer conversations. This résumé preserves the original career record; dates and the PDF reflect the published portfolio, including historical “present” entries.'} <a href={email(ja?'最新の職務経歴書':'Current résumé and experience')}>{ja?'メールで問い合わせる':'Email for my current résumé.'}</a></div>}<div className="nucleotide legacy-case"><Suspense fallback={<p className="case-loader" role="status">{ja?'読み込み中':'Opening'} {title}…</p>}>{children}</Suspense></div><Meta title={title} description={ja&&descriptionJa?descriptionJa:description}/><div className="case-end"><Link className="text-link" to="/projects/">{ja?'その他の事例':'More projects'} <Arrow/></Link><Link className="button" to="/contact/">{ja?'プロジェクトを相談':'Discuss a project'} <Arrow/></Link></div></div><ContactBand/></>}
const cases=[
 ['/projects/mindvault/','MindVault',MindVault,projects[0].detail,'ビジュアル思考に合わせて構成を変えられるワークスペース。ブランド、Webサイト、デザインシステム、共同ノートアプリを制作。'],
 ['/projects/xprize/','XPRIZE',Xprize,projects[1].detail,'賞金型コンテストの運営を支援するUI、ポータル、デザインシステムのエンジニアリング。'],
 ['/projects/yarden/','Yarden',Yarden,projects[2].detail,'顧客体験と社内業務をつなぐプロダクトのデザイン・フロントエンド開発。'],
 ['/projects/tchat/','T-Chat',TChat,projects[3].detail,'リアルタイム翻訳を備えたブラウザベースのチャットプロダクト。'],
 ['/projects/foundry/','Foundry',Foundry,'UI engineering across Foundry’s websites, mining products, staking portal and design systems.','FoundryのWebサイト、マイニング製品、ステーキングポータル、デザインシステムのUIエンジニアリング。'],
 ['/projects/crigenetics/','CRI Genetics',CRIGenetics,'Product design leadership, frontend development and experimentation for a customer-facing genetics product.','顧客向け遺伝子検査プロダクトのデザインリード、フロントエンド開発、実験。'],
 ['/projects/nucleotide/','Nucleotide',Nucleotide,'A token-based design system, CSS framework and component library for CRI Genetics.','CRI Genetics向けに構築したデザイントークン、CSSフレームワーク、コンポーネントライブラリ。'],
 ['/projects/clicktool/','Clicktool',Clicktool,'Creative direction, brand, product design and frontend development for a B2B marketing analytics product.','B2Bマーケティング分析プロダクトのクリエイティブディレクション、ブランド、UI/UX、フロントエンド開発。'],
 ['/projects/covid/','COVID dashboard',Covid,'An archived independent data-visualization project. Data availability depends on the original third-party APIs.','個人制作のデータビジュアライゼーション。データの利用可否は外部APIの状態に依存します。'],
 ['/design-process','Design process',DesignProcess,'How Chuck Howard approaches product discovery, design and implementation.','プロダクトの課題発見からデザイン、実装までの進め方。'],
];
export function Portfolio(){const {lang}=useLanguage();const ja=lang==='ja';return <div className="portfolio" lang={lang}><a className="skip-link" href="#main-content" onClick={e=>{e.preventDefault();document.getElementById('main-content').focus();}}>{ja?'本文へ移動':'Skip to content'}</a><Header/><main id="main-content" tabIndex="-1"><PageMotion><Routes><Route path="/" element={<Home/>}/><Route path="/projects/" element={<WorkPage/>}/><Route path="/services/" element={<Services/>}/><Route path="/contact/" element={<Contact/>}/><Route path="/resume/" element={<Case resume title={ja?'経歴・職務経歴書':'Experience & résumé'} description="Chuck Howard’s product design and UX engineering experience, selected roles and résumé for recruiters and product teams." descriptionJa="プロダクトデザインとUXエンジニアリングの職務経歴、主な担当領域、採用担当者向けの職務経歴書。"><Resume/></Case>}/>{cases.map(([path,title,Component,description,descriptionJa])=><Route key={path} path={path} element={<Case title={title} description={description} descriptionJa={descriptionJa}><Component/></Case>}/>)}<Route path="*" element={<NotFound/>}/></Routes></PageMotion></main><Footer/></div>}
export default function App(){return <HashRouter><LanguageProvider><Portfolio/></LanguageProvider></HashRouter>}
