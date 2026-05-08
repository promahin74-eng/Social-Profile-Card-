export type MatchStatus = 'LIVE' | 'FT' | 'NS';

export type Match = {
  id: string;
  home: string;
  away: string;
  homeCode: string;
  awayCode: string;
  score: string;
  kickoff: string;
  league: string;
  status: MatchStatus;
  minute: string;
  venue: string;
};

export type NewsArticle = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  time: string;
  imageTone: string;
};

export const worldCupStart = '2026-06-11T19:00:00-05:00';

export const matches: Match[] = [
  { id: 'usa-mexico', home: 'United States', away: 'Mexico', homeCode: 'USA', awayCode: 'MEX', score: '2 - 1', kickoff: 'Live now', league: 'World Cup 2026', status: 'LIVE', minute: '68', venue: 'MetLife Stadium' },
  { id: 'argentina-france', home: 'Argentina', away: 'France', homeCode: 'ARG', awayCode: 'FRA', score: '1 - 1', kickoff: 'Live now', league: 'International', status: 'LIVE', minute: '54', venue: 'SoFi Stadium' },
  { id: 'england-brazil', home: 'England', away: 'Brazil', homeCode: 'ENG', awayCode: 'BRA', score: '20:00', kickoff: 'Tonight', league: 'Elite Friendly', status: 'NS', minute: '0', venue: 'AT&T Stadium' },
  { id: 'spain-germany', home: 'Spain', away: 'Germany', homeCode: 'ESP', awayCode: 'GER', score: '3 - 2', kickoff: 'Final', league: 'Nations League', status: 'FT', minute: '90', venue: 'BC Place' },
];

export const events = [
  { minute: '12', type: 'Goal', team: 'United States', player: 'Christian Pulisic', detail: 'right footed finish from the edge of the box' },
  { minute: '31', type: 'Card', team: 'Mexico', player: 'Edson Alvarez', detail: 'late challenge in midfield' },
  { minute: '45+2', type: 'Goal', team: 'Mexico', player: 'Santiago Gimenez', detail: 'header after a driven cross' },
  { minute: '68', type: 'Goal', team: 'United States', player: 'Folarin Balogun', detail: 'breakaway goal after a fast transition' },
];

export const news: NewsArticle[] = [
  { slug: 'world-cup-draw-tactical-trends', category: 'World Cup', title: 'World Cup 2026 draw sets up a new era of tactical chaos', excerpt: 'Expanded groups, transcontinental travel and deeper benches are reshaping tournament strategy.', time: '12 min ago', imageTone: 'green' },
  { slug: 'transfer-window-strikers', category: 'Transfers', title: 'Elite strikers dominate the summer shortlist', excerpt: 'European giants are racing to solve their number nine problem before preseason tours begin.', time: '39 min ago', imageTone: 'blue' },
  { slug: 'premier-league-title-model', category: 'Premier League', title: 'Five data signals that could decide the title race', excerpt: 'Shot quality, rest defense and set pieces have separated the contenders from the chasing pack.', time: '1 hr ago', imageTone: 'gold' },
  { slug: 'ucl-midfield-pressing', category: 'UCL', title: 'The Champions League press has become a midfield chess match', excerpt: 'Coaches are using hybrid eights and inverted fullbacks to protect against direct counters.', time: '2 hrs ago', imageTone: 'red' },
];

export const scorers = [
  { rank: 1, name: 'Kylian Mbappe', club: 'Real Madrid', goals: 31, assists: 9, rating: 8.9 },
  { rank: 2, name: 'Erling Haaland', club: 'Manchester City', goals: 29, assists: 6, rating: 8.6 },
  { rank: 3, name: 'Vinicius Junior', club: 'Real Madrid', goals: 22, assists: 14, rating: 8.5 },
  { rank: 4, name: 'Harry Kane', club: 'Bayern Munich', goals: 28, assists: 8, rating: 8.4 },
];

export const groups = [
  { name: 'Group A', teams: ['Canada', 'Netherlands', 'Senegal', 'Qatar'] },
  { name: 'Group B', teams: ['United States', 'England', 'Japan', 'Ghana'] },
  { name: 'Group C', teams: ['Mexico', 'Argentina', 'Croatia', 'Morocco'] },
  { name: 'Group D', teams: ['Brazil', 'Spain', 'Nigeria', 'Korea Republic'] },
  { name: 'Group E', teams: ['France', 'Germany', 'Uruguay', 'Australia'] },
  { name: 'Group F', teams: ['Portugal', 'Colombia', 'Denmark', 'Egypt'] },
];

export const stadiums = [
  { id: 'metlife', name: 'MetLife Stadium', city: 'New York/New Jersey', country: 'USA', capacity: '82,500', surface: 'Hybrid grass' },
  { id: 'sofi', name: 'SoFi Stadium', city: 'Los Angeles', country: 'USA', capacity: '70,240', surface: 'Modular grass' },
  { id: 'azteca', name: 'Estadio Azteca', city: 'Mexico City', country: 'Mexico', capacity: '87,523', surface: 'Natural grass' },
  { id: 'bc-place', name: 'BC Place', city: 'Vancouver', country: 'Canada', capacity: '54,500', surface: 'Artificial turf' },
];

export const player = {
  id: 'mbappe',
  name: 'Kylian Mbappe',
  nation: 'France',
  club: 'Real Madrid',
  position: 'Forward',
  number: 10,
  stats: [
    ['Goals', '31'],
    ['Assists', '9'],
    ['Appearances', '42'],
    ['Rating', '8.9'],
  ],
};

export const team = {
  id: 'usa',
  name: 'United States',
  country: 'USA',
  league: 'FIFA World Cup 2026',
  form: ['W', 'W', 'D', 'L', 'W'],
  stats: [
    ['Goals per match', '2.1'],
    ['Possession', '57%'],
    ['Clean sheets', '8'],
    ['Press intensity', 'High'],
  ],
};

export const notifications = [
  'Favorite team goal alerts',
  'Match start reminders',
  'Red card alerts',
  'Transfer confirmations',
  'World Cup fixture alerts',
];
