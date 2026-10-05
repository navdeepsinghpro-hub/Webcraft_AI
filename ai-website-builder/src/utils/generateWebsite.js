import { templates } from "../data/templates";

export function generateWebsite(prompt) {
  const userPrompt = prompt.toLowerCase();

  let selectedTemplate = templates.portfolio;

  let selectedSections = [
    "about",
    "features",
    "testimonials",
    "cta",
  ];

  let selectedHeroLayout = "centered";

  let websiteType = "portfolio";

  // --------------------------------
  // WEBSITE TYPE DETECTION
  // --------------------------------

  if (
    userPrompt.includes("fitness") ||
    userPrompt.includes("gym") ||
    userPrompt.includes("workout")
  ) {
    websiteType = "fitness";

    selectedHeroLayout = "split";

    selectedSections = [
      "features",
      "howItWorks",
      "testimonials",
      "cta",
    ];
  } else if (
    userPrompt.includes("fashion") ||
    userPrompt.includes("clothing") ||
    userPrompt.includes("clothes")
  ) {
    websiteType = "fashion";

    selectedHeroLayout = "product";

    selectedSections = [
      "products",
      "about",
      "testimonials",
      "cta",
    ];
  } else if (
    userPrompt.includes("restaurant") ||
    userPrompt.includes("food") ||
    userPrompt.includes("cafe") ||
    userPrompt.includes("café")
  ) {
    websiteType = "restaurant";

    selectedTemplate = templates.restaurant;

    selectedHeroLayout = "split";

    selectedSections = [
      "menu",
      "about",
      "gallery",
      "testimonials",
      "cta",
    ];
  } else if (
    userPrompt.includes("saas") ||
    userPrompt.includes("software") ||
    userPrompt.includes("startup") ||
    userPrompt.includes("app")
  ) {
    websiteType = "saas";

    selectedTemplate = templates.saas;

    selectedHeroLayout = "centered";

    selectedSections = [
      "features",
      "howItWorks",
      "pricing",
      "testimonials",
      "cta",
    ];
  } else if (
    userPrompt.includes("portfolio") ||
    userPrompt.includes("developer") ||
    userPrompt.includes("designer")
  ) {
    websiteType = "portfolio";

    selectedTemplate = templates.portfolio;

    selectedHeroLayout = "centered";

    selectedSections = [
      "about",
      "features",
      "testimonials",
      "cta",
    ];
  }

  // --------------------------------
  // CREATE WEBSITE
  // --------------------------------

  const website = {
    ...selectedTemplate,

    theme: {
      ...selectedTemplate.theme,
    },

    features:
      selectedTemplate.features?.map((feature) => ({
        ...feature,
      })) || [],

    testimonials:
      selectedTemplate.testimonials?.map((testimonial) => ({
        ...testimonial,
      })) || [],

    menuItems:
      selectedTemplate.menuItems?.map((item) => ({
        ...item,
      })) || [],

    galleryItems:
      selectedTemplate.galleryItems?.map((item) => ({
        ...item,
      })) || [],

    pricingPlans:
      selectedTemplate.pricingPlans?.map((plan) => ({
        ...plan,
      })) || [],

    products:
      selectedTemplate.products?.map((product) => ({
        ...product,
      })) || [],

    howItWorksSteps:
      selectedTemplate.howItWorksSteps?.map((step) => ({
        ...step,
      })) || [],

    cta: {
      ...(selectedTemplate.cta || {}),
    },

    sections: [...selectedSections],

    heroLayout: selectedHeroLayout,

    type: websiteType,
  };

  // --------------------------------
  // FITNESS WEBSITE
  // --------------------------------

  if (websiteType === "fitness") {
    website.brand = "FitForge";

    website.type = "fitness";

    website.title = "Build a Stronger You";

    website.description =
      "Train smarter, stay consistent and transform your fitness journey.";

    website.buttonText = "Start Training";

    website.about =
      "FitForge helps people build better fitness habits through structured workouts, expert guidance and consistent progress.";

    website.features = [
      {
        icon: "💪",
        title: "Smart Workouts",
        description:
          "Structured workouts designed for your fitness goals.",
      },
      {
        icon: "📈",
        title: "Track Progress",
        description:
          "Monitor your progress and stay motivated.",
      },
      {
        icon: "🔥",
        title: "Stay Consistent",
        description:
          "Build habits that turn effort into results.",
      },
    ];

    website.howItWorksSteps = [
      {
        number: "01",
        title: "Choose Your Goal",
        description:
          "Select a fitness goal that matches what you want to achieve.",
      },
      {
        number: "02",
        title: "Follow Your Plan",
        description:
          "Complete structured workouts designed around your goals.",
      },
      {
        number: "03",
        title: "Track Your Progress",
        description:
          "Monitor your progress and stay consistent over time.",
      },
    ];

    website.cta = {
      title: "Ready to Start Training?",
      description:
        "Take the first step toward a stronger and healthier you.",
      buttonText: "Start Training",
    };
  }

  // --------------------------------
  // FASHION WEBSITE
  // --------------------------------

  if (websiteType === "fashion") {
    website.brand = "LUXE";

    website.type = "fashion";

    website.title = "Designed for Your Statement";

    website.description =
      "Discover modern fashion crafted for people who define their own style.";

    website.buttonText = "Explore Collection";

    website.about =
      "LUXE brings together contemporary design, premium materials and timeless style to create pieces made to stand out.";

    website.features = [
      {
        icon: "✦",
        title: "Premium Design",
        description:
          "Thoughtfully designed pieces with a refined aesthetic.",
      },
      {
        icon: "◇",
        title: "Quality Materials",
        description:
          "Selected materials made for comfort and durability.",
      },
      {
        icon: "◎",
        title: "Modern Style",
        description:
          "Contemporary collections inspired by modern culture.",
      },
    ];

    website.products = [
      {
        image: "👕",
        name: "Essential Overshirt",
        price: "$89",
        description:
          "A clean everyday overshirt crafted for modern casual style.",
      },
      {
        image: "👟",
        name: "Urban Sneakers",
        price: "$120",
        description:
          "Minimal sneakers designed for comfort and everyday movement.",
      },
      {
        image: "👜",
        name: "Luxe Handbag",
        price: "$149",
        description:
          "A refined handbag designed to complete your everyday look.",
      },
    ];

    website.cta = {
      title: "Define Your Style",
      description:
        "Explore the latest collection and find pieces made for you.",
      buttonText: "Explore Collection",
    };
  }

  // --------------------------------
  // RESTAURANT WEBSITE
  // --------------------------------

  if (websiteType === "restaurant") {
    website.cta = {
      title: "Ready for a Great Meal?",
      description:
        "Visit Luna Kitchen and experience fresh flavors made with passion.",
      buttonText: "Book a Table",
    };
  }

  // --------------------------------
  // SAAS WEBSITE
  // --------------------------------

  if (websiteType === "saas") {
    website.cta = {
      title: "Ready to Work Smarter?",
      description:
        "Start building better workflows and help your team move faster.",
      buttonText: "Start Free",
    };
  }

  // --------------------------------
  // PORTFOLIO WEBSITE
  // --------------------------------

  if (websiteType === "portfolio") {
    website.brand = "Creator.dev";

    website.title = "I Build Digital Experiences";

    website.description =
      "I create modern digital experiences that combine clean design, thoughtful interactions and powerful technology.";

    website.buttonText = "View My Work";

    website.cta = {
      title: "Let's Build Something Great",
      description:
        "Have an idea in mind? Let's turn it into a beautiful digital experience.",
      buttonText: "Let's Work Together",
    };
  }

  // --------------------------------
  // THEME DETECTION
  // --------------------------------

  if (
    userPrompt.includes("dark") ||
    userPrompt.includes("black") ||
    userPrompt.includes("dark mode")
  ) {
    website.theme = {
      background: "#09090b",
      text: "#ffffff",
      button: "#ffffff",
      buttonText: "#000000",
    };
  }

  if (
    userPrompt.includes("luxury") ||
    userPrompt.includes("premium")
  ) {
    website.theme = {
      background: "#111111",
      text: "#f5f5f5",
      button: "#d4af37",
      buttonText: "#111111",
    };
  }

  if (
    userPrompt.includes("minimal") ||
    userPrompt.includes("simple")
  ) {
    website.theme = {
      background: "#ffffff",
      text: "#171717",
      button: "#171717",
      buttonText: "#ffffff",
    };
  }

  if (
    userPrompt.includes("blue") ||
    userPrompt.includes("professional")
  ) {
    website.theme = {
      background: "#eff6ff",
      text: "#172554",
      button: "#2563eb",
      buttonText: "#ffffff",
    };
  }

  if (
    userPrompt.includes("green") ||
    userPrompt.includes("nature")
  ) {
    website.theme = {
      background: "#f0fdf4",
      text: "#14532d",
      button: "#16a34a",
      buttonText: "#ffffff",
    };
  }

  return website;
}