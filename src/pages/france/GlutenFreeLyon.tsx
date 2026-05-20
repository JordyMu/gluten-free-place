import { Link } from "react-router-dom";
import { Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import FranceCityPage from "@/components/france/FranceCityPage";
import { lyonRestaurants } from "@/data/lyonRestaurants";

const faqItems = [
  { question: "Is Lyon good for gluten-free dining?", answer: "Yes — France's gastronomic capital has growing GF options, including a dedicated Copains bakery and pastry-focused Les Gasteliers." },
  { question: "How do I ask for gluten-free in Lyon?", answer: "Say 'sans gluten' or 'Je suis cœliaque'. Most restaurants in central Lyon will understand and accommodate dietary requests." },
];

const GlutenFreeLyon = () => (
  <FranceCityPage
    cityName="Lyon"
    citySlug="lyon"
    emoji="🍷"
    intro="Lyon's celebrated culinary scene is steadily embracing gluten-free dining, with Copains' dedicated bakery and other celiac-aware spots making the gastronomic capital safer to explore."
    restaurants={lyonRestaurants}
    faqItems={faqItems}
    extraSection={
      <section className="mb-10">
        <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
          <CardContent className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-start gap-4">
              <Trophy className="w-8 h-8 text-amber-600 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-1">Best Gluten-Free Restaurants in Lyon</h2>
                <p className="text-gray-700">Our editorial top celiac-safe picks across Lyon — ranked by safety, reviews and quality.</p>
              </div>
            </div>
            <Link to="/gluten-free/france/lyon/best" className="md:flex-shrink-0">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">View the Top Picks</Button>
            </Link>
          </CardContent>
        </Card>
      </section>
    }
  />
);

export default GlutenFreeLyon;
