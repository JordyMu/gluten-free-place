import GermanyCityPage from "@/components/germany/GermanyCityPage";
import { germanyCities } from "@/data/germanyCities";

const city = germanyCities.find((c) => c.slug === "munich")!;

const faqItems = [
  { question: "Is Munich good for gluten-free dining?", answer: "Yes — Munich has dedicated gluten-free spots like Isabella Glutenfreie Pâtisserie and Not Guilty Pleasure, plus many restaurants with clearly marked gluten-free dishes, from Bavarian beer gardens to Italian pizzerias." },
  { question: "Where can I find 100% gluten-free food in Munich?", answer: "Isabella Glutenfreie Pâtisserie near Viktualienmarkt and Not Guilty Pleasure in the Glockenbachviertel both operate fully gluten-free kitchens." },
  { question: "How do I ask for gluten-free food in Munich?", answer: "Ask for “glutenfrei” and say “Ich habe Zöliakie” to explain celiac disease. Staff in central Munich usually speak English and can show the allergen list." },
  { question: "Are allergens listed on Munich menus?", answer: "Yes — German restaurants must provide allergen information, often in a separate guide. Ask staff for it and confirm shared fryers or preparation surfaces." },
  { question: "Can I buy gluten-free groceries in Munich?", answer: "Yes — REWE, Edeka, DM and organic stores like Basic and denn's stock wide gluten-free ranges. Look for “glutenfrei” or the crossed-grain symbol on packaging." },
];

const GlutenFreeMunich = () => (
  <GermanyCityPage
    city={city}
    emoji="🥨"
    intro="Munich mixes dedicated gluten-free bakeries with a classic Bavarian food scene — celiac-safe cakes at Isabella Glutenfreie Pâtisserie, brunch at Not Guilty Pleasure, beer gardens with GF options and Italian pizzerias make the Bavarian capital easy for gluten-free travellers."
    faqItems={faqItems}
    heroTitle="Dedicated gluten-free restaurants in Munich"
  />
);

export default GlutenFreeMunich;
