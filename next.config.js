const withTM = require('next-transpile-modules')(['@jirihofman/react-profile']);

const nextConfig = {
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
        // localeDetection: false,
    },
    images: {
        domains: [
            // Avatar icons from different Next-auth providers.
            'avatars.githubusercontent.com',
            'lh3.googleusercontent.com',
        ],
    },
    reactStrictMode: true,
};
module.exports = withTM({ nextConfig });
