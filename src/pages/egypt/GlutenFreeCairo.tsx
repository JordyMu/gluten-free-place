import { Link } from "react-router-dom";
import { Trophy } from "lucide-react";
import CanadaCityPage from "@/components/canada/CanadaCityPage";
import CityCategoryNav from "@/components/city/CityCategoryNav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cairoRestaurants } from "@/data/egyptRestaurants";
import type { Restaurant } from "@/data/capeTownRestaurants";

export const restaurantsForCityPage = cairoRestaurants as unknown as Restaurant[];

const faqItems = [
  {
    question: "Is Cairo good for gluten-free travelers?",
    answer:
      "Yes! Cairo has many naturally GF options like grilled meats, rice, ful medames, and a growing number of health-conscious restaurants in Zamalek and Maadi.",
  },
  {
    question: "What traditional Cairo foods are gluten-free?",
    answer:
      "Grilled kebabs, kofta, ful medames (fava beans), rice dishes, and fresh salads are naturally GF. Be cautious with koshari (contains pasta) and aish baladi (bread).",
  },
  {
    question: "Are there dedicated GF restaurants in Cairo?",
    answer:
      "The Gluten Free House and Keto Rockets offer fully GF menus. Many hotel restaurants like Cairo Marriott and Conrad Cairo also have dedicated GF options.",
  },
];

const GlutenFreeCairo = () => (
  <CanadaCityPage
    cityName="Cairo"
    citySlug="cairo"
    countryName="Egypt"
    countrySlug="egypt"
    emoji="🏛️"
    heading="Dedicated Gluten-free Restaurants in Cairo"
    compactHero
    hideOverview
    intro="Cairo's diverse food scene includes dedicated GF restaurants, health-conscious cafés, and luxury hotel dining with celiac-safe options — from Zamalek to Nasr City."
    restaurants={restaurantsForCityPage}
    faqItems={faqItems}
    extraSection={
      <>
        <CityCategoryNav basePath="/gluten-free/egypt/cairo" />

        <section className="mb-10">
          <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
            <CardContent className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-start gap-4">
                <Trophy className="w-8 h-8 text-amber-600 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-1">Best Gluten-Free Restaurants in Cairo</h2>
                  <p className="text-gray-700">
                    Our editorial top 10 celiac-safe picks across Cairo — ranked by safety, reviews and quality.
                  </p>
                </div>
              </div>
              <Link to="/gluten-free/egypt/cairo/best-gluten-free-restaurants-in-cairo" className="md:flex-shrink-0">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white">View the Top 10</Button>
              </Link>
            </CardContent>
          </Card>
        </section>
      </>
    }
  />
);

export default GlutenFreeCairo;
