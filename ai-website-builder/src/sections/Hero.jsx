function Hero({ website }) {
  const layout = website.heroLayout || "centered";

  if (layout === "split") {
    return (
      <section
        id="home"
        className="@container px-5 py-16 sm:px-8 sm:py-20"
        style={{
          backgroundColor: website.theme.background,
          color: website.theme.text,
        }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-10 @[800px]:grid @[800px]:grid-cols-2 @[800px]:items-center @[800px]:gap-12">

            {/* TEXT */}
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-widest opacity-50 sm:text-sm">
                {website.brand}
              </p>

              <h1 className="mt-4 max-w-full text-3xl font-bold leading-[1.1] @[500px]:text-4xl @[800px]:text-6xl">
                {website.title}
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed opacity-60 sm:text-lg">
                {website.description}
              </p>

              <button
                className="mt-7 rounded-xl px-5 py-3 text-sm font-semibold sm:px-6 sm:text-base"
                style={{
                  backgroundColor: website.theme.button,
                  color: website.theme.buttonText,
                }}
              >
                {website.buttonText}
              </button>
            </div>

            {/* VISUAL */}
            <div
              className="flex min-h-[260px] w-full items-center justify-center rounded-3xl border sm:min-h-[360px]"
              style={{
                borderColor: `${website.theme.text}15`,
                backgroundColor: `${website.theme.text}05`,
              }}
            >
              <span className="text-6xl opacity-20 sm:text-7xl">
                ✦
              </span>
            </div>

          </div>
        </div>
      </section>
    );
  }

  if (layout === "product") {
    return (
      <section
        id="home"
        className="@container px-5 py-16 sm:px-8 sm:py-20"
        style={{
          backgroundColor: website.theme.background,
          color: website.theme.text,
        }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-10 @[800px]:grid @[800px]:grid-cols-2 @[800px]:items-center @[800px]:gap-12">

            {/* TEXT */}
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-widest opacity-50 sm:text-sm">
                {website.brand}
              </p>

              <h1 className="mt-4 max-w-full text-3xl font-bold leading-[1.1] @[500px]:text-4xl @[800px]:text-6xl">
                {website.title}
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed opacity-60 sm:text-lg">
                {website.description}
              </p>

              <button
                className="mt-7 rounded-xl px-5 py-3 text-sm font-semibold sm:px-6 sm:text-base"
                style={{
                  backgroundColor: website.theme.button,
                  color: website.theme.buttonText,
                }}
              >
                {website.buttonText}
              </button>
            </div>

            {/* PRODUCT VISUAL */}
            <div
              className="flex aspect-[4/5] w-full items-center justify-center rounded-3xl border text-7xl sm:text-8xl"
              style={{
                borderColor: `${website.theme.text}15`,
                backgroundColor: `${website.theme.text}05`,
              }}
            >
              ✦
            </div>

          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="home"
      className="@container flex min-h-[500px] items-center justify-center px-5 py-16 text-center sm:min-h-[520px] sm:px-8 sm:py-20"
      style={{
        backgroundColor: website.theme.background,
        color: website.theme.text,
      }}
    >
      <div className="w-full max-w-4xl min-w-0">
        <p className="text-xs font-semibold uppercase tracking-widest opacity-50 sm:text-sm">
          {website.brand}
        </p>

        <h1 className="mx-auto mt-4 max-w-full text-3xl font-bold leading-[1.1] @[500px]:text-4xl @[800px]:text-7xl">
          {website.title}
        </h1>

        <p className="mx-auto mt-5 max-w-[330px] text-base leading-relaxed opacity-60 @[500px]:max-w-2xl @[500px]:text-lg">
          {website.description}
        </p>

        <button
          className="mt-7 rounded-xl px-5 py-3 text-sm font-semibold sm:mt-8 sm:px-6 sm:text-base"
          style={{
            backgroundColor: website.theme.button,
            color: website.theme.buttonText,
          }}
        >
          {website.buttonText}
        </button>
      </div>
    </section>
  );
}

export default Hero;