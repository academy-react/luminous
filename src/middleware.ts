import { chain } from "@/middlewares/chain";
import { withI18NMiddleware } from "@/middlewares/i18n-middleware";

export default chain([withI18NMiddleware]);

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|images|fonts|favicon).*)"],
};
