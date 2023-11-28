"use server";

import axios, { type AxiosError, type AxiosResponse } from "axios";

import { parsedEnv } from "@/core/config/env.config.mjs";
import { auth } from "@/lib/auth";

const instance = axios.create({
  baseURL: parsedEnv.BASE_API_URL,
});

const onSuccess = (response: AxiosResponse) => {
  return response;
};

const onError = (error: AxiosError) => {
  console.log("error in interceptor response", error);

  return Promise.reject(error.message);
};

instance.interceptors.response.use(onSuccess, onError);

instance.interceptors.request.use(
  async (config) => {
    const session = await auth();
    const token = session?.user.token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    console.log("error in interceptor request", error);

    return Promise.reject((error as AxiosError).message);
  }
);

export default instance;
