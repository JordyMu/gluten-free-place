import { useState, useMemo } from "react";
import { MapPin, Star, ArrowLeft, Phone, Clock, Globe, CheckCircle, Navigation, Heart, MessageCircle, Award, Shield, Search, Plus, Filter, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { RestaurantReviews } from "@/components/reviews/RestaurantReviews";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import CapeTownMap from "@/components/maps/CapeTownMap";

interface Restaurant {
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
  celiacSafe: "dedicated-facility" | "protocols-in-place";
  menuType: "fully-gluten-free" | "mixed-menu";
  rating: number;
  reviewCount: number;
  lat: number;
  lng: number;
  venueType: "bakery" | "restaurant" | "cafe";
  distance?: number;
}

const GlutenFreeCapeTown = () => {
  const [safetyFilter, setSafetyFilter] = useState<string>("all");
  const [venueFilter, setVenueFilter] = useState<string>("all");
  const [menuFilter, setMenuFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [isLocating, setIsLocating] = useState(false);
  const [locationError, setLocationError] = useState<string>("");
  const [sortByDistance, setSortByDistance] = useState(false);

  const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number): number => {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = 
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const handleFindNearMe = () => {
    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by your browser");
      return;
    }

    setIsLocating(true);
    setLocationError("");

    // Try with high accuracy first, then fallback to low accuracy
    const tryGetLocation = (highAccuracy: boolean) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          setSortByDistance(true);
          setIsLocating(false);
        },
        (error) => {
          // If high accuracy fails with timeout, try low accuracy
          if (highAccuracy && error.code === error.TIMEOUT) {
            tryGetLocation(false);
            return;
          }
          
          setIsLocating(false);
          switch (error.code) {
            case error.PERMISSION_DENIED:
              setLocationError("Location access denied. Please enable location in your browser settings.");
              break;
            case error.POSITION_UNAVAILABLE:
              setLocationError("Location information unavailable. Try again or check your device settings.");
              break;
            case error.TIMEOUT:
              setLocationError("Location request timed out. Please try again.");
              break;
            default:
              setLocationError("An unknown error occurred.");
          }
        },
        { 
          enableHighAccuracy: highAccuracy, 
          timeout: highAccuracy ? 15000 : 30000, 
          maximumAge: 60000 // Allow cached location up to 1 minute old
        }
      );
    };

    tryGetLocation(true);
  };

  const restaurants: Restaurant[] = [
    {
      name: "Off the Gluten Path - Sea Point",
      address: "277 Main Rd, Sea Point, Cape Town, 8060",
      hours: "Mon–Sat: 8:00AM – 5:00PM",
      phone: "+27 21 434 0015",
      website: "www.offtheglutenpath.co.za",
      directionsUrl: "https://www.google.com/maps/search/Off+the+Gluten+Path+277+Main+Rd+Sea+Point+Cape+Town",
      specialty: "100% Gluten-Free Bakery & Café",
      overview: "Off the Gluten Path is Cape Town's premier dedicated gluten-free bakery and café. Everything on the menu is completely gluten-free, making it a safe haven for celiacs.",
      menuHighlights: ["🥐 Fresh Croissants & Pastries (GF)", "🥖 Artisan Breads (GF)", "🍰 Cakes & Desserts (GF)", "🥗 Light Meals & Sandwiches (GF)"],
      proTip: "Their croissants are legendary - get there early!",
      icon: "🥐",
      featured: true,
      cuisineTypes: ["Bakery", "Café", "Gluten-Free"],
      celiacSafe: "dedicated-facility",
      menuType: "fully-gluten-free",
      rating: 4.9,
      reviewCount: 245,
      lat: -33.9175,
      lng: 18.3856,
      venueType: "bakery"
    },
    {
      name: "Off the Gluten Path - Woodstock",
      address: "7 Ravenscraig Road, Woodstock, Cape Town, 8060",
      hours: "Mon–Sat: 8:00AM – 5:00PM",
      phone: "+27 21 447 7741",
      website: "www.offtheglutenpath.co.za",
      directionsUrl: "https://www.google.com/maps/search/Off+the+Gluten+Path+Woodstock+Cape+Town",
      specialty: "100% Gluten-Free Bakery",
      overview: "The Woodstock branch of Off the Gluten Path offers the same exceptional quality and 100% gluten-free experience as the Sea Point location.",
      menuHighlights: ["🥐 Fresh Pastries (GF)", "🥖 Breads (GF)", "🍰 Cakes (GF)", "🥗 Light Meals (GF)"],
      proTip: "Great for picking up bread for the week!",
      icon: "🥐",
      featured: false,
      cuisineTypes: ["Bakery", "Café"],
      celiacSafe: "dedicated-facility",
      menuType: "fully-gluten-free",
      rating: 4.8,
      reviewCount: 156,
      lat: -33.9269,
      lng: 18.4439,
      venueType: "bakery"
    },
    {
      name: "Tashas Waterfront",
      address: "Shop 7117, Victoria & Alfred Waterfront, Cape Town, 8001",
      hours: "Daily: 7:00AM – 10:00PM",
      phone: "+27 21 419 0011",
      website: "www.tashas.co.za",
      directionsUrl: "https://www.google.com/maps/search/Tashas+Waterfront+Cape+Town",
      specialty: "Upscale Café with GF Options",
      overview: "Tashas is an upscale café chain known for its stylish ambiance and extensive menu with clearly marked gluten-free options.",
      menuHighlights: ["🥗 Salads with GF Options", "🍳 All-Day Breakfast (GF options)", "🥩 Grilled Proteins (GF)", "🍰 GF Desserts Available"],
      proTip: "Ask for the gluten-free menu - staff are well-trained!",
      icon: "🍽️",
      featured: true,
      cuisineTypes: ["Café", "International", "Healthy"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.5,
      reviewCount: 312,
      lat: -33.9036,
      lng: 18.4214,
      venueType: "cafe"
    },
    {
      name: "Hacienda Coastal Mexican",
      address: "92 Bree St, Cape Town City Centre, Cape Town, 8000",
      hours: "Daily: 12:00PM – 10:00PM",
      phone: "+27 21 422 2266",
      website: "www.hacienda.co.za",
      directionsUrl: "https://www.google.com/maps/search/Hacienda+Coastal+Mexican+92+Bree+St+Cape+Town",
      specialty: "Mexican Cuisine with GF Options",
      overview: "Hacienda offers authentic Mexican coastal cuisine with many naturally gluten-free options. Their corn-based dishes and fresh ingredients make it a great choice for celiacs.",
      menuHighlights: ["🌮 Corn Tortilla Tacos (GF)", "🥑 Fresh Guacamole (GF)", "🍲 Mexican Rice Bowls (GF)", "🌶️ Fresh Salsas (GF)"],
      proTip: "Corn tortillas are naturally gluten-free - perfect for tacos!",
      icon: "🌮",
      featured: true,
      cuisineTypes: ["Mexican", "Coastal", "Latin"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.4,
      reviewCount: 189,
      lat: -33.9208,
      lng: 18.4172,
      venueType: "restaurant"
    },
    {
      name: "GOLD Restaurant",
      address: "15 Bennett St, Green Point, Cape Town, 8005",
      hours: "Mon–Sat: 7:00PM – 11:00PM",
      phone: "+27 21 421 4653",
      website: "www.goldrestaurant.co.za",
      directionsUrl: "https://www.google.com/maps/search/GOLD+Restaurant+15+Bennett+St+Green+Point+Cape+Town",
      specialty: "African Dining Experience",
      overview: "GOLD Restaurant offers a unique African dining experience with a 14-course taste safari. They accommodate dietary requirements including gluten-free with advance notice.",
      menuHighlights: ["🍛 African Tasting Menu", "🍲 Traditional Stews (GF options)", "🎵 Live African Entertainment", "🌍 Pan-African Cuisine"],
      proTip: "Book in advance and mention gluten-free requirements!",
      icon: "🌍",
      featured: true,
      cuisineTypes: ["African", "Fine Dining", "Cultural"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.6,
      reviewCount: 267,
      lat: -33.9101,
      lng: 18.4077,
      venueType: "restaurant"
    },
    {
      name: "Wildsprout - Constantia",
      address: "Shop 1, Constantia Village Courtyard, Constantia, Cape Town, 7708",
      hours: "Mon–Fri: 7:00AM – 4:00PM, Sat–Sun: 8:00AM – 3:00PM",
      phone: "+27 21 794 7217",
      website: "www.wildsprout.co.za",
      directionsUrl: "https://www.google.com/maps/search/Wildsprout+Constantia+Village+Cape+Town",
      specialty: "Health-Focused Café",
      overview: "Wildsprout is a health-focused café offering organic, wholesome food with extensive gluten-free options. Perfect for health-conscious diners.",
      menuHighlights: ["🥗 Super Salads (GF)", "🥤 Fresh Smoothies & Juices", "🍳 Healthy Breakfasts (GF options)", "🥙 GF Wraps & Bowls"],
      proTip: "Their acai bowls are a must-try!",
      icon: "🥗",
      featured: true,
      cuisineTypes: ["Healthy", "Organic", "Café"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.7,
      reviewCount: 198,
      lat: -34.0191,
      lng: 18.4321,
      venueType: "cafe"
    },
    {
      name: "Zenzero",
      address: "Shop 2A, The Promenade, Victoria Rd, Camps Bay, Cape Town, 8040",
      hours: "Daily: 12:00PM – 10:00PM",
      phone: "+27 21 438 0983",
      website: "www.zenzero.co.za",
      directionsUrl: "https://www.google.com/maps/search/Zenzero+Camps+Bay+Cape+Town",
      specialty: "Italian Restaurant with GF Options",
      overview: "Zenzero in Camps Bay offers Italian cuisine with stunning ocean views. They offer gluten-free pasta and pizza options.",
      menuHighlights: ["🍝 GF Pasta Options", "🍕 GF Pizza Available", "🥗 Fresh Salads", "🍰 GF Desserts"],
      proTip: "Request GF pasta when ordering!",
      icon: "🍝",
      featured: true,
      cuisineTypes: ["Italian", "Mediterranean"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.3,
      reviewCount: 234,
      lat: -33.9506,
      lng: 18.3778,
      venueType: "restaurant"
    },
    {
      name: "Codfather Seafood & Sushi",
      address: "37 The Dr, Camps Bay, Cape Town, 8040",
      hours: "Daily: 12:00PM – 10:30PM",
      phone: "+27 21 438 0782",
      website: "www.codfather.co.za",
      directionsUrl: "https://www.google.com/maps/search/Codfather+Seafood+Sushi+Camps+Bay+Cape+Town",
      specialty: "Fresh Seafood & Sushi",
      overview: "Codfather is famous for its unique concept where you choose your fresh seafood from the market display. Many options are naturally gluten-free.",
      menuHighlights: ["🦐 Fresh Seafood (GF)", "🍣 Sushi (ask for GF soy sauce)", "🦞 Lobster & Prawns (GF)", "🐟 Grilled Fish (GF)"],
      proTip: "Choose your own fish and they'll cook it to your preference!",
      icon: "🦐",
      featured: true,
      cuisineTypes: ["Seafood", "Sushi", "Japanese"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.6,
      reviewCount: 345,
      lat: -33.9499,
      lng: 18.3773,
      venueType: "restaurant"
    },
    {
      name: "Time Out Market",
      address: "The Old Power Station, Dock Rd, Victoria & Alfred Waterfront, Cape Town, 7806",
      hours: "Daily: 9:00AM – 11:00PM",
      phone: "+27 21 418 8685",
      website: "www.timeoutmarket.com/capetown",
      directionsUrl: "https://www.google.com/maps/search/Time+Out+Market+Cape+Town+Waterfront",
      specialty: "Food Hall with Multiple Vendors",
      overview: "Time Out Market features multiple vendors, many offering gluten-free options. Great for groups with different dietary needs.",
      menuHighlights: ["🍔 Multiple Cuisine Options", "🌮 Various GF-Friendly Stalls", "🍰 Desserts (some GF)", "🍷 Wine & Drinks"],
      proTip: "Check with each vendor for GF options!",
      icon: "🏪",
      featured: true,
      cuisineTypes: ["Food Hall", "Various"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.4,
      reviewCount: 456,
      lat: -33.9051,
      lng: 18.4206,
      venueType: "restaurant"
    },
    {
      name: "Kanéla Café",
      address: "78 Regent Rd, Sea Point, Cape Town, 8001",
      hours: "Daily: 7:00AM – 4:00PM",
      phone: "+27 21 434 1128",
      website: "www.kanela.co.za",
      directionsUrl: "https://www.google.com/maps/search/Kanela+Cafe+78+Regent+Rd+Sea+Point+Cape+Town",
      specialty: "Greek-Mediterranean Café",
      overview: "Kanéla offers Greek-Mediterranean cuisine with many naturally gluten-free options in a relaxed seaside setting.",
      menuHighlights: ["🥗 Greek Salads (GF)", "🍳 Mediterranean Breakfast (GF options)", "🍖 Grilled Meats (GF)", "🧀 Feta & Mezze Platters (GF)"],
      proTip: "Their mezze platter is perfect for sharing!",
      icon: "🥗",
      featured: false,
      cuisineTypes: ["Greek", "Mediterranean", "Café"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.4,
      reviewCount: 156,
      lat: -33.9188,
      lng: 18.3862,
      venueType: "cafe"
    }
  ];

  // Stellenbosch Wine Region Restaurants
  const stellenboschRestaurants: Restaurant[] = [
    {
      name: "Delaire Graff Restaurant",
      address: "Helshoogte Pass, R310, Stellenbosch, 7600",
      hours: "Daily: 12:00PM – 3:00PM, 6:30PM – 9:30PM",
      phone: "+27 21 885 8160",
      website: "www.delaire.co.za",
      directionsUrl: "https://www.google.com/maps/search/Delaire+Graff+Restaurant+Stellenbosch",
      specialty: "Fine Dining with GF Options",
      overview: "Delaire Graff is one of Stellenbosch's most prestigious wine estates, offering fine dining with breathtaking views. They accommodate gluten-free diets with advance notice.",
      menuHighlights: ["🥩 Prime Beef & Game (GF)", "🦐 Fresh Seafood (GF)", "🥗 Seasonal Salads (GF)", "🍷 Estate Wine Pairing"],
      proTip: "Call ahead to request the gluten-free menu - their chef is very accommodating!",
      icon: "🍷",
      featured: true,
      cuisineTypes: ["Fine Dining", "French", "Contemporary"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.8,
      reviewCount: 312,
      lat: -33.9042,
      lng: 18.9232,
      venueType: "restaurant"
    },
    {
      name: "Overture at Hidden Valley",
      address: "Annandale Rd, Stellenbosch, 7600",
      hours: "Wed–Sun: 12:00PM – 3:00PM",
      phone: "+27 21 880 2646",
      website: "www.dineratoverture.co.za",
      directionsUrl: "https://www.google.com/maps/search/Overture+at+Hidden+Valley+Stellenbosch",
      specialty: "Award-Winning Fine Dining",
      overview: "Chef Bertus Basson's acclaimed restaurant offers creative South African cuisine with excellent gluten-free modifications available.",
      menuHighlights: ["🍽️ Tasting Menu (GF available)", "🥬 Farm-to-Table Ingredients", "🍷 Curated Wine Pairing", "🧀 Artisan Cheese Selection"],
      proTip: "Book well in advance and specify GF requirements when reserving!",
      icon: "🏆",
      featured: true,
      cuisineTypes: ["Fine Dining", "South African", "Contemporary"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.9,
      reviewCount: 189,
      lat: -33.9156,
      lng: 18.8789,
      venueType: "restaurant"
    },
    {
      name: "Tokara Restaurant",
      address: "Helshoogte Pass, R310, Stellenbosch, 7600",
      hours: "Tue–Sun: 12:00PM – 3:00PM",
      phone: "+27 21 808 5959",
      website: "www.tokara.com",
      directionsUrl: "https://www.google.com/maps/search/Tokara+Restaurant+Stellenbosch",
      specialty: "Modern South African Cuisine",
      overview: "Tokara offers stunning vineyard views and modern South African cuisine. Their kitchen is well-versed in gluten-free preparations.",
      menuHighlights: ["🥗 Seasonal Starters (GF)", "🍖 Grilled Meats (GF)", "🐟 Fresh Fish (GF)", "🍮 GF Desserts Available"],
      proTip: "Their olive oil is made on-site and naturally gluten-free!",
      icon: "🍷",
      featured: true,
      cuisineTypes: ["South African", "Mediterranean", "Wine Estate"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.6,
      reviewCount: 267,
      lat: -33.9012,
      lng: 18.9198,
      venueType: "restaurant"
    },
    {
      name: "The Kitchen at Maison",
      address: "Cnr Main & Andringa St, Stellenbosch, 7600",
      hours: "Mon–Sat: 7:30AM – 4:00PM",
      phone: "+27 21 883 3512",
      website: "www.maisonestate.co.za",
      directionsUrl: "https://www.google.com/maps/search/The+Kitchen+at+Maison+Stellenbosch",
      specialty: "Artisan Café with GF Options",
      overview: "The Kitchen at Maison is a charming café in the heart of Stellenbosch offering homestyle cooking with gluten-free bread and pastry options.",
      menuHighlights: ["🥐 GF Pastries Available", "🥗 Fresh Salads (GF)", "🍳 All-Day Breakfast (GF options)", "☕ Specialty Coffee"],
      proTip: "Ask about their daily GF bakes - they're freshly made!",
      icon: "☕",
      featured: false,
      cuisineTypes: ["Café", "Bakery", "Healthy"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.5,
      reviewCount: 145,
      lat: -33.9368,
      lng: 18.8614,
      venueType: "cafe"
    },
    {
      name: "Helena's Restaurant",
      address: "Church St, Stellenbosch, 7600",
      hours: "Mon–Sat: 12:00PM – 9:00PM",
      phone: "+27 21 883 8356",
      website: "www.helenasrestaurant.co.za",
      directionsUrl: "https://www.google.com/maps/search/Helenas+Restaurant+Stellenbosch",
      specialty: "Contemporary South African",
      overview: "Helena's offers contemporary South African cuisine in a historic Cape Dutch building. They're known for accommodating dietary requirements.",
      menuHighlights: ["🍲 Traditional Potjie (GF)", "🥩 Local Meats (GF)", "🥬 Seasonal Vegetables (GF)", "🍮 Malva Pudding (ask for GF)"],
      proTip: "Their bobotie can be made gluten-free on request!",
      icon: "🍽️",
      featured: false,
      cuisineTypes: ["South African", "Contemporary", "Traditional"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.4,
      reviewCount: 178,
      lat: -33.9345,
      lng: 18.8601,
      venueType: "restaurant"
    }
  ];

  // Franschhoek Wine Region Restaurants
  const franschhoekRestaurants: Restaurant[] = [
    {
      name: "La Petite Colombe",
      address: "Leeu Estates, Dassenberg Rd, Franschhoek, 7690",
      hours: "Wed–Sun: 12:00PM – 2:30PM",
      phone: "+27 21 876 8800",
      website: "www.lapetitecolombe.com",
      directionsUrl: "https://www.google.com/maps/search/La+Petite+Colombe+Franschhoek",
      specialty: "World-Class Fine Dining",
      overview: "La Petite Colombe is consistently rated among Africa's best restaurants. They offer exquisite tasting menus with excellent gluten-free adaptations.",
      menuHighlights: ["🍽️ 8-Course Tasting Menu (GF available)", "🦞 Langoustine & Seafood (GF)", "🥩 Aged Beef (GF)", "🍫 Chocolate Desserts (GF options)"],
      proTip: "Book weeks in advance and mention celiac requirements - they'll create a special GF menu!",
      icon: "⭐",
      featured: true,
      cuisineTypes: ["Fine Dining", "French", "Contemporary"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.9,
      reviewCount: 423,
      lat: -33.8956,
      lng: 19.1123,
      venueType: "restaurant"
    },
    {
      name: "Epice Restaurant",
      address: "Huguenot Rd, Franschhoek, 7690",
      hours: "Daily: 12:00PM – 3:00PM, 6:30PM – 9:00PM",
      phone: "+27 21 876 2017",
      website: "www.lecoinfrancais.co.za",
      directionsUrl: "https://www.google.com/maps/search/Epice+Restaurant+Franschhoek",
      specialty: "French-Asian Fusion",
      overview: "Epice offers creative French-Asian fusion cuisine with many naturally gluten-free options. Their rice and seafood dishes are celiac-friendly.",
      menuHighlights: ["🍛 Thai Curry (GF)", "🦐 Tempura (ask for GF)", "🐟 Fresh Linefish (GF)", "🥢 Asian-Inspired Starters (GF options)"],
      proTip: "Their coconut-based curries are naturally gluten-free and delicious!",
      icon: "🥢",
      featured: true,
      cuisineTypes: ["French", "Asian", "Fusion"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.6,
      reviewCount: 234,
      lat: -33.9123,
      lng: 19.1156,
      venueType: "restaurant"
    },
    {
      name: "Ryan's Kitchen",
      address: "Place Vendome, Main Rd, Franschhoek, 7690",
      hours: "Wed–Mon: 12:00PM – 3:00PM, 6:30PM – 9:30PM",
      phone: "+27 21 876 4598",
      website: "www.ryanskitchen.co.za",
      directionsUrl: "https://www.google.com/maps/search/Ryans+Kitchen+Franschhoek",
      specialty: "Modern South African Bistro",
      overview: "Ryan's Kitchen is a beloved local bistro known for its approachable fine dining and accommodating service for dietary requirements.",
      menuHighlights: ["🥩 Karoo Lamb (GF)", "🐟 Catch of the Day (GF)", "🥗 Seasonal Salads (GF)", "🧀 Local Cheese Selection (GF)"],
      proTip: "Chef Ryan is very hands-on - speak to staff about your needs!",
      icon: "🍳",
      featured: true,
      cuisineTypes: ["Bistro", "South African", "Contemporary"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.7,
      reviewCount: 198,
      lat: -33.9089,
      lng: 19.1201,
      venueType: "restaurant"
    },
    {
      name: "Bread & Wine Vineyard Restaurant",
      address: "Moreson Wine Farm, Happy Valley Rd, Franschhoek, 7690",
      hours: "Tue–Sun: 12:00PM – 4:00PM",
      phone: "+27 21 876 3692",
      website: "www.moreson.co.za",
      directionsUrl: "https://www.google.com/maps/search/Bread+Wine+Vineyard+Restaurant+Franschhoek",
      specialty: "Farm-to-Table Dining",
      overview: "Despite its name, Bread & Wine offers excellent gluten-free options! Their farm-to-table approach means fresh, simple ingredients that are naturally GF.",
      menuHighlights: ["🥗 Garden Salads (GF)", "🍖 Smoked Meats & Charcuterie (check for GF)", "🐟 Fresh Fish (GF)", "🍷 Estate Wine Pairing"],
      proTip: "Skip the bread and ask for their GF alternatives - they're happy to help!",
      icon: "🌿",
      featured: false,
      cuisineTypes: ["Farm-to-Table", "South African", "Mediterranean"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.5,
      reviewCount: 167,
      lat: -33.8734,
      lng: 19.0989,
      venueType: "restaurant"
    },
    {
      name: "Tasting Room at Le Quartier Français",
      address: "16 Huguenot Rd, Franschhoek, 7690",
      hours: "Wed–Sun: 7:00PM – 9:30PM",
      phone: "+27 21 876 2151",
      website: "www.lequartier.co.za",
      directionsUrl: "https://www.google.com/maps/search/Tasting+Room+Le+Quartier+Francais+Franschhoek",
      specialty: "Fine Dining Experience",
      overview: "The Tasting Room offers an intimate fine dining experience with innovative cuisine. They excel at accommodating gluten-free guests with advance notice.",
      menuHighlights: ["🍽️ Tasting Menu (GF available)", "🦆 Duck & Game Birds (GF)", "🥬 Foraged Ingredients (GF)", "🍮 Creative Desserts (GF options)"],
      proTip: "Email ahead with your dietary needs for the best experience!",
      icon: "✨",
      featured: true,
      cuisineTypes: ["Fine Dining", "Contemporary", "Innovative"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.8,
      reviewCount: 289,
      lat: -33.9098,
      lng: 19.1178,
      venueType: "restaurant"
    },
    {
      name: "The French Connection Bistro",
      address: "48 Huguenot Rd, Franschhoek, 7690",
      hours: "Daily: 9:00AM – 10:00PM",
      phone: "+27 21 876 4056",
      website: "www.frenchconnectionbistro.com",
      directionsUrl: "https://www.google.com/maps/search/French+Connection+Bistro+Franschhoek",
      specialty: "Classic French Bistro",
      overview: "A charming French bistro offering classic dishes with modern touches. Many dishes can be adapted for gluten-free diners.",
      menuHighlights: ["🥗 Niçoise Salad (GF)", "🐓 Coq au Vin (GF base)", "🐟 Pan-Fried Fish (GF)", "🍨 Crème Brûlée (GF)"],
      proTip: "Their crème brûlée is naturally gluten-free and divine!",
      icon: "🇫🇷",
      featured: false,
      cuisineTypes: ["French", "Bistro", "European"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.4,
      reviewCount: 145,
      lat: -33.9112,
      lng: 19.1189,
      venueType: "restaurant"
    }
  ];

  const faqItems = [
    {
      question: "Is Cape Town a good destination for gluten-free travelers?",
      answer: "Yes! Cape Town is one of the most celiac-friendly cities in South Africa. With dedicated gluten-free bakeries like Off the Gluten Path and many restaurants offering GF menus, you'll find plenty of safe dining options."
    },
    {
      question: "Are there any 100% gluten-free restaurants in Cape Town?",
      answer: "Yes, Off the Gluten Path has two locations (Sea Point and Woodstock) that are completely dedicated gluten-free facilities with zero cross-contamination risk. They're perfect for celiacs."
    },
    {
      question: "How do I communicate my celiac needs in Cape Town restaurants?",
      answer: "English is widely spoken in Cape Town. Simply mention you have celiac disease and need gluten-free food. Most upscale restaurants have trained staff. Carry a celiac card in English for clarity."
    },
    {
      question: "What traditional South African foods are naturally gluten-free?",
      answer: "Many traditional dishes are naturally GF including braai (BBQ meats), pap (maize porridge), chakalaka, and fresh seafood. Ethiopian restaurants serve injera made from teff flour which is naturally gluten-free."
    },
    {
      question: "Can I find gluten-free bread and baked goods in Cape Town?",
      answer: "Absolutely! Off the Gluten Path is famous for their fresh GF breads, croissants, and pastries. Many health food stores also stock GF products. Wildsprout offers GF baked items too."
    },
    {
      question: "Which Cape Town neighborhoods have the most GF-friendly restaurants?",
      answer: "Sea Point, the V&A Waterfront, Camps Bay, and Green Point have the highest concentration of celiac-friendly restaurants. Constantia is great for health-focused cafés."
    }
  ];

  const getCeliacSafeBadge = (level: string) => {
    switch (level) {
      case "dedicated-facility":
        return <Badge className="bg-green-100 text-green-800 border-green-300"><Shield className="w-3 h-3 mr-1" />Dedicated GF Facility</Badge>;
      case "protocols-in-place":
        return <Badge className="bg-blue-100 text-blue-800 border-blue-300"><CheckCircle className="w-3 h-3 mr-1" />Careful Handling</Badge>;
      default:
        return null;
    }
  };

  const getMenuTypeBadge = (type: string) => {
    switch (type) {
      case "fully-gluten-free":
        return <Badge className="bg-emerald-100 text-emerald-800 border-emerald-300">100% Gluten-Free</Badge>;
      case "mixed-menu":
        return <Badge className="bg-amber-100 text-amber-800 border-amber-300">GF Options Available</Badge>;
      default:
        return null;
    }
  };

  const renderStarRating = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
          />
        ))}
        <span className="ml-1 font-semibold">{rating}</span>
      </div>
    );
  };

  const filteredRestaurants = useMemo(() => {
    let filtered = restaurants.filter(restaurant => {
      const matchesSafety = safetyFilter === "all" || restaurant.celiacSafe === safetyFilter;
      const matchesVenue = venueFilter === "all" || restaurant.venueType === venueFilter;
      const matchesMenu = menuFilter === "all" || restaurant.menuType === menuFilter;
      const matchesSearch = searchQuery === "" || 
        restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        restaurant.cuisineTypes.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesSafety && matchesVenue && matchesMenu && matchesSearch;
    });

    // Sort by distance if user location is available and sorting is enabled
    if (sortByDistance && userLocation) {
      filtered = filtered.map(restaurant => ({
        ...restaurant,
        distance: calculateDistance(userLocation.lat, userLocation.lng, restaurant.lat, restaurant.lng)
      })).sort((a, b) => (a.distance || 0) - (b.distance || 0));
    }

    return filtered;
  }, [safetyFilter, venueFilter, menuFilter, searchQuery, sortByDistance, userLocation]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* SEO-Optimized Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/gluten-free/south-africa" className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to South Africa
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-amber-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <span className="text-6xl mb-4 block">🇿🇦</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Safe Gluten-Free Restaurants in Cape Town
          </h1>
          <p className="text-xl md:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Real reviews from gluten-free diners. Verified listings. Zero guesswork.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-orange-50"
              onClick={handleFindNearMe}
              disabled={isLocating}
            >
              {isLocating ? (
                <>
                  <div className="w-5 h-5 mr-2 border-2 border-orange-600 border-t-transparent rounded-full animate-spin" />
                  Locating...
                </>
              ) : sortByDistance ? (
                <>
                  <Navigation className="w-5 h-5 mr-2" />
                  Sorted by Distance
                </>
              ) : (
                <>
                  <Search className="w-5 h-5 mr-2" />
                  Find Gluten-Free Food Near Me
                </>
              )}
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Plus className="w-5 h-5 mr-2" />
              Add a Restaurant
            </Button>
          </div>
          {locationError && (
            <p className="text-orange-100 mt-4 text-sm">{locationError}</p>
          )}
          {sortByDistance && userLocation && (
            <Button 
              variant="link" 
              className="text-white/80 hover:text-white mt-2"
              onClick={() => setSortByDistance(false)}
            >
              Clear distance sorting
            </Button>
          )}
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-green-50 to-yellow-50 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-green-600 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Gluten-Free Dining in Cape Town</h2>
                  <p className="text-gray-700">
                    Cape Town is a paradise for gluten-free travelers. From dedicated bakeries in Sea Point 
                    to waterfront restaurants with stunning views, the Mother City offers an impressive 
                    variety of celiac-safe dining options. Whether you're craving fresh-baked croissants, 
                    traditional African cuisine, or ocean-fresh seafood, you'll find safe and delicious 
                    options throughout the city. Our verified listings include real reviews from the 
                    celiac community to help you dine with confidence.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Map Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-orange-600" />
            Restaurant Map
          </h2>
          <CapeTownMap restaurants={filteredRestaurants} />
        </section>

        {/* Filters */}
        <section className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Filter Restaurants
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Search</label>
                  <Input 
                    placeholder="Search restaurants..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Venue Type</label>
                  <Select value={venueFilter} onValueChange={setVenueFilter}>
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="All venues" />
                    </SelectTrigger>
                    <SelectContent className="bg-white z-50">
                      <SelectItem value="all">All Venues</SelectItem>
                      <SelectItem value="bakery">🥐 Bakery</SelectItem>
                      <SelectItem value="restaurant">🍽️ Restaurant</SelectItem>
                      <SelectItem value="cafe">☕ Café</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Safety Rating</label>
                  <Select value={safetyFilter} onValueChange={setSafetyFilter}>
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="All safety levels" />
                    </SelectTrigger>
                    <SelectContent className="bg-white z-50">
                      <SelectItem value="all">All Safety Levels</SelectItem>
                      <SelectItem value="dedicated-facility">🛡️ Dedicated GF Facility</SelectItem>
                      <SelectItem value="protocols-in-place">✓ Careful Handling</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Menu Type</label>
                  <Select value={menuFilter} onValueChange={setMenuFilter}>
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="All menu types" />
                    </SelectTrigger>
                    <SelectContent className="bg-white z-50">
                      <SelectItem value="all">All Menu Types</SelectItem>
                      <SelectItem value="fully-gluten-free">100% Gluten-Free</SelectItem>
                      <SelectItem value="mixed-menu">GF Options Available</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                Showing {filteredRestaurants.length} of {restaurants.length} restaurants
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Restaurant Cards */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Verified Gluten-Free Restaurants
          </h2>
          <div className="grid gap-6">
            {filteredRestaurants.map((restaurant, index) => (
              <Card key={index} className={`overflow-hidden ${restaurant.featured ? 'ring-2 ring-orange-300' : ''}`}>
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            {restaurant.featured && (
                              <Badge className="bg-orange-100 text-orange-800 border-orange-300">
                                <Award className="w-3 h-3 mr-1" />Featured
                              </Badge>
                            )}
                            <h3 className="text-xl font-bold text-gray-900">{restaurant.name}</h3>
                          </div>
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            {renderStarRating(restaurant.rating)}
                            <span className="text-gray-500 text-sm">({restaurant.reviewCount} reviews)</span>
                            {restaurant.distance !== undefined && (
                              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                                <Navigation className="w-3 h-3 mr-1" />
                                {restaurant.distance < 1 
                                  ? `${Math.round(restaurant.distance * 1000)}m away`
                                  : `${restaurant.distance.toFixed(1)}km away`
                                }
                              </Badge>
                            )}
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Heart className="w-4 h-4" />
                        </Button>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-3">
                        {restaurant.cuisineTypes.map((cuisine, i) => (
                          <Badge key={i} variant="outline">{cuisine}</Badge>
                        ))}
                        {getCeliacSafeBadge(restaurant.celiacSafe)}
                        {getMenuTypeBadge(restaurant.menuType)}
                      </div>

                      <div className="space-y-2 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-gray-400" />
                          <span>{restaurant.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span>{restaurant.hours}</span>
                        </div>
                        {restaurant.phone && (
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-gray-400" />
                            <a href={`tel:${restaurant.phone}`} className="hover:text-orange-600">{restaurant.phone}</a>
                          </div>
                        )}
                      </div>

                      <p className="text-gray-700 mb-4">{restaurant.overview}</p>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Menu Highlights</h4>
                        <div className="flex flex-wrap gap-2">
                          {restaurant.menuHighlights.map((item, i) => (
                            <Badge key={i} variant="secondary" className="text-sm">{item}</Badge>
                          ))}
                        </div>
                      </div>

                      {restaurant.proTip && (
                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
                          <div className="flex items-center gap-2">
                            <MessageCircle className="w-4 h-4 text-amber-600" />
                            <span className="font-medium text-amber-800">Pro Tip:</span>
                            <span className="text-amber-700">{restaurant.proTip}</span>
                          </div>
                        </div>
                      )}

                      <div className="flex gap-3">
                        <Button asChild className="bg-orange-600 hover:bg-orange-700">
                          <a href={restaurant.directionsUrl} target="_blank" rel="noopener noreferrer">
                            <Navigation className="w-4 h-4 mr-2" />
                            Get Directions
                          </a>
                        </Button>
                        {restaurant.website && (
                          <Button variant="outline" asChild>
                            <a href={`https://${restaurant.website}`} target="_blank" rel="noopener noreferrer">
                              <Globe className="w-4 h-4 mr-2" />
                              Website
                            </a>
                          </Button>
                        )}
                      </div>

                      <div className="mt-6 pt-6 border-t">
                        <RestaurantReviews
                          restaurantName={restaurant.name}
                          restaurantCountry="South Africa"
                          restaurantCity="Cape Town"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Stellenbosch Wine Region Section */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200 mb-6">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <span className="text-4xl">🍇</span>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Stellenbosch Wine Region</h2>
                  <p className="text-gray-700">
                    Just 50 minutes from Cape Town, Stellenbosch is South Africa's culinary capital. 
                    This historic university town is surrounded by world-class wine estates, many offering 
                    exceptional gluten-free dining experiences. From award-winning fine dining restaurants 
                    to charming cafés, Stellenbosch caters beautifully to celiac travelers seeking gourmet experiences.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>🍷</span>
            Gluten-Free Restaurants in Stellenbosch
          </h3>
          <div className="grid gap-6">
            {stellenboschRestaurants.map((restaurant, index) => (
              <Card key={index} className={`overflow-hidden ${restaurant.featured ? 'ring-2 ring-purple-300' : ''}`}>
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            {restaurant.featured && (
                              <Badge className="bg-purple-100 text-purple-800 border-purple-300">
                                <Award className="w-3 h-3 mr-1" />Featured
                              </Badge>
                            )}
                            <h4 className="text-xl font-bold text-gray-900">{restaurant.name}</h4>
                          </div>
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            {renderStarRating(restaurant.rating)}
                            <span className="text-gray-500 text-sm">({restaurant.reviewCount} reviews)</span>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Heart className="w-4 h-4" />
                        </Button>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-3">
                        {restaurant.cuisineTypes.map((cuisine, i) => (
                          <Badge key={i} variant="outline">{cuisine}</Badge>
                        ))}
                        {getCeliacSafeBadge(restaurant.celiacSafe)}
                        {getMenuTypeBadge(restaurant.menuType)}
                      </div>

                      <div className="space-y-2 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-gray-400" />
                          <span>{restaurant.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span>{restaurant.hours}</span>
                        </div>
                        {restaurant.phone && (
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-gray-400" />
                            <a href={`tel:${restaurant.phone}`} className="hover:text-purple-600">{restaurant.phone}</a>
                          </div>
                        )}
                      </div>

                      <p className="text-gray-700 mb-4">{restaurant.overview}</p>

                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Menu Highlights</h5>
                        <div className="flex flex-wrap gap-2">
                          {restaurant.menuHighlights.map((item, i) => (
                            <Badge key={i} variant="secondary" className="text-sm">{item}</Badge>
                          ))}
                        </div>
                      </div>

                      {restaurant.proTip && (
                        <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 mb-4">
                          <div className="flex items-center gap-2">
                            <MessageCircle className="w-4 h-4 text-purple-600" />
                            <span className="font-medium text-purple-800">Pro Tip:</span>
                            <span className="text-purple-700">{restaurant.proTip}</span>
                          </div>
                        </div>
                      )}

                      <div className="flex gap-3">
                        <Button asChild className="bg-purple-600 hover:bg-purple-700">
                          <a href={restaurant.directionsUrl} target="_blank" rel="noopener noreferrer">
                            <Navigation className="w-4 h-4 mr-2" />
                            Get Directions
                          </a>
                        </Button>
                        {restaurant.website && (
                          <Button variant="outline" asChild>
                            <a href={`https://${restaurant.website}`} target="_blank" rel="noopener noreferrer">
                              <Globe className="w-4 h-4 mr-2" />
                              Website
                            </a>
                          </Button>
                        )}
                      </div>

                      <div className="mt-6 pt-6 border-t">
                        <RestaurantReviews
                          restaurantName={restaurant.name}
                          restaurantCountry="South Africa"
                          restaurantCity="Stellenbosch"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Franschhoek Wine Region Section */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-rose-50 to-amber-50 border-rose-200 mb-6">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <span className="text-4xl">🏔️</span>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Franschhoek Wine Valley</h2>
                  <p className="text-gray-700">
                    Known as the "French Corner" of South Africa, Franschhoek is a foodie paradise nestled 
                    in a beautiful valley surrounded by mountains. This charming village is home to some of 
                    Africa's top-rated restaurants, many of which excel at creating memorable gluten-free 
                    dining experiences. The French Huguenot heritage shines through in the refined cuisine.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>🍾</span>
            Gluten-Free Restaurants in Franschhoek
          </h3>
          <div className="grid gap-6">
            {franschhoekRestaurants.map((restaurant, index) => (
              <Card key={index} className={`overflow-hidden ${restaurant.featured ? 'ring-2 ring-rose-300' : ''}`}>
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            {restaurant.featured && (
                              <Badge className="bg-rose-100 text-rose-800 border-rose-300">
                                <Award className="w-3 h-3 mr-1" />Featured
                              </Badge>
                            )}
                            <h4 className="text-xl font-bold text-gray-900">{restaurant.name}</h4>
                          </div>
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            {renderStarRating(restaurant.rating)}
                            <span className="text-gray-500 text-sm">({restaurant.reviewCount} reviews)</span>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Heart className="w-4 h-4" />
                        </Button>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-3">
                        {restaurant.cuisineTypes.map((cuisine, i) => (
                          <Badge key={i} variant="outline">{cuisine}</Badge>
                        ))}
                        {getCeliacSafeBadge(restaurant.celiacSafe)}
                        {getMenuTypeBadge(restaurant.menuType)}
                      </div>

                      <div className="space-y-2 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-gray-400" />
                          <span>{restaurant.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span>{restaurant.hours}</span>
                        </div>
                        {restaurant.phone && (
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-gray-400" />
                            <a href={`tel:${restaurant.phone}`} className="hover:text-rose-600">{restaurant.phone}</a>
                          </div>
                        )}
                      </div>

                      <p className="text-gray-700 mb-4">{restaurant.overview}</p>

                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Menu Highlights</h5>
                        <div className="flex flex-wrap gap-2">
                          {restaurant.menuHighlights.map((item, i) => (
                            <Badge key={i} variant="secondary" className="text-sm">{item}</Badge>
                          ))}
                        </div>
                      </div>

                      {restaurant.proTip && (
                        <div className="bg-rose-50 border border-rose-200 rounded-lg p-3 mb-4">
                          <div className="flex items-center gap-2">
                            <MessageCircle className="w-4 h-4 text-rose-600" />
                            <span className="font-medium text-rose-800">Pro Tip:</span>
                            <span className="text-rose-700">{restaurant.proTip}</span>
                          </div>
                        </div>
                      )}

                      <div className="flex gap-3">
                        <Button asChild className="bg-rose-600 hover:bg-rose-700">
                          <a href={restaurant.directionsUrl} target="_blank" rel="noopener noreferrer">
                            <Navigation className="w-4 h-4 mr-2" />
                            Get Directions
                          </a>
                        </Button>
                        {restaurant.website && (
                          <Button variant="outline" asChild>
                            <a href={`https://${restaurant.website}`} target="_blank" rel="noopener noreferrer">
                              <Globe className="w-4 h-4 mr-2" />
                              Website
                            </a>
                          </Button>
                        )}
                      </div>

                      <div className="mt-6 pt-6 border-t">
                        <RestaurantReviews
                          restaurantName={restaurant.name}
                          restaurantCountry="South Africa"
                          restaurantCity="Franschhoek"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
              <p className="text-gray-600">Everything you need to know about gluten-free dining in Cape Town</p>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section>
          <Card className="bg-gradient-to-r from-orange-500 to-amber-500 text-white border-0">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Know a Great Gluten-Free Spot in Cape Town?</h2>
              <p className="text-orange-100 mb-6">
                Help fellow celiacs discover safe dining options. Add your favorite restaurant to our directory.
              </p>
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
                <Plus className="w-5 h-5 mr-2" />
                Add a Restaurant
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default GlutenFreeCapeTown;
