
import { useState } from "react";
import { Header } from "@/components/countries/Header";
import { HeroSection } from "@/components/countries/HeroSection";
import { FeaturedCountries } from "@/components/countries/FeaturedCountries";
import { CTASection } from "@/components/countries/CTASection";
import { usePageSEO } from "@/hooks/usePageSEO";

const Countries = () => {
  const [searchQuery, setSearchQuery] = useState("");

  usePageSEO({
    title: "Browse Gluten-Free Countries | GlutenFreePlace",
    description: "Explore gluten-free restaurants across 150+ countries. Find celiac-safe dining guides for every destination worldwide.",
    canonicalPath: "/countries",
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <Header />
      <HeroSection searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <FeaturedCountries searchQuery={searchQuery} />
      <CTASection />
    </div>
  );
};

export default Countries;
