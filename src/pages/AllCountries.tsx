
import { Search, MapPin, Star, Users, ArrowRight, Globe, Flag, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";

const AllCountries = () => {
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
    <>
    <SEOHead
      title="All 156 Countries with Gluten-Free Restaurants | GlutenFreePlace"
      description="Complete directory of gluten-free restaurants in 156 countries. Find celiac-safe dining options across Europe, Americas, Asia, Africa & Oceania."
      canonical="/all-countries"
    />
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-orange-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-orange-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
              Gluten-Free Places
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-orange-600 transition-colors">Home</Link>
            <Link to="/#destinations" className="text-gray-700 hover:text-orange-600 transition-colors">Destinations</Link>
            <Link to="/#about" className="text-gray-700 hover:text-orange-600 transition-colors">About</Link>
            <Link to="/#reviews" className="text-gray-700 hover:text-orange-600 transition-colors">Reviews</Link>
            <Button variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50">
              Sign In
            </Button>
          </div>
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
              All Gluten-Free
              <br />
              Destinations Worldwide
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Complete list of all 156 countries and territories where gluten-free restaurants have been documented
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

      {/* Statistics Overview */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Global Coverage Statistics</h2>
            <p className="text-xl text-gray-600 mb-8">Distribution of documented gluten-free restaurants by region</p>
            
            {/* Region Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
              {Object.entries(allCountriesByRegion).map(([region, countries]) => (
                <div key={region} className="bg-white rounded-lg p-4 shadow-md">
                  <div className="text-2xl font-bold text-orange-600 mb-1">{countries.length}</div>
                  <div className="text-sm text-gray-600">{region}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Countries by Region */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Countries by Region</h2>
            <p className="text-xl text-gray-600 mb-8">Explore gluten-free destinations organized by geographic region</p>
          </div>

          {/* Countries by Region */}
          <div className="space-y-12">
            {Object.entries(allCountriesByRegion).map(([region, countries]) => (
              <div key={region} className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
                  <Flag className="h-6 w-6 mr-3 text-orange-600" />
                  {region} ({countries.length} countries)
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
          <h2 className="text-3xl font-bold mb-4">Planning Your Next Trip?</h2>
          <p className="text-xl mb-8 opacity-90">Discover gluten-free restaurants in any of these 156 destinations</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                Start Exploring
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white bg-transparent !text-white hover:bg-white hover:text-orange-600">
              Add a Place
            </Button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default AllCountries;
