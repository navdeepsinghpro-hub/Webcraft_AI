
function escapeHtml(value) {
  if (value === null || value === undefined) {
    return "";
  }

  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/* =========================================
   SECTION GENERATORS
========================================= */

function generateNavbar(website) {
  const navLinks = website.navLinks || [];

  return `
    <nav class="navbar">
      <div class="container navbar-inner">
        <div class="logo">
          ${escapeHtml(website.brand || "WebCraft")}
        </div>

        <div class="nav-links">
          ${navLinks
            .map(
              (link) => `
                <a href="${escapeHtml(link.href || "#")}">
                  ${escapeHtml(link.label || "Link")}
                </a>
              `,
            )
            .join("")}
        </div>

        <a href="#cta" class="nav-button">
          Get Started
        </a>
      </div>
    </nav>
  `;
}

function generateHero(website) {
  const hero = website.hero || {};

  return `
    <section class="hero">
      <div class="container hero-content">
        <div class="hero-text">
          <p class="eyebrow">Welcome</p>

          <h1>
            ${escapeHtml(
              hero.title || "Build Something Amazing",
            )}
          </h1>

          <p class="hero-description">
            ${escapeHtml(
              hero.description ||
                "Create a beautiful website with WebCraft AI.",
            )}
          </p>

          <div class="hero-buttons">
            <a href="#cta" class="primary-button">
              ${escapeHtml(hero.buttonText || "Get Started")}
            </a>

            <a href="#features" class="secondary-button">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}

function generateFeatures(website) {
  const features = website.features || [];

  return `
    <section id="features" class="section">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">Features</p>

          <h2>Everything You Need</h2>

          <p>
            Powerful features designed to help you build better experiences.
          </p>
        </div>

        <div class="cards">
          ${features
            .map(
              (feature) => `
                <div class="card">
                  <div class="card-icon">
                    ${escapeHtml(feature.icon || "✦")}
                  </div>

                  <h3>
                    ${escapeHtml(feature.title || "Feature")}
                  </h3>

                  <p>
                    ${escapeHtml(
                      feature.description ||
                        "A powerful feature for your website.",
                    )}
                  </p>
                </div>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function generateAbout(website) {
  const about = website.about || {};

  return `
    <section id="about" class="section about-section">
      <div class="container about-content">
        <div>
          <p class="eyebrow">About</p>

          <h2>
            ${escapeHtml(
              about.title || "Built With Purpose",
            )}
          </h2>

          <p>
            ${escapeHtml(
              about.description ||
                "We create meaningful digital experiences.",
            )}
          </p>
        </div>
      </div>
    </section>
  `;
}

function generateTestimonials(website) {
  const testimonials =
    website.testimonials || [];

  return `
    <section class="section">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">Testimonials</p>

          <h2>What People Say</h2>
        </div>

        <div class="cards">
          ${testimonials
            .map(
              (item) => `
                <div class="card testimonial">
                  <p class="quote">
                    "${escapeHtml(
                      item.quote ||
                        "Amazing experience!",
                    )}"
                  </p>

                  <h3>
                    ${escapeHtml(
                      item.name || "Customer",
                    )}
                  </h3>

                  <p class="muted">
                    ${escapeHtml(
                      item.role || "Customer",
                    )}
                  </p>
                </div>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function generateMenu(website) {
  const items = website.menuItems || [];

  return `
    <section id="menu" class="section">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">Menu</p>

          <h2>Our Menu</h2>
        </div>

        <div class="cards">
          ${items
            .map(
              (item) => `
                <div class="card">
                  <h3>
                    ${escapeHtml(
                      item.name ||
                        item.title ||
                        "Menu Item",
                    )}
                  </h3>

                  <p>
                    ${escapeHtml(
                      item.description ||
                        "Delicious and freshly prepared.",
                    )}
                  </p>

                  <strong>
                    ${escapeHtml(
                      item.price || "$0",
                    )}
                  </strong>
                </div>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function generateGallery(website) {
  const items =
    website.galleryItems || [];

  return `
    <section id="gallery" class="section">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">Gallery</p>

          <h2>Explore Our World</h2>
        </div>

        <div class="cards gallery-grid">
          ${items
            .map(
              (item) => `
                <div class="card gallery-card">
                  <div class="gallery-image">
                    ${escapeHtml(
                      item.image || "✦",
                    )}
                  </div>

                  <h3>
                    ${escapeHtml(
                      item.title ||
                        "Gallery Item",
                    )}
                  </h3>

                  <p>
                    ${escapeHtml(
                      item.description ||
                        "A beautiful part of our collection.",
                    )}
                  </p>
                </div>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function generatePricing(website) {
  const plans =
    website.pricingPlans || [];

  return `
    <section id="pricing" class="section">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">Pricing</p>

          <h2>Choose Your Plan</h2>
        </div>

        <div class="cards">
          ${plans
            .map(
              (plan) => `
                <div class="card pricing-card">
                  <h3>
                    ${escapeHtml(
                      plan.name || "Plan",
                    )}
                  </h3>

                  <div class="price">
                    ${escapeHtml(
                      plan.price || "$0",
                    )}
                  </div>

                  <p>
                    ${escapeHtml(
                      plan.description ||
                        "Everything you need.",
                    )}
                  </p>

                  <a href="#cta" class="primary-button">
                    Get Started
                  </a>
                </div>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function generateProducts(website) {
  const products =
    website.products || [];

  return `
    <section id="products" class="section">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">Products</p>

          <h2>Our Products</h2>
        </div>

        <div class="cards">
          ${products
            .map(
              (product) => `
                <div class="card">
                  <div class="product-image">
                    ${escapeHtml(
                      product.image || "✦",
                    )}
                  </div>

                  <h3>
                    ${escapeHtml(
                      product.name ||
                        product.title ||
                        "Product",
                    )}
                  </h3>

                  <p>
                    ${escapeHtml(
                      product.description ||
                        "Premium product.",
                    )}
                  </p>

                  <strong>
                    ${escapeHtml(
                      product.price || "$0",
                    )}
                  </strong>
                </div>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function generateHowItWorks(website) {
  const steps =
    website.howItWorksSteps || [];

  return `
    <section id="how-it-works" class="section">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">How It Works</p>

          <h2>Simple Process</h2>
        </div>

        <div class="cards">
          ${steps
            .map(
              (step, index) => `
                <div class="card">
                  <div class="step-number">
                    ${index + 1}
                  </div>

                  <h3>
                    ${escapeHtml(
                      step.title || "Step",
                    )}
                  </h3>

                  <p>
                    ${escapeHtml(
                      step.description ||
                        "A simple step in the process.",
                    )}
                  </p>
                </div>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function generateCTA(website) {
  const cta = website.cta || {};

  return `
    <section id="cta" class="cta-section">
      <div class="container cta-content">
        <h2>
          ${escapeHtml(
            cta.title ||
              "Ready to Get Started?",
          )}
        </h2>

        <p>
          ${escapeHtml(
            cta.description ||
              "Let's build something amazing together.",
          )}
        </p>

        <a href="#" class="primary-button">
          ${escapeHtml(
            cta.buttonText ||
              "Get Started",
          )}
        </a>
      </div>
    </section>
  `;
}

function generateFooter(website) {
  return `
    <footer class="footer">
      <div class="container">
        <p>
          © ${new Date().getFullYear()}
          ${escapeHtml(
            website.brand || "WebCraft",
          )}
        </p>
      </div>
    </footer>
  `;
}

/* =========================================
   SECTION MAP
========================================= */

function generateSection(
  section,
  website,
) {
  switch (section) {
    case "features":
      return generateFeatures(website);

    case "about":
      return generateAbout(website);

    case "testimonials":
      return generateTestimonials(website);

    case "menu":
      return generateMenu(website);

    case "gallery":
      return generateGallery(website);

    case "pricing":
      return generatePricing(website);

    case "products":
      return generateProducts(website);

    case "howItWorks":
      return generateHowItWorks(website);

    case "cta":
      return generateCTA(website);

    default:
      return "";
  }
}

/* =========================================
   CSS
========================================= */

function generateCSS(website) {
  const theme = website.theme || {};

  const background =
    theme.background || "#ffffff";

  const text =
    theme.text || "#111111";

  const button =
    theme.button || "#111111";

  const buttonText =
    theme.buttonText || "#ffffff";

  const radius =
    website.design?.borderRadius || "12px";

  return `
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: ${background};
  color: ${text};
  line-height: 1.6;
}

a {
  color: inherit;
  text-decoration: none;
}

.container {
  width: min(1100px, calc(100% - 40px));
  margin: 0 auto;
}

.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${background};
  border-bottom: 1px solid ${text}15;
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
  align-items: center;
  gap: 24px;
}

.nav-links a {
  font-size: 14px;
  opacity: 0.65;
  transition: opacity 0.2s ease;
}

.nav-links a:hover {
  opacity: 1;
}

.nav-button,
.primary-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${radius};
  background: ${button};
  color: ${buttonText};
  padding: 11px 18px;
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

.hero-content {
  display: flex;
  align-items: center;
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
  font-size: clamp(42px, 7vw, 82px);
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
  border: 1px solid ${text}20;
  border-radius: ${radius};
  padding: 11px 18px;
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
  font-size: clamp(32px, 5vw, 52px);
  line-height: 1;
  letter-spacing: -0.04em;
}

.section-heading > p:last-child {
  margin-top: 16px;
  opacity: 0.6;
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.card {
  padding: 28px;
  border: 1px solid ${text}15;
  border-radius: ${radius};
  background: ${text}05;
}

.card-icon {
  font-size: 30px;
  margin-bottom: 20px;
}

.card h3 {
  margin: 0;
  font-size: 20px;
}

.card p {
  margin: 12px 0 0;
  opacity: 0.6;
}

.about-section {
  border-top: 1px solid ${text}10;
  border-bottom: 1px solid ${text}10;
}

.about-content {
  max-width: 800px;
}

.about-content h2 {
  margin: 0;
  font-size: clamp(34px, 5vw, 56px);
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
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.gallery-image,
.product-image {
  min-height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: -28px -28px 24px;
  font-size: 48px;
  background: ${text}08;
}

.price {
  margin: 20px 0;
  font-size: 36px;
  font-weight: 800;
}

.pricing-card .primary-button {
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
  background: ${text}08;
  text-align: center;
}

.cta-content {
  max-width: 760px;
}

.cta-content h2 {
  margin: 0;
  font-size: clamp(36px, 6vw, 64px);
  line-height: 1;
  letter-spacing: -0.04em;
}

.cta-content p {
  margin: 20px 0 30px;
  opacity: 0.6;
}

.footer {
  padding: 30px 0;
  border-top: 1px solid ${text}10;
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
    width: min(100% - 28px, 1100px);
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
   COMPLETE HTML
========================================= */

export function generateHTML(website) {
  const sections =
    website.sections || [];

  const sectionHTML = sections
    .filter((section) => {
      const settings =
        website.sectionSettings?.[
          section
        ];

      return settings?.visible !== false;
    })
    .map((section) =>
      generateSection(
        section,
        website,
      ),
    )
    .join("\n");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />

  <meta
    name="description"
    content="${escapeHtml(
      website.hero?.description ||
        "A website created with WebCraft AI.",
    )}"
  />

  <title>
    ${escapeHtml(
      website.brand || "WebCraft AI",
    )}
  </title>

  <style>
${generateCSS(website)}
  </style>
</head>

<body>

  ${generateNavbar(website)}

  ${generateHero(website)}

  ${sectionHTML}

  ${generateFooter(website)}

</body>
</html>`;
}

/* =========================================
   DOWNLOAD
========================================= */

export function downloadHTML(website) {
  if (!website) {
    return;
  }

  const html = generateHTML(website);

  const blob = new Blob(
    [html],
    {
      type: "text/html",
    },
  );

  const url =
    URL.createObjectURL(blob);

  const link =
    document.createElement("a");

  link.href = url;

  link.download =
    `${website.brand || "webcraft-website"}`
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "") +
    ".html";

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}