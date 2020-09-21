import axios from 'axios';

const config = {
  withCredentials:true,
  headers: {
    'Content-Type': 'application/json',
    'Accept':  'application/json'
  }
};

const api = axios.create(config);

export const userApi = {

  login(data) {
    return api.post('api/auth/login', data);
  },

  register(data) {
   return api.post('api/auth/register/', data);
  },

  getProperty(data) {
    return api.post('api/user/list', data);
  }
};