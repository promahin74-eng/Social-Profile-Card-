import type { Metadata } from 'next';
import { GoalZonePage } from '@/components/shared/GoalZonePage';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `Team ${id}`,
    description: 'Team banner, current stats, squad, form, fixtures and head-to-head insights.',
  };
}

export default async function TeamPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <GoalZonePage page="team" id={id} />;
}
