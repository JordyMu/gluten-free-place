import CanadaCityPage from "@/components/canada/CanadaCityPage";
import type { Restaurant } from "@/data/capeTownRestaurants";

type CeliacSafe = "dedicated-facility" | "protocols-in-place";
type MenuType = "fully-gluten-free" | "mixed-menu";

interface CorkRestaurant {
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

export const corkRestaurants: CorkRestaurant[] = [
  {
    slug: "antons",
    name: "Anton's",
    icon: "🍞",
    specialty: "Bakery & cafe · dedicated GF counter",
    rating: 4.7,
    reviewCount: 168,
    cuisineTypes: ["Bakery", "Cafe", "Gluten-Free"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "A beloved Cork artisan bakery and cafe with an extensive gluten-free range. Their GF bread, cakes and savoury bakes are made in a controlled section of the kitchen, and staff are trained on cross-contamination.",
    menuHighlights: [
      "🍞 GF sourdough & loaves",
      "🥐 GF pastries & bakes",
      "🍰 GF celebration cakes",
      "☕ Specialty coffee",
    ],
    proTip: "Ask about the GF bread of the day — they rotate specialty loaves weekly.",
    address: "62 Oliver Plunkett St, Cork, T12 V9XW, Ireland",
    hours: "Mon–Sat: 8:00 AM – 6:00 PM, Sun: 10:00 AM – 4:00 PM",
    phone: "+353 21 427 2543",
    website: "www.antons.ie",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Antons+62+Oliver+Plunkett+St+Cork+Ireland",
    featured: true,
    whyPeopleLoveIt: [
      "Best GF bread in Cork",
      "Knowledgeable, celiac-aware staff",
      "Wide range of GF cakes and bakes",
      "Central location on Oliver Plunkett Street",
    ],
    services: {
      dineIn: { available: true, note: "Cafe seating · walk-ins welcome" },
      takeaway: { available: true, note: "Order at counter · GF items packed separately" },
      delivery: { available: false, note: "In-store collection only" },
    },
  },
  {
    slug: "the-quay-coop",
    name: "The Quay Co-op",
    icon: "🌿",
    specialty: "Wholefood restaurant & health store",
    rating: 4.6,
    reviewCount: 214,
    cuisineTypes: ["Vegetarian", "Wholefood", "Health Store"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "Cork's pioneering wholefood restaurant and health store since 1982. The menu is mostly vegetarian and vegan with clearly labelled gluten-free dishes, plus a downstairs shop stocking an extensive GF range.",
    menuHighlights: [
      "🥗 GF daily specials",
      "🥣 Homemade soups",
      "🛒 Extensive GF shop downstairs",
      "🍰 GF & vegan desserts",
    ],
    proTip: "Stock up in the downstairs shop — one of the best GF grocery selections in Munster.",
    address: "24 Sullivan's Quay, Cork, T12 KD6F, Ireland",
    hours: "Mon–Sat: 9:00 AM – 8:00 PM, Sun: 10:00 AM – 6:00 PM",
    phone: "+353 21 431 7026",
    website: "www.quaycoop.com",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=The+Quay+Co-op+24+Sullivans+Quay+Cork+Ireland",
    whyPeopleLoveIt: [
      "Cork institution since 1982",
      "Clearly labelled GF menu",
      "Large gluten-free grocery range",
      "Vegetarian & vegan friendly",
    ],
    services: {
      dineIn: { available: true, note: "Casual counter & table service" },
      takeaway: { available: true, note: "Order at counter" },
      delivery: { available: false, note: "No delivery — visit in store" },
    },
    venueType: "supermarket",
  },
  {
    slug: "good-day-deli",
    name: "Good Day Deli",
    icon: "🥗",
    specialty: "Sustainable cafe · strong GF menu",
    rating: 4.8,
    reviewCount: 187,
    cuisineTypes: ["Cafe", "Brunch", "Sustainable"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "A sustainability-focused cafe tucked into the gardens of Nano Nagle Place. The menu is mostly gluten-free by default, with clear allergen labelling and a kitchen that takes celiac requests seriously.",
    menuHighlights: [
      "🥑 GF brunch bowls",
      "🥞 GF pancakes",
      "🥗 Garden salads",
      "☕ Organic coffee",
    ],
    proTip: "Tell them you're celiac when ordering — they'll flag your order for separate prep.",
    address: "Nano Nagle Place, Douglas St, Cork, T12 X70A, Ireland",
    hours: "Tue–Sun: 9:00 AM – 4:00 PM, Mon: Closed",
    phone: "+353 21 419 5380",
    website: "www.gooddaydeli.ie",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Good+Day+Deli+Nano+Nagle+Place+Cork+Ireland",
    whyPeopleLoveIt: [
      "Beautiful courtyard setting",
      "Most of the menu is naturally GF",
      "Sustainable, local sourcing",
      "Staff well-trained on celiac needs",
    ],
    services: {
      dineIn: { available: true, note: "Garden courtyard & indoor seating · reservations for weekends" },
      takeaway: { available: true, note: "Order at counter" },
      delivery: { available: false, note: "No delivery" },
    },
  },
  {
    slug: "market-lane",
    name: "Market Lane",
    icon: "🍽️",
    specialty: "Modern Irish bistro · coeliac-aware",
    rating: 4.6,
    reviewCount: 356,
    cuisineTypes: ["Modern Irish", "Bistro", "European"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "One of Cork's most popular bistros, serving modern Irish food made with local produce. The menu marks gluten-free dishes clearly and the kitchen is experienced with coeliac requirements.",
    menuHighlights: [
      "🐟 Fresh fish dishes (GF)",
      "🥩 Irish beef & lamb (GF)",
      "🍷 Great wine list",
      "🍮 GF desserts",
    ],
    proTip: "Book ahead — it's one of the busiest restaurants in Cork.",
    address: "5-6 Oliver Plunkett St, Centre, Cork, T12 T959, Ireland",
    hours: "Mon–Sun: 12:00 PM – 10:00 PM",
    phone: "+353 21 427 4710",
    website: "www.marketlane.ie",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Market+Lane+5+Oliver+Plunkett+St+Cork+Ireland",
    whyPeopleLoveIt: [
      "Award-winning modern Irish cooking",
      "Clearly marked GF dishes",
      "Local, seasonal produce",
      "Reliable choice for special occasions",
    ],
    services: {
      dineIn: { available: true, note: "Reservations strongly recommended" },
      takeaway: { available: false, note: "Dine-in only" },
      delivery: { available: false, note: "No delivery" },
    },
  },
  {
    slug: "nash-19",
    name: "Nash 19",
    icon: "🥪",
    specialty: "Cafe & deli · GF options",
    rating: 4.5,
    reviewCount: 142,
    cuisineTypes: ["Cafe", "Deli", "Irish"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "A Cork institution for over 30 years, Nash 19 serves hearty Irish breakfasts, lunches and deli food with clearly labelled gluten-free options. Staff are helpful with coeliac requests.",
    menuHighlights: [
      "🍳 Full Irish breakfast (GF)",
      "🥪 GF sandwiches & salads",
      "🥧 Daily specials",
      "🍰 GF treats",
    ],
    proTip: "Go early for breakfast — the GF full Irish is a local favourite.",
    address: "19 Princes St, Cork, T12 E73X, Ireland",
    hours: "Mon–Sat: 8:30 AM – 4:30 PM, Sun: Closed",
    phone: "+353 21 427 0880",
    website: "www.nash19.com",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Nash+19+Princes+St+Cork+Ireland",
    whyPeopleLoveIt: [
      "Cork institution for 30+ years",
      "GF full Irish breakfast",
      "Central location",
      "Friendly, allergen-aware staff",
    ],
    services: {
      dineIn: { available: true, note: "Casual cafe seating" },
      takeaway: { available: true, note: "Order at counter" },
      delivery: { available: false, note: "No delivery" },
    },
  },
  {
    slug: "the-farmgate-cafe",
    name: "The Farmgate Cafe",
    icon: "🍲",
    specialty: "Irish restaurant · English Market",
    rating: 4.5,
    reviewCount: 268,
    cuisineTypes: ["Irish", "Traditional", "Market"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "Perched above the famous English Market, The Farmgate Cafe serves traditional Irish food made with produce from the stalls below. Many dishes are naturally gluten-free and staff know their allergens well.",
    menuHighlights: [
      "🦪 Fresh Irish seafood (GF)",
      "🍲 Irish stew (GF)",
      "🧀 Irish cheese boards (GF)",
      "🥧 Seasonal specials",
    ],
    proTip: "Ask for a window table overlooking the market — great people-watching while you eat.",
    address: "English Market, Princes St, Cork, T12 PW26, Ireland",
    hours: "Mon–Sat: 8:30 AM – 5:30 PM, Sun: Closed",
    phone: "+353 21 427 8134",
    website: "www.farmgate.ie",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Farmgate+Cafe+English+Market+Cork+Ireland",
    whyPeopleLoveIt: [
      "Iconic English Market location",
      "Traditional Irish food from market produce",
      "Many naturally GF dishes",
      "Unique Cork experience",
    ],
    services: {
      dineIn: { available: true, note: "Upstairs dining room · walk-ins & reservations" },
      takeaway: { available: true, note: "Counter takeaway available" },
      delivery: { available: false, note: "No delivery" },
    },
  },
];

const faqItems = [
  {
    question: "Is Cork good for celiac travellers?",
    answer:
      "Yes — Cork is Ireland's foodie capital and has strong coeliac awareness. Most restaurants clearly label gluten-free dishes, and the Coeliac Society of Ireland is well-supported in the city.",
  },
  {
    question: "Are there dedicated gluten-free restaurants in Cork?",
    answer:
      "Cork's GF scene is mostly made up of restaurants and cafes with strong gluten-free menus and trained staff, such as Anton's, Good Day Deli and The Quay Co-op. Always mention coeliac disease when ordering.",
  },
  {
    question: "Where can I buy gluten-free products in Cork?",
    answer:
      "The Quay Co-op has one of the best GF grocery ranges in Munster. Tesco, Dunnes Stores and SuperValu around the city also carry extensive free-from ranges with clear EU allergen labelling.",
  },
  {
    question: "Can I eat gluten-free at the English Market?",
    answer:
      "Yes — the Farmgate Cafe upstairs serves many naturally GF dishes, and several market stalls offer GF breads, seafood and produce. Always confirm with each stall about cross-contamination.",
  },
  {
    question: "How do I explain celiac disease in Cork?",
    answer:
      "English is spoken everywhere. Say you have coeliac disease and ask about cross-contamination — Cork restaurant staff are generally well-trained on allergen requirements.",
  },
  {
    question: "Can I get gluten-free food in Cork pubs?",
    answer:
      "Many Cork pubs serve clearly labelled GF dishes and stock gluten-free beer or cider. Cider is a reliable fallback — always confirm with staff about food cross-contamination.",
  },
];

const corkLatLng: Record<string, { lat: number; lng: number }> = {
  antons: { lat: 51.8985, lng: -8.4756 },
  "the-quay-coop": { lat: 51.8955, lng: -8.4775 },
  "good-day-deli": { lat: 51.8967, lng: -8.4698 },
  "market-lane": { lat: 51.898, lng: -8.4751 },
  "nash-19": { lat: 51.8988, lng: -8.4727 },
  "the-farmgate-cafe": { lat: 51.8983, lng: -8.4726 },
};

export const restaurantsForCityPage: Restaurant[] = corkRestaurants.map((r) => ({
  name: r.name,
  slug: r.slug,
  address: r.address ?? "Cork, Ireland",
  city: "Cork",
  country: "Ireland",
  hours: r.hours ?? "See website for hours",
  phone: r.phone ?? "",
  website: r.website ?? "",
  directionsUrl: r.directionsUrl ?? `https://www.google.com/maps/search/${encodeURIComponent(r.name + " Cork")}`,
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
  lat: corkLatLng[r.slug]?.lat ?? 51.8969,
  lng: corkLatLng[r.slug]?.lng ?? -8.4863,
  venueType: r.venueType ?? "restaurant",
  photos: r.photos ?? [],
  heroImage: r.heroImage,
  fullMenu: r.fullMenu,
  whyPeopleLoveIt: r.whyPeopleLoveIt,
  services: r.services,
}));

const GlutenFreeCork = () => (
  <CanadaCityPage
    cityName="Cork"
    citySlug="cork"
    countryName="Ireland"
    countrySlug="ireland"
    emoji="🍀"
    heading="Dedicated Gluten-Free Restaurants in Cork"
    compactHero
    intro="Cork is Ireland's foodie capital, with coeliac-aware restaurants, artisan bakeries and cafes serving clearly labelled gluten-free dishes. From the English Market to Oliver Plunkett Street, safe and delicious GF options await."
    restaurants={restaurantsForCityPage}
    faqItems={faqItems}
  />
);

export default GlutenFreeCork;
