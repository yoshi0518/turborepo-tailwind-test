import aspida from '@aspida/axios';
import axios from 'axios';

import api from './$api';

import { fakeApiUrlEnv } from '@/config';

export const fakeApiClient = api(aspida(axios, { baseURL: fakeApiUrlEnv }));
