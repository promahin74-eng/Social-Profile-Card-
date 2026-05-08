import type { Metadata } from 'next';
import { GoalZonePage } from '@/components/shared/GoalZonePage';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: slug.split('-').join(' '),
    description: 'GoalZone football analysis article with related stories and share actions.',
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <GoalZonePage page="article" id={slug} />;
}
