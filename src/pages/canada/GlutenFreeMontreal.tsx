import CanadaCityPage from "@/components/canada/CanadaCityPage";
import { montrealRestaurants } from "@/data/montrealRestaurants";

const faqItems = [
  { question: "Is Montreal good for gluten-free dining?", answer: "Yes! Montreal has a growing GF scene with dedicated bakeries like Parc Sans Gluten and naturally GF options at places like Arepera." },
  { question: "How do I ask for gluten-free in French?", answer: "Say 'sans gluten' (without gluten) or 'maladie cœliaque' (celiac disease). Most Montreal restaurants understand both English and French dietary requests." },
];

const GlutenFreeMontreal = () => (
  <CanadaCityPage
    cityName="Montreal"
    citySlug="montreal"
    emoji="⚜️"
    intro="Montreal's vibrant food scene includes dedicated gluten-free bakeries, French-inspired GF pâtisseries, and naturally celiac-safe Latin American eateries. The bilingual city makes communicating dietary needs easy."
    restaurants={montrealRestaurants}
    faqItems={faqItems}
  />
);

export default GlutenFreeMontreal;
