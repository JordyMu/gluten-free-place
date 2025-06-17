
import { Search, MapPin, Star, Users, ArrowRight, Globe, Utensils, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

const Index = () => {
  const destinations = [
    {
      id: 1,
      name: "Rome, Italy",
      image: "photo-1515542622106-78bda8ba0e5b",
      places: 142,
      rating: 4.8,
      description: "Ancient city with amazing gluten-free pasta and pizza options"
    },
    {
      id: 2,
      name: "Barcelona, Spain", 
      image: "photo-1539037116277-4db20889f2d4",
      places: 98,
      rating: 4.7,
      description: "Vibrant culture with excellent gluten-free tapas and paella"
    },
    {
      id: 3,
      name: "New York, USA",
      image: "photo-1496442226666-8d4d0e62e6e9",
      places: 234,
      rating: 4.6,
      description: "The city that never sleeps offers endless gluten-free dining"
    },
    {
      id: 4,
      name: "Sydney, Australia",
      image: "photo-1506905925346-21bda4d32df4",
      places: 87,
      rating: 4.9,
      description: "Harbor city with fantastic gluten-free cafes and restaurants"
    },
    {
      id: 5,
      name: "London, UK",
      image: "photo-1513635269975-59663e0ac1ad",
      places: 156,
      rating: 4.5,
      description: "Historic city embracing the gluten-free revolution"
    },
    {
      id: 6,
      name: "Tokyo, Japan",
      image: "photo-1540959733332-eab4deabeeaf",
      places: 73,
      rating: 4.4,
      description: "Discover amazing gluten-free ramen and traditional dishes"
    }
  ];

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      comment: "This platform saved my European vacation! Found amazing gluten-free restaurants in every city I visited.",
      avatar: "photo-1494790108755-2616b612b786"
    },
    {
      id: 2,
      name: "Marco Rodriguez",
      location: "Barcelona, Spain", 
      rating: 5,
      comment: "As someone with celiac disease, I never thought I could enjoy traveling. This changed everything!",
      avatar: "photo-1507003211169-0a1dd7228f2d"
    },
    {
      id: 3,
      name: "Emma Chen",
      location: "Sydney, Australia",
      rating: 5,
      comment: "The reviews are so detailed and helpful. I felt confident trying new places for the first time in years.",
      avatar: "photo-1438761681033-6461ffad8d80"
    }
  ];

  const topCountries = [
    "Italy", "Spain", "USA", "Canada", "Australia", "UK", 
    "Sweden", "Ireland", "Argentina", "Thailand", "Germany"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-orange-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-orange-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
              GlutenFree World
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="#destinations" className="text-gray-700 hover:text-orange-600 transition-colors">Destinations</Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-gray-700 hover:text-orange-600 transition-colors cursor-pointer">
                Countries
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white border border-gray-200 shadow-lg z-50">
                <DropdownMenuLabel className="text-orange-600 font-semibold">Top Countries</DropdownMenuLabel>
                <div className="grid grid-cols-2 gap-1 p-2">
                  {topCountries.map((country) => (
                    <DropdownMenuItem key={country} className="cursor-pointer hover:bg-orange-50 text-sm">
                      {country}
                    </DropdownMenuItem>
                  ))}
                </div>
                <DropdownMenuSeparator />
                <Link to="/all-countries">
                  <DropdownMenuItem className="cursor-pointer hover:bg-blue-50 text-blue-600 font-medium">
                    View All 156 Countries
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="#about" className="text-gray-700 hover:text-orange-600 transition-colors">About</Link>
            <Link to="#reviews" className="text-gray-700 hover:text-orange-600 transition-colors">Reviews</Link>
            <Button variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50">
              Sign In
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-blue-600/10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-orange-100 text-orange-800 border-orange-200">
              <Utensils className="h-4 w-4 mr-2" />
              Trusted by 50,000+ Travelers
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-500 to-blue-600 bg-clip-text text-transparent">
              Discover Amazing
              <br />
              Gluten-Free Places
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Find safe, delicious gluten-free restaurants and cafes around the world. 
              Travel with confidence and never worry about your next meal again.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-xl mx-auto mb-8">
              <div className="relative flex bg-white rounded-full shadow-xl border border-orange-100 p-2">
                <div className="flex-1 flex items-center px-4">
                  <Search className="h-5 w-5 text-gray-400 mr-3" />
                  <Input 
                    placeholder="Search destinations..." 
                    className="border-0 focus-visible:ring-0"
                  />
                </div>
                <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-full px-6">
                  Search
                </Button>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <span className="flex items-center"><MapPin className="h-4 w-4 mr-1" />2,847 Places</span>
              <span className="flex items-center"><Users className="h-4 w-4 mr-1" />156 Countries</span>
              <span className="flex items-center"><Star className="h-4 w-4 mr-1 text-yellow-500" />4.8 Average Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section id="destinations" className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
              <Globe className="h-4 w-4 mr-2" />
              Featured Destinations
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Popular Gluten-Free Destinations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the world's most gluten-free friendly cities with verified restaurants and local insights
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <Card key={destination.id} className={`group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg animate-fade-in`} style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={`https://images.unsplash.com/${destination.image}?auto=format&fit=crop&w=600&q=80`}
                    alt={destination.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span className="font-semibold text-sm">{destination.rating}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{destination.name}</h3>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-orange-600">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="font-semibold">{destination.places} places</span>
                    </div>
                    <Button size="sm" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                      Explore
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section id="about" className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <Shield className="h-4 w-4 mr-2" />
              Why Trust Us
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Safe Travels, Guaranteed
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              We understand the challenges of gluten-free travel. Every place is verified by our community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in" style={{animationDelay: '0.1s'}}>
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community Verified</h3>
              <p className="opacity-90">Every restaurant is reviewed by real travelers with gluten sensitivities</p>
            </div>
            <div className="text-center animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Safety First</h3>
              <p className="opacity-90">Detailed cross-contamination information and staff training ratings</p>
            </div>
            <div className="text-center animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Assured</h3>
              <p className="opacity-90">Only the best gluten-free experiences make it to our platform</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
              <Star className="h-4 w-4 mr-2" />
              Traveler Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              What Our Community Says
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of travelers who've discovered amazing gluten-free experiences around the world
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={review.id} className={`border-0 shadow-lg animate-fade-in`} style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={`https://images.unsplash.com/${review.avatar}?auto=format&fit=crop&w=100&q=80`}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{review.name}</h4>
                      <p className="text-sm text-gray-600">{review.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{review.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Explore?</h2>
          <p className="text-xl mb-8 opacity-90">Join our community and start discovering amazing gluten-free places today</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              Get Started Free
            </Button>
            <Link to="/all-countries">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                View All Countries
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
