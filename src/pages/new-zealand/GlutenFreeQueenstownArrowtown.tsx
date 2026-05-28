import NewZealandCityPage from "@/components/new-zealand/NewZealandCityPage";
import { newZealandCities } from "@/data/newZealandCities";

const city = newZealandCities.find((c) => c.slug === "queenstown-arrowtown")!;

const faqItems = [
  { question: "Is Queenstown good for gluten-free dining?", answer: "Yes — Queenstown is a major tourist hub and most restaurants clearly mark GF options. Erik's Fish and Chips and Fergburger both offer reliable gluten-free versions of their signature dishes." },
  { question: "Where can I get gluten-free fish and chips in Queenstown?", answer: "Erik's Fish and Chips on Earl St serves GF-battered fish cooked in a separate fryer — one of the safest celiac options in town." },
  { question: "Are there gluten-free burger options in Queenstown?", answer: "Yes — Fergburger offers a gluten-free bun on request, and several other bistros around the lakefront have GF burger options." },
  { question: "Is Arrowtown good for gluten-free travellers?", answer: "Arrowtown's historic cafés and bistros, including Postmasters Kitchen + Bar, accommodate celiacs well and clearly mark GF dishes." },
  { question: "Can you buy gluten-free groceries in Queenstown?", answer: "Yes — both Countdown and New World in Queenstown stock wide GF ranges suitable for self-catering travellers." },
];

const GlutenFreeQueenstownArrowtown = () => (
  <NewZealandCityPage
    city={city}
    emoji="🏔️"
    intro="Queenstown and nearby Arrowtown deliver standout celiac-safe dining for travellers — Erik's GF fish and chips, Fergburger's GF buns, and Postmasters' alpine bistro fare make the Southern Lakes a confident choice for gluten-free visitors."
    faqItems={faqItems}
  />
);

export default GlutenFreeQueenstownArrowtown;
