import type { Metadata } from 'next';
import { GoalZonePage } from '@/components/shared/GoalZonePage';

export const metadata: Metadata = {
  title: 'Profile',
  description: 'Avatar, display name, favorites, notification settings, watchlist and account upgrade flow.',
};

export default function ProfilePage() {
  return <GoalZonePage page="profile" />;
}
