import image1 from '../assets/images/featured/1.jpg'
import image2 from '../assets/images/featured/2.jpg'
import image3 from '../assets/images/featured/3.jpg'
import image4 from '../assets/images/featured/4.jpg'
import image5 from '../assets/images/featured/5.jpg'
import image6 from '../assets/images/featured/6.jpg'
import image7 from '../assets/images/featured/7.jpg'
import image8 from '../assets/images/featured/8.jpg'

export interface IFeaturedCard {
  type: string,
  image: string,
  title: string,
  passType: string,
  location: string,
  ratingPercentage: number,
  ratingAmount: number,
  price: string
}

export const featuredCards: IFeaturedCard[] = [
  {
    type: 'Festive',
    image: image1,
    title: 'West Beverly Hills',
    passType: 'Cabanas',
    location: 'Los Angeles',
    ratingPercentage: 12.5,
    ratingAmount: 125,
    price: '$25'
  },
  {
    type: 'Tranquil',
    image: image2,
    title: 'Marriott Santa Monica Merigot',
    passType: 'Day Pass',
    location: 'Palm Springs',
    ratingPercentage: 25,
    ratingAmount: 250,
    price: '$25'
  },
  {
    type: 'Family',
    image: image3,
    title: 'Hollywood Hotel',
    passType: 'Day Pass',
    location: 'San Diego',
    ratingPercentage: 37.5,
    ratingAmount: 375,
    price: '$45'
  },
  {
    type: 'Family',
    image: image4,
    title: 'West Beverly Hills',
    passType: 'SPA Pass',
    location: 'San Diego',
    ratingPercentage: 50,
    ratingAmount: 500,
    price: '$99'
  },
  {
    type: 'Festive',
    image: image5,
    title: 'Pasea Hotel & Spa',
    passType: 'SPA Pass',
    location: 'Florida',
    ratingPercentage: 62.5,
    ratingAmount: 625,
    price: '$20'
  },
  {
    type: 'Tranquil',
    image: image6,
    title: 'Hyatt Regency Newport Beach',
    passType: 'Day Pass',
    location: 'Orange County',
    ratingPercentage: 75,
    ratingAmount: 750,
    price: '$15'
  },
  {
    type: 'Festive',
    image: image7,
    title: 'Balboa Bay Resort',
    passType: 'Cabanas',
    location: 'Palm Springs',
    ratingPercentage: 87.5,
    ratingAmount: 875,
    price: '$80'
  },
  {
    type: 'Tranquil',
    image: image8,
    title: 'DoubleTree by Hilton Hotel',
    passType: 'SPA Pass',
    location: 'San Francisco',
    ratingPercentage: 100,
    ratingAmount: 1000,
    price: '$60'
  },
]