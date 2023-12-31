import { NextResponse } from 'next/server';

import { fakeApiClient } from '@/libs/fakeApi';
import { Author } from '@/libs/fakeApi/@types';

export const GET = async () => {
  const { body, status, headers } = await fakeApiClient.api.v1.Authors.get();
  return NextResponse.json(body, { status, headers });
};

export const POST = async (request: Request) => {
  const data: Author = await request.json();

  const { body, status, headers } = await fakeApiClient.api.v1.Authors.post({ body: data });
  return NextResponse.json(body, { status, headers });
};
