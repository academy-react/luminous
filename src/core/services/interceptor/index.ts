"use server";

import axios, { type AxiosError, type AxiosResponse, type InternalAxiosRequestConfig } from "axios";

import { parsedEnv } from "@/core/config/env.config";
import { courseListSchema } from "@/core/validators/api";

const env = parsedEnv();

const instance = axios.create({
  baseURL: env.BASE_API_URL,
});

const onSuccess = (response: AxiosResponse) => {
  return response;
};

const onError = (error: AxiosError) => {
  return Promise.reject(error.response || error.message);
};

instance.interceptors.response.use(onSuccess, onError);
instance.interceptors.request.use((opt) => {
  opt.headers["MessageTest"] = "Hello world!";
  return opt;
});//new

// const requestSchemas = {
//   '/Home/GetCoursesTop': courseListSchema,
  
//  };
 
//  const responseSchemas = {
//   '/Home/GetCoursesTop': courseListSchema,
 
//  };
//  instance.interceptors.request.use((request: InternalAxiosRequestConfig<any>) => {
//   const schema = requestSchemas[request.url as keyof typeof requestSchemas];
 
//   if (schema) {
//     const result = schema.safeParse(request.data);
 
//     if (!result.success) {
//       throw new Error('Request validation failed');
//     }
 
//     request.data = result.data;
//   }
 
//   return request;
//  }, error => {
//   return Promise.reject(error);
//  });
 
//  instance.interceptors.response.use((response: AxiosResponse) => {
//   const schema = responseSchemas[response.config.url as keyof typeof responseSchemas];
 
//   if (schema) {
//     const result = schema.safeParse(response.data);
 
//     if (!result.success) {
//       throw new Error('Response validation failed');
//     }
 
//     response.data = result.data;
//   }
 
//   return response;
//  }, error => {
//   return Promise.reject(error);
// });


export default instance;
