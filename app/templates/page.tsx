export const metadata = {
  title: "Templates - Godfrey Code",
  description: "Browse ready-made templates for landing pages, business websites, blogs, and more.",
};

export default function TemplatesPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16 text-indigo-200">
      <h1 className="text-4xl font-bold text-white mb-6">Templates by Godfrey Code</h1>
      <p className="text-lg mb-4">
        Explore our collection of high-quality templates built for speed, responsiveness, and conversion. Perfect for businesses, startups, and creators.
      </p>
      <ul className="list-disc list-inside text-indigo-300 space-y-2">
        <li>Business Landing Page Template</li>
        <li>Tech Blog Template</li>
        <li>Portfolio Showcase Template</li>
        <li>E-commerce Product Page Template</li>
        <li>Coming Soon / Waitlist Template</li>
      </ul>
      <p className="mt-6">
        More templates coming soon. Need a custom design? <a href="/contact" className="text-indigo-400 hover:underline">Contact us</a>.
      </p>
    </section>
  );
}
