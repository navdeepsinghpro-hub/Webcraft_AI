
function DesignPanel({ website, setWebsite }) {
  if (!website) {
    return null;
  }

  const customization = website.customization || {
    fontFamily: "Inter",
    containerWidth: "1024px",
    sectionSpacing: "80px",
    borderRadius: "16px",
    shadow: "medium",
  };

  const updateCustomization = (key, value) => {
    setWebsite((currentWebsite) => ({
      ...currentWebsite,
      customization: {
        ...(currentWebsite.customization || customization),
        [key]: value,
      },
    }));
  };

  const updateTheme = (key, value) => {
    setWebsite((currentWebsite) => ({
      ...currentWebsite,
      theme: {
        ...currentWebsite.theme,
        [key]: value,
      },
    }));
  };

  return (
    <div className="border-t border-white/10 bg-[#0a0a0a]">
      <div className="border-b border-white/10 px-5 py-4">
        <h2 className="text-sm font-semibold">
          Design
        </h2>

        <p className="mt-1 text-xs text-gray-500">
          Customize the look of your website.
        </p>
      </div>

      {/* COLORS */}

      <DesignGroup title="Colors">
        <ColorField
          label="Background"
          value={website.theme?.background || "#ffffff"}
          onChange={(value) =>
            updateTheme("background", value)
          }
        />

        <ColorField
          label="Text"
          value={website.theme?.text || "#111111"}
          onChange={(value) =>
            updateTheme("text", value)
          }
        />

        <ColorField
          label="Button"
          value={website.theme?.button || "#111111"}
          onChange={(value) =>
            updateTheme("button", value)
          }
        />

        <ColorField
          label="Button Text"
          value={
            website.theme?.buttonText || "#ffffff"
          }
          onChange={(value) =>
            updateTheme("buttonText", value)
          }
        />
      </DesignGroup>

      {/* TYPOGRAPHY */}

      <DesignGroup title="Typography">
        <SelectField
          label="Font Family"
          value={customization.fontFamily}
          onChange={(value) =>
            updateCustomization(
              "fontFamily",
              value,
            )
          }
          options={[
            {
              value: "Inter",
              label: "Inter",
            },
            {
              value: "Arial",
              label: "Arial",
            },
            {
              value: "Georgia",
              label: "Georgia",
            },
            {
              value: "Verdana",
              label: "Verdana",
            },
            {
              value: "Trebuchet MS",
              label: "Trebuchet MS",
            },
            {
              value: "Courier New",
              label: "Courier New",
            },
          ]}
        />
      </DesignGroup>

      {/* LAYOUT */}

      <DesignGroup title="Layout">
        <SelectField
          label="Container Width"
          value={customization.containerWidth}
          onChange={(value) =>
            updateCustomization(
              "containerWidth",
              value,
            )
          }
          options={[
            {
              value: "900px",
              label: "Compact",
            },
            {
              value: "1024px",
              label: "Standard",
            },
            {
              value: "1152px",
              label: "Wide",
            },
            {
              value: "1280px",
              label: "Extra Wide",
            },
          ]}
        />

        <SelectField
          label="Section Spacing"
          value={customization.sectionSpacing}
          onChange={(value) =>
            updateCustomization(
              "sectionSpacing",
              value,
            )
          }
          options={[
            {
              value: "48px",
              label: "Small",
            },
            {
              value: "64px",
              label: "Medium",
            },
            {
              value: "80px",
              label: "Large",
            },
            {
              value: "112px",
              label: "Extra Large",
            },
          ]}
        />
      </DesignGroup>

      {/* STYLE */}

      <DesignGroup title="Style">
        <SelectField
          label="Border Radius"
          value={customization.borderRadius}
          onChange={(value) =>
            updateCustomization(
              "borderRadius",
              value,
            )
          }
          options={[
            {
              value: "0px",
              label: "Square",
            },
            {
              value: "8px",
              label: "Small",
            },
            {
              value: "16px",
              label: "Medium",
            },
            {
              value: "24px",
              label: "Large",
            },
            {
              value: "32px",
              label: "Extra Large",
            },
          ]}
        />

        <SelectField
          label="Shadow"
          value={customization.shadow}
          onChange={(value) =>
            updateCustomization(
              "shadow",
              value,
            )
          }
          options={[
            {
              value: "none",
              label: "None",
            },
            {
              value: "small",
              label: "Small",
            },
            {
              value: "medium",
              label: "Medium",
            },
            {
              value: "large",
              label: "Large",
            },
          ]}
        />
      </DesignGroup>
    </div>
  );
}

function DesignGroup({ title, children }) {
  return (
    <div className="border-b border-white/10">
      <div className="px-5 py-4">
        <h3 className="text-xs font-medium uppercase tracking-wider text-gray-500">
          {title}
        </h3>

        <div className="mt-4 space-y-4">
          {children}
        </div>
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

export default DesignPanel;