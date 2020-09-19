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
  auth(data) {
    return api.post('auth/', data);
  },
  register(data) {
   return api.post('register/', data);
  }
};