"use server";

import { signOut } from "@/lib/auth";

export const logOut = async () => {
  try {
    await signOut({
      redirect: false,
    });

    return true;
  } catch (err) {
    console.log(err);

    return false;
  }
};
