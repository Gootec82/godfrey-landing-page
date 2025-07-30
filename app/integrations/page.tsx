import Link from "next/link";

export const metadata = {
  title: "Integrations – Godfrey Code",
  description: "Explore the tools and platforms Godfrey Code works seamlessly with.",
};

export default function IntegrationsPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Powerful Integrations</h1>
        <p className="text-indigo-200 text-lg">
          Godfrey Code connects with your favorite tools to boost productivity and streamline your workflow.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {integrations.map((integration) => (
          <div
            key={integration.name}
            className="bg-gray-900 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition"
          >
            <div className="mx-auto mb-4">{integration.logo}</div>
            <h3 className="text-xl font-semibold text-white">{integration.name}</h3>
            <p className="text-indigo-200 text-sm mt-2">{integration.description}</p>
            <Link
              href={integration.link}
              className="inline-block mt-4 text-indigo-400 hover:text-indigo-200 text-sm"
            >
              Learn more →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

const integrations = [
  {
    name: "Stripe",
    description: "Accept payments online with ease through Stripe’s secure platform.",
    link: "https://stripe.com",
    logo: (
      <svg width="60" height="40" viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="40" fill="#635BFF" rx="8" />
        <text
          x="50%"
          y="55%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="16"
          fontFamily="Arial"
          fill="#fff"
        >
          Stripe
        </text>
      </svg>
    ),
  },
  {
    name: "Google Analytics",
    description: "Track traffic and performance with insights from Google Analytics.",
    link: "https://analytics.google.com",
    logo: (
      <svg width="60" height="40" viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="40" fill="#F9AB00" rx="8" />
        <text
          x="50%"
          y="55%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="14"
          fontFamily="Arial"
          fill="#fff"
        >
          GA
        </text>
      </svg>
    ),
  },
  {
    name: "Zapier",
    description: "Automate workflows between your apps with powerful triggers and actions.",
    link: "https://zapier.com",
    logo: (
      <svg width="60" height="40" viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="40" fill="#FF4A00" rx="8" />
        <text
          x="50%"
          y="55%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="16"
          fontFamily="Arial"
          fill="#fff"
        >
          Zapier
        </text>
      </svg>
    ),
  },
];
