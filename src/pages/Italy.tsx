import { useEffect, useMemo } from "react";
import { MapPin, Star, ArrowLeft, Globe, Shield, Award, ArrowRight, Clock, Phone, Navigation, CheckCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, useSearchParams } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { UserMenu } from "@/components/layout/UserMenu";
import { AddRestaurantDialog } from "@/components/restaurants/AddRestaurantDialog";
import { SEOHead } from "@/components/SEOHead";

type ItalyRestaurant = {
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
};

type ItalyCity = {
  name: string;
  slug: string;
  emoji: string;
  description: string;
  highlights: string[];
  image: string;
  restaurants: ItalyRestaurant[];
};

const mapsUrl = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

const cities: ItalyCity[] = [
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
        specialty: "GF gelato steps from the Trevi Fountain",
        icon: "🍦",
        cuisineTypes: ["Gelato"],
        celiacSafe: "protocols-in-place",
        menuType: "mixed-menu",
        rating: 4.6,
        reviewCount: 410,
      },
      {
        name: "Fiocco di Neve",
        address: "Via del Pantheon 51, 00186 Roma",
        directionsUrl: mapsUrl("Fiocco di Neve Via del Pantheon Roma"),
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
        specialty: "Dedicated GF bakery, pizza al taglio & deli",
        icon: "🥐",
        cuisineTypes: ["Bakery", "Pizza"],
        celiacSafe: "dedicated-facility",
        menuType: "fully-gluten-free",
        rating: 4.6,
        reviewCount: 230,
      },
      {
        name: "Gelateria dell'Angeletto",
        address: "Via dell'Angeletto, 15, 00184 Roma",
        directionsUrl: mapsUrl("Gelateria dell'Angeletto Roma"),
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
        specialty: "Gelato shop with clearly marked GF options",
        icon: "🍨",
        cuisineTypes: ["Gelato"],
        celiacSafe: "protocols-in-place",
        menuType: "mixed-menu",
        rating: 4.5,
        reviewCount: 340,
      },
      {
        name: "Pandalì",
        address: "Via di Torre Argentina, 3, 00186 Roma",
        directionsUrl: mapsUrl("Pandali Via di Torre Argentina Roma"),
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
        specialty: "AIC-certified GF gelato (national chain)",
        icon: "🍦",
        cuisineTypes: ["Gelato"],
        celiacSafe: "protocols-in-place",
        menuType: "mixed-menu",
        rating: 4.6,
        reviewCount: 1200,
      },
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
        specialty: "AIC-certified GF gelato",
        icon: "🍦",
        cuisineTypes: ["Gelato"],
        celiacSafe: "protocols-in-place",
        menuType: "mixed-menu",
        rating: 4.6,
        reviewCount: 950,
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
        specialty: "100% GF restaurant",
        icon: "🍝",
        cuisineTypes: ["Italian"],
        celiacSafe: "dedicated-facility",
        menuType: "fully-gluten-free",
        rating: 4.7,
        reviewCount: 180,
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
];


const faqItems = [
  {
    question: "Is Italy a good destination for gluten-free travelers?",
    answer: "Yes — Italy has one of the most advanced celiac scenes in the world. The Italian Celiac Association (AIC) certifies hundreds of restaurants, pizzerias and gelaterias, especially in Rome, Florence, Milan, Naples and Bologna.",
  },
  {
    question: "What does AIC certification mean?",
    answer: "AIC (Associazione Italiana Celiachia) certifies venues that follow strict protocols to safely serve celiacs. Look for the AIC 'spiga barrata' logo when choosing a restaurant.",
  },
  {
    question: "Can I eat real Italian pizza and pasta with celiac disease?",
    answer: "Absolutely. Many Italian pizzerias and trattorias offer certified gluten-free pasta and wood-fired GF pizza prepared in separate areas to avoid cross-contamination.",
  },
  {
    question: "How do I say gluten-free in Italian?",
    answer: "Say 'senza glutine' (without gluten) or 'sono celiaco/celiaca' (I am celiac). Most staff in major cities are familiar with celiac needs.",
  },
  {
    question: "Which Italian city is most celiac-friendly?",
    answer: "Rome leads with the highest number of dedicated GF spots, followed by Florence, Milan and Naples. Even small towns often have at least one AIC-certified venue.",
  },
  {
    question: "Can I find gluten-free products in Italian supermarkets?",
    answer: "Yes — Esselunga, Coop, Conad and pharmacies stock wide GF ranges. Many products are reimbursed by the Italian health system for residents with a celiac diagnosis.",
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
  const [searchParams] = useSearchParams();
  const cityFilter = searchParams.get("city");

  const visibleCities = useMemo(() => {
    if (!cityFilter) return cities;
    const f = cityFilter.toLowerCase();
    return cities.filter((c) => c.name.toLowerCase().includes(f) || c.slug.includes(f));
  }, [cityFilter]);

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
        name: "Top Gluten-Free Cities in Italy",
        numberOfItems: cities.length,
        itemListElement: cities.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: c.name,
          url: `https://glutenfreeplace.org/italy#city-${c.slug}`,
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
                <a href="#city-rome">
                  <Button size="lg" className="bg-white text-green-700 hover:bg-green-50">
                    Start with Rome
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
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
                      <a href={`#city-${city.slug}`}>
                        <Button className="w-full bg-gradient-to-r from-green-700 to-red-600 hover:from-green-800 hover:to-red-700">
                          Explore {city.name}
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </a>
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



        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl space-y-16">
            {visibleCities.map((city) => (
              <div key={city.slug} id={`city-${city.slug}`} className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{city.emoji}</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Gluten-Free Restaurants in {city.name}
                  </h2>
                </div>
                <div className="space-y-5">
                  {city.restaurants.map((r, index) => (
                    <Card
                      key={r.name}
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

                        {r.cuisineTypes && r.cuisineTypes.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mb-3 ml-9">
                            {r.cuisineTypes.map((cuisine) => (
                              <Badge
                                key={cuisine}
                                variant="outline"
                                className="text-xs font-medium text-gray-600 border-gray-200 bg-gray-50"
                              >
                                🍴 {cuisine}
                              </Badge>
                            ))}
                          </div>
                        )}

                        <div className="flex flex-wrap gap-2 mb-3 ml-9">
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
                              className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
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
            ))}
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
