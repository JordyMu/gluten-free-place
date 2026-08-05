export interface StellenboschRestaurant {
  name: string;
  slug: string;
  rating: number;
  reviews: number;
  cuisine: string;
  address: string;
  hours: string;
  website: string;
  phone: string;
  menuType: string;
  celiacInfo: string;
  description: string;
  specialties: string[];
  proTip: string;
  featured: boolean;
}

export const stellenboschRestaurants: StellenboschRestaurant[] = [
  {
    name: "Tokara Restaurant",
    slug: "tokara-restaurant",
    rating: 4.8,
    reviews: 342,
    cuisine: "Fine Dining",
    address: "Helshoogte Pass, Stellenbosch",
    hours: "12:00 PM - 3:00 PM, 7:00 PM - 9:30 PM",
    website: "tokara.com",
    phone: "+27 21 885 2550",
    menuType: "Extensive GF Options",
    celiacInfo: "Chef-trained, separate prep area",
    description:
      "Award-winning restaurant with panoramic views of the Simonsberg mountains. Their kitchen is highly trained in celiac requirements with dedicated prep areas.",
    specialties: ["Farm-to-table cuisine", "Wine pairings", "Tasting menus"],
    proTip: "Request the celiac-safe tasting menu - the chef creates a special journey using local ingredients.",
    featured: true,
  },
  {
    name: "Overture at Hidden Valley",
    slug: "overture-at-hidden-valley",
    rating: 4.7,
    reviews: 256,
    cuisine: "Contemporary",
    address: "Hidden Valley Wine Estate, Stellenbosch",
    hours: "12:00 PM - 2:30 PM, Wed-Sun",
    website: "overturerestaurant.co.za",
    phone: "+27 21 880 2646",
    menuType: "GF Menu Available",
    celiacInfo: "Trained staff, clear allergen marking",
    description:
      "Fine dining experience overlooking beautiful vineyards. Known for their exceptional wine pairings and accommodating approach to dietary requirements.",
    specialties: ["5-course tasting menu", "Local wines", "Seasonal dishes"],
    proTip: "Book the terrace for stunning sunset views over the vines while enjoying your gluten-free feast.",
    featured: false,
  },
  {
    name: "Jardine Restaurant",
    slug: "jardine-restaurant",
    rating: 4.6,
    reviews: 198,
    cuisine: "Modern South African",
    address: "1 Andringa Street, Stellenbosch",
    hours: "12:00 PM - 9:00 PM",
    website: "jardine.co.za",
    phone: "+27 21 886 5020",
    menuType: "GF Options",
    celiacInfo: "Kitchen trained, modifications available",
    description:
      "Located in the heart of Stellenbosch, Jardine offers contemporary South African cuisine with excellent gluten-free adaptations.",
    specialties: ["Local game", "Seafood", "Artisan desserts"],
    proTip: "Their chocolate fondant can be made gluten-free with advance notice - absolutely divine!",
    featured: false,
  },
  {
    name: "The Big Easy by Ernie Els",
    slug: "the-big-easy-by-ernie-els",
    rating: 4.5,
    reviews: 312,
    cuisine: "Steakhouse & Grill",
    address: "Ernie Els Wines, Stellenbosch",
    hours: "11:00 AM - 10:00 PM",
    website: "bigeasywine.com",
    phone: "+27 21 881 3052",
    menuType: "GF Menu Available",
    celiacInfo: "Clear menu marking, staff awareness",
    description:
      "Premium steakhouse on the Ernie Els wine estate. Their naturally gluten-free meat dishes and sides make dining safe and delicious.",
    specialties: ["Aged steaks", "Estate wines", "Grilled seafood"],
    proTip: "The ribeye with truffle butter is naturally gluten-free and pairs perfectly with their flagship Signature wine.",
    featured: false,
  },
  {
    name: "Schoon de Companje",
    slug: "schoon-de-companje",
    rating: 4.4,
    reviews: 423,
    cuisine: "Bakery & Café",
    address: "50 Church Street, Stellenbosch",
    hours: "7:00 AM - 5:00 PM",
    website: "schoon.co.za",
    phone: "+27 21 883 8760",
    menuType: "GF Baked Goods",
    celiacInfo: "Dedicated GF products, separate display",
    description:
      "Artisan bakery offering a selection of gluten-free breads, pastries, and cakes. Perfect for breakfast or a coffee stop.",
    specialties: ["GF sourdough", "Pastries", "Artisan coffee"],
    proTip: "Arrive early for the best selection of gluten-free items - they sell out fast on weekends!",
    featured: false,
  },
];

export const getStellenboschRestaurantBySlug = (slug: string): StellenboschRestaurant | undefined => {
  return stellenboschRestaurants.find((r) => r.slug === slug);
};
