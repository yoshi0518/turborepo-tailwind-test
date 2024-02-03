import axios from 'axios';

import { UserType } from '../types';

/** ユーザー一覧を取得 */
export const readUsers = async () => {
  const response = await axios.get<UserType[]>('http://localhost:3000/api/users');
  return response.data;
};
