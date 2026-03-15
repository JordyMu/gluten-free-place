import UKCityPage from "@/components/uk/UKCityPage";
import { manchesterRestaurants } from "@/data/manchesterRestaurants";

const faqItems = [
  { question: "Is Manchester good for gluten-free dining?", answer: "Manchester's food scene is growing rapidly with GF options. The Northern Quarter and Ancoats have the best concentration of celiac-aware restaurants." },
  { question: "Can I find GF pizza in Manchester?", answer: "Yes! Rudy's Neapolitan Pizza offers excellent GF bases with proper protocols to minimize cross-contamination." },
  { question: "Are there vegan GF options in Manchester?", answer: "Wholesome Junkies in the Northern Quarter specialises in plant-based comfort food with extensive GF options." },
];

const GlutenFreeManchester = () => (
  <UKCityPage
    cityName="Manchester"
    citySlug="manchester"
    emoji="🐝"
    intro="Manchester's vibrant food scene includes growing gluten-free options, particularly in the trendy Northern Quarter and Ancoats neighbourhoods. From Neapolitan pizza to plant-based comfort food, celiac diners have plenty to explore."
    restaurants={manchesterRestaurants}
    faqItems={faqItems}
  />
);

export default GlutenFreeManchester;
