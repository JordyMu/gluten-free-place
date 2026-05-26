import { Link } from "react-router-dom";
import { Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CanadaCityPage from "@/components/canada/CanadaCityPage";
import { montrealRestaurants } from "@/data/montrealRestaurants";

const faqItems = [
  { question: "Is Montreal good for gluten-free dining?", answer: "Yes! Montreal has a growing GF scene with dedicated bakeries like Parc Sans Gluten and naturally GF options at places like Arepera." },
  { question: "How do I ask for gluten-free in French?", answer: "Say 'sans gluten' (without gluten) or 'maladie cœliaque' (celiac disease). Most Montreal restaurants understand both English and French dietary requests." },
];

const ExtraSections = () => (
  <>
    {/* Browse by Category */}
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        🍽️ Browse by Category
      </h2>
      <p className="text-gray-600 mb-4">
        Find exactly what you're looking for with our curated category pages.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        <Link to="/gluten-free/canada/montreal/street-food">
          <Card className="cursor-pointer hover:shadow-sm transition-shadow border border-orange-200 bg-gradient-to-r from-orange-50 to-red-50">
            <CardContent className="p-2 flex items-center gap-2">
              <span className="text-lg">🍢</span>
              <div>
                <h3 className="text-sm font-medium text-orange-900">Street Food</h3>
                <p className="text-orange-700 text-[11px]">Markets & food trucks</p>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link to="/gluten-free/canada/montreal/bakeries">
          <Card className="cursor-pointer hover:shadow-sm transition-shadow border border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50">
            <CardContent className="p-2 flex items-center gap-2">
              <span className="text-lg">🥐</span>
              <div>
                <h3 className="text-sm font-medium text-amber-900">Bakeries</h3>
                <p className="text-amber-700 text-[11px]">Fresh bread & pastries</p>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link to="/gluten-free/canada/montreal/grocery-stores">
          <Card className="cursor-pointer hover:shadow-sm transition-shadow border border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
            <CardContent className="p-2 flex items-center gap-2">
              <span className="text-lg">🛒</span>
              <div>
                <h3 className="text-sm font-medium text-green-900">Grocery Stores</h3>
                <p className="text-green-700 text-[11px]">Supermarkets & shops</p>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link to="/gluten-free/canada/montreal/gluten-free-products">
          <Card className="cursor-pointer hover:shadow-sm transition-shadow border border-violet-200 bg-gradient-to-r from-violet-50 to-purple-50">
            <CardContent className="p-2 flex items-center gap-2">
              <span className="text-lg">🛍️</span>
              <div>
                <h3 className="text-sm font-medium text-violet-900">GF Products</h3>
                <p className="text-violet-700 text-[11px]">Specialty GF items</p>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </section>

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
  </>
);

const GlutenFreeMontreal = () => (
  <CanadaCityPage
    cityName="Montreal"
    citySlug="montreal"
    emoji="⚜️"
    intro="Montreal's vibrant food scene includes dedicated gluten-free bakeries, French-inspired GF pâtisseries, and naturally celiac-safe Latin American eateries. The bilingual city makes communicating dietary needs easy."
    restaurants={montrealRestaurants}
    faqItems={faqItems}
    extraSection={<ExtraSections />}
  />
);

export default GlutenFreeMontreal;
