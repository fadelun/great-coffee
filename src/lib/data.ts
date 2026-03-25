export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'coffee' | 'non-coffee' | 'food';
  image: string;
  tags?: string[];
}

export const menuItems: MenuItem[] = [
  // Coffee
  {
    id: 'ethiopia-yirgacheffe',
    name: 'Ethiopia Yirgacheffe',
    description: 'Bright and floral with notes of bergamot, jasmine, and citrus. A true single-origin masterpiece.',
    price: '$5.50',
    category: 'coffee',
    image: '/images/menu/ethiopia-yirgacheffe.jpg',
    tags: ['Single Origin', 'Light Roast'],
  },
  {
    id: 'midnight-blend',
    name: 'Midnight Blend',
    description: 'Our signature dark roast with chocolate, molasses, and a hint of smokiness. Bold and unforgettable.',
    price: '$4.50',
    category: 'coffee',
    image: '/images/menu/midnight-blend.jpg',
    tags: ['House Blend', 'Dark Roast'],
  },
  {
    id: 'colombia-huila',
    name: 'Colombia Huila',
    description: 'Balanced and smooth with caramel sweetness, red apple acidity, and a buttery finish.',
    price: '$5.00',
    category: 'coffee',
    image: '/images/menu/colombia-huila.jpg',
    tags: ['Single Origin', 'Medium Roast'],
  },
  {
    id: 'cappuccino',
    name: 'Classic Cappuccino',
    description: 'Espresso with steamed milk and a thick layer of velvety microfoam.',
    price: '$4.50',
    category: 'coffee',
    image: '/images/menu/cappuccino.jpg',
  },
  {
    id: 'flat-white',
    name: 'Flat White',
    description: 'Double ristretto with silky steamed milk. Smooth and intense.',
    price: '$5.00',
    category: 'coffee',
    image: '/images/menu/flat-white.jpg',
  },
  {
    id: 'pour-over',
    name: 'Pour Over',
    description: 'Hand-brewed to order using V60 method. Ask about today&apos;s selection.',
    price: '$6.00',
    category: 'coffee',
    image: '/images/menu/pour-over.jpg',
  },
  // Non-Coffee
  {
    id: 'matcha-latte',
    name: 'Ceremonial Matcha Latte',
    description: 'Premium Japanese matcha whisked with your choice of steamed milk.',
    price: '$6.00',
    category: 'non-coffee',
    image: '/images/menu/matcha-latte.jpg',
    tags: ['Vegan Option'],
  },
  {
    id: 'golden-mylk',
    name: 'Golden Mylk',
    description: 'Warming turmeric, ginger, cinnamon, and honey with steamed oat milk.',
    price: '$5.50',
    category: 'non-coffee',
    image: '/images/menu/golden-mylk.jpg',
    tags: ['Vegan', 'Wellness'],
  },
  {
    id: 'hot-chocolate',
    name: 'Belgian Hot Chocolate',
    description: 'Rich dark chocolate melted into steamed whole milk. Decadent and indulgent.',
    price: '$5.00',
    category: 'non-coffee',
    image: '/images/menu/hot-chocolate.jpg',
  },
  {
    id: 'chai-latte',
    name: 'Spiced Chai Latte',
    description: 'House-made chai blend with cardamom, clove, and cinnamon. Warming and aromatic.',
    price: '$5.00',
    category: 'non-coffee',
    image: '/images/menu/chai-latte.jpg',
  },
  // Food
  {
    id: 'avocado-toast',
    name: 'Avocado Toast',
    description: 'Smashed avocado on sourdough with cherry tomatoes, microgreens, and everything seasoning.',
    price: '$12.00',
    category: 'food',
    image: '/images/menu/avocado-toast.jpg',
    tags: ['Vegetarian'],
  },
  {
    id: 'croissant',
    name: 'Butter Croissant',
    description: 'Flaky, buttery layers baked fresh each morning. Simple perfection.',
    price: '$4.50',
    category: 'food',
    image: '/images/menu/croissant.jpg',
  },
  {
    id: 'berry-scone',
    name: 'Mixed Berry Scone',
    description: 'Tender scone loaded with fresh berries. Served with clotted cream.',
    price: '$5.00',
    category: 'food',
    image: '/images/menu/berry-scone.jpg',
  },
  {
    id: 'egg-sandwich',
    name: 'Breakfast Sandwich',
    description: 'Fried egg, aged cheddar, and herb aioli on a brioche bun.',
    price: '$9.00',
    category: 'food',
    image: '/images/menu/egg-sandwich.jpg',
  },
];

export const categories = [
  { id: 'all', label: 'All' },
  { id: 'coffee', label: 'Coffee' },
  { id: 'non-coffee', label: 'Non-Coffee' },
  { id: 'food', label: 'Food' },
];

export const testimonials = [
  {
    id: 1,
    quote: "Great Coffee isn't just a cafe—it's a ritual. Their Ethiopia Yirgacheffe changed how I think about coffee.",
    author: "Sarah Mitchell",
    role: "Food Writer",
    image: "/images/testimonials/person1.jpg",
  },
  {
    id: 2,
    quote: "The attention to detail here is extraordinary. Every cup is crafted with intention.",
    author: "James Park",
    role: "Regular Customer",
    image: "/images/testimonials/person2.jpg",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Sourcing",
    description: "We travel to origins, building direct relationships with farmers who share our commitment to quality and sustainability.",
  },
  {
    number: "02",
    title: "Roasting",
    description: "Each origin is roasted to bring out its unique character. We believe in highlighting, not masking, the bean's natural profile.",
  },
  {
    number: "03",
    title: "Brewing",
    description: "Our baristas are trained in the art of extraction. Precision and care go into every cup we serve.",
  },
];

// Business information (centralized to avoid duplication)
export const businessInfo = {
  name: "Great Coffee",
  address: {
    street: "123 Roasters Lane",
    city: "Portland",
    state: "OR",
    zip: "97214",
    full: "123 Roasters Lane, Portland, OR 97214",
  },
  contact: {
    phone: "(503) 555-1234",
    phoneRaw: "15035551234",
    email: "hello@greatcoffee.com",
  },
  hours: [
    { days: "Monday - Friday", time: "7:00 AM - 7:00 PM" },
    { days: "Saturday", time: "8:00 AM - 6:00 PM" },
    { days: "Sunday", time: "8:00 AM - 6:00 PM" },
  ],
  social: {
    instagram: "https://instagram.com/greatcoffee",
    twitter: "https://twitter.com/greatcoffee",
    facebook: "https://facebook.com/greatcoffee",
  },
};

// Navigation links
export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/contact", label: "Visit Us" },
];
