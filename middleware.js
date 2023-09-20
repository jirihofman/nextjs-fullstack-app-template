import { authMiddleware } from '@clerk/nextjs';
import createIntlMiddleware from 'next-intl/middleware';

// It really was a pain to combine the two middlewares into working one that doesn't screw up the routing for API calls.

// Next-intl middleware
const intlMiddlewareFunc = createIntlMiddleware({
    defaultLocale: 'en',
    locales: ['en', 'cs']
});

// Clerk middleware
const authMiddlewareFunc = authMiddleware({
    ignoredRoutes: [
        '/api/status',
        '/faq',
        '/',
        '/en', '/cs',
        '/user-profile',
    ],
    publicRoutes: [
        '/sign-in', '/en/sign-in', '/cs/sign-in',
        '/sign-up',
    ]
});

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default function middleware(req, res, next) {

    const pathsApi = [
        '/api',
    ];

    // If it is API call, skip the translation middleware.
    if (pathsApi.some((path) => req.nextUrl.pathname.startsWith(path))) {
        return authMiddlewareFunc(req);
    }

    return intlMiddlewareFunc(req, res, next);
}

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};

