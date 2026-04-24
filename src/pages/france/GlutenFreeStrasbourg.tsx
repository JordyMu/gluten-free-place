import FranceCityPage from "@/components/france/FranceCityPage";
import { strasbourgRestaurants } from "@/data/strasbourgRestaurants";

const faqItems = [
  { question: "Is Strasbourg good for gluten-free dining?", answer: "Yes — Strasbourg has L'Eden Libre de Gluten and Harmonie Bowl and Juice, offering dedicated celiac-safe options in the heart of Alsace." },
];

const GlutenFreeStrasbourg = () => (
  <FranceCityPage
    cityName="Strasbourg"
    citySlug="strasbourg"
    emoji="🏰"
    intro="Strasbourg blends Alsatian charm with celiac-safe dining at dedicated GF spots like L'Eden Libre de Gluten — a great base for exploring the region."
    restaurants={strasbourgRestaurants}
    faqItems={faqItems}
  />
);

export default GlutenFreeStrasbourg;
