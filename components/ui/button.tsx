import { ButtonHTMLAttributes } from 'react';
import { cx } from '@/lib/utils/formatters';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost' | 'chip';
};

export function Button({ className, variant = 'primary', ...props }: ButtonProps) {
  const variantClass = variant === 'primary' ? 'glass-button' : variant === 'ghost' ? 'ghost-button' : 'chip';
  return <button className={cx(variantClass, className)} {...props} />;
}
