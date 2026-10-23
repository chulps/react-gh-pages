import React, { lazy, Suspense } from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { Header, Footer, PageMotion, Home, WorkPage, Services, Contact, NotFound, Meta, ContactBand, Arrow } from './redesign/Site';
import { email, projects } from './redesign/content';

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
function Case({title,description,children,resume=false}){return <><div className="case-frame"><div className="case-topbar"><Link to="/projects/">← All work</Link><span>{resume?'For product teams':'Product design + engineering'}</span></div><p className="case-description">{description}</p>{resume&&<div className="resume-note">For senior Product Designer and UX Engineer conversations. This résumé preserves the original career record; dates and the PDF reflect the published portfolio, including historical “present” entries. <a href={email('Current résumé and experience')}>Email for my current résumé.</a></div>}<div className="nucleotide legacy-case"><Suspense fallback={<p className="case-loader" role="status">Opening {title}…</p>}>{children}</Suspense></div><Meta title={title} description={description}/><div className="case-end"><Link className="text-link" to="/projects/">More projects <Arrow/></Link><Link className="button" to="/contact/">Discuss a project <Arrow/></Link></div></div><ContactBand/></>}
const cases=[
 ['/projects/mindvault/','MindVault',MindVault,projects[0].detail],
 ['/projects/xprize/','XPRIZE',Xprize,projects[1].detail],
 ['/projects/yarden/','Yarden',Yarden,projects[2].detail],
 ['/projects/tchat/','T-Chat',TChat,projects[3].detail],
 ['/projects/foundry/','Foundry',Foundry,'UI engineering across Foundry’s websites, mining products, staking portal and design systems.'],
 ['/projects/crigenetics/','CRI Genetics',CRIGenetics,'Product design leadership, frontend development and experimentation for a customer-facing genetics product.'],
 ['/projects/nucleotide/','Nucleotide',Nucleotide,'A token-based design system, CSS framework and component library for CRI Genetics.'],
 ['/projects/clicktool/','Clicktool',Clicktool,'Creative direction, brand, product design and frontend development for a B2B marketing analytics product.'],
 ['/projects/covid/','COVID dashboard',Covid,'An archived independent data-visualization project. Data availability depends on the original third-party APIs.'],
 ['/design-process','Design process',DesignProcess,'How Chuck Howard approaches product discovery, design and implementation.'],
];
export function Portfolio(){return <div className="portfolio"><a className="skip-link" href="#main-content" onClick={e=>{e.preventDefault();document.getElementById('main-content').focus();}}>Skip to content</a><Header/><main id="main-content" tabIndex="-1"><PageMotion><Routes><Route path="/" element={<Home/>}/><Route path="/projects/" element={<WorkPage/>}/><Route path="/services/" element={<Services/>}/><Route path="/contact/" element={<Contact/>}/><Route path="/resume/" element={<Case resume title="Experience & résumé" description="Chuck Howard’s product design and UX engineering experience, selected roles and résumé for recruiters and product teams."><Resume/></Case>}/>{cases.map(([path,title,Component,description])=><Route key={path} path={path} element={<Case title={title} description={description}><Component/></Case>}/>)}<Route path="*" element={<NotFound/>}/></Routes></PageMotion></main><Footer/></div>}
export default function App(){return <HashRouter><Portfolio/></HashRouter>}
