/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL,
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  changefreq: 'weekly',
  priority: 0.7,
  autoLastmod: true,

  exclude: ['/admin/*', '/api/*', '/_next/*'],

  additionalPaths: async (config) => [
    { loc: '/' },
    { loc: '/our-services' },
    { loc: '/industries-we-serve' },
    { loc: '/about' },
    { loc: '/contact' },
  ],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin'],
      },
    ],
  },
}
