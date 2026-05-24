import { Link } from "react-router-dom";
import { Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import CanadaCityPage from "@/components/canada/CanadaCityPage";
import { montrealRestaurants } from "@/data/montrealRestaurants";

const faqItems = [
  { question: "Is Montreal good for gluten-free dining?", answer: "Yes! Montreal has a growing GF scene with dedicated bakeries like Parc Sans Gluten and naturally GF options at places like Arepera." },
  { question: "How do I ask for gluten-free in French?", answer: "Say 'sans gluten' (without gluten) or 'maladie cœliaque' (celiac disease). Most Montreal restaurants understand both English and French dietary requests." },
];

const BestLink = () => (
  <section className="mb-10">
    <Link to="/gluten-free/canada/montreal/best-gluten-free-restaurants-in-montreal" className="block">
      <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200 hover:shadow-md transition-shadow">
        <CardContent className="p-6 flex items-center gap-4">
          <Award className="w-8 h-8 text-amber-600 flex-shrink-0" />
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Best Gluten-Free Restaurants in Montreal</h2>
            <p className="text-gray-700">See our top celiac-safe picks ranked by safety, reviews and quality →</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  </section>
);

const GlutenFreeMontreal = () => (
  <CanadaCityPage
    cityName="Montreal"
    citySlug="montreal"
    emoji="⚜️"
    intro="Montreal's vibrant food scene includes dedicated gluten-free bakeries, French-inspired GF pâtisseries, and naturally celiac-safe Latin American eateries. The bilingual city makes communicating dietary needs easy."
    restaurants={montrealRestaurants}
    faqItems={faqItems}
    extraSection={<BestLink />}
  />
);

export default GlutenFreeMontreal;
