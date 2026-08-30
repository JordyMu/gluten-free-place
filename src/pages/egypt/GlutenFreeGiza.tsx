import { Link } from "react-router-dom";
import { Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CanadaCityPage from "@/components/canada/CanadaCityPage";
import { gizaRestaurants } from "@/data/egyptRestaurants";
import type { Restaurant } from "@/data/capeTownRestaurants";

export const restaurantsForCityPage = gizaRestaurants as unknown as Restaurant[];

const faqItems = [
  {
    question: "Can I find gluten-free food near the Pyramids?",
    answer:
      "Yes! The Moghul Room, Dolato Gelateria at the Grand Egyptian Museum, Alfredo Restaurant, and El Dar Darak all offer GF options near the Pyramids.",
  },
  {
    question: "Is Gad restaurant safe for celiacs?",
    answer:
      "Gad offers grilled meats and rice that are naturally GF, but be cautious of their bread-based items. Always confirm preparation when ordering.",
  },
  {
    question: "Are there hotel restaurants in Giza with GF menus?",
    answer:
      "Yes. Aura at Four Seasons, Alfredo at Marriott Mena House, and Sapporo at Sheraton Cairo all have staff trained to handle GF requests and can prepare celiac-safe meals.",
  },
];

const GlutenFreeGiza = () => (
  <CanadaCityPage
    cityName="Giza"
    citySlug="giza"
    countryName="Egypt"
    countrySlug="egypt"
    emoji="🏜️"
    heading="Dedicated Gluten-Free Restaurants in Giza"
    compactHero
    intro="Home to the Great Pyramids, Giza offers tourist-friendly restaurants, luxury hotel dining, and local Egyptian eateries with gluten-free options — from Italian and Indian to traditional grills and gelato."
    restaurants={restaurantsForCityPage}
    faqItems={faqItems}
    extraSection={
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
            <Link to="/gluten-free/egypt/giza/street-food">
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
            <Link to="/gluten-free/egypt/giza/bakeries">
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
            <Link to="/gluten-free/egypt/giza/grocery-stores">
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
            <Link to="/gluten-free/egypt/giza/gluten-free-products">
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
          <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
            <CardContent className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-start gap-4">
                <Trophy className="w-8 h-8 text-amber-600 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-1">Best Gluten-Free Restaurants in Giza</h2>
                  <p className="text-gray-700">Our editorial top celiac-safe picks across Giza — ranked by safety, reviews and quality.</p>
                </div>
              </div>
              <Link to="/gluten-free/egypt/giza/best-gluten-free-restaurants-in-giza" className="md:flex-shrink-0">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white">View the Top 10</Button>
              </Link>
            </CardContent>
          </Card>
        </section>
      </>
    }
  />
);

export default GlutenFreeGiza;
