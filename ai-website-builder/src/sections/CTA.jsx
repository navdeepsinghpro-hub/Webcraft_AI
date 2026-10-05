function CTA({ website }) {
  return (
    <section
      id="cta"
      className="@container px-5 py-16 sm:px-8 sm:py-20"
      style={{
        backgroundColor: website.theme.background,
        color: website.theme.text,
      }}
    >
      <div
        className="mx-auto max-w-5xl rounded-3xl border p-6 text-center sm:p-10 @[700px]:p-14"
        style={{
          borderColor: `${website.theme.text}15`,
          backgroundColor: `${website.theme.text}05`,
        }}
      >
        <p className="text-xs font-semibold uppercase tracking-widest opacity-50 sm:text-sm">
          Get Started
        </p>

        <h2 className="mt-3 text-3xl font-bold leading-tight @[500px]:text-4xl @[800px]:text-5xl">
          {website.cta?.title || "Ready to Get Started?"}
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed opacity-60 @[600px]:text-base">
          {website.cta?.description ||
            "Let's build something amazing together."}
        </p>

        <button
          className="mt-7 rounded-xl px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-80"
          style={{
            backgroundColor: website.theme.button,
            color: website.theme.buttonText,
          }}
        >
          {website.cta?.buttonText ||
            website.buttonText ||
            "Get Started"}
        </button>
      </div>
    </section>
  );
}

export default CTA;