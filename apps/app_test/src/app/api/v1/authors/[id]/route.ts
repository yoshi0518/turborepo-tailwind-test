import { NextResponse } from 'next/server';

import { fakeApiClient } from '@/libs/fakeApi';
import { Author } from '@/libs/fakeApi/@types';

export const GET = async (_: Request, { params }: { params: { id: string } }) => {
  const { body, status, headers } = await fakeApiClient.api.v1.Authors._id(Number(params.id)).get();
  return NextResponse.json(body, { status, headers });
};

export const PUT = async (request: Request, { params }: { params: { id: string } }) => {
  const data: Author = await request.json();

  const { body, status, headers } = await fakeApiClient.api.v1.Authors._id(Number(params.id)).put({ body: data });
  return NextResponse.json(body, { status, headers });
};

export const DELETE = async (_: Request, { params }: { params: { id: string } }) => {
  const { body, status, headers } = await fakeApiClient.api.v1.Authors._id(Number(params.id)).delete();
  return NextResponse.json(body, { status, headers });
};
