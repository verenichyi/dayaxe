import facebookIcon from '../assets/images/footer/fb.png';
import instagramIcon from '../assets/images/footer/instagram.png';
import vimeoIcon from '../assets/images/footer/vimeo.png';
import inIcon from '../assets/images/footer/in.png';

export interface FooterServicesLinks {
  url: string;
  name: string;
}

export const dayaxeLinks: FooterServicesLinks[] = [
  {
    url: '/how-it-works',
    name: 'How It Works',
  },
  {
    url: '/about-us',
    name: 'About Us',
  },
  {
    url: '/press',
    name: 'Press',
  },
  {
    url: '/help',
    name: 'Help',
  },
  {
    url: '/blog',
    name: 'Blog',
  },
];

export const discoverLinks: FooterServicesLinks[] = [
  {
    url: '/gold-pass',
    name: 'Gold Pass',
  },
  {
    url: '/gift-card',
    name: 'Gift Card',
  },
  {
    url: '/free-daycations',
    name: 'Free Daycations',
  },
  {
    url: '/cities',
    name: 'Cities',
  },
  {
    url: '/resorts',
    name: 'Resorts',
  },
];

export const partnersLinks: FooterServicesLinks[] = [
  {
    url: '/partner-home-page',
    name: 'Partner Home Page',
  },
  {
    url: '/partner-login',
    name: 'Partner Login',
  },
  {
    url: '/partner-sign-up',
    name: 'Partner Sign Up',
  },
];

export const copyrightText = '2023 Dayaxe. All rights reserved.';

export const infoLinks: FooterServicesLinks[] = [
  {
    url: '/terms',
    name: 'Terms',
  },
  {
    url: '/privacy',
    name: 'Privacy',
  },
  {
    url: '/sitemap',
    name: 'Sitemap',
  },
];

export const othersTitle = 'New resorts launched & special offers';

export const contactsLinks = [
  {
    url: 'https://www.facebook.com/dayaxeapp',
    content: facebookIcon,
  },
  {
    url: 'https://www.instagram.com/dayaxeapp/',
    content: instagramIcon,
  },
  {
    url: 'https://vimeo.com/dayaxe',
    content: vimeoIcon,
  },
  {
    url: 'https://www.linkedin.com/company/dayaxe.com/',
    content: inIcon,
  },
];
