import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Header, Footer, PageMotion, Home, WorkPage, Services, Contact, NotFound, Meta, ContactBand, Arrow } from './redesign/Site';
import { email, projects } from './redesign/content';
import { LanguageProvider } from './redesign/i18n';
import { useLanguage } from './redesign/i18n';
import { FxxKupProject, BarTicketProject } from './redesign/cases/LocalBusinessProjects';
import Analytics from './redesign/Analytics';

const MindVault=lazy(()=>import('./COMPONENTS/PAGES/MINDVAULT/MindVault'));
const Xprize=lazy(()=>import('./COMPONENTS/PAGES/XPRIZE/Xprize'));
const Yarden=lazy(()=>import('./COMPONENTS/PAGES/YARDEN/Yarden'));
const Foundry=lazy(()=>import('./COMPONENTS/PAGES/FOUNDRY/Foundry'));
const CRIGenetics=lazy(()=>import('./COMPONENTS/PAGES/CRIGENETICS/CRIGenetics'));
const Nucleotide=lazy(()=>import('./COMPONENTS/PAGES/NUCLEOTIDE/Nucleotide'));
const Clicktool=lazy(()=>import('./COMPONENTS/PAGES/CLICKTOOL/Clicktool'));
const Comett=lazy(()=>import('./COMPONENTS/PAGES/TCHAT/TChat'));
const Covid=lazy(()=>import('./COMPONENTS/PAGES/COVID/Covid'));
const Resume=lazy(()=>import('./COMPONENTS/PAGES/RESUME/Resume'));
const DesignProcess=lazy(()=>import('./COMPONENTS/PAGES/DESIGN-PROCESS/DesignProcess'));
function Case({title,description,descriptionJa,children,resume=false}){const {lang}=useLanguage();const ja=lang==='ja';const comett=title==='Comett';const localBusiness=title==='FxxK Up website'||title==='BarTicket';return <><div className={`case-frame${comett?' comett-case-frame':''}`}><div className="case-topbar"><Link to="/projects/">← {ja?'制作事例一覧':'All work'}</Link><span>{resume?(ja?'プロダクトチーム・採用担当者向け':'For product teams'):(ja?'プロダクトデザイン・エンジニアリング':'Product design + engineering')}</span></div><p className="case-description">{ja&&descriptionJa?descriptionJa:description}</p>{ja&&!comett&&!localBusiness&&<p className="case-language-note" lang="ja">{resume?'職務経歴の詳細は英語で記載しています。':'以下の詳細な制作記録は英語で記載しています。上記に日本語の概要を掲載しています。'}</p>}{resume&&<div className="resume-note">{ja?'2026年9月よりTunabearでBusiness Developerとして勤務。これまでのプロダクトデザイン、フロントエンド開発の経験も掲載しています。':'Currently a Business Developer at Tunabear since September 2026, alongside selected earlier product design and frontend roles.'} <a href={email(ja?'最新の職務経歴書':'Current résumé and experience')}>{ja?'メールで問い合わせる':'Email for my current résumé.'}</a></div>}<div className={localBusiness?'local-case-container':'nucleotide legacy-case'}><Suspense fallback={<p className="case-loader" role="status">{ja?'読み込み中':'Opening'} {title}…</p>}>{children}</Suspense></div><Meta title={title} description={ja&&descriptionJa?descriptionJa:description}/><div className="case-end"><Link className="text-link" to="/projects/">{ja?'その他の事例':'More projects'} <Arrow/></Link><Link className="button" to="/contact/">{ja?'プロジェクトを相談':'Discuss a project'} <Arrow/></Link></div></div><ContactBand/></>}
const cases=[
 ['/projects/mindvault/','M9000',MindVault,projects[0].detail,'ビジュアル思考に合わせて構成を変えられるワークスペース。ブランド、Webサイト、デザインシステム、共同ノートアプリを制作。'],
 ['/projects/xprize/','XPRIZE',Xprize,projects[1].detail,'賞金型コンテストの運営を支援するUI、ポータル、デザインシステムのエンジニアリング。'],
 ['/projects/yarden/','Yarden',Yarden,projects[2].detail,'顧客体験と社内業務をつなぐプロダクトのデザイン・フロントエンド開発。'],
 ['/projects/comett/','Comett',Comett,projects[3].detail,'多言語チャット、翻訳字幕付きビデオ通話、アカウントで続ける会話を備えた、Tunabearと開発中のコミュニケーションプロダクト。'],
 ['/projects/fxxkup/','FxxK Up website',FxxKupProject,'A multilingual customer website for Rock Bar FxxK Up in Susukino, with the atmosphere, menu, visitor information and directions in one place.','すすきののRock Bar FxxK UpのWebサイト。雰囲気、メニュー、店舗情報、アクセスを5言語で案内。'],
 ['/projects/barticket/','BarTicket',BarTicketProject,'An internal operations app for recording tickets, orders, payments and shifts, then exploring sales, guest counts and shift details.','チケット、注文、決済、シフトを記録し、売上・来店人数・営業内容を分析する店舗向け内部アプリ。'],
 ['/projects/foundry/','Foundry',Foundry,'UI engineering across Foundry’s websites, mining products, staking portal and design systems.','FoundryのWebサイト、マイニング製品、ステーキングポータル、デザインシステムのUIエンジニアリング。'],
 ['/projects/crigenetics/','CRI Genetics',CRIGenetics,'Product design leadership, frontend development and experimentation for a customer-facing genetics product.','顧客向け遺伝子検査プロダクトのデザインリード、フロントエンド開発、実験。'],
 ['/projects/nucleotide/','Nucleotide',Nucleotide,'A token-based design system, CSS framework and component library for CRI Genetics.','CRI Genetics向けに構築したデザイントークン、CSSフレームワーク、コンポーネントライブラリ。'],
 ['/projects/clicktool/','Clicktool',Clicktool,'Creative direction, brand, product design and frontend development for a B2B marketing analytics product.','B2Bマーケティング分析プロダクトのクリエイティブディレクション、ブランド、UI/UX、フロントエンド開発。'],
 ['/projects/covid/','COVID dashboard',Covid,'An archived independent data-visualization project. Data availability depends on the original third-party APIs.','個人制作のデータビジュアライゼーション。データの利用可否は外部APIの状態に依存します。'],
 ['/design-process','Design process',DesignProcess,'How Chuck Howard approaches product discovery, design and implementation.','プロダクトの課題発見からデザイン、実装までの進め方。'],
];
export const indexableRoutes=['/','/services/','/projects/','/contact/','/resume/',...cases.filter(([path])=>path!=='/projects/covid/').map(([path])=>path.endsWith('/')?path:`${path}/`)];
export function Portfolio(){const {lang}=useLanguage();const ja=lang==='ja';return <div className="portfolio" lang={lang}><Analytics/><Header/><main id="main-content" tabIndex="-1"><PageMotion><Routes><Route path="/" element={<Home/>}/><Route path="/projects/" element={<WorkPage/>}/><Route path="/services/" element={<Services/>}/><Route path="/contact/" element={<Contact/>}/><Route path="/resume/" element={<Case resume title={ja?'経歴・職務経歴書':'Experience & résumé'} description="Chuck Howard is a Business Developer at Tunabear with experience in product design, UX, product discovery and frontend engineering." descriptionJa="2026年9月よりTunabearでBusiness Developerとして勤務。プロダクトデザイン、UX、プロダクト発見、フロントエンド開発の経験。"><Resume/></Case>}/>{cases.map(([path,title,Component,description,descriptionJa])=><Route key={path} path={path} element={<Case title={title} description={description} descriptionJa={descriptionJa}><Component/></Case>}/>)}<Route path="*" element={<NotFound/>}/></Routes></PageMotion></main><Footer/></div>}
function LegacyHashRedirect(){const navigate=useNavigate();React.useEffect(()=>{const value=window.location.hash.slice(1);if(!value.startsWith('/'))return;const split=value.indexOf('?');const pathname=split<0?value:value.slice(0,split);const search=split<0?window.location.search:value.slice(split);navigate({pathname,search},{replace:true});},[navigate]);return null;}
export default function App(){const publicPath=new URL(process.env.PUBLIC_URL||'/',window.location.origin).pathname.replace(/\/$/,'');const japanesePath=window.location.pathname===`${publicPath}/ja`||window.location.pathname.startsWith(`${publicPath}/ja/`);const basename=process.env.NODE_ENV==='test'?'':`${publicPath}${japanesePath?'/ja':''}`;return <BrowserRouter basename={basename||undefined}><LegacyHashRedirect/><LanguageProvider><Portfolio/></LanguageProvider></BrowserRouter>}
