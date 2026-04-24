import FranceCityPage from "@/components/france/FranceCityPage";
import { niceRestaurants } from "@/data/niceRestaurants";

const faqItems = [
  { question: "Is Nice good for gluten-free dining?", answer: "Nice and the Côte d'Azur offer growing GF options, including Amour Patisserie Vegetale, a vegan patisserie with many celiac-safe treats." },
];

const GlutenFreeNice = () => (
  <FranceCityPage
    cityName="Nice"
    citySlug="nice"
    emoji="🌊"
    intro="Nice combines Riviera glamour with a growing gluten-free scene, ideal for celiacs travelling along the Côte d'Azur."
    restaurants={niceRestaurants}
    faqItems={faqItems}
  />
);

export default GlutenFreeNice;
