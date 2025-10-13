import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import { CopyToClipboard } from "./CopyToClipboard";

// Helper function to extract text content from React children
function extractTextContent(children: any): string {
  if (typeof children === "string") {
    return children;
  }
  if (Array.isArray(children)) {
    return children.map(extractTextContent).join("");
  }
  if (children?.props?.children) {
    return extractTextContent(children.props.children);
  }
  return "";
}

// Export components for server-side use (non-hook)
export function getMDXComponents(): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold tracking-tight text-foreground mb-6 mt-8 first:mt-0">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4 mt-8 border-b border-gray-200 dark:border-gray-800 pb-2">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold tracking-tight text-foreground mb-3 mt-6">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-semibold tracking-tight text-foreground mb-2 mt-4">
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p className="text-base text-muted-foreground leading-7 mb-4">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-1 text-muted-foreground">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-1 text-muted-foreground">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="text-muted-foreground">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 dark:border-blue-400 pl-4 italic my-4 text-muted-foreground bg-blue-50 dark:bg-blue-950/30 py-2 rounded-r">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-muted py-0.5 rounded text-sm font-mono text-foreground">
        {children}
      </code>
    ),
    pre: ({ children }) => {
      const codeContent = extractTextContent(children);
      return (
        <div className="relative group my-4">
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
            {children}
          </pre>
          <CopyToClipboard code={codeContent} />
        </div>
      );
    },
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-primary hover:text-primary/80 underline underline-offset-4"
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-muted-foreground">{children}</em>
    ),
    hr: () => <hr className="my-8 border-t border-border" />,
    table: ({ children }) => (
      <div className="overflow-x-auto my-4">
        <table className="min-w-full border border-border rounded-lg">
          {children}
        </table>
      </div>
    ),
    th: ({ children }) => (
      <th className="border border-border px-4 py-2 bg-muted font-semibold text-left">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border border-border px-4 py-2">{children}</td>
    ),
    img: ({ src, alt }) => (
      <div className="my-4 mx-auto max-w-full">
        <Image
          src={src || ""}
          alt={alt || ""}
          width={800}
          height={600}
          className="max-w-full h-auto rounded-lg mx-auto"
        />
      </div>
    ),
  };
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold tracking-tight text-foreground mb-6 mt-8 first:mt-0">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4 mt-8 border-b border-gray-200 dark:border-gray-800 pb-2">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold tracking-tight text-foreground mb-3 mt-6">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-semibold tracking-tight text-foreground mb-2 mt-4">
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p className="text-base text-muted-foreground leading-7 mb-4">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-muted-foreground pl-4">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-muted-foreground pl-4">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="leading-7">{children}</li>,
    code: ({ children, className }) => {
      const isInline = !className;
      if (isInline) {
        return (
          <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono text-red-600 dark:text-red-400">
            {children}
          </code>
        );
      }
      return <code className={className}>{children}</code>;
    },
    pre: ({ children }) => {
      const codeContent = extractTextContent(children);
      return (
        <div className="relative group mb-4">
          <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm">
            {children}
          </pre>
          <CopyToClipboard code={codeContent} />
        </div>
      );
    },
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 dark:border-blue-400 pl-4 italic text-muted-foreground mb-4 bg-blue-50 dark:bg-blue-950/30 py-2 rounded-r">
        {children}
      </blockquote>
    ),
    table: ({ children }) => (
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-gray-50 dark:bg-gray-800">{children}</thead>
    ),
    tbody: ({ children }) => (
      <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
        {children}
      </tbody>
    ),
    tr: ({ children }) => (
      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">{children}</tr>
    ),
    th: ({ children }) => (
      <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left font-semibold text-foreground">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-muted-foreground">
        {children}
      </td>
    ),
    a: ({ children, href }) => (
      <a
        href={href}
        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline underline-offset-2"
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-muted-foreground">{children}</em>
    ),
    hr: () => <hr className="my-8 border-gray-200 dark:border-gray-800" />,
    // Task list styling
    input: ({ type, checked, disabled }) => {
      if (type === "checkbox") {
        return (
          <input
            type="checkbox"
            checked={checked}
            disabled={disabled}
            className="mr-2 rounded border-gray-300 dark:border-gray-600"
          />
        );
      }
      return <input type={type} />;
    },
    ...components,
  };
}
