import FranceCityPage from "@/components/france/FranceCityPage";
import { bordeauxRestaurants } from "@/data/bordeauxRestaurants";

const faqItems = [
  { question: "Is Bordeaux good for gluten-free dining?", answer: "Bordeaux's growing GF scene includes BAG Bakery Art Gallery, an artisan bakery with celiac-safe options. The city's wine bars often have naturally GF tapas." },
];

const GlutenFreeBordeaux = () => (
  <FranceCityPage
    cityName="Bordeaux"
    citySlug="bordeaux"
    emoji="🍇"
    intro="France's wine capital pairs world-class vineyards with a small but quality gluten-free scene, anchored by artisan bakeries and celiac-aware bistros."
    restaurants={bordeauxRestaurants}
    faqItems={faqItems}
  />
);

export default GlutenFreeBordeaux;
