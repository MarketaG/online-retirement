export function FooterBottom() {
  const year = new Date().getFullYear();

  return (
    <div className="border-t border-gray-700 pt-8">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-gray-400 text-sm">
          © {year} Online Retirement. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm">
          {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="text-gray-400 hover:text-primary"
              >
                {item}
              </a>
            )
          )}
        </div>
      </div>
    </div>
  );
}
