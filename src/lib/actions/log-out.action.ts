"use server";

import { signOut } from "@/lib/auth";

export const logOut = async () => {
  console.log("logout");

  try {
    await signOut({
      redirect: false,
    });

    console.log("logout success");

    return true;
  } catch (err) {
    console.log("logout error", err);

    return false;
  }
};
