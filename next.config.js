const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      // Avatar icons from different Next-auth providers.
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com',
    ],
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
    // localeDetection: false,
  },
};

module.exports = nextConfig;
