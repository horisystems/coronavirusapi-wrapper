import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: "https://api.covid19api.dev",
});

let token: string;

export const setToken = (t: string): void => {
  token = t;
};

instance.interceptors.request.use(async (config: AxiosRequestConfig) => {
  if (token) {
    config.headers = { ...config.headers, Authorization: `Bearer ${token}` };
  }
  return config;
});

export default instance;
