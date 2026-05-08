import type { Metadata } from 'next';
import { GoalZonePage } from '@/components/shared/GoalZonePage';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `Stadium ${id}`,
    description: 'World Cup stadium profile with hero image, 3D viewer placeholder, weather, map and upcoming matches.',
  };
}

export default async function StadiumPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <GoalZonePage page="stadium" id={id} />;
}
