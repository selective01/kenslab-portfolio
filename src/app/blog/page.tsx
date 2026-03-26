import BlogCard    from "@/components/blog/BlogCard";
import SectionLabel from "@/components/ui/SectionLabel";
import { blogPosts } from "@/data/blog-posts";

export const metadata = {
  title:       "Blog | Ken'sLab",
  description: "Case studies, technical write-ups, and notes on building full-stack products.",
};

export default function BlogPage() {
  const [featuredPost, ...otherPosts] = blogPosts;

  return (
    <section className="section-padding pt-28 bg-brand-surface dark:bg-brand-surface">
      <div className="section-container">

        <SectionLabel subtitle="Case studies, build notes, and practical engineering write-ups">
          Blog
        </SectionLabel>

        {/* Featured post + intro card */}
        <div className="mb-12 grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]">
          {featuredPost ? <BlogCard post={featuredPost} featured /> : null}

          <div className="rounded-[4px] border border-brand-border bg-brand-surface2 p-6 md:p-7">
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-brand-gray">
              Why this blog exists
            </p>
            <h2 className="mb-4 font-akshar text-2xl uppercase md:text-3xl">
              Real projects. Real debugging. Real product thinking.
            </h2>
            <p className="text-sm leading-7 text-brand-gray-light md:text-base">
              This blog focuses on the kind of work I actually do: building platforms,
              integrating payments, fixing deployment issues, and designing systems that
              feel polished for users and practical for businesses.
            </p>
          </div>
        </div>

        {/* Remaining posts */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {otherPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

      </div>
    </section>
  );
}
