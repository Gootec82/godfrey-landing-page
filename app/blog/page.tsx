export const metadata = {
  title: "Blog - Godfrey Code",
  description: "Explore insights, tutorials, and updates from the Godfrey Code team.",
};

export default function BlogPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16 text-indigo-200">
      <h1 className="text-4xl font-bold text-white mb-6">DevBlog by Godfrey Code</h1>
      <p className="text-lg mb-6">
        Welcome to our blog where we share tutorials, case studies, and insights on building
        modern web applications, high-converting landing pages, and developer tools.
      </p>
      <p className="mb-4">
        We're working on content that delivers real value — whether you're a small business
        owner looking to grow online or a developer learning new skills.
      </p>
      <p>
        Check back soon for fresh posts. Until then, explore our <a href="/templates" className="text-indigo-400 hover:underline">Templates</a> and <a href="/tutorials" className="text-indigo-400 hover:underline">Tutorials</a>.
      </p>
    </section>
  );
}
