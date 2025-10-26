export interface CarImage {
  url: string;
  alt: string;
  isMain?: boolean; // Re-introduced for potential use in detailed view, but not from Pocketbase
}

export interface CarSpec {
  key: string;
  value: string;
}

export interface PocketbaseCarSpec {
  hp: number;
  doors: number;
}

export interface PocketbaseCar {
  collectionId: string;
  collectionName: string;
  created: string;
  id: string;
  images: string[];
  model: string;
  name: string;
  specs: PocketbaseCarSpec;
  updated: string;
}

export interface Car {
  id: string;
  make: string;
  model: string;
  year: number; // Re-introduced
  price: number; // Re-introduced
  mileage: number; // Re-introduced
  condition: 'Excellent' | 'Very Good' | 'Good' | 'Fair'; // Re-introduced
  transmission: 'Automatic' | 'Manual' | ''; // Re-introduced
  fuelType: 'Gasoline' | 'Diesel' | 'Hybrid' | 'Electric' | ''; // Re-introduced
  engine: string; // Re-introduced
  color: string; // Re-introduced
  description: string; // Re-introduced
  features: string[]; // Re-introduced
  images: CarImage[];
  specifications: CarSpec[]; // Re-introduced
  warranty: string; // Re-introduced
  vin: string; // Re-introduced
  stockNumber: string; // Re-introduced
  dateAdded: string; // Re-introduced
}

export function mapPocketbaseCarToCar(pbCar: PocketbaseCar): Car {
  return {
    id: pbCar.id,
    make: pbCar.name,
    model: pbCar.model,
    year: 0, // Placeholder
    price: 0, // Placeholder
    mileage: 0, // Placeholder
    condition: 'Good', // Placeholder
    transmission: '', // Placeholder
    fuelType: '', // Placeholder
    engine: '', // Placeholder
    color: '', // Placeholder
    description: '', // Placeholder
    features: [], // Placeholder
    images: pbCar.images.map((imgName) => ({
      url: `https://avtorevolucija.duckdns.org/api/files/${pbCar.collectionId}/${pbCar.id}/${imgName}`,
      alt: `${pbCar.name} ${pbCar.model} image`,
      isMain: true, // Placeholder
    })),
    specifications: [
      { key: 'Horsepower', value: pbCar.specs.hp ? pbCar.specs.hp.toString() : 'N/A' },
      { key: 'Doors', value: pbCar.specs.doors ? pbCar.specs.doors.toString() : 'N/A' },
    ],
    warranty: '', // Placeholder
    vin: '', // Placeholder
    stockNumber: '', // Placeholder
    dateAdded: '', // Placeholder
  };
}
