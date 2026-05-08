'use client';

import { useQuery } from '@tanstack/react-query';
import { matches } from '@/lib/constants/goalzone-data';

export function useMatches() {
  return useQuery({
    queryKey: ['matches'],
    queryFn: async () => matches,
    refetchInterval: 15000,
  });
}
