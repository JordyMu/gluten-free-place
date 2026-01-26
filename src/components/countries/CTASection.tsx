
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Want to See All Countries?</h2>
        <p className="text-xl mb-8 opacity-90">Explore our complete list of 156 countries and territories worldwide</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/all-countries">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              View All 156 Countries
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="border-white bg-transparent !text-white hover:bg-white hover:text-orange-600">
            Add a Place
          </Button>
        </div>
      </div>
    </section>
  );
};
