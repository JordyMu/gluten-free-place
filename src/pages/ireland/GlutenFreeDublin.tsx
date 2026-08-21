import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft, Award, CheckCircle, Clock, Filter, Globe, MapPin,
  MessageCircle, Navigation, Phone, Search, Shield, Star, BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { AddRestaurantDialog } from "@/components/restaurants/AddRestaurantDialog";
import { FindNearMeButton } from "@/components/city/FindNearMeButton";
import { SEOHead } from "@/components/SEOHead";

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

const getCeliacSafeBadge = (level?: CeliacSafe) => {
  if (level === "dedicated-facility") {
    return (
      <Badge className="bg-green-100 text-green-800 border-green-300">
        <Shield className="w-3 h-3 mr-1" />Dedicated GF Facility
      </Badge>
    );
  }
  return (
    <Badge className="bg-blue-100 text-blue-800 border-blue-300">
      <CheckCircle className="w-3 h-3 mr-1" />Celiac Protocols
    </Badge>
  );
};

const getMenuTypeBadge = (type?: MenuType) => {
  if (type === "fully-gluten-free") {
    return <Badge className="bg-emerald-100 text-emerald-800 border-emerald-300">100% Gluten-Free</Badge>;
  }
  return <Badge className="bg-amber-100 text-amber-800 border-amber-300">GF Options Available</Badge>;
};

const renderStarRating = (rating: number) => (
  <div className="flex items-center gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
      />
    ))}
    <span className="ml-1 font-semibold">{rating}</span>
  </div>
);

const openExternalLink = (url: string) => {
  const normalized = url.startsWith("http") ? url : `https://${url}`;
  window.open(normalized, "_blank", "noopener,noreferrer");
};

