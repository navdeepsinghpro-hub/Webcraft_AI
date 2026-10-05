
function SectionPanel({
  website,
  setWebsite,
  selectedSection,
  setSelectedSection,
}) {
  if (!website) {
    return null;
  }

  const sectionSettings =
    website.sectionSettings || {};

  const currentSettings =
    sectionSettings[selectedSection] || {
      background:
        website.theme?.background || "#ffffff",
      textColor:
        website.theme?.text || "#111111",
      spacing: "80px",
      alignment: "left",
      hidden: false,
      layout: "default",
      columns: "3",
    };

  const updateSection = (key, value) => {
    if (!selectedSection) {
      return;
    }

    setWebsite((currentWebsite) => ({
      ...currentWebsite,
      sectionSettings: {
        ...(currentWebsite.sectionSettings || {}),
        [selectedSection]: {
          ...(
            currentWebsite.sectionSettings?.[
              selectedSection
            ] || {}
          ),
          [key]: value,
        },
      },
    }));
  };

  const sectionLabels = {
    hero: "Hero",
    about: "About",
    features: "Features",
    testimonials: "Testimonials",
    cta: "Call To Action",
    menu: "Menu",
    gallery: "Gallery",
    pricing: "Pricing",
    howItWorks: "How It Works",
    products: "Products",
    footer: "Footer",
  };

  const label =
    sectionLabels[selectedSection] ||
    selectedSection;

  const layoutOptions = {
    hero: [
      {
        value: "centered",
        label: "Centered",
      },
      {
        value: "split",
        label: "Split",
      },
      {
        value: "left",
        label: "Left Aligned",
      },
    ],

    cta: [
      {
        value: "left",
        label: "Left",
      },
      {
        value: "center",
        label: "Center",
      },
      {
        value: "right",
        label: "Right",
      },
    ],
  };

  const columnSections = [
    "features",
    "gallery",
    "pricing",
    "products",
    "menu",
    "howItWorks",
    "testimonials",
  ];

  const showLayout =
    selectedSection === "hero" ||
    selectedSection === "cta";

  const showColumns =
    columnSections.includes(
      selectedSection,
    );

  return (
    <div className="border-t border-white/10 bg-[#0a0a0a]">
      {/* HEADER */}

      <div className="border-b border-white/10 px-5 py-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className="text-sm font-semibold">
              Section Editor
            </h2>

            <p className="mt-1 text-xs text-gray-500">
              Editing: {label}
            </p>
          </div>

          <button
            onClick={() =>
              setSelectedSection(null)
            }
            className="rounded-lg border border-white/10 px-2.5 py-1.5 text-xs text-gray-400 transition hover:bg-white/5 hover:text-white"
          >
            Close
          </button>
        </div>
      </div>

      <div className="space-y-5 px-5 py-5">
        {/* COLORS */}

        <ColorField
          label="Background"
          value={
            currentSettings.background ||
            website.theme?.background ||
            "#ffffff"
          }
          onChange={(value) =>
            updateSection(
              "background",
              value,
            )
          }
        />

        <ColorField
          label="Text Color"
          value={
            currentSettings.textColor ||
            website.theme?.text ||
            "#111111"
          }
          onChange={(value) =>
            updateSection(
              "textColor",
              value,
            )
          }
        />

        {/* SPACING */}

        <SelectField
          label="Section Spacing"
          value={
            currentSettings.spacing ||
            "80px"
          }
          onChange={(value) =>
            updateSection(
              "spacing",
              value,
            )
          }
          options={[
            {
              value: "40px",
              label: "Small",
            },
            {
              value: "60px",
              label: "Medium",
            },
            {
              value: "80px",
              label: "Large",
            },
            {
              value: "110px",
              label: "Extra Large",
            },
            {
              value: "140px",
              label: "Huge",
            },
          ]}
        />

        {/* ALIGNMENT */}

        <SelectField
          label="Content Alignment"
          value={
            currentSettings.alignment ||
            "left"
          }
          onChange={(value) =>
            updateSection(
              "alignment",
              value,
            )
          }
          options={[
            {
              value: "left",
              label: "Left",
            },
            {
              value: "center",
              label: "Center",
            },
            {
              value: "right",
              label: "Right",
            },
          ]}
        />

        {/* LAYOUT */}

        {showLayout && (
          <SelectField
            label={
              selectedSection === "hero"
                ? "Hero Layout"
                : "CTA Layout"
            }
            value={
              currentSettings.layout ||
              (selectedSection === "hero"
                ? "centered"
                : "center")
            }
            onChange={(value) =>
              updateSection(
                "layout",
                value,
              )
            }
            options={
              layoutOptions[
                selectedSection
              ]
            }
          />
        )}

        {/* COLUMNS */}

        {showColumns && (
          <SelectField
            label="Columns"
            value={
              currentSettings.columns ||
              "3"
            }
            onChange={(value) =>
              updateSection(
                "columns",
                value,
              )
            }
            options={[
              {
                value: "1",
                label: "1 Column",
              },
              {
                value: "2",
                label: "2 Columns",
              },
              {
                value: "3",
                label: "3 Columns",
              },
              ...(selectedSection ===
              "gallery"
                ? [
                    {
                      value: "4",
                      label: "4 Columns",
                    },
                  ]
                : []),
            ]}
          />
        )}

        {/* VISIBILITY */}

        <div>
          <p className="mb-2 text-xs text-gray-500">
            Visibility
          </p>

          <button
            onClick={() =>
              updateSection(
                "hidden",
                !currentSettings.hidden,
              )
            }
            className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-sm transition ${
              currentSettings.hidden
                ? "border-red-500/20 bg-red-500/5 text-red-400"
                : "border-white/10 bg-white/[0.03] text-gray-300 hover:bg-white/5"
            }`}
          >
            <span>
              {currentSettings.hidden
                ? "Section Hidden"
                : "Section Visible"}
            </span>

            <span>
              {currentSettings.hidden
                ? "Off"
                : "On"}
            </span>
          </button>
        </div>

        {/* RESET */}

        <button
          onClick={() => {
            setWebsite((currentWebsite) => {
              const updatedSettings = {
                ...(currentWebsite.sectionSettings ||
                  {}),
              };

              delete updatedSettings[
                selectedSection
              ];

              return {
                ...currentWebsite,
                sectionSettings:
                  updatedSettings,
              };
            });
          }}
          className="w-full rounded-xl border border-white/10 px-4 py-3 text-xs font-medium text-gray-400 transition hover:bg-white/5 hover:text-white"
        >
          Reset Section
        </button>
      </div>
    </div>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs text-gray-500">
        {label}
      </label>

      <select
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        className="w-full rounded-lg border border-white/10 bg-[#171717] px-3 py-2.5 text-sm text-white outline-none focus:border-white/30"
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="bg-[#171717]"
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function ColorField({
  label,
  value,
  onChange,
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs text-gray-500">
        {label}
      </label>

      <div className="flex gap-2">
        <input
          type="color"
          value={value}
          onChange={(event) =>
            onChange(event.target.value)
          }
          className="h-9 w-10 cursor-pointer rounded border-0 bg-transparent p-0"
        />

        <input
          type="text"
          value={value}
          onChange={(event) =>
            onChange(event.target.value)
          }
          className="min-w-0 flex-1 rounded-lg border border-white/10 bg-[#171717] px-3 py-2 text-sm text-white outline-none focus:border-white/30"
        />
      </div>
    </div>
  );
}

export default SectionPanel;
