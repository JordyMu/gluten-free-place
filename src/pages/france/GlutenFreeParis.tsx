import { Link } from "react-router-dom";
import { Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import FranceCityPage from "@/components/france/FranceCityPage";
import { parisRestaurants } from "@/data/parisRestaurants";

const faqItems = [
  { question: "Is Paris good for gluten-free dining?", answer: "Yes — Paris is one of Europe's best cities for celiacs, with multiple 100% dedicated GF bakeries (Chambelland, Copains, Noglu) and an expanding network of GF-friendly restaurants." },
  { question: "Where can I find dedicated GF bakeries in Paris?", answer: "Boulangerie Chambelland (11th), Copains (Tiquetonne, Marais, Beaugrenelle, Batignolles, Abbesses, Opéra and more), Noglu (Grenelle), and La Manufacture du Sans Gluten (Montmartre) are all 100% gluten-free." },
  { question: "Do most restaurants in Paris have gluten-free options?", answer: "Most mid-range to upscale restaurants in Paris now offer gluten-free options or can adapt dishes. Dedicated 100% gluten-free restaurants are also growing rapidly across the city." },
  { question: "Is Paris good for coeliacs?", answer: "Absolutely. Paris has a thriving celiac community, clear EU allergen labelling laws, and numerous dedicated gluten-free bakeries and restaurants where cross-contamination isn't a risk." },
  { question: "Can you buy gluten-free food in Paris?", answer: "Yes — supermarkets like Monoprix, Carrefour, Naturalia and Bio c' Bon stock extensive gluten-free ranges. There are also dedicated GF bakeries and health food shops throughout the city." },
  { question: "How do you say gluten-free in Paris?", answer: "Say 'sans gluten' (without gluten) or 'Je suis cœliaque' (I am celiac). Most restaurant staff in Paris understand both terms, and many menus now label GF items directly." },
];

const GlutenFreeParis = () => (
  <FranceCityPage
    cityName="Paris"
    citySlug="paris"
    emoji="🥐"
    intro="Paris leads Europe's gluten-free scene with renowned dedicated bakeries like Chambelland, Copains, and Noglu, plus celiac-aware bistros, Thai cantines and Italian spots across every arrondissement."
    restaurants={parisRestaurants}
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
            <Link to="/gluten-free/france/paris/street-food">
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
            <Link to="/gluten-free/france/paris/bakeries">
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
            <Link to="/gluten-free/france/paris/grocery-stores">
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
            <Link to="/gluten-free/france/paris/gluten-free-products">
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
                  <h2 className="text-xl font-semibold text-gray-900 mb-1">Best Gluten-Free Restaurants in Paris</h2>
                  <p className="text-gray-700">Our editorial top 10 celiac-safe picks across Paris — ranked by safety, reviews and quality.</p>
                </div>
              </div>
              <Link to="/gluten-free/france/paris/best" className="md:flex-shrink-0">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white">View the Top 10</Button>
              </Link>
            </CardContent>
          </Card>
        </section>
      </>
    }
  />
);

export default GlutenFreeParis;
