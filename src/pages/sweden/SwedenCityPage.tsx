import { useParams, Navigate } from "react-router-dom";
import CanadaCityPage from "@/components/canada/CanadaCityPage";
import { getSwedenCity } from "@/data/swedenRestaurants";

const faqFor = (city: string) => [
  {
    question: `Is ${city} good for gluten-free dining?`,
    answer: `Yes. Sweden has strong allergen labelling and high coeliac awareness, and ${city} has bakeries, cafés and restaurants with clearly marked gluten-free ("glutenfri") options.`,
  },
  {
    question: "How do I say gluten-free in Swedish?",
    answer: "Say \"glutenfri\" for gluten-free and \"jag har celiaki\" (I have coeliac disease). English is widely spoken across Sweden.",
  },
  {
    question: `Can I buy gluten-free food in ${city} supermarkets?`,
    answer: "Yes. ICA, Coop and Willys all carry a wide glutenfri range including bread, crispbread, pasta and baking mixes from brands like Semper and Fria.",
  },
];

const SwedenCityPage = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  const city = getSwedenCity(citySlug);
  if (!city) return <Navigate to="/sweden" replace />;

  return (
    <CanadaCityPage
      cityName={city.name}
      citySlug={city.slug}
      countryName="Sweden"
      countrySlug="sweden"
      emoji={city.emoji}
      heading={`Dedicated Gluten-Free Restaurants in ${city.name}`}
      compactHero
      intro={city.intro}
      restaurants={city.restaurants}
      faqItems={faqFor(city.name)}
    />
  );
};

export default SwedenCityPage;
