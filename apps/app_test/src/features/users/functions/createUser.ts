import { bffApiClient } from '@/libs/bffApi';
import type { User } from '@/libs/fakeApi/@types';

/** ユーザーを登録 */
export const createUser = async (body: User) => await bffApiClient.api.v1.users.post({ body });
