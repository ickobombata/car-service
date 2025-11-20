import { Car, CarImage, CarSpec } from './car-data';

const createMockCar = (
  id: number,
  make: string,
  model: string,
  year: number,
  color: string,
  price: number,
  imageUrls: string[],
  horsepower: string,
  doors: number,
  vin: string,
  dateAdded: string,
  description: string
): Car => ({
  id: id.toString(),
  make,
  model,
  year,
  price,
  mileage: Math.floor(Math.random() * 100000), // Random mileage
  transmission: 'Automatic', // Default transmission
  fuelType: 'Gasoline', // Default fuel type
  color,
  warranty: '3 years / 36,000 miles', // Default warranty
  horsepower,
  doors,
  vin,
  dateAdded,
  description,
  images: imageUrls.map((url, index) => ({ url, alt: `${make} ${model} image ${index + 1}`, isMain: index === 0 })),
});

export const MOCK_CARS: Car[] = [
    createMockCar(
      1,
      'Toyota',
      'Camry',
      2020,
      'Silver',
      25000,
      [
        'assets/cars/016d85af-b9f9-4580-a6ec-0c3eae009ed2.jpg',
        'assets/cars/35fff203-485b-4337-b88a-3bb5cbe11c42.jpg',
        'assets/cars/42af0b9a-c54f-482b-9349-632b050d5563.jpg',
      ],
      '200hp',
      4,
      'VIN1MOCK',
      new Date().toISOString(),
      `This is a beautiful 2020 Toyota Camry in Silver.`,
    ),
    createMockCar(
      2,
      'Honda',
      'Civic',
      2021,
      'Blue',
      23000,
      [
        'assets/cars/1f405d71-5ff5-4360-a5db-37fd0504a3fe.jpg',
        'assets/cars/016d85af-b9f9-4580-a6ec-0c3eae009ed2.jpg',
      ],
      '180hp',
      4,
      'VIN2MOCK',
      new Date().toISOString(),
      `This is a beautiful 2021 Honda Civic in Blue.`
    ),
    createMockCar(
      3,
      'Ford',
      'Mustang',
      2022,
      'Red',
      35000,
      [
        'assets/cars/35fff203-485b-4337-b88a-3bb5cbe11c42.jpg',
        'assets/cars/016d85af-b9f9-4580-a6ec-0c3eae009ed2.jpg',
        'assets/cars/1f405d71-5ff5-4360-a5db-37fd0504a3fe.jpg',
      ],
      '300hp',
      2,
      'VIN3MOCK',
      new Date().toISOString(),
      `This is a beautiful 2022 Ford Mustang in Red.`
    ),
    createMockCar(
      4,
      'BMW',
      'X5',
      2023,
      'Black',
      60000,
      ['assets/cars/3c100088-2545-4307-9a0a-aa024534cadb.jpg'],
      '350hp',
      4,
      'VIN4MOCK',
      new Date().toISOString(),
      `This is a beautiful 2023 BMW X5 in Black.`
    ),
    createMockCar(
      5,
      'Mercedes-Benz',
      'C-Class',
      2022,
      'White',
      45000,
      ['assets/cars/42af0b9a-c54f-482b-9349-632b050d5563.jpg'],
      '250hp',
      4,
      'VIN5MOCK',
      new Date().toISOString(),
      `This is a beautiful 2022 Mercedes-Benz C-Class in White.`
    ),
  ];
