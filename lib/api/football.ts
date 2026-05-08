import { matches } from '@/lib/constants/goalzone-data';

export async function getLiveMatches() {
  return matches.filter((match) => match.status === 'LIVE');
}
