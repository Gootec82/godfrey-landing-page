'use client';

import Image from "next/image";
import Link from "next/link";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Cta() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Shape */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Decorative background shape"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-transparent via-gray-800/50 to-transparent py-12 md:py-20 rounded-2xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-8 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
              data-aos="fade-up"
            >
              Start Building With Godfrey Code Today
            </h2>
            <p
              className="text-indigo-200/70 text-lg mb-8"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              Launch faster, grow smarter, and stay ahead of the curve with our expertly built landing pages, blogs, and modern web apps.
            </p>

            {/* CTA Buttons */}
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center gap-4">
              <Link
                href="/contact"
                className="btn group mb-4 w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
              >
                <span className="relative inline-flex items-center">
                  Start Building
                  <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                    -&gt;
                  </span>
                </span>
              </Link>

              <div data-aos="fade-up" data-aos-delay={600}>
                <a
                  className="btn relative w-full text-gray-300 bg-gray-800/60 backdrop-blur-md hover:backdrop-blur-lg before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:bg-gradient-to-r before:from-gray-800 before:via-gray-700 before:to-gray-800 hover:bg-gray-800 sm:w-auto"
                  href="#contact"
                >
                  Schedule Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
