import { MapPin, Star, Users, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
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
    isLocal?: boolean;
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
      case "Italy":
        return "/italy";
      case "Spain":
        return "/spain";
      case "France":
        return "/france";
      case "Australia":
        return "/australia";
      case "Canada":
        return "/canada";
      case "United Kingdom":
        return "/united-kingdom";
      case "Ireland":
        return "/ireland";
      case "Germany":
        return "/germany";
      case "New Zealand":
        return "/new-zealand";
      case "Sweden":
        return "/sweden";
      case "Thailand":
        return "/thailand";
      case "South Africa":
        return "/gluten-free/south-africa";
      case "Argentina":
        return "/argentina";
      case "United States":
        return "/usa";
      case "Japan":
        return "/japan";
      case "Mauritius":
        return "/gluten-free/mauritius";
      case "Kenya":
        return "/gluten-free/kenya";
      case "Nigeria":
        return "/gluten-free/nigeria";
      case "Morocco":
        return "/gluten-free/morocco";
      case "Egypt":
        return "/gluten-free/egypt";
      case "Botswana":
        return "/gluten-free/botswana";
      default:
        return "#";
    }
  };

  const countryLink = getCountryLink(country.name);

  const ExploreButton = ({ countryName }: { countryName: string }) => {
    if (countryLink === "#") {
      return (
        <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
          Explore {countryName}
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      );
    }

    return (
      <Link to={countryLink}>
        <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
          Explore {countryName}
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </Link>
    );
  };

  const ImageWrapper = ({ children }: { children: ReactNode }) => {
    if (countryLink === "#") {
      return <>{children}</>;
    }
    return (
      <Link to={countryLink} className="block">
        {children}
      </Link>
    );
  };

  return (
    <Card
      className={`group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg animate-fade-in`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <ImageWrapper>
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={country.isLocal ? country.image : `https://images.unsplash.com/${country.image}?auto=format&fit=crop&w=600&q=80`}
            alt={country.name}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
            <span className="font-semibold text-sm">{country.rating}</span>
          </div>
          <Badge className="absolute top-4 left-4 bg-blue-500 text-white border-0">{country.code}</Badge>
        </div>
      </ImageWrapper>
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-gray-900">{country.name}</h3>
        <p className="text-gray-600 mb-4">{country.description}</p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-orange-600">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="font-semibold">{country.places} places</span>
          </div>
          <div className="flex items-center text-orange-600">
            <Users className="h-4 w-4 mr-1" />
            <span className="text-sm">Verified reviews</span>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-sm text-gray-500 mb-2">Top Cities:</p>
          <div className="flex flex-wrap gap-1">
            {country.topCities.map((city) => {
              let cityLink = "#";

              // Cities with dedicated pages link directly
              const dedicatedCityPages: Record<string, Record<string, string>> = {
                "Germany": {
                  "Berlin": "/gluten-free/germany/berlin",
                  "Munich": "/gluten-free/germany/munich",
                  "Hamburg": "/gluten-free/germany/hamburg",
                  "Cologne": "/gluten-free/germany/cologne",
                },
                "New Zealand": {
                  "Auckland": "/gluten-free/new-zealand/auckland",
                  "Wellington": "/gluten-free/new-zealand/wellington",
                  "Christchurch": "/gluten-free/new-zealand/christchurch",
                  "Queenstown": "/gluten-free/new-zealand/queenstown-arrowtown",
                },
                "Australia": {
                  "Sydney": "/gluten-free/australia/sydney",
                  "Melbourne": "/gluten-free/australia/melbourne",
                  "Brisbane": "/gluten-free/australia/brisbane",
                  "Perth": "/gluten-free/australia/perth",
                },
                "Canada": {
                  "Toronto": "/gluten-free/canada/toronto",
                  "Vancouver": "/gluten-free/canada/vancouver",
                  "Montreal": "/gluten-free/canada/montreal",
                  "Calgary": "/gluten-free/canada/calgary",
                },
                "France": {
                  "Paris": "/gluten-free/france/paris",
                  "Lyon": "/gluten-free/france/lyon",
                  "Nice": "/gluten-free/france/nice",
                  "Bordeaux": "/gluten-free/france/bordeaux",
                  "Marseille": "/gluten-free/france/marseille",
                  "Strasbourg": "/gluten-free/france/strasbourg",
                },
                "United Kingdom": {
                  "London": "/gluten-free/united-kingdom/london",
                  "Edinburgh": "/gluten-free/united-kingdom/edinburgh",
                  "Manchester": "/gluten-free/united-kingdom/manchester",
                  "Birmingham": "/gluten-free/united-kingdom/birmingham",
                },
                "Ireland": {
                  "Dublin": "/gluten-free/ireland/dublin",
                  "Cork": "/gluten-free/ireland/cork",
                  "Galway": "/gluten-free/ireland/galway",
                  "Limerick": "/gluten-free/ireland/limerick",
                },
                "Italy": {
                  "Rome": "/gluten-free/italy/rome",
                  "Milan": "/gluten-free/italy/milan",
                  "Florence": "/gluten-free/italy/florence",
                  "Venice": "/gluten-free/italy/venice",
                },
                "Kenya": {
                  "Nairobi": "/gluten-free/kenya/nairobi",
                  "Mombasa": "/gluten-free/kenya/mombasa",
                  "Kisumu": "/gluten-free/kenya/kisumu",
                  "Nakuru": "/gluten-free/kenya/nakuru",
                },
                "Egypt": {
                  "Cairo": "/gluten-free/egypt/cairo",
                  "Alexandria": "/gluten-free/egypt/alexandria",
                  "Giza": "/gluten-free/egypt/giza",
                  "Sharm El Sheikh": "/gluten-free/egypt/sharm-el-sheikh",
                },
              };

              const dedicated = dedicatedCityPages[country.name]?.[city];
              if (dedicated) {
                cityLink = dedicated;
              } else if (country.name === "South Africa") {
                const citySlug = city.toLowerCase().replace(/\s+/g, '-');
                cityLink = (citySlug === "stellenbosch" || citySlug === "franschhoek")
                  ? `/gluten-free/south-africa/cape-town/${citySlug}`
                  : `/gluten-free/south-africa/${citySlug}`;
              } else if (country.name === "Morocco" && ["Marrakech", "Casablanca", "Rabat", "Tangier"].includes(city)) {
                const slugMap: Record<string, string> = {
                  Marrakech: "marrakesh",
                  Casablanca: "casablanca",
                  Rabat: "rabat",
                  Tangier: "tangier",
                };
                cityLink = `/gluten-free/morocco/${slugMap[city]}`;
              } else if (country.name === "Mauritius" || country.name === "Sweden") {
                const base = country.name === "Sweden" ? "/gluten-free/sweden" : countryLink;
                const citySlug = city
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[̀-ͯ]/g, "")
                  .replace(/[^a-z0-9]+/g, "-")
                  .replace(/^-+|-+$/g, "");
                cityLink = `${base}/${citySlug}`;
              } else if (countryLink !== "#") {
                cityLink = `${countryLink}?city=${encodeURIComponent(city)}`;
              }
              
              return (
                <Link key={city} to={cityLink}>
                  <Badge
                    variant="secondary"
                    className="text-xs cursor-pointer hover:bg-orange-100 hover:text-orange-700 transition-colors"
                  >
                    {city}
                  </Badge>
                </Link>
              );
            })}
          </div>
        </div>

        <ExploreButton countryName={country.name} />
      </CardContent>
    </Card>
  );
};
