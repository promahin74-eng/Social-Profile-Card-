import type { Metadata } from 'next';
import { GoalZonePage } from '@/components/shared/GoalZonePage';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `Match ${id}`,
    description: 'Live score header, timeline, stats, lineup, commentary, chat, polls and voice commentary controls.',
  };
}

export default async function MatchPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <GoalZonePage page="match" id={id} />;
}
