import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft, Award, CheckCircle, Clock, Filter, Globe, MapPin,
  MessageCircle, Navigation, Phone, Search, Shield, Star, Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { AddRestaurantDialog } from "@/components/restaurants/AddRestaurantDialog";
import { SEOHead } from "@/components/SEOHead";

type CeliacSafe = "dedicated-facility" | "protocols-in-place";
type MenuType = "fully-gluten-free" | "mixed-menu";

interface BrisbaneRestaurant {
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
  whyPeopleLoveIt?: string[];
  proTip?: string;
  address?: string;
  hours?: string;
  phone?: string;
  website?: string;
  directionsUrl?: string;
  featured?: boolean;
  heroImage?: string;
  fullMenu?: {
    category: string;
    note?: string;
    items: { name: string; price?: string; description?: string }[];
  }[];
  services?: {
    dineIn?: { available: boolean; note: string };
    takeaway?: { available: boolean; note: string };
    delivery?: { available: boolean; note: string };
    accessible?: boolean;
    gfPackaging?: boolean;
  };
}

export const brisbaneRestaurants: BrisbaneRestaurant[] = [
  {
    slug: "glazed-gluten-free-patisserie",
    name: "Glazed Gluten Free Patisserie",
    icon: "🥐",
    specialty: "Artisan patisserie · 100% gluten-free",
    rating: 4.9,
    reviewCount: 187,
    cuisineTypes: ["Patisserie", "Bakery", "French"],
    celiacSafe: "dedicated-facility",
    menuType: "fully-gluten-free",
    overview:
      "Dedicated gluten-free patisserie with expertly trained pastry chefs and comprehensive celiac knowledge. Creates beautiful French-style pastries that are completely safe for celiacs.",
    menuHighlights: [
      "🥐 French pastries",
      "🍰 Custom cakes",
      "🧁 Cupcakes & tarts",
      "🍪 Cookies & macarons",
      "☕ Specialty coffee",
    ],
    whyPeopleLoveIt: [
      "100% Dedicated Gluten-Free Bakery",
      "Award-Winning Artisan Pastries",
      "Excellent Coffee & Brunch",
      "Beautiful Celebration Cakes",
      "Safe for Coeliacs",
    ],
    proTip: "Order custom cakes 48 hours in advance — they're stunning.",
    address: "56 Grey St, South Brisbane QLD 4101, Australia",
    hours: "Mon–Sat: 8:00AM – 6:00PM",
    phone: "+61 7 3012 3456",
    website: "www.glazedgf.com.au",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Glazed+Gluten+Free+Patisserie+Brisbane",
    featured: true,
    services: {
      dineIn: { available: true, note: "Limited indoor seating · communal tables · laptop-friendly during weekday mornings" },
      takeaway: { available: true, note: "Order at the counter · ready in 5–10 min · GF pastries packed separately" },
      delivery: { available: true, note: "Available via third-party delivery partners · GF pastries packed separately" },
      accessible: true,
      gfPackaging: true,
    },
    fullMenu: [
      {
        category: "🍞 Freshly Baked Bread",
        items: [
          { name: "9.5″ Quiche", price: "$55.00", description: "Homemade quiche with a golden, buttery crust and rich savoury filling (GF, DF, NF)" },
          { name: "Bagel Pizza – 3 Pack", price: "$15.00", description: "Vegan, gluten free, soy free and nut free" },
          { name: "Garlic Herbs Bread", price: "$12.00", description: "Vegan, gluten free, soy free and nut free" },
          { name: "Plain Loaf", price: "$10.00" },
          { name: "Seeded Loaf", price: "$11.00" },
          { name: "Sesame Loaf", price: "$11.00" },
          { name: "Olive Loaf", price: "$12.00" },
          { name: "Multigrain Loaf", price: "$12.00" },
          { name: "French Baguette", price: "$8.00" },
          { name: "Herbs Focaccia", price: "$8.00" },
          { name: "Semi Sundried Tomato Focaccia", price: "$8.00" },
          { name: "Turkish Pide Bread", price: "$8.00" },
          { name: "Turkish Rolls – 4 Pack", price: "$12.00" },
          { name: "Cinnamon Pretzel – 4 Pack", price: "$14.00" },
          { name: "Jerusalem Sesame Bagel", price: "$8.00" },
          { name: "Bagel Plain – 4 Pack", price: "$13.20" },
          { name: "Bagel Seeded – 4 Pack", price: "$14.00" },
          { name: "Bagel Sesame – 4 Pack", price: "$14.00" },
          { name: "Burger Buns – 4 Pack", price: "$14.00" },
          { name: "Mini Dinner Rolls – 5 Pack", price: "$10.00" },
          { name: "Hotdog Rolls – 4 Pack", price: "$13.20" },
          { name: "Brazilian Cheese Bread (Pão de Queijo)", price: "$5.00" },
          { name: "Pizza (Vegan)", price: "$30.00", description: "Thin crust with seasonal vegetables. Vegan, GF, DF, NF, SF" },
        ],
      },
      {
        category: "🥐 Pastries",
        items: [
          { name: "Puff Pastry – Apple Turnovers", price: "$9.00", description: "Tender apple chunks in flaky homemade puff pastry (vegan, GF, NF)" },
          { name: "Puff Pastry – Sausage Rolls", price: "$12.00", description: "Buttery homemade sausage roll baked golden (vegan, GF, NF)" },
          { name: "Puff Pastry – Potato Mushrooms", price: "$11.00", description: "Comforting flaky pastry with potato & mushroom (vegan, GF, NF)" },
          { name: "Puff Pastry – Spinach and Cheese", price: "$11.00", description: "Rich spinach and cheese in buttery homemade pastry (vegan, GF, NF)" },
        ],
      },
      {
        category: "✨ Friday Special",
        items: [
          { name: "Babka", price: "$22.00", description: "Soft and buttery filled with delicious goodness (vegan, GF, SF, NF)" },
          { name: "Challah – Plain", price: "$10.00" },
          { name: "Challah – Sesame", price: "$10.50" },
          { name: "Challah – Cinnamon", price: "$11.00" },
          { name: "Challah – Plain Rolls", price: "$3.30" },
          { name: "Challah – Sesame Rolls", price: "$3.50" },
        ],
      },
      {
        category: "🌙 Wednesday Special",
        note: "Available Wednesday only, pick up after 1pm",
        items: [
          { name: "Pita Bread – 5 Pack", price: "$17.50" },
          { name: "Laffa Middle Eastern Flat Bread – 5 Pack", price: "$17.50" },
          { name: "Naan Indian Style Bread – 5 Pack", price: "$17.50" },
        ],
      },
      {
        category: "🍫 Krembo",
        items: [
          { name: "Krembo – Assorted Flavours (6 Pack)", price: "$33.00", description: "Light fluffy meringue on crunchy biscuits glazed in rich chocolate (GF, DF, NF)" },
          { name: "Krembo – Assorted Flavours (12 Pack)", price: "$60.00", description: "Rotating daily flavours: vanilla, chocolate, mocha, strawberry, lemon, halva, matcha and more" },
        ],
      },
      {
        category: "🍰 Individual Desserts",
        items: [
          { name: "Berry Bloom Petite", price: "$13.00", description: "Strawberry-raspberry sponge with berry jam & strawberry mousse (GF, DF, NF)" },
          { name: "Chocolate Mousse Petite", price: "$14.00", description: "Rich dark chocolate mousse, smooth and velvety (GF, DF, NF)" },
          { name: "Dream Duo – Vegan Chocolate Banana Brownie", price: "$15.00", description: "Fudgy chocolate banana brownie with MYLK chocolate ganache (vegan, GF, DF, NF)" },
          { name: "Vanilla and Lemon Gateau", price: "$12.00", description: "Sprinkled with lemon zest (GF, DF, NF)" },
          { name: "Tiramisu", price: "$12.00", description: "Layers of lux chocolate, rich cream, dusted with cacao (GF, DF, NF)" },
          { name: "Valencia", price: "$14.00", description: "Rich chocolate and orange combination (GF, DF, NF)" },
          { name: "Chocolate Brownie", price: "$11.00", description: "Super fudgey chocolate brownie made with cacao (GF, DF, NF)" },
          { name: "Plum Cinnamon Pudding", price: "$11.00", description: "Buttery plum pudding with cinnamon crumble (GF, DF, NF)" },
          { name: "Passionfruit Hemisphere", price: "$12.00", description: "Passionfruit infused with lemongrass mousse on dacquoise disk (GF, DF, NF)" },
          { name: "Blueberry Vanilla Muffin", price: "$8.00" },
          { name: "Chocolate Raspberry Muffin", price: "$8.00" },
          { name: "Apple Cinnamon Muffin", price: "$8.00" },
          { name: "Triple Chocolate Muffin", price: "$8.00" },
        ],
      },
      {
        category: "🎂 Whole Cakes (7″)",
        items: [
          { name: "Signature Krembo Chocolate Caramel Cake", price: "$70.00", description: "Fudgy chocolate brownie topped with chocolate caramel & marshmallow (GF, DF, NF)" },
          { name: "Chocolate Mousse Cake", price: "$70.00", description: "Rich dark chocolate mousse coated with snappy chocolate (GF, DF, NF, SF)" },
          { name: "Blue Butterfly", price: "$70.00", description: "Butterfly pea sponge with blueberry crème pâtissière & shimmering jelly (GF, DF, NF)" },
          { name: "Vanilla and Lemon Gateau", price: "$68.00", description: "Vanilla sponge with vanilla-lemon crème, lemon jelly and jam (GF, DF, NF)" },
          { name: "Berry Bloom", price: "$68.00", description: "Strawberry-raspberry sponge with berry jam & strawberry mousse (GF, DF, NF)" },
          { name: "Passiflora", price: "$68.00", description: "Passionfruit-lemongrass mousse with crisp vanilla tuile (GF, DF, NF)" },
          { name: "Secret Garden (Lavender & Lime)", price: "$68.00", description: "Lavender tea & lime cake enveloped in toasted meringue (GF, DF, NF)" },
          { name: "Tiramisu", price: "$68.00", description: "Multi-layered chocolate & coffee cream patissière dusted with cacao (GF, DF, NF)" },
          { name: "Vegan Lamington", price: "$62.00", description: "Chocolate sponge with raspberry jam & desiccated coconut (vegan, GF, DF, NF)" },
          { name: "Coconut Mixed Berries Blondie", price: "$48.00", description: "Fudgy coconut blondie with rhubarb & mixed berries (GF, DF, NF, SF)" },
          { name: "Chocolate Brownie Fudge (8″)", price: "$48.00", description: "Super fudgey, moist chocolate brownie (GF, DF, NF)" },
          { name: "Plum Cinnamon Pudding", price: "$46.00", description: "Buttery plum pudding with cinnamon crumble (GF, DF, NF)" },
          { name: "Cookie Cake", price: "$32.00", description: "Chewy inside, crunchy outside, packed with flavour (GF, DF, NF)" },
        ],
      },
    ],
  },
  {
    slug: "urban-fish-market",
    name: "Urban Fish Market",
    icon: "🐟",
    specialty: "Fresh seafood with GF options",
    rating: 4.6,
    reviewCount: 112,
    cuisineTypes: ["Seafood", "Australian"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "Fresh seafood restaurant with knowledgeable staff trained in gluten-free preparation techniques. Separate preparation areas for all GF dishes.",
    menuHighlights: [
      "🐟 Grilled fish (GF)",
      "🦐 Seafood platters",
      "🥗 Fresh salads",
      "🍋 Lemon pepper calamari (GF)",
    ],
    proTip: "Ask for the daily catch — always fresh and delicious.",
    address: "Shop 3/90 Surf Parade, Broadbeach QLD 4218, Australia",
    hours: "Daily: 11:00AM – 10:00PM",
    phone: "+61 7 5526 7340",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Urban+Fish+Market+Broadbeach",
    website: "https://urbanfishmarket.com.au",
    whyPeopleLoveIt: [
      "Fresh Local Seafood Daily",
      "Knowledgeable GF-Trained Staff",
      "Separate GF Preparation Areas",
      "Broadbeach Waterfront Location",
      "Great Value Family Platters",
    ],
    services: {
      dineIn: {
        available: true,
        note: "Casual indoor and outdoor seating overlooking Broadbeach.",
      },
      takeaway: {
        available: true,
        note: "Order at the counter — fish & chips, burgers and platters packed to go.",
      },
      delivery: {
        available: true,
        note: "Available via Uber Eats, DoorDash and Menulog across the Gold Coast.",
      },
    },
    fullMenu: [
      {
        category: "🐟 Fish Fillets",
        note: "Choice of grilled, crumbed or battered. Add garlic/chilli oil confit +$1 · chilli & garlic marinade +$2",
        items: [
          { name: "NZ Hoki", price: "$14.00" },
          { name: "NZ Flake", price: "$16.00" },
          { name: "Barramundi", price: "$19.00" },
          { name: "QLD Barramundi", price: "$26.50" },
          { name: "Goldband Snapper", price: "$24.00" },
          { name: "Norwegian Salmon", price: "$22.00" },
          { name: "Market Fish of the Day", price: "MP" },
        ],
      },
      {
        category: "🍟 Value Meals",
        note: "Fish your way — choice of grilled, crumbed or battered",
        items: [
          { name: "Fish & Chips", price: "$16.00", description: "NZ Hoki, chips & tartare" },
          { name: "Fishermans Treat", price: "$25.00", description: "NZ Hoki, 2 crumbed calamari, 1 crumbed prawn, chips & tartare. Add sea scallop +$4" },
          { name: "Snack Pack", price: "$29.00", description: "4 crumbed prawns, 4 crumbed calamari, chips & tartare" },
          { name: "Urban For Two", price: "$48.00", description: "2 NZ Hoki, 6 crumbed calamari, 2 crumbed prawns, chips & tartare" },
          { name: "Family Feast", price: "$88.00", description: "4 NZ Hoki, 8 crumbed calamari, 4 crumbed prawns, chips & tartare" },
        ],
      },
      {
        category: "🍔 Burgers",
        items: [
          { name: "Calamari Burger", price: "$18.00", description: "Crumbed calamari, tomato, lettuce & tartare" },
          { name: "Urban Tropicano", price: "$23.00", description: "Beef patty, grilled pineapple, caramelised onion, cheese, tomato, lettuce, relish & aioli" },
          { name: "Barra Burger", price: "$22.00", description: "Barramundi (crumbed, battered or grilled), tomato, lettuce & tartare" },
          { name: "Fishcake Burger", price: "$22.00", description: "Housemade barramundi fishcake, coleslaw & tartare" },
          { name: "Surf & Turf Burger", price: "$24.90", description: "Beef patty, grilled king prawns, cheese, tomato, lettuce, relish & house chilli mayo" },
          { name: "Urban Lamb Burger", price: "$27.00", description: "Slow cooked lamb shoulder, coleslaw & house coconut tzatziki" },
        ],
      },
      {
        category: "⭐ Signature Dishes",
        items: [
          { name: "Urban Yiros", price: "$22.00", description: "Signature pulled lamb, lettuce, tomato, onion, chips, aioli & spiced harissa in pita. Double lamb +$6.50" },
          { name: "Barramundi Fishcake", price: "$25.00", description: "Housemade barramundi fishcake with tartare & choice of chips or salad" },
          { name: "Chilli & Garlic Calamari", price: "$24.00", description: "Marinated grilled calamari with garden salad & fava bean purée" },
          { name: "Snapper Pie", price: "$28.00", description: "Housemade gourmet snapper pie with choice of chips or salad" },
          { name: "Lemon Pepper Squid", price: "$26.00", description: "Squid crumbed in zesty citrus seasoning with tartare & chips or salad" },
          { name: "Spicy Grilled Prawn Salad", price: "$29.00", description: "Chilli & garlic prawns, mixed greens, mango, cucumber, toasted almonds, nam jim dressing. Add avo +$4" },
          { name: "Thai Salmon", price: "$32.00", description: "Crispy grilled Norwegian salmon, mixed greens, Thai green sauce. Add rice +$5" },
        ],
      },
      {
        category: "🦐 Snacks",
        items: [
          { name: "Hand Cut Potato Scallop", price: "$3.50" },
          { name: "Hand Cut Sweet Potato Scallop", price: "$3.50" },
          { name: "Fish Bite", price: "$4.00 ea / 5 for $16" },
          { name: "Sea Scallop", price: "$4.00" },
          { name: "Prawn Cutlet", price: "$4.00" },
          { name: "Calamari", price: "$2.50 ea / 10 for $20" },
          { name: "Grilled Bugs", price: "$17.50", description: "Moreton Bay bug halves (2) grilled in house chilli garlic marinade" },
        ],
      },
      {
        category: "🦪 Cold Seafood",
        note: "Subject to daily availability",
        items: [
          { name: "Trawler Prawn Bucket", price: "$33.00", description: "Local king prawns with seafood sauce & lemon" },
          { name: "Oysters", price: "½ doz $20.50 / doz $41.00", description: "Fresh pacific oysters" },
          { name: "Fresh Bugs", price: "$30.00", description: "Moreton Bay bug halves (4) with seafood sauce & lemon" },
          { name: "The Reef Platter", price: "$130.00", description: "12 pacific oysters, 12 trawler prawns, 6 bug halves, seafood & tartare sauce, lemon" },
          { name: "The Oyster & Prawn Platter", price: "$160.00", description: "24 pacific oysters, 20 trawler prawns, seafood sauce & lemon" },
        ],
      },
      {
        category: "🥗 Sides & Salads",
        items: [
          { name: "Garden Salad", price: "$9.00" },
          { name: "Mediterranean Salad", price: "$9.00" },
          { name: "Coleslaw", price: "$9.00" },
          { name: "Crispy Fried Broccolini", price: "$9.00" },
          { name: "Fava Bean Purée", price: "$9.00" },
          { name: "Steamed Rice", price: "$5.00" },
          { name: "Potato Chips", price: "sml $6 / lge $8" },
          { name: "Sweet Potato Chips", price: "sml $9 / lge $11" },
        ],
      },
      {
        category: "🧒 Kids Corner",
        note: "Served with tomato sauce",
        items: [
          { name: "Fish Bites (2) & Chips", price: "$11.00" },
          { name: "Calamari (3) & Chips", price: "$11.00" },
          { name: "Chicken Nuggets (4) & Chips", price: "$11.00" },
        ],
      },
      {
        category: "🍨 Desserts",
        items: [
          { name: "Pineapple Fritter", price: "$4.00", description: "Add Cocoflow +$4.50" },
          { name: "Banana Fritter Sundae", price: "$15.00", description: "Banana fritter bites, cocoflow softserve, choc sauce & toasted almonds" },
          { name: "Specialty Cakes", description: "See dessert cabinet — all gluten-free & dairy-free" },
        ],
      },
    ],
  },
  {
    slug: "nodo-south-bank",
    name: "Nodo South Bank",
    icon: "🍽️",
    specialty: "Modern Australian cuisine · GF options",
    rating: 4.7,
    reviewCount: 145,
    cuisineTypes: ["Australian", "Cafe"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "Contemporary Australian restaurant with well-trained staff offering innovative gluten-free dishes. Beautiful riverside location.",
    menuHighlights: [
      "🍳 GF breakfast menu",
      "🥗 Modern Australian dishes",
      "🍔 Gourmet burgers (GF buns)",
      "☕ Specialty coffee",
    ],
    proTip: "Weekend brunch is amazing — book ahead.",
    address: "89 Grey St, South Brisbane QLD 4101, Australia",
    hours: "Daily: 7:00AM – 10:00PM",
    phone: "+61 7 3123 4567",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Nodo+South+Bank+Brisbane",
  },
];

const faqItems = [
  {
    question: "Are there dedicated gluten-free restaurants in Brisbane?",
    answer:
      "Yes — Brisbane has several dedicated 100% gluten-free venues including Sebastien Sans Gluten and Noglu, where cross-contamination risk is virtually zero.",
  },
  {
    question: "Is Brisbane celiac-friendly?",
    answer:
      "Brisbane is one of Australia's most celiac-aware cities. Coeliac Australia certification is widely recognised, and most cafes clearly label gluten-free menu items.",
  },
  {
    question: "Where should I go for a gluten-free brunch in Brisbane?",
    answer:
      "Brisbane has excellent celiac-aware brunch spots across the city — look for dedicated GF bakeries and cafes offering clearly labelled menus.",
  },
  {
    question: "How do I communicate my celiac needs in Brisbane?",
    answer:
      "English is spoken everywhere. Tell staff you have celiac disease and ask about cross-contamination. Many venues will happily walk you through their GF protocols.",
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

const GlutenFreeBrisbane = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [menuFilter, setMenuFilter] = useState("all");
  const [safetyFilter, setSafetyFilter] = useState("all");

  const pageTitle = "Gluten-Free Restaurants in Brisbane | Celiac-Safe Guide 2026";
  const metaDescription =
    "Find verified gluten-free restaurants in Brisbane, Australia. Explore celiac-safe cafes, patisseries and brunch spots with reviews, menu tips and directions.";
  const schemaJson = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Gluten-Free Restaurants in Brisbane, Australia",
      description: metaDescription,
      url: "https://glutenfreeplace.org/gluten-free/australia/brisbane",
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

  const filteredRestaurants = useMemo(
    () =>
      brisbaneRestaurants.filter((r) => {
        const q = searchQuery.toLowerCase();
        const matchesSearch =
          q === "" ||
          r.name.toLowerCase().includes(q) ||
          (r.cuisineTypes || []).some((c) => c.toLowerCase().includes(q));
        const matchesMenu = menuFilter === "all" || r.menuType === menuFilter;
        const matchesSafety = safetyFilter === "all" || r.celiacSafe === safetyFilter;
        return matchesSearch && matchesMenu && matchesSafety;
      }),
    [searchQuery, menuFilter, safetyFilter],
  );

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={metaDescription}
        canonical="/gluten-free/australia/brisbane"
        schemaJson={schemaJson}
      />
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50">
        <header className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-4">
            <Link to="/australia" className="inline-flex items-center text-red-700 hover:text-red-800">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Australia
            </Link>
          </div>
        </header>

        <section
          className="relative text-white py-14 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.45)), url(https://images.unsplash.com/photo-1566734904496-9309bb1798ae?auto=format&fit=crop&w=1600&q=80)",
          }}
        >
          <div className="container mx-auto px-4 text-center relative z-10">
            <span className="text-5xl mb-4 block">🇦🇺</span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Gluten-Free Restaurants in Brisbane
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-6 max-w-3xl mx-auto">
              Verified celiac-safe spots, practical menu guidance, and trusted dining picks in Brisbane.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Badge className="bg-white/20 border-white/40 text-white px-4 py-2">
                {brisbaneRestaurants.length} listed restaurants
              </Badge>
              <AddRestaurantDialog
                city="Brisbane"
                triggerClassName="border-white bg-transparent !text-white hover:bg-white/10"
              />
            </div>
          </div>
        </section>

        <main className="container mx-auto px-4 py-8">
          <section className="mb-10">
            <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Award className="w-8 h-8 text-red-700 flex-shrink-0" />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      Gluten-Free Dining in Brisbane
                    </h2>
                    <p className="text-gray-700">
                      Brisbane has a thriving celiac-aware dining scene, from dedicated French patisseries in
                      dedicated gluten-free bakeries to celiac-aware cafes and restaurants. Coeliac Australia certification is widely recognised across Brisbane, and many venues clearly label gluten-free options on their menus.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Browse by Category */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              🍽️ Browse by Category
            </h2>
            <p className="text-gray-600 mb-4">
              Find exactly what you're looking for with our curated category pages.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <Link to="/gluten-free/australia/brisbane/street-food">
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
              <Link to="/gluten-free/australia/brisbane/bakeries">
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
              <Link to="/gluten-free/australia/brisbane/grocery-stores">
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
              <Link to="/gluten-free/australia/brisbane/gluten-free-products">
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

          {/* Best CTA */}
          <section className="mb-10">
            <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
              <CardContent className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <Trophy className="w-8 h-8 text-amber-600 flex-shrink-0" />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-1">
                      Best Gluten-Free Restaurants in Brisbane
                    </h2>
                    <p className="text-gray-700">
                      Our editorial top 10 celiac-safe picks across Brisbane — ranked by safety, reviews and quality.
                    </p>
                  </div>
                </div>
                <Link
                  to="/gluten-free/australia/brisbane/best-gluten-free-restaurants-in-brisbane"
                  className="md:flex-shrink-0"
                >
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white">View the Top 10</Button>
                </Link>
              </CardContent>
            </Card>
          </section>

          <section className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Verified Gluten-Free Restaurants in Brisbane
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
                            <Link
                              to={`/gluten-free/australia/brisbane/${r.slug}`}
                              className="text-xl font-bold text-gray-900 hover:text-red-700 hover:underline transition-colors"
                            >
                              {r.name}
                            </Link>
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
                              <a href={`tel:${r.phone.replace(/\s/g, "")}`} className="hover:text-blue-700">
                                {r.phone}
                              </a>
                            </div>
                          )}
                        </div>

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
                      <Search className="w-4 h-4 text-red-700" />
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
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base">
                      <Filter className="w-4 h-4 text-red-700" />
                      Filter by Menu Type
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Select value={menuFilter} onValueChange={setMenuFilter}>
                      <SelectTrigger><SelectValue placeholder="All menu types" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Menu Types</SelectItem>
                        <SelectItem value="fully-gluten-free">100% Gluten-Free</SelectItem>
                        <SelectItem value="mixed-menu">GF Options Available</SelectItem>
                      </SelectContent>
                    </Select>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base">
                      <Filter className="w-4 h-4 text-red-700" />
                      Filter by Safety
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Select value={safetyFilter} onValueChange={setSafetyFilter}>
                      <SelectTrigger><SelectValue placeholder="All safety levels" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Safety Levels</SelectItem>
                        <SelectItem value="dedicated-facility">Dedicated GF Facility</SelectItem>
                        <SelectItem value="protocols-in-place">Celiac Protocols</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="mt-3 text-sm text-gray-600">
                      Showing {filteredRestaurants.length} of {brisbaneRestaurants.length}
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
                <p className="text-gray-600">Gluten-free dining in Brisbane</p>
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

export default GlutenFreeBrisbane;
