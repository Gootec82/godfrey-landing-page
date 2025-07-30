import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";

export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              We Build Modern Web Experiences That Convert
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-indigo-200/70"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                We help businesses grow online with powerful landing pages, custom web apps, and blogs website— crafted using modern frameworks like React & Next.js.
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group mb-4 w-full bg-gradient-to-t from-indigo-600 to-indigo-500 text-white shadow hover:bg-indigo-700 sm:mb-0 sm:w-auto"
                    href="/contact"
                  >
                    <span className="relative inline-flex items-center">
                      Get Free Quote
                      <span className="ml-1 text-white/70 transition-transform group-hover:translate-x-0.5">
                        →
                      </span>
                    </span>
                  </a>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    className="btn relative w-full border border-indigo-400/30 bg-gray-800 text-gray-200 hover:border-indigo-500 hover:text-white sm:ml-4 sm:w-auto"
                    href="#Home Page"
                  >
                    View Portfolio
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Modal video */}
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1104}
            thumbHeight={576}
            thumbAlt="Hero video thumbnail showcasing client work"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          />
        </div>
      </div>
    </section>
  );
}
