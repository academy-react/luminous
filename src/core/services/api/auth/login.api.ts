import http from "@/core/services/interceptor";
import { loginResponseSchema, type SignInInputProps } from "@/core/validators";

export const login = async (credentials: SignInInputProps) => {
  const response = await http.post("/Sign/Login", credentials);

  const parsedResult = loginResponseSchema.safeParse(response.data);

  if (!parsedResult.success) {
    console.error(parsedResult.error);

    return null;
  }

  return parsedResult.data;
};
