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
  venueType: "bakery" | "restaurant" | "cafe" | "supermarket" | "street-food" | "home-baker" | "gf-products";
  photos: (string | { url: string; caption?: string })[];
  menuNotes?: string[];
  menuPhotos?: string[];
  staffKnowledgeScore?: number;
  celiacSafetyScore?: number;
}

export const durbanRestaurants: Restaurant[] = [
  {
    name: "9th Avenue Bistro",
    slug: "9th-avenue-bistro",
    address: "9th Ave, Morningside, Durban, 4001",
    city: "Durban",
    country: "South Africa",
    hours: "Tue–Sat: 6:30PM – 10:00PM",
    phone: "+27 31 312 9134",
    website: "www.9thavenuebistro.co.za",
    directionsUrl: "https://www.google.com/maps/search/9th+Avenue+Bistro+Morningside+Durban",
    specialty: "Fine Dining with GF Options",
    overview: "Award-winning fine dining restaurant offering a sophisticated menu with excellent gluten-free accommodations. Chef is very aware of dietary requirements and creates beautiful GF dishes.",
    menuHighlights: ["🥩 Fine Dining Mains (GF options)", "🥗 Creative Starters (GF)", "🍰 GF Desserts", "🍷 Wine Pairing"],
    proTip: "Mention GF requirements when booking!",
    icon: "🍽️",
    featured: true,
    cuisineTypes: ["Fine Dining", "Contemporary"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    rating: 4.7,
    reviewCount: 234,
    lat: -29.8330,
    lng: 31.0089,
    venueType: "restaurant",
    photos: [
      { url: "/src/assets/9th-avenue-bistro-dish.webp", caption: "Fine dining plated dish with elegant presentation" },
      { url: "/src/assets/9th-avenue-bistro-mussels.webp", caption: "Creamy mussels with fresh herbs" },
      { url: "/src/assets/9th-avenue-bistro-duck.webp", caption: "Duck confit with glazed carrots and jus" },
      { url: "/src/assets/9th-avenue-bistro-dessert.jpg", caption: "Decadent dessert with ice cream" }
    ],
    menuNotes: [
      "Call ahead to discuss GF menu options",
      "Chef is knowledgeable about celiac requirements",
      "Many dishes can be adapted to be GF"
    ],
    staffKnowledgeScore: 4,
    celiacSafetyScore: 7
  },
  {
    name: "The Glenwood Bakery",
    slug: "the-glenwood-bakery",
    address: "275 Helen Joseph Rd, Glenwood, Durban, 4001",
    city: "Durban",
    country: "South Africa",
    hours: "Mon–Fri: 6:30AM – 5:00PM, Sat: 7:00AM – 2:00PM",
    phone: "+27 31 201 8200",
    website: "www.glenwoodbakery.co.za",
    directionsUrl: "https://www.google.com/maps/search/Glenwood+Bakery+Durban",
    specialty: "Artisan Bakery with GF Options",
    overview: "Popular neighborhood bakery offering a selection of gluten-free breads and baked goods alongside their regular menu. A trusted spot for GF bread in Durban.",
    menuHighlights: ["🥖 GF Bread Options", "🍰 GF Cakes", "🥗 Light Meals (GF options)", "☕ Coffee"],
    proTip: "Call ahead for GF bread availability!",
    icon: "🥖",
    featured: true,
    cuisineTypes: ["Bakery", "Café"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    rating: 4.5,
    reviewCount: 178,
    lat: -29.8621,
    lng: 31.0172,
    venueType: "bakery",
    photos: [
      { url: "/src/assets/glenwood-bakery-1.webp", caption: "Artisan bread loaf with beautiful crust" },
      { url: "/src/assets/glenwood-bakery-2.jpg", caption: "Eggs Benedict with hollandaise sauce" },
      { url: "/src/assets/glenwood-bakery-3.jpg", caption: "Gluten-free pizza with fresh toppings" },
      { url: "/src/assets/glenwood-bakery-4.webp", caption: "Specialty coffee with latte art" },
      { url: "/src/assets/glenwood-bakery-5.jpg", caption: "Poached eggs with fresh greens" },
      { url: "/src/assets/glenwood-bakery-6.jpg", caption: "Gourmet sandwich with avocado and tomatoes" },
      { url: "/src/assets/glenwood-bakery-7.jpg", caption: "Cozy café interior seating area" },
      { url: "/src/assets/glenwood-bakery-8.jpg", caption: "Freshly baked pastries on display" }
    ],
    menuNotes: [
      "GF breads available but call to confirm",
      "Not a dedicated GF facility",
      "Some cakes and pastries available GF"
    ],
    staffKnowledgeScore: 3,
    celiacSafetyScore: 5
  },
  {
    name: "Café 1999",
    slug: "cafe-1999",
    address: "Silvervause Centre, Silverton Rd, Musgrave, Durban, 4001",
    city: "Durban",
    country: "South Africa",
    hours: "Daily: 7:00AM – 9:00PM",
    phone: "+27 31 201 7171",
    website: "www.cafe1999.co.za",
    directionsUrl: "https://www.google.com/maps/search/Cafe+1999+Musgrave+Durban",
    specialty: "All-Day Dining",
    overview: "Popular family restaurant with an extensive menu including many gluten-free options. Known for accommodating dietary requirements and family-friendly atmosphere.",
    menuHighlights: ["🍳 Breakfast (GF options)", "🥗 Salads (GF)", "🍔 GF Bun Options", "🍰 GF Desserts"],
    proTip: "Great for family dining with GF needs!",
    icon: "☕",
    featured: true,
    cuisineTypes: ["Café", "Family"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    rating: 4.3,
    reviewCount: 289,
    lat: -29.8477,
    lng: 31.0033,
    venueType: "cafe",
    photos: [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800"
    ],
    menuNotes: [
      "GF buns available for burgers",
      "Staff can guide you through safe options",
      "Extensive menu with clear GF marking"
    ],
    staffKnowledgeScore: 3,
    celiacSafetyScore: 6
  },
  {
    name: "Havana Grill & Wine Bar",
    slug: "havana-grill-wine-bar",
    address: "Shop 4, Lighthouse Mall, Umhlanga Rocks Dr, Umhlanga, 4320",
    city: "Durban",
    country: "South Africa",
    hours: "Daily: 11:00AM – 10:00PM",
    phone: "+27 31 561 7500",
    website: "www.havanagrill.co.za",
    directionsUrl: "https://www.google.com/maps/search/Havana+Grill+Umhlanga",
    specialty: "Steakhouse & Seafood",
    overview: "Upscale steakhouse offering premium meats and seafood with gluten-free sides and sauce options available. A reliable choice for steak lovers with celiac.",
    menuHighlights: ["🥩 Premium Steaks (GF)", "🦐 Fresh Seafood (GF)", "🥗 Sides (GF options)", "🍷 Wine Selection"],
    proTip: "Ask about GF sauces!",
    icon: "🥩",
    featured: true,
    cuisineTypes: ["Steakhouse", "Seafood"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    rating: 4.5,
    reviewCount: 312,
    lat: -29.7267,
    lng: 31.0851,
    venueType: "restaurant",
    photos: [
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800",
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800"
    ],
    menuNotes: [
      "Steaks naturally GF - check sauces",
      "Grilled seafood is a safe option",
      "Inform server about celiac disease"
    ],
    staffKnowledgeScore: 4,
    celiacSafetyScore: 7
  },
  {
    name: "Ocean Terrace",
    slug: "ocean-terrace",
    address: "The Oyster Box, 2 Lighthouse Rd, Umhlanga, 4320",
    city: "Durban",
    country: "South Africa",
    hours: "Daily: 6:30AM – 10:00PM",
    phone: "+27 31 514 5000",
    website: "www.oysterboxhotel.com",
    directionsUrl: "https://www.google.com/maps/search/Oyster+Box+Hotel+Ocean+Terrace+Umhlanga",
    specialty: "Luxury Hotel Dining",
    overview: "Iconic oceanfront restaurant at The Oyster Box Hotel offering excellent gluten-free accommodations in a stunning setting. Famous for their high tea with GF options.",
    menuHighlights: ["🍳 Breakfast Buffet (GF options)", "🥗 Lunch (GF)", "🦐 Seafood (GF)", "🍰 GF Desserts"],
    proTip: "World-famous high tea with GF options!",
    icon: "🌊",
    featured: true,
    cuisineTypes: ["Fine Dining", "Seafood", "International"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    rating: 4.8,
    reviewCount: 456,
    lat: -29.7282,
    lng: 31.0840,
    venueType: "restaurant",
    photos: [
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800"
    ],
    menuNotes: [
      "High tea includes GF options - book ahead",
      "Staff well-trained on dietary requirements",
      "Premium hotel dining experience",
      "Stunning ocean views"
    ],
    staffKnowledgeScore: 5,
    celiacSafetyScore: 8
  },
  {
    name: "Unity Brasserie & Bar",
    slug: "unity-brasserie-bar",
    address: "Shop 43, Gateway Theatre of Shopping, Umhlanga, 4319",
    city: "Durban",
    country: "South Africa",
    hours: "Daily: 9:00AM – 10:00PM",
    phone: "+27 31 566 2255",
    website: "www.unitybrasserie.co.za",
    directionsUrl: "https://www.google.com/maps/search/Unity+Brasserie+Gateway+Umhlanga",
    specialty: "Contemporary Dining",
    overview: "Trendy brasserie at Gateway Mall offering a diverse menu with clear gluten-free options and knowledgeable staff. Convenient location for shopping and dining.",
    menuHighlights: ["🥗 Salads (GF)", "🥩 Grilled Meats (GF)", "🍝 GF Pasta Available", "🍹 Cocktails"],
    proTip: "Ask for the allergen menu!",
    icon: "🍽️",
    featured: false,
    cuisineTypes: ["Contemporary", "International"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    rating: 4.3,
    reviewCount: 198,
    lat: -29.7284,
    lng: 31.0497,
    venueType: "restaurant",
    photos: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800"
    ],
    menuNotes: [
      "GF pasta available on request",
      "Allergen menu available",
      "Staff trained on dietary requirements"
    ],
    staffKnowledgeScore: 3,
    celiacSafetyScore: 6
  },
  {
    name: "Mali's Indian Restaurant",
    slug: "malis-indian-restaurant",
    address: "7 Mitchell Cres, Umhlanga Rocks, 4320",
    city: "Durban",
    country: "South Africa",
    hours: "Daily: 12:00PM – 10:00PM",
    phone: "+27 31 561 7609",
    website: "www.malis.co.za",
    directionsUrl: "https://www.google.com/maps/search/Malis+Indian+Restaurant+Umhlanga",
    specialty: "Indian Cuisine",
    overview: "Authentic Indian restaurant with many naturally gluten-free curries and rice dishes. Durban is famous for its Indian cuisine, and Mali's is one of the best.",
    menuHighlights: ["🍛 Curries (many GF)", "🍚 Biryani (GF)", "🥘 Tandoori (GF)", "🥗 Indian Vegetarian"],
    proTip: "Most curries are naturally GF - confirm naan alternatives!",
    icon: "🍛",
    featured: false,
    cuisineTypes: ["Indian", "Curry"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    rating: 4.4,
    reviewCount: 267,
    lat: -29.7267,
    lng: 31.0833,
    venueType: "restaurant",
    photos: [
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800",
      "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800"
    ],
    menuNotes: [
      "Many Indian dishes naturally GF",
      "Avoid naan and roti (contain gluten)",
      "Rice-based dishes are safe",
      "Ask about flour in sauces"
    ],
    staffKnowledgeScore: 3,
    celiacSafetyScore: 6
  },
  {
    name: "Ile Maurice",
    slug: "ile-maurice",
    address: "48 Mackeurtan Ave, Morningside, Durban, 4001",
    city: "Durban",
    country: "South Africa",
    hours: "Tue–Sat: 6:00PM – 10:00PM, Sun: 12:00PM – 3:00PM",
    phone: "+27 31 312 8828",
    website: "www.ilemaurice.co.za",
    directionsUrl: "https://www.google.com/maps/search/Ile+Maurice+Morningside+Durban",
    specialty: "Mauritian Cuisine",
    overview: "Unique Mauritian restaurant offering island-inspired dishes with many naturally gluten-free seafood and rice-based options. A hidden gem in Durban.",
    menuHighlights: ["🦐 Seafood Dishes (GF)", "🍚 Rice-Based Mains (GF)", "🍛 Island Curries (GF)", "🥥 Tropical Flavors"],
    proTip: "Ask about traditional rice accompaniments!",
    icon: "🏝️",
    featured: false,
    cuisineTypes: ["Mauritian", "Seafood", "Island"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    rating: 4.6,
    reviewCount: 189,
    lat: -29.8328,
    lng: 31.0102,
    venueType: "restaurant",
    photos: [
      "https://images.unsplash.com/photo-1579631542720-3a87824fff86?w=800"
    ],
    menuNotes: [
      "Seafood and rice dishes are naturally GF",
      "Unique Mauritian flavors",
      "Ask about sauces and marinades"
    ],
    staffKnowledgeScore: 3,
    celiacSafetyScore: 6
  }
];

export const getDurbanRestaurantBySlug = (slug: string): Restaurant | undefined => {
  return durbanRestaurants.find(r => r.slug === slug);
};
