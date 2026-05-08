'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChatBot } from '@/components/ai/ChatBot';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { MatchCard } from '@/components/match/MatchCard';
import { NewsCard } from '@/components/news/NewsCard';
import { Countdown } from '@/components/shared/Countdown';
import { groups, matches, news, notifications, player, scorers, stadiums, team, events } from '@/lib/constants/goalzone-data';
import { useMatches } from '@/lib/hooks/useMatches';
import { clampPercent } from '@/lib/utils/formatters';

type GoalZonePageProps = {
  page: 'home' | 'live' | 'match' | 'news' | 'article' | 'worldcup' | 'stadium' | 'player' | 'team' | 'profile' | 'admin';
  id?: string;
};

const statRows = [
  ['Possession', 57, 43],
  ['Shots', 14, 9],
  ['Pass accuracy', 89, 84],
  ['Corners', 7, 4],
  ['Expected goals', 2.1, 1.4],
];

const navTitle: Record<GoalZonePageProps['page'], string> = {
  home: 'World Cup Starts In',
  live: 'Live Match Center',
  match: 'Match Intelligence',
  news: 'Football Newsroom',
  article: 'Tactical Briefing',
  worldcup: 'FIFA World Cup 2026 Hub',
  stadium: 'World Cup Stadium',
  player: 'Player Profile',
  team: 'Team Command Center',
  profile: 'Your GoalZone Profile',
  admin: 'Admin Operations',
};

function Section({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section className="section-block">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="badge-pill">{eyebrow}</span>
            <h2>{title}</h2>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}

function HomeHero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="kicker">FIFA World Cup 2026 command center</span>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.08 }} className="hero-logo" aria-label="FIFA World Cup 2026 badge">
          <span>WC 2026</span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.12 }}>World Cup Starts In</motion.h1>
        <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.18 }}>48 Teams. 104 Matches. One Dream. Follow every fixture, live event, tactical trend and fan reaction from a single premium football cockpit.</motion.p>
        <Countdown />
        <div className="cta-row">
          <Link className="glass-button" href="/worldcup">View Fixtures</Link>
          <Link className="ghost-button" href="/live">Live Matches</Link>
        </div>
      </div>
    </section>
  );
}

function MatchRail() {
  const { data, isLoading } = useMatches();
  const rows = data ?? matches;

  return (
    <div className="match-grid" aria-busy={isLoading}>
      {isLoading ? Array.from({ length: 4 }).map((_, index) => <div className="match-card skeleton" key={index} />) : rows.map((match) => <MatchCard key={match.id} match={match} />)}
    </div>
  );
}

