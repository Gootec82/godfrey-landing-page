export const metadata = {
  title: "Tutorials - Godfrey Code",
  description: "Step-by-step tutorials on web development, landing pages, React, and more by Godfrey Code.",
};

export default function TutorialsPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16 text-indigo-200">
      <h1 className="text-4xl font-bold text-white mb-6">Tutorials</h1>
      <p className="text-lg mb-4">
        Learn how to build modern, professional websites with our in-depth tutorials. Whether you're a beginner or an advanced developer, there's something here for you.
      </p>
      <ul className="list-disc list-inside text-indigo-300 space-y-2">
        <li>Creating high-converting landing pages</li>
        <li>Responsive design techniques</li>
        <li>Integrating contact forms with backend</li>
        <li>Deploying your project to production</li>
        <li>SEO and performance best practices</li>
      </ul>
      <p className="mt-6">
        More tutorials coming soon. For questions or suggestions, <a href="/contact" className="text-indigo-400 hover:underline">reach out here</a>.
      </p>
    </section>
  );
}
