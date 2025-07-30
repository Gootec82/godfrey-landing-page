export const metadata = {
  title: "Learn - Godfrey Code",
  description: "Level up your skills with tutorials, courses, and guides from Godfrey Code.",
};

export default function LearnPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16 text-indigo-200">
      <h1 className="text-4xl font-bold text-white mb-6">Learn with Godfrey Code</h1>
      <p className="text-lg mb-6">
        Whether you're just getting started or looking to advance your skills, our learning resources are here to help you grow as a developer and digital creator.
      </p>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">📚 Popular Topics</h2>
          <ul className="list-disc list-inside text-indigo-300">
            <li>HTML, CSS, and JavaScript fundamentals</li>
            <li>React and Next.js projects</li>
            <li>Building modern, responsive UIs</li>
            <li>Connecting APIs and handling data</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">🛠 Hands-On Guides</h2>
          <ul className="list-disc list-inside text-indigo-300">
            <li>How to create a landing page from scratch</li>
            <li>Deploying your app with Vercel</li>
            <li>Creating a professional portfolio site</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">🎓 Upcoming Tutorials</h2>
          <ul className="list-disc list-inside text-indigo-300">
            <li>How to use Git and GitHub for version control</li>
            <li>SEO basics for developers</li>
            <li>Managing forms and submissions</li>
          </ul>
        </div>
      </div>

      <p className="mt-10">
        Want something specific? <a href="/contact" className="text-indigo-400 hover:underline">Reach out to request a tutorial</a>.
      </p>
    </section>
  );
}
