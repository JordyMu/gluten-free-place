import type { Restaurant } from "@/data/capeTownRestaurants";

export const marseilleRestaurants: Restaurant[] = [
  {
    "name": "La Pépite",
    "slug": "la-pepite",
    "address": "145 Rue Sainte, 13007 Marseille, France",
    "city": "Marseille",
    "country": "France",
    "hours": "Tue-Sat: 9:00AM - 6:00PM",
    "phone": "+33 4 91 33 10 57",
    "website": "www.lapepite-marseille.fr",
    "directionsUrl": "https://maps.google.com/?q=145+Rue+Sainte+13007+Marseille",
    "specialty": "French • Café",
    "overview": "Charming café with excellent gluten-free pastries.",
    "menuHighlights": [
      "☕ Coffee",
      "🍰 GF Pastries",
      "🥗 Light Lunch"
    ],
    "proTip": "Try their famous gluten-free cakes!",
    "icon": "🍽️",
    "featured": false,
    "cuisineTypes": [
      "French",
      "Café"
    ],
    "celiacSafe": "protocols-in-place",
    "menuType": "mixed-menu",
    "rating": 4.6,
    "reviewCount": 178,
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
  {
    "name": "La Pépite Vieux-Port",
    "slug": "la-pepite-vieux-port",
    "address": "2 Place Daviel, 13002 Marseille, France",
    "city": "Marseille",
    "country": "France",
    "hours": "Tue-Sat: 9:00AM - 6:00PM",
    "phone": "+33 4 91 33 10 58",
    "website": "www.lapepite-marseille.fr",
    "directionsUrl": "https://maps.google.com/?q=2+Place+Daviel+13002+Marseille",
    "specialty": "French • Café",
    "overview": "Second location near the historic Vieux-Port.",
    "menuHighlights": [
      "☕ Coffee",
      "🍰 GF Cakes",
      "🥐 Pastries"
    ],
    "proTip": "Great views of the old port!",
    "icon": "🍽️",
    "featured": false,
    "cuisineTypes": [
      "French",
      "Café"
    ],
    "celiacSafe": "protocols-in-place",
    "menuType": "mixed-menu",
    "rating": 4.5,
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
  }
];

export const getRestaurantBySlug = (slug: string) =>
  marseilleRestaurants.find((r) => r.slug === slug);
