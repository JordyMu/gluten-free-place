import UKCityPage from "@/components/uk/UKCityPage";
import { londonRestaurants } from "@/data/londonRestaurants";

const faqItems = [
  { question: "Is London good for celiac travellers?", answer: "Absolutely! London has one of the best gluten-free scenes in Europe, with dedicated bakeries like Libby's, GF fish & chip shops, and major chains offering GF menus." },
  { question: "Which London areas are best for gluten-free dining?", answer: "Notting Hill, Soho, South Kensington, and Borough Market area have the highest concentration of celiac-safe restaurants and dedicated GF venues." },
  { question: "Can I find dedicated GF bakeries in London?", answer: "Yes! Libby's, The Polka Dot Bakery, and Ma Ma Boutique Bakery all offer dedicated or extensive gluten-free baked goods." },
];

const GlutenFreeLondon = () => (
  <UKCityPage
    cityName="London"
    citySlug="london"
    emoji="🏙️"
    intro="London offers one of the world's best gluten-free dining scenes, from dedicated GF bakeries in Notting Hill to fish & chip shops with separate fryers. Whether you're exploring Borough Market or dining in Mayfair, celiac-safe options abound."
    restaurants={londonRestaurants}
    faqItems={faqItems}
  />
);

export default GlutenFreeLondon;
