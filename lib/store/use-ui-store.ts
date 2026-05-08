'use client';

import { create } from 'zustand';

type Theme = 'dark' | 'light';

type UIStore = {
  theme: Theme;
  chatOpen: boolean;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  toggleChat: () => void;
};

export const useUIStore = create<UIStore>((set) => ({
  theme: 'dark',
  chatOpen: false,
  setTheme: (theme) => set({ theme }),
  toggleTheme: () => set((state) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),
  toggleChat: () => set((state) => ({ chatOpen: !state.chatOpen })),
}));
