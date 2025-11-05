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

export function getSliderContent(translate: (key: string) => string): SliderContent[] {
  return [
    {
      id: 1,
      title: "EXPERIENCE THE FUTURE OF DRIVING",
      text: "Explore a range of vehicles that redefine performance and elegance.",
      backgroundImage: "assets/service/garage-1.jpg",
      buttonText: "View Models",
      buttonLink: "/cars"
    },
    {
      id: 2,
      title: "QUALITY CAR SALES",
      text: "Discover meticulously inspected vehicles and unparalleled customer service.",
      backgroundImage: "assets/service/garage-interior.jpg",
      buttonText: "Learn More",
      buttonLink: "/about-us"
    },
    {
      id: 3,
      title: "YOUR TRUSTED AUTO PARTNER",
      text: "Committed to exceptional service and a seamless car ownership experience.",
      backgroundImage: "assets/satisfied-clients/give-keys-to-client.jpg",
      buttonText: "Contact Us",
      buttonLink: "/contact-us"
    }
  ];
}

export function getCustomerReviews(translate: (key: string) => string): Review[] {
  return [
    {
      id: 1,
      customerName: "Sarah Johnson",
      rating: 5,
      reviewText: translate('HOME.REVIEW1_TEXT'),
      serviceType: translate('HOME.REVIEW1_SERVICE_TYPE'),
      date: "2024-01-15"
    },
    {
      id: 2,
      customerName: "Mike Davis",
      rating: 5,
      reviewText: translate('HOME.REVIEW2_TEXT'),
      serviceType: translate('HOME.REVIEW2_SERVICE_TYPE'),
      date: "2024-01-10"
    },
    {
      id: 3,
      customerName: "Emily Rodriguez",
      rating: 5,
      reviewText: translate('HOME.REVIEW3_TEXT'),
      serviceType: translate('HOME.REVIEW3_SERVICE_TYPE'),
      date: "2024-01-08"
    },
    {
      id: 4,
      customerName: "David Thompson",
      rating: 5,
      reviewText: translate('HOME.REVIEW4_TEXT'),
      serviceType: translate('HOME.REVIEW4_SERVICE_TYPE'),
      date: "2024-01-05"
    },
    {
      id: 5,
      customerName: "Lisa Chen",
      rating: 5,
      reviewText: translate('HOME.REVIEW5_TEXT'),
      serviceType: translate('HOME.REVIEW5_SERVICE_TYPE'),
      date: "2024-01-03"
    },
    {
      id: 6,
      customerName: "Robert Wilson",
      rating: 5,
      reviewText: translate('HOME.REVIEW6_TEXT'),
      serviceType: translate('HOME.REVIEW6_SERVICE_TYPE'),
      date: "2024-01-01"
    }
  ];
}
