
import { MapPin, Star, Utensils, ArrowLeft, Flag, Phone, Clock } from "lucide-react";
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
          name: "Mama Eat",
          locations: "Trastevere, Monti",
          specialty: "Fried appetizers, GF pizza/pasta",
          proTip: "Their carbonara is celiac-safe",
          icon: "🍽️"
        },
        {
          name: "Voglia di Pizza",
          locations: "Multiple",
          specialty: "Wood-fired Neapolitan-style GF pizza",
          unique: "Mortadella-topped pizza",
          icon: "🍕"
        },
        {
          name: "Il Viaggio",
          locations: "Near Vatican",
          specialty: "Fine dining with GF bread basket",
          icon: "🍽️"
        }
      ]
    },
    {
      name: "Florence (Firenze)",
      restaurants: [
        {
          name: "Celiachia e Gusto",
          locations: "City center",
          specialty: "GF schiacciata (Tuscan flatbread)",
          icon: "🥖"
        },
        {
          name: "Starhotels Michelangelo",
          locations: "Hotel restaurant",
          specialty: "Dedicated GF menu",
          icon: "🍽️"
        }
      ]
    },
    {
      name: "Milan (Milano)",
      restaurants: [
        {
          name: "Grom (gelateria chain)",
          locations: "All locations GF",
          specialty: "GF cones clearly marked",
          icon: "🍨"
        },
        {
          name: "Ristorante Alice",
          locations: "Fashion district",
          specialty: "GF risottos",
          icon: "🍽️"
        }
      ]
    },
    {
      name: "Venice (Venezia)",
      restaurants: [
        {
          name: "Farini",
          locations: "Near Rialto",
          specialty: "GF cornetti (croissants)",
          icon: "🥐"
        },
        {
          name: "Osteria Enoteca San Marco",
          locations: "Piazza San Marco",
          specialty: "GF seafood risotto",
          icon: "🍽️"
        }
      ]
    },
    {
      name: "Naples (Napoli)",
      restaurants: [
        {
          name: "Pizzeria La Smorfia",
          locations: "City center",
          specialty: "Authentic GF Neapolitan pizza",
          special: "Wood-fired oven",
          icon: "🍕"
        },
        {
          name: "Il Glutino",
          locations: "Historic center",
          specialty: "GF street food",
          icon: "🥨"
        }
      ]
    },
    {
      name: "Bologna",
      restaurants: [
        {
          name: "Grom (yes, again!)",
          locations: "City center",
          specialty: "Best GF gelato chain",
          icon: "🍦"
        },
        {
          name: "Mò Mortadella Lab",
          locations: "Near university",
          specialty: "GF piadine (flatbread sandwiches)",
          icon: "🥪"
        }
      ]
    },
    {
      name: "Verona",
      restaurants: [
        {
          name: "Pizzeria Du de Cope",
          locations: "Historic center",
          specialty: "Romantic GF pizzeria",
          icon: "🍕"
        }
      ]
    },
    {
      name: "Turin (Torino)",
      restaurants: [
        {
          name: "C'era Una Volta",
          locations: "City center",
          specialty: "GF Piedmontese cuisine",
          icon: "🍽️"
        }
      ]
    },
    {
      name: "Sicily",
      restaurants: [
        {
          name: "Gelateria Ciccio (Palermo)",
          locations: "Palermo center",
          specialty: "GF granita",
          icon: "🍨"
        },
        {
          name: "Osteria da Toto (Catania)",
          locations: "Catania historic center",
          specialty: "GF arancini",
          icon: "🍽️"
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
                    <Card key={restaurant.name} className={`hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md animate-fade-in`} style={{animationDelay: `${(cityIndex * 0.1) + (index * 0.05)}s`}}>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg flex items-start justify-between">
                          <span>{restaurant.name}</span>
                          <span className="text-2xl ml-2">{restaurant.icon}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
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
