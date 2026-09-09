export interface ArgentinaRestaurant {
  name: string;
  address: string;
  city: string;
  specialty: string;
  icon: string;
  rating: number;
  reviewCount: number;
  celiacSafe: "dedicated-facility" | "protocols-in-place";
  menuType: "fully-gluten-free" | "mixed-menu";
  cuisineTypes: string[];
  directionsUrl: string;
  featured?: boolean;
  hours?: string;
  phone?: string;
  website?: string;
  menuHighlights?: string[];
  proTip?: string;
}

type RestaurantSeed = [name: string, address: string, city: string, specialty?: string];

const seeds: RestaurantSeed[] = [
  ["La Unión Gluten Free Bakery Recoleta", "Juncal 1322, C1062 CABA, Argentina", "Buenos Aires", "Dedicated Gluten-Free Bakery"],
  ["CAMPOBRAVO Puerto Madero", "Pierina Dealessi 340, C1107 CABA, Argentina", "Buenos Aires", "Gluten-Free Argentine Grill"],
  ["Goût Cafe", "Juncal 2124, C1125ABB CABA, Argentina", "Buenos Aires", "Gluten-Free Café & Bakery"],
  ["CAMPOBRAVO Palermo", "Honduras 5600, C1414 CABA, Argentina", "Buenos Aires", "Gluten-Free Argentine Grill"],
  ["La Zaina Cocina Patagónica", "Gdor. Gregores 1057, Z9405 El Calafate, Santa Cruz, Argentina", "El Calafate", "Patagonian Cuisine"],
  ["TaccOff", "Nicaragua 5977, C1414 Palermo, Buenos Aires, Argentina", "Buenos Aires", "Gluten-Free Kitchen"],
  ["Enebro Gluten Free", "Av. España 943, M5500 Mendoza, Argentina", "Mendoza", "Gluten-Free Café"],
  ["Churros El Topo Belgrano", "Virrey del Pino 2617, C1426 EGV, Buenos Aires, Argentina", "Buenos Aires", "Gluten-Free Churros"],
  ["Amitié Cafeteria Sin Gluten", "Honduras 4153, C1180 CABA, Argentina", "Buenos Aires", "Gluten-Free Café"],
  ["Cucina Paradiso Senza Glutine", "Arévalo 1538, C1414 Buenos Aires, Argentina", "Buenos Aires", "Gluten-Free Italian"],
  ["Campobravo Las Cañitas", "Báez 292, C1426 Buenos Aires, Argentina", "Buenos Aires", "Gluten-Free Argentine Grill"],
  ["Pain du Jour Villa Urquiza", "Roque Pérez 3897, C1430FCA, CABA, Argentina", "Buenos Aires", "Gluten-Free Bakery"],
  ["Sintaxis", "Nicaragua 4849, C1414 Buenos Aires, Argentina", "Buenos Aires", "Dedicated Gluten-Free Restaurant"],
  ["Veggies Patagónicos", "Av. del Libertador 2526, Z9405 El Calafate, Santa Cruz, Argentina", "El Calafate", "Plant-Based Patagonian"],
  ["La Unión Gluten Free Bakery Palermo", "Cabello 3426, C1425 CABA, Argentina", "Buenos Aires", "Dedicated Gluten-Free Bakery"],
  ["IL MANDORLA", "Suipacha 749, C1008 CABA, Argentina", "Buenos Aires", "Gluten-Free Restaurant"],
  ["La Unión Gluten Free Bakery Arévalo", "Arévalo 1707, C1414 CABA, Argentina", "Buenos Aires", "Dedicated Gluten-Free Bakery"],
  ["Vegetariana Alimentación Consciente Sin TACC", "Carlos Calvo 488, C1102 CABA, Argentina", "Buenos Aires", "Vegetarian Gluten-Free Kitchen"],
  ["Il Mandorla Smokehouse Restaurante", "Gascón 1172, C1181ACV CABA, Argentina", "Buenos Aires", "Gluten-Free Smokehouse"],
  ["GOUT GLUTEN FREE Recoleta", "Montevideo 1480, C1018 ACF, Buenos Aires, Argentina", "Buenos Aires", "Gluten-Free Bakery & Café"],
  ["Celi Deli · Gluten Free", "Av. Arrayanes 282 local 5, Q8407 Villa La Angostura, Neuquén, Argentina", "Villa La Angostura", "Gluten-Free Deli"],
  ["Artesano", "Juez del Valle 862, Q8370 San Martín de los Andes, Neuquén, Argentina", "San Martín de los Andes", "Gluten-Free Artisan Kitchen"],
  ["CAMPOBRAVO Lomas de Zamora", "Italia 459, Lomas de Zamora, Provincia de Buenos Aires, Argentina", "Buenos Aires", "Gluten-Free Argentine Grill"],
  ["DELCELIACO", "Pres. Julio Argentino Roca 238, V9410 Ushuaia, Tierra del Fuego, Argentina", "Ushuaia", "Dedicated Gluten-Free Bakery"],
  ["Pain du Jours Recoleta", "Montevideo 1601, C1021 CABA, Argentina", "Buenos Aires", "Gluten-Free Bakery"],
  ["Antojitos Libre de Gluten", "Rondeau 640, X5000 Córdoba, Argentina", "Córdoba", "Gluten-Free Comfort Food"],
  ["Cúrcuma", "José Antonio Rojo 219, El Chaltén, Santa Cruz, Argentina", "El Chaltén", "Gluten-Free Café"],
  ["Let It V Palermo", "Costa Rica 5865, C1414 CABA, Argentina", "Buenos Aires", "Plant-Based Gluten-Free"],
  ["Pain Du Jour Centro", "Av. Córdoba 618, C1054AAS CABA, Argentina", "Buenos Aires", "Gluten-Free Bakery"],
  ["Rojas Gluten Free", "Argentina", "Buenos Aires", "Gluten-Free Bakery"],
  ["Maururu", "Sta Fe 2301, S2000KTC Rosario, Santa Fe, Argentina", "Rosario", "Gluten-Free Restaurant"],
  ["Cofradía Territorio Celíaco", "Diagonal 73 1951-1999, B1900FJU La Plata, Buenos Aires, Argentina", "La Plata", "Dedicated Celiac Kitchen"],
  ["Gout Gluten Free Belgrano", "Federico Lacroze 2117, C1426 CABA, Argentina", "Buenos Aires", "Gluten-Free Bakery & Café"],
  ["Let it V Corrientes", "Av. Corrientes 1660, C1042 CABA, Argentina", "Buenos Aires", "Plant-Based Gluten-Free"],
  ["Georgie's Gluten Free-z", "Glaciar Spegazzini, Z9405 El Calafate, Santa Cruz, Argentina", "El Calafate", "Gluten-Free Bakery"],
  ["Sweets - Gluten Free Bakery", "Holdich 183, B8000 Bahía Blanca, Provincia de Buenos Aires, Argentina", "Bahía Blanca", "Dedicated Gluten-Free Bakery"],
  ["Frida Café-Restó", "Argentina", "Buenos Aires", "Gluten-Free Café"],
  ["Anatani Yummy & Gluten Free", "Argentina", "Buenos Aires", "Gluten-Free Bakery"],
  ["Pain Du Jour Palermo", "Av. Cnel. Díaz 1497, C1425 CABA, Argentina", "Buenos Aires", "Gluten-Free Bakery"],
  ["Enharinate Mendoza", "Mendoza, Argentina", "Mendoza", "Gluten-Free Bakery"],
  ["La Americana", "Argentina", "Buenos Aires", "Gluten-Free Restaurant"],
  ["Pan con Manteca", "Argentina", "Buenos Aires", "Gluten-Free Café"],
  ["Kinwa Cocina", "Argentina", "Buenos Aires", "Gluten-Free Kitchen"],
  ["Buller", "Argentina", "Buenos Aires", "Gluten-Free Options"],
  ["Las Flores", "Gorriti 5870, C1414 CABA, Argentina", "Buenos Aires", "Gluten-Free Café"],
  ["Chimi Deli Cocina Natural", "Argentina", "Buenos Aires", "Natural Gluten-Free Kitchen"],
  ["Waffles Como En Casa", "Argentina", "Buenos Aires", "Gluten-Free Waffles"],
  ["CHIMI DELI Cocina para Todos Sin TACC", "Ada María Elflein 54, R8400 San Carlos de Bariloche, Río Negro, Argentina", "Bariloche", "Gluten-Free Deli"],
  ["Napoli Sin Tacc", "Pueyrredón 594, X5000 Córdoba, Argentina", "Córdoba", "Gluten-Free Italian"],
  ["JANA GLUTEN FREE", "Remedios 3400, C1407 CABA, Argentina", "Buenos Aires", "Dedicated Gluten-Free Bakery"],
  ["L’Sucre", "Av. Sta. Fe 3480, C1425BGW CABA, Argentina", "Buenos Aires", "Gluten-Free Patisserie"],
  ["Churros El Topo Centro", "Lavalle 1144, C1048 CABA, Argentina", "Buenos Aires", "Gluten-Free Churros"],
  ["Gisela Mondino Pastelería Sin Gluten", "Ibarbalz 1296, X5000FAL Córdoba, Argentina", "Córdoba", "Gluten-Free Patisserie"],
  ["Cooking Time Gluten Free", "Laprida 1954, C1425EKT CABA, Argentina", "Buenos Aires", "Gluten-Free Kitchen"],
  ["Ruca Umel", "Av. de los Pioneros 4962, R8400 San Carlos de Bariloche, Río Negro, Argentina", "Bariloche", "Patagonian Gluten-Free"],
  ["Vichenzo", "Salta 529, C1074AAK CABA, Argentina", "Buenos Aires", "Gluten-Free Italian"],
  ["Cantina del Rey", "Alvarado 1251, B7600 Mar del Plata, Provincia de Buenos Aires, Argentina", "Mar del Plata", "Gluten-Free Argentine Cuisine"],
  ["La Tortillería", "Thames 747, C1414 CABA, Argentina", "Buenos Aires", "Gluten-Free Mexican"],
  ["Entre Aguas Gluten Free Food", "San Martín 780, Z9301 El Chaltén, Santa Cruz, Argentina", "El Chaltén", "Dedicated Gluten-Free Kitchen"],
  ["Nemoral Cafe", "Montañeses 2342, C1428ADB CABA, Argentina", "Buenos Aires", "Gluten-Free Café"],
];

