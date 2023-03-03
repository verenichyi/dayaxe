export interface HowItWorkCard {
  title: string;
  description: string;
  buttonText: string;
}

export const howItWorkCards: HowItWorkCard[] = [
  {
    title: 'Book your ticket',
    description: 'Browse our list of resorts in your area. We are adding new resorts every month.',
    buttonText: 'Book Now',
  },
  {
    title: 'Check-in at hotel',
    description: 'Select a date and book a day pass, spa pass, or cabana.',
    buttonText: 'Our Hotels',
  },
  {
    title: 'Enjoy your time',
    description: 'Check-in at the hotel and enjoy your daycation! Swim, relax, eat, drink, and play.',
    buttonText: 'Our Experiences',
  },
];
