import { cn } from "@/lib/utils";

const FontTester = () => {
  return (
    <div className="p-8 space-y-6 bg-card rounded-lg border">
      <h2 className="text-2xl font-bold mb-4 font-playfair">
        Professional Portfolio Font Hierarchy
      </h2>

      <div className="space-y-6">
        <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 dark:bg-blue-950/20 p-4 rounded">
          <h3 className="text-lg font-semibold mb-2 text-muted-foreground">
            1️⃣ Mulish (Primary Default)
          </h3>
          <p className="text-2xl font-mulish">
            The quick brown fox jumps over the lazy dog. 1234567890
          </p>
          <p className="text-sm text-muted-foreground mt-1 font-inter">
            Modern, versatile, optimized for UI/UX. Your primary brand font.
          </p>
        </div>

        <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 dark:bg-purple-950/20 p-4 rounded">
          <h3 className="text-lg font-semibold mb-2 text-muted-foreground">
            2️⃣ Rubik (Secondary)
          </h3>
          <p className="text-2xl font-rubik">
            The quick brown fox jumps over the lazy dog. 1234567890
          </p>
          <p className="text-sm text-muted-foreground mt-1 font-inter">
            Friendly, rounded, approachable. Perfect fallback for Mulish.
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-4 bg-green-50 dark:bg-green-950/20 p-4 rounded">
          <h3 className="text-lg font-semibold mb-2 text-muted-foreground">
            3️⃣ Inter (Tertiary)
          </h3>
          <p className="text-2xl font-inter">
            The quick brown fox jumps over the lazy dog. 1234567890
          </p>
          <p className="text-sm text-muted-foreground mt-1 font-inter">
            Professional fallback, used by top tech companies.
          </p>
        </div>

        <div className="border-l-4 border-orange-500 pl-4">
          <h3 className="text-lg font-semibold mb-2 text-muted-foreground">
            Default Sans (Combined Stack)
          </h3>
          <p className="text-2xl font-sans">
            The quick brown fox jumps over the lazy dog. 1234567890
          </p>
          <p className="text-sm text-muted-foreground mt-1 font-inter">
            Uses: Mulish → Rubik → Inter → System fallbacks
          </p>
        </div>

        <div className="border-l-4 border-pink-500 pl-4">
          <h3 className="text-lg font-semibold mb-2 text-muted-foreground">
            Playfair Display (Headings)
          </h3>
          <h1 className="text-3xl font-playfair font-bold">
            Elegant Portfolio Headings
          </h1>
          <p className="text-sm text-muted-foreground mt-1 font-inter">
            Sophisticated serif for headings and titles.
          </p>
        </div>

        <div className="border-l-4 border-yellow-500 pl-4">
          <h3 className="text-lg font-semibold mb-2 text-muted-foreground">
            JetBrains Mono (Code)
          </h3>
          <code className="text-lg font-jetbrains bg-muted px-3 py-2 rounded block">
            const fontStack = &#123;
            <br />
            &nbsp;&nbsp;primary: "Mulish",
            <br />
            &nbsp;&nbsp;secondary: "Rubik",
            <br />
            &nbsp;&nbsp;tertiary: "Inter"
            <br />
            &#125;;
          </code>
          <p className="text-sm text-muted-foreground mt-1 font-inter">
            Professional monospace for code blocks.
          </p>
        </div>

        <div className="border-l-4 border-indigo-500 pl-4">
          <h3 className="text-lg font-semibold mb-2 text-muted-foreground">
            Poppins (UI Elements)
          </h3>
          <div className="flex gap-3 items-center">
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded font-poppins font-medium">
              Contact Me
            </button>
            <span className="font-poppins text-lg">Clean UI Elements</span>
          </div>
          <p className="text-sm text-muted-foreground mt-1 font-inter">
            Modern geometric sans-serif for special UI components.
          </p>
        </div>

        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="text-lg font-semibold mb-2 text-muted-foreground">
            Satoshi (Custom Local)
          </h3>
          <p className="text-2xl font-satoshi font-bold">
            Custom Brand Typography
          </p>
          <p className="text-sm text-muted-foreground mt-1 font-inter">
            Your unique local font for distinctive branding.
          </p>
        </div>
      </div>

      <div className="mt-6 p-4 bg-muted rounded">
        <h4 className="font-bold mb-3 font-playfair text-lg">
          Font Hierarchy & Usage:
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <p className="font-semibold font-poppins">
              🎯 Default Stack Priority:
            </p>
            <ol className="font-inter space-y-1 text-muted-foreground ml-4">
              <li>1. Mulish (primary choice)</li>
              <li>2. Rubik (friendly fallback)</li>
              <li>3. Inter (professional fallback)</li>
              <li>4. System fonts (final fallback)</li>
            </ol>
          </div>
          <div className="space-y-2">
            <p className="font-semibold font-poppins">🎨 Specialized Usage:</p>
            <ul className="font-inter space-y-1 text-muted-foreground ml-4">
              <li>• Headings: font-playfair</li>
              <li>• Code: font-jetbrains</li>
              <li>• Buttons: font-poppins</li>
              <li>• Brand: font-satoshi</li>
            </ul>
          </div>
        </div>

        <div className="mt-4 p-3 bg-background rounded text-xs font-inter">
          <p className="font-bold mb-2">Font Stack Characteristics:</p>
          <ul className="space-y-1 text-muted-foreground">
            <li>
              • <strong className="font-mulish">Mulish:</strong> Optimized for
              interfaces, excellent legibility, modern
            </li>
            <li>
              • <strong className="font-rubik">Rubik:</strong> Friendly rounded
              geometry, approachable feel
            </li>
            <li>
              • <strong className="font-inter">Inter:</strong> Battle-tested by
              GitHub, Figma, highly readable
            </li>
            <li>• All fonts load with optimal fallbacks for performance</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FontTester;
