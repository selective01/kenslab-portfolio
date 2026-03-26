// BlogCard.tsx — preview card shown on the /blog listing page

import Link from "next/link";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/types";
import { cn } from "@/lib/utils";

type BlogCardProps = {
  post:      BlogPost;
  featured?: boolean;
};

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group block border border-brand-border rounded-[4px] p-6 bg-brand-surface",
        "hover:border-brand-green-light transition-all duration-200",
        featured && "p-7 md:p-8"
      )}
    >
      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {post.tags.map((tag) => (
          <span key={tag} className="text-[0.68rem] px-2 py-0.5 border border-brand-border rounded-sm text-brand-gray uppercase tracking-wide">
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h3 className={cn(
        "font-akshar font-semibold uppercase leading-snug mb-3",
        "group-hover:text-brand-green-light transition-colors duration-200",
        featured ? "text-2xl md:text-3xl" : "text-lg"
      )}>
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className="text-sm text-brand-gray leading-relaxed mb-5">
        {post.excerpt}
      </p>

      {/* Meta */}
      <div className="flex items-center justify-between text-xs text-brand-gray">
        <span>{formatDate(post.date)}</span>
        <span>{post.readTime}</span>
      </div>
    </Link>
  );
}
