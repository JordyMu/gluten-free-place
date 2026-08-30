import CanadaCityPage from "@/components/canada/CanadaCityPage";
import type { Restaurant } from "@/data/capeTownRestaurants";

type CeliacSafe = "dedicated-facility" | "protocols-in-place";
type MenuType = "fully-gluten-free" | "mixed-menu";

interface GalwayRestaurant {
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

export const galwayRestaurants: GalwayRestaurant[] = [
  {
    slug: "the-front-door-pub",
    name: "The Front Door Pub",
    icon: "🍻",
    specialty: "Traditional Irish pub · coeliac-aware kitchen",
    rating: 4.5,
    reviewCount: 243,
    cuisineTypes: ["Irish", "Pub Food", "Gluten-Free Options"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "A lively traditional pub in the heart of Galway's Latin Quarter, known for its coeliac-aware kitchen and clearly labelled gluten-free options. The menu includes GF versions of pub classics like fish & chips and hearty stews.",
    menuHighlights: [
      "🐟 GF fish & chips",
      "🍲 Irish beef & GF stout stew",
      "🍺 GF beer & cider",
      "🍔 GF burger buns available",
    ],
    proTip: "Ask for the allergen menu at the bar — staff are well-trained on coeliac requirements.",
    address: "8 Cross Street Upper, Galway, H91 YY06, Ireland",
    hours: "Mon–Sun: 12:00 PM – 11:30 PM",
    phone: "+353 91 563 757",
    website: "www.thefrontdoor.ie",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=The+Front+Door+Pub+8+Cross+Street+Upper+Galway+Ireland",
    featured: true,
    whyPeopleLoveIt: [
      "Coeliac-aware kitchen with clearly labelled GF dishes",
      "Authentic Irish pub atmosphere",
      "GF beer and cider on the menu",
      "Central Latin Quarter location",
    ],
    services: {
      dineIn: { available: true, note: "Pub seating · walk-ins welcome" },
      takeaway: { available: false, note: "Dine-in only" },
      delivery: { available: false, note: "No delivery" },
    },
  },
  {
    slug: "woozza-wood-fired-pizza",
    name: "Woozza Wood Fired Pizza",
    icon: "🍕",
    specialty: "Wood-fired pizza · GF bases",
    rating: 4.6,
    reviewCount: 312,
    cuisineTypes: ["Pizza", "Italian", "Gluten-Free Options"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "Galway's favourite wood-fired pizzeria offering excellent gluten-free bases for any pizza on the menu. The kitchen takes cross-contamination seriously with separate preparation areas for GF orders.",
    menuHighlights: [
      "🍕 GF wood-fired pizza bases",
      "🥗 Fresh salads",
      "🍝 GF pasta options",
      "🍰 GF desserts",
    ],
    proTip: "Tell them you're coeliac when ordering — they prepare GF pizzas in a separate area on request.",
    address: "Middle St, Galway, H91 YP9F, Ireland",
    hours: "Mon–Sun: 12:00 PM – 10:00 PM",
    phone: "+353 91 533 941",
    website: "www.woozza.ie",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Woozza+Wood+Fired+Pizza+Middle+St+Galway+Ireland",
    whyPeopleLoveIt: [
      "Authentic wood-fired flavour on GF bases",
      "Separate prep for coeliac orders",
      "Huge pizza selection",
      "Family-friendly atmosphere",
    ],
    services: {
      dineIn: { available: true, note: "Casual dining · bookings recommended on weekends" },
      takeaway: { available: true, note: "Order by phone or at counter" },
      delivery: { available: true, note: "Delivery via local apps" },
    },
  },
  {
    slug: "taquila",
    name: "Taquila",
    icon: "🌮",
    specialty: "Mexican street food · naturally GF corn",
    rating: 4.4,
    reviewCount: 187,
    cuisineTypes: ["Mexican", "Street Food", "Gluten-Free Options"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "A vibrant Mexican eatery on Eglinton Street serving tacos, burritos and bowls. Most of the menu is naturally gluten-free thanks to corn tortillas, with staff happy to guide coeliac diners through safe choices.",
    menuHighlights: [
      "🌮 Corn tortilla tacos",
      "🥑 Guacamole & nachos",
      "🌯 Burrito bowls (no wrap)",
      "🍹 Margaritas",
    ],
    proTip: "Stick to corn-based dishes and burrito bowls — most of the menu is naturally gluten-free.",
    address: "Eglinton Court, Eglinton St, Galway, Ireland",
    hours: "Mon–Sun: 12:00 PM – 10:30 PM",
    phone: "+353 91 123 456",
    website: "www.taquila.ie",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Taquila+Eglinton+St+Galway+Ireland",
    whyPeopleLoveIt: [
      "Naturally GF corn tortillas",
      "Fresh, bold Mexican flavours",
      "Casual quick-service style",
      "Great value",
    ],
    services: {
      dineIn: { available: true, note: "Casual counter service" },
      takeaway: { available: true, note: "Order at counter" },
      delivery: { available: true, note: "Delivery via local apps" },
    },
  },
  {
    slug: "javas-cafe",
    name: "Java's Cafe",
    icon: "☕",
    specialty: "Cafe & creperie · GF crepes",
    rating: 4.5,
    reviewCount: 264,
    cuisineTypes: ["Cafe", "Crepes", "Coffee"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "A cosy, long-running cafe in the heart of Galway famous for its crepes — with gluten-free batter available for both sweet and savoury options. Also serves excellent coffee, salads and homemade cakes with GF choices.",
    menuHighlights: [
      "🥞 GF sweet & savoury crepes",
      "☕ Specialty coffee",
      "🥗 Fresh salads",
      "🍰 GF cake selection",
    ],
    proTip: "The GF crepe batter works for any crepe on the menu — sweet or savoury. Arrive early on weekends, it fills up fast.",
    address: "17 Abbeygate Street Upper, Galway, H91 C6A0, Ireland",
    hours: "Mon–Sun: 9:00 AM – 6:00 PM",
    phone: "+353 91 565 997",
    website: "www.javascafe.ie",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Javas+Cafe+Abbeygate+Street+Upper+Galway+Ireland",
    whyPeopleLoveIt: [
      "GF crepes — a rare find",
      "Cosy, atmospheric interior",
      "Excellent coffee",
      "Central location near Shop Street",
    ],
    services: {
      dineIn: { available: true, note: "Cafe seating · walk-ins only" },
      takeaway: { available: true, note: "Coffee & crepes to go" },
      delivery: { available: false, note: "No delivery" },
    },
  },
  {
    slug: "pratai",
    name: "Prátaí",
    icon: "🥔",
    specialty: "Irish potato bar · naturally GF",
    rating: 4.4,
    reviewCount: 156,
    cuisineTypes: ["Irish", "Casual Dining", "Gluten-Free Options"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "A fun, potato-focused eatery on Eyre Square where the humble spud is the star. Baked potatoes, fries and loaded potato dishes are naturally gluten-free, with dedicated fryers and clear allergen labelling.",
    menuHighlights: [
      "🥔 Loaded baked potatoes",
      "🍟 Fries from dedicated fryer",
      "🧀 Cheese & bacon toppings",
      "🥗 Fresh salads",
    ],
    proTip: "Dedicated fryer means the fries are safe — just confirm sauces with staff.",
    address: "Eyre Square, Galway, Ireland",
    hours: "Mon–Sun: 11:00 AM – 9:00 PM",
    phone: "+353 91 234 567",
    website: "www.pratai.ie",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Pratai+Eyre+Square+Galway+Ireland",
    whyPeopleLoveIt: [
      "Naturally gluten-free potato-based menu",
      "Dedicated GF fryer",
      "Quick and affordable",
      "Perfect Eyre Square location",
    ],
    services: {
      dineIn: { available: true, note: "Casual seating" },
      takeaway: { available: true, note: "Order at counter" },
      delivery: { available: false, note: "No delivery" },
    },
  },
  {
    slug: "handsome-burger",
    name: "Handsome Burger",
    icon: "🍔",
    specialty: "Gourmet burgers · GF buns",
    rating: 4.7,
    reviewCount: 428,
    cuisineTypes: ["Burgers", "American", "Gluten-Free Options"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "One of Ireland's best-loved burger joints, born in Galway. Handsome Burger offers gluten-free buns and a dedicated fryer for their famous hand-cut chips, making it a coeliac favourite on Dominick Street.",
    menuHighlights: [
      "🍔 Burgers with GF buns",
      "🍟 Hand-cut chips · dedicated fryer",
      "🥤 Milkshakes",
      "🍗 Chicken burger options",
    ],
    proTip: "The chips are cooked in a dedicated fryer — safe for coeliacs. Just ask for a GF bun with any burger.",
    address: "49 Dominick Street Lower, Galway, H91 P08F, Ireland",
    hours: "Mon–Sun: 12:00 PM – 10:00 PM",
    phone: "+353 91 534 354",
    website: "www.handsomeburger.ie",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Handsome+Burger+Dominick+Street+Lower+Galway+Ireland",
    featured: true,
    whyPeopleLoveIt: [
      "Award-winning burgers",
      "GF buns and dedicated chip fryer",
      "Coeliac-aware staff",
      "Iconic Galway institution",
    ],
    services: {
      dineIn: { available: true, note: "Casual dining · walk-ins" },
      takeaway: { available: true, note: "Order at counter or online" },
      delivery: { available: true, note: "Delivery via local apps" },
    },
  },
  {
    slug: "ard-bia-at-nimmos",
    name: "Ard Bia at Nimmos",
    icon: "🐟",
    specialty: "Seafood & Irish cuisine · GF options",
    rating: 4.6,
    reviewCount: 291,
    cuisineTypes: ["Irish", "Seafood", "Brunch"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "A Galway gem tucked beside the Spanish Arch, serving seasonal Irish and seafood dishes with excellent gluten-free options. The menu changes with the seasons and staff are happy to adapt dishes for coeliac diners.",
    menuHighlights: [
      "🐟 Fresh Atlantic seafood",
      "🥗 Seasonal GF salads",
      "🍳 Weekend brunch · GF options",
      "🍰 GF desserts",
    ],
    proTip: "Book ahead for weekend brunch — it's one of Galway's most popular tables. Mention coeliac when booking.",
    address: "Spanish Arch, Long Walk, Galway, Ireland",
    hours: "Mon–Sun: 10:00 AM – 9:30 PM",
    phone: "+353 91 561 114",
    website: "www.ardbia.com",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Ard+Bia+at+Nimmos+Spanish+Arch+Galway+Ireland",
    whyPeopleLoveIt: [
      "Stunning location by the Spanish Arch",
      "Seasonal, locally sourced menu",
      "Staff happy to adapt dishes GF",
      "Legendary weekend brunch",
    ],
    services: {
      dineIn: { available: true, note: "Bookings recommended" },
      takeaway: { available: false, note: "Dine-in only" },
      delivery: { available: false, note: "No delivery" },
    },
  },
];

const faqItems = [
  {
    question: "Are there dedicated gluten-free restaurants in Galway?",
    answer:
      "Galway has a growing number of coeliac-aware restaurants. While fully dedicated GF kitchens are rare, venues like Handsome Burger, Woozza and The Front Door Pub have strong cross-contamination protocols, GF buns/bases and dedicated fryers.",
  },
  {
    question: "Is Galway good for celiacs?",
    answer:
      "Yes — Galway is one of Ireland's most food-focused cities and most restaurants display allergen menus by law. Irish cuisine includes many naturally gluten-free dishes like seafood chowder, stews and potato-based meals.",
  },
  {
    question: "How do I explain celiac disease in Galway?",
    answer:
      "English is spoken everywhere. Say you have coeliac disease and ask about cross-contamination — Galway restaurant staff are generally well-trained on allergen requirements, and EU law requires allergen information to be available.",
  },
  {
    question: "Can I get gluten-free food in Galway pubs?",
    answer:
      "Many Galway pubs serve clearly labelled GF dishes and stock gluten-free beer or cider. Cider is a reliable fallback — always confirm with staff about food cross-contamination.",
  },
];

const galwayLatLng: Record<string, { lat: number; lng: number }> = {
  "the-front-door-pub": { lat: 53.2707, lng: -9.0568 },
  "woozza-wood-fired-pizza": { lat: 53.2705, lng: -9.0535 },
  taquila: { lat: 53.2695, lng: -9.048 },
  "javas-cafe": { lat: 53.2725, lng: -9.0515 },
  pratai: { lat: 53.273, lng: -9.049 },
  "handsome-burger": { lat: 53.2698, lng: -9.0575 },
  "ard-bia-at-nimmos": { lat: 53.2697, lng: -9.0538 },
};

export const restaurantsForCityPage: Restaurant[] = galwayRestaurants.map((r) => ({
  name: r.name,
  slug: r.slug,
  address: r.address ?? "Galway, Ireland",
  city: "Galway",
  country: "Ireland",
  hours: r.hours ?? "See website for hours",
  phone: r.phone ?? "",
  website: r.website ?? "",
  directionsUrl: r.directionsUrl ?? `https://www.google.com/maps/search/${encodeURIComponent(r.name + " Galway")}`,
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
  lat: galwayLatLng[r.slug]?.lat ?? 53.2707,
  lng: galwayLatLng[r.slug]?.lng ?? -9.0568,
  venueType: r.venueType ?? "restaurant",
  photos: r.photos ?? [],
  heroImage: r.heroImage,
  fullMenu: r.fullMenu,
  whyPeopleLoveIt: r.whyPeopleLoveIt,
  services: r.services,
}));

const GlutenFreeGalway = () => (
  <CanadaCityPage
    cityName="Galway"
    citySlug="galway"
    countryName="Ireland"
    countrySlug="ireland"
    emoji="🍀"
    heading="Dedicated Gluten-Free Restaurants in Galway"
    compactHero
    intro="Galway, the cultural heart of the west, is a fantastic city for coeliac diners. From wood-fired GF pizza and dedicated-fryer burgers to seafood by the Spanish Arch, the city offers clearly labelled gluten-free options across its medieval streets."
    restaurants={restaurantsForCityPage}
    faqItems={faqItems}
  />
);

export default GlutenFreeGalway;
