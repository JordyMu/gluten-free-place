import GermanyCityPage from "@/components/germany/GermanyCityPage";
import { germanyCities } from "@/data/germanyCities";

const city = germanyCities.find((c) => c.slug === "berlin")!;

const faqItems = [
  { question: "Is Berlin good for gluten-free dining?", answer: "Yes — Berlin has one of Europe's strongest gluten-free scenes, with fully gluten-free kitchens like Trattoria Senza and Sinless Cakes Cafe alongside many restaurants offering clearly marked GF dishes." },
  { question: "Where can I find 100% gluten-free food in Berlin?", answer: "Trattoria Senza in Mitte, Sinless Cakes Cafe in Charlottenburg-Wilmersdorf and Tapiocaria in Friedrichshain all operate fully gluten-free kitchens." },
  { question: "How do I ask for gluten-free food in Berlin?", answer: "Ask for “glutenfrei” and say “Ich habe Zöliakie” to explain celiac disease. Staff in central Berlin usually speak English and can show the allergen list." },
  { question: "Are allergens listed on Berlin menus?", answer: "Yes — German restaurants must provide allergen information, often in a separate guide. Ask staff for it and confirm shared fryers or preparation surfaces." },
  { question: "Can I buy gluten-free groceries in Berlin?", answer: "Yes — REWE, Edeka, Bio Company and DM stock wide gluten-free ranges. Look for “glutenfrei” or the crossed-grain symbol on packaging." },
];

const GlutenFreeBerlin = () => (
  <GermanyCityPage
    city={city}
    emoji="🥨"
    intro="Berlin blends dedicated gluten-free kitchens with a creative food scene — fully gluten-free Italian at Trattoria Senza, cakes at Sinless Cakes Cafe, tapioca crêpes in Friedrichshain and corn-tortilla tacos in Mitte make the city an easy choice for celiac travellers."
    faqItems={faqItems}
    heroTitle="Dedicated gluten-free restaurants in Berlin"
  />
);

export default GlutenFreeBerlin;
