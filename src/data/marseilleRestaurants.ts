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
    "photos": [],
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
    "photos": [],
    "celiacSafetyScore": 8
  }
];

export const getRestaurantBySlug = (slug: string) =>
  marseilleRestaurants.find((r) => r.slug === slug);
