import CanadaCityPage from "@/components/canada/CanadaCityPage";
import { calgaryRestaurants } from "@/data/calgaryRestaurants";

const faqItems = [
  { question: "Is Calgary good for gluten-free dining?", answer: "Calgary's GF scene is growing, with Asian restaurants offering naturally rice-based GF options and an increasing number of GF-aware eateries." },
  { question: "What GF options are near Banff?", answer: "Canmore (near Banff) has Wild Orchid Asian Bistro and Lovely Ice Cream with GF options. Many Banff restaurants also offer GF menus." },
];

const GlutenFreeCalgary = () => (
  <CanadaCityPage
    cityName="Calgary"
    citySlug="calgary"
    emoji="🤠"
    intro="Calgary's dining scene offers growing gluten-free options, especially in Asian cuisine with naturally rice-based dishes. The city's proximity to the Rocky Mountains also means access to celiac-safe dining in nearby Canmore and Banff."
    restaurants={calgaryRestaurants}
    faqItems={faqItems}
  />
);

export default GlutenFreeCalgary;
