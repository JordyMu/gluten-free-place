
import { MapPin, Star, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface CountryCardProps {
  country: {
    id: number;
    name: string;
    code: string;
    image: string;
    places: number;
    rating: number;
    description: string;
    topCities: string[];
  };
  index: number;
}

export const CountryCard = ({ country, index }: CountryCardProps) => {
  const getCountryLink = (countryName: string) => {
    switch (countryName) {
      case "Italy": return "/italy";
      case "Spain": return "/spain";
      case "France": return "/france";
      case "Australia": return "/australia";
      case "Canada": return "/canada";
      case "United Kingdom": return "/united-kingdom";
      case "Ireland": return "/ireland";
      case "Germany": return "/germany";
      case "New Zealand": return "/new-zealand";
      default: return "#";
    }
  };

  const ExploreButton = ({ countryName }: { countryName: string }) => {
    const link = getCountryLink(countryName);
    
    if (link === "#") {
      return (
        <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
          Explore {countryName}
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      );
    }

    return (
      <Link to={link}>
        <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
          Explore {countryName}
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </Link>
    );
  };

  return (
    <Card className={`group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg animate-fade-in`} style={{animationDelay: `${index * 0.1}s`}}>
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

        <ExploreButton countryName={country.name} />
      </CardContent>
    </Card>
  );
};
