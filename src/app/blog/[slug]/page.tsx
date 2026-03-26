// blog/[slug]/page.tsx — individual blog post page

import { notFound }                   from "next/navigation";
import BlogPost                        from "@/components/blog/BlogPost";
import { getPostBySlug, getAllPosts }  from "@/lib/blog";

type PageProps = { params: { slug: string } };

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: PageProps) {
  const result = getPostBySlug(params.slug);
  if (!result) return { title: "Post Not Found | Ken'sLab" };
  return {
    title:       `${result.post.title} | Ken'sLab`,
    description: result.post.excerpt,
  };
}

// Simple markdown → HTML converter (no regex s-flag, no external packages)
function markdownToHtml(md: string): string {
  const lines = md.split("\n");
  const output: string[] = [];
  let inCodeBlock = false;
  let inList = false;
  let codeLines: string[] = [];

  for (const raw of lines) {
    const line = raw;

    // Code block open/close
    if (line.startsWith("```")) {
      if (!inCodeBlock) {
        inCodeBlock = true;
        codeLines = [];
      } else {
        inCodeBlock = false;
        const code = codeLines.join("\n")
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
        output.push(`<pre><code>${code}</code></pre>`);
      }
      continue;
    }

    if (inCodeBlock) { codeLines.push(line); continue; }

    // Close list if needed
    if (inList && !line.startsWith("- ") && !line.startsWith("* ")) {
      output.push("</ul>");
      inList = false;
    }

    // Headings
    if (line.startsWith("### ")) {
      output.push(`<h3>${inline(line.slice(4))}</h3>`);
    } else if (line.startsWith("## ")) {
      output.push(`<h2>${inline(line.slice(3))}</h2>`);
    } else if (line.startsWith("# ")) {
      output.push(`<h1>${inline(line.slice(2))}</h1>`);
    // List items
    } else if (line.startsWith("- ") || line.startsWith("* ")) {
      if (!inList) { output.push("<ul>"); inList = true; }
      output.push(`<li>${inline(line.slice(2))}</li>`);
    // Blank line
    } else if (line.trim() === "") {
      output.push("");
    // Regular paragraph
    } else {
      output.push(`<p>${inline(line)}</p>`);
    }
  }

  if (inList) output.push("</ul>");
  return output.join("\n");
}

// Inline markdown: bold, inline code
function inline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`]+)`/g, "<code>$1</code>");
}

export default function BlogPostPage({ params }: PageProps) {
  const result = getPostBySlug(params.slug);
  if (!result) notFound();

  const { post, content } = result;
  const htmlContent = markdownToHtml(content);

  return <BlogPost post={post} content={htmlContent} />;
}
