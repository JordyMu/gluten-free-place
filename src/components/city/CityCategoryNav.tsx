import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

interface CityCategoryNavProps {
  /** When provided, cards link to `${basePath}/street-food` etc. */
  basePath?: string;
}

const categories = [
  {
    slug: "street-food",
    icon: "🍢",
    title: "Street Food",
    subtitle: "Markets & food trucks",
    cardClass: "border border-orange-200 bg-gradient-to-r from-orange-50 to-red-50",
    titleClass: "text-orange-900",
    subtitleClass: "text-orange-700",
  },
  {
    slug: "bakeries",
    icon: "🥐",
    title: "Bakeries",
    subtitle: "Fresh bread & pastries",
    cardClass: "border border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50",
    titleClass: "text-amber-900",
    subtitleClass: "text-amber-700",
  },
  {
    slug: "grocery-stores",
    icon: "🛒",
    title: "Grocery Stores",
    subtitle: "Supermarkets & shops",
    cardClass: "border border-green-200 bg-gradient-to-r from-green-50 to-emerald-50",
    titleClass: "text-green-900",
    subtitleClass: "text-green-700",
  },
  {
    slug: "gluten-free-products",
    icon: "🛍️",
    title: "GF Products",
    subtitle: "Specialty GF items",
    cardClass: "border border-violet-200 bg-gradient-to-r from-violet-50 to-purple-50",
    titleClass: "text-violet-900",
    subtitleClass: "text-violet-700",
  },
];

export const CityCategoryNav = ({ basePath }: CityCategoryNavProps) => (
  <section className="mb-12">
    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
      🍽️ Browse by Category
    </h2>
    <p className="text-gray-600 mb-4">
      Find exactly what you're looking for with our curated category pages.
    </p>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
      {categories.map((category) => {
        const card = (
          <Card
            className={`${basePath ? "cursor-pointer " : ""}hover:shadow-sm transition-shadow ${category.cardClass}`}
          >
            <CardContent className="p-2 flex items-center gap-2">
              <span className="text-lg">{category.icon}</span>
              <div>
                <h3 className={`text-sm font-medium ${category.titleClass}`}>{category.title}</h3>
                <p className={`${category.subtitleClass} text-[11px]`}>{category.subtitle}</p>
              </div>
            </CardContent>
          </Card>
        );

        return basePath ? (
          <Link key={category.slug} to={`${basePath}/${category.slug}`}>
            {card}
          </Link>
        ) : (
          <div key={category.slug}>{card}</div>
        );
      })}
    </div>
  </section>
);

export default CityCategoryNav;
