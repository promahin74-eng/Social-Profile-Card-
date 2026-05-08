import { NextResponse } from 'next/server';
import { events, matches, scorers } from '@/lib/constants/goalzone-data';

export async function GET() {
  return NextResponse.json(
    { matches, events, scorers, source: 'mock-api-football-v3-proxy' },
    { headers: { 'Cache-Control': 's-maxage=10, stale-while-revalidate=30' } },
  );
}
