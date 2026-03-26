import Link from "next/link";
import { formatDate } from "@/lib/utils";
import type { BlogPost as BlogPostType } from "@/types";

type BlogPostProps = {
  post: BlogPostType;
  content: string;
};

export default function BlogPost({ post, content }: BlogPostProps) {
  return (
    <article className="section-padding pt-28 bg-brand-bg">
      <div className="section-container max-w-4xl">
        <Link
          href="/blog"
          className="mb-10 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-gray transition-colors hover:text-[#e8671a]"
        >
          ← Back to Blog
        </Link>

        <header className="mb-10 border-b border-brand-border pb-10">
          <div className="mb-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-sm border border-brand-border px-2 py-0.5 text-[0.68rem] uppercase tracking-wide text-brand-gray"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="mb-4 font-akshar text-4xl font-bold uppercase leading-tight text-brand-white md:text-5xl">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-brand-gray">
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        <div
          className="
            max-w-none

            [&_h1]:mb-6
            [&_h1]:font-akshar
            [&_h1]:text-3xl
            [&_h1]:uppercase
            [&_h1]:leading-tight
            [&_h1]:text-[#111111]
            dark:[&_h1]:text-white
            md:[&_h1]:text-4xl

            [&_h2]:mt-12
            [&_h2]:mb-4
            [&_h2]:font-akshar
            [&_h2]:text-2xl
            [&_h2]:uppercase
            [&_h2]:leading-tight
            [&_h2]:text-[#e8671a]
            md:[&_h2]:text-3xl

            [&_h3]:mt-10
            [&_h3]:mb-4
            [&_h3]:font-akshar
            [&_h3]:text-xl
            [&_h3]:uppercase
            [&_h3]:leading-tight
            [&_h3]:text-[#e8671a]
            md:[&_h3]:text-2xl

            [&_p]:mb-5
            [&_p]:text-base
            [&_p]:leading-8
            [&_p]:text-[#2f2f2f]
            dark:[&_p]:text-[#d1d5db]

            [&_ul]:mb-6
            [&_ul]:ml-5
            [&_ul]:list-disc
            [&_ul]:space-y-3

            [&_ol]:mb-6
            [&_ol]:ml-5
            [&_ol]:list-decimal
            [&_ol]:space-y-3

            [&_li]:leading-8
            [&_li]:text-[#2f2f2f]
            dark:[&_li]:text-[#d1d5db]

            [&_strong]:font-semibold
            [&_strong]:text-[#111111]
            dark:[&_strong]:text-white

            [&_a]:text-[#e8671a]
            [&_a]:underline
            [&_a]:underline-offset-4

            [&_code]:rounded
            [&_code]:bg-[#e7e7e7]
            [&_code]:px-1.5
            [&_code]:py-0.5
            [&_code]:text-sm
            [&_code]:text-[#c2410c]
            dark:[&_code]:bg-brand-surface2
            dark:[&_code]:text-[#ff8a3d]

            [&_pre]:mb-6
            [&_pre]:overflow-x-auto
            [&_pre]:rounded-[4px]
            [&_pre]:border
            [&_pre]:border-[#d1d5db]
            [&_pre]:bg-[#ececec]
            [&_pre]:p-5
            dark:[&_pre]:border-brand-border
            dark:[&_pre]:bg-brand-surface2

            [&_pre_code]:bg-transparent
            [&_pre_code]:p-0
            [&_pre_code]:text-[#111111]
            dark:[&_pre_code]:text-white

            [&_blockquote]:my-6
            [&_blockquote]:border-l-4
            [&_blockquote]:border-[#e8671a]
            [&_blockquote]:pl-4
            [&_blockquote]:italic
            [&_blockquote]:text-[#555555]
            dark:[&_blockquote]:text-[#b3b3b3]
          "
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </article>
  );
}