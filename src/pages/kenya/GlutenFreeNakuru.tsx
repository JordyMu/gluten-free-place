import KenyaCityPage from "@/components/kenya/KenyaCityPage";
import { nakuruRestaurants } from "@/data/nakuruRestaurants";

const faqItems = [
  {
    question: "Is Nakuru suitable for gluten-free dining?",
    answer:
      "Yes. Nakuru has lodge restaurants and local grills where naturally gluten-free meals are common, especially meat, fish, and vegetable-based dishes.",
  },
  {
    question: "Can safari lodge kitchens in Nakuru handle celiac requirements?",
    answer:
      "Most lodge kitchens can, especially with advance notice. Inform them early so they can prepare dedicated gluten-free options.",
  },
  {
    question: "What are safe menu choices in Nakuru?",
    answer:
      "Grilled meats, rice sides, and plain vegetable dishes are usually safest. Confirm no flour is used in sauces or marinades.",
  },
];

const GlutenFreeNakuru = () => (
  <KenyaCityPage
    cityName="Nakuru"
    citySlug="nakuru"
    emoji="🦩"
    intro="Nakuru is a strong stop for gluten-free travelers heading to Lake Nakuru and Rift Valley lodges. Many venues offer straightforward grilled and naturally gluten-free meals with celiac-aware preparation on request."
    restaurants={nakuruRestaurants}
    faqItems={faqItems}
  />
);

export default GlutenFreeNakuru;
