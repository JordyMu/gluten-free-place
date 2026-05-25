import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

interface CityLink {
  name: string;
  slug: string;
}

interface CountryConfig {
  countryName: string;
  hubPath: string; // e.g. /canada, /gluten-free/france
  cityBase: string; // base path for cities, e.g. /gluten-free/canada or /canada
  cities: CityLink[];
}

const COUNTRIES: Record<string, CountryConfig> = {
  canada: {
    countryName: "Canada",
    hubPath: "/canada",
    cityBase: "/canada",
    cities: [
      { name: "Toronto", slug: "toronto" },
      { name: "Montreal", slug: "montreal" },
      { name: "Vancouver", slug: "vancouver" },
      { name: "Calgary", slug: "calgary" },
    ],
  },
  france: {
    countryName: "France",
    hubPath: "/france",
    cityBase: "/gluten-free/france",
    cities: [
      { name: "Paris", slug: "paris" },
      { name: "Lyon", slug: "lyon" },
      { name: "Marseille", slug: "marseille" },
      { name: "Nice", slug: "nice" },
      { name: "Bordeaux", slug: "bordeaux" },
      { name: "Strasbourg", slug: "strasbourg" },
    ],
  },
  kenya: {
    countryName: "Kenya",
    hubPath: "/kenya",
    cityBase: "/gluten-free/kenya",
    cities: [
      { name: "Nairobi", slug: "nairobi" },
      { name: "Mombasa", slug: "mombasa" },
      { name: "Kisumu", slug: "kisumu" },
      { name: "Nakuru", slug: "nakuru" },
    ],
  },
  "united-kingdom": {
    countryName: "United Kingdom",
    hubPath: "/united-kingdom",
    cityBase: "/gluten-free/united-kingdom",
    cities: [
      { name: "London", slug: "london" },
      { name: "Manchester", slug: "manchester" },
      { name: "Birmingham", slug: "birmingham" },
      { name: "Edinburgh", slug: "edinburgh" },
    ],
  },
  mauritius: {
    countryName: "Mauritius",
    hubPath: "/mauritius",
    cityBase: "/gluten-free/mauritius",
    cities: [
      { name: "Port Louis", slug: "port-louis" },
      { name: "Grand Baie", slug: "grand-baie" },
      { name: "Flic en Flac", slug: "flic-en-flac" },
      { name: "Curepipe", slug: "curepipe" },
      { name: "Quatre Bornes", slug: "quatre-bornes" },
      { name: "Mahebourg", slug: "mahebourg" },
    ],
  },
  "south-africa": {
    countryName: "South Africa",
    hubPath: "/south-africa",
    cityBase: "/gluten-free/south-africa",
    cities: [
      { name: "Cape Town", slug: "cape-town" },
      { name: "Johannesburg", slug: "johannesburg" },
      { name: "Durban", slug: "durban" },
      { name: "Pretoria", slug: "pretoria" },
      { name: "Stellenbosch", slug: "stellenbosch" },
      { name: "Franschhoek", slug: "franschhoek" },
    ],
  },
};

interface RelatedCitiesProps {
  country: keyof typeof COUNTRIES | string;
  currentCitySlug?: string;
}

export const RelatedCities = ({ country, currentCitySlug }: RelatedCitiesProps) => {
  const cfg = COUNTRIES[country];
  if (!cfg) return null;
  const others = cfg.cities.filter((c) => c.slug !== currentCitySlug);

  return (
    <section className="mb-12">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <MapPin className="w-5 h-5 text-orange-600" />
            Explore Gluten-Free {cfg.countryName}
          </CardTitle>
          <p className="text-gray-600">
            Browse celiac-safe restaurants and bakeries in more cities across {cfg.countryName}.
          </p>
        </CardHeader>
        <CardContent>
          <nav aria-label={`Other cities in ${cfg.countryName}`}>
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {others.map((c) => (
                <li key={c.slug}>
                  <Link
                    to={`${cfg.cityBase}/${c.slug}`}
                    className="block px-4 py-3 rounded-lg border border-orange-100 bg-white hover:bg-orange-50 hover:border-orange-300 transition-colors text-gray-800 hover:text-orange-700 font-medium text-center"
                  >
                    Gluten-Free {c.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to={cfg.hubPath}
                  className="block px-4 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white hover:opacity-90 transition-opacity font-semibold text-center"
                >
                  All of {cfg.countryName} →
                </Link>
              </li>
            </ul>
          </nav>
        </CardContent>
      </Card>
    </section>
  );
};

export default RelatedCities;
