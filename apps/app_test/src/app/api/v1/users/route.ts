import { NextResponse } from 'next/server';

import { fakeApiClient } from '@/libs/fakeApi';
import { User } from '@/libs/fakeApi/@types';

export const GET = async () => {
  const { body, status, headers } = await fakeApiClient.api.v1.Users.get();
  return NextResponse.json(body, { status, headers });
};

export const POST = async (request: Request) => {
  const data: User = await request.json();

  const { body, status, headers } = await fakeApiClient.api.v1.Users.post({ body: data });
  return NextResponse.json(body, { status, headers });
};
