export interface EgyptRestaurant {
  name: string;
  emoji: string;
  subtitle: string;
  rating: number;
  reviewCount: number;
  cuisineTypes: string[];
  celiacInfo: string;
  menuType: "Fully GF" | "Mixed Menu" | "GF Options";
  certification?: string;
  address: string;
  city: string;
  hours?: string;
  website?: string;
  phone?: string;
  mapUrl: string;
}

// Cairo restaurants
export const cairoRestaurants: EgyptRestaurant[] = [
  {
    name: "The Gluten Free House",
    emoji: "🏠",
    subtitle: "Dedicated Gluten-Free Restaurant & Bakery",
    rating: 4.8,
    reviewCount: 245,
    cuisineTypes: ["Gluten-Free", "Egyptian", "Bakery"],
    celiacInfo: "Fully dedicated gluten-free facility, zero cross-contamination",
    menuType: "Fully GF",
    certification: "100% Dedicated GF Kitchen",
    address: "39VF+P6H, Sheraton Al Matar, El Nozha, Cairo Governorate 4471320",
    city: "Cairo",
    mapUrl: "https://www.google.com/maps/search/The+Gluten+Free+House+Cairo+Egypt"
  },
  {
    name: "Chef Hamdy",
    emoji: "👨‍🍳",
    subtitle: "Traditional Egyptian Cuisine with GF Options",
    rating: 4.5,
    reviewCount: 189,
    cuisineTypes: ["Egyptian", "Grills", "Traditional"],
    celiacInfo: "Staff aware of gluten-free needs, grilled dishes naturally GF",
    menuType: "GF Options",
    address: "11 شارع احمد موسي من، Teraat Al Gabal, Al Hadaek, Zeitoun, Cairo Governorate",
    city: "Cairo",
    mapUrl: "https://www.google.com/maps/search/Chef+Hamdy+Cairo+Egypt"
  },
  {
    name: "Keto Rockets",
    emoji: "🚀",
    subtitle: "Health-Focused Keto & Gluten-Free Meals",
    rating: 4.7,
    reviewCount: 156,
    cuisineTypes: ["Keto", "Healthy", "Gluten-Free"],
    celiacInfo: "Menu designed for low-carb and gluten-free diets",
    menuType: "Fully GF",
    certification: "Keto & GF Certified Menu",
    address: "33 Ibrahim Nawar, Al Mintaqah as Sādisah, Nasr City, Cairo Governorate 4450460",
    city: "Cairo",
    mapUrl: "https://www.google.com/maps/search/Keto+Rockets+Nasr+City+Cairo+Egypt"
  },
  {
    name: "Kamala Restaurant & Bar",
    emoji: "🍸",
    subtitle: "Upscale Dining at Conrad Cairo",
    rating: 4.6,
    reviewCount: 203,
    cuisineTypes: ["International", "Asian", "Fine Dining"],
    celiacInfo: "Hotel restaurant with dedicated GF menu on request",
    menuType: "GF Options",
    address: "Conrad Cairo, El Nil, كورنيش النيل، سوق العصر، بولاق، محافظة القاهرة 11221",
    city: "Cairo",
    hours: "Mon–Sun: 12:00PM – 11:00PM",
    mapUrl: "https://www.google.com/maps/search/Kamala+Restaurant+Conrad+Cairo+Egypt"
  },
  {
    name: "La Zisa",
    emoji: "🇮🇹",
    subtitle: "Italian Dining with GF Pasta & Pizza",
    rating: 4.4,
    reviewCount: 134,
    cuisineTypes: ["Italian", "Mediterranean", "Pizza"],
    celiacInfo: "GF pasta and pizza base available on request",
    menuType: "Mixed Menu",
    address: "1189 Nile Corniche, Boulaq Num.5, Bulaq, Cairo Governorate 4311102",
    city: "Cairo",
    mapUrl: "https://www.google.com/maps/search/La+Zisa+Cairo+Egypt"
  },
  {
    name: "Cairo Marriott Hotel",
    emoji: "🏨",
    subtitle: "Luxury Hotel with Extensive GF Buffet",
    rating: 4.5,
    reviewCount: 287,
    cuisineTypes: ["International", "Buffet", "Fine Dining"],
    celiacInfo: "GF items labeled at buffet, chef can prepare custom GF meals",
    menuType: "GF Options",
    certification: "International hotel GF standards",
    address: "16 Saray El Gezira Street, Omar Al Khayam, Zamalek, Cairo Governorate 11211",
    city: "Cairo",
    hours: "Mon–Sun: 6:30AM – 11:00PM",
    mapUrl: "https://www.google.com/maps/search/Cairo+Marriott+Hotel+Zamalek+Egypt"
  },
  {
    name: "Saraya Gallery",
    emoji: "🎨",
    subtitle: "Elegant Café with GF Pastry Selection",
    rating: 4.3,
    reviewCount: 98,
    cuisineTypes: ["Café", "Pastries", "International"],
    celiacInfo: "Select GF pastries and desserts available",
    menuType: "Mixed Menu",
    address: "16 Saray, الجزيرة، عمر الخيام، الزمالك، محافظة القاهرة 11211",
    city: "Cairo",
    mapUrl: "https://www.google.com/maps/search/Saraya+Gallery+Zamalek+Cairo+Egypt"
  },
  {
    name: "Birdcage",
    emoji: "🐦",
    subtitle: "Stylish Bar & Restaurant at Semiramis InterContinental",
    rating: 4.6,
    reviewCount: 176,
    cuisineTypes: ["International", "Cocktails", "Fine Dining"],
    celiacInfo: "Dedicated GF menu available, staff trained in allergen protocols",
    menuType: "GF Options",
    address: "Semiramis InterContinental Hotel، Corniche El Nile، Qasr Ad Dobarah, Qasr El Nil, Cairo Governorate 11511",
    city: "Cairo",
    hours: "Mon–Sun: 5:00PM – 2:00AM",
    mapUrl: "https://www.google.com/maps/search/Birdcage+Semiramis+InterContinental+Cairo+Egypt"
  },
  {
    name: "LUUMA",
    emoji: "✨",
    subtitle: "Trendy Health-Conscious Restaurant",
    rating: 4.5,
    reviewCount: 142,
    cuisineTypes: ["Healthy", "Mediterranean", "Café"],
    celiacInfo: "Many naturally GF options, staff knowledgeable about celiac needs",
    menuType: "GF Options",
    address: "Abou El Feda, Zamalek, Cairo Governorate 4271104",
    city: "Cairo",
    mapUrl: "https://www.google.com/maps/search/LUUMA+Zamalek+Cairo+Egypt"
  },
  {
    name: "The Blue Restaurant & Grill",
    emoji: "🔵",
    subtitle: "Upscale Grills & International Cuisine",
    rating: 4.4,
    reviewCount: 118,
    cuisineTypes: ["Grills", "International", "Fine Dining"],
    celiacInfo: "Grilled dishes naturally GF, chef accommodates celiac requests",
    menuType: "GF Options",
    address: "12 Ahmed Ragheb, Qasr El Nil, Cairo Governorate 11519",
    city: "Cairo",
    mapUrl: "https://www.google.com/maps/search/The+Blue+Restaurant+Grill+Cairo+Egypt"
  },
  {
    name: "Ozuma عزومة",
    emoji: "🍖",
    subtitle: "Egyptian Home-Style Cooking",
    rating: 4.3,
    reviewCount: 167,
    cuisineTypes: ["Egyptian", "Traditional", "Grills"],
    celiacInfo: "Traditional grilled meats and rice dishes naturally GF",
    menuType: "GF Options",
    address: "14 El-Mosheer Ahmed Ismail St, Sheraton Al Matar, El Nozha, Cairo Governorate 4471310",
    city: "Cairo",
    mapUrl: "https://www.google.com/maps/search/Ozuma+Cairo+Egypt"
  },
  {
    name: "4seeds Healthy Food",
    emoji: "🌱",
    subtitle: "Plant-Based & Gluten-Free Focused",
    rating: 4.6,
    reviewCount: 93,
    cuisineTypes: ["Healthy", "Vegan", "Gluten-Free"],
    celiacInfo: "Health-focused menu with clearly labeled GF items",
    menuType: "GF Options",
    certification: "Health-conscious certified kitchen",
    address: "3F38+PWG, Al Sadat Axis, New Cairo 1, Cairo Governorate 4735420",
    city: "Cairo",
    mapUrl: "https://www.google.com/maps/search/4seeds+healthy+food+New+Cairo+Egypt"
  },
  {
    name: "Dolato Gelateria - Almaza",
    emoji: "🍦",
    subtitle: "Artisan Gelato with GF Options",
    rating: 4.4,
    reviewCount: 112,
    cuisineTypes: ["Gelato", "Desserts", "Italian"],
    celiacInfo: "Many gelato flavors naturally gluten-free",
    menuType: "GF Options",
    address: "Almaza Avenue Mall, أبو بكر الصديق، الماظة، قسم النزهة، محافظة القاهرة 11843",
    city: "Cairo",
    mapUrl: "https://www.google.com/maps/search/Dolato+Gelateria+Almaza+Cairo+Egypt"
  },
];

