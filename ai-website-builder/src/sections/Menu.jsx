function Menu({ website }) {
  const menuItems = website.menuItems || [];

  return (
    <section
      id="menu"
      className="@container px-5 py-16 sm:px-8 sm:py-20"
      style={{
        backgroundColor: website.theme.background,
        color: website.theme.text,
      }}
    >
      <div className="mx-auto max-w-5xl">
        {/* HEADING */}
        <p className="text-xs font-semibold uppercase tracking-widest opacity-50 sm:text-sm">
          Menu
        </p>

        <h2 className="mt-3 text-3xl font-bold leading-tight @[500px]:text-4xl">
          Our Signature Dishes
        </h2>

        {/* MENU ITEMS */}
        <div className="mt-8 grid gap-4 @[700px]:grid-cols-2 @[1000px]:grid-cols-3 @[700px]:gap-5">
          {menuItems.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="min-w-0 rounded-2xl border p-5 @[500px]:p-6"
              style={{
                borderColor: `${website.theme.text}15`,
              }}
            >
              <h3 className="text-base font-semibold @[500px]:text-lg">
                {item.name}
              </h3>

              <p className="mt-3 text-sm leading-relaxed opacity-60">
                {item.description}
              </p>

              <p
                className="mt-5 text-lg font-bold @[500px]:mt-6 @[500px]:text-xl"
                style={{
                  color: website.theme.button,
                }}
              >
                {item.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;