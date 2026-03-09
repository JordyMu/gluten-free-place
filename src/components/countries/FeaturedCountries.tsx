
import { CountryCard } from "./CountryCard";

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
    name: "Spain",
    code: "ES", 
    image: "photo-1539037116277-4db20889f2d4",
    places: 298,
    rating: 4.7,
    description: "Vibrant culture with excellent gluten-free tapas and paella restaurants",
    topCities: ["Barcelona", "Madrid", "Seville", "Valencia"]
  },
  {
    id: 3,
    name: "France",
    code: "FR", 
    image: "photo-1499856871958-5b9627545d1a",
    places: 298,
    rating: 4.7,
    description: "Excellent gluten-free bakeries and restaurants in major cities",
    topCities: ["Paris", "Lyon", "Nice", "Bordeaux"]
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
    name: "Canada",
    code: "CA",
    image: "photo-1503614472-8c93d56e92ce",
    places: 255,
    rating: 4.7,
    description: "Coast-to-coast gluten-free dining with amazing bakeries and diverse cuisine",
    topCities: ["Toronto", "Vancouver", "Montreal", "Calgary"]
  },
  {
    id: 6,
    name: "Ireland",
    code: "IE",
    image: "photo-1590089415225-401ed6f9db8e",
    places: 30,
    rating: 4.6,
    description: "Traditional Irish cuisine with growing gluten-free awareness and options",
    topCities: ["Dublin", "Cork", "Galway", "Limerick"]
  },
  {
    id: 7,
    name: "United States",
    code: "US",
    image: "photo-1485738422979-f5c462d49f74",
    places: 756,
    rating: 4.6,
    description: "Leading in gluten-free awareness with extensive options nationwide",
    topCities: ["New York", "Los Angeles", "San Francisco", "Chicago"]
  },
  {
    id: 8,
    name: "United Kingdom",
    code: "UK",
    image: "photo-1513635269975-59663e0ac1ad",
    places: 234,
    rating: 4.5,
    description: "Growing gluten-free scene with traditional pubs offering GF options",
    topCities: ["London", "Edinburgh", "Manchester", "Bristol"]
  },
  {
    id: 9,
    name: "Germany",
    code: "DE",
    image: "photo-1467269204594-9661b134dd2b",
    places: 167,
    rating: 4.6,
    description: "Strong gluten-free movement with dedicated stores and restaurants",
    topCities: ["Berlin", "Munich", "Hamburg", "Cologne"]
  },
  {
    id: 10,
    name: "New Zealand",
    code: "NZ",
    image: "photo-1506905925346-21bda4d32df4",
    places: 50,
    rating: 4.6,
    description: "Incredible gluten-free dining from Auckland to Queenstown with fresh, local ingredients",
    topCities: ["Auckland", "Wellington", "Christchurch", "Queenstown"]
  },
  {
    id: 11,
    name: "Sweden",
    code: "SE",
    image: "photo-1509356843151-3e7d96241e11",
    places: 48,
    rating: 4.6,
    description: "Exceptional fika culture with dedicated gluten-free bakeries and innovative restaurants",
    topCities: ["Stockholm", "Gothenburg", "Malmö", "Uppsala"]
  },
  {
    id: 12,
    name: "Thailand",
    code: "TH",
    image: "photo-1552465011-b4e21bf6e79a",
    places: 50,
    rating: 4.7,
    description: "Amazing gluten-free Thai cuisine from street food to fine dining with trained staff",
    topCities: ["Bangkok", "Chiang Mai", "Phuket", "Koh Samui"]
  },
  {
    id: 13,
    name: "Argentina",
    code: "AR",
    image: "photo-1612294037637-ec328d0e075e",
    places: 50,
    rating: 4.7,
    description: "Exceptional gluten-free dining from Buenos Aires to Patagonia with celiac-aware restaurants",
    topCities: ["Buenos Aires", "Mendoza", "Bariloche", "Cordoba"]
  },
  {
    id: 14,
    name: "South Africa",
    code: "ZA",
    image: "photo-1516026672322-bc52d61a55d5",
    places: 45,
    rating: 4.5,
    description: "Growing gluten-free scene with excellent options in major cities and wine regions",
    topCities: ["Cape Town", "Johannesburg", "Durban", "Pretoria"]
  },
  {
    id: 15,
    name: "Mauritius",
    code: "MU",
    image: "photo-1544551763-46a013bb70d5",
    places: 60,
    rating: 4.6,
    description: "Indian Ocean paradise with naturally gluten-free Creole, Indian, and French-inspired cuisine",
    topCities: ["Port Louis", "Grand Baie", "Flic en Flac", "Curepipe"]
  },
  {
    id: 16,
    name: "Kenya",
    code: "KE",
    image: "photo-1489392191049-fc10c97e64b6",
    places: 35,
    rating: 4.4,
    description: "East African flavors with naturally gluten-free staples like ugali and nyama choma",
    topCities: ["Nairobi", "Mombasa", "Kisumu", "Nakuru"]
  },
  {
    id: 17,
    name: "Nigeria",
    code: "NG",
    image: "photo-1504674900247-0877df9cc836",
    places: 30,
    rating: 4.3,
    description: "West African cuisine rich in naturally gluten-free dishes like jollof rice and suya",
    topCities: ["Lagos", "Abuja", "Port Harcourt", "Ibadan"]
  },
  {
    id: 18,
    name: "Morocco",
    code: "MA",
    image: "photo-1489749798305-4fea3ae63d43",
    places: 40,
    rating: 4.5,
    description: "Tagines, couscous alternatives, and vibrant spice-rich dishes for gluten-free travelers",
    topCities: ["Marrakech", "Casablanca", "Fes", "Chefchaouen"]
  },
  {
    id: 19,
    name: "Egypt",
    code: "EG",
    image: "photo-1539650116574-8efeb43e2750",
    places: 25,
    rating: 4.3,
    description: "Ancient land with naturally GF staples like ful medames, grilled meats, and fresh salads",
    topCities: ["Cairo", "Alexandria", "Luxor", "Sharm El Sheikh"]
  },
  {
    id: 20,
    name: "Botswana",
    code: "BW",
    image: "photo-1516426122078-c23e76319801",
    places: 15,
    rating: 4.2,
    description: "Safari destination with naturally gluten-free game meats and traditional dishes",
    topCities: ["Gaborone", "Maun", "Kasane", "Francistown"]
  },
  {
    id: 21,
    name: "Japan",
    code: "JP",
    image: "photo-1493976040374-85c8e12f0c0e",
    places: 120,
    rating: 4.7,
    description: "Sushi, sashimi, and rice-based cuisine make Japan a great gluten-free destination",
    topCities: ["Tokyo", "Osaka", "Kyoto", "Hiroshima"]
  }
];

interface FeaturedCountriesProps {
  searchQuery: string;
}

export const FeaturedCountries = ({ searchQuery }: FeaturedCountriesProps) => {
  const filteredCountries = featuredCountries.filter((country) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      country.name.toLowerCase().includes(q) ||
      country.topCities.some((city) => city.toLowerCase().includes(q)) ||
      country.description.toLowerCase().includes(q)
    );
  });

  return (
    <section className="py-16 bg-white/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Top-Rated Countries</h2>
          <p className="text-xl text-gray-600">Countries with the best gluten-free dining experiences</p>
        </div>
        {filteredCountries.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCountries.map((country, index) => (
              <CountryCard key={country.id} country={country} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">No countries found matching "{searchQuery}"</p>
            <p className="text-gray-400 mt-2">Try a different search term</p>
          </div>
        )}
      </div>
    </section>
  );
};
