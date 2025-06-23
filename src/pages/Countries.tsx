
import { Header } from "@/components/countries/Header";
import { HeroSection } from "@/components/countries/HeroSection";
import { FeaturedCountries } from "@/components/countries/FeaturedCountries";
import { CTASection } from "@/components/countries/CTASection";

const Countries = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <Header />
      <HeroSection />
      <FeaturedCountries />
      <CTASection />
    </div>
  );
};

export default Countries;
