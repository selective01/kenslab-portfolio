// BlogPost.tsx — full blog post page layout
// Receives the post metadata + rendered HTML content from the markdown file

import Link from "next/link";
import { formatDate } from "@/lib/utils";
import type { BlogPost as BlogPostType } from "@/types";

type BlogPostProps = {
  post:    BlogPostType;
  content: string;   // Rendered HTML string from markdown
};

export default function BlogPost({ post, content }: BlogPostProps) {
  return (
    <article className="section-padding pt-28">
      <div className="section-container max-w-4xl">

        {/* Back link */}
        <Link
          href="/blog"
          className="mb-10 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-gray transition-colors hover:text-brand-green-light"
        >
          ← Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-10 border-b border-brand-border pb-10">
          <div className="mb-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-sm border border-brand-border px-2 py-0.5 text-[0.68rem] uppercase tracking-wide text-brand-gray">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="mb-4 font-akshar text-4xl font-bold uppercase leading-tight md:text-5xl">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-brand-gray">
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        {/* Rendered markdown content */}
        <div
          className="
            max-w-none
            [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:font-akshar [&_h2]:text-2xl
            [&_h2]:uppercase [&_h2]:leading-tight [&_h2]:text-brand-green-light [&_h2]:md:text-3xl
            [&_p]:mb-5 [&_p]:text-base [&_p]:leading-8 [&_p]:text-brand-gray-light
            [&_ol]:mb-6 [&_ol]:ml-5 [&_ol]:list-decimal [&_ol]:space-y-3
            [&_ul]:mb-6 [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-3
            [&_li]:leading-8 [&_li]:text-brand-gray-light
            [&_strong]:font-semibold [&_strong]:text-brand-white
            [&_code]:text-brand-green-light [&_code]:bg-brand-surface2 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm
            [&_pre]:bg-brand-surface2 [&_pre]:border [&_pre]:border-brand-border [&_pre]:rounded-[4px] [&_pre]:p-5 [&_pre]:mb-6 [&_pre]:overflow-x-auto
          "
          dangerouslySetInnerHTML={{ __html: content }}
        />

      </div>
    </article>
  );
}
