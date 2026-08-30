import { Link } from "react-router-dom";
import { Trophy } from "lucide-react";
import CanadaCityPage from "@/components/canada/CanadaCityPage";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Restaurant } from "@/data/capeTownRestaurants";

type CeliacSafe = "dedicated-facility" | "protocols-in-place";
type MenuType = "fully-gluten-free" | "mixed-menu";

interface DublinRestaurant {
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

export const dublinRestaurants: DublinRestaurant[] = [
  {
    slug: "the-coeliac-sanctuary",
    name: "The Coeliac Sanctuary",
    icon: "🍽️",
    specialty: "100% gluten-free restaurant & bakery",
    rating: 4.8,
    reviewCount: 156,
    cuisineTypes: ["Irish", "International", "Bakery"],
    celiacSafe: "dedicated-facility",
    menuType: "fully-gluten-free",
    overview:
      "Dublin's premier dedicated gluten-free restaurant offering traditional Irish cuisine with a modern twist. Every dish is certified gluten-free and prepared in a 100% dedicated facility, making it completely safe for celiacs.",
    menuHighlights: [
      "🍲 Irish Stew (GF thickener)",
      "🍞 Gluten-Free Soda Bread",
      "🐟 Fish & Chips with GF batter",
      "🥧 Shepherd's Pie",
      "🍳 Traditional Irish Breakfast",
    ],
    proTip: "Try their homemade gluten-free soda bread — it's available for takeaway and freezes well!",
    address: "45 Grafton Street, Dublin 2, Ireland",
    hours: "Mon–Sat: 9:00 AM – 9:00 PM, Sun: 10:00 AM – 6:00 PM",
    phone: "+353 1 234 5678",
    website: "www.coeliacsanctuary.ie",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=The+Coeliac+Sanctuary+45+Grafton+Street+Dublin+2+Ireland",
    featured: true,
    whyPeopleLoveIt: [
      "100% dedicated gluten-free facility",
      "Traditional Irish dishes made celiac-safe",
      "Fresh GF soda bread baked daily",
      "Warm, welcoming atmosphere in the city centre",
      "Trusted by the Coeliac Society of Ireland",
    ],
    services: {
      dineIn: { available: true, note: "Walk-ins welcome · reservations recommended for dinner · up to 40 guests" },
      takeaway: { available: true, note: "Order in person or by phone · ready in 15–20 min · dedicated GF packaging" },
      delivery: { available: true, note: "Available via Deliveroo · all items packed in dedicated GF containers" },
      accessible: true,
      gfPackaging: true,
    },
    fullMenu: [
      {
        category: "Irish Classics",
        note: "All dishes 100% gluten-free, prepared in a dedicated facility.",
        items: [
          { name: "Traditional Irish Stew", price: "€16.50", description: "Lamb, potatoes, carrots, onions in a rich GF-thickened broth" },
          { name: "Shepherd's Pie", price: "€15.50", description: "Minced lamb, root vegetables, creamy GF mash topping" },
          { name: "Fish & Chips", price: "€17.00", description: "Beer-battered cod with GF batter, hand-cut chips, mushy peas" },
          { name: "Full Irish Breakfast", price: "€14.50", description: "GF sausages, bacon, eggs, black & white pudding, beans, tomatoes, GF toast" },
        ],
      },
      {
        category: "Sandwiches & Light Bites",
        items: [
          { name: "GF Soda Bread Toastie", price: "€11.50", description: "Choose from ham & cheese, chicken & avocado, or roasted veg" },
          { name: "Soup of the Day with GF Soda Bread", price: "€9.50", description: "Seasonal soup served with fresh-baked GF bread" },
          { name: "Bakery Platter", price: "€13.00", description: "Selection of GF pastries, scones and savoury bites" },
        ],
      },
      {
        category: "Bakery & Sweets",
        items: [
          { name: "GF Brown Soda Bread (loaf)", price: "€6.50", description: "Fresh-baked daily — available to take home" },
          { name: "GF Apple Tart", price: "€6.00", description: "Classic Irish apple tart with GF pastry" },
          { name: "GF Victoria Sponge", price: "€6.50", description: "Light sponge with fresh cream & jam" },
          { name: "GF Chocolate Fudge Cake", price: "€7.00", description: "Rich, moist & utterly decadent" },
          { name: "GF Scones (with jam & cream)", price: "€5.00", description: "Served warm — plain or fruit" },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "GF Beer — St Peter's Without", price: "€6.50" },
          { name: "Irish Coffee (GF whiskey)", price: "€8.50" },
          { name: "Specialty Coffee", price: "€3.50–€4.50" },
          { name: "Loose Leaf Tea", price: "€3.50" },
        ],
      },
    ],
    photos: [
      { url: "https://images.unsplash.com/photo-1546069451-114e758b81f9?auto=format&fit=crop&w=600&q=80", caption: "Traditional Irish breakfast" },
      { url: "https://images.unsplash.com/photo-1574484284002-953d9c1c1e1a?auto=format&fit=crop&w=600&q=80", caption: "GF soda bread" },
      { url: "https://images.unsplash.com/photo-1481931098730-318b6f776db0?auto=format&fit=crop&w=600&q=80", caption: "Fish & chips" },
      { url: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=600&q=80", caption: "Fresh pastries" },
    ],
  },
  {
    slug: "blazing-salad",
    name: "Blazing Salads",
    icon: "🥗",
    specialty: "Vegetarian deli & bakery · 100% gluten-free",
    rating: 4.7,
    reviewCount: 218,
    cuisineTypes: ["Vegetarian", "Bakery", "Deli"],
    celiacSafe: "dedicated-facility",
    menuType: "fully-gluten-free",
    overview:
      "A Dublin institution since 2000, Blazing Salads is a family-run vegetarian deli where the entire kitchen is gluten-free. Famous for their fresh salads, soups, and baked goods — all made from scratch daily.",
    menuHighlights: [
      "🥗 Fresh salad plates (choose 3)",
      "🍲 Daily homemade soups",
      "🥧 GF quiches & savoury tarts",
      "🍰 GF cakes & brownies",
      "🥖 GF brown bread & scones",
    ],
    proTip: "Go at lunchtime for the best salad selection — the queue moves fast!",
    address: "4 Drury St, Dublin 2, D02 V628, Ireland",
    hours: "Mon–Sat: 8:00 AM – 5:00 PM, Sun: Closed",
    phone: "+353 1 475 0200",
    website: "www.blazingsalads.com",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Blazing+Salads+4+Drury+St+Dublin+2+Ireland",
    whyPeopleLoveIt: [
      "100% gluten-free kitchen since 2000",
      "Pioneer of GF dining in Dublin",
      "Huge variety of fresh salads daily",
      "Entirely vegetarian & coeliac-safe",
      "Takeaway-friendly with quick service",
    ],
    services: {
      dineIn: { available: true, note: "Counter seating & small dining area · casual" },
      takeaway: { available: true, note: "Counter service · ready immediately · dedicated GF packaging" },
      delivery: { available: true, note: "Available via Deliveroo & Uber Eats" },
    },
    fullMenu: [
      {
        category: "Salad Plates",
        note: "Choose any 3 salads from the daily selection.",
        items: [
          { name: "Small Salad Plate (3 choices)", price: "€9.50" },
          { name: "Large Salad Plate (3 choices)", price: "€12.50" },
          { name: "Salad Plate with Soup", price: "€13.50" },
        ],
      },
      {
        category: "Soups",
        note: "Rotating daily — always GF and vegetarian.",
        items: [
          { name: "Soup of the Day", price: "€6.50", description: "Served with GF brown bread" },
          { name: "Soup & GF Roll", price: "€8.50" },
        ],
      },
      {
        category: "Hot Food",
        items: [
          { name: "GF Quiche of the Day", price: "€9.50", description: "Served with side salad" },
          { name: "Vegetarian Lasagne (GF)", price: "€12.50" },
          { name: "GF Sausage Roll", price: "€5.50" },
        ],
      },
      {
        category: "Bakery & Sweets",
        items: [
          { name: "GF Brown Bread (loaf)", price: "€5.50" },
          { name: "GF Brownie", price: "€3.50" },
          { name: "GF Carrot Cake", price: "€4.00" },
          { name: "GF Scone", price: "€3.00" },
          { name: "GF Flapjack", price: "€3.00" },
        ],
      },
    ],
    photos: [
      { url: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80", caption: "Fresh salad selection" },
      { url: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80", caption: "GF brown bread" },
      { url: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80", caption: "Homemade soup" },
      { url: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80", caption: "GF brownies & cakes" },
    ],
  },
  {
    slug: "cornucopia",
    name: "Cornucopia",
    icon: "🌿",
    specialty: "Wholefood restaurant · strong GF options",
    rating: 4.6,
    reviewCount: 342,
    cuisineTypes: ["Vegetarian", "Wholefood", "Cafe"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "Dublin's most beloved wholefood restaurant since 1986. Their extensive menu clearly labels all gluten-free options, and the kitchen is well-trained in celiac cross-contamination protocols. A must-visit for healthy, hearty meals.",
    menuHighlights: [
      "🥗 Hot counter with daily specials",
      "🥣 Award-winning soups",
      "🍰 Extensive GF dessert range",
      "☕ Organic coffee & teas",
    ],
    proTip: "Ask for the allergen guide at the counter — every GF item is clearly marked.",
    address: "19 Wicklow St, Dublin 2, D02 YK86, Ireland",
    hours: "Mon–Wed: 8:00 AM – 7:00 PM, Thu–Sat: 8:00 AM – 10:00 PM, Sun: 9:00 AM – 7:00 PM",
    phone: "+353 1 633 4452",
    website: "www.cornucopia.ie",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Cornucopia+19+Wicklow+St+Dublin+2+Ireland",
    whyPeopleLoveIt: [
      "Dublin institution since 1986",
      "Extensive clearly-labelled GF menu",
      "Award-winning vegetarian & vegan options",
      "Cozy, warm atmosphere in city centre",
      "Knowledgeable staff trained on celiac needs",
    ],
    services: {
      dineIn: { available: true, note: "Counter service downstairs · full restaurant upstairs · reservations for dinner" },
      takeaway: { available: true, note: "Order at counter · ready in 10 min" },
      delivery: { available: true, note: "Available via Deliveroo" },
    },
    fullMenu: [
      {
        category: "Hot Counter",
        note: "Changes daily — GF items clearly labelled.",
        items: [
          { name: "Large Plate (4 hot items + 2 salads)", price: "€15.50" },
          { name: "Medium Plate (3 hot items + 1 salad)", price: "€12.50" },
          { name: "Small Plate (2 hot items)", price: "€9.50" },
        ],
      },
      {
        category: "Soups & Starters",
        items: [
          { name: "Soup of the Day (GF)", price: "€6.50", description: "Served with GF bread" },
          { name: "GF Soda Bread & Hummus", price: "€7.50" },
          { name: "Roasted Vegetable Salad (GF)", price: "€8.50" },
        ],
      },
      {
        category: "Mains",
        items: [
          { name: "GF Shepherd's Pie (veg)", price: "€13.50" },
          { name: "GF Lasagne (veg)", price: "€14.00" },
          { name: "Quinoa & Roast Veg Bowl (GF)", price: "€13.00" },
          { name: "GF Veggie Burger", price: "€14.50", description: "Served with GF bun & salad" },
        ],
      },
      {
        category: "GF Desserts",
        items: [
          { name: "GF Chocolate Brownie", price: "€4.50" },
          { name: "GF Apple Crumble", price: "€5.00", description: "Served with custard" },
          { name: "GF Lemon Drizzle Cake", price: "€4.50" },
          { name: "GF Raw Cheesecake", price: "€5.50" },
        ],
      },
    ],
    photos: [
      { url: "https://images.unsplash.com/photo-1490645935967-10de6ba17161?auto=format&fit=crop&w=600&q=80", caption: "Wholefood counter" },
      { url: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80", caption: "Quinoa bowl" },
      { url: "https://images.unsplash.com/photo-1606755456206-b25f37b2bf8c?auto=format&fit=crop&w=600&q=80", caption: "Vegetarian lasagne" },
      { url: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80", caption: "GF desserts" },
    ],
  },
  {
    slug: "ybells-bakehouse",
    name: "Y-Bell's Bakehouse",
    icon: "🥐",
    specialty: "Dedicated GF & DF bakery",
    rating: 4.7,
    reviewCount: 89,
    cuisineTypes: ["Bakery", "Patisserie", "Gluten-Free"],
    celiacSafe: "dedicated-facility",
    menuType: "fully-gluten-free",
    overview:
      "A dedicated gluten-free and dairy-free bakery in Dublin's city centre. Everything is baked from scratch in a 100% GF kitchen — from croissants to celebration cakes.",
    menuHighlights: [
      "🥐 GF & DF croissants",
      "🍰 Celebration cakes to order",
      "🥪 GF savoury pastries",
      "🍪 Cookies & sweet treats",
    ],
    proTip: "Order celebration cakes 48 hours ahead — they're incredible for events.",
    address: "28 Wexford St, Dublin 2, D02 AK60, Ireland",
    hours: "Tue–Sat: 9:00 AM – 5:00 PM, Sun–Mon: Closed",
    phone: "+353 1 555 0192",
    website: "www.ybellsbakehouse.ie",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Y-Bell's+Bakehouse+28+Wexford+St+Dublin+2+Ireland",
    whyPeopleLoveIt: [
      "100% gluten-free AND dairy-free",
      "Authentic-tasting GF croissants",
      "Beautiful custom celebration cakes",
      "Small, dedicated artisan bakery",
    ],
    services: {
      dineIn: { available: false, note: "Takeaway only — grab and go" },
      takeaway: { available: true, note: "Order at counter · ready immediately" },
      delivery: { available: false, note: "No delivery — call for pre-orders" },
    },
  },
  {
    slug: "the-glasshouse",
    name: "The Glasshouse",
    icon: "☕",
    specialty: "Cafe & brunch · GF-friendly menu",
    rating: 4.5,
    reviewCount: 124,
    cuisineTypes: ["Cafe", "Brunch", "Modern Irish"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "Bright, modern cafe in Dublin's south side with a well-marked gluten-free menu and staff who understand celiac requirements. Popular for brunch and weekend lunches.",
    menuHighlights: [
      "🥑 GF brunch bowls",
      "🍞 GF toast & sandwiches",
      "🥞 GF pancakes",
      "☕ Specialty coffee",
    ],
    proTip: "Mention celiac when ordering — they'll prepare on a separate surface.",
    address: "151 Thomas St, The Liberties, Dublin 8, D08 KH20, Ireland",
    hours: "Mon–Fri: 8:00 AM – 4:00 PM, Sat–Sun: 9:00 AM – 4:00 PM",
    phone: "+353 1 555 0278",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=The+Glasshouse+151+Thomas+St+Dublin+8+Ireland",
    whyPeopleLoveIt: [
      "Clearly labelled GF brunch menu",
      "Separate preparation area for celiacs",
      "Great coffee & relaxed atmosphere",
      "Popular with local coeliacs",
    ],
    services: {
      dineIn: { available: true, note: "Casual cafe seating · walk-ins welcome" },
      takeaway: { available: true, note: "Order at counter · ready in 10 min" },
      delivery: { available: true, note: "Available via Deliveroo & Uber Eats" },
    },
  },
  {
    slug: "odds-and-ends",
    name: "Odds & Ends",
    icon: "🥪",
    specialty: "Specialty grocer & cafe · GF range",
    rating: 4.4,
    reviewCount: 67,
    cuisineTypes: ["Cafe", "Grocery", "Gluten-Free"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "Neighbourhood cafe and specialty grocery store stocking a wide range of gluten-free products alongside GF-friendly cafe food. A great stop for GF travellers needing supplies.",
    menuHighlights: [
      "🛒 Extensive GF grocery range",
      "🥪 Made-to-order GF sandwiches",
      "☕ Organic coffee",
      "🍪 GF snacks & treats",
    ],
    proTip: "Check their freezer section for GF breads and pastries you won't find elsewhere.",
    address: "66 Rathmines Rd Lower, Dublin 6, D06 X9H2, Ireland",
    hours: "Mon–Sat: 8:00 AM – 7:00 PM, Sun: 10:00 AM – 6:00 PM",
    phone: "+353 1 555 0441",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Odds+and+Ends+66+Rathmines+Rd+Lower+Dublin+6+Ireland",
    whyPeopleLoveIt: [
      "Best GF grocery selection in Dublin",
      "Cafe with clearly marked GF items",
      "Knowledgeable, friendly staff",
      "Convenient Rathmines location",
    ],
    services: {
      dineIn: { available: true, note: "Small cafe area · casual" },
      takeaway: { available: true, note: "Order at counter" },
      delivery: { available: false, note: "No delivery — visit in store" },
    },
  },
];

const faqItems = [
  {
    question: "Is Dublin good for celiac travellers?",
    answer:
      "Yes — Dublin is one of Europe's most celiac-aware cities. Ireland has strong coeliac awareness, EU allergen labelling laws, and a Coeliac Society of Ireland network, so most restaurants and pubs can clearly identify gluten-free dishes.",
  },
  {
    question: "Are there dedicated gluten-free restaurants in Dublin?",
    answer:
      "Yes — Dublin has several dedicated 100% gluten-free venues including The Coeliac Sanctuary and Blazing Salads, where cross-contamination risk is virtually zero.",
  },
  {
    question: "Where are the best areas for gluten-free dining in Dublin?",
    answer:
      "The city centre (Grafton Street, Drury Street, and the Liberties) has the highest concentration of dedicated GF venues and celiac-aware cafes. Rathmines is also a good neighbourhood for GF groceries and casual dining.",
  },
  {
    question: "Can I get gluten-free food in Irish pubs?",
    answer:
      "Most Dublin pubs now stock at least one gluten-free beer or cider, and many list GF food options. Cider is a reliable fallback — always confirm with staff about cross-contamination for food.",
  },
  {
    question: "How do I explain celiac disease in Dublin?",
    answer:
      "English is spoken everywhere. Say you have coeliac disease and ask about cross-contamination — Irish restaurant staff are generally well-trained on allergen requirements.",
  },
  {
    question: "Can I find gluten-free products in Dublin supermarkets?",
    answer:
      "Yes. Tesco, Dunnes Stores, SuperValu, and Aldi all carry extensive free-from ranges with clear allergen labelling. Odds & Ends in Rathmines is a specialty shop with an even wider GF selection.",
  },
];

const dublinLatLng: Record<string, { lat: number; lng: number }> = {
  "the-coeliac-sanctuary": { lat: 53.3421, lng: -6.2596 },
  "blazing-salad": { lat: 53.3425, lng: -6.2625 },
  cornucopia: { lat: 53.3428, lng: -6.2601 },
  "ybells-bakehouse": { lat: 53.3359, lng: -6.2656 },
  "the-glasshouse": { lat: 53.3431, lng: -6.2823 },
  "odds-and-ends": { lat: 53.3208, lng: -6.2651 },
};

const dublinVenueType: Record<string, NonNullable<DublinRestaurant["venueType"]>> = {
  "ybells-bakehouse": "bakery",
  "odds-and-ends": "supermarket",
};

export const restaurantsForCityPage: Restaurant[] = dublinRestaurants.map((r) => ({
  name: r.name,
  slug: r.slug,
  address: r.address ?? "Dublin, Ireland",
  city: "Dublin",
  country: "Ireland",
  hours: r.hours ?? "See website for hours",
  phone: r.phone ?? "",
  website: r.website ?? "",
  directionsUrl: r.directionsUrl ?? `https://www.google.com/maps/search/${encodeURIComponent(r.name + " Dublin")}`,
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
  lat: dublinLatLng[r.slug]?.lat ?? 53.3498,
  lng: dublinLatLng[r.slug]?.lng ?? -6.2603,
  venueType: dublinVenueType[r.slug] ?? "restaurant",
  photos: r.photos ?? [],
  heroImage: r.heroImage,
  fullMenu: r.fullMenu,
  whyPeopleLoveIt: r.whyPeopleLoveIt,
  services: r.services,
}));

const GlutenFreeDublin = () => (
  <CanadaCityPage
    cityName="Dublin"
    citySlug="dublin"
    countryName="Ireland"
    countrySlug="ireland"
    emoji="☘️"
    heading="Dedicated Gluten-Free Restaurants in Dublin"
    compactHero
    intro="Dublin is one of Europe's most celiac-aware cities, with dedicated gluten-free restaurants, bakeries and cafes backed by strong coeliac awareness and EU allergen labelling. From Grafton Street to Rathmines, safe and delicious gluten-free options abound."
    restaurants={restaurantsForCityPage}
    faqItems={faqItems}
    extraSection={
      <>
        {/* Browse by Category */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            🍽️ Browse by Category
          </h2>
          <p className="text-gray-600 mb-4">
            Find exactly what you're looking for with our curated category pages.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <Link to="/gluten-free/ireland/dublin/street-food">
              <Card className="cursor-pointer hover:shadow-sm transition-shadow border border-orange-200 bg-gradient-to-r from-orange-50 to-red-50">
                <CardContent className="p-2 flex items-center gap-2">
                  <span className="text-lg">🍢</span>
                  <div>
                    <h3 className="text-sm font-medium text-orange-900">Street Food</h3>
                    <p className="text-orange-700 text-[11px]">Markets & food trucks</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link to="/gluten-free/ireland/dublin/bakeries">
              <Card className="cursor-pointer hover:shadow-sm transition-shadow border border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50">
                <CardContent className="p-2 flex items-center gap-2">
                  <span className="text-lg">🥐</span>
                  <div>
                    <h3 className="text-sm font-medium text-amber-900">Bakeries</h3>
                    <p className="text-amber-700 text-[11px]">Fresh bread & pastries</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link to="/gluten-free/ireland/dublin/grocery-stores">
              <Card className="cursor-pointer hover:shadow-sm transition-shadow border border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
                <CardContent className="p-2 flex items-center gap-2">
                  <span className="text-lg">🛒</span>
                  <div>
                    <h3 className="text-sm font-medium text-green-900">Grocery Stores</h3>
                    <p className="text-green-700 text-[11px]">Supermarkets & shops</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link to="/gluten-free/ireland/dublin/gluten-free-products">
              <Card className="cursor-pointer hover:shadow-sm transition-shadow border border-violet-200 bg-gradient-to-r from-violet-50 to-purple-50">
                <CardContent className="p-2 flex items-center gap-2">
                  <span className="text-lg">🛍️</span>
                  <div>
                    <h3 className="text-sm font-medium text-violet-900">GF Products</h3>
                    <p className="text-violet-700 text-[11px]">Specialty GF items</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>

        <section className="mb-10">
          <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
            <CardContent className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-start gap-4">
                <Trophy className="w-8 h-8 text-amber-600 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-1">Best Gluten-Free Restaurants in Dublin</h2>
                  <p className="text-gray-700">Our editorial top 10 celiac-safe picks across Dublin — ranked by safety, reviews and quality.</p>
                </div>
              </div>
              <Link to="/gluten-free/ireland/dublin/best-gluten-free-restaurants-in-dublin" className="md:flex-shrink-0">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white">View the Top 10</Button>
              </Link>
            </CardContent>
          </Card>
        </section>
      </>
    }
  />
);

export default GlutenFreeDublin;
