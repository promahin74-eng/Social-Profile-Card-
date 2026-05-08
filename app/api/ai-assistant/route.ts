import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => ({ prompt: '' }))) as { prompt?: string };
  const prompt = body.prompt?.trim() || 'Who will win tonight?';

  return NextResponse.json({
    prompt,
    model: 'gpt-4o-placeholder',
    answer: 'GoalZone projects the match through team form, rest, injuries, pressing intensity and xG trend. Connect OPENAI_API_KEY to enable live AI analysis.',
  });
}
