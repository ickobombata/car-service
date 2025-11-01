import { Car, CarImage, CarSpec } from './car-data';

const createMockCar = (
  id: number,
  make: string,
  model: string,
  year: number,
  color: string,
  price: number,
  imageUrl: string
): Car => ({
  id: id.toString(),
  make,
  model,
  year,
  price,
  mileage: Math.floor(Math.random() * 100000), // Random mileage
  condition: 'Excellent', // Default condition
  transmission: 'Automatic', // Default transmission
  fuelType: 'Gasoline', // Default fuel type
  engine: 'V6', // Default engine
  color,
  description: `This is a beautiful ${year} ${make} ${model} in ${color}.`,
  features: ['ABS', 'Airbags', 'AC', 'Power Steering'], // Default features
  images: [{ url: imageUrl, alt: `${make} ${model} image`, isMain: true }],
  specifications: [
    { key: 'Horsepower', value: '200hp' },
    { key: 'Doors', value: '4' },
  ], // Default specifications
  warranty: '3 years / 36,000 miles', // Default warranty
  vin: `VIN${id}MOCK`, // Mock VIN
  stockNumber: `STOCK${id}MOCK`, // Mock Stock Number
  dateAdded: new Date().toISOString(), // Current date
});

export const MOCK_CARS: Car[] = [
    createMockCar(
      1,
      'Toyota',
      'Camry',
      2020,
      'Silver',
      25000,
      'https://cdn.imagin.studio/getImage?customer=carkio&make=toyota&modelFamily=camry&zoomType=fullscreen'
    ),
    createMockCar(
      2,
      'Honda',
      'Civic',
      2021,
      'Blue',
      23000,
      'https://cdn.imagin.studio/getImage?customer=carkio&make=honda&modelFamily=civic&zoomType=fullscreen'
    ),
    createMockCar(
      3,
      'Ford',
      'Mustang',
      2022,
      'Red',
      35000,
      'https://cdn.imagin.studio/getImage?customer=carkio&make=ford&modelFamily=mustang&zoomType=fullscreen'
    ),
    createMockCar(
      4,
      'BMW',
      'X5',
      2023,
      'Black',
      60000,
      'https://cdn.imagin.studio/getImage?customer=carkio&make=bmw&modelFamily=x5&zoomType=fullscreen'
    ),
    createMockCar(
      5,
      'Mercedes-Benz',
      'C-Class',
      2022,
      'White',
      45000,
      'https://cdn.imagin.studio/getImage?customer=carkio&make=mercedes-benz&modelFamily=c-class&zoomType=fullscreen'
    ),
  ];
