import {
  NextResponse,
  type NextFetchEvent,
  type NextRequest,
} from "next/server";

import { auth } from "@/lib/auth";

import { type MiddlewareFactory } from "./chain";

export const withAuthNMiddleware: MiddlewareFactory = (nextMiddleware) => {
  console.log("here");

  return async (req: NextRequest, _next: NextFetchEvent) => {
    const session = await auth();

    console.log("session in middleware");
    console.log(session);

    return nextMiddleware(req, _next);
  };
};
