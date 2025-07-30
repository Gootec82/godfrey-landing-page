// app/thank-you/page.tsx
export default function ThankYouPage() {
  return (
    <section className="bg-gray-900 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-6">
          🎉 Thank You!
        </h1>
        <p className="text-gray-300 text-lg mb-4">
          Your message has been received. I’ll get back to you within 24 hours.
        </p>
        <p className="text-purple-400">
          Want to talk sooner? Reach out on WhatsApp or call directly!
        </p>
        <div className="mt-6">
          <a 
            href="/" 
            className="inline-block rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-white font-semibold hover:opacity-90"
          >
            ← Back to Homepage
          </a>
        </div>
      </div>
    </section>
  );
}
