import { Link } from "react-router-dom";
import { Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CanadaCityPage from "@/components/canada/CanadaCityPage";
import { sharmElSheikhRestaurants } from "@/data/egyptRestaurants";
import type { Restaurant } from "@/data/capeTownRestaurants";

export const restaurantsForCityPage = sharmElSheikhRestaurants as unknown as Restaurant[];

const faqItems = [
  {
    question: "Is Sharm El Sheikh good for celiac travelers?",
    answer:
      "Yes! Sharm El Sheikh's resort culture means international-standard kitchens. Hard Rock Cafe offers a dedicated GF menu, and resorts like Xperience Kiroseiz and Coral Sea Aqua Club label GF items at buffets.",
  },
  {
    question: "Do all-inclusive resorts cater to celiacs?",
    answer:
      "Most international resorts do. Inform the reception of your dietary needs at check-in — hotel chefs at properties like Sultan Gardens, Savoy, and Steigenberger Alcazar are experienced with allergen requests.",
  },
  {
    question: "What naturally gluten-free food can I find in Sharm El Sheikh?",
    answer:
      "Grilled Red Sea seafood, charcoal kebabs, Indian and Thai curries with rice, and sashimi are all naturally gluten-free. Avoid bread, soy sauce, and battered fried items.",
  },
];

const GlutenFreeSharmElSheikh = () => (
  <CanadaCityPage
    cityName="Sharm El Sheikh"
    citySlug="sharm-el-sheikh"
    countryName="Egypt"
    countrySlug="egypt"
    emoji="🏖️"
    heading="Dedicated Gluten-free Restaurants in Sharm El Sheikh"
    compactHero
    hideOverview
    heroImage="/images/sharm-el-sheikh-hero.webp?v=2"
    intro="Sharm El Sheikh's Red Sea resorts and international restaurants make gluten-free dining easy — from dedicated GF menus at Hard Rock Cafe to naturally GF grilled seafood, curries, and teppanyaki across Naama Bay, Soho Square, and Nabq Bay."
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
            <Link to="/gluten-free/egypt/sharm-el-sheikh/street-food">
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
            <Link to="/gluten-free/egypt/sharm-el-sheikh/bakeries">
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
            <Link to="/gluten-free/egypt/sharm-el-sheikh/grocery-stores">
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
            <Link to="/gluten-free/egypt/sharm-el-sheikh/gluten-free-products">
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
                  <h2 className="text-xl font-semibold text-gray-900 mb-1">Best Gluten-Free Restaurants in Sharm El Sheikh</h2>
                  <p className="text-gray-700">Our editorial top celiac-safe picks across Sharm El Sheikh — ranked by safety, reviews and quality.</p>
                </div>
              </div>
              <Link to="/gluten-free/egypt/sharm-el-sheikh/best-gluten-free-restaurants-in-sharm-el-sheikh" className="md:flex-shrink-0">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white">View the Top 10</Button>
              </Link>
            </CardContent>
          </Card>
        </section>
      </>
    }
  />
);

export default GlutenFreeSharmElSheikh;
