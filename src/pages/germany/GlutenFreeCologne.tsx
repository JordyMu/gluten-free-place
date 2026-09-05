import GermanyCityPage from "@/components/germany/GermanyCityPage";
import { germanyCities } from "@/data/germanyCities";

const city = germanyCities.find((c) => c.slug === "cologne")!;

const faqItems = [
  { question: "Is Cologne good for gluten-free dining?", answer: "Yes — Cologne has dedicated gluten-free spots like Isabella Glutenfreie Pâtisserie, plus many restaurants with clearly marked gluten-free dishes, from traditional Kölsch taverns to international kitchens." },
  { question: "Where can I find 100% gluten-free food in Cologne?", answer: "Isabella Glutenfreie Pâtisserie at Kettengasse operates a fully gluten-free kitchen with celiac-safe cakes and pastries." },
  { question: "How do I ask for gluten-free food in Cologne?", answer: "Ask for “glutenfrei” and say “Ich habe Zöliakie” to explain celiac disease. Staff in central Cologne usually speak English and can show the allergen list." },
  { question: "Are allergens listed on Cologne menus?", answer: "Yes — German restaurants must provide allergen information, often in a separate guide. Ask staff for it and confirm shared fryers or preparation surfaces." },
  { question: "Can I buy gluten-free groceries in Cologne?", answer: "Yes — REWE, Edeka, DM and organic stores like Alnatura and denn's stock wide gluten-free ranges. Look for “glutenfrei” or the crossed-grain symbol on packaging." },
];

const GlutenFreeCologne = () => (
  <GermanyCityPage
    city={city}
    emoji="⛪"
    intro="Cologne pairs a dedicated gluten-free pâtisserie with a lively cathedral-city food scene — celiac-safe cakes at Isabella Glutenfreie Pâtisserie, traditional Kölsch taverns with marked gluten-free dishes, and international eateries around the Altstadt make the city easy for gluten-free travellers."
    faqItems={faqItems}
    heroTitle="Dedicated gluten-free restaurants in Cologne"
  />
);

export default GlutenFreeCologne;
