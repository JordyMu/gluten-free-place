import CanadaCityPage from "@/components/canada/CanadaCityPage";
import { torontoRestaurants } from "@/data/torontoRestaurants";

const faqItems = [
  { question: "Is Toronto good for celiac travellers?", answer: "Absolutely! Toronto has one of North America's best gluten-free scenes with dedicated bakeries like Bunner's and Almond Butterfly, plus many restaurants with GF menus." },
  { question: "Which Toronto areas are best for gluten-free dining?", answer: "Dundas West, the Annex, and Yorkville have the highest concentration of dedicated GF venues. The Distillery District also has great options." },
  { question: "Can I find dedicated GF bakeries in Toronto?", answer: "Yes! Bunner's Bakeshop, Almond Butterfly, Wild Blue Bakery, and Cock-A-Doodle-Doo are all 100% dedicated gluten-free bakeries." },
];

const GlutenFreeToronto = () => (
  <CanadaCityPage
    cityName="Toronto"
    citySlug="toronto"
    emoji="🏙️"
    intro="Toronto is Canada's gluten-free capital with numerous dedicated bakeries, 100% GF restaurants like Riz and Pho Concept, and a thriving health-conscious food scene. Whether you're in the Annex or exploring Dundas West, celiac-safe options abound."
    restaurants={torontoRestaurants}
    faqItems={faqItems}
  />
);

export default GlutenFreeToronto;
