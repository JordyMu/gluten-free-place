import { useState, useMemo, useEffect } from "react";
import { MapPin, Star, ArrowLeft, Phone, Clock, Globe, CheckCircle, Navigation, Heart, MessageCircle, Award, Shield, Search, Plus, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { RestaurantReviews } from "@/components/reviews/RestaurantReviews";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AddRestaurantDialog } from "@/components/restaurants/AddRestaurantDialog";
import curepipeHero from "@/assets/curepipe-mauritius.jpg";

import { curepipeRestaurants } from "@/data/curepipeRestaurants";
import { MauritiusCityRestaurant } from "@/data/grandBaieRestaurants";
import { SEOHead } from "@/components/SEOHead";
type Restaurant = MauritiusCityRestaurant;

const GlutenFreeCurepipe = () => {
  const [safetyFilter, setSafetyFilter] = useState<string>("all");
  const [venueFilter, setVenueFilter] = useState<string>("all");
  const [menuFilter, setMenuFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [isLocating, setIsLocating] = useState(false);
  const [locationError, setLocationError] = useState<string>("");
  const [sortByDistance, setSortByDistance] = useState(false);

  const faqItems = [
    {
      question: "Is Curepipe a good destination for gluten-free travelers?",
      answer: "Curepipe is Mauritius's highland town with a cooler climate and a more local dining scene. While it has fewer tourist-oriented restaurants than coastal towns, several eateries offer naturally GF options through Indian and Creole cuisine."
    },
    {
      question: "What types of gluten-free food can I find in Curepipe?",
      answer: "Curepipe's dining scene features Indian curries, Creole stews, grilled meats, and rice-based dishes — many of which are naturally gluten-free. The nearby Tribeca Mall in Trianon also offers additional dining options."
    },
    {
      question: "Are there gluten-free products available in Curepipe?",
      answer: "Yes, supermarkets like Super U and Winners in Curepipe stock some imported GF products. Indian grocery stores also carry naturally GF flours like rice flour, chickpea flour (besan), and lentil flour."
    },
    {
      question: "What should I watch out for when eating GF in Curepipe?",
      answer: "Be cautious with dholl puri, faratas, and samosas which contain wheat. Some curries may use flour as a thickener — always ask. Street food stalls may have cross-contamination risks."
    },
    {
      question: "How do I communicate gluten-free needs in Curepipe?",
      answer: "French and Creole are most commonly spoken in Curepipe, though English is understood. Say 'sans gluten' in French or 'pa met la farine' in Creole (don't add flour)."
    }
  ];
,
          { "@type": "ListItem", "position": 2, "name": "Mauritius", "item": "https://glutenfreeplace.org/gluten-free/mauritius" },
          { "@type": "ListItem", "position": 3, "name": "Curepipe", "item": "https://glutenfreeplace.org/gluten-free/mauritius/curepipe" }
        ]
      }
    });
    document.head.appendChild(schema);

    const existingFaqSchema = document.querySelector('script[data-schema="curepipe-faq"]');
    if (existingFaqSchema) existingFaqSchema.remove();

    const faqSchemaEl = document.createElement('script');
    faqSchemaEl.type = 'application/ld+json';
    faqSchemaEl.setAttribute('data-schema', 'curepipe-faq');
    faqSchemaEl.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqItems.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
    });
    document.head.appendChild(faqSchemaEl);

    return () => {
      document.querySelector('script[data-schema="curepipe-gf"]')?.remove();
      document.querySelector('script[data-schema="curepipe-faq"]')?.remove();
    };
  }, []);

  const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number): number => {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  };

  const handleFindNearMe = () => {
    if (!navigator.geolocation) { setLocationError("Geolocation is not supported by your browser"); return; }
    setIsLocating(true);
    setLocationError("");
    const tryGetLocation = (highAccuracy: boolean) => {
      navigator.geolocation.getCurrentPosition(
        (position) => { setUserLocation({ lat: position.coords.latitude, lng: position.coords.longitude }); setSortByDistance(true); setIsLocating(false); },
        (error) => {
          if (highAccuracy && error.code === error.TIMEOUT) { tryGetLocation(false); return; }
          setIsLocating(false);
          switch (error.code) {
            case error.PERMISSION_DENIED: setLocationError("Location access denied."); break;
            case error.POSITION_UNAVAILABLE: setLocationError("Location unavailable."); break;
            case error.TIMEOUT: setLocationError("Location request timed out."); break;
            default: setLocationError("An unknown error occurred.");
          }
        },
        { enableHighAccuracy: highAccuracy, timeout: highAccuracy ? 15000 : 30000, maximumAge: 60000 }
      );
    };
    tryGetLocation(true);
  };

  const restaurants: Restaurant[] = curepipeRestaurants;

  const getCeliacSafeBadge = (level: string) => {
    switch (level) {
      case "dedicated-facility": return <Badge className="bg-green-100 text-green-800 border-green-300"><Shield className="w-3 h-3 mr-1" />Dedicated GF Facility</Badge>;
      case "protocols-in-place": return <Badge className="bg-blue-100 text-blue-800 border-blue-300"><CheckCircle className="w-3 h-3 mr-1" />Careful Handling</Badge>;
      default: return null;
    }
  };

  const getMenuTypeBadge = (type: string) => {
    switch (type) {
      case "fully-gluten-free": return <Badge className="bg-emerald-100 text-emerald-800 border-emerald-300">100% Gluten-Free</Badge>;
      case "mixed-menu": return <Badge className="bg-amber-100 text-amber-800 border-amber-300">GF Options Available</Badge>;
      default: return null;
    }
  };

  const renderStarRating = (rating: number) => (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
      ))}
      <span className="ml-1 font-semibold">{rating}</span>
    </div>
  );

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
    if (sortByDistance && userLocation) {
      filtered = filtered.map(r => ({ ...r, distance: calculateDistance(userLocation.lat, userLocation.lng, r.lat, r.lng) })).sort((a, b) => (a.distance || 0) - (b.distance || 0));
    }
    return filtered;
  }, [safetyFilter, venueFilter, menuFilter, searchQuery, sortByDistance, userLocation]);

  return (
    <>
    <SEOHead
      title="Gluten-Free Restaurants in Curepipe, Mauritius | Celiac-Safe Dining Guide 2026"
      description="Find the best gluten-free restaurants in Curepipe, Mauritius. Verified celiac-safe dining in the highlands. Real reviews from GF travelers."
      canonical="/gluten-free/mauritius/curepipe"
    />
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/gluten-free/mauritius" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />Back to Mauritius
          </Link>
        </div>
      </header>

      <section className="relative text-white py-16">
        <div className="absolute inset-0">
          <img src={curepipeHero} alt="Curepipe, Mauritius" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="text-6xl mb-4 block">🇲🇺</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Safe Gluten-Free Restaurants in Curepipe</h1>
          <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">Real reviews from gluten-free diners. Verified listings. Zero guesswork.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-white bg-transparent !text-white hover:bg-white/10" onClick={handleFindNearMe} disabled={isLocating}>
              {isLocating ? (<><div className="w-5 h-5 mr-2 border-2 border-purple-600 border-t-transparent rounded-full animate-spin" />Locating...</>) : sortByDistance ? (<><Navigation className="w-5 h-5 mr-2" />Sorted by Distance</>) : (<><Search className="w-5 h-5 mr-2" />Find Gluten-Free Food Near Me</>)}
            </Button>
            <AddRestaurantDialog city="Curepipe" triggerClassName="border-white bg-transparent !text-white hover:bg-white/10" />
          </div>
          {locationError && <p className="text-purple-100 mt-4 text-sm">{locationError}</p>}
          {sortByDistance && userLocation && (<Button variant="link" className="text-white/80 hover:text-white mt-2" onClick={() => setSortByDistance(false)}>Clear distance sorting</Button>)}
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-purple-600 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Gluten-Free Dining in Curepipe & Central Mauritius</h2>
                  <p className="text-gray-700">
                    Curepipe and the central highlands of Mauritius offer a more local, authentic dining experience.
                    The nearby Tribeca Mall in Trianon provides modern dining options, while traditional Creole and Indian
                    restaurants serve naturally gluten-free curries, grills, and rice-based dishes. The cooler highland
                    climate makes this area a refreshing change from the coast, and the food scene reflects
                    Mauritius's rich multicultural heritage with plenty of safe options for celiac travelers.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-8">
          <Card>
            <CardHeader><CardTitle className="flex items-center gap-2"><Filter className="w-5 h-5" />Filter Restaurants</CardTitle></CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div><label className="text-sm font-medium text-gray-700 mb-1 block">Search</label><Input placeholder="Search restaurants..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} /></div>
                <div><label className="text-sm font-medium text-gray-700 mb-1 block">Venue Type</label>
                  <Select value={venueFilter} onValueChange={setVenueFilter}><SelectTrigger className="bg-white"><SelectValue placeholder="All venues" /></SelectTrigger><SelectContent className="bg-white z-50"><SelectItem value="all">All Venues</SelectItem><SelectItem value="restaurant">🍽️ Restaurant</SelectItem><SelectItem value="cafe">☕ Café</SelectItem></SelectContent></Select>
                </div>
                <div><label className="text-sm font-medium text-gray-700 mb-1 block">Safety Rating</label>
                  <Select value={safetyFilter} onValueChange={setSafetyFilter}><SelectTrigger className="bg-white"><SelectValue placeholder="All safety levels" /></SelectTrigger><SelectContent className="bg-white z-50"><SelectItem value="all">All Safety Levels</SelectItem><SelectItem value="dedicated-facility">🛡️ Dedicated GF Facility</SelectItem><SelectItem value="protocols-in-place">✓ Careful Handling</SelectItem></SelectContent></Select>
                </div>
                <div><label className="text-sm font-medium text-gray-700 mb-1 block">Menu Type</label>
                  <Select value={menuFilter} onValueChange={setMenuFilter}><SelectTrigger className="bg-white"><SelectValue placeholder="All menu types" /></SelectTrigger><SelectContent className="bg-white z-50"><SelectItem value="all">All Menu Types</SelectItem><SelectItem value="fully-gluten-free">100% Gluten-Free</SelectItem><SelectItem value="mixed-menu">GF Options Available</SelectItem></SelectContent></Select>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-600">Showing {filteredRestaurants.length} of {restaurants.length} restaurants</div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Verified Gluten-Free Restaurants</h2>
          <div className="grid gap-6">
            {filteredRestaurants.map((restaurant, index) => (
              <Card key={index} className={`overflow-hidden ${restaurant.featured ? 'ring-2 ring-purple-300' : ''}`}>
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            {restaurant.featured && (<Badge className="bg-purple-100 text-purple-800 border-purple-300"><Award className="w-3 h-3 mr-1" />Featured</Badge>)}
                            <Link to={`/gluten-free/mauritius/curepipe/${restaurant.slug}`} className="text-xl font-bold text-gray-900 hover:text-purple-600 transition-colors">{restaurant.name}</Link>
                          </div>
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            {renderStarRating(restaurant.rating)}
                            <span className="text-gray-500 text-sm">({restaurant.reviewCount} reviews)</span>
                            {restaurant.distance !== undefined && (
                              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                                <Navigation className="w-3 h-3 mr-1" />{restaurant.distance < 1 ? `${Math.round(restaurant.distance * 1000)}m away` : `${restaurant.distance.toFixed(1)}km away`}
                              </Badge>
                            )}
                          </div>
                        </div>
                        <Button variant="ghost" size="sm"><Heart className="w-4 h-4" /></Button>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {restaurant.cuisineTypes.map((cuisine, i) => (<Badge key={i} variant="outline">{cuisine}</Badge>))}
                        {getCeliacSafeBadge(restaurant.celiacSafe)}
                        {getMenuTypeBadge(restaurant.menuType)}
                      </div>
                      <div className="space-y-2 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-gray-400" /><span>{restaurant.address}</span></div>
                        <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-gray-400" /><span>{restaurant.hours}</span></div>
                        {restaurant.phone && (<div className="flex items-center gap-2"><Phone className="w-4 h-4 text-gray-400" /><a href={`tel:${restaurant.phone}`} className="hover:text-purple-600">{restaurant.phone}</a></div>)}
                      </div>
                      <p className="text-gray-700 mb-4">{restaurant.overview}</p>
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Menu Highlights</h4>
                        <div className="flex flex-wrap gap-2">{restaurant.menuHighlights.map((item, i) => (<Badge key={i} variant="secondary" className="text-sm">{item}</Badge>))}</div>
                      </div>
                      {restaurant.proTip && (
                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
                          <div className="flex items-center gap-2"><MessageCircle className="w-4 h-4 text-amber-600" /><span className="font-medium text-amber-800">Pro Tip:</span><span className="text-amber-700">{restaurant.proTip}</span></div>
                        </div>
                      )}
                      <div className="flex gap-3">
                        <Button asChild className="bg-purple-600 hover:bg-purple-700"><a href={restaurant.directionsUrl} target="_blank" rel="noopener noreferrer"><Navigation className="w-4 h-4 mr-2" />Get Directions</a></Button>
                        {restaurant.website && (<Button variant="outline" asChild><a href={`https://${restaurant.website}`} target="_blank" rel="noopener noreferrer"><Globe className="w-4 h-4 mr-2" />Website</a></Button>)}
                      </div>
                      <div className="mt-6 pt-6 border-t"><RestaurantReviews restaurantName={restaurant.name} restaurantCountry="Mauritius" restaurantCity="Curepipe" /></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <Card>
            <CardHeader><CardTitle className="text-2xl">Frequently Asked Questions</CardTitle><p className="text-gray-600">Everything you need to know about gluten-free dining in Curepipe</p></CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Know a Great Gluten-Free Spot in Curepipe?</h2>
              <p className="text-purple-100 mb-6">Help fellow celiacs discover safe dining options. Add your favorite restaurant to our directory.</p>
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50"><Plus className="w-5 h-5 mr-2" />Add a Restaurant</Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>

    </>
  );
};

export default GlutenFreeCurepipe;
