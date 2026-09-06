import ArgentinaCityPage from "@/components/argentina/ArgentinaCityPage";
import { argentinaRestaurants } from "@/data/argentinaRestaurants";

const restaurants = argentinaRestaurants.filter((r) => r.city === "Buenos Aires");

const faqItems = [
  { question: "Is Buenos Aires good for gluten-free dining?", answer: "Yes — Buenos Aires has Latin America's strongest gluten-free scene, with dedicated Sin TACC bakeries like La Unión, JANA and GOUT alongside 100% gluten-free restaurants such as Sintaxis." },
  { question: "What does Sin TACC mean?", answer: "Sin TACC means free from wheat (trigo), oats (avena), barley (cebada) and rye (centeno) — Argentina's standard way of labelling gluten-free food. Look for it on menus, packaging and bakery windows." },
  { question: "Where can I find 100% gluten-free food in Buenos Aires?", answer: "Palermo and Recoleta have the highest concentration of dedicated kitchens, including Sintaxis in Palermo Soho, La Unión Gluten Free Bakery's branches, and GOUT Gluten Free in Recoleta and Belgrano." },
  { question: "How do I ask for gluten-free food in Buenos Aires?", answer: "Say “Soy celíaco/a” (I have celiac disease) and ask for options “sin TACC.” Awareness is high and many restaurants carry a separate gluten-free menu." },
  { question: "Can I buy gluten-free groceries in Buenos Aires?", answer: "Yes — supermarkets such as Jumbo, Carrefour and Coto stock wide Sin TACC ranges, and dedicated bakeries sell fresh gluten-free bread, facturas and empanadas." },
];

const GlutenFreeBuenosAires = () => (
  <ArgentinaCityPage
    cityName="Buenos Aires"
    restaurants={restaurants}
    emoji="🥐"
    intro="Buenos Aires is Argentina's gluten-free capital — dedicated Sin TACC bakeries like La Unión and JANA, fully gluten-free kitchens such as Sintaxis, corn-based arepas and tacos in Palermo, and churros at El Topo make eating celiac-safe easy across the city."
    faqItems={faqItems}
    heroTitle="Dedicated gluten-free restaurants in Buenos Aires"
  />
);

export default GlutenFreeBuenosAires;
