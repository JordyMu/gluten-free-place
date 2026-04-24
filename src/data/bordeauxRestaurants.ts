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
    "photos": [],
    "celiacSafetyScore": 8
  }
];

export const getRestaurantBySlug = (slug: string) =>
  bordeauxRestaurants.find((r) => r.slug === slug);
