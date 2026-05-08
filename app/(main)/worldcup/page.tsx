import type { Metadata } from 'next';
import { GoalZonePage } from '@/components/shared/GoalZonePage';

export const metadata: Metadata = {
  title: 'FIFA World Cup 2026 Hub',
  description: 'Groups, bracket, fixtures, squads, stadiums, host countries and tournament countdown.',
};

export default function WorldCupPage() {
  return <GoalZonePage page="worldcup" />;
}
