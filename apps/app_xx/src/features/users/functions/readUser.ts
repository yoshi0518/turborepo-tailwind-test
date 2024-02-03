import axios from 'axios';

import { UserType } from '../types';

/** ユーザーを取得 */
export const readUser = async (id: string) => {
  const response = await axios.get<UserType>(`http://localhost:3000/api/users/${id}`);
  return response.data;
};
