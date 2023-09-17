const nextTranslate = require('next-translate');

const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        domains: [
            // Avatar icons from different Next-auth providers. Icons for included software.
            'clerk.com',
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
    transpilePackages: ['@jirihofman/react-profile'],
};
module.exports = nextTranslate((nextConfig));
