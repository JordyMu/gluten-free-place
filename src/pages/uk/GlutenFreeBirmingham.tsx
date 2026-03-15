import UKCityPage from "@/components/uk/UKCityPage";
import { birminghamRestaurants } from "@/data/birminghamRestaurants";

const faqItems = [
  { question: "Is Birmingham good for gluten-free dining?", answer: "Birmingham has a growing GF scene with Italian restaurants offering GF pasta and several veggie cafes with celiac-safe menus." },
  { question: "Where should I eat GF in Birmingham?", answer: "Pasta di Piazza in the city centre and The Warehouse Cafe in Digbeth are both reliable celiac-safe options." },
  { question: "Are there dedicated GF places in Birmingham?", answer: "While dedicated GF venues are limited, many restaurants have strong protocols and trained staff for celiac diners." },
];

const GlutenFreeBirmingham = () => (
  <UKCityPage
    cityName="Birmingham"
    citySlug="birmingham"
    emoji="🏭"
    intro="Birmingham's diverse food scene includes several celiac-aware restaurants. From fresh GF pasta in the city centre to creative veggie options in Digbeth, the Second City has options for gluten-free diners."
    restaurants={birminghamRestaurants}
    faqItems={faqItems}
  />
);

export default GlutenFreeBirmingham;
