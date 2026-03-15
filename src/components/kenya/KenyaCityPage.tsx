import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, Award, CheckCircle, Clock, Filter, Globe, MapPin, MessageCircle, Navigation, Phone, Search, Shield, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AddRestaurantDialog } from "@/components/restaurants/AddRestaurantDialog";
import type { Restaurant } from "@/data/capeTownRestaurants";

interface FAQItem {
  question: string;
  answer: string;
}

interface KenyaCityPageProps {
  cityName: string;
  citySlug: string;
  emoji: string;
  intro: string;
  restaurants: Restaurant[];
  faqItems: FAQItem[];
}

const getCeliacSafeBadge = (level: Restaurant["celiacSafe"]) => {
  if (level === "dedicated-facility") {
    return (
      <Badge className="bg-green-100 text-green-800 border-green-300">
        <Shield className="w-3 h-3 mr-1" />
        Dedicated GF Facility
      </Badge>
    );
  }

  return (
    <Badge className="bg-blue-100 text-blue-800 border-blue-300">
      <CheckCircle className="w-3 h-3 mr-1" />
      Celiac Protocols
    </Badge>
  );
};

const getMenuTypeBadge = (type: Restaurant["menuType"]) => {
  if (type === "fully-gluten-free") {
    return <Badge className="bg-emerald-100 text-emerald-800 border-emerald-300">100% Gluten-Free</Badge>;
  }

  return <Badge className="bg-amber-100 text-amber-800 border-amber-300">GF Options Available</Badge>;
};

const renderStarRating = (rating: number) => (
  <div className="flex items-center gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
    ))}
    <span className="ml-1 font-semibold">{rating}</span>
  </div>
);

