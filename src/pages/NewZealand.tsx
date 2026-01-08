import { ArrowLeft, MapPin, Clock, Globe, Phone, Star, CheckCircle, Camera, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const cities = [
  {
    name: "Auckland",
    restaurants: [
      {
        name: "Giapo",
        featured: true,
        rating: 4.8,
        reviewCount: 312,
        cuisineTypes: ["Ice Cream", "Desserts"],
        celiacSafe: "Celiac-Friendly",
        menuType: "GF Options",
        address: "12 Gore St, Auckland, 1010, New Zealand",
        hours: "Mon-Sun: 12:00 PM - 10:30 PM",
        website: "www.giapo.com",
        phone: "+64 9 379 4222",
        directions: "https://maps.google.com/?q=Giapo+Auckland",
        overview: "Famous for their innovative ice cream creations with many gluten-free options available. A must-visit for dessert lovers.",
        menuHighlights: ["Gluten-Free Cones", "Artisan Ice Cream", "Creative Desserts"],
        reviews: [
          { author: "Emma L.", text: "Amazing gluten-free ice cream options! The staff was very knowledgeable about allergies.", rating: 5 }
        ],
        proTip: "Ask about their gluten-free cone options - they're made fresh daily!"
      },
      {
        name: "The GF Depot",
        featured: true,
        rating: 4.9,
        reviewCount: 187,
        cuisineTypes: ["Cafe", "Bakery"],
        celiacSafe: "100% Dedicated",
        menuType: "100% Gluten-Free",
        address: "379 Parnell Road, Parnell, Auckland 1052, New Zealand",
        hours: "Mon-Sat: 8:00 AM - 4:00 PM",
        website: "www.thegfdepot.co.nz",
        phone: "+64 9 303 2929",
        directions: "https://maps.google.com/?q=The+GF+Depot+Parnell+Auckland",
        overview: "Auckland's premier 100% gluten-free depot offering a wide range of baked goods, meals, and specialty products.",
        menuHighlights: ["Fresh Baked Goods", "Pies", "Sandwiches", "Cakes", "Specialty Products"],
        reviews: [
          { author: "Sarah M.", text: "Finally a place where I can eat everything on the menu! The pies are incredible.", rating: 5 }
        ],
        proTip: "Stock up on their frozen goods to take home - perfect for busy days!"
      },
      {
        name: "HNT Kitchen",
        featured: false,
        rating: 4.6,
        reviewCount: 143,
        cuisineTypes: ["Asian", "Vietnamese"],
        celiacSafe: "Celiac-Friendly",
        menuType: "GF Options",
        address: "7, Shop E14, Level 2/21 Queen Street, Auckland CBD, Auckland 1010, New Zealand",
        hours: "Mon-Sun: 11:00 AM - 9:00 PM",
        directions: "https://maps.google.com/?q=HNT+Kitchen+Auckland"
      },
      {
        name: "Little Bird Kitchen",
        featured: false,
        rating: 4.7,
        reviewCount: 234,
        cuisineTypes: ["Vegan", "Health Food"],
        celiacSafe: "Celiac-Friendly",
        menuType: "GF Options",
        address: "Summer Street & Ponsonby Road, Ponsonby, Auckland 1011, New Zealand",
        hours: "Mon-Sun: 7:30 AM - 4:00 PM",
        directions: "https://maps.google.com/?q=Little+Bird+Kitchen+Ponsonby+Auckland"
      },
      {
        name: "Village Wholefoods Cafe",
        featured: false,
        rating: 4.5,
        reviewCount: 98,
        cuisineTypes: ["Cafe", "Health Food"],
        celiacSafe: "Celiac-Friendly",
        menuType: "GF Options",
        address: "21 Central Terrace, Howick, Auckland 2014, New Zealand",
        hours: "Mon-Sat: 8:00 AM - 4:00 PM",
        directions: "https://maps.google.com/?q=Village+Wholefoods+Cafe+Howick+Auckland"
      },
      {
        name: "Orewa Beach Fish & Chips",
        featured: false,
        rating: 4.4,
        reviewCount: 156,
        cuisineTypes: ["Fish & Chips", "Takeaway"],
        celiacSafe: "Celiac-Friendly",
        menuType: "GF Options",
        address: "Shop 6/350 Hibiscus Coast Highway, Orewa, Auckland 0931, New Zealand",
        hours: "Mon-Sun: 11:00 AM - 8:30 PM",
        directions: "https://maps.google.com/?q=Orewa+Beach+Fish+Chips+Auckland"
      },
      {
        name: "The Attic Bar & Restaurant",
        featured: false,
        rating: 4.5,
        reviewCount: 112,
        cuisineTypes: ["Bar", "Restaurant"],
        celiacSafe: "Celiac-Friendly",
        menuType: "GF Options",
        address: "3 Totara Avenue, New Lynn, Auckland 1071, New Zealand",
        hours: "Wed-Sun: 4:00 PM - Late",
        directions: "https://maps.google.com/?q=The+Attic+Bar+Restaurant+New+Lynn+Auckland"
      },
      {
        name: "Olas Arepas",
        featured: false,
        rating: 4.6,
        reviewCount: 189,
        cuisineTypes: ["Venezuelan", "Latin American"],
        celiacSafe: "Celiac-Friendly",
        menuType: "GF Options",
        address: "136 Ponsonby Road, Ponsonby, Auckland 1011, New Zealand",
        hours: "Tue-Sun: 11:00 AM - 9:00 PM",
        directions: "https://maps.google.com/?q=Olas+Arepas+Ponsonby+Auckland"
      },
      {
        name: "Wen & Yen Bakery",
        featured: false,
        rating: 4.7,
        reviewCount: 76,
        cuisineTypes: ["Bakery", "Asian"],
        celiacSafe: "Celiac-Friendly",
        menuType: "GF Options",
        address: "6/32 Constellation Dr, Rosedale, Auckland 0632, New Zealand",
        hours: "Tue-Sat: 8:00 AM - 3:00 PM",
        directions: "https://maps.google.com/?q=Wen+Yen+Bakery+Rosedale+Auckland"
      },
      {
        name: "Hello Beasty",
        featured: false,
        rating: 4.6,
        reviewCount: 267,
        cuisineTypes: ["Asian Fusion", "Modern"],
        celiacSafe: "Celiac-Friendly",
        menuType: "GF Options",
        address: "95-97 Customs Street West, Auckland CBD, Auckland 1010, New Zealand",
        hours: "Tue-Sat: 12:00 PM - Late",
        directions: "https://maps.google.com/?q=Hello+Beasty+Auckland"
      },
      {
        name: "Napoli Contemporanea pizzeria bar cucina",
        featured: false,
        rating: 4.5,
        reviewCount: 198,
        cuisineTypes: ["Italian", "Pizza"],
        celiacSafe: "Celiac-Friendly",
        menuType: "GF Options",
        address: "297 Parnell Road, Parnell, Auckland 1052, New Zealand",
        hours: "Mon-Sun: 11:30 AM - 10:00 PM",
        directions: "https://maps.google.com/?q=Napoli+Contemporanea+Parnell+Auckland"
      },
      {
        name: "Thirty One",
        featured: false,
        rating: 4.4,
        reviewCount: 134,
        cuisineTypes: ["Modern NZ", "Bar"],
        celiacSafe: "Celiac-Friendly",
        menuType: "GF Options",
        address: "31 Ponsonby Road, Grey Lynn, Auckland 1011, New Zealand",
        hours: "Mon-Sun: 7:00 AM - Late",
        directions: "https://maps.google.com/?q=Thirty+One+Ponsonby+Auckland"
      },
      {
        name: "Nahm",
        featured: false,
        rating: 4.7,
        reviewCount: 223,
        cuisineTypes: ["Thai", "Asian"],
        celiacSafe: "Celiac-Friendly",
        menuType: "GF Options",
        address: "39 Elliott St, Auckland 1010, New Zealand",
        hours: "Mon-Sun: 11:30 AM - 10:00 PM",
        directions: "https://maps.google.com/?q=Nahm+Auckland"
      }
    ]
  },
  {
    name: "Wellington",
    restaurants: [
      {
        name: "Miss Kangsta",
        featured: true,
        rating: 4.7,
        reviewCount: 178,
        cuisineTypes: ["Asian Fusion", "Modern"],
        celiacSafe: "Celiac-Friendly",
        menuType: "GF Options",
        address: "141/11 Jessie Street, Te Aro, Wellington 6011, New Zealand",
        hours: "Tue-Sun: 11:30 AM - 9:00 PM",
        website: "www.misskangsta.co.nz",
        phone: "+64 4 384 3818",
        directions: "https://maps.google.com/?q=Miss+Kangsta+Wellington",
        overview: "Popular Wellington spot serving up creative Asian fusion dishes with plenty of gluten-free options available.",
        menuHighlights: ["Gluten-Free Buns", "Rice Bowls", "Asian Fusion Plates"],
        reviews: [
          { author: "James K.", text: "Great gluten-free options and the staff really understand cross-contamination!", rating: 5 }
        ],
        proTip: "Try their rice paper rolls for a completely gluten-free starter!"
      },
      {
        name: "Gluten Free 4u",
        featured: true,
        rating: 4.9,
        reviewCount: 145,
        cuisineTypes: ["Bakery", "Cafe"],
        celiacSafe: "100% Dedicated",
        menuType: "100% Gluten-Free",
        address: "44 Nelson Street, Wellington 5012, New Zealand",
        hours: "Mon-Fri: 8:00 AM - 4:00 PM, Sat: 9:00 AM - 2:00 PM",
        website: "www.glutenfree4u.co.nz",
        phone: "+64 4 566 7677",
        directions: "https://maps.google.com/?q=Gluten+Free+4u+Wellington",
        overview: "A dedicated 100% gluten-free bakery offering a wide range of baked goods, breads, and cafe fare.",
        menuHighlights: ["Fresh Bread", "Pastries", "Cakes", "Savory Pies", "Lunch Options"],
        reviews: [
          { author: "Rachel T.", text: "The best gluten-free bread I've ever had! Stock up when you visit.", rating: 5 }
        ],
        proTip: "They offer nationwide delivery for their frozen products!"
      },
      {
        name: "Coolsville Cartel",
        featured: false,
        rating: 4.5,
        reviewCount: 112,
        cuisineTypes: ["Cafe", "Brunch"],
        celiacSafe: "Celiac-Friendly",
        menuType: "GF Options",
        address: "3 Moxham Avenue, Hataitai, Wellington 6021, New Zealand",
        hours: "Wed-Mon: 8:00 AM - 3:00 PM",
        directions: "https://maps.google.com/?q=Coolsville+Cartel+Hataitai+Wellington"
      },
      {
        name: "Neo Cafe & Eatery",
        featured: false,
        rating: 4.4,
        reviewCount: 167,
        cuisineTypes: ["Cafe", "Modern NZ"],
        celiacSafe: "Celiac-Friendly",
        menuType: "GF Options",
        address: "132 Willis Street, Te Aro, Wellington 6011, New Zealand",
        hours: "Mon-Fri: 7:00 AM - 4:00 PM, Sat-Sun: 8:00 AM - 4:00 PM",
        directions: "https://maps.google.com/?q=Neo+Cafe+Eatery+Wellington"
      },
      {
        name: "1154 Pastaria",
        featured: false,
        rating: 4.6,
        reviewCount: 234,
        cuisineTypes: ["Italian", "Pasta"],
        celiacSafe: "Celiac-Friendly",
        menuType: "GF Options",
        address: "132 Cuba Street, Te Aro, Wellington 6011, New Zealand",
        hours: "Mon-Sun: 11:30 AM - 10:00 PM",
        directions: "https://maps.google.com/?q=1154+Pastaria+Cuba+Street+Wellington"
      },
      {
        name: "Mt Vic Chippery",
        featured: false,
        rating: 4.7,
        reviewCount: 298,
        cuisineTypes: ["Fish & Chips", "Takeaway"],
        celiacSafe: "Celiac-Friendly",
        menuType: "GF Options",
        address: "5 Majoribanks Street, Mount Victoria, Wellington 6011, New Zealand",
        hours: "Tue-Sun: 12:00 PM - 8:30 PM",
        directions: "https://maps.google.com/?q=Mt+Vic+Chippery+Wellington"
      }
    ]
  },
  {
    name: "Queenstown & Arrowtown",
    restaurants: [
      {
        name: "Erik's Fish and Chips",
        featured: true,
        rating: 4.8,
        reviewCount: 267,
        cuisineTypes: ["Fish & Chips", "Seafood"],
        celiacSafe: "Celiac-Friendly",
        menuType: "GF Options",
        address: "13 Earl St, Queenstown 9300, New Zealand",
        hours: "Mon-Sun: 11:00 AM - 9:00 PM",
        website: "www.eriksfishandchips.co.nz",
        phone: "+64 3 442 4290",
        directions: "https://maps.google.com/?q=Eriks+Fish+and+Chips+Queenstown",
        overview: "Famous Queenstown fish and chips spot offering dedicated gluten-free frying options for celiac diners.",
        menuHighlights: ["GF Fish & Chips", "Fresh Seafood", "Takeaway Options"],
        reviews: [
          { author: "Mike D.", text: "They have a dedicated gluten-free fryer! Finally safe fish and chips!", rating: 5 }
        ],
        proTip: "Ask for their gluten-free batter - they fry it separately!"
      },
      {
        name: "Fergburger",
        featured: false,
        rating: 4.6,
        reviewCount: 456,
        cuisineTypes: ["Burgers", "Fast Food"],
        celiacSafe: "Celiac-Friendly",
        menuType: "GF Options",
        address: "42 Shotover St, Queenstown 9300, New Zealand",
        hours: "Mon-Sun: 8:00 AM - 5:00 AM",
        directions: "https://maps.google.com/?q=Fergburger+Queenstown"
      },
      {
        name: "Postmasters Kitchen + Bar",
        featured: false,
        rating: 4.5,
        reviewCount: 134,
        cuisineTypes: ["Modern NZ", "Bar"],
        celiacSafe: "Celiac-Friendly",
        menuType: "GF Options",
        address: "54 Buckingham Street, Arrowtown 9302, New Zealand",
        hours: "Wed-Sun: 12:00 PM - Late",
        directions: "https://maps.google.com/?q=Postmasters+Kitchen+Bar+Arrowtown"
      },
      {
        name: "Saigon Kingdom Vietnamese Restaurant",
        featured: false,
        rating: 4.4,
        reviewCount: 189,
        cuisineTypes: ["Vietnamese", "Asian"],
        celiacSafe: "Celiac-Friendly",
        menuType: "GF Options",
        address: "88 Beach Street, Queenstown 9300, New Zealand",
        hours: "Mon-Sun: 11:00 AM - 10:00 PM",
        directions: "https://maps.google.com/?q=Saigon+Kingdom+Queenstown"
      }
    ]
  },
  {
    name: "Christchurch",
    restaurants: [
      {
        name: "Herba Gourmet",
        featured: true,
        rating: 4.7,
        reviewCount: 156,
        cuisineTypes: ["Vegan", "Health Food"],
        celiacSafe: "Celiac-Friendly",
        menuType: "GF Options",
        address: "96 Oxford Terrace, Christchurch Central City, Christchurch 8011, New Zealand",
        hours: "Mon-Sat: 9:00 AM - 4:00 PM",
        website: "www.herbagourmet.co.nz",
        phone: "+64 3 365 0809",
        directions: "https://maps.google.com/?q=Herba+Gourmet+Christchurch",
        overview: "Plant-based restaurant with extensive gluten-free options. A haven for health-conscious diners.",
        menuHighlights: ["Raw Bowls", "GF Wraps", "Smoothies", "Vegan Desserts"],
        reviews: [
          { author: "Lisa M.", text: "So many gluten-free and vegan options! Everything is clearly labeled.", rating: 5 }
        ],
        proTip: "Their raw desserts are naturally gluten-free and delicious!"
      },
      {
        name: "Bubbles Gluten Free Catering",
        featured: true,
        rating: 4.9,
        reviewCount: 87,
        cuisineTypes: ["Bakery", "Catering"],
        celiacSafe: "100% Dedicated",
        menuType: "100% Gluten-Free",
        address: "56 Hawdon Street, Sydenham, Christchurch 8023, New Zealand",
        hours: "Tue-Fri: 9:00 AM - 4:00 PM, Sat: 9:00 AM - 1:00 PM",
        website: "www.bubblesglutenfree.co.nz",
        phone: "+64 3 332 6888",
        directions: "https://maps.google.com/?q=Bubbles+Gluten+Free+Catering+Christchurch",
        overview: "Dedicated 100% gluten-free bakery and catering service with an amazing range of baked goods.",
        menuHighlights: ["Fresh Bread", "Pies", "Cakes", "Pastries", "Catering Options"],
        reviews: [
          { author: "Tom B.", text: "Finally a place where I can eat everything! Their meat pies are incredible.", rating: 5 }
        ],
        proTip: "Pre-order for special occasions - they do amazing celebration cakes!"
      },
      {
        name: "Fiddlesticks Restaurant and Bar",
        featured: false,
        rating: 4.5,
        reviewCount: 234,
        cuisineTypes: ["Modern NZ", "Bar"],
        celiacSafe: "Celiac-Friendly",
        menuType: "GF Options",
        address: "Corner of Worcester Boulevard & Montreal Street, Christchurch Central City, Christchurch 8013, New Zealand",
        hours: "Mon-Sun: 11:30 AM - Late",
        directions: "https://maps.google.com/?q=Fiddlesticks+Restaurant+Bar+Christchurch"
      },
      {
        name: "Kaiser Brew Garden",
        featured: false,
        rating: 4.4,
        reviewCount: 178,
        cuisineTypes: ["Gastropub", "German"],
        celiacSafe: "Celiac-Friendly",
        menuType: "GF Options",
        address: "Level 1/96 Oxford Terrace, CBD, Christchurch 8011, New Zealand",
        hours: "Mon-Sun: 11:00 AM - Late",
        directions: "https://maps.google.com/?q=Kaiser+Brew+Garden+Christchurch"
      },
      {
        name: "Sweet Revenge Store",
        featured: false,
        rating: 4.6,
        reviewCount: 145,
        cuisineTypes: ["Desserts", "Cafe"],
        celiacSafe: "Celiac-Friendly",
        menuType: "GF Options",
        address: "96 Oxford Terrace, Christchurch Central City, Christchurch 8011, New Zealand",
        hours: "Mon-Sun: 10:00 AM - 10:00 PM",
        directions: "https://maps.google.com/?q=Sweet+Revenge+Store+Christchurch"
      },
      {
        name: "Doubles",
        featured: false,
        rating: 4.5,
        reviewCount: 123,
        cuisineTypes: ["Caribbean", "Street Food"],
        celiacSafe: "Celiac-Friendly",
        menuType: "GF Options",
        address: "62 Worcester Boulevard, Christchurch Central City, Christchurch 8013, New Zealand",
        hours: "Tue-Sun: 11:00 AM - 8:00 PM",
        directions: "https://maps.google.com/?q=Doubles+Christchurch"
      },
      {
        name: "Shaka Bros",
        featured: false,
        rating: 4.3,
        reviewCount: 98,
        cuisineTypes: ["Breakfast", "Brunch"],
        celiacSafe: "Celiac-Friendly",
        menuType: "GF Options",
        address: "96 Oxford Terrace, Christchurch Central City, Christchurch 8011, New Zealand",
        hours: "Mon-Sun: 7:00 AM - 3:00 PM",
        directions: "https://maps.google.com/?q=Shaka+Bros+Christchurch"
      }
    ]
  },
  {
    name: "Wanaka",
    restaurants: [
      {
        name: "Relishes Cafe",
        featured: true,
        rating: 4.7,
        reviewCount: 234,
        cuisineTypes: ["Cafe", "Brunch"],
        celiacSafe: "Celiac-Friendly",
        menuType: "GF Options",
        address: "1/99 Ardmore Street, Wanaka 9305, New Zealand",
        hours: "Mon-Sun: 7:30 AM - 4:00 PM",
        website: "www.relishescafe.co.nz",
        phone: "+64 3 443 9018",
        directions: "https://maps.google.com/?q=Relishes+Cafe+Wanaka",
        overview: "Popular Wanaka cafe known for excellent gluten-free options and stunning lake views.",
        menuHighlights: ["GF Pancakes", "Brunch Bowls", "Fresh Baking", "Coffee"],
        reviews: [
          { author: "Anna S.", text: "Great gluten-free breakfast options with beautiful views of the lake!", rating: 5 }
        ],
        proTip: "Arrive early for a lakeside table - it gets busy!"
      },
      {
        name: "Big Fig",
        featured: false,
        rating: 4.6,
        reviewCount: 167,
        cuisineTypes: ["Mediterranean", "Cafe"],
        celiacSafe: "Celiac-Friendly",
        menuType: "GF Options",
        address: "105 Ardmore St, Wanaka 9305, New Zealand",
        hours: "Mon-Sun: 8:00 AM - 4:00 PM",
        directions: "https://maps.google.com/?q=Big+Fig+Wanaka"
      }
    ]
  },
  {
    name: "Rotorua",
    restaurants: [
      {
        name: "Hello Stranger Cafe",
        featured: true,
        rating: 4.6,
        reviewCount: 145,
        cuisineTypes: ["Cafe", "Brunch"],
        celiacSafe: "Celiac-Friendly",
        menuType: "GF Options",
        address: "1149 Pukuatua Street, Rotorua 3010, New Zealand",
        hours: "Mon-Fri: 7:00 AM - 3:00 PM, Sat-Sun: 8:00 AM - 3:00 PM",
        website: "www.hellostrangercafe.co.nz",
        phone: "+64 7 460 0953",
        directions: "https://maps.google.com/?q=Hello+Stranger+Cafe+Rotorua",
        overview: "Trendy Rotorua cafe with excellent gluten-free breakfast and lunch options.",
        menuHighlights: ["GF Toast Options", "Eggs Benedict", "Smoothie Bowls"],
        reviews: [
          { author: "David R.", text: "Fantastic cafe with real effort put into their GF menu!", rating: 5 }
        ],
        proTip: "Try their gluten-free bread - it's made fresh daily!"
      },
      {
        name: "Leonardo's Italian Food & Wine",
        featured: false,
        rating: 4.5,
        reviewCount: 178,
        cuisineTypes: ["Italian", "Wine Bar"],
        celiacSafe: "Celiac-Friendly",
        menuType: "GF Options",
        address: "1099 Tutanekai Street, Rotorua 3010, New Zealand",
        hours: "Tue-Sun: 5:00 PM - Late",
        directions: "https://maps.google.com/?q=Leonardos+Italian+Rotorua"
      }
    ]
  },
  {
    name: "Mount Maunganui & Tauranga",
    restaurants: [
      {
        name: "Sabal",
        featured: true,
        rating: 4.7,
        reviewCount: 189,
        cuisineTypes: ["Mediterranean", "Modern"],
        celiacSafe: "Celiac-Friendly",
        menuType: "GF Options",
        address: "169 Maunganui Road, Mount Maunganui 3116, New Zealand",
        hours: "Mon-Sun: 7:00 AM - 4:00 PM",
        website: "www.sabalcafe.co.nz",
        phone: "+64 7 575 2444",
        directions: "https://maps.google.com/?q=Sabal+Mount+Maunganui",
        overview: "Popular beachside cafe with extensive gluten-free menu options and Mediterranean flair.",
        menuHighlights: ["GF Breakfast", "Falafel Bowls", "Fresh Salads", "Coffee"],
        reviews: [
          { author: "Kate P.", text: "Love this place! So many gluten-free options and the staff are very helpful.", rating: 5 }
        ],
        proTip: "Perfect for a post-beach breakfast - try their GF pancakes!"
      },
      {
        name: "SanSea People Ice Cream",
        featured: false,
        rating: 4.5,
        reviewCount: 112,
        cuisineTypes: ["Ice Cream", "Desserts"],
        celiacSafe: "Celiac-Friendly",
        menuType: "GF Options",
        address: "107A Maunganui Road, Mount Maunganui 3116, New Zealand",
        hours: "Mon-Sun: 10:00 AM - 9:00 PM",
        directions: "https://maps.google.com/?q=SanSea+People+Ice+Cream+Mount+Maunganui"
      }
    ]
  },
  {
    name: "Hamilton",
    restaurants: [
      {
        name: "Wooden Spoon",
        featured: true,
        rating: 4.6,
        reviewCount: 156,
        cuisineTypes: ["Cafe", "Brunch"],
        celiacSafe: "Celiac-Friendly",
        menuType: "GF Options",
        address: "169 London Street, Hamilton Central, Hamilton 3204, New Zealand",
        hours: "Mon-Fri: 7:00 AM - 4:00 PM, Sat-Sun: 8:00 AM - 4:00 PM",
        website: "www.woodenspooncafe.co.nz",
        phone: "+64 7 834 2280",
        directions: "https://maps.google.com/?q=Wooden+Spoon+Hamilton",
        overview: "Popular Hamilton cafe known for fresh, wholesome food with excellent gluten-free options.",
        menuHighlights: ["GF Muffins", "Salads", "Brunch Plates", "Fresh Juices"],
        reviews: [
          { author: "Sophie L.", text: "Great selection of gluten-free baking and the staff are very knowledgeable.", rating: 5 }
        ],
        proTip: "Their gluten-free muffins sell out early - get there before 10am!"
      }
    ]
  },
  {
    name: "Palmerston North",
    restaurants: [
      {
        name: "Munch",
        featured: true,
        rating: 4.5,
        reviewCount: 134,
        cuisineTypes: ["Cafe", "Modern NZ"],
        celiacSafe: "Celiac-Friendly",
        menuType: "GF Options",
        address: "62 Broadway Avenue, Palmerston North 4410, New Zealand",
        hours: "Mon-Fri: 7:00 AM - 4:00 PM, Sat-Sun: 8:00 AM - 3:00 PM",
        website: "www.munchcafe.co.nz",
        phone: "+64 6 354 5510",
        directions: "https://maps.google.com/?q=Munch+Palmerston+North",
        overview: "Friendly cafe with a great range of gluten-free options for breakfast and lunch.",
        menuHighlights: ["GF Baking", "Salads", "Sandwiches", "Coffee"],
        reviews: [
          { author: "Paul H.", text: "Reliable gluten-free options and the staff always check ingredients for you.", rating: 4 }
        ],
        proTip: "Ask about their daily gluten-free specials!"
      }
    ]
  },
  {
    name: "Napier & Hawke's Bay",
    restaurants: [
      {
        name: "Te Mata Figs Cafe / The Figgery Cafe",
        featured: true,
        rating: 4.7,
        reviewCount: 178,
        cuisineTypes: ["Cafe", "Farm-to-Table"],
        celiacSafe: "Celiac-Friendly",
        menuType: "GF Options",
        address: "205 Napier Road, Havelock North 4172, New Zealand",
        hours: "Wed-Sun: 9:00 AM - 4:00 PM",
        website: "www.thefiggerycafe.co.nz",
        phone: "+64 6 877 0099",
        directions: "https://maps.google.com/?q=The+Figgery+Cafe+Havelock+North",
        overview: "Beautiful cafe set among fig orchards with excellent gluten-free options and local produce.",
        menuHighlights: ["Fig-based Dishes", "Farm Produce", "GF Baking", "High Tea"],
        reviews: [
          { author: "Jenny M.", text: "Stunning setting and great gluten-free high tea options!", rating: 5 }
        ],
        proTip: "Book ahead for their gluten-free high tea experience!"
      },
      {
        name: "Hunger Monger Seafood",
        featured: false,
        rating: 4.4,
        reviewCount: 167,
        cuisineTypes: ["Seafood", "Fish & Chips"],
        celiacSafe: "Celiac-Friendly",
        menuType: "GF Options",
        address: "129 Marine Parade, Napier South, Napier 4110, New Zealand",
        hours: "Mon-Sun: 11:00 AM - 8:00 PM",
        directions: "https://maps.google.com/?q=Hunger+Monger+Seafood+Napier"
      },
      {
        name: "Community Burgers",
        featured: false,
        rating: 4.5,
        reviewCount: 145,
        cuisineTypes: ["Burgers", "American"],
        celiacSafe: "Celiac-Friendly",
        menuType: "GF Options",
        address: "112 Tennyson Street, Napier South, Napier 4110, New Zealand",
        hours: "Mon-Sun: 11:00 AM - 9:00 PM",
        directions: "https://maps.google.com/?q=Community+Burgers+Napier"
      },
      {
        name: "That Sandwich Place",
        featured: false,
        rating: 4.3,
        reviewCount: 89,
        cuisineTypes: ["Sandwiches", "Cafe"],
        celiacSafe: "Celiac-Friendly",
        menuType: "GF Options",
        address: "112 Emerson Street, Napier South, Napier 4110, New Zealand",
        hours: "Mon-Fri: 7:00 AM - 3:00 PM",
        directions: "https://maps.google.com/?q=That+Sandwich+Place+Napier"
      }
    ]
  },
  {
    name: "Nelson",
    restaurants: [
      {
        name: "Dhara's Caffe",
        featured: true,
        rating: 4.6,
        reviewCount: 134,
        cuisineTypes: ["Cafe", "Vegetarian"],
        celiacSafe: "Celiac-Friendly",
        menuType: "GF Options",
        address: "19 Buxton Square, Nelson 7010, New Zealand",
        hours: "Mon-Sat: 8:00 AM - 4:00 PM",
        website: "www.dharascaffe.co.nz",
        phone: "+64 3 548 8170",
        directions: "https://maps.google.com/?q=Dharas+Caffe+Nelson",
        overview: "Charming cafe with vegetarian focus and extensive gluten-free menu options.",
        menuHighlights: ["GF Cakes", "Vegetarian Dishes", "Fresh Salads", "Coffee"],
        reviews: [
          { author: "Clare W.", text: "Lovely cafe with great gluten-free baking. The staff are very helpful.", rating: 5 }
        ],
        proTip: "Their gluten-free cakes are some of the best in the region!"
      }
    ]
  },
  {
    name: "Kaikōura",
    restaurants: [
      {
        name: "Black Rabbit Pizza",
        featured: true,
        rating: 4.5,
        reviewCount: 112,
        cuisineTypes: ["Pizza", "Italian"],
        celiacSafe: "Celiac-Friendly",
        menuType: "GF Options",
        address: "94 Beach Road, Kaikōura 7300, New Zealand",
        hours: "Wed-Sun: 4:00 PM - 9:00 PM",
        website: "www.blackrabbitpizza.co.nz",
        phone: "+64 3 319 6645",
        directions: "https://maps.google.com/?q=Black+Rabbit+Pizza+Kaikoura",
        overview: "Popular pizza spot offering gluten-free bases for all their creative pizzas.",
        menuHighlights: ["GF Pizza Bases", "Wood-fired Pizza", "Local Ingredients"],
        reviews: [
          { author: "Sam T.", text: "Finally great GF pizza in Kaikoura! The bases are crispy and delicious.", rating: 5 }
        ],
        proTip: "Pre-order your gluten-free base as they can run out on busy nights!"
      }
    ]
  },
  {
    name: "Taupo",
    restaurants: [
      {
        name: "Plateau Bar + Eatery",
        featured: true,
        rating: 4.5,
        reviewCount: 156,
        cuisineTypes: ["Modern NZ", "Bar"],
        celiacSafe: "Celiac-Friendly",
        menuType: "GF Options",
        address: "64 Tuwharetoa St, Taupo 3330, New Zealand",
        hours: "Mon-Sun: 11:00 AM - Late",
        website: "www.plateautaupo.co.nz",
        phone: "+64 7 377 2425",
        directions: "https://maps.google.com/?q=Plateau+Bar+Eatery+Taupo",
        overview: "Central Taupo restaurant with lake views and good gluten-free menu options.",
        menuHighlights: ["GF Mains", "Steaks", "Seafood", "Desserts"],
        reviews: [
          { author: "Emma C.", text: "Great spot for dinner with gluten-free options. Staff are knowledgeable.", rating: 4 }
        ],
        proTip: "Ask about their gluten-free dessert options - they vary daily!"
      }
    ]
  },
  {
    name: "Coromandel & Whitianga",
    restaurants: [
      {
        name: "Earth Store Whitianga",
        featured: true,
        rating: 4.6,
        reviewCount: 98,
        cuisineTypes: ["Health Food", "Organic"],
        celiacSafe: "Celiac-Friendly",
        menuType: "GF Options",
        address: "67 Albert Street, Whitianga 3510, New Zealand",
        hours: "Mon-Sat: 9:00 AM - 5:00 PM",
        website: "www.earthstore.co.nz",
        phone: "+64 7 866 4457",
        directions: "https://maps.google.com/?q=Earth+Store+Whitianga",
        overview: "Health food store and cafe with extensive gluten-free products and fresh food options.",
        menuHighlights: ["GF Baking", "Organic Produce", "Health Foods", "Fresh Salads"],
        reviews: [
          { author: "Ruth K.", text: "Great place to stock up on gluten-free essentials while on holiday!", rating: 5 }
        ],
        proTip: "They stock hard-to-find gluten-free products from around NZ!"
      },
      {
        name: "Stoked Bar & Grill",
        featured: false,
        rating: 4.4,
        reviewCount: 189,
        cuisineTypes: ["Bar & Grill", "Modern NZ"],
        celiacSafe: "Celiac-Friendly",
        menuType: "GF Options",
        address: "19 Esplanade, Whitianga 3510, New Zealand",
        hours: "Mon-Sun: 11:00 AM - Late",
        directions: "https://maps.google.com/?q=Stoked+Bar+Grill+Whitianga"
      }
    ]
  },
  {
    name: "Whangārei",
    restaurants: [
      {
        name: "Dragonfruit Café",
        featured: true,
        rating: 4.5,
        reviewCount: 112,
        cuisineTypes: ["Cafe", "Vegetarian"],
        celiacSafe: "Celiac-Friendly",
        menuType: "GF Options",
        address: "Laurie Hall Lane, Whangārei 0110, New Zealand",
        hours: "Mon-Fri: 8:00 AM - 3:00 PM, Sat: 9:00 AM - 2:00 PM",
        website: "www.dragonfruitcafe.co.nz",
        phone: "+64 9 459 4957",
        directions: "https://maps.google.com/?q=Dragonfruit+Cafe+Whangarei",
        overview: "Colorful cafe with vegetarian focus and many naturally gluten-free options.",
        menuHighlights: ["Smoothie Bowls", "Salads", "GF Baking", "Fresh Juices"],
        reviews: [
          { author: "Lucy T.", text: "Beautiful food and lots of gluten-free options. The smoothie bowls are amazing!", rating: 5 }
        ],
        proTip: "Try their dragon fruit smoothie bowl - naturally gluten-free and delicious!"
      }
    ]
  },
  {
    name: "New Plymouth",
    restaurants: [
      {
        name: "Mike's Bistro & Taproom",
        featured: true,
        rating: 4.4,
        reviewCount: 145,
        cuisineTypes: ["Bistro", "Craft Beer"],
        celiacSafe: "Celiac-Friendly",
        menuType: "GF Options",
        address: "40 Devon Street East, New Plymouth Central, New Plymouth 4310, New Zealand",
        hours: "Wed-Sun: 4:00 PM - Late",
        website: "www.mikesbistro.co.nz",
        phone: "+64 6 759 0009",
        directions: "https://maps.google.com/?q=Mikes+Bistro+Taproom+New+Plymouth",
        overview: "Popular bistro with craft beer selection and good gluten-free food options.",
        menuHighlights: ["GF Mains", "Craft Beer", "Shared Plates", "Desserts"],
        reviews: [
          { author: "Steve R.", text: "Great atmosphere and they cater well to gluten-free diners.", rating: 4 }
        ],
        proTip: "They have gluten-free beer options too - ask the staff!"
      }
    ]
  },
  {
    name: "Waiheke Island",
    restaurants: [
      {
        name: "tibs┃food shack",
        featured: true,
        rating: 4.6,
        reviewCount: 98,
        cuisineTypes: ["Cafe", "Island Cuisine"],
        celiacSafe: "Celiac-Friendly",
        menuType: "GF Options",
        address: "112 Ocean View Road, Oneroa, Waiheke Island 1081, New Zealand",
        hours: "Mon-Sun: 8:00 AM - 4:00 PM",
        website: "www.tibsfoodshack.co.nz",
        phone: "+64 9 372 2273",
        directions: "https://maps.google.com/?q=tibs+food+shack+Waiheke+Island",
        overview: "Relaxed island cafe with good gluten-free breakfast and lunch options.",
        menuHighlights: ["GF Breakfast", "Fresh Salads", "Coffee", "Baking"],
        reviews: [
          { author: "Jane B.", text: "Lovely cafe with ocean views and great gluten-free choices!", rating: 5 }
        ],
        proTip: "Perfect for a relaxed breakfast after the ferry - try their GF eggs benny!"
      }
    ]
  },
  {
    name: "Storms River & Garden Route",
    restaurants: [
      {
        name: "Tsitrus Café",
        featured: false,
        rating: 4.4,
        reviewCount: 89,
        cuisineTypes: ["Cafe", "South African"],
        celiacSafe: "Celiac-Friendly",
        menuType: "GF Options",
        address: "43 Gammasi St, Stormsrivier, 6308, South Africa",
        hours: "Mon-Sun: 8:00 AM - 5:00 PM",
        directions: "https://maps.google.com/?q=Tsitrus+Cafe+Storms+River"
      },
      {
        name: "Marilyn's 60's Diner",
        featured: false,
        rating: 4.3,
        reviewCount: 134,
        cuisineTypes: ["American", "Diner"],
        celiacSafe: "Celiac-Friendly",
        menuType: "GF Options",
        address: "Darnell St, Storms River, Stormsrivier, 6308, South Africa",
        hours: "Mon-Sun: 8:00 AM - 8:00 PM",
        directions: "https://maps.google.com/?q=Marilyns+60s+Diner+Storms+River"
      }
    ]
  }
];

const getCeliacSafeBadge = (level: string) => {
  if (level === "100% Dedicated") {
    return <Badge className="bg-green-100 text-green-800 border-green-300">100% Dedicated GF</Badge>;
  }
  return <Badge variant="secondary">{level}</Badge>;
};

const getMenuTypeBadge = (type: string) => {
  if (type === "100% Gluten-Free") {
    return <Badge className="bg-blue-100 text-blue-800 border-blue-300">100% GF Menu</Badge>;
  }
  return <Badge variant="outline">{type}</Badge>;
};

const renderStarRating = (rating: number) => {
  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
};

const NewZealand = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center space-x-2 hover:opacity-80 transition-opacity mb-4">
            <ArrowLeft className="h-5 w-5" />
            <span className="text-sm font-medium">Back to Countries</span>
          </Link>
          <div className="flex items-center space-x-4">
            <div className="text-6xl">🇳🇿</div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">New Zealand</h1>
              <p className="text-lg text-gray-600">Top Gluten-Free Restaurants</p>
            </div>
          </div>
        </div>
      </header>

      <section className="py-12 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="flex flex-wrap justify-center gap-2">
              <Badge className="bg-green-100 text-green-800">Celiac-Friendly</Badge>
              <Badge className="bg-blue-100 text-blue-800">Verified Safe</Badge>
              <Badge className="bg-purple-100 text-purple-800">Local Favorites</Badge>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Explore New Zealand's finest gluten-free dining destinations. From fresh seafood to traditional Kiwi classics,
              these certified celiac-safe restaurants showcase the best of Pacific cuisine with complete peace of mind.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {cities.map((city) => (
            <div key={city.name} className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">{city.name}</h2>
              <div className="grid gap-8">
                {city.restaurants.map((restaurant) => (
                  <Card key={restaurant.name} className="overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="p-6 space-y-6">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{restaurant.name}</h3>
                          <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center space-x-1">
                              {renderStarRating(restaurant.rating)}
                              <span className="font-semibold ml-1">{restaurant.rating}</span>
                              <span className="text-gray-500">({restaurant.reviewCount} reviews)</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {restaurant.cuisineTypes.map((type) => (
                            <Badge key={type} variant="secondary">{type}</Badge>
                          ))}
                          {getCeliacSafeBadge(restaurant.celiacSafe)}
                          {getMenuTypeBadge(restaurant.menuType)}
                        </div>

                        <Button className="w-full sm:w-auto" asChild>
                          <a href={restaurant.directions} target="_blank" rel="noopener noreferrer">
                            <MapPin className="h-4 w-4 mr-2" />
                            Get Directions
                          </a>
                        </Button>

                        {restaurant.featured && (
                          <>
                            <div className="grid md:grid-cols-2 gap-4 text-sm">
                              <div className="flex items-start space-x-2">
                                <MapPin className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                                <span>{restaurant.address}</span>
                              </div>
                              <div className="flex items-start space-x-2">
                                <Clock className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                                <span>{restaurant.hours}</span>
                              </div>
                              {restaurant.website && (
                                <div className="flex items-start space-x-2">
                                  <Globe className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                                  <a href={`https://${restaurant.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                    {restaurant.website}
                                  </a>
                                </div>
                              )}
                              {restaurant.phone && (
                                <div className="flex items-start space-x-2">
                                  <Phone className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                                  <a href={`tel:${restaurant.phone}`} className="text-blue-600 hover:underline">
                                    {restaurant.phone}
                                  </a>
                                </div>
                              )}
                            </div>

                            {restaurant.overview && (
                              <div className="bg-green-50 rounded-lg p-4 space-y-2">
                                <div className="flex items-center space-x-2">
                                  <CheckCircle className="h-5 w-5 text-green-600" />
                                  <h4 className="font-semibold text-gray-900">Overview</h4>
                                </div>
                                <p className="text-gray-700 text-sm leading-relaxed">{restaurant.overview}</p>
                              </div>
                            )}

                            {restaurant.menuHighlights && (
                              <div className="bg-orange-50 rounded-lg p-4 space-y-2">
                                <div className="flex items-center space-x-2">
                                  <Camera className="h-5 w-5 text-orange-600" />
                                  <h4 className="font-semibold text-gray-900">Menu Highlights</h4>
                                </div>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                  {restaurant.menuHighlights.map((item) => (
                                    <li key={item} className="text-sm text-gray-700 flex items-center">
                                      <span className="mr-2">•</span>
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {restaurant.reviews && (
                              <div className="bg-gray-50 rounded-lg p-4 space-y-4">
                                <div className="flex items-center space-x-2">
                                  <MessageCircle className="h-5 w-5 text-gray-600" />
                                  <h4 className="font-semibold text-gray-900">User Reviews</h4>
                                </div>
                                <div className="space-y-3">
                                  {restaurant.reviews.map((review, idx) => (
                                    <div key={idx} className="bg-white rounded p-3 space-y-1">
                                      <div className="flex items-center justify-between">
                                        <span className="font-medium text-sm">{review.author}</span>
                                        {renderStarRating(review.rating)}
                                      </div>
                                      <p className="text-sm text-gray-600">{review.text}</p>
                                    </div>
                                  ))}
                                </div>
                                <Button variant="outline" size="sm" className="w-full">View All Reviews</Button>
                              </div>
                            )}

                            {restaurant.proTip && (
                              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                                <p className="text-sm text-gray-700">
                                  <span className="font-semibold">Pro Tip:</span> {restaurant.proTip}
                                </p>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NewZealand;
