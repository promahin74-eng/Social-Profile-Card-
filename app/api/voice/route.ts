import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    styles: ['Neutral', 'Hype', 'Analytical'],
    provider: 'Web Speech API client runtime',
  });
}
