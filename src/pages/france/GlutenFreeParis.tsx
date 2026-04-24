import FranceCityPage from "@/components/france/FranceCityPage";
import { parisRestaurants } from "@/data/parisRestaurants";

const faqItems = [
  { question: "Is Paris good for gluten-free dining?", answer: "Yes — Paris is one of Europe's best cities for celiacs, with multiple 100% dedicated GF bakeries (Chambelland, Copains, Noglu) and an expanding network of GF-friendly restaurants." },
  { question: "Where can I find dedicated GF bakeries in Paris?", answer: "Boulangerie Chambelland (11th), Copains (Tiquetonne, Marais, Beaugrenelle, Batignolles, Abbesses, Opéra and more), Noglu (Grenelle), and La Manufacture du Sans Gluten (Montmartre) are all 100% gluten-free." },
];

const GlutenFreeParis = () => (
  <FranceCityPage
    cityName="Paris"
    citySlug="paris"
    emoji="🥐"
    intro="Paris leads Europe's gluten-free scene with renowned dedicated bakeries like Chambelland, Copains, and Noglu, plus celiac-aware bistros, Thai cantines and Italian spots across every arrondissement."
    restaurants={parisRestaurants}
    faqItems={faqItems}
  />
);

export default GlutenFreeParis;
