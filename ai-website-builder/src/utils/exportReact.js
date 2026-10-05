import JSZip from "jszip";

/* =========================================
   HELPERS
========================================= */

function escapeJS(value) {
  if (value === null || value === undefined) {
    return "";
  }

  return String(value)
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\${/g, "\\${");
}

function createWebsiteData(website) {
  const cleanWebsite = {
    ...website,
    sectionSettings:
      website.sectionSettings || {},
  };

  return JSON.stringify(
    cleanWebsite,
    null,
    2,
  );
}

/* =========================================
   APP COMPONENT
========================================= */

function generateAppJSX(website) {
  const data = createWebsiteData(website);

  return `import React from "react";
import "./index.css";

const website = ${data};

function Navbar() {
  const links = website.navLinks || [];

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <div className="logo">
          {website.brand || "WebCraft"}
        </div>

        <div className="nav-links">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href || "#"}
            >
              {link.label || "Link"}
            </a>
          ))}
        </div>

        <a
          href="#cta"
          className="nav-button"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  const hero = website.hero || {};

  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <p className="eyebrow">
            Welcome
          </p>

          <h1>
            {hero.title ||
              "Build Something Amazing"}
          </h1>

          <p className="hero-description">
            {hero.description ||
              "Create a beautiful website with WebCraft AI."}
          </p>

          <div className="hero-buttons">
            <a
              href="#cta"
              className="primary-button"
            >
              {hero.buttonText ||
                "Get Started"}
            </a>

            <a
              href="#features"
              className="secondary-button"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features =
    website.features || [];

  return (
    <section
      id="features"
      className="section"
    >
      <div className="container">
        <SectionHeading
          eyebrow="Features"
          title="Everything You Need"
          description="Powerful features designed to help you build better experiences."
        />

        <div className="cards">
          {features.map(
            (feature, index) => (
              <div
                className="card"
                key={index}
              >
                <div className="card-icon">
                  {feature.icon || "✦"}
                </div>

                <h3>
                  {feature.title ||
                    "Feature"}
                </h3>

                <p>
                  {feature.description ||
                    "A powerful feature for your website."}
                </p>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

function About() {
  const about =
    website.about || {};

  return (
    <section
      id="about"
      className="section about-section"
    >
      <div className="container about-content">
        <p className="eyebrow">
          About
        </p>

        <h2>
          {about.title ||
            "Built With Purpose"}
        </h2>

        <p>
          {about.description ||
            "We create meaningful digital experiences."}
        </p>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials =
    website.testimonials || [];

  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Testimonials"
          title="What People Say"
        />

        <div className="cards">
          {testimonials.map(
            (item, index) => (
              <div
                className="card"
                key={index}
              >
                <p className="quote">
                  "{item.quote ||
                    "Amazing experience!"}"
                </p>

                <h3>
                  {item.name ||
                    "Customer"}
                </h3>

                <p className="muted">
                  {item.role ||
                    "Customer"}
                </p>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

function Menu() {
  const items =
    website.menuItems || [];

  return (
    <section
      id="menu"
      className="section"
    >
      <div className="container">
        <SectionHeading
          eyebrow="Menu"
          title="Our Menu"
        />

        <div className="cards">
          {items.map(
            (item, index) => (
              <div
                className="card"
                key={index}
              >
                <h3>
                  {item.name ||
                    item.title ||
                    "Menu Item"}
                </h3>

                <p>
                  {item.description ||
                    "Delicious and freshly prepared."}
                </p>

                <strong>
                  {item.price || "$0"}
                </strong>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const items =
    website.galleryItems || [];

  return (
    <section
      id="gallery"
      className="section"
    >
      <div className="container">
        <SectionHeading
          eyebrow="Gallery"
          title="Explore Our World"
        />

        <div className="cards gallery-grid">
          {items.map(
            (item, index) => (
              <div
                className="card"
                key={index}
              >
                <div className="gallery-image">
                  {item.image || "✦"}
                </div>

                <h3>
                  {item.title ||
                    "Gallery Item"}
                </h3>

                <p>
                  {item.description ||
                    "A beautiful part of our collection."}
                </p>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans =
    website.pricingPlans || [];

  return (
    <section
      id="pricing"
      className="section"
    >
      <div className="container">
        <SectionHeading
          eyebrow="Pricing"
          title="Choose Your Plan"
        />

        <div className="cards">
          {plans.map(
            (plan, index) => (
              <div
                className="card pricing-card"
                key={index}
              >
                <h3>
                  {plan.name ||
                    "Plan"}
                </h3>

                <div className="price">
                  {plan.price || "$0"}
                </div>

                <p>
                  {plan.description ||
                    "Everything you need."}
                </p>

                <a
                  href="#cta"
                  className="primary-button"
                >
                  Get Started
                </a>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

function Products() {
  const products =
    website.products || [];

  return (
    <section
      id="products"
      className="section"
    >
      <div className="container">
        <SectionHeading
          eyebrow="Products"
          title="Our Products"
        />

        <div className="cards">
          {products.map(
            (product, index) => (
              <div
                className="card"
                key={index}
              >
                <div className="product-image">
                  {product.image || "✦"}
                </div>

                <h3>
                  {product.name ||
                    product.title ||
                    "Product"}
                </h3>

                <p>
                  {product.description ||
                    "Premium product."}
                </p>

                <strong>
                  {product.price ||
                    "$0"}
                </strong>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps =
    website.howItWorksSteps || [];

  return (
    <section
      id="how-it-works"
      className="section"
    >
      <div className="container">
        <SectionHeading
          eyebrow="How It Works"
          title="Simple Process"
        />

        <div className="cards">
          {steps.map(
            (step, index) => (
              <div
                className="card"
                key={index}
              >
                <div className="step-number">
                  {index + 1}
                </div>

                <h3>
                  {step.title ||
                    "Step"}
                </h3>

                <p>
                  {step.description ||
                    "A simple step in the process."}
                </p>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const cta =
    website.cta || {};

  return (
    <section
      id="cta"
      className="cta-section"
    >
      <div className="container cta-content">
        <h2>
          {cta.title ||
            "Ready to Get Started?"}
        </h2>

        <p>
          {cta.description ||
            "Let's build something amazing together."}
        </p>

        <a
          href="#"
          className="primary-button"
        >
          {cta.buttonText ||
            "Get Started"}
        </a>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">
        {eyebrow}
      </p>

      <h2>{title}</h2>

      {description && (
        <p>{description}</p>
      )}
    </div>
  );
}

function renderSection(section) {
  const settings =
    website.sectionSettings?.[
      section
    ];

  if (
    settings &&
    settings.visible === false
  ) {
    return null;
  }

  switch (section) {
    case "features":
      return <Features />;

    case "about":
      return <About />;

    case "testimonials":
      return <Testimonials />;

    case "menu":
      return <Menu />;

    case "gallery":
      return <Gallery />;

    case "pricing":
      return <Pricing />;

    case "products":
      return <Products />;

    case "howItWorks":
      return <HowItWorks />;

    case "cta":
      return <CTA />;

    default:
      return null;
  }
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          © {new Date().getFullYear()}{" "}
          {website.brand ||
            "WebCraft"}
        </p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div
      className="website"
      style={{
        background:
          website.theme?.background ||
          "#ffffff",

        color:
          website.theme?.text ||
          "#111111",
      }}
    >
      <Navbar />

      <Hero />

      {(website.sections || []).map(
        (section, index) => (
          <React.Fragment
            key={index}
          >
            {renderSection(section)}
          </React.Fragment>
        ),
      )}

      <Footer />
    </div>
  );
}

export default App;
`;
}

