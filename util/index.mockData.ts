import { Property } from '../components/ProductCard';
import { TextAndLink } from './util';

export const tabs = [
  { name: 'Home', href: '/', action: () => {} },
  { name: 'Buy', href: '/buy', action: () => {} },
  { name: 'Sell', href: '/sell', action: () => {} },
  { name: 'Rent', href: '/rent', action: () => {} },
  { name: 'Contact', href: '/contact', action: () => {} },
];

export const howItWorksIcons = [
  {
    icon: '/buyer.svg',
    heading1: 'Buyer Guides',
    heading2: 'How to buy',
  },
  {
    icon: '/renter.svg',
    heading1: 'Renter Guides',
    heading2: 'How to rent',
  },
  {
    icon: '/seller.svg',
    heading1: 'Seller Guides',
    heading2: 'How to sell',
  },
];

export const endorserIcons = [
  '/cocacola.svg',
  '/designdot.svg',
  '/apple.svg',
  '/genertel.svg',
  '/handspring.svg',
  'blackfire.svg',
];

export const featuredProperties: Property[] = [
  {
    cost: 20000,
    address: 'Opp Taj Mahal, Under Charminar, Heaven, Pin:000000',
    beds: 3,
    rooms: 3,
    image: '/house3.png',
    area: 2000,
  },
  {
    cost: 28500,
    address: 'Opp Taj Mahal, Under Charminar, Heaven, Pin:000000',
    beds: 4,
    rooms: 4,
    image: '/house2.png',
    area: 2500,
  },
  {
    cost: 20000,
    address: 'Opp Taj Mahal, Under Charminar, Heaven, Pin:000000',
    beds: 3,
    rooms: 3,
    image: '/house1.png',
    area: 1900,
  },
];

export const footerItems: { header: string; items: TextAndLink[] }[] =
  [
    {
      header: 'Product',
      items: [
        { text: 'Listing', link: '/product/listing' },
        { text: 'Property', link: '/product/property' },
        { text: 'Agents', link: '/product/agents' },
        { text: 'Blog', link: '/product/blog' },
      ],
    },
    {
      header: 'Resources',
      items: [
        { text: 'Our Homes', link: '/product/homes' },
        { text: 'Member Stories', link: '/product/memberStories' },
        { text: 'Video', link: '/product/vides' },
        { text: 'Free Trial', link: '/product/trial' },
      ],
    },
    {
      header: 'Company',
      items: [
        { text: 'Partnership', link: '/product/listing' },
        { text: 'Terms Of Use', link: '/product/property' },
        { text: 'Privacy', link: '/product/agents' },
        { text: 'Sitemap', link: '/product/blog' },
      ],
    },
  ];