// Giza restaurants
export const gizaRestaurants: EgyptRestaurant[] = [
  {
    name: "Dolato Gelateria - Grand Egyptian Museum",
    emoji: "🍦",
    subtitle: "Gelato near the Pyramids",
    rating: 4.5,
    reviewCount: 198,
    cuisineTypes: ["Gelato", "Desserts", "Italian"],
    celiacInfo: "Many gelato flavors naturally gluten-free, staff can advise",
    menuType: "GF Options",
    address: "X4W9+QVW حديقة المتحف المصري الكبير, المتحف الجديد, طريق القاهرة - الإسكندرية الصحراوي، كفر نصار، الهرم، محافظة الجيزة 12511",
    city: "Giza",
    mapUrl: "https://www.google.com/maps/search/Dolato+Gelateria+Grand+Egyptian+Museum+Giza+Egypt"
  },
  {
    name: "Alfredo Restaurant",
    emoji: "🍝",
    subtitle: "Italian Dining with GF Pasta Options",
    rating: 4.3,
    reviewCount: 145,
    cuisineTypes: ["Italian", "Mediterranean", "Pasta"],
    celiacInfo: "GF pasta available on request",
    menuType: "Mixed Menu",
    address: "X4PJ+JJP, Kafr Nassar, Al Haram, Giza Governorate 3514702",
    city: "Giza",
    mapUrl: "https://www.google.com/maps/search/Alfredo+Restaurant+Giza+Egypt"
  },
  {
    name: "Gourmet",
    emoji: "🥘",
    subtitle: "Modern Egyptian & International Cuisine",
    rating: 4.4,
    reviewCount: 167,
    cuisineTypes: ["International", "Egyptian", "Modern"],
    celiacInfo: "Chef accommodates GF requests, rice and grilled options available",
    menuType: "GF Options",
    address: "Arkan Plaza Extension, First Al Sheikh Zayed, Giza Governorate 3247016",
    city: "Giza",
    mapUrl: "https://www.google.com/maps/search/Gourmet+Arkan+Plaza+Sheikh+Zayed+Egypt"
  },
  {
    name: "Gad",
    emoji: "🧆",
    subtitle: "Popular Egyptian Fast Food Chain",
    rating: 4.1,
    reviewCount: 342,
    cuisineTypes: ["Egyptian", "Fast Food", "Traditional"],
    celiacInfo: "Grilled meats and rice are naturally GF, beware of bread-based items",
    menuType: "GF Options",
    address: "32 Al Haram, Kafr Nassar, Al Haram, Giza Governorate 3524002",
    city: "Giza",
    mapUrl: "https://www.google.com/maps/search/Gad+Restaurant+Haram+Giza+Egypt"
  },
  {
    name: "The Moghul Room",
    emoji: "🕌",
    subtitle: "Indian Fine Dining near the Pyramids",
    rating: 4.5,
    reviewCount: 123,
    cuisineTypes: ["Indian", "Fine Dining", "Asian"],
    celiacInfo: "Many rice-based and tandoori dishes naturally GF",
    menuType: "GF Options",
    address: "6 Pyramids Road, الهرم، كفر نصار، الهرم، الجيزة 12556",
    city: "Giza",
    mapUrl: "https://www.google.com/maps/search/The+Moghul+Room+Pyramids+Road+Giza+Egypt"
  },
];

