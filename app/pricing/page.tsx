import Link from "next/link";

export default function Pricing() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h1>
        <p className="text-indigo-200 max-w-2xl mx-auto">
          Choose a plan that suits your business needs. No hidden fees, cancel anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Starter Plan */}
        <div className="bg-gray-900 border border-indigo-500 p-8 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2 text-white">Starter</h2>
          <p className="text-indigo-200 mb-4">Ideal for individuals and simple projects.</p>
          <div className="text-3xl font-bold mb-4 text-white">$0</div>
          <ul className="text-sm text-indigo-100 space-y-2 mb-6">
            <li>✓ 1 Landing Page</li>
            <li>✓ Basic SEO Optimization</li>
            <li>✓ Email Support</li>
            <li>✓ No custom backend</li>
          </ul>
          <Link href="/contact" className="block text-center bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">Get Started</Link>
        </div>

        {/* Professional Plan */}
        <div className="bg-indigo-800 border-2 border-indigo-400 p-8 rounded-lg shadow-xl relative">
          <div className="absolute top-0 right-0 bg-indigo-500 text-xs font-semibold px-3 py-1 rounded-bl text-white">Most Popular</div>
          <h2 className="text-xl font-semibold mb-2 text-white">Professional</h2>
          <p className="text-indigo-100 mb-4">Perfect for startups and growing brands.</p>
          <div className="text-3xl font-bold mb-4 text-white">$49</div>
          <ul className="text-sm text-indigo-100 space-y-2 mb-6">
            <li>✓ Up to 3 Pages</li>
            <li>✓ Responsive Design</li>
            <li>✓ Google Analytics Setup</li>
            <li>✓ Contact Form + Validation</li>
            <li>✓ Priority Email Support</li>
          </ul>
          <Link href="/contact" className="block text-center bg-white text-indigo-700 font-semibold py-2 rounded hover:bg-gray-100 transition">Choose Plan</Link>
        </div>

        {/* Business Plan */}
        <div className="bg-gray-900 border border-indigo-500 p-8 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2 text-white">Business</h2>
          <p className="text-indigo-200 mb-4">Best for growing businesses needing full solutions.</p>
          <div className="text-3xl font-bold mb-4 text-white">$99+</div>
          <ul className="text-sm text-indigo-100 space-y-2 mb-6">
            <li>✓ Full Landing Page Suite</li>
            <li>✓ Custom Design & Animations</li>
            <li>✓ Blog or CMS Integration</li>
            <li>✓ Advanced SEO & Analytics</li>
            <li>✓ Tool Integration (Email, Payment, etc.)</li>
          </ul>
          <Link href="/contact" className="block text-center bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">Request Quote</Link>
        </div>
      </div>
    </section>
  );
}
