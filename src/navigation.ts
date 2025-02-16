import { getPermalink, getBlogPermalink, getDashboardPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Pricing',
      href: getPermalink('/pricing'),
    },
    {
      text: 'Tools',
      links: [
        { text: 'CORS Tester', href: getPermalink('/cors-tester') },
      ],
    },
  ],
  actions: [
    {
      variant: 'secondary',
      text: 'Login',
      href: getDashboardPermalink('/login'),
    },
    {
      variant: 'primary',
      text: 'Sign Up',
      href: getDashboardPermalink('/signup'),
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'FAQ', href: getPermalink('/faq') },
        { text: 'Pricing', href: getPermalink('/pricing') },
      ],
    },
    {
      title: 'Tools',
      links: [
        { text: 'CORS Tester', href: getPermalink('/cors-tester') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'GitHub', href: "https://github.com/failwarn" },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Terms of Service', href: getPermalink('/terms-of-service') },
        { text: 'Privacy Policy', href: getPermalink('/privacy-policy') },
        { text: 'Sub-processors', href: getPermalink('/sub-processors') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Login', href: getDashboardPermalink('/login'), },
    { text: 'Sign up', href: getDashboardPermalink('/signup'), },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/failwarnhq' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com/company/failwarn' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/failwarn' },
  ],
  footNote: `© ${new Date().getFullYear()} FailWarn. All rights reserved.
  `,
};
