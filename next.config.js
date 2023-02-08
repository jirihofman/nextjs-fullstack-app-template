const withTM = require('next-transpile-modules')(['@jirihofman/react-profile']);
const nextTranslate = require('next-translate');

const nextConfig = {
    images: {
        domains: [
            // Avatar icons from different Next-auth providers. Icons for included software.
            'next-auth.js.org',
            'github.githubassets.com',
            'github.com',
            'avatars.githubusercontent.com',
            'camo.githubusercontent.com',
            'raw.githubusercontent.com',
            'lh3.googleusercontent.com',
            'cdn-icons-png.flaticon.com',
        ],
    },
    reactStrictMode: true,
};
module.exports = nextTranslate(withTM(nextConfig));
