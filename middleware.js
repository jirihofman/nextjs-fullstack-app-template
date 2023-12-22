import { authMiddleware } from '@clerk/nextjs';

import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';

const intlMiddleware = createMiddleware({
    defaultLocale: 'en',
    locales: ['en', 'cs'],
});

const apiRoutes = ['/api', '/trpc'];
const publicRoutes = [
    '/',
    '/:locale',
    '/faq',
    '/:locale/faq',
    '/:locale/sign-in',
];

export default function middleware(req, res) {

    // If the request is for an API route, skip next-intl middleware
    if (apiRoutes.some((path) => req.nextUrl.pathname.startsWith(path))) {
        req.skipIntl = true;
    } else if (req.nextUrl.pathname.startsWith('/cs/sign-in')) {
        // Hacky sh!t to redirect to /cs/sign-in
        return NextResponse.redirect(new URL('/en/sign-in', req.nextUrl.origin));
    } else if (req.nextUrl.pathname.startsWith('/cs/user-profile')) {
        // Hacky sh!t to redirect to /cs/user-profile
        return NextResponse.redirect(new URL('/en/user-profile', req.nextUrl.origin));
    }

    return authMiddlewareFunc(req, res);
}

const authMiddlewareFunc = authMiddleware({
    beforeAuth: (req) => {
        // Execute next-intl middleware before Clerk's auth middleware
        if (req.skipIntl) {
            return;
        }
        return intlMiddleware(req);
    },

    // This is not processed by Clerk's auth middleware at all.
    ignoredRoutes: ['/api/status'],

    // Ensure that locale specific sign-in pages are public
    publicRoutes: publicRoutes,
});

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