// Hurghada & Red Sea restaurants
export const hurghadaRestaurants: EgyptRestaurant[] = [
  {
    name: "Nicole's Greenhouse",
    emoji: "🌿",
    subtitle: "Health-Conscious Café with GF Menu",
    rating: 4.7,
    reviewCount: 134,
    cuisineTypes: ["Healthy", "Café", "International"],
    celiacInfo: "Extensive GF menu, owner understands celiac needs",
    menuType: "GF Options",
    certification: "Staff trained in celiac protocols",
    address: "CM2F+35, Hurghada 2, Red Sea Governorate 1982710",
    city: "Hurghada",
    mapUrl: "https://www.google.com/maps/search/Nicoles+Greenhouse+Hurghada+Egypt"
  },
  {
    name: "Meraki Resort Hurghada",
    emoji: "🏖️",
    subtitle: "Beach Resort with GF Buffet Station",
    rating: 4.4,
    reviewCount: 213,
    cuisineTypes: ["International", "Buffet", "Mediterranean"],
    celiacInfo: "Dedicated GF section at buffet, chef available for custom requests",
    menuType: "GF Options",
    address: "El Cornish Road EL Dahar – Down Town، Hurghada 2, Red Sea Governorate 1973711",
    city: "Hurghada",
    mapUrl: "https://www.google.com/maps/search/Meraki+Resort+Hurghada+Egypt"
  },
  {
    name: "Sheraton Miramar Resort El Gouna",
    emoji: "⭐",
    subtitle: "Luxury Resort with Celiac-Safe Dining",
    rating: 4.6,
    reviewCount: 276,
    cuisineTypes: ["International", "Mediterranean", "Seafood"],
    celiacInfo: "Multiple restaurants with GF menus, staff well-trained",
    menuType: "GF Options",
    certification: "International hotel GF standards",
    address: "Red Sea, Hurghada 2, Red Sea Governorate 1982710",
    city: "Hurghada",
    mapUrl: "https://www.google.com/maps/search/Sheraton+Miramar+Resort+El+Gouna+Egypt"
  },
  {
    name: "Premier Le Reve Hotel & Spa",
    emoji: "💎",
    subtitle: "Adults-Only Boutique with GF Kitchen",
    rating: 4.7,
    reviewCount: 189,
    cuisineTypes: ["International", "Mediterranean", "Fine Dining"],
    celiacInfo: "Boutique hotel excels at GF dining, personalized meal preparation",
    menuType: "GF Options",
    certification: "Personalized GF meal service",
    address: "Piece 33، Hurghada 1, Red Sea Governorate 84521",
    city: "Hurghada",
    mapUrl: "https://www.google.com/maps/search/Premier+Le+Reve+Hotel+Spa+Hurghada+Egypt"
  },
  {
    name: "German Bakery El Gouna",
    emoji: "🥨",
    subtitle: "European Bakery with GF Bread Selection",
    rating: 4.5,
    reviewCount: 156,
    cuisineTypes: ["Bakery", "German", "European"],
    celiacInfo: "Offers GF bread and pastries, separate preparation area",
    menuType: "Mixed Menu",
    address: "Tamr Henna Downtown right next to Bestway, Hurghada 2, Red Sea Governorate 84513",
    city: "Hurghada",
    mapUrl: "https://www.google.com/maps/search/German+Bakery+El+Gouna+Hurghada+Egypt"
  },
  {
    name: "Swiss Inn Resort Hurghada",
    emoji: "🏨",
    subtitle: "Resort Dining with GF Buffet Options",
    rating: 4.3,
    reviewCount: 198,
    cuisineTypes: ["International", "Buffet", "Egyptian"],
    celiacInfo: "GF items labeled at buffet stations",
    menuType: "GF Options",
    address: "Safaga Rd, Hurghada, Red Sea Governorate",
    city: "Hurghada",
    mapUrl: "https://www.google.com/maps/search/Swiss+Inn+Resort+Hurghada+Egypt"
  },
  {
    name: "Cook's Club El Gouna",
    emoji: "🎶",
    subtitle: "Trendy Lifestyle Hotel with GF Menu",
    rating: 4.4,
    reviewCount: 145,
    cuisineTypes: ["International", "Mediterranean", "Modern"],
    celiacInfo: "Modern menu with GF options clearly marked",
    menuType: "GF Options",
    address: "Downtown, الغردقة، محافظة البحر الأحمر 1982710",
    city: "Hurghada",
    mapUrl: "https://www.google.com/maps/search/Cooks+Club+El+Gouna+Hurghada+Egypt"
  },
  {
    name: "Three Corners Rihana Resort",
    emoji: "🌴",
    subtitle: "Family Resort with GF Dining",
    rating: 4.2,
    reviewCount: 167,
    cuisineTypes: ["International", "Buffet", "Egyptian"],
    celiacInfo: "GF options available at buffet, inform staff of dietary needs",
    menuType: "GF Options",
    address: "Hurghada 2, Red Sea Governorate 84517",
    city: "Hurghada",
    mapUrl: "https://www.google.com/maps/search/Three+Corners+Rihana+Resort+Hurghada+Egypt"
  },
  {
    name: "Jaz Aquamarine",
    emoji: "🌊",
    subtitle: "All-Inclusive with Dedicated GF Station",
    rating: 4.5,
    reviewCount: 234,
    cuisineTypes: ["International", "Buffet", "Mediterranean"],
    celiacInfo: "Dedicated GF buffet corner, kitchen staff celiac-aware",
    menuType: "GF Options",
    certification: "Dedicated GF buffet station",
    address: "Magawish District, South Sahl Hashish Road, Red Sea",
    city: "Hurghada",
    mapUrl: "https://www.google.com/maps/search/Jaz+Aquamarine+Hurghada+Egypt"
  },
  {
    name: "Family Fish Restaurant",
    emoji: "🐟",
    subtitle: "Fresh Seafood, Naturally Gluten-Free",
    rating: 4.3,
    reviewCount: 189,
    cuisineTypes: ["Seafood", "Egyptian", "Grills"],
    celiacInfo: "Grilled fresh fish and seafood naturally GF",
    menuType: "GF Options",
    address: "El-Bahr, Hurghada 2, Red Sea Governorate 1972603",
    city: "Hurghada",
    mapUrl: "https://www.google.com/maps/search/Family+Fish+Restaurant+Hurghada+Egypt"
  },
  {
    name: "Amarina Abu Soma Resort & Aquapark",
    emoji: "🎢",
    subtitle: "Resort with GF-Friendly Buffet",
    rating: 4.3,
    reviewCount: 156,
    cuisineTypes: ["International", "Buffet", "Egyptian"],
    celiacInfo: "Buffet includes labeled GF options",
    menuType: "GF Options",
    address: "Km 8 Safaga Soma Bay Road, سفاجا، محافظة البحر الأحمر 84711",
    city: "Hurghada",
    mapUrl: "https://www.google.com/maps/search/Amarina+Abu+Soma+Resort+Safaga+Egypt"
  },
  {
    name: "Sharm El Naga Resort & Diving Center",
    emoji: "🤿",
    subtitle: "Dive Resort with Simple GF Meals",
    rating: 4.2,
    reviewCount: 98,
    cuisineTypes: ["International", "Seafood", "Egyptian"],
    celiacInfo: "Fresh grilled seafood and salads naturally GF",
    menuType: "GF Options",
    address: "WX26+8PW، خليج سوما، جنوب الغردقة، محافظة البحر الأحمر 1945911",
    city: "Hurghada",
    mapUrl: "https://www.google.com/maps/search/Sharm+El+Naga+Resort+Hurghada+Egypt"
  },
];

