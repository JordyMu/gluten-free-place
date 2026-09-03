import { useParams, Navigate } from "react-router-dom";
import CanadaCityPage from "@/components/canada/CanadaCityPage";
import { getMoroccoCity } from "@/data/moroccoRestaurants";

const MoroccoBestPage = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  const city = getMoroccoCity(citySlug);
  if (!city) return <Navigate to="/gluten-free/morocco" replace />;

  const top = [...city.restaurants]
    .sort((a, b) => (b.rating !== a.rating ? b.rating - a.rating : b.reviewCount - a.reviewCount))
    .slice(0, 10);

  return (
    <CanadaCityPage
      cityName={city.name}
      citySlug={city.slug}
      countryName="Morocco"
      countrySlug="morocco"
      emoji="🏆"
      heroImage={city.heroImage}
      heading={`Best Gluten-Free Restaurants in ${city.name}`}
      compactHero
      hideOverview
      intro={`Our editorial top 10 celiac-safe picks across ${city.name} — ranked by safety, reviews and quality.`}
      restaurants={top}
      faqItems={[
        {
          question: `How is this ${city.name} top 10 ranked?`,
          answer: "We rank venues by celiac safety practices, dedicated gluten-free facilities, review volume and overall food quality.",
        },
      ]}
    />
  );
};

export default MoroccoBestPage;
