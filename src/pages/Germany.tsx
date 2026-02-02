import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useCountrySEO } from "@/hooks/useCountrySEO";

const Germany = () => {
  useCountrySEO({
    countryName: "Germany",
    countrySlug: "germany",
    description: "Find the best gluten-free restaurants in Germany. Certified GF bakeries, restaurants & cafes in Berlin, Munich, Hamburg, Frankfurt & more cities.",
    ogDescription: "Discover gluten-free German dining. Browse DZG-certified restaurants, bakeries, and traditional German cuisine made safe for celiacs.",
    cities: [
      { name: "Berlin" },
      { name: "Munich" },
      { name: "Hamburg" },
      { name: "Frankfurt" }
    ],
    faqs: [
      { question: "Is Germany good for gluten-free travelers?", answer: "Yes! Germany has strong celiac awareness with DZG (Deutsche Zöliakie Gesellschaft) certification and many dedicated GF options." },
      { question: "What is DZG certification?", answer: "DZG (German Celiac Society) certifies products and restaurants that meet strict gluten-free standards in Germany." },
      { question: "Can I find GF German bread?", answer: "Absolutely! Many German bakeries offer gluten-free versions of traditional breads and pretzels." }
    ],
    schemaId: "germany"
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-red-50">
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center space-x-2 hover:opacity-80 transition-opacity mb-4">
            <ArrowLeft className="h-5 w-5" />
            <span className="text-sm font-medium">Back to Countries</span>
          </Link>
          <div className="flex items-center space-x-4">
            <div className="text-6xl">🇩🇪</div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Germany</h1>
              <p className="text-lg text-gray-600">Coming Soon - Top Gluten-Free Restaurants</p>
            </div>
          </div>
        </div>
      </header>
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl text-gray-600">German gluten-free restaurants coming soon!</p>
        </div>
      </section>
    </div>
  );
};

export default Germany;
