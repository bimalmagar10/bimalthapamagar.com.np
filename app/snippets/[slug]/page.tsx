import { getSnippetBySlugRaw, getAllSnippetSlugs } from "../../../lib/mdxApi";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { BackButton } from "@/components/back-button";
import { Separator } from "@/components/ui/separator";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import { getMDXComponents } from "@/components/mdxComponents";
import NextLink from "next/link";
import rehypeHighlight from "rehype-highlight";
import rehypeCodeTitles from "rehype-code-titles";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all snippets
export async function generateStaticParams() {
  const slugs = await getAllSnippetSlugs();
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
    const snippet = await getSnippetBySlugRaw(slug);
    const title = String(snippet?.matters?.title || "Code Snippet");
    const description = String(
      snippet?.matters?.description || `Code snippet: ${title}`
    );

    return {
      title: `${title} - Snippet`,
      description: description,
      openGraph: {
        title: `Snippet: ${title}`,
        description: description,
        type: "article",
      },
    };
    //eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_error) {
    return {
      title: "Snippet Not Found",
      description: "The requested code snippet could not be found",
    };
  }
}

export default async function SingleSnippet({ params }: PageProps) {
  const { slug } = await params;

  try {
    const snippet = await getSnippetBySlugRaw(slug);
    const { matters, source } = snippet;

    if (!snippet) {
      notFound();
    }

    const title = String(matters.title || "");
    const description = String(matters.description || "");

    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-6 sm:mb-8">
            <BackButton />
          </div>
          <header className="mb-8 sm:mb-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4 font-playfair leading-tight">
              {title}
            </h1>
            {description && (
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {description}
              </p>
            )}
          </header>
          <Separator className="mb-8" />
          <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-playfair prose-headings:font-bold prose-h1:text-3xl prose-h1:mb-4 prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-foreground prose-p:leading-relaxed prose-p:mb-4 prose-strong:text-foreground prose-strong:font-semibold prose-em:text-foreground prose-code:text-primary prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-jetbrains prose-code:text-sm prose-code:before:content-none prose-code:after:content-none prose-pre:bg-muted prose-pre:border prose-pre:border-border prose-pre:font-jetbrains prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-primary prose-blockquote:bg-muted/50 prose-blockquote:py-2 prose-ul:my-4 prose-ol:my-4 prose-li:my-1 prose-img:rounded-lg prose-img:border prose-img:border-border prose-hr:border-border prose-table:border prose-table:border-border prose-th:bg-muted prose-td:border prose-td:border-border text-justify hyphens-auto">
            <MDXRemote
              source={source}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm, remarkBreaks],
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
          <div className="flex justify-center sm:justify-start">
            <NextLink
              href="/snippets"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline transition-all group"
            >
              <span>← Back to all snippets</span>
            </NextLink>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error(`Error loading snippet ${slug}:`, error);
    notFound();
  }
}