const GlutenFreeDublin = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [menuFilters, setMenuFilters] = useState<string[]>([]);
  const [safetyFilters, setSafetyFilters] = useState<string[]>([]);
  const [cuisineFilters, setCuisineFilters] = useState<string[]>([]);
  const [showAllCuisines, setShowAllCuisines] = useState(false);
  const [openFilterSections, setOpenFilterSections] = useState({
    kitchen: true,
    cuisine: true,
    badges: true,
  });

  const toggle = (value: string, list: string[], setList: (v: string[]) => void) => {
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  };

  const pageTitle = "Gluten-Free Options in Dublin | Celiac-Safe Dining";
  const metaDescription =
    "Browse verified gluten free options in Dublin, Ireland. Discover celiac-safe restaurants, bakeries and cafes with reviews, menu tips and directions.";
  const schemaJson = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Gluten-Free Options in Dublin, Ireland",
      description: metaDescription,
      url: "https://glutenfreeplace.org/gluten-free/ireland/dublin",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];

  const cuisineOptions = useMemo(() => {
    const counts = new Map<string, number>();
    dublinRestaurants.forEach((r) => (r.cuisineTypes || []).forEach((c) => counts.set(c, (counts.get(c) ?? 0) + 1)));
    return Array.from(counts.entries())
      .map(([label, count]) => ({ value: label, label, count }))
      .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
  }, []);

  const menuOptions = useMemo(
    () => [
      { value: "fully-gluten-free", label: "100% Gluten-Free", count: dublinRestaurants.filter((r) => r.menuType === "fully-gluten-free").length },
      { value: "mixed-menu", label: "GF Options Available", count: dublinRestaurants.filter((r) => r.menuType === "mixed-menu").length },
    ],
    [],
  );

  const safetyOptions = useMemo(
    () => [
      { value: "dedicated-facility", label: "Dedicated GF Facility", count: dublinRestaurants.filter((r) => r.celiacSafe === "dedicated-facility").length },
      { value: "protocols-in-place", label: "Celiac Protocols", count: dublinRestaurants.filter((r) => r.celiacSafe === "protocols-in-place").length },
    ],
    [],
  );

  const filteredRestaurants = useMemo(
    () =>
      dublinRestaurants.filter((r) => {
        const q = searchQuery.toLowerCase();
        const matchesSearch =
          q === "" ||
          r.name.toLowerCase().includes(q) ||
          (r.cuisineTypes || []).some((c) => c.toLowerCase().includes(q));
        const matchesMenu = menuFilters.length === 0 || (!!r.menuType && menuFilters.includes(r.menuType));
        const matchesSafety = safetyFilters.length === 0 || (!!r.celiacSafe && safetyFilters.includes(r.celiacSafe));
        const matchesCuisine =
          cuisineFilters.length === 0 || (r.cuisineTypes || []).some((c) => cuisineFilters.includes(c));
        return matchesSearch && matchesMenu && matchesSafety && matchesCuisine;
      }),
    [searchQuery, menuFilters, safetyFilters, cuisineFilters],
  );

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={metaDescription}
        canonical="/gluten-free/ireland/dublin"
        schemaJson={schemaJson}
      />
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <header className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-4">
            <Link to="/ireland" className="inline-flex items-center text-green-700 hover:text-green-800">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Ireland
            </Link>
          </div>
        </header>

        <section
          className="relative text-white py-14 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.45)), url(https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&w=1600&q=80)",
          }}
        >
          <div className="container mx-auto px-4 text-center relative z-10">
            <span className="text-5xl mb-4 block">🇮🇪</span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Dedicated Gluten-Free Restaurants in Dublin
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-6 max-w-3xl mx-auto">
              Verified celiac-safe spots, practical menu guidance, and trusted dining picks in Dublin.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Badge className="bg-white/20 border-white/40 text-white px-4 py-2">
                {dublinRestaurants.length} listed restaurants
              </Badge>
              <FindNearMeButton city="Dublin" />
              <AddRestaurantDialog
                city="Dublin"
                triggerClassName="border-white bg-transparent !text-white hover:bg-white/10"
              />
            </div>
          </div>
        </section>

        <main className="container mx-auto px-4 py-8">
          <section className="mb-10">
            <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Award className="w-8 h-8 text-green-700 flex-shrink-0" />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      Gluten-Free Dining in Dublin
                    </h2>
                    <p className="text-gray-700">
                      Dublin has one of Europe's most celiac-aware dining scenes, from dedicated gluten-free
                      restaurants like The Coeliac Sanctuary and Blazing Salads to celiac-friendly cafes and
                      wholefood restaurants. Ireland's EU allergen labelling laws and the Coeliac Society of
                      Ireland network mean most venues can clearly identify gluten-free dishes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Verified Gluten-Free Restaurants in Dublin
                </h2>
                <div className="grid gap-6">
                  {filteredRestaurants.map((r) => (
                    <Card
                      key={r.slug}
                      className={`overflow-hidden border-2 border-red-200 ${r.featured ? "ring-2 ring-red-300" : ""}`}
                    >
                      <CardContent className="p-6">
                        <div className="mb-3">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            {r.icon && <span className="text-2xl">{r.icon}</span>}
                            <span className="text-xl font-bold text-gray-900 hover:text-red-700 hover:underline transition-colors">
                              {r.name}
                            </span>
                            {r.featured && (
                              <Badge className="bg-amber-100 text-amber-800 border-amber-300">Featured</Badge>
                            )}
                          </div>
                          {r.specialty && <p className="text-sm text-gray-500">{r.specialty}</p>}
                        </div>

                        {r.rating !== undefined && (
                          <div className="flex items-center gap-2 mb-3">
                            {renderStarRating(r.rating)}
                            {r.reviewCount !== undefined && (
                              <span className="text-sm text-gray-500">({r.reviewCount} reviews)</span>
                            )}
                          </div>
                        )}

                        <div className="flex flex-wrap gap-2 mb-3">
                          {(r.cuisineTypes || []).map((c) => (
                            <Badge key={c} variant="outline">{c}</Badge>
                          ))}
                          {getCeliacSafeBadge(r.celiacSafe)}
                          {getMenuTypeBadge(r.menuType)}
                        </div>

                        <div className="space-y-2 text-sm text-gray-600 mb-4">
                          {r.address && (
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-gray-400" />
                              <span>{r.address}</span>
                            </div>
                          )}
                          {r.hours && (
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-gray-400" />
                              <span>{r.hours}</span>
                            </div>
                          )}
                          {r.phone && (
                            <div className="flex items-center gap-2">
                              <Phone className="w-4 h-4 text-gray-400" />
                              <a href={`tel:${r.phone.replace(/\s/g, "")}`} className="hover:text-green-700">
                                {r.phone}
                              </a>
                            </div>
                          )}
                        </div>

                        {r.overview && <p className="text-gray-700 mb-4">{r.overview}</p>}

                        {r.menuHighlights && r.menuHighlights.length > 0 && (
                          <div className="mb-4">
                            <h4 className="font-semibold text-gray-900 mb-2">Menu Highlights</h4>
                            <div className="flex flex-wrap gap-2">
                              {r.menuHighlights.map((m) => (
                                <Badge key={m} variant="secondary" className="text-sm">{m}</Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {r.proTip && (
                          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
                            <div className="flex items-center gap-2">
                              <MessageCircle className="w-4 h-4 text-amber-700" />
                              <span className="font-medium text-amber-800">Pro Tip:</span>
                              <span className="text-amber-700">{r.proTip}</span>
                            </div>
                          </div>
                        )}

                        {r.whyPeopleLoveIt && r.whyPeopleLoveIt.length > 0 && (
                          <div className="mb-4">
                            <h4 className="font-semibold text-gray-900 mb-2">Why people love it</h4>
                            <ul className="space-y-1">
                              {r.whyPeopleLoveIt.map((item) => (
                                <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div className="flex flex-wrap gap-3">
                          {r.directionsUrl && (
                            <Button
                              type="button"
                              className="bg-red-700 hover:bg-red-800"
                              onClick={() => openExternalLink(r.directionsUrl!)}
                            >
                              <Navigation className="w-4 h-4 mr-2" />
                              Get Directions
                            </Button>
                          )}
                          {r.website && (
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => openExternalLink(r.website!)}
                            >
                              <Globe className="w-4 h-4 mr-2" />
                              Website
                            </Button>
                          )}
                          <Button type="button" variant="outline">
                            <BookOpen className="w-4 h-4 mr-2" />
                            View Menu
                          </Button>
                        </div>

                        <div className="mt-4 pt-4 border-t border-gray-100 space-y-1 text-sm">
                          <div><span className="font-bold text-gray-900">Bakery:</span></div>
                          <div><span className="font-bold text-gray-900">Coffee Shop:</span></div>
                          <div><span className="font-bold text-gray-900">Grocery store:</span></div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <aside className="lg:sticky lg:top-4 lg:self-start space-y-4 order-first lg:order-last">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base">
                      <Search className="w-4 h-4 text-green-700" />
                      Search Restaurants
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="relative">
                      <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                      <Input
                        className="pl-9"
                        placeholder="Search by name or cuisine"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-base">
                      <Filter className="w-4 h-4 text-red-700" />
                      Filter Restaurants
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-5 pt-0 space-y-2">
                    {/* Kitchen Type */}
                    <div className="border-b last:border-b-0">
                      <button
                        type="button"
                        onClick={() => setOpenFilterSections((s) => ({ ...s, kitchen: !s.kitchen }))}
                        className="w-full flex items-center justify-between py-3 text-xs font-semibold uppercase tracking-wider text-gray-500 hover:text-gray-700"
                      >
                        <span>Kitchen Type</span>
                        <span className="text-gray-400">{openFilterSections.kitchen ? "−" : "+"}</span>
                      </button>
                      {openFilterSections.kitchen && (
                        <div className="pb-3 space-y-2">
                          {menuOptions.map((opt) => (
                            <label key={opt.value} className="flex items-center gap-2.5 cursor-pointer group">
                              <Checkbox
                                checked={menuFilters.includes(opt.value)}
                                onCheckedChange={() => toggle(opt.value, menuFilters, setMenuFilters)}
                              />
                              <span className="text-sm text-gray-700 group-hover:text-gray-900 flex-1">{opt.label}</span>
                              <span className="text-xs text-gray-400 bg-gray-100 rounded-full px-2 py-0.5 min-w-[1.5rem] text-center">
                                {opt.count}
                              </span>
                            </label>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Cuisine */}
                    <div className="border-b last:border-b-0">
                      <button
                        type="button"
                        onClick={() => setOpenFilterSections((s) => ({ ...s, cuisine: !s.cuisine }))}
                        className="w-full flex items-center justify-between py-3 text-xs font-semibold uppercase tracking-wider text-gray-500 hover:text-gray-700"
                      >
                        <span>Cuisine</span>
                        <span className="text-gray-400">{openFilterSections.cuisine ? "−" : "+"}</span>
                      </button>
                      {openFilterSections.cuisine && (
                        <div className="pb-3 space-y-2">
                          {(showAllCuisines ? cuisineOptions : cuisineOptions.slice(0, 6)).map((opt) => (
                            <label key={opt.value} className="flex items-center gap-2.5 cursor-pointer group">
                              <Checkbox
                                checked={cuisineFilters.includes(opt.value)}
                                onCheckedChange={() => toggle(opt.value, cuisineFilters, setCuisineFilters)}
                              />
                              <span className="text-sm text-gray-700 group-hover:text-gray-900 flex-1 truncate">{opt.label}</span>
                              <span className="text-xs text-gray-400 bg-gray-100 rounded-full px-2 py-0.5 min-w-[1.5rem] text-center">
                                {opt.count}
                              </span>
                            </label>
                          ))}
                          {cuisineOptions.length > 6 && (
                            <button
                              type="button"
                              onClick={() => setShowAllCuisines(!showAllCuisines)}
                              className="text-sm text-green-700 hover:text-green-800 font-medium pt-1"
                            >
                              {showAllCuisines ? "Show less" : `Show all ${cuisineOptions.length} cuisines`}
                            </button>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Badges */}
                    <div className="border-b last:border-b-0">
                      <button
                        type="button"
                        onClick={() => setOpenFilterSections((s) => ({ ...s, badges: !s.badges }))}
                        className="w-full flex items-center justify-between py-3 text-xs font-semibold uppercase tracking-wider text-gray-500 hover:text-gray-700"
                      >
                        <span>Badges</span>
                        <span className="text-gray-400">{openFilterSections.badges ? "−" : "+"}</span>
                      </button>
                      {openFilterSections.badges && (
                        <div className="pb-3 space-y-2">
                          {safetyOptions.map((opt) => (
                            <label key={opt.value} className="flex items-center gap-2.5 cursor-pointer group">
                              <Checkbox
                                checked={safetyFilters.includes(opt.value)}
                                onCheckedChange={() => toggle(opt.value, safetyFilters, setSafetyFilters)}
                              />
                              <span className="text-sm text-gray-700 group-hover:text-gray-900 flex-1">{opt.label}</span>
                              <span className="text-xs text-gray-400 bg-gray-100 rounded-full px-2 py-0.5 min-w-[1.5rem] text-center">
                                {opt.count}
                              </span>
                            </label>
                          ))}
                        </div>
                      )}
                    </div>

                    {(menuFilters.length > 0 || cuisineFilters.length > 0 || safetyFilters.length > 0) && (
                      <button
                        type="button"
                        onClick={() => {
                          setMenuFilters([]);
                          setCuisineFilters([]);
                          setSafetyFilters([]);
                        }}
                        className="text-sm text-red-700 hover:text-red-800 font-medium pt-2"
                      >
                        Clear all filters
                      </button>
                    )}

                    <p className="border-t pt-3 text-sm text-gray-600">
                      Showing {filteredRestaurants.length} of {dublinRestaurants.length}
                    </p>
                  </CardContent>
                </Card>
              </aside>
            </div>
          </section>

          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
                <p className="text-gray-600">Gluten-free dining in Dublin</p>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqItems.map((faq, i) => (
                    <AccordionItem key={faq.question} value={`faq-${i}`}>
                      <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </section>
        </main>
      </div>
    </>
  );
};

export default GlutenFreeDublin;
