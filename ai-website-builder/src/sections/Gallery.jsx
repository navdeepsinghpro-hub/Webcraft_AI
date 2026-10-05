function Gallery({ website }) {
  const theme = website?.theme || {
    background: "#ffffff",
    text: "#111111",
  };
  const galleryItems = website?.galleryItems || [];

  const renderGalleryImage = (item) => {
    const imageValue = typeof item?.image === "string" ? item.image.trim() : "";
    const isImageUrl =
      imageValue !== "" &&
      /^(https?:\/\/|\/|data:image\/)/i.test(imageValue);

    if (isImageUrl) {
      return (
        <img
          src={imageValue}
          alt={item?.title || "Gallery item"}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          loading="lazy"
        />
      );
    }

    return (
      <div className="flex h-full w-full items-center justify-center text-5xl">
        {imageValue || "✦"}
      </div>
    );
  };

  return (
    <section
      id="gallery"
      className="@container px-5 py-16 sm:px-8 sm:py-20"
      style={{
        backgroundColor: theme.background,
        color: theme.text,
      }}
    >
      <div className="mx-auto max-w-5xl">
        {/* Section Heading */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest opacity-50 sm:text-sm">
            Gallery
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight @[500px]:text-4xl">
            Explore Our World
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed opacity-60 @[600px]:text-base">
            Take a closer look at our work, products and experiences.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="mt-8 grid gap-4 @[600px]:grid-cols-2 @[900px]:grid-cols-3 @[600px]:gap-5">
          {galleryItems.map((item, index) => (
            <div
              key={`${item?.title || "gallery-item"}-${index}`}
              className="group overflow-hidden rounded-2xl border"
              style={{
                borderColor: `${theme.text}15`,
              }}
            >
              {/* Image Area */}
              <div
                className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-transparent transition-transform duration-300"
                style={{
                  backgroundColor: `${theme.text}08`,
                }}
              >
                {renderGalleryImage(item)}
              </div>

              {/* Content */}
              <div className="p-5 @[500px]:p-6">
                <h3 className="text-base font-semibold @[500px]:text-lg">
                  {item?.title || "Gallery Item"}
                </h3>

                <p className="mt-2 text-sm leading-relaxed opacity-60">
                  {item?.description ||
                    "A beautiful part of our collection."}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {galleryItems.length === 0 && (
          <div
            className="mt-8 rounded-2xl border border-dashed p-10 text-center"
            style={{
              borderColor: `${theme.text}20`,
            }}
          >
            <div className="text-3xl">🖼️</div>

            <p className="mt-3 text-sm font-medium">
              No gallery items yet
            </p>

            <p className="mt-1 text-sm opacity-50">
              Add gallery items from the Customize panel.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Gallery;