// Luxor restaurants
export const luxorRestaurants: EgyptRestaurant[] = [
  {
    name: "Steigenberger Resort Achti",
    emoji: "🏨",
    subtitle: "Luxury Nile-Side Resort with GF Dining",
    rating: 4.6,
    reviewCount: 234,
    cuisineTypes: ["International", "Egyptian", "Fine Dining"],
    celiacInfo: "Hotel kitchen well-equipped for GF meals, chef accommodates celiac guests",
    menuType: "GF Options",
    certification: "International hotel GF standards",
    address: "Khaled Ibn El Waleed, Gazirat Al Awameyah, Luxor, Luxor Governorate 85951",
    city: "Luxor",
    mapUrl: "https://www.google.com/maps/search/Steigenberger+Resort+Achti+Luxor+Egypt"
  },
  {
    name: "Snobs Restaurant",
    emoji: "🍷",
    subtitle: "Popular Tourist-Friendly Dining",
    rating: 4.4,
    reviewCount: 187,
    cuisineTypes: ["Egyptian", "International", "Mediterranean"],
    celiacInfo: "Staff understand GF needs, grilled meats and salads available",
    menuType: "GF Options",
    address: "Al Rawda Al Sharifa, Gazirat Al Awameyah, Luxor, Luxor Governorate 1362103",
    city: "Luxor",
    mapUrl: "https://www.google.com/maps/search/Snobs+Restaurant+Luxor+Egypt"
  },
  {
    name: "Café & Restaurant Maratonga",
    emoji: "☕",
    subtitle: "Charming Café on the West Bank",
    rating: 4.3,
    reviewCount: 112,
    cuisineTypes: ["Café", "Egyptian", "International"],
    celiacInfo: "Simple grilled dishes and salads naturally GF",
    menuType: "GF Options",
    address: "Unnamed Road, البعيرات، القرنة، محافظة الأقصر 1340550",
    city: "Luxor",
    mapUrl: "https://www.google.com/maps/search/Cafe+Restaurant+Maratonga+Luxor+Egypt"
  },
  {
    name: "Restaurant Paris",
    emoji: "🗼",
    subtitle: "West Bank Dining with Nile Views",
    rating: 4.2,
    reviewCount: 89,
    cuisineTypes: ["Egyptian", "French", "International"],
    celiacInfo: "Grilled dishes and rice naturally GF, communicate needs clearly",
    menuType: "GF Options",
    address: "طريق تمثالين، ممنون، Al Bairat, Al Qarna, Luxor Governorate 1341476",
    city: "Luxor",
    mapUrl: "https://www.google.com/maps/search/Restaurant+Paris+Luxor+Egypt"
  },
  {
    name: "Sunflower Restaurant",
    emoji: "🌻",
    subtitle: "Casual Egyptian Dining on the West Bank",
    rating: 4.1,
    reviewCount: 76,
    cuisineTypes: ["Egyptian", "Traditional", "Grills"],
    celiacInfo: "Traditional grilled meats and rice dishes naturally GF",
    menuType: "GF Options",
    address: "Al Bairat, Al Qarna, Luxor Governorate 85958",
    city: "Luxor",
    mapUrl: "https://www.google.com/maps/search/Sunflower+Restaurant+Luxor+Egypt"
  },
];

