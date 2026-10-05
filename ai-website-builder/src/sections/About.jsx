function About({ website }) {
  return (
    <section
      id="about"
      className="@container px-5 py-16 sm:px-8 sm:py-20"
      style={{
        backgroundColor: website.theme.background,
        color: website.theme.text,
      }}
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-8 @[800px]:grid-cols-2 @[800px]:items-center @[800px]:gap-12">

          {/* HEADING */}
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-widest opacity-50 sm:text-sm">
              About
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight @[500px]:text-4xl">
              Built with purpose.
            </h2>
          </div>

          {/* DESCRIPTION */}
          <p className="min-w-0 text-base leading-relaxed opacity-60 @[500px]:text-lg">
            {website.about}
          </p>

        </div>
      </div>
    </section>
  );
}

export default About;