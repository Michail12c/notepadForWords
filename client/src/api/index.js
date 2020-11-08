import axios from 'axios';

const config = {
  withCredentials:true,
  headers: {
    'Content-Type': 'application/json',
    'Accept':  'application/json',
    'API-Key': 'secret'
  }
};

const api = axios.create(config);

export const userApi = {

  login(data) {
    return api.post('api/auth/login', data)
      .then(res => res.data)
  },

  register(data) {
   return api.post('api/auth/register/', data)
    .then(res => res.data)
  },

  googleRegister() {
    return api.get('api/auth/google')
     .then(res => res.data)
  },

  getProperty(data) {
    return api.post('api/user/list', data);
  },

  getBaseList() {
   return api.get('api/lesson/list/baseList')
     .then(res => res.data);
  }
};