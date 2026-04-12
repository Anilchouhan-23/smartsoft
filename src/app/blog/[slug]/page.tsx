import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import Link from "next/link";
import blogPosts, { getBlogBySlug, getAllSlugs } from "@/data/blogPosts";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | SmartSoftHub Blog`,
    description: post.excerpt,
    keywords: post.keywords.join(", "),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: [{ url: post.image, alt: post.imageAlt }],
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id)
    .slice(0, 3);

  return (
    <>
      <Navbar />
      <PageBanner title={post.title} breadcrumb="Blog" />

      <article className="py-20">
        <div className="w-[90%] max-w-[900px] mx-auto">
          {/* Featured Image */}
          <div className="relative w-full h-[300px] sm:h-[400px] rounded-2xl overflow-hidden mb-10 shadow-lg">
            <img
              src={post.image}
              alt={post.imageAlt}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <div className="flex items-center gap-4">
                <span className="bg-cyan text-navy text-xs font-bold px-3 py-1.5 rounded">
                  {post.category}
                </span>
                <span className="text-white/80 text-sm">{post.date}</span>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose-custom">
            {post.content.map((paragraph, index) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2
                    key={index}
                    className="text-2xl font-bold text-navy mt-10 mb-4"
                  >
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              return (
                <p
                  key={index}
                  className="text-gray-600 leading-relaxed mb-4"
                >
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Tags */}
          <div className="mt-10 pt-8 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-navy mb-3 uppercase tracking-wider">
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {post.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="px-3 py-1.5 bg-gray-100 text-gray-600 text-sm rounded-full"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          {/* Back to Blog */}
          <div className="mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-cyan font-medium hover:gap-3 transition-all"
            >
              <i className="fas fa-arrow-left text-xs" /> Back to Blog
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-8 text-center">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((related) => (
              <Link
                key={related.id}
                href={`/blog/${related.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="relative h-[180px]">
                  <img
                    src={related.image}
                    alt={related.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-navy text-xs font-medium px-2.5 py-1 rounded-full">
                    {related.category}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-xs text-gray-400 mb-2">{related.date}</p>
                  <h3 className="text-base font-semibold text-navy group-hover:text-cyan transition-colors leading-snug">
                    {related.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
