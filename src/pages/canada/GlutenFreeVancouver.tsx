import { Link } from "react-router-dom";
import { Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import CanadaCityPage from "@/components/canada/CanadaCityPage";
import { vancouverRestaurants } from "@/data/vancouverRestaurants";

const faqItems = [
  { question: "Is Vancouver good for gluten-free dining?", answer: "Yes! Vancouver's health-conscious culture means many restaurants cater to GF diners. Dedicated bakeries like The Gluten Free Epicurean and Lemonade are must-visits." },
  { question: "Which Vancouver neighbourhoods have the best GF options?", answer: "Kitsilano, Main Street, and Cambie Village have excellent dedicated GF spots. Commercial Drive also offers diverse celiac-safe dining." },
];

const BestLink = () => (
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
);

const GlutenFreeVancouver = () => (
  <CanadaCityPage
    cityName="Vancouver"
    citySlug="vancouver"
    emoji="🏔️"
    intro="Vancouver's health-conscious food culture makes it a paradise for gluten-free diners. From The Gluten Free Epicurean's artisan breads to Lemonade Bakery's dedicated facility, the city offers excellent celiac-safe options."
    restaurants={vancouverRestaurants}
    faqItems={faqItems}
    extraSection={<BestLink />}
  />
);

export default GlutenFreeVancouver;
