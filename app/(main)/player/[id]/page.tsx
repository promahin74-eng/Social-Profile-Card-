import type { Metadata } from 'next';
import { GoalZonePage } from '@/components/shared/GoalZonePage';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `Player ${id}`,
    description: 'Player profile with career stats, radar, heatmap, shot accuracy, transfer history and trophies.',
  };
}

export default async function PlayerPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <GoalZonePage page="player" id={id} />;
}
