import CanadaCityPage from "@/components/canada/CanadaCityPage";
import { vancouverRestaurants } from "@/data/vancouverRestaurants";

const faqItems = [
  { question: "Is Vancouver good for gluten-free dining?", answer: "Yes! Vancouver's health-conscious culture means many restaurants cater to GF diners. Dedicated bakeries like The Gluten Free Epicurean and Lemonade are must-visits." },
  { question: "Which Vancouver neighbourhoods have the best GF options?", answer: "Kitsilano, Main Street, and Cambie Village have excellent dedicated GF spots. Commercial Drive also offers diverse celiac-safe dining." },
];

const GlutenFreeVancouver = () => (
  <CanadaCityPage
    cityName="Vancouver"
    citySlug="vancouver"
    emoji="🏔️"
    intro="Vancouver's health-conscious food culture makes it a paradise for gluten-free diners. From The Gluten Free Epicurean's artisan breads to Lemonade Bakery's dedicated facility, the city offers excellent celiac-safe options."
    restaurants={vancouverRestaurants}
    faqItems={faqItems}
  />
);

export default GlutenFreeVancouver;
