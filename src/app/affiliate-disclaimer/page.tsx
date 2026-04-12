import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Affiliate Disclaimer | SmartSoftHub",
  description:
    "Read our affiliate disclaimer to understand how SmartSoftHub earns commissions through affiliate links while recommending trusted products and services.",
  keywords:
    "affiliate disclaimer, affiliate links, commissions, SmartSoftHub",
};

export default function AffiliateDisclaimerPage() {
  return (
    <>
      <Navbar />
      <PageBanner
        title="Affiliate Disclaimer"
        breadcrumb="Affiliate Disclaimer"
      />

      <section className="py-20">
        <div className="w-[90%] max-w-[800px] mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-6">
            Affiliate Disclaimer
          </h2>

          <div className="bg-cyan/5 border-l-4 border-cyan rounded-r-xl p-6 mb-8">
            <p className="text-gray-700 leading-relaxed text-lg">
              We may earn a commission when you purchase through links on our
              website, at no additional cost to you. These commissions help us
              maintain and improve our services. We only recommend products and
              services that we trust and believe provide value to our users.
            </p>
          </div>

          <h3 className="text-lg font-semibold text-navy mt-10 mb-3">
            How Affiliate Links Work
          </h3>
          <p className="text-gray-600 mb-4">
            Some of the links on our website are affiliate links. This means
            that if you click on the link and make a purchase, SmartSoftHub may
            receive a small commission from the vendor or service provider. This
            commission comes at absolutely no additional cost to you and does not
            affect the price you pay.
          </p>

          <h3 className="text-lg font-semibold text-navy mt-10 mb-3">
            Our Commitment to Transparency
          </h3>
          <p className="text-gray-600 mb-4">
            At SmartSoftHub, we are committed to being transparent about our
            affiliate relationships. We believe in honest and ethical marketing
            practices. Every product or service we recommend has been evaluated
            by our team for quality, reliability, and relevance to our
            audience.
          </p>

          <h3 className="text-lg font-semibold text-navy mt-10 mb-3">
            Why We Use Affiliate Links
          </h3>
          <p className="text-gray-600 mb-4">
            Affiliate commissions are one of the ways we fund the operation of
            this website. The revenue generated through affiliate partnerships
            helps us:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
            <li>Maintain and update our website with fresh, relevant content</li>
            <li>
              Continue providing free educational resources and blog articles
            </li>
            <li>Invest in improving our services and user experience</li>
            <li>
              Keep our team dedicated to researching and reviewing the best
              software tools and digital services
            </li>
          </ul>

          <h3 className="text-lg font-semibold text-navy mt-10 mb-3">
            Our Review Process
          </h3>
          <p className="text-gray-600 mb-4">
            We do not promote products or services solely because they offer
            affiliate commissions. Our recommendations are based on genuine
            evaluation. We consider factors such as product quality, customer
            support, pricing, user reviews, and overall value before
            recommending any product or service to our audience.
          </p>

          <h3 className="text-lg font-semibold text-navy mt-10 mb-3">
            Third-Party Products and Services
          </h3>
          <p className="text-gray-600 mb-4">
            While we strive to recommend only the best products and services,
            SmartSoftHub is not responsible for the quality, safety, or
            legality of any third-party products or services linked on our
            website. Any issues related to third-party products should be
            directed to the respective vendor or service provider.
          </p>

          <h3 className="text-lg font-semibold text-navy mt-10 mb-3">
            Changes to This Disclaimer
          </h3>
          <p className="text-gray-600 mb-4">
            SmartSoftHub reserves the right to update this affiliate disclaimer
            at any time. Any changes will be reflected on this page with an
            updated revision date. We encourage you to review this page
            periodically for any updates.
          </p>

          <h3 className="text-lg font-semibold text-navy mt-10 mb-3">
            Contact Us
          </h3>
          <p className="text-gray-600 mb-4">
            If you have any questions or concerns about our affiliate
            practices, please do not hesitate to contact us at{" "}
            <strong>support@smartsofthub.online</strong>.
          </p>

          <p className="text-gray-500 text-sm mt-10 italic">
            Last updated: April 2026
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
