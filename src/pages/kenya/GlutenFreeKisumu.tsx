import KenyaCityPage from "@/components/kenya/KenyaCityPage";
import { kisumuRestaurants } from "@/data/kisumuRestaurants";

const faqItems = [
  {
    question: "Are there gluten-free restaurants in Kisumu?",
    answer:
      "Yes. Kisumu has several reliable restaurants where grilled fish, meats, rice, and vegetable plates can be prepared gluten-free.",
  },
  {
    question: "What should I order gluten-free in Kisumu?",
    answer:
      "Lake fish, nyama choma, plain rice, and fresh salads are common safe choices. Avoid breaded fish and wheat-thickened sauces.",
  },
  {
    question: "How do I reduce cross-contamination risk in Kisumu?",
    answer:
      "Tell staff you need strict gluten-free preparation, request clean pans, and confirm marinades or sauces are wheat-free.",
  },
];

const GlutenFreeKisumu = () => (
  <KenyaCityPage
    cityName="Kisumu"
    citySlug="kisumu"
    emoji="🌅"
    intro="Kisumu's lakeside dining scene is centered on fresh fish and grilled Kenyan dishes, which makes it a practical city for gluten-free travelers. With clear communication, many restaurants can safely adapt meals for celiac guests."
    restaurants={kisumuRestaurants}
    faqItems={faqItems}
  />
);

export default GlutenFreeKisumu;
