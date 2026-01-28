export interface Restaurant {
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
  venueType: "bakery" | "restaurant" | "cafe";
  photos: string[];
  celiacSafetyScore?: number;
}

export const pretoriaRestaurants: Restaurant[] = [
  {
    name: "Leafy Greens Café",
    slug: "leafy-greens-cafe",
    address: "Shop 2, Menlyn Maine, Pretoria, 0181",
    city: "pretoria",
    country: "south-africa",
    hours: "Daily: 7:00AM – 9:00PM",
    phone: "+27 12 348 1234",
    website: "www.leafygreens.co.za",
    directionsUrl: "https://www.google.com/maps/search/Leafy+Greens+Cafe+Menlyn+Maine+Pretoria",
    specialty: "Health-Focused Café",
    overview: "Leafy Greens is a popular health café offering a wide range of gluten-free options. Their menu is clearly marked and staff are well-trained in dietary requirements.",
    menuHighlights: ["🥗 GF Salads & Bowls", "🍳 Breakfast (GF options)", "🥤 Fresh Juices", "🍰 GF Baked Goods"],
    proTip: "Try their signature GF Buddha bowl!",
    icon: "🥗",
    featured: true,
    cuisineTypes: ["Healthy", "Café", "Vegetarian"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    rating: 4.6,
    reviewCount: 198,
    lat: -25.7864,
    lng: 28.2774,
    venueType: "cafe",
    photos: []
  },
  {
    name: "Kream Restaurant",
    slug: "kream-restaurant",
    address: "481 Rodericks Rd, Lynnwood, Pretoria, 0081",
    city: "pretoria",
    country: "south-africa",
    hours: "Tue–Sat: 12:00PM – 10:00PM, Sun: 12:00PM – 4:00PM",
    phone: "+27 12 361 1797",
    website: "www.kream.co.za",
    directionsUrl: "https://www.google.com/maps/search/Kream+Restaurant+Lynnwood+Pretoria",
    specialty: "Fine Dining",
    overview: "Award-winning fine dining restaurant offering creative cuisine with excellent gluten-free accommodations. Chef-driven menu changes seasonally.",
    menuHighlights: ["🍽️ Tasting Menu (GF options)", "🥩 Quality Proteins (GF)", "🍰 GF Desserts", "🍷 Wine Pairing"],
    proTip: "Mention GF requirements when booking!",
    icon: "🍽️",
    featured: true,
    cuisineTypes: ["Fine Dining", "Contemporary"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    rating: 4.8,
    reviewCount: 234,
    lat: -25.7633,
    lng: 28.2847,
    venueType: "restaurant",
    photos: []
  },
  {
    name: "Pachas",
    slug: "pachas",
    address: "Shop 2, Hazelwood, 245 Hazelwood Rd, Pretoria, 0081",
    city: "pretoria",
    country: "south-africa",
    hours: "Daily: 7:00AM – 5:00PM",
    phone: "+27 12 460 4367",
    website: "www.pachas.co.za",
    directionsUrl: "https://www.google.com/maps/search/Pachas+Hazelwood+Pretoria",
    specialty: "Mediterranean Café",
    overview: "Popular Mediterranean-inspired café with an extensive menu including many gluten-free breakfast and lunch options.",
    menuHighlights: ["🍳 All-Day Breakfast (GF options)", "🥗 Mediterranean Salads (GF)", "🍔 GF Bread Options", "☕ Quality Coffee"],
    proTip: "Their GF pancakes are excellent!",
    icon: "☕",
    featured: true,
    cuisineTypes: ["Mediterranean", "Café"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    rating: 4.5,
    reviewCount: 289,
    lat: -25.7589,
    lng: 28.2692,
    venueType: "cafe",
    photos: []
  },
  {
    name: "Ritrovo Ristorante",
    slug: "ritrovo-ristorante",
    address: "Essex Square, 265 West Ave, Centurion, 0157",
    city: "pretoria",
    country: "south-africa",
    hours: "Mon–Sat: 12:00PM – 10:00PM",
    phone: "+27 12 663 6820",
    website: "www.ritrovo.co.za",
    directionsUrl: "https://www.google.com/maps/search/Ritrovo+Ristorante+Centurion",
    specialty: "Italian Cuisine",
    overview: "Authentic Italian restaurant offering gluten-free pasta and pizza options. Known for accommodating dietary requirements with care.",
    menuHighlights: ["🍝 GF Pasta Options", "🍕 GF Pizza Bases", "🥗 Italian Salads (GF)", "🍰 GF Tiramisu"],
    proTip: "Their GF pasta is made in-house!",
    icon: "🍝",
    featured: true,
    cuisineTypes: ["Italian", "Pizza"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    rating: 4.4,
    reviewCount: 267,
    lat: -25.8601,
    lng: 28.1889,
    venueType: "restaurant",
    photos: []
  },
  {
    name: "Afro-Boer Restaurant",
    slug: "afro-boer-restaurant",
    address: "Cnr Festival & Lenchen Sts, Centurion, 0157",
    city: "pretoria",
    country: "south-africa",
    hours: "Daily: 11:00AM – 10:00PM",
    phone: "+27 12 663 1753",
    website: "www.afroboer.co.za",
    directionsUrl: "https://www.google.com/maps/search/Afro+Boer+Restaurant+Centurion",
    specialty: "South African Cuisine",
    overview: "Traditional South African restaurant specializing in braai and local dishes. Many meat options are naturally gluten-free with GF sides available.",
    menuHighlights: ["🥩 Braai Meats (GF)", "🍖 Traditional Potjie (ask GF)", "🥗 Fresh Sides (GF)", "🍺 Local Drinks"],
    proTip: "Ask about GF marinade options!",
    icon: "🥩",
    featured: false,
    cuisineTypes: ["South African", "Braai", "Traditional"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    rating: 4.3,
    reviewCount: 312,
    lat: -25.8594,
    lng: 28.1893,
    venueType: "restaurant",
    photos: []
  },
  {
    name: "Tasha's Menlyn Maine",
    slug: "tashas-menlyn-maine",
    address: "Shop 45, Menlyn Maine, Pretoria, 0181",
    city: "pretoria",
    country: "south-africa",
    hours: "Daily: 7:00AM – 9:00PM",
    phone: "+27 12 348 9999",
    website: "www.tashas.co.za",
    directionsUrl: "https://www.google.com/maps/search/Tashas+Menlyn+Maine+Pretoria",
    specialty: "Upscale Café",
    overview: "Part of the renowned Tashas chain, offering stylish dining with a comprehensive gluten-free menu clearly marked.",
    menuHighlights: ["🥗 Salads with GF Options", "🍳 Breakfast (GF)", "🥩 Grilled Proteins (GF)", "🍰 GF Desserts"],
    proTip: "Ask for their separate GF menu!",
    icon: "🍽️",
    featured: true,
    cuisineTypes: ["Café", "International"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    rating: 4.5,
    reviewCount: 234,
    lat: -25.7867,
    lng: 28.2777,
    venueType: "cafe",
    photos: []
  },
  {
    name: "Ocean Basket Brooklyn",
    slug: "ocean-basket-brooklyn",
    address: "Brooklyn Mall, 380 Bronkhorst St, Pretoria, 0181",
    city: "pretoria",
    country: "south-africa",
    hours: "Daily: 11:00AM – 9:00PM",
    phone: "+27 12 346 4767",
    website: "www.oceanbasket.com",
    directionsUrl: "https://www.google.com/maps/search/Ocean+Basket+Brooklyn+Mall+Pretoria",
    specialty: "Seafood",
    overview: "Popular seafood chain offering fresh fish and shellfish. Many dishes are naturally gluten-free with GF sauce options available.",
    menuHighlights: ["🦐 Grilled Seafood (GF)", "🐟 Fresh Fish (GF)", "🥗 Seafood Salads (GF)", "🍚 Rice Sides (GF)"],
    proTip: "Ask about GF crumbed options!",
    icon: "🦐",
    featured: false,
    cuisineTypes: ["Seafood", "Mediterranean"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    rating: 4.2,
    reviewCount: 345,
    lat: -25.7721,
    lng: 28.2378,
    venueType: "restaurant",
    photos: []
  },
  {
    name: "The Farmhouse",
    slug: "the-farmhouse",
    address: "Plot 62, Silver Lakes Rd, Silver Lakes, Pretoria, 0054",
    city: "pretoria",
    country: "south-africa",
    hours: "Tue–Sun: 8:00AM – 5:00PM",
    phone: "+27 12 809 0568",
    website: "www.thefarmhouse.co.za",
    directionsUrl: "https://www.google.com/maps/search/The+Farmhouse+Silver+Lakes+Pretoria",
    specialty: "Farm-to-Table",
    overview: "Charming farm-style restaurant offering fresh, locally-sourced dishes with excellent gluten-free options in a beautiful setting.",
    menuHighlights: ["🍳 Farm Breakfast (GF options)", "🥗 Fresh Salads (GF)", "🥩 Grilled Meats (GF)", "🍰 Homestyle Desserts (GF available)"],
    proTip: "Beautiful venue for special occasions!",
    icon: "🏡",
    featured: false,
    cuisineTypes: ["Farm-to-Table", "South African"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    rating: 4.4,
    reviewCount: 189,
    lat: -25.7234,
    lng: 28.3567,
    venueType: "restaurant",
    photos: []
  }
];

export const getPretoriaRestaurantBySlug = (slug: string): Restaurant | undefined => {
  return pretoriaRestaurants.find(restaurant => restaurant.slug === slug);
};
