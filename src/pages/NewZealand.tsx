import { MapPin, Star, ArrowLeft, Phone, Clock, Globe, CheckCircle, Navigation, Heart, MessageCircle, Award, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, useSearchParams } from "react-router-dom";
import { useCountrySEO } from "@/hooks/useCountrySEO";

const NewZealand = () => {
  const [searchParams] = useSearchParams();
  const cityFilter = searchParams.get("city");
  
  useCountrySEO({
    countryName: "New Zealand",
    countrySlug: "new-zealand",
    description: "Find the best gluten-free restaurants in New Zealand. Dedicated bakeries, cafes & restaurants in Auckland, Wellington, Christchurch, Queenstown.",
    ogDescription: "Discover gluten-free Kiwi dining. Browse dedicated GF bakeries, cafes, and restaurants across New Zealand.",
    cities: [
      { name: "Auckland" },
      { name: "Wellington" },
      { name: "Christchurch" },
      { name: "Queenstown" }
    ],
    faqs: [
      { question: "Is New Zealand good for gluten-free travelers?", answer: "Yes! New Zealand has excellent celiac awareness with many dedicated GF bakeries and restaurants across both islands." },
      { question: "Are there dedicated GF bakeries in NZ?", answer: "Yes! The GF Depot and Gluten Free 4U offer 100% dedicated GF facilities with amazing baked goods." },
      { question: "Can I find GF fish & chips in NZ?", answer: "Absolutely! Several fish and chip shops offer dedicated GF batter and fryers." }
    ],
    schemaId: "new-zealand"
  });
  
  const cities = [
    {
      name: "Auckland",
      restaurants: [
        {
          name: "Giapo",
          address: "12 Gore St, Auckland, 1010, New Zealand",
          hours: "Mon-Sun: 12:00PM – 10:30PM",
          phone: "+64 9 379 4222",
          website: "www.giapo.com",
          directionsUrl: "https://maps.google.com/?q=Giapo+Auckland",
          specialty: "Innovative Ice Cream",
          overview: "Famous for their innovative ice cream creations with many gluten-free options available. A must-visit for dessert lovers.",
          menuHighlights: [
            "🍦 Gluten-Free Cones",
            "🍨 Artisan Ice Cream",
            "🎨 Creative Desserts"
          ],
          proTip: "Ask about their gluten-free cone options - they're made fresh daily!",
          icon: "🍦",
          featured: true,
          cuisineTypes: ["Ice Cream", "Desserts"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.8,
          reviewCount: 312
        },
        {
          name: "The GF Depot",
          address: "379 Parnell Road, Parnell, Auckland 1052, New Zealand",
          hours: "Mon-Sat: 8:00AM – 4:00PM",
          phone: "+64 9 303 2929",
          website: "www.thegfdepot.co.nz",
          directionsUrl: "https://maps.google.com/?q=The+GF+Depot+Parnell+Auckland",
          specialty: "100% Gluten-Free Depot",
          overview: "Auckland's premier 100% gluten-free depot offering a wide range of baked goods, meals, and specialty products.",
          menuHighlights: [
            "🥧 Fresh Baked Goods (GF)",
            "🥪 Pies & Sandwiches (GF)",
            "🍰 Cakes & Treats (GF)",
            "🛒 Specialty Products"
          ],
          proTip: "Stock up on their frozen goods to take home - perfect for busy days!",
          icon: "🥐",
          featured: true,
          cuisineTypes: ["Bakery", "Café", "Gluten-Free"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          rating: 4.9,
          reviewCount: 187
        },
        {
          name: "HNT Kitchen",
          address: "7, Shop E14, Level 2/21 Queen Street, Auckland CBD, Auckland 1010, New Zealand",
          hours: "Mon-Sun: 11:00AM – 9:00PM",
          phone: "",
          website: "",
          directionsUrl: "https://maps.google.com/?q=HNT+Kitchen+Auckland",
          specialty: "Asian Cuisine",
          overview: "Popular Asian fusion restaurant with rice-based dishes and gluten-free options available.",
          menuHighlights: [
            "🍜 Rice Noodle Dishes (GF)",
            "🍚 Rice Bowls (GF)",
            "🥗 Fresh Salads (GF)"
          ],
          proTip: "Ask about gluten-free soy sauce alternatives!",
          icon: "🍜",
          featured: false,
          cuisineTypes: ["Asian", "Vietnamese"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.6,
          reviewCount: 143
        },
        {
          name: "Little Bird Kitchen",
          address: "Summer Street & Ponsonby Road, Ponsonby, Auckland 1011, New Zealand",
          hours: "Mon-Sun: 7:30AM – 4:00PM",
          phone: "",
          website: "www.littlebirdorganics.co.nz",
          directionsUrl: "https://maps.google.com/?q=Little+Bird+Kitchen+Ponsonby+Auckland",
          specialty: "Raw & Vegan Café",
          overview: "Plant-based café with many naturally gluten-free and raw options in a health-focused environment.",
          menuHighlights: [
            "🥗 Raw Bowls (GF)",
            "🥤 Smoothies & Juices",
            "🍰 Raw Desserts (GF)",
            "🥙 GF Wraps"
          ],
          proTip: "Their raw cheesecakes are naturally GF and amazing!",
          icon: "🥗",
          featured: true,
          cuisineTypes: ["Vegan", "Health Food", "Raw"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.7,
          reviewCount: 234
        },
        {
          name: "Village Wholefoods Cafe",
          address: "21 Central Terrace, Howick, Auckland 2014, New Zealand",
          hours: "Mon-Sat: 8:00AM – 4:00PM",
          phone: "",
          website: "",
          directionsUrl: "https://maps.google.com/?q=Village+Wholefoods+Cafe+Howick+Auckland",
          specialty: "Health Food Café",
          overview: "Wholesome café with organic options and plenty of gluten-free choices.",
          menuHighlights: [
            "🥗 Healthy Salads (GF)",
            "🍳 Breakfast (GF options)",
            "☕ Coffee & Treats"
          ],
          proTip: "Great selection of organic produce!",
          icon: "🥗",
          featured: false,
          cuisineTypes: ["Café", "Health Food"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.5,
          reviewCount: 98
        },
        {
          name: "Orewa Beach Fish & Chips",
          address: "Shop 6/350 Hibiscus Coast Highway, Orewa, Auckland 0931, New Zealand",
          hours: "Mon-Sun: 11:00AM – 8:30PM",
          phone: "",
          website: "",
          directionsUrl: "https://maps.google.com/?q=Orewa+Beach+Fish+Chips+Auckland",
          specialty: "Fish & Chips with GF Options",
          overview: "Classic Kiwi fish and chips with gluten-free batter available.",
          menuHighlights: [
            "🐟 GF Battered Fish",
            "🍟 Chips",
            "🦐 Seafood Options"
          ],
          proTip: "Ask for their dedicated GF fryer!",
          icon: "🐟",
          featured: false,
          cuisineTypes: ["Fish & Chips", "Takeaway"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.4,
          reviewCount: 156
        },
        {
          name: "The Attic Bar & Restaurant",
          address: "3 Totara Avenue, New Lynn, Auckland 1071, New Zealand",
          hours: "Wed-Sun: 4:00PM – Late",
          phone: "",
          website: "",
          directionsUrl: "https://maps.google.com/?q=The+Attic+Bar+Restaurant+New+Lynn+Auckland",
          specialty: "Bar & Restaurant",
          overview: "Trendy bar and restaurant with gluten-free menu options available.",
          menuHighlights: [
            "🍽️ GF Main Courses",
            "🥗 Salads (GF)",
            "🍷 Drinks Selection"
          ],
          proTip: "Mention dietary requirements when booking!",
          icon: "🍽️",
          featured: false,
          cuisineTypes: ["Bar", "Restaurant"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.5,
          reviewCount: 112
        },
        {
          name: "Olas Arepas",
          address: "136 Ponsonby Road, Ponsonby, Auckland 1011, New Zealand",
          hours: "Tue-Sun: 11:00AM – 9:00PM",
          phone: "",
          website: "",
          directionsUrl: "https://maps.google.com/?q=Olas+Arepas+Ponsonby+Auckland",
          specialty: "Venezuelan Arepas",
          overview: "Authentic Venezuelan arepas made from corn - naturally gluten-free and delicious!",
          menuHighlights: [
            "🌮 Corn Arepas (GF)",
            "🥑 Guacamole (GF)",
            "🍲 Latin Bowls (GF)"
          ],
          proTip: "Arepas are naturally gluten-free - great for celiacs!",
          icon: "🌮",
          featured: true,
          cuisineTypes: ["Venezuelan", "Latin American"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.6,
          reviewCount: 189
        },
        {
          name: "Wen & Yen Bakery",
          address: "6/32 Constellation Dr, Rosedale, Auckland 0632, New Zealand",
          hours: "Tue-Sat: 8:00AM – 3:00PM",
          phone: "",
          website: "",
          directionsUrl: "https://maps.google.com/?q=Wen+Yen+Bakery+Rosedale+Auckland",
          specialty: "Asian Bakery",
          overview: "Asian bakery with gluten-free options available.",
          menuHighlights: [
            "🥐 GF Baked Goods",
            "🍰 Cakes (GF options)",
            "☕ Coffee & Tea"
          ],
          proTip: "Ask about their GF daily specials!",
          icon: "🥐",
          featured: false,
          cuisineTypes: ["Bakery", "Asian"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.7,
          reviewCount: 76
        },
        {
          name: "Hello Beasty",
          address: "95-97 Customs Street West, Auckland CBD, Auckland 1010, New Zealand",
          hours: "Tue-Sat: 12:00PM – Late",
          phone: "",
          website: "www.hellobeasty.co.nz",
          directionsUrl: "https://maps.google.com/?q=Hello+Beasty+Auckland",
          specialty: "Modern Asian",
          overview: "Modern Asian fusion restaurant with creative dishes and gluten-free options.",
          menuHighlights: [
            "🍜 Asian Fusion (GF options)",
            "🍣 Sashimi (GF)",
            "🥗 Salads (GF)"
          ],
          proTip: "Inform staff about allergies for personalized recommendations!",
          icon: "🍜",
          featured: false,
          cuisineTypes: ["Asian Fusion", "Modern"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.6,
          reviewCount: 267
        },
        {
          name: "Napoli Contemporanea",
          address: "297 Parnell Road, Parnell, Auckland 1052, New Zealand",
          hours: "Mon-Sun: 11:30AM – 10:00PM",
          phone: "",
          website: "",
          directionsUrl: "https://maps.google.com/?q=Napoli+Contemporanea+Parnell+Auckland",
          specialty: "Italian with GF Options",
          overview: "Authentic Italian restaurant offering gluten-free pasta and pizza options.",
          menuHighlights: [
            "🍝 GF Pasta",
            "🍕 GF Pizza Bases",
            "🥗 Italian Salads (GF)"
          ],
          proTip: "Request GF options when ordering pasta or pizza!",
          icon: "🍝",
          featured: false,
          cuisineTypes: ["Italian", "Pizza"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.5,
          reviewCount: 198
        },
        {
          name: "Thirty One",
          address: "31 Ponsonby Road, Grey Lynn, Auckland 1011, New Zealand",
          hours: "Mon-Sun: 7:00AM – Late",
          phone: "",
          website: "",
          directionsUrl: "https://maps.google.com/?q=Thirty+One+Ponsonby+Auckland",
          specialty: "Modern NZ Café",
          overview: "Trendy café and bar with all-day dining and gluten-free options.",
          menuHighlights: [
            "🍳 Breakfast (GF options)",
            "🥗 Lunch (GF options)",
            "🍷 Drinks Selection"
          ],
          proTip: "Great for brunch with GF toast options!",
          icon: "☕",
          featured: false,
          cuisineTypes: ["Modern NZ", "Bar", "Café"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.4,
          reviewCount: 134
        },
        {
          name: "Nahm",
          address: "39 Elliott St, Auckland 1010, New Zealand",
          hours: "Mon-Sun: 11:30AM – 10:00PM",
          phone: "",
          website: "",
          directionsUrl: "https://maps.google.com/?q=Nahm+Auckland",
          specialty: "Thai Cuisine",
          overview: "Authentic Thai restaurant with many rice-based dishes that are naturally gluten-free.",
          menuHighlights: [
            "🍛 Thai Curries (GF)",
            "🍚 Rice Dishes (GF)",
            "🥗 Fresh Salads (GF)"
          ],
          proTip: "Ask for GF soy sauce - they can accommodate!",
          icon: "🍛",
          featured: false,
          cuisineTypes: ["Thai", "Asian"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.7,
          reviewCount: 223
        }
      ]
    },
    {
      name: "Wellington",
      restaurants: [
        {
          name: "Miss Kangsta",
          address: "141/11 Jessie Street, Te Aro, Wellington 6011, New Zealand",
          hours: "Tue-Sun: 11:30AM – 9:00PM",
          phone: "+64 4 384 3818",
          website: "www.misskangsta.co.nz",
          directionsUrl: "https://maps.google.com/?q=Miss+Kangsta+Wellington",
          specialty: "Asian Fusion",
          overview: "Popular Wellington spot serving up creative Asian fusion dishes with plenty of gluten-free options available.",
          menuHighlights: [
            "🥟 GF Buns Available",
            "🍚 Rice Bowls (GF)",
            "🥗 Asian Fusion Plates (GF)"
          ],
          proTip: "Try their rice paper rolls for a completely gluten-free starter!",
          icon: "🥟",
          featured: true,
          cuisineTypes: ["Asian Fusion", "Modern"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.7,
          reviewCount: 178
        },
        {
          name: "Gluten Free 4u",
          address: "44 Nelson Street, Wellington 5012, New Zealand",
          hours: "Mon-Fri: 8:00AM – 4:00PM, Sat: 9:00AM – 2:00PM",
          phone: "+64 4 566 7677",
          website: "www.glutenfree4u.co.nz",
          directionsUrl: "https://maps.google.com/?q=Gluten+Free+4u+Wellington",
          specialty: "100% Gluten-Free Bakery",
          overview: "A dedicated 100% gluten-free bakery offering a wide range of baked goods, breads, and cafe fare.",
          menuHighlights: [
            "🍞 Fresh Bread (GF)",
            "🥐 Pastries (GF)",
            "🍰 Cakes (GF)",
            "🥧 Savory Pies (GF)"
          ],
          proTip: "They offer nationwide delivery for their frozen products!",
          icon: "🥐",
          featured: true,
          cuisineTypes: ["Bakery", "Café", "Gluten-Free"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          rating: 4.9,
          reviewCount: 145
        },
        {
          name: "Coolsville Cartel",
          address: "3 Moxham Avenue, Hataitai, Wellington 6021, New Zealand",
          hours: "Wed-Mon: 8:00AM – 3:00PM",
          phone: "",
          website: "",
          directionsUrl: "https://maps.google.com/?q=Coolsville+Cartel+Hataitai+Wellington",
          specialty: "Brunch Café",
          overview: "Trendy brunch spot with great gluten-free options and a welcoming atmosphere.",
          menuHighlights: [
            "🍳 Brunch (GF options)",
            "☕ Coffee",
            "🥗 Healthy Bowls (GF)"
          ],
          proTip: "Their GF toast is excellent!",
          icon: "☕",
          featured: false,
          cuisineTypes: ["Café", "Brunch"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.5,
          reviewCount: 112
        },
        {
          name: "Neo Cafe & Eatery",
          address: "132 Willis Street, Te Aro, Wellington 6011, New Zealand",
          hours: "Mon-Fri: 7:00AM – 4:00PM, Sat-Sun: 8:00AM – 4:00PM",
          phone: "",
          website: "",
          directionsUrl: "https://maps.google.com/?q=Neo+Cafe+Eatery+Wellington",
          specialty: "Modern NZ Café",
          overview: "Popular Wellington café with modern Kiwi cuisine and gluten-free options.",
          menuHighlights: [
            "🍳 Breakfast (GF options)",
            "🥗 Lunch (GF options)",
            "☕ Coffee"
          ],
          proTip: "Great central location for a quick GF bite!",
          icon: "☕",
          featured: false,
          cuisineTypes: ["Café", "Modern NZ"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.4,
          reviewCount: 167
        },
        {
          name: "1154 Pastaria",
          address: "132 Cuba Street, Te Aro, Wellington 6011, New Zealand",
          hours: "Mon-Sun: 11:30AM – 10:00PM",
          phone: "",
          website: "",
          directionsUrl: "https://maps.google.com/?q=1154+Pastaria+Cuba+Street+Wellington",
          specialty: "Italian Pasta",
          overview: "Fresh pasta restaurant offering gluten-free pasta options.",
          menuHighlights: [
            "🍝 GF Pasta Options",
            "🥗 Salads (GF)",
            "🍷 Italian Wine"
          ],
          proTip: "They have dedicated GF pasta - just ask!",
          icon: "🍝",
          featured: false,
          cuisineTypes: ["Italian", "Pasta"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.6,
          reviewCount: 234
        },
        {
          name: "Mt Vic Chippery",
          address: "5 Majoribanks Street, Mount Victoria, Wellington 6011, New Zealand",
          hours: "Tue-Sun: 12:00PM – 8:30PM",
          phone: "",
          website: "",
          directionsUrl: "https://maps.google.com/?q=Mt+Vic+Chippery+Wellington",
          specialty: "Fish & Chips",
          overview: "Wellington's famous fish and chips with gluten-free batter available!",
          menuHighlights: [
            "🐟 GF Battered Fish",
            "🍟 Fresh Cut Chips",
            "🦐 Seafood Options"
          ],
          proTip: "One of the best GF fish & chips in Wellington!",
          icon: "🐟",
          featured: true,
          cuisineTypes: ["Fish & Chips", "Takeaway"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.7,
          reviewCount: 298
        }
      ]
    },
    {
      name: "Queenstown & Arrowtown",
      restaurants: [
        {
          name: "Erik's Fish and Chips",
          address: "13 Earl St, Queenstown 9300, New Zealand",
          hours: "Mon-Sun: 11:00AM – 9:00PM",
          phone: "+64 3 442 4290",
          website: "www.eriksfishandchips.co.nz",
          directionsUrl: "https://maps.google.com/?q=Eriks+Fish+and+Chips+Queenstown",
          specialty: "Fish & Chips with Dedicated GF Fryer",
          overview: "Famous Queenstown fish and chips spot offering dedicated gluten-free frying options for celiac diners.",
          menuHighlights: [
            "🐟 GF Battered Fish (Separate Fryer)",
            "🍟 Fresh Chips",
            "🦐 Seafood Options"
          ],
          proTip: "They have a dedicated gluten-free fryer! Finally safe fish and chips!",
          icon: "🐟",
          featured: true,
          cuisineTypes: ["Fish & Chips", "Seafood"],
          celiacSafe: "dedicated-facility",
          menuType: "mixed-menu",
          rating: 4.8,
          reviewCount: 267
        },
        {
          name: "Fergburger",
          address: "42 Shotover St, Queenstown 9300, New Zealand",
          hours: "Mon-Sun: 8:00AM – 5:00AM",
          phone: "",
          website: "www.fergburger.com",
          directionsUrl: "https://maps.google.com/?q=Fergburger+Queenstown",
          specialty: "Famous Burgers",
          overview: "Queenstown's legendary burger joint with gluten-free bun options available.",
          menuHighlights: [
            "🍔 GF Burger Buns",
            "🥗 Salads",
            "🍟 Sides"
          ],
          proTip: "Ask for a GF bun - they can accommodate!",
          icon: "🍔",
          featured: true,
          cuisineTypes: ["Burgers", "Fast Food"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.6,
          reviewCount: 456
        },
        {
          name: "Postmasters Kitchen + Bar",
          address: "54 Buckingham Street, Arrowtown 9302, New Zealand",
          hours: "Wed-Sun: 12:00PM – Late",
          phone: "",
          website: "",
          directionsUrl: "https://maps.google.com/?q=Postmasters+Kitchen+Bar+Arrowtown",
          specialty: "Modern NZ Dining",
          overview: "Stylish restaurant in historic Arrowtown with gluten-free options.",
          menuHighlights: [
            "🍽️ Modern NZ (GF options)",
            "🥗 Seasonal Plates (GF)",
            "🍷 Local Wines"
          ],
          proTip: "Great for a special dinner with dietary accommodations!",
          icon: "🍽️",
          featured: false,
          cuisineTypes: ["Modern NZ", "Bar"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.5,
          reviewCount: 134
        },
        {
          name: "Saigon Kingdom Vietnamese Restaurant",
          address: "88 Beach Street, Queenstown 9300, New Zealand",
          hours: "Mon-Sun: 11:00AM – 10:00PM",
          phone: "",
          website: "",
          directionsUrl: "https://maps.google.com/?q=Saigon+Kingdom+Queenstown",
          specialty: "Vietnamese Cuisine",
          overview: "Authentic Vietnamese with many rice-based dishes that are naturally gluten-free.",
          menuHighlights: [
            "🍜 Pho (GF with rice noodles)",
            "🍚 Rice Dishes (GF)",
            "🥗 Fresh Rolls (GF)"
          ],
          proTip: "Rice noodle dishes are naturally GF!",
          icon: "🍜",
          featured: false,
          cuisineTypes: ["Vietnamese", "Asian"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.4,
          reviewCount: 189
        }
      ]
    },
    {
      name: "Christchurch",
      restaurants: [
        {
          name: "Herba Gourmet",
          address: "96 Oxford Terrace, Christchurch Central City, Christchurch 8011, New Zealand",
          hours: "Mon-Sat: 9:00AM – 4:00PM",
          phone: "+64 3 365 0809",
          website: "www.herbagourmet.co.nz",
          directionsUrl: "https://maps.google.com/?q=Herba+Gourmet+Christchurch",
          specialty: "Vegan & Health Food",
          overview: "Plant-based restaurant with extensive gluten-free options. A haven for health-conscious diners.",
          menuHighlights: [
            "🥗 Raw Bowls (GF)",
            "🥙 GF Wraps",
            "🥤 Smoothies",
            "🍰 Vegan Desserts (GF)"
          ],
          proTip: "Their raw desserts are naturally gluten-free and delicious!",
          icon: "🥗",
          featured: true,
          cuisineTypes: ["Vegan", "Health Food"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.7,
          reviewCount: 156
        },
        {
          name: "Bubbles Gluten Free Catering",
          address: "56 Hawdon Street, Sydenham, Christchurch 8023, New Zealand",
          hours: "Tue-Fri: 9:00AM – 4:00PM, Sat: 9:00AM – 1:00PM",
          phone: "+64 3 332 6888",
          website: "www.bubblesglutenfree.co.nz",
          directionsUrl: "https://maps.google.com/?q=Bubbles+Gluten+Free+Catering+Christchurch",
          specialty: "100% Gluten-Free Bakery",
          overview: "Dedicated 100% gluten-free bakery and catering service with an amazing range of baked goods.",
          menuHighlights: [
            "🍞 Fresh Bread (GF)",
            "🥧 Pies (GF)",
            "🍰 Cakes (GF)",
            "🥐 Pastries (GF)"
          ],
          proTip: "Pre-order for special occasions - they do amazing celebration cakes!",
          icon: "🥐",
          featured: true,
          cuisineTypes: ["Bakery", "Catering", "Gluten-Free"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          rating: 4.9,
          reviewCount: 87
        },
        {
          name: "Fiddlesticks Restaurant and Bar",
          address: "Corner of Worcester Boulevard & Montreal Street, Christchurch Central City, Christchurch 8013, New Zealand",
          hours: "Mon-Sun: 11:30AM – Late",
          phone: "",
          website: "",
          directionsUrl: "https://maps.google.com/?q=Fiddlesticks+Restaurant+Bar+Christchurch",
          specialty: "Modern NZ Bar & Restaurant",
          overview: "Popular Christchurch restaurant with gluten-free menu options.",
          menuHighlights: [
            "🍽️ GF Main Courses",
            "🥗 Salads (GF)",
            "🍷 Wine & Drinks"
          ],
          proTip: "Ask for the GF menu!",
          icon: "🍽️",
          featured: false,
          cuisineTypes: ["Modern NZ", "Bar"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.5,
          reviewCount: 234
        },
        {
          name: "Kaiser Brew Garden",
          address: "Level 1/96 Oxford Terrace, CBD, Christchurch 8011, New Zealand",
          hours: "Mon-Sun: 11:00AM – Late",
          phone: "",
          website: "",
          directionsUrl: "https://maps.google.com/?q=Kaiser+Brew+Garden+Christchurch",
          specialty: "Gastropub",
          overview: "German-style gastropub with gluten-free options available.",
          menuHighlights: [
            "🍺 GF Beer Options",
            "🍖 Grilled Meats (GF)",
            "🥗 Salads (GF)"
          ],
          proTip: "They have GF beer options - ask the staff!",
          icon: "🍺",
          featured: false,
          cuisineTypes: ["Gastropub", "German"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.4,
          reviewCount: 178
        },
        {
          name: "Sweet Revenge Store",
          address: "96 Oxford Terrace, Christchurch Central City, Christchurch 8011, New Zealand",
          hours: "Mon-Sun: 10:00AM – 10:00PM",
          phone: "",
          website: "",
          directionsUrl: "https://maps.google.com/?q=Sweet+Revenge+Store+Christchurch",
          specialty: "Desserts & Sweets",
          overview: "Dessert shop with gluten-free options available.",
          menuHighlights: [
            "🍦 Ice Cream (GF options)",
            "🍰 Cakes (some GF)",
            "🍫 Treats"
          ],
          proTip: "Check for daily GF dessert specials!",
          icon: "🍰",
          featured: false,
          cuisineTypes: ["Desserts", "Café"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.6,
          reviewCount: 145
        },
        {
          name: "Doubles",
          address: "62 Worcester Boulevard, Christchurch Central City, Christchurch 8013, New Zealand",
          hours: "Tue-Sun: 11:00AM – 8:00PM",
          phone: "",
          website: "",
          directionsUrl: "https://maps.google.com/?q=Doubles+Christchurch",
          specialty: "Caribbean Street Food",
          overview: "Authentic Caribbean flavors with many naturally gluten-free options.",
          menuHighlights: [
            "🌮 Doubles (GF)",
            "🍛 Caribbean Curries (GF)",
            "🥗 Fresh Salads (GF)"
          ],
          proTip: "Doubles are naturally gluten-free!",
          icon: "🌮",
          featured: false,
          cuisineTypes: ["Caribbean", "Street Food"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.5,
          reviewCount: 123
        },
        {
          name: "Shaka Bros",
          address: "96 Oxford Terrace, Christchurch Central City, Christchurch 8011, New Zealand",
          hours: "Mon-Sun: 7:00AM – 3:00PM",
          phone: "",
          website: "",
          directionsUrl: "https://maps.google.com/?q=Shaka+Bros+Christchurch",
          specialty: "Breakfast & Brunch",
          overview: "Popular brunch spot with gluten-free breakfast options.",
          menuHighlights: [
            "🍳 Breakfast (GF options)",
            "🥞 GF Pancakes",
            "☕ Coffee"
          ],
          proTip: "Great GF pancakes!",
          icon: "🍳",
          featured: false,
          cuisineTypes: ["Breakfast", "Brunch"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.3,
          reviewCount: 98
        }
      ]
    },
    {
      name: "Wanaka",
      restaurants: [
        {
          name: "Relishes Cafe",
          address: "1/99 Ardmore Street, Wanaka 9305, New Zealand",
          hours: "Mon-Sun: 7:30AM – 4:00PM",
          phone: "+64 3 443 9018",
          website: "www.relishescafe.co.nz",
          directionsUrl: "https://maps.google.com/?q=Relishes+Cafe+Wanaka",
          specialty: "Lakeside Café",
          overview: "Popular Wanaka cafe known for excellent gluten-free options and stunning lake views.",
          menuHighlights: [
            "🥞 GF Pancakes",
            "🥗 Brunch Bowls (GF)",
            "🍰 Fresh Baking (GF options)",
            "☕ Coffee"
          ],
          proTip: "Arrive early for a lakeside table - it gets busy!",
          icon: "☕",
          featured: true,
          cuisineTypes: ["Café", "Brunch"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.7,
          reviewCount: 234
        },
        {
          name: "Big Fig",
          address: "105 Ardmore St, Wanaka 9305, New Zealand",
          hours: "Mon-Sun: 8:00AM – 4:00PM",
          phone: "",
          website: "",
          directionsUrl: "https://maps.google.com/?q=Big+Fig+Wanaka",
          specialty: "Mediterranean Café",
          overview: "Mediterranean-inspired café with gluten-free options.",
          menuHighlights: [
            "🥗 Mediterranean Dishes (GF)",
            "🍳 Breakfast (GF options)",
            "☕ Coffee"
          ],
          proTip: "Great for a relaxed breakfast!",
          icon: "🥗",
          featured: false,
          cuisineTypes: ["Mediterranean", "Café"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.6,
          reviewCount: 167
        }
      ]
    },
    {
      name: "Rotorua",
      restaurants: [
        {
          name: "Hello Stranger Cafe",
          address: "1149 Pukuatua Street, Rotorua 3010, New Zealand",
          hours: "Mon-Fri: 7:00AM – 3:00PM, Sat-Sun: 8:00AM – 3:00PM",
          phone: "+64 7 460 0953",
          website: "www.hellostrangercafe.co.nz",
          directionsUrl: "https://maps.google.com/?q=Hello+Stranger+Cafe+Rotorua",
          specialty: "Trendy Café",
          overview: "Trendy Rotorua cafe with excellent gluten-free breakfast and lunch options.",
          menuHighlights: [
            "🍞 GF Toast Options",
            "🍳 Eggs Benedict (GF)",
            "🥤 Smoothie Bowls (GF)"
          ],
          proTip: "Try their gluten-free bread - it's made fresh daily!",
          icon: "☕",
          featured: true,
          cuisineTypes: ["Café", "Brunch"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.6,
          reviewCount: 145
        },
        {
          name: "Leonardo's Italian Food & Wine",
          address: "1099 Tutanekai Street, Rotorua 3010, New Zealand",
          hours: "Tue-Sun: 5:00PM – Late",
          phone: "",
          website: "",
          directionsUrl: "https://maps.google.com/?q=Leonardos+Italian+Rotorua",
          specialty: "Italian Restaurant",
          overview: "Authentic Italian restaurant with GF pasta and pizza options.",
          menuHighlights: [
            "🍝 GF Pasta",
            "🍕 GF Pizza Base",
            "🍷 Italian Wines"
          ],
          proTip: "Book ahead and mention dietary requirements!",
          icon: "🍝",
          featured: false,
          cuisineTypes: ["Italian", "Wine Bar"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.5,
          reviewCount: 178
        }
      ]
    },
    {
      name: "Mount Maunganui & Tauranga",
      restaurants: [
        {
          name: "Sabal",
          address: "169 Maunganui Road, Mount Maunganui 3116, New Zealand",
          hours: "Mon-Sun: 7:00AM – 4:00PM",
          phone: "+64 7 575 2444",
          website: "www.sabalcafe.co.nz",
          directionsUrl: "https://maps.google.com/?q=Sabal+Mount+Maunganui",
          specialty: "Mediterranean Beachside Café",
          overview: "Popular beachside cafe with extensive gluten-free menu options and Mediterranean flair.",
          menuHighlights: [
            "🍳 GF Breakfast",
            "🧆 Falafel Bowls (GF)",
            "🥗 Fresh Salads (GF)",
            "☕ Coffee"
          ],
          proTip: "Perfect for a post-beach breakfast - try their GF pancakes!",
          icon: "🥗",
          featured: true,
          cuisineTypes: ["Mediterranean", "Modern", "Café"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.7,
          reviewCount: 189
        },
        {
          name: "SanSea People Ice Cream",
          address: "107A Maunganui Road, Mount Maunganui 3116, New Zealand",
          hours: "Mon-Sun: 10:00AM – 9:00PM",
          phone: "",
          website: "",
          directionsUrl: "https://maps.google.com/?q=SanSea+People+Ice+Cream+Mount+Maunganui",
          specialty: "Ice Cream",
          overview: "Beach-side ice cream spot with gluten-free options.",
          menuHighlights: [
            "🍦 GF Ice Cream",
            "🍨 Sorbet (GF)",
            "🥤 Smoothies"
          ],
          proTip: "Ask about GF cone options!",
          icon: "🍦",
          featured: false,
          cuisineTypes: ["Ice Cream", "Desserts"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.5,
          reviewCount: 112
        }
      ]
    },
    {
      name: "Hamilton",
      restaurants: [
        {
          name: "Wooden Spoon",
          address: "169 London Street, Hamilton Central, Hamilton 3204, New Zealand",
          hours: "Mon-Fri: 7:00AM – 4:00PM, Sat-Sun: 8:00AM – 4:00PM",
          phone: "+64 7 834 2280",
          website: "www.woodenspooncafe.co.nz",
          directionsUrl: "https://maps.google.com/?q=Wooden+Spoon+Hamilton",
          specialty: "Wholesome Café",
          overview: "Popular Hamilton cafe known for fresh, wholesome food with excellent gluten-free options.",
          menuHighlights: [
            "🧁 GF Muffins",
            "🥗 Salads (GF)",
            "🍳 Brunch Plates (GF)",
            "🥤 Fresh Juices"
          ],
          proTip: "Their gluten-free muffins sell out early - get there before 10am!",
          icon: "☕",
          featured: true,
          cuisineTypes: ["Café", "Brunch"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.6,
          reviewCount: 156
        }
      ]
    },
    {
      name: "Palmerston North",
      restaurants: [
        {
          name: "Munch",
          address: "62 Broadway Avenue, Palmerston North 4410, New Zealand",
          hours: "Mon-Fri: 7:00AM – 4:00PM, Sat-Sun: 8:00AM – 3:00PM",
          phone: "+64 6 354 5510",
          website: "www.munchcafe.co.nz",
          directionsUrl: "https://maps.google.com/?q=Munch+Palmerston+North",
          specialty: "Modern NZ Café",
          overview: "Friendly cafe with a great range of gluten-free options for breakfast and lunch.",
          menuHighlights: [
            "🍰 GF Baking",
            "🥗 Salads (GF)",
            "🥪 Sandwiches (GF bread)",
            "☕ Coffee"
          ],
          proTip: "Ask about their daily gluten-free specials!",
          icon: "☕",
          featured: true,
          cuisineTypes: ["Café", "Modern NZ"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.5,
          reviewCount: 134
        }
      ]
    },
    {
      name: "Napier & Hawke's Bay",
      restaurants: [
        {
          name: "Te Mata Figs Cafe / The Figgery Cafe",
          address: "205 Napier Road, Havelock North 4172, New Zealand",
          hours: "Wed-Sun: 9:00AM – 4:00PM",
          phone: "+64 6 877 0099",
          website: "www.thefiggerycafe.co.nz",
          directionsUrl: "https://maps.google.com/?q=The+Figgery+Cafe+Havelock+North",
          specialty: "Farm-to-Table Café",
          overview: "Beautiful cafe set among fig orchards with excellent gluten-free options and local produce.",
          menuHighlights: [
            "🫐 Fig-based Dishes",
            "🥗 Farm Produce (GF)",
            "🍰 GF Baking",
            "🫖 High Tea (GF options)"
          ],
          proTip: "Book ahead for their gluten-free high tea experience!",
          icon: "🍽️",
          featured: true,
          cuisineTypes: ["Café", "Farm-to-Table"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.7,
          reviewCount: 178
        },
        {
          name: "Hunger Monger Seafood",
          address: "129 Marine Parade, Napier South, Napier 4110, New Zealand",
          hours: "Mon-Sun: 11:00AM – 8:00PM",
          phone: "",
          website: "",
          directionsUrl: "https://maps.google.com/?q=Hunger+Monger+Seafood+Napier",
          specialty: "Seafood & Fish & Chips",
          overview: "Fresh seafood with gluten-free options available.",
          menuHighlights: [
            "🐟 GF Fish & Chips",
            "🦐 Fresh Seafood (GF)",
            "🍟 Sides"
          ],
          proTip: "Ask about their GF batter options!",
          icon: "🐟",
          featured: false,
          cuisineTypes: ["Seafood", "Fish & Chips"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.4,
          reviewCount: 167
        },
        {
          name: "Community Burgers",
          address: "112 Tennyson Street, Napier South, Napier 4110, New Zealand",
          hours: "Mon-Sun: 11:00AM – 9:00PM",
          phone: "",
          website: "",
          directionsUrl: "https://maps.google.com/?q=Community+Burgers+Napier",
          specialty: "Burgers",
          overview: "Popular burger spot with gluten-free bun options.",
          menuHighlights: [
            "🍔 GF Burger Buns",
            "🥗 Salads (GF)",
            "🍟 Sides"
          ],
          proTip: "They have great GF buns available!",
          icon: "🍔",
          featured: false,
          cuisineTypes: ["Burgers", "American"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.5,
          reviewCount: 145
        },
        {
          name: "That Sandwich Place",
          address: "112 Emerson Street, Napier South, Napier 4110, New Zealand",
          hours: "Mon-Fri: 7:00AM – 3:00PM",
          phone: "",
          website: "",
          directionsUrl: "https://maps.google.com/?q=That+Sandwich+Place+Napier",
          specialty: "Sandwiches & Café",
          overview: "Sandwich shop with gluten-free bread options.",
          menuHighlights: [
            "🥪 GF Sandwiches",
            "🥗 Salads (GF)",
            "☕ Coffee"
          ],
          proTip: "They have GF bread for all sandwiches!",
          icon: "🥪",
          featured: false,
          cuisineTypes: ["Sandwiches", "Café"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.3,
          reviewCount: 89
        }
      ]
    },
    {
      name: "Nelson",
      restaurants: [
        {
          name: "Dhara's Caffe",
          address: "19 Buxton Square, Nelson 7010, New Zealand",
          hours: "Mon-Sat: 8:00AM – 4:00PM",
          phone: "+64 3 548 8170",
          website: "www.dharascaffe.co.nz",
          directionsUrl: "https://maps.google.com/?q=Dharas+Caffe+Nelson",
          specialty: "Vegetarian Café",
          overview: "Charming cafe with vegetarian focus and extensive gluten-free menu options.",
          menuHighlights: [
            "🍰 GF Cakes",
            "🥗 Vegetarian Dishes (GF)",
            "🥗 Fresh Salads (GF)",
            "☕ Coffee"
          ],
          proTip: "Their gluten-free cakes are some of the best in the region!",
          icon: "☕",
          featured: true,
          cuisineTypes: ["Café", "Vegetarian"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.6,
          reviewCount: 134
        }
      ]
    },
    {
      name: "Kaikōura",
      restaurants: [
        {
          name: "Black Rabbit Pizza",
          address: "94 Beach Road, Kaikōura 7300, New Zealand",
          hours: "Wed-Sun: 4:00PM – 9:00PM",
          phone: "+64 3 319 6645",
          website: "www.blackrabbitpizza.co.nz",
          directionsUrl: "https://maps.google.com/?q=Black+Rabbit+Pizza+Kaikoura",
          specialty: "Wood-fired Pizza",
          overview: "Popular pizza spot offering gluten-free bases for all their creative pizzas.",
          menuHighlights: [
            "🍕 GF Pizza Bases",
            "🔥 Wood-fired Pizza",
            "🥗 Salads (GF)"
          ],
          proTip: "Pre-order your gluten-free base as they can run out on busy nights!",
          icon: "🍕",
          featured: true,
          cuisineTypes: ["Pizza", "Italian"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.5,
          reviewCount: 112
        }
      ]
    },
    {
      name: "Taupo",
      restaurants: [
        {
          name: "Plateau Bar + Eatery",
          address: "64 Tuwharetoa St, Taupo 3330, New Zealand",
          hours: "Mon-Sun: 11:00AM – Late",
          phone: "+64 7 377 2425",
          website: "www.plateautaupo.co.nz",
          directionsUrl: "https://maps.google.com/?q=Plateau+Bar+Eatery+Taupo",
          specialty: "Bar & Restaurant",
          overview: "Central Taupo restaurant with lake views and good gluten-free menu options.",
          menuHighlights: [
            "🍽️ GF Mains",
            "🥩 Steaks (GF)",
            "🐟 Seafood (GF)",
            "🍰 GF Desserts"
          ],
          proTip: "Ask about their gluten-free dessert options - they vary daily!",
          icon: "🍽️",
          featured: true,
          cuisineTypes: ["Modern NZ", "Bar"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.5,
          reviewCount: 156
        }
      ]
    },
    {
      name: "Coromandel & Whitianga",
      restaurants: [
        {
          name: "Earth Store Whitianga",
          address: "67 Albert Street, Whitianga 3510, New Zealand",
          hours: "Mon-Sat: 9:00AM – 5:00PM",
          phone: "+64 7 866 4457",
          website: "www.earthstore.co.nz",
          directionsUrl: "https://maps.google.com/?q=Earth+Store+Whitianga",
          specialty: "Health Food Store & Café",
          overview: "Health food store and cafe with extensive gluten-free products and fresh food options.",
          menuHighlights: [
            "🍰 GF Baking",
            "🥗 Organic Produce",
            "🛒 GF Products",
            "🥗 Fresh Salads"
          ],
          proTip: "They stock hard-to-find gluten-free products from around NZ!",
          icon: "🛒",
          featured: true,
          cuisineTypes: ["Health Food", "Organic"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.6,
          reviewCount: 98
        },
        {
          name: "Stoked Bar & Grill",
          address: "19 Esplanade, Whitianga 3510, New Zealand",
          hours: "Mon-Sun: 11:00AM – Late",
          phone: "",
          website: "",
          directionsUrl: "https://maps.google.com/?q=Stoked+Bar+Grill+Whitianga",
          specialty: "Bar & Grill",
          overview: "Waterfront dining with gluten-free options available.",
          menuHighlights: [
            "🍔 GF Options",
            "🥗 Salads (GF)",
            "🍷 Drinks"
          ],
          proTip: "Great views and dietary accommodations!",
          icon: "🍽️",
          featured: false,
          cuisineTypes: ["Bar & Grill", "Modern NZ"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.4,
          reviewCount: 189
        }
      ]
    },
    {
      name: "Whangārei",
      restaurants: [
        {
          name: "Dragonfruit Café",
          address: "Laurie Hall Lane, Whangārei 0110, New Zealand",
          hours: "Mon-Fri: 8:00AM – 3:00PM, Sat: 9:00AM – 2:00PM",
          phone: "+64 9 459 4957",
          website: "www.dragonfruitcafe.co.nz",
          directionsUrl: "https://maps.google.com/?q=Dragonfruit+Cafe+Whangarei",
          specialty: "Vegetarian Café",
          overview: "Colorful cafe with vegetarian focus and many naturally gluten-free options.",
          menuHighlights: [
            "🥣 Smoothie Bowls (GF)",
            "🥗 Salads (GF)",
            "🍰 GF Baking",
            "🥤 Fresh Juices"
          ],
          proTip: "Try their dragon fruit smoothie bowl - naturally gluten-free and delicious!",
          icon: "🥣",
          featured: true,
          cuisineTypes: ["Café", "Vegetarian"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.5,
          reviewCount: 112
        }
      ]
    },
    {
      name: "New Plymouth",
      restaurants: [
        {
          name: "Mike's Bistro & Taproom",
          address: "40 Devon Street East, New Plymouth Central, New Plymouth 4310, New Zealand",
          hours: "Wed-Sun: 4:00PM – Late",
          phone: "+64 6 759 0009",
          website: "www.mikesbistro.co.nz",
          directionsUrl: "https://maps.google.com/?q=Mikes+Bistro+Taproom+New+Plymouth",
          specialty: "Bistro & Craft Beer",
          overview: "Popular bistro with craft beer selection and good gluten-free food options.",
          menuHighlights: [
            "🍽️ GF Mains",
            "🍺 Craft Beer (GF options)",
            "🥗 Shared Plates (GF)",
            "🍰 Desserts (GF)"
          ],
          proTip: "They have gluten-free beer options too - ask the staff!",
          icon: "🍺",
          featured: true,
          cuisineTypes: ["Bistro", "Craft Beer"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.4,
          reviewCount: 145
        }
      ]
    },
    {
      name: "Waiheke Island",
      restaurants: [
        {
          name: "tibs┃food shack",
          address: "112 Ocean View Road, Oneroa, Waiheke Island 1081, New Zealand",
          hours: "Mon-Sun: 8:00AM – 4:00PM",
          phone: "+64 9 372 2273",
          website: "www.tibsfoodshack.co.nz",
          directionsUrl: "https://maps.google.com/?q=tibs+food+shack+Waiheke+Island",
          specialty: "Island Café",
          overview: "Relaxed island cafe with good gluten-free breakfast and lunch options.",
          menuHighlights: [
            "🍳 GF Breakfast",
            "🥗 Fresh Salads (GF)",
            "☕ Coffee",
            "🍰 Baking (GF options)"
          ],
          proTip: "Perfect for a relaxed breakfast after the ferry - try their GF eggs benny!",
          icon: "☕",
          featured: true,
          cuisineTypes: ["Café", "Island Cuisine"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.6,
          reviewCount: 98
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/countries" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Countries
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-4xl">🇳🇿</span>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Gluten-Free Dining in New Zealand</h1>
              <p className="text-gray-600">Discover celiac-safe restaurants across Aotearoa</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Introduction */}
        <Card className="mb-8 bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <Award className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">New Zealand's Gluten-Free Scene</h2>
                <p className="text-gray-700">
                  New Zealand offers an excellent gluten-free dining scene, from dedicated bakeries in Auckland 
                  to cafés along the stunning South Island. Kiwis are generally very aware of dietary requirements, 
                  and many restaurants offer gluten-free options. Look for dedicated gluten-free facilities 
                  for the safest dining experience.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cities and Restaurants */}
        {filteredCities.map((city) => (
          <div key={city.name} className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">{city.name}</h2>
              <Badge variant="secondary">{city.restaurants.length} restaurants</Badge>
            </div>

            <div className="grid gap-6">
              {city.restaurants.map((restaurant, index) => (
                <Card key={index} className={`overflow-hidden ${restaurant.featured ? 'ring-2 ring-blue-300' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Restaurant Info */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              {restaurant.featured && (
                                <Badge className="bg-blue-100 text-blue-800 border-blue-300">
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
                              <a href={`tel:${restaurant.phone}`} className="hover:text-blue-600">{restaurant.phone}</a>
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
                          <Button asChild className="bg-blue-600 hover:bg-blue-700">
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

export default NewZealand;
