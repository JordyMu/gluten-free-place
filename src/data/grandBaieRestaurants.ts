export interface MauritiusCityRestaurant {
  name: string;
  slug: string;
  address: string;
  city: string;
  country: string;
  hours: string;
  phone: string;
  website: string;
  directionsUrl: string;
  specialty: string;
  overview: string;
  menuHighlights: string[];
  proTip: string;
  icon: string;
  featured: boolean;
  cuisineTypes: string[];
  celiacSafe: "dedicated-facility" | "protocols-in-place";
  menuType: "fully-gluten-free" | "mixed-menu";
  rating: number;
  reviewCount: number;
  lat: number;
  lng: number;
  venueType: "bakery" | "restaurant" | "cafe" | "supermarket" | "street-food" | "home-baker" | "gf-products";
  photos: (string | { url: string; caption?: string })[];
  menuNotes?: string[];
  menuPhotos?: string[];
  staffKnowledgeScore?: number;
  celiacSafetyScore?: number;
  distance?: number;
}

export const grandBaieRestaurants: MauritiusCityRestaurant[] = [
  {
    name: "Maison des Crêpes",
    slug: "maison-des-crepes",
    address: "Racket Road, Chemin du Grand Bazaar, Grand Baie, Mauritius",
    city: "Grand Baie",
    country: "Mauritius",
    hours: "Mon–Sat: 11:00AM – 9:00PM",
    phone: "",
    website: "",
    directionsUrl: "https://www.google.com/maps/search/Maison+des+Crêpes+Grand+Baie+Mauritius",
    specialty: "French Crêperie with GF Options",
    overview: "A charming crêperie in Grand Baie offering both savory and sweet crêpes. They can prepare gluten-free buckwheat galettes upon request.",
    menuHighlights: ["🥞 Buckwheat Galettes (GF)", "🧀 Savory Crêpes (GF option)", "🍫 Sweet Crêpes", "🥗 Fresh Salads (GF)"],
    proTip: "Ask specifically for buckwheat (sarrasin) galettes — they're naturally gluten-free!",
    icon: "🥞",
    featured: true,
    cuisineTypes: ["French", "Crêperie"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    rating: 4.3,
    reviewCount: 89,
    lat: -20.0117,
    lng: 57.5836,
    venueType: "restaurant",
    photos: []
  },
  {
    name: "Luigi's Italian Pizzeria & Pasta Bar",
    slug: "luigis-italian-pizzeria-pasta-bar",
    address: "Royal Road, B13, Grand Baie, Mauritius",
    city: "Grand Baie",
    country: "Mauritius",
    hours: "Daily: 11:30AM – 10:00PM",
    phone: "",
    website: "",
    directionsUrl: "https://www.google.com/maps/search/Luigi's+Italian+Pizzeria+Grand+Baie+Mauritius",
    specialty: "Italian with GF Pizza & Pasta",
    overview: "Popular Italian eatery in the heart of Grand Baie serving pizza and pasta. They offer gluten-free pizza bases and GF pasta upon request.",
    menuHighlights: ["🍕 GF Pizza Available", "🍝 GF Pasta Options", "🥗 Italian Salads (GF)", "🍰 Tiramisu"],
    proTip: "Order the GF pizza base — it's crispy and delicious. Confirm with staff about separate preparation.",
    icon: "🍕",
    featured: true,
    cuisineTypes: ["Italian", "Pizza", "Pasta"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    rating: 4.2,
    reviewCount: 156,
    lat: -20.0133,
    lng: 57.5818,
    venueType: "restaurant",
    photos: []
  },
  {
    name: "Fynbos Meeting Place",
    slug: "fynbos-meeting-place",
    address: "Chem. Vingt Pieds, Grand Baie 30513, Mauritius",
    city: "Grand Baie",
    country: "Mauritius",
    hours: "Mon–Sat: 8:00AM – 4:00PM",
    phone: "",
    website: "",
    directionsUrl: "https://www.google.com/maps/search/Fynbos+Meeting+Place+Grand+Baie+Mauritius",
    specialty: "Healthy Café with GF Options",
    overview: "A health-conscious café offering fresh, wholesome meals with plenty of naturally gluten-free options including bowls, salads, and smoothies.",
    menuHighlights: ["🥗 Fresh Bowls (GF)", "🥤 Smoothies & Juices", "🍳 GF Breakfast Options", "🥑 Avocado Dishes (GF)"],
    proTip: "Great breakfast spot! Their açaí bowls and fresh juices are all naturally GF.",
    icon: "🥗",
    featured: true,
    cuisineTypes: ["Healthy", "Café", "Organic"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    rating: 4.5,
    reviewCount: 112,
    lat: -20.0089,
    lng: 57.5843,
    venueType: "cafe",
    photos: []
  },
  {
    name: "Pomodoro Pizzeria Trattoria",
    slug: "pomodoro-pizzeria-trattoria",
    address: "LA CROISETTE, Grand Baie, Mauritius",
    city: "Grand Baie",
    country: "Mauritius",
    hours: "Daily: 12:00PM – 10:00PM",
    phone: "",
    website: "",
    directionsUrl: "https://www.google.com/maps/search/Pomodoro+Pizzeria+Trattoria+Grand+Baie+Mauritius",
    specialty: "Italian Trattoria with GF Options",
    overview: "Located in the popular La Croisette shopping complex, Pomodoro serves authentic Italian cuisine with gluten-free pizza and pasta alternatives.",
    menuHighlights: ["🍕 GF Pizza Base Available", "🍝 GF Pasta", "🥗 Caprese & Green Salads (GF)", "🍖 Grilled Meats (GF)"],
    proTip: "Located in La Croisette mall — great for combining shopping with a safe GF meal.",
    icon: "🍕",
    featured: false,
    cuisineTypes: ["Italian", "Pizza", "Trattoria"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    rating: 4.1,
    reviewCount: 134,
    lat: -20.0102,
    lng: 57.5795,
    venueType: "restaurant",
    photos: []
  },
  {
    name: "Wang Thai",
    slug: "wang-thai",
    address: "1st Floor, Beach House Complex, Coastal Road, Grand Baie, Mauritius",
    city: "Grand Baie",
    country: "Mauritius",
    hours: "Daily: 12:00PM – 10:30PM",
    phone: "",
    website: "",
    directionsUrl: "https://www.google.com/maps/search/Wang+Thai+Grand+Baie+Mauritius",
    specialty: "Thai Cuisine with Natural GF Options",
    overview: "An upscale Thai restaurant with ocean views offering many naturally gluten-free dishes. Thai curries, stir-fries, and rice dishes can be made GF with tamari instead of soy sauce.",
    menuHighlights: ["🍛 Thai Curries (GF)", "🍚 Jasmine Rice Dishes (GF)", "🥘 Tom Yum Soup (GF)", "🦐 Seafood Specials (GF)"],
    proTip: "Ask for tamari instead of regular soy sauce. Most curries and rice dishes are naturally GF.",
    icon: "🍛",
    featured: true,
    cuisineTypes: ["Thai", "Asian", "Seafood"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    rating: 4.4,
    reviewCount: 201,
    lat: -20.0141,
    lng: 57.5802,
    venueType: "restaurant",
    photos: []
  },
  {
    name: "Mam Gouz",
    slug: "mam-gouz",
    address: "Route Cotière, Complexe Dodo La Lodge, Grand Baie, Mauritius",
    city: "Grand Baie",
    country: "Mauritius",
    hours: "Tue–Sun: 11:00AM – 9:30PM",
    phone: "",
    website: "",
    directionsUrl: "https://www.google.com/maps/search/Mam+Gouz+Grand+Baie+Mauritius",
    specialty: "Mauritian Creole Cuisine",
    overview: "Authentic Mauritian Creole restaurant offering traditional island dishes. Many Creole stews, curries, and grilled seafood are naturally gluten-free.",
    menuHighlights: ["🍲 Creole Fish Curry (GF)", "🦐 Grilled Prawns (GF)", "🍚 Rice & Lentils (GF)", "🐙 Octopus Vindaye (GF)"],
    proTip: "Try the octopus vindaye or fish rougaille — both are traditional and naturally GF!",
    icon: "🍲",
    featured: true,
    cuisineTypes: ["Mauritian", "Creole", "Seafood"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    rating: 4.3,
    reviewCount: 78,
    lat: -20.0125,
    lng: 57.5810,
    venueType: "restaurant",
    photos: []
  },
  {
    name: "LUX* Grand Baie",
    slug: "lux-grand-baie",
    address: "Coastal Road, Grand Baie 30510, Mauritius",
    city: "Grand Baie",
    country: "Mauritius",
    hours: "Daily: 7:00AM – 10:30PM",
    phone: "",
    website: "www.luxresorts.com",
    directionsUrl: "https://www.google.com/maps/search/LUX+Grand+Baie+Mauritius",
    specialty: "Luxury Resort Dining with Dedicated GF Menu",
    overview: "LUX* Grand Baie resort features multiple restaurants that cater excellently to gluten-free guests. The kitchen team is trained in celiac-safe preparation and offers dedicated GF menus.",
    menuHighlights: ["🍽️ Dedicated GF Menu", "🦞 Fresh Seafood (GF)", "🥗 International Cuisine (GF)", "🍰 GF Desserts Available"],
    proTip: "Inform them at check-in about your dietary needs — they'll prepare a personalized GF dining plan for your stay.",
    icon: "🏨",
    featured: true,
    cuisineTypes: ["International", "Fine Dining", "Resort"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    rating: 4.7,
    reviewCount: 89,
    lat: -20.0098,
    lng: 57.5788,
    venueType: "restaurant",
    photos: []
  },
];

export const getGrandBaieRestaurantBySlug = (slug: string): MauritiusCityRestaurant | undefined => {
  return grandBaieRestaurants.find(r => r.slug === slug);
};
