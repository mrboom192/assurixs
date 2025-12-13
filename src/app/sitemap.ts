import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://assurixs.com/',
      lastModified: new Date(),
    },
    {
      url: 'https://assurixs.com/about',
      lastModified: new Date(),
    },
    {
      url: 'https://assurixs.com/our-services',
      lastModified: new Date(),
    },
    {
      url: 'https://assurixs.com/industries-we-serve',
      lastModified: new Date(),
    },
    {
      url: 'https://assurixs.com/contact',
      lastModified: new Date(),
    },
  ]
}
