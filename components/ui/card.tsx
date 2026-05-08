import { HTMLAttributes } from 'react';
import { cx } from '@/lib/utils/formatters';

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cx('glass-card', className)} {...props} />;
}