/* =========================================
   MAIN CSS
========================================= */

function generateReactCSS(website) {
  const theme =
    website.theme || {};

  const background =
    theme.background || "#ffffff";

  const text =
    theme.text || "#111111";

  const button =
    theme.button || "#111111";

  const buttonText =
    theme.buttonText || "#ffffff";

  return `* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family:
    Arial,
    Helvetica,
    sans-serif;

  background: ${background};
  color: ${text};
}

a {
  color: inherit;
  text-decoration: none;
}

.website {
  min-height: 100vh;
}

.container {
  width: min(
    1100px,
    calc(100% - 40px)
  );

  margin: 0 auto;
}

.navbar {
  position: sticky;
  top: 0;
  z-index: 100;

  background: ${background};

  border-bottom:
    1px solid ${text}15;

  backdrop-filter: blur(12px);
}

.navbar-inner {
  min-height: 70px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 24px;
}

.logo {
  font-size: 20px;
  font-weight: 800;
}

.nav-links {
  display: flex;
  gap: 24px;
}

.nav-links a {
  font-size: 14px;
  opacity: 0.65;
}

.nav-links a:hover {
  opacity: 1;
}

.nav-button,
.primary-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 11px 18px;

  border-radius: 12px;

  background: ${button};
  color: ${buttonText};

  font-size: 14px;
  font-weight: 700;

  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
}

.nav-button:hover,
.primary-button:hover {
  transform: translateY(-2px);
  opacity: 0.9;
}

.hero {
  min-height: 620px;

  display: flex;
  align-items: center;

  padding: 100px 0;
}

.hero-text {
  max-width: 760px;
}

.eyebrow {
  margin: 0 0 12px;

  font-size: 12px;
  font-weight: 800;

  letter-spacing: 0.15em;
  text-transform: uppercase;

  opacity: 0.5;
}

.hero h1 {
  margin: 0;

  font-size:
    clamp(
      42px,
      7vw,
      82px
    );

  line-height: 0.98;

  letter-spacing: -0.05em;
}

.hero-description {
  max-width: 650px;

  margin: 28px 0 0;

  font-size: 18px;

  opacity: 0.65;
}

.hero-buttons {
  display: flex;
  flex-wrap: wrap;

  gap: 12px;

  margin-top: 32px;
}

.secondary-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 11px 18px;

  border:
    1px solid ${text}20;

  border-radius: 12px;

  font-size: 14px;
  font-weight: 700;
}

.section {
  padding: 90px 0;
}

.section-heading {
  max-width: 700px;

  margin-bottom: 44px;
}

.section-heading h2 {
  margin: 0;

  font-size:
    clamp(
      32px,
      5vw,
      52px
    );

  line-height: 1;

  letter-spacing: -0.04em;
}

.section-heading > p:last-child {
  margin-top: 16px;
  opacity: 0.6;
}

.cards {
  display: grid;

  grid-template-columns:
    repeat(
      3,
      minmax(0, 1fr)
    );

  gap: 20px;
}

.card {
  padding: 28px;

  border:
    1px solid ${text}15;

  border-radius: 12px;

  background: ${text}05;
}

.card-icon {
  margin-bottom: 20px;

  font-size: 30px;
}

.card h3 {
  margin: 0;
  font-size: 20px;
}

.card p {
  margin-top: 12px;
  opacity: 0.6;
}

.about-section {
  border-top:
    1px solid ${text}10;

  border-bottom:
    1px solid ${text}10;
}

.about-content {
  max-width: 800px;
}

.about-content h2 {
  margin: 0;

  font-size:
    clamp(
      34px,
      5vw,
      56px
    );

  line-height: 1;
}

.about-content p:last-child {
  margin-top: 20px;

  font-size: 18px;

  opacity: 0.65;
}

.quote {
  font-size: 18px;
  font-style: italic;

  opacity: 0.8 !important;
}

.muted {
  font-size: 13px !important;
}

.gallery-grid {
  grid-template-columns:
    repeat(
      3,
      minmax(0, 1fr)
    );
}

.gallery-image,
.product-image {
  min-height: 180px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin:
    -28px
    -28px
    24px;

  font-size: 48px;

  background:
    ${text}08;
}

.price {
  margin: 20px 0;

  font-size: 36px;
  font-weight: 800;
}

.pricing-card
  .primary-button {
  margin-top: 20px;
}

.step-number {
  width: 42px;
  height: 42px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 20px;

  border-radius: 50%;

  background: ${button};
  color: ${buttonText};

  font-weight: 800;
}

.cta-section {
  padding: 100px 0;

  background:
    ${text}08;

  text-align: center;
}

.cta-content {
  max-width: 760px;
}

.cta-content h2 {
  margin: 0;

  font-size:
    clamp(
      36px,
      6vw,
      64px
    );

  line-height: 1;

  letter-spacing: -0.04em;
}

.cta-content p {
  margin: 20px 0 30px;
  opacity: 0.6;
}

.footer {
  padding: 30px 0;

  border-top:
    1px solid ${text}10;

  text-align: center;

  font-size: 13px;

  opacity: 0.55;
}

@media (max-width: 800px) {
  .nav-links {
    display: none;
  }

  .cards {
    grid-template-columns: 1fr;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .hero {
    min-height: 520px;
    padding: 70px 0;
  }
}

@media (max-width: 500px) {
  .container {
    width:
      min(
        100% - 28px,
        1100px
      );
  }

  .nav-button {
    display: none;
  }

  .hero h1 {
    font-size: 46px;
  }

  .hero-description {
    font-size: 16px;
  }

  .section {
    padding: 65px 0;
  }
}
`;
}

