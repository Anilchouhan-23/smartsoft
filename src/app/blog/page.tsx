import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import Link from "next/link";
import blogPosts from "@/data/blogPosts";

export const metadata: Metadata = {
  title: "Blog | SmartSoftHub - Software, Marketing & Cloud Insights",
  description:
    "Read the latest articles on SaaS development, digital marketing, web security, cloud infrastructure, and custom software solutions from SmartSoftHub.",
  keywords:
    "software blog, SaaS insights, digital marketing tips, cloud computing, web development, SmartSoftHub blog",
};

const tags = [
  "SaaS",
  "Cloud Solutions",
  "Social Media",
  "Digital Marketing",
  "Web Development",
  "API Integrations",
  "SEO",
  "Startup Tools",
  "Email Campaigns",
  "Custom Software",
];

const recentPosts = blogPosts.slice(0, 5);

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <PageBanner title="Blog" breadcrumb="Blog" />

      <section className="py-20">
        <div className="w-[90%] max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-10">
          {/* Main Content */}
          <div className="flex-[2]">
            <div className="space-y-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.1)] transition-all group"
                >
                  {/* Featured Image */}
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="relative h-[250px] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute bottom-4 left-4 bg-cyan text-navy text-xs font-bold px-3 py-1.5 rounded">
                        {post.date}
                      </span>
                      <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-navy text-xs font-medium px-3 py-1.5 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </Link>
                  <div className="p-6">
                    <Link href={`/blog/${post.slug}`}>
                      <h2 className="text-xl font-bold text-navy mb-3 hover:text-cyan transition-colors">
                        {post.title}
                      </h2>
                    </Link>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-cyan font-medium text-sm hover:gap-3 transition-all"
                    >
                      Read More <i className="fas fa-arrow-right text-xs" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="flex-1 space-y-8">
            {/* Recent Posts */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
              <h3 className="text-lg font-bold text-navy mb-5 pb-3 border-b-2 border-cyan">
                Recent Posts
              </h3>
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="flex gap-3 group"
                  >
                    <div className="w-[60px] h-[60px] rounded-lg overflow-hidden shrink-0">
                      <img
                        src={post.image}
                        alt={post.imageAlt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-navy group-hover:text-cyan transition-colors leading-snug">
                        {post.title}
                      </h4>
                      <span className="text-xs text-gray-400 mt-1 block">
                        {post.date}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
              <h3 className="text-lg font-bold text-navy mb-5 pb-3 border-b-2 border-cyan">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 border border-gray-200 rounded-full text-sm text-gray-600 hover:border-cyan hover:text-cyan hover:bg-cyan/5 transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-navy to-navy-dark rounded-2xl p-6 text-center">
              <i className="fas fa-headset text-4xl text-cyan/40 mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">
                Need IT Support?
              </h3>
              <p className="text-blue-200/60 text-sm mb-4">
                Get in touch with our expert team for any IT needs.
              </p>
              <Link
                href="/enquiry"
                className="inline-block px-6 py-2.5 bg-cyan text-navy font-semibold rounded-full text-sm hover:bg-cyan-dark transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </>
  );
}
