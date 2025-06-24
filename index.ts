export interface CableCar {
  id: string;
  name: string;
  type: 'cable-car' | 'monorail';
  region: string;
  address: string;
  latitude: number;
  longitude: number;
  phone: string;
  operatingHours: string;
  price: string;
  tags: string[];
  description: string;
  imageUrl: string;
  registeredDate: string;
  views?: number;
  likes?: number;
}

export interface Review {
  id: string;
  cableCarId: string;
  content: string;
  author: string;
  createdAt: string;
  rating?: number;
}

export interface Comment {
  id: string;
  cableCarId: string;
  content: string;
  author: string;
  createdAt: string;
}

export interface Report {
  id: string;
  type: 'new' | 'update' | 'photo';
  cableCarId?: string;
  name?: string;
  description?: string;
  location?: string;
  imageUrl?: string;
  content: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
}

export interface FilterOptions {
  type?: 'cable-car' | 'monorail' | 'all';
  region?: string;
  tags?: string[];
  season?: string;
  theme?: string;
}

