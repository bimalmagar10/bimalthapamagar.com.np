import { getBlogBySlugRaw, getAllBlogSlugs } from "../../../lib/mdxApi";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { BackButton } from "@/components/back-button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  formatDisplayDate,
  getRelativeTime,
  getReadingTime,
} from "@/lib/utils";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { getMDXComponents } from "@/components/mdxComponents";
import { Calendar, Clock, Tag } from "lucide-react";
import Image from "next/image";
import NextLink from "next/link";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import rehypeCodeTitles from "rehype-code-titles";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const post = await getBlogBySlugRaw(slug);
    const title = String(post?.matters?.title || "Blog Post");
    const shortTitle = title.split(" ").slice(0, 4).join(" ");
    const description = String(
      post?.matters?.description || `Read about ${title}`
    );
    const publishedTime = String(post?.matters?.date || "");
    const tags = Array.isArray(post?.matters?.tags) ? post?.matters?.tags : [];

    return {
      title: `${shortTitle}${title.split(" ").length > 4 ? "..." : ""} - Blog`,
      description: description,
      openGraph: {
        title: `Blog: ${title}`,
        description: description,
        type: "article",
        publishedTime: publishedTime,
        tags: tags,
      },
    };
    //eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_error) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found",
    };
  }
}

export default async function SingleBlog({ params }: PageProps) {
  const { slug } = await params;

  try {
    const post = await getBlogBySlugRaw(slug);
    const { matters, source } = post;

    if (!post) {
      notFound();
    }

    const title = String(matters.title || "");
    const date = String(matters.date || "");
    const description = String(matters.description || "");
    const shortTheme = String(matters.shortTheme || "");
    const tags = Array.isArray(matters.tags) ? matters.tags : [];

    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-4 sm:py-8 sm:px-6 lg:px-8">
          <div className="mb-6 sm:mb-8">
            <BackButton />
          </div>
          <header className="mb-8 sm:mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6 font-playfair leading-tight">
              {title}
            </h1>
            <div className="flex flex-col gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="relative aspect-square w-[40px] rounded-full overflow-hidden ring-2 ring-border">
                  <Image
                    src="/images/profile.jpg"
                    alt="Bimal Thapa Magar"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 40px, (max-width: 768px) 40px, 40px"
                    quality={90}
                    priority
                    placeholder="empty"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] font-medium text-foreground">
                    Bimal Thapa Magar
                  </span>
                  <span className="text-[11px] text-muted-foreground">
                    Software &amp; LLM
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[13px] text-muted-foreground">
                {date && (
                  <>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3.5 w-3.5" />
                      <time dateTime={date}>{formatDisplayDate(date)}</time>
                    </div>
                    <span className="text-muted-foreground/50">•</span>
                  </>
                )}
                {date && matters.time && (
                  <>
                    <div className="flex items-center gap-2">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{getRelativeTime(date)}</span>
                    </div>
                    <span className="text-muted-foreground/50">•</span>
                  </>
                )}
                {source && (
                  <>
                    <div className="flex items-center gap-2">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{getReadingTime(source)}</span>
                    </div>
                  </>
                )}

                {tags && tags.length > 0 && (
                  <>
                    <span className="text-muted-foreground/50">•</span>
                    <div className="flex items-center gap-2">
                      <Tag className="h-4 w-4" />
                      <div className="flex flex-wrap gap-2">
                        {tags.map((tag: string) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs font-normal"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            {(description || shortTheme) && (
              <p className="text-[15px] text-muted-foreground italic leading-relaxed mt-6 border-l-4 border-primary pl-4">
                {description || shortTheme}
              </p>
            )}
          </header>
          <Separator className="mb-8" />
          <article className="prose dark:prose-invert max-w-none text-[15px] prose-headings:font-playfair prose-headings:font-bold prose-h1:text-3xl prose-h1:mb-4 prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-[15px] prose-p:text-foreground prose-p:leading-relaxed prose-p:mb-4 prose-strong:text-foreground prose-strong:font-semibold prose-em:text-foreground prose-code:text-primary prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-jetbrains prose-code:text-[15px] prose-code:before:content-none prose-code:after:content-none prose-pre:bg-muted prose-pre:border prose-pre:border-border prose-pre:font-jetbrains prose-pre:text-[15px] prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-blockquote:text-[15px] prose-blockquote:border-l-primary prose-blockquote:bg-muted/50 prose-blockquote:py-2 prose-ul:my-4 prose-ol:my-4 prose-li:my-1 prose-li:text-[15px] prose-img:rounded-lg prose-img:border prose-img:border-border prose-hr:border-border prose-table:border prose-table:border-border prose-th:bg-muted prose-th:text-[15px] prose-td:border prose-td:text-[15px] prose-td:border-border text-justify hyphens-auto">
            <MDXRemote
              source={source}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [
                    rehypeCodeTitles,
                    rehypeSlug,
                    rehypeAutolinkHeadings,
                    rehypeHighlight,
                  ],
                },
              }}
              components={getMDXComponents()}
            />
          </article>
          <Separator className="mt-12 mb-8" />
          <div className="flex justify-start">
            <NextLink
              href="/blogs"
              className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <span>← Back to all blogs</span>
            </NextLink>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error(`Error loading blog post ${slug}:`, error);
    notFound();
  }
}
