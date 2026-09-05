export interface DERestaurant {
  name: string;
  address: string;
  hours: string;
  phone: string;
  website: string;
  directionsUrl: string;
  specialty: string;
  overview: string;
  menuHighlights: string[];
  proTip: string;
  icon: string;
  featured: boolean;
  cuisineTypes: string[];
  celiacSafe: "protocols-in-place" | "dedicated-facility";
  menuType: "mixed-menu" | "fully-gluten-free";
  rating: number;
  reviewCount: number;
  nearby?: { label: string; name: string; href?: string }[];
}

export interface DECity {
  name: string;
  slug: string;
  restaurants: DERestaurant[];
}

export const deSlug = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const mapsUrl = (name: string, address: string) =>
  `https://maps.google.com/?q=${encodeURIComponent(`${name}, ${address}`)}`;

export const germanyCities: DECity[] = [
  {
    name: "Berlin",
    slug: "berlin",
    restaurants: [
      {
        name: "AERA (Rosenthaler Str.)",
        address: "Rosenthaler Str. 72, 10119 Berlin",
        hours: "Mon-Sun: 12:00PM – 10:00PM",
        phone: "",
        website: "",
        directionsUrl: mapsUrl("AERA", "Rosenthaler Str. 72, 10119 Berlin"),
        specialty: "Gluten-Free Pizza & Pasta",
        overview: "Mitte favourite serving gluten-free pizza and pasta with careful kitchen separation.",
        menuHighlights: ["🍕 GF Pizza", "🍝 GF Pasta", "🥗 Fresh Salads"],
        proTip: "Weekend evenings fill fast — book ahead for the Rosenthaler Str. location.",
        icon: "🍕",
        featured: true,
        cuisineTypes: ["Italian", "Pizza"],
        celiacSafe: "protocols-in-place",
        menuType: "mixed-menu",
        rating: 4.7,
        reviewCount: 214,
        nearby: [
          { label: "Bakery", name: "" },
          { label: "Coffee Shop", name: "" },
          { label: "Grocery store", name: "" },
        ],
      },
      {
        name: "Oshione",
        address: "Katzbachstraße 25, 10965 Berlin",
        hours: "Tue-Sun: 12:00PM – 9:00PM",
        phone: "",
        website: "",
        directionsUrl: mapsUrl("Oshione", "Katzbachstraße 25, 10965 Berlin"),
        specialty: "Gluten-Free Asian Kitchen",
        overview: "Kreuzberg spot with clearly marked gluten-free dishes and allergy-aware staff.",
        menuHighlights: ["🍜 GF Noodles", "🍚 Rice Bowls", "🥟 GF Dumplings"],
        proTip: "Confirm the soy sauce used — ask for the gluten-free version.",
        icon: "🍜",
        featured: false,
        cuisineTypes: ["Asian", "Noodles"],
        celiacSafe: "protocols-in-place",
        menuType: "mixed-menu",
        rating: 4.6,
        reviewCount: 96,
        nearby: [
          { label: "Bakery", name: "" },
          { label: "Coffee Shop", name: "" },
          { label: "Grocery store", name: "" },
        ],
      },
      {
        name: "Trattoria Senza",
        address: "Hannoversche Str. 1, 10115 Berlin",
        hours: "Mon-Sat: 12:00PM – 10:00PM",
        phone: "",
        website: "",
        directionsUrl: mapsUrl("Trattoria Senza", "Hannoversche Str. 1, 10115 Berlin"),
        specialty: "100% Gluten-Free Trattoria",
        overview: "Fully gluten-free Italian trattoria in Mitte — pizza, pasta and dolci all safe for celiacs.",
        menuHighlights: ["🍕 GF Pizza", "🍝 Fresh GF Pasta", "🍰 GF Tiramisu"],
        proTip: "The entire kitchen is gluten-free, so no cross-contamination worries.",
        icon: "🍝",
        featured: true,
        cuisineTypes: ["Italian", "Pizza", "Gluten-Free"],
        celiacSafe: "dedicated-facility",
        menuType: "fully-gluten-free",
        rating: 4.9,
        reviewCount: 178,
        nearby: [
          { label: "Bakery", name: "" },
          { label: "Coffee Shop", name: "" },
          { label: "Grocery store", name: "" },
        ],
      },
      {
        name: "Pretty Hill",
        address: "Naumannstraße 54, 10829 Berlin",
        hours: "Wed-Sun: 10:00AM – 6:00PM",
        phone: "",
        website: "",
        directionsUrl: mapsUrl("Pretty Hill", "Naumannstraße 54, 10829 Berlin"),
        specialty: "Café & Brunch",
        overview: "Schöneberg café with gluten-free cakes and brunch plates prepared with care.",
        menuHighlights: ["🥞 GF Pancakes", "🍰 GF Cakes", "☕ Specialty Coffee"],
        proTip: "Go early on weekends — the gluten-free bakes sell out.",
        icon: "☕",
        featured: false,
        cuisineTypes: ["Café", "Brunch"],
        celiacSafe: "protocols-in-place",
        menuType: "mixed-menu",
        rating: 4.6,
        reviewCount: 132,
        nearby: [
          { label: "Bakery", name: "" },
          { label: "Coffee Shop", name: "" },
          { label: "Grocery store", name: "" },
        ],
      },
      {
        name: "AERA (Fasanenstraße)",
        address: "Fasanenstraße 74, 10719 Berlin",
        hours: "Mon-Sun: 12:00PM – 10:00PM",
        phone: "",
        website: "",
        directionsUrl: mapsUrl("AERA", "Fasanenstraße 74, 10719 Berlin"),
        specialty: "Gluten-Free Pizza & Pasta",
        overview: "Charlottenburg branch of AERA with the same gluten-free pizza and pasta menu.",
        menuHighlights: ["🍕 GF Pizza", "🍝 GF Pasta", "🍮 GF Desserts"],
        proTip: "Handy stop after shopping on Kurfürstendamm.",
        icon: "🍕",
        featured: false,
        cuisineTypes: ["Italian", "Pizza"],
        celiacSafe: "protocols-in-place",
        menuType: "mixed-menu",
        rating: 4.6,
        reviewCount: 121,
        nearby: [
          { label: "Bakery", name: "" },
          { label: "Coffee Shop", name: "" },
          { label: "Grocery store", name: "" },
        ],
      },
      {
        name: "Sinless Cakes Cafe",
        address: "Ludwigkirchstraße 5, 10719 Berlin",
        hours: "Tue-Sun: 10:00AM – 7:00PM",
        phone: "",
        website: "",
        directionsUrl: mapsUrl("Sinless Cakes Cafe", "Ludwigkirchstraße 5, 10719 Berlin"),
        specialty: "Gluten-Free Cakes & Patisserie",
        overview: "Dedicated gluten-free cake café near Ludwigkirchplatz with daily-changing bakes.",
        menuHighlights: ["🍰 GF Cakes", "🧁 GF Cupcakes", "☕ Coffee & Tea"],
        proTip: "Order a whole cake in advance for celebrations.",
        icon: "🍰",
        featured: true,
        cuisineTypes: ["Bakery", "Café", "Gluten-Free"],
        celiacSafe: "dedicated-facility",
        menuType: "fully-gluten-free",
        rating: 4.8,
        reviewCount: 143,
        nearby: [
          { label: "Bakery", name: "" },
          { label: "Coffee Shop", name: "" },
          { label: "Grocery store", name: "" },
        ],
      },
      {
        name: "Tapiocaria",
        address: "Samariterstraße 34A, 10247 Berlin",
        hours: "Tue-Sun: 12:00PM – 8:00PM",
        phone: "",
        website: "",
        directionsUrl: mapsUrl("Tapiocaria", "Samariterstraße 34A, 10247 Berlin"),
        specialty: "Naturally Gluten-Free Brazilian",
        overview: "Friedrichshain spot built around tapioca crêpes and pão de queijo — naturally gluten-free.",
        menuHighlights: ["🫓 Tapioca Crêpes", "🧆 Pão de Queijo", "🥤 Brazilian Juices"],
        proTip: "Tapioca is naturally gluten-free — a safe, filling lunch option.",
        icon: "🫓",
        featured: false,
        cuisineTypes: ["Brazilian", "Street Food", "Gluten-Free"],
        celiacSafe: "dedicated-facility",
        menuType: "fully-gluten-free",
        rating: 4.7,
        reviewCount: 88,
        nearby: [
          { label: "Bakery", name: "" },
          { label: "Coffee Shop", name: "" },
          { label: "Grocery store", name: "" },
        ],
      },
      {
        name: "EasyPeasy",
        address: "Wichertstraße 33a, 10439 Berlin",
        hours: "Wed-Sun: 9:00AM – 5:00PM",
        phone: "",
        website: "",
        directionsUrl: mapsUrl("EasyPeasy", "Wichertstraße 33a, 10439 Berlin"),
        specialty: "Gluten-Free Café & Bakes",
        overview: "Prenzlauer Berg café with gluten-free breakfast plates, cakes and bread.",
        menuHighlights: ["🍞 GF Bread", "🥐 GF Pastries", "🍳 GF Breakfast"],
        proTip: "Ask which bakes are made in the dedicated gluten-free batch.",
        icon: "🥐",
        featured: false,
        cuisineTypes: ["Café", "Bakery"],
        celiacSafe: "protocols-in-place",
        menuType: "mixed-menu",
        rating: 4.5,
        reviewCount: 74,
        nearby: [
          { label: "Bakery", name: "" },
          { label: "Coffee Shop", name: "" },
          { label: "Grocery store", name: "" },
        ],
      },
      {
        name: "Jute Bäckerei",
        address: "Schönhauser Allee 52A, 10437 Berlin",
        hours: "Mon-Sat: 8:00AM – 6:00PM",
        phone: "",
        website: "",
        directionsUrl: mapsUrl("Jute Bäckerei", "Schönhauser Allee 52A, 10437 Berlin"),
        specialty: "Bakery with Gluten-Free Range",
        overview: "Neighbourhood bakery on Schönhauser Allee stocking gluten-free breads and sweet bakes.",
        menuHighlights: ["🍞 GF Sourdough", "🥨 GF Snacks", "🍪 GF Cookies"],
        proTip: "Call ahead — gluten-free loaves are baked in limited numbers.",
        icon: "🍞",
        featured: false,
        cuisineTypes: ["Bakery"],
        celiacSafe: "protocols-in-place",
        menuType: "mixed-menu",
        rating: 4.4,
        reviewCount: 65,
        nearby: [
          { label: "Bakery", name: "" },
          { label: "Coffee Shop", name: "" },
          { label: "Grocery store", name: "" },
        ],
      },
      {
        name: "El Amigo Taqueria",
        address: "Veteranenstraße 21, 10119 Berlin",
        hours: "Tue-Sun: 12:00PM – 10:00PM",
        phone: "",
        website: "",
        directionsUrl: mapsUrl("El Amigo Taqueria", "Veteranenstraße 21, 10119 Berlin"),
        specialty: "Corn Tortilla Tacos",
        overview: "Mitte taqueria using 100% corn tortillas, making most tacos naturally gluten-free.",
        menuHighlights: ["🌮 Corn Tortilla Tacos", "🥑 Guacamole & Chips", "🌽 Elote"],
        proTip: "Corn tortillas are standard here — confirm the marinades are wheat-free.",
        icon: "🌮",
        featured: false,
        cuisineTypes: ["Mexican", "Street Food"],
        celiacSafe: "protocols-in-place",
        menuType: "mixed-menu",
        rating: 4.6,
        reviewCount: 109,
        nearby: [
          { label: "Bakery", name: "" },
          { label: "Coffee Shop", name: "" },
          { label: "Grocery store", name: "" },
        ],
      },
    ],
  },
];
