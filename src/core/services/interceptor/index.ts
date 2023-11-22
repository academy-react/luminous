"use server";

import axios, { type AxiosError, type AxiosResponse } from "axios";

import { parsedEnv } from "@/core/config/env.config";

const env = parsedEnv();

const instance = axios.create({
  baseURL: env.BASE_API_URL,
});

const onSuccess = (response: AxiosResponse) => {
  return response;
};

const onError = (error: AxiosError) => {
  console.log("error in interceptor", error);

  return Promise.reject(error.message);
};

instance.interceptors.response.use(onSuccess, onError);

export default instance;
