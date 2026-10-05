function Testimonials({ website }) {
  return (
    <section
      id="testimonials"
      className="@container px-5 py-16 sm:px-8 sm:py-20"
      style={{
        backgroundColor: website.theme.background,
        color: website.theme.text,
      }}
    >
      <div className="mx-auto max-w-5xl">

        {/* HEADING */}
        <p className="text-xs font-semibold uppercase tracking-widest opacity-50 sm:text-sm">
          Testimonials
        </p>

        {/* TESTIMONIALS */}
        <div className="mt-8 grid gap-4 @[700px]:grid-cols-2 @[700px]:gap-5">

          {website.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-0 rounded-2xl border p-5 @[500px]:p-6"
              style={{
                borderColor: `${website.theme.text}15`,
              }}
            >
              <p className="text-sm leading-relaxed opacity-70 @[500px]:text-base">
                "{testimonial.text}"
              </p>

              <div className="mt-5 text-sm font-semibold @[500px]:text-base">
                {testimonial.name}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;