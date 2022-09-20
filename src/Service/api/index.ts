import axios, { AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: 'http://api-test.bhut.com.br:3000/api',
  headers: { accept: 'application/json', 'content-type': 'application/json' },
};

const http = axios.create(axiosConfig);

http.interceptors.request.use(function (config) {
  config.headers;
  return config;
});

http.interceptors.response.use(
  response => {
    console.log('success', response);
  },
  error => {
    if (error.response.status === 500) {
      console.log('Falha na comunicação com o servidor');
    }
  },
);

export default http;
