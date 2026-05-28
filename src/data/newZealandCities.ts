export interface NZRestaurant {
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
  celiacSafe: 'protocols-in-place' | 'dedicated-facility';
  menuType: 'mixed-menu' | 'fully-gluten-free';
  rating: number;
  reviewCount: number;
}

export interface NZCity {
  name: string;
  slug: string;
  restaurants: NZRestaurant[];
}

export const newZealandCities: NZCity[] = [
    {
      name: "Auckland", slug: "auckland",
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
          specialty: "Asian Street Food",
          overview: "Popular Asian fusion street food with rice-based dishes and gluten-free options available. Quick, flavourful bowls perfect for eating on the go.",
          menuHighlights: [
            "🍜 Rice Noodle Bowls (GF)",
            "🍚 Rice Boxes (GF)",
            "🥗 Fresh Salads (GF)"
          ],
          proTip: "Ask about gluten-free soy sauce alternatives!",
          icon: "🍜",
          featured: false,
          cuisineTypes: ["Asian", "Vietnamese", "Street Food"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.6,
          reviewCount: 143
        },
        {
          name: "Amaranto Pasta & Cucina",
          address: "12/14 Jellicoe Street, Wynyard Quarter, Auckland 1010, New Zealand",
          hours: "Mon-Sun: 11:30AM – 10:00PM",
          phone: "+64 9 379 2888",
          website: "www.amaranto.co.nz",
          directionsUrl: "https://maps.google.com/?q=Amaranto+Pasta+Cucina+Auckland",
          specialty: "Italian Street Food & Pasta",
          overview: "Vibrant Italian street food spot in Wynyard Quarter serving fresh handmade pasta, wood-fired pizzas and quick cicchetti-style bites with gluten-free options.",
          menuHighlights: [
            "🍝 GF Fresh Pasta",
            "🍕 GF Pizza Bases",
            "🥖 Cicchetti (GF options)",
            "🍷 Italian Wine"
          ],
          proTip: "Their GF pasta is cooked in separate water — just mention celiac when ordering!",
          icon: "🍝",
          featured: true,
          cuisineTypes: ["Italian", "Pizza", "Street Food"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.7,
          reviewCount: 256
        },
        {
          name: "Sen Vietnamese Kitchen & Bar",
          address: "6/12 Jellicoe Street, Wynyard Quarter, Auckland 1010, New Zealand",
          hours: "Mon-Sun: 11:00AM – Late",
          phone: "+64 9 379 2888",
          website: "www.senauckland.co.nz",
          directionsUrl: "https://maps.google.com/?q=Sen+Vietnamese+Kitchen+Bar+Auckland",
          specialty: "Vietnamese Street Food",
          overview: "Buzzy Vietnamese street food eatery and bar in Wynyard Quarter known for bold pho, banh mi with GF bread options, and fragrant rice-paper rolls.",
          menuHighlights: [
            "🍜 Beef Pho (GF)",
            "🥖 GF Banh Mi",
            "🌯 Rice Paper Rolls (GF)",
            "🍹 Vietnamese Cocktails"
          ],
          proTip: "They keep GF banh mi bread in stock — just ask at the counter!",
          icon: "🍜",
          featured: true,
          cuisineTypes: ["Vietnamese", "Asian", "Street Food"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.8,
          reviewCount: 312
        },
        {
          name: "Bluebells Cakery - Kingsland",
          address: "470 New North Road, Kingsland, Auckland 1021, New Zealand",
          hours: "Tue-Sat: 8:00AM – 4:00PM",
          phone: "+64 9 815 1005",
          website: "www.bluebellscakery.com",
          directionsUrl: "https://maps.google.com/?q=Bluebells+Cakery+Kingsland+Auckland",
          specialty: "Cakes & Patisserie",
          overview: "Beloved Kingsland cakery offering a wide selection of celebration cakes, cupcakes and sweet treats with reliable gluten-free options baked with care.",
          menuHighlights: ["🎂 GF Celebration Cakes", "🧁 GF Cupcakes", "☕ Cabinet Treats"],
          proTip: "Order GF cakes ahead — they sell out fast on weekends!",
          icon: "🎂",
          featured: true,
          cuisineTypes: ["Bakery", "Cakes", "Patisserie"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.7,
          reviewCount: 198
        },
        {
          name: "Milano's Gluten Free Bakery",
          address: "10 Saleyards Road, Otahuhu, Auckland 1062, New Zealand",
          hours: "Mon-Fri: 8:00AM – 4:00PM",
          phone: "+64 9 276 9442",
          website: "www.milanosglutenfree.co.nz",
          directionsUrl: "https://maps.google.com/?q=Milanos+Gluten+Free+Bakery+Auckland",
          specialty: "100% Gluten-Free Bakery",
          overview: "Dedicated gluten-free bakery producing breads, pies, pastries and sweets — a trusted go-to for Auckland's celiac community.",
          menuHighlights: ["🍞 GF Breads", "🥧 GF Pies", "🥐 GF Pastries", "🍰 GF Cakes"],
          proTip: "Stock up on their frozen breads and pies for the week!",
          icon: "🥖",
          featured: true,
          cuisineTypes: ["Bakery", "Gluten-Free"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          rating: 4.8,
          reviewCount: 224
        },
        {
          name: "Down With Dough",
          address: "Auckland, New Zealand",
          hours: "Wed-Sun: 9:00AM – 3:00PM",
          phone: "",
          website: "www.downwithdough.co.nz",
          directionsUrl: "https://maps.google.com/?q=Down+With+Dough+Auckland",
          specialty: "Dedicated Gluten-Free Bakery",
          overview: "Auckland-based dedicated gluten-free bakery known for indulgent doughnuts, brownies and sweet treats — all 100% safe for celiacs.",
          menuHighlights: ["🍩 GF Doughnuts", "🍫 GF Brownies", "🍪 GF Cookies"],
          proTip: "Follow them on socials for weekly drop schedules and pop-up locations!",
          icon: "🍩",
          featured: true,
          cuisineTypes: ["Bakery", "Gluten-Free", "Desserts"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          rating: 4.9,
          reviewCount: 156
        },
        {
          name: "Cravings Bakery",
          address: "Auckland, New Zealand",
          hours: "Tue-Sat: 9:00AM – 4:00PM",
          phone: "",
          website: "www.cravingsbakery.co.nz",
          directionsUrl: "https://maps.google.com/?q=Cravings+Bakery+Auckland",
          specialty: "Gluten & Dairy Free Bakery",
          overview: "Dedicated gluten-free and dairy-free bakery serving Auckland with allergy-friendly cakes, slices and savoury bakes that don't compromise on flavour.",
          menuHighlights: ["🍰 GF/DF Cakes", "🥧 GF Savoury Pies", "🍪 GF Slices"],
          proTip: "Great for catering — they handle multi-allergen orders beautifully.",
          icon: "🍰",
          featured: false,
          cuisineTypes: ["Bakery", "Gluten-Free", "Dairy-Free"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          rating: 4.7,
          reviewCount: 132
        },
        {
          name: "Skinny Biscotti",
          address: "Auckland, New Zealand",
          hours: "Online & Stockists",
          phone: "",
          website: "www.skinnybiscotti.co.nz",
          directionsUrl: "https://maps.google.com/?q=Skinny+Biscotti+Auckland",
          specialty: "Artisan Gluten-Free Biscotti",
          overview: "Artisan gluten-free biscotti made in Auckland — handcrafted Italian-style biscuits in classic and inventive flavours, perfect with coffee.",
          menuHighlights: ["🍪 GF Almond Biscotti", "☕ Coffee Pairings", "🎁 Gift Boxes"],
          proTip: "Find them in select Auckland cafés and specialty grocers.",
          icon: "🍪",
          featured: false,
          cuisineTypes: ["Bakery", "Gluten-Free", "Italian"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          rating: 4.8,
          reviewCount: 98
        },
        {
          name: "Mango Ginger",
          address: "Auckland, New Zealand",
          hours: "Tue-Sun: 9:00AM – 4:00PM",
          phone: "",
          website: "www.mangoginger.co.nz",
          directionsUrl: "https://maps.google.com/?q=Mango+Ginger+Bakery+Auckland",
          specialty: "Gluten-Free Bakery & Café",
          overview: "Charming Auckland bakery and café with a strong focus on gluten-free baking — cakes, slices and savoury treats made with seasonal ingredients.",
          menuHighlights: ["🍰 GF Seasonal Cakes", "🥪 GF Sandwiches", "☕ Café Menu"],
          proTip: "Their afternoon cabinet selection is the sweet spot — arrive before 2pm.",
          icon: "🥮",
          featured: false,
          cuisineTypes: ["Bakery", "Café", "Gluten-Free"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.6,
          reviewCount: 114
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
        },
        {
          name: "The Fresh Market",
          address: "Auckland, New Zealand",
          hours: "Mon-Sun: 7:00AM – 10:00PM",
          phone: "",
          website: "www.thefreshmarket.co.nz",
          directionsUrl: "https://maps.google.com/?q=The+Fresh+Market+Auckland",
          specialty: "Supermarket with Gluten-Free Range",
          overview: "Well-stocked supermarket offering a dedicated gluten-free aisle and health food section for celiac shoppers.",
          menuHighlights: [
            "🛒 GF Aisle",
            "🥖 GF Breads & Baked Goods",
            "🍝 GF Pasta & Pantry Staples"
          ],
          proTip: "Head to the health food aisle for the widest dedicated GF selection.",
          icon: "🛒",
          featured: true,
          cuisineTypes: ["Supermarket", "Grocery", "Health Food"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.5,
          reviewCount: 120
        },
        {
          name: "Fresh Market Sunhill",
          address: "Sunhill, Auckland, New Zealand",
          hours: "Mon-Sun: 7:00AM – 10:00PM",
          phone: "",
          website: "www.thefreshmarket.co.nz",
          directionsUrl: "https://maps.google.com/?q=Fresh+Market+Sunhill+Auckland",
          specialty: "Supermarket with Gluten-Free Range",
          overview: "Sunhill branch of Fresh Market with a solid gluten-free section including pantry staples, snacks and frozen goods.",
          menuHighlights: [
            "🛒 GF Pantry Staples",
            "🍪 GF Snacks",
            "❄️ GF Frozen Goods"
          ],
          proTip: "Check the end-of-aisle specials for discounted GF products.",
          icon: "🛒",
          featured: false,
          cuisineTypes: ["Supermarket", "Grocery", "Health Food"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.4,
          reviewCount: 95
        },
        {
          name: "The Fresh Market",
          address: "Mount Eden, Auckland, New Zealand",
          hours: "Mon-Sun: 7:00AM – 10:00PM",
          phone: "",
          website: "www.thefreshmarket.co.nz",
          directionsUrl: "https://maps.google.com/?q=The+Fresh+Market+Mount+Eden+Auckland",
          specialty: "Supermarket with Gluten-Free Range",
          overview: "Mount Eden location of The Fresh Market featuring a broad gluten-free range and specialty health products.",
          menuHighlights: [
            "🛒 GF Aisle",
            "🥜 Health Foods",
            "🍞 GF Bread & Baking Mixes"
          ],
          proTip: "Visit on weekday mornings for the freshest restocked GF bread.",
          icon: "🛒",
          featured: false,
          cuisineTypes: ["Supermarket", "Grocery", "Health Food"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.5,
          reviewCount: 88
        },
        {
          name: "I E Produce",
          address: "Auckland, New Zealand",
          hours: "Mon-Sat: 7:00AM – 5:00PM",
          phone: "",
          website: "",
          directionsUrl: "https://maps.google.com/?q=I+E+Produce+Auckland",
          specialty: "Fresh Produce & Grocery",
          overview: "Local produce market and grocer stocking fresh fruit, vegetables and a curated range of gluten-free pantry items.",
          menuHighlights: [
            "🥦 Fresh Produce",
            "🛒 GF Pantry Items",
            "🥬 Organic Vegetables"
          ],
          proTip: "Ask staff which local suppliers provide their GF stock.",
          icon: "🥬",
          featured: false,
          cuisineTypes: ["Grocery", "Health Food", "Supermarket"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.3,
          reviewCount: 67
        },
        {
          name: "Sabato",
          address: "Auckland, New Zealand",
          hours: "Mon-Sat: 9:00AM – 5:00PM",
          phone: "",
          website: "www.sabato.co.nz",
          directionsUrl: "https://maps.google.com/?q=Sabato+Auckland",
          specialty: "Specialty Food Store",
          overview: "Premium specialty food store in Auckland with an excellent selection of imported and local gluten-free products.",
          menuHighlights: [
            "🧀 Specialty Cheeses",
            "🛒 Imported GF Goods",
            "🍷 Gourmet Pantry"
          ],
          proTip: "Their Italian-imported GF pasta range is among the best in the city.",
          icon: "🧀",
          featured: true,
          cuisineTypes: ["Grocery", "Health Food", "Supermarket"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.7,
          reviewCount: 143
        },
        {
          name: "Stoneybridge Market",
          address: "Auckland, New Zealand",
          hours: "Thu-Sun: 8:00AM – 3:00PM",
          phone: "",
          website: "",
          directionsUrl: "https://maps.google.com/?q=Stoneybridge+Market+Auckland",
          specialty: "Weekend Market & Grocery",
          overview: "Weekend market and grocer offering fresh local produce, artisan goods and dedicated gluten-free stalls and products.",
          menuHighlights: [
            "🛒 GF Market Stalls",
            "🥖 Artisan GF Breads",
            "🥕 Local Produce"
          ],
          proTip: "Arrive early on Saturdays for the best pick of GF baked goods before they sell out.",
          icon: "🏪",
          featured: false,
          cuisineTypes: ["Grocery", "Health Food", "Supermarket"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.6,
          reviewCount: 112
        },
        {
          name: "The Goodness Grocer",
          address: "Auckland, New Zealand",
          hours: "Mon-Sat: 8:00AM – 6:00PM",
          phone: "",
          website: "www.thegoodnessgrocer.co.nz",
          directionsUrl: "https://maps.google.com/?q=The+Goodness+Grocer+Auckland",
          specialty: "Health Food & Grocery",
          overview: "Health-focused grocer in Auckland specialising in organic, allergen-friendly and gluten-free pantry staples and fresh goods.",
          menuHighlights: [
            "🛒 GF Pantry Staples",
            "🌱 Organic Produce",
            "🥜 Allergen-Free Products"
          ],
          proTip: "Join their loyalty programme for discounts on regular GF purchases.",
          icon: "🌿",
          featured: true,
          cuisineTypes: ["Grocery", "Health Food", "Supermarket"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.7,
          reviewCount: 156
        }
      ]
    },
    {
      name: "Wellington", slug: "wellington",
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
        },
        {
          name: "Food for the People",
          address: "132 Lambton Quay, Wellington 6011, New Zealand",
          hours: "Mon-Fri: 7:00AM – 4:00PM",
          phone: "+64 4 473 6562",
          website: "www.foodforthepeople.co.nz",
          directionsUrl: "https://maps.google.com/?q=Food+for+the+People+Wellington",
          specialty: "Street Food & Quick Bites",
          overview: "A vibrant Wellington spot serving wholesome street-style food with plenty of gluten-free options clearly marked on the menu.",
          menuHighlights: [
            "🥙 GF Wraps & Bowls",
            "🥗 Fresh Salads (GF)",
            "☕ Specialty Coffee"
          ],
          proTip: "Their GF grain bowls are a local favourite - ask for the daily special!",
          icon: "🥙",
          featured: false,
          cuisineTypes: ["Street Food", "Café"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.5,
          reviewCount: 87
        },
        {
          name: "Pho Viet Street Food",
          address: "142 Cuba Street, Te Aro, Wellington 6011, New Zealand",
          hours: "Mon-Sun: 11:00AM – 9:00PM",
          phone: "",
          website: "",
          directionsUrl: "https://maps.google.com/?q=Pho+Viet+Street+Food+Wellington",
          specialty: "Vietnamese Street Food",
          overview: "Authentic Vietnamese street food specialising in rice noodle bowls and naturally gluten-free dishes.",
          menuHighlights: [
            "🍜 Rice Noodle Pho (GF)",
            "🍚 Vermicelli Bowls (GF)",
            "🌿 Fresh Rice Paper Rolls"
          ],
          proTip: "Most of the menu is naturally gluten-free - just confirm the broth when ordering.",
          icon: "🍜",
          featured: false,
          cuisineTypes: ["Vietnamese", "Street Food"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.6,
          reviewCount: 124
        },
        {
          name: "Shouk - Israeli Food Truck",
          address: "Various Locations, Wellington Central, New Zealand",
          hours: "Check socials for daily locations",
          phone: "",
          website: "www.shouk.co.nz",
          directionsUrl: "https://maps.google.com/?q=Shouk+Israeli+Food+Truck+Wellington",
          specialty: "Israeli Street Food",
          overview: "A beloved Wellington food truck serving vibrant Israeli street eats with plenty of naturally gluten-free and celiac-safe options.",
          menuHighlights: [
            "🥙 GF Falafel Wraps",
            "🍆 Chargrilled Eggplant (GF)",
            "🥗 Mezze Salads (GF)"
          ],
          proTip: "Follow them on Instagram to track their daily location around Wellington!",
          icon: "🥙",
          featured: true,
          cuisineTypes: ["Street Food", "Israeli"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.7,
          reviewCount: 156
        },
        {
          name: "The Greek Food Truck",
          address: "Various Locations, Wellington 6011, New Zealand",
          hours: "Thu-Sun: 11:00AM – 8:00PM",
          phone: "",
          website: "www.thegreekfoodtruck.co.nz",
          directionsUrl: "https://maps.google.com/?q=The+Greek+Food+Truck+Wellington",
          specialty: "Greek Street Food",
          overview: "Serving authentic Greek street food from a food truck, with gluten-free wraps and grilled meats that are naturally celiac-friendly.",
          menuHighlights: [
            "🥙 GF Souvlaki",
            "🍗 Chargrilled Chicken (GF)",
            "🥗 Greek Salads (GF)"
          ],
          proTip: "Ask for the GF pita - it's made fresh and worth the wait!",
          icon: "🥙",
          featured: false,
          cuisineTypes: ["Street Food", "Greek"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.6,
          reviewCount: 98
        },
        {
          name: "Mezze food truck",
          address: "Various Locations, Wellington 6011, New Zealand",
          hours: "Fri-Sun: 11:00AM – 8:00PM",
          phone: "",
          website: "",
          directionsUrl: "https://maps.google.com/?q=Mezze+food+truck+Wellington",
          specialty: "Middle Eastern Street Food",
          overview: "A roaming food truck bringing Middle Eastern mezze flavours to Wellington streets, with plenty of naturally gluten-free options.",
          menuHighlights: [
            "🥙 Falafel (GF)",
            "🍆 Baba Ganoush (GF)",
            "🥗 Tabbouleh (GF)"
          ],
          proTip: "Their hummus bowls with GF flatbread are a must-try!",
          icon: "🥙",
          featured: false,
          cuisineTypes: ["Street Food", "Middle Eastern"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.5,
          reviewCount: 72
        },
        {
          name: "Wild Eatery",
          address: "84 Customhouse Quay, Wellington 6011, New Zealand",
          hours: "Mon-Fri: 7:00AM – 4:00PM, Sat: 8:00AM – 3:00PM",
          phone: "+64 4 499 2622",
          website: "www.wildeatery.co.nz",
          directionsUrl: "https://maps.google.com/?q=Wild+Eatery+Wellington",
          specialty: "Healthy Street-Style Eats",
          overview: "A fresh, modern eatery on the waterfront serving healthy street-style bowls and wraps with a strong focus on gluten-free options.",
          menuHighlights: [
            "🥗 GF Power Bowls",
            "🌯 GF Wraps",
            "🥤 Smoothies & Cold Press Juices"
          ],
          proTip: "Build your own bowl and everything is clearly labelled for gluten-free diets.",
          icon: "🥗",
          featured: false,
          cuisineTypes: ["Street Food", "Healthy"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.4,
          reviewCount: 113
        }
      ]
    },
    {
      name: "Queenstown & Arrowtown", slug: "queenstown-arrowtown",
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
      name: "Christchurch", slug: "christchurch",
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
];

export const nzSlug = (name: string) =>
  name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const findNZRestaurant = (citySlug: string, restaurantSlug: string) => {
  const city = newZealandCities.find((c) => c.slug === citySlug);
  if (!city) return null;
  const restaurant = city.restaurants.find((r) => nzSlug(r.name) === restaurantSlug);
  if (!restaurant) return null;
  return { city, restaurant };
};
