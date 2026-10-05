function Footer({ website }) {
  return (
    <footer
      className="border-t px-8 py-8"
      style={{
        borderColor: `${website.theme.text}15`,
      }}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between">

        <p className="font-semibold">
          {website.brand}
        </p>

        <p className="text-sm opacity-50">
          © 2026 All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;