'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Match } from '@/lib/constants/goalzone-data';

export function MatchCard({ match }: { match: Match }) {
  const isLive = match.status === 'LIVE';
  const progress = isLive ? Number(match.minute) : match.status === 'FT' ? 100 : 0;

  return (
    <motion.article whileHover={{ y: -6 }} className={`match-card ${isLive ? 'live' : ''}`}>
      <div className="score-row">
        <span className="badge-pill">{match.league}</span>
        {isLive ? (
          <span className="live-badge"><span className="live-dot" /> LIVE {match.minute}</span>
        ) : (
          <span className="badge-pill">{match.status}</span>
        )}
      </div>
      <Link href={`/match/${match.id}`} aria-label={`Open ${match.home} versus ${match.away}`}>
        <div className="teams-row" style={{ marginTop: '1rem' }}>
          <div className="team-stack">
            <span className="team-crest">{match.homeCode}</span>
            <span>{match.home}</span>
          </div>
          <span className="score">{match.score}</span>
          <div className="team-stack">
            <span className="team-crest">{match.awayCode}</span>
            <span>{match.away}</span>
          </div>
        </div>
      </Link>
      <p className="muted">{match.kickoff} at {match.venue}</p>
      <div className="progress-shell" aria-label="Match minute progress">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>
    </motion.article>
  );
}
