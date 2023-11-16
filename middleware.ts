import { NextRequest } from 'next/server';
import { createI18nMiddleware } from "next-international/middleware";

const I18Middleware = createI18nMiddleware({
    locales: ["en", "ru"],
    defaultLocale: "en"
})

export function middleware(request: NextRequest) {
    return I18Middleware(request);
}

export const config = {
    matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"]
}