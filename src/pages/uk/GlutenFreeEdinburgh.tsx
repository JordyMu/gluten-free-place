import UKCityPage from "@/components/uk/UKCityPage";
import { edinburghRestaurants } from "@/data/edinburghRestaurants";

const faqItems = [
  { question: "Is Edinburgh good for gluten-free dining?", answer: "Yes! Edinburgh has dedicated GF cafes like The Gluten Free Kitchen and Sugar Daddy's Bakery, plus many restaurants on the Royal Mile offering GF options." },
  { question: "Can I find GF haggis in Edinburgh?", answer: "Yes, several restaurants offer gluten-free haggis. Makars Mash Bar is known for their GF version of this Scottish classic." },
  { question: "Are there GF options near Edinburgh's tourist spots?", answer: "Absolutely. Bread Meats Bread on North Bridge, Civerinos near the Royal Mile, and Tupiniquim near the Meadows all offer celiac-safe meals." },
];

const GlutenFreeEdinburgh = () => (
  <UKCityPage
    cityName="Edinburgh"
    citySlug="edinburgh"
    emoji="🏰"
    intro="Edinburgh's gluten-free scene shines with dedicated bakeries and cafes. From naturally GF Brazilian tapioca crepes to Scotland's best GF scones, the capital city caters well to celiac visitors exploring its historic streets."
    restaurants={edinburghRestaurants}
    faqItems={faqItems}
  />
);

export default GlutenFreeEdinburgh;
