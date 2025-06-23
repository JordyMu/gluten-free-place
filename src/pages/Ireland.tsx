
import React from 'react';
import { ArrowLeft, MapPin, Star, Clock, Users, Phone, Globe, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const featuredRestaurants = [
  {
    id: 1,
    name: "Glas Restaurant",
    rating: 4.8,
    image: "photo-1555396273-367ea4eb4db5",
    cuisine: "Modern Irish",
    address: "Dublin, Ireland",
    phone: "+353 1 625 7300",
    website: "glasrestaurant.ie",
    hours: "5:30 PM - 10:00 PM",
    glutenFreeOptions: ["Dedicated GF menu", "Staff trained on celiac disease", "Separate preparation area"],
    specialties: ["Contemporary Irish cuisine", "Farm-to-table ingredients", "Wine pairing"]
  },
  {
    id: 2,
    name: "Gallaghers Boxty House",
    rating: 4.6,
    image: "photo-1551218808-94e220e084d2",
    cuisine: "Traditional Irish",
    address: "Temple Bar, Dublin",
    phone: "+353 1 677 2762",
    website: "boxtyhouse.ie",
    hours: "12:00 PM - 11:00 PM",
    glutenFreeOptions: ["GF boxty available", "Traditional Irish dishes adapted", "Knowledgeable staff"],
    specialties: ["Traditional boxty", "Irish stew", "Authentic atmosphere"]
  },
  {
    id: 3,
    name: "The Bank on College Green",
    rating: 4.7,
    image: "photo-1414235077428-338989a2e8c0",
    cuisine: "Irish Gastropub",
    address: "College Green, Dublin",
    phone: "+353 1 677 0677",
    website: "bankrestaurant.ie",
    hours: "12:00 PM - 12:00 AM",
    glutenFreeOptions: ["Extensive GF menu", "Sunday roast GF options", "GF desserts"],
    specialties: ["Historic building", "Traditional pub fare", "Live music"]
  },
  {
    id: 4,
    name: "Carluccio's",
    rating: 4.5,
    image: "photo-1551218808-94e220e084d2",
    cuisine: "Italian",
    address: "Multiple Locations, Dublin",
    phone: "+353 1 872 0705",
    website: "carluccios.com",
    hours: "8:00 AM - 11:00 PM",
    glutenFreeOptions: ["Dedicated GF menu", "GF pasta options", "Italian GF specialties"],
    specialties: ["Authentic Italian", "Fresh pasta", "Italian imports"]
  }
];

const allRestaurants = [
  "Borza Takeaway", "Arepas Grill", "Pacino's Italian Restaurant", "Millstone Restaurant",
  "Toca Tapioca House", "Beshoff Bros", "Fish Shop", "Taste Food Company",
  "Nutbutter", "Wishbone", "Boeuf and Frites", "Gotham Cafe Ltd.",
  "Aperitivo", "PHX Bistro", "Bunsen", "Murphy's Pub Restaurant of Rathmines",
  "Zizzi's", "SOUP Ramen", "Thunder Road Cafe", "The Cobblestone",
  "Be Sweet Cafe", "The Port House", "Café en Seine", "Brother Hubbard (North)",
  "Old Mill Restaurant", "Milano"
];

const RestaurantCard = ({ restaurant }: { restaurant: typeof featuredRestaurants[0] }) => (
  <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="relative h-48 overflow-hidden">
      <img 
        src={`https://images.unsplash.com/${restaurant.image}?auto=format&fit=crop&w=600&q=80`}
        alt={restaurant.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
        <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
        <span className="font-semibold text-sm">{restaurant.rating}</span>
      </div>
    </div>
    <CardContent className="p-6">
      <h3 className="text-xl font-bold mb-2">{restaurant.name}</h3>
      <p className="text-green-600 font-medium mb-4">{restaurant.cuisine}</p>
      
      <div className="space-y-3 mb-4">
        <div className="flex items-center text-gray-600">
          <MapPin className="h-4 w-4 mr-2 text-green-500" />
          <span className="text-sm">{restaurant.address}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Clock className="h-4 w-4 mr-2 text-green-500" />
          <span className="text-sm">{restaurant.hours}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Phone className="h-4 w-4 mr-2 text-green-500" />
          <span className="text-sm">{restaurant.phone}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Globe className="h-4 w-4 mr-2 text-green-500" />
          <span className="text-sm">{restaurant.website}</span>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold mb-2 text-green-700">Gluten-Free Features:</h4>
        <div className="space-y-1">
          {restaurant.glutenFreeOptions.map((option, index) => (
            <div key={index} className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
              <span className="text-sm text-gray-600">{option}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold mb-2 text-green-700">Specialties:</h4>
        <div className="flex flex-wrap gap-1">
          {restaurant.specialties.map((specialty, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {specialty}
            </Badge>
          ))}
        </div>
      </div>

      <Button className="w-full bg-green-600 hover:bg-green-700">
        <Users className="h-4 w-4 mr-2" />
        View Details & Reviews
      </Button>
    </CardContent>
  </Card>
);

const Ireland = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/countries">
              <Button variant="ghost" className="flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Countries
              </Button>
            </Link>
            <div className="flex items-center space-x-4">
              <img 
                src="https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=32&q=80" 
                alt="Ireland Flag" 
                className="w-8 h-6 rounded"
              />
              <h1 className="text-2xl font-bold text-gray-900">Ireland</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Gluten-Free Ireland</h2>
          <p className="text-xl mb-8 opacity-90">Discover authentic Irish cuisine with excellent gluten-free options</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold">30+</div>
              <div className="text-sm">Restaurants</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold">4.6★</div>
              <div className="text-sm">Average Rating</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold">Dublin</div>
              <div className="text-sm">Top City</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Featured Gluten-Free Restaurants
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </div>
      </section>

      {/* All Restaurants */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            More Gluten-Free Options
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {allRestaurants.map((restaurant, index) => (
              <Card key={index} className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                <h3 className="font-semibold text-gray-900">{restaurant}</h3>
                <p className="text-sm text-gray-600 mt-1">Dublin, Ireland</p>
                <div className="flex items-center mt-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm ml-1">4.{Math.floor(Math.random() * 4) + 3}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Plan Your Gluten-Free Irish Adventure</h2>
          <p className="text-xl mb-8 opacity-90">
            From traditional pubs to modern restaurants, Ireland offers amazing gluten-free dining
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            Add Your Favorite Irish Restaurant
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Ireland;
