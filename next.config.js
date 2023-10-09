// const nextTranslate = require('next-translate-plugin');
const withNextIntl = require('next-intl/plugin')(
    // This is the default (also the `src` folder is supported out of the box)
    './i18n.js'
);

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
    webpack: (config, { isServer }) => {

        // If client-side, don't polyfill `fs`
        if (!isServer) {
            config.resolve.fallback = {
                fs: false,
            };
        }

        return config;
    },
};
module.exports = withNextIntl((nextConfig));
