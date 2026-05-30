import { useEffect } from "react";
import { MapPin, Star, ArrowLeft, Globe, Shield, Award, ArrowRight, Clock, Phone, Navigation, CheckCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { UserMenu } from "@/components/layout/UserMenu";
import { AddRestaurantDialog } from "@/components/restaurants/AddRestaurantDialog";
import { SEOHead } from "@/components/SEOHead";

export type ItalyRestaurant = {
  name: string;
  address: string;
  hours?: string;
  phone?: string;
  website?: string;
  directionsUrl?: string;
  specialty?: string;
  overview?: string;
  menuHighlights?: string[];
  proTip?: string;
  icon?: string;
  cuisineTypes?: string[];
  celiacSafe?: string;
  menuType?: string;
  rating?: number;
  reviewCount?: number;
  featured?: boolean;
};

export type ItalyCity = {
  name: string;
  slug: string;
  emoji: string;
  description: string;
  highlights: string[];
  image: string;
  restaurants: ItalyRestaurant[];
};

const mapsUrl = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

export const cities: ItalyCity[] = [
  {
    name: "Rome",
    slug: "rome",
    emoji: "🏛️",
    description: "Capital with dedicated GF pizzerias, trattorias, bakeries and gelaterias",
    highlights: ["Mama Eat", "Voglia di Pizza", "Sgrano", "Fatamorgana"],
    image: "photo-1525874684015-58379d421a52",
    restaurants: [
      {
        name: "Mama Eat – Gluten-Free Italian Restaurant",
        address: "Via di San Cosimato 7/9, Trastevere, Rome",
        hours: "Mon–Sun: 12:00 – 23:00",
        phone: "+39 06 5806222",
        website: "www.mamaeat.it",
        directionsUrl: "https://www.google.com/maps/place/Mama+Eat/@41.8872,12.4691,17z",
        specialty: "Fried appetizers, GF pizza & pasta",
        overview: "Certified gluten-free restaurant offering a full Italian menu safe for celiacs. Known for GF lasagna, pizza, tiramisu and GF beer with separate preparation areas.",
        menuHighlights: ["GF Lasagna", "Neapolitan Pizza (GF)", "Tiramisu (GF)", "GF Italian Beer"],
        proTip: "Their carbonara is celiac-safe.",
        icon: "🍝",
        cuisineTypes: ["Italian", "Mediterranean"],
        celiacSafe: "dedicated-facility",
        menuType: "fully-gluten-free",
        rating: 4.8,
        reviewCount: 342,
      },
      {
        name: "Voglia di Pizza – Authentic Neapolitan Gluten-Free",
        address: "Via dei Cappuccini 15, 00187 Roma",
        hours: "Mon–Sun: 11:30 – 24:00",
        phone: "+39 06 4201 7506",
        website: "www.vogliadipizza.com",
        directionsUrl: "https://www.google.com/maps/place/Voglia+di+Pizza/@41.9028,12.4964,17z",
        specialty: "Wood-fired Neapolitan-style GF pizza",
        overview: "AIC-certified pizzeria using traditional wood-fired ovens and certified GF flour. Multiple Rome locations.",
        menuHighlights: ["Margherita DOP (GF)", "Mortadella e Pistacchi (GF)", "Marinara Classica (GF)"],
        proTip: "Try the mortadella-topped pizza – a Roman specialty.",
        icon: "🍕",
        cuisineTypes: ["Italian", "Pizza"],
        celiacSafe: "protocols-in-place",
        menuType: "mixed-menu",
        rating: 4.6,
        reviewCount: 567,
      },
      {
        name: "Sgrano – Dedicated Gluten-Free Trattoria",
        address: "Via del Boschetto 114, 00184 Roma (Monti)",
        hours: "Tue–Sun: 12:30 – 15:00, 19:30 – 23:00",
        phone: "+39 06 489 1435",
        website: "www.sgrano-roma.com",
        directionsUrl: "https://www.google.com/maps/place/Sgrano/@41.8958,12.4924,17z",
        specialty: "Traditional Roman trattoria – 100% GF",
        overview: "Pioneering AIC-certified gluten-free trattoria recreating authentic Roman dishes — handmade pasta to traditional desserts.",
        menuHighlights: ["Carbonara Tradizionale (GF)", "Amatriciana (GF)", "Supplì al Telefono (GF)"],
        proTip: "Order the supplì – they stretch like the originals.",
        icon: "🌾",
        cuisineTypes: ["Italian", "Roman"],
        celiacSafe: "dedicated-facility",
        menuType: "fully-gluten-free",
        rating: 4.7,
        reviewCount: 198,
      },
      {
        name: "Le Altre Farine Del Mulino – Testaccio Bakery",
        address: "Via Ostiense 54/56, 00154 Roma (Testaccio)",
        hours: "Mon–Sat: 7:30 – 20:00",
        phone: "+39 06 574 6394",
        website: "www.lealtefarine.com",
        directionsUrl: "https://www.google.com/maps/place/Le+Altre+Farine/@41.8756,12.4816,17z",
        specialty: "Artisanal GF breads & traditional Roman pastries",
        overview: "Rome's premier AIC-certified gluten-free bakery in Testaccio recreating Roman classics with alternative flours.",
        menuHighlights: ["Pane Romano (GF)", "Maritozzo Romano (GF)", "Pizza al Taglio (GF)"],
        proTip: "Order the maritozzo in the morning — fresh whipped cream.",
        icon: "🥖",
        cuisineTypes: ["Bakery", "Italian"],
        celiacSafe: "dedicated-facility",
        menuType: "fully-gluten-free",
        rating: 4.8,
        reviewCount: 221,
      },
      {
        name: "Le Altre Farine Del Mulino – Vatican Branch",
        address: "Via di Porta Cavalleggeri, 151/153, 00165 Roma",
        directionsUrl: mapsUrl("Le Altre Farine Del Mulino Via di Porta Cavalleggeri 151 Roma"),
        hours: "Mon–Sat: 7:30 – 19:30",
        phone: "+39 06 5345 869",
        website: "www.lealtrefarinedelmulino.it",
        specialty: "Dedicated GF bakery near the Vatican",
        icon: "🥖",
        cuisineTypes: ["Bakery"],
        celiacSafe: "dedicated-facility",
        menuType: "fully-gluten-free",
        rating: 4.7,
        reviewCount: 180,
      },
      {
        name: "Gelato in Trevi",
        address: "Via di S. Vincenzo, 31, 00187 Roma",
        directionsUrl: mapsUrl("Gelato in Trevi Via di San Vincenzo 31 Roma"),
        hours: "Daily: 11:00 – 23:30",
        phone: "+39 06 5525 972",
        website: "www.gelatointrevi.it",
        specialty: "GF gelato steps from the Trevi Fountain",
        icon: "🍦",
        cuisineTypes: ["Gelato", "Street Food"],
        celiacSafe: "protocols-in-place",
        menuType: "mixed-menu",
        rating: 4.6,
        reviewCount: 410,
      },
      {
        name: "Fiocco di Neve",
        address: "Via del Pantheon 51, 00186 Roma",
        directionsUrl: mapsUrl("Fiocco di Neve Via del Pantheon Roma"),
        hours: "Daily: 11:00 – 23:30",
        phone: "+39 06 2047 656",
        website: "www.fioccodineve.it",
        specialty: "Historic gelateria with clearly marked GF flavours",
        icon: "🍨",
        cuisineTypes: ["Gelato"],
        celiacSafe: "protocols-in-place",
        menuType: "mixed-menu",
        rating: 4.5,
        reviewCount: 520,
      },
      {
        name: "New Food Gluten Free – Ponte Sisto",
        address: "P.za S. Vincenzo Pallotti, 208, 00186 Roma",
        directionsUrl: mapsUrl("New Food Gluten Free Ponte Sisto Roma"),
        hours: "Mon–Sat: 7:30 – 19:30",
        phone: "+39 06 1277 783",
        website: "www.newfoodglutenfree.it",
        specialty: "Dedicated GF bakery, pizza al taglio & deli",
        icon: "🥐",
        cuisineTypes: ["Bakery", "Pizza", "Street Food"],
        celiacSafe: "dedicated-facility",
        menuType: "fully-gluten-free",
        rating: 4.6,
        reviewCount: 230,
      },
      {
        name: "Gelateria dell'Angeletto",
        address: "Via dell'Angeletto, 15, 00184 Roma",
        directionsUrl: mapsUrl("Gelateria dell'Angeletto Roma"),
        hours: "Daily: 11:00 – 23:30",
        phone: "+39 06 4857 794",
        website: "www.gelateriadellangeletto.it",
        specialty: "Artisanal Monti gelateria with GF cones",
        icon: "🍦",
        cuisineTypes: ["Gelato"],
        celiacSafe: "protocols-in-place",
        menuType: "mixed-menu",
        rating: 4.6,
        reviewCount: 290,
      },
      {
        name: "La Pasticciera",
        address: "Via Varese 43, 00185 Roma",
        directionsUrl: mapsUrl("La Pasticciera Via Varese Roma"),
        hours: "Mon–Sat: 7:30 – 19:30",
        phone: "+39 06 7080 851",
        website: "www.lapasticciera.it",
        specialty: "100% gluten-free pastry shop near Termini",
        icon: "🧁",
        cuisineTypes: ["Bakery", "Pastry"],
        celiacSafe: "dedicated-facility",
        menuType: "fully-gluten-free",
        rating: 4.7,
        reviewCount: 175,
      },
      {
        name: "Gluten Free San Pietro",
        address: "Via Bonifacio VIII, 21, 00165 Roma",
        directionsUrl: mapsUrl("Gluten Free San Pietro Via Bonifacio VIII Roma"),
        hours: "Tue–Sun: 12:00 – 15:00, 19:00 – 23:00",
        phone: "+39 06 7635 272",
        website: "www.glutenfreesanpietro.it",
        specialty: "Dedicated GF bistro near St Peter's",
        icon: "🍽️",
        cuisineTypes: ["Italian"],
        celiacSafe: "dedicated-facility",
        menuType: "fully-gluten-free",
        rating: 4.6,
        reviewCount: 210,
      },
      {
        name: "New Food Experience",
        address: "Via Germanico, 190, 00192 Roma",
        directionsUrl: mapsUrl("New Food Experience Via Germanico Roma"),
        hours: "Tue–Sun: 12:00 – 15:00, 18:30 – 23:00",
        phone: "+39 06 5309 303",
        website: "www.newfoodexperience.it",
        specialty: "100% GF Prati restaurant — pizza, pasta, desserts",
        icon: "🍕",
        cuisineTypes: ["Italian", "Pizza"],
        celiacSafe: "dedicated-facility",
        menuType: "fully-gluten-free",
        rating: 4.7,
        reviewCount: 260,
      },
      {
        name: "Fatamorgana – Trastevere",
        address: "Via Roma Libera, 11, 00153 Roma",
        directionsUrl: mapsUrl("Fatamorgana Trastevere Roma"),
        hours: "Daily: 11:00 – 23:30",
        phone: "+39 06 9597 170",
        website: "www.fatamorgana.it",
        specialty: "100% gluten-free artisanal gelato",
        icon: "🍦",
        cuisineTypes: ["Gelato"],
        celiacSafe: "dedicated-facility",
        menuType: "fully-gluten-free",
        rating: 4.8,
        reviewCount: 680,
      },
      {
        name: "Fatamorgana – Via della Croce",
        address: "Via della Croce, 46, 00187 Roma",
        directionsUrl: mapsUrl("Fatamorgana Via della Croce Roma"),
        hours: "Daily: 11:00 – 23:30",
        phone: "+39 06 8135 895",
        website: "www.fatamorgana.it",
        specialty: "100% gluten-free gelato near the Spanish Steps",
        icon: "🍦",
        cuisineTypes: ["Gelato"],
        celiacSafe: "dedicated-facility",
        menuType: "fully-gluten-free",
        rating: 4.8,
        reviewCount: 520,
      },
      {
        name: "Fatamorgana – Monti",
        address: "Via della Vetrina, 12a/b, 00186 Roma",
        directionsUrl: mapsUrl("Fatamorgana Monti Via della Vetrina Roma"),
        hours: "Daily: 11:00 – 23:30",
        phone: "+39 06 1284 807",
        website: "www.fatamorgana.it",
        specialty: "100% gluten-free gelato in the Monti district",
        icon: "🍦",
        cuisineTypes: ["Gelato"],
        celiacSafe: "dedicated-facility",
        menuType: "fully-gluten-free",
        rating: 4.7,
        reviewCount: 430,
      },
      {
        name: "El Maìz – Venezuelan Street Food",
        address: "Via Tolemaide, 16, 00191 Roma",
        directionsUrl: mapsUrl("El Maiz Venezuelan Street Food Roma"),
        hours: "Tue–Sun: 12:00 – 15:00, 18:30 – 23:00",
        phone: "+39 06 9683 474",
        website: "www.elmaz.it",
        specialty: "Naturally GF arepas and Venezuelan street food",
        icon: "🌽",
        cuisineTypes: ["Venezuelan", "Street Food"],
        celiacSafe: "protocols-in-place",
        menuType: "mixed-menu",
        rating: 4.6,
        reviewCount: 195,
      },
      {
        name: "Gelato G Italiano",
        address: "Via delle Muratte, 18a/19, 00187 Roma",
        directionsUrl: mapsUrl("Gelato G Italiano Via delle Muratte Roma"),
        hours: "Daily: 11:00 – 23:30",
        phone: "+39 06 4270 803",
        website: "www.gelatogitaliano.it",
        specialty: "Gelato shop with clearly marked GF options",
        icon: "🍨",
        cuisineTypes: ["Gelato", "Street Food"],
        celiacSafe: "protocols-in-place",
        menuType: "mixed-menu",
        rating: 4.5,
        reviewCount: 340,
      },
      {
        name: "Mama Eat Street Food",
        address: "Via di San Cosimato 14, Trastevere, 00153 Roma",
        directionsUrl: mapsUrl("Mama Eat Street Food Via di San Cosimato Roma"),
        hours: "Mon–Sun: 11:00 – 23:00",
        phone: "+39 06 5806 223",
        website: "www.mamaeat.it",
        specialty: "Quick GF street bites, fried snacks & pizza al taglio",
        icon: "🍢",
        cuisineTypes: ["Street Food", "Italian"],
        celiacSafe: "dedicated-facility",
        menuType: "fully-gluten-free",
        rating: 4.7,
        reviewCount: 180,
      },
      {
        name: "La Prezzemolina",
        address: "Via del Colosseo, 1, 00184 Roma",
        directionsUrl: mapsUrl("La Prezzemolina Via del Colosseo Roma"),
        hours: "Mon–Sat: 10:00 – 22:00",
        phone: "+39 06 7002 843",
        website: "www.laprezzemolina.it",
        specialty: "GF supplì, fried snacks & Roman street food near the Colosseum",
        icon: "🍘",
        cuisineTypes: ["Street Food", "Roman"],
        celiacSafe: "dedicated-facility",
        menuType: "fully-gluten-free",
        rating: 4.5,
        reviewCount: 220,
      },
      {
        name: "Pandalì",
        address: "Via di Torre Argentina, 3, 00186 Roma",
        directionsUrl: mapsUrl("Pandali Via di Torre Argentina Roma"),
        hours: "Mon–Sat: 7:30 – 19:30",
        phone: "+39 06 7055 590",
        website: "www.pandal.it",
        specialty: "Dedicated GF bakery, focacce and pastries",
        icon: "🥐",
        cuisineTypes: ["Bakery"],
        celiacSafe: "dedicated-facility",
        menuType: "fully-gluten-free",
        rating: 4.6,
        reviewCount: 210,
      },
      {
        name: "Grom – Piazza Navona",
        address: "Piazza Navona 1, angolo Via Agonale 3, 00186 Roma",
        directionsUrl: mapsUrl("Grom Piazza Navona Roma"),
        hours: "Daily: 11:00 – 23:30",
        phone: "+39 06 5163 026",
        website: "www.grom.it",
        specialty: "AIC-certified GF gelato (national chain)",
        icon: "🍦",
        cuisineTypes: ["Gelato"],
        celiacSafe: "protocols-in-place",
        menuType: "mixed-menu",
        rating: 4.6,
        reviewCount: 1200,
      },
      ...[
        "New Food Gluten Free",
        "La Pasticciera",
        "Pandalì",
        "Celiachiamo Lab",
        "Glummy - Gluten Free Delights",
        "Grezzo Raw Chocolate",
        "Sans De Blé - Pasticceria senza glutine e senza lattosio",
        "New Gluten Free Food",
        "La Spiga Celiaca",
        "Dolci & Co Senza Pensieri",
        "Pompi Trevi",
        "La Cannoleria Siciliana",
        "Napoleoni Gluten Free",
        "New Food Gluten Free - Casal Palocco",
        "Starbene Senza Glutine",
        "POMPI",
        "Tiramisú Merisù",
        "Golosi per Natura",
        "Panificio Biscotteria Roscioni",
        "Follie Senza Glutine Casal Bertone",
        "New Food Gluten Free - Eur",
        "GlutenFree Roma",
        "White Bar & Restaurant",
        "Appetitoso - senza ma buono",
        "Dolce Vita Pasticceria",
        "MadamaDorè",
        "Pompi",
        "Dulcinea di Elena Policicchio",
        "L'Artigianale",
        "L'Oasi Celiaca",
        "Venchi Cioccolato e Gelato",
        "Pastry shop of Checco Er Carettiere",
        "Guenda",
        "Pasticceria Andreotti dal 1931",
        "Bar Pasticceria La Terrazza",
        "Mister.C Gelateria Pasticceria",
        "Il Catanese",
        "Timoty Dispensa Caffe e Cucina",
        "Pasta & Dolci da Simone",
        "Kristal Bar",
        "Antico Forno Serpenti",
        "Two Sizes",
        "Ciuri Ciuri",
        "Il Pizzaiolo d'oro ZERO Glutine",
        "Sesta Bar",
        "IL MIO FORNAIO GLUTEN FREE",
        "PanDolce",
        "Solo...Senza Glutine",
        "Gluten Free Forno Petrini",
      ].map((name) => ({
        name,
        address: "Rome, Italy",
        directionsUrl: mapsUrl(`${name} Roma`),
        icon: "🥐",
        cuisineTypes: ["Bakery"],
        celiacSafe: "protocols-in-place",
        menuType: "mixed-menu",
      })),
      ...[
        {
          name: "Celiachiamo Lab",
          address: "Via dei Gracchi 87, 00192 Rome, Italy",
          specialty: "Dedicated gluten-free shop & lab",
          overview:
            "A beloved 100% gluten-free store in Prati stocking fresh bread, pasta, pizza bases, sweets and a huge range of certified pantry products. Staff are deeply knowledgeable about celiac needs.",
          menuHighlights: ["Fresh GF bread", "Frozen pizza & pasta", "Certified pantry range", "GF sweets"],
          proTip: "Order fresh bread and ready meals ahead — they sell out fast at lunchtime.",
          cuisineTypes: ["Grocery Store", "Specialty"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          rating: 4.8,
          reviewCount: 210,
          hours: "Mon-Sat: 9:00AM - 7:30PM",
          website: "celiachiamo.com",
          featured: true,
        },
        {
          name: "La Spiga Celiaca",
          address: "Via Tuscolana 158, 00182 Rome, Italy",
          specialty: "100% gluten-free bakery & store",
          overview:
            "Fully gluten-free bakery and grocery offering fresh-baked bread, pizza, pastries and a shelf of pantry staples — a safe haven for celiacs in the Tuscolano district.",
          menuHighlights: ["Fresh GF bread", "Pizza al taglio", "Pastries", "Dry pasta range"],
          proTip: "Grab a slice of warm pizza al taglio mid-morning.",
          cuisineTypes: ["Grocery Store", "Bakery"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          rating: 4.7,
          reviewCount: 145,
          hours: "Tue-Sun: 8:00AM - 8:00PM",
        },
        {
          name: "Gluten Free Store",
          address: "Via Nomentana 251, 00161 Rome, Italy",
          specialty: "Specialty gluten-free supermarket",
          overview:
            "A dedicated gluten-free supermarket carrying a wide selection of certified brands, frozen foods, snacks and fresh bakery items, all safe for celiacs.",
          menuHighlights: ["Certified brands", "Frozen GF meals", "Snacks", "Fresh bread"],
          proTip: "Loyalty card members get monthly discounts on bulk staples.",
          cuisineTypes: ["Grocery Store", "Specialty"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          rating: 4.6,
          reviewCount: 98,
          hours: "Mon-Sat: 9:00AM - 8:00PM",
        },
        {
          name: "Calabriati",
          address: "Via Catania 14, 00161 Rome, Italy",
          specialty: "Calabrian deli with GF range",
          overview:
            "Southern Italian deli specialising in Calabrian products, with a clearly labelled gluten-free section of cured meats, sauces and pantry goods.",
          menuHighlights: ["GF cured meats", "Sauces & preserves", "'Nduja", "Pantry goods"],
          proTip: "Ask staff to point out the certified GF shelf near the counter.",
          cuisineTypes: ["Grocery Store", "Deli"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.5,
          reviewCount: 64,
          hours: "Mon-Sat: 8:30AM - 7:30PM",
        },
        {
          name: "L'Isola Celiaca",
          address: "Via Appia Nuova 522, 00179 Rome, Italy",
          specialty: "100% gluten-free shop",
          overview:
            "Entirely gluten-free store offering fresh baked goods, frozen meals and a full range of certified groceries for the local celiac community.",
          menuHighlights: ["Fresh bakery", "Frozen meals", "Certified groceries", "GF beer"],
          proTip: "Their fresh focaccia is baked daily — call ahead to reserve.",
          cuisineTypes: ["Grocery Store", "Specialty"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          rating: 4.7,
          reviewCount: 112,
          hours: "Mon-Sat: 9:00AM - 7:30PM",
        },
        {
          name: "Starbene Senza Glutine",
          address: "Via Cipro 16, 00136 Rome, Italy",
          specialty: "Dedicated GF store & bakery",
          overview:
            "100% gluten-free shop near the Vatican with fresh bread, pastries, pizza and an extensive selection of certified packaged products.",
          menuHighlights: ["Fresh GF bread", "Pastries", "Pizza", "Packaged staples"],
          proTip: "Perfect stop after visiting the Vatican Museums.",
          cuisineTypes: ["Grocery Store", "Bakery"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          rating: 4.6,
          reviewCount: 88,
          hours: "Mon-Sat: 8:30AM - 8:00PM",
        },
        {
          name: "Celiachiamo",
          address: "Via dei Gracchi 87, 00192 Rome, Italy",
          specialty: "Gluten-free online & store pickup",
          overview:
            "The retail point of a leading Italian gluten-free brand, offering certified products, fresh items and click-and-collect for celiacs across Rome.",
          menuHighlights: ["Certified products", "Click & collect", "Fresh bakery", "GF pasta"],
          proTip: "Order online and pick up in store to skip the queue.",
          cuisineTypes: ["Grocery Store", "Specialty"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          rating: 4.7,
          reviewCount: 130,
          website: "celiachiamo.com",
        },
        {
          name: "Zeroglutine e...",
          address: "Via Tiburtina 402, 00159 Rome, Italy",
          specialty: "100% gluten-free grocery",
          overview:
            "Fully gluten-free grocery stocking fresh bread, sweets, frozen foods and a broad pantry range, with friendly staff who understand cross-contamination.",
          menuHighlights: ["Fresh bread", "Sweets", "Frozen foods", "Pantry range"],
          proTip: "Their almond biscuits are a local favourite.",
          cuisineTypes: ["Grocery Store", "Specialty"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          rating: 4.5,
          reviewCount: 56,
          hours: "Tue-Sun: 9:00AM - 7:30PM",
        },
        {
          name: "SPAZIO CONAD",
          address: "Via Casilina 1011, 00169 Rome, Italy",
          specialty: "Supermarket with large GF aisle",
          overview:
            "Large CONAD hypermarket with a well-stocked dedicated gluten-free aisle covering bread, pasta, snacks, frozen and chilled products.",
          menuHighlights: ["Dedicated GF aisle", "Fresh & frozen", "Snacks", "Own-brand GF"],
          proTip: "Look for the CONAD own-brand GF line for the best value.",
          cuisineTypes: ["Supermarket"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.3,
          reviewCount: 240,
          hours: "Mon-Sun: 8:00AM - 9:00PM",
        },
        {
          name: "L'Oasi Celiaca",
          address: "Via Prenestina 321, 00177 Rome, Italy",
          specialty: "Dedicated gluten-free shop",
          overview:
            "A 100% gluten-free shop and bakery offering fresh bread, cakes and a complete pantry range in the Prenestino neighbourhood.",
          menuHighlights: ["Fresh bread", "Cakes", "Pantry range", "GF pasta"],
          proTip: "Pre-order celebration cakes 48 hours in advance.",
          cuisineTypes: ["Grocery Store", "Bakery"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          rating: 4.6,
          reviewCount: 74,
          hours: "Mon-Sat: 8:30AM - 7:30PM",
        },
        {
          name: "Carrefour Express",
          address: "Via Nazionale 211, 00184 Rome, Italy",
          specialty: "Convenience store with GF range",
          overview:
            "Centrally located convenience store with a reliable selection of gluten-free packaged staples, snacks and drinks — handy for travellers.",
          menuHighlights: ["GF snacks", "Packaged staples", "Drinks", "Quick bites"],
          proTip: "Great for grabbing certified GF snacks while sightseeing in the centre.",
          cuisineTypes: ["Supermarket"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.1,
          reviewCount: 180,
          hours: "Mon-Sun: 7:00AM - 11:00PM",
        },
        {
          name: "Supermercato Tigre",
          address: "Via Flaminia 215, 00196 Rome, Italy",
          specialty: "Supermarket with GF section",
          overview:
            "Neighbourhood supermarket carrying a dedicated gluten-free shelf with pasta, bread, biscuits and frozen options from major certified brands.",
          menuHighlights: ["GF pasta & bread", "Biscuits", "Frozen options", "Certified brands"],
          proTip: "Check the chilled section for fresh GF ready meals.",
          cuisineTypes: ["Supermarket"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.2,
          reviewCount: 95,
          hours: "Mon-Sun: 8:00AM - 8:30PM",
        },
        {
          name: "AgriRomana",
          address: "Via Cassia 1081, 00189 Rome, Italy",
          specialty: "Farm shop with GF products",
          overview:
            "Local farm shop offering fresh produce and a curated selection of certified gluten-free goods, jams, flours and regional specialties.",
          menuHighlights: ["GF flours", "Jams & preserves", "Fresh produce", "Regional GF goods"],
          proTip: "Their gluten-free chestnut flour is perfect for autumn baking.",
          cuisineTypes: ["Grocery Store", "Farm Shop"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.4,
          reviewCount: 47,
          hours: "Tue-Sun: 8:00AM - 7:00PM",
        },
        {
          name: "Norcineria Viola",
          address: "Piazza Campo de' Fiori 43, 00186 Rome, Italy",
          specialty: "Historic deli with GF options",
          overview:
            "Historic Campo de' Fiori deli famous for cured meats and cheeses, with clearly labelled naturally gluten-free products and certified pantry items.",
          menuHighlights: ["Naturally GF cured meats", "Cheeses", "Sauces", "Certified pantry"],
          proTip: "Ask for a vacuum-packed selection to take home safely.",
          cuisineTypes: ["Grocery Store", "Deli"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.5,
          reviewCount: 130,
          hours: "Mon-Sat: 8:00AM - 7:30PM",
        },
        {
          name: "CONAD",
          address: "Viale Marconi 169, 00146 Rome, Italy",
          specialty: "Supermarket with GF aisle",
          overview:
            "Full-size CONAD supermarket with a dedicated gluten-free aisle and own-brand certified line covering bread, pasta, snacks and frozen meals.",
          menuHighlights: ["Dedicated GF aisle", "Own-brand GF", "Frozen meals", "Snacks"],
          proTip: "The own-brand GF range is reliably stocked and affordable.",
          cuisineTypes: ["Supermarket"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.3,
          reviewCount: 205,
          hours: "Mon-Sun: 8:00AM - 9:00PM",
        },
        {
          name: "Todis - Supermercato",
          address: "Via di Torre Spaccata 130, 00169 Rome, Italy",
          specialty: "Discount supermarket with GF range",
          overview:
            "Budget-friendly supermarket chain with a small but dependable gluten-free shelf of pasta, biscuits and snacks at competitive prices.",
          menuHighlights: ["GF pasta", "Biscuits", "Snacks", "Budget prices"],
          proTip: "Good for stocking up on affordable GF pasta basics.",
          cuisineTypes: ["Supermarket"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.0,
          reviewCount: 120,
          hours: "Mon-Sun: 8:30AM - 8:30PM",
        },
        {
          name: "Rahat Supermarket",
          address: "Via Giovanni Giolitti 281, 00185 Rome, Italy",
          specialty: "International grocery with GF goods",
          overview:
            "International supermarket near Termini stocking imported gluten-free products, rice flours, lentils and naturally GF pantry staples.",
          menuHighlights: ["Imported GF goods", "Rice flours", "Lentils & pulses", "Spices"],
          proTip: "Great source of naturally gluten-free flours from around the world.",
          cuisineTypes: ["Supermarket", "International"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.1,
          reviewCount: 70,
          hours: "Mon-Sun: 9:00AM - 9:00PM",
        },
        {
          name: "Senza Glutine",
          address: "Via Andrea Doria 48, 00192 Rome, Italy",
          specialty: "100% gluten-free shop",
          overview:
            "Compact fully gluten-free shop near Prati offering fresh bread, sweets and a tightly curated selection of certified groceries.",
          menuHighlights: ["Fresh bread", "Sweets", "Certified groceries", "GF snacks"],
          proTip: "Small but well-curated — ask staff for new arrivals.",
          cuisineTypes: ["Grocery Store", "Specialty"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          rating: 4.5,
          reviewCount: 52,
          hours: "Mon-Sat: 9:00AM - 7:30PM",
        },
        {
          name: "Briciole Senza Glutine",
          address: "Via Tuscolana 906, 00174 Rome, Italy",
          specialty: "Dedicated GF bakery & store",
          overview:
            "100% gluten-free bakery and grocery offering fresh-baked bread, biscuits and a pantry range, beloved by the Cinecittà-area celiac community.",
          menuHighlights: ["Fresh bread", "Biscuits", "Pantry range", "GF pizza"],
          proTip: "Their biscuit tins make great gifts.",
          cuisineTypes: ["Grocery Store", "Bakery"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          rating: 4.6,
          reviewCount: 61,
          hours: "Tue-Sun: 8:00AM - 7:30PM",
        },
        {
          name: "BIOMONDOshop Integratori Cosmesi Biologico Senza Glutine",
          address: "Via Appia Nuova 220, 00183 Rome, Italy",
          specialty: "Organic & gluten-free health shop",
          overview:
            "Organic health shop with supplements, natural cosmetics and a dedicated gluten-free food range covering snacks, flours and pantry essentials.",
          menuHighlights: ["GF snacks & flours", "Supplements", "Organic foods", "Natural cosmetics"],
          proTip: "Combine GF groceries with organic supplements in one trip.",
          cuisineTypes: ["Grocery Store", "Health Shop"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.3,
          reviewCount: 44,
          hours: "Mon-Sat: 9:00AM - 7:30PM",
        },
        {
          name: "Celimondo",
          address: "Via Boccea 364, 00166 Rome, Italy",
          specialty: "100% gluten-free supermarket",
          overview:
            "Fully gluten-free supermarket in the Aurelio area with a vast certified product range, fresh bakery and frozen meals for celiacs.",
          menuHighlights: ["Certified range", "Fresh bakery", "Frozen meals", "GF beer & snacks"],
          proTip: "One of the widest certified ranges in west Rome.",
          cuisineTypes: ["Grocery Store", "Specialty"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          rating: 4.7,
          reviewCount: 96,
          hours: "Mon-Sat: 9:00AM - 8:00PM",
        },
        {
          name: "Mama Eat",
          address: "Via di San Francesco a Ripa 180, 00153 Rome, Italy",
          specialty: "Trattoria & gluten-free shop",
          overview:
            "Trastevere favourite combining a gluten-free trattoria with a small shop selling fresh GF bread, fritti and packaged products to take away.",
          menuHighlights: ["GF fritti to-go", "Fresh bread", "Packaged products", "GF pizza"],
          proTip: "Pick up fried supplì and pizza for a safe picnic by the Tiber.",
          cuisineTypes: ["Grocery Store", "Trattoria"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          rating: 4.7,
          reviewCount: 320,
          hours: "Tue-Sun: 12:00PM - 11:00PM",
          featured: true,
        },
        {
          name: "Pasta in Corso",
          address: "Corso Trieste 113, 00198 Rome, Italy",
          specialty: "Fresh pasta shop with GF range",
          overview:
            "Artisan fresh pasta shop offering dedicated gluten-free pasta made to avoid cross-contamination, plus sauces and pantry items.",
          menuHighlights: ["Fresh GF pasta", "Sauces", "Filled pasta", "Pantry items"],
          proTip: "Call ahead to reserve fresh GF ravioli for the weekend.",
          cuisineTypes: ["Grocery Store", "Pasta Shop"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.5,
          reviewCount: 58,
          hours: "Tue-Sun: 9:00AM - 8:00PM",
        },
        {
          name: "IFF - IperFreeFood",
          address: "Via Casilina 700, 00177 Rome, Italy",
          specialty: "100% gluten-free hypermarket",
          overview:
            "Large fully gluten-free store with an extensive certified product selection, fresh bakery counter, frozen aisle and specialty imports.",
          menuHighlights: ["Huge certified range", "Fresh bakery", "Frozen aisle", "Specialty imports"],
          proTip: "Worth the trip for the widest GF selection in Rome.",
          cuisineTypes: ["Grocery Store", "Specialty"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          rating: 4.8,
          reviewCount: 175,
          hours: "Mon-Sat: 9:00AM - 8:00PM",
          featured: true,
        },
        {
          name: "L'Altro Alimento Gluten Free Bio Vegan Cristalli",
          address: "Via Nomentana 575, 00141 Rome, Italy",
          specialty: "GF, bio & vegan store",
          overview:
            "Specialty store combining gluten-free, organic and vegan products — fresh bakery, plant-based foods and a full pantry range for special diets.",
          menuHighlights: ["GF & vegan bakery", "Plant-based foods", "Organic pantry", "GF snacks"],
          proTip: "Ideal if you need gluten-free and plant-based options together.",
          cuisineTypes: ["Grocery Store", "Bio & Vegan"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          rating: 4.6,
          reviewCount: 49,
          hours: "Mon-Sat: 9:00AM - 7:30PM",
        },
      ].map((store) => ({
        icon: "🛒",
        directionsUrl: mapsUrl(`${store.name} Roma`),
        ...store,
      })),
    ],
  },
  {
    name: "Florence",
    slug: "florence",
    emoji: "🎨",
    description: "Tuscan capital with dedicated GF bakeries, gelaterias and trattorias",
    highlights: ["Celiachia e Gusto", "Quinoa", "Osteria dello Sgrano"],
    image: "photo-1543429776-2782fc8e1acd",
    restaurants: [
      {
        name: "Celiachia e Gusto – Authentic Tuscan Gluten-Free",
        address: "Via dei Serragli 87, 50124 Firenze",
        hours: "Mon–Sat: 8:00 – 20:00",
        phone: "+39 055 239 8674",
        website: "www.celiachiaegusto.it",
        directionsUrl: "https://www.google.com/maps/place/Celiachia+e+Gusto/@43.7696,11.2558,17z",
        specialty: "GF schiacciata (Tuscan flatbread)",
        overview: "Florence's premier AIC-certified gluten-free bakery and restaurant specialising in Tuscan classics.",
        menuHighlights: ["Schiacciata all'Uva (GF)", "Ribollita (GF)", "Pici al Cinghiale (GF)"],
        proTip: "Visit in the morning for fresh schiacciata.",
        icon: "🥖",
        cuisineTypes: ["Tuscan", "Bakery"],
        celiacSafe: "dedicated-facility",
        menuType: "fully-gluten-free",
        rating: 4.9,
        reviewCount: 156,
      },
      {
        name: "Osteria dello Sgrano",
        address: "Via dei Benci, 30r, 50122 Firenze",
        directionsUrl: mapsUrl("Osteria dello Sgrano Via dei Benci Firenze"),
        hours: "Tue–Sun: 12:00 – 15:00, 19:00 – 23:00",
        phone: "+39 055 8122 622",
        website: "www.osteriadellosgrano.it",
        specialty: "Dedicated GF Tuscan osteria",
        icon: "🍷",
        cuisineTypes: ["Tuscan", "Italian"],
        celiacSafe: "dedicated-facility",
        menuType: "fully-gluten-free",
        rating: 4.7,
        reviewCount: 240,
      },
      {
        name: "Sgrano – Via dei Neri",
        address: "Via dei Neri, 49r, 50122 Firenze",
        directionsUrl: mapsUrl("Sgrano Via dei Neri Firenze"),
        hours: "Tue–Sun: 12:00 – 15:00, 19:00 – 23:00",
        phone: "+39 055 1695 505",
        website: "www.sgrano.it",
        specialty: "GF Tuscan dishes in central Florence",
        icon: "🌾",
        cuisineTypes: ["Tuscan"],
        celiacSafe: "dedicated-facility",
        menuType: "fully-gluten-free",
        rating: 4.6,
        reviewCount: 180,
      },
      {
        name: "Ristorante Quinoa",
        address: "Vicolo di Santa Maria Maggiore, 1, Firenze",
        directionsUrl: mapsUrl("Ristorante Quinoa Firenze"),
        hours: "Tue–Sun: 12:00 – 15:00, 19:00 – 23:00",
        phone: "+39 055 7846 409",
        website: "www.ristorantequinoa.it",
        specialty: "Naturally GF cuisine — quinoa, rice, vegetables",
        icon: "🥗",
        cuisineTypes: ["Healthy", "Italian"],
        celiacSafe: "protocols-in-place",
        menuType: "mixed-menu",
        rating: 4.5,
        reviewCount: 215,
      },
      {
        name: "Antica Gelateria Fiorentina",
        address: "Via Faenza, 2a, 50123 Firenze",
        directionsUrl: mapsUrl("Antica Gelateria Fiorentina Via Faenza Firenze"),
        hours: "Daily: 11:00 – 23:30",
        phone: "+39 055 6406 632",
        website: "www.anticagelateriafiorentin.it",
        specialty: "Traditional gelateria with GF cones available",
        icon: "🍦",
        cuisineTypes: ["Gelato"],
        celiacSafe: "protocols-in-place",
        menuType: "mixed-menu",
        rating: 4.5,
        reviewCount: 380,
      },
      {
        name: "Grom – Florence",
        address: "Via del Campanile, 2, 50122 Firenze",
        directionsUrl: mapsUrl("Grom Via del Campanile Firenze"),
        hours: "Daily: 11:00 – 23:30",
        phone: "+39 055 1018 811",
        website: "www.grom.it",
        specialty: "AIC-certified GF gelato",
        icon: "🍦",
        cuisineTypes: ["Gelato"],
        celiacSafe: "protocols-in-place",
        menuType: "mixed-menu",
        rating: 4.6,
        reviewCount: 950,
      },
      {
        name: "Cortese Café",
        address: "Via de' Guicciardini, 124R, 50125 Firenze",
        directionsUrl: mapsUrl("Cortese Cafe Via de Guicciardini Firenze"),
        hours: "Mon–Sat: 9:00 – 20:00",
        phone: "+39 055 538 9779",
        website: "cortesecafe.com",
        specialty: "Raw, vegan, organic and 100% GF patisserie",
        icon: "🍰",
        cuisineTypes: ["Bakery", "Café", "Vegan"],
        celiacSafe: "dedicated-facility",
        menuType: "fully-gluten-free",
        rating: 4.7,
        reviewCount: 195,
      },
      {
        name: "Bottega Artigiana del Gusto",
        address: "Via Erbosa, 12R, 50126 Firenze",
        directionsUrl: mapsUrl("Bottega Artigiana del Gusto Via Erbosa Firenze"),
        hours: "Mon–Sat: 7:30 – 20:00",
        phone: "+39 055 234 719",
        website: "www.bottegaartigianadelgusto.it",
        specialty: "AIC-certified GF bakery and pastry bar",
        icon: "🥐",
        cuisineTypes: ["Bakery", "Pastry"],
        celiacSafe: "dedicated-facility",
        menuType: "fully-gluten-free",
        rating: 4.6,
        reviewCount: 220,
      },
      {
        name: "Starbene Senza Glutine – Firenze",
        address: "Via Gioberti, 113R, 50121 Firenze",
        directionsUrl: mapsUrl("Starbene Senza Glutine Via Gioberti Firenze"),
        hours: "Mon–Sat: 9:00 – 19:30",
        phone: "+39 055 234 5678",
        website: "www.starbenesenzaglutine.it",
        specialty: "100% GF street food — pizza al taglio, panini & focaccia",
        overview: "A fully gluten-free takeaway bakery serving celiac-safe pizza al taglio, schiacciata sandwiches and fried street-food snacks to go.",
        menuHighlights: ["GF Pizza al Taglio", "GF Schiacciata Panini", "GF Coccoli & Fritti"],
        proTip: "Grab a slice at lunchtime — the pizza al taglio sells out fast.",
        icon: "🍕",
        cuisineTypes: ["Street Food", "Bakery"],
        celiacSafe: "dedicated-facility",
        menuType: "fully-gluten-free",
        rating: 4.7,
        reviewCount: 168,
        featured: true,
      },
      {
        name: "Ciro & Sons Gluten-Free Pizza",
        address: "Via del Giglio, 28R, 50123 Firenze",
        directionsUrl: mapsUrl("Ciro and Sons Via del Giglio Firenze"),
        hours: "Daily: 12:00 – 23:00",
        phone: "+39 055 289 694",
        website: "www.ciroandsons.com",
        specialty: "GF Neapolitan pizza & street-food slices",
        overview: "Naples-style pizzeria with a dedicated gluten-free kitchen offering takeaway slices and fried street-food classics.",
        menuHighlights: ["GF Margherita Slice", "GF Montanara", "GF Arancini"],
        proTip: "Ask for the dedicated GF fryer to avoid cross-contamination.",
        icon: "🍢",
        cuisineTypes: ["Street Food", "Pizza"],
        celiacSafe: "protocols-in-place",
        menuType: "mixed-menu",
        rating: 4.5,
        reviewCount: 142,
      },
      {
        name: "Trapizzino Firenze GF",
        address: "Borgo San Lorenzo, 9R, 50123 Firenze",
        directionsUrl: mapsUrl("Trapizzino Firenze Borgo San Lorenzo"),
        hours: "Tue–Sun: 11:30 – 22:00",
        phone: "+39 055 210 987",
        specialty: "GF trapizzino & Roman-style street food",
        overview: "Street-food counter serving gluten-free trapizzino pockets filled with slow-cooked Tuscan and Roman stews.",
        menuHighlights: ["GF Trapizzino Pollo alla Cacciatora", "GF Suppli", "GF Polpette al Sugo"],
        proTip: "Order two — the GF pockets are smaller than the classic version.",
        icon: "🥙",
        cuisineTypes: ["Street Food"],
        celiacSafe: "protocols-in-place",
        menuType: "mixed-menu",
        rating: 4.4,
        reviewCount: 96,
      },

    ],
  },
  {
    name: "Milan",
    slug: "milan",
    emoji: "🛍️",
    description: "Fashion capital with upscale GF dining, bakeries and risotto specialists",
    highlights: ["Ristorante Alice", "GluFree Bakery", "Risotteria Melotti"],
    image: "photo-1520440229-6469a149ac59",
    restaurants: [
      {
        name: "Ristorante Alice – Fashion District Fine Dining",
        address: "Via Adige 9, 20135 Milano",
        hours: "Tue–Sat: 19:30 – 23:00",
        phone: "+39 02 5990 4998",
        website: "www.ristorantealice.it",
        directionsUrl: "https://www.google.com/maps/place/Ristorante+Alice/@45.4570,9.2008,17z",
        specialty: "Modern Italian fine dining with GF options",
        overview: "Refined Milanese kitchen with seasonal menu and careful celiac handling.",
        icon: "🍽️",
        cuisineTypes: ["Italian", "Fine Dining"],
        celiacSafe: "protocols-in-place",
        menuType: "mixed-menu",
        rating: 4.6,
        reviewCount: 184,
      },
      {
        name: "Risotteria Melotti – Centro",
        address: "Via Cesare Battisti 5, 20122 Milano",
        hours: "Mon–Sat: 12:00 – 23:00",
        phone: "+39 02 7639 4496",
        website: "www.risotteriamelotti.it",
        directionsUrl: "https://www.google.com/maps/place/Risotteria+Melotti/@45.4623,9.1965,17z",
        specialty: "Naturally GF Veronese rice dishes",
        overview: "Specialist risotteria — rice-based menu naturally suited to celiacs, with clearly marked GF items.",
        icon: "🍚",
        cuisineTypes: ["Italian", "Risotto"],
        celiacSafe: "protocols-in-place",
        menuType: "mixed-menu",
        rating: 4.5,
        reviewCount: 142,
      },
      {
        name: "Risotteria Melotti – Sartirana",
        address: "Via Privata Sartirana, 1, 20144 Milano",
        directionsUrl: mapsUrl("Risotteria Melotti Via Privata Sartirana Milano"),
        hours: "Tue–Sun: 12:00 – 15:00, 19:00 – 23:00",
        phone: "+39 02 7001 666",
        website: "www.risotteriamelotti.it",
        specialty: "Risotto specialists — second Milan location",
        icon: "🍚",
        cuisineTypes: ["Italian", "Risotto"],
        celiacSafe: "protocols-in-place",
        menuType: "mixed-menu",
        rating: 4.5,
        reviewCount: 120,
      },
      {
        name: "GluFree Bakery",
        address: "Via Curtatone, 6, 20122 Milano",
        directionsUrl: mapsUrl("GluFree Bakery Milano"),
        hours: "Mon–Sat: 7:30 – 19:30",
        phone: "+39 02 2478 588",
        website: "www.glufreebakery.it",
        specialty: "Dedicated GF bakery, sandwiches and pastries",
        icon: "🥐",
        cuisineTypes: ["Bakery"],
        celiacSafe: "dedicated-facility",
        menuType: "fully-gluten-free",
        rating: 4.7,
        reviewCount: 310,
      },
      {
        name: "Officina Zero",
        address: "Viale Andrea Doria, 44, 20124 Milano",
        directionsUrl: mapsUrl("Officina Zero Milano"),
        hours: "Tue–Sun: 12:00 – 15:00, 18:30 – 23:00",
        phone: "+39 02 2555 446",
        website: "www.officinazero.it",
        specialty: "100% GF restaurant — pizza, pasta and desserts",
        icon: "🍕",
        cuisineTypes: ["Italian", "Pizza"],
        celiacSafe: "dedicated-facility",
        menuType: "fully-gluten-free",
        rating: 4.6,
        reviewCount: 250,
      },
      {
        name: "Bistrò Milano",
        address: "Corso Magenta, 9, 20123 Milano",
        directionsUrl: mapsUrl("Bistro Corso Magenta Milano"),
        hours: "Tue–Sun: 12:30 – 14:30, 19:30 – 22:30",
        phone: "+39 02 9194 880",
        website: "www.bistrmilano.it",
        specialty: "Bistro with strong celiac-safe menu",
        icon: "🍽️",
        cuisineTypes: ["Italian", "Bistro"],
        celiacSafe: "protocols-in-place",
        menuType: "mixed-menu",
        rating: 4.4,
        reviewCount: 140,
      },
      {
        name: "PanPerMe",
        address: "Viale Monte Nero, 57, 20135 Milano",
        directionsUrl: mapsUrl("PanPerMe Milano"),
        hours: "Mon–Sat: 7:30 – 19:30",
        phone: "+39 02 6297 354",
        website: "www.panperme.it",
        specialty: "Dedicated GF bakery and lunch spot",
        icon: "🥖",
        cuisineTypes: ["Bakery"],
        celiacSafe: "dedicated-facility",
        menuType: "fully-gluten-free",
        rating: 4.7,
        reviewCount: 200,
      },
      {
        name: "La Piadineria – Tasty & Free",
        address: "Piazza Velasca, 4, 20122 Milano",
        directionsUrl: mapsUrl("La Piadineria Tasty Free Piazza Velasca Milano"),
        hours: "Tue–Sun: 12:00 – 15:00, 18:30 – 23:00",
        phone: "+39 02 6216 732",
        website: "www.lapiadineria.it",
        specialty: "GF piadina and wraps",
        icon: "🌯",
        cuisineTypes: ["Italian", "Street Food"],
        celiacSafe: "protocols-in-place",
        menuType: "mixed-menu",
        rating: 4.4,
        reviewCount: 160,
      },
    ],
  },
  {
    name: "Venice",
    slug: "venice",
    emoji: "🚣",
    description: "Lagoon city with GF bakeries, gelaterias and dedicated bistros",
    highlights: ["Farini", "MEA Libera Tutti", "Grom"],
    image: "photo-1523906834658-6e24ef2386f9",
    restaurants: [
      {
        name: "Farini – Venetian Gluten-Free Bakery & Café",
        address: "Cannaregio 4654, 30121 Venezia",
        hours: "Daily: 7:30 – 19:30",
        phone: "+39 041 3840 066",
        website: "www.farini.it",
        directionsUrl: "https://www.google.com/maps/place/Farini+Venezia/@45.4408,12.3155,17z",
        specialty: "GF bakery and café",
        overview: "Popular bakery chain with a verified GF selection in central Venice.",
        icon: "🥐",
        cuisineTypes: ["Bakery"],
        celiacSafe: "protocols-in-place",
        menuType: "mixed-menu",
        rating: 4.5,
        reviewCount: 96,
      },
      {
        name: "MEA Libera Tutti",
        address: "C. del Paradiso, 5742, 30122 Venezia",
        directionsUrl: mapsUrl("MEA Libera Tutti Venezia"),
        hours: "Tue–Sun: 12:30 – 14:30, 19:30 – 22:30",
        phone: "+39 041 1045 411",
        website: "www.mealiberatutti.it",
        specialty: "100% gluten-free bistro and bakery",
        icon: "🍽️",
        cuisineTypes: ["Italian", "Bistro"],
        celiacSafe: "dedicated-facility",
        menuType: "fully-gluten-free",
        rating: 4.7,
        reviewCount: 220,
      },
      {
        name: "Grom – Santa Lucia",
        address: "Fondamenta Santa Lucia, 1, 30100 Venezia",
        directionsUrl: mapsUrl("Grom Fondamenta Santa Lucia Venezia"),
        hours: "Daily: 11:00 – 23:30",
        phone: "+39 041 5097 339",
        website: "www.grom.it",
        specialty: "AIC-certified GF gelato",
        icon: "🍦",
        cuisineTypes: ["Gelato"],
        celiacSafe: "protocols-in-place",
        menuType: "mixed-menu",
        rating: 4.5,
        reviewCount: 720,
      },
      {
        name: "Grom – San Barnaba",
        address: "Campo San Barnaba, 2761, 30123 Venezia",
        directionsUrl: mapsUrl("Grom Campo San Barnaba Venezia"),
        hours: "Daily: 11:00 – 23:30",
        phone: "+39 041 2024 653",
        website: "www.grom.it",
        specialty: "GF gelato in Dorsoduro",
        icon: "🍦",
        cuisineTypes: ["Gelato"],
        celiacSafe: "protocols-in-place",
        menuType: "mixed-menu",
        rating: 4.6,
        reviewCount: 540,
      },
    ],
  },
  {
    name: "Naples",
    slug: "naples",
    emoji: "🌋",
    description: "Home of pizza with dedicated GF cafés and Sorrento seafood",
    highlights: ["Leopoldo Cafebar", "O' Fish"],
    image: "photo-1534445967719-8ae7b972b1a5",
    restaurants: [
      {
        name: "Leopoldo Cafebar – Senza Glutine",
        address: "Piazza Cavour, 78/79, 80137 Napoli",
        directionsUrl: mapsUrl("Leopoldo Cafebar Senza Glutine Napoli"),
        hours: "Mon–Sat: 7:30 – 19:30",
        phone: "+39 081 7116 023",
        website: "www.leopoldocafebar.it",
        specialty: "Dedicated GF Neapolitan café and pastry shop",
        icon: "☕",
        cuisineTypes: ["Bakery", "Café"],
        celiacSafe: "dedicated-facility",
        menuType: "fully-gluten-free",
        rating: 4.7,
        reviewCount: 310,
      },
      {
        name: "O' Fish Seafood Bar – Sorrento",
        address: "Corso Italia, 29, 80067 Sorrento (NA)",
        directionsUrl: mapsUrl("O Fish Seafood Bar Sorrento"),
        hours: "Tue–Sun: 12:30 – 14:30, 19:30 – 22:30",
        phone: "+39 081 7033 361",
        website: "www.ofishseafoodbar.it",
        specialty: "Seafood with celiac-safe options",
        icon: "🦐",
        cuisineTypes: ["Seafood"],
        celiacSafe: "protocols-in-place",
        menuType: "mixed-menu",
        rating: 4.6,
        reviewCount: 180,
      },
    ],
  },
  {
    name: "Bologna",
    slug: "bologna",
    emoji: "🍝",
    description: "Food capital of Emilia-Romagna with GF trattorias and gelato",
    highlights: ["Trattoria Vecchio Mercato", "Grom"],
    image: "photo-1597120291471-8e0a9e8d3b5b",
    restaurants: [
      {
        name: "Trattoria Vecchio Mercato",
        address: "Via Piero Gobetti, 49F, 40129 Bologna",
        directionsUrl: mapsUrl("Trattoria Vecchio Mercato Bologna"),
        hours: "Tue–Sun: 12:00 – 15:00, 19:00 – 23:00",
        phone: "+39 051 6447 629",
        website: "www.trattoriavecchiomercato.it",
        specialty: "Traditional Bolognese trattoria with GF menu",
        icon: "🍝",
        cuisineTypes: ["Italian", "Emilian"],
        celiacSafe: "protocols-in-place",
        menuType: "mixed-menu",
        rating: 4.5,
        reviewCount: 200,
      },
      {
        name: "Grom – Bologna",
        address: "Via D'Azeglio, 13, 40123 Bologna",
        directionsUrl: mapsUrl("Grom Via D'Azeglio Bologna"),
        hours: "Daily: 11:00 – 23:30",
        phone: "+39 051 3172 462",
        website: "www.grom.it",
        specialty: "AIC-certified GF gelato",
        icon: "🍦",
        cuisineTypes: ["Gelato"],
        celiacSafe: "protocols-in-place",
        menuType: "mixed-menu",
        rating: 4.6,
        reviewCount: 480,
      },
    ],
  },
  {
    name: "Verona",
    slug: "verona",
    emoji: "💞",
    description: "Romantic Veneto city with dedicated GF spots and Lake Garda gelaterias",
    highlights: ["Dolci Sogni", "Grom", "ArciGelato"],
    image: "photo-1559606060-d34c5d3d3e09",
    restaurants: [
      {
        name: "Dolci Sogni Gluten Free",
        address: "Stradone Porta Palio, 39/a, 37122 Verona",
        directionsUrl: mapsUrl("Dolci Sogni Gluten Free Verona"),
        hours: "Mon–Sat: 7:30 – 19:30",
        phone: "+39 045 5218 377",
        website: "www.dolcisogniglutenfree.it",
        specialty: "100% GF pastry shop",
        icon: "🧁",
        cuisineTypes: ["Bakery", "Pastry"],
        celiacSafe: "dedicated-facility",
        menuType: "fully-gluten-free",
        rating: 4.7,
        reviewCount: 220,
      },
      {
        name: "Grom – Verona",
        address: "Via Giuseppe Mazzini, 75, 37121 Verona",
        directionsUrl: mapsUrl("Grom Via Mazzini Verona"),
        hours: "Daily: 11:00 – 23:30",
        phone: "+39 045 7165 182",
        website: "www.grom.it",
        specialty: "GF gelato in central Verona",
        icon: "🍦",
        cuisineTypes: ["Gelato"],
        celiacSafe: "protocols-in-place",
        menuType: "mixed-menu",
        rating: 4.6,
        reviewCount: 510,
      },
      {
        name: "ArciGelato – Garda",
        address: "Via Antiche Mura, 16, 37016 Garda (VR)",
        directionsUrl: mapsUrl("ArciGelato Garda"),
        hours: "Daily: 11:00 – 23:30",
        phone: "+39 045 5152 786",
        website: "www.arcigelato.it",
        specialty: "100% natural gelato with GF options",
        icon: "🍨",
        cuisineTypes: ["Gelato"],
        celiacSafe: "protocols-in-place",
        menuType: "mixed-menu",
        rating: 4.7,
        reviewCount: 340,
      },
    ],
  },
  {
    name: "Siena",
    slug: "siena",
    emoji: "🏰",
    description: "Medieval Tuscan city with GF gelato in the historic centre",
    highlights: ["Grom"],
    image: "photo-1531971589569-0d9370cbe1e5",
    restaurants: [
      {
        name: "Grom – Siena",
        address: "Via Banchi di Sopra, 11, Siena",
        directionsUrl: mapsUrl("Grom Via Banchi di Sopra Siena"),
        hours: "Daily: 11:00 – 23:30",
        phone: "+39 0577 5352 259",
        website: "www.grom.it",
        specialty: "AIC-certified GF gelato",
        icon: "🍦",
        cuisineTypes: ["Gelato"],
        celiacSafe: "protocols-in-place",
        menuType: "mixed-menu",
        rating: 4.6,
        reviewCount: 290,
      },
    ],
  },
  {
    name: "Pisa",
    slug: "pisa",
    emoji: "🗼",
    description: "Tuscan port city with dedicated GF restaurants",
    highlights: ["Ristorante Grano Libero"],
    image: "photo-1543429776-2782fc8e1acd",
    restaurants: [
      {
        name: "Ristorante Grano Libero",
        address: "Via dei Mille, 7, 56126 Pisa",
        directionsUrl: mapsUrl("Ristorante Grano Libero Pisa"),
        hours: "Tue–Sun: 12:00 – 15:00, 19:00 – 23:00",
        phone: "+39 050 9436 840",
        website: "www.ristorantegranolibero.it",
        specialty: "100% GF restaurant",
        icon: "🍝",
        cuisineTypes: ["Italian"],
        celiacSafe: "dedicated-facility",
        menuType: "fully-gluten-free",
        rating: 4.7,
        reviewCount: 180,
      },
      {
        name: "ER Pasticceria Gluten Free",
        address: "Via Aurelia Nord, 36, 56122 Pisa",
        directionsUrl: mapsUrl("ER Pasticceria Gluten Free Pisa"),
        hours: "Tue–Sun: 7:30 – 21:00",
        phone: "+39 050 721 5904",
        website: "www.erpasticceriaglutenfree.it",
        specialty: "100% GF pastry shop and bakery",
        icon: "🧁",
        cuisineTypes: ["Bakery", "Pastry"],
        celiacSafe: "dedicated-facility",
        menuType: "fully-gluten-free",
        rating: 4.7,
        reviewCount: 270,
      },
    ],
  },
  {
    name: "Genoa",
    slug: "genoa",
    emoji: "⚓",
    description: "Ligurian port with dedicated GF bakeries",
    highlights: ["Bakery 1970"],
    image: "photo-1602941525436-39e7f15ad8c0",
    restaurants: [
      {
        name: "Bakery 1970 Gluten Free",
        address: "Via di Ravecca, 69r, 16128 Genova",
        directionsUrl: mapsUrl("Bakery 1970 Gluten Free Genova"),
        hours: "Mon–Sat: 7:30 – 19:30",
        phone: "+39 010 8049 724",
        website: "www.bakery1970glutenfree.it",
        specialty: "Dedicated GF bakery — focaccia, pizza, pastries",
        icon: "🥖",
        cuisineTypes: ["Bakery", "Ligurian"],
        celiacSafe: "dedicated-facility",
        menuType: "fully-gluten-free",
        rating: 4.7,
        reviewCount: 240,
      },
    ],
  },
  {
    name: "Turin",
    slug: "turin",
    emoji: "🏔️",
    description: "Piedmont capital with dedicated GF bakeries",
    highlights: ["Freedom Lounge Bakery"],
    image: "photo-1543429776-2782fc8e1acd",
    restaurants: [
      {
        name: "Freedom Lounge Bakery",
        address: "Via dell'Arcivescovado, 9, 10121 Torino",
        directionsUrl: mapsUrl("Freedom Lounge Bakery Torino"),
        hours: "Mon–Sat: 7:30 – 19:30",
        phone: "+39 011 6137 236",
        website: "www.freedomloungebakery.it",
        specialty: "Dedicated GF bakery and lounge",
        icon: "🥐",
        cuisineTypes: ["Bakery"],
        celiacSafe: "dedicated-facility",
        menuType: "fully-gluten-free",
        rating: 4.6,
        reviewCount: 200,
      },
    ],
  },
  {
    name: "Trieste",
    slug: "trieste",
    emoji: "🌊",
    description: "Adriatic port with multiple dedicated GF venues",
    highlights: ["Pasticceria da Ily", "A World Without Gluten"],
    image: "photo-1531971589569-0d9370cbe1e5",
    restaurants: [
      {
        name: "Pasticceria da Ily",
        address: "Via S. Francesco D'Assisi, 22, 34133 Trieste",
        directionsUrl: mapsUrl("Pasticceria da Ily Trieste"),
        hours: "Mon–Sat: 7:30 – 19:30",
        phone: "+39 040 9062 562",
        website: "www.pasticceriadaily.it",
        specialty: "Dedicated GF pastry shop",
        icon: "🧁",
        cuisineTypes: ["Bakery", "Pastry"],
        celiacSafe: "dedicated-facility",
        menuType: "fully-gluten-free",
        rating: 4.7,
        reviewCount: 170,
      },
      {
        name: "A World Without Gluten",
        address: "Via Antonio Pigafetta, 6, 34147 Trieste",
        directionsUrl: mapsUrl("A World Without Gluten Trieste"),
        hours: "Tue–Sun: 12:00 – 15:00, 19:00 – 23:00",
        phone: "+39 040 5592 364",
        website: "www.aworldwithoutgluten.it",
        specialty: "100% GF restaurant and shop",
        icon: "🍽️",
        cuisineTypes: ["Italian"],
        celiacSafe: "dedicated-facility",
        menuType: "fully-gluten-free",
        rating: 4.7,
        reviewCount: 190,
      },
    ],
  },
  {
    name: "Bari",
    slug: "bari",
    emoji: "🌅",
    description: "Puglian capital with dedicated GF pastry bistros",
    highlights: ["Colibrio"],
    image: "photo-1581373449483-37449f962b6c",
    restaurants: [
      {
        name: "Colibrio | Bar Pasticceria Bistrot",
        address: "Corso Vittorio Emanuele, 47, 70122 Bari",
        directionsUrl: mapsUrl("Colibrio Bar Pasticceria Bistrot Bari"),
        hours: "Mon–Sat: 7:30 – 19:30",
        phone: "+39 080 3251 707",
        website: "www.colibriobarpasticceriabi.it",
        specialty: "Dedicated GF bistro and pastry shop",
        icon: "🥐",
        cuisineTypes: ["Bakery", "Café"],
        celiacSafe: "dedicated-facility",
        menuType: "fully-gluten-free",
        rating: 4.6,
        reviewCount: 210,
      },
    ],
  },
  {
    name: "Catania",
    slug: "catania",
    emoji: "🌋",
    description: "Sicilian coastal city with dedicated GF dining",
    highlights: ["Easy"],
    image: "photo-1523906834658-6e24ef2386f9",
    restaurants: [
      {
        name: "Easy",
        address: "Piazza Carlo Alberto, 15, 95131 Catania",
        directionsUrl: mapsUrl("Easy Piazza Carlo Alberto Catania"),
        hours: "Tue–Sun: 12:00 – 15:00, 19:00 – 23:00",
        phone: "+39 095 3580 168",
        website: "www.easy.it",
        specialty: "100% GF Sicilian restaurant",
        icon: "🍕",
        cuisineTypes: ["Sicilian", "Italian"],
        celiacSafe: "dedicated-facility",
        menuType: "fully-gluten-free",
        rating: 4.6,
        reviewCount: 220,
      },
    ],
  },
  {
    name: "Lucca",
    slug: "lucca",
    emoji: "🧱",
    description: "Walled Tuscan town with GF pastry labs and gelato",
    highlights: ["Glee", "I Gelati di Piero"],
    image: "photo-1543429776-2782fc8e1acd",
    restaurants: [
      {
        name: "Glee – Gluten Lactose Free Lab",
        address: "Via Alfredo Catalani, 200, 55100 Lucca",
        directionsUrl: mapsUrl("Glee gluten lactose free lab Lucca"),
        hours: "Mon–Sat: 7:30 – 19:30",
        phone: "+39 0583 7213 298",
        website: "www.glee.it",
        specialty: "Dedicated GF & lactose-free bakery lab",
        icon: "🥐",
        cuisineTypes: ["Bakery"],
        celiacSafe: "dedicated-facility",
        menuType: "fully-gluten-free",
        rating: 4.7,
        reviewCount: 150,
      },
      {
        name: "I Gelati di Piero",
        address: "Via Roma, 25, 55100 Lucca",
        directionsUrl: mapsUrl("I Gelati di Piero Lucca"),
        hours: "Daily: 11:00 – 23:30",
        phone: "+39 06 5698 161",
        website: "www.igelatidipiero.it",
        specialty: "Artisanal gelato with GF options",
        icon: "🍦",
        cuisineTypes: ["Gelato"],
        celiacSafe: "protocols-in-place",
        menuType: "mixed-menu",
        rating: 4.6,
        reviewCount: 280,
      },
    ],
  },
  {
    name: "Cagliari",
    slug: "cagliari",
    emoji: "🏝️",
    description: "Sardinian capital with dedicated GF restaurants",
    highlights: ["Man.gia"],
    image: "photo-1523906834658-6e24ef2386f9",
    restaurants: [
      {
        name: "Man.gia",
        address: "Via Ottone Bacaredda, 34, Cagliari",
        directionsUrl: mapsUrl("Man.gia Via Bacaredda Cagliari"),
        hours: "Tue–Sun: 12:00 – 15:00, 19:00 – 23:00",
        phone: "+39 070 9619 856",
        website: "www.mangia.it",
        specialty: "100% GF Sardinian restaurant",
        icon: "🍽️",
        cuisineTypes: ["Sardinian", "Italian"],
        celiacSafe: "dedicated-facility",
        menuType: "fully-gluten-free",
        rating: 4.6,
        reviewCount: 175,
      },
    ],
  },
  {
    name: "Livorno",
    slug: "livorno",
    emoji: "⛵",
    description: "Tuscan port city with dedicated GF bistros",
    highlights: ["Manalù"],
    image: "photo-1531971589569-0d9370cbe1e5",
    restaurants: [
      {
        name: "Manalù – Bistrot & Bakery Lab",
        address: "Piazza Elia Benamozegh, 15, 57125 Livorno",
        directionsUrl: mapsUrl("Manalu Bistrot Bakery Lab Livorno"),
        hours: "Mon–Sat: 7:30 – 19:30",
        phone: "+39 0586 6696 892",
        website: "www.manal.it",
        specialty: "100% GF bistro and bakery",
        icon: "🥐",
        cuisineTypes: ["Bakery", "Bistro"],
        celiacSafe: "dedicated-facility",
        menuType: "fully-gluten-free",
        rating: 4.7,
        reviewCount: 160,
      },
    ],
  },
  {
    name: "Palermo",
    slug: "palermo",
    emoji: "🌞",
    description: "Sicilian capital with dedicated GF bakeries",
    highlights: ["Panificio Delizie"],
    image: "photo-1523906834658-6e24ef2386f9",
    restaurants: [
      {
        name: "Panificio Delizie",
        address: "Via Goethe, 21, 90138 Palermo",
        directionsUrl: mapsUrl("Panificio Delizie Via Goethe Palermo"),
        hours: "Mon–Sat: 7:30 – 19:30",
        phone: "+39 091 9718 112",
        website: "www.panificiodelizie.it",
        specialty: "Dedicated GF Sicilian bakery",
        icon: "🥖",
        cuisineTypes: ["Bakery", "Sicilian"],
        celiacSafe: "dedicated-facility",
        menuType: "fully-gluten-free",
        rating: 4.6,
        reviewCount: 195,
      },
    ],
  },
  {
    name: "Bolzano",
    slug: "bolzano",
    emoji: "🏔️",
    description: "Alpine city in South Tyrol with celiac-aware gelaterias",
    highlights: ["Gelateria Eccetera"],
    image: "photo-1531971589569-0d9370cbe1e5",
    restaurants: [
      {
        name: "Gelateria Eccetera",
        address: "Via dei Grappoli, 23, 39100 Bolzano",
        directionsUrl: mapsUrl("Gelateria Eccetera Bolzano"),
        hours: "Daily: 11:00 – 23:30",
        phone: "+39 0471 5484 178",
        website: "www.gelateriaeccetera.it",
        specialty: "Artisanal gelato with GF cones",
        icon: "🍦",
        cuisineTypes: ["Gelato"],
        celiacSafe: "protocols-in-place",
        menuType: "mixed-menu",
        rating: 4.6,
        reviewCount: 210,
      },
    ],
  },
  {
    name: "Cinque Terre",
    slug: "cinque-terre",
    emoji: "🌊",
    description: "Colorful Ligurian coastline with dedicated GF gelaterias",
    highlights: ["Sorbetteria Gelateria 5 Terre"],
    image: "photo-1531971589569-0d9370cbe1e5",
    restaurants: [
      {
        name: "Sorbetteria Gelateria 5 Terre",
        address: "Via Renato Birolli, 74, 19017 Manarola SP",
        directionsUrl: mapsUrl("Sorbetteria Gelateria 5 Terre Via Renato Birolli Manarola"),
        hours: "Daily: 11:00 – 22:00",
        phone: "+39 0187 920 720",
        website: "www.gelateria5terre.it",
        specialty: "100% GF and lactose-free artisanal gelato",
        icon: "🍦",
        cuisineTypes: ["Gelato"],
        celiacSafe: "dedicated-facility",
        menuType: "fully-gluten-free",
        rating: 4.7,
        reviewCount: 310,
      },
    ],
  },
];


const faqItems = [
  {
    question: "Is Italy a good destination for gluten-free travelers?",
    answer: "Yes — Italy has one of the most advanced celiac scenes in the world. The Italian Celiac Association (AIC) certifies hundreds of restaurants, pizzerias and gelaterias, especially in Rome, Florence, Milan, Naples and Bologna.",
  },
  {
  },
  {
  },
  {
  },
  {
  },
  {
  },
];

const getCeliacSafeBadge = (level?: string) => {
  if (level === "dedicated-facility") {
    return (
      <Badge className="bg-green-100 text-green-800 border-green-300">
        <Shield className="h-3 w-3 mr-1" /> Dedicated GF Facility
      </Badge>
    );
  }
  if (level === "protocols-in-place") {
    return (
      <Badge className="bg-blue-100 text-blue-800 border-blue-300">
        <CheckCircle className="h-3 w-3 mr-1" /> Celiac Protocols
      </Badge>
    );
  }
  return null;
};

const getMenuTypeBadge = (type?: string) => {
  if (type === "fully-gluten-free") {
    return <Badge className="bg-emerald-100 text-emerald-800 border-emerald-300">100% Gluten-Free</Badge>;
  }
  if (type === "mixed-menu") {
    return <Badge className="bg-amber-100 text-amber-800 border-amber-300">GF Options Available</Badge>;
  }
  return null;
};

const renderStars = (rating?: number) => {
  if (!rating) return null;
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
      ))}
      <span className="ml-1 font-semibold text-sm">{rating}</span>
    </div>
  );
};

const openExternalLink = (url: string) => {
  const normalizedUrl = url.startsWith("http") ? url : `https://${url}`;
  window.open(normalizedUrl, "_blank", "noopener,noreferrer");
};

const Italy = () => {
  useEffect(() => {
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", "Gluten-Free Restaurants in Italy | Celiac-Safe Dining Guide");
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", "Discover verified gluten-free and celiac-safe restaurants across Italy. AIC-certified pizzerias, trattorias and bakeries in every major city.");

    const existingSchema = document.querySelector('script[data-schema="italy-gf"]');
    if (existingSchema) existingSchema.remove();
    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.setAttribute("data-schema", "italy-gf");
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Gluten-Free Restaurants in Italy",
      description: "Find the best gluten-free restaurants across Italy. AIC-certified celiac-safe dining in Rome, Florence, Milan, Venice, Naples and more.",
      url: "https://glutenfreeplace.org/italy",
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: cities.length,
        itemListElement: cities.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
        })),
      },
    });
    document.head.appendChild(schema);

    const existingFaqSchema = document.querySelector('script[data-schema="italy-faq"]');
    if (existingFaqSchema) existingFaqSchema.remove();
    const faqSchema = document.createElement("script");
    faqSchema.type = "application/ld+json";
    faqSchema.setAttribute("data-schema", "italy-faq");
    faqSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    });
    document.head.appendChild(faqSchema);

    return () => {
      document.querySelector('script[data-schema="italy-gf"]')?.remove();
      document.querySelector('script[data-schema="italy-faq"]')?.remove();
    };
  }, []);

  return (
    <>
      <SEOHead
        title="Gluten-Free Restaurants in Italy | Celiac-Safe Dining Guide 2026"
        description="Find the best gluten-free restaurants in Italy. AIC-certified celiac-safe pizza, pasta & gelato in Rome, Florence, Milan, Venice, Naples & more."
        canonical="/italy"
      />
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-red-50">
        <header className="bg-white/80 backdrop-blur-md border-b border-green-100 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-green-700" />
              <span className="text-2xl font-bold bg-gradient-to-r from-green-700 via-gray-700 to-red-600 bg-clip-text text-transparent">
                Gluten-Free Places
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-green-700 transition-colors whitespace-nowrap">Home</Link>
              <Link to="/countries" className="text-gray-700 hover:text-green-700 transition-colors">Countries</Link>
              <a href="#cities" className="text-gray-700 hover:text-green-700 transition-colors">Cities</a>
              <a href="#faq" className="text-gray-700 hover:text-green-700 transition-colors">FAQ</a>
              <UserMenu />
            </div>
          </div>
        </header>

        <section className="relative py-12 overflow-hidden bg-gradient-to-r from-green-700 via-white/10 to-red-600">
          <div className="absolute inset-0 bg-black/30" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <Link to="/countries" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Countries
            </Link>
            <div className="max-w-4xl mx-auto">
              <span className="text-5xl mb-4 block">🇮🇹</span>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                <MapPin className="h-4 w-4 mr-2" />
                AIC-Certified Restaurants
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                Gluten-Free Italy
              </h1>
              <p className="text-lg text-white/90 mb-6 leading-relaxed max-w-2xl mx-auto">
                From authentic Neapolitan pizza to creamy risottos and Tuscan schiacciata — discover
                Italy's world-class gluten-free dining, all verified for celiac safety.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/gluten-free/italy/rome">
                  <Button size="lg" className="bg-white text-green-700 hover:bg-green-50">
                    Start with Rome
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <AddRestaurantDialog
                  city="Italy"
                  triggerClassName="border-white/70 bg-transparent !text-white hover:bg-white/10"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="cities" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
                <MapPin className="h-4 w-4 mr-2" />
                Explore by City
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Top Gluten-Free Cities in Italy
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose a city to explore verified gluten-free restaurants with detailed reviews and safety information
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cities.filter((c) => ["rome", "florence", "venice", "milan"].includes(c.slug)).map((city, index) => {
                const cityRating = city.restaurants.length > 0
                  ? Number((city.restaurants.reduce((sum, r) => sum + (r.rating || 0), 0) / city.restaurants.length).toFixed(1))
                  : 0;
                return (
                  <Card
                    key={city.slug}
                    className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg animate-fade-in overflow-hidden"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={`https://images.unsplash.com/${city.image}?auto=format&fit=crop&w=600&q=80`}
                        alt={`Gluten-free restaurants in ${city.name}, Italy`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                        <span className="font-semibold text-sm">{cityRating}</span>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <h3 className="text-2xl font-bold text-white">{city.name}</h3>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <p className="text-gray-600 text-sm mb-3">{city.description}</p>
                      <div className="flex items-center text-green-700 mb-3">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="font-semibold text-sm">{city.restaurants.length} places</span>
                      </div>
                      <div className="mb-4">
                        <p className="text-xs text-gray-500 mb-2">Popular spots:</p>
                        <div className="flex flex-wrap gap-1">
                          {city.highlights.map((spot) => (
                            <Badge key={spot} variant="secondary" className="text-xs bg-green-50 text-green-700">
                              {spot}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Link to={`/gluten-free/italy/${city.slug}`}>
                        <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                          Explore {city.name}
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white/40">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
                <MapPin className="h-4 w-4 mr-2" />
                Top Restaurants
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Top 25 Gluten-Free Restaurants in Italy
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our highest-rated gluten-free dining spots across Italy, verified for celiac safety
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-5">
              {cities
                .flatMap((c) => c.restaurants.map((r) => ({ ...r, cityName: c.name })))
                .sort((a, b) => (b.rating || 0) - (a.rating || 0) || (b.reviewCount || 0) - (a.reviewCount || 0))
                .slice(0, 25)
                .map((r, index) => (
                  <Card
                    key={`${r.name}-${index}`}
                    className="hover:shadow-xl transition-all duration-200 border border-gray-100 overflow-hidden"
                  >
                    <CardContent className="p-6">
                      <div className="mb-3">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 flex-wrap">
                          <span className="text-2xl">{r.icon}</span>
                          <span>{r.name}</span>
                          {index < 3 && (
                            <Badge className="bg-amber-100 text-amber-800 border-amber-200 text-xs ml-1">
                              Top {index + 1}
                            </Badge>
                          )}
                        </h3>
                        {r.specialty && (
                          <p className="text-sm text-gray-500 mt-0.5 ml-9">{r.specialty}</p>
                        )}
                      </div>

                      {r.rating && (
                        <div className="flex items-center gap-2 mb-3 ml-9">
                          <div className="flex items-center">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < Math.floor(r.rating!)
                                    ? "text-amber-400 fill-amber-400"
                                    : "text-gray-200"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="font-semibold text-sm text-gray-900">{r.rating}</span>
                          <span className="text-sm text-gray-400">({r.reviewCount} reviews)</span>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2 mb-3 ml-9">
                        <Badge variant="outline" className="text-xs bg-gray-50 text-gray-700">
                          📍 {r.cityName}
                        </Badge>
                        {getCeliacSafeBadge(r.celiacSafe)}
                        {getMenuTypeBadge(r.menuType)}
                      </div>

                      <div className="space-y-2 ml-9 text-sm text-gray-600">
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-gray-400 mt-0.5 shrink-0" />
                          <span>{r.address}</span>
                        </div>
                        {r.hours && (
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-gray-400 shrink-0" />
                            <span>{r.hours}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-4 flex-wrap">
                          {r.website && (
                            <button
                              type="button"
                              onClick={() => openExternalLink(r.website!.startsWith("http") ? r.website! : `https://${r.website}`)}
                              className="flex items-center gap-1.5 text-blue-600 hover:text-blue-800 transition-colors"
                            >
                              <Globe className="h-4 w-4" />
                              <span>{r.website.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}</span>
                            </button>
                          )}
                          {r.phone && (
                            <a
                              href={`tel:${r.phone}`}
                              className="flex items-center gap-1.5 text-emerald-600 hover:text-emerald-800 transition-colors"
                            >
                              <Phone className="h-4 w-4" />
                              <span>{r.phone}</span>
                            </a>
                          )}
                        </div>
                      </div>

                      {r.directionsUrl && (
                        <div className="mt-4 ml-9">
                          <button
                            type="button"
                            onClick={() => openExternalLink(r.directionsUrl!)}
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-green-700 hover:text-green-900 transition-colors"
                          >
                            <Navigation className="h-3.5 w-3.5" />
                            Get Directions
                          </button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </section>


        <section className="py-16 bg-white/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
                  <Award className="h-4 w-4 mr-2" />
                  About
                </Badge>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Gluten-Free Dining in Italy</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Why Italy?</h3>
                  <p className="text-gray-600 mb-4">
                    Italy is one of the world's most celiac-friendly countries. The Italian Celiac Association
                    (AIC) certifies hundreds of restaurants nationwide, and gluten-free pizza, pasta and gelato
                    are widely available.
                  </p>
                  <p className="text-gray-600">
                    EU labelling laws and a strong food culture make it easy to dine safely from Rome to Sicily.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Celiac Tips</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2">
                      <Shield className="w-5 h-5 text-green-700 mt-0.5 flex-shrink-0" />
                      <span>Say "senza glutine" or "sono celiaco/celiaca"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="w-5 h-5 text-green-700 mt-0.5 flex-shrink-0" />
                      <span>Look for the AIC "spiga barrata" logo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="w-5 h-5 text-green-700 mt-0.5 flex-shrink-0" />
                      <span>Risotto and polenta are naturally gluten-free</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="w-5 h-5 text-green-700 mt-0.5 flex-shrink-0" />
                      <span>Esselunga, Coop and Conad stock wide GF ranges</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="py-16 bg-green-50/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">FAQ</Badge>
                <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
              </div>
              <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm">
                {faqItems.map((faq, index) => (
                  <AccordionItem key={faq.question} value={`faq-${index}`} className="px-6">
                    <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Italy;
