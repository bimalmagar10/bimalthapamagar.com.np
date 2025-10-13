import NextLink from "next/link";
import { ArrowRight, Clock, Calendar, Tag } from "lucide-react";
import {
  formatShortDate,
  getReadingTime,
  createTagInitials,
} from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

interface PostItemOverlayProps {
  slug: string;
  title: string;
  date: string;
  summary: string;
  content?: string;
  tags?: string[];
}

const PostItemOverlay = ({
  slug,
  title,
  date,
  summary,
  content,
  tags,
}: PostItemOverlayProps) => {
  const readingTime = content ? getReadingTime(content) : null;

  return (
    <article className="flex flex-col gap-4 py-8">
      <div className="flex flex-col gap-4">
        <h3 className="text-xl sm:text-2xl font-bold text-foreground font hover:text-primary transition-colors">
          <NextLink href={`/blogs/${slug}`} className="hover:underline">
            {title}
          </NextLink>
        </h3>
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <time dateTime={date} className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            {formatShortDate(date)}
          </time>

          {readingTime && (
            <>
              <span className="text-muted-foreground/50">•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {readingTime}
              </span>
            </>
          )}

          {tags && tags.length > 0 && (
            <>
              <span className="text-muted-foreground/50">•</span>
              <div className="flex items-center gap-2">
                <Tag className="h-4 w-4" />
                <div className="flex flex-wrap gap-2">
                  {tags.slice(0, 3).map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs font-normal"
                    >
                      {tag}
                    </Badge>
                  ))}
                  {tags.length > 3 && (
                    <Badge variant="outline" className="text-xs font-normal">
                      +{tags.length - 3}
                    </Badge>
                  )}
                </div>
              </div>
            </>
          )}
        </div>

        <p className="text-base dark:text-gray-200 text-muted-foreground leading-relaxed line-clamp-3">
          {summary}
        </p>

        <NextLink
          href={`/blogs/${slug}`}
          className="inline-flex items-center gap-1 text-sm font-medium text-blue-500 dark:text-blue-400 hover:underline group w-fit"
        >
          <span>Read More</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </NextLink>
      </div>

      <Separator className="mt-4" />
    </article>
  );
};

export default PostItemOverlay;
