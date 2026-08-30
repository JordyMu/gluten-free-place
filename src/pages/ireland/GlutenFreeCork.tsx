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
  {
    slug: "my-goodness",
    name: "My Goodness",
    icon: "🥗",
    specialty: "Healthy salads & bowls · English Market",
    rating: 4.5,
    reviewCount: 98,
    cuisineTypes: ["Healthy", "Salads", "Bowls"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "A bright, health-focused stall in Cork's historic English Market serving fresh salads, grain bowls and smoothies. Most bowls can be made gluten-free and staff are familiar with celiac requests.",
    menuHighlights: [
      "🥗 Build-your-own GF salad bowls",
      "🥑 GF avocado & grain bowls",
      "🥤 Fresh smoothies & juices",
      "🍰 GF energy balls",
    ],
    proTip: "Visit early for the widest selection — popular bowls sell out by lunchtime.",
    address: "Unit 2, English Market, Princes St, Cork, T12 W9XP, Ireland",
    hours: "Mon–Sat: 9:00 AM – 5:30 PM, Sun: Closed",
    phone: "",
    website: "",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=My+Goodness+English+Market+Cork+Ireland",
    whyPeopleLoveIt: [
      "Fresh, colourful bowls",
      "Great spot inside the English Market",
      "Helpful with gluten-free requests",
      "Quick, healthy lunch option",
    ],
    services: {
      dineIn: { available: false, note: "Market stall · limited seating nearby" },
      takeaway: { available: true, note: "Order at stall" },
      delivery: { available: false, note: "No delivery" },
    },
  },
  {
    slug: "kielys",
    name: "Kielys",
    icon: "🍺",
    specialty: "Irish pub · coeliac-friendly classics",
    rating: 4.4,
    reviewCount: 176,
    cuisineTypes: ["Irish Pub", "Comfort Food", "Seafood"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "A traditional Cork city-centre pub with a warm atmosphere and a menu that includes clearly labelled gluten-free options. A reliable spot for a casual coeliac-safe meal and a pint.",
    menuHighlights: [
      "🍟 GF fish & chips",
      "🥩 Irish beef stew (GF)",
      "🍔 GF burger option",
      "🍺 Gluten-free beer & cider",
    ],
    proTip: "Ask the server for the allergen menu — they can point out every GF option on the day.",
    address: "4 Maylor St, Cork, T12 D9W2, Ireland",
    hours: "Mon–Sun: 12:00 PM – 11:30 PM",
    phone: "+353 21 427 3529",
    website: "",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Kielys+4+Maylor+St+Cork+Ireland",
    whyPeopleLoveIt: [
      "Classic Cork pub atmosphere",
      "GF fish & chips",
      "Friendly, knowledgeable staff",
      "City-centre location",
    ],
    services: {
      dineIn: { available: true, note: "Pub seating · walk-ins welcome" },
      takeaway: { available: false, note: "Dine-in only" },
      delivery: { available: false, note: "No delivery" },
    },
  },
  {
    slug: "eco-fish",
    name: "Eco Fish",
    icon: "🐟",
    specialty: "Sustainable seafood · GF options",
    rating: 4.6,
    reviewCount: 134,
    cuisineTypes: ["Seafood", "Sustainable", "Irish"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "A sustainable seafood spot on MacCurtain Street serving fresh fish and chips with a focus on locally sourced catch. Gluten-free batter is available on request and staff understand cross-contamination.",
    menuHighlights: [
      "🐟 GF battered fish & chips",
      "🦐 Grilled prawns (GF)",
      "🍟 Dedicated GF fryer on request",
      "🥗 Fresh seafood salads",
    ],
    proTip: "Call ahead to confirm the GF fryer is available — it makes the fish and chips safely celiac-friendly.",
    address: "45 MacCurtain Street, Cork, T23 DVY3, Ireland",
    hours: "Tue–Sat: 12:00 PM – 9:00 PM, Sun–Mon: Closed",
    phone: "",
    website: "",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Eco+Fish+45+MacCurtain+Street+Cork+Ireland",
    whyPeopleLoveIt: [
      "Fresh, sustainable seafood",
      "GF batter available",
      "Friendly service",
      "Casual, local favourite",
    ],
    services: {
      dineIn: { available: true, note: "Casual seating · walk-ins welcome" },
      takeaway: { available: true, note: "Fish & chips to go" },
      delivery: { available: false, note: "No delivery" },
    },
  },
  {
    slug: "jim-edwards",
    name: "Jim Edwards",
    icon: "🦪",
    specialty: "Seafood restaurant · Kinsale harbour",
    rating: 4.7,
    reviewCount: 312,
    cuisineTypes: ["Seafood", "Irish", "Fine Dining"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "A Kinsale institution overlooking the harbour, Jim Edwards serves fresh seafood and Irish classics with a strong reputation for accommodating coeliac diners. Many dishes are naturally gluten-free.",
    menuHighlights: [
      "🦪 Fresh oysters & shellfish (GF)",
      "🐟 Pan-seared local fish (GF)",
      "🥩 Irish lamb & beef (GF)",
      "🍮 GF dessert options",
    ],
    proTip: "Book a window table for harbour views and mention celiac disease when reserving.",
    address: "Market Quay, Kinsale, Co. Cork, Ireland",
    hours: "Wed–Sun: 12:30 PM – 9:30 PM, Mon–Tue: Closed",
    phone: "+353 21 477 2541",
    website: "www.jimedwardskinsale.com",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Jim+Edwards+Market+Quay+Kinsale+Ireland",
    whyPeopleLoveIt: [
      "Stunning Kinsale harbour views",
      "Excellent seafood",
      "Very coeliac-aware",
      "Great for special occasions",
    ],
    services: {
      dineIn: { available: true, note: "Harbour-view dining · reservations recommended" },
      takeaway: { available: false, note: "Dine-in only" },
      delivery: { available: false, note: "No delivery" },
    },
  },
  {
    slug: "muskerry-arms",
    name: "Muskerry Arms Bar and B&B",
    icon: "🏨",
    specialty: "Pub & inn · Blarney village",
    rating: 4.4,
    reviewCount: 189,
    cuisineTypes: ["Irish Pub", "Comfort Food", "B&B"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "A charming village pub and B&B at the foot of Blarney Castle. The kitchen offers clearly labelled gluten-free options, making it a handy stop after visiting the castle.",
    menuHighlights: [
      "🍲 Homemade soup with GF bread",
      "🥩 Roast dinners (GF options)",
      "🍔 GF burger bun available",
      "🍺 GF cider & beer",
    ],
    proTip: "Pair your visit with Blarney Castle — it's a 2-minute walk from the castle entrance.",
    address: "The Square, Blarney, Co. Cork, T23 XE95, Ireland",
    hours: "Mon–Sun: 12:00 PM – 10:00 PM",
    phone: "+353 21 438 1624",
    website: "www.muskerryarms.ie",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Muskerry+Arms+The+Square+Blarney+Ireland",
    whyPeopleLoveIt: [
      "Perfect for Blarney Castle visitors",
      "Cosy village pub atmosphere",
      "GF options clearly marked",
      "Rooms available for overnight stays",
    ],
    services: {
      dineIn: { available: true, note: "Pub dining room · walk-ins welcome" },
      takeaway: { available: false, note: "Dine-in only" },
      delivery: { available: false, note: "No delivery" },
    },
  },
  {
    slug: "scoozis",
    name: "Scoozi's Restaurant",
    icon: "🍝",
    specialty: "Italian & European bistro",
    rating: 4.5,
    reviewCount: 267,
    cuisineTypes: ["Italian", "European", "Pizza"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "A long-standing Italian restaurant in the heart of Cork offering pasta, pizza and European dishes with a dedicated gluten-free menu. Staff are trained to handle celiac requests.",
    menuHighlights: [
      "🍝 GF pasta dishes",
      "🍕 GF pizza base available",
      "🥗 GF risotto & salads",
      "🍰 GF tiramisu",
    ],
    proTip: "The GF pizza is the local favourite — ask for it well-fired for extra crispness.",
    address: "2-5 Winthrop Ln, Cork, Ireland",
    hours: "Mon–Sun: 12:00 PM – 10:00 PM",
    phone: "+353 21 427 5075",
    website: "www.scoozis.ie",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Scoozis+Restaurant+2-5+Winthrop+Lane+Cork+Ireland",
    whyPeopleLoveIt: [
      "Dedicated GF menu",
      "Great GF pizza",
      "Central Winthrop Lane location",
      "Reliable for coeliac diners",
    ],
    services: {
      dineIn: { available: true, note: "Bistro seating · reservations recommended" },
      takeaway: { available: true, note: "Takeaway available" },
      delivery: { available: false, note: "No delivery" },
    },
  },
  {
    slug: "liberty-grill",
    name: "Liberty Grill",
    icon: "🍔",
    specialty: "Gourmet burgers & grills · GF buns",
    rating: 4.6,
    reviewCount: 423,
    cuisineTypes: ["Burgers", "American", "Grill"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "A popular Cork burger joint on Washington Street known for gourmet burgers, shakes and a welcoming approach to gluten-free diners. GF buns and fries are available.",
    menuHighlights: [
      "🍔 GF brioche burger bun",
      "🍟 GF fries cooked separately",
      "🥓 Loaded GF nachos",
      "🥤 Thick milkshakes",
    ],
    proTip: "Ask for the GF bun and confirm the fries are cooked in a separate fryer.",
    address: "32 Washington Street, Cork, Ireland",
    hours: "Mon–Sun: 12:00 PM – 10:00 PM",
    phone: "+353 21 242 8788",
    website: "www.libertygrill.ie",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Liberty+Grill+32+Washington+Street+Cork+Ireland",
    whyPeopleLoveIt: [
      "Juicy gourmet burgers",
      "GF buns available",
      "Lively Washington Street spot",
      "Great milkshakes",
    ],
    services: {
      dineIn: { available: true, note: "Casual seating · walk-ins welcome" },
      takeaway: { available: true, note: "Takeaway available" },
      delivery: { available: false, note: "No delivery" },
    },
  },
  {
    slug: "joes-bros",
    name: "Joe's+Bros",
    icon: "🥑",
    specialty: "Brunch & coffee · strong GF menu",
    rating: 4.7,
    reviewCount: 356,
    cuisineTypes: ["Brunch", "Cafe", "Healthy"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "A trendy brunch spot on Oliver Plunkett Street serving all-day breakfast, smashed avocado, pancakes and specialty coffee. The menu clearly marks gluten-free choices and staff are celiac-aware.",
    menuHighlights: [
      "🥞 GF pancakes",
      "🥑 GF smashed avocado toast",
      "🍳 Full brunch plates",
      "☕ Specialty coffee",
    ],
    proTip: "Weekend brunch is busy — arrive early or book ahead to skip the queue.",
    address: "33-37 Oliver Plunkett St, Centre, Cork, T12 TF99, Ireland",
    hours: "Mon–Sun: 8:00 AM – 4:00 PM",
    phone: "+353 21 242 9090",
    website: "www.joesandbros.ie",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Joes+Bros+33-37+Oliver+Plunkett+St+Cork+Ireland",
    whyPeopleLoveIt: [
      "Excellent brunch menu",
      "Clearly labelled GF options",
      "Great coffee",
      "Central location",
    ],
    services: {
      dineIn: { available: true, note: "Cafe seating · reservations for weekends" },
      takeaway: { available: true, note: "Coffee & food to go" },
      delivery: { available: false, note: "No delivery" },
    },
  },
  {
    slug: "marina-market",
    name: "Marina Market",
    icon: "🛒",
    specialty: "Food hall & market · multiple GF vendors",
    rating: 4.5,
    reviewCount: 512,
    cuisineTypes: ["Food Hall", "Street Food", "Market"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "Cork's largest indoor food hall, packed with independent vendors serving everything from tacos to sushi. Several stalls offer gluten-free options, but check each vendor's cross-contamination practices individually.",
    menuHighlights: [
      "🌮 GF tacos & Mexican stalls",
      "🍣 GF sushi & poke bowls",
      "🥗 GF salad & bowl vendors",
      "☕ Specialty coffee roasters",
    ],
    proTip: "Walk the full hall before ordering — GF options vary by vendor and change regularly.",
    address: "Centre Park Rd, Ballintemple, Cork, T12 YX76, Ireland",
    hours: "Thu–Sun: 10:00 AM – 8:00 PM, Mon–Wed: Closed",
    phone: "",
    website: "www.themarinamarket.ie",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Marina+Market+Centre+Park+Road+Cork+Ireland",
    venueType: "street-food",
    whyPeopleLoveIt: [
      "Huge variety of food vendors",
      "Several GF-friendly stalls",
      "Lively market atmosphere",
      "Great for groups",
    ],
    services: {
      dineIn: { available: true, note: "Communal food-hall seating" },
      takeaway: { available: true, note: "Most vendors offer takeaway" },
      delivery: { available: false, note: "No delivery" },
    },
  },
  {
    slug: "coqbull-cork",
    name: "CoqBull Cork",
    icon: "🍗",
    specialty: "Chicken & burgers · GF options",
    rating: 4.4,
    reviewCount: 298,
    cuisineTypes: ["Chicken", "Burgers", "Fast Casual"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "A casual chicken and burger restaurant on French Church Street with a dedicated gluten-free menu. The kitchen can prepare burgers with GF buns and mark allergen information clearly.",
    menuHighlights: [
      "🍗 GF fried chicken",
      "🍔 GF chicken burgers",
      "🍟 GF fries",
      "🥗 GF salads & sides",
    ],
    proTip: "Order from the dedicated GF menu and double-check the fryer is clean if you're highly sensitive.",
    address: "5 French Church St, Centre, Cork, Ireland",
    hours: "Mon–Sun: 12:00 PM – 10:00 PM",
    phone: "+353 21 242 7575",
    website: "www.coqbull.com",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=CoqBull+5+French+Church+St+Cork+Ireland",
    whyPeopleLoveIt: [
      "Tasty chicken & burgers",
      "Dedicated GF menu",
      "Casual, quick service",
      "City-centre location",
    ],
    services: {
      dineIn: { available: true, note: "Casual seating · walk-ins welcome" },
      takeaway: { available: true, note: "Takeaway available" },
      delivery: { available: true, note: "Delivery via apps" },
    },
  },
  {
    slug: "eco",
    name: "Eco",
    icon: "🌿",
    specialty: "Plant-based & sustainable · GF friendly",
    rating: 4.5,
    reviewCount: 156,
    cuisineTypes: ["Plant-Based", "Sustainable", "Healthy"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "A sustainable, plant-focused eatery at the Marina Market serving bowls, wraps and smoothies. Most dishes are naturally gluten-free or can be adapted, and ingredients are locally sourced.",
    menuHighlights: [
      "🥗 GF nourish bowls",
      "🌯 GF wraps & salads",
      "🥤 Smoothies & cold-pressed juices",
      "🍰 GF raw desserts",
    ],
    proTip: "Ask which bowls are fully GF — the menu changes with seasonal produce.",
    address: "Centre Park Rd, Ballintemple, Cork, T12 YX76, Ireland",
    hours: "Thu–Sun: 10:00 AM – 8:00 PM, Mon–Wed: Closed",
    phone: "",
    website: "",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Eco+Centre+Park+Road+Cork+Ireland",
    whyPeopleLoveIt: [
      "Fresh, plant-based dishes",
      "Many naturally GF options",
      "Sustainable ethos",
      "Great location at Marina Market",
    ],
    services: {
      dineIn: { available: true, note: "Market hall seating" },
      takeaway: { available: true, note: "Takeaway available" },
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
