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
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { AddRestaurantDialog } from "@/components/restaurants/AddRestaurantDialog";
import { FindNearMeButton } from "@/components/city/FindNearMeButton";
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
  photos?: { url: string; caption?: string }[];
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
    heroImage: "/images/brisbane/urban-fish-market-hero.webp",
    photos: [
      { url: "/images/brisbane/urban-fish-market/seafood-platter.webp", caption: "Fresh Oysters & Prawns Platter" },
      { url: "/images/brisbane/urban-fish-market/fish-chips.webp", caption: "Beer-Battered Fish & Chips" },
      { url: "/images/brisbane/urban-fish-market/burger.webp", caption: "GF Beef Burger on House Bun" },
      { url: "/images/brisbane/urban-fish-market/takeaway.webp", caption: "Takeaway Boxes" },
      { url: "/images/brisbane/urban-fish-market/burger-chips.webp", caption: "Burger with Golden Fries" },
      { url: "/images/brisbane/urban-fish-market/dessert.webp", caption: "GF Dessert with Strawberries" },
      { url: "/images/brisbane/urban-fish-market/chips.webp", caption: "Crispy Hand-Cut Chips" },
    ],
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
    heroImage: "/images/brisbane/nodo-south-bank-hero.webp",
    icon: "🍽️",
    specialty: "Modern Australian cuisine · GF options",
    rating: 4.7,
    reviewCount: 145,
    cuisineTypes: ["Australian", "Cafe"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "Contemporary Australian restaurant with well-trained staff offering innovative gluten-free dishes. Beautiful riverside location.",
    whyPeopleLoveIt: [
      "100% Gluten-Free Menu",
      "Famous Baked (Not Fried) Donuts",
      "Excellent All-Day Breakfast & Brunch",
      "Great Specialty Coffee",
      "Inclusive Dietary Options",
    ],
    proTip: "Weekend brunch is amazing — book ahead.",
    address: "Shop 65/114 Grey St, South Brisbane QLD 4101, Australia",
    hours: "Daily: 7:00AM – 10:00PM",
    phone: "+61 7 3123 4567",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Nodo+South+Bank+Brisbane",
    fullMenu: [
      {
        category: "🍳 Eats (Till 2:30pm)",
        items: [
          { name: "Native Avo", price: "$21.00", description: "Sourdough, citrus crushed avo, native dukkah, lemon myrtle, whipped goats cheese, citrus (gf, v, dfo, vgo)" },
          { name: "Bang Bang Bene", price: "$25.00", description: "Szechuan braised ham hock, citrus hollandaise, brioche, poached eggs, kale, butter crumb (gf, vo)" },
          { name: "Nodo Eggs", price: "$14.50", description: "Poached, fried or scrambled, sourdough, tomato caviar, salt cured yolk (gf, df, v)" },
          { name: "Milk Bun", price: "$17.50", description: "Bacon, spinach, spring onion mayo, soft fried egg, native ketchup, house baked milk bun (gf, dfo, vo)" },
          { name: "Gochu Hash", price: "$26.50", description: "Potato & cauliflower hash, exotic mushrooms, gochujang butter, kale, fried egg, chilli & parmesan crisps (gf, v)" },
          { name: "Salmon Bagel Bun", price: "$17.50", description: "Bagel bun, smoked salmon, caper & chive cream cheese, pickled cucumber, rocket (gf, dfo)" },
          { name: "Harvest Bowl", price: "$23.00", description: "Lemon garlic ricotta, sweet potato mash, roasted veg, kale, pomegranate dressing, blue corn tortilla (gf, v, dfo, vgo)" },
          { name: "Ice Magic Acai Bowl", price: "$23.00", description: "Blueberry granola, acai, seasonal berries, ice magic, freeze dried cherries (gf, vg, v)" },
        ],
      },
      {
        category: "🥐 Small Eats (Till 3:00pm)",
        items: [
          { name: "Banana Bread", price: "$9.00", description: "House baked, maple espresso 'butter' (gf, df, v)" },
          { name: "Loaded Sourdough Fruit Loaf", price: "$8.00", description: "Apricots, peaches, sultanas, spices, salted butter, gary's honey (gf, v)" },
          { name: "Hot Toastie", price: "$15.50", description: "Sourdough, shaved leg ham, red cheddar, heirloom tomatoes, dill pickle (gf, dfo)" },
          { name: "Smoked Chicken Toastie", description: "Sourdough, smoked chicken, garlic mayo, dill pickles, red cheddar, rocket (gf, dfo)" },
        ],
      },
      {
        category: "🍔 Burgers",
        items: [
          { name: "Nodo Fried Chicken Burger", description: "Milk bun, chicken thigh, nodo herbs & spices, thousand island mayo, lettuce, pickles (gf, dfo)" },
          { name: "Cheeky Beef Burger", description: "Milk bun, pulled organic beef, native ketchup, kombucha mustard, pickles, cheddar, lettuce (gf, dfo)" },
          { name: "Mushroom Cheeze Burger", description: "Quinoa bun, panko crumbed mushroom, native ketchup, coconut cheddar, pickles, mustard (gf, v, vg, df)" },
        ],
      },
      {
        category: "🥤 Supernatural Shakes",
        items: [
          { name: "B.a.n.a.n.a.s", price: "$11.50", description: "Banana, coconut milk, coconut ice cream, honey, cinnamon (vgo)" },
          { name: "Holy Cacao", price: "$12.50", description: "Banana, coconut milk & ice cream, cacao nib, ceremonial cacao, vegan protein (vg)" },
          { name: "Mint Maiden", price: "$12.50", description: "Banana, coconut milk, vegan protein, coconut ice cream, peppermint, spinach, cacao nibs (vg)" },
          { name: "Roasted Coffee Frappe", price: "$12.50", description: "Coconut ice cream, double espresso, caramel, coconut milk (vg)" },
          { name: "Japanese Matcha Frappe", price: "$12.50", description: "Coconut ice cream, coconut milk, matcha, vanilla (vg)" },
          { name: "Glow Up", price: "$15.00", description: "Strawberries, banana, avocado, coconut yoghurt, strawberry gum sauce, collagen, sea moss (vgo)" },
          { name: "Sunshine State", price: "$15.00", description: "Mango, pineapple, avocado, coconut yoghurt, coconut water, collagen, sea moss, passionfruit (vgo)" },
        ],
      },
      {
        category: "☕ Coffee",
        items: [
          { name: "Black", price: "$4.50", description: "Cup 4.5 / mug 5.5" },
          { name: "Milk", price: "$5.00", description: "Cup 5.0 / mug 6.0" },
          { name: "Batch Brew", price: "$5.00" },
          { name: "Iced Latte", price: "$6.50" },
          { name: "Iced Long Black", price: "$6.00" },
          { name: "Iced Batch Brew", price: "$6.00", description: "With dried orange" },
          { name: "Babyccino", price: "$2.00", description: "Sprinkles & mini mallow" },
        ],
      },
      {
        category: "🥃 Coffee Extras",
        items: [
          { name: "Extra Shot", price: "$0.50" },
          { name: "Single Origin", price: "$0.50" },
          { name: "Decaf", price: "$0.50" },
          { name: "Caramel / Vanilla", price: "$0.50" },
          { name: "Life Cykel Mushroom Blend", price: "$2.00" },
          { name: "Lactose Free / Almond / Bonsoy / Coconut", price: "$0.70" },
          { name: "Macadamia / Tigernut", price: "$1.00" },
        ],
      },
      {
        category: "🍹 Speciality Drinks",
        items: [
          { name: "Matcha Latte", price: "$6.00", description: "Pure japanese matcha" },
          { name: "Mocha", price: "$6.00", description: "Dark, milk or white" },
          { name: "Hot Chocolate", price: "$5.50", description: "Dark, milk or white" },
          { name: "Organic Spiced Chai Latte", price: "$5.50" },
          { name: "Organic Turmeric Coconut Latte", price: "$5.50" },
          { name: "Nodo Native Iced Tea", price: "$8.50", description: "Strawberry gum, rosella, lemon myrtle, pineapple & passionfruit, agave" },
          { name: "100% Organic Loose Leaf Tea", price: "$5.00", description: "Native / green / english breakfast / earl grey / rooibos turmeric chai" },
          { name: "Good Happy Buchi", price: "$7.00" },
          { name: "Giddy Citizen Fizz", price: "$6.00" },
          { name: "Strangelove Soda", price: "$6.00" },
        ],
      },
      {
        category: "🧃 Juice",
        items: [
          { name: "Glow", price: "$6.00" },
          { name: "Good Morning", price: "$6.00", description: "Orange" },
          { name: "Radiate", price: "$6.00", description: "Apple, pineapple, lemon, blue spirulina" },
          { name: "Activate", price: "$6.00", description: "Beetroot, carrot, mandarin, ginger, blackberry, lime" },
          { name: "Evergreen", price: "$6.00", description: "Coconut water, spinach, cucumber, celery, kale, parsley, lemon, lime" },
          { name: "Summer", price: "$6.00", description: "Mandarin, apple, pineapple, passionfruit, lemon, lime" },
        ],
      },
      {
        category: "🍦 Whip by Nodo — Donut Sundaes",
        items: [
          { name: "Native Strawberry Sundae", description: "Raspberry white chocolate donut, nodo whip, native strawberry gum sauce, fresh & freeze dried berries (gf, v)" },
          { name: "Apple Yuzu Crumble Sundae", description: "Apple native cinnamon donut, nodo whip, yuzu custard, freeze dried lychee, ginger biscuit crumb (gf, df, v)" },
          { name: "Peanut Caramel Sundae", description: "Vegan donut, nodo whip, peanut caramel, wattle seed peanut brittle, freeze dried pineapple (gf, df, v, vg)" },
          { name: "Vegan Soft Serve", description: "Cone, cup or kids cup — sprinkles free, +choc fudge or native strawberry sauce $2" },
        ],
      },
      {
        category: "🍩 Donuts",
        items: [
          { name: "Blueberry Lemon Cheesecake", description: "Blueberry, lemon cream cheese, pistachio crumb (gf)" },
          { name: "Breakfast Donut", description: "Banana, maple cream cheese, pecan crumb (gf)" },
          { name: "Raspberry White Chocolate", description: "Couverture white chocolate, raspberries, coconut (gf)" },
          { name: "Strawberry Hazelnut", description: "Couverture milk hazelnut chocolate, strawberries, coconut (gf)" },
          { name: "Vegan Cherry Cola", description: "Dark chocolate, organic cola, freeze dried cherry (gf, vg, df)" },
          { name: "Beetroot Blackout", description: "Couverture dark chocolate, beetroot, black cacao crumb (gf, df)" },
          { name: "Pumpkin Maple", description: "Couverture dark chocolate, pumpkin, gingerbread crumb (gf, df)" },
          { name: "Nodo Vovo", description: "Raspberry, coconut, meringue (gf, df)" },
        ],
      },
      {
        category: "👶 Kids Eats (Under 12)",
        items: [
          { name: "Rainbow Rosti", description: "(gf, df)" },
          { name: "Waffle", description: "(gf, df, v)" },
          { name: "Baby Beef Burger", description: "(gf, dfo)" },
          { name: "Baby Crepes", description: "Coconut ice cream, seasonal fruit, organic maple syrup" },
          { name: "Sourdough Soldiers", description: "Toasted sourdough, scrambled eggs, house ketchup" },
        ],
      },
      {
        category: "➕ Sides & Add-Ons",
        items: [
          { name: "Two Eggs Any Way" },
          { name: "Half Avo & Green Pea Dust" },
          { name: "Golden Halloumi & Lemon" },
          { name: "Cauliflower & Potato Hash Brown" },
          { name: "Native Spiced Crumbed Mushroom" },
          { name: "Free Range Bacon" },
          { name: "Cold Smoked Salmon" },
          { name: "Pulled Grass Fed Beef Cheek" },
          { name: "Charred Seasonal Greens & Citrus" },
          { name: "Potato Fries & Spring Onion Mayo" },
          { name: "Sweet Potato Fries & Native Ketchup" },
        ],
      },
    ],
    photos: [
      { url: "/images/brisbane/nodo/tropical_acai.webp", caption: "Tropical Acai Bowl" },
      { url: "/images/brisbane/nodo/eggs_on_toast.webp", caption: "Poached Eggs on Sourdough" },
      { url: "/images/brisbane/nodo/avocado_toast.webp", caption: "Native Avo Toast" },
      { url: "/images/brisbane/nodo/burger_and_chips.webp", caption: "Cheeky Beef Burger & Fries" },
      { url: "/images/brisbane/nodo/salad_jk_doughnuts.webp", caption: "Signature Donut Display" },
      { url: "/images/brisbane/nodo/coffees.webp", caption: "Iced Coffees" },
      { url: "/images/brisbane/nodo/mocha.webp", caption: "Chocolate Mocha" },
    ],
    services: {
      dineIn: { available: true, note: "Riverside indoor & outdoor seating at South Bank · family-friendly · walk-ins & bookings" },
      takeaway: { available: true, note: "Order at the counter · donuts, coffee & brunch packed to go · GF items packed separately" },
      delivery: { available: true, note: "Available via Uber Eats & DoorDash · GF items packed separately" },
      accessible: true,
      gfPackaging: true,
    },
  },
  {
    slug: "nodo-brisbane-city",
    name: "Nodo — Brisbane City",
    icon: "🍩",
    specialty: "Baked doughnuts · 100% gluten-free",
    rating: 4.8,
    reviewCount: 286,
    cuisineTypes: ["Bakery", "Cafe", "Dessert"],
    celiacSafe: "dedicated-facility",
    menuType: "fully-gluten-free",
    overview:
      "Nodo's Brisbane City store serving its signature baked (never fried) gluten-free doughnuts and all-day cafe food.",
    menuHighlights: [
      "🍩 Baked GF doughnuts",
      "🥗 All-day brunch",
      "☕ Specialty coffee",
    ],
    proTip: "Doughnut flavours change weekly — go early for the full range.",
    address: "300 Elizabeth St, Brisbane City QLD 4000, Australia",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Nodo+%E2%80%94+Brisbane+City+300+Elizabeth+St%2C+Brisbane+City+QLD+4000%2C+Australia",
  },
  {
    slug: "nodo-newstead",
    name: "Nodo — Newstead",
    icon: "🍩",
    specialty: "Baked doughnuts · 100% gluten-free",
    rating: 4.8,
    reviewCount: 254,
    cuisineTypes: ["Bakery", "Cafe", "Dessert"],
    celiacSafe: "dedicated-facility",
    menuType: "fully-gluten-free",
    overview:
      "The Newstead flagship of Nodo — a fully gluten-free kitchen known for baked doughnuts and wholefood brunch.",
    menuHighlights: [
      "🍩 Baked GF doughnuts",
      "🥑 Wholefood brunch bowls",
      "☕ Coffee",
    ],
    proTip: "Everything on site is gluten-free, so the whole menu is safe.",
    address: "1 Ella St, Newstead QLD 4006, Australia",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Nodo+%E2%80%94+Newstead+1+Ella+St%2C+Newstead+QLD+4006%2C+Australia",
  },
  {
    slug: "lucky-fish-palm-cove",
    name: "Lucky Fish",
    icon: "🐟",
    specialty: "Seafood · GF friendly",
    rating: 4.6,
    reviewCount: 203,
    cuisineTypes: ["Seafood", "Restaurant"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "Palm Cove seafood restaurant with grilled fish and clearly marked gluten-free dishes.",
    menuHighlights: [
      "🐟 Grilled reef fish",
      "🥗 Fresh salads",
      "🍤 GF prawns",
    ],
    proTip: "Ask for grilled rather than battered to avoid the shared fryer.",
    address: "Unit 18/111-117 Williams Esplanade, Palm Cove QLD 4879, Australia",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Lucky+Fish+Unit+18%2F111-117+Williams+Esplanade%2C+Palm+Cove+QLD+4879%2C+Australia",
  },
  {
    slug: "all-things-sweet-bakery",
    name: "All Things Sweet Bakery",
    icon: "🧁",
    specialty: "Dedicated GF bakery",
    rating: 4.8,
    reviewCount: 146,
    cuisineTypes: ["Bakery", "Dessert"],
    celiacSafe: "dedicated-facility",
    menuType: "fully-gluten-free",
    overview:
      "Lawnton bakery producing entirely gluten-free cakes, slices and savoury bakes.",
    menuHighlights: [
      "🧁 Cupcakes & cakes",
      "🥧 Savoury pies",
      "🍪 Slices & biscuits",
    ],
    proTip: "Custom celebration cakes can be ordered ahead.",
    address: "41 Ellis St, Lawnton QLD 4501, Australia",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=All+Things+Sweet+Bakery+41+Ellis+St%2C+Lawnton+QLD+4501%2C+Australia",
  },
  {
    slug: "bokabites-bokarina",
    name: "Bokabites",
    icon: "🥪",
    specialty: "Cafe · strong GF range",
    rating: 4.6,
    reviewCount: 132,
    cuisineTypes: ["Cafe", "Brunch"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "Sunshine Coast cafe at Bokarina with a large gluten-free selection and celiac-aware staff.",
    menuHighlights: [
      "🥪 GF toasties",
      "🥗 Salad bowls",
      "☕ Coffee & smoothies",
    ],
    proTip: "GF bread and wraps are kept separate from the regular bench.",
    address: "42 Bokarina Bvd, Bokarina QLD 4575, Australia",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Bokabites+42+Bokarina+Bvd%2C+Bokarina+QLD+4575%2C+Australia",
  },
  {
    slug: "artizan-gluten-free-bakery",
    name: "Artizan Gluten Free Bakery",
    icon: "🥖",
    specialty: "Dedicated GF bakery",
    rating: 4.8,
    reviewCount: 157,
    cuisineTypes: ["Bakery", "Cafe"],
    celiacSafe: "dedicated-facility",
    menuType: "fully-gluten-free",
    overview:
      "Rockhampton bakery baking bread, pastries and pies exclusively gluten-free.",
    menuHighlights: [
      "🍞 Artisan GF loaves",
      "🥐 Pastries",
      "🥧 Pies & rolls",
    ],
    proTip: "Order a day ahead for specialty loaves.",
    address: "159 East St, Rockhampton City QLD 4700, Australia",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Artizan+Gluten+Free+Bakery+159+East+St%2C+Rockhampton+City+QLD+4700%2C+Australia",
  },
  {
    slug: "baja-modern-mexican",
    name: "Baja Modern Mexican",
    icon: "🌮",
    specialty: "Mexican · corn-based GF menu",
    rating: 4.6,
    reviewCount: 221,
    cuisineTypes: ["Mexican", "Restaurant", "Bar"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "Fortitude Valley Mexican restaurant with corn tortillas and a well-marked gluten-free menu.",
    menuHighlights: [
      "🌮 Corn tacos",
      "🥑 Guacamole",
      "🍹 Margaritas",
    ],
    proTip: "Corn tortillas are the default — confirm fryer separation for sides.",
    address: "211 Brunswick St, Fortitude Valley QLD 4006, Australia",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Baja+Modern+Mexican+211+Brunswick+St%2C+Fortitude+Valley+QLD+4006%2C+Australia",
  },
  {
    slug: "maizland-fortitude-valley",
    name: "MAIZLAND",
    icon: "🫓",
    specialty: "Corn-based kitchen · gluten-free",
    rating: 4.7,
    reviewCount: 164,
    cuisineTypes: ["Mexican", "Latin American", "Cafe"],
    celiacSafe: "dedicated-facility",
    menuType: "fully-gluten-free",
    overview:
      "Fortitude Valley kitchen built entirely around nixtamalised corn, making the menu naturally gluten-free.",
    menuHighlights: [
      "🫓 House-made corn tortillas",
      "🌮 Tacos",
      "🌽 Corn snacks",
    ],
    proTip: "The whole menu is corn-based — no wheat in the kitchen.",
    address: "540 Wickham St, Fortitude Valley QLD 4006, Australia",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=MAIZLAND+540+Wickham+St%2C+Fortitude+Valley+QLD+4006%2C+Australia",
  },
  {
    slug: "seeyo-cafe-bakery",
    name: "SeeYo Cafe & Bakery",
    icon: "🍰",
    specialty: "Cafe & bakery · GF range",
    rating: 4.6,
    reviewCount: 138,
    cuisineTypes: ["Cafe", "Bakery"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "Mermaid Beach cafe and bakery with a dedicated gluten-free cabinet and GF brunch options.",
    menuHighlights: [
      "🍰 GF cakes & tarts",
      "🥐 GF pastries",
      "☕ Coffee",
    ],
    proTip: "GF items are stored separately in their own cabinet.",
    address: "2364 Gold Coast Hwy, Mermaid Beach QLD 4218, Australia",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=SeeYo+Cafe+%26+Bakery+2364+Gold+Coast+Hwy%2C+Mermaid+Beach+QLD+4218%2C+Australia",
  },
  {
    slug: "fricken-broadbeach",
    name: "Fricken",
    icon: "🍗",
    specialty: "Fried chicken · GF option",
    rating: 4.5,
    reviewCount: 211,
    cuisineTypes: ["Fast Food", "Restaurant"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "Broadbeach chicken shop offering a gluten-free crumb and dedicated fryer for celiac orders.",
    menuHighlights: [
      "🍗 GF crumbed chicken",
      "🍟 GF fries",
      "🥤 Shakes",
    ],
    proTip: "Ask for the dedicated GF fryer when you order.",
    address: "89, shop110/91 Surf Parade, Broadbeach QLD 4218, Australia",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Fricken+89%2C+shop110%2F91+Surf+Parade%2C+Broadbeach+QLD+4218%2C+Australia",
  },];

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

  const pageTitle = "Gluten-Free Options in Brisbane | Celiac-Safe Dining";
  const metaDescription =
    "Browse verified gluten free options in Brisbane, Australia. Discover celiac-safe cafes, patisseries and brunch spots with reviews, menu tips and directions.";
  const schemaJson = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Gluten-Free Options in Brisbane, Australia",
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

  const cuisineOptions = useMemo(() => {
    const counts = new Map<string, number>();
    brisbaneRestaurants.forEach((r) => (r.cuisineTypes || []).forEach((c) => counts.set(c, (counts.get(c) ?? 0) + 1)));
    return Array.from(counts.entries())
      .map(([label, count]) => ({ value: label, label, count }))
      .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
  }, []);

  const menuOptions = useMemo(
    () => [
      { value: "fully-gluten-free", label: "100% Gluten-Free", count: brisbaneRestaurants.filter((r) => r.menuType === "fully-gluten-free").length },
      { value: "mixed-menu", label: "GF Options Available", count: brisbaneRestaurants.filter((r) => r.menuType === "mixed-menu").length },
    ],
    [],
  );

  const safetyOptions = useMemo(
    () => [
      { value: "dedicated-facility", label: "Dedicated GF Facility", count: brisbaneRestaurants.filter((r) => r.celiacSafe === "dedicated-facility").length },
      { value: "protocols-in-place", label: "Celiac Protocols", count: brisbaneRestaurants.filter((r) => r.celiacSafe === "protocols-in-place").length },
    ],
    [],
  );

  const filteredRestaurants = useMemo(
    () =>
      brisbaneRestaurants.filter((r) => {
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
              Dedicated Gluten-free Restaurants in Brisbane
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-6 max-w-3xl mx-auto">
              Verified celiac-safe spots, practical menu guidance, and trusted dining picks in Brisbane.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Badge className="bg-white/20 border-white/40 text-white px-4 py-2">
                {brisbaneRestaurants.length} listed restaurants
              </Badge>
              <FindNearMeButton city="Brisbane" />
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
