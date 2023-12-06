import http from "@/core/services/interceptor";
import { thirdSignUpInputSchema, type ThirdSignUpInputProps} from "@/core/validators/forms";

export const register = async (credentials: ThirdSignUpInputProps) => {
  const response = await http.post("/Sign/Register", credentials);

  const parsedResult = thirdSignUpInputSchema.safeParse(response.data);

  if (!parsedResult.success) {
    console.log(response.data);
    console.error("error in login.api", parsedResult.error.errors);

    return null;
  }

  return parsedResult.data;
};