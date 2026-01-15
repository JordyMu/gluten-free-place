import { MapPin, Star, Utensils, ArrowLeft, Flag, Phone, Clock, Globe, CheckCircle, Navigation, Heart, MessageCircle, Camera, Award, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, useSearchParams } from "react-router-dom";
import { RestaurantReviews } from "@/components/reviews/RestaurantReviews";

const SouthAfrica = () => {
  const [searchParams] = useSearchParams();
  const cityFilter = searchParams.get("city");
  const cities = [
    {
      name: "Cape Town",
      restaurants: [
        {
          name: "Off the Gluten Path - Sea Point",
          address: "277 Main Rd, Sea Point, Cape Town, 8060, South Africa",
          hours: "Mon–Sat: 8:00AM – 5:00PM",
          phone: "+27 21 434 0015",
          website: "www.offtheglutenpath.co.za",
          directionsUrl: "https://www.google.com/maps/search/Off+the+Gluten+Path+277+Main+Rd+Sea+Point+Cape+Town",
          specialty: "100% Gluten-Free Bakery & Café",
          overview: "Off the Gluten Path is Cape Town's premier dedicated gluten-free bakery and café. Everything on the menu is completely gluten-free, making it a safe haven for celiacs. They offer an extensive range of baked goods, light meals, and treats.",
          menuHighlights: [
            "🥐 Fresh Croissants & Pastries (GF)",
            "🥖 Artisan Breads (GF)",
            "🍰 Cakes & Desserts (GF)",
            "🥗 Light Meals & Sandwiches (GF)",
            "☕ Coffee & Beverages"
          ],
          proTip: "Their croissants are legendary - get there early!",
          icon: "🥐",
          featured: true,
          cuisineTypes: ["Bakery", "Café", "Gluten-Free"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          rating: 4.9,
          reviewCount: 245
        },
        {
          name: "Off the Gluten Path - Woodstock",
          address: "7 Ravenscraig Road, Woodstock, Cape Town, 8060, South Africa",
          hours: "Mon–Sat: 8:00AM – 5:00PM",
          phone: "+27 21 447 7741",
          website: "www.offtheglutenpath.co.za",
          directionsUrl: "https://www.google.com/maps/search/Off+the+Gluten+Path+Woodstock+Cape+Town",
          specialty: "100% Gluten-Free Bakery",
          overview: "The Woodstock branch of Off the Gluten Path offers the same exceptional quality and 100% gluten-free experience as the Sea Point location.",
          menuHighlights: [
            "🥐 Fresh Pastries (GF)",
            "🥖 Breads (GF)",
            "🍰 Cakes (GF)",
            "🥗 Light Meals (GF)"
          ],
          proTip: "Great for picking up bread for the week!",
          icon: "🥐",
          featured: false,
          cuisineTypes: ["Bakery", "Café"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          rating: 4.8,
          reviewCount: 156
        },
        {
          name: "Tashas Waterfront",
          address: "Shop 7117, Victoria & Alfred Waterfront, Cape Town, 8001, South Africa",
          hours: "Daily: 7:00AM – 10:00PM",
          phone: "+27 21 419 0011",
          website: "www.tashas.co.za",
          directionsUrl: "https://www.google.com/maps/search/Tashas+Waterfront+Cape+Town",
          specialty: "Upscale Café with GF Options",
          overview: "Tashas is an upscale café chain known for its stylish ambiance and extensive menu with clearly marked gluten-free options. The Waterfront location offers stunning views alongside quality food.",
          menuHighlights: [
            "🥗 Salads with GF Options",
            "🍳 All-Day Breakfast (GF options)",
            "🥩 Grilled Proteins (GF)",
            "🍰 GF Desserts Available"
          ],
          proTip: "Ask for the gluten-free menu - staff are well-trained!",
          icon: "🍽️",
          featured: true,
          cuisineTypes: ["Café", "International", "Healthy"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.5,
          reviewCount: 312
        },
        {
          name: "Hacienda Coastal Mexican",
          address: "92 Bree St, Cape Town City Centre, Cape Town, 8000, South Africa",
          hours: "Daily: 12:00PM – 10:00PM",
          phone: "+27 21 422 2266",
          website: "www.hacienda.co.za",
          directionsUrl: "https://www.google.com/maps/search/Hacienda+Coastal+Mexican+92+Bree+St+Cape+Town",
          specialty: "Mexican Cuisine with GF Options",
          overview: "Hacienda offers authentic Mexican coastal cuisine with many naturally gluten-free options. Their corn-based dishes and fresh ingredients make it a great choice for celiacs.",
          menuHighlights: [
            "🌮 Corn Tortilla Tacos (GF)",
            "🥑 Fresh Guacamole (GF)",
            "🍲 Mexican Rice Bowls (GF)",
            "🌶️ Fresh Salsas (GF)"
          ],
          proTip: "Corn tortillas are naturally gluten-free - perfect for tacos!",
          icon: "🌮",
          featured: true,
          cuisineTypes: ["Mexican", "Coastal", "Latin"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.4,
          reviewCount: 189
        },
        {
          name: "Addis in Cape Ethiopian Restaurant",
          address: "Cape Town, South Africa",
          hours: "Daily: 12:00PM – 10:00PM",
          phone: "+27 21 424 5722",
          website: "www.addisincape.co.za",
          directionsUrl: "https://www.google.com/maps/search/Addis+in+Cape+Ethiopian+Restaurant+Cape+Town",
          specialty: "Ethiopian Cuisine",
          overview: "Authentic Ethiopian restaurant offering traditional dishes. Ethiopian cuisine naturally features many gluten-free options, though traditional injera bread contains teff which is gluten-free.",
          menuHighlights: [
            "🍛 Injera (Teff-based, naturally GF)",
            "🍲 Ethiopian Stews (GF)",
            "🥗 Vegetarian Platters (GF)",
            "🍖 Grilled Meats (GF)"
          ],
          proTip: "Injera made from pure teff is naturally gluten-free!",
          icon: "🍛",
          featured: false,
          cuisineTypes: ["Ethiopian", "African"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.3,
          reviewCount: 134
        },
        {
          name: "GOLD Restaurant",
          address: "15 Bennett St, Green Point, Cape Town, 8005, South Africa",
          hours: "Mon–Sat: 7:00PM – 11:00PM",
          phone: "+27 21 421 4653",
          website: "www.goldrestaurant.co.za",
          directionsUrl: "https://www.google.com/maps/search/GOLD+Restaurant+15+Bennett+St+Green+Point+Cape+Town",
          specialty: "African Dining Experience",
          overview: "GOLD Restaurant offers a unique African dining experience with a 14-course taste safari. They accommodate dietary requirements including gluten-free with advance notice.",
          menuHighlights: [
            "🍛 African Tasting Menu",
            "🍲 Traditional Stews (GF options)",
            "🎵 Live African Entertainment",
            "🌍 Pan-African Cuisine"
          ],
          proTip: "Book in advance and mention gluten-free requirements!",
          icon: "🌍",
          featured: true,
          cuisineTypes: ["African", "Fine Dining", "Cultural"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.6,
          reviewCount: 267
        },
        {
          name: "Wildsprout - Constantia",
          address: "Shop 1, Constantia Village Courtyard, Constantia, Cape Town, 7708, South Africa",
          hours: "Mon–Fri: 7:00AM – 4:00PM, Sat–Sun: 8:00AM – 3:00PM",
          phone: "+27 21 794 7217",
          website: "www.wildsprout.co.za",
          directionsUrl: "https://www.google.com/maps/search/Wildsprout+Constantia+Village+Cape+Town",
          specialty: "Health-Focused Café",
          overview: "Wildsprout is a health-focused café offering organic, wholesome food with extensive gluten-free options. Perfect for health-conscious diners and those with dietary restrictions.",
          menuHighlights: [
            "🥗 Super Salads (GF)",
            "🥤 Fresh Smoothies & Juices",
            "🍳 Healthy Breakfasts (GF options)",
            "🥙 GF Wraps & Bowls"
          ],
          proTip: "Their acai bowls are a must-try!",
          icon: "🥗",
          featured: true,
          cuisineTypes: ["Healthy", "Organic", "Café"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.7,
          reviewCount: 198
        },
        {
          name: "Wildsprout - Kenilworth",
          address: "278 Main Rd, Kenilworth, Cape Town, 7708, South Africa",
          hours: "Mon–Fri: 7:00AM – 4:00PM, Sat–Sun: 8:00AM – 3:00PM",
          phone: "+27 21 762 1115",
          website: "www.wildsprout.co.za",
          directionsUrl: "https://www.google.com/maps/search/Wildsprout+278+Main+Rd+Kenilworth+Cape+Town",
          specialty: "Health-Focused Café",
          overview: "The Kenilworth branch of Wildsprout offers the same health-focused menu with extensive gluten-free options in a welcoming atmosphere.",
          menuHighlights: [
            "🥗 Super Salads (GF)",
            "🥤 Fresh Smoothies",
            "🍳 Breakfasts (GF options)",
            "🥙 GF Options"
          ],
          proTip: "Great for a healthy lunch stop!",
          icon: "🥗",
          featured: false,
          cuisineTypes: ["Healthy", "Organic", "Café"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.6,
          reviewCount: 145
        },
        {
          name: "Yen's Vietnamese Street Food",
          address: "19 Dixon St, De Waterkant, Cape Town, 8001, South Africa",
          hours: "Mon–Sat: 11:30AM – 9:00PM",
          phone: "+27 21 418 2488",
          website: "www.yens.co.za",
          directionsUrl: "https://www.google.com/maps/search/Yens+Vietnamese+Street+Food+19+Dixon+St+Cape+Town",
          specialty: "Vietnamese Cuisine",
          overview: "Yen's offers authentic Vietnamese street food with many rice-based dishes that are naturally gluten-free. Staff can guide you to safe options.",
          menuHighlights: [
            "🍜 Pho (GF with rice noodles)",
            "🍚 Rice Dishes (GF)",
            "🥗 Fresh Spring Rolls (GF)",
            "🍲 Vietnamese Curries (GF)"
          ],
          proTip: "Ask for GF soy sauce - they accommodate!",
          icon: "🍜",
          featured: false,
          cuisineTypes: ["Vietnamese", "Asian", "Street Food"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.4,
          reviewCount: 167
        },
        {
          name: "Zenzero",
          address: "Shop 2A, The Promenade, Victoria Rd, Camps Bay, Cape Town, 8040, South Africa",
          hours: "Daily: 12:00PM – 10:00PM",
          phone: "+27 21 438 0983",
          website: "www.zenzero.co.za",
          directionsUrl: "https://www.google.com/maps/search/Zenzero+Camps+Bay+Cape+Town",
          specialty: "Italian Restaurant with GF Options",
          overview: "Zenzero in Camps Bay offers Italian cuisine with stunning ocean views. They offer gluten-free pasta and pizza options.",
          menuHighlights: [
            "🍝 GF Pasta Options",
            "🍕 GF Pizza Available",
            "🥗 Fresh Salads",
            "🍰 GF Desserts"
          ],
          proTip: "Request GF pasta when ordering!",
          icon: "🍝",
          featured: true,
          cuisineTypes: ["Italian", "Mediterranean"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.3,
          reviewCount: 234
        },
        {
          name: "Black Sheep Restaurant",
          address: "104 Kloof St, Gardens, Cape Town, 8001, South Africa",
          hours: "Tue–Sat: 6:00PM – 10:00PM",
          phone: "+27 21 426 2661",
          website: "www.blacksheeprestaurant.co.za",
          directionsUrl: "https://www.google.com/maps/search/Black+Sheep+Restaurant+104+Kloof+St+Cape+Town",
          specialty: "Modern Bistro Cuisine",
          overview: "Black Sheep is a trendy bistro on Kloof Street offering creative dishes with options for dietary requirements including gluten-free.",
          menuHighlights: [
            "🥩 Grilled Steaks (GF)",
            "🥗 Creative Salads (GF)",
            "🍲 Seasonal Specials (GF options)",
            "🍷 Extensive Wine List"
          ],
          proTip: "Mention gluten-free when booking!",
          icon: "🍽️",
          featured: false,
          cuisineTypes: ["Bistro", "Modern", "South African"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.5,
          reviewCount: 178
        },
        {
          name: "Kanéla Café",
          address: "78 Regent Rd, Sea Point, Cape Town, 8001, South Africa",
          hours: "Daily: 7:00AM – 4:00PM",
          phone: "+27 21 434 1128",
          website: "www.kanela.co.za",
          directionsUrl: "https://www.google.com/maps/search/Kanela+Cafe+78+Regent+Rd+Sea+Point+Cape+Town",
          specialty: "Greek-Mediterranean Café",
          overview: "Kanéla offers Greek-Mediterranean cuisine with many naturally gluten-free options in a relaxed seaside setting.",
          menuHighlights: [
            "🥗 Greek Salads (GF)",
            "🍳 Mediterranean Breakfast (GF options)",
            "🍖 Grilled Meats (GF)",
            "🧀 Feta & Mezze Platters (GF)"
          ],
          proTip: "Their mezze platter is perfect for sharing!",
          icon: "🥗",
          featured: false,
          cuisineTypes: ["Greek", "Mediterranean", "Café"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.4,
          reviewCount: 156
        },
        {
          name: "Codfather Seafood & Sushi",
          address: "37 The Dr, Camps Bay, Cape Town, 8040, South Africa",
          hours: "Daily: 12:00PM – 10:30PM",
          phone: "+27 21 438 0782",
          website: "www.codfather.co.za",
          directionsUrl: "https://www.google.com/maps/search/Codfather+Seafood+Sushi+Camps+Bay+Cape+Town",
          specialty: "Fresh Seafood & Sushi",
          overview: "Codfather is famous for its unique concept where you choose your fresh seafood from the market display. Many options are naturally gluten-free.",
          menuHighlights: [
            "🦐 Fresh Seafood (GF)",
            "🍣 Sushi (ask for GF soy sauce)",
            "🦞 Lobster & Prawns (GF)",
            "🐟 Grilled Fish (GF)"
          ],
          proTip: "Choose your own fish and they'll cook it to your preference!",
          icon: "🦐",
          featured: true,
          cuisineTypes: ["Seafood", "Sushi", "Japanese"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.6,
          reviewCount: 345
        },
        {
          name: "Lighthouse Café",
          address: "90 St George's St, Simon's Town, Cape Town, 7995, South Africa",
          hours: "Daily: 8:00AM – 5:00PM",
          phone: "+27 21 786 5406",
          website: "www.lighthousecafe.co.za",
          directionsUrl: "https://www.google.com/maps/search/Lighthouse+Cafe+Simons+Town+Cape+Town",
          specialty: "Seaside Café",
          overview: "Charming café in Simon's Town offering light meals with gluten-free options and stunning harbor views.",
          menuHighlights: [
            "🥗 Light Meals (GF options)",
            "☕ Coffee & Treats",
            "🍳 Breakfast (GF options)",
            "🍰 GF Cakes Available"
          ],
          proTip: "Great stop after visiting the penguins!",
          icon: "☕",
          featured: false,
          cuisineTypes: ["Café", "Light Meals"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.2,
          reviewCount: 98
        },
        {
          name: "Time Out Market",
          address: "The Old Power Station, Dock Rd, Victoria & Alfred Waterfront, Cape Town, 7806, South Africa",
          hours: "Daily: 9:00AM – 11:00PM",
          phone: "+27 21 418 8685",
          website: "www.timeoutmarket.com/capetown",
          directionsUrl: "https://www.google.com/maps/search/Time+Out+Market+Cape+Town+Waterfront",
          specialty: "Food Hall with Multiple Vendors",
          overview: "Time Out Market features multiple vendors, many offering gluten-free options. Great for groups with different dietary needs.",
          menuHighlights: [
            "🍔 Multiple Cuisine Options",
            "🌮 Various GF-Friendly Stalls",
            "🍰 Desserts (some GF)",
            "🍷 Wine & Drinks"
          ],
          proTip: "Check with each vendor for GF options!",
          icon: "🏪",
          featured: true,
          cuisineTypes: ["Food Hall", "Various"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.4,
          reviewCount: 456
        },
        {
          name: "Fynkos Kirstenbosch Tea Room",
          address: "Gate 2 Kirstenbosch Botanical Gardens, Rhodes Drive, Newlands, Cape Town, 7700, South Africa",
          hours: "Daily: 8:30AM – 5:00PM",
          phone: "+27 21 762 5270",
          website: "www.fynboskirstenbosch.co.za",
          directionsUrl: "https://www.google.com/maps/search/Fynbos+Kirstenbosch+Tea+Room+Cape+Town",
          specialty: "Garden Café",
          overview: "Situated in the beautiful Kirstenbosch Gardens, this café offers light meals and teas with gluten-free options.",
          menuHighlights: [
            "🥗 Light Lunches (GF options)",
            "🍰 GF Cakes",
            "☕ Teas & Coffee",
            "🌿 Garden Setting"
          ],
          proTip: "Perfect after a walk in the gardens!",
          icon: "🌿",
          featured: false,
          cuisineTypes: ["Café", "Tea Room"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.3,
          reviewCount: 167
        },
        {
          name: "Vagabond Kitchens",
          address: "1 Silo Square, Victoria & Alfred Waterfront, Cape Town, 8002, South Africa",
          hours: "Daily: 11:00AM – 10:00PM",
          phone: "+27 21 418 5888",
          website: "www.vagabondkitchens.co.za",
          directionsUrl: "https://www.google.com/maps/search/Vagabond+Kitchens+Silo+Square+Waterfront+Cape+Town",
          specialty: "Asian Fusion",
          overview: "Vagabond Kitchens offers Asian-inspired dishes with many rice and noodle options that can be made gluten-free.",
          menuHighlights: [
            "🍜 Rice Noodle Dishes (GF)",
            "🍚 Rice Bowls (GF)",
            "🥟 Asian Flavors",
            "🍲 Curries (GF options)"
          ],
          proTip: "Ask for GF tamari instead of soy sauce!",
          icon: "🍜",
          featured: false,
          cuisineTypes: ["Asian", "Fusion"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.4,
          reviewCount: 189
        },
        {
          name: "The Falafel Guy",
          address: "152 Main Rd, Sea Point, Cape Town, 8005, South Africa",
          hours: "Mon–Sat: 11:00AM – 9:00PM",
          phone: "+27 21 434 0444",
          website: "www.thefalafelguy.co.za",
          directionsUrl: "https://www.google.com/maps/search/The+Falafel+Guy+Sea+Point+Cape+Town",
          specialty: "Middle Eastern Fast Food",
          overview: "Popular spot for fresh falafel and Middle Eastern food. Many options are naturally gluten-free or can be made GF.",
          menuHighlights: [
            "🧆 Falafel (check GF status)",
            "🥙 Salad Bowls (GF)",
            "🥗 Hummus & Mezze (GF)",
            "🍖 Grilled Meats (GF)"
          ],
          proTip: "Ask about GF falafel ingredients!",
          icon: "🧆",
          featured: false,
          cuisineTypes: ["Middle Eastern", "Fast Food"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.3,
          reviewCount: 156
        },
        {
          name: "The Pot Luck Club",
          address: "6, The Silo, The Old Biscuit Mill, 373-375 Albert Rd, Woodstock, Cape Town, 7915, South Africa",
          hours: "Tue–Sat: 12:00PM – 2:30PM, 6:30PM – 10:00PM",
          phone: "+27 21 447 0804",
          website: "www.thepotluckclub.co.za",
          directionsUrl: "https://www.google.com/maps/search/The+Pot+Luck+Club+Old+Biscuit+Mill+Cape+Town",
          specialty: "Fine Dining Tapas",
          overview: "Award-winning restaurant by chef Luke Dale Roberts offering creative tapas-style dishes with dietary accommodations.",
          menuHighlights: [
            "🍽️ Creative Tapas",
            "🥩 Gourmet Dishes (GF options)",
            "🍷 Premium Wine Pairing",
            "🌆 City Views"
          ],
          proTip: "Book ahead and mention dietary requirements!",
          icon: "🍽️",
          featured: true,
          cuisineTypes: ["Fine Dining", "Tapas", "Modern"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.7,
          reviewCount: 312
        },
        {
          name: "Surfshack",
          address: "The Promenade, Victoria Rd, Camps Bay, Cape Town, 8040, South Africa",
          hours: "Daily: 11:00AM – 10:00PM",
          phone: "+27 21 438 0999",
          website: "www.surfshack.co.za",
          directionsUrl: "https://www.google.com/maps/search/Surfshack+Camps+Bay+Cape+Town",
          specialty: "Beach Bar & Grill",
          overview: "Popular beachfront spot with grilled seafood and meat options that can accommodate gluten-free diets.",
          menuHighlights: [
            "🦐 Grilled Seafood (GF)",
            "🍔 GF Bun Options",
            "🥗 Fresh Salads (GF)",
            "🍹 Cocktails"
          ],
          proTip: "Great sunset views!",
          icon: "🏖️",
          featured: false,
          cuisineTypes: ["Seafood", "Grill", "Beach Bar"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.2,
          reviewCount: 267
        },
        {
          name: "Deer Park Café",
          address: "2 Deerpark Dr W, Vredehoek, Cape Town, 8001, South Africa",
          hours: "Daily: 8:00AM – 4:00PM",
          phone: "+27 21 462 6311",
          website: "www.deerparkcafe.co.za",
          directionsUrl: "https://www.google.com/maps/search/Deer+Park+Cafe+Vredehoek+Cape+Town",
          specialty: "Nature Café",
          overview: "Café set in a natural reserve offering healthy options with gluten-free choices in a tranquil setting.",
          menuHighlights: [
            "🥗 Healthy Meals (GF options)",
            "🍳 Breakfast (GF options)",
            "☕ Coffee & Drinks",
            "🌳 Nature Setting"
          ],
          proTip: "Great for a post-hike meal!",
          icon: "🌳",
          featured: false,
          cuisineTypes: ["Café", "Healthy"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.4,
          reviewCount: 134
        },
        {
          name: "Bo-Vine Wine & Grill House",
          address: "Shop 1, The Promenade Shopping Centre, 85 Victoria Rd, Camps Bay, Cape Town, 8040, South Africa",
          hours: "Daily: 12:00PM – 10:00PM",
          phone: "+27 21 438 0080",
          website: "www.bo-vine.co.za",
          directionsUrl: "https://www.google.com/maps/search/Bo-Vine+Camps+Bay+Cape+Town",
          specialty: "Steakhouse",
          overview: "Upscale steakhouse offering premium cuts with gluten-free sides and sauces available.",
          menuHighlights: [
            "🥩 Premium Steaks (GF)",
            "🥗 Fresh Sides (GF)",
            "🍷 Wine Selection",
            "🌅 Ocean Views"
          ],
          proTip: "Ask about GF sauce options!",
          icon: "🥩",
          featured: false,
          cuisineTypes: ["Steakhouse", "Grill"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.5,
          reviewCount: 198
        },
        {
          name: "Thali Restaurant",
          address: "3 Park Rd, Gardens, Cape Town, 8001, South Africa",
          hours: "Daily: 12:00PM – 10:00PM",
          phone: "+27 21 422 3863",
          website: "www.thalirestaurant.co.za",
          directionsUrl: "https://www.google.com/maps/search/Thali+Restaurant+Gardens+Cape+Town",
          specialty: "Indian Cuisine",
          overview: "Authentic Indian restaurant with many naturally gluten-free curries and rice dishes.",
          menuHighlights: [
            "🍛 Indian Curries (many GF)",
            "🍚 Biryani (GF)",
            "🥘 Tandoori Dishes (GF)",
            "🥗 Indian Vegetarian (GF)"
          ],
          proTip: "Most curries are naturally GF - confirm with staff!",
          icon: "🍛",
          featured: false,
          cuisineTypes: ["Indian", "Curry"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.4,
          reviewCount: 234
        },
        {
          name: "La Belle",
          address: "Shop 120, The Promenade, Victoria Rd, Camps Bay, Cape Town, 8040, South Africa",
          hours: "Daily: 8:00AM – 10:00PM",
          phone: "+27 21 438 0048",
          website: "www.labellecampsbay.co.za",
          directionsUrl: "https://www.google.com/maps/search/La+Belle+Camps+Bay+Cape+Town",
          specialty: "French-Inspired Café",
          overview: "French-inspired café in Camps Bay with gluten-free options and beautiful ocean views.",
          menuHighlights: [
            "🥐 GF Pastries Available",
            "🥗 Salads & Light Meals (GF)",
            "🍳 Breakfast (GF options)",
            "☕ French Coffee"
          ],
          proTip: "Ask about daily GF specials!",
          icon: "🥐",
          featured: false,
          cuisineTypes: ["French", "Café"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.3,
          reviewCount: 167
        },
        {
          name: "Bacini's Pizzeria & Deli",
          address: "177 Kloof St, Gardens, Cape Town, 8001, South Africa",
          hours: "Daily: 11:00AM – 10:00PM",
          phone: "+27 21 423 5988",
          website: "www.bacinis.co.za",
          directionsUrl: "https://www.google.com/maps/search/Bacinis+Pizzeria+Kloof+St+Cape+Town",
          specialty: "Italian with GF Options",
          overview: "Popular Italian spot on Kloof Street offering gluten-free pizza bases and pasta options.",
          menuHighlights: [
            "🍕 GF Pizza Bases",
            "🍝 GF Pasta Options",
            "🥗 Italian Salads (GF)",
            "🍷 Italian Wine"
          ],
          proTip: "Their GF pizza bases are excellent!",
          icon: "🍕",
          featured: true,
          cuisineTypes: ["Italian", "Pizza"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.4,
          reviewCount: 289
        },
        {
          name: "El Burro",
          address: "81 Main Road, Cape Town, 8005, South Africa",
          hours: "Daily: 12:00PM – 10:00PM",
          phone: "+27 21 788 2667",
          website: "www.elburro.co.za",
          directionsUrl: "https://www.google.com/maps/search/El+Burro+81+Main+Road+Cape+Town",
          specialty: "Mexican Cuisine",
          overview: "Lively Mexican restaurant with naturally gluten-free corn-based dishes and a fun atmosphere.",
          menuHighlights: [
            "🌮 Corn Tacos (GF)",
            "🥑 Guacamole & Chips (GF)",
            "🌶️ Mexican Bowls (GF)",
            "🍹 Margaritas"
          ],
          proTip: "Corn tortillas are naturally GF!",
          icon: "🌮",
          featured: false,
          cuisineTypes: ["Mexican", "Latin"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.3,
          reviewCount: 234
        },
        {
          name: "Knysna Oyster Company - Waterfront",
          address: "Shop 1, Wine Centre Building, 35 Port Rd, Victoria & Alfred Waterfront, Cape Town, 8001, South Africa",
          hours: "Daily: 11:00AM – 9:00PM",
          phone: "+27 21 418 5133",
          website: "www.oystercatcher.co.za",
          directionsUrl: "https://www.google.com/maps/search/Knysna+Oyster+Company+Waterfront+Cape+Town",
          specialty: "Oysters & Seafood",
          overview: "Famous for fresh Knysna oysters and seafood, most dishes are naturally gluten-free.",
          menuHighlights: [
            "🦪 Fresh Oysters (GF)",
            "🦐 Seafood Platters (GF)",
            "🍷 Wine Pairing",
            "🐟 Fresh Fish (GF)"
          ],
          proTip: "Oysters are naturally GF - perfect!",
          icon: "🦪",
          featured: true,
          cuisineTypes: ["Seafood", "Oysters"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.5,
          reviewCount: 267
        }
      ]
    },
    {
      name: "Johannesburg Area",
      restaurants: [
        {
          name: "Crumble Gluten Free Bakery",
          address: "Cedar Rd, Broadacres AH, Chartwell, 2055, South Africa",
          hours: "Tue–Fri: 8:00AM – 4:00PM, Sat: 8:00AM – 2:00PM",
          phone: "+27 11 465 0404",
          website: "www.crumble.co.za",
          directionsUrl: "https://www.google.com/maps/search/Crumble+Gluten+Free+Bakery+Chartwell+Johannesburg",
          specialty: "100% Gluten-Free Bakery",
          overview: "Crumble is a dedicated gluten-free bakery offering a wide range of breads, pastries, and baked goods. Everything is made in a 100% gluten-free facility.",
          menuHighlights: [
            "🥖 Fresh Breads (GF)",
            "🥐 Pastries & Croissants (GF)",
            "🍰 Cakes & Cupcakes (GF)",
            "🍪 Cookies & Treats (GF)"
          ],
          proTip: "Call ahead to order specialty items!",
          icon: "🥐",
          featured: true,
          cuisineTypes: ["Bakery", "Gluten-Free"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          rating: 4.8,
          reviewCount: 178
        }
      ]
    },
    {
      name: "Franschhoek & Wine Country",
      restaurants: [
        {
          name: "Allora",
          address: "34 & 36 Huguenot St, Franschhoek, 7690, South Africa",
          hours: "Wed–Sun: 12:00PM – 9:00PM",
          phone: "+27 21 876 2292",
          website: "www.allora.co.za",
          directionsUrl: "https://www.google.com/maps/search/Allora+34+Huguenot+St+Franschhoek",
          specialty: "Italian in Wine Country",
          overview: "Allora brings authentic Italian cuisine to Franschhoek's wine country with gluten-free pasta and pizza options.",
          menuHighlights: [
            "🍝 GF Pasta Available",
            "🍕 GF Pizza Options",
            "🍷 Local Wine Pairing",
            "🧀 Italian Antipasti"
          ],
          proTip: "Book ahead in wine season!",
          icon: "🍝",
          featured: true,
          cuisineTypes: ["Italian", "Wine Country"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.5,
          reviewCount: 189
        },
        {
          name: "Tuk Tuk Microbrewery",
          address: "14 Huguenot St, Franschhoek, 7690, South Africa",
          hours: "Daily: 11:00AM – 10:00PM",
          phone: "+27 21 876 4464",
          website: "www.tuktukbrewery.co.za",
          directionsUrl: "https://www.google.com/maps/search/Tuk+Tuk+Microbrewery+Franschhoek",
          specialty: "Craft Beer & Asian Food",
          overview: "Unique microbrewery with Thai-inspired food. Many dishes can be prepared gluten-free.",
          menuHighlights: [
            "🍛 Thai Curries (GF options)",
            "🍚 Rice Dishes (GF)",
            "🍺 Craft Beers (check GF options)",
            "🥗 Asian Salads (GF)"
          ],
          proTip: "Ask about GF beer options!",
          icon: "🍺",
          featured: false,
          cuisineTypes: ["Thai", "Brewery", "Asian"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.4,
          reviewCount: 234
        },
        {
          name: "Tokara Delicatessen",
          address: "Helshoogte Rd, Stellenbosch, 7600, South Africa",
          hours: "Daily: 10:00AM – 5:00PM",
          phone: "+27 21 885 2550",
          website: "www.tokara.com",
          directionsUrl: "https://www.google.com/maps/search/Tokara+Delicatessen+Stellenbosch",
          specialty: "Wine Estate Deli",
          overview: "Tokara offers stunning views alongside a deli menu with gluten-free options in a beautiful wine estate setting.",
          menuHighlights: [
            "🥗 Gourmet Salads (GF)",
            "🍷 Premium Wine Tasting",
            "🧀 Cheese Platters (GF)",
            "🍰 GF Desserts"
          ],
          proTip: "Combine with wine tasting!",
          icon: "🍷",
          featured: true,
          cuisineTypes: ["Deli", "Wine Estate"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.6,
          reviewCount: 267
        },
        {
          name: "Hudsons Burger Joint",
          address: "77 Dorp St, Stellenbosch, 7600, South Africa",
          hours: "Daily: 11:00AM – 10:00PM",
          phone: "+27 21 886 7082",
          website: "www.hudsons.co.za",
          directionsUrl: "https://www.google.com/maps/search/Hudsons+Burger+Joint+Stellenbosch",
          specialty: "Gourmet Burgers with GF Buns",
          overview: "Popular burger chain offering gluten-free bun options for their gourmet burgers.",
          menuHighlights: [
            "🍔 GF Bun Options",
            "🍟 Check Fries (shared fryer)",
            "🥗 Salads (GF)",
            "🍺 Craft Drinks"
          ],
          proTip: "Ask for the GF bun option!",
          icon: "🍔",
          featured: false,
          cuisineTypes: ["Burgers", "American"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.3,
          reviewCount: 312
        },
        {
          name: "Greenhouse Restaurant",
          address: "Paarl, South Africa",
          hours: "Wed–Sun: 12:00PM – 3:00PM, 6:30PM – 9:00PM",
          phone: "+27 21 875 8100",
          website: "www.babylonstoren.com/greenhouse",
          directionsUrl: "https://www.google.com/maps/search/Greenhouse+Restaurant+Paarl+South+Africa",
          specialty: "Farm-to-Table Fine Dining",
          overview: "Award-winning restaurant at Babylonstoren farm offering seasonal menus with excellent dietary accommodations.",
          menuHighlights: [
            "🥗 Farm-Fresh Produce (GF)",
            "🍽️ Seasonal Tasting Menus",
            "🌿 Garden-to-Table Concept",
            "🍷 Premium Wine Pairing"
          ],
          proTip: "Book well in advance and mention GF needs!",
          icon: "🌿",
          featured: true,
          cuisineTypes: ["Fine Dining", "Farm-to-Table"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.8,
          reviewCount: 345
        }
      ]
    },
    {
      name: "Ballito & KwaZulu-Natal",
      restaurants: [
        {
          name: "Al Pescatore Italian Restaurant",
          address: "14 Edward Pl, Ballito, 4399, South Africa",
          hours: "Tue–Sun: 12:00PM – 10:00PM",
          phone: "+27 32 946 2374",
          website: "www.alpescatore.co.za",
          directionsUrl: "https://www.google.com/maps/search/Al+Pescatore+Italian+Restaurant+Ballito",
          specialty: "Italian Seafood",
          overview: "Classic Italian restaurant in Ballito offering fresh seafood and gluten-free pasta options.",
          menuHighlights: [
            "🍝 GF Pasta Available",
            "🦐 Fresh Seafood (GF)",
            "🍕 GF Pizza Options",
            "🍷 Italian Wines"
          ],
          proTip: "Request GF pasta when ordering!",
          icon: "🦐",
          featured: true,
          cuisineTypes: ["Italian", "Seafood"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.4,
          reviewCount: 156
        },
        {
          name: "The Waffle House",
          address: "Lot 839 Marine Dr, Ramsgate, Margate, 4285, South Africa",
          hours: "Daily: 8:00AM – 4:00PM",
          phone: "+27 39 314 4841",
          website: "www.wafflehouse.co.za",
          directionsUrl: "https://www.google.com/maps/search/The+Waffle+House+Ramsgate+Margate",
          specialty: "Waffles with GF Options",
          overview: "Popular waffle spot on the South Coast offering gluten-free waffle options.",
          menuHighlights: [
            "🧇 GF Waffles Available",
            "🍳 Breakfast Options (GF)",
            "☕ Coffee & Drinks",
            "🍰 Sweet Treats"
          ],
          proTip: "Ask for the GF waffle menu!",
          icon: "🧇",
          featured: false,
          cuisineTypes: ["Café", "Breakfast"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.3,
          reviewCount: 178
        }
      ]
    },
    {
      name: "Garden Route",
      restaurants: [
        {
          name: "Oh My Gluten-Free Eatery & Shoppe",
          address: "28 Langenhoven St, Still Bay West, Still Bay, 6674, South Africa",
          hours: "Mon–Sat: 8:00AM – 3:00PM",
          phone: "+27 84 577 8888",
          website: "www.ohmyglutenfree.co.za",
          directionsUrl: "https://www.google.com/maps/search/Oh+My+Gluten+Free+Eatery+Still+Bay",
          specialty: "100% Gluten-Free Eatery",
          overview: "A dedicated gluten-free eatery in Still Bay offering a full menu of breakfast, lunch, and baked goods - all 100% gluten-free.",
          menuHighlights: [
            "🥐 Fresh Baked Goods (GF)",
            "🍳 Full Breakfasts (GF)",
            "🥗 Lunches (GF)",
            "🍰 Desserts (GF)"
          ],
          proTip: "Everything is 100% GF - relax and enjoy!",
          icon: "🍽️",
          featured: true,
          cuisineTypes: ["Café", "Bakery", "Gluten-Free"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          rating: 4.9,
          reviewCount: 123
        },
        {
          name: "Tsitrus Café",
          address: "43 Gammasi St, Stormsrivier, 6308, South Africa",
          hours: "Daily: 7:30AM – 4:00PM",
          phone: "+27 42 281 1711",
          website: "www.tsitruscafe.co.za",
          directionsUrl: "https://www.google.com/maps/search/Tsitrus+Cafe+Stormsrivier",
          specialty: "Garden Route Café",
          overview: "Charming café on the Garden Route with gluten-free options and homestyle cooking.",
          menuHighlights: [
            "🥗 Light Meals (GF options)",
            "🍳 Breakfast (GF options)",
            "☕ Coffee & Cakes",
            "🌿 Garden Setting"
          ],
          proTip: "Stop here when driving the Garden Route!",
          icon: "☕",
          featured: false,
          cuisineTypes: ["Café", "Light Meals"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.4,
          reviewCount: 89
        },
        {
          name: "Chatters",
          address: "9A Gray St, Knysna Central, Knysna, 6571, South Africa",
          hours: "Mon–Sat: 8:00AM – 5:00PM",
          phone: "+27 44 382 0430",
          website: "www.chatters.co.za",
          directionsUrl: "https://www.google.com/maps/search/Chatters+Knysna",
          specialty: "Knysna Café",
          overview: "Popular Knysna café offering light meals with gluten-free options in a friendly atmosphere.",
          menuHighlights: [
            "🥗 Salads & Light Meals (GF)",
            "🍳 Breakfast (GF options)",
            "☕ Great Coffee",
            "🍰 GF Cake Options"
          ],
          proTip: "Ask about today's GF specials!",
          icon: "☕",
          featured: false,
          cuisineTypes: ["Café", "Light Meals"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.3,
          reviewCount: 145
        },
        {
          name: "Marilyn's 60's Diner",
          address: "Darnell St, Storms River, Stormsrivier, 6308, South Africa",
          hours: "Daily: 7:00AM – 9:00PM",
          phone: "+27 42 281 1711",
          website: "www.marilynsdiner.co.za",
          directionsUrl: "https://www.google.com/maps/search/Marilyns+60s+Diner+Storms+River",
          specialty: "Retro American Diner",
          overview: "Fun retro diner with American classics. They offer gluten-free bun options for burgers.",
          menuHighlights: [
            "🍔 GF Bun Options",
            "🥗 Salads (GF)",
            "🍳 Breakfast (GF options)",
            "🍦 Milkshakes"
          ],
          proTip: "Great pit stop on the Garden Route!",
          icon: "🍔",
          featured: false,
          cuisineTypes: ["American", "Diner"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.2,
          reviewCount: 167
        },
        {
          name: "Luka Café",
          address: "Elephant Park Road, Harkerville, Plettenberg Bay, 6604, South Africa",
          hours: "Daily: 8:00AM – 4:00PM",
          phone: "+27 44 532 7877",
          website: "www.lukacafe.co.za",
          directionsUrl: "https://www.google.com/maps/search/Luka+Cafe+Plettenberg+Bay",
          specialty: "Forest Café",
          overview: "Beautiful café near Plettenberg Bay offering healthy options with gluten-free choices in a forest setting.",
          menuHighlights: [
            "🥗 Healthy Meals (GF)",
            "🍳 Breakfast (GF options)",
            "☕ Specialty Coffee",
            "🌳 Forest Views"
          ],
          proTip: "Perfect after visiting Monkeyland!",
          icon: "🌳",
          featured: false,
          cuisineTypes: ["Café", "Healthy"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.5,
          reviewCount: 134
        },
        {
          name: "La Cafeteria",
          address: "Next door to Ocean Blue, 14 Hopwood Street, Plettenberg Bay, 6600, South Africa",
          hours: "Daily: 8:00AM – 5:00PM",
          phone: "+27 44 533 3632",
          website: "www.lacafeteria.co.za",
          directionsUrl: "https://www.google.com/maps/search/La+Cafeteria+Plettenberg+Bay",
          specialty: "Beach Café",
          overview: "Popular Plettenberg Bay café offering light meals with gluten-free options near the beach.",
          menuHighlights: [
            "🥗 Light Meals (GF options)",
            "🍳 All-Day Breakfast (GF)",
            "☕ Coffee & Drinks",
            "🏖️ Beach Location"
          ],
          proTip: "Great for a beach day lunch!",
          icon: "🏖️",
          featured: false,
          cuisineTypes: ["Café", "Beach"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.3,
          reviewCount: 156
        },
        {
          name: "Ristorante Enrico",
          address: "296 Main St, Keurboomstrand, 6600, South Africa",
          hours: "Daily: 12:00PM – 9:00PM",
          phone: "+27 44 535 9818",
          website: "www.enricos.co.za",
          directionsUrl: "https://www.google.com/maps/search/Ristorante+Enrico+Keurboomstrand",
          specialty: "Italian on the Beach",
          overview: "Beachfront Italian restaurant with stunning views and gluten-free pasta and pizza options.",
          menuHighlights: [
            "🍝 GF Pasta Available",
            "🍕 GF Pizza Options",
            "🦐 Fresh Seafood (GF)",
            "🌅 Ocean Views"
          ],
          proTip: "Book a table with ocean view!",
          icon: "🍝",
          featured: true,
          cuisineTypes: ["Italian", "Seafood"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.6,
          reviewCount: 267
        },
        {
          name: "Ilali Restaurant",
          address: "197 George Rd, Wilderness, 6560, South Africa",
          hours: "Tue–Sun: 12:00PM – 9:00PM",
          phone: "+27 44 877 0511",
          website: "www.ilali.co.za",
          directionsUrl: "https://www.google.com/maps/search/Ilali+Restaurant+Wilderness",
          specialty: "Fine Dining in Wilderness",
          overview: "Elegant restaurant in Wilderness offering creative cuisine with excellent dietary accommodations.",
          menuHighlights: [
            "🍽️ Creative Menu (GF options)",
            "🍷 Wine Selection",
            "🥗 Fresh Local Produce (GF)",
            "🌿 Garden Setting"
          ],
          proTip: "Book ahead for dinner!",
          icon: "🍽️",
          featured: true,
          cuisineTypes: ["Fine Dining", "Modern"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.7,
          reviewCount: 189
        }
      ]
    },
    {
      name: "Hermanus",
      restaurants: [
        {
          name: "Rossi's Italian Restaurant",
          address: "10 High St, Hermanus, 7200, South Africa",
          hours: "Tue–Sun: 12:00PM – 9:30PM",
          phone: "+27 28 312 2848",
          website: "www.rossis.co.za",
          directionsUrl: "https://www.google.com/maps/search/Rossis+Italian+Restaurant+Hermanus",
          specialty: "Italian in Hermanus",
          overview: "Beloved Italian restaurant in whale-watching town Hermanus offering gluten-free pasta options.",
          menuHighlights: [
            "🍝 GF Pasta Available",
            "🍕 GF Pizza Options",
            "🍷 Italian Wines",
            "🐋 Near Whale Watching"
          ],
          proTip: "Great after whale watching!",
          icon: "🍝",
          featured: true,
          cuisineTypes: ["Italian"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.5,
          reviewCount: 198
        },
        {
          name: "Fabio's Authentic Ristorante Italiano",
          address: "60 St Peters Ln, Hermanus, 7200, South Africa",
          hours: "Tue–Sun: 5:30PM – 10:00PM",
          phone: "+27 28 312 2159",
          website: "www.fabios.co.za",
          directionsUrl: "https://www.google.com/maps/search/Fabios+Ristorante+Italiano+Hermanus",
          specialty: "Authentic Italian",
          overview: "Traditional Italian trattoria offering homemade pasta with gluten-free alternatives available.",
          menuHighlights: [
            "🍝 GF Pasta Options",
            "🍕 Pizza (GF base available)",
            "🥩 Italian Mains (GF)",
            "🍷 Italian Wine List"
          ],
          proTip: "Intimate setting - book ahead!",
          icon: "🍝",
          featured: false,
          cuisineTypes: ["Italian", "Trattoria"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.4,
          reviewCount: 145
        }
      ]
    },
    {
      name: "Simon's Town & False Bay",
      restaurants: [
        {
          name: "Blue Kiwi",
          address: "Harbour Bay Mall Shop GF 17, Cnr Main & Dido Valley Roads, Simon's Town, Cape Town, 7975, South Africa",
          hours: "Daily: 8:00AM – 4:00PM",
          phone: "+27 21 786 5274",
          website: "www.bluekiwi.co.za",
          directionsUrl: "https://www.google.com/maps/search/Blue+Kiwi+Harbour+Bay+Mall+Simons+Town",
          specialty: "Healthy Café",
          overview: "Health-focused café in Simon's Town with extensive gluten-free options and fresh, wholesome food.",
          menuHighlights: [
            "🥗 Healthy Salads (GF)",
            "🍳 Breakfast (GF options)",
            "🥤 Smoothies & Juices",
            "🍰 GF Treats"
          ],
          proTip: "Great healthy stop in Simon's Town!",
          icon: "🥗",
          featured: false,
          cuisineTypes: ["Healthy", "Café"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.4,
          reviewCount: 123
        },
        {
          name: "Seaforth Restaurant",
          address: "Seaforth Rd, Simon's Town, Cape Town, 7975, South Africa",
          hours: "Daily: 9:00AM – 9:00PM",
          phone: "+27 21 786 4810",
          website: "www.seaforthrestaurant.co.za",
          directionsUrl: "https://www.google.com/maps/search/Seaforth+Restaurant+Simons+Town",
          specialty: "Beachfront Seafood",
          overview: "Beautiful beachfront restaurant near the penguin colony with fresh seafood - many naturally gluten-free options.",
          menuHighlights: [
            "🦐 Fresh Seafood (GF)",
            "🐟 Grilled Fish (GF)",
            "🥗 Salads (GF)",
            "🐧 Near Penguin Beach"
          ],
          proTip: "Visit after seeing the penguins!",
          icon: "🦐",
          featured: true,
          cuisineTypes: ["Seafood", "Beach"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.5,
          reviewCount: 289
        }
      ]
    },
    {
      name: "Strand & Somerset West",
      restaurants: [
        {
          name: "Pajamas and Jam Eatery",
          address: "32 Van Zyl St, Strand, Cape Town, 7140, South Africa",
          hours: "Tue–Sun: 7:30AM – 3:00PM",
          phone: "+27 21 853 4188",
          website: "www.pajamasandjam.co.za",
          directionsUrl: "https://www.google.com/maps/search/Pajamas+and+Jam+Eatery+Strand",
          specialty: "Breakfast & Brunch",
          overview: "Popular breakfast spot with a cozy atmosphere and gluten-free options for their brunch menu.",
          menuHighlights: [
            "🍳 GF Breakfast Options",
            "🥞 GF Pancakes Available",
            "☕ Great Coffee",
            "🥗 Light Lunches (GF)"
          ],
          proTip: "Come hungry - portions are generous!",
          icon: "🍳",
          featured: false,
          cuisineTypes: ["Breakfast", "Brunch", "Café"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.5,
          reviewCount: 178
        }
      ]
    },
    {
      name: "Lupa Osteria - Durbanville",
      restaurants: [
        {
          name: "Lupa Osteria",
          address: "Shop 7, Corner Oxford and Queen St, Durbanville, Cape Town, 7550, South Africa",
          hours: "Daily: 11:00AM – 10:00PM",
          phone: "+27 21 975 4998",
          website: "www.lupaosteria.co.za",
          directionsUrl: "https://www.google.com/maps/search/Lupa+Osteria+Durbanville",
          specialty: "Italian Chain with GF Options",
          overview: "Popular Italian chain known for their gluten-free pasta and pizza options with consistent quality.",
          menuHighlights: [
            "🍝 GF Pasta Menu",
            "🍕 GF Pizza Bases",
            "🥗 Italian Salads (GF)",
            "🍷 Wine Selection"
          ],
          proTip: "GF menu is extensive and well-marked!",
          icon: "🍝",
          featured: true,
          cuisineTypes: ["Italian", "Pizza", "Pasta"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.4,
          reviewCount: 267
        }
      ]
    },
    {
      name: "Jeffreys Bay",
      restaurants: [
        {
          name: "Nina's Real Food",
          address: "126 Da Gama Rd, Wavecrest, Jeffreys Bay, 6330, South Africa",
          hours: "Mon–Sat: 8:00AM – 3:00PM",
          phone: "+27 42 293 1118",
          website: "www.ninasrealfood.co.za",
          directionsUrl: "https://www.google.com/maps/search/Ninas+Real+Food+Jeffreys+Bay",
          specialty: "Health-Focused Eatery",
          overview: "Health-conscious eatery in the surfing town of Jeffreys Bay with many gluten-free and wholesome options.",
          menuHighlights: [
            "🥗 Healthy Bowls (GF)",
            "🍳 Breakfast (GF options)",
            "🥤 Smoothies & Juices",
            "🏄 Surfer-Friendly"
          ],
          proTip: "Perfect fuel before or after surfing!",
          icon: "🥗",
          featured: false,
          cuisineTypes: ["Healthy", "Café"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.6,
          reviewCount: 145
        }
      ]
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
        return <Badge className="bg-amber-100 text-amber-800 border-amber-300">Many GF Options</Badge>;
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

  const filteredCities = cityFilter 
    ? cities.filter(city => city.name.toLowerCase().includes(cityFilter.toLowerCase()))
    : cities;

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/countries" className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Countries
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-4xl">🇿🇦</span>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Gluten-Free Dining in South Africa</h1>
              <p className="text-gray-600">Discover celiac-safe restaurants across the Rainbow Nation</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Introduction */}
        <Card className="mb-8 bg-gradient-to-r from-green-50 to-yellow-50 border-green-200">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <Award className="w-8 h-8 text-green-600 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">South Africa's Gluten-Free Scene</h2>
                <p className="text-gray-700">
                  South Africa offers a growing gluten-free dining scene, from dedicated bakeries in Cape Town 
                  to restaurants along the Garden Route. Major cities and tourist areas are increasingly 
                  celiac-friendly, with many establishments offering gluten-free alternatives. Look for 
                  dedicated gluten-free facilities for the safest dining experience.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cities and Restaurants */}
        {filteredCities.map((city) => (
          <div key={city.name} className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-orange-600" />
              <h2 className="text-2xl font-bold text-gray-900">{city.name}</h2>
              <Badge variant="secondary">{city.restaurants.length} restaurants</Badge>
            </div>

            <div className="grid gap-6">
              {city.restaurants.map((restaurant, index) => (
                <Card key={index} className={`overflow-hidden ${restaurant.featured ? 'ring-2 ring-orange-300' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Restaurant Info */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              {restaurant.featured && (
                                <Badge className="bg-orange-100 text-orange-800 border-orange-300">
                                  <Award className="w-3 h-3 mr-1" />Featured
                                </Badge>
                              )}
                              <h3 className="text-xl font-bold text-gray-900">{restaurant.name}</h3>
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                              {renderStarRating(restaurant.rating)}
                              <span className="text-gray-500 text-sm">({restaurant.reviewCount} reviews)</span>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Heart className="w-4 h-4" />
                          </Button>
                        </div>

                        {/* Badges */}
                        <div className="flex flex-wrap gap-2 mb-3">
                          {restaurant.cuisineTypes?.map((cuisine, i) => (
                            <Badge key={i} variant="outline">{cuisine}</Badge>
                          ))}
                          {restaurant.celiacSafe && getCeliacSafeBadge(restaurant.celiacSafe)}
                          {restaurant.menuType && getMenuTypeBadge(restaurant.menuType)}
                        </div>

                        {/* Contact Info */}
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

                        {/* Overview */}
                        <p className="text-gray-700 mb-4">{restaurant.overview}</p>

                        {/* Menu Highlights */}
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Menu Highlights</h4>
                          <div className="flex flex-wrap gap-2">
                            {restaurant.menuHighlights.map((item, i) => (
                              <Badge key={i} variant="secondary" className="text-sm">{item}</Badge>
                            ))}
                          </div>
                        </div>

                        {/* Pro Tip */}
                        {restaurant.proTip && (
                          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                            <div className="flex items-center gap-2">
                              <MessageCircle className="w-4 h-4 text-amber-600" />
                              <span className="font-medium text-amber-800">Pro Tip:</span>
                              <span className="text-amber-700">{restaurant.proTip}</span>
                            </div>
                          </div>
                        )}

                        {/* Actions */}
                        <div className="flex gap-3 mt-4">
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

                        {/* Community Reviews */}
                        <div className="mt-6 pt-6 border-t">
                          <RestaurantReviews
                            restaurantName={restaurant.name}
                            restaurantCountry="South Africa"
                            restaurantCity={city.name}
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default SouthAfrica;
