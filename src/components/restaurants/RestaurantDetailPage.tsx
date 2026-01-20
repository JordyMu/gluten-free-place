import { useState, useEffect } from "react";
import { MapPin, Star, ArrowLeft, Phone, Clock, Globe, CheckCircle, Navigation, Shield, Camera, ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { RestaurantReviews } from "@/components/reviews/RestaurantReviews";
import { RestaurantPhotoGallery } from "./RestaurantPhotoGallery";
import { supabase } from "@/integrations/supabase/client";

interface RestaurantDetailPageProps {
  restaurant: {
    name: string;
    slug: string;
    address: string;
    city: string;
    country: string;
    hours: string;
    phone: string;
    website: string;
    directionsUrl: string;
    specialty: string;
    overview: string;
    menuHighlights: string[];
    proTip: string;
    icon: string;
    celiacSafe: "dedicated-facility" | "protocols-in-place";
    menuType: "fully-gluten-free" | "mixed-menu";
    rating: number;
    reviewCount: number;
    lat: number;
    lng: number;
    venueType: "bakery" | "restaurant" | "cafe";
    photos: string[];
    menuNotes?: string[];
  };
  backLink: string;
  backLabel: string;
}

export const RestaurantDetailPage = ({ restaurant, backLink, backLabel }: RestaurantDetailPageProps) => {
  const [aiSummary, setAiSummary] = useState<string>("");
  const [isLoadingSummary, setIsLoadingSummary] = useState(false);

  const getCeliacSafeBadge = () => {
    switch (restaurant.celiacSafe) {
      case "dedicated-facility":
        return <Badge className="bg-green-100 text-green-800 border-green-300 text-lg px-4 py-2"><Shield className="w-4 h-4 mr-2" />Dedicated GF Facility</Badge>;
      case "protocols-in-place":
        return <Badge className="bg-blue-100 text-blue-800 border-blue-300 text-lg px-4 py-2"><CheckCircle className="w-4 h-4 mr-2" />Careful Handling Protocols</Badge>;
      default:
        return null;
    }
  };

  const getMenuTypeBadge = () => {
    switch (restaurant.menuType) {
      case "fully-gluten-free":
        return <Badge className="bg-emerald-100 text-emerald-800 border-emerald-300 text-lg px-4 py-2">100% Gluten-Free Menu</Badge>;
      case "mixed-menu":
        return <Badge className="bg-amber-100 text-amber-800 border-amber-300 text-lg px-4 py-2">GF Options Available</Badge>;
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
            className={`w-6 h-6 ${i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
          />
        ))}
        <span className="ml-2 text-2xl font-bold">{rating}</span>
        <span className="text-gray-500 ml-1">({restaurant.reviewCount} reviews)</span>
      </div>
    );
  };

  useEffect(() => {
    const fetchAISummary = async () => {
      setIsLoadingSummary(true);
      try {
        const { data, error } = await supabase.functions.invoke('generate-review-summary', {
          body: { 
            restaurantName: restaurant.name,
            restaurantCity: restaurant.city,
            restaurantCountry: restaurant.country
          }
        });
        
        if (error) throw error;
        if (data?.summary) {
          setAiSummary(data.summary);
        }
      } catch (error) {
        console.error('Error fetching AI summary:', error);
        setAiSummary("Unable to generate review summary at this time.");
      } finally {
        setIsLoadingSummary(false);
      }
    };

    fetchAISummary();
  }, [restaurant.name, restaurant.city, restaurant.country]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <Link to={backLink} className="inline-flex items-center text-orange-600 hover:text-orange-700">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {backLabel}
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-amber-500 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-6xl mb-4 block">{restaurant.icon}</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{restaurant.name}</h1>
            <p className="text-xl text-orange-100 mb-4">{restaurant.specialty}</p>
            <div className="flex flex-wrap gap-3 justify-center mb-6">
              {getMenuTypeBadge()}
              {getCeliacSafeBadge()}
            </div>
            <div className="flex justify-center">
              {renderStarRating(restaurant.rating)}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Photo Gallery - Owner Uploaded Photos */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <RestaurantPhotoGallery
                restaurantName={restaurant.name}
                restaurantSlug={restaurant.slug}
                restaurantCity={restaurant.city}
                restaurantCountry={restaurant.country}
              />
            </CardContent>
          </Card>

          {/* Static Photos from data */}
          {restaurant.photos && restaurant.photos.length > 0 && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="w-5 h-5 text-orange-600" />
                  Featured Photos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {restaurant.photos.map((photo, index) => (
                    <div key={index} className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                      <img 
                        src={photo} 
                        alt={`${restaurant.name} photo ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Location & Contact */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-orange-600" />
                  Location & Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="font-medium">{restaurant.address}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <p>{restaurant.hours}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <a href={`tel:${restaurant.phone}`} className="text-orange-600 hover:underline">{restaurant.phone}</a>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-gray-400" />
                  <a href={`https://${restaurant.website}`} target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                    {restaurant.website}
                  </a>
                </div>
                <Button 
                  className="w-full bg-orange-600 hover:bg-orange-700 mt-4"
                  onClick={() => window.open(restaurant.directionsUrl, '_blank')}
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
              </CardContent>
            </Card>

            {/* Map */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-orange-600" />
                  Map
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0 }}
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(restaurant.address)}`}
                    allowFullScreen
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* About & Menu */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle>About This Restaurant</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">{restaurant.overview}</p>
                {restaurant.proTip && (
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <p className="text-amber-800">
                      <strong>💡 Pro Tip:</strong> {restaurant.proTip}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ChefHat className="w-5 h-5 text-orange-600" />
                  Menu Highlights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {restaurant.menuHighlights.map((item, index) => (
                    <li key={index} className="text-gray-700">{item}</li>
                  ))}
                </ul>
                {restaurant.menuNotes && restaurant.menuNotes.length > 0 && (
                  <div className="mt-4 pt-4 border-t">
                    <h4 className="font-semibold text-gray-900 mb-2">AI-Assisted Menu Notes:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {restaurant.menuNotes.map((note, index) => (
                        <li key={index}>• {note}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* AI Summary */}
          <Card className="mb-8 border-l-4 border-l-purple-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🤖</span>
                AI Review Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isLoadingSummary ? (
                <div className="animate-pulse">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              ) : (
                <p className="text-gray-700 italic text-lg">"{aiSummary}"</p>
              )}
            </CardContent>
          </Card>

          {/* User Reviews */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>User Reviews</CardTitle>
            </CardHeader>
            <CardContent>
              <RestaurantReviews 
                restaurantName={restaurant.name}
                restaurantCity={restaurant.city}
                restaurantCountry={restaurant.country}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetailPage;
