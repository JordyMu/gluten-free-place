import NewZealandCityPage from "@/components/new-zealand/NewZealandCityPage";
import { newZealandCities } from "@/data/newZealandCities";

const city = newZealandCities.find((c) => c.slug === "auckland")!;

const faqItems = [
  { question: "Is Auckland good for gluten-free dining?", answer: "Yes — Auckland has a strong celiac community with multiple dedicated gluten-free bakeries like The GF Depot, plus celiac-aware cafés, restaurants and dessert spots across the city." },
  { question: "Where can I find dedicated gluten-free bakeries in Auckland?", answer: "The GF Depot is Auckland's flagship 100% dedicated gluten-free bakery, with breads, pies and pastries baked safely for celiacs. Several cafés also carry GF cabinets." },
  { question: "Do most Auckland restaurants offer gluten-free options?", answer: "Most modern Auckland restaurants clearly mark GF dishes on the menu. Asian fusion, brunch cafés and seafood spots tend to have the strongest GF offering." },
  { question: "How do I find safe gluten-free food on Waiheke Island?", answer: "Waiheke's vineyards and restaurants are very allergen-aware. Spots like tibs (Ethiopian, naturally GF injera) cater specifically to celiacs." },
  { question: "Can you buy gluten-free groceries in Auckland?", answer: "Yes — Countdown, New World and Pak'nSave all stock wide GF ranges, and Huckleberry health food stores carry specialty GF products." },
];

const GlutenFreeAuckland = () => (
  <NewZealandCityPage
    city={city}
    emoji="🍦"
    intro="Auckland leads New Zealand's gluten-free scene with The GF Depot's dedicated bakery, celiac-aware brunch cafés, Asian fusion spots and dessert favourites like Giapo across the CBD, Ponsonby and beyond."
    faqItems={faqItems}
  />
);

export default GlutenFreeAuckland;
