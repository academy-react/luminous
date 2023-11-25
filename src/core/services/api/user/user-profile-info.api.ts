import http from "@/core/services/interceptor";
import { userProfileInfoSchema } from "@/core/validators/api";
import { auth } from "@/lib/auth";

export const getUserProfileInfo = async () => {
  const session = await auth();

  const response = await http.get("/SharePanel/GetProfileInfo", {
    headers: {
      Authorization: `Bearer ${session?.user.token}`,
    },
  });

  const parsedResult = userProfileInfoSchema.safeParse(response.data);

  if (!parsedResult.success) {
    console.log(
      "error in get-user-profile-info.api",
      parsedResult.error.errors
    );

    return null;
  }

  return parsedResult.data;
};
