
import { Search, Globe, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

const topCountries = [
  "Italy",
  "Spain",
  "USA",
  "Canada",
  "Australia",
  "UK",
  "Sweden",
  "Ireland",
  "Argentina",
  "Thailand",
  "Germany",
  "France",
  "Japan",
  "New Zealand",
  "South Africa",
];

const getCountryName = (country: unknown) => {
  if (typeof country === "string") return country;
  if (country && typeof country === "object" && "name" in country) {
    const maybeName = (country as { name?: unknown }).name;
    if (typeof maybeName === "string") return maybeName;
  }
  return "";
};

const getCountryRoute = (country: unknown) => {
  const name = getCountryName(country);
  if (!name) return "/countries";

  switch (name) {
    case "UK":
      return "/united-kingdom";
    case "USA":
      return "/usa";
    case "New Zealand":
      return "/new-zealand";
    default:
      return `/${name.toLowerCase().replace(/\s+/g, "-")}`;
  }
};

export const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-orange-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Globe className="h-8 w-8 text-orange-600" />
          <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
            GlutenFree World
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-orange-600 transition-colors whitespace-nowrap">Home</Link>
          <Link to="/countries" className="text-gray-700 hover:text-orange-600 transition-colors">Countries</Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-gray-700 hover:text-orange-600 transition-colors cursor-pointer">
              Browse
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[680px] bg-white border border-gray-200 shadow-lg z-50">
              <DropdownMenuLabel className="text-orange-600 font-semibold">Top Countries</DropdownMenuLabel>
              <div className="grid grid-cols-4 gap-3 p-4">
                {topCountries.map((country) => (
                  <Link key={country} to={getCountryRoute(country)}>
                    <DropdownMenuItem className="cursor-pointer hover:bg-orange-50 text-base px-4 py-3 text-center min-w-[150px] h-12 flex items-center justify-center">
                      {country}
                    </DropdownMenuItem>
                  </Link>
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
          <Link to="/#about" className="text-gray-700 hover:text-orange-600 transition-colors">About</Link>
          <Link to="/#reviews" className="text-gray-700 hover:text-orange-600 transition-colors">Reviews</Link>
          <Button variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50">
            Sign In
          </Button>
        </nav>
      </div>
    </header>
  );
};
