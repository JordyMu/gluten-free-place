import { useParams, Navigate, Link } from "react-router-dom";
import { Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CanadaCityPage from "@/components/canada/CanadaCityPage";
import { getMoroccoCity } from "@/data/moroccoRestaurants";

const faqFor = (city: string) => [
  {
    question: `Is ${city} good for gluten-free dining?`,
    answer: `Yes, with some knowledge. ${city} has many naturally gluten-free dishes — tagines, grilled meats, salads and fresh juices. Always confirm no flour or bread is used in your dish.`,
  },
  {
    question: "How do I say gluten-free in Morocco?",
    answer: "In Darija say 'Andi hassasiya l-gluten' (I have a gluten sensitivity); in French, 'sans gluten'. Many tourist-area restaurants understand English and French, but a translated dietary card is highly recommended.",
  },
  {
    question: `What should I avoid eating in ${city}?`,
    answer: "Avoid traditional couscous (semolina wheat), khobz bread, msemen flatbread and pastilla unless confirmed gluten-free. Tagines and grilled meats are usually safe — always double-check thickeners and marinades.",
  },
];

const MoroccoCityPage = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  const city = getMoroccoCity(citySlug);
  if (!city) return <Navigate to="/gluten-free/morocco" replace />;

  return (
    <CanadaCityPage
      cityName={city.name}
      citySlug={city.slug}
      countryName="Morocco"
      countrySlug="morocco"
      emoji={city.emoji}
      heroImage={city.heroImage}
      heading={`Dedicated Gluten-Free Restaurants in ${city.name}`}
      compactHero
      hideOverview
      intro={city.intro}
      restaurants={city.restaurants}
      faqItems={faqFor(city.name)}
      extraSection={
        <>
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">🍽️ Browse by Category</h2>
            <p className="text-gray-600 mb-4">Find exactly what you're looking for with our curated category pages.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {[
                { to: "street-food", emoji: "🍢", title: "Street Food", sub: "Markets & food trucks", cls: "border-orange-200 bg-gradient-to-r from-orange-50 to-red-50", t: "text-orange-900", p: "text-orange-700" },
                { to: "bakeries", emoji: "🥐", title: "Bakeries", sub: "Fresh bread & pastries", cls: "border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50", t: "text-amber-900", p: "text-amber-700" },
                { to: "grocery-stores", emoji: "🛒", title: "Grocery Stores", sub: "Supermarkets & shops", cls: "border-green-200 bg-gradient-to-r from-green-50 to-emerald-50", t: "text-green-900", p: "text-green-700" },
                { to: "gluten-free-products", emoji: "🛍️", title: "GF Products", sub: "Specialty GF items", cls: "border-violet-200 bg-gradient-to-r from-violet-50 to-purple-50", t: "text-violet-900", p: "text-violet-700" },
              ].map((c) => (
                <Link key={c.to} to={`/gluten-free/morocco/${city.slug}/${c.to}`}>
                  <Card className={`cursor-pointer hover:shadow-sm transition-shadow border ${c.cls}`}>
                    <CardContent className="p-2 flex items-center gap-2">
                      <span className="text-lg">{c.emoji}</span>
                      <div>
                        <h3 className={`text-sm font-medium ${c.t}`}>{c.title}</h3>
                        <p className={`${c.p} text-[11px]`}>{c.sub}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
              <CardContent className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <Trophy className="w-8 h-8 text-amber-600 flex-shrink-0" />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-1">Best Gluten-Free Restaurants in {city.name}</h2>
                    <p className="text-gray-700">Our editorial top 10 celiac-safe picks across {city.name} — ranked by safety, reviews and quality.</p>
                  </div>
                </div>
                <Link to={`/gluten-free/morocco/${city.slug}/best-gluten-free-restaurants`} className="md:flex-shrink-0">
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white">View the Top 10</Button>
                </Link>
              </CardContent>
            </Card>
          </section>
        </>
      }
    />
  );
};

export default MoroccoCityPage;
