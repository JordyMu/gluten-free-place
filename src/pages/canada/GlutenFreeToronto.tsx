import { Link } from "react-router-dom";
import { Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CanadaCityPage from "@/components/canada/CanadaCityPage";
import { torontoRestaurants } from "@/data/torontoRestaurants";

const faqItems = [
  { question: "Is Toronto good for celiac travellers?", answer: "Absolutely! Toronto has one of North America's best gluten-free scenes with dedicated bakeries like Bunner's and Almond Butterfly, plus many restaurants with GF menus." },
  { question: "Which Toronto areas are best for gluten-free dining?", answer: "Dundas West, the Annex, and Yorkville have the highest concentration of dedicated GF venues. The Distillery District also has great options." },
  { question: "Can I find dedicated GF bakeries in Toronto?", answer: "Yes! Bunner's Bakeshop, Almond Butterfly, Wild Blue Bakery, and Cock-A-Doodle-Doo are all 100% dedicated gluten-free bakeries." },
];

const GlutenFreeToronto = () => (
  <CanadaCityPage
    cityName="Toronto"
    citySlug="toronto"
    emoji="🏙️"
    intro="Toronto is Canada's gluten-free capital with numerous dedicated bakeries, 100% GF restaurants like Riz and Pho Concept, and a thriving health-conscious food scene. Whether you're in the Annex or exploring Dundas West, celiac-safe options abound."
    restaurants={torontoRestaurants}
    faqItems={faqItems}
    extraSection={
      <section className="mb-10">
        <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
          <CardContent className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-start gap-4">
              <Trophy className="w-8 h-8 text-amber-600 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-1">Best Gluten-Free Restaurants in Toronto</h2>
                <p className="text-gray-700">Our editorial top 10 celiac-safe picks across Toronto — ranked by safety, reviews and quality.</p>
              </div>
            </div>
            <Link to="/gluten-free/canada/toronto/best-gluten-free-restaurants-in-toronto" className="md:flex-shrink-0">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">View the Top 10</Button>
            </Link>
          </CardContent>
        </Card>
      </section>
    }
  />
);

export default GlutenFreeToronto;
