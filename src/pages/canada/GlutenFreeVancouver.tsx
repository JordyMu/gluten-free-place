import { Link } from "react-router-dom";
import { Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import CanadaCityPage from "@/components/canada/CanadaCityPage";
import { vancouverRestaurants } from "@/data/vancouverRestaurants";

const faqItems = [
  { question: "Is Vancouver good for gluten-free dining?", answer: "Yes! Vancouver's health-conscious culture means many restaurants cater to GF diners. Dedicated bakeries like The Gluten Free Epicurean and Lemonade are must-visits." },
  { question: "Which Vancouver neighbourhoods have the best GF options?", answer: "Kitsilano, Main Street, and Cambie Village have excellent dedicated GF spots. Commercial Drive also offers diverse celiac-safe dining." },
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
        <Link to="/gluten-free/canada/vancouver/street-food">
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
        <Link to="/gluten-free/canada/vancouver/bakeries">
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
        <Link to="/gluten-free/canada/vancouver/grocery-stores">
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
        <Link to="/gluten-free/canada/vancouver/gluten-free-products">
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
      <Link to="/gluten-free/canada/vancouver/best-gluten-free-restaurants-in-vancouver" className="block">
        <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200 hover:shadow-md transition-shadow">
          <CardContent className="p-6 flex items-center gap-4">
            <Award className="w-8 h-8 text-amber-600 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-1">Best Gluten-Free Restaurants in Vancouver</h2>
              <p className="text-gray-700">See our top celiac-safe picks ranked by safety, reviews and quality →</p>
            </div>
          </CardContent>
        </Card>
      </Link>
    </section>
  </>
);

const GlutenFreeVancouver = () => (
  <CanadaCityPage
    cityName="Vancouver"
    citySlug="vancouver"
    emoji="🏔️"
    intro="Vancouver's health-conscious food culture makes it a paradise for gluten-free diners. From The Gluten Free Epicurean's artisan breads to Lemonade Bakery's dedicated facility, the city offers excellent celiac-safe options."
    restaurants={vancouverRestaurants}
    faqItems={faqItems}
    extraSection={<ExtraSections />}
  />
);

export default GlutenFreeVancouver;
