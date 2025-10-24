export interface CarImage {
  id: number;
  url: string;
  alt: string;
  isMain?: boolean;
}

export interface CarSpec {
  key: string;
  value: string;
}

export interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  condition: 'Excellent' | 'Very Good' | 'Good' | 'Fair';
  transmission: 'Automatic' | 'Manual';
  fuelType: 'Gasoline' | 'Diesel' | 'Hybrid' | 'Electric';
  engine: string;
  color: string;
  description: string;
  features: string[];
  images: CarImage[];
  specifications: CarSpec[];
  warranty: string;
  vin: string;
  stockNumber: string;
  dateAdded: string;
}

export const MOCK_CARS: Car[] = [
  {
    id: 1,
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    price: 18500,
    mileage: 45000,
    condition: 'Excellent',
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    engine: '2.5L 4-Cylinder',
    color: 'Silver',
    description: 'This well-maintained Toyota Camry offers exceptional reliability and comfort. Perfect for daily commuting or family trips, this vehicle has been thoroughly inspected and serviced.',
    features: [
      'Bluetooth Connectivity',
      'Backup Camera',
      'Cruise Control',
      'Air Conditioning',
      'Power Windows',
      'Power Locks',
      'Keyless Entry',
      'USB Ports'
    ],
    images: [
      { id: 1, url: 'https://images.unsplash.com/photo-1549317336-206569e8475c?w=800', alt: 'Toyota Camry Front View', isMain: true },
      { id: 2, url: 'https://images.unsplash.com/photo-1549317336-206569e8475c?w=800', alt: 'Toyota Camry Side View' },
      { id: 3, url: 'https://images.unsplash.com/photo-1549317336-206569e8475c?w=800', alt: 'Toyota Camry Interior' },
      { id: 4, url: 'https://images.unsplash.com/photo-1549317336-206569e8475c?w=800', alt: 'Toyota Camry Dashboard' }
    ],
    specifications: [
      { key: 'Engine', value: '2.5L 4-Cylinder' },
      { key: 'Transmission', value: 'Automatic' },
      { key: 'Drive Type', value: 'Front Wheel Drive' },
      { key: 'Fuel Economy', value: '28 MPG City / 39 MPG Highway' },
      { key: 'Seating', value: '5 Passengers' },
      { key: 'Doors', value: '4 Doors' },
      { key: 'Cargo Space', value: '15.1 cu ft' },
      { key: 'Wheelbase', value: '111.2 in' }
    ],
    warranty: '2 Years / 24,000 Miles',
    vin: '1HGBH41JXMN109186',
    stockNumber: 'TC2024001',
    dateAdded: '2024-01-15'
  },
  {
    id: 2,
    make: 'Honda',
    model: 'Civic',
    year: 2019,
    price: 16200,
    mileage: 52000,
    condition: 'Very Good',
    transmission: 'Manual',
    fuelType: 'Gasoline',
    engine: '1.5L 4-Cylinder Turbo',
    color: 'Blue',
    description: 'Sporty and efficient Honda Civic with manual transmission. This well-cared-for vehicle offers excellent fuel economy and responsive handling.',
    features: [
      'Apple CarPlay',
      'Android Auto',
      'Lane Departure Warning',
      'Forward Collision Warning',
      'Automatic Emergency Braking',
      'Adaptive Cruise Control',
      'Heated Seats',
      'Sunroof'
    ],
    images: [
      { id: 1, url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800', alt: 'Honda Civic Front View', isMain: true },
      { id: 2, url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800', alt: 'Honda Civic Side View' },
      { id: 3, url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800', alt: 'Honda Civic Interior' },
      { id: 4, url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800', alt: 'Honda Civic Engine' }
    ],
    specifications: [
      { key: 'Engine', value: '1.5L 4-Cylinder Turbo' },
      { key: 'Transmission', value: 'Manual' },
      { key: 'Drive Type', value: 'Front Wheel Drive' },
      { key: 'Fuel Economy', value: '31 MPG City / 40 MPG Highway' },
      { key: 'Seating', value: '5 Passengers' },
      { key: 'Doors', value: '4 Doors' },
      { key: 'Cargo Space', value: '14.8 cu ft' },
      { key: 'Wheelbase', value: '106.3 in' }
    ],
    warranty: '2 Years / 24,000 Miles',
    vin: '2HGBH41JXMN109187',
    stockNumber: 'HC2024002',
    dateAdded: '2024-01-14'
  },
  {
    id: 3,
    make: 'Ford',
    model: 'F-150',
    year: 2021,
    price: 28500,
    mileage: 38000,
    condition: 'Excellent',
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    engine: '3.5L V6 EcoBoost',
    color: 'White',
    description: 'Powerful Ford F-150 pickup truck perfect for work or play. This well-maintained vehicle offers excellent towing capacity and modern features.',
    features: [
      'SYNC 3 Infotainment',
      '4WD System',
      'Towing Package',
      'Bed Liner',
      'Running Boards',
      'Tinted Windows',
      'Fog Lights',
      'Trailer Brake Controller'
    ],
    images: [
      { id: 1, url: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800', alt: 'Ford F-150 Front View', isMain: true },
      { id: 2, url: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800', alt: 'Ford F-150 Side View' },
      { id: 3, url: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800', alt: 'Ford F-150 Bed' },
      { id: 4, url: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800', alt: 'Ford F-150 Interior' }
    ],
    specifications: [
      { key: 'Engine', value: '3.5L V6 EcoBoost' },
      { key: 'Transmission', value: 'Automatic' },
      { key: 'Drive Type', value: '4WD' },
      { key: 'Fuel Economy', value: '18 MPG City / 24 MPG Highway' },
      { key: 'Seating', value: '5 Passengers' },
      { key: 'Doors', value: '4 Doors' },
      { key: 'Bed Length', value: '5.5 ft' },
      { key: 'Towing Capacity', value: '11,000 lbs' }
    ],
    warranty: '3 Years / 36,000 Miles',
    vin: '3HGBH41JXMN109188',
    stockNumber: 'FF2024003',
    dateAdded: '2024-01-13'
  },
  {
    id: 4,
    make: 'BMW',
    model: '3 Series',
    year: 2018,
    price: 22900,
    mileage: 62000,
    condition: 'Good',
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    engine: '2.0L 4-Cylinder Turbo',
    color: 'Black',
    description: 'Luxury BMW 3 Series sedan with premium features and sporty performance. This well-maintained vehicle offers the perfect blend of comfort and driving dynamics.',
    features: [
      'iDrive Navigation',
      'Leather Seats',
      'Heated Front Seats',
      'Dual Zone Climate Control',
      'Harman Kardon Audio',
      'Sunroof',
      'Parking Sensors',
      'Xenon Headlights'
    ],
    images: [
      { id: 1, url: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800', alt: 'BMW 3 Series Front View', isMain: true },
      { id: 2, url: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800', alt: 'BMW 3 Series Side View' },
      { id: 3, url: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800', alt: 'BMW 3 Series Interior' },
      { id: 4, url: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800', alt: 'BMW 3 Series Dashboard' }
    ],
    specifications: [
      { key: 'Engine', value: '2.0L 4-Cylinder Turbo' },
      { key: 'Transmission', value: 'Automatic' },
      { key: 'Drive Type', value: 'Rear Wheel Drive' },
      { key: 'Fuel Economy', value: '26 MPG City / 36 MPG Highway' },
      { key: 'Seating', value: '5 Passengers' },
      { key: 'Doors', value: '4 Doors' },
      { key: 'Cargo Space', value: '17.0 cu ft' },
      { key: 'Wheelbase', value: '110.6 in' }
    ],
    warranty: '2 Years / 24,000 Miles',
    vin: '4HGBH41JXMN109189',
    stockNumber: 'BM2024004',
    dateAdded: '2024-01-12'
  },
  {
    id: 5,
    make: 'Nissan',
    model: 'Altima',
    year: 2020,
    price: 17500,
    mileage: 48000,
    condition: 'Very Good',
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    engine: '2.5L 4-Cylinder',
    color: 'Red',
    description: 'Comfortable Nissan Altima sedan with modern technology and excellent fuel efficiency. Perfect for daily commuting and long-distance travel.',
    features: [
      'NissanConnect Infotainment',
      'Bluetooth Connectivity',
      'Backup Camera',
      'Automatic Emergency Braking',
      'Lane Departure Warning',
      'Forward Collision Warning',
      'Adaptive Cruise Control',
      'Remote Start'
    ],
    images: [
      { id: 1, url: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800', alt: 'Nissan Altima Front View', isMain: true },
      { id: 2, url: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800', alt: 'Nissan Altima Side View' },
      { id: 3, url: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800', alt: 'Nissan Altima Interior' },
      { id: 4, url: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800', alt: 'Nissan Altima Trunk' }
    ],
    specifications: [
      { key: 'Engine', value: '2.5L 4-Cylinder' },
      { key: 'Transmission', value: 'Automatic' },
      { key: 'Drive Type', value: 'Front Wheel Drive' },
      { key: 'Fuel Economy', value: '28 MPG City / 39 MPG Highway' },
      { key: 'Seating', value: '5 Passengers' },
      { key: 'Doors', value: '4 Doors' },
      { key: 'Cargo Space', value: '15.4 cu ft' },
      { key: 'Wheelbase', value: '109.3 in' }
    ],
    warranty: '2 Years / 24,000 Miles',
    vin: '5HGBH41JXMN109190',
    stockNumber: 'NA2024005',
    dateAdded: '2024-01-11'
  },
  {
    id: 6,
    make: 'Chevrolet',
    model: 'Silverado',
    year: 2019,
    price: 26500,
    mileage: 55000,
    condition: 'Good',
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    engine: '5.3L V8',
    color: 'Gray',
    description: 'Reliable Chevrolet Silverado pickup truck with strong V8 engine. This workhorse is perfect for heavy-duty tasks and towing.',
    features: [
      'Chevrolet MyLink',
      '4WD System',
      'Towing Package',
      'Bed Liner',
      'Running Boards',
      'Tinted Windows',
      'Fog Lights',
      'Trailer Brake Controller'
    ],
    images: [
      { id: 1, url: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800', alt: 'Chevrolet Silverado Front View', isMain: true },
      { id: 2, url: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800', alt: 'Chevrolet Silverado Side View' },
      { id: 3, url: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800', alt: 'Chevrolet Silverado Bed' },
      { id: 4, url: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800', alt: 'Chevrolet Silverado Interior' }
    ],
    specifications: [
      { key: 'Engine', value: '5.3L V8' },
      { key: 'Transmission', value: 'Automatic' },
      { key: 'Drive Type', value: '4WD' },
      { key: 'Fuel Economy', value: '16 MPG City / 22 MPG Highway' },
      { key: 'Seating', value: '5 Passengers' },
      { key: 'Doors', value: '4 Doors' },
      { key: 'Bed Length', value: '5.8 ft' },
      { key: 'Towing Capacity', value: '9,500 lbs' }
    ],
    warranty: '3 Years / 36,000 Miles',
    vin: '6HGBH41JXMN109191',
    stockNumber: 'CS2024006',
    dateAdded: '2024-01-10'
  },
  {
    id: 7,
    make: 'Audi',
    model: 'A4',
    year: 2019,
    price: 24500,
    mileage: 58000,
    condition: 'Very Good',
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    engine: '2.0L 4-Cylinder Turbo',
    color: 'White',
    description: 'Premium Audi A4 sedan with Quattro all-wheel drive and luxury features. This well-maintained vehicle offers exceptional performance and comfort.',
    features: [
      'Audi MMI Navigation',
      'Quattro AWD',
      'Leather Seats',
      'Heated Front Seats',
      'Dual Zone Climate Control',
      'Bang & Olufsen Audio',
      'Sunroof',
      'Parking Sensors'
    ],
    images: [
      { id: 1, url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800', alt: 'Audi A4 Front View', isMain: true },
      { id: 2, url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800', alt: 'Audi A4 Side View' },
      { id: 3, url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800', alt: 'Audi A4 Interior' },
      { id: 4, url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800', alt: 'Audi A4 Dashboard' }
    ],
    specifications: [
      { key: 'Engine', value: '2.0L 4-Cylinder Turbo' },
      { key: 'Transmission', value: 'Automatic' },
      { key: 'Drive Type', value: 'All Wheel Drive' },
      { key: 'Fuel Economy', value: '24 MPG City / 34 MPG Highway' },
      { key: 'Seating', value: '5 Passengers' },
      { key: 'Doors', value: '4 Doors' },
      { key: 'Cargo Space', value: '13.0 cu ft' },
      { key: 'Wheelbase', value: '110.8 in' }
    ],
    warranty: '2 Years / 24,000 Miles',
    vin: '7HGBH41JXMN109192',
    stockNumber: 'AA2024007',
    dateAdded: '2024-01-09'
  }
];
