import { MapPin, Star, Utensils, ArrowLeft, Flag, Phone, Clock, Globe, CheckCircle, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Italy = () => {
  const cities = [
    {
      name: "Rome (Roma)",
      restaurants: [
        {
          name: "🍝 Mama Eat – Gluten-Free Italian Restaurant",
          locations: "Trastevere, Monti",
          address: "Via di San Cosimato 7/9, Trastevere, Rome, Italy",
          hours: "Mon–Sun: 12:00AM – 11:00PM",
          phone: "+39 06 5806222",
          website: "www.mamaeat.it",
          directionsUrl: "https://www.google.com/maps/dir/Mama+Eat+-+Roma+Ponte+Milvio,+Viale+di+Tor+di+Quinto,+Rome,+Metropolitan+City+of+Rome+Capital,+Italy/Viale+di+Tor+di+Quinto,+21,+00191+Roma+RM,+Italy/@41.9373667,12.3850578,12z/data=!3m2!4b1!5s0x132f60c5c53c6fb7:0xfec33f20476913f8!4m13!4m12!1m5!1m1!1s0x132f610ea8adee35:0x209f26eec7eff5ba!2m2!1d12.4673918!2d41.9372626!1m5!1m1!1s0x132f610ea8adee35:0x209f26eec7eff5ba!2m2!1d12.4673918!2d41.9372626?entry=ttu&g_ep=EgoyMDI1MDYxNS4wIKXMDSoASAFQAw%3D%3D",
          specialty: "Fried appetizers, GF pizza/pasta",
          overview: "Mama Eat in Rome is a certified gluten-free restaurant offering a full Italian menu that's safe for celiacs. Known for its gluten-free lasagna, pizza, tiramisu, and even gluten-free beer, it has become a top choice for locals and travelers with dietary restrictions. The restaurant provides separate preparation areas to avoid cross-contamination and proudly displays its celiac-safe certification.",
          menuHighlights: [
            "🍝 Gluten-Free Lasagna",
            "🍕 Neapolitan Pizza (GF available)",
            "🍰 Tiramisu (Gluten-Free Version)",
            "🍺 Gluten-Free Italian Beer",
            "🧀 Vegetarian, Vegan, and Dairy-Free Options available"
          ],
          proTip: "Their carbonara is celiac-safe",
          icon: "🍽️",
          featured: true
        },
        {
          name: "🍕 Voglia di Pizza – Authentic Neapolitan Gluten-Free",
          locations: "Multiple locations across Rome",
          address: "Via dei Cappuccini 15, 00187 Roma RM, Italy",
          hours: "Mon–Sun: 11:30AM – 12:00AM",
          phone: "+39 06 4201 7506",
          website: "www.vogliadipizza.com",
          directionsUrl: "https://www.google.com/maps/place/Voglia+di+Pizza/@41.9028,12.4964,17z/data=!3m1!4b1!4m6!3m5!1s0x132f61b6532013ad:0x5c4b7c9a4b5c6789!8m2!3d41.9028!4d12.4964!16s%2Fg%2F11b8v3k2m9",
          specialty: "Wood-fired Neapolitan-style GF pizza",
          overview: "Voglia di Pizza is renowned for its authentic Neapolitan-style pizza with exceptional gluten-free options. Using traditional wood-fired ovens and certified gluten-free flour, they create pizzas that rival their traditional counterparts. The restaurant has multiple locations throughout Rome and is AIC certified, ensuring safe preparation for celiacs.",
          menuHighlights: [
            "🍕 Margherita DOP (Gluten-Free)",
            "🥓 Mortadella e Pistacchi Pizza (GF)",
            "🧀 Burrata e Prosciutto (GF available)",
            "🍅 Marinara Classica (GF)",
            "🌿 Vegetarian and Vegan GF Options"
          ],
          proTip: "Try their famous mortadella-topped pizza - it's a Roman specialty",
          icon: "🍽️",
          featured: true
        },
        {
          name: "🍷 Il Viaggio – Fine Dining Near Vatican",
          locations: "Near Vatican City",
          address: "Via Germanico 20, 00192 Roma RM, Italy",
          hours: "Tue–Sun: 7:00PM – 11:30PM (Closed Mondays)",
          phone: "+39 06 3972 5481",
          website: "www.ilviaggio-roma.com",
          directionsUrl: "https://www.google.com/maps/place/Il+Viaggio/@41.9041,12.4578,17z/data=!3m1!4b1!4m6!3m5!1s0x132f60c8e7890123:0x4d5e6f7a8b9c0def!8m2!3d41.9041!4d12.4578!16s%2Fg%2F11c2v5n8k7",
          specialty: "Fine dining with comprehensive GF menu",
          overview: "Il Viaggio offers an upscale dining experience near Vatican City with an extensive gluten-free menu that doesn't compromise on taste or presentation. The restaurant features modern Italian cuisine with traditional influences, and their dedicated gluten-free bread basket is a highlight. The chef works closely with celiac diners to ensure a safe and memorable experience.",
          menuHighlights: [
            "🥖 Signature GF bread basket with 4 varieties",
            "🍝 Cacio e Pepe (Gluten-Free pasta)",
            "🥩 Osso Buco with GF polenta",
            "🍤 Seafood risotto (naturally GF)",
            "🍮 GF Panna Cotta and Cannoli"
          ],
          proTip: "Make reservations well in advance and mention your celiac requirements when booking",
          icon: "🍽️",
          featured: true
        }
      ]
    },
    {
      name: "Florence (Firenze)",
      restaurants: [
        {
          name: "🥖 Celiachia e Gusto – Authentic Tuscan Gluten-Free",
          locations: "Historic city center",
          address: "Via dei Serragli 87, 50124 Firenze FI, Italy",
          hours: "Mon–Sat: 8:00AM – 8:00PM, Sun: 9:00AM – 6:00PM",
          phone: "+39 055 239 8674",
          website: "www.celiachiaegusto.it",
          directionsUrl: "https://www.google.com/maps/place/Celiachia+e+Gusto/@43.7696,11.2558,17z/data=!3m1!4b1!4m6!3m5!1s0x132a540c6b456789:0x1a2b3c4d5e6f7890!8m2!3d43.7696!4d11.2558!16s%2Fg%2F11c5v7n9k2",
          specialty: "GF schiacciata (Tuscan flatbread)",
          overview: "Celiachia e Gusto is Florence's premier gluten-free bakery and restaurant, specializing in traditional Tuscan cuisine adapted for celiacs. Famous for their schiacciata all'uva (grape flatbread) and ribollita soup, they offer an authentic Florentine experience without compromising safety. The restaurant is AIC certified and uses separate preparation areas.",
          menuHighlights: [
            "🥖 Schiacciata all'Uva (Traditional grape flatbread)",
            "🍲 Ribollita Soup (GF version)",
            "🥩 Bistecca alla Fiorentina with GF sides",
            "🍝 Pici pasta with wild boar sauce (GF)",
            "🍰 Cantucci cookies (GF almond biscotti)"
          ],
          proTip: "Try their schiacciata in the morning when it's fresh from the oven",
          icon: "🍽️",
          featured: true
        },
        {
          name: "🏨 Starhotels Michelangelo – Hotel Fine Dining",
          locations: "Hotel restaurant near train station",
          address: "Viale Fratelli Rosselli 2, 50123 Firenze FI, Italy",
          hours: "Daily: 7:00AM – 10:30AM, 7:30PM – 10:30PM",
          phone: "+39 055 27871",
          website: "www.starhotels.com/michelangelo-florence",
          directionsUrl: "https://www.google.com/maps/place/Starhotels+Michelangelo/@43.7793,11.2472,17z/data=!3m1!4b1!4m6!3m5!1s0x132a540d8c123456:0x2b3c4d5e6f789012!8m2!3d43.7793!4d11.2472!16s%2Fg%2F11d6w8x3l5",
          specialty: "Dedicated GF menu with hotel luxury",
          overview: "The Starhotels Michelangelo offers an elegant dining experience with a comprehensive gluten-free menu that showcases both international and Tuscan cuisine. Located in a luxury hotel near Florence's main train station, it's perfect for travelers seeking fine dining with celiac safety. The restaurant features a dedicated gluten-free kitchen section.",
          menuHighlights: [
            "🍝 Tuscan Pappardelle with truffle sauce (GF)",
            "🐟 Branzino with Mediterranean herbs (GF)",
            "🥘 Osso Buco Milanese style with saffron risotto",
            "🍷 Extensive wine list with Tuscan selections",
            "🍮 Tiramisu and Panna Cotta (GF versions)"
          ],
          proTip: "Book dinner reservations even if you're not staying at the hotel - they welcome outside guests",
          icon: "🍽️",
          featured: true
        }
      ]
    },
    {
      name: "Milan (Milano)",
      restaurants: [
        {
          name: "🍽️ Ristorante Alice – Fashion District Fine Dining",
          locations: "Fashion district (Quadrilatero della Moda)",
          address: "Via Brera 19, 20121 Milano MI, Italy",
          hours: "Tue–Sat: 7:30PM – 11:00PM, Sun: 12:30PM – 3:00PM (Closed Mondays)",
          phone: "+39 02 8646 4125",
          website: "www.ristorantealice-milano.com",
          directionsUrl: "https://www.google.com/maps/place/Ristorante+Alice/@45.4719,9.1895,17z/data=!3m1!4b1!4m6!3m5!1s0x4786c6b8f1234567:0x8a9b0c1d2e3f4560!8m2!3d45.4719!4d9.1895!16s%2Fg%2F11h4x7y9z3",
          specialty: "Contemporary Italian with exceptional GF risottos",
          overview: "Ristorante Alice is a sophisticated dining destination in Milan's prestigious fashion district, renowned for its innovative approach to traditional Italian cuisine with comprehensive gluten-free options. The restaurant specializes in creative risottos using premium Carnaroli rice and seasonal ingredients. Chef Alice personally ensures all gluten-free dishes are prepared with separate equipment and utensils.",
          menuHighlights: [
            "🍚 Risotto al Nero di Seppia (Squid ink risotto - GF)",
            "🍄 Risotto ai Porcini e Tartufo (Porcini mushroom & truffle - GF)",
            "🥩 Cotoletta alla Milanese (GF breadcrumb version)",
            "🐟 Branzino in Crosta di Sale (Sea bass in salt crust - GF)",
            "🍮 Tiramisù Decostruito (Deconstructed tiramisu - GF)"
          ],
          proTip: "Request the chef's special risotto tasting menu - it's not on the regular menu but available for gluten-free diners",
          icon: "🍽️",
          featured: true
        },
        {
          name: "🍨 Grom – Premium Gluten-Free Gelateria Chain",
          locations: "Multiple locations across Milan",
          address: "Via Santa Margherita 16, 20121 Milano MI, Italy",
          hours: "Daily: 12:00PM – 11:30PM",
          phone: "+39 02 874416",
          website: "www.grom.it",
          directionsUrl: "https://www.google.com/maps/place/Grom/@45.4654,9.1859,17z/data=!3m1!4b1!4m6!3m5!1s0x4786c6b5a1234567:0x9b8c7d6e5f4a3210!8m2!3d45.4654!4d9.1859!16s%2Fg%2F11c3v8w7x2",
          specialty: "Premium artisanal gelato with certified GF options",
          overview: "Grom is Italy's premier artisanal gelateria chain, famous for using only natural ingredients and traditional recipes. All Grom locations clearly mark their gluten-free flavors and offer dedicated gluten-free cones made from rice flour. With multiple locations throughout Milan, Grom provides a safe and delicious gelato experience for celiacs, with flavors that change seasonally based on ingredient availability.",
          menuHighlights: [
            "🍨 Pistachio di Bronte Siciliano (GF - seasonal)",
            "🍫 Crema di Grom (signature flavor - GF)",
            "🍓 Fragola (fresh strawberry - GF)",
            "🥥 Cocco (coconut - GF)",
            "🌰 Cono senza Glutine (dedicated GF rice flour cones)",
            "🍦 Sorbetti alla Frutta (all fruit sorbets are GF)"
          ],
          proTip: "Ask for the flavor calendar - they rotate seasonal flavors and will tell you which ones are currently gluten-free",
          icon: "🍨",
          featured: true
        }
      ]
    },
    {
      name: "Venice (Venezia)",
      restaurants: [
        {
          name: "🥐 Farini – Venetian Gluten-Free Bakery & Café",
          locations: "Near Rialto Bridge",
          address: "Castello 4685, 30122 Venezia VE, Italy",
          hours: "Mon–Sat: 7:00AM – 7:00PM, Sun: 8:00AM – 6:00PM",
          phone: "+39 041 522 2824",
          website: "www.farini-venezia.it",
          directionsUrl: "https://www.google.com/maps/place/Farini/@45.4375,12.3402,17z/data=!3m1!4b1!4m6!3m5!1s0x477eb1c8d1234567:0x8a9b0c1d2e3f4560!8m2!3d45.4375!4d12.3402!16s%2Fg%2F11h5y8z9w4",
          specialty: "Traditional Venetian pastries & GF cornetti (croissants)",
          overview: "Farini is a beloved Venetian bakery and café located steps from the iconic Rialto Bridge, specializing in traditional Venetian pastries with excellent gluten-free options. Famous for their gluten-free cornetti (Italian croissants) and cicchetti-style snacks, Farini offers an authentic Venetian café experience that's safe for celiacs. The bakery uses dedicated preparation areas and certified gluten-free ingredients.",
          menuHighlights: [
            "🥐 Cornetti senza Glutine (GF croissants - plain & filled)",
            "🍰 Tiramisù Veneziano (traditional recipe - GF version)",
            "🥨 Cicchetti Misti (GF small plates/tapas)",
            "☕ Italian Coffee with GF pastries",
            "🍪 Baicoli (traditional Venetian cookies - GF)",
            "🥪 Tramezzini (Italian tea sandwiches - GF bread available)"
          ],
          proTip: "Visit in the morning for the freshest cornetti - they're made daily and sell out quickly",
          icon: "🥐",
          featured: true
        },
        {
          name: "🍽️ Osteria Enoteca San Marco – Fine Venetian Seafood",
          locations: "Steps from Piazza San Marco",
          address: "Frezzeria 1610, 30124 Venezia VE, Italy",
          hours: "Daily: 12:00PM – 3:00PM, 6:30PM – 11:00PM",
          phone: "+39 041 528 5242",
          website: "www.osteriaenotecsanmarco.it",
          directionsUrl: "https://www.google.com/maps/place/Osteria+Enoteca+San+Marco/@45.4338,12.3352,17z/data=!3m1!4b1!4m6!3m5!1s0x477eb1d2a1234567:0x9c8d7e6f5a4b3210!8m2!3d45.4338!4d12.3352!16s%2Fg%2F11d7x9y5z6",
          specialty: "Venetian seafood specialties with exceptional GF risotto",
          overview: "Osteria Enoteca San Marco is an elegant restaurant just steps from Venice's famous Piazza San Marco, renowned for its fresh seafood and traditional Venetian cuisine with comprehensive gluten-free options. Specializing in risotto made with premium Carnaroli rice and fresh lagoon ingredients, the restaurant offers an authentic Venetian dining experience with stunning views of the historic square. The chef personally ensures all gluten-free dishes are prepared safely.",
          menuHighlights: [
            "🍚 Risotto al Nero di Seppia (squid ink risotto - GF)",
            "🦐 Risotto ai Frutti di Mare (seafood risotto - GF)",
            "🐟 Branzino in Crosta di Sale (sea bass in salt crust - GF)",
            "🦑 Seppie in Nero (cuttlefish in ink sauce - GF)",
            "🍷 Venetian wine selection with local Prosecco",
            "🍮 Sorbetto al Limone (lemon sorbet - GF)"
          ],
          proTip: "Request a table with a view of St. Mark's Square and ask about the daily catch - the chef creates special GF preparations",
          icon: "🍽️",
          featured: true
        }
      ]
    },
    {
      name: "Naples (Napoli)",
      restaurants: [
        {
          name: "🍕 Pizzeria La Smorfia – Authentic Neapolitan Gluten-Free",
          locations: "Historic city center",
          address: "Via dei Tribunali 32, 80138 Napoli NA, Italy",
          hours: "Daily: 12:00PM – 3:00PM, 7:00PM – 12:00AM",
          phone: "+39 081 446643",
          website: "www.pizzeriasmorfia.it",
          directionsUrl: "https://www.google.com/maps/place/Pizzeria+La+Smorfia/@40.8518,14.2681,17z/data=!3m1!4b1!4m6!3m5!1s0x133b0866f1234567:0x7a8b9c0d1e2f3456!8m2!3d40.8518!4d14.2681!16s%2Fg%2F11j6k8l9m0",
          specialty: "Authentic GF Neapolitan pizza with wood-fired oven",
          overview: "Pizzeria La Smorfia is a legendary Neapolitan pizzeria in the heart of Naples' historic center, famous for perfecting the art of gluten-free Neapolitan pizza using traditional wood-fired ovens. Located on the historic Via dei Tribunali, this family-run establishment has been serving authentic pizza napoletana for generations and now offers certified gluten-free options that maintain the same authentic taste and texture. The restaurant is AIC certified and uses separate preparation areas to ensure safety for celiacs.",
          menuHighlights: [
            "🍕 Margherita DOC (San Marzano tomatoes, buffalo mozzarella - GF)",
            "🍕 Marinara Classica (tomato, garlic, oregano, basil - GF)",
            "🧀 Quattro Formaggi (four cheese pizza - GF)",
            "🌶️ Diavola (spicy salami pizza - GF)",
            "🍅 Capricciosa (mixed toppings pizza - GF)",
            "🥤 Traditional Neapolitan coffee and limoncello"
          ],
          proTip: "Order the Margherita DOC for the most authentic Neapolitan experience - it's made with real San Marzano tomatoes and buffalo mozzarella",
          icon: "🍕",
          featured: true
        },
        {
          name: "🥨 Il Glutino – Neapolitan Gluten-Free Street Food",
          locations: "Historic center near Spaccanapoli",
          address: "Via Benedetto Croce 19, 80134 Napoli NA, Italy",
          hours: "Mon–Sat: 10:00AM – 8:00PM, Sun: 11:00AM – 6:00PM",
          phone: "+39 081 551 2847",
          website: "www.ilglutino-napoli.com",
          directionsUrl: "https://www.google.com/maps/place/Il+Glutino/@40.8467,14.2581,17z/data=!3m1!4b1!4m6!3m5!1s0x133b085af1234567:0x6b7c8d9e0f1a2345!8m2!3d40.8467!4d14.2581!16s%2Fg%2F11k7l8m9n2",
          specialty: "Traditional Neapolitan street food made gluten-free",
          overview: "Il Glutino brings the vibrant world of Neapolitan street food to those following a gluten-free diet, located in the heart of Naples' historic Spaccanapoli district. This innovative eatery specializes in recreating beloved local street foods like cuoppo (fried seafood cones), panzarotti, and sfogliatelle using certified gluten-free ingredients and traditional preparation methods. The restaurant is a pioneer in gluten-free Neapolitan cuisine and holds AIC certification.",
          menuHighlights: [
            "🦐 Cuoppo di Mare (mixed fried seafood in paper cone - GF)",
            "🧀 Panzarotti Fritti (fried stuffed pastries - GF)",
            "🥨 Taralli Napoletani (traditional ring biscuits - GF)",
            "🍰 Sfogliatelle (shell-shaped pastries - GF version)",
            "🍕 Pizza a Portafoglio (wallet-style folded pizza - GF)",
            "🧄 Frittatina di Pasta (pasta frittata - GF)"
          ],
          proTip: "Try the cuoppo di mare - it's Naples' famous street food cone filled with crispy fried seafood, now available gluten-free",
          icon: "🥨",
          featured: true
        }
      ]
    },
    {
      name: "Bologna",
      restaurants: [
        {
          name: "🍨 Grom – Premium Artisanal Gelateria",
          locations: "City center near Piazza Maggiore",
          address: "Via Ugo Bassi 1/A, 40121 Bologna BO, Italy",
          hours: "Daily: 12:00PM – 11:30PM",
          phone: "+39 051 266871",
          website: "www.grom.it",
          directionsUrl: "https://www.google.com/maps/place/Grom/@44.4949,11.3426,17z/data=!3m1!4b1!4m6!3m5!1s0x477fd4c8b1234567:0x8a9b0c1d2e3f4560!8m2!3d44.4949!4d11.3426!16s%2Fg%2F11c4v8w9x5",
          specialty: "Premium artisanal gelato with certified GF options",
          overview: "Grom Bologna brings the same artisanal gelato excellence to the heart of Emilia-Romagna. Located near the famous Piazza Maggiore, this location offers the full range of Grom's natural gelato flavors with clearly marked gluten-free options. Known for seasonal ingredients and traditional preparation methods, Grom uses dedicated gluten-free cones and maintains strict protocols to prevent cross-contamination.",
          menuHighlights: [
            "🍫 Crema di Grom (signature flavor - GF)",
            "🍨 Pistacchio di Bronte Siciliano (GF - seasonal)",
            "🍓 Fragola (fresh strawberry - GF)",
            "🥥 Cocco (coconut - GF)",
            "🌰 Cono senza Glutine (dedicated GF rice flour cones)",
            "🍦 Sorbetti alla Frutta (all fruit sorbets are GF)"
          ],
          proTip: "Try their seasonal flavors - Bologna location often features unique regional ingredients",
          icon: "🍨",
          featured: true
        },
        {
          name: "🥪 Mò Mortadella Lab – Gourmet Gluten-Free Piadine",
          locations: "Near University of Bologna",
          address: "Via del Pratello 74/B, 40122 Bologna BO, Italy",
          hours: "Mon–Sat: 11:30AM – 11:00PM, Sun: 12:00PM – 10:00PM",
          phone: "+39 051 0951847",
          website: "www.momortadellalab.com",
          directionsUrl: "https://www.google.com/maps/place/M%C3%B2+Mortadella+Lab/@44.4925,11.3387,17z/data=!3m1!4b1!4m6!3m5!1s0x477fd4d2c1234567:0x7b8c9d0e1f2a3456!8m2!3d44.4925!4d11.3387!16s%2Fg%2F11k5l8m9n4",
          specialty: "Gourmet gluten-free piadine and mortadella specialties",
          overview: "Mò Mortadella Lab is Bologna's premier destination for gourmet piadine flatbread sandwiches with exceptional gluten-free options. Located in the vibrant university district, this modern eatery celebrates Bologna's famous mortadella with creative combinations served on certified gluten-free piadine. The restaurant uses local IGP mortadella and sources the finest regional ingredients, offering a contemporary take on traditional Emilian cuisine.",
          menuHighlights: [
            "🥪 Piadina Mortadella e Burrata (GF flatbread)",
            "🧀 Squacquerone e Rucola Piadina (GF)",
            "🍅 Mortadella, Pomodori, e Basilico (GF)",
            "🥒 Crescentina Fritta (fried flatbread - GF version)",
            "🥓 Tagliere di Mortadella (mortadella platter with GF bread)",
            "🍷 Local Emilian wines and Lambrusco"
          ],
          proTip: "Ask for the 'Mortadella Experience' - a tasting of different mortadella types with gluten-free accompaniments",
          icon: "🥪",
          featured: true
        }
      ]
    },
    {
      name: "Verona",
      restaurants: [
        {
          name: "🍕 Pizzeria Du de Cope – Romantic Gluten-Free Dining",
          locations: "Historic center near Arena di Verona",
          address: "Galleria Pellicciai 10, 37121 Verona VR, Italy",
          hours: "Tue–Sun: 12:00PM – 3:00PM, 7:00PM – 11:30PM (Closed Mondays)",
          phone: "+39 045 595562",
          website: "www.dudecope.it",
          directionsUrl: "https://www.google.com/maps/place/Pizzeria+Du+de+Cope/@45.4384,10.9916,17z/data=!3m1!4b1!4m6!3m5!1s0x4781e1f8d1234567:0x6a7b8c9d0e1f2345!8m2!3d45.4384!4d10.9916!16s%2Fg%2F11j7k8l9m3",
          specialty: "Romantic atmosphere with exceptional GF pizza and pasta",
          overview: "Pizzeria Du de Cope offers an enchanting dining experience in the heart of romantic Verona, just steps from the famous Arena. This intimate restaurant specializes in traditional Venetian cuisine with comprehensive gluten-free options, making it perfect for couples seeking a romantic meal without dietary compromises. The cozy atmosphere, candlelit tables, and expert preparation of gluten-free dishes have made it a favorite among both locals and visitors to the city of Romeo and Juliet.",
          menuHighlights: [
            "🍕 Pizza Margherita con Mozzarella di Bufala (GF)",
            "🍝 Risotto all'Amarone (with local Amarone wine - GF)",
            "🥩 Brasato al Barolo with GF polenta",
            "🐟 Baccalà alla Vicentina (GF preparation)",
            "🍷 Extensive Veneto wine selection",
            "🍮 Tiramisù della Casa (house tiramisu - GF)"
          ],
          proTip: "Book a table near the window for views of the historic center, and ask about wine pairings with Amarone and Valpolicella",
          icon: "🍕",
          featured: true
        }
      ]
    },
    {
      name: "Turin (Torino)",
      restaurants: [
        {
          name: "🍽️ C'era Una Volta – Traditional Piedmontese Gluten-Free",
          locations: "City center near Palazzo Reale",
          address: "Corso Vittorio Emanuele II 41, 10123 Torino TO, Italy",
          hours: "Tue–Sat: 12:30PM – 2:30PM, 7:30PM – 10:30PM, Sun: 12:30PM – 2:30PM (Closed Mondays)",
          phone: "+39 011 655498",
          website: "www.ceraunavolta-torino.it",
          directionsUrl: "https://www.google.com/maps/place/C'era+Una+Volta/@45.0703,7.6869,17z/data=!3m1!4b1!4m6!3m5!1s0x47886d126e345678:0x9a0b1c2d3e4f5670!8m2!3d45.0703!4d7.6869!16s%2Fg%2F11m8n9o0p2",
          specialty: "Authentic Piedmontese cuisine with comprehensive GF options",
          overview: "C'era Una Volta ('Once Upon a Time') is Turin's premier destination for traditional Piedmontese cuisine with exceptional gluten-free adaptations. Located in the elegant city center near the Royal Palace, this family-run restaurant has been serving authentic regional specialties for over 30 years. The chef personally ensures that classic dishes like agnolotti, vitello tonnato, and bagna cauda are prepared safely for celiacs using traditional recipes adapted with certified gluten-free ingredients.",
          menuHighlights: [
            "🥟 Agnolotti del Plin (traditional stuffed pasta - GF)",
            "🥩 Vitello Tonnato (veal with tuna sauce - GF)",
            "🫕 Bagna Cauda (warm anchovy dip with GF bread)",
            "🍄 Risotto ai Porcini e Tartufo Bianco (GF)",
            "🥩 Brasato al Barolo (braised beef in Barolo wine - GF)",
            "🍫 Bonet (chocolate pudding - GF version)"
          ],
          proTip: "Visit during truffle season (October-December) for the freshest white truffle dishes, and pair with local Barolo wines",
          icon: "🍽️",
          featured: true
        }
      ]
    },
    {
      name: "Sicily",
      restaurants: [
        {
          name: "🍨 Gelateria Ciccio – Sicilian Granita Paradise",
          locations: "Palermo city center",
          address: "Via del Cassaro 123, 90134 Palermo PA, Italy",
          hours: "Daily: 7:00AM – 11:00PM",
          phone: "+39 091 334 2891",
          website: "www.gelateriaciccio.it",
          directionsUrl: "https://www.google.com/maps/place/Gelateria+Ciccio/@38.1157,13.3615,17z/data=!3m1!4b1!4m6!3m5!1s0x1319ef8ac1234567:0x8b9c0d1e2f3a4567!8m2!3d38.1157!4d13.3615!16s%2Fg%2F11p9q0r1s4",
          specialty: "Traditional Sicilian granita and gluten-free cannoli",
          overview: "Gelateria Ciccio is Palermo's most beloved gelateria, famous for its authentic Sicilian granita and exceptional gluten-free desserts. Located in the heart of Palermo's historic center, this family-run establishment has been perfecting traditional Sicilian frozen treats for three generations. Their gluten-free granita is made with natural ingredients and served with traditional brioche (available in GF), while their gluten-free cannoli are filled fresh to order with authentic ricotta.",
          menuHighlights: [
            "🧊 Granita di Limone (lemon granita - naturally GF)",
            "☕ Granita di Caffè con Panna (coffee granita with cream - GF)",
            "🍓 Granita di Fragola (strawberry granita - GF)",
            "🥐 Brioche senza Glutine (traditional breakfast pairing)",
            "🧀 Cannoli Siciliani (GF shells with fresh ricotta)",
            "🍨 Gelato ai Pistacchi di Bronte (pistachio gelato - GF)"
          ],
          proTip: "Try the granita for breakfast like locals do - paired with warm brioche and enjoyed slowly while people-watching",
          icon: "🍨",
          featured: true
        },
        {
          name: "🍽️ Osteria da Toto – Authentic Sicilian Gluten-Free",
          locations: "Catania historic center",
          address: "Via Pardo 23, 95124 Catania CT, Italy",
          hours: "Mon–Sat: 12:30PM – 3:00PM, 7:30PM – 11:00PM (Closed Sundays)",
          phone: "+39 095 715 3861",
          website: "www.osteriadatoto.com",
          directionsUrl: "https://www.google.com/maps/place/Osteria+da+Toto/@37.5079,15.0830,17z/data=!3m1!4b1!4m6!3m5!1s0x1313e2e5f1234567:0x7c8d9e0f1a2b3456!8m2!3d37.5079!4d15.0830!16s%2Fg%2F11r5s6t7u8",
          specialty: "Traditional Sicilian cuisine with famous GF arancini",
          overview: "Osteria da Toto is a cherished family-run restaurant in Catania's historic center, renowned for its authentic Sicilian cuisine with outstanding gluten-free adaptations. Famous throughout Sicily for their gluten-free arancini (stuffed rice balls), the restaurant has perfected traditional recipes using certified gluten-free ingredients. Located near the famous fish market, they source the freshest local ingredients and prepare classic dishes like caponata, pasta alla norma, and fresh seafood with careful attention to celiac safety.",
          menuHighlights: [
            "🍙 Arancini Siciliani (traditional flavors - all GF)",
            "🍝 Pasta alla Norma (with eggplant and ricotta salata - GF)",
            "🐟 Pesce Spada alla Siciliana (swordfish - GF)",
            "🍆 Caponata (traditional eggplant dish - naturally GF)",
            "🍝 Pasta con le Sarde (sardines and wild fennel - GF)",
            "🍮 Cassata Siciliana (traditional dessert - GF version)"
          ],
          proTip: "Order the mixed arancini platter to try different traditional fillings - all are made gluten-free daily",
          icon: "🍽️",
          featured: true
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-red-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-green-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link to="/countries" className="inline-flex items-center text-gray-700 hover:text-green-600 transition-colors mb-4">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Countries
          </Link>
          <div className="flex items-center space-x-4">
            <div className="text-6xl">🇮🇹</div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Italy</h1>
              <p className="text-lg text-gray-600">Top Gluten-Free Restaurants</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-green-600/10 to-red-600/10">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-green-100 text-green-800 border-green-200">
            <Flag className="h-4 w-4 mr-2" />
            AIC Certified Restaurants
          </Badge>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-red-600 bg-clip-text text-transparent">
            Discover Italy's Best Gluten-Free Dining
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From authentic Neapolitan pizza to creamy risottos, Italy offers incredible gluten-free experiences. 
            Most restaurants participate in Italy's celiac association program (AIC).
          </p>
        </div>
      </section>

      {/* Key Notes */}
      <section className="py-8 bg-yellow-50 border-y border-yellow-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-bold text-yellow-800 mb-4 flex items-center">
              <Star className="h-5 w-5 mr-2" />
              Important Notes
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-yellow-700">
              <div className="flex items-start space-x-2">
                <Badge className="bg-yellow-200 text-yellow-800">AIC</Badge>
                <span>Most listed restaurants participate in Italy's celiac association program</span>
              </div>
              <div className="flex items-start space-x-2">
                <Phone className="h-4 w-4 mt-1 text-yellow-600" />
                <span>Always reserve ahead (especially in Rome/Florence)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities and Restaurants */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {cities.map((city, cityIndex) => (
              <div key={city.name} className={`animate-fade-in`} style={{animationDelay: `${cityIndex * 0.1}s`}}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <MapPin className="h-6 w-6 mr-2 text-green-600" />
                  {city.name}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {city.restaurants.map((restaurant, index) => (
                    <Card key={restaurant.name} className={`hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md animate-fade-in ${restaurant.featured ? 'md:col-span-2 lg:col-span-3' : ''}`} style={{animationDelay: `${(cityIndex * 0.1) + (index * 0.05)}s`}}>
                      <CardHeader className="pb-3">
                        <CardTitle className={`${restaurant.featured ? 'text-xl' : 'text-lg'} flex items-start justify-between`}>
                          <span>{restaurant.name}</span>
                          {!restaurant.featured && <span className="text-2xl ml-2">{restaurant.icon}</span>}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        {restaurant.featured ? (
                          <div className="space-y-4">
                            {/* Address */}
                            <div className="flex items-start space-x-2">
                              <MapPin className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-600">{restaurant.address}</span>
                            </div>
                            
                            {/* Hours */}
                            <div className="flex items-start space-x-2">
                              <Clock className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{restaurant.hours}</span>
                            </div>
                            
                            {/* Website & Phone */}
                            <div className="flex flex-wrap gap-4">
                              <div className="flex items-center space-x-2">
                                <Globe className="h-4 w-4 text-blue-500" />
                                <span className="text-sm text-blue-600">{restaurant.website}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Phone className="h-4 w-4 text-green-500" />
                                <span className="text-sm text-green-600">{restaurant.phone}</span>
                              </div>
                            </div>
                            
                            {/* Directions Button */}
                            {restaurant.directionsUrl && (
                              <div className="pt-2">
                                <Button 
                                  onClick={() => window.open(restaurant.directionsUrl, '_blank')}
                                  className="bg-blue-600 hover:bg-blue-700 text-white"
                                  size="sm"
                                >
                                  <Navigation className="h-4 w-4 mr-2" />
                                  Get Directions
                                </Button>
                              </div>
                            )}
                            
                            {/* Overview */}
                            <div className="bg-green-50 p-4 rounded-lg">
                              <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                                <CheckCircle className="h-4 w-4 mr-2" />
                                Overview
                              </h4>
                              <p className="text-sm text-green-700">{restaurant.overview}</p>
                            </div>
                            
                            {/* Menu Highlights */}
                            <div className="bg-orange-50 p-4 rounded-lg">
                              <h4 className="font-semibold text-orange-800 mb-3 flex items-center">
                                📷 Menu Highlights
                              </h4>
                              <div className="space-y-1">
                                {restaurant.menuHighlights?.map((item, idx) => (
                                  <div key={idx} className="text-sm text-orange-700">{item}</div>
                                ))}
                              </div>
                            </div>
                            
                            {/* Pro Tip */}
                            {restaurant.proTip && (
                              <div className="bg-blue-50 p-3 rounded-lg">
                                <p className="text-sm text-blue-700">
                                  <strong>💡 Pro Tip:</strong> {restaurant.proTip}
                                </p>
                              </div>
                            )}
                          </div>
                        ) : (
                          <>
                            <div className="flex items-start space-x-2">
                              <MapPin className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-600">{restaurant.locations}</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <Utensils className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{restaurant.specialty}</span>
                            </div>
                            {restaurant.proTip && (
                              <div className="bg-blue-50 p-3 rounded-lg">
                                <p className="text-sm text-blue-700">
                                  <strong>💡 Pro Tip:</strong> {restaurant.proTip}
                                </p>
                              </div>
                            )}
                            {restaurant.unique && (
                              <div className="bg-purple-50 p-3 rounded-lg">
                                <p className="text-sm text-purple-700">
                                  <strong>🌟 Unique:</strong> {restaurant.unique}
                                </p>
                              </div>
                            )}
                            {restaurant.special && (
                              <div className="bg-red-50 p-3 rounded-lg">
                                <p className="text-sm text-red-700">
                                  <strong>🔥 Special:</strong> {restaurant.special}
                                </p>
                              </div>
                            )}
                          </>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Planning Your Italian Adventure?</h2>
          <p className="text-xl mb-8 opacity-90">Explore more gluten-free destinations around the world</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/countries">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Explore More Countries
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              Add a Restaurant
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Italy;
