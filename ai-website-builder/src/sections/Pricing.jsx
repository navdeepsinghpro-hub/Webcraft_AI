function Pricing({ website }) {
  const plans = website.pricingPlans || [];

  return (
    <section
      id="pricing"
      className="@container px-5 py-16 sm:px-8 sm:py-20"
      style={{
        backgroundColor: website.theme.background,
        color: website.theme.text,
      }}
    >
      <div className="mx-auto max-w-5xl">
        {/* HEADING */}

        <p className="text-xs font-semibold uppercase tracking-widest opacity-50 sm:text-sm">
          Pricing
        </p>

        <h2 className="mt-3 text-3xl font-bold leading-tight @[500px]:text-4xl">
          Choose Your Plan
        </h2>

        {/* PRICING PLANS */}

        <div className="mt-8 grid gap-4 @[700px]:grid-cols-2 @[1000px]:grid-cols-3 @[700px]:gap-5">
          {plans.map((plan, index) => (
            <div
              key={`${plan.name}-${index}`}
              className="min-w-0 rounded-2xl border p-5 @[500px]:p-6"
              style={{
                borderColor: `${website.theme.text}15`,
              }}
            >
              <h3 className="text-base font-semibold @[500px]:text-lg">
                {plan.name}
              </h3>

              <p
                className="mt-4 text-3xl font-bold @[500px]:text-4xl"
                style={{
                  color: website.theme.button,
                }}
              >
                {plan.price}
              </p>

              <p className="mt-3 text-sm leading-relaxed opacity-60">
                {plan.description}
              </p>

              <button
                className="mt-6 w-full rounded-xl px-4 py-3 text-sm font-medium"
                style={{
                  backgroundColor: website.theme.button,
                  color: website.theme.buttonText,
                }}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;