/* =========================================
   PACKAGE.JSON
========================================= */

function generatePackageJSON() {
  return JSON.stringify(
    {
      name: "webcraft-generated-site",
      private: true,
      version: "1.0.0",
      type: "module",

      scripts: {
        dev: "vite",
        build: "vite build",
        preview: "vite preview",
      },

      dependencies: {
        "@vitejs/plugin-react":
          "latest",
        vite: "latest",
        react: "latest",
        "react-dom": "latest",
      },

      devDependencies: {},
    },
    null,
    2,
  );
}

/* =========================================
   INDEX HTML
========================================= */

function generateIndexHTML(
  website,
) {
  const title =
    website.brand ||
    "WebCraft Website";

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />

    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />

    <meta
      name="description"
      content="${escapeJS(
        website.hero?.description ||
          "Website created with WebCraft AI.",
      )}"
    />

    <title>
      ${escapeJS(title)}
    </title>
  </head>

  <body>
    <div id="root"></div>

    <script
      type="module"
      src="/src/main.jsx"
    ></script>
  </body>
</html>`;
}

/* =========================================
   MAIN JSX
========================================= */

function generateMainJSX() {
  return `import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(
  document.getElementById("root"),
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
`;
}

/* =========================================
   DOWNLOAD REACT PROJECT
========================================= */

export async function downloadReactProject(
  website,
) {
  if (!website) {
    return;
  }

  const zip = new JSZip();

  const rootFolder =
    zip.folder(
      "webcraft-react-site",
    );

  rootFolder.file(
    "package.json",
    generatePackageJSON(),
  );

  rootFolder.file(
    "index.html",
    generateIndexHTML(
      website,
    ),
  );

  const srcFolder =
    rootFolder.folder("src");

  srcFolder.file(
    "App.jsx",
    generateAppJSX(
      website,
    ),
  );

  srcFolder.file(
    "main.jsx",
    generateMainJSX(),
  );

  srcFolder.file(
    "index.css",
    generateReactCSS(
      website,
    ),
  );

  const readme = `# WebCraft AI Generated Website

This website was generated using WebCraft AI.

## Run locally

Install dependencies:

npm install

Start development server:

npm run dev

Build for production:

npm run build
`;

  rootFolder.file(
    "README.md",
    readme,
  );

  const blob =
    await zip.generateAsync({
      type: "blob",
    });

  const url =
    URL.createObjectURL(blob);

  const link =
    document.createElement("a");

  link.href = url;

  link.download =
    `${
      website.brand ||
      "webcraft-website"
    }`
      .toLowerCase()
      .replace(
        /[^a-z0-9]+/g,
        "-",
      )
      .replace(
        /^-|-$/g,
        "",
      ) +
    "-react.zip";

  document.body.appendChild(
    link,
  );

  link.click();

  document.body.removeChild(
    link,
  );

  URL.revokeObjectURL(url);
}
