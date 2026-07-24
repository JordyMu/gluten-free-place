import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft, Award, CheckCircle, Clock, Filter, Globe, MapPin,
  MessageCircle, Navigation, Phone, Search, Shield, Star,
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

interface SydneyRestaurant {
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

export const sydneyRestaurants: SydneyRestaurant[] = [
  {
    slug: "sebastien-sans-gluten",
    name: "Sebastien Sans Gluten",
    icon: "🥐",
    specialty: "French patisserie · 100% gluten-free",
    rating: 4.8,
    reviewCount: 245,
    cuisineTypes: ["French", "Patisserie", "Bakery"],
    celiacSafe: "dedicated-facility",
    menuType: "fully-gluten-free",
    overview:
      "French patisserie with highly trained staff specializing in traditional gluten-free pastries. All items are prepared in a dedicated gluten-free facility, ensuring complete safety for celiacs.",
    menuHighlights: [
      "🥐 Croissants (Gluten-Free)",
      "🥖 Baguettes",
      "🍰 French Cakes & Tarts",
      "☕ Specialty Coffee",
      "🎂 Custom celebration cakes",
    ],
    fullMenu: [
      {
        category: "🥧 Savoury",
        note: "20% off frozen savoury items (subject to availability)",
        items: [
          { name: "Cheesy puff*", price: "$15.95" },
          { name: "Eggplant & hummus croissant*", price: "$15.95" },
          { name: "Frittata*", price: "$11.95" },
          { name: "Ham & cheese croissant", price: "$15.95" },
          { name: "Pie – beef or chicken", price: "$14.95" },
          { name: "Pie of the month*", price: "$16.95" },
          { name: "Quiche – veggie or lorraine", price: "$13.95" },
          { name: "Sausage roll – beef or pork", price: "$11.95" },
          { name: "Spinach & feta feuilleté", price: "$15.95" },
        ],
      },
      {
        category: "🥐 Viennoiserie",
        items: [
          { name: "Almond croissant*", price: "$12.95" },
          { name: "Apple turnover", price: "$11.95" },
          { name: "Cinnabun*", price: "$11.95" },
          { name: "Cinnamon scroll", price: "$10.95" },
          { name: "Cookies*", price: "$11.95" },
          { name: "Croissant", price: "$7.95" },
          { name: "Danish", price: "$9.95" },
          { name: "Gingerbread", price: "$3.95" },
          { name: "Pain au chocolat", price: "$8.95" },
          { name: "Pain au raisin", price: "$8.95" },
          { name: "Palmier", price: "$5.95" },
        ],
      },
      {
        category: "🍰 Patisserie",
        items: [
          { name: "Apple slice", price: "$8.95" },
          { name: "Brownie", price: "$8.95" },
          { name: "Carrot cake", price: "$10.95" },
          { name: "Chocolat and almond tarte*", price: "$15.95" },
          { name: "Éclair*", price: "$12.95" },
          { name: "Fruit tart", price: "$12.95" },
          { name: "Lemon tart", price: "$12.95" },
          { name: "Lemon meringue tart", price: "$14.95" },
          { name: "Paris-brest*", price: "$15.95" },
          { name: "Pear and almond tart", price: "$11.95" },
          { name: "Weekend special*", price: "$15.95" },
        ],
      },
      {
        category: "🥖 Boulangerie",
        items: [
          { name: "Baguette (Saturdays only)*", price: "$9.95" },
          { name: "Plain la boule*", price: "$12.95" },
          { name: "Seeded la boule*", price: "$12.95" },
        ],
      },
      {
        category: "🌱 Dairy Free & Vegan",
        items: [
          { name: "DF almond croissant*", price: "$12.95" },
          { name: "DF banana bread", price: "$7.95" },
          { name: "DF frittata*", price: "$11.95" },
          { name: "Vegan croissant*", price: "$7.95" },
          { name: "Vegan danish*", price: "$12.95" },
          { name: "Vegan granola", price: "$12.95" },
          { name: "Vegan pain au chocolat*", price: "$8.95" },
        ],
      },
      {
        category: "☕ Drinks",
        note: "Alternative milks available. *Available weekends only. 10% surcharge on Sundays, 15% on public holidays.",
        items: [
          { name: "Espresso", price: "$4.50" },
          { name: "Cappuccino, flat white, latte, piccolo", price: "$5.00" },
          { name: "Hot chocolate", price: "$5.00" },
          { name: "Chai latte, long black, mocha", price: "$5.50" },
          { name: "Loose leaf tea", price: "$5.50" },
          { name: "Matcha latte", price: "$6.00" },
          { name: "Fresh OJ", price: "$5.50" },
          { name: "Iced coffee", price: "$7.00" },
          { name: "Iced matcha", price: "$8.00" },
          { name: "Soft drinks", price: "$4.00" },
        ],
      },
    ],
    proTip: "Arrive early for the best selection of fresh croissants.",
    address: "131 Marion Street, Leichhardt, Sydney NSW 2040, Australia",
    hours: "Mon–Sun: 8:00AM – 7:00PM",
    phone: "+61 2 9234 5678",
    website: "www.sebastiensansgluten.com.au",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=131+Marion+Street+Leichhardt+Sydney+NSW+2040+Australia",
    featured: true,
    heroImage: "/images/sydney/sebastien-hero.webp",
    photos: [
      { url: "/images/sydney/sebastien/photo1.webp", caption: "Strawberry Tart" },
      { url: "/images/sydney/sebastien/photo2.webp", caption: "GF Croissants" },
      { url: "/images/sydney/sebastien/photo3.webp", caption: "Artisan Bread" },
      { url: "/images/sydney/sebastien/photo4.webp", caption: "Chocolate Éclairs" },
      { url: "/images/sydney/sebastien/photo5.webp", caption: "Paris-Brest" },
      { url: "/images/sydney/sebastien/photo6.webp", caption: "Hot Cross Buns" },
      { url: "/images/sydney/sebastien/photo7.webp", caption: "Chocolate Cake" },
    ],
    whyPeopleLoveIt: [
      "Authentic French Gluten-Free Pastries",
      "100% Dedicated Gluten-Free Bakery",
      "Outstanding Artisan Breads",
      "Beautiful Cakes & Desserts",
      "Excellent Coffee & Café Experience",
      "Trusted by the Coeliac Community",
    ],
    services: {
      dineIn: { available: true, note: "Limited indoor seating · communal tables · laptop-friendly during weekday mornings" },
      takeaway: { available: true, note: "Order at the counter · ready in 5–10 min · GF pastries packed separately" },
      delivery: { available: true, note: "Available via third-party delivery partners · GF pastries packed separately" },
    },
  },

  {
    slug: "noglu-sydney",
    name: "Noglu",
    heroImage: "/images/sydney/noglu-hero.webp",
    icon: "🍽️",
    specialty: "French cuisine · 100% gluten-free",
    rating: 4.7,
    reviewCount: 180,
    cuisineTypes: ["French", "Restaurant"],
    celiacSafe: "dedicated-facility",
    menuType: "fully-gluten-free",
    overview:
      "French restaurant with extensively trained staff and excellent gluten-free expertise. A dedicated gluten-free establishment offering an authentic French dining experience.",
    menuHighlights: [
      "☕ House Blend Maple Coffee (by ONA)",
      "🍵 Strawberry Iced Matcha",
      "🥤 Sublime Pine Cold-Pressed Juice",
      "🥭 Tropical Smoothie",
      "🍫 Dirty Chai",
      "🥛 Milkshake (Vanilla / Chocolate / Strawberry)",
    ],
    fullMenu: [
      {
        category: "☕ Coffee",
        items: [
          { name: "House blend Maple (by ONA)", price: "$5.00" },
          { name: "Single Origin / Raspberry Candy", price: "$5.80" },
          { name: "Batch Brew", price: "$5.50" },
          { name: "Cold Brew", price: "$5.50" },
          { name: "Turmeric / Matcha", price: "$5.50" },
          { name: "Prana Chai", price: "$5.50" },
          { name: "Dirty Chai", price: "$6.00" },
          { name: "Pour Over", price: "$8.00" },
          { name: "Iced Coffee", price: "$5.80" },
          { name: "Iced Choc", price: "$6.00" },
          { name: "Iced Matcha", price: "$6.20" },
          { name: "Strawberry Iced Matcha", price: "$7.00" },
          { name: "Iced Chai", price: "$6.20" },
        ],
        note: "Add Soy / Almond / Oat / Coconut +$0.60 · Extra Shot available",
      },
      {
        category: "🍵 Tea",
        items: [
          { name: "English Breakfast / Earl Grey", price: "$5.00" },
          { name: "Lemon Grass + Ginger", price: "$5.00" },
          { name: "Peppermint / Gunpowder Green", price: "$5.00" },
        ],
      },
      {
        category: "🥤 Cold Drinks",
        items: [
          { name: "Coconut Water", price: "$5.00" },
          { name: "Sparkling Water", price: "$4.50" },
          { name: "Kombucha", price: "$7.00" },
        ],
      },
      {
        category: "🧃 Cold-Pressed Juices (by Allie's)",
        note: "All juices $8.00",
        items: [
          { name: "Valencia Orange", description: "100% Australian orange" },
          { name: "Watermelon", description: "Watermelon, Apple, Strawberry, Lime" },
          { name: "Gingered Apple", description: "Green Apple, Ginger, Lemon" },
          { name: "Daily Green", description: "Celery, Green Apple, Spinach, Lemon, Ginger" },
          { name: "Love Beet", description: "Beetroot, Green Apple, Carrot, Ginger, Lime" },
          { name: "Sublime Pine", description: "Pineapple, Pear, Green Apple, Lemon, Mint" },
        ],
      },
      {
        category: "🥭 Smoothies",
        note: "All smoothies $11.00",
        items: [
          { name: "Green", description: "Kale, Mango, Dates, Coconut milk, Coconut chips" },
          { name: "PBB", description: "Banana, Peanut Butter, Almond milk, Cacao nibs, Honey" },
          { name: "Tropical", description: "Banana, Mango, Pineapple, Passion fruit, Coconut milk" },
        ],
      },
      {
        category: "🥛 Milkshakes",
        note: "All milkshakes $8.00",
        items: [
          { name: "Vanilla" },
          { name: "Chocolate" },
          { name: "Strawberry" },
        ],
      },
    ],
    proTip: "Book ahead for dinner service — very popular.",
    address: "47 Rose St, Essendon VIC 3040, Australia",
    hours: "Daily: 8:00AM – 9:00PM",
    phone: "+61 2 9678 9012",
    website: "www.noglu.com.au",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=47+Rose+St+Essendon+VIC+3040+Australia",
    photos: [
      { url: "/images/sydney/noglu/salmon_benedict.webp", caption: "Salmon Benedict" },
      { url: "/images/sydney/noglu/creme_brulee_hotcakes.webp", caption: "Crème Brûlée Hotcakes" },
      { url: "/images/sydney/noglu/pork_belly_benedict.webp", caption: "Pork Belly Benedict" },
      { url: "/images/sydney/noglu/pulled_pork.webp", caption: "Pulled Pork" },
      { url: "/images/sydney/noglu/matcha_hotcakes.webp", caption: "Matcha Hotcakes" },
      { url: "/images/sydney/noglu/granola_bowl.webp", caption: "Granola Bowl" },
      { url: "/images/sydney/noglu/smashed_avo_on_toast.webp", caption: "Smashed Avo on Toast" },
      { url: "/images/sydney/noglu/chili_scrambled_eggs.webp", caption: "Chili Scrambled Eggs" },
    ],
    services: {
      dineIn: { available: true, note: "Relaxed café seating · indoor & outdoor tables · family-friendly" },
      takeaway: { available: true, note: "Order at the counter · ready in 10–15 min · hot meals packed for transport" },
      delivery: { available: true, note: "Available via third-party delivery partners · full breakfast & lunch menu" },
    },
    whyPeopleLoveIt: [
      "100% Gluten-Free Kitchen",
      "Delicious Breakfast & Brunch",
      "Great Coffee & Beverages",
      "Organic, High-Quality Ingredients",
      "Fresh Artisan Baked Goods",
      "Safe for the Coeliac Community",
    ],
  },
  {
    slug: "wafu-kitchen",
    name: "Wafu Kitchen",
    icon: "☕",
    specialty: "Breakfast & brunch · GF options",
    rating: 4.6,
    reviewCount: 132,
    cuisineTypes: ["Cafe", "Brunch"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "Cozy Bondi cafe with staff knowledgeable about gluten-free breakfast and lunch options. Beachside location perfect for a relaxed meal.",
    menuHighlights: [
      "🍜 Tokyo Chicken Ramen",
      "🍣 Assorted Nigiri Sushi",
      "🍛 Japanese Healthy Curry",
      "🥢 Udon Noodle Soup",
    ],
    fullMenu: [
      {
        category: "Sushi & Rice Bowls",
        note: "Served with sashimi, goma-ae greens & spicy wakame salad",
        items: [
          { name: "Assorted Sushi", price: "$26.80", description: "Nigiri of salmon, aburi-salmon, tuna & prawn" },
          { name: "Salmon Sushi", price: "$26.80", description: "3pcs raw salmon, 2pcs aburi-salmon" },
          { name: "Grilled Salmon Sushi", price: "$26.80", description: "With wasabi mayo" },
          { name: "Teriyaki Chicken on Rice", price: "$25.80", description: "Grilled" },
          { name: "Teriyaki Salmon on Rice", price: "$26.80", description: "Grilled" },
          { name: "Chicken Katsu on Rice", price: "$26.80", description: "Panko-crumbed & deep-fried with katsu sauce" },
          { name: "Karaage Chicken on Rice", price: "$24.80", description: "Deep-fried with mayo" },
          { name: "Teriyaki Tofu on Rice", price: "$24.80", description: "Organic — plant based" },
        ],
      },
      {
        category: "Japanese Curry",
        note: "House-made from seasonal vegetables — no packaged curry",
        items: [
          { name: "Curry with Organic Tofu", price: "$20.80" },
          { name: "Curry with Seasonal Vegetables", price: "$20.80" },
          { name: "Curry with Steamed Chicken Breast", price: "$20.80" },
          { name: "Curry with Karaage Chicken", price: "$22.80" },
          { name: "Curry with Grilled Salmon", price: "$23.80" },
          { name: "Curry with Chicken Katsu", price: "$24.80" },
        ],
      },
      {
        category: "Udon Noodle Soup",
        note: "Nagoya-style kishimen udon with dashi from katsuo bonito & kombu",
        items: [
          { name: "Plain Udon Soup", price: "$16.80", description: "Fresh shallot & plain wakame seaweed" },
          { name: "Udon with Veggie Tempura", price: "$21.80" },
          { name: "Udon with Grilled Chicken", price: "$22.80" },
          { name: "Udon with Prawn Tempura", price: "$24.80" },
        ],
      },
      {
        category: "Ramen",
        note: "All broths & noodles gluten-free and dairy-free",
        items: [
          { name: "Tokyo Chicken Ramen", price: "$25.80", description: "Signature — clear chicken broth, tamari soy, seared chashu, egg & veggies" },
          { name: "Chicken Shio Ramen", price: "$25.80", description: "Creamy chicken broth with sea salt, chashu, egg & veggies" },
          { name: "Chicken Miso Ramen", price: "$25.80", description: "Red miso chicken broth, chashu, egg & veggies" },
          { name: "Salmon Miso Ramen", price: "$26.80", description: "Miso-flavoured salmon broth, grilled salmon, egg & veggies" },
          { name: "Salmon Spicy Miso Ramen", price: "$26.80", description: "Spicy miso salmon broth, grilled salmon, egg & veggies" },
          { name: "Tofu Miso Ramen", price: "$25.80", description: "Miso vegetable broth, tofu & seasonal veggies in sesame-miso sauce" },
          { name: "Seasonal Veggies Ramen", price: "$25.80", description: "Plant-based broth with seasonal veggies in sesame sauce" },
        ],
      },
      {
        category: "Soupless Ramen (Abura)",
        items: [
          { name: "Tofu Spicy Miso Men", price: "$22.80", description: "Tofu in spicy red miso sauce with seasonal veggies" },
          { name: "Veggie & Tofu Goma-dare Men", price: "$23.80", description: "Tofu & veggies in sesame sauce" },
          { name: "Salmon Spicy Miso Men", price: "$23.80", description: "Salmon in spicy red miso sauce" },
          { name: "Chicken Spicy Miso Men", price: "$23.80", description: "Chicken in spicy red miso sauce" },
        ],
      },
      {
        category: "Sashimi & Sushi Rolls",
        items: [
          { name: "Small Sashimi", price: "$11.80", description: "Tuna & salmon, 6pcs" },
          { name: "Large Sashimi", price: "$26.80", description: "Tuna & salmon, 18pcs" },
          { name: "Sushi Bowl (Chirashi Kaisen-don)", price: "$26.80" },
          { name: "Salmon Sushi Bowl", price: "$25.80" },
          { name: "Mini Roll — Salmon / Tuna", price: "$7.80+", description: "8pcs per serving" },
          { name: "Medium Roll — Avocado Salmon", price: "$8.80", description: "8pcs per serving" },
          { name: "Large Roll — Teriyaki Chicken & Avocado", price: "$12.80", description: "4pcs per serving" },
        ],
      },
      {
        category: "Sides & Tempura",
        items: [
          { name: "Veggie Tempura", price: "$5.30/pc", description: "Plant based" },
          { name: "Prawn Tempura", price: "$15.80", description: "2pcs" },
          { name: "Karaage Chicken", price: "$9.30", description: "5pcs" },
          { name: "Chicken Katsu", price: "$14.80/pc" },
          { name: "Goma-ae Greens", price: "$5.80" },
          { name: "Miso Eggplant", price: "$5.80" },
          { name: "Spicy Wakame Salad", price: "$5.80" },
          { name: "Edamame", price: "$5.80" },
        ],
      },
      {
        category: "Tea, Drinks & Dessert",
        items: [
          { name: "Pot of Tea", price: "$6.20", description: "Sen-cha, Hoji-cha, Gemmai-cha or Kuwa no Ha-cha (1–2 people)" },
          { name: "SABA Organic Cold Drinks", price: "$6.20" },
          { name: "Sparkling Coconut Water", price: "$5.20" },
          { name: "Mineral Sparkling Water", price: "$4.00" },
          { name: "Soy Pudding", price: "$5.80", description: "Mulberry matcha & jam or black sesame & karin jam" },
          { name: "Dessert of the Day", price: "$5.80", description: "Served with azuki red bean jam" },
        ],
      },
    ],
    proTip: "Try the banana bread — it's incredible.",
    address: "34-36 Mitchell Rd, Alexandria NSW 2015, Australia",
    hours: "Daily: 7:00AM – 4:00PM",
    phone: "+61 2 9901 2345",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=34-36+Mitchell+Rd+Alexandria+NSW+2015+Australia",
  },
];

const faqItems = [
  {
    question: "Are there dedicated gluten-free restaurants in Sydney?",
    answer:
      "Yes — Sydney has several dedicated 100% gluten-free venues including Sebastien Sans Gluten and Noglu, where cross-contamination risk is virtually zero.",
  },
  {
    question: "Is Sydney celiac-friendly?",
    answer:
      "Sydney is one of Australia's most celiac-aware cities. Coeliac Australia certification is widely recognised, and most cafes clearly label gluten-free menu items.",
  },
  {
    question: "Where should I go for a gluten-free brunch in Sydney?",
    answer:
      "Bondi and the inner-west have excellent celiac-aware brunch spots. Wafu Kitchen in Bondi is a local favourite for GF pancakes and breakfast bowls.",
  },
  {
    question: "How do I communicate my celiac needs in Sydney?",
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

const GlutenFreeSydney = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [menuFilter, setMenuFilter] = useState("all");
  const [safetyFilter, setSafetyFilter] = useState("all");

  const pageTitle = "Gluten-Free Restaurants in Sydney | Celiac-Safe Guide 2026";
  const metaDescription =
    "Find verified gluten-free restaurants in Sydney, Australia. Explore celiac-safe cafes, patisseries and brunch spots with reviews, menu tips and directions.";
  const schemaJson = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Gluten-Free Restaurants in Sydney, Australia",
      description: metaDescription,
      url: "https://glutenfreeplace.org/gluten-free/australia/sydney",
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
      sydneyRestaurants.filter((r) => {
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
        canonical="/gluten-free/australia/sydney"
        schemaJson={schemaJson}
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50">
        <header className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-4">
            <Link to="/australia" className="inline-flex items-center text-blue-700 hover:text-blue-800">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Australia
            </Link>
          </div>
        </header>

        <section
          className="relative text-white py-14 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.45)), url(https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1600&q=80)",
          }}
        >
          <div className="container mx-auto px-4 text-center relative z-10">
            <span className="text-5xl mb-4 block">🇦🇺</span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Gluten-Free Restaurants in Sydney
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-6 max-w-3xl mx-auto">
              Verified celiac-safe spots, practical menu guidance, and trusted dining picks in Sydney.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Badge className="bg-white/20 border-white/40 text-white px-4 py-2">
                {sydneyRestaurants.length} listed restaurants
              </Badge>
              <AddRestaurantDialog
                city="Sydney"
                triggerClassName="border-white bg-transparent !text-white hover:bg-white/10"
              />
            </div>
          </div>
        </section>

        <main className="container mx-auto px-4 py-8">
          <section className="mb-10">
            <Card className="bg-gradient-to-r from-blue-50 to-yellow-50 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Award className="w-8 h-8 text-blue-700 flex-shrink-0" />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      Gluten-Free Dining in Sydney
                    </h2>
                    <p className="text-gray-700">
                      Sydney has a thriving celiac-aware dining scene, from dedicated French patisseries in
                      the CBD to beachside brunch cafes in Bondi. Coeliac Australia certification is widely
                      recognised across the city, and many venues clearly label gluten-free options on their menus.
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
              <Link to="/gluten-free/australia/sydney/street-food">
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
              <Link to="/gluten-free/australia/sydney/bakeries">
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
              <Link to="/gluten-free/australia/sydney/grocery-stores">
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
              <Link to="/gluten-free/australia/sydney/gluten-free-products">
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
                  <Award className="w-8 h-8 text-amber-600 flex-shrink-0" />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-1">
                      Best Gluten-Free Restaurants in Sydney
                    </h2>
                    <p className="text-gray-700">
                      Our editorial top 10 celiac-safe picks across Sydney — ranked by safety, reviews and quality.
                    </p>
                  </div>
                </div>
                <Link
                  to="/gluten-free/australia/sydney/best-gluten-free-restaurants-in-sydney"
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
                  Verified Gluten-Free Restaurants in Sydney
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
                              to={`/gluten-free/australia/sydney/${r.slug}`}
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
                      <Search className="w-4 h-4 text-blue-700" />
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
                      <Filter className="w-4 h-4 text-blue-700" />
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
                      <Filter className="w-4 h-4 text-blue-700" />
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
                      Showing {filteredRestaurants.length} of {sydneyRestaurants.length}
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
                <p className="text-gray-600">Gluten-free dining in Sydney</p>
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

export default GlutenFreeSydney;
