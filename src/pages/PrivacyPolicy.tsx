import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import SiteFooter from "@/components/layout/SiteFooter";

const PrivacyPolicy = () => (
  <>
    <SEOHead
      title="Privacy Policy | GlutenFreePlace"
      description="How GlutenFreePlace collects, uses, and protects your data when you search for gluten-free restaurants and write reviews."
      canonical="/privacy"
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
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: August 2026</p>

        <div className="prose prose-slate max-w-none space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Introduction</h2>
            <p>
              GlutenFreePlace ("we", "us", "our") operates the website glutenfreeplace.org (the "Site").
              This Privacy Policy explains how we collect, use, and protect your personal information
              when you visit our Site to discover gluten-free restaurants, bakeries, and cafes worldwide.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Information you provide:</strong> When you create an account, submit a restaurant, or write a review, we collect your name, email address, and the content you submit.</li>
              <li><strong>Information collected automatically:</strong> We collect device information, browser type, IP address, and usage data through cookies and analytics tools.</li>
              <li><strong>Location data:</strong> With your consent, we may use your browser's geolocation to show nearby gluten-free places.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and improve our restaurant listings and search features.</li>
              <li>To display reviews and ratings submitted by the community.</li>
              <li>To respond to your inquiries and provide customer support.</li>
              <li>To analyze Site usage and improve user experience.</li>
              <li>To send occasional updates about new features (you can opt out anytime).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar technologies to enhance your browsing experience, remember your
              preferences, and understand how you use our Site. We use Google Analytics and may serve ads
              through Google AdSense, which uses cookies to personalize ads based on your interests. You
              can control cookies through your browser settings. See{" "}
              <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Google's Ad Settings
              </a>{" "}to manage ad personalization.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Third-Party Services</h2>
            <p>
              We use third-party services including Google Analytics, Google AdSense, authentication
              providers (Google Sign-In), and our backend infrastructure. These providers have their own
              privacy policies governing how they handle your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. Data Sharing</h2>
            <p>
              We do not sell your personal information. We may share data with service providers who help
              us operate the Site, when required by law, or to protect our rights. Aggregated,
              non-identifiable data may be shared for analytics purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">7. Data Security</h2>
            <p>
              We implement reasonable technical and organizational measures to protect your data, including
              encryption in transit and secure storage. However, no method of transmission over the
              internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">8. Your Rights</h2>
            <p>
              Depending on your location (e.g., GDPR in the EU/UK, CCPA in California), you have the right
              to access, correct, delete, or export your personal data, and to opt out of data sale or
              targeted advertising. To exercise these rights, contact us at{" "}
              <a href="mailto:privacy@glutenfreeplace.org" className="text-orange-600 hover:underline">privacy@glutenfreeplace.org</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">9. Children's Privacy</h2>
            <p>
              Our Site is not directed to children under 16, and we do not knowingly collect personal
              information from minors. If you believe we have collected data from a child, please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of significant
              changes by posting the new policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">11. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, contact us at{" "}
              <a href="mailto:privacy@glutenfreeplace.org" className="text-orange-600 hover:underline">privacy@glutenfreeplace.org</a>.
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

export default PrivacyPolicy;
