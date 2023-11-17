"use server";

import { type SignInInputProps } from "@/core/validators/forms";
import { signIn } from "@/lib/auth";

export const login = async (data: SignInInputProps) => {
  try {
    await signIn("credentials", {
      ...data,
      redirect: false,
    });

    return "Success";
  } catch (err) {
    if ((err as Error).message.includes("CredentialsSignin")) {
      return "Invalid credentials";
    }

    console.log(err);

    return "Something went wrong";
  }
};
