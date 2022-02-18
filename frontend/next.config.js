// next.config.js
const nextConfig = {
  reactStrictMode: true,
  // These are all the locales you want to support in
  // your application
  i18n: {
    locales: ['en', 'es', 'pt'],
    defaultLocale: 'en',
  },
  // This is a list of locale domains and the default locale they
  // should handle (these are only required when setting up domain routing)
  // Note: subdomains must be included in the domain value to be matched.
  async rewrites() {
    return [
      {
        source: '/:any*',
        destination: '/',
      },
    ];
  },
};

module.exports = nextConfig
