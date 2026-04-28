export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  category: 'eyeglasses' | 'sunglasses' | 'contact-lenses' | 'accessories';
  gender: 'men' | 'women' | 'unisex' | 'kids';
  frameShape: string;
  material: string;
  colors: string[];
  images: string[];
  description: string;
  stock: number;
  isBestSeller?: boolean;
  isNewArrival?: boolean;
  rating: number;
  reviewsCount: number;
  features: string[];
}

export interface Prescription {
  id: string;
  userId: string;
  type: 'single-vision' | 'bifocal' | 'progressive';
  rightEye: {
    sph: number;
    cyl: number;
    axis: number;
    add?: number;
  };
  leftEye: {
    sph: number;
    cyl: number;
    axis: number;
    add?: number;
  };
  pd: number;
  fileUrl?: string; // For uploaded images/PDFs
  verified: boolean;
  createdAt: number;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  paymentMethod: 'cod' | 'jazzcash' | 'easypaisa' | 'card';
  shippingAddress: {
    fullName: string;
    phone: string;
    address: string;
    city: string;
    province: string;
  };
  total: number;
  createdAt: number;
}

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  prescriptionId?: string;
}
