import { NextResponse, type NextMiddleware } from "next/server";

export type MiddlewareFactory = (middleware: NextMiddleware) => NextMiddleware;

export const chain = (
  functions: MiddlewareFactory[],
  index = 0
): NextMiddleware => {
  const current = functions[index];

  if (current) {
    const next = chain(functions, index + 1);
    return current(next);
  }

  return () => NextResponse.next();
};
