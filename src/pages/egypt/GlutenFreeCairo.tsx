import CanadaCityPage from "@/components/canada/CanadaCityPage";
import { cairoRestaurants } from "@/data/egyptRestaurants";
import type { Restaurant } from "@/data/capeTownRestaurants";

const restaurantsForCityPage = cairoRestaurants as unknown as Restaurant[];

const faqItems = [
  {
    question: "Is Cairo good for gluten-free travelers?",
    answer:
      "Yes! Cairo has many naturally GF options like grilled meats, rice, ful medames, and a growing number of health-conscious restaurants in Zamalek and Maadi.",
  },
  {
    question: "What traditional Cairo foods are gluten-free?",
    answer:
      "Grilled kebabs, kofta, ful medames (fava beans), rice dishes, and fresh salads are naturally GF. Be cautious with koshari (contains pasta) and aish baladi (bread).",
  },
  {
    question: "Are there dedicated GF restaurants in Cairo?",
    answer:
      "The Gluten Free House and Keto Rockets offer fully GF menus. Many hotel restaurants like Cairo Marriott and Conrad Cairo also have dedicated GF options.",
  },
];

const GlutenFreeCairo = () => (
  <CanadaCityPage
    cityName="Cairo"
    citySlug="cairo"
    countryName="Egypt"
    countrySlug="egypt"
    emoji="🏛️"
    heading="Dedicated Gluten-Free Restaurants in Cairo"
    compactHero
    intro="Cairo's diverse food scene includes dedicated GF restaurants, health-conscious cafés, and luxury hotel dining with celiac-safe options — from Zamalek to Nasr City."
    restaurants={restaurantsForCityPage}
    faqItems={faqItems}
  />
);

export default GlutenFreeCairo;
