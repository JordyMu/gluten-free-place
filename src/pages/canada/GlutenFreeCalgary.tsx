import { Link } from "react-router-dom";
import { Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CanadaCityPage from "@/components/canada/CanadaCityPage";
import { calgaryRestaurants } from "@/data/calgaryRestaurants";

const faqItems = [
  { question: "Is Calgary good for gluten-free dining?", answer: "Calgary's GF scene is growing, with Asian restaurants offering naturally rice-based GF options and an increasing number of GF-aware eateries." },
  { question: "What GF options are near Banff?", answer: "Canmore (near Banff) has Wild Orchid Asian Bistro and Lovely Ice Cream with GF options. Many Banff restaurants also offer GF menus." },
];

const GlutenFreeCalgary = () => (
  <CanadaCityPage
    cityName="Calgary"
    citySlug="calgary"
    emoji="🤠"
    intro="Calgary's dining scene offers growing gluten-free options, especially in Asian cuisine with naturally rice-based dishes. The city's proximity to the Rocky Mountains also means access to celiac-safe dining in nearby Canmore and Banff."
    restaurants={calgaryRestaurants}
    faqItems={faqItems}
    extraSection={
      <section className="mb-10">
        <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
          <CardContent className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-start gap-4">
              <Trophy className="w-8 h-8 text-amber-600 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-1">Best Gluten-Free Restaurants in Calgary</h2>
                <p className="text-gray-700">Our editorial top 10 celiac-safe picks across Calgary — ranked by safety, reviews and quality.</p>
              </div>
            </div>
            <Link to="/gluten-free/canada/calgary/best-gluten-free-restaurants-in-calgary" className="md:flex-shrink-0">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">View the Top 10</Button>
            </Link>
          </CardContent>
        </Card>
      </section>
    }
  />
);

export default GlutenFreeCalgary;
