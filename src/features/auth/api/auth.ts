import { axios } from '../../../shared/api/api';

export const authApi = {
  login: async (credentials: unknown) => {
    const { data } = await axios.post('/auth/login', credentials);
    return data;
  },
  signup: async (userData: unknown) => {
    const { data } = await axios.post('/auth/signup', userData);
    return data;
  },
  logout: async () => {
    const { data } = await axios.post('/auth/logout');
    return data;
  },
  refresh: async () => {
    const { data } = await axios.post('/auth/refresh');
    return data;
  },
};