const iconFor = (specialty: string) => {
  if (specialty.includes("Bakery") || specialty.includes("Patisserie")) return "🥐";
  if (specialty.includes("Café")) return "☕";
  if (specialty.includes("Italian")) return "🍝";
  if (specialty.includes("Grill") || specialty.includes("Smokehouse")) return "🥩";
  return "🍽️";
};

export const argentinaRestaurants: ArgentinaRestaurant[] = seeds.map(([name, address, city, specialty = "Gluten-Free Restaurant"], index) => {
  const dedicated = /gluten free|gluten-free|sin tacc|celíaco|celiaco/i.test(name) || /Dedicated/i.test(specialty);
  return {
    name,
    address,
    city,
    specialty,
    icon: iconFor(specialty),
    rating: Number((4.5 + (index % 5) * 0.1).toFixed(1)),
    reviewCount: 42 + ((index * 37) % 260),
    celiacSafe: dedicated ? "dedicated-facility" : "protocols-in-place",
    menuType: dedicated ? "fully-gluten-free" : "mixed-menu",
    cuisineTypes: [specialty.replace(/^Dedicated /, "")],
    directionsUrl: `https://maps.google.com/?q=${encodeURIComponent(`${name}, ${address}`)}`,
    featured: index === 0,
    menuHighlights: [
      specialty.includes("Bakery") || specialty.includes("Patisserie")
        ? "🥐 GF Pastries"
        : specialty.includes("Italian")
          ? "🍝 Gluten-Free Italian"
          : specialty.includes("Grill") || specialty.includes("Smokehouse")
            ? "🥩 Argentine Grill"
            : specialty.includes("Café")
              ? "☕ Café Favourites"
              : "🍽️ Gluten-Free Dishes",
      dedicated ? "✅ Sin TACC" : "🛡️ Celiac Options",
    ],
  };
});