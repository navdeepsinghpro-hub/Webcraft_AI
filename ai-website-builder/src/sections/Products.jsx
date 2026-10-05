function Products({ website }) {
  const products = website.products || [];

  return (
    <section
      id="products"
      className="@container px-5 py-16 sm:px-8 sm:py-20"
      style={{
        backgroundColor: website.theme.background,
        color: website.theme.text,
      }}
    >
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-widest opacity-50 sm:text-sm">
          Collection
        </p>

        <h2 className="mt-3 text-3xl font-bold leading-tight @[500px]:text-4xl">
          Featured Products
        </h2>

        <div className="mt-8 grid gap-4 @[700px]:grid-cols-2 @[1000px]:grid-cols-3 @[700px]:gap-5">
          {products.map((product, index) => (
            <div
              key={`${product.name}-${index}`}
              className="min-w-0 overflow-hidden rounded-2xl border"
              style={{
                borderColor: `${website.theme.text}15`,
              }}
            >
              <div
                className="flex aspect-[4/3] items-center justify-center text-4xl"
                style={{
                  backgroundColor: `${website.theme.text}08`,
                }}
              >
                {product.image || "✦"}
              </div>

              <div className="p-5 @[500px]:p-6">
                <h3 className="text-base font-semibold @[500px]:text-lg">
                  {product.name}
                </h3>

                <p className="mt-3 text-sm leading-relaxed opacity-60">
                  {product.description}
                </p>

                <div className="mt-5 flex items-center justify-between gap-3">
                  <p
                    className="text-lg font-bold @[500px]:text-xl"
                    style={{
                      color: website.theme.button,
                    }}
                  >
                    {product.price}
                  </p>

                  <button
                    className="rounded-xl px-4 py-2 text-sm font-medium"
                    style={{
                      backgroundColor: website.theme.button,
                      color: website.theme.buttonText,
                    }}
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;