// Aswan restaurants
export const aswanRestaurants: EgyptRestaurant[] = [
  {
    name: "Sofitel Legend Old Cataract Aswan",
    emoji: "👑",
    subtitle: "Legendary Hotel with World-Class GF Dining",
    rating: 4.9,
    reviewCount: 312,
    cuisineTypes: ["Fine Dining", "International", "Egyptian"],
    celiacInfo: "Exceptional GF dining, dedicated kitchen preparation for celiac guests",
    menuType: "GF Options",
    certification: "Luxury hotel celiac-safe dining protocols",
    address: "Abtal El Tahrir Street, Sheyakhah Oula, Aswan 1, Aswan Governorate 81511",
    city: "Aswan",
    hours: "Mon–Sun: 7:00AM – 11:00PM",
    mapUrl: "https://www.google.com/maps/search/Sofitel+Legend+Old+Cataract+Aswan+Egypt"
  },
  {
    name: "Mövenpick Aswan",
    emoji: "🏝️",
    subtitle: "Island Resort with GF Menu Options",
    rating: 4.6,
    reviewCount: 245,
    cuisineTypes: ["International", "Egyptian", "Mediterranean"],
    celiacInfo: "GF items available at all restaurants, staff trained in allergen management",
    menuType: "GF Options",
    certification: "International hotel GF standards",
    address: "Elephantine Island, Sheyakhah Oula, Aswan 1, Aswan Governorate 1240881",
    city: "Aswan",
    hours: "Mon–Sun: 6:30AM – 10:30PM",
    mapUrl: "https://www.google.com/maps/search/Movenpick+Aswan+Elephantine+Island+Egypt"
  },
  {
    name: "King Jamaica",
    emoji: "🇯🇲",
    subtitle: "Unique Island Eatery with Simple GF Options",
    rating: 4.2,
    reviewCount: 87,
    cuisineTypes: ["Egyptian", "Caribbean", "Casual"],
    celiacInfo: "Simple grilled dishes and fresh salads available",
    menuType: "GF Options",
    address: "Elephantine Island, Sheyakhah Oula, Aswan 1, Aswan Governorate 81111",
    city: "Aswan",
    mapUrl: "https://www.google.com/maps/search/King+Jamaica+Elephantine+Island+Aswan+Egypt"
  },
];

