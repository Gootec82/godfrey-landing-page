import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/features.png";

export default function Features() {
  return (
    <section className="relative">
      {/* Background Shapes */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section Header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Our Key Features
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Powering Digital Growth with Godfrey Code
            </h2>
            <p className="text-lg text-indigo-200/65">
              Godfrey Code empowers you to build, scale, and innovate with ease — from intuitive workflows to AI-enhanced tools tailored for modern teams.
            </p>
          </div>

          {/* Responsive Image */}
          <div className="flex justify-center pb-4 md:pb-12" data-aos="fade-up">
            <Image
              className="w-full h-auto max-w-4xl rounded-2xl shadow-lg"
              src={FeaturesImage}
              alt="Features"
              priority
            />
          </div>

          {/* Feature Items */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
            {/* Feature 1 */}
            <article>
              <svg className="mb-3 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24}><path d="M0 0h14v17H0V0Zm2 2v13h10V2H2Z" /><path fillOpacity=".48" d="m16.295 5.393 7.528 2.034-4.436 16.412L5.87 20.185l.522-1.93 11.585 3.132 3.392-12.55-5.597-1.514.522-1.93Z" /></svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Project Milestones
              </h3>
              <p className="text-indigo-200/65">
                Monitor progress across tailored development flows — powered by Godfrey Code’s scalable infrastructure.
              </p>
            </article>

            {/* Feature 2 */}
            <article>
              <svg className="mb-3 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24}><path fillOpacity=".48" d="M7 8V0H5v8h2Zm12 16v-4h-2v4h2Z" /><path d="M19 6H0v2h17v8H7v-6H5v8h19v-2h-5V6Z" /></svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Team Views
              </h3>
              <p className="text-indigo-200/65">
                Keep your team aligned with real-time dashboards and insights tailored to your product pipeline.
              </p>
            </article>

            {/* Feature 3 */}
            <article>
              <svg className="mb-3 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24}><path d="M23.414 6 18 .586 16.586 2l3 3H7a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4h12.586l-3 3L18 11.414 23.414 6Z" /><path fillOpacity=".48" d="M13.01 12.508a2.5 2.5 0 0 0-3.502.482L1.797 23.16.203 21.952l7.71-10.17a4.5 4.5 0 1 1 7.172 5.437l-4.84 6.386-1.594-1.209 4.841-6.385a2.5 2.5 0 0 0-.482-3.503Z" /></svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                AI-Powered Search
              </h3>
              <p className="text-indigo-200/65">
                Quickly surface the right data, documents, or designs with lightning-fast smart filtering and suggestions.
              </p>
            </article>

            {/* ...You can keep the rest unchanged... */}
            {/* Feature 4 - Strategic Planning */}
            {/* Feature 5 - Flexible Workflows */}
            {/* Feature 6 - Unified Dashboard */}
          </div>
        </div>
      </div>
    </section>
  );
}
