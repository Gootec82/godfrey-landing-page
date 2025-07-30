"use client";

import { useState, useRef, useEffect } from "react";
import type { StaticImageData } from "next/image";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import Image from "next/image";
import SecondaryIllustration from "@/public/images/secondary-illustration.svg";

interface ModalVideoProps {
  thumb: StaticImageData;
  thumbWidth: number;
  thumbHeight: number;
  thumbAlt: string;
  video: string;
  videoWidth: number;
  videoHeight: number;
}

export default function ModalVideo({
  thumb,
  thumbWidth,
  thumbHeight,
  thumbAlt,
  video,
  videoWidth,
  videoHeight,
}: ModalVideoProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!modalOpen && videoRef.current) {
      videoRef.current.pause();
    }
  }, [modalOpen]);

  return (
    <div className="relative">
      {/* Decorative Illustration */}
      <div
        className="pointer-events-none absolute bottom-8 left-1/2 -z-10 -ml-28 -translate-x-1/2 translate-y-1/2"
        aria-hidden="true"
      >
        <Image
          className="md:max-w-none"
          src={SecondaryIllustration}
          width={1165}
          height={1012}
          alt="Background decorative illustration"
          loading="lazy"
        />
      </div>

      {/* Video thumbnail button */}
      <button
        className="group relative flex items-center justify-center rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
        onClick={() => setModalOpen(true)}
        aria-label="Play demo video"
        data-aos="fade-up"
        data-aos-delay={200}
      >
        <figure className="relative overflow-hidden rounded-2xl before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br before:from-gray-900 before:via-indigo-500/20 before:to-gray-900">
          <Image
            className="opacity-50 grayscale"
            src={thumb}
            width={thumbWidth}
            height={thumbHeight}
            alt={thumbAlt}
            priority
          />
        </figure>
        <span className="pointer-events-none absolute p-2.5 before:absolute before:inset-0 before:rounded-full before:bg-gray-950 before:duration-300 group-hover:before:scale-110">
          <span className="relative flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              fill="none"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fill="url(#playGradient)"
                fillRule="evenodd"
                d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Zm3.5-10-5-3.5v7l5-3.5Z"
                clipRule="evenodd"
              />
              <defs>
                <linearGradient
                  id="playGradient"
                  x1={10}
                  x2={10}
                  y1={0}
                  y2={20}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#6366F1" />
                  <stop offset={1} stopColor="#6366F1" stopOpacity=".72" />
                </linearGradient>
              </defs>
            </svg>
            <span className="text-sm font-medium leading-tight text-gray-300">
              Watch Demo <span className="text-gray-500">·</span> 3:47
            </span>
          </span>
        </span>
      </button>

      {/* Modal Dialog */}
      <Dialog
        initialFocus={videoRef}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      >
        <DialogBackdrop className="fixed inset-0 z-50 bg-black/70 transition-opacity duration-300 ease-out data-closed:opacity-0" />

        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:px-6">
          <DialogPanel className="aspect-video max-h-full w-full max-w-5xl overflow-hidden rounded-2xl bg-black shadow-2xl transition-all duration-300 ease-out data-closed:scale-95 data-closed:opacity-0">
            <video
              ref={videoRef}
              width={videoWidth}
              height={videoHeight}
              loop
              controls
              autoPlay
              className="w-full h-full"
            >
              <source src="videos/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
}
