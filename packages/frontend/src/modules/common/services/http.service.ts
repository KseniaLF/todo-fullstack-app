import axios, { AxiosResponse } from 'axios';

type AxiosRequestConfig = {
  data?: any;
  url: string;
  headers?: {};
};

export class HttpService {
  private baseUrl: string | undefined;

  constructor(baseUrl = 'http://localhost:4200') {
    this.baseUrl = baseUrl;
  }

  private getFullApiUrl(url: string) {
    return `${this.baseUrl}/api/${url}`;
  }

  private addAuthHeader(config: AxiosRequestConfig) {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: token
      };
    }
  }

  private async request(
    method: 'get' | 'delete' | 'put' | 'post',
    config: AxiosRequestConfig,
    withAuth = true
  ): Promise<AxiosResponse> {
    if (withAuth) this.addAuthHeader(config);

    return axios[method](this.getFullApiUrl(config.url), config.data, {
      ...config,
      headers: { ...config.headers }
    });
  }

  get(config: AxiosRequestConfig, withAuth = true) {
    return this.request('get', config, withAuth);
  }

  delete(config: AxiosRequestConfig, withAuth = true) {
    return this.request('delete', config, withAuth);
  }

  post(config: AxiosRequestConfig, withAuth = true) {
    return this.request('post', config, withAuth);
  }

  put(config: AxiosRequestConfig, withAuth = true) {
    return this.request('put', config, withAuth);
  }
}
