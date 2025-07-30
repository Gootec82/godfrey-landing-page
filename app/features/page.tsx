export const metadata = {
  title: "Features – Godfrey Code",
  description: "Discover the key features that make Godfrey Code the perfect choice for your digital needs.",
};

export default function FeaturesPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Our Powerful Features</h1>
        <p className="text-indigo-200 text-lg">
          Everything you need to grow online — packed into one modern web solution.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-gray-900 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition"
          >
            <div className="mx-auto mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
            <p className="text-indigo-200 text-sm mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const features = [
  {
    title: "Custom Web Apps",
    description: "We build scalable, secure, and fast web applications tailored to your business needs.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
        <path d="M3 4h18v2H3V4zm0 5h12v2H3V9zm0 5h18v2H3v-2zm0 5h12v2H3v-2z" fill="#4F46E5" />
      </svg>
    ),
  },
  {
    title: "SEO Optimization",
    description: "Built-in SEO best practices to help your website rank higher and attract more traffic.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 4a8 8 0 100 16 8 8 0 000-16zm1 11h-2v-2h2v2zm0-4h-2V7h2v4z"
          fill="#10B981"
        />
      </svg>
    ),
  },
  {
    title: "Fast Deployment",
    description: "Launch your product or site faster with clean code and modern tools.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
        <path
          d="M5 13l4 4L19 7"
          stroke="#F59E0B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Responsive Design",
    description: "Your site looks great on all screen sizes — from phones to desktops.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="14" rx="2" fill="#3B82F6" />
        <path d="M7 21h10v-2H7v2z" fill="#3B82F6" />
      </svg>
    ),
  },
  {
    title: "Blog Integration",
    description: "Built-in blogging system to publish articles, updates, and content with ease.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 5h16M4 10h16M4 15h10"
          stroke="#EC4899"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Client Dashboard",
    description: "Optional client dashboards for managing data, reports, and content.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 4h16v16H4V4zm8 8h8v8H12v-8z"
          fill="#8B5CF6"
        />
      </svg>
    ),
  },
];
