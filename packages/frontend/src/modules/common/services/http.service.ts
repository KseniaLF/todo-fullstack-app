import axios, { AxiosResponse } from 'axios';
import { APP_KEYS } from '../consts';

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
    const token = localStorage.getItem(APP_KEYS.STORAGE_KEYS.TOKEN);
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`
      };
    }
    return config;
  }

  private async request(
    method: 'put' | 'post' | 'patch',
    config: AxiosRequestConfig,
    withAuth = true
  ): Promise<AxiosResponse> {
    if (withAuth) this.addAuthHeader(config);
    return axios[method](this.getFullApiUrl(config.url), config.data, config);
  }

  get(config: AxiosRequestConfig, withAuth = true) {
    if (withAuth) this.addAuthHeader(config);
    return axios.get(this.getFullApiUrl(config.url), config);
  }

  delete(config: AxiosRequestConfig, withAuth = true) {
    if (withAuth) this.addAuthHeader(config);
    return axios.delete(this.getFullApiUrl(config.url), config);
  }

  post(config: AxiosRequestConfig, withAuth = true) {
    return this.request('post', config, withAuth);
  }

  put(config: AxiosRequestConfig, withAuth = true) {
    return this.request('put', config, withAuth);
  }

  patch(config: AxiosRequestConfig, withAuth = true) {
    return this.request('patch', config, withAuth);
  }
}
