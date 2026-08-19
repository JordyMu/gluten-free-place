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
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { AddRestaurantDialog } from "@/components/restaurants/AddRestaurantDialog";
import { FindNearMeButton } from "@/components/city/FindNearMeButton";
import { SEOHead } from "@/components/SEOHead";

type CeliacSafe = "dedicated-facility" | "protocols-in-place";
type MenuType = "fully-gluten-free" | "mixed-menu";

interface MelbourneRestaurant {
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
  fullMenu?: {
    category: string;
    note?: string;
    items: { name: string; price?: string; description?: string }[];
  }[];
  proTip?: string;
  address?: string;
  hours?: string;
  phone?: string;
  website?: string;
  directionsUrl?: string;
  featured?: boolean;
  heroImage?: string;
  photos?: { url: string; caption?: string }[];
  services?: {
    dineIn?: { available: boolean; note: string };
    takeaway?: { available: boolean; note: string };
    delivery?: { available: boolean; note: string };
  };
  whyPeopleLoveIt?: string[];
}

export const melbourneRestaurants: MelbourneRestaurant[] = [
  {
    slug: "duke-of-brunswick-hotel",
    name: "The Duke of Brunswick Hotel",
    icon: "🍺",
    heroImage: "/images/melbourne/duke/duke-hero.webp",
    specialty: "Pub food with extensive GF menu",
    rating: 4.5,
    reviewCount: 98,
    cuisineTypes: ["Pub", "Australian"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "Traditional pub with well-trained staff offering extensive gluten-free pub classics. Separate fryers and preparation areas ensure safety.",
    fullMenu: [
      {
        category: "Starters & Sides",
        items: [
          { name: "GF Garlic Bread", price: "$10" },
          { name: "Salt & Pepper Squid (GF)", price: "$18" },
          { name: "Loaded Fries (GF)", price: "$16" },
          { name: "Buffalo Wings (GF)", price: "$18" },
          { name: "Bowl of Chips with Aioli (GF)", price: "$12" },
          { name: "Seasonal Greens (GF)", price: "$12" },
        ],
      },
      {
        category: "Pub Classics",
        items: [
          { name: "Chicken Schnitzel (GF)", price: "$28" },
          { name: "Chicken Parmigiana (GF)", price: "$32" },
          { name: "Beef Burger on GF Bun", price: "$26" },
          { name: "Southern Fried Chicken Burger (GF)", price: "$26" },
          { name: "Beer Battered Fish & Chips (GF)", price: "$30" },
          { name: "Steak Sandwich on GF Bread", price: "$28" },
        ],
      },
      {
        category: "Mains & Steaks",
        items: [
          { name: "Porterhouse Steak 300g (GF)", price: "$42" },
          { name: "Scotch Fillet 300g (GF)", price: "$46" },
          { name: "Slow-Cooked Lamb Shoulder (GF)", price: "$38" },
          { name: "Grilled Barramundi (GF)", price: "$36" },
          { name: "Roast of the Day (GF)", price: "$28" },
        ],
      },
      {
        category: "Pizzas",
        note: "GF base +$4",
        items: [
          { name: "Margherita", price: "$24" },
          { name: "Pepperoni", price: "$26" },
          { name: "Prosciutto & Rocket", price: "$28" },
          { name: "BBQ Meat Lovers", price: "$28" },
          { name: "Vegetarian", price: "$24" },
        ],
      },
      {
        category: "Weekly Specials",
        items: [
          { name: "Monday – Parma Night (GF available)", price: "$22" },
          { name: "Tuesday – Steak Night (GF)", price: "$25" },
          { name: "Wednesday – Burger Night (GF bun)", price: "$20" },
          { name: "Thursday – GF Pizza Night", price: "$20" },
          { name: "Sunday Roast (GF)", price: "$25" },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Flourless Chocolate Cake (GF)", price: "$14" },
          { name: "Sticky Date Pudding (GF)", price: "$14" },
          { name: "Crème Brûlée (GF)", price: "$14" },
          { name: "Pavlova with Berries (GF)", price: "$14" },
          { name: "Affogato (GF)", price: "$12" },
          { name: "Ice Cream Selection (GF)", price: "$10" },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "GF Beer on Tap", price: "$11" },
          { name: "GF Bottled Beer Selection", price: "from $10" },
          { name: "House Wine (Red / White / Rosé)", price: "$11" },
          { name: "Cocktails", price: "from $18" },
          { name: "Soft Drinks & Juices", price: "$5" },
          { name: "Coffee & Tea", price: "from $4.50" },
        ],
      },
    ],


    proTip: "Thursday nights have GF pizza specials.",
    address: "207 Gilbert St, Adelaide SA 5000, Australia 5000",
    hours: "Daily: 12:00PM – 11:00PM",
    phone: "+61 3 9456 7890",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=207+Gilbert+St+Adelaide+SA+5000",
    photos: [
      { url: "/images/melbourne/duke/dob-super-salad.webp", caption: "DOB Super Salad" },
      { url: "/images/melbourne/duke/crumbed-camembert-v.webp", caption: "Crumbed Camembert (V)" },
      { url: "/images/melbourne/duke/salt-pepper-squid-df.webp", caption: "Salt & Pepper Squid (DF)" },
      { url: "/images/melbourne/duke/fried-chicken-wings.webp", caption: "Fried Chicken Wings" },
      { url: "/images/melbourne/duke/eggplant-parmigiana.webp", caption: "Eggplant Parmigiana" },
      { url: "/images/melbourne/duke/250gm-sirloin-steak.webp", caption: "250gm Sirloin Steak" },
      { url: "/images/melbourne/duke/gluten-free-beer.webp", caption: "O'Brien Gluten-Free Beer" },
    ],
    services: {
      dineIn: { available: true, note: "Full pub dining · bar & garden seating · bookings recommended for weekends" },
      takeaway: { available: true, note: "Order at the bar · ready in 15–20 min · GF meals packed separately" },
      delivery: { available: true, note: "Available via third-party delivery partners · GF meals clearly labelled" },
    },
    whyPeopleLoveIt: [
      "100% Certified Gluten-Free Kitchen",
      "Classic Pub Food Without the Gluten",
      "Safe for the Coeliac Community",
      "Excellent Gluten-Free Drinks Selection",
      "Perfect for Groups & Functions",
    ],
  },

  {
    slug: "noglu-essendon",
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
    address: "Shop 2/1-3 Carre St, Elsternwick VIC 3185, Australia",
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
    slug: "baked-gluten-free",
    name: "BAKED Gluten Free",
    icon: "🥖",
    specialty: "Artisan bakery · 100% gluten-free",
    rating: 4.8,
    reviewCount: 198,
    cuisineTypes: ["Bakery", "Cafe"],
    celiacSafe: "dedicated-facility",
    menuType: "fully-gluten-free",
    overview:
      "Specialized gluten-free bakery with highly trained bakers and comprehensive celiac safety protocols. Everything is made fresh daily in a dedicated facility.",
    menuHighlights: [
      "🥖 Fresh bread daily",
      "🥐 Croissants & pastries",
      "🥧 Meat pies",
      "🍰 Cakes & slices",
      "🍪 Cookies & brownies",
    ],
    proTip: "Get there early on weekends — popular items sell out fast.",
    address: "10 Sunderland St, Moonah TAS 7009, Australia",
    hours: "Mon–Sat: 7:30AM – 5:30PM",
    phone: "+61 8 9234 5678",
    website: "www.bakedgf.com.au",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=BAKED+Gluten+Free+Subiaco+Perth",
    featured: true,
  },
  {
    slug: "straight-up-coffee-and-food",
    name: "Straight Up Coffee and Food",
    icon: "☕",
    specialty: "Hobart cafe · GF friendly",
    rating: 4.6,
    reviewCount: 204,
    cuisineTypes: ["Cafe", "Brunch"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "Hobart cafe known for good coffee and a menu where most dishes can be made gluten-free on request.",
    menuHighlights: [
      "🥑 GF brunch plates",
      "🍞 GF toast",
      "☕ Specialty coffee",
    ],
    proTip: "Tell staff it's a celiac order so they use clean equipment.",
    address: "202a Liverpool St, Hobart TAS 7000, Australia",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Straight+Up+Coffee+and+Food+202a+Liverpool+St%2C+Hobart+TAS+7000%2C+Australia",
  },
  {
    slug: "seedling-cafe-melbourne",
    name: "Seedling Cafe",
    icon: "🌱",
    specialty: "CBD cafe · GF & plant-based",
    rating: 4.5,
    reviewCount: 189,
    cuisineTypes: ["Cafe", "Vegetarian", "Brunch"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "Flinders Lane cafe with a plant-forward menu and clearly marked gluten-free dishes for celiac diners.",
    menuHighlights: [
      "🥗 GF grain bowls",
      "🥞 GF pancakes",
      "☕ Coffee & juices",
    ],
    proTip: "Weekday mornings are quieter — easier to talk allergens with the kitchen.",
    address: "275 Flinders Ln, Melbourne VIC 3000, Australia",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Seedling+Cafe+275+Flinders+Ln%2C+Melbourne+VIC+3000%2C+Australia",
  },
  {
    slug: "samuel-pepys-cafe",
    name: "Samuel Pepy's Cafe",
    icon: "🍽️",
    specialty: "Launceston cafe · GF options",
    rating: 4.5,
    reviewCount: 112,
    cuisineTypes: ["Cafe", "Modern Australian"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "Launceston cafe serving breakfast and lunch with reliable gluten-free choices and GF bread on hand.",
    menuHighlights: [
      "🍳 GF breakfasts",
      "🥪 GF sandwiches",
      "🍰 GF cakes",
    ],
    proTip: "Call ahead for larger groups so they can plan GF service.",
    address: "106 George St, Launceston TAS 7250, Australia",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Samuel+Pepy%27s+Cafe+106+George+St%2C+Launceston+TAS+7250%2C+Australia",
  },
  {
    slug: "kudo-melbourne",
    name: "Kudo",
    icon: "🍱",
    specialty: "Japanese dining · GF options",
    rating: 4.6,
    reviewCount: 164,
    cuisineTypes: ["Japanese", "Restaurant"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "Little Collins Street Japanese restaurant using tamari and GF-friendly preparations for celiac guests.",
    menuHighlights: [
      "🍣 Sashimi & sushi",
      "🍜 GF noodle bowls",
      "🥢 Tamari soy on request",
    ],
    proTip: "Confirm the soy sauce used in sauces — ask for tamari throughout.",
    address: "8 Little Collins St, Melbourne VIC 3000, Australia",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Kudo+8+Little+Collins+St%2C+Melbourne+VIC+3000%2C+Australia",
  },
  {
    slug: "eat-cannoli-preston",
    name: "Eat Cannoli",
    icon: "🥐",
    specialty: "Italian pastry · gluten-free cannoli",
    rating: 4.8,
    reviewCount: 241,
    cuisineTypes: ["Italian", "Dessert", "Bakery"],
    celiacSafe: "dedicated-facility",
    menuType: "fully-gluten-free",
    overview:
      "Preston pastry shop famous for gluten-free cannoli filled to order with classic Sicilian creams.",
    menuHighlights: [
      "🥐 GF cannoli",
      "🍫 Chocolate & pistachio fillings",
      "☕ Espresso",
    ],
    proTip: "Shells are filled fresh — eat within the hour for the best crunch.",
    address: "132 Wood St, Preston VIC 3072, Australia",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Eat+Cannoli+132+Wood+St%2C+Preston+VIC+3072%2C+Australia",
  },
  {
    slug: "shimbashi-soba-sake-bar",
    name: "Shimbashi Soba & Sake Bar",
    icon: "🍜",
    specialty: "Japanese soba · GF soba available",
    rating: 4.6,
    reviewCount: 198,
    cuisineTypes: ["Japanese", "Restaurant"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "Northcote soba and sake bar offering 100% buckwheat gluten-free soba and tamari-based dipping sauces.",
    menuHighlights: [
      "🍜 100% buckwheat soba",
      "🍢 Grilled skewers",
      "🍶 Sake list",
    ],
    proTip: "Order the GF soba specifically — the standard soba contains wheat.",
    address: "257 High St, Northcote VIC 3070, Australia",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Shimbashi+Soba+%26+Sake+Bar+257+High+St%2C+Northcote+VIC+3070%2C+Australia",
  },
  {
    slug: "regretless-low-carb-pleasure",
    name: "Regretless — Low Carb Pleasure",
    icon: "🍰",
    specialty: "Low-carb & gluten-free bakery",
    rating: 4.7,
    reviewCount: 143,
    cuisineTypes: ["Bakery", "Dessert"],
    celiacSafe: "dedicated-facility",
    menuType: "fully-gluten-free",
    overview:
      "Mid City Centre bakery producing low-carb, entirely gluten-free breads, cakes and sweet treats.",
    menuHighlights: [
      "🍞 Low-carb GF bread",
      "🍰 Sugar-free cakes",
      "🍪 Keto cookies",
    ],
    proTip: "Everything in store is gluten-free — no need to check labels.",
    address: "Shop 13-14, Mid City Centre, 200 Bourke St, Melbourne VIC 3000, Australia",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Regretless+%E2%80%94+Low+Carb+Pleasure+Shop+13-14%2C+Mid+City+Centre%2C+200+Bourke+St%2C+Melbourne+VIC+3000%2C+Australia",
  },
  {
    slug: "bodega-underground",
    name: "Bodega Underground",
    icon: "🌮",
    specialty: "Mexican · GF corn-based menu",
    rating: 4.6,
    reviewCount: 232,
    cuisineTypes: ["Mexican", "Restaurant", "Bar"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "Little Bourke Street Mexican kitchen built around corn tortillas, with most of the menu naturally gluten-free.",
    menuHighlights: [
      "🌮 Corn tortilla tacos",
      "🥑 Guacamole & totopos",
      "🍹 Agave cocktails",
    ],
    proTip: "Corn tortillas are standard — confirm the fryer is not shared.",
    address: "55 Little Bourke St, Melbourne VIC 3000, Australia",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Bodega+Underground+55+Little+Bourke+St%2C+Melbourne+VIC+3000%2C+Australia",
  },
  {
    slug: "la-chiva-taqueria-adelaide",
    name: "La Chiva Taqueria",
    icon: "🌮",
    specialty: "Colombian-Mexican · GF corn menu",
    rating: 4.6,
    reviewCount: 151,
    cuisineTypes: ["Mexican", "Latin American"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "Adelaide taqueria serving arepas and corn tortilla tacos, with a naturally gluten-free core menu.",
    menuHighlights: [
      "🫓 Arepas",
      "🌮 Corn tacos",
      "🍹 Latin drinks",
    ],
    proTip: "Ask about the fryer if ordering anything crispy.",
    address: "42 Grote St, Adelaide SA 5000, Australia",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=La+Chiva+Taqueria+42+Grote+St%2C+Adelaide+SA+5000%2C+Australia",
  },
  {
    slug: "onda-bar-eatery",
    name: "ONDA Bar & Eatery",
    icon: "🍽️",
    specialty: "Modern eatery · GF menu",
    rating: 4.5,
    reviewCount: 176,
    cuisineTypes: ["Modern Australian", "Bar"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "Richmond bar and eatery with a marked gluten-free menu and staff trained on celiac requests.",
    menuHighlights: [
      "🥩 GF mains",
      "🍟 GF sides",
      "🍸 Cocktails",
    ],
    proTip: "Ask which items come from the shared fryer before ordering.",
    address: "280 Bridge Rd, Richmond VIC 3121, Australia",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=ONDA+Bar+%26+Eatery+280+Bridge+Rd%2C+Richmond+VIC+3121%2C+Australia",
  },
  {
    slug: "trezona-gluten-free-bakery-cafe",
    name: "Trezona Gluten Free Bakery Cafe",
    icon: "🥧",
    specialty: "Dedicated GF bakery & cafe",
    rating: 4.8,
    reviewCount: 187,
    cuisineTypes: ["Bakery", "Cafe"],
    celiacSafe: "dedicated-facility",
    menuType: "fully-gluten-free",
    overview:
      "Edwardstown bakery cafe where every pie, pastry and loaf is gluten-free, baked in a dedicated kitchen.",
    menuHighlights: [
      "🥧 GF pies & pasties",
      "🍞 Fresh loaves",
      "🍰 Cakes & slices",
    ],
    proTip: "Pies freeze well — grab a few for the trip home.",
    address: "1 Midera Ave, Edwardstown SA 5039, Australia",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Trezona+Gluten+Free+Bakery+Cafe+1+Midera+Ave%2C+Edwardstown+SA+5039%2C+Australia",
  },
  {
    slug: "hotel-nacional-melbourne",
    name: "Hotel Nacional",
    icon: "🍽️",
    specialty: "Latin dining · GF friendly",
    rating: 4.5,
    reviewCount: 168,
    cuisineTypes: ["Latin American", "Restaurant", "Bar"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "Hardware Lane restaurant serving Latin-inspired grills and share plates with plenty of gluten-free options.",
    menuHighlights: [
      "🥩 Grilled meats",
      "🌽 Corn sides",
      "🍹 Cocktails",
    ],
    proTip: "Most grill dishes are naturally GF — confirm marinades.",
    address: "23-25 Hardware Ln, Melbourne VIC 3000, Australia",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Hotel+Nacional+23-25+Hardware+Ln%2C+Melbourne+VIC+3000%2C+Australia",
  },
  {
    slug: "korya-brunswick-east",
    name: "KORYA",
    icon: "🍚",
    specialty: "Korean dining · GF options",
    rating: 4.6,
    reviewCount: 139,
    cuisineTypes: ["Korean", "Restaurant"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "Brunswick East Korean kitchen with rice-based dishes and gluten-free sauces available on request.",
    menuHighlights: [
      "🍚 Bibimbap",
      "🍢 Grilled skewers",
      "🌶️ GF sauces on request",
    ],
    proTip: "Ask for GF gochujang and tamari when ordering.",
    address: "56 Lygon St, Brunswick East VIC 3057, Australia",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=KORYA+56+Lygon+St%2C+Brunswick+East+VIC+3057%2C+Australia",
  },
  {
    slug: "la-bodega-st-kilda",
    name: "La Bodega",
    icon: "🍷",
    specialty: "Spanish tapas · GF friendly",
    rating: 4.5,
    reviewCount: 147,
    cuisineTypes: ["Spanish", "Tapas", "Bar"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "St Kilda tapas bar where most plates are naturally gluten-free and staff are comfortable with celiac requests.",
    menuHighlights: [
      "🥘 Tapas plates",
      "🍤 Grilled seafood",
      "🍷 Spanish wines",
    ],
    proTip: "Skip shared-fryer items and stick to grilled plates.",
    address: "12 Fitzroy St, St Kilda VIC 3182, Australia",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=La+Bodega+12+Fitzroy+St%2C+St+Kilda+VIC+3182%2C+Australia",
  },
  {
    slug: "ricks-place-kensington",
    name: "Rick's Place",
    icon: "☕",
    specialty: "Neighbourhood cafe · GF options",
    rating: 4.5,
    reviewCount: 124,
    cuisineTypes: ["Cafe", "Brunch"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "Kensington cafe with GF bread, clearly labelled dishes and a kitchen used to celiac diners.",
    menuHighlights: [
      "🍞 GF toast & sourdough",
      "🍳 Big breakfast",
      "☕ Coffee",
    ],
    proTip: "Separate toaster available — request it when ordering.",
    address: "507 Macaulay Rd, Kensington VIC 3031, Australia",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Rick%27s+Place+507+Macaulay+Rd%2C+Kensington+VIC+3031%2C+Australia",
  },
  {
    slug: "new-freedom-gluten-free-bakery",
    name: "New Freedom Gluten-Free Bakery",
    icon: "🥖",
    specialty: "Dedicated GF bakery",
    rating: 4.8,
    reviewCount: 163,
    cuisineTypes: ["Bakery"],
    celiacSafe: "dedicated-facility",
    menuType: "fully-gluten-free",
    overview:
      "Bendigo bakery baking bread, pies and sweets exclusively gluten-free in a dedicated facility.",
    menuHighlights: [
      "🍞 Sandwich loaves",
      "🥧 Pies & sausage rolls",
      "🍰 Slices & cakes",
    ],
    proTip: "Stock up on frozen loaves — they keep for weeks.",
    address: "26 Short St, Bendigo VIC 3550, Australia",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=New+Freedom+Gluten-Free+Bakery+26+Short+St%2C+Bendigo+VIC+3550%2C+Australia",
  },
  {
    slug: "gluten-free-4-u-ballarat",
    name: "Gluten Free 4 U",
    icon: "🥐",
    specialty: "Dedicated GF bakery & takeaway",
    rating: 4.7,
    reviewCount: 118,
    cuisineTypes: ["Bakery", "Takeaway"],
    celiacSafe: "dedicated-facility",
    menuType: "fully-gluten-free",
    overview:
      "Golden Point bakery near Ballarat with a fully gluten-free kitchen turning out pies, breads and treats.",
    menuHighlights: [
      "🥧 Meat pies",
      "🍞 Bread rolls",
      "🍩 Doughnuts",
    ],
    proTip: "Weekend batches sell out by lunchtime.",
    address: "513 Main Rd, Golden Point VIC 3350, Australia",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Gluten+Free+4+U+513+Main+Rd%2C+Golden+Point+VIC+3350%2C+Australia",
  },
  {
    slug: "port-admiral-hotel",
    name: "Port Admiral Hotel",
    icon: "🍺",
    specialty: "Historic pub · GF menu",
    rating: 4.5,
    reviewCount: 192,
    cuisineTypes: ["Pub", "Modern Australian"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "Port Adelaide pub with a dedicated gluten-free menu section and GF beer on tap.",
    menuHighlights: [
      "🍔 GF burgers",
      "🥩 Steaks & parmas",
      "🍺 GF beer",
    ],
    proTip: "The GF parma is cooked in a separate fryer — ask to confirm.",
    address: "55 Commercial Rd, Port Adelaide SA 5015, Australia",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Port+Admiral+Hotel+55+Commercial+Rd%2C+Port+Adelaide+SA+5015%2C+Australia",
  },];

const faqItems = [
  {
    question: "Are there dedicated gluten-free restaurants in Melbourne?",
    answer:
      "Yes — Melbourne has several dedicated 100% gluten-free venues including Sebastien Sans Gluten and Noglu, where cross-contamination risk is virtually zero.",
  },
  {
    question: "Is Melbourne celiac-friendly?",
    answer:
      "Melbourne is one of Australia's most celiac-aware cities. Coeliac Australia certification is widely recognised, and most cafes clearly label gluten-free menu items.",
  },
  {
    question: "Where should I go for a gluten-free brunch in Melbourne?",
    answer:
      "Melbourne has excellent celiac-aware brunch spots across the city — look for dedicated GF bakeries and cafes offering clearly labelled menus.",
  },
  {
    question: "How do I communicate my celiac needs in Melbourne?",
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

const GlutenFreeMelbourne = () => {
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

  const pageTitle = "Gluten-Free Options in Melbourne | Celiac-Safe Dining";
  const metaDescription =
    "Browse verified gluten free options in Melbourne, Australia. Discover celiac-safe cafes, patisseries and brunch spots with reviews, menu tips and directions.";
  const schemaJson = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Gluten-Free Options in Melbourne, Australia",
      description: metaDescription,
      url: "https://glutenfreeplace.org/gluten-free/australia/melbourne",
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
    melbourneRestaurants.forEach((r) => (r.cuisineTypes || []).forEach((c) => counts.set(c, (counts.get(c) ?? 0) + 1)));
    return Array.from(counts.entries())
      .map(([label, count]) => ({ value: label, label, count }))
      .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
  }, []);

  const menuOptions = useMemo(
    () => [
      { value: "fully-gluten-free", label: "100% Gluten-Free", count: melbourneRestaurants.filter((r) => r.menuType === "fully-gluten-free").length },
      { value: "mixed-menu", label: "GF Options Available", count: melbourneRestaurants.filter((r) => r.menuType === "mixed-menu").length },
    ],
    [],
  );

  const safetyOptions = useMemo(
    () => [
      { value: "dedicated-facility", label: "Dedicated GF Facility", count: melbourneRestaurants.filter((r) => r.celiacSafe === "dedicated-facility").length },
      { value: "protocols-in-place", label: "Celiac Protocols", count: melbourneRestaurants.filter((r) => r.celiacSafe === "protocols-in-place").length },
    ],
    [],
  );

  const filteredRestaurants = useMemo(
    () =>
      melbourneRestaurants.filter((r) => {
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
        canonical="/gluten-free/australia/melbourne"
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
              "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.45)), url(https://images.unsplash.com/photo-1514395462725-fb4566210144?auto=format&fit=crop&w=1600&q=80)",
          }}
        >
          <div className="container mx-auto px-4 text-center relative z-10">
            <span className="text-5xl mb-4 block">🇦🇺</span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Dedicated Gluten-free Restaurants in Melbourne
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-6 max-w-3xl mx-auto">
              Verified celiac-safe spots, practical menu guidance, and trusted dining picks in Melbourne.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Badge className="bg-white/20 border-white/40 text-white px-4 py-2">
                {melbourneRestaurants.length} listed restaurants
              </Badge>
              <FindNearMeButton city="Melbourne" />
              <AddRestaurantDialog
                city="Melbourne"
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
                      Gluten-Free Dining in Melbourne
                    </h2>
                    <p className="text-gray-700">
                      Melbourne has a thriving celiac-aware dining scene, from dedicated French patisseries in
                      dedicated gluten-free bakeries to celiac-aware cafes and restaurants. Coeliac Australia certification is widely recognised across Melbourne, and many venues clearly label gluten-free options on their menus.
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
              <Link to="/gluten-free/australia/melbourne/street-food">
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
              <Link to="/gluten-free/australia/melbourne/bakeries">
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
              <Link to="/gluten-free/australia/melbourne/grocery-stores">
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
              <Link to="/gluten-free/australia/melbourne/gluten-free-products">
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
                      Best Gluten-Free Restaurants in Melbourne
                    </h2>
                    <p className="text-gray-700">
                      Our editorial top 10 celiac-safe picks across Melbourne — ranked by safety, reviews and quality.
                    </p>
                  </div>
                </div>
                <Link
                  to="/gluten-free/australia/melbourne/best-gluten-free-restaurants-in-melbourne"
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
                  Verified Gluten-Free Restaurants in Melbourne
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
                              to={`/gluten-free/australia/melbourne/${r.slug}`}
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
                              className="text-sm text-red-700 hover:text-red-800 font-medium pt-1"
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
                      Showing {filteredRestaurants.length} of {melbourneRestaurants.length}
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
                <p className="text-gray-600">Gluten-free dining in Melbourne</p>
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

export default GlutenFreeMelbourne;
