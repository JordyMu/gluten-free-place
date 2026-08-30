import CanadaCityPage from "@/components/canada/CanadaCityPage";
import { alexandriaRestaurants } from "@/data/egyptRestaurants";
import type { Restaurant } from "@/data/capeTownRestaurants";

export const restaurantsForCityPage = alexandriaRestaurants as unknown as Restaurant[];

const faqItems = [
  {
    question: "Is Alexandria good for gluten-free dining?",
    answer:
      "Yes! Alexandria's Mediterranean coastal cuisine includes plenty of naturally gluten-free options like fresh grilled seafood, rice dishes, and ful medames. The city's famous seafood restaurants along the Corniche are great choices for celiacs.",
  },
  {
    question: "What should I try in Alexandria?",
    answer:
      "Mohamed Ahmed Restaurant is famous for ful medames (naturally GF — just skip the bread). Fresh grilled seafood along the Corniche is also excellent. Always confirm sauces and marinades are gluten-free.",
  },
  {
    question: "Are there dedicated GF restaurants in Alexandria?",
    answer:
      "Alexandria has few dedicated GF venues, but many restaurants offer naturally GF dishes like grilled fish, seafood platters, and rice-based meals. Hotel restaurants like Royal Jewel Al-Raml can prepare GF meals on request.",
  },
];

const GlutenFreeAlexandria = () => (
  <CanadaCityPage
    cityName="Alexandria"
    citySlug="alexandria"
    countryName="Egypt"
    countrySlug="egypt"
    emoji="🌊"
    heading="Dedicated Gluten-free Restaurants in Alexandria"
    compactHero
    heroImage="/images/alexandria-hero.webp?v=2"
    intro="Alexandria's Mediterranean heritage means plenty of naturally gluten-free seafood, grilled meats, and fresh produce — from the famous ful medames at Mohamed Ahmed to fresh catches along the Corniche."
    restaurants={restaurantsForCityPage}
    faqItems={faqItems}
  />
);

export default GlutenFreeAlexandria;
