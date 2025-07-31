import Link from "next/link";
import Image from "next/image";
import Logo from "./logo";
import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "rgba(235, 230, 220, 0.95)" }}>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>

        <div className="grid grid-cols-2 justify-between gap-12 py-8 sm:grid-rows-[auto_auto] md:grid-cols-4 md:grid-rows-[auto_auto] md:py-12 lg:grid-cols-[repeat(4,minmax(0,140px))_1fr] lg:grid-rows-1 xl:gap-20">
          {/* 1st block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-800">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/features" className="text-gray-600 hover:text-indigo-500">Features</Link></li>
              <li><Link href="/integrations" className="text-gray-600 hover:text-indigo-500">Integrations</Link></li>
              <li><Link href="/pricing" className="text-gray-600 hover:text-indigo-500">Pricing & Plans</Link></li>
              <li><Link href="/changelog" className="text-gray-600 hover:text-indigo-500">Changelog</Link></li>
              <li><Link href="/method" className="text-gray-600 hover:text-indigo-500">Our method</Link></li>
              <li><Link href="/user-policy" className="text-gray-600 hover:text-indigo-500">User policy</Link></li>
            </ul>
          </div>

          {/* 2nd block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-800">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about-us" className="text-gray-600 hover:text-indigo-500">About us</Link></li>
              <li><Link href="/diversity" className="text-gray-600 hover:text-indigo-500">Diversity & Inclusion</Link></li>
              <li><Link href="/blog" className="text-gray-600 hover:text-indigo-500">Blog</Link></li>
              <li><Link href="/careers" className="text-gray-600 hover:text-indigo-500">Careers</Link></li>
              <li><Link href="/financials" className="text-gray-600 hover:text-indigo-500">Financial statements</Link></li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-800">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/community" className="text-gray-600 hover:text-indigo-500">Community</Link></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-indigo-500">Terms of service</Link></li>
              <li><Link href="/report" className="text-gray-600 hover:text-indigo-500">Report a vulnerability</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-indigo-500">Contact</Link></li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-800">Content Library</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/templates" className="text-gray-600 hover:text-indigo-500">Templates</Link></li>
              <li><Link href="/tutorials" className="text-gray-600 hover:text-indigo-500">Tutorials</Link></li>
              <li><Link href="/knowledge" className="text-gray-600 hover:text-indigo-500">Knowledge base</Link></li>
              <li><Link href="/learn" className="text-gray-600 hover:text-indigo-500">Learn</Link></li>
              <li><Link href="/cookies" className="text-gray-600 hover:text-indigo-500">Cookie manager</Link></li>
            </ul>
          </div>

          {/* 5th block - Branding and social */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:text-right">
            <div className="mb-3">
              <Logo />
            </div>
            <div className="text-sm text-gray-600">
              <p className="mb-3">
                © Godfrey Code
                <span className="text-gray-400"> · </span>
                <Link href="/terms" className="hover:text-indigo-500">Terms</Link>
              </p>
              <ul className="inline-flex gap-2">
                <li><a href="https://x.com/flowbitweb" aria-label="X" target="_blank" rel="noopener noreferrer" className="transition hover:text-indigo-400"><i className="fab fa-x-twitter text-xl"></i></a></li>
                <li><a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="transition hover:text-indigo-400"><i className="fab fa-facebook text-xl"></i></a></li>
                <li><a href="https://instagram.com/flowbit.co" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="transition hover:text-indigo-400"><i className="fab fa-instagram text-xl"></i></a></li>
                <li><a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="transition hover:text-indigo-400"><i className="fab fa-linkedin text-xl"></i></a></li>
                <li><a href="https://github.com/gootec82" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="transition hover:text-indigo-400"><i className="fab fa-github text-xl"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
