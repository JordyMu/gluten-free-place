import type { Restaurant } from "@/data/capeTownRestaurants";

export const bordeauxRestaurants: Restaurant[] = [
  {
    "name": "BAG Bakery Art Gallery",
    "slug": "bag-bakery-art-gallery",
    "address": "24 Rue du Mirail, 33000 Bordeaux, France",
    "city": "Bordeaux",
    "country": "France",
    "hours": "Tue-Sat: 9:00AM - 6:00PM",
    "phone": "+33 5 56 33 10 54",
    "website": "www.bagbordeaux.fr",
    "directionsUrl": "https://maps.google.com/?q=24+Rue+du+Mirail+33000+Bordeaux",
    "specialty": "French • Bakery • Art",
    "overview": "Unique bakery-gallery concept with gluten-free options.",
    "menuHighlights": [
      "🥐 Pastries",
      "🎨 Art Exhibition",
      "☕ Coffee"
    ],
    "proTip": "Combines art and baking beautifully!",
    "icon": "🍽️",
    "featured": false,
    "cuisineTypes": [
      "French",
      "Bakery",
      "Art"
    ],
    "celiacSafe": "protocols-in-place",
    "menuType": "mixed-menu",
    "rating": 4.6,
    "reviewCount": 145,
    "lat": 0,
    "lng": 0,
    "venueType": "restaurant",
    photos: [
      { url: "/images/almond-butterfly-bistro-1.webp", caption: "Bistro Interior" },
      { url: "/images/almond-butterfly-bistro-2.webp", caption: "GF Pastries" },
      { url: "/images/almond-butterfly-bistro-3.webp", caption: "Almond Croissant" },
      { url: "/images/almond-butterfly-bistro-4.webp", caption: "Pasta Dish" },
      { url: "/images/almond-butterfly-bistro-5.webp", caption: "Fresh Salad" },
      { url: "/images/almond-butterfly-bistro-6.webp", caption: "GF Cake" },
      { url: "/images/almond-butterfly-bistro-7.webp", caption: "Bakery Display" },
      { url: "/images/almond-butterfly-bistro-8.webp", caption: "Dessert Platter" },
    ],
    "celiacSafetyScore": 8
  },
  ...([
    { name: "Glut", slug: "glut-bordeaux", specialty: "Gluten-Free • Bakery • Café", overview: "Dedicated gluten-free bakery and café with fresh bread, pastries and lunch options.", cuisines: ["Bakery", "Café", "Gluten-Free"], menuType: "fully-gluten-free", celiacSafe: "dedicated-facility", rating: 4.7, reviewCount: 320, score: 9, featured: true, address: "Bordeaux, France" },
    { name: "MAMACAM", slug: "mamacam-bordeaux", specialty: "Street Food • Healthy Bowls", overview: "Healthy street food spot serving bowls and quick bites with gluten-free options.", cuisines: ["Street Food", "Healthy"], menuType: "mixed-menu", celiacSafe: "protocols-in-place", rating: 4.5, reviewCount: 180, score: 7, featured: false, address: "Bordeaux, France" },
    { name: "Paulette", slug: "paulette-bordeaux", specialty: "Crêperie • Galettes", overview: "Traditional Breton crêperie with naturally gluten-free buckwheat galettes.", cuisines: ["Crêperie", "French"], menuType: "mixed-menu", celiacSafe: "protocols-in-place", rating: 4.5, reviewCount: 220, score: 7, featured: false, address: "Bordeaux, France" },
    { name: "La Crêperie", slug: "la-creperie-bordeaux", specialty: "Crêperie • Buckwheat Galettes", overview: "Classic crêperie offering savory buckwheat galettes (naturally GF) and sweet crêpes.", cuisines: ["Crêperie", "French"], menuType: "mixed-menu", celiacSafe: "protocols-in-place", rating: 4.4, reviewCount: 150, score: 6, featured: false, address: "Bordeaux, France" },
    { name: "Crêperie La Belle Suzette | Bordeaux", slug: "creperie-la-belle-suzette-bordeaux", specialty: "Crêperie • Galettes", overview: "Charming crêperie known for its buckwheat galettes — a naturally GF Breton staple.", cuisines: ["Crêperie", "French"], menuType: "mixed-menu", celiacSafe: "protocols-in-place", rating: 4.6, reviewCount: 260, score: 7, featured: true, address: "Bordeaux, France" },
    { name: "Nom d'Une Crêpe", slug: "nom-dune-crepe-bordeaux", specialty: "Crêperie • Galettes", overview: "Cozy crêperie offering fresh galettes made with 100% buckwheat flour.", cuisines: ["Crêperie", "French"], menuType: "mixed-menu", celiacSafe: "protocols-in-place", rating: 4.5, reviewCount: 140, score: 7, featured: false, address: "Bordeaux, France" },
    { name: "La Parenthèse", slug: "la-parenthese-bordeaux", specialty: "Café • Healthy • Brunch", overview: "Friendly café with healthy brunch options including gluten-free choices.", cuisines: ["Café", "Brunch", "Healthy"], menuType: "mixed-menu", celiacSafe: "protocols-in-place", rating: 4.5, reviewCount: 130, score: 6, featured: false, address: "Bordeaux, France" },
    { name: "Marché des Capucins", slug: "marche-des-capucins-bordeaux", specialty: "Market • Local Produce", overview: "Iconic Bordeaux food market — fresh produce, oysters, cheese and naturally GF finds.", cuisines: ["Market", "Local"], menuType: "mixed-menu", celiacSafe: "protocols-in-place", rating: 4.6, reviewCount: 3200, score: 7, featured: true, address: "Place des Capucins, 33800 Bordeaux, France" },
    { name: "NATURALIA", slug: "naturalia-bordeaux", specialty: "Organic • Health Food Store", overview: "Organic shop with a wide gluten-free range — pantry essentials, snacks and fresh items.", cuisines: ["Organic", "Health Food"], menuType: "mixed-menu", celiacSafe: "protocols-in-place", rating: 4.4, reviewCount: 410, score: 7, featured: false, address: "Bordeaux, France" },
    { name: "100% Organic Bakery", slug: "100-organic-bakery-bordeaux", specialty: "Organic Bakery", overview: "Organic bakery offering some gluten-free breads and pastries.", cuisines: ["Bakery", "Organic"], menuType: "mixed-menu", celiacSafe: "protocols-in-place", rating: 4.5, reviewCount: 180, score: 7, featured: false, address: "Bordeaux, France" },
    { name: "Michel MaBelle 100% Vegan", slug: "michel-mabelle-vegan-bordeaux", specialty: "Vegan • Healthy", overview: "100% vegan kitchen with gluten-free options for plant-based diners.", cuisines: ["Vegan", "Healthy"], menuType: "mixed-menu", celiacSafe: "protocols-in-place", rating: 4.6, reviewCount: 210, score: 7, featured: false, address: "Bordeaux, France" },
    { name: "Les Preuves Du Contraire", slug: "les-preuves-du-contraire-bordeaux", specialty: "Bistro • Modern French", overview: "Modern bistro with creative dishes and gluten-free accommodations.", cuisines: ["French", "Bistro"], menuType: "mixed-menu", celiacSafe: "protocols-in-place", rating: 4.6, reviewCount: 240, score: 7, featured: false, address: "Bordeaux, France" },
  ] as const).map((r) => ({
    name: r.name,
    slug: r.slug,
    address: r.address,
    city: "Bordeaux",
    country: "France",
    hours: "",
    phone: "",
    website: "",
    directionsUrl: `https://maps.google.com/?q=${encodeURIComponent(r.name + " Bordeaux")}`,
    specialty: r.specialty,
    overview: r.overview,
    menuHighlights: [],
    proTip: "",
    icon: "🍽️",
    featured: r.featured,
    cuisineTypes: [...r.cuisines],
    celiacSafe: r.celiacSafe as Restaurant["celiacSafe"],
    menuType: r.menuType as Restaurant["menuType"],
    rating: r.rating,
    reviewCount: r.reviewCount,
    lat: 0,
    lng: 0,
    venueType: "street-food" as const,
    photos: [],
    celiacSafetyScore: r.score,
  })),
];

const STREET_FOOD_SLUGS = [
  "glut-bordeaux",
  "mamacam-bordeaux",
  "paulette-bordeaux",
  "la-creperie-bordeaux",
  "creperie-la-belle-suzette-bordeaux",
  "nom-dune-crepe-bordeaux",
  "la-parenthese-bordeaux",
  "marche-des-capucins-bordeaux",
  "naturalia-bordeaux",
  "100-organic-bakery-bordeaux",
  "michel-mabelle-vegan-bordeaux",
  "les-preuves-du-contraire-bordeaux",
  "bag-bakery-art-gallery",
];

export const BORDEAUX_STREET_FOOD_SLUGS = STREET_FOOD_SLUGS;

export const getRestaurantBySlug = (slug: string) =>
  bordeauxRestaurants.find((r) => r.slug === slug);
