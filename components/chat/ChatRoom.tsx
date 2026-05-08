import { ReactNode } from 'react';

export function ChatRoom({ children }: { children: ReactNode }) {
  return <div className="section-panel">{children}</div>;
}
