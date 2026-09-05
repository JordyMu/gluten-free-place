import GermanyCityPage from "@/components/germany/GermanyCityPage";
import { germanyCities } from "@/data/germanyCities";

const city = germanyCities.find((c) => c.slug === "hamburg")!;

const faqItems = [
  { question: "Is Hamburg good for gluten-free dining?", answer: "Yes — Hamburg has dedicated gluten-free spots like Isabella Glutenfree Pasteries and Grilly Idol, plus many restaurants with clearly marked gluten-free dishes, from harbour-side fish restaurants to international kitchens." },
  { question: "Where can I find 100% gluten-free food in Hamburg?", answer: "Isabella Glutenfree Pasteries at Alter Wall and Grilly Idol in St. Pauli both operate fully gluten-free kitchens." },
  { question: "How do I ask for gluten-free food in Hamburg?", answer: "Ask for “glutenfrei” and say “Ich habe Zöliakie” to explain celiac disease. Staff in central Hamburg usually speak English and can show the allergen list." },
  { question: "Are allergens listed on Hamburg menus?", answer: "Yes — German restaurants must provide allergen information, often in a separate guide. Ask staff for it and confirm shared fryers or preparation surfaces." },
  { question: "Can I buy gluten-free groceries in Hamburg?", answer: "Yes — REWE, Edeka, DM and organic stores like Alnatura and denn's stock wide gluten-free ranges. Look for “glutenfrei” or the crossed-grain symbol on packaging." },
];

const GlutenFreeHamburg = () => (
  <GermanyCityPage
    city={city}
    emoji="⚓"
    intro="Hamburg combines dedicated gluten-free kitchens with a maritime food scene — celiac-safe cakes at Isabella Glutenfree Pasteries, 100% gluten-free burgers at Grilly Idol, harbour fish restaurants and international eateries make the port city easy for gluten-free travellers."
    faqItems={faqItems}
    heroTitle="Dedicated gluten-free restaurants in Hamburg"
  />
);

export default GlutenFreeHamburg;
