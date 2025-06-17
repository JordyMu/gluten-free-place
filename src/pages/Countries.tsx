import { Search, MapPin, Star, Users, ArrowRight, Globe, Flag, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Countries = () => {
  const featuredCountries = [
    {
      id: 1,
      name: "Italy",
      code: "IT",
      image: "photo-1523906834658-6e24ef2386f9",
      places: 342,
      rating: 4.8,
      description: "Home to naturally gluten-free cuisine with amazing risottos and polenta dishes",
      topCities: ["Rome", "Milan", "Florence", "Venice"]
    },
    {
      id: 2,
      name: "France",
      code: "FR", 
      image: "photo-1502602898536-47ad22581b52",
      places: 298,
      rating: 4.7,
      description: "Excellent gluten-free bakeries and restaurants in major cities",
      topCities: ["Paris", "Lyon", "Nice", "Bordeaux"]
    },
    {
      id: 3,
      name: "United States",
      code: "US",
      image: "photo-1485738422979-f5c462d49f74",
      places: 756,
      rating: 4.6,
      description: "Leading in gluten-free awareness with extensive options nationwide",
      topCities: ["New York", "Los Angeles", "San Francisco", "Chicago"]
    },
    {
      id: 4,
      name: "Australia",
      code: "AU",
      image: "photo-1506905925346-21bda4d32df4",
      places: 189,
      rating: 4.9,
      description: "Fantastic gluten-free culture with excellent cafes and restaurants",
      topCities: ["Sydney", "Melbourne", "Brisbane", "Perth"]
    },
    {
      id: 5,
      name: "United Kingdom",
      code: "UK",
      image: "photo-1513635269975-59663e0ac1ad",
      places: 234,
      rating: 4.5,
      description: "Growing gluten-free scene with traditional pubs offering GF options",
      topCities: ["London", "Edinburgh", "Manchester", "Bristol"]
    },
    {
      id: 6,
      name: "Germany",
      code: "DE",
      image: "photo-1467269204594-9661b134dd2b",
      places: 167,
      rating: 4.6,
      description: "Strong gluten-free movement with dedicated stores and restaurants",
      topCities: ["Berlin", "Munich", "Hamburg", "Cologne"]
    }
  ];

  const topCountries = [
    "Italy", "Spain", "USA", "Canada", "Australia", 
    "UK", "Sweden", "Ireland", "Argentina", "Thailand", "Germany"
  ];

  const allCountriesByRegion = {
    "Europe": [
      "Albania", "Andorra", "Austria", "Belgium", "Bosnia and Herzegovina", "Bulgaria", 
      "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Faroe Islands", 
      "Finland", "France", "Germany", "Gibraltar", "Greece", "Greenland", "Guernsey", 
      "Hungary", "Iceland", "Ireland", "Isle of Man", "Italy", "Jersey", "Kosovo", 
      "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Moldova", "Monaco", 
      "Montenegro", "Netherlands", "North Macedonia", "Norway", "Poland", "Portugal", 
      "Romania", "Russia", "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain", 
      "Svalbard and Jan Mayen", "Sweden", "Switzerland", "The United Kingdom", "Ukraine", 
      "Åland Islands"
    ],
    "Americas": [
      "Canada", "The United States", "Belize", "Costa Rica", "El Salvador", "Guatemala", 
      "Honduras", "Mexico", "Nicaragua", "Panama", "Antigua and Barbuda", "Aruba", 
      "Bahrain", "Barbados", "Bermuda", "Bonaire, Sint Eustatius and Saba", 
      "British Virgin Islands", "Cayman Islands", "Cuba", "Curaçao", "Dominican Republic", 
      "Grenada", "Guadeloupe", "Jamaica", "Saint Barthélemy", "Saint Lucia", "Saint Martin", 
      "Sint Maarten", "St Kitts & Nevis", "Suriname", "The Bahamas", "Trinidad and Tobago", 
      "Turks and Caicos Islands", "US Virgin Islands", "Argentina", "Bolivia", "Brazil", 
      "Chile", "Colombia", "Ecuador", "Paraguay", "Peru", "Uruguay", "Venezuela"
    ],
    "Asia": [
      "China", "Hong Kong", "Japan", "Mongolia", "South Korea", "Taiwan", "Cambodia", 
      "Indonesia", "Laos", "Malaysia", "Philippines", "Singapore", "Thailand", "Vietnam", 
      "India", "Nepal", "Pakistan", "Sri Lanka", "Armenia", "Azerbaijan", "Georgia", 
      "Kazakhstan", "Turkmenistan", "Uzbekistan", "Turkey"
    ],
    "Middle East & North Africa": [
      "Bahrain", "Egypt", "Israel", "Jordan", "Lebanon", "Morocco", "Oman", "Qatar", 
      "Saudi Arabia", "Tunisia", "United Arab Emirates"
    ],
    "Africa": [
      "Ethiopia", "Kenya", "Madagascar", "Namibia", "Nigeria", "Rwanda", "Senegal", 
      "South Africa", "Tanzania", "The Gambia", "Zimbabwe"
    ],
    "Oceania & Pacific Islands": [
      "Australia", "New Zealand", "Papua New Guinea", "Cook Islands", "Fiji", 
      "French Polynesia", "Guam", "Maldives", "Mauritius", "Norfolk Island", "Samoa", 
      "Saint Helena, Ascension and Tristan da Cunha"
    ]
  };

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
          <NavigationMenu>
            <NavigationMenuList className="hidden md:flex items-center space-x-8">
              <Link to="/#destinations" className="text-gray-700 hover:text-orange-600 transition-colors">Destinations</Link>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-orange-50 text-orange-600 font-medium data-[active]:bg-orange-50 data-[state=open]:bg-orange-50">
                  Countries
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-80 p-6 bg-white shadow-lg">
                    {/* Quick Actions */}
                    <div className="flex gap-2 mb-6">
                      <Link
                        to="/"
                        className="flex items-center justify-center px-4 py-2 bg-orange-50 text-orange-600 rounded-lg hover:bg-orange-100 transition-colors flex-1 group"
                      >
                        <Home className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                        <span className="font-medium">Home</span>
                      </Link>
                      <Link
                        to="/countries"
                        className="flex items-center justify-center px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors flex-1 group"
                      >
                        <Globe className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                        <span className="font-medium">All Countries</span>
                      </Link>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-4 text-gray-900 border-t border-gray-100 pt-4">Top Countries</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {topCountries.map((country) => (
                        <Link
                          key={country}
                          to={`/countries#${country.toLowerCase()}`}
                          className="flex items-center p-2 rounded-md hover:bg-orange-50 transition-colors group"
                        >
                          <Flag className="h-4 w-4 text-orange-600 mr-2 group-hover:text-orange-700" />
                          <span className="text-sm text-gray-700 group-hover:text-orange-700">
                            {country}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <Link to="/#about" className="text-gray-700 hover:text-orange-600 transition-colors">About</Link>
              <Link to="/#reviews" className="text-gray-700 hover:text-orange-600 transition-colors">Reviews</Link>
              <Button variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50">
                Sign In
              </Button>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-blue-600/10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-orange-100 text-orange-800 border-orange-200">
              <Flag className="h-4 w-4 mr-2" />
              156 Countries & Territories
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-500 to-blue-600 bg-clip-text text-transparent">
              Gluten-Free Destinations
              <br />
              Around the World
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Discover gluten-free friendly destinations across 156 countries and territories worldwide
            </p>
            
            {/* Search Bar */}
            <div className="max-w-xl mx-auto mb-8">
              <div className="relative flex bg-white rounded-full shadow-xl border border-orange-100 p-2">
                <div className="flex-1 flex items-center px-4">
                  <Search className="h-5 w-5 text-gray-400 mr-3" />
                  <Input 
                    placeholder="Search countries..." 
                    className="border-0 focus-visible:ring-0"
                  />
                </div>
                <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-full px-6">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Countries Grid */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Featured Destinations</h2>
            <p className="text-xl text-gray-600">Top-rated countries for gluten-free dining</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCountries.map((country, index) => (
              <Card key={country.id} className={`group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg animate-fade-in`} style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={`https://images.unsplash.com/${country.image}?auto=format&fit=crop&w=600&q=80`}
                    alt={country.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span className="font-semibold text-sm">{country.rating}</span>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-blue-500 text-white border-0">
                    {country.code}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{country.name}</h3>
                  <p className="text-gray-600 mb-4">{country.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-orange-600">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="font-semibold">{country.places} places</span>
                    </div>
                    <div className="flex items-center text-blue-600">
                      <Users className="h-4 w-4 mr-1" />
                      <span className="text-sm">Verified reviews</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">Top Cities:</p>
                    <div className="flex flex-wrap gap-1">
                      {country.topCities.map((city) => (
                        <Badge key={city} variant="secondary" className="text-xs">
                          {city}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                    Explore {country.name}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Countries by Region */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">All 156 Countries & Territories</h2>
            <p className="text-xl text-gray-600 mb-8">Complete list of destinations with documented gluten-free restaurants</p>
            
            {/* Region Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto mb-12">
              {Object.entries(allCountriesByRegion).map(([region, countries]) => (
                <div key={region} className="bg-white rounded-lg p-4 shadow-md">
                  <div className="text-2xl font-bold text-orange-600 mb-1">{countries.length}</div>
                  <div className="text-sm text-gray-600">{region}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Countries by Region */}
          <div className="space-y-12">
            {Object.entries(allCountriesByRegion).map(([region, countries]) => (
              <div key={region} className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
                  <Flag className="h-6 w-6 mr-3 text-orange-600" />
                  {region} ({countries.length})
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                  {countries.map((country) => (
                    <div
                      key={country}
                      className="bg-gray-50 hover:bg-orange-50 rounded-lg px-4 py-3 text-sm text-gray-700 hover:text-orange-700 transition-colors cursor-pointer border border-gray-200 hover:border-orange-200"
                    >
                      {country}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Market Tiers */}
          <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Market Development Tiers</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-green-700 mb-2">Tier 1 - Mature Markets</h4>
                <p className="text-sm text-gray-600 mb-2">Established gluten-free infrastructure</p>
                <div className="text-sm text-gray-700">USA, Canada, UK, Ireland, Italy, Spain, France, Germany, Australia, New Zealand</div>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-blue-700 mb-2">Tier 2 - Developing Markets</h4>
                <p className="text-sm text-gray-600 mb-2">Growing awareness and options</p>
                <div className="text-sm text-gray-700">Japan, South Korea, Singapore, Israel, UAE, South Africa, Brazil, Argentina</div>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <h4 className="font-semibold text-yellow-700 mb-2">Tier 3 - Emerging Markets</h4>
                <p className="text-sm text-gray-600 mb-2">Limited but growing options</p>
                <div className="text-sm text-gray-700">Most remaining countries with developing gluten-free scenes</div>
              </div>
              <div className="border-l-4 border-gray-500 pl-4">
                <h4 className="font-semibold text-gray-700 mb-2">Tier 4 - Minimal Presence</h4>
                <p className="text-sm text-gray-600 mb-2">Very few documented establishments</p>
                <div className="text-sm text-gray-700">Smaller nations and developing countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Don't See Your Country?</h2>
          <p className="text-xl mb-8 opacity-90">Help us expand our global coverage by adding places from your region</p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
            Add a Place
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Countries;