// Sharm El Sheikh restaurants
export const sharmElSheikhRestaurants: EgyptRestaurant[] = [
  {
    name: "Hard Rock Cafe",
    emoji: "🎸",
    subtitle: "International Chain with GF Menu",
    rating: 4.5,
    reviewCount: 298,
    cuisineTypes: ["American", "International", "Burgers"],
    celiacInfo: "Global GF menu available, staff trained in allergen protocols",
    menuType: "GF Options",
    certification: "Hard Rock GF menu program",
    address: "Na'Ama Bay، El Soultan Qabous Street، Sharm El Sheikh 1, South Sinai Governorate 46619",
    city: "Sharm El Sheikh",
    mapUrl: "https://www.google.com/maps/search/Hard+Rock+Cafe+Sharm+El+Sheikh+Egypt"
  },
  {
    name: "Akuna Matata",
    emoji: "🦁",
    subtitle: "Fun Beachside Dining with GF Options",
    rating: 4.3,
    reviewCount: 156,
    cuisineTypes: ["International", "Seafood", "Egyptian"],
    celiacInfo: "Grilled seafood and meats naturally GF",
    menuType: "GF Options",
    address: "خليج الفارس الابيض، Sharm El Sheikh 1, South Sinai Governorate 8765012",
    city: "Sharm El Sheikh",
    mapUrl: "https://www.google.com/maps/search/Akuna+Matata+Sharm+El+Sheikh+Egypt"
  },
  {
    name: "Eldorado Lodge & Restaurant",
    emoji: "🏕️",
    subtitle: "Desert Lodge with Naturally GF Cuisine",
    rating: 4.4,
    reviewCount: 112,
    cuisineTypes: ["Egyptian", "International", "Desert Cuisine"],
    celiacInfo: "Simple, fresh meals with naturally GF ingredients",
    menuType: "GF Options",
    address: "GG39+JW7, قسم, South Sinai Governorate",
    city: "Sharm El Sheikh",
    mapUrl: "https://www.google.com/maps/search/Eldorado+Lodge+Restaurant+South+Sinai+Egypt"
  },
  {
    name: "Xperience Kiroseiz Parkland",
    emoji: "🌴",
    subtitle: "Resort with GF Buffet Options",
    rating: 4.3,
    reviewCount: 178,
    cuisineTypes: ["International", "Buffet", "Egyptian"],
    celiacInfo: "GF items available at buffet, inform staff of dietary needs",
    menuType: "GF Options",
    address: "Sharm El Sheikh 1, South Sinai Governorate 8761444",
    city: "Sharm El Sheikh",
    mapUrl: "https://www.google.com/maps/search/Xperience+Kiroseiz+Parkland+Sharm+El+Sheikh+Egypt"
  },
  {
    name: "Coral Sea Aqua Club",
    emoji: "🐠",
    subtitle: "Beach Resort with GF Dining",
    rating: 4.2,
    reviewCount: 145,
    cuisineTypes: ["International", "Buffet", "Mediterranean"],
    celiacInfo: "Buffet includes GF-labeled items, chef can prepare special meals",
    menuType: "GF Options",
    address: "El-Salam, Qesm Sharm Ash Sheikh, South Sinai Governorate 8753224",
    city: "Sharm El Sheikh",
    mapUrl: "https://www.google.com/maps/search/Coral+Sea+Aqua+Club+Sharm+El+Sheikh+Egypt"
  },
  {
    name: "Red Cat",
    emoji: "🐱",
    subtitle: "Eclectic Desert Café in Saint Catherine",
    rating: 4.3,
    reviewCount: 67,
    cuisineTypes: ["Café", "Egyptian", "International"],
    celiacInfo: "Simple naturally GF dishes available",
    menuType: "GF Options",
    address: "46617, قسم سانت كاترين، محافظة جنوب سيناء 46617",
    city: "Sharm El Sheikh",
    mapUrl: "https://www.google.com/maps/search/Red+Cat+Saint+Catherine+Sinai+Egypt"
  },
  {
    name: "Chef Food Supply",
    emoji: "📦",
    subtitle: "Specialty Food Shop in Saint Catherine",
    rating: 4.0,
    reviewCount: 45,
    cuisineTypes: ["Grocery", "Specialty Foods"],
    celiacInfo: "Stocks some GF products and ingredients",
    menuType: "GF Options",
    address: "سانت كاترين، جنوب سيناء",
    city: "Sharm El Sheikh",
    mapUrl: "https://www.google.com/maps/search/Chef+Food+Supply+Saint+Catherine+Sinai+Egypt"
  },
];

