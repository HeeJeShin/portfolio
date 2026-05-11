const items = [
  { label: "Email", value: "heeheehee.hj@gmail.com", href: "mailto:heeheehee.hj@gmail.com" },
  { label: "Phone", value: "010-2390-2038" },
  { label: "GitHub", value: "github.com/HeeJeShin", href: "https://github.com/HeeJeShin" },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="mb-16 scroll-mt-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
        연락처
      </h2>
      <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {items.map((item) => (
            <div key={item.label}>
              <p className="text-xs text-gray-500 mb-1">{item.label}</p>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-blue-600 hover:underline break-all"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-sm font-medium text-gray-900">{item.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
