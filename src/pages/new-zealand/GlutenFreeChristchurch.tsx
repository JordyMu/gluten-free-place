import NewZealandCityPage from "@/components/new-zealand/NewZealandCityPage";
import { newZealandCities } from "@/data/newZealandCities";

const city = newZealandCities.find((c) => c.slug === "christchurch")!;

const faqItems = [
  { question: "Is Christchurch good for gluten-free dining?", answer: "Yes — Christchurch has a strong gluten-free scene with dedicated suppliers like Bubbles Gluten Free Catering and clearly labelled menus across most central city cafés and bistros." },
  { question: "Where can I find dedicated GF options in Christchurch?", answer: "Bubbles Gluten Free Catering operates as a dedicated GF kitchen, and Herba Gourmet offers reliable allergen-aware fare in the Central City." },
  { question: "Do Christchurch cafés label gluten-free options clearly?", answer: "Yes — Christchurch's café culture is allergen-conscious, with most venues marking GF, DF and vegan items directly on the menu." },
  { question: "Are there gluten-free breakfast spots in Christchurch?", answer: "Yes — Fiddlesticks, Shaka Bros and several Central City brunch spots offer dedicated GF breakfast menus." },
  { question: "Can you buy gluten-free groceries in Christchurch?", answer: "Yes — Countdown, New World and Pak'nSave plus dedicated health stores like Piko Wholefoods carry extensive GF ranges." },
];

const GlutenFreeChristchurch = () => (
  <NewZealandCityPage
    city={city}
    emoji="🌿"
    intro="Christchurch combines an allergen-aware café culture with dedicated GF suppliers like Bubbles Gluten Free Catering, plus reliable brunch and bistro picks across the Central City — making it one of New Zealand's most relaxed cities for celiac travellers."
    faqItems={faqItems}
  />
);

export default GlutenFreeChristchurch;
