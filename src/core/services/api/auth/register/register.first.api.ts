import http from "@/core/services/interceptor";
import { firstSignUpInputSchema, type FirstSignUpInputProps} from "@/core/validators/forms";

export const sendVerifyMessage = async (data: FirstSignUpInputProps) => {
  const response = await http.post("/Sign/SendVerifyMessage", {
    params:{
      phone: data
    }
  });

  const parsedResult = firstSignUpInputSchema.safeParse(response.data);

  if (!parsedResult.success) {
    console.log(response.data);
    console.error("error in login.api", parsedResult.error.errors);

    return null;
  }

  return parsedResult.data;
};