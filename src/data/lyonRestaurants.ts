import type { Restaurant } from "@/data/capeTownRestaurants";

export const lyonRestaurants: Restaurant[] = [
  {
    "name": "Copains Lyon",
    "slug": "copains-lyon",
    "address": "80 Rue du Président Édouard Herriot, 69002 Lyon, France",
    "city": "Lyon",
    "country": "France",
    "hours": "Mon-Sat: 8:00AM - 7:00PM",
    "phone": "+33 4 72 33 10 60",
    "website": "www.copainsparis.com",
    "directionsUrl": "https://maps.google.com/?q=80+Rue+du+President+Edouard+Herriot+69002+Lyon",
    "specialty": "French • Bakery",
    "overview": "Lyon location of the beloved Parisian gluten-free bakery chain.",
    "menuHighlights": [
      "🥐 Croissants",
      "🥖 Baguettes",
      "🍰 French Pastries"
    ],
    "proTip": "Bringing Paris-quality GF baking to Lyon!",
    "icon": "🥖",
    "featured": true,
    "cuisineTypes": [
      "French",
      "Bakery"
    ],
    "celiacSafe": "dedicated-facility",
    "menuType": "fully-gluten-free",
    "rating": 4.7,
    "reviewCount": 234,
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
    "name": "Les Gasteliers",
    "slug": "les-gasteliers",
    "address": "123 Rue de Sèze, 69006 Lyon, France",
    "city": "Lyon",
    "country": "France",
    "hours": "Tue-Sat: 8:00AM - 7:00PM",
    "phone": "+33 4 72 33 10 61",
    "website": "www.lesgasteliers.fr",
    "directionsUrl": "https://maps.google.com/?q=123+Rue+de+Seze+69006+Lyon",
    "specialty": "French • Bakery",
    "overview": "Dedicated gluten-free bakery in Lyon's 6th arrondissement.",
    "menuHighlights": [
      "🥖 Artisan Bread",
      "🥐 Pastries",
      "🍰 Custom Cakes"
    ],
    "proTip": "Local Lyon favorite for gluten-free baking!",
    "icon": "🥖",
    "featured": false,
    "cuisineTypes": [
      "French",
      "Bakery"
    ],
    "celiacSafe": "dedicated-facility",
    "menuType": "fully-gluten-free",
    "rating": 4.6,
    "reviewCount": 189,
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
  }
];

export const getRestaurantBySlug = (slug: string) =>
  lyonRestaurants.find((r) => r.slug === slug);
