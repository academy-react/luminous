import axios, { type AxiosError, type AxiosResponse } from "axios";

import { parsedEnv } from "@/core/config/env.config";

const instance = axios.create({
  baseURL: parsedEnv.BASE_API_URL,
});

const onSuccess = (response: AxiosResponse) => {
  return response;
};

const onError = (error: AxiosError) => {
  return Promise.reject(error.response || error.message);
};

instance.interceptors.response.use(onSuccess, onError);

export default instance;
