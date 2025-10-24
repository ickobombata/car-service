export interface SliderContent {
  id: number;
  title: string;
  text: string;
  backgroundImage: string;
  buttonText?: string;
  buttonLink?: string;
}

export interface Review {
  id: number;
  customerName: string;
  rating: number;
  reviewText: string;
  serviceType: string;
  date: string;
}

export const SLIDER_CONTENT: SliderContent[] = [
  {
    id: 1,
    title: "Quality Car Sales",
    text: "Discover our carefully selected pre-owned vehicles, each inspected and repaired to the highest standards. Drive away with confidence knowing you're getting a quality car with warranty protection.",
    backgroundImage: "assets/slider1.jpg",
    buttonText: "View Available Cars",
    buttonLink: "/contact-us"
  },
  {
    id: 2,
    title: "Expert Mechanical Services",
    text: "Our certified mechanics provide comprehensive automotive repairs with extended warranty coverage. From oil changes to engine rebuilds, we've got you covered.",
    backgroundImage: "assets/slider2.jpg",
    buttonText: "Schedule Service",
    buttonLink: "/contact-us"
  },
  {
    id: 3,
    title: "Trusted for Years",
    text: "Join thousands of satisfied customers who trust us with their automotive needs. Experience the difference that quality service and warranty-backed repairs make.",
    backgroundImage: "assets/slider3.jpg",
    buttonText: "Learn More",
    buttonLink: "/about-us"
  }
];

export const CUSTOMER_REVIEWS: Review[] = [
  {
    id: 1,
    customerName: "Sarah Johnson",
    rating: 5,
    reviewText: "Excellent service! They fixed my transmission issue quickly and the warranty gives me peace of mind. Highly recommend their professional team.",
    serviceType: "Transmission Repair",
    date: "2024-01-15"
  },
  {
    id: 2,
    customerName: "Mike Davis",
    rating: 5,
    reviewText: "Bought a car from them last month. The inspection process was thorough and the car has been running perfectly. Great value for money!",
    serviceType: "Car Purchase",
    date: "2024-01-10"
  },
  {
    id: 3,
    customerName: "Emily Rodriguez",
    rating: 5,
    reviewText: "Outstanding brake service! They explained everything clearly and the work was completed on time. The warranty coverage is fantastic.",
    serviceType: "Brake Service",
    date: "2024-01-08"
  },
  {
    id: 4,
    customerName: "David Thompson",
    rating: 5,
    reviewText: "Had my engine rebuilt here and couldn't be happier. The quality of work is exceptional and the extended warranty is a game-changer.",
    serviceType: "Engine Rebuild",
    date: "2024-01-05"
  },
  {
    id: 5,
    customerName: "Lisa Chen",
    rating: 5,
    reviewText: "Professional, honest, and reliable. They diagnosed my electrical issue accurately and fixed it without any surprises. Will definitely return.",
    serviceType: "Electrical Repair",
    date: "2024-01-03"
  },
  {
    id: 6,
    customerName: "Robert Wilson",
    rating: 5,
    reviewText: "Great experience from start to finish. The team is knowledgeable, friendly, and the warranty on their work gives me confidence in their service.",
    serviceType: "AC Service",
    date: "2024-01-01"
  }
];
