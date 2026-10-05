
import { useState } from "react";

import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import Footer from "../sections/Footer";

import { sectionRegistry } from "../data/sectionRegistry";

function Preview({
  website,
  isGenerating,
  generationStep,
  selectedSection,
  setSelectedSection,
}) {
  const [device, setDevice] =
    useState("desktop");

  if (isGenerating) {
    return (
      <main className="flex h-full w-full items-center justify-center overflow-auto bg-[#111111] p-8">
        <div className="text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-white/[0.03] text-3xl">
            <span className="animate-pulse">
              ✦
            </span>
          </div>

          <h2 className="text-2xl font-semibold">
            {generationStep === 0 &&
              "Analyzing your idea"}

            {generationStep === 1 &&
              "Designing your website"}

            {generationStep === 2 &&
              "Generating components"}

            {generationStep === 3 &&
              "Website ready"}
          </h2>

          <p className="mt-3 text-sm text-gray-500">
            AI is turning your idea into a website...
          </p>

          <div className="mx-auto mt-8 h-1 w-64 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-white transition-all duration-500"
              style={{
                width:
                  generationStep === 0
                    ? "25%"
                    : generationStep === 1
                      ? "50%"
                      : generationStep === 2
                        ? "75%"
                        : "100%",
              }}
            />
          </div>
        </div>
      </main>
    );
  }

  if (!website) {
    return (
      <main className="flex h-full w-full items-center justify-center overflow-auto bg-[#111111] p-8">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 text-2xl">
            ✦
          </div>

          <h2 className="text-xl font-semibold">
            Your website will appear here
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Describe your website and click Generate.
          </p>
        </div>
      </main>
    );
  }

  const customization =
    website.customization || {
      fontFamily: "Inter",
      containerWidth: "1024px",
      sectionSpacing: "80px",
      borderRadius: "16px",
      shadow: "medium",
    };

  const shadowMap = {
    none: "none",
    small: "0 4px 15px rgba(0,0,0,0.08)",
    medium: "0 10px 30px rgba(0,0,0,0.12)",
    large: "0 20px 50px rgba(0,0,0,0.18)",
  };

  const getSectionSettings = (
    sectionName,
  ) => {
    return (
      website.sectionSettings?.[
        sectionName
      ] || {
        background:
          website.theme.background,
        textColor: website.theme.text,
        spacing: "80px",
        alignment: "left",
        layout: "default",
        columns: "3",
        hidden: false,
      }
    );
  };

  return (
    <main className="flex h-full w-full flex-col overflow-hidden bg-[#111111]">
      {/* DEVICE SWITCHER */}

      <div className="flex h-14 shrink-0 items-center justify-center border-b border-white/10 bg-[#0d0d0d]">
        <div className="flex items-center gap-1 rounded-lg border border-white/10 bg-white/[0.03] p-1">
          <button
            onClick={() =>
              setDevice("desktop")
            }
            className={`rounded-md px-4 py-2 text-xs font-medium transition ${
              device === "desktop"
                ? "bg-white text-black"
                : "text-gray-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            🖥 Desktop
          </button>

          <button
            onClick={() =>
              setDevice("tablet")
            }
            className={`rounded-md px-4 py-2 text-xs font-medium transition ${
              device === "tablet"
                ? "bg-white text-black"
                : "text-gray-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            Tablet
          </button>

          <button
            onClick={() =>
              setDevice("mobile")
            }
            className={`rounded-md px-4 py-2 text-xs font-medium transition ${
              device === "mobile"
                ? "bg-white text-black"
                : "text-gray-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            📱 Mobile
          </button>
        </div>
      </div>

      {/* WEBSITE */}

      <div className="flex-1 overflow-auto p-8">
        <div
          className={`website-preview mx-auto min-h-full overflow-hidden transition-all duration-300 ${
            device === "desktop"
              ? "w-full"
              : device === "tablet"
                ? "w-[768px] max-w-full"
                : "w-[390px] max-w-full"
          }`}
          style={{
            backgroundColor:
              website.theme.background,

            color: website.theme.text,

            fontFamily:
              customization.fontFamily,

            "--container-width":
              customization.containerWidth,

            "--section-spacing":
              customization.sectionSpacing,

            "--global-radius":
              customization.borderRadius,

            "--global-shadow":
              shadowMap[
                customization.shadow
              ] || shadowMap.medium,

            boxShadow:
              shadowMap[
                customization.shadow
              ] || shadowMap.medium,
          }}
        >
          {/* NAVBAR */}

          <Navbar website={website} />

          {/* HERO */}

          {(() => {
            const settings =
              getSectionSettings("hero");

            if (settings.hidden) {
              return null;
            }

            return (
              <div
                data-builder-section="hero"
                data-layout={
                  settings.layout || "centered"
                }
                data-alignment={
                  settings.alignment || "left"
                }
                className={`builder-section ${
                  selectedSection === "hero"
                    ? "builder-section-selected"
                    : ""
                }`}
                onClick={() =>
                  setSelectedSection("hero")
                }
                style={{
                  "--section-background":
                    settings.background,
                  "--section-text":
                    settings.textColor,
                  "--section-padding":
                    settings.spacing,
                }}
              >
                <Hero website={website} />
              </div>
            );
          })()}

          {/* SECTIONS */}

          {website.sections?.map(
            (sectionName, index) => {
              const Section =
                sectionRegistry[
                  sectionName
                ];

              if (!Section) {
                return null;
              }

              const settings =
                getSectionSettings(
                  sectionName,
                );

              if (settings.hidden) {
                return null;
              }

              const isSelected =
                selectedSection ===
                sectionName;

              return (
                <div
                  key={`${sectionName}-${index}`}
                  data-builder-section={
                    sectionName
                  }
                  data-layout={
                    settings.layout ||
                    "default"
                  }
                  data-columns={
                    settings.columns ||
                    "3"
                  }
                  data-alignment={
                    settings.alignment ||
                    "left"
                  }
                  className={`builder-section ${
                    isSelected
                      ? "builder-section-selected"
                      : ""
                  }`}
                  onClick={() =>
                    setSelectedSection(
                      sectionName,
                    )
                  }
                  style={{
                    "--section-background":
                      settings.background,
                    "--section-text":
                      settings.textColor,
                    "--section-padding":
                      settings.spacing,
                  }}
                >
                  <Section
                    website={website}
                  />
                </div>
              );
            },
          )}

          {/* FOOTER */}

          {(() => {
            const settings =
              getSectionSettings("footer");

            if (settings.hidden) {
              return null;
            }

            return (
              <div
                data-builder-section="footer"
                data-layout={
                  settings.layout ||
                  "default"
                }
                data-alignment={
                  settings.alignment ||
                  "left"
                }
                className={`builder-section ${
                  selectedSection === "footer"
                    ? "builder-section-selected"
                    : ""
                }`}
                onClick={() =>
                  setSelectedSection("footer")
                }
                style={{
                  "--section-background":
                    settings.background,
                  "--section-text":
                    settings.textColor,
                  "--section-padding":
                    settings.spacing,
                }}
              >
                <Footer website={website} />
              </div>
            );
          })()}
        </div>
      </div>
    </main>
  );
}

export default Preview;