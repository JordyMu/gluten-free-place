import { RestaurantDetailPage } from "@/components/restaurants/RestaurantDetailPage";

const restaurant = {
  name: "Grosso Napoletano Senza Glutine",
  slug: "grosso-napoletano-senza-glutine",
  address: "Carrer d'Enric Granados 9, 08007 Barcelona, Spain",
  city: "Barcelona",
  country: "Spain",
  hours: "Daily: 12:00 PM – 12:00 AM",
  phone: "+34 933 789 012",
  website: "www.grossonapoletano.com",
  directionsUrl:
    "https://www.google.com/maps/search/?api=1&query=Grosso+Napoletano+Carrer+d%27Enric+Granados+9+Barcelona",
  specialty: "Authentic Neapolitan Pizza — 100% Gluten-Free",
  overview:
    "Grosso Napoletano Senza Glutine in Barcelona is an authentic Neapolitan pizzeria offering a fully gluten-free menu in a dedicated kitchen — completely safe for celiacs. Famous for its certified gluten-free Neapolitan pizza, traditional Italian toppings and even gluten-free Italian beer, it has become a top destination for locals and travelers managing celiac disease.",
  menuHighlights: [
    "🍕 Gluten-Free Neapolitan Pizza (Margherita, Diavola, Quattro Formaggi)",
    "🍝 Gluten-Free Pasta dishes",
    "🍰 Tiramisu (Gluten-Free)",
    "🍺 Gluten-Free Italian Beer",
    "🥗 Vegetarian, Vegan and Dairy-Free options",
  ],
  proTip: "Their pizza is celiac-safe — arrive early on weekends, it fills up fast!",
  icon: "🍕",
  celiacSafe: "dedicated-facility" as const,
  menuType: "fully-gluten-free" as const,
  rating: 4.9,
  reviewCount: 567,
  lat: 41.3917,
  lng: 2.1556,
  venueType: "restaurant" as const,
  photos: [
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800",
    "https://images.unsplash.com/photo-1571066811602-716837d681de?w=800",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800",
    "https://images.unsplash.com/photo-1593504049359-74330189a345?w=800",
  ],
  menuNotes: [
    "Dedicated gluten-free kitchen — no shared surfaces or fryers",
    "AIC (Associazione Italiana Celiachia) protocols followed",
    "Certified gluten-free flour blends",
    "Gluten-free Italian beer and desserts available",
  ],
  staffKnowledgeScore: 5,
  celiacSafetyScore: 10,
};

const GrossoNapoletanoSenzaGlutinePage = () => (
  <RestaurantDetailPage
    restaurant={restaurant}
    backLink="/spain/barcelona"
    backLabel="Back to Barcelona"
  />
);

export default GrossoNapoletanoSenzaGlutinePage;
