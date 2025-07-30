export const metadata = {
  title: "Knowledge Base - Godfrey Code",
  description: "Explore answers to common questions and technical topics in our knowledge base.",
};

export default function KnowledgeBasePage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16 text-indigo-200">
      <h1 className="text-4xl font-bold text-white mb-6">Knowledge Base</h1>
      <p className="text-lg mb-6">
        Welcome to the Godfrey Code Knowledge Base — your go-to resource for quick answers, best practices, and essential coding information.
      </p>

      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">Getting Started</h2>
          <ul className="list-disc list-inside text-indigo-300">
            <li>How to set up your development environment</li>
            <li>Understanding the file structure of a modern web project</li>
            <li>Common tools and plugins for developers</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">Troubleshooting</h2>
          <ul className="list-disc list-inside text-indigo-300">
            <li>Fixing responsive design issues</li>
            <li>Handling deployment errors</li>
            <li>Dealing with 404 pages and broken links</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">Advanced Topics</h2>
          <ul className="list-disc list-inside text-indigo-300">
            <li>Integrating third-party APIs</li>
            <li>SEO optimization for Next.js apps</li>
            <li>Server-side rendering vs static generation</li>
          </ul>
        </div>
      </div>

      <p className="mt-8">
        Can’t find what you’re looking for? <a href="/contact" className="text-indigo-400 hover:underline">Get in touch with us</a>.
      </p>
    </section>
  );
}
