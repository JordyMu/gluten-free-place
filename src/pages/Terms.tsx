import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import SiteFooter from "@/components/layout/SiteFooter";

const Terms = () => (
  <>
    <SEOHead
      title="Terms & Conditions | GlutenFreePlace"
      description="The terms and conditions governing your use of GlutenFreePlace to find and review gluten-free restaurants worldwide."
      canonical="/terms"
      noIndex
    />
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold">
            ← Back to Home
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: August 2026</p>

        <div className="prose prose-slate max-w-none space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using GlutenFreePlace ("the Site"), you agree to be bound by these Terms &
              Conditions. If you do not agree, please do not use the Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. Use of the Site</h2>
            <p>
              GlutenFreePlace provides information about gluten-free restaurants, bakeries, and cafes for
              informational purposes only. You agree to use the Site lawfully and not to misuse, disrupt,
              or attempt to gain unauthorized access to our systems.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. User-Generated Content</h2>
            <p>
              You may submit reviews, ratings, and restaurant information. You are responsible for the
              content you submit and warrant that it is accurate, lawful, and does not infringe the rights
              of others. We reserve the right to remove any content that violates these terms or is
              otherwise objectionable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. No Medical Advice</h2>
            <p>
              Information on this Site is not medical advice. Restaurant safety ratings and celiac-safe
              classifications are based on community reviews and publicly available data. Always verify
              directly with the restaurant and consult a medical professional regarding your dietary needs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Accuracy of Information</h2>
            <p>
              We strive to keep restaurant listings accurate and up to date, but we do not guarantee the
              completeness, accuracy, or reliability of any information on the Site. Restaurant details
              (menus, hours, safety protocols) may change without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. Advertising</h2>
            <p>
              The Site may display advertisements served by third-party networks such as Google AdSense.
              Advertisers are responsible for the content of their ads. We are not liable for any products
              or services advertised on the Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">7. Intellectual Property</h2>
            <p>
              All content on this Site, including text, graphics, logos, and software, is the property of
              GlutenFreePlace or its licensors and is protected by intellectual property laws. You may not
              reproduce or distribute it without permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">8. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, GlutenFreePlace shall not be liable for any direct,
              indirect, incidental, or consequential damages arising from your use of the Site or reliance
              on any information provided.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">9. Third-Party Links</h2>
            <p>
              The Site contains links to third-party websites (e.g., maps, restaurant websites). We are not
              responsible for the content or practices of these external sites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">10. Changes to Terms</h2>
            <p>
              We may update these Terms at any time. Continued use of the Site after changes constitutes
              acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">11. Contact</h2>
            <p>
              Questions about these Terms? Contact us at{" "}
              <a href="mailto:contact@glutenfreeplace.org" className="text-orange-600 hover:underline">contact@glutenfreeplace.org</a>.
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

export default Terms;
