
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
    image: "photo-1502602898536-47ad22581b52",
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
    image: "photo-1590736969955-71cc94901144",
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
  }
];

export const FeaturedCountries = () => {
  return (
    <section className="py-16 bg-white/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Top-Rated Countries</h2>
          <p className="text-xl text-gray-600">Countries with the best gluten-free dining experiences</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCountries.map((country, index) => (
            <CountryCard key={country.id} country={country} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
