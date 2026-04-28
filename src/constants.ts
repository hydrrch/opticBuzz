import { Product } from './types';

export const CATEGORIES = [
  { id: 'eyeglasses', name: 'Eyeglasses', image: 'https://images.unsplash.com/photo-1574706196822-1207e4e1f78e?auto=format&fit=crop&q=80&w=800' },
  { id: 'sunglasses', name: 'Sunglasses', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800' },
  { id: 'contact-lenses', name: 'Contact Lenses', image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=800' },
  { id: 'kids', name: 'Kids Glasses', image: 'https://images.unsplash.com/photo-1556011557-074465457efc?auto=format&fit=crop&q=80&w=800' },
];

export const PAKISTAN_CITIES = [
  'Lahore', 'Karachi', 'Islamabad', 'Rawalpindi', 'Faisalabad', 'Multan', 'Gujranwala', 'Peshawar', 'Quetta', 'Sialkot'
];

export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Aviator Gold Legacy',
    brand: 'Ray-Ban',
    price: 18500,
    category: 'sunglasses',
    gender: 'unisex',
    frameShape: 'aviator',
    material: 'metal',
    colors: ['Gold', 'Black'],
    images: ['https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800'],
    description: 'The iconic Aviator, redesigned with premium 24k gold plating for a truly luxurious feel.',
    stock: 12,
    isBestSeller: true,
    rating: 4.8,
    reviewsCount: 124,
    features: ['UV400 Protection', 'Polarized Lenses', 'Adjustable Nose Pads']
  },
  {
    id: '2',
    name: 'Modern Executive',
    brand: 'Opti Buzz',
    price: 9500,
    category: 'eyeglasses',
    gender: 'men',
    frameShape: 'rectangular',
    material: 'acetate',
    colors: ['Navy Blue', 'Tortoise'],
    images: ['https://images.unsplash.com/photo-1511499767390-90342f16b20a?auto=format&fit=crop&q=80&w=800'],
    description: 'Clean lines and premium acetate make this the perfect choice for the modern professional.',
    stock: 25,
    isNewArrival: true,
    rating: 4.5,
    reviewsCount: 42,
    features: ['Anti-Reflective Coating', 'Scratch Resistant', 'Lightweight']
  },
  {
    id: '3',
    name: 'Cateye Elegance',
    brand: 'Vogue',
    price: 14200,
    category: 'eyeglasses',
    gender: 'women',
    frameShape: 'cateye',
    material: 'metal',
    colors: ['Rose Gold', 'Silver'],
    images: ['https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&q=80&w=800'],
    description: 'Sophisticated cateye frames that add a touch of glamour to any look.',
    stock: 8,
    isBestSeller: true,
    rating: 4.9,
    reviewsCount: 88,
    features: ['Spring Hinges', 'Premium Case Included']
  }
];
