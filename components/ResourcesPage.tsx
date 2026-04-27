"use client";

import { useState } from "react";

const resources = [
  {
    cat: "Project Ideas",
    items: [
      {
        title: "Build Your Own X",
        url: "https://github.com/codecrafters-io/build-your-own-x",
      },
      {
        title: "Project Based Learning",
        url: "https://github.com/practical-tutorials/project-based-learning",
      },
      {
        title: "App Ideas Collection",
        url: "https://github.com/florinpop17/app-ideas",
      },
      {
        title: "Roadmap.sh",
        url: "https://roadmap.sh",
      },
    ],
  },
  {
    cat: "Deployment",
    items: [
      { title: "Vercel", url: "https://vercel.com" },
      { title: "Railway", url: "https://railway.app" },
      { title: "Fly.io", url: "https://fly.io" },
      { title: "Render", url: "https://render.com" },
    ],
  },
  {
    cat: "ML / AI",
    items: [
      { title: "Hugging Face", url: "https://huggingface.co" },
      { title: "Papers With Code", url: "https://paperswithcode.com" },
      { title: "Andrej Karpathy's Blog", url: "https://karpathy.github.io" },
      { title: "Lightning AI", url: "https://lightning.ai" },
    ],
  },
  {
    cat: "Frameworks & Docs",
    items: [
      { title: "Next.js Docs", url: "https://nextjs.org/docs" },
      { title: "PyTorch Docs", url: "https://pytorch.org/docs" },
      { title: "Tailwind CSS", url: "https://tailwindcss.com/docs" },
      { title: "FastAPI", url: "https://fastapi.tiangolo.com" },
    ],
  },
  {
    cat: "Design",
    items: [
      { title: "Radix UI", url: "https://www.radix-ui.com" },
      { title: "Refactoring UI", url: "https://www.refactoringui.com" },
      { title: "shadcn/ui", url: "https://ui.shadcn.com" },
      { title: "Lucide Icons", url: "https://lucide.dev" },
    ],
  },
];

export default function ResourcesPage() {
  const [activeCat, setActiveCat] = useState(resources[0].cat);
  const current = resources.find((r) => r.cat === activeCat);

  return (
    <div className="mx-auto max-w-[860px] px-7 pb-20">
      <section
        className="py-16 pb-20"
        style={{ animation: "fadeUp 0.4s ease both" }}
      >
        <h1
          className="font-extrabold mb-[10px]"
          style={{
            fontSize: "clamp(30px, 5vw, 42px)",
            letterSpacing: "-0.035em",
          }}
        >
          Resources
        </h1>
        <p className="text-[14px] text-muted-foreground mb-9 leading-[1.7]">
          Useful links I keep coming back to.
        </p>

        <div className="flex items-start gap-0">
          {/* Vertical tabs */}
          <div
            className="flex flex-col gap-[2px] flex-shrink-0 border-r border-border pr-5 mr-7"
            style={{ minWidth: 130 }}
          >
            {resources.map((r) => (
              <button
                key={r.cat}
                onClick={() => setActiveCat(r.cat)}
                className="rounded-[7px] px-[10px] py-[7px] text-left text-[13px] transition-all duration-100 whitespace-nowrap"
                style={{
                  fontWeight: activeCat === r.cat ? 700 : 400,
                  color:
                    activeCat === r.cat
                      ? "var(--foreground)"
                      : "var(--muted-foreground)",
                  background:
                    activeCat === r.cat ? "var(--accent)" : "transparent",
                  cursor: "pointer",
                  fontFamily: "var(--font-satoshi)",
                }}
              >
                {r.cat}
              </button>
            ))}
          </div>

          {/* Link list */}
          <div className="flex-1 min-w-0">
            {current?.items.map((item, i) => (
              <a
                key={item.title}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block border-b border-border py-[9px] text-[14px] font-semibold transition-opacity hover:opacity-60"
                style={{
                  color: "#4a90d9",
                  letterSpacing: "-0.01em",
                  animation: `fadeUp 0.28s ${i * 0.05}s ease both`,
                }}
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
