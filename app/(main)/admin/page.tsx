import type { Metadata } from 'next';
import { GoalZonePage } from '@/components/shared/GoalZonePage';

export const metadata: Metadata = {
  title: 'Admin',
  description: 'Protected GoalZone operations dashboard for content, scores, notifications, moderation, polls and analytics.',
};

export default function AdminPage() {
  return <GoalZonePage page="admin" />;
}
