import image1 from '../assets/images/promotions/1.jpg';
import image2 from '../assets/images/promotions/2.jpg';
import image3 from '../assets/images/promotions/3.jpg';
import image4 from '../assets/images/promotions/4.jpg';
import image5 from '../assets/images/promotions/5.jpg';

export interface IPromotionsCard {
  url: string;
  image: string;
  title: string;
  description: string;
}

export const promotionsCards: IPromotionsCard[] = [
  {
    url: '/gifts',
    image: image1,
    title: 'Give a gift of Daycation',
    description: 'Gift of Relaxation and Pampering',
  },
  {
    url: '/friends',
    image: image2,
    title: 'Friends with Benefits',
    description: 'Get $5 for every friend you refer',
  },
  {
    url: '/gold-pass',
    image: image3,
    title: 'Gold Pass',
    description: 'Unlimited monthly access to any hotel in any location',
  },
  {
    url: '/sales',
    image: image4,
    title: 'Easter Sale!',
    description: 'Up to 25% off your order',
  },
  {
    url: '/offers',
    image: image5,
    title: 'Save 15% Off Your First Purchase',
    description: 'Be the first to know when we add new luxury hotels and run special offers & sales.',
  },
];
