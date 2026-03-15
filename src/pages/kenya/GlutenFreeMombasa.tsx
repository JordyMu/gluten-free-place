import KenyaCityPage from "@/components/kenya/KenyaCityPage";
import { mombasaRestaurants } from "@/data/mombasaRestaurants";

const faqItems = [
  {
    question: "Is Mombasa a good destination for gluten-free travelers?",
    answer:
      "Yes. Mombasa and the nearby coast are naturally friendly for gluten-free eating thanks to seafood, grilled meats, coconut rice, and fresh produce.",
  },
  {
    question: "What are safe gluten-free choices in Mombasa restaurants?",
    answer:
      "Fresh grilled fish, prawns, nyama choma, coconut-based rice dishes, and salads are usually the safest options.",
  },
  {
    question: "Do beach restaurants in Mombasa understand celiac needs?",
    answer:
      "Many do, especially in Diani and hotel properties. Mention strict gluten-free requirements and ask staff to avoid flour coatings and shared fryers.",
  },
];

const GlutenFreeMombasa = () => (
  <KenyaCityPage
    cityName="Mombasa"
    citySlug="mombasa"
    emoji="🏖️"
    intro="Mombasa's coastal food culture makes gluten-free travel easier, with fish-forward menus, grilled mains, and naturally wheat-free local staples. Beachfront venues and resorts are often flexible for celiac requests."
    restaurants={mombasaRestaurants}
    faqItems={faqItems}
  />
);

export default GlutenFreeMombasa;
