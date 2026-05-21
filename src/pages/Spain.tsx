import { useEffect, useMemo } from "react";
import { MapPin, Star, ArrowLeft, Globe, Shield, Award, Users, ArrowRight, Clock, Phone, ShieldCheck, ExternalLink, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { UserMenu } from "@/components/layout/UserMenu";
import { AddRestaurantDialog } from "@/components/restaurants/AddRestaurantDialog";
import { SEOHead } from "@/components/SEOHead";

// --- Restaurant data (kept from previous Spain page) ---
export type SpainRestaurant = {
  name: string;
  icon: string;
  city: string;
  specialty: string;
  address: string;
  hours?: string;
  phone?: string;
  website?: string;
  directionsUrl: string;
  cuisineTypes: string[];
  celiacSafe: "dedicated-facility" | "protocols-in-place";
  menuType: "fully-gluten-free" | "mixed-menu";
  rating: number;
  reviewCount: number;
};

export const spainRestaurants: SpainRestaurant[] = [
  {
    name: "Grosso Napoletano Senza Glutine",
    icon: "🍕",
    city: "Barcelona",
    specialty: "Authentic Neapolitan pizza, 100% gluten-free",
    address: "Carrer d'Enric Granados 9, 08007 Barcelona",
    hours: "Daily: 12:00 PM – 12:00 AM",
    phone: "+34 933 789 012",
    website: "www.grossonapoletano.com",
    directionsUrl: "https://www.google.com/maps/place/Grosso+Napoletano",
    cuisineTypes: ["Pizza", "Italian"],
    celiacSafe: "dedicated-facility",
    menuType: "fully-gluten-free",
    rating: 4.9,
    reviewCount: 567,
  },
  {
    name: "Jansana Gluten Free Bakery",
    icon: "🥖",
    city: "Barcelona",
    specialty: "Artisanal GF breads and traditional Catalan pastries",
    address: "Carrer de Verdi 38, 08012 Barcelona",
    hours: "Mon–Sat: 8:00 AM – 8:00 PM",
    phone: "+34 932 123 456",
    website: "www.jansanagf.com",
    directionsUrl: "https://www.google.com/maps/place/Jansana+Gluten+Free+Bakery",
    cuisineTypes: ["Bakery", "Catalan"],
    celiacSafe: "dedicated-facility",
    menuType: "fully-gluten-free",
    rating: 4.8,
    reviewCount: 342,
  },
  {
    name: "Cøliaki",
    icon: "🥖",
    city: "Seville",
    specialty: "Specialized celiac bakery — 100% GF",
    address: "Calle Sierpes 45, 41004 Seville",
    hours: "Mon–Sat: 8:30 AM – 7:30 PM",
    phone: "+34 954 901 234",
    website: "www.coliaki.es",
    directionsUrl: "https://www.google.com/maps/place/Coliaki+Sevilla",
    cuisineTypes: ["Bakery", "Andalusian"],
    celiacSafe: "dedicated-facility",
    menuType: "fully-gluten-free",
    rating: 4.8,
    reviewCount: 276,
  },
  {
    name: "chök Sagasta | Pastelería sin gluten",
    icon: "🍰",
    city: "Madrid",
    specialty: "Premium gluten-free pastries and desserts",
    address: "Calle de Sagasta 28, 28004 Madrid",
    hours: "Mon–Sat: 9:00 AM – 9:00 PM",
    phone: "+34 915 234 567",
    website: "www.choksagasta.com",
    directionsUrl: "https://www.google.com/maps/place/Chok+Sagasta+Madrid",
    cuisineTypes: ["Pastry", "Bakery"],
    celiacSafe: "dedicated-facility",
    menuType: "fully-gluten-free",
    rating: 4.7,
    reviewCount: 234,
  },
  {
    name: "La Nonna Carmela",
    icon: "🍝",
    city: "Madrid",
    specialty: "Traditional Italian trattoria with full GF menu",
    address: "Calle de Espíritu Santo 27, 28004 Madrid",
    hours: "Daily: 1:00 PM – 11:30 PM",
    phone: "+34 914 567 890",
    website: "www.lanonacarmela.es",
    directionsUrl: "https://www.google.com/maps/place/La+Nonna+Carmela",
    cuisineTypes: ["Italian", "Trattoria"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    rating: 4.7,
    reviewCount: 312,
  },
  {
    name: "Chök - Chocolate Bar",
    icon: "🍫",
    city: "Barcelona",
    specialty: "Artisanal chocolate with extensive GF selection",
    address: "Carrer del Comerç 36, 08003 Barcelona",
    hours: "Daily: 10:00 AM – 10:00 PM",
    phone: "+34 934 345 678",
    website: "www.chokbarcelona.com",
    directionsUrl: "https://www.google.com/maps/place/Chok+Barcelona",
    cuisineTypes: ["Chocolate", "Desserts"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    rating: 4.6,
    reviewCount: 289,
  },
  {
    name: "YUMMY heladería",
    icon: "🍨",
    city: "Valencia",
    specialty: "Artisanal ice cream with many GF flavors",
    address: "Calle de la Paz 15, 46003 Valencia",
    hours: "Daily: 11:00 AM – 11:00 PM",
    phone: "+34 963 890 123",
    website: "www.yummyvalencia.com",
    directionsUrl: "https://www.google.com/maps/place/Yummy+Heladeria",
    cuisineTypes: ["Ice Cream", "Gelateria"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    rating: 4.5,
    reviewCount: 189,
  },
  {
    name: "Messie Sin Gluten Muntaner",
    icon: "🍝",
    city: "Barcelona",
    specialty: "Italian restaurant with extensive GF menu",
    address: "Carrer de Muntaner 193, 08036 Barcelona",
    hours: "Daily: 12:00 PM – 11:00 PM",
    phone: "+34 933 456 789",
    website: "www.messiesingluten.com",
    directionsUrl: "https://www.google.com/maps/place/Messie+Sin+Gluten",
    cuisineTypes: ["Italian"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    rating: 4.6,
    reviewCount: 198,
  },
  {
    name: "Messié Pizza Gluten Free Gràcia",
    icon: "🍕",
    city: "Barcelona",
    specialty: "Dedicated gluten-free pizzeria",
    address: "Carrer de Guillem Tell 20, 08006 Barcelona",
    hours: "Daily: 12:00 PM – 11:30 PM",
    phone: "+34 932 234 567",
    website: "www.messiepizzagracia.com",
    directionsUrl: "https://www.google.com/maps/place/Messie+Pizza+Gracia",
    cuisineTypes: ["Pizza", "Italian"],
    celiacSafe: "dedicated-facility",
    menuType: "fully-gluten-free",
    rating: 4.7,
    reviewCount: 221,
  },
  {
    name: "ARUKU",
    icon: "🍜",
    city: "Barcelona",
    specialty: "Asian fusion with extensive GF options",
    address: "Carrer del Carme 21, 08001 Barcelona",
    hours: "Tue–Sun: 7:00 PM – 12:00 AM",
    phone: "+34 932 678 901",
    website: "www.arukubarcelona.com",
    directionsUrl: "https://www.google.com/maps/place/Aruku+Barcelona",
    cuisineTypes: ["Asian Fusion", "Japanese"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    rating: 4.5,
    reviewCount: 156,
  },
  {
    name: "Restaurante En Ville",
    icon: "🍽️",
    city: "Barcelona",
    specialty: "French fine dining with adapted GF menu",
    address: "Carrer del Dr. Dou 14, 08001 Barcelona",
    hours: "Tue–Sat: 7:00 PM – 11:30 PM",
    phone: "+34 934 123 456",
    website: "www.envillebarcelona.com",
    directionsUrl: "https://www.google.com/maps/place/En+Ville+Barcelona",
    cuisineTypes: ["French", "Fine Dining"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    rating: 4.6,
    reviewCount: 143,
  },
  {
    name: "La Papita de Leche Take Away",
    icon: "🥙",
    city: "Madrid",
    specialty: "Quick service with selected GF items",
    address: "Calle de Hortaleza 62, 28004 Madrid",
    hours: "Daily: 11:00 AM – 10:00 PM",
    phone: "+34 915 012 345",
    website: "www.lapapitadeleche.com",
    directionsUrl: "https://www.google.com/maps/place/La+Papita+de+Leche",
    cuisineTypes: ["Fast Casual", "Spanish"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    rating: 4.4,
    reviewCount: 156,
  },
  {
    name: "Glutery",
    icon: "🥐",
    city: "Barcelona",
    specialty: "Dedicated GF bakery and brunch spot in Gràcia",
    address: "Carrer del Torrent de l'Olla, 85, 08012 Barcelona",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Glutery+Barcelona",
    cuisineTypes: ["Bakery", "Brunch"],
    celiacSafe: "dedicated-facility",
    menuType: "fully-gluten-free",
    rating: 4.7,
    reviewCount: 180,
  },
  {
    name: "The Glutenfree Company",
    icon: "🥖",
    city: "Málaga",
    specialty: "100% gluten-free bakery and café in central Málaga",
    address: "C. Mariblanca, 4, 29012 Málaga",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=The+Glutenfree+Company+Malaga",
    cuisineTypes: ["Bakery", "Café"],
    celiacSafe: "dedicated-facility",
    menuType: "fully-gluten-free",
    rating: 4.7,
    reviewCount: 165,
  },
  {
    name: "Señora Pan",
    icon: "🥖",
    city: "Seville",
    specialty: "Dedicated GF bakery in central Sevilla",
    address: "C. Zaragoza, 64, 41001 Sevilla",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Senora+Pan+Sevilla",
    cuisineTypes: ["Bakery"],
    celiacSafe: "dedicated-facility",
    menuType: "fully-gluten-free",
    rating: 4.6,
    reviewCount: 140,
  },
  {
    name: "Pizza Natura saludable y sin gluten",
    icon: "🍕",
    city: "Barcelona",
    specialty: "Healthy gluten-free pizza in Eixample",
    address: "C/ de Pau Claris, 153, 08009 Barcelona",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Pizza+Natura+sin+gluten+Barcelona",
    cuisineTypes: ["Pizza", "Italian"],
    celiacSafe: "dedicated-facility",
    menuType: "fully-gluten-free",
    rating: 4.6,
    reviewCount: 152,
  },
  {
    name: "Coffee and Toffee",
    icon: "☕",
    city: "Torrevieja",
    specialty: "GF-friendly coffee shop on the Costa Blanca",
    address: "C. Joaquín Chapaprieta, 10, 03181 Torrevieja, Alicante",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Coffee+and+Toffee+Torrevieja",
    cuisineTypes: ["Café", "Bakery"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    rating: 4.5,
    reviewCount: 110,
  },
  {
    name: "Vive Libre",
    icon: "🌿",
    city: "Tías",
    specialty: "Gluten-free restaurant in Lanzarote, Canary Islands",
    address: "Av. de las Playas, 69 CC Costa Luz, 50, 35510 Tías, Las Palmas",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Vive+Libre+Lanzarote",
    cuisineTypes: ["Mediterranean", "Healthy"],
    celiacSafe: "dedicated-facility",
    menuType: "fully-gluten-free",
    rating: 4.7,
    reviewCount: 130,
  },
  {
    name: "Gluten Tag! Obrador Sense Gluten",
    icon: "🥐",
    city: "Barcelona",
    specialty: "Dedicated GF obrador (workshop bakery) in Gràcia",
    address: "Travessera de Gràcia, 173, 08012 Barcelona",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Gluten+Tag+Obrador+Barcelona",
    cuisineTypes: ["Bakery", "Pastry"],
    celiacSafe: "dedicated-facility",
    menuType: "fully-gluten-free",
    rating: 4.7,
    reviewCount: 145,
  },
  {
    name: "Bloome by Sasha",
    icon: "🥗",
    city: "Barcelona",
    specialty: "Healthy GF-friendly brunch and lunch on Pg. de St. Joan",
    address: "Pg. de St. Joan, 80, 08009 Barcelona",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Bloome+by+Sasha+Barcelona",
    cuisineTypes: ["Brunch", "Healthy"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    rating: 4.5,
    reviewCount: 120,
  },
  {
    name: "Restaurante Casa San Juan",
    icon: "🍷",
    city: "Madrid",
    specialty: "Traditional Spanish cuisine with celiac-aware kitchen",
    address: "C. de las Huertas, 10, 28012 Madrid",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Casa+San+Juan+Madrid",
    cuisineTypes: ["Spanish", "Traditional"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    rating: 4.5,
    reviewCount: 175,
  },
  {
    name: "El Pescaíto de Carmela",
    icon: "🐟",
    city: "Granada",
    specialty: "Andalusian fried fish tavern with dedicated GF options",
    address: "Calle Marqués de Gerona, 12, 18001 Granada",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=El+Pescaito+de+Carmela+Granada",
    cuisineTypes: ["Andalusian", "Seafood"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    rating: 4.6,
    reviewCount: 160,
  },
  {
    name: "Okashi Sanda",
    icon: "🍵",
    city: "Madrid",
    specialty: "Japanese-style GF bakery and patisserie",
    address: "Calle de San Vicente Ferrer, 22, 28004 Madrid",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Okashi+Sanda+Madrid",
    cuisineTypes: ["Japanese", "Bakery"],
    celiacSafe: "dedicated-facility",
    menuType: "fully-gluten-free",
    rating: 4.7,
    reviewCount: 195,
  },
  {
    name: "Gluky Gluten Free Bakery",
    icon: "🥐",
    city: "Palma",
    specialty: "Dedicated gluten-free bakery in Mallorca",
    address: "Carrer de Pérez Galdós 14, local 2, 07006 Palma, Illes Balears",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Gluky+Gluten+Free+Bakery+Palma",
    cuisineTypes: ["Bakery", "Pastry"],
    celiacSafe: "dedicated-facility",
    menuType: "fully-gluten-free",
    rating: 4.8,
    reviewCount: 210,
  },
  {
    name: "Solis",
    icon: "🍽️",
    city: "Costa Adeje",
    specialty: "Mediterranean restaurant with celiac-friendly menu in Tenerife",
    address: "C. Valencia, 1, 38660 Costa Adeje, Santa Cruz de Tenerife",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Solis+Costa+Adeje",
    cuisineTypes: ["Mediterranean"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    rating: 4.5,
    reviewCount: 140,
  },
  {
    name: "Berguna Gluten Free",
    icon: "🥖",
    city: "Valencia",
    specialty: "100% gluten-free shop and bakery in central Valencia",
    address: "C/ de Moratín, 13, 46002 València",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Berguna+Gluten+Free+Valencia",
    cuisineTypes: ["Bakery", "Shop"],
    celiacSafe: "dedicated-facility",
    menuType: "fully-gluten-free",
    rating: 4.6,
    reviewCount: 125,
  },
  {
    name: "Senza Glutine di Grosso Napoletano (Madrid)",
    icon: "🍕",
    city: "Madrid",
    specialty: "100% gluten-free Neapolitan pizza in central Madrid",
    address: "C. de la Cruz, 7, Centro, 28012 Madrid",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Senza+Glutine+Grosso+Napoletano+Madrid",
    cuisineTypes: ["Pizza", "Italian"],
    celiacSafe: "dedicated-facility",
    menuType: "fully-gluten-free",
    rating: 4.8,
    reviewCount: 240,
  },
  {
    name: "Beccy Boo's Bar and Bistro",
    icon: "🍴",
    city: "Arguineguín",
    specialty: "GF-friendly British-style bistro in Gran Canaria",
    address: "Av. Francisco Navarro Navarro, 2, 35120 Arguineguín, Las Palmas",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Beccy+Boos+Arguineguin",
    cuisineTypes: ["Bistro", "International"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    rating: 4.6,
    reviewCount: 150,
  },
  {
    name: "La Plancha Taberna",
    icon: "🥩",
    city: "Málaga",
    specialty: "Traditional Spanish tavern with celiac-aware kitchen",
    address: "Calle Héroe de Sostoa, 12-14, Local 3, 29002 Málaga",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=La+Plancha+Taberna+Malaga",
    cuisineTypes: ["Spanish", "Tapas"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    rating: 4.5,
    reviewCount: 115,
  },
  {
    name: "Grosso Napoletano (València)",
    icon: "🍕",
    city: "Barcelona",
    specialty: "Gluten-free Neapolitan pizza branch on C/ València",
    address: "C/ de València, 234, 08007 Barcelona",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Grosso+Napoletano+Valencia+Barcelona",
    cuisineTypes: ["Pizza", "Italian"],
    celiacSafe: "dedicated-facility",
    menuType: "fully-gluten-free",
    rating: 4.7,
    reviewCount: 200,
  },
  {
    name: "SOLATZ by Saez",
    icon: "🍞",
    city: "Palma",
    specialty: "Dedicated GF bakery and café in Palma de Mallorca",
    address: "Carrer de Cecili Metel, 3, Local A, 07003 Palma, Illes Balears",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Solatz+by+Saez+Palma",
    cuisineTypes: ["Bakery", "Café"],
    celiacSafe: "dedicated-facility",
    menuType: "fully-gluten-free",
    rating: 4.7,
    reviewCount: 135,
  },
  {
    name: "Chök The Chocolate Kitchen",
    icon: "🍫",
    city: "Barcelona",
    specialty: "Original Chök chocolate kitchen in Ciutat Vella",
    address: "Carrer de les Ramelleres, 26, Ciutat Vella, 08001 Barcelona",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Chok+The+Chocolate+Kitchen+Barcelona",
    cuisineTypes: ["Chocolate", "Desserts"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    rating: 4.6,
    reviewCount: 220,
  },
  {
    name: "Backer sin gluten",
    icon: "🥖",
    city: "Santa Cruz de Tenerife",
    specialty: "Gluten-free bakery in Tenerife",
    address: "C. Pérez Galdós, 9, 38002 Santa Cruz de Tenerife",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Backer+sin+gluten+Tenerife",
    cuisineTypes: ["Bakery"],
    celiacSafe: "dedicated-facility",
    menuType: "fully-gluten-free",
    rating: 4.6,
    reviewCount: 95,
  },
  {
    name: "Amaranto Concept Store",
    icon: "🥗",
    city: "A Coruña",
    specialty: "Healthy GF concept store and café in Galicia",
    address: "Rúa Picavia, 12, B, 15004 A Coruña",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Amaranto+Concept+Store+A+Coruna",
    cuisineTypes: ["Café", "Healthy"],
    celiacSafe: "dedicated-facility",
    menuType: "fully-gluten-free",
    rating: 4.7,
    reviewCount: 105,
  },
  {
    name: "Sana Locura Gluten Free Bakery (Valencia)",
    icon: "🥐",
    city: "Valencia",
    specialty: "Dedicated GF bakery — Valencia branch",
    address: "C/ del Convent de Sta. Clara, 12, 46002 València",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Sana+Locura+Valencia",
    cuisineTypes: ["Bakery", "Pastry"],
    celiacSafe: "dedicated-facility",
    menuType: "fully-gluten-free",
    rating: 4.8,
    reviewCount: 175,
  },
  {
    name: "Ardemos",
    icon: "🍷",
    city: "Madrid",
    specialty: "Wine bar and bistro with celiac-aware kitchen",
    address: "C. de Carranza, 4, 28004 Madrid",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Ardemos+Madrid",
    cuisineTypes: ["Bistro", "Wine Bar"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    rating: 4.5,
    reviewCount: 130,
  },
  {
    name: "Celicientos",
    icon: "🥪",
    city: "Valencia",
    specialty: "100% gluten-free deli and café",
    address: "Av. de França, 55, 46023 València",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Celicientos+Valencia",
    cuisineTypes: ["Café", "Deli"],
    celiacSafe: "dedicated-facility",
    menuType: "fully-gluten-free",
    rating: 4.6,
    reviewCount: 110,
  },
  {
    name: "Pastelería La Oriental",
    icon: "🍰",
    city: "Madrid",
    specialty: "Pastry shop with extensive GF offering in Moncloa",
    address: "C. de Ferraz, 47, Moncloa - Aravaca, 28008 Madrid",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Pasteleria+La+Oriental+Madrid",
    cuisineTypes: ["Pastry", "Bakery"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    rating: 4.5,
    reviewCount: 90,
  },
  {
    name: "Cøliaki (Barcelona)",
    icon: "🥖",
    city: "Barcelona",
    specialty: "Dedicated celiac bakery and café in Eixample",
    address: "C/ de Mallorca, 504, bajos, 08013 Eixample, Barcelona",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Coliaki+Barcelona",
    cuisineTypes: ["Bakery", "Café"],
    celiacSafe: "dedicated-facility",
    menuType: "fully-gluten-free",
    rating: 4.7,
    reviewCount: 160,
  },
  {
    name: "Sana Locura Gluten Free Bakery (Madrid)",
    icon: "🥐",
    city: "Madrid",
    specialty: "Dedicated GF bakery — Madrid branch",
    address: "Calle del Gral Oraá, 49, 28006 Madrid",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Sana+Locura+Madrid",
    cuisineTypes: ["Bakery", "Pastry"],
    celiacSafe: "dedicated-facility",
    menuType: "fully-gluten-free",
    rating: 4.8,
    reviewCount: 215,
  },
  {
    name: "Pizza Natura (Madrid)",
    icon: "🍕",
    city: "Madrid",
    specialty: "Healthy GF pizza branch in central Madrid",
    address: "C. de Jovellanos, 6, 28014 Madrid",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Pizza+Natura+Madrid",
    cuisineTypes: ["Pizza", "Italian"],
    celiacSafe: "dedicated-facility",
    menuType: "fully-gluten-free",
    rating: 4.6,
    reviewCount: 140,
  },
  {
    name: "Carsi's Bakery Gluten Free",
    icon: "🥖",
    city: "Pollença",
    specialty: "Dedicated GF bakery in Mallorca",
    address: "Carrer de Pius XI, 15, 07460 Pollença, Illes Balears",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Carsis+Bakery+Pollenca",
    cuisineTypes: ["Bakery"],
    celiacSafe: "dedicated-facility",
    menuType: "fully-gluten-free",
    rating: 4.7,
    reviewCount: 100,
  },
  {
    name: "Senza Glutine di Grosso Napoletano (Bilbao)",
    icon: "🍕",
    city: "Bilbao",
    specialty: "100% gluten-free Neapolitan pizza in Bilbao",
    address: "Iparraguirre Kalea, 15, Abando, 48009 Bilbao, Bizkaia",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Senza+Glutine+Grosso+Napoletano+Bilbao",
    cuisineTypes: ["Pizza", "Italian"],
    celiacSafe: "dedicated-facility",
    menuType: "fully-gluten-free",
    rating: 4.7,
    reviewCount: 155,
  },
  {
    name: "Bloome By Sasha (Via Laietana)",
    icon: "🥗",
    city: "Barcelona",
    specialty: "Healthy GF-friendly bistro on Via Laietana",
    address: "Via Laietana, 45, 08003 Barcelona",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Bloome+by+Sasha+Via+Laietana",
    cuisineTypes: ["Brunch", "Healthy"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    rating: 4.5,
    reviewCount: 110,
  },
  {
    name: "chök Pau | Pastelería sin gluten Valencia",
    icon: "🍰",
    city: "Valencia",
    specialty: "Premium gluten-free pastries — Valencia branch",
    address: "C/ de la Pau, 19, Ciutat Vella, 46003 València",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Chok+Pau+Valencia",
    cuisineTypes: ["Pastry", "Bakery"],
    celiacSafe: "dedicated-facility",
    menuType: "fully-gluten-free",
    rating: 4.7,
    reviewCount: 130,
  },
  {
    name: "Vegan Bombon Sin Gluten",
    icon: "🍫",
    city: "Alicante",
    specialty: "Vegan and gluten-free chocolatier in central Alicante",
    address: "C. Canalejas, 8, 03001 Alicante",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Vegan+Bombon+Sin+Gluten+Alicante",
    cuisineTypes: ["Vegan", "Chocolate"],
    celiacSafe: "dedicated-facility",
    menuType: "fully-gluten-free",
    rating: 4.7,
    reviewCount: 95,
  },
  {
    name: "Il Capriccio",
    icon: "🍝",
    city: "Palma",
    specialty: "Italian restaurant with GF menu in Palma",
    address: "Carrer de Costa i Llobera, 24, 07005 Palma, Illes Balears",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Il+Capriccio+Palma",
    cuisineTypes: ["Italian"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    rating: 4.5,
    reviewCount: 120,
  },
  {
    name: "Kuki Cookie Bakery",
    icon: "🍪",
    city: "Bilbao",
    specialty: "Dedicated GF cookie bakery in Abando, Bilbao",
    address: "Colón de Larreátegui K., 34, Lonja 1 Izq., Abando, 48011 Bilbao, Bizkaia",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Kuki+Cookie+Bakery+Bilbao",
    cuisineTypes: ["Bakery", "Desserts"],
    celiacSafe: "dedicated-facility",
    menuType: "fully-gluten-free",
    rating: 4.7,
    reviewCount: 115,
  },
  {
    name: "chök (Granada)",
    icon: "🍫",
    city: "Granada",
    specialty: "Chök gluten-free pastry shop — Granada branch",
    address: "C. Mesones, 10, Centro, 18001 Granada",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Chok+Granada",
    cuisineTypes: ["Pastry", "Chocolate"],
    celiacSafe: "dedicated-facility",
    menuType: "fully-gluten-free",
    rating: 4.7,
    reviewCount: 140,
  },
  {
    name: "Avocado Mallorca",
    icon: "🥑",
    city: "Palma",
    specialty: "Healthy GF-friendly brunch spot in Palma",
    address: "Avinguda de Joan Miró, 279, L2, 07015 Palma, Illes Balears",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Avocado+Mallorca+Palma",
    cuisineTypes: ["Brunch", "Healthy"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    rating: 4.6,
    reviewCount: 125,
  },
];


const Spain = () => {
  useEffect(() => {
    const existing = document.querySelector('script[data-schema="spain-gf"]');
    if (existing) existing.remove();
    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.setAttribute("data-schema", "spain-gf");
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Gluten-Free Restaurants in Spain",
      description:
        "Find FACE-certified gluten-free restaurants across Spain — Barcelona, Madrid, Valencia, Seville and more.",
      url: "https://glutenfreeplace.org/spain",
    });
    document.head.appendChild(schema);
    return () => {
      const s = document.querySelector('script[data-schema="spain-gf"]');
      if (s) s.remove();
    };
  }, []);

  const cities = [
    {
      name: "Barcelona",
      image: "photo-1583422409516-2895a77efded",
      places: spainRestaurants.filter((r) => r.city === "Barcelona").length,
      rating: 4.7,
      description: "Catalan capital with dedicated GF pizzerias, bakeries and tapas bars",
      route: "/spain/barcelona",
      highlights: ["Grosso Napoletano", "Jansana Bakery", "Messié Pizza"],
    },
    {
      name: "Madrid",
      image: "photo-1543783207-ec64e4d95325",
      places: spainRestaurants.filter((r) => r.city === "Madrid").length,
      rating: 4.6,
      description: "Spain's vibrant capital with FACE-certified trattorias and pastry shops",
      route: "/spain/madrid",
      highlights: ["chök Sagasta", "La Nonna Carmela", "La Papita"],
    },
    {
      name: "Valencia",
      image: "photo-1599930113854-d6d7fd521f10",
      places: spainRestaurants.filter((r) => r.city === "Valencia").length,
      rating: 4.5,
      description: "Mediterranean city famous for naturally GF paella and artisan gelato",
      route: "/spain/valencia",
      highlights: ["YUMMY heladería", "Gluten-free paella", "Beachfront cafés"],
    },
    {
      name: "Seville",
      image: "photo-1559682468-a6a29e7d9517",
      places: spainRestaurants.filter((r) => r.city === "Seville").length,
      rating: 4.7,
      description: "Andalusian gem with dedicated celiac bakeries and tapas",
      route: "/spain/seville",
      highlights: ["Cøliaki", "Tapas Tours", "GF Flamenco Cafés"],
    },
  ];


  const topRestaurants = useMemo(
    () =>
      [...spainRestaurants]
        .sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount)
        .slice(0, 25),
    []
  );

  const faqItems = [
    {
      question: "Is Spain a good destination for gluten-free travelers?",
      answer:
        "Yes — Spain is one of the most celiac-friendly countries in Europe. The Spanish Celiac Association (FACE) certifies hundreds of restaurants and bakeries, and most major cities have at least one 100% gluten-free establishment.",
    },
    {
      question: "What does FACE certification mean?",
      answer:
        "FACE (Federación de Asociaciones de Celíacos de España) audits restaurants and brands for strict gluten-free protocols. A FACE-certified spot is considered very safe for celiacs.",
    },
    {
      question: "What traditional Spanish foods are naturally gluten-free?",
      answer:
        "Tortilla española, jamón ibérico, gazpacho, paella (made with rice), grilled seafood, padrón peppers and most tapas based on meat, fish or vegetables are naturally gluten-free — always confirm sauces and fryer oil.",
    },
    {
      question: "How do I communicate celiac needs in Spain?",
      answer:
        'Use "soy celíaco/a, sin gluten, por favor" (I am celiac, gluten-free please). Most restaurants in tourist areas understand English, and FACE-certified spots have trained staff.',
    },
    {
      question: "Which Spanish city is best for gluten-free dining?",
      answer:
        "Barcelona and Madrid lead with the most dedicated 100% GF venues, while Seville and Valencia offer excellent celiac bakeries and seafood spots.",
    },
    {
      question: "Can I find gluten-free products in Spanish supermarkets?",
      answer:
        "Yes — Mercadona, Carrefour and El Corte Inglés all stock extensive gluten-free ranges, and the FACE crossed-grain logo is widely used on packaging.",
    },
  ];

  const menuTypeBadge = (type: SpainRestaurant["menuType"]) =>
    type === "fully-gluten-free" ? (
      <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200 text-xs">🥖 Fully GF</Badge>
    ) : (
      <Badge className="bg-violet-100 text-violet-800 border-violet-200 text-xs">🍽️ Mixed Menu</Badge>
    );

  const celiacLabel = (level: SpainRestaurant["celiacSafe"]) =>
    level === "dedicated-facility" ? "Dedicated GF Facility" : "Celiac Protocols in Place";

  return (
    <>
      <SEOHead
        title="Gluten-Free Restaurants in Spain | Celiac-Safe Dining Guide 2026"
        description="Find FACE-certified gluten-free restaurants across Spain. Verified celiac-safe dining in Barcelona, Madrid, Valencia, Seville & more. Real reviews from GF travelers."
        canonical="/spain"
      />
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-yellow-50">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-md border-b border-red-100 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-red-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent">
                Gluten-Free Places
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-red-600 transition-colors whitespace-nowrap">Home</Link>
              <Link to="/countries" className="text-gray-700 hover:text-red-600 transition-colors">Countries</Link>
              <Link to="#cities" className="text-gray-700 hover:text-red-600 transition-colors">Cities</Link>
              <Link to="#faq" className="text-gray-700 hover:text-red-600 transition-colors">FAQ</Link>
              <UserMenu />
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="relative py-12 overflow-hidden bg-gradient-to-r from-red-600 to-yellow-500">
          <div className="absolute inset-0 bg-black/30" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <Link to="/countries" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Countries
            </Link>
            <div className="max-w-4xl mx-auto">
              <span className="text-5xl mb-4 block">🇪🇸</span>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                <MapPin className="h-4 w-4 mr-2" />
                {spainRestaurants.length}+ Gluten-Free Places
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                Gluten-Free Spain
              </h1>
              <p className="text-lg text-white/90 mb-6 leading-relaxed max-w-2xl mx-auto">
                Discover FACE-certified celiac-safe dining across Spain — from Barcelona's dedicated pizzerias
                to Seville's artisan GF bakeries and naturally gluten-free Valencian paella.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="#cities">
                  <Button size="lg" className="bg-white text-red-700 hover:bg-red-50">
                    Explore Cities
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <AddRestaurantDialog
                  city="Spain"
                  triggerClassName="border-white/70 bg-transparent !text-white hover:bg-white/10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Cities */}
        <section id="cities" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-red-100 text-red-800 border-red-200">
                <MapPin className="h-4 w-4 mr-2" />
                Explore by City
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Top Gluten-Free Cities in Spain
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose a city to explore verified gluten-free restaurants with detailed reviews and safety information.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cities.map((city, index) => (
                <Card
                  key={city.name}
                  className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg animate-fade-in overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={`https://images.unsplash.com/${city.image}?auto=format&fit=crop&w=600&q=80`}
                      alt={`Gluten-free restaurants in ${city.name}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span className="font-semibold text-sm">{city.rating}</span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-2xl font-bold text-white">{city.name}</h3>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <p className="text-gray-600 text-sm mb-3">{city.description}</p>
                    <div className="flex items-center text-red-600 mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="font-semibold text-sm">{city.places} places</span>
                    </div>
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 mb-2">Popular spots:</p>
                      <div className="flex flex-wrap gap-1">
                        {city.highlights.map((spot) => (
                          <Badge key={spot} variant="secondary" className="text-xs bg-red-50 text-red-700">
                            {spot}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    {city.route !== "#" ? (
                      <Link to={city.route}>
                        <Button className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600">
                          Explore {city.name}
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </Link>
                    ) : (
                      <Button disabled className="w-full opacity-60">Coming Soon</Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Top Restaurants */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-red-100 text-red-800 border-red-200">
                <MapPin className="h-4 w-4 mr-2" />
                Top Restaurants
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Top Gluten-Free Restaurants in Spain
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our highest-rated gluten-free dining spots across Spain, verified for celiac safety.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-5">
              {topRestaurants.map((restaurant, index) => (
                <Card
                  key={restaurant.name}
                  className="hover:shadow-xl transition-all duration-200 border border-gray-100 overflow-hidden"
                >
                  <CardContent className="p-6">
                    <div className="mb-3">
                      <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 flex-wrap">
                        <span className="text-2xl">{restaurant.icon}</span>
                        <span>{restaurant.name}</span>
                        {index < 3 && (
                          <Badge className="bg-amber-100 text-amber-800 border-amber-200 text-xs ml-1">
                            Top {index + 1}
                          </Badge>
                        )}
                      </h3>
                      <p className="text-sm text-gray-500 mt-0.5 ml-9">{restaurant.specialty}</p>
                    </div>

                    <div className="flex items-center gap-2 mb-3 ml-9">
                      <div className="flex items-center">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(restaurant.rating)
                                ? "text-amber-400 fill-amber-400"
                                : i < restaurant.rating
                                ? "text-amber-400 fill-amber-200"
                                : "text-gray-200"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="font-semibold text-sm text-gray-900">{restaurant.rating}</span>
                      <span className="text-sm text-gray-400">({restaurant.reviewCount} reviews)</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-3 ml-9">
                      {restaurant.cuisineTypes.map((cuisine) => (
                        <Badge
                          key={cuisine}
                          variant="outline"
                          className="text-xs font-medium text-gray-600 border-gray-200 bg-gray-50"
                        >
                          🍴 {cuisine}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3 ml-9">
                      <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200 text-xs">
                        <ShieldCheck className="h-3.5 w-3.5 mr-1" />
                        Celiac Protocols
                      </Badge>
                      {menuTypeBadge(restaurant.menuType)}
                    </div>

                    <div className="bg-emerald-50 border border-emerald-100 rounded-lg px-4 py-2 mb-4 ml-9 flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span className="text-sm text-emerald-800">{celiacLabel(restaurant.celiacSafe)}</span>
                    </div>

                    <div className="space-y-2 ml-9 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-gray-400 mt-0.5 shrink-0" />
                        <span>{restaurant.address}, {restaurant.city}, Spain</span>
                      </div>
                      {restaurant.hours && (
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-gray-400 shrink-0" />
                          <span>{restaurant.hours}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-4 flex-wrap">
                        {restaurant.website && (
                          <button
                            type="button"
                            onClick={() => window.open(`https://${restaurant.website!.replace(/^https?:\/\//, "")}`, "_blank", "noopener,noreferrer")}
                            className="flex items-center gap-1.5 text-blue-600 hover:text-blue-800 transition-colors"
                          >
                            <Globe className="h-4 w-4" />
                            <span>{restaurant.website}</span>
                          </button>
                        )}
                        {restaurant.phone && (
                          <a
                            href={`tel:${restaurant.phone}`}
                            className="flex items-center gap-1.5 text-emerald-600 hover:text-emerald-800 transition-colors"
                          >
                            <Phone className="h-4 w-4" />
                            <span>{restaurant.phone}</span>
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="mt-4 ml-9">
                      <button
                        type="button"
                        onClick={() => window.open(restaurant.directionsUrl, "_blank", "noopener,noreferrer")}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Get Directions
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 bg-white/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-r from-red-50 to-yellow-50 border-red-200">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <Award className="w-12 h-12 text-red-600 flex-shrink-0" />
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">Gluten-Free Dining in Spain</h2>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Spain is one of Europe's most celiac-friendly destinations thanks to the Spanish Celiac
                        Association (FACE), which certifies hundreds of restaurants, bakeries and brands across the country.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Barcelona and Madrid lead with 100% gluten-free pizzerias, trattorias and pastry shops, while
                        Seville and Valencia offer dedicated celiac bakeries, naturally GF paella and artisan gelato.
                        Most tapas — jamón, tortilla, gazpacho, padrón peppers and grilled seafood — are naturally safe.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Trust */}
        <section className="py-16 bg-gradient-to-r from-red-600 to-yellow-500 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                <Shield className="h-4 w-4 mr-2" />
                Why Trust Us
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Safe Travels in Spain</h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                We understand the challenges of gluten-free travel. Every place is verified by our community.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Community Verified</h3>
                <p className="opacity-90">Every restaurant is reviewed by real travelers with gluten sensitivities.</p>
              </div>
              <div className="text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">FACE Certified Focus</h3>
                <p className="opacity-90">We highlight Spanish Celiac Association–certified restaurants and bakeries.</p>
              </div>
              <div className="text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Quality Assured</h3>
                <p className="opacity-90">Dedicated GF facilities and vetted establishments only.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-200">
                <Star className="h-4 w-4 mr-2" />
                Common Questions
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Everything you need to know about gluten-free dining in Spain.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-white rounded-lg border border-gray-200 shadow-sm px-6"
                  >
                    <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-red-600">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-red-500 to-yellow-500">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Explore Gluten-Free Spain?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of gluten-free travelers who trust our verified restaurant listings.
              Start your safe dining journey today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="#cities">
                <Button size="lg" className="bg-white text-red-700 hover:bg-red-50 px-8">
                  Explore Cities
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <AddRestaurantDialog
                city="Spain"
                triggerClassName="border-white bg-transparent !text-white hover:bg-white/10 px-8"
              />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-12">
          <div className="container mx-auto px-4 text-center">
            <Link to="/" className="flex items-center justify-center space-x-2 mb-4">
              <Globe className="h-6 w-6 text-red-500" />
              <span className="text-xl font-bold text-white">Gluten-Free Places</span>
            </Link>
            <p className="mb-4">Your trusted guide to gluten-free dining worldwide</p>
            <div className="flex justify-center space-x-6 text-sm">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <Link to="/countries" className="hover:text-white transition-colors">Countries</Link>
            </div>
            <p className="mt-8 text-xs">© 2026 Gluten-Free Places. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Spain;
