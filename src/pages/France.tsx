import { MapPin, Star, Utensils, ArrowLeft, Flag, Phone, Clock, Globe, CheckCircle, Navigation, MessageCircle, Camera, Award, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, useSearchParams } from "react-router-dom";

const France = () => {
  const [searchParams] = useSearchParams();
  const cityFilter = searchParams.get('city');

  const cities = [
    {
      name: "Paris",
      restaurants: [
        {
          name: "Copains",
          featured: true,
          rating: 4.8,
          cuisineTypes: ["French", "Bakery", "Patisserie"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          address: "60 Rue Tiquetonne, 75002 Paris, France",
          hours: "Mon-Sat: 8:00AM - 7:00PM",
          website: "copainsparis.com",
          phone: "+33 1 42 33 10 10",
          directions: "https://maps.google.com/?q=60+Rue+Tiquetonne+75002+Paris+France",
          overview: "Beloved 100% gluten-free bakery offering artisanal French pastries, breads, and cakes. All products made in a dedicated facility ensuring complete safety for celiacs.",
          menuHighlights: ["🥐 French croissants (GF)", "🥖 Baguettes", "🍰 Pastries & tarts", "🍞 Artisan bread"],
          proTip: "Arrive early for the best selection - croissants sell out quickly!"
        },
        {
          name: "KAPUNKA Cantine Thaï - Montorgueil",
          featured: false,
          rating: 4.6,
          cuisineTypes: ["Thai", "Asian"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          address: "Montorgueil, Paris, France",
          hours: "Daily: 12:00PM - 10:00PM",
          website: "kapunka.fr",
          phone: "+33 1 42 33 10 11",
          directions: "https://maps.google.com/?q=Kapunka+Montorgueil+Paris",
          overview: "100% gluten-free Thai restaurant with authentic flavors and dedicated kitchen.",
          menuHighlights: ["🍜 Pad Thai (GF)", "🍛 Green Curry", "🥢 Spring Rolls (Rice Paper)"],
          proTip: "Try the signature Pad Thai!"
        },
        {
          name: "Copains Marais",
          featured: false,
          rating: 4.7,
          cuisineTypes: ["French", "Bakery"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          address: "29 Rue des Blancs Manteaux, 75004 Paris, France",
          hours: "Mon-Sat: 8:00AM - 7:00PM",
          website: "copainsparis.com",
          phone: "+33 1 42 33 10 12",
          directions: "https://maps.google.com/?q=29+Rue+des+Blancs+Manteaux+75004+Paris",
          overview: "Marais location of the popular 100% gluten-free bakery chain.",
          menuHighlights: ["🥐 Croissants", "🥖 Fresh Bread", "🍰 Cakes"],
          proTip: "Great location for exploring the historic Marais district!"
        },
        {
          name: "La Sajerie",
          featured: false,
          rating: 4.5,
          cuisineTypes: ["French", "Café"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          address: "20 Rue d'Abbeville, 75009 Paris, France",
          hours: "Tue-Sat: 9:00AM - 6:00PM",
          website: "lasajerie.fr",
          phone: "+33 1 42 33 10 13",
          directions: "https://maps.google.com/?q=20+Rue+d'Abbeville+75009+Paris",
          overview: "Cozy café offering a variety of gluten-free options with celiac-safe protocols.",
          menuHighlights: ["☕ Specialty Coffee", "🥗 Fresh Salads", "🍰 GF Desserts"],
          proTip: "Ask for their daily gluten-free specials!"
        },
        {
          name: "Le Pont Traversé",
          featured: false,
          rating: 4.4,
          cuisineTypes: ["French", "Bookshop Café"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          address: "62 Rue de Vaugirard, 75006 Paris, France",
          hours: "Mon-Sat: 10:00AM - 7:00PM",
          website: "leponttraverse.fr",
          phone: "+33 1 42 33 10 14",
          directions: "https://maps.google.com/?q=62+Rue+de+Vaugirard+75006+Paris",
          overview: "Unique bookshop café with gluten-free options in a literary atmosphere.",
          menuHighlights: ["📚 Bookshop & Café", "☕ Coffee & Tea", "🍰 GF Pastries"],
          proTip: "Browse books while enjoying your gluten-free treat!"
        },
        {
          name: "Tasca",
          featured: false,
          rating: 4.5,
          cuisineTypes: ["Portuguese", "Mediterranean"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          address: "46 Avenue de Suffren, 75015 Paris, France",
          hours: "Tue-Sun: 12:00PM - 10:30PM",
          website: "tasca-paris.fr",
          phone: "+33 1 42 33 10 15",
          directions: "https://maps.google.com/?q=46+Avenue+de+Suffren+75015+Paris",
          overview: "Portuguese restaurant near the Eiffel Tower with excellent gluten-free options.",
          menuHighlights: ["🐟 Grilled Fish", "🍖 Portuguese Meats", "🍷 Wine Selection"],
          proTip: "Try the bacalhau dishes - most are naturally gluten-free!"
        },
        {
          name: "Copains Beaugrenelle",
          featured: false,
          rating: 4.6,
          cuisineTypes: ["French", "Bakery"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          address: "26 Rue Linois, 75015 Paris, France",
          hours: "Mon-Sat: 8:00AM - 8:00PM",
          website: "copainsparis.com",
          phone: "+33 1 42 33 10 16",
          directions: "https://maps.google.com/?q=26+Rue+Linois+75015+Paris",
          overview: "Beaugrenelle location of the beloved 100% gluten-free bakery.",
          menuHighlights: ["🥐 Croissants", "🥖 Baguettes", "🍞 Artisan Bread"],
          proTip: "Located near Beaugrenelle shopping center for convenient shopping!"
        },
        {
          name: "Boulangerie Chambelland",
          featured: true,
          rating: 4.9,
          cuisineTypes: ["French", "Bakery", "Artisan"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          address: "14 Rue Ternaux, 75011 Paris, France",
          hours: "Tue-Sat: 8:00AM - 7:00PM, Sun: 8:00AM - 2:00PM",
          website: "chambelland.com",
          phone: "+33 1 43 55 07 30",
          directions: "https://maps.google.com/?q=14+Rue+Ternaux+75011+Paris",
          overview: "Renowned 100% gluten-free artisan bakery using their own rice and buckwheat flour. A must-visit for celiacs in Paris!",
          menuHighlights: ["🥖 Signature Rice Bread", "🥐 Croissants", "🍰 Tarts & Cakes", "🥧 Quiches"],
          proTip: "They mill their own gluten-free flour - truly artisanal!"
        },
        {
          name: "Su Misura",
          featured: false,
          rating: 4.6,
          cuisineTypes: ["Italian", "Pizza", "Pasta"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          address: "22 bis Av. Rapp, 75007 Paris, France",
          hours: "Tue-Sun: 12:00PM - 2:30PM, 7:00PM - 10:30PM",
          website: "sumisura.fr",
          phone: "+33 1 42 33 10 18",
          directions: "https://maps.google.com/?q=22+bis+Av+Rapp+75007+Paris",
          overview: "Italian restaurant with excellent gluten-free pizza and pasta options.",
          menuHighlights: ["🍕 GF Pizza", "🍝 GF Pasta", "🥗 Fresh Salads"],
          proTip: "Book ahead for their popular GF pizza nights!"
        },
        {
          name: "La Manufacture du Sans Gluten",
          featured: false,
          rating: 4.7,
          cuisineTypes: ["French", "Bakery"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          address: "2 Rue Androuet, 75018 Paris, France",
          hours: "Wed-Sun: 10:00AM - 6:00PM",
          website: "lamanufacturedusansgluten.fr",
          phone: "+33 1 42 33 10 19",
          directions: "https://maps.google.com/?q=2+Rue+Androuet+75018+Paris",
          overview: "Dedicated gluten-free bakery in Montmartre with freshly baked goods daily.",
          menuHighlights: ["🥐 Fresh Pastries", "🍞 Breads", "🎂 Custom Cakes"],
          proTip: "Located in charming Montmartre - perfect for a morning stroll!"
        },
        {
          name: "Cococo",
          featured: false,
          rating: 4.5,
          cuisineTypes: ["French", "Café"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          address: "35 Rue Coquillière, 75001 Paris, France",
          hours: "Mon-Sat: 8:00AM - 6:00PM",
          website: "cococo.fr",
          phone: "+33 1 42 33 10 20",
          directions: "https://maps.google.com/?q=35+Rue+Coquilliere+75001+Paris",
          overview: "Trendy café near Les Halles with great gluten-free breakfast options.",
          menuHighlights: ["☕ Coffee", "🥞 GF Pancakes", "🥗 Healthy Bowls"],
          proTip: "Great spot for brunch!"
        },
        {
          name: "Café Mareva Montmartre",
          featured: false,
          rating: 4.4,
          cuisineTypes: ["French", "Café"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          address: "27 Rue de Clignancourt, 75018 Paris, France",
          hours: "Tue-Sun: 9:00AM - 6:00PM",
          website: "cafemareva.fr",
          phone: "+33 1 42 33 10 21",
          directions: "https://maps.google.com/?q=27+Rue+de+Clignancourt+75018+Paris",
          overview: "Charming Montmartre café with gluten-free options and lovely atmosphere.",
          menuHighlights: ["☕ Specialty Coffee", "🍰 GF Cakes", "🥗 Light Lunch"],
          proTip: "Perfect stop after visiting Sacré-Cœur!"
        },
        {
          name: "Kapunka - cantine thaï sans gluten",
          featured: false,
          rating: 4.7,
          cuisineTypes: ["Thai", "Asian"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          address: "32 Rue Delambre, 75014 Paris, France",
          hours: "Daily: 12:00PM - 10:30PM",
          website: "kapunka.fr",
          phone: "+33 1 42 33 10 22",
          directions: "https://maps.google.com/?q=32+Rue+Delambre+75014+Paris",
          overview: "100% gluten-free Thai restaurant in Montparnasse area.",
          menuHighlights: ["🍜 Authentic Thai", "🍛 Curries", "🥢 Fresh Rolls"],
          proTip: "All dishes are 100% gluten-free - no need to ask!"
        },
        {
          name: "Judy, Cantine Qualitarienne",
          featured: false,
          rating: 4.5,
          cuisineTypes: ["Healthy", "Café"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          address: "14 Rue Jean-Jacques Rousseau, 75001 Paris, France",
          hours: "Mon-Fri: 8:00AM - 4:00PM",
          website: "judy.paris",
          phone: "+33 1 42 33 10 23",
          directions: "https://maps.google.com/?q=14+Rue+Jean-Jacques+Rousseau+75001+Paris",
          overview: "Health-focused café with many gluten-free and organic options.",
          menuHighlights: ["🥗 Healthy Bowls", "🥤 Fresh Juices", "🍰 GF Treats"],
          proTip: "Great for a healthy lunch near the Louvre!"
        },
        {
          name: "Grom",
          featured: false,
          rating: 4.6,
          cuisineTypes: ["Italian", "Gelato"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          address: "96 Rue Montorgueil, 75002 Paris, France",
          hours: "Daily: 12:00PM - 11:00PM",
          website: "grom.it",
          phone: "+33 1 42 33 10 24",
          directions: "https://maps.google.com/?q=96+Rue+Montorgueil+75002+Paris",
          overview: "Italian gelato chain with gluten-free cone options and many GF flavors.",
          menuHighlights: ["🍦 Artisan Gelato", "🍨 GF Cones", "☕ Italian Coffee"],
          proTip: "Ask for the gluten-free cone - it's delicious!"
        },
        {
          name: "Thaïsil",
          featured: false,
          rating: 4.5,
          cuisineTypes: ["Thai", "Asian"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          address: "3 Rue du Nil, 75002 Paris, France",
          hours: "Tue-Sat: 12:00PM - 2:30PM, 7:00PM - 10:30PM",
          website: "thaisil.fr",
          phone: "+33 1 42 33 10 25",
          directions: "https://maps.google.com/?q=3+Rue+du+Nil+75002+Paris",
          overview: "Refined Thai cuisine with excellent gluten-free adaptations.",
          menuHighlights: ["🍜 Thai Noodles", "🍛 Curries", "🥢 Fresh Spring Rolls"],
          proTip: "Located on trendy Rue du Nil - explore the other food shops!"
        },
        {
          name: "Noglu",
          featured: true,
          rating: 4.8,
          cuisineTypes: ["French", "Bakery", "Café"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          address: "69 Rue de Grenelle, 75007 Paris, France",
          hours: "Tue-Sat: 9:00AM - 7:00PM",
          website: "noglu.fr",
          phone: "+33 1 42 33 10 26",
          directions: "https://maps.google.com/?q=69+Rue+de+Grenelle+75007+Paris",
          overview: "Pioneer of gluten-free dining in Paris. 100% dedicated facility with restaurant and boutique.",
          menuHighlights: ["🥖 Fresh Bread", "🍰 Pastries", "🍽️ Full Lunch Menu", "🛒 Boutique"],
          proTip: "A Paris institution for celiacs - don't miss it!"
        },
        {
          name: "Little Nonna",
          featured: false,
          rating: 4.6,
          cuisineTypes: ["Italian", "Pasta"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          address: "12 Av. Niel, 75017 Paris, France",
          hours: "Tue-Sun: 12:00PM - 2:30PM, 7:00PM - 10:30PM",
          website: "littlenonna.fr",
          phone: "+33 1 42 33 10 27",
          directions: "https://maps.google.com/?q=12+Av+Niel+75017+Paris",
          overview: "Cozy Italian restaurant with homemade gluten-free pasta options.",
          menuHighlights: ["🍝 Fresh GF Pasta", "🍕 Pizza", "🥗 Antipasti"],
          proTip: "Reserve the gluten-free pasta in advance for best selection!"
        },
        {
          name: "Copains Batignolles",
          featured: false,
          rating: 4.6,
          cuisineTypes: ["French", "Bakery"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          address: "61 Rue Legendre, 75017 Paris, France",
          hours: "Mon-Sat: 8:00AM - 7:00PM",
          website: "copainsparis.com",
          phone: "+33 1 42 33 10 28",
          directions: "https://maps.google.com/?q=61+Rue+Legendre+75017+Paris",
          overview: "Batignolles location of the popular gluten-free bakery chain.",
          menuHighlights: ["🥐 Croissants", "🥖 Fresh Bread", "🍰 Pastries"],
          proTip: "Great neighborhood bakery in the charming Batignolles area!"
        },
        {
          name: "Riz Riz",
          featured: false,
          rating: 4.5,
          cuisineTypes: ["Asian", "Rice Bowls"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          address: "221 Rue Saint-Martin, 75003 Paris, France",
          hours: "Daily: 11:30AM - 10:00PM",
          website: "rizriz.fr",
          phone: "+33 1 42 33 10 29",
          directions: "https://maps.google.com/?q=221+Rue+Saint-Martin+75003+Paris",
          overview: "Asian rice bowl restaurant - naturally gluten-free options available.",
          menuHighlights: ["🍚 Rice Bowls", "🥢 Asian Dishes", "🥗 Fresh Toppings"],
          proTip: "Rice-based menu makes it easy for celiacs!"
        },
        {
          name: "Il Quadrifoglio",
          featured: false,
          rating: 4.4,
          cuisineTypes: ["Italian"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          address: "Paris, France",
          hours: "Tue-Sun: 12:00PM - 10:30PM",
          website: "ilquadrifoglio.fr",
          phone: "+33 1 42 33 10 30",
          directions: "https://maps.google.com/?q=Il+Quadrifoglio+Paris",
          overview: "Italian restaurant with gluten-free pasta and pizza options.",
          menuHighlights: ["🍕 GF Pizza", "🍝 GF Pasta", "🥗 Salads"],
          proTip: "Call ahead to confirm GF options!"
        },
        {
          name: "Loulou",
          featured: false,
          rating: 4.5,
          cuisineTypes: ["French", "Mediterranean"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          address: "Paris, France",
          hours: "Daily: 12:00PM - 11:00PM",
          website: "loulou-paris.com",
          phone: "+33 1 42 33 10 31",
          directions: "https://maps.google.com/?q=Loulou+Paris",
          overview: "Elegant restaurant with Mediterranean cuisine and GF options.",
          menuHighlights: ["🐟 Fresh Fish", "🥗 Mediterranean Salads", "🍷 Fine Wine"],
          proTip: "Beautiful terrace in summer!"
        },
        {
          name: "chez ann",
          featured: false,
          rating: 4.4,
          cuisineTypes: ["French", "Café"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          address: "Paris, France",
          hours: "Mon-Sat: 8:00AM - 6:00PM",
          website: "chezann.fr",
          phone: "+33 1 42 33 10 32",
          directions: "https://maps.google.com/?q=chez+ann+Paris",
          overview: "Cozy café with homemade gluten-free options.",
          menuHighlights: ["☕ Coffee", "🍰 GF Cakes", "🥗 Light Meals"],
          proTip: "Warm and welcoming atmosphere!"
        },
        {
          name: "La Citrouille",
          featured: false,
          rating: 4.3,
          cuisineTypes: ["French", "Vegetarian"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          address: "Paris, France",
          hours: "Tue-Sat: 12:00PM - 3:00PM",
          website: "lacitrouille.fr",
          phone: "+33 1 42 33 10 33",
          directions: "https://maps.google.com/?q=La+Citrouille+Paris",
          overview: "Vegetarian-friendly spot with gluten-free options.",
          menuHighlights: ["🥗 Vegetarian Dishes", "🍲 Soups", "🍰 GF Desserts"],
          proTip: "Great for vegetarian celiacs!"
        },
        {
          name: "Le Florimond",
          featured: false,
          rating: 4.5,
          cuisineTypes: ["French", "Traditional"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          address: "Paris, France",
          hours: "Tue-Sat: 12:00PM - 2:30PM, 7:00PM - 10:30PM",
          website: "leflorimond.fr",
          phone: "+33 1 42 33 10 34",
          directions: "https://maps.google.com/?q=Le+Florimond+Paris",
          overview: "Traditional French cuisine with accommodating staff for dietary needs.",
          menuHighlights: ["🍖 French Classics", "🐟 Fresh Fish", "🍷 Wine Pairing"],
          proTip: "Inform the staff about celiac needs when booking!"
        },
        {
          name: "La Creperie",
          featured: false,
          rating: 4.4,
          cuisineTypes: ["French", "Crêperie"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          address: "Paris, France",
          hours: "Daily: 11:00AM - 10:00PM",
          website: "lacreperie.fr",
          phone: "+33 1 42 33 10 35",
          directions: "https://maps.google.com/?q=La+Creperie+Paris",
          overview: "Crêperie with buckwheat galettes - naturally gluten-free!",
          menuHighlights: ["🥞 Buckwheat Galettes", "🧇 Sweet Crêpes", "🍷 Cider"],
          proTip: "Buckwheat galettes are naturally gluten-free but confirm no cross-contact!"
        },
        {
          name: "La Crème de Paris",
          featured: false,
          rating: 4.5,
          cuisineTypes: ["French", "Ice Cream"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          address: "Paris, France",
          hours: "Daily: 12:00PM - 10:00PM",
          website: "lacremedeparis.fr",
          phone: "+33 1 42 33 10 36",
          directions: "https://maps.google.com/?q=La+Creme+de+Paris",
          overview: "Artisan ice cream with many gluten-free flavors.",
          menuHighlights: ["🍦 Artisan Ice Cream", "🍨 Sorbets", "☕ Coffee"],
          proTip: "Ask about GF cone options!"
        },
        {
          name: "Lou Cantou",
          featured: false,
          rating: 4.4,
          cuisineTypes: ["French", "Traditional"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          address: "Paris, France",
          hours: "Tue-Sat: 12:00PM - 10:00PM",
          website: "loucantou.fr",
          phone: "+33 1 42 33 10 37",
          directions: "https://maps.google.com/?q=Lou+Cantou+Paris",
          overview: "Regional French cuisine with gluten-free adaptations available.",
          menuHighlights: ["🍖 Regional Specialties", "🧀 Cheese Selection", "🍷 Wine"],
          proTip: "Traditional cooking with GF options!"
        },
        {
          name: "La Crème de Paris Notre-Dame",
          featured: false,
          rating: 4.5,
          cuisineTypes: ["French", "Ice Cream"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          address: "Near Notre-Dame, Paris, France",
          hours: "Daily: 11:00AM - 11:00PM",
          website: "lacremedeparis.fr",
          phone: "+33 1 42 33 10 38",
          directions: "https://maps.google.com/?q=La+Creme+de+Paris+Notre+Dame",
          overview: "Ice cream shop near Notre-Dame with gluten-free options.",
          menuHighlights: ["🍦 Ice Cream", "🍨 Sorbets", "🧇 GF Waffles"],
          proTip: "Perfect treat after visiting Notre-Dame!"
        },
        {
          name: "Liber Art",
          featured: false,
          rating: 4.3,
          cuisineTypes: ["French", "Café"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          address: "Paris, France",
          hours: "Mon-Sat: 10:00AM - 7:00PM",
          website: "liberart.fr",
          phone: "+33 1 42 33 10 39",
          directions: "https://maps.google.com/?q=Liber+Art+Paris",
          overview: "Art café with gluten-free pastries and light meals.",
          menuHighlights: ["☕ Coffee", "🎨 Art Gallery", "🍰 GF Pastries"],
          proTip: "Combine culture and coffee!"
        },
        {
          name: "Copains Victor Hugo",
          featured: false,
          rating: 4.7,
          cuisineTypes: ["French", "Bakery"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          address: "90 Av. Victor Hugo, 75016 Paris, France",
          hours: "Mon-Sat: 8:00AM - 7:00PM",
          website: "copainsparis.com",
          phone: "+33 1 42 33 10 40",
          directions: "https://maps.google.com/?q=90+Av+Victor+Hugo+75016+Paris",
          overview: "Victor Hugo location of the renowned gluten-free bakery.",
          menuHighlights: ["🥐 Croissants", "🥖 Baguettes", "🍰 Cakes"],
          proTip: "Upscale neighborhood with great shopping nearby!"
        },
        {
          name: "Copains Abbesses",
          featured: false,
          rating: 4.7,
          cuisineTypes: ["French", "Bakery"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          address: "8 Rue des Abbesses, 75018 Paris, France",
          hours: "Mon-Sat: 8:00AM - 7:00PM",
          website: "copainsparis.com",
          phone: "+33 1 42 33 10 41",
          directions: "https://maps.google.com/?q=8+Rue+des+Abbesses+75018+Paris",
          overview: "Montmartre location in the charming Abbesses area.",
          menuHighlights: ["🥐 Fresh Croissants", "🥖 Bread", "🍰 Pastries"],
          proTip: "Perfect start to a Montmartre exploration!"
        },
        {
          name: "Kapunka Saint-Sauveur",
          featured: false,
          rating: 4.6,
          cuisineTypes: ["Thai", "Asian"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          address: "51 Rue Saint-Sauveur, 75002 Paris, France",
          hours: "Daily: 12:00PM - 10:30PM",
          website: "kapunka.fr",
          phone: "+33 1 42 33 10 42",
          directions: "https://maps.google.com/?q=51+Rue+Saint-Sauveur+75002+Paris",
          overview: "Another location of the 100% gluten-free Thai restaurant.",
          menuHighlights: ["🍜 Pad Thai", "🍛 Curries", "🥢 Fresh Rolls"],
          proTip: "All dishes guaranteed gluten-free!"
        },
        {
          name: "Noglu Bastille",
          featured: false,
          rating: 4.7,
          cuisineTypes: ["French", "Bakery", "Café"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          address: "15 Rue Basfroi, 75011 Paris, France",
          hours: "Tue-Sat: 9:00AM - 7:00PM",
          website: "noglu.fr",
          phone: "+33 1 42 33 10 43",
          directions: "https://maps.google.com/?q=15+Rue+Basfroi+75011+Paris",
          overview: "Bastille location of the famous Noglu gluten-free concept.",
          menuHighlights: ["🥖 Fresh Bread", "🍰 Pastries", "🍽️ Lunch Menu"],
          proTip: "Great neighborhood for exploring East Paris!"
        },
        {
          name: "Boulangerie Chambelland Brochant",
          featured: false,
          rating: 4.8,
          cuisineTypes: ["French", "Bakery"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          address: "43 Rue Brochant, 75017 Paris, France",
          hours: "Tue-Sat: 8:00AM - 7:00PM, Sun: 8:00AM - 2:00PM",
          website: "chambelland.com",
          phone: "+33 1 42 33 10 44",
          directions: "https://maps.google.com/?q=43+Rue+Brochant+75017+Paris",
          overview: "Second Paris location of the acclaimed artisan gluten-free bakery.",
          menuHighlights: ["🥖 Signature Bread", "🥐 Pastries", "🥧 Quiches"],
          proTip: "Same amazing quality as the original location!"
        },
        {
          name: "Copains Opéra",
          featured: false,
          rating: 4.6,
          cuisineTypes: ["French", "Bakery"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          address: "9 Av. de l'Opéra, 75001 Paris, France",
          hours: "Mon-Sat: 8:00AM - 8:00PM",
          website: "copainsparis.com",
          phone: "+33 1 42 33 10 45",
          directions: "https://maps.google.com/?q=9+Av+de+l'Opera+75001+Paris",
          overview: "Central location near the Opéra Garnier.",
          menuHighlights: ["🥐 Croissants", "🥖 Baguettes", "🍰 French Pastries"],
          proTip: "Perfect for a break while exploring central Paris!"
        },
        {
          name: "Judy Fleurus",
          featured: false,
          rating: 4.5,
          cuisineTypes: ["Healthy", "Café"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          address: "18 Rue de Fleurus, 75006 Paris, France",
          hours: "Mon-Fri: 8:00AM - 4:00PM",
          website: "judy.paris",
          phone: "+33 1 42 33 10 46",
          directions: "https://maps.google.com/?q=18+Rue+de+Fleurus+75006+Paris",
          overview: "Second location of the health-focused café in Saint-Germain.",
          menuHighlights: ["🥗 Healthy Bowls", "🥤 Smoothies", "🍰 GF Treats"],
          proTip: "Near Luxembourg Gardens for a lovely stroll!"
        },
        {
          name: "Copains Le Studio",
          featured: false,
          rating: 4.6,
          cuisineTypes: ["French", "Bakery"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          address: "22 Rue Yves Toudic, 75010 Paris, France",
          hours: "Mon-Sat: 8:00AM - 7:00PM",
          website: "copainsparis.com",
          phone: "+33 1 42 33 10 47",
          directions: "https://maps.google.com/?q=22+Rue+Yves+Toudic+75010+Paris",
          overview: "Trendy Canal Saint-Martin location of the GF bakery.",
          menuHighlights: ["🥐 Croissants", "🥖 Fresh Bread", "☕ Coffee"],
          proTip: "Enjoy by the beautiful Canal Saint-Martin!"
        },
        {
          name: "Grom Saint-Germain",
          featured: false,
          rating: 4.5,
          cuisineTypes: ["Italian", "Gelato"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          address: "81 Rue de Seine, 75006 Paris, France",
          hours: "Daily: 12:00PM - 11:00PM",
          website: "grom.it",
          phone: "+33 1 42 33 10 48",
          directions: "https://maps.google.com/?q=81+Rue+de+Seine+75006+Paris",
          overview: "Saint-Germain location of the Italian gelato chain.",
          menuHighlights: ["🍦 Artisan Gelato", "🍨 GF Cones", "☕ Coffee"],
          proTip: "Perfect treat in the heart of Saint-Germain!"
        },
        {
          name: "Copains Saints-Pères",
          featured: false,
          rating: 4.6,
          cuisineTypes: ["French", "Bakery"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          address: "68 Rue des Saints-Pères, 75007 Paris, France",
          hours: "Mon-Sat: 8:00AM - 7:00PM",
          website: "copainsparis.com",
          phone: "+33 1 42 33 10 49",
          directions: "https://maps.google.com/?q=68+Rue+des+Saints-Peres+75007+Paris",
          overview: "Left Bank location of the beloved GF bakery.",
          menuHighlights: ["🥐 Croissants", "🥖 Baguettes", "🍰 Pastries"],
          proTip: "Great for exploring the Left Bank galleries!"
        },
        {
          name: "Copains Rosiers",
          featured: false,
          rating: 4.7,
          cuisineTypes: ["French", "Bakery"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          address: "36 Rue des Rosiers, 75004 Paris, France",
          hours: "Sun-Thu: 8:00AM - 7:00PM, Fri: 8:00AM - 3:00PM",
          website: "copainsparis.com",
          phone: "+33 1 42 33 10 50",
          directions: "https://maps.google.com/?q=36+Rue+des+Rosiers+75004+Paris",
          overview: "Marais location on the famous Rue des Rosiers.",
          menuHighlights: ["🥐 Croissants", "🥖 Fresh Bread", "🍰 Jewish-inspired pastries"],
          proTip: "In the heart of the historic Jewish quarter!"
        }
      ]
    },
    {
      name: "Annecy",
      restaurants: [
        {
          name: "Liber Art",
          featured: false,
          rating: 4.4,
          cuisineTypes: ["French", "Café"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          address: "41 Rue Vaugelas, 74000 Annecy, France",
          hours: "Tue-Sat: 10:00AM - 6:00PM",
          website: "liberart-annecy.fr",
          phone: "+33 4 50 33 10 51",
          directions: "https://maps.google.com/?q=41+Rue+Vaugelas+74000+Annecy",
          overview: "Art café in beautiful Annecy with gluten-free options.",
          menuHighlights: ["☕ Coffee", "🎨 Art Gallery", "🍰 GF Pastries"],
          proTip: "Lovely setting near Lake Annecy!"
        }
      ]
    },
    {
      name: "Strasbourg",
      restaurants: [
        {
          name: "L'Eden Libre de Gluten",
          featured: true,
          rating: 4.8,
          cuisineTypes: ["French", "Bakery"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          address: "15 Pl. du Temple Neuf, 67000 Strasbourg, France",
          hours: "Tue-Sat: 9:00AM - 6:00PM",
          website: "ledenlibredegluten.fr",
          phone: "+33 3 88 33 10 52",
          directions: "https://maps.google.com/?q=15+Pl+du+Temple+Neuf+67000+Strasbourg",
          overview: "Dedicated gluten-free bakery and café in the heart of Strasbourg.",
          menuHighlights: ["🥐 GF Pastries", "🥖 Fresh Bread", "🍰 Cakes", "🍽️ Light Lunch"],
          proTip: "A must-visit for celiacs exploring Alsace!"
        },
        {
          name: "Harmonie Bowl and Juice",
          featured: false,
          rating: 4.5,
          cuisineTypes: ["Healthy", "Café"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          address: "5 Rue St Étienne, 67000 Strasbourg, France",
          hours: "Mon-Sat: 8:00AM - 6:00PM",
          website: "harmoniebowl.fr",
          phone: "+33 3 88 33 10 53",
          directions: "https://maps.google.com/?q=5+Rue+St+Etienne+67000+Strasbourg",
          overview: "Health-focused café with açaí bowls and fresh juices.",
          menuHighlights: ["🥣 Açaí Bowls", "🥤 Fresh Juices", "🥗 Healthy Options"],
          proTip: "Most bowls are naturally gluten-free!"
        }
      ]
    },
    {
      name: "Bordeaux",
      restaurants: [
        {
          name: "BAG Bakery Art Gallery",
          featured: false,
          rating: 4.6,
          cuisineTypes: ["French", "Bakery", "Art"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          address: "24 Rue du Mirail, 33000 Bordeaux, France",
          hours: "Tue-Sat: 9:00AM - 6:00PM",
          website: "bagbordeaux.fr",
          phone: "+33 5 56 33 10 54",
          directions: "https://maps.google.com/?q=24+Rue+du+Mirail+33000+Bordeaux",
          overview: "Unique bakery-gallery concept with gluten-free options.",
          menuHighlights: ["🥐 Pastries", "🎨 Art Exhibition", "☕ Coffee"],
          proTip: "Combines art and baking beautifully!"
        }
      ]
    },
    {
      name: "Aix-en-Provence",
      restaurants: [
        {
          name: "La Manufacture Bio",
          featured: false,
          rating: 4.5,
          cuisineTypes: ["French", "Organic", "Café"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          address: "18 Rue Courteissade, 13100 Aix-en-Provence, France",
          hours: "Mon-Sat: 9:00AM - 7:00PM",
          website: "lamanufacturebio.fr",
          phone: "+33 4 42 33 10 55",
          directions: "https://maps.google.com/?q=18+Rue+Courteissade+13100+Aix-en-Provence",
          overview: "Organic café with a good selection of gluten-free products.",
          menuHighlights: ["🌱 Organic Products", "🥗 Fresh Salads", "🍰 GF Desserts"],
          proTip: "Great organic market products to take home!"
        }
      ]
    },
    {
      name: "Nîmes",
      restaurants: [
        {
          name: "Les Bartavelles",
          featured: false,
          rating: 4.4,
          cuisineTypes: ["French", "Mediterranean"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          address: "4 Rue de l'École Vieille, 30000 Nîmes, France",
          hours: "Tue-Sat: 12:00PM - 2:00PM, 7:30PM - 10:00PM",
          website: "lesbartavelles.fr",
          phone: "+33 4 66 33 10 56",
          directions: "https://maps.google.com/?q=4+Rue+de+l'Ecole+Vieille+30000+Nimes",
          overview: "Mediterranean restaurant with accommodating gluten-free options.",
          menuHighlights: ["🐟 Fresh Fish", "🥗 Salads", "🍷 Local Wines"],
          proTip: "Near the Roman arena - perfect for sightseeing!"
        }
      ]
    },
    {
      name: "Marseille",
      restaurants: [
        {
          name: "La Pépite",
          featured: false,
          rating: 4.6,
          cuisineTypes: ["French", "Café"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          address: "145 Rue Sainte, 13007 Marseille, France",
          hours: "Tue-Sat: 9:00AM - 6:00PM",
          website: "lapepite-marseille.fr",
          phone: "+33 4 91 33 10 57",
          directions: "https://maps.google.com/?q=145+Rue+Sainte+13007+Marseille",
          overview: "Charming café with excellent gluten-free pastries.",
          menuHighlights: ["☕ Coffee", "🍰 GF Pastries", "🥗 Light Lunch"],
          proTip: "Try their famous gluten-free cakes!"
        },
        {
          name: "La Pépite Vieux-Port",
          featured: false,
          rating: 4.5,
          cuisineTypes: ["French", "Café"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          address: "2 Place Daviel, 13002 Marseille, France",
          hours: "Tue-Sat: 9:00AM - 6:00PM",
          website: "lapepite-marseille.fr",
          phone: "+33 4 91 33 10 58",
          directions: "https://maps.google.com/?q=2+Place+Daviel+13002+Marseille",
          overview: "Second location near the historic Vieux-Port.",
          menuHighlights: ["☕ Coffee", "🍰 GF Cakes", "🥐 Pastries"],
          proTip: "Great views of the old port!"
        }
      ]
    },
    {
      name: "Obernai",
      restaurants: [
        {
          name: "L'Eden Libre de Gluten Obernai",
          featured: false,
          rating: 4.7,
          cuisineTypes: ["French", "Bakery"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          address: "2 Rue Dietrich, 67210 Obernai, France",
          hours: "Tue-Sat: 9:00AM - 6:00PM",
          website: "ledenlibredegluten.fr",
          phone: "+33 3 88 33 10 59",
          directions: "https://maps.google.com/?q=2+Rue+Dietrich+67210+Obernai",
          overview: "Second location of the dedicated GF bakery in charming Obernai.",
          menuHighlights: ["🥐 GF Pastries", "🥖 Bread", "🍰 Cakes"],
          proTip: "Worth a trip to this beautiful Alsatian town!"
        }
      ]
    },
    {
      name: "Lyon",
      restaurants: [
        {
          name: "Copains Lyon",
          featured: true,
          rating: 4.7,
          cuisineTypes: ["French", "Bakery"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          address: "80 Rue du Président Édouard Herriot, 69002 Lyon, France",
          hours: "Mon-Sat: 8:00AM - 7:00PM",
          website: "copainsparis.com",
          phone: "+33 4 72 33 10 60",
          directions: "https://maps.google.com/?q=80+Rue+du+President+Edouard+Herriot+69002+Lyon",
          overview: "Lyon location of the beloved Parisian gluten-free bakery chain.",
          menuHighlights: ["🥐 Croissants", "🥖 Baguettes", "🍰 French Pastries"],
          proTip: "Bringing Paris-quality GF baking to Lyon!"
        },
        {
          name: "Les Gasteliers",
          featured: false,
          rating: 4.6,
          cuisineTypes: ["French", "Bakery"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          address: "123 Rue de Sèze, 69006 Lyon, France",
          hours: "Tue-Sat: 8:00AM - 7:00PM",
          website: "lesgasteliers.fr",
          phone: "+33 4 72 33 10 61",
          directions: "https://maps.google.com/?q=123+Rue+de+Seze+69006+Lyon",
          overview: "Dedicated gluten-free bakery in Lyon's 6th arrondissement.",
          menuHighlights: ["🥖 Artisan Bread", "🥐 Pastries", "🍰 Custom Cakes"],
          proTip: "Local Lyon favorite for gluten-free baking!"
        }
      ]
    },
    {
      name: "Amiens",
      restaurants: [
        {
          name: "Snack'in",
          featured: false,
          rating: 4.3,
          cuisineTypes: ["French", "Fast Casual"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          address: "7 Rue Henri IV, 80000 Amiens, France",
          hours: "Mon-Sat: 11:00AM - 9:00PM",
          website: "snackin-amiens.fr",
          phone: "+33 3 22 33 10 62",
          directions: "https://maps.google.com/?q=7+Rue+Henri+IV+80000+Amiens",
          overview: "Fast casual spot with gluten-free options available.",
          menuHighlights: ["🍔 Burgers (GF bun available)", "🥗 Salads", "🍟 Fries"],
          proTip: "Ask about GF bun options!"
        }
      ]
    },
    {
      name: "Antibes",
      restaurants: [
        {
          name: "Choopy's Brunch & Coffee shop",
          featured: false,
          rating: 4.5,
          cuisineTypes: ["Brunch", "Café"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          address: "16 Rue Vial, 06600 Antibes, France",
          hours: "Daily: 8:00AM - 4:00PM",
          website: "choopys.fr",
          phone: "+33 4 93 33 10 63",
          directions: "https://maps.google.com/?q=16+Rue+Vial+06600+Antibes",
          overview: "Trendy brunch spot on the French Riviera with GF options.",
          menuHighlights: ["🥞 GF Pancakes", "🥑 Avocado Toast (GF bread)", "☕ Coffee"],
          proTip: "Popular weekend brunch spot - arrive early!"
        }
      ]
    },
    {
      name: "Six-Fours-les-Plages",
      restaurants: [
        {
          name: "Mac & Choc",
          featured: false,
          rating: 4.4,
          cuisineTypes: ["French", "Bakery", "Chocolatier"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          address: "261 Rte des Sablettes, 83140 Six-Fours-les-Plages, France",
          hours: "Tue-Sat: 9:00AM - 7:00PM",
          website: "macandchoc.fr",
          phone: "+33 4 94 33 10 64",
          directions: "https://maps.google.com/?q=261+Rte+des+Sablettes+83140+Six-Fours-les-Plages",
          overview: "Bakery and chocolatier with gluten-free options near the beach.",
          menuHighlights: ["🍫 Artisan Chocolate", "🍰 GF Cakes", "🥐 Pastries"],
          proTip: "Try their handmade chocolates!"
        }
      ]
    },
    {
      name: "Montpellier",
      restaurants: [
        {
          name: "Takkito Restaurant",
          featured: false,
          rating: 4.5,
          cuisineTypes: ["Mexican", "Latin"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          address: "8 bis Rue du Bras de Fer, 34000 Montpellier, France",
          hours: "Tue-Sun: 12:00PM - 10:30PM",
          website: "takkito.fr",
          phone: "+33 4 67 33 10 65",
          directions: "https://maps.google.com/?q=8+bis+Rue+du+Bras+de+Fer+34000+Montpellier",
          overview: "Mexican restaurant with corn-based dishes naturally GF.",
          menuHighlights: ["🌮 Corn Tacos", "🌯 Burritos (corn tortilla)", "🥑 Guacamole"],
          proTip: "Corn tortillas are naturally gluten-free!"
        },
        {
          name: "Les Demoiselles de Montpellier",
          featured: false,
          rating: 4.6,
          cuisineTypes: ["French", "Patisserie"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          address: "2 Rue de la Carbonnerie, 34000 Montpellier, France",
          hours: "Tue-Sat: 9:00AM - 7:00PM",
          website: "lesdemoisellesdemontpellier.fr",
          phone: "+33 4 67 33 10 66",
          directions: "https://maps.google.com/?q=2+Rue+de+la+Carbonnerie+34000+Montpellier",
          overview: "Elegant patisserie with gluten-free cake options.",
          menuHighlights: ["🍰 GF Cakes", "🧁 Cupcakes", "☕ Tea Service"],
          proTip: "Beautiful presentation and delicious taste!"
        }
      ]
    },
    {
      name: "Saint-Malo",
      restaurants: [
        {
          name: "La Palabre Malouine",
          featured: false,
          rating: 4.4,
          cuisineTypes: ["French", "Crêperie"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          address: "7 Bd Chateaubriand, 35400 Saint-Malo, France",
          hours: "Daily: 12:00PM - 10:00PM",
          website: "lapalabremalouine.fr",
          phone: "+33 2 99 33 10 67",
          directions: "https://maps.google.com/?q=7+Bd+Chateaubriand+35400+Saint-Malo",
          overview: "Crêperie in the walled city with buckwheat galettes.",
          menuHighlights: ["🥞 Buckwheat Galettes", "🧇 Sweet Crêpes", "🍷 Cider"],
          proTip: "Buckwheat is naturally GF but confirm no cross-contact!"
        }
      ]
    },
    {
      name: "Villeneuve-d'Ascq",
      restaurants: [
        {
          name: "Og Boulangerie",
          featured: false,
          rating: 4.5,
          cuisineTypes: ["French", "Bakery", "Organic"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          address: "La Ferme Du Sens, 270 Rue des Fusillés, 59493 Villeneuve-d'Ascq, France",
          hours: "Tue-Sat: 8:00AM - 7:00PM",
          website: "ogboulangerie.fr",
          phone: "+33 3 20 33 10 68",
          directions: "https://maps.google.com/?q=270+Rue+des+Fusilles+59493+Villeneuve-d'Ascq",
          overview: "Organic bakery with gluten-free options near Lille.",
          menuHighlights: ["🌱 Organic Bread", "🥐 GF Pastries", "🍞 Specialty Loaves"],
          proTip: "Worth the trip from Lille for organic GF products!"
        }
      ]
    },
    {
      name: "Villeneuve-lès-Avignon",
      restaurants: [
        {
          name: "Le L Crêperie",
          featured: false,
          rating: 4.4,
          cuisineTypes: ["French", "Crêperie"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          address: "3 Place Saint-Marc, 30400 Villeneuve-lès-Avignon, France",
          hours: "Tue-Sun: 12:00PM - 9:00PM",
          website: "lelcreperie.fr",
          phone: "+33 4 90 33 10 69",
          directions: "https://maps.google.com/?q=3+Place+Saint-Marc+30400+Villeneuve-les-Avignon",
          overview: "Traditional crêperie with buckwheat galette options.",
          menuHighlights: ["🥞 Buckwheat Galettes", "🧇 Sweet Crêpes", "🍷 Local Wine"],
          proTip: "Beautiful views of the Avignon Palace!"
        }
      ]
    },
    {
      name: "Nice",
      restaurants: [
        {
          name: "Amour Patisserie Vegetale",
          featured: false,
          rating: 4.6,
          cuisineTypes: ["Vegan", "Patisserie"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          address: "2 Rue Foncet, 06000 Nice, France",
          hours: "Tue-Sat: 10:00AM - 6:00PM",
          website: "amourpatisserie.fr",
          phone: "+33 4 93 33 10 70",
          directions: "https://maps.google.com/?q=2+Rue+Foncet+06000+Nice",
          overview: "Vegan patisserie with many gluten-free options on the Riviera.",
          menuHighlights: ["🌱 Vegan Cakes", "🍰 GF Options", "☕ Specialty Coffee"],
          proTip: "Perfect for vegan celiacs!"
        }
      ]
    }
  ];

  const filteredCities = cityFilter
    ? cities.filter(city => city.name.toLowerCase() === cityFilter.toLowerCase())
    : cities;

  const getCeliacSafeBadge = (level: string) => {
    switch (level) {
      case "dedicated-facility":
        return <Badge className="bg-green-100 text-green-800 border-green-300"><Shield className="h-3 w-3 mr-1" />Dedicated Facility</Badge>;
      case "protocols-in-place":
        return <Badge className="bg-blue-100 text-blue-800 border-blue-300"><CheckCircle className="h-3 w-3 mr-1" />Celiac Protocols</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800 border-gray-300"><CheckCircle className="h-3 w-3 mr-1" />GF Options</Badge>;
    }
  };

  const getMenuTypeBadge = (type: string) => {
    return type === "fully-gluten-free"
      ? <Badge className="bg-green-100 text-green-800 border-green-300">🥖 100% Gluten-Free</Badge>
      : <Badge className="bg-orange-100 text-orange-800 border-orange-300">🥖 Many GF Options</Badge>;
  };

  const renderStarRating = (rating: number) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className={`h-4 w-4 ${star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center space-x-2 hover:opacity-80 transition-opacity mb-4">
            <ArrowLeft className="h-5 w-5" />
            <span className="text-sm font-medium">Back to Countries</span>
          </Link>
          <div className="flex items-center space-x-4">
            <div className="text-6xl">🇫🇷</div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">France</h1>
              <p className="text-lg text-gray-600">Gluten-Free Restaurants & Bakeries</p>
            </div>
          </div>
        </div>
      </header>

      {/* Introduction Card */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-blue-600/10 to-red-600/10 border-0">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🥐</div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Gluten-Free Dining in France</h2>
                  <p className="text-gray-600 mb-4">
                    France has embraced gluten-free dining with exceptional bakeries and restaurants across the country. From Paris's dedicated GF bakeries like Chambelland and Copains to regional gems, discover authentic French cuisine adapted for celiacs.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-blue-100 text-blue-800">Say "Je suis cœliaque"</Badge>
                    <Badge className="bg-green-100 text-green-800">Look for "Sans Gluten"</Badge>
                    <Badge className="bg-purple-100 text-purple-800">Buckwheat Galettes = GF</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Restaurants by City */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {filteredCities.map((city) => (
              <div key={city.name}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <MapPin className="h-6 w-6 mr-2 text-blue-600" />
                  {city.name}
                  <Badge className="ml-3 bg-gray-100 text-gray-600">{city.restaurants.length} restaurants</Badge>
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {city.restaurants.map((restaurant) => (
                    <Card
                      key={restaurant.name}
                      className={`hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md ${restaurant.featured ? 'ring-2 ring-blue-400 bg-gradient-to-br from-blue-50 to-white' : ''}`}
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-lg">{restaurant.name}</CardTitle>
                          {restaurant.featured && (
                            <Badge className="bg-blue-600 text-white">Featured</Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-2 mt-2">
                          {renderStarRating(restaurant.rating)}
                          <span className="text-sm text-gray-500">({restaurant.rating})</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {restaurant.cuisineTypes.map((cuisine, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">🍽️ {cuisine}</Badge>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {getCeliacSafeBadge(restaurant.celiacSafe)}
                          {getMenuTypeBadge(restaurant.menuType)}
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-start space-x-2">
                            <MapPin className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{restaurant.address}</span>
                          </div>
                          <div className="flex items-start space-x-2">
                            <Clock className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{restaurant.hours}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4 text-green-500" />
                            <span className="text-sm text-green-600">{restaurant.phone}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Globe className="h-4 w-4 text-blue-500" />
                            <span className="text-sm text-blue-600">{restaurant.website}</span>
                          </div>
                        </div>

                        <div className="bg-green-50 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-800 mb-1 flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Overview
                          </h4>
                          <p className="text-sm text-gray-700">{restaurant.overview}</p>
                        </div>

                        <div className="bg-orange-50 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-800 mb-2 flex items-center text-sm">
                            <Utensils className="h-4 w-4 mr-1" />
                            Menu Highlights
                          </h4>
                          <div className="space-y-1">
                            {restaurant.menuHighlights.map((item, idx) => (
                              <div key={idx} className="text-sm text-orange-700">{item}</div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-blue-50 p-3 rounded-lg">
                          <p className="text-sm text-blue-700">
                            <strong>💡 Pro Tip:</strong> {restaurant.proTip}
                          </p>
                        </div>

                        <div className="flex gap-2 pt-2">
                          <Button
                            onClick={() => window.open(restaurant.directions, '_blank')}
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                            size="sm"
                          >
                            <Navigation className="h-4 w-4 mr-1" />
                            Directions
                          </Button>
                          <Button
                            onClick={() => window.open(`https://${restaurant.website}`, '_blank')}
                            variant="outline"
                            className="flex-1"
                            size="sm"
                          >
                            <Globe className="h-4 w-4 mr-1" />
                            Website
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default France;