const KenyaCityPage = ({ cityName, citySlug, emoji, intro, restaurants, faqItems }: KenyaCityPageProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [menuFilter, setMenuFilter] = useState<string>("all");
  const [safetyFilter, setSafetyFilter] = useState<string>("all");

  useEffect(() => {
    const metaDescriptionText = `Find verified gluten-free restaurants in ${cityName}, Kenya. Explore celiac-safe places with reviews, menu tips, and directions.`;

    document.title = `Gluten-Free Restaurants in ${cityName}, Kenya | Celiac-Safe Guide 2026`;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", metaDescriptionText);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", `Gluten-Free Restaurants in ${cityName}, Kenya`);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", metaDescriptionText);
    }

    const schemaId = `kenya-${citySlug}-gf`;
    const existingSchema = document.querySelector(`script[data-schema="${schemaId}"]`);
    if (existingSchema) existingSchema.remove();

    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.setAttribute("data-schema", schemaId);
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: `Gluten-Free Restaurants in ${cityName}, Kenya`,
      description: metaDescriptionText,
      url: `https://glutenfreeplace.org/gluten-free/kenya/${citySlug}`,
    });
    document.head.appendChild(schema);

    const faqSchemaId = `kenya-${citySlug}-faq`;
    const existingFaqSchema = document.querySelector(`script[data-schema="${faqSchemaId}"]`);
    if (existingFaqSchema) existingFaqSchema.remove();

    const faqSchema = document.createElement("script");
    faqSchema.type = "application/ld+json";
    faqSchema.setAttribute("data-schema", faqSchemaId);
    faqSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
    document.head.appendChild(faqSchema);

    return () => {
      const citySchema = document.querySelector(`script[data-schema="${schemaId}"]`);
      if (citySchema) citySchema.remove();

      const cityFaqSchema = document.querySelector(`script[data-schema="${faqSchemaId}"]`);
      if (cityFaqSchema) cityFaqSchema.remove();
    };
  }, [cityName, citySlug, faqItems]);

  const filteredRestaurants = useMemo(
    () =>
      restaurants.filter((restaurant) => {
        const matchesSearch =
          searchQuery === "" ||
          restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          restaurant.cuisineTypes.some((cuisine) => cuisine.toLowerCase().includes(searchQuery.toLowerCase()));

        const matchesMenu = menuFilter === "all" || restaurant.menuType === menuFilter;
        const matchesSafety = safetyFilter === "all" || restaurant.celiacSafe === safetyFilter;

        return matchesSearch && matchesMenu && matchesSafety;
      }),
    [restaurants, searchQuery, menuFilter, safetyFilter]
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/gluten-free/kenya" className="inline-flex items-center text-green-700 hover:text-green-800">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Kenya
          </Link>
        </div>
      </header>

      <section className="relative text-white py-14 bg-gradient-to-r from-green-700 to-red-600">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="text-5xl mb-4 block">{emoji}</span>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Gluten-Free Restaurants in {cityName}</h1>
          <p className="text-lg md:text-xl text-white/90 mb-6 max-w-3xl mx-auto">
            Verified celiac-safe spots, practical menu guidance, and trusted dining picks in {cityName}.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Badge className="bg-white/20 border-white/40 text-white px-4 py-2">{restaurants.length} listed restaurants</Badge>
            <AddRestaurantDialog city={cityName} triggerClassName="border-white bg-transparent !text-white hover:bg-white/10" />
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-10">
          <Card className="bg-gradient-to-r from-green-50 to-red-50 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-green-700 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Gluten-Free Dining in {cityName}</h2>
                  <p className="text-gray-700">{intro}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Filter Restaurants
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Search</label>
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                    <Input
                      className="pl-9"
                      placeholder="Search by name or cuisine"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Menu Type</label>
                  <Select value={menuFilter} onValueChange={setMenuFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="All menu types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Menu Types</SelectItem>
                      <SelectItem value="fully-gluten-free">100% Gluten-Free</SelectItem>
                      <SelectItem value="mixed-menu">GF Options Available</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Safety</label>
                  <Select value={safetyFilter} onValueChange={setSafetyFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="All safety levels" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Safety Levels</SelectItem>
                      <SelectItem value="dedicated-facility">Dedicated GF Facility</SelectItem>
                      <SelectItem value="protocols-in-place">Celiac Protocols</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-600">Showing {filteredRestaurants.length} of {restaurants.length} restaurants</p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Verified Gluten-Free Restaurants in {cityName}</h2>
          <div className="grid gap-6">
            {filteredRestaurants.map((restaurant) => (
              <Card key={restaurant.slug} className={`overflow-hidden ${restaurant.featured ? "ring-2 ring-green-300" : ""}`}>
                <CardContent className="p-6">
                  <div className="mb-3">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-2xl">{restaurant.icon}</span>
                      <Link to={`/gluten-free/kenya/${citySlug}/${restaurant.slug}`} className="text-xl font-bold text-gray-900 hover:text-green-700 transition-colors">
                        {restaurant.name}
                      </Link>
                      {restaurant.featured && (
                        <Badge className="bg-amber-100 text-amber-800 border-amber-300">Featured</Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">{restaurant.specialty}</p>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    {renderStarRating(restaurant.rating)}
                    <span className="text-sm text-gray-500">({restaurant.reviewCount} reviews)</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {restaurant.cuisineTypes.map((cuisine) => (
                      <Badge key={cuisine} variant="outline">
                        {cuisine}
                      </Badge>
                    ))}
                    {getCeliacSafeBadge(restaurant.celiacSafe)}
                    {getMenuTypeBadge(restaurant.menuType)}
                  </div>

                  <p className="text-gray-700 mb-4">{restaurant.overview}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Menu Highlights</h4>
                    <div className="flex flex-wrap gap-2">
                      {restaurant.menuHighlights.map((item) => (
                        <Badge key={`${restaurant.slug}-${item}`} variant="secondary" className="text-sm">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {restaurant.proTip && (
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
                      <div className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4 text-amber-700" />
                        <span className="font-medium text-amber-800">Pro Tip:</span>
                        <span className="text-amber-700">{restaurant.proTip}</span>
                      </div>
                    </div>
                  )}

                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span>{restaurant.address}, {restaurant.city}, Kenya</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span>{restaurant.hours}</span>
                    </div>
                    {restaurant.phone && (
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <a href={`tel:${restaurant.phone}`} className="hover:text-green-700">{restaurant.phone}</a>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button asChild className="bg-green-700 hover:bg-green-800">
                      <a href={restaurant.directionsUrl} target="_blank" rel="noopener noreferrer">
                        <Navigation className="w-4 h-4 mr-2" />
                        Get Directions
                      </a>
                    </Button>
                    {restaurant.website && (
                      <Button variant="outline" asChild>
                        <a
                          href={restaurant.website.startsWith("http") ? restaurant.website : `https://${restaurant.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Globe className="w-4 h-4 mr-2" />
                          Website
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
              <p className="text-gray-600">Gluten-free dining in {cityName}</p>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((faq, index) => (
                  <AccordionItem key={faq.question} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default KenyaCityPage;
