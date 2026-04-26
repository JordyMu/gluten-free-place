import type { Restaurant } from "@/data/capeTownRestaurants";

export const strasbourgRestaurants: Restaurant[] = [
  {
    "name": "L'Eden Libre de Gluten",
    "slug": "l-eden-libre-de-gluten",
    "address": "15 Pl. du Temple Neuf, 67000 Strasbourg, France",
    "city": "Strasbourg",
    "country": "France",
    "hours": "Tue-Sat: 9:00AM - 6:00PM",
    "phone": "+33 3 88 33 10 52",
    "website": "www.ledenlibredegluten.fr",
    "directionsUrl": "https://maps.google.com/?q=15+Pl+du+Temple+Neuf+67000+Strasbourg",
    "specialty": "French • Bakery",
    "overview": "Dedicated gluten-free bakery and café in the heart of Strasbourg.",
    "menuHighlights": [
      "🥐 GF Pastries",
      "🥖 Fresh Bread",
      "🍰 Cakes",
      "🍽️ Light Lunch"
    ],
    "proTip": "A must-visit for celiacs exploring Alsace!",
    "icon": "🥖",
    "featured": true,
    "cuisineTypes": [
      "French",
      "Bakery"
    ],
    "celiacSafe": "dedicated-facility",
    "menuType": "fully-gluten-free",
    "rating": 4.8,
    "reviewCount": 267,
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
    "celiacSafetyScore": 10
  },
  {
    "name": "Harmonie Bowl and Juice",
    "slug": "harmonie-bowl-and-juice",
    "address": "5 Rue St Étienne, 67000 Strasbourg, France",
    "city": "Strasbourg",
    "country": "France",
    "hours": "Mon-Sat: 8:00AM - 6:00PM",
    "phone": "+33 3 88 33 10 53",
    "website": "www.harmoniebowl.fr",
    "directionsUrl": "https://maps.google.com/?q=5+Rue+St+Etienne+67000+Strasbourg",
    "specialty": "Healthy • Café",
    "overview": "Health-focused café with açaí bowls and fresh juices.",
    "menuHighlights": [
      "🥣 Açaí Bowls",
      "🥤 Fresh Juices",
      "🥗 Healthy Options"
    ],
    "proTip": "Most bowls are naturally gluten-free!",
    "icon": "🍽️",
    "featured": false,
    "cuisineTypes": [
      "Healthy",
      "Café"
    ],
    "celiacSafe": "protocols-in-place",
    "menuType": "mixed-menu",
    "rating": 4.5,
    "reviewCount": 134,
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
  strasbourgRestaurants.find((r) => r.slug === slug);
