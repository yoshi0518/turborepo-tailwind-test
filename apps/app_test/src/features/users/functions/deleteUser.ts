import { bffApiClient } from '@/libs/bffApi';

/** ユーザーを削除 */
export const deleteUser = async (id: number) => await bffApiClient.api.v1.users._id(id).delete();
