import Link from "next/link";

export const metadata = {
  title: "Diversity & Inclusion – Godfrey Code",
  description: "Learn how Godfrey Code fosters an inclusive culture where everyone in tech can thrive.",
};

export default function DiversityPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 text-gray-200">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-indigo-400">Diversity & Inclusion</h1>
        <p className="text-lg text-indigo-100">
          At <strong>Godfrey Code</strong>, we believe technology should be built by and for everyone. Our commitment to diversity isn’t just a statement — it’s embedded in how we work, hire, and collaborate.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-indigo-300 mb-3">Our Commitment</h2>
        <ul className="list-disc list-inside space-y-2 text-indigo-100">
          <li>We actively recruit from underrepresented communities in tech.</li>
          <li>We create safe spaces where everyone feels heard and empowered.</li>
          <li>We challenge bias — in code, content, and communication.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-indigo-300 mb-3">Representation Matters</h2>
        <p className="text-indigo-100">
          Diverse teams build better products. That’s why we prioritize inclusive hiring practices and mentorship opportunities for developers from all walks of life.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-indigo-300 mb-3">How We’re Taking Action</h2>
        <ul className="list-disc list-inside space-y-2 text-indigo-100">
          <li>Hosting free community events and workshops.</li>
          <li>Partnering with tech communities that uplift marginalized voices.</li>
          <li>Investing in inclusive design and accessibility at every step.</li>
        </ul>
      </section>

      <div className="mt-12">
        <Link
          href="/careers"
          className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-md font-medium transition"
        >
          Join Our Team
        </Link>
      </div>
    </main>
  );
}
