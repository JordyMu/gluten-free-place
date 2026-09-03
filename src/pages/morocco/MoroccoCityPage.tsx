import { useParams, Navigate } from "react-router-dom";
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
      heading={`Dedicated Gluten-Free Restaurants in ${city.name}`}
      compactHero
      hideOverview
      intro={city.intro}
      restaurants={city.restaurants}
      faqItems={faqFor(city.name)}
    />
  );
};

export default MoroccoCityPage;
