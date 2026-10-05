function HowItWorks({ website }) {
  const steps = website.howItWorksSteps || [];

  return (
    <section
      id="howItWorks"
      className="@container px-5 py-16 sm:px-8 sm:py-20"
      style={{
        backgroundColor: website.theme.background,
        color: website.theme.text,
      }}
    >
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-widest opacity-50 sm:text-sm">
          How It Works
        </p>

        <h2 className="mt-3 text-3xl font-bold leading-tight @[500px]:text-4xl">
          Simple Steps. Powerful Results.
        </h2>

        <div className="mt-8 grid gap-4 @[700px]:grid-cols-3 @[700px]:gap-5">
          {steps.map((step, index) => (
            <div
              key={`${step.title}-${index}`}
              className="rounded-2xl border p-5 @[500px]:p-6"
              style={{
                borderColor: `${website.theme.text}15`,
              }}
            >
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold"
                style={{
                  backgroundColor: website.theme.button,
                  color: website.theme.buttonText,
                }}
              >
                {step.number || index + 1}
              </div>

              <h3 className="mt-5 text-base font-semibold @[500px]:text-lg">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed opacity-60">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;