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

export const casablancaRestaurants = build(
  "Casablanca",
  [
    m("Rose Léon Pâtisserie", "rose-leon-patisserie", "Rte Sidi Al Khadir, Casablanca", "Pâtisserie with gluten-free treats", "A pâtisserie on Route Sidi Al Khadir offering cakes and pastries with gluten-free-friendly options.", ["Bakery", "Patisserie"], { venueType: "bakery", icon: "🧁" }),
    m("Koul Hani Boulangerie Sans Gluten", "koul-hani-boulangerie-sans-gluten", "Lot Al Woroud, N N5B, D5 Rue 46, Casablanca 20280", "Dedicated gluten-free bakery", "A fully gluten-free bakery in Casablanca serving breads, pastries and savoury baked goods safe for coeliacs.", ["Bakery", "100% Gluten-Free"], { venueType: "bakery", icon: "🥖", celiacSafe: "dedicated-facility", menuType: "fully-gluten-free", rating: 4.7 }),
    m("Pâtisserie Katia", "patisserie-katia", "13 Rue Al Bouhtouri, Casablanca 20000", "Classic pâtisserie with GF options", "A classic Casablanca pâtisserie with a selection of gluten-free-friendly cakes and desserts.", ["Bakery", "Patisserie", "Desserts"], { venueType: "bakery", icon: "🧁" }),
    m("Diet Ibn Batouta", "diet-ibn-batouta", "71 Rue Ibn Batouta, Casablanca 20250", "Health food store & diet products", "A diet and health food store stocking gluten-free breads, pasta and specialty products for coeliacs.", ["Health Food", "Grocery"], { venueType: "supermarket", icon: "🛒" }),
    m("Organic Kitchen", "organic-kitchen-casablanca", "6-8 Rue Ahmed El Mokri, Casablanca 20000", "Organic health-focused restaurant", "An organic kitchen serving fresh, health-focused dishes with clearly marked gluten-free choices.", ["Healthy", "Organic", "Vegetarian"], { rating: 4.6 }),
    m("Blend Gourmet Burger", "blend-gourmet-burger", "9 Rue Théophile Gauthier, Casablanca 20250", "Gourmet burgers with GF buns", "A gourmet burger spot offering gluten-free bun options — confirm fryer practices before ordering fries.", ["Burgers", "American"] ),
    m("Marjane Market", "marjane-market-casablanca", "Rue Pierre Parent, Casablanca 20250", "Supermarket with GF products", "A large supermarket stocking imported gluten-free breads, pasta and snacks — a reliable stop for coeliac travellers.", ["Supermarket", "Grocery"], { venueType: "supermarket", icon: "🛒" }),
    m("Dar Dada", "dar-dada", "31 Rue El Arsa, Casablanca 20250", "Traditional Moroccan dining", "A traditional Moroccan restaurant serving tagines and grilled dishes that are often naturally gluten-free.", ["Moroccan", "Traditional"]),
    m("Etoile du Maroc", "etoile-du-maroc", "107 Rue Allal Ben Abdellah, Casablanca 20000", "Moroccan classics", "A Moroccan restaurant serving classic tagines, grills and salads — confirm no flour thickeners are used.", ["Moroccan"]),
    m("Holy Brunch", "holy-brunch", "Angle Rue Theophile Gauthier et Rue Al Bouhtouri, Casablanca 20012", "Brunch café", "A popular brunch café with smoothie bowls, eggs and salads alongside gluten-free-friendly options.", ["Cafe", "Brunch", "Healthy"], { venueType: "cafe" }),
    m("Medina Moroccan Taste", "medina-moroccan-taste", "Bd d'Anfa, Casablanca 20250", "Moroccan restaurant", "A Moroccan restaurant on Boulevard d'Anfa serving tagines and grilled meats suited to gluten-free diners.", ["Moroccan"]),
    m("NIYA", "niya-casablanca", "34 Rue Sebou, Casablanca 20100", "Modern café & restaurant", "A stylish modern café and restaurant with fresh salads, bowls and dishes that staff can adapt for gluten-free guests.", ["Cafe", "Modern", "International"], { venueType: "cafe" }),
    m("La Sqala", "la-sqala", "Bd des Almohades, Casablanca 20250", "Historic garden restaurant", "A famous restaurant set in the gardens of an 18th-century bastion, serving traditional Moroccan breakfasts, tagines and grilled fish.", ["Moroccan", "Traditional", "Garden"], { rating: 4.6 }),
    m("Café Crozette", "cafe-crozette", "Angle Rue Louis David et Rue Razi, Casablanca 20360", "Neighbourhood café", "A relaxed neighbourhood café with salads, juices and light dishes.", ["Cafe"], { venueType: "cafe" }),
    m("Radisson Blu Hotel, Casablanca City Center", "radisson-blu-casablanca", "2 Rue Mohamed Diouri, Casablanca 20300", "Hotel dining with GF awareness", "An international hotel whose restaurants can cater to gluten-free guests with advance notice.", ["Hotel Dining", "International"], { rating: 4.5 }),
    m("Le 7ème Ciel", "le-7eme-ciel", "6ème Etage, Imm Harmony Business, Rue de Larache, Casablanca 20210", "Rooftop restaurant", "A rooftop restaurant on the 7th floor serving international dishes with city views.", ["Rooftop", "International"] ),
    m("Oké Poké Bowl", "oke-poke-bowl", "12 Rue Al Bouhtouri, Casablanca 20060", "Poké bowls", "A poké bowl spot where you can build naturally gluten-free bowls — choose tamari instead of soy sauce.", ["Hawaiian", "Poke", "Healthy"] ),
    m("Vibe Rooftop", "vibe-rooftop", "423 Bd Abdelmoumen, Casablanca 20420", "Rooftop lounge & dining", "A rooftop lounge serving grilled dishes, salads and cocktails with panoramic views.", ["Rooftop", "International", "Grill"]),
    m("Bondi Coffee Kitchen", "bondi-coffee-kitchen", "31 Rue Sebou, Casablanca 20600", "Australian-style café", "An Australian-style café serving specialty coffee, brunch plates and salads with gluten-free-friendly options.", ["Cafe", "Brunch", "Australian"], { venueType: "cafe", rating: 4.6 }),
    m("Achibane Sans Gluten", "achibane-sans-gluten", "46 Rue Ibn Batouta, Casablanca 20000", "Dedicated gluten-free shop", "A dedicated gluten-free shop and eatery offering breads, pastries and meals entirely safe for coeliacs.", ["100% Gluten-Free", "Bakery", "Grocery"], { celiacSafe: "dedicated-facility", menuType: "fully-gluten-free", icon: "🥖", rating: 4.7 }),
    m("Hyatt Regency Casablanca", "hyatt-regency-casablanca", "Pl. des Nations Unies, Casablanca 20000", "Hotel restaurants", "A five-star hotel with multiple restaurants able to accommodate gluten-free diets with advance notice.", ["Hotel Dining", "International"], { rating: 4.5 }),
    m("Sofitel Casablanca Tour Blanche", "sofitel-casablanca-tour-blanche", "Rue Sidi Belyout, Casablanca 20000", "Luxury hotel dining", "A luxury hotel whose chefs regularly cater to gluten-free and coeliac guests.", ["Hotel Dining", "French", "International"], { rating: 4.5 }),
    m("Cafe Haussmann", "cafe-haussmann", "Bd Ghandi, Casablanca", "Parisian-style café", "A Parisian-style café on Boulevard Ghandi serving salads, omelettes and light dishes.", ["Cafe", "French"], { venueType: "cafe" }),
    m("La Pensée", "la-pensee-casablanca", "110 Bd Ibnou Sina, Casablanca 20000", "Local restaurant", "A local restaurant on Boulevard Ibnou Sina serving Moroccan and international dishes.", ["Moroccan", "International"]),
  ],
  { lat: 33.5731, lng: -7.5898 }
);

export const rabatRestaurants = build(
  "Rabat",
  [
    m("Lina Gluten Free", "lina-gluten-free", "2 Av. Moulay Hassan, Rabat", "Dedicated gluten-free bakery", "A dedicated gluten-free spot in central Rabat offering breads, pastries and sweet treats safe for coeliacs.", ["Bakery", "100% Gluten-Free"], { venueType: "bakery", icon: "🥖", celiacSafe: "dedicated-facility", menuType: "fully-gluten-free", rating: 4.7 }),
    m("Pause Gourmet", "pause-gourmet", "467 Ave Mohammed V, Rabat", "Gourmet café and deli", "A gourmet café on Avenue Mohammed V serving fresh salads, bowls and light dishes with gluten-free-friendly options.", ["Cafe", "Healthy", "Gourmet"], { venueType: "cafe", rating: 4.5 }),
    m("Lina", "lina-rabat", "2588+GGR, Rabat", "Moroccan restaurant with GF awareness", "A Rabat restaurant where staff can guide gluten-free diners through traditional Moroccan dishes.", ["Moroccan", "Restaurant"]),
    m("Restaurant Ziryab", "restaurant-ziryab", "10 Impasse Ennajjar, Rue des Consuls, Rabat", "Andalusian-Moroccan fine dining", "An elegant restaurant in the medina serving refined Moroccan and Andalusian-inspired dishes with attentive service for dietary needs.", ["Moroccan", "Fine Dining", "Andalusian"], { rating: 4.6 }),
    m("Le Picolo's", "le-picolos", "Av. Mohammed VI, Rabat 10170", "Italian café and pizzeria", "A casual Italian spot on Avenue Mohammed VI with gluten-free pizza and pasta options available on request.", ["Italian", "Pizza", "Pasta"]),
    m("Dar El Medina", "dar-el-medina", "3 rue benjelloul souk sebbat, Rabat", "Riad restaurant in the medina", "A charming riad restaurant in the medina serving fresh Moroccan dishes that can be adapted for gluten-free guests.", ["Moroccan", "Riad Dining"]),
    m("Restaurant de la Libération", "restaurant-de-la-liberation", "256 Av. Mohammed V, Rabat 10030", "Classic Moroccan restaurant", "A long-standing Rabat restaurant serving classic tagines, grilled meats and salads suited to gluten-free diners.", ["Moroccan", "Traditional"]),
    m("Restaurant Nakhat Chef Nour", "restaurant-nakhat-chef-nour", "magasin 2, 32 Av. Al Abtal, Rabat 10100", "Modern Moroccan kitchen", "A modern Moroccan kitchen led by Chef Nour, with fresh preparations and awareness of gluten-free requests.", ["Moroccan", "Modern"], { rating: 4.6 }),
    m("Restaurant Marocain Dar Safran", "restaurant-marocain-dar-safran", "9, Rue Patrice Lumumba, Av. Moulay Hassan, Rabat 10005", "Traditional Moroccan restaurant", "A traditional Moroccan restaurant near Avenue Moulay Hassan serving tagines and grilled dishes.", ["Moroccan", "Traditional"]),
    m("Dar Al-Rabatiya", "dar-al-rabatiya", "6 rue Farane Khachane, Rue Sidi Fateh, Rabat 10000", "Heritage Moroccan dining", "A heritage-style restaurant in the medina serving authentic Rabat dishes, many naturally gluten-free.", ["Moroccan", "Traditional"]),
    m("Dar Naji", "dar-naji", "Av. Jazirat Al Arabe, Rabat", "Moroccan family restaurant", "A family-run Moroccan restaurant known for generous portions of tagines, couscous alternatives and grilled meats.", ["Moroccan", "Family"]),
    m("Dar Naji Agdal", "dar-naji-agdal", "26 Av. Omar Ibn Al Khattab, Rabat 10000", "Moroccan restaurant in Agdal", "A popular Agdal branch serving the same beloved Moroccan classics with gluten-free-friendly options.", ["Moroccan", "Traditional"]),
    m("Marjane Arribat Center", "marjane-arribat-center", "Av. Inaouin, Rabat", "Supermarket with GF products", "A large supermarket stocking imported gluten-free breads, pasta, snacks and specialty items.", ["Supermarket", "Grocery"], { venueType: "supermarket", icon: "🛒" }),
    m("Dinarjat", "dinarjat", "6 Rue Belgnaoui, Rabat 10030", "Historic Moroccan restaurant", "A historic restaurant in a restored 18th-century house, serving refined Moroccan cuisine with advance dietary accommodation.", ["Moroccan", "Historic", "Fine Dining"], { rating: 4.6 }),
    m("Thai Sushi Cuisine", "thai-sushi-cuisine", "3 rue Assouhaili, n°5, magasin, Rabat 10080", "Thai and Japanese fusion", "A Thai-sushi fusion spot where naturally gluten-free curries and sushi bowls are available — ask for tamari.", ["Thai", "Japanese", "Sushi"]),
    m("Yamal Acham", "yamal-acham", "5 bis, 5 Av. Al Maghrib Al Arabi, Rabat 10060", "Middle Eastern grill", "A Middle Eastern grill serving shawarma, kebabs and mezze — request no bread and check marinades.", ["Middle Eastern", "Grill", "Lebanese"]),
    m("Sufra Restaurant", "sufra-restaurant", "19 Av. Moulay Rachid, Rabat", "Contemporary Moroccan dining", "A contemporary Moroccan restaurant with fresh, seasonal dishes and staff attentive to gluten-free requests.", ["Moroccan", "Contemporary"], { rating: 4.5 }),
    m("Boho Café", "boho-cafe", "10 Rue EL Yamama, Rabat 10000", "Trendy café and brunch spot", "A trendy café serving brunch, smoothie bowls, salads and specialty coffee with gluten-free-friendly choices.", ["Cafe", "Brunch", "Healthy"], { venueType: "cafe" }),
    m("Restaurant Cafe Bab Laalou", "cafe-bab-laalou", "18 Av. Laalou, Rabat", "Café near the Kasbah", "A relaxed café near Bab Laalou serving light meals, salads and mint tea with medina views.", ["Cafe", "Moroccan"], { venueType: "cafe" }),
    m("La Casa Di Carta", "la-casa-di-carta", "Rue d'Oran, Rabat", "Italian restaurant", "An Italian restaurant in Rabat offering pasta and pizza with gluten-free options on request.", ["Italian", "Pizza", "Pasta"]),
    m("Indian Flavors", "indian-flavors", "29 Jbel El Ayachi, Rabat 10080", "Indian restaurant", "An Indian restaurant serving naturally gluten-free curries, tandoori dishes and rice-based meals — confirm naan is avoided.", ["Indian", "Curry", "Tandoori"]),
  ],
  { lat: 34.0209, lng: -6.8416 }
);

