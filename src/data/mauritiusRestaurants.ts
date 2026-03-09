export interface MauritiusRestaurant {
  name: string;
  address: string;
  city: string;
  region: string;
  mapUrl: string;
}

export const mauritiusRestaurants: MauritiusRestaurant[] = [
  // Grand Baie & North
  { name: "Maison des Crêpes", address: "Racket Road Chemin du Grand Bazaar, Grand Baie", city: "Grand Baie", region: "North", mapUrl: "https://www.google.com/maps/search/Maison+des+Crêpes+Grand+Baie+Mauritius" },
  { name: "Luigi's Italian Pizzeria & Pasta Bar", address: "Royal Road, B13, Grand Baie", city: "Grand Baie", region: "North", mapUrl: "https://www.google.com/maps/search/Luigi's+Italian+Pizzeria+Grand+Baie+Mauritius" },
  { name: "Fynbos Meeting Place", address: "Chem. Vingt Pieds, Grand Baie 30513", city: "Grand Baie", region: "North", mapUrl: "https://www.google.com/maps/search/Fynbos+Meeting+Place+Grand+Baie+Mauritius" },
  { name: "Pomodoro Pizzeria Trattoria", address: "LA CROISETTE, Grand Baie", city: "Grand Baie", region: "North", mapUrl: "https://www.google.com/maps/search/Pomodoro+Pizzeria+Trattoria+Grand+Baie+Mauritius" },
  { name: "Wang Thai", address: "1st floor, Beach House Complex, Coastal Road, Grand Baie", city: "Grand Baie", region: "North", mapUrl: "https://www.google.com/maps/search/Wang+Thai+Grand+Baie+Mauritius" },
  { name: "Mam Gouz", address: "Route Cotière, Complexe Dodo La Lodge, Grand Baie", city: "Grand Baie", region: "North", mapUrl: "https://www.google.com/maps/search/Mam+Gouz+Grand+Baie+Mauritius" },
  { name: "LUX*", address: "Coastal Road, Grand Baie 30510", city: "Grand Baie", region: "North", mapUrl: "https://www.google.com/maps/search/LUX+Grand+Baie+Mauritius" },
  { name: "LUX Grand Gaube", address: "Coastal Road, Grand Gaube 30617", city: "Grand Gaube", region: "North", mapUrl: "https://www.google.com/maps/search/LUX+Grand+Gaube+Mauritius" },
  { name: "Coin de Mire Attitude Hotel", address: "Coastal Road, Cap Malheureux", city: "Cap Malheureux", region: "North", mapUrl: "https://www.google.com/maps/search/Coin+de+Mire+Attitude+Hotel+Cap+Malheureux+Mauritius" },
  { name: "The Westin Turtle Bay Resort & Spa", address: "Balaclava Turtle Bay, Balaclava 21307", city: "Balaclava", region: "North", mapUrl: "https://www.google.com/maps/search/Westin+Turtle+Bay+Balaclava+Mauritius" },
  { name: "The Ravenala Attitude Hotel", address: "Turtle Bay, Balaclava", city: "Balaclava", region: "North", mapUrl: "https://www.google.com/maps/search/Ravenala+Attitude+Hotel+Balaclava+Mauritius" },
  { name: "Le Méditerranée", address: "Trou-aux-Biches", city: "Trou-aux-Biches", region: "North", mapUrl: "https://www.google.com/maps/search/Le+Mediterranee+Trou+aux+Biches+Mauritius" },
  { name: "Le Skipper Restaurant", address: "Royal Road, Trou-aux-Biches", city: "Trou-aux-Biches", region: "North", mapUrl: "https://www.google.com/maps/search/Le+Skipper+Restaurant+Trou+aux+Biches+Mauritius" },
  { name: "Wonders Beach Boutique Hotel", address: "Mont Choisy, Trou-aux-Biches", city: "Trou-aux-Biches", region: "North", mapUrl: "https://www.google.com/maps/search/Wonders+Beach+Boutique+Hotel+Trou+aux+Biches+Mauritius" },
  { name: "CHEZ FLIPPER 2k22", address: "B38, Trou-aux-Biches", city: "Trou-aux-Biches", region: "North", mapUrl: "https://www.google.com/maps/search/Chez+Flipper+2k22+Trou+aux+Biches+Mauritius" },
  { name: "Sindra Snack", address: "Pointe aux Biches", city: "Pointe aux Biches", region: "North", mapUrl: "https://www.google.com/maps/search/Sindra+Snack+Pointe+aux+Biches+Mauritius" },

  // West Coast
  { name: "Zub Express", address: "286 Coastal Rd, Flic en Flac", city: "Flic en Flac", region: "West", mapUrl: "https://www.google.com/maps/search/Zub+Express+Flic+en+Flac+Mauritius" },
  { name: "Salt & Lemon Restaurant", address: "Verger Avenue, Flic en Flac 90502", city: "Flic en Flac", region: "West", mapUrl: "https://www.google.com/maps/search/Salt+Lemon+Restaurant+Flic+en+Flac+Mauritius" },
  { name: "Ocean Vagabond", address: "La Gaulette", city: "La Gaulette", region: "West", mapUrl: "https://www.google.com/maps/search/Ocean+Vagabond+La+Gaulette+Mauritius" },
  { name: "Enso Restaurant & Lounge Bar", address: "1st Floor, Supermarket Centre, La Gaulette 91102", city: "La Gaulette", region: "West", mapUrl: "https://www.google.com/maps/search/Enso+Restaurant+Lounge+Bar+La+Gaulette+Mauritius" },
  { name: "Vanilla Village", address: "Route Royale, Black River", city: "Black River", region: "West", mapUrl: "https://www.google.com/maps/search/Vanilla+Village+Black+River+Mauritius" },
  { name: "La Flamme Kreol", address: "La Mivoie, Royal Road, Grande Riviere Noire", city: "Grande Riviere Noire", region: "West", mapUrl: "https://www.google.com/maps/search/La+Flamme+Kreol+Grande+Riviere+Noire+Mauritius" },
  { name: "Il Padrino Italian Restaurant", address: "34 L'Estuaire La Balise Marina, Black River 90605", city: "Black River", region: "West", mapUrl: "https://www.google.com/maps/search/Il+Padrino+Italian+Restaurant+Black+River+Mauritius" },
  { name: "Happy Rajah", address: "A3, Tamarin", city: "Tamarin", region: "West", mapUrl: "https://www.google.com/maps/search/Happy+Rajah+Tamarin+Mauritius" },
  { name: "Wapalapam Island Eatery", address: "Centre Commercial de L'Harmonie, Le Morne Brabant 91202", city: "Le Morne", region: "West", mapUrl: "https://www.google.com/maps/search/Wapalapam+Island+Eatery+Le+Morne+Mauritius" },
  { name: "Lakaz Chamarel", address: "Chamarel", city: "Chamarel", region: "West", mapUrl: "https://www.google.com/maps/search/Lakaz+Chamarel+Mauritius" },

  // East Coast
  { name: "SALT of Palmar", address: "Coastal Road, Palmar Belle Mare, Quatre Cocos 41604", city: "Belle Mare", region: "East", mapUrl: "https://www.google.com/maps/search/SALT+of+Palmar+Belle+Mare+Mauritius" },
  { name: "Friday Attitude Hotel", address: "B59, Royal Road Belle Mare, Trou d'Eau Douce", city: "Trou d'Eau Douce", region: "East", mapUrl: "https://www.google.com/maps/search/Friday+Attitude+Hotel+Trou+d'Eau+Douce+Mauritius" },
  { name: "LUX Belle Mare", address: "Coastal Road, Quatre Cocos", city: "Belle Mare", region: "East", mapUrl: "https://www.google.com/maps/search/LUX+Belle+Mare+Mauritius" },
  { name: "Amari By Vineet", address: "Quatre Cocos", city: "Quatre Cocos", region: "East", mapUrl: "https://www.google.com/maps/search/Amari+By+Vineet+Quatre+Cocos+Mauritius" },
  { name: "Green Island Beach Restaurant", address: "B59 Coastal Road, La Pelouse, Trou d'Eau Douce 42207", city: "Trou d'Eau Douce", region: "East", mapUrl: "https://www.google.com/maps/search/Green+Island+Beach+Restaurant+Trou+d'Eau+Douce+Mauritius" },

  // Central
  { name: "The Yellow Chilli", address: "Tribeca Food Hall, Trianon", city: "Trianon", region: "Central", mapUrl: "https://www.google.com/maps/search/The+Yellow+Chilli+Trianon+Mauritius" },
  { name: "Smokey Joe", address: "Tribeca Mall, Trianon 72261", city: "Trianon", region: "Central", mapUrl: "https://www.google.com/maps/search/Smokey+Joe+Trianon+Mauritius" },
  { name: "Café LUX* Riserva", address: "Tribeca Mall, Trianon 72261", city: "Trianon", region: "Central", mapUrl: "https://www.google.com/maps/search/Cafe+LUX+Riserva+Trianon+Mauritius" },
  { name: "Nando's Phoenix", address: "Phoenix Commercial Centre, Independance St, Vacoas-Phœnix 73417", city: "Phoenix", region: "Central", mapUrl: "https://www.google.com/maps/search/Nandos+Phoenix+Mauritius" },
  { name: "Escale Créole", address: "B46 Bois Cheri Rd, Moka", city: "Moka", region: "Central", mapUrl: "https://www.google.com/maps/search/Escale+Creole+Moka+Mauritius" },
  { name: "ZAYTOON", address: "Quatre Bornes", city: "Quatre Bornes", region: "Central", mapUrl: "https://www.google.com/maps/search/ZAYTOON+Quatre+Bornes+Mauritius" },
  { name: "Island Babe Healthy Food", address: "Nigel Street, Les Flamants Roads", city: "Central Mauritius", region: "Central", mapUrl: "https://www.google.com/maps/search/Island+Babe+Healthy+Food+Mauritius" },

  // South
  { name: "Show Restaurant, Tamassa Bel Ombre Resort", address: "Coastal Road, Bel Ombre 61002", city: "Bel Ombre", region: "South", mapUrl: "https://www.google.com/maps/search/Show+Restaurant+Tamassa+Bel+Ombre+Mauritius" },
  { name: "Sunset Snack", address: "Rue Dr Wiehe, Souillac", city: "Souillac", region: "South", mapUrl: "https://www.google.com/maps/search/Sunset+Snack+Souillac+Mauritius" },
  { name: "L'Escale Mauricienne Restaurant", address: "New Terminal Building, Plaine Magnien", city: "Plaine Magnien", region: "South", mapUrl: "https://www.google.com/maps/search/L'Escale+Mauricienne+Restaurant+Plaine+Magnien+Mauritius" },
  { name: "Panarottis Pizza Express", address: "Plaisance Shopping Village, Hospital Road, Rose Belle 51829", city: "Rose Belle", region: "South", mapUrl: "https://www.google.com/maps/search/Panarottis+Pizza+Express+Rose+Belle+Mauritius" },
  { name: "Taste of Freedom", address: "Mahebourg", city: "Mahebourg", region: "South", mapUrl: "https://www.google.com/maps/search/Taste+of+Freedom+Mahebourg+Mauritius" },
];

export const regionColors: Record<string, { bg: string; text: string; border: string }> = {
  North: { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
  West: { bg: "bg-teal-50", text: "text-teal-700", border: "border-teal-200" },
  East: { bg: "bg-cyan-50", text: "text-cyan-700", border: "border-cyan-200" },
  Central: { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200" },
  South: { bg: "bg-rose-50", text: "text-rose-700", border: "border-rose-200" },
};
