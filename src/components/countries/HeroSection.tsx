
import { Search, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export const HeroSection = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-blue-600/10" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-orange-100 text-orange-800 border-orange-200">
            <Flag className="h-4 w-4 mr-2" />
            Top Rated Countries
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-500 to-blue-600 bg-clip-text text-transparent">
            Featured Gluten-Free
            <br />
            Destinations
          </h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Discover the world's most gluten-free friendly countries with verified restaurants and local insights
          </p>
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-8">
            <div className="relative flex bg-white rounded-full shadow-xl border border-orange-100 p-2">
              <div className="flex-1 flex items-center px-4">
                <Search className="h-5 w-5 text-gray-400 mr-3" />
                <Input 
                  placeholder="Search countries..." 
                  className="border-0 focus-visible:ring-0"
                />
              </div>
              <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-full px-6">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
