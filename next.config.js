const withTM = require('next-transpile-modules')(['@jirihofman/react-profile']);

const nextConfig = {
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
        // localeDetection: false,
    },
    images: {
        domains: [
            // Avatar icons from different Next-auth providers. Icons for included software.
            'next-auth.js.org',
            'github.githubassets.com',
            'avatars.githubusercontent.com',
            'camo.githubusercontent.com',
            'raw.githubusercontent.com',
            'lh3.googleusercontent.com',
            'cdn-icons-png.flaticon.com',
        ],
    },
    reactStrictMode: true,
};
module.exports = withTM(nextConfig);
