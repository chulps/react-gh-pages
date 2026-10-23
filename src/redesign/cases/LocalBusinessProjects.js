import React from 'react';
import { Link } from 'react-router-dom';
import { image } from '../content';
import { useLanguage } from '../i18n';
import './local-business-projects.css';

const Arrow = () => <span aria-hidden="true" className="arrow">↗</span>;

export function FxxKupProject() {
  const { lang } = useLanguage();
  const ja = lang === 'ja';
  return <div className="local-study website-study">
    <header className="local-study-hero">
      <div className="local-study-copy">
        <span className="section-label">{ja ? '札幌 · 店舗Webサイト' : 'Sapporo · Hospitality website'}</span>
        <h2>{ja ? <>すすきのの夜を、<br/>行く前から伝える。</> : <>A night in Susukino,<br/>clear before you go.</>}</h2>
        <p>{ja
          ? 'Rock Bar FxxK Upのサイトを、初めて訪れる人にも使いやすい案内場所に。雰囲気、メニュー、料金、行き方をまとめ、日本語・英語など5言語で届けます。'
          : 'A welcoming first stop for Rock Bar FxxK Up. The site brings the atmosphere, menu, cover charge and directions together, with visitor information in five languages.'}</p>
        <a className="button" href="https://rockbarfxxkup.com/" target="_blank" rel="noreferrer">{ja ? '公開サイトを見る' : 'Visit the live website'} <Arrow/></a>
      </div>
      <figure className="local-study-photo">
        <img src={image('case-study/neon-sign-1108.webp')} alt={ja ? '店内で赤く光るRock Bar FxxK Upのネオンサイン' : 'The real red FxxK Up neon sign inside the bar in Susukino'} width="1108" height="832"/>
        <figcaption>{ja ? 'すすきの · 北海道札幌市' : 'Susukino · Sapporo, Japan'}</figcaption>
      </figure>
    </header>
    <section className="local-study-points" aria-label={ja ? 'Webサイトの内容' : 'What the website helps visitors do'}>
      <article><span>01 / {ja ? '見つける' : 'Discover'}</span><h3>{ja ? 'どんなお店か、ひと目で。' : 'Know the atmosphere.'}</h3><p>{ja ? 'ロック音楽、ウイスキー、店内の雰囲気を伝え、初めての来店を後押しします。' : 'The music, whisky and character of the bar come through before someone steps inside.'}</p></article>
      <article><span>02 / {ja ? '確認する' : 'Plan'}</span><h3>{ja ? '営業時間・料金・メニュー。' : 'Get the practical details.'}</h3><p>{ja ? '行く前に知りたい情報とドリンクメニューを整理し、訪問の不安を減らします。' : 'Hours, cover charge, directions and drinks are easy to find when guests are deciding where to go.'}</p></article>
      <article><span>03 / {ja ? 'つながる' : 'Find the way'}</span><h3>{ja ? '言語を選び、道順を見る。' : 'Choose a language. Find the bar.'}</h3><p>{ja ? '日本語・英語を含む5言語の案内とアクセス情報で、地元の方や旅行者をサポートします。' : 'Five-language visitor information and clear directions support local guests and travelers alike.'}</p></article>
    </section>
    <nav className="local-study-next" aria-label={ja ? '関連する事例' : 'Related case studies'}>
      <span>{ja ? '同じ店舗の業務ツール' : 'The operations tool behind the bar'}</span>
      <Link to="/projects/barticket/">BarTicket · {ja ? '毎日の営業と分析' : 'Daily operations & analytics'} <Arrow/></Link>
    </nav>
  </div>;
}

export function BarTicketProject() {
  const { lang } = useLanguage();
  const ja = lang === 'ja';
  const screenshot = ja ? 'case-study/barticket-analytics-ja.webp' : 'case-study/barticket-analytics.webp';
  return <div className="local-study barticket-study">
    <header className="local-study-hero barticket-study-hero">
      <div className="local-study-copy">
        <span className="section-label">{ja ? '札幌 · 店舗向け内部アプリ' : 'Sapporo · Internal operations app'}</span>
        <h2>{ja ? <>その日の営業を記録し、<br/>数字を深く見る。</> : <>Record the shift.<br/>Explore the detail.</>}</h2>
        <p>{ja
          ? 'BarTicketはRock Bar FxxK Upの毎日の業務を記録し、店舗の状況を分析する内部アプリです。スタッフが営業内容を入力し、管理者は日・月・年ごとに数字を確認できます。'
          : 'BarTicket records daily work at Rock Bar FxxK Up and turns it into useful operating insight. Staff log each shift; managers can review patterns by day, month or year.'}</p>
        <a className="button" href="https://chulps.github.io/barticket-frontend/menu" target="_blank" rel="noreferrer">{ja ? '公開メニューを見る' : 'See the public menu'} <Arrow/></a>
      </div>
      <figure className="local-study-screenshot">
        <a href={image(screenshot)} target="_blank" rel="noreferrer" aria-label={ja ? 'BarTicketの分析画面を原寸大で開く' : 'Open the actual BarTicket analytics screenshot full size'}>
          <img src={image(screenshot)} alt={ja ? 'BarTicketの実際の月別分析画面。売上、来店人数、日ごとの売上グラフ。' : 'Actual BarTicket monthly analytics showing revenue, guests and revenue by night.'} width={ja ? 1165 : 2310} height={ja ? 884 : 1757}/>
        </a>
        <figcaption>{ja ? '実際のBarTicket分析画面 · クリックで拡大' : 'Actual BarTicket analytics screen · click to enlarge'}</figcaption>
      </figure>
    </header>
    <section className="local-study-points" aria-label={ja ? 'アプリの機能' : 'What the app does'}>
      <article><span>01 / {ja ? '営業記録' : 'Capture the shift'}</span><h3>{ja ? '日々の仕事を一か所に。' : 'Daily work, in one place.'}</h3><p>{ja ? 'チケット、注文、決済、シフトを記録。営業終了後は売上、現金・カード等の内訳、来店人数、スタッフの勤務時間をまとめて確認できます。' : 'Tickets, orders, payments and shifts are recorded as the night unfolds. Closing a shift brings sales, payment mix, guest counts and staff hours together.'}</p></article>
      <article><span>02 / {ja ? '期間の比較' : 'Compare periods'}</span><h3>{ja ? '日・月・年ごとに見る。' : 'Zoom out or in.'}</h3><p>{ja ? '全期間、年、月、日の表示を切り替え、売上や決済方法、来店人数の変化を確認できます。' : 'Switch between all-time, yearly, monthly and daily views to understand sales, payment mix and guest patterns.'}</p></article>
      <article><span>03 / {ja ? '詳細の確認' : 'Drill into detail'}</span><h3>{ja ? '気になる日から、その営業へ。' : 'Follow a date to its shift.'}</h3><p>{ja ? '日付を選び、担当スタッフ、チケット、注文、在庫切れまで深掘り。集計値を次の運営判断につなげます。' : 'Choose a date to inspect the shift, staff, tickets, orders and stockouts behind the totals.'}</p></article>
    </section>
    <nav className="local-study-next" aria-label={ja ? '関連する事例' : 'Related case studies'}>
      <span>{ja ? 'お客様が来店前に見るサイト' : 'The customer-facing website'}</span>
      <Link to="/projects/fxxkup/">Rock Bar FxxK Up · {ja ? 'Webサイト' : 'Website'} <Arrow/></Link>
    </nav>
  </div>;
}