function LiveCenter() {
  return (
    <div className="page-layout">
      <div className="page-section">
        <div className="section-panel">
          <div className="inline-row">
            <span className="live-badge"><span className="live-dot" /> Goal alert</span>
            <strong>Balogun puts United States ahead at 68 minutes</strong>
          </div>
          <p className="card-copy">This mock alert mirrors the Firebase Realtime Database event stream and auto-dismiss behavior planned for production.</p>
        </div>
        <div className="section-panel">
          <h2>Live event feed</h2>
          <div className="timeline">
            {events.map((event) => (
              <motion.div className="timeline-row" key={`${event.minute}-${event.player}`} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}>
                <span className="timeline-minute">{event.minute} min</span>
                <div>
                  <strong>{event.type}: {event.player}</strong>
                  <p className="muted">{event.team} — {event.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <aside className="page-section">
        <FanPoll />
        <FanChat />
      </aside>
    </div>
  );
}

function FanChat() {
  return (
    <div className="section-panel">
      <span className="badge-pill">Fan chat</span>
      <div className="chat-message">Ava: The high press changed everything.</div>
      <div className="chat-message">Noah: Mexico need a second runner behind the line.</div>
      <div className="chat-message">Typing indicator active for two supporters</div>
      <input className="chat-input" aria-label="Fan chat message" placeholder="Join the live room" />
    </div>
  );
}

function FanPoll() {
  return (
    <div className="section-panel">
      <span className="badge-pill">Live poll</span>
      <h2>Who will win?</h2>
      {[
        ['United States', 51],
        ['Mexico', 33],
        ['Draw', 16],
      ].map(([label, value]) => (
        <div key={label as string} style={{ marginTop: '0.9rem' }}>
          <div className="score-row"><strong>{label}</strong><span>{value}%</span></div>
          <div className="progress-shell"><div className="progress-fill" style={{ width: `${value}%` }} /></div>
        </div>
      ))}
    </div>
  );
}

function MatchDetail() {
  return (
    <div className="page-layout">
      <div className="page-section">
        <div className="section-panel">
          <div className="teams-row">
            <div className="team-stack"><span className="team-crest">USA</span><strong>United States</strong></div>
            <span className="score">2 - 1</span>
            <div className="team-stack"><span className="team-crest">MEX</span><strong>Mexico</strong></div>
          </div>
          <div className="inline-row" style={{ justifyContent: 'center', marginTop: '1rem' }}>
            <span className="live-badge"><span className="live-dot" /> 68 minutes</span>
            <span className="badge-pill">World Cup 2026 Group B</span>
          </div>
        </div>
        <div className="section-panel">
          <h2>Match stats</h2>
          {statRows.map(([label, home, away]) => (
            <div key={label as string} style={{ marginTop: '1rem' }}>
              <div className="score-row"><strong>{home}</strong><span>{label}</span><strong>{away}</strong></div>
              <div className="progress-shell"><div className="progress-fill" style={{ width: `${clampPercent(Number(home))}%` }} /></div>
            </div>
          ))}
        </div>
        <Pitch />
      </div>
      <aside className="page-section">
        <LiveCenter />
      </aside>
    </div>
  );
}

function Pitch() {
  const positions = [
    ['GK', 8, 50], ['RB', 25, 20], ['CB', 24, 42], ['CB', 24, 62], ['LB', 25, 82],
    ['DM', 44, 50], ['RW', 58, 22], ['AM', 62, 50], ['LW', 58, 78], ['ST', 78, 42], ['ST', 80, 62],
  ];

  return (
    <div className="section-panel">
      <h2>Live lineup pitch</h2>
      <div className="pitch" aria-label="Interactive pitch lineup">
        {positions.map(([label, left, top]) => (
          <button className="player-dot" key={label as string} type="button" style={{ left: `${left}%`, top: `${top}%` }} aria-label={`${label} player stat card`}>
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

function Newsroom({ articleOnly = false }: { articleOnly?: boolean }) {
  const article = news[0];

  if (articleOnly) {
    return (
      <div className="page-layout">
        <article className="section-panel">
          <span className="badge-pill">{article.category}</span>
          <h2>{article.title}</h2>
          <p className="page-lead">{article.excerpt}</p>
          <p className="card-copy">GoalZone article pages include Open Graph metadata, related articles, share actions and responsive long-form reading layouts. Production data can flow through Firestore or a CMS-backed news API route.</p>
          <div className="cta-row"><button className="chip" type="button">Share article</button><Link className="chip" href="/news">Related articles</Link></div>
        </article>
        <aside className="page-section">{news.slice(1).map((item) => <NewsCard key={item.slug} article={item} />)}</aside>
      </div>
    );
  }

  return (
    <>
      <div className="filter-row" style={{ marginBottom: '1rem' }}>
        {['All', 'World Cup', 'UCL', 'Premier League', 'La Liga', 'Transfers'].map((category) => <button className="chip" key={category} type="button">{category}</button>)}
      </div>
      <div className="card-grid">
        {news.map((articleItem, index) => <NewsCard key={articleItem.slug} article={articleItem} featured={index === 0} />)}
      </div>
    </>
  );
}

function WorldCupHub() {
  return (
    <div className="page-section">
      <div className="card-grid">
        {groups.map((group) => (
          <div className="glass-card" key={group.name}>
            <h3>{group.name}</h3>
            {group.teams.map((name, index) => <div className="squad-row" key={name}><span className="rank">{index + 1}</span><strong>{name}</strong><span className="muted">0 pts</span></div>)}
          </div>
        ))}
      </div>
      <div className="section-panel">
        <h2>Knockout bracket</h2>
        <div className="card-grid">
          {['Round of 32', 'Round of 16', 'Quarterfinals', 'Semifinals', 'Final'].map((round) => <div className="stat-card" key={round}><strong>{round}</strong><span className="muted">Live bracket slot</span></div>)}
        </div>
      </div>
      <div className="card-grid">
        {stadiums.map((stadiumItem) => <StadiumCard key={stadiumItem.id} id={stadiumItem.id} />)}
      </div>
    </div>
  );
}

function StadiumCard({ id }: { id: string }) {
  const stadium = stadiums.find((item) => item.id === id) ?? stadiums[0];
  return (
    <Link className="glass-card" href={`/worldcup/stadium/${stadium.id}`}>
      <div className="stadium-visual">{stadium.country}</div>
      <h3>{stadium.name}</h3>
      <p className="muted">{stadium.city} · {stadium.capacity} seats · {stadium.surface}</p>
    </Link>
  );
}

function StadiumDetail({ id }: { id?: string }) {
  const stadium = stadiums.find((item) => item.id === id) ?? stadiums[0];
  return (
    <div className="page-layout">
      <div className="section-panel">
        <div className="stadium-visual" style={{ minHeight: 360 }}>{stadium.name}</div>
        <h2>{stadium.city}</h2>
        <p className="page-lead">Capacity {stadium.capacity}. Surface type {stadium.surface}. Weather widget and map embed are ready for Open-Meteo and Google Maps API keys.</p>
      </div>
      <aside className="page-section">
        <div className="glass-card"><h3>Upcoming matches</h3><MatchCard match={matches[0]} /></div>
        <div className="glass-card"><h3>3D viewer</h3><p className="muted">Three.js-ready stadium preview placeholder.</p></div>
      </aside>
    </div>
  );
}

function PlayerProfile() {
  return (
    <div className="page-layout">
      <div className="section-panel">
        <div className="player-visual">{player.number}</div>
        <h2>{player.name}</h2>
        <p className="page-lead">{player.nation} · {player.club} · {player.position}</p>
        <div className="stat-grid">{player.stats.map(([label, value]) => <div className="stat-card" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
      </div>
      <aside className="page-section">
        <div className="glass-card"><h3>Radar chart</h3><p className="muted">Pace, finishing, creation, pressing and availability visualized for scouting context.</p></div>
        <div className="glass-card"><h3>Transfer timeline</h3><p className="muted">Monaco to Paris to Madrid with trophies and match ratings.</p></div>
      </aside>
    </div>
  );
}

function TeamProfile() {
  return (
    <div className="page-layout">
      <div className="section-panel">
        <div className="team-crest" style={{ width: 96, height: 96 }}>USA</div>
        <h2>{team.name}</h2>
        <p className="page-lead">{team.country} · {team.league}</p>
        <div className="stat-grid">{team.stats.map(([label, value]) => <div className="stat-card" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
      </div>
      <aside className="section-panel">
        <h2>Recent form</h2>
        <div className="cta-row">{team.form.map((item, index) => <span className="rank" key={`${item}-${index}`}>{item}</span>)}</div>
      </aside>
    </div>
  );
}

function UserProfile() {
  return (
    <div className="profile-grid card-grid">
      <div className="section-panel"><h2>Account</h2><input className="chat-input" aria-label="Display name" defaultValue="GoalZone Guest" /><button className="glass-button" type="button">Upgrade guest account</button></div>
      <div className="section-panel"><h2>Notifications</h2>{notifications.map((item) => <div className="notification-row" key={item}><span className="rank">On</span><strong>{item}</strong><button className="chip" type="button">Toggle</button></div>)}</div>
      <div className="section-panel"><h2>Watchlist</h2><MatchCard match={matches[0]} /></div>
    </div>
  );
}

function AdminPanel() {
  return (
    <div className="admin-grid card-grid">
      {['News management', 'Score override', 'Push broadcaster', 'Chat moderation', 'Poll management', 'Analytics dashboard'].map((item) => <div className="glass-card" key={item}><span className="badge-pill">Protected</span><h3>{item}</h3><p className="muted">Requires Firebase Auth admin role in Firestore before production access.</p></div>)}
    </div>
  );
}

function TopScorers() {
  return (
    <div className="section-panel">
      <div className="inline-row" style={{ justifyContent: 'space-between' }}><h2>Top scorers</h2><div className="filter-row"><button className="chip" type="button">Goals</button><button className="chip" type="button">Assists</button><button className="chip" type="button">Rating</button></div></div>
      {scorers.map((item) => <div className="scorer-row" key={item.name}><span className="rank">{item.rank}</span><div><strong>{item.name}</strong><p className="muted">{item.club}</p></div><strong>{item.goals} G</strong></div>)}
    </div>
  );
}

function PageBody({ page, id }: GoalZonePageProps) {
  if (page === 'home') {
    return (
      <>
        <HomeHero />
        <Section eyebrow="Today" title="Today&apos;s matches"><MatchRail /></Section>
        <Section eyebrow="Realtime" title="Live matches"><LiveCenter /></Section>
        <Section eyebrow="News" title="Trending football news"><Newsroom /></Section>
        <Section eyebrow="Featured" title="Upcoming big matches"><MatchRail /></Section>
        <Section eyebrow="Leaders" title="Top scorers widget"><TopScorers /></Section>
      </>
    );
  }

  const content = {
    live: <LiveCenter />,
    match: <MatchDetail />,
    news: <Newsroom />,
    article: <Newsroom articleOnly />,
    worldcup: <WorldCupHub />,
    stadium: <StadiumDetail id={id} />,
    player: <PlayerProfile />,
    team: <TeamProfile />,
    profile: <UserProfile />,
    admin: <AdminPanel />,
  }[page];

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="kicker">GoalZone premium football platform</span>
          <h1 className="page-title">{navTitle[page]}</h1>
          <p className="page-lead">A production-ready interface layer for live football data, fan experiences, tournament storytelling and AI-powered analysis.</p>
        </div>
      </section>
      <section className="section-block"><div className="container">{content}</div></section>
    </main>
  );
}

export function GoalZonePage(props: GoalZonePageProps) {
  return (
    <div className="page-shell">
      <Navbar />
      <PageBody {...props} />
      <Footer />
      <ChatBot />
    </div>
  );
}
