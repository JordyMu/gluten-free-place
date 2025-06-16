
import { Search, MapPin, Star, Users, ArrowRight, Globe, Shield, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const featuredPlaces = [
    {
      id: 1,
      name: "Bella Vista Ristorante",
      location: "Rome, Italy",
      rating: 4.9,
      reviews: 324,
      image: "photo-1618160702438-9b02ab6515c9",
      specialty: "Authentic Italian",
      verified: true
    },
    {
      id: 2,
      name: "Golden Grain Bakery",
      location: "Paris, France",
      rating: 4.8,
      reviews: 256,
      image: "photo-1465146344425-f00d5f5c8f07",
      specialty: "Artisan Breads",
      verified: true
    },
    {
      id: 3,
      name: "Coastal Kitchen",
      location: "Sydney, Australia",
      rating: 4.9,
      reviews: 189,
      image: "photo-1506744038136-46273834b3fb",
      specialty: "Fresh Seafood",
      verified: true
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      location: "Toronto, Canada",
      text: "Finally found a platform I can trust! Every restaurant recommendation has been absolutely perfect for my celiac needs.",
      avatar: "S"
    },
    {
      name: "Marco Silva",
      location: "São Paulo, Brazil",
      text: "Traveling with celiac disease used to be stressful. Now I can explore the world confidently, knowing I'll find safe, delicious food.",
      avatar: "M"
    },
    {
      name: "Emma Thompson",
      location: "London, UK",
      text: "The verified reviews from fellow gluten-free travelers give me peace of mind. This platform has revolutionized how I travel!",
      avatar: "E"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-orange-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-orange-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
              GlutenFree World
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#destinations" className="text-gray-700 hover:text-orange-600 transition-colors">Destinations</a>
            <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors">About</a>
            <a href="#reviews" className="text-gray-700 hover:text-orange-600 transition-colors">Reviews</a>
            <Button variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50">
              Sign In
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-blue-600/10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <Badge className="mb-6 bg-orange-100 text-orange-800 border-orange-200">
              🌟 Trusted by 50,000+ Gluten-Free Travelers
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-500 to-blue-600 bg-clip-text text-transparent">
              Discover Safe Haven
              <br />
              Gluten-Free Dining
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
              Explore verified gluten-free restaurants, cafes, and bakeries around the world. 
              <br className="hidden md:block" />
              Travel with confidence, eat with joy.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative flex bg-white rounded-full shadow-2xl border border-orange-100 p-2">
                <div className="flex-1 flex items-center px-4">
                  <MapPin className="h-5 w-5 text-gray-400 mr-3" />
                  <Input 
                    placeholder="Search destinations, cities, or restaurants..." 
                    className="border-0 focus-visible:ring-0 text-lg"
                  />
                </div>
                <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-full px-8">
                  <Search className="h-5 w-5 mr-2" />
                  Explore
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">2,500+</div>
                <div className="text-gray-600">Verified Places</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">127</div>
                <div className="text-gray-600">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">50k+</div>
                <div className="text-gray-600">Happy Travelers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Places */}
      <section id="destinations" className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Featured Gluten-Free Destinations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked restaurants and eateries that have earned the trust of our gluten-free community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredPlaces.map((place, index) => (
              <Card key={place.id} className={`group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg animate-fade-in`} style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={`https://images.unsplash.com/${place.image}?auto=format&fit=crop&w=600&q=80`}
                    alt={place.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {place.verified && (
                    <Badge className="absolute top-4 left-4 bg-green-500 text-white border-0">
                      <Shield className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span className="font-semibold text-sm">{place.rating}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{place.name}</h3>
                  <p className="text-gray-600 mb-3 flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {place.location}
                  </p>
                  <p className="text-orange-600 font-medium mb-4">{place.specialty}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{place.reviews} reviews</span>
                    <Button variant="ghost" className="text-orange-600 hover:text-orange-700 hover:bg-orange-50 p-0">
                      View Details <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Why Trust GlutenFree World?</h2>
            <p className="text-xl text-gray-600">Your safety and satisfaction are our top priorities</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Verified Reviews</h3>
              <p className="text-gray-600">Every review is from verified gluten-free diners who've actually visited these places</p>
            </div>

            <div className="text-center p-6 group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Community Driven</h3>
              <p className="text-gray-600">Built by and for the gluten-free community, with insights you can trust</p>
            </div>

            <div className="text-center p-6 group">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Passion for Travel</h3>
              <p className="text-gray-600">We believe everyone deserves to explore the world safely and deliciously</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Loved by Travelers Worldwide</h2>
            <p className="text-xl text-gray-600">Hear from fellow gluten-free adventurers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className={`p-6 border-0 shadow-lg hover:shadow-xl transition-shadow animate-fade-in`} style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.avatar}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.text}"</p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Explore Safely?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of gluten-free travelers discovering amazing places worldwide</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8">
              Start Exploring
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 text-lg px-8">
              Add Your Place
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Globe className="h-6 w-6 text-orange-400" />
                <span className="text-xl font-bold">GlutenFree World</span>
              </div>
              <p className="text-gray-400">Making gluten-free travel safe, delicious, and unforgettable.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Explore</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Restaurants</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bakeries</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Hotels</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Markets</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Write a Review</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Join Forum</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Travel Tips</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 GlutenFree World. Made with ❤️ for the gluten-free community.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
