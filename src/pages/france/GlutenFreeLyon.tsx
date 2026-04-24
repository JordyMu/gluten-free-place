import FranceCityPage from "@/components/france/FranceCityPage";
import { lyonRestaurants } from "@/data/lyonRestaurants";

const faqItems = [
  { question: "Is Lyon good for gluten-free dining?", answer: "Yes — France's gastronomic capital has growing GF options, including a dedicated Copains bakery and pastry-focused Les Gasteliers." },
  { question: "How do I ask for gluten-free in Lyon?", answer: "Say 'sans gluten' or 'Je suis cœliaque'. Most restaurants in central Lyon will understand and accommodate dietary requests." },
];

const GlutenFreeLyon = () => (
  <FranceCityPage
    cityName="Lyon"
    citySlug="lyon"
    emoji="🍷"
    intro="Lyon's celebrated culinary scene is steadily embracing gluten-free dining, with Copains' dedicated bakery and other celiac-aware spots making the gastronomic capital safer to explore."
    restaurants={lyonRestaurants}
    faqItems={faqItems}
  />
);

export default GlutenFreeLyon;
