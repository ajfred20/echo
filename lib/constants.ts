export const siteConfig = {
  name: 'Echo',
  description: 'AI-powered podcast creation platform',
  url: 'https://echo.com',
  ogImage: 'https://echo.com/og.jpg',
  links: {
    twitter: 'https://twitter.com/echo',
    github: 'https://github.com/echo',
  }
}

export const navigation = {
  main: [
    { name: 'About us', href: '/about' },
    { name: 'Products', href: '/features' },
    { name: 'Career', href: '/career' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
  ],
  social: [
    { name: 'Twitter', href: 'https://twitter.com/echo' },
    { name: 'GitHub', href: 'https://github.com/echo' },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/echo' },
  ]
}

export const stats = [
  { name: 'Active Users', value: '10,000+' },
  { name: 'Podcasts Created', value: '50,000+' },
  { name: 'Time Saved', value: '1M+ hours' },
  { name: 'Customer Rating', value: '4.9/5' },
]

export const tracking = {
  gtmId: 'GTM-XXXXXX', // Replace with your GTM ID
  gaId: 'G-XXXXXXXX', // Replace with your GA4 ID
} 