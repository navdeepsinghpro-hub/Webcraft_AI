import { useState } from "react";

function Navbar({ website }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className="@container relative border-b px-5 py-4 sm:px-8 sm:py-5"
      style={{
        borderColor: `${website.theme.text}20`,
      }}
    >
      {/* TOP NAVBAR */}
      <div className="flex items-center justify-between">

        {/* BRAND */}
        <h2 className="min-w-0 truncate text-lg font-bold sm:text-xl">
          {website.brand}
        </h2>

        {/* DESKTOP NAV */}
        <div className="hidden items-center gap-5 text-sm @[800px]:flex @[1000px]:gap-6">
          <a
            href="#home"
            className="transition-opacity hover:opacity-60"
          >
            Home
          </a>

          {website.sections?.map((sectionName) => (
            <a
              key={sectionName}
              href={`#${sectionName}`}
              className="capitalize transition-opacity hover:opacity-60"
            >
              {sectionName === "howItWorks"
                ? "How It Works"
                : sectionName}
            </a>
          ))}
        </div>

        {/* DESKTOP BUTTON */}
        <button
          className="hidden rounded-lg px-4 py-2 text-sm font-medium @[800px]:block"
          style={{
            backgroundColor: website.theme.button,
            color: website.theme.buttonText,
          }}
        >
          Get Started
        </button>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setIsMenuOpen((current) => !current)}
          className="rounded-lg border px-3 py-2 text-sm @[800px]:hidden"
          style={{
            borderColor: `${website.theme.text}20`,
          }}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div
          className="mt-4 rounded-xl border p-3 @[800px]:hidden"
          style={{
            borderColor: `${website.theme.text}15`,
            backgroundColor: `${website.theme.text}05`,
          }}
        >
          <div className="flex flex-col gap-1">

            <a
              href="#home"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-sm transition-opacity hover:opacity-60"
            >
              Home
            </a>

            {website.sections?.map((sectionName) => (
              <a
                key={sectionName}
                href={`#${sectionName}`}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm capitalize transition-opacity hover:opacity-60"
              >
                {sectionName === "howItWorks"
                  ? "How It Works"
                  : sectionName}
              </a>
            ))}

            <button
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 rounded-lg px-3 py-2 text-sm font-medium"
              style={{
                backgroundColor: website.theme.button,
                color: website.theme.buttonText,
              }}
            >
              Get Started
            </button>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;