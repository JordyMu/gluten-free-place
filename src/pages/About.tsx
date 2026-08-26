import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import SiteFooter from "@/components/layout/SiteFooter";
import { Globe, Shield, Users, Award } from "lucide-react";

const About = () => (
  <>
    <SEOHead
      title="About Us | GlutenFreePlace"
      description="GlutenFreePlace helps celiac and gluten-free travelers find safe, verified restaurants, bakeries, and cafes in 156+ countries worldwide."
      canonical="/about"
    />
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold">
            ← Back to Home
          </Link>
        </div>
      </header>

      <section className="relative text-white py-16 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <Globe className="w-12 h-12 mx-auto mb-4" />
          <h1 className="text-3xl md:text-5xl font-bold mb-4">About GlutenFreePlace</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Helping celiac and gluten-free travelers find safe places to eat around the world.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="prose prose-slate max-w-none space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Our Mission</h2>
            <p>
              GlutenFreePlace was created to make gluten-free and celiac-safe travel easier. We know how
              stressful it can be to find a restaurant that truly understands cross-contamination — whether
              you're exploring Toronto, Rome, Sydney, or a small town in between. Our mission is to connect
              travelers with verified, dedicated gluten-free dining options in 156+ countries.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">How We Verify Places</h2>
            <div className="grid md:grid-cols-2 gap-6 not-prose">
              <div className="flex items-start gap-3">
                <Shield className="w-8 h-8 text-orange-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Celiac Safety Ratings</h3>
                  <p className="text-sm">Each restaurant is classified as a dedicated GF facility or celiac-aware kitchen with detailed protocols.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-8 h-8 text-orange-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Community Reviews</h3>
                  <p className="text-sm">Real reviews from gluten-free travelers share first-hand experiences of safety, taste, and service.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-8 h-8 text-orange-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Quality Assurance</h3>
                  <p className="text-sm">Our team reviews submissions to ensure listings meet our safety and quality standards.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="w-8 h-8 text-orange-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Global Coverage</h3>
                  <p className="text-sm">From Italy and France to South Africa, Mauritius, and Canada — we cover the destinations celiacs travel to most.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Our Story</h2>
            <p>
              GlutenFreePlace began as a personal project — born out of frustration with the difficulty of
              finding trustworthy gluten-free options while traveling. What started as a few city guides
              has grown into a global directory covering 156 countries, with dedicated city pages for
              destinations like Toronto, Paris, Sydney, Cape Town, and Nairobi.
            </p>
            <p>
              Every listing includes addresses, directions, menus, safety badges, and real traveler
              reviews, so you can dine with confidence wherever your journey takes you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Get in Touch</h2>
            <p>
              Have a restaurant to recommend, feedback, or a question? We'd love to hear from you. Reach us
              at{" "}
              <a href="mailto:contact@glutenfreeplace.org" className="text-orange-600 hover:underline">contact@glutenfreeplace.org</a>{" "}
              or visit our <Link to="/contact" className="text-orange-600 hover:underline">contact page</Link>.
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link to="/" className="text-orange-600 hover:text-orange-700 font-medium">← Back to Home</Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  </>
);

export default About;
