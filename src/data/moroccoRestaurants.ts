import type { Restaurant } from "@/data/capeTownRestaurants";

type Partial0 = Omit<Restaurant, "city" | "country" | "featured" | "photos" | "lat" | "lng"> & {
  lat?: number;
  lng?: number;
};

const build = (city: string, list: Partial0[], fallback: { lat: number; lng: number }): Restaurant[] =>
  list.map((r) => ({
    ...r,
    city,
    country: "Morocco",
    featured: false,
    photos: [],
    lat: r.lat ?? fallback.lat,
    lng: r.lng ?? fallback.lng,
  }));

const maps = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

const m = (
  name: string,
  slug: string,
  address: string,
  specialty: string,
  overview: string,
  cuisineTypes: string[],
  extra?: Partial<Partial0>
): Partial0 => ({
  name,
  slug,
  address,
  hours: "Daily: 09:00–23:00",
  phone: "",
  website: "",
  directionsUrl: maps(`${name} ${address}`),
  specialty,
  overview,
  menuHighlights: ["🍲 Tagines", "🥗 Moroccan salads", "🍢 Grilled meats"],
  proTip: "Carry a dietary card in Arabic and French and confirm no flour or bread is used in your dish.",
  icon: "🍽️",
  cuisineTypes,
  celiacSafe: "protocols-in-place",
  menuType: "mixed-menu",
  rating: 4.5,
  reviewCount: 150,
  venueType: "restaurant",
  ...extra,
});

