import type { Metadata } from 'next';
import { GoalZonePage } from '@/components/shared/GoalZonePage';

export const metadata: Metadata = {
  title: 'News',
  description: 'Featured football news, category filters, search-ready cards and related stories.',
};

export default function NewsPage() {
  return <GoalZonePage page="news" />;
}