// Alexandria restaurants
export const alexandriaRestaurants: EgyptRestaurant[] = [
  {
    name: "Mohamed Ahmed Restaurant",
    emoji: "🧆",
    subtitle: "Famous Egyptian Ful & Falafel Since 1950",
    rating: 4.6,
    reviewCount: 423,
    cuisineTypes: ["Egyptian", "Traditional", "Street Food"],
    celiacInfo: "Ful medames naturally GF, beware of falafel (contains flour in some recipes)",
    menuType: "GF Options",
    address: "6W22+369، شارع شكور، Al Mesallah Sharq, Al Attarin, Alexandria Governorate 5372032",
    city: "Alexandria",
    mapUrl: "https://www.google.com/maps/search/Mohamed+Ahmed+Restaurant+Alexandria+Egypt"
  },
  {
    name: "Délices Patisserie",
    emoji: "🎂",
    subtitle: "Historic Patisserie with Select GF Items",
    rating: 4.4,
    reviewCount: 198,
    cuisineTypes: ["Patisserie", "French", "Café"],
    celiacInfo: "Limited GF options, ask staff for naturally GF items",
    menuType: "Mixed Menu",
    address: "Raml Station, 46 Saad Zaghloul, Al Mesallah Sharq, Al Attarin, Alexandria Governorate",
    city: "Alexandria",
    mapUrl: "https://www.google.com/maps/search/Delices+Patisserie+Alexandria+Egypt"
  },
  {
    name: "Royal Jewel Al-Raml Hotel",
    emoji: "💎",
    subtitle: "Hotel Dining with GF Accommodation",
    rating: 4.2,
    reviewCount: 112,
    cuisineTypes: ["International", "Egyptian", "Hotel"],
    celiacInfo: "Hotel kitchen can prepare GF meals on request",
    menuType: "GF Options",
    address: "Alexandar Akbar St. - Al Kaed, Station, Ibrahim Mosque, المسلة شرق، قسم ثان الرمل، محافظة الإسكندرية 21563",
    city: "Alexandria",
    mapUrl: "https://www.google.com/maps/search/Royal+Jewel+Al+Raml+Hotel+Alexandria+Egypt"
  },
];