export const marrakeshRestaurants = build(
  "Marrakesh",
  [
    m("Restaurant Dar Tazi Marrakech & \"Gluten Free\"", "dar-tazi-marrakech-gluten-free", "n°44 Souk Ahl Fes, Marrakesh 40000", "Moroccan restaurant with gluten-free focus", "A medina restaurant in Souk Ahl Fes known for catering to gluten-free diners, serving classic Moroccan dishes adapted for coeliacs.", ["Moroccan", "Gluten-Free"]),
    m("Monquotidien Gueliz", "monquotidien-gueliz", "41-43 Rue Yougoslavie, Marrakech 40000", "French-style café in Gueliz", "A popular French-style café in the Gueliz district serving brunch, salads and naturally gluten-free options.", ["Cafe", "French", "Brunch"], { venueType: "cafe" }),
    m("Chez Madame Khadija", "chez-madame-khadija", "J2J6+XHG, Rue Amsafah, Marrakesh 40000", "Home-style Moroccan cooking", "A small family-run spot offering home-style Moroccan cooking, with tagines and grilled meats that are naturally gluten-free.", ["Moroccan", "Traditional"]),
    m("Ben Jamil", "ben-jamil", "11 Riad Zitoun Lakdim, Marrakech 40000", "Traditional Moroccan kitchen", "A traditional Moroccan kitchen on Riad Zitoun Lakdim with tagines and salads suited to gluten-free diners.", ["Moroccan"]),
    m("Pepe Nero Restaurant", "pepe-nero", "17 Derb Cherkaoui, Marrakech 40000", "Italian-Moroccan fine dining", "An elegant restaurant in the Mouassine quarter blending Italian and Moroccan cuisine, with staff able to adapt dishes for gluten-free guests.", ["Italian", "Moroccan", "Fine Dining"], { rating: 4.7 }),
    m("Cuisine De Terroir", "cuisine-de-terroir", "118 Rue Kennaria, Marrakesh 40000", "Moroccan terroir cuisine", "A terroir-focused restaurant on Rue Kennaria celebrating Moroccan regional dishes, many naturally gluten-free.", ["Moroccan", "Local"]),
    m("Henna Art Cafe", "henna-art-cafe", "35 Derb Sqaya, Marrakech 40000", "Art café with fresh juices and salads", "A laid-back art café serving fresh juices, salads and simple dishes in the heart of the medina.", ["Cafe", "Juice Bar", "Vegetarian"], { venueType: "cafe" }),
    m("Zeitoun Café", "zeitoun-cafe", "107 Place Jemaa El Fnaa, Marrakech 40000", "Café overlooking Jemaa el-Fnaa", "A well-known café overlooking Jemaa el-Fnaa square, serving Moroccan staples and fresh juices with a view.", ["Cafe", "Moroccan"], { venueType: "cafe" }),
    m("Nomad", "nomad-marrakech", "1 Derb Aarjane, Marrakesh 40000", "Modern Moroccan rooftop", "A famous modern Moroccan rooftop restaurant near the spice square, with grilled fish, salads and tagines that staff can adapt for coeliacs.", ["Moroccan", "Modern", "Rooftop"], { rating: 4.6 }),
    m("Taj'in Darna", "tajin-darna", "J2G6+6WC, Marrakesh 40000", "Budget tagine house", "A budget-friendly tagine house just off Jemaa el-Fnaa, serving slow-cooked stews that are usually naturally gluten-free.", ["Moroccan", "Tagine"]),
    m("Falafel Terrace", "falafel-terrace", "21 Rue Fatima Zahra, Marrakesh 40000", "Middle Eastern falafel spot", "A Middle Eastern terrace restaurant specializing in falafel, hummus and salads — ask for no bread to keep it gluten-free.", ["Middle Eastern", "Vegetarian", "Falafel"]),
    m("Cafe Árabe", "cafe-arabe", "184 Rue Mouassine, Marrakesh 40000", "Elegant café & Italian-Moroccan dining", "An elegant café-restaurant in Mouassine offering Moroccan and Italian dishes with attentive staff used to dietary requests.", ["Moroccan", "Italian", "Cafe"]),
    m("La Kamounya", "la-kamounya", "Rue de la Kasbah, Rue Bab Agnaou, Marrakech 40000", "Kasbah Moroccan restaurant", "A Moroccan restaurant in the Kasbah district serving tagines and grilled dishes near the Saadian Tombs.", ["Moroccan"]),
    m("Mandala Society", "mandala-society", "159 Rue Riad Zitoun el Jdid, Marrakesh 40000", "Healthy bowls & brunch café", "A healthy café serving bowls, salads and brunch dishes with several naturally gluten-free choices.", ["Cafe", "Healthy", "Brunch"], { venueType: "cafe" }),
    m("EAT ME", "eat-me", "10 Rue Sourya, Marrakech 40000", "International café & juice bar", "A friendly international café with fresh juices, salads and globally inspired dishes.", ["Cafe", "International"], { venueType: "cafe" }),
    m("La Table du Riad", "la-table-du-riad", "72 Arset Aouzal Rd, Marrakesh 40000", "Intimate riad restaurant", "An intimate riad restaurant where meals are prepared fresh and can easily be adapted for gluten-free guests when informed in advance.", ["Moroccan", "Riad Dining"], { rating: 4.7 }),
    m("Kafé Merstan et Restaurant sur Terrasse", "kafe-merstan", "2 Souk Laksour, Marrakech 40000", "Terrace café in the souks", "A terrace café and restaurant tucked into the souks, serving tagines, couscous alternatives and mint tea.", ["Moroccan", "Cafe"], { venueType: "cafe" }),
    m("KABANA Rooftop Food & Cocktails", "kabana-rooftop", "1 Rue Fatima Zahra, Marrakech 40000", "Rooftop dining with Medina views", "A popular rooftop near the Medina offering grilled dishes, salads and cocktails with panoramic views.", ["Rooftop", "International", "Grill"]),
    m("Mazel Cafe", "mazel-cafe", "8 Place des Ferblantiers, Marrakech 40000", "Brunch café near Place des Ferblantiers", "A bright café on Place des Ferblantiers known for brunch, smoothie bowls and gluten-free-friendly choices.", ["Cafe", "Brunch", "Healthy"], { venueType: "cafe" }),
    m("Le Jardin Restaurant Marrakech Medina", "le-jardin-marrakech", "32 Souk Jeld Sidi Abdelaziz, Marrakesh 40000", "Garden oasis restaurant", "A lush garden restaurant hidden in the medina, serving modern Moroccan dishes with plenty of naturally gluten-free options.", ["Moroccan", "Modern", "Garden"]),
    m("La Trattoria", "la-trattoria-marrakech", "179 Rue Mohammed el Beqal, Marrakech 40000", "Classic Italian trattoria", "A long-standing Italian trattoria in Gueliz with gluten-free pasta options available on request.", ["Italian", "Pasta", "Pizza"]),
    m("Le Bistro Arabe - Moroccan Jazz Restaurant", "le-bistro-arabe", "7/8 Riad Zitoun Lakdim, Marrakech 40000", "Jazz restaurant with Moroccan cuisine", "A Moroccan jazz restaurant offering tagines and grilled meats alongside live music in an atmospheric setting.", ["Moroccan", "Live Music"]),
    m("Carrefour Market", "carrefour-market-marrakech", "Résidence la Fontaine, N°1 Bd Al Yarmouk, Marrakech 40000", "Supermarket with GF products", "A supermarket stocking imported gluten-free bread, pasta and snacks — a reliable stop for coeliac travellers.", ["Supermarket", "Grocery"], { venueType: "supermarket", icon: "🛒" }),
    m("Flowers", "flowers-marrakech", "15 Derb Sidi Ali Tair, Dar El Bacha, Marrakech 40000", "Fresh café in Dar El Bacha", "A fresh café in the Dar El Bacha district serving salads, juices and simple dishes.", ["Cafe", "Healthy"], { venueType: "cafe" }),
  ],
  { lat: 31.6295, lng: -7.9811 }
);

export const moroccoCities = [
  {
    name: "Marrakesh",
    slug: "marrakesh",
    emoji: "🕌",
    heroImage: "/images/marrakesh-hero.webp?v=2",
    image: "photo-1597212618440-806262de4f6b",
    rating: 4.6,
    description: "Navigate the medina with confidence — tagines, grills and naturally gluten-free Moroccan classics",
    restaurants: marrakeshRestaurants,
    intro:
      "Marrakesh is Morocco's most visited city, and with some knowledge it is wonderfully navigable for coeliacs. Tagines, grilled meats and salads are naturally gluten-free — just watch for couscous, khobz bread and pastilla.",
  },
];

export const getMoroccoCity = (slug?: string) => moroccoCities.find((c) => c.slug === slug);
