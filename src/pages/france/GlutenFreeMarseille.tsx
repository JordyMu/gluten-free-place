import FranceCityPage from "@/components/france/FranceCityPage";
import { marseilleRestaurants } from "@/data/marseilleRestaurants";

const faqItems = [
  { question: "Is Marseille good for gluten-free dining?", answer: "Yes — Marseille has La Pépite (multiple locations including Vieux-Port) offering celiac-safe Mediterranean dining alongside the city's naturally GF seafood." },
];

const GlutenFreeMarseille = () => (
  <FranceCityPage
    cityName="Marseille"
    citySlug="marseille"
    emoji="⛵"
    intro="Marseille's vibrant Mediterranean food scene includes celiac-safe spots like La Pépite, plus naturally gluten-free options from fresh fish to bouillabaisse-style stews."
    restaurants={marseilleRestaurants}
    faqItems={faqItems}
  />
);

export default GlutenFreeMarseille;
