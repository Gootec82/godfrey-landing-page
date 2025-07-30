export const metadata = {
  title: "Our Method - Godfrey Code",
  description: "Discover how we build results-driven websites and applications with a clear, client-focused process.",
};

export default function MethodPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16 text-indigo-200">
      <h1 className="text-4xl font-bold text-white mb-6">Our Method</h1>
      <p className="text-lg mb-6">
        At Godfrey Code, we don’t just build websites — we craft digital experiences that drive growth.
        Our process is centered around clarity, speed, and results.
      </p>

      <div className="space-y-10">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">🔍 Discovery</h2>
          <p className="text-indigo-300">
            We begin by understanding your goals, audience, and the problems you want to solve. This
            step ensures that what we build is aligned with your business objectives.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">🎨 Design</h2>
          <p className="text-indigo-300">
            Using your brand as a guide, we create clean, modern, and responsive designs. Every element
            is intentional and optimized for conversion.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">⚙️ Development</h2>
          <p className="text-indigo-300">
            We build fast, SEO-friendly websites using modern tech like React, Next.js, and clean CSS.
            Your site will perform well on all devices and browsers.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">🚀 Launch & Support</h2>
          <p className="text-indigo-300">
            We deploy your site and provide post-launch support, helping you stay on top of performance,
            updates, and improvements.
          </p>
        </div>
      </div>

      <p className="mt-10">
        Ready to get started? <a href="/contact" className="text-indigo-400 hover:underline">Contact us today</a>.
      </p>
    </section>
  );
}
