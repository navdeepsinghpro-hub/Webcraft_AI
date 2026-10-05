function Features({ website }) {
  return (
    <section
      id="features"
      className="@container px-5 py-16 sm:px-8 sm:py-20"
      style={{
        backgroundColor: website.theme.background,
        color: website.theme.text,
      }}
    >
      <div className="mx-auto max-w-5xl">

        {/* HEADING */}
        <div className="mb-10 @[500px]:mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest opacity-50 sm:text-sm">
            Features
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight @[500px]:text-4xl">
            Everything you need
          </h2>
        </div>

        {/* FEATURES */}
        <div className="grid gap-4 @[700px]:grid-cols-2 @[1000px]:grid-cols-3">

          {website.features.map((feature, index) => (
            <div
              key={index}
              className="min-w-0 rounded-2xl border p-5 @[500px]:p-6"
              style={{
                borderColor: `${website.theme.text}15`,
              }}
            >
              <div className="mb-4 text-2xl @[500px]:mb-5">
                {feature.icon}
              </div>

              <h3 className="text-base font-semibold @[500px]:text-lg">
                {feature.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed opacity-60">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;