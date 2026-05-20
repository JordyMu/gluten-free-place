import FranceCityPage from "@/components/france/FranceCityPage";
import { parisRestaurants } from "@/data/parisRestaurants";

const faqItems = [
  { question: "Is Paris good for gluten-free dining?", answer: "Yes — Paris is one of Europe's best cities for celiacs, with multiple 100% dedicated GF bakeries (Chambelland, Copains, Noglu) and an expanding network of GF-friendly restaurants." },
  { question: "Where can I find dedicated GF bakeries in Paris?", answer: "Boulangerie Chambelland (11th), Copains (Tiquetonne, Marais, Beaugrenelle, Batignolles, Abbesses, Opéra and more), Noglu (Grenelle), and La Manufacture du Sans Gluten (Montmartre) are all 100% gluten-free." },
  { question: "Do most restaurants in Paris have gluten-free options?", answer: "Most mid-range to upscale restaurants in Paris now offer gluten-free options or can adapt dishes. Dedicated 100% gluten-free restaurants are also growing rapidly across the city." },
  { question: "Is Paris good for coeliacs?", answer: "Absolutely. Paris has a thriving celiac community, clear EU allergen labelling laws, and numerous dedicated gluten-free bakeries and restaurants where cross-contamination isn't a risk." },
  { question: "Can you buy gluten-free food in Paris?", answer: "Yes — supermarkets like Monoprix, Carrefour, Naturalia and Bio c' Bon stock extensive gluten-free ranges. There are also dedicated GF bakeries and health food shops throughout the city." },
  { question: "How do you say gluten-free in Paris?", answer: "Say 'sans gluten' (without gluten) or 'Je suis cœliaque' (I am celiac). Most restaurant staff in Paris understand both terms, and many menus now label GF items directly." },
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
