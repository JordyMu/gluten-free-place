import CanadaCityPage from "@/components/canada/CanadaCityPage";
import type { Restaurant } from "@/data/capeTownRestaurants";

type CeliacSafe = "dedicated-facility" | "protocols-in-place";
type MenuType = "fully-gluten-free" | "mixed-menu";

interface LimerickRestaurant {
  slug: string;
  name: string;
  icon?: string;
  specialty?: string;
  rating?: number;
  reviewCount?: number;
  cuisineTypes?: string[];
  celiacSafe?: CeliacSafe;
  menuType?: MenuType;
  overview?: string;
  menuHighlights?: string[];
  proTip?: string;
  address?: string;
  hours?: string;
  phone?: string;
  website?: string;
  directionsUrl?: string;
  featured?: boolean;
  venueType?: "restaurant" | "cafe" | "bakery" | "street-food" | "supermarket" | "gf-products";
  fullMenu?: {
    category: string;
    note?: string;
    items: { name: string; price?: string; description?: string }[];
  }[];
  photos?: { url: string; caption?: string }[];
  heroImage?: string;
  whyPeopleLoveIt?: string[];
  services?: {
    dineIn?: { available: boolean; note: string };
    takeaway?: { available: boolean; note: string };
    delivery?: { available: boolean; note: string };
    accessible?: boolean;
    gfPackaging?: boolean;
  };
}

