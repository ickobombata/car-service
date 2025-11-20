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
      title: translate('HOME.HEADLINE'),
      text: translate('HOME.MARKETING_FRIENDLY'),
      backgroundImage: "assets/service/4a20eba5-2412-4d94-957b-eca2d2d9cdf0.jpg",
      buttonText: translate('HOME.VIEW_OFFER_BUTTON'),
      buttonLink: "/cars"
    },
    {
      id: 2,
      title: translate('HOME.SLIDER2_TITLE'),
      text: translate('HOME.SLIDER2_TEXT'),
      backgroundImage: "assets/service/garage-1.jpg",
      buttonText: translate('HOME.SLIDER2_BUTTON'),
      buttonLink: "/services"
    },
    {
      id: 3,
      title: translate('HOME.SLIDER3_TITLE'),
      text: translate('HOME.SLIDER3_TEXT'),
      backgroundImage: "assets/satisfied-clients/give-keys-to-client.jpg",
      buttonText: translate('HOME.SLIDER3_BUTTON'),
      buttonLink: "/about-us"
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
