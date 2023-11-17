"use server";

import axios, { AxiosRequestConfig, type AxiosError, type AxiosResponse, type InternalAxiosRequestConfig } from "axios";

import { parsedEnv } from "@/core/config/env.config";
import { courseListSchema } from "@/core/validators/api";
import { type Course } from "./types";

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
// interface MyRequestConfig extends AxiosRequestConfig {
//   data?: Course[] ;
//  }
//  interface MyResponseConfig extends AxiosResponse {
//   data: Course[];
//  }

// interface MySchemas {
//   '/Home/GetCoursesTop': typeof courseListSchema;
//   // Add other URLs here...
// }

// const requestSchemas = {
//   '/Home/GetCoursesTop': courseListSchema,
  
//  };
 
//  const responseSchemas = {
//   '/Home/GetCoursesTop': courseListSchema,
 
//  };
//  instance.interceptors.request.use((request: InternalAxiosRequestConfig) => {
//   const myRequest = request as MyRequestConfig;
//   const schema = requestSchemas[myRequest.url as keyof MySchemas];
 
//   if (schema) {
//     const result = schema.safeParse(myRequest.data);
//     console.log(result)
 
//     if (!result.success) {
//       throw new Error('Request validation failed');
//     }
 
//     myRequest.data = result.data;
//   }
 
//   return request;
//  }, error => {
//   return Promise.reject(error);
//  });
 
//  instance.interceptors.response.use((response: AxiosResponse) => {
//   const MyResponse = response as MyResponseConfig;
//   const schema = responseSchemas[MyResponse.config.url as keyof MySchemas];
 
//   if (schema) {
//     const result = schema.safeParse(MyResponse.data);
 
//     if (!result.success) {
//       throw new Error('Response validation failed');
//     }
 
//     MyResponse.data = result.data;
//   }
 
//   return response;
//  }, error => {
//   return Promise.reject(error);
// });


export default instance;