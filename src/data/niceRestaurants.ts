import type { Restaurant } from "@/data/capeTownRestaurants";

export const niceRestaurants: Restaurant[] = [
  {
    "name": "Amour Patisserie Vegetale",
    "slug": "amour-patisserie-vegetale",
    "address": "2 Rue Foncet, 06000 Nice, France",
    "city": "Nice",
    "country": "France",
    "hours": "Tue-Sat: 10:00AM - 6:00PM",
    "phone": "+33 4 93 33 10 70",
    "website": "www.amourpatisserie.fr",
    "directionsUrl": "https://maps.google.com/?q=2+Rue+Foncet+06000+Nice",
    "specialty": "Vegan • Patisserie",
    "overview": "Vegan patisserie with many gluten-free options on the Riviera.",
    "menuHighlights": [
      "🌱 Vegan Cakes",
      "🍰 GF Options",
      "☕ Specialty Coffee"
    ],
    "proTip": "Perfect for vegan celiacs!",
    "icon": "🍽️",
    "featured": false,
    "cuisineTypes": [
      "Vegan",
      "Patisserie"
    ],
    "celiacSafe": "protocols-in-place",
    "menuType": "mixed-menu",
    "rating": 4.6,
    "reviewCount": 156,
    "lat": 0,
    "lng": 0,
    "venueType": "restaurant",
    "photos": [],
    "celiacSafetyScore": 8
  }
];

export const getRestaurantBySlug = (slug: string) =>
  niceRestaurants.find((r) => r.slug === slug);