// Marsa Alam restaurants
export const marsaAlamRestaurants: EgyptRestaurant[] = [
  {
    name: "Pickalbatros Vita Resort - Portofino Marsa Alam",
    emoji: "🌅",
    subtitle: "Beach Resort with GF Buffet",
    rating: 4.3,
    reviewCount: 167,
    cuisineTypes: ["International", "Buffet", "Italian"],
    celiacInfo: "GF items available at buffet, staff can assist with dietary needs",
    menuType: "GF Options",
    address: "7Q4Q+8GF, Marsa Alam, Red Sea Governorate 1926101",
    city: "Marsa Alam",
    mapUrl: "https://www.google.com/maps/search/Pickalbatros+Vita+Resort+Marsa+Alam+Egypt"
  },
  {
    name: "MG Alexander the Great Marsa Alam",
    emoji: "🏛️",
    subtitle: "Resort with International GF Dining",
    rating: 4.2,
    reviewCount: 134,
    cuisineTypes: ["International", "Mediterranean", "Buffet"],
    celiacInfo: "Buffet includes GF options, inform reception at check-in",
    menuType: "GF Options",
    address: "20 Km northern, Marsa Alam, Red Sea Governorate 84721",
    city: "Marsa Alam",
    mapUrl: "https://www.google.com/maps/search/MG+Alexander+the+Great+Marsa+Alam+Egypt"
  },
];

// All restaurants combined
export const allEgyptRestaurants: EgyptRestaurant[] = [
  ...cairoRestaurants,
  ...gizaRestaurants,
  ...hurghadaRestaurants,
  ...luxorRestaurants,
  ...aswanRestaurants,
  ...sharmElSheikhRestaurants,
  ...alexandriaRestaurants,
  ...marsaAlamRestaurants,
];

// Top 25 restaurants sorted by rating then review count
export const egyptTop25Restaurants: EgyptRestaurant[] = allEgyptRestaurants
  .sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount)
  .slice(0, 25);
