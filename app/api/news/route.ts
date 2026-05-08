import { NextResponse } from 'next/server';
import { news } from '@/lib/constants/goalzone-data';

export async function GET() {
  return NextResponse.json(
    { articles: news, source: 'mock-firestore-news' },
    { headers: { 'Cache-Control': 's-maxage=300, stale-while-revalidate=3600' } },
  );
}