export const tangierRestaurants = build(
  "Tangier",
  [
    m("Ch'hiwat Sans Gluten", "chhiwat-sans-gluten", "A côté Masjid Badr, Tanger 90000", "Dedicated gluten-free kitchen", "A dedicated gluten-free spot near Masjid Badr offering Moroccan dishes and baked goods safe for coeliacs.", ["Moroccan", "100% Gluten-Free"], { celiacSafe: "dedicated-facility", menuType: "fully-gluten-free", icon: "🥖", rating: 4.7 }),
    m("Macondo", "macondo", "13 Rue Ben Abou, Tanger", "Mediterranean-Moroccan bistro", "A cosy bistro on Rue Ben Abou blending Mediterranean and Moroccan flavours with gluten-free-friendly options.", ["Mediterranean", "Moroccan", "Bistro"]),
    m("Sarayah Food Resturant", "sarayah-food-restaurant", "15 Rue Soralla, Tanger 90000", "Local Moroccan eatery", "A local restaurant on Rue Soralla serving tagines, grilled meats and salads that can be adapted for gluten-free diners.", ["Moroccan", "Traditional"]),
    m("Alma Kitchen & Coffee", "alma-kitchen-coffee", "Place des Nations 44, Rue Antaki, Tangier 90000, Morocco", "Modern café & coffee shop", "A modern café on Place des Nations serving breakfast, salads and specialty coffee with gluten-free-friendly choices.", ["Cafe", "Coffee", "Brunch"], { venueType: "cafe" }),
    m("Good Food Corner 2", "good-food-corner-2", "Bab Dar Dbagh, Tangier, Morocco", "Casual Moroccan corner", "A casual corner near Bab Dar Dbagh offering quick Moroccan grills and salads — ask for no bread.", ["Moroccan", "Fast Food"]),
    m("La Muralla", "la-muralla", "Bab Kasbah, Place du Tabor, Tanger 90000, Morocco", "Spanish-Moroccan restaurant", "A restaurant by the Kasbah walls serving Spanish-influenced Moroccan dishes with attentive staff for dietary requests.", ["Spanish", "Moroccan", "Mediterranean"]),
    m("Kebdani Restaurant", "kebdani-restaurant", "Rue Dar Baroud, Tanger, Morocco", "Traditional Moroccan dining", "A traditional restaurant on Rue Dar Baroud known for tagines, grilled fish and Moroccan salads.", ["Moroccan", "Seafood", "Traditional"]),
    m("Abou Tayssir", "abou-tayssir", "11 Rue d'Italie, Tangier, Morocco", "Italian-Moroccan trattoria", "A friendly trattoria on Rue d'Italie offering Italian and Moroccan classics with gluten-free pasta options on request.", ["Italian", "Moroccan", "Pasta"]),
    m("Carrefour", "carrefour-tangier", "Socco Alto, Av. Banafsaj, Tangier 90040, Morocco", "Supermarket with GF products", "A large supermarket in Socco Alto stocking imported gluten-free bread, pasta and snacks.", ["Supermarket", "Grocery"], { venueType: "supermarket", icon: "🛒" }),
    m("MOFI", "mofi-tangier", "34 Av. Prince Moulay Abdellah, Tanger, Morocco", "Healthy café & bowls", "A health-focused café serving smoothie bowls, salads and light dishes with several naturally gluten-free options.", ["Cafe", "Healthy", "Bowls"], { venueType: "cafe" }),
    m("Marjane Market", "marjane-market-tangier", "Q6F7+8M4 City Center, Tanger, Morocco", "Supermarket with GF products", "A major hypermarket in Tangier City Center with a gluten-free section for travellers.", ["Supermarket", "Grocery"], { venueType: "supermarket", icon: "🛒" }),
    m("El Morocco Club", "el-morocco-club", "Place du Tabor, Tangier 90000, Morocco", "Upscale Moroccan-International", "An elegant club-restaurant on Place du Tabor serving refined Moroccan and international cuisine with gluten-free awareness.", ["Moroccan", "International", "Fine Dining"], { rating: 4.6 }),
    m("Hamadi", "hamadi-tangier", "Rue de la Kasbah, Tanger 90000, Morocco", "Kasbah Moroccan restaurant", "A long-standing restaurant in the Kasbah area serving traditional tagines and grilled meats.", ["Moroccan", "Traditional"]),
    m("Heavenly Desserts", "heavenly-desserts-tangier", "Av. de France, Tanger, Morocco", "Dessert café", "A dessert café on Avenue de France offering cakes, ice creams and sweet treats with gluten-free-friendly options.", ["Desserts", "Cafe", "Ice Cream"], { venueType: "cafe" }),
    m("Soli Tangier", "soli-tangier", "17 Calle Nueva, Tanger 90000, Morocco", "Italian restaurant", "An Italian spot on Calle Nueva with gluten-free pasta and pizza available on request.", ["Italian", "Pizza", "Pasta"]),
    m("Marshan Park Café Restaurant", "marshan-park-cafe", "28 Av. Hadj Mohamed Tazi, Tanger, Morocco", "Park café & restaurant", "A relaxed café-restaurant near Marshan Park serving salads, grills and light dishes with city views.", ["Cafe", "Moroccan", "International"], { venueType: "cafe" }),
    m("Indian Spice Tangier", "indian-spice-tangier", "4 Rue Boutouri, Tanger 90000, Morocco", "Indian curry house", "An Indian restaurant on Rue Boutouri serving naturally gluten-free curries, tandoori and rice dishes — confirm no naan.", ["Indian", "Curry", "Tandoori"]),
    m("Coffee House", "coffee-house-tangier", "Av. Ibn Al Abbar, Tanger 90030, Morocco", "Neighbourhood coffee shop", "A neighbourhood coffee shop on Avenue Ibn Al Abbar serving drinks, pastries and light snacks.", ["Cafe", "Coffee", "Snacks"], { venueType: "cafe" }),
    m("RR Ice", "rr-ice-tangier", "Tangier, Morocco", "Ice cream parlour", "A local ice cream and dessert spot in Tangier with sorbet and naturally gluten-free options.", ["Ice Cream", "Desserts"], { venueType: "cafe" }),
  ],
  { lat: 35.7595, lng: -5.834 }
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
  {
    name: "Casablanca",
    slug: "casablanca",
    emoji: "🌊",
    image: "photo-1569383746724-6f1b882b8f46",
    rating: 4.5,
    description: "Morocco's cosmopolitan hub with dedicated gluten-free bakeries, modern cafés and hotel dining",
    restaurants: casablancaRestaurants,
    intro:
      "Casablanca is Morocco's most cosmopolitan city and its best for gluten-free living — home to dedicated gluten-free bakeries like Koul Hani and Achibane Sans Gluten, plus supermarkets such as Marjane stocking imported GF products.",
  },
  {
    name: "Rabat",
    slug: "rabat",
    emoji: "🏛️",
    image: "photo-1553899017-c205d710e08b",
    rating: 4.4,
    description: "The capital city blends traditional Moroccan cuisine with growing gluten-free awareness",
    restaurants: rabatRestaurants,
    intro:
      "Rabat is Morocco's capital and a relaxed, walkable city with a growing gluten-free scene. From dedicated bakeries like Lina Gluten Free to riad restaurants and modern cafés, coeliacs can dine well along the Atlantic coast.",
  },
  {
    name: "Tangier",
    slug: "tangier",
    emoji: "🌊",
    heroImage: "/images/tangier-hero.webp?v=2",
    image: "photo-1553244469-c2ec6973e0a4",
    rating: 4.2,
    description: "Gateway to Africa with a vibrant food scene and naturally gluten-free Moroccan staples",
    restaurants: tangierRestaurants,
    intro:
      "Tangier sits where the Mediterranean meets the Atlantic, offering a lively mix of Moroccan cafés, seafood grills and international restaurants. Coeliacs can enjoy tagines, fresh fish and salads while watching the port traffic.",
  },
];

export const getMoroccoCity = (slug?: string) => moroccoCities.find((c) => c.slug === slug);
