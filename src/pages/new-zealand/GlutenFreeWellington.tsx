import NewZealandCityPage from "@/components/new-zealand/NewZealandCityPage";
import { newZealandCities } from "@/data/newZealandCities";

const city = newZealandCities.find((c) => c.slug === "wellington")!;

const faqItems = [
  { question: "Is Wellington good for gluten-free dining?", answer: "Yes — Wellington's café culture means most venues clearly mark gluten-free options, and there are dedicated GF spots like Gluten Free 4u serving baking, pies and pastries safe for celiacs." },
  { question: "Where can I find dedicated GF bakeries in Wellington?", answer: "Gluten Free 4u is Wellington's main 100% dedicated GF facility, supplying breads, baking and pies. Several Cuba St cafés also carry strong GF cabinets." },
  { question: "Do Wellington restaurants understand celiac requirements?", answer: "Wellington has one of the most allergen-aware hospitality scenes in New Zealand. Most modern bistros and small-plates spots can confidently accommodate celiacs." },
  { question: "Where can I get gluten-free fish and chips in Wellington?", answer: "Mt Vic Chippery is famous for offering gluten-free battered fish and chips with separate fryer protocols." },
  { question: "Can you buy gluten-free groceries in Wellington?", answer: "Yes — Moore Wilson's, Commonsense Organics, and the major supermarket chains all stock comprehensive GF ranges." },
];

const GlutenFreeWellington = () => (
  <NewZealandCityPage
    city={city}
    emoji="☕"
    intro="Wellington pairs its famous café culture with strong celiac awareness — Gluten Free 4u's dedicated bakery, Mt Vic Chippery's GF fish and chips, and a Cuba St scene where small plates are routinely adapted for celiacs."
    faqItems={faqItems}
  />
);

export default GlutenFreeWellington;