export const limerickRestaurants: LimerickRestaurant[] = [
  {
    slug: "the-spitjack",
    name: "The SpitJack",
    icon: "🔥",
    specialty: "Rotisserie & brunch · coeliac-aware kitchen",
    rating: 4.6,
    reviewCount: 342,
    cuisineTypes: ["Irish", "Rotisserie", "Brunch"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "A popular rotisserie restaurant on Bedford Row serving wood-fired rotisserie chicken, brunch and dinner. The kitchen is coeliac-aware with clearly marked gluten-free options and staff trained on allergen requirements.",
    menuHighlights: [
      "🍗 GF rotisserie chicken",
      "🍳 Brunch with GF options",
      "🥗 Seasonal salads",
      "🍰 GF desserts",
    ],
    proTip: "The rotisserie meats are naturally gluten-free — confirm sauces and sides with staff when ordering.",
    address: "6/7 Bedford Row, Limerick, V94 VY76, Ireland",
    hours: "Mon–Sun: 9:00 AM – 10:00 PM",
    phone: "+353 61 609 111",
    website: "www.thespitjack.ie",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=The+SpitJack+Bedford+Row+Limerick+Ireland",
    featured: true,
    whyPeopleLoveIt: [
      "Coeliac-aware kitchen with marked GF dishes",
      "Famous rotisserie chicken",
      "Great brunch spot",
      "Central Bedford Row location",
    ],
    services: {
      dineIn: { available: true, note: "Bookings recommended on weekends" },
      takeaway: { available: true, note: "Order at counter" },
      delivery: { available: false, note: "No delivery" },
    },
  },
  {
    slug: "coqbull",
    name: "Coqbull",
    icon: "🍔",
    specialty: "Chicken & burgers · GF buns available",
    rating: 4.5,
    reviewCount: 287,
    cuisineTypes: ["Burgers", "Chicken", "American"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "A lively casual dining spot on Thomas Street known for rotisserie chicken, gourmet burgers and loaded fries. Gluten-free buns are available and staff can guide coeliac diners through safe choices.",
    menuHighlights: [
      "🍔 Burgers with GF buns",
      "🍗 Rotisserie chicken",
      "🍟 Loaded fries",
      "🥤 Shakes & cocktails",
    ],
    proTip: "Ask for a GF bun with any burger and confirm the fryer status for fries when you order.",
    address: "50 Thomas St, Prior's-Land, Limerick, V94 P8P2, Ireland",
    hours: "Mon–Sun: 12:00 PM – 10:00 PM",
    phone: "+353 61 447 272",
    website: "www.coqbull.ie",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Coqbull+Thomas+St+Limerick+Ireland",
    whyPeopleLoveIt: [
      "GF buns available for all burgers",
      "Fun, casual atmosphere",
      "Generous portions",
      "Great cocktails",
    ],
    services: {
      dineIn: { available: true, note: "Casual dining · walk-ins welcome" },
      takeaway: { available: true, note: "Order by phone or online" },
      delivery: { available: true, note: "Delivery via local apps" },
    },
  },
  {
    slug: "texas-steakout",
    name: "Texas Steakout",
    icon: "🥩",
    specialty: "Steakhouse · naturally GF grills",
    rating: 4.4,
    reviewCount: 198,
    cuisineTypes: ["Steakhouse", "American", "Grill"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "A long-running O'Connell Street steakhouse serving flame-grilled steaks, ribs and Tex-Mex favourites. Most grilled meats are naturally gluten-free, and the kitchen is happy to adapt dishes for coeliac diners.",
    menuHighlights: [
      "🥩 GF flame-grilled steaks",
      "🍖 BBQ ribs (check sauce)",
      "🥗 Fresh salads",
      "🥔 Baked potatoes",
    ],
    proTip: "Steaks and grills are naturally GF — ask about sauces and marinades, and request no bread on the plate.",
    address: "116 O'Connell St, Prior's-Land, Limerick, V94 DDW7, Ireland",
    hours: "Mon–Sun: 12:00 PM – 10:30 PM",
    phone: "+353 61 414 466",
    website: "www.texassteakout.ie",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Texas+Steakout+O'Connell+St+Limerick+Ireland",
    whyPeopleLoveIt: [
      "Naturally GF grilled meats",
      "Classic steakhouse experience",
      "Central O'Connell Street location",
      "Good value set menus",
    ],
    services: {
      dineIn: { available: true, note: "Bookings recommended" },
      takeaway: { available: false, note: "Dine-in only" },
      delivery: { available: false, note: "No delivery" },
    },
  },
  {
    slug: "hook-and-ladder",
    name: "Hook & Ladder",
    icon: "☕",
    specialty: "Cafe & cookery school · GF options",
    rating: 4.5,
    reviewCount: 256,
    cuisineTypes: ["Cafe", "Brunch", "Irish"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "A much-loved Sarsfield Street cafe and cookery school serving breakfast, brunch and lunch with plenty of gluten-free choices. Homemade soups, salads and GF bread options make it a reliable coeliac stop.",
    menuHighlights: [
      "🍳 GF breakfast options",
      "🥣 Homemade soups with GF bread",
      "🥗 Fresh salads",
      "🍰 GF cakes & treats",
    ],
    proTip: "Ask for GF bread with any breakfast or sandwich — they keep a good stock of GF baked goods.",
    address: "7 Sarsfield St, Limerick, Ireland",
    hours: "Mon–Sat: 8:00 AM – 5:00 PM, Sun: 10:00 AM – 4:00 PM",
    phone: "+353 61 413 678",
    website: "www.hookandladder.ie",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Hook+and+Ladder+Sarsfield+St+Limerick+Ireland",
    whyPeopleLoveIt: [
      "Reliable GF breakfast and lunch",
      "Homemade, locally sourced food",
      "Attached cookery school",
      "Friendly, knowledgeable staff",
    ],
    services: {
      dineIn: { available: true, note: "Cafe seating · walk-ins" },
      takeaway: { available: true, note: "Coffee & lunch to go" },
      delivery: { available: false, note: "No delivery" },
    },
  },
  {
    slug: "the-buttery",
    name: "The Buttery",
    icon: "🥐",
    specialty: "Artisan cafe & bakery · GF choices",
    rating: 4.6,
    reviewCount: 214,
    cuisineTypes: ["Cafe", "Bakery", "Brunch"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "A stylish artisan cafe on Bedford Street known for specialty coffee, creative brunch plates and fresh baking. Gluten-free bread and a rotating selection of GF cakes are available daily.",
    menuHighlights: [
      "🍳 Brunch with GF bread",
      "☕ Specialty coffee",
      "🍰 GF cake selection",
      "🥗 Seasonal salads",
    ],
    proTip: "The GF cake selection changes daily — ask at the counter what's available when you arrive.",
    address: "10 Bedford Row, Limerick, Ireland",
    hours: "Mon–Sat: 8:30 AM – 4:30 PM",
    phone: "+353 61 609 100",
    website: "www.thebuttery.ie",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=The+Buttery+Bedford+Row+Limerick+Ireland",
    whyPeopleLoveIt: [
      "Excellent specialty coffee",
      "Creative brunch menu",
      "GF bread and cakes daily",
      "Bright, stylish interior",
    ],
    services: {
      dineIn: { available: true, note: "Cafe seating · walk-ins" },
      takeaway: { available: true, note: "Coffee & pastries to go" },
      delivery: { available: false, note: "No delivery" },
    },
  },
  {
    slug: "locke-pizza",
    name: "Locke Pizza",
    icon: "🍕",
    specialty: "Wood-fired pizza · GF bases",
    rating: 4.5,
    reviewCount: 176,
    cuisineTypes: ["Pizza", "Italian", "Gluten-Free Options"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "A riverside pizzeria on Bridge Street serving wood-fired pizzas with gluten-free bases available for any pizza on the menu. Popular with locals for its relaxed atmosphere and quality toppings.",
    menuHighlights: [
      "🍕 GF wood-fired pizza bases",
      "🥗 Fresh salads",
      "🍝 GF pasta options",
      "🍺 Craft beer & cider",
    ],
    proTip: "Mention you're coeliac when ordering — they'll prepare your GF pizza with fresh toppings and clean tools.",
    address: "Bridge St, Englishtown, Limerick, Co. Limerick, Ireland",
    hours: "Tue–Sun: 4:00 PM – 10:00 PM",
    phone: "+353 61 413 733",
    website: "www.lockepizza.ie",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Locke+Pizza+Bridge+St+Limerick+Ireland",
    whyPeopleLoveIt: [
      "GF bases for any pizza",
      "Authentic wood-fired flavour",
      "Riverside location",
      "Lively atmosphere",
    ],
    services: {
      dineIn: { available: true, note: "Casual dining" },
      takeaway: { available: true, note: "Order by phone" },
      delivery: { available: true, note: "Delivery via local apps" },
    },
  },
  {
    slug: "milano",
    name: "Milano",
    icon: "🍝",
    specialty: "Italian restaurant · GF pizza & pasta",
    rating: 4.3,
    reviewCount: 301,
    cuisineTypes: ["Italian", "Pizza", "Pasta"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "Part of the well-known Milano group, this Harvey's Quay restaurant offers gluten-free pizza bases and GF pasta, with a coeliac-friendly preparation process and clearly marked allergen menu.",
    menuHighlights: [
      "🍕 GF pizza bases",
      "🍝 GF pasta dishes",
      "🥗 Italian salads",
      "🍰 GF dessert options",
    ],
    proTip: "Milano has a long-standing coeliac-friendly policy — ask for the allergen menu for full GF options.",
    address: "Harvey's Quay, Limerick, V94 R1H1, Ireland",
    hours: "Mon–Sun: 12:00 PM – 10:00 PM",
    phone: "+353 61 411 300",
    website: "www.milano.ie",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Milano+Harvey's+Quay+Limerick+Ireland",
    whyPeopleLoveIt: [
      "Reliable GF pizza and pasta",
      "Family-friendly",
      "Quayside setting",
      "Consistent quality",
    ],
    services: {
      dineIn: { available: true, note: "Bookings recommended on weekends" },
      takeaway: { available: true, note: "Collection available" },
      delivery: { available: true, note: "Delivery via local apps" },
    },
  },
  {
    slug: "freddys-restaurant",
    name: "Freddy's Restaurant",
    icon: "🍽️",
    specialty: "Modern European bistro · GF options",
    rating: 4.5,
    reviewCount: 189,
    cuisineTypes: ["European", "Bistro", "Irish"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "A charming bistro tucked down Theatre Lane serving modern European dishes with Irish flair. The kitchen is happy to adapt most dishes gluten-free and staff are well-versed in coeliac requirements.",
    menuHighlights: [
      "🥩 GF steak & grills",
      "🐟 Fresh fish dishes",
      "🥗 Seasonal specials",
      "🍰 GF desserts",
    ],
    proTip: "Most of the menu can be made GF on request — mention coeliac when booking so the kitchen is prepared.",
    address: "Theatre Ln, Lower Glentworth St, Prior's-Land, Limerick, V94 T3K1, Ireland",
    hours: "Tue–Sat: 12:00 PM – 10:00 PM",
    phone: "+353 61 418 749",
    website: "www.freddysbistro.ie",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Freddy's+Restaurant+Theatre+Lane+Limerick+Ireland",
    whyPeopleLoveIt: [
      "Intimate bistro atmosphere",
      "Dishes adapted GF on request",
      "Seasonal Irish ingredients",
      "Great for date nights",
    ],
    services: {
      dineIn: { available: true, note: "Bookings recommended" },
      takeaway: { available: false, note: "Dine-in only" },
      delivery: { available: false, note: "No delivery" },
    },
  },
  {
    slug: "guji-coffee-bar",
    name: "GUJI Coffee Bar",
    icon: "☕",
    specialty: "Specialty coffee · GF treats",
    rating: 4.6,
    reviewCount: 232,
    cuisineTypes: ["Cafe", "Coffee", "Brunch"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "Limerick's go-to specialty coffee bar on O'Connell Street, serving expertly brewed coffee alongside a small menu of brunch plates and baked goods with gluten-free options.",
    menuHighlights: [
      "☕ Specialty coffee",
      "🍳 GF brunch plates",
      "🍰 GF baked treats",
      "🥪 GF toast options",
    ],
    proTip: "Ask what's gluten-free at the counter — the bakery selection changes regularly and often includes GF options.",
    address: "112 O'Connell St, Prior's-Land, Limerick, V94 R2E0, Ireland",
    hours: "Mon–Sat: 8:00 AM – 5:00 PM, Sun: 10:00 AM – 4:00 PM",
    phone: "+353 61 123 456",
    website: "www.guji.ie",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=GUJI+Coffee+Bar+O'Connell+St+Limerick+Ireland",
    whyPeopleLoveIt: [
      "Best specialty coffee in Limerick",
      "Rotating GF treats",
      "Central location",
      "Friendly baristas",
    ],
    services: {
      dineIn: { available: true, note: "Limited seating · walk-ins" },
      takeaway: { available: true, note: "Coffee & treats to go" },
      delivery: { available: false, note: "No delivery" },
    },
  },
  {
    slug: "the-locke-bar",
    name: "The Locke Bar and Restaurant",
    icon: "🍻",
    specialty: "Traditional Irish pub · GF options",
    rating: 4.4,
    reviewCount: 356,
    cuisineTypes: ["Irish", "Pub Food", "Seafood"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "A Limerick institution on George's Quay by the River Shannon, serving traditional Irish food with live music. The menu includes clearly marked gluten-free dishes and the bar stocks GF cider and beer options.",
    menuHighlights: [
      "🐟 GF seafood dishes",
      "🍲 Irish stews",
      "🥗 Fresh salads",
      "🍺 GF cider options",
    ],
    proTip: "Ask for the allergen menu — several pub classics are marked gluten-free, and cider is a safe fallback.",
    address: "3 George's Quay, Limerick, Ireland",
    hours: "Mon–Sun: 12:00 PM – 11:30 PM",
    phone: "+353 61 413 733",
    website: "www.lockebar.com",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=The+Locke+Bar+George's+Quay+Limerick+Ireland",
    featured: true,
    whyPeopleLoveIt: [
      "Riverside setting with outdoor seating",
      "Live traditional music",
      "Marked GF dishes",
      "Authentic Irish pub experience",
    ],
    services: {
      dineIn: { available: true, note: "Pub & restaurant seating" },
      takeaway: { available: false, note: "Dine-in only" },
      delivery: { available: false, note: "No delivery" },
    },
  },
];

const faqItems = [
  {
    question: "Are there dedicated gluten-free restaurants in Limerick?",
    answer:
      "Limerick has a growing number of coeliac-aware restaurants. While fully dedicated GF kitchens are rare, venues like The SpitJack, Milano and Coqbull have strong allergen protocols, GF buns and bases, and clearly marked menus.",
  },
  {
    question: "Is Limerick good for celiacs?",
    answer:
      "Yes — as an Irish city, Limerick follows EU allergen-labelling law, so restaurants must provide allergen information on request. Irish cuisine includes many naturally gluten-free dishes like grilled meats, seafood and potato-based meals.",
  },
  {
    question: "How do I explain celiac disease in Limerick?",
    answer:
      "English is spoken everywhere. Say you have coeliac disease and ask about cross-contamination — Irish restaurant staff are generally well-trained on allergen requirements, and EU law requires allergen information to be available.",
  },
  {
    question: "Can I get gluten-free food in Limerick pubs?",
    answer:
      "Many Limerick pubs, including The Locke Bar, serve clearly labelled GF dishes and stock gluten-free beer or cider. Cider is a reliable fallback — always confirm with staff about food cross-contamination.",
  },
];

const limerickLatLng: Record<string, { lat: number; lng: number }> = {
  "the-spitjack": { lat: 52.6632, lng: -8.6267 },
  coqbull: { lat: 52.6625, lng: -8.6288 },
  "texas-steakout": { lat: 52.6615, lng: -8.6276 },
  "hook-and-ladder": { lat: 52.6637, lng: -8.6258 },
  "the-buttery": { lat: 52.6634, lng: -8.6262 },
  "locke-pizza": { lat: 52.6666, lng: -8.6284 },
  milano: { lat: 52.6648, lng: -8.6281 },
  "freddys-restaurant": { lat: 52.6621, lng: -8.6305 },
  "guji-coffee-bar": { lat: 52.6618, lng: -8.6272 },
  "the-locke-bar": { lat: 52.6664, lng: -8.6273 },
};

export const restaurantsForCityPage: Restaurant[] = limerickRestaurants.map((r) => ({
  name: r.name,
  slug: r.slug,
  address: r.address ?? "Limerick, Ireland",
  city: "Limerick",
  country: "Ireland",
  hours: r.hours ?? "See website for hours",
  phone: r.phone ?? "",
  website: r.website ?? "",
  directionsUrl: r.directionsUrl ?? `https://www.google.com/maps/search/${encodeURIComponent(r.name + " Limerick")}`,
  specialty: r.specialty ?? "",
  overview: r.overview ?? "",
  menuHighlights: r.menuHighlights,
  proTip: r.proTip ?? "",
  icon: r.icon ?? "🍽️",
  featured: r.featured ?? false,
  cuisineTypes: r.cuisineTypes ?? [],
  celiacSafe: r.celiacSafe ?? "protocols-in-place",
  menuType: r.menuType ?? "mixed-menu",
  rating: r.rating ?? 0,
  reviewCount: r.reviewCount ?? 0,
  lat: limerickLatLng[r.slug]?.lat ?? 52.6638,
  lng: limerickLatLng[r.slug]?.lng ?? -8.6267,
  venueType: r.venueType ?? "restaurant",
  photos: r.photos ?? [],
  heroImage: r.heroImage,
  fullMenu: r.fullMenu,
  whyPeopleLoveIt: r.whyPeopleLoveIt,
  services: r.services,
}));

const GlutenFreeLimerick = () => (
  <CanadaCityPage
    cityName="Limerick"
    citySlug="limerick"
    countryName="Ireland"
    countrySlug="ireland"
    emoji="🍀"
    heading="Dedicated Gluten-Free Restaurants in Limerick"
    compactHero
    intro="Limerick, the riverside city on the Shannon, offers a warm welcome to coeliac diners. From GF pizza bases and burger buns to coeliac-aware bistros and traditional pubs with marked allergen menus, the Treaty City makes gluten-free dining easy."
    restaurants={restaurantsForCityPage}
    faqItems={faqItems}
  />
);

export default GlutenFreeLimerick;
