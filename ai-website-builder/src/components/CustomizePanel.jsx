
import { useState } from "react";

function CustomizePanel({ website, setWebsite }) {
  const [openSection, setOpenSection] = useState("content");

  if (!website) {
    return null;
  }

  const updateWebsite = (updates) => {
    setWebsite((currentWebsite) => ({
      ...currentWebsite,
      ...updates,
    }));
  };

  /* -----------------------------
     BASIC CONTENT
  ----------------------------- */

  const updateField = (field, value) => {
    updateWebsite({
      [field]: value,
    });
  };

  /* -----------------------------
     FEATURES
  ----------------------------- */

  const updateFeature = (index, key, value) => {
    setWebsite((currentWebsite) => ({
      ...currentWebsite,
      features: (currentWebsite.features || []).map(
        (feature, featureIndex) =>
          featureIndex === index
            ? {
                ...feature,
                [key]: value,
              }
            : feature,
      ),
    }));
  };

  const addFeature = () => {
    setWebsite((currentWebsite) => ({
      ...currentWebsite,
      features: [
        ...(currentWebsite.features || []),
        {
          icon: "✦",
          title: "New Feature",
          description: "Describe this feature.",
        },
      ],
    }));
  };

  const deleteFeature = (index) => {
    setWebsite((currentWebsite) => ({
      ...currentWebsite,
      features: (currentWebsite.features || []).filter(
        (_, featureIndex) => featureIndex !== index,
      ),
    }));
  };

  /* -----------------------------
     MENU
  ----------------------------- */

  const updateMenuItem = (index, key, value) => {
    setWebsite((currentWebsite) => ({
      ...currentWebsite,
      menuItems: (currentWebsite.menuItems || []).map(
        (item, itemIndex) =>
          itemIndex === index
            ? {
                ...item,
                [key]: value,
              }
            : item,
      ),
    }));
  };

  const addMenuItem = () => {
    setWebsite((currentWebsite) => ({
      ...currentWebsite,
      menuItems: [
        ...(currentWebsite.menuItems || []),
        {
          name: "New Dish",
          description: "Describe this dish.",
          price: "$0",
        },
      ],
    }));
  };

  const deleteMenuItem = (index) => {
    setWebsite((currentWebsite) => ({
      ...currentWebsite,
      menuItems: (currentWebsite.menuItems || []).filter(
        (_, itemIndex) => itemIndex !== index,
      ),
    }));
  };

  /* -----------------------------
     GALLERY
  ----------------------------- */

  const updateGalleryItem = (index, key, value) => {
    setWebsite((currentWebsite) => ({
      ...currentWebsite,
      galleryItems: (currentWebsite.galleryItems || []).map(
        (item, itemIndex) =>
          itemIndex === index
            ? {
                ...item,
                [key]: value,
              }
            : item,
      ),
    }));
  };

  const addGalleryItem = () => {
    setWebsite((currentWebsite) => ({
      ...currentWebsite,
      galleryItems: [
        ...(currentWebsite.galleryItems || []),
        {
          image: "✦",
          title: "New Gallery Item",
          description: "Describe this gallery item.",
        },
      ],
    }));
  };

  const deleteGalleryItem = (index) => {
    setWebsite((currentWebsite) => ({
      ...currentWebsite,
      galleryItems: (currentWebsite.galleryItems || []).filter(
        (_, itemIndex) => itemIndex !== index,
      ),
    }));
  };

  /* -----------------------------
     PRICING
  ----------------------------- */

  const updatePricingPlan = (index, key, value) => {
    setWebsite((currentWebsite) => ({
      ...currentWebsite,
      pricingPlans: (currentWebsite.pricingPlans || []).map(
        (plan, planIndex) =>
          planIndex === index
            ? {
                ...plan,
                [key]: value,
              }
            : plan,
      ),
    }));
  };

  const addPricingPlan = () => {
    setWebsite((currentWebsite) => ({
      ...currentWebsite,
      pricingPlans: [
        ...(currentWebsite.pricingPlans || []),
        {
          name: "New Plan",
          price: "$0",
          description: "Describe this plan.",
        },
      ],
    }));
  };

  const deletePricingPlan = (index) => {
    setWebsite((currentWebsite) => ({
      ...currentWebsite,
      pricingPlans: (currentWebsite.pricingPlans || []).filter(
        (_, planIndex) => planIndex !== index,
      ),
    }));
  };

  /* -----------------------------
     PRODUCTS
  ----------------------------- */

  const updateProduct = (index, key, value) => {
    setWebsite((currentWebsite) => ({
      ...currentWebsite,
      products: (currentWebsite.products || []).map(
        (product, productIndex) =>
          productIndex === index
            ? {
                ...product,
                [key]: value,
              }
            : product,
      ),
    }));
  };

  const addProduct = () => {
    setWebsite((currentWebsite) => ({
      ...currentWebsite,
      products: [
        ...(currentWebsite.products || []),
        {
          image: "✦",
          name: "New Product",
          price: "$0",
          description: "Describe this product.",
        },
      ],
    }));
  };

  const deleteProduct = (index) => {
    setWebsite((currentWebsite) => ({
      ...currentWebsite,
      products: (currentWebsite.products || []).filter(
        (_, productIndex) => productIndex !== index,
      ),
    }));
  };

  /* -----------------------------
     HOW IT WORKS
  ----------------------------- */

  const updateHowItWorksStep = (index, key, value) => {
    setWebsite((currentWebsite) => ({
      ...currentWebsite,
      howItWorksSteps: (
        currentWebsite.howItWorksSteps || []
      ).map((step, stepIndex) =>
        stepIndex === index
          ? {
              ...step,
              [key]: value,
            }
          : step,
      ),
    }));
  };

  const addHowItWorksStep = () => {
    setWebsite((currentWebsite) => ({
      ...currentWebsite,
      howItWorksSteps: [
        ...(currentWebsite.howItWorksSteps || []),
        {
          number: String(
            (currentWebsite.howItWorksSteps || []).length + 1,
          ).padStart(2, "0"),
          title: "New Step",
          description: "Describe this step.",
        },
      ],
    }));
  };

  const deleteHowItWorksStep = (index) => {
    setWebsite((currentWebsite) => ({
      ...currentWebsite,
      howItWorksSteps: (
        currentWebsite.howItWorksSteps || []
      ).filter((_, stepIndex) => stepIndex !== index),
    }));
  };

  /* -----------------------------
     TESTIMONIALS
  ----------------------------- */

  const updateTestimonial = (index, key, value) => {
    setWebsite((currentWebsite) => ({
      ...currentWebsite,
      testimonials: (currentWebsite.testimonials || []).map(
        (testimonial, testimonialIndex) =>
          testimonialIndex === index
            ? {
                ...testimonial,
                [key]: value,
              }
            : testimonial,
      ),
    }));
  };

  const addTestimonial = () => {
    setWebsite((currentWebsite) => ({
      ...currentWebsite,
      testimonials: [
        ...(currentWebsite.testimonials || []),
        {
          name: "New Customer",
          text: "Write a customer testimonial.",
        },
      ],
    }));
  };

  const deleteTestimonial = (index) => {
    setWebsite((currentWebsite) => ({
      ...currentWebsite,
      testimonials: (
        currentWebsite.testimonials || []
      ).filter(
        (_, testimonialIndex) => testimonialIndex !== index,
      ),
    }));
  };

  /* -----------------------------
     CTA
  ----------------------------- */

  const updateCTA = (key, value) => {
    setWebsite((currentWebsite) => ({
      ...currentWebsite,
      cta: {
        ...(currentWebsite.cta || {}),
        [key]: value,
      },
    }));
  };

  /* -----------------------------
     SECTION BUILDER
  ----------------------------- */

  const sectionLabels = {
    about: "About",
    features: "Features",
    testimonials: "Testimonials",
    cta: "Call To Action",
    menu: "Menu",
    gallery: "Gallery",
    pricing: "Pricing",
    howItWorks: "How It Works",
    products: "Products",
  };

  const availableSections = [
    "about",
    "features",
    "testimonials",
    "menu",
    "gallery",
    "pricing",
    "howItWorks",
    "products",
    "cta",
  ];

  const moveSection = (index, direction) => {
    setWebsite((currentWebsite) => {
      const sections = [...(currentWebsite.sections || [])];

      const newIndex = index + direction;

      if (newIndex < 0 || newIndex >= sections.length) {
        return currentWebsite;
      }

      [sections[index], sections[newIndex]] = [
        sections[newIndex],
        sections[index],
      ];

      return {
        ...currentWebsite,
        sections,
      };
    });
  };

  const deleteSection = (index) => {
    setWebsite((currentWebsite) => ({
      ...currentWebsite,
      sections: (currentWebsite.sections || []).filter(
        (_, sectionIndex) => sectionIndex !== index,
      ),
    }));
  };

  const duplicateSection = (index) => {
    setWebsite((currentWebsite) => {
      const sections = [...(currentWebsite.sections || [])];

      const section = sections[index];

      sections.splice(index + 1, 0, section);

      return {
        ...currentWebsite,
        sections,
      };
    });
  };

  const addSection = (sectionName) => {
    setWebsite((currentWebsite) => ({
      ...currentWebsite,
      sections: [
        ...(currentWebsite.sections || []),
        sectionName,
      ],
    }));
  };

  const isSectionAdded = (sectionName) => {
    return (website.sections || []).includes(sectionName);
  };

  return (
    <div className="border-t border-white/10 bg-[#0a0a0a]">
      <div className="border-b border-white/10 px-5 py-4">
        <h2 className="text-sm font-semibold">
          Customize Website
        </h2>

        <p className="mt-1 text-xs text-gray-500">
          Edit your generated website.
        </p>
      </div>

      {/* BASIC CONTENT */}

      <div className="border-b border-white/10">
        <button
          onClick={() =>
            setOpenSection(
              openSection === "content"
                ? ""
                : "content",
            )
          }
          className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-medium"
        >
          <span>Content</span>

          <span className="text-gray-500">
            {openSection === "content" ? "−" : "+"}
          </span>
        </button>

        {openSection === "content" && (
          <div className="space-y-4 px-5 pb-5">
            <Field
              label="Brand"
              value={website.brand || ""}
              onChange={(value) =>
                updateField("brand", value)
              }
            />

            <Field
              label="Hero Title"
              value={website.title || ""}
              onChange={(value) =>
                updateField("title", value)
              }
            />

            <TextAreaField
              label="Hero Description"
              value={website.description || ""}
              onChange={(value) =>
                updateField("description", value)
              }
            />

            <Field
              label="Button Text"
              value={website.buttonText || ""}
              onChange={(value) =>
                updateField("buttonText", value)
              }
            />

            <TextAreaField
              label="About"
              value={website.about || ""}
              onChange={(value) =>
                updateField("about", value)
              }
            />

            <div className="space-y-3">
              <p className="text-xs font-medium text-gray-400">
                CTA
              </p>

              <Field
                label="Title"
                value={website.cta?.title || ""}
                onChange={(value) =>
                  updateCTA("title", value)
                }
              />

              <TextAreaField
                label="Description"
                value={website.cta?.description || ""}
                onChange={(value) =>
                  updateCTA("description", value)
                }
              />

              <Field
                label="Button"
                value={website.cta?.buttonText || ""}
                onChange={(value) =>
                  updateCTA("buttonText", value)
                }
              />
            </div>
          </div>
        )}
      </div>

      {/* SECTION BUILDER */}

      <div className="border-b border-white/10">
        <button
          onClick={() =>
            setOpenSection(
              openSection === "builder"
                ? ""
                : "builder",
            )
          }
          className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-medium"
        >
          <div>
            <span>Section Builder</span>

            <p className="mt-1 text-xs text-gray-500">
              Add, remove and reorder sections.
            </p>
          </div>

          <span className="text-gray-500">
            {openSection === "builder" ? "−" : "+"}
          </span>
        </button>

        {openSection === "builder" && (
          <div className="space-y-5 px-5 pb-5">
            {/* CURRENT SECTIONS */}

            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-500">
                Page Sections
              </p>

              <div className="space-y-2">
                {(website.sections || []).map(
                  (sectionName, index) => (
                    <div
                      key={`${sectionName}-${index}`}
                      className="rounded-xl border border-white/10 bg-white/[0.03] p-3"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex min-w-0 items-center gap-3">
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/10 text-xs font-semibold">
                            {index + 1}
                          </div>

                          <span className="truncate text-sm font-medium">
                            {sectionLabels[sectionName] ||
                              sectionName}
                          </span>
                        </div>

                        <button
                          onClick={() =>
                            deleteSection(index)
                          }
                          className="shrink-0 text-xs text-red-400 transition hover:text-red-300"
                          title="Delete section"
                        >
                          Delete
                        </button>
                      </div>

                      <div className="mt-3 grid grid-cols-3 gap-2">
                        <button
                          onClick={() =>
                            moveSection(index, -1)
                          }
                          disabled={index === 0}
                          className="rounded-lg border border-white/10 px-2 py-2 text-xs text-gray-400 transition hover:bg-white/5 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
                          title="Move up"
                        >
                          ↑
                        </button>

                        <button
                          onClick={() =>
                            duplicateSection(index)
                          }
                          className="rounded-lg border border-white/10 px-2 py-2 text-xs text-gray-400 transition hover:bg-white/5 hover:text-white"
                          title="Duplicate section"
                        >
                          Copy
                        </button>

                        <button
                          onClick={() =>
                            moveSection(index, 1)
                          }
                          disabled={
                            index ===
                            (website.sections || [])
                              .length -
                              1
                          }
                          className="rounded-lg border border-white/10 px-2 py-2 text-xs text-gray-400 transition hover:bg-white/5 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
                          title="Move down"
                        >
                          ↓
                        </button>
                      </div>
                    </div>
                  ),
                )}

                {(website.sections || []).length ===
                  0 && (
                  <div className="rounded-xl border border-dashed border-white/10 p-5 text-center">
                    <p className="text-sm text-gray-400">
                      No sections added.
                    </p>

                    <p className="mt-1 text-xs text-gray-600">
                      Add a section below.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* ADD SECTION */}

            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-500">
                Add Section
              </p>

              <div className="grid grid-cols-2 gap-2">
                {availableSections.map(
                  (sectionName) => {
                    const added =
                      isSectionAdded(sectionName);

                    return (
                      <button
                        key={sectionName}
                        onClick={() =>
                          !added &&
                          addSection(sectionName)
                        }
                        disabled={added}
                        className={`rounded-xl border px-3 py-3 text-left text-xs transition ${
                          added
                            ? "cursor-not-allowed border-white/5 bg-white/[0.02] text-gray-600"
                            : "border-white/10 bg-white/[0.03] text-gray-300 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span>
                            {sectionLabels[
                              sectionName
                            ]}
                          </span>

                          {added && (
                            <span className="text-xs">
                              ✓
                            </span>
                          )}
                        </div>
                      </button>
                    );
                  },
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* FEATURES */}

      {website.sections?.includes("features") && (
        <EditorGroup
          title="Features"
          openSection={openSection}
          setOpenSection={setOpenSection}
          id="features"
        >
          <div className="space-y-4">
            {(website.features || []).map(
              (feature, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <div className="space-y-3">
                    <Field
                      label="Icon"
                      value={feature.icon || ""}
                      onChange={(value) =>
                        updateFeature(
                          index,
                          "icon",
                          value,
                        )
                      }
                    />

                    <Field
                      label="Title"
                      value={feature.title || ""}
                      onChange={(value) =>
                        updateFeature(
                          index,
                          "title",
                          value,
                        )
                      }
                    />

                    <TextAreaField
                      label="Description"
                      value={
                        feature.description || ""
                      }
                      onChange={(value) =>
                        updateFeature(
                          index,
                          "description",
                          value,
                        )
                      }
                    />

                    <DeleteButton
                      onClick={() =>
                        deleteFeature(index)
                      }
                    />
                  </div>
                </div>
              ),
            )}

            <AddButton
              label="Add Feature"
              onClick={addFeature}
            />
          </div>
        </EditorGroup>
      )}

      {/* MENU */}

      {website.sections?.includes("menu") && (
        <EditorGroup
          title="Menu"
          openSection={openSection}
          setOpenSection={setOpenSection}
          id="menu"
        >
          <div className="space-y-4">
            {(website.menuItems || []).map(
              (item, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <div className="space-y-3">
                    <Field
                      label="Name"
                      value={item.name || ""}
                      onChange={(value) =>
                        updateMenuItem(
                          index,
                          "name",
                          value,
                        )
                      }
                    />

                    <TextAreaField
                      label="Description"
                      value={
                        item.description || ""
                      }
                      onChange={(value) =>
                        updateMenuItem(
                          index,
                          "description",
                          value,
                        )
                      }
                    />

                    <Field
                      label="Price"
                      value={item.price || ""}
                      onChange={(value) =>
                        updateMenuItem(
                          index,
                          "price",
                          value,
                        )
                      }
                    />

                    <DeleteButton
                      onClick={() =>
                        deleteMenuItem(index)
                      }
                    />
                  </div>
                </div>
              ),
            )}

            <AddButton
              label="Add Menu Item"
              onClick={addMenuItem}
            />
          </div>
        </EditorGroup>
      )}

      {/* GALLERY */}

      {website.sections?.includes("gallery") && (
        <EditorGroup
          title="Gallery"
          openSection={openSection}
          setOpenSection={setOpenSection}
          id="gallery"
        >
          <div className="space-y-4">
            {(website.galleryItems || []).map(
              (item, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <div className="space-y-3">
                    <Field
                      label="Image / Emoji"
                      value={item.image || ""}
                      onChange={(value) =>
                        updateGalleryItem(
                          index,
                          "image",
                          value,
                        )
                      }
                    />

                    <Field
                      label="Title"
                      value={item.title || ""}
                      onChange={(value) =>
                        updateGalleryItem(
                          index,
                          "title",
                          value,
                        )
                      }
                    />

                    <TextAreaField
                      label="Description"
                      value={
                        item.description || ""
                      }
                      onChange={(value) =>
                        updateGalleryItem(
                          index,
                          "description",
                          value,
                        )
                      }
                    />

                    <DeleteButton
                      onClick={() =>
                        deleteGalleryItem(index)
                      }
                    />
                  </div>
                </div>
              ),
            )}

            <AddButton
              label="Add Gallery Item"
              onClick={addGalleryItem}
            />
          </div>
        </EditorGroup>
      )}

      {/* PRICING */}

      {website.sections?.includes("pricing") && (
        <EditorGroup
          title="Pricing"
          openSection={openSection}
          setOpenSection={setOpenSection}
          id="pricing"
        >
          <div className="space-y-4">
            {(website.pricingPlans || []).map(
              (plan, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <div className="space-y-3">
                    <Field
                      label="Plan Name"
                      value={plan.name || ""}
                      onChange={(value) =>
                        updatePricingPlan(
                          index,
                          "name",
                          value,
                        )
                      }
                    />

                    <Field
                      label="Price"
                      value={plan.price || ""}
                      onChange={(value) =>
                        updatePricingPlan(
                          index,
                          "price",
                          value,
                        )
                      }
                    />

                    <TextAreaField
                      label="Description"
                      value={
                        plan.description || ""
                      }
                      onChange={(value) =>
                        updatePricingPlan(
                          index,
                          "description",
                          value,
                        )
                      }
                    />

                    <DeleteButton
                      onClick={() =>
                        deletePricingPlan(index)
                      }
                    />
                  </div>
                </div>
              ),
            )}

            <AddButton
              label="Add Pricing Plan"
              onClick={addPricingPlan}
            />
          </div>
        </EditorGroup>
      )}

      {/* PRODUCTS */}

      {website.sections?.includes("products") && (
        <EditorGroup
          title="Products"
          openSection={openSection}
          setOpenSection={setOpenSection}
          id="products"
        >
          <div className="space-y-4">
            {(website.products || []).map(
              (product, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <div className="space-y-3">
                    <Field
                      label="Image / Emoji"
                      value={product.image || ""}
                      onChange={(value) =>
                        updateProduct(
                          index,
                          "image",
                          value,
                        )
                      }
                    />

                    <Field
                      label="Name"
                      value={product.name || ""}
                      onChange={(value) =>
                        updateProduct(
                          index,
                          "name",
                          value,
                        )
                      }
                    />

                    <Field
                      label="Price"
                      value={product.price || ""}
                      onChange={(value) =>
                        updateProduct(
                          index,
                          "price",
                          value,
                        )
                      }
                    />

                    <TextAreaField
                      label="Description"
                      value={
                        product.description || ""
                      }
                      onChange={(value) =>
                        updateProduct(
                          index,
                          "description",
                          value,
                        )
                      }
                    />

                    <DeleteButton
                      onClick={() =>
                        deleteProduct(index)
                      }
                    />
                  </div>
                </div>
              ),
            )}

            <AddButton
              label="Add Product"
              onClick={addProduct}
            />
          </div>
        </EditorGroup>
      )}

      {/* HOW IT WORKS */}

      {website.sections?.includes("howItWorks") && (
        <EditorGroup
          title="How It Works"
          openSection={openSection}
          setOpenSection={setOpenSection}
          id="howItWorks"
        >
          <div className="space-y-4">
            {(website.howItWorksSteps || []).map(
              (step, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <div className="space-y-3">
                    <Field
                      label="Number"
                      value={step.number || ""}
                      onChange={(value) =>
                        updateHowItWorksStep(
                          index,
                          "number",
                          value,
                        )
                      }
                    />

                    <Field
                      label="Title"
                      value={step.title || ""}
                      onChange={(value) =>
                        updateHowItWorksStep(
                          index,
                          "title",
                          value,
                        )
                      }
                    />

                    <TextAreaField
                      label="Description"
                      value={
                        step.description || ""
                      }
                      onChange={(value) =>
                        updateHowItWorksStep(
                          index,
                          "description",
                          value,
                        )
                      }
                    />

                    <DeleteButton
                      onClick={() =>
                        deleteHowItWorksStep(index)
                      }
                    />
                  </div>
                </div>
              ),
            )}

            <AddButton
              label="Add Step"
              onClick={addHowItWorksStep}
            />
          </div>
        </EditorGroup>
      )}

      {/* TESTIMONIALS */}

      {website.sections?.includes("testimonials") && (
        <EditorGroup
          title="Testimonials"
          openSection={openSection}
          setOpenSection={setOpenSection}
          id="testimonials"
        >
          <div className="space-y-4">
            {(website.testimonials || []).map(
              (testimonial, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <div className="space-y-3">
                    <Field
                      label="Name"
                      value={testimonial.name || ""}
                      onChange={(value) =>
                        updateTestimonial(
                          index,
                          "name",
                          value,
                        )
                      }
                    />

                    <TextAreaField
                      label="Testimonial"
                      value={
                        testimonial.text || ""
                      }
                      onChange={(value) =>
                        updateTestimonial(
                          index,
                          "text",
                          value,
                        )
                      }
                    />

                    <DeleteButton
                      onClick={() =>
                        deleteTestimonial(index)
                      }
                    />
                  </div>
                </div>
              ),
            )}

            <AddButton
              label="Add Testimonial"
              onClick={addTestimonial}
            />
          </div>
        </EditorGroup>
      )}

      {/* THEME */}

      <EditorGroup
        title="Theme"
        openSection={openSection}
        setOpenSection={setOpenSection}
        id="theme"
      >
        <div className="space-y-4">
          <ColorField
            label="Background"
            value={website.theme?.background || "#ffffff"}
            onChange={(value) =>
              setWebsite((currentWebsite) => ({
                ...currentWebsite,
                theme: {
                  ...currentWebsite.theme,
                  background: value,
                },
              }))
            }
          />

          <ColorField
            label="Text"
            value={website.theme?.text || "#111111"}
            onChange={(value) =>
              setWebsite((currentWebsite) => ({
                ...currentWebsite,
                theme: {
                  ...currentWebsite.theme,
                  text: value,
                },
              }))
            }
          />

          <ColorField
            label="Button"
            value={website.theme?.button || "#111111"}
            onChange={(value) =>
              setWebsite((currentWebsite) => ({
                ...currentWebsite,
                theme: {
                  ...currentWebsite.theme,
                  button: value,
                },
              }))
            }
          />

          <ColorField
            label="Button Text"
            value={
              website.theme?.buttonText || "#ffffff"
            }
            onChange={(value) =>
              setWebsite((currentWebsite) => ({
                ...currentWebsite,
                theme: {
                  ...currentWebsite.theme,
                  buttonText: value,
                },
              }))
            }
          />
        </div>
      </EditorGroup>
    </div>
  );
}

/* -----------------------------
   REUSABLE UI
----------------------------- */

function EditorGroup({
  title,
  openSection,
  setOpenSection,
  id,
  children,
}) {
  const isOpen = openSection === id;

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() =>
          setOpenSection(isOpen ? "" : id)
        }
        className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-medium"
      >
        <span>{title}</span>

        <span className="text-gray-500">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {isOpen && (
        <div className="px-5 pb-5">
          {children}
        </div>
      )}
    </div>
  );
}

function Field({ label, value, onChange }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs text-gray-500">
        {label}
      </label>

      <input
        type="text"
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        className="w-full rounded-lg border border-white/10 bg-[#171717] px-3 py-2 text-sm text-white outline-none placeholder:text-gray-600 focus:border-white/30"
      />
    </div>
  );
}

function TextAreaField({
  label,
  value,
  onChange,
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs text-gray-500">
        {label}
      </label>

      <textarea
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        rows={3}
        className="w-full resize-none rounded-lg border border-white/10 bg-[#171717] px-3 py-2 text-sm text-white outline-none placeholder:text-gray-600 focus:border-white/30"
      />
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

function DeleteButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full rounded-lg border border-red-500/20 px-3 py-2 text-xs text-red-400 transition hover:bg-red-500/10"
    >
      Delete
    </button>
  );
}

function AddButton({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full rounded-lg border border-dashed border-white/15 px-3 py-2.5 text-xs font-medium text-gray-400 transition hover:border-white/30 hover:bg-white/5 hover:text-white"
    >
      + {label}
    </button>
  );
}

export default CustomizePanel;
