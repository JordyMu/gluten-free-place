import CanadaCityPage from "@/components/canada/CanadaCityPage";
import { sharmElSheikhRestaurants } from "@/data/egyptRestaurants";
import type { Restaurant } from "@/data/capeTownRestaurants";

export const restaurantsForCityPage = sharmElSheikhRestaurants as unknown as Restaurant[];

const faqItems = [
  {
    question: "Is Sharm El Sheikh good for celiac travelers?",
    answer:
      "Yes! Sharm El Sheikh's resort culture means international-standard kitchens. Hard Rock Cafe offers a dedicated GF menu, and resorts like Xperience Kiroseiz and Coral Sea Aqua Club label GF items at buffets.",
  },
  {
    question: "Do all-inclusive resorts cater to celiacs?",
    answer:
      "Most international resorts do. Inform the reception of your dietary needs at check-in — hotel chefs at properties like Sultan Gardens, Savoy, and Steigenberger Alcazar are experienced with allergen requests.",
  },
  {
    question: "What naturally gluten-free food can I find in Sharm El Sheikh?",
    answer:
      "Grilled Red Sea seafood, charcoal kebabs, Indian and Thai curries with rice, and sashimi are all naturally gluten-free. Avoid bread, soy sauce, and battered fried items.",
  },
];

const GlutenFreeSharmElSheikh = () => (
  <CanadaCityPage
    cityName="Sharm El Sheikh"
    citySlug="sharm-el-sheikh"
    countryName="Egypt"
    countrySlug="egypt"
    emoji="🏖️"
    heading="Dedicated Gluten-free Restaurants in Sharm El Sheikh"
    compactHero
    hideOverview
    heroImage="/images/sharm-el-sheikh-hero.webp?v=2"
    intro="Sharm El Sheikh's Red Sea resorts and international restaurants make gluten-free dining easy — from dedicated GF menus at Hard Rock Cafe to naturally GF grilled seafood, curries, and teppanyaki across Naama Bay, Soho Square, and Nabq Bay."
    restaurants={restaurantsForCityPage}
    faqItems={faqItems}
  />
);

export default GlutenFreeSharmElSheikh;
