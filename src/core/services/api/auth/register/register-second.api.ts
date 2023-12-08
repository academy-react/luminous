import http from "@/core/services/interceptor";
import { secondSignUpInputSchema, type SecondSignUpInputProps} from "@/core/validators/forms";

export const verifyMessage = async (credentials: SecondSignUpInputProps) => {
  const response = await http.post("/Sign/VerifyMessage", credentials);

  const parsedResult = secondSignUpInputSchema.safeParse(response.data);

  if (!parsedResult.success) {
    console.log(response.data);
    console.error("error in login.api", parsedResult.error.errors);

    return null;
  }

  return parsedResult.data;
};