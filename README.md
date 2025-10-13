# bimalthapamagar.com.np

This is my personal modern, performant personal portfolio built with Next.js 15 app router, featuring dynamic blogs management, syntax highlighting, .

[![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

## ✨ Features

- **📝 MDX Blog System** - Write blog posts and code snippets in MDX with full React component support
- **🎨 Modern UI/UX** - Built with shadcn/ui components and Tailwind CSS v4
- **🌗 Dark Mode** - Seamless theme switching with next-themes
- **💻 Syntax Highlighting** - Beautiful code blocks with highlight.js and rehype-highlight
- **📋 Copy to Clipboard** - One-click code copying with toast notifications
- **🎵 Spotify Integration** - Display currently playing track and top tracks via Spotify API
- **📱 Fully Responsive** - Mobile-first design with smooth animations
- **⚡ Turbopack** - Lightning-fast development with Next.js Turbopack
- **🔍 SEO Optimized** - Dynamic metadata generation for all pages
- **♿ Accessible** - Built with accessibility best practices

## 🚀 Tech Stack

### Core

- **[Next.js 15.5](https://nextjs.org/)** - React framework with App Router
- **[TypeScript 5.9](https://www.typescriptlang.org/)** - Type-safe development
- **[React 18.2](https://react.dev/)** - UI library
- **[Tailwind CSS 4.1](https://tailwindcss.com/)** - Utility-first CSS framework

### UI Components

- **[shadcn/ui](https://ui.shadcn.com/)** - Beautifully designed components built with Radix UI
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library

### Content & MDX

- **[next-mdx-remote](https://github.com/hashicorp/next-mdx-remote)** - MDX processing for Next.js
- **[gray-matter](https://github.com/jonschlinkert/gray-matter)** - Parse front matter from markdown
- **[rehype-highlight](https://github.com/rehypejs/rehype-highlight)** - Syntax highlighting
- **[highlight.js](https://highlightjs.org/)** - Code highlighting engine
- **[rehype-autolink-headings](https://github.com/rehypejs/rehype-autolink-headings)** - Auto-link headings
- **[rehype-slug](https://github.com/rehypejs/rehype-slug)** - Add IDs to headings
- **[rehype-code-titles](https://github.com/rockchalkwushock/rehype-code-titles)** - Add titles to code blocks
- **[remark-gfm](https://github.com/remarkjs/remark-gfm)** - GitHub Flavored Markdown
- **[reading-time](https://github.com/ngryman/reading-time)** - Calculate reading time

### Data Fetching & State

- **[SWR](https://swr.vercel.app/)** - React Hooks for data fetching with built-in caching, revalidation, and infinite loading support
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management

### Utilities

- **[date-fns](https://date-fns.org/)** - Date formatting and manipulation
- **[sonner](https://sonner.emilkowal.ski/)** - Beautiful toast notifications
- **[clsx](https://github.com/lukeed/clsx)** - Utility for constructing className strings
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Merge Tailwind CSS classes

## 📦 Installation

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn or pnpm

### Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/bimalmagar10/bimalthapamagar.com.np.git
   cd bimalthapamagar.com.np
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   # Spotify API Credentials (optional)
   SPOTIFY_CLIENT_ID=your_spotify_client_id
   SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
   SPOTIFY_REFRESH_TOKEN=your_spotify_refresh_token
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🛠️ Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run dev:webpack` - Start development server with Webpack
- `npm run build` - Build for production
- `npm run build:turbo` - Build with Turbopack
- `npm run build:analyze` - Build with bundle analyzer
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 📁 Project Structure

```
bimalthapamagar.com.np/
├── app/                      # Next.js App Router
│   ├── api/                  # API routes (Spotify integration)
│   ├── blogs/                # Blog pages
│   ├── snippets/             # Code snippets pages
│   ├── about-me/             # About page
│   ├── works/                # Projects/works page
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Homepage
├── components/               # React components
│   ├── ui/                   # shadcn/ui components
│   └── ...                   # Custom components
├── blogs/                    # Blog MDX files
├── snippets/                 # Code snippet MDX files
├── lib/                      # Utility functions
│   ├── mdxApi.ts             # MDX processing utilities
│   ├── spotify.ts            # Spotify API integration
│   └── utils.ts              # Helper functions
├── styles/                   # Global styles
├── public/                   # Static assets
└── next.config.ts            # Next.js configuration
```

## ✍️ Writing Content

### Creating a Blog Post

Create a new `.mdx` file in the `blogs/` directory:

```mdx
---
title: "Your Blog Title"
date: "2025-01-13"
description: "A brief description of your blog post"
tags: ["nextjs", "react", "typescript"]
---

# Your Blog Content

Write your content here with full MDX support!
```

### Creating a Code Snippet

Create a new `.mdx` file in the `snippets/` directory:

```mdx
---
title: "Snippet Title"
date: "2025-01-13"
description: "Description of your code snippet"
category: "machine-learning"
---

Your code snippet content...
```

## 🎨 Customization

### Theme Colors

Modify colors in `app/globals.css` using CSS variables:

```css
@theme {
  --color-primary: /* your color */ ;
  --color-background: /* your color */ ;
  /* ... */
}
```

### Components

All UI components are located in `components/ui/` and can be customized as needed.

## 🚀 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/bimalmagar10/bimalthapamagar.com.np)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/bimalmagar10/bimalthapamagar.com.np/issues).

## 👨‍💻 Author

**Bimal Thapa Magar**

- Website: [bimalthapamagar.com.np](https://bimalthapamagar.com.np)
- GitHub: [@bimalmagar10](https://github.com/bimalmagar10)
- LinkedIn: [bimal-thapa-magar](https://www.linkedin.com/in/bimal-thapa-magar-6582b0256)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) team for an amazing framework
- [shadcn](https://twitter.com/shadcn) for the beautiful UI components
- [Vercel](https://vercel.com/) for hosting and deployment platform
- All open-source contributors whose packages made this project possible

---

<p align="center">Made with ❤️ and ☕</p>
