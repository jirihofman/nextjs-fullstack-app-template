import { NextResponse } from 'next/server';
import i18n from './i18n';
import { authMiddleware } from '@clerk/nextjs';

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default authMiddleware({
    beforeAuth: (request) => {
        // Execute next-auth middleware before Clerk's auth middleware
        const locale = request.nextUrl.locale || i18n.defaultLocale;
        request.nextUrl.searchParams.set('lang', locale);
        request.nextUrl.href = request.nextUrl.href.replace(`/${locale}`, '');
        return NextResponse.rewrite(request.nextUrl);
    },
    publicRoutes: [
        '/',
        '/en','/en/','/cs','/cs/','/cs/faq','/en/faq',
        '/sign-in/[[...index]]',
        '/sign-up/[[...index]]',
        '/forgot-password/[[...index]]',
        '/faq'
    ],
});

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};

