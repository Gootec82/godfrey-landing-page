import Link from "next/link";

export const metadata = {
  title: "Careers - Godfrey Code",
  description: "Join the future of modern web development with Godfrey Code.",
};

export default function CareersPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16 text-indigo-200">
      <h1 className="text-4xl font-bold text-white mb-6">Careers at Godfrey Code</h1>
      <p className="text-lg mb-6">
        At Godfrey Code, we’re always open to connecting with talented and passionate people.
        While we don't have active openings at the moment, we’re constantly growing and exploring
        new ideas.
      </p>
      <p className="mb-6">
        If you believe you could bring value to our team and help us build exceptional web
        experiences, feel free to reach out. We’d love to hear from you.
      </p>
      <p className="mb-6">
        You can contact us via the <Link href="/contact" className="text-indigo-400 hover:underline">Contact</Link> page
        or send an email directly to <a href="mailto:hello@godfreycode.com" className="text-indigo-400 hover:underline">godfreyomoregie1@gmail.com</a>.
      </p>
      <p>
        Follow us on <a href="https://linkedin.com" className="text-indigo-400 hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a> for future updates.
      </p>
    </section>
  );
}
