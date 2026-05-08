import type { Metadata } from 'next';
import { GoalZonePage } from '@/components/shared/GoalZonePage';

export const metadata: Metadata = {
  title: 'Live Matches',
  description: 'Realtime live scores, goal alerts, match event feeds, fan chat and polls.',
};

export default function LivePage() {
  return <GoalZonePage page="live" />;
}
