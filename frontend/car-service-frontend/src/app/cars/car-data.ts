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
  year: number;
  price: number;
  mileage: number;
  transmission: 'Automatic' | 'Manual' | '';
  fuelType: 'Gasoline' | 'Diesel' | 'Hybrid' | 'Electric' | '';
  color: string;
  description: string;
  images: CarImage[];
  horsepower: string;
  doors: number;
  warranty: string;
  vin: string;
  dateAdded: string;
}

export function mapPocketbaseCarToCar(pbCar: PocketbaseCar): Car {
  return {
    id: pbCar.id,
    make: pbCar.name,
    model: pbCar.model,
    year: 0, // Placeholder
    price: 0, // Placeholder
    mileage: 0, // Placeholder
    transmission: '', // Placeholder
    fuelType: '', // Placeholder
    color: '', // Placeholder
    description: '', // Placeholder
    images: pbCar.images.map((imgName) => ({
      url: `https://avtorevolucija.duckdns.org/api/files/${pbCar.collectionId}/${pbCar.id}/${imgName}`,
      alt: `${pbCar.name} ${pbCar.model} image`,
      isMain: true, // Placeholder
    })),
    horsepower: pbCar.specs.hp ? pbCar.specs.hp.toString() : 'N/A',
    doors: pbCar.specs.doors ? pbCar.specs.doors : 0,
    warranty: '', // Placeholder
    vin: '', // Placeholder
    dateAdded: '', // Placeholder
  };
}
