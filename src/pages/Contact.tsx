import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import SiteFooter from "@/components/layout/SiteFooter";
import { Mail, Globe, Users } from "lucide-react";

const Contact = () => (
  <>
    <SEOHead
      title="Contact Us | GlutenFreePlace"
      description="Get in touch with the GlutenFreePlace team — suggest a restaurant, report an issue, or ask a question about gluten-free travel."
      canonical="/contact"
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
          <Mail className="w-12 h-12 mx-auto mb-4" />
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Suggest a restaurant, report an issue, or ask us anything about gluten-free travel.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-sm border p-6 text-center">
            <Mail className="w-8 h-8 text-orange-600 mx-auto mb-3" />
            <h2 className="font-semibold text-gray-900 mb-1">Email</h2>
            <p className="text-sm text-gray-600">
              <a href="mailto:contact@glutenfreeplace.org" className="text-orange-600 hover:underline">contact@glutenfreeplace.org</a>
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border p-6 text-center">
            <Globe className="w-8 h-8 text-orange-600 mx-auto mb-3" />
            <h2 className="font-semibold text-gray-900 mb-1">Coverage</h2>
            <p className="text-sm text-gray-600">156+ countries worldwide</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border p-6 text-center">
            <Users className="w-8 h-8 text-orange-600 mx-auto mb-3" />
            <h2 className="font-semibold text-gray-900 mb-1">Community</h2>
            <p className="text-sm text-gray-600">Thousands of traveler reviews</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Send Us a Message</h2>
          <p className="text-gray-600 mb-6">
            Have a gluten-free restaurant to recommend or a correction to suggest? Email us directly at{" "}
            <a href="mailto:contact@glutenfreeplace.org" className="text-orange-600 hover:underline">contact@glutenfreeplace.org</a>{" "}
            and we'll get back to you as soon as possible.
          </p>
          <a href="mailto:contact@glutenfreeplace.org">
            <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold px-6 py-3 rounded-lg hover:from-orange-700 hover:to-red-700 transition-colors">
              Email Us
            </button>
          </a>
        </div>

        <div className="mt-12 text-center">
          <Link to="/all-countries" className="text-orange-600 hover:text-orange-700 font-medium">← Explore Countries</Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  </>
);

export default Contact;
