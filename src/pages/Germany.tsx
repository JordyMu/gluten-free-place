import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Germany = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-red-50">
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center space-x-2 hover:opacity-80 transition-opacity mb-4">
            <ArrowLeft className="h-5 w-5" />
            <span className="text-sm font-medium">Back to Countries</span>
          </Link>
          <div className="flex items-center space-x-4">
            <div className="text-6xl">🇩🇪</div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Germany</h1>
              <p className="text-lg text-gray-600">Coming Soon - Top Gluten-Free Restaurants</p>
            </div>
          </div>
        </div>
      </header>
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl text-gray-600">German gluten-free restaurants coming soon!</p>
        </div>
      </section>
    </div>
  );
};

export default Germany;