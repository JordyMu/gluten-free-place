import KenyaCityPage from "@/components/kenya/KenyaCityPage";
import { nairobiRestaurants } from "@/data/nairobiRestaurants";

const faqItems = [
  {
    question: "Is Nairobi good for celiac travelers?",
    answer:
      "Yes. Nairobi has the strongest gluten-free scene in Kenya, with international restaurants, health-focused cafés, and hotel kitchens that understand cross-contamination risks.",
  },
  {
    question: "Which Nairobi neighborhoods have the best gluten-free options?",
    answer:
      "Westlands, Karen, and Gigiri consistently have the most celiac-aware restaurants and cafés, especially in hotels and premium dining venues.",
  },
  {
    question: "Can restaurants in Nairobi adapt dishes for gluten-free needs?",
    answer:
      "Most can, especially for grilled meats, rice dishes, and salads. Always inform the team you need strict gluten-free preparation.",
  },
];

const GlutenFreeNairobi = () => (
  <KenyaCityPage
    cityName="Nairobi"
    citySlug="nairobi"
    emoji="🏙️"
    intro="Nairobi offers the deepest gluten-free restaurant variety in Kenya, from premium steakhouses to health cafés. Most celiac-safe picks focus on grilled proteins, rice-based plates, and clearly modified menu items."
    restaurants={nairobiRestaurants}
    faqItems={faqItems}
  />
);

export default GlutenFreeNairobi;
