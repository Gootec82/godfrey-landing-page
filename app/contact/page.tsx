'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    const formData = new FormData(e.target as HTMLFormElement);

    try {
      const response = await fetch('https://formspree.io/f/xkgzbvoa', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      const result = await response.json();

      if (response.ok && result.ok !== false) {
        (e.target as HTMLFormElement).reset();
        window.location.href = '/thank-you'; // ✅ Redirect to Thank You page
      } else {
        console.error('Formspree error:', result);
        setStatus('error');
      }
    } catch (err) {
      console.error('Network error:', err);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="bg-gray-900 min-h-screen">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Header */}
          <div className="pb-12 text-center">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--tw-gradient-stops))] from-purple-400 via-pink-500 to-red-500 bg-[length:200%_auto] bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
              Let's Build Something Amazing
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              I specialize in React, Next.js, and modern web development
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mx-auto max-w-[500px]">
            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-purple-200">
                  Your Name
                </label>
                <input
                  name="name"
                  type="text"
                  className="w-full rounded-lg bg-gray-800 px-4 py-3 text-white focus:ring-2 focus:ring-purple-500"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-purple-200">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  className="w-full rounded-lg bg-gray-800 px-4 py-3 text-white focus:ring-2 focus:ring-purple-500"
                  placeholder="you@company.com"
                  required
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-purple-200">
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="tel"
                  className="w-full rounded-lg bg-gray-800 px-4 py-3 text-white focus:ring-2 focus:ring-purple-500"
                  placeholder="+234 812 345 6789"
                  required
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-purple-200">
                  Project Budget
                </label>
                <select 
                  name="budget" 
                  className="w-full rounded-lg bg-gray-800 px-4 py-3 text-white focus:ring-2 focus:ring-purple-500"
                  required
                >
                  <option value="">Select your budget</option>
  <option value="less-500">$0 – $500</option>
  <option value="500-2000">$500 – $2,000</option>
  <option value="2000-5000">$2,000 – $5,000</option>
  <option value="custom">Custom budget</option>
                </select>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-purple-200">
                  Project Details
                </label>
                <textarea
                  name="message"
                  rows={5}
                  className="w-full rounded-lg bg-gray-800 px-4 py-3 text-white focus:ring-2 focus:ring-purple-500"
                  placeholder="Tell me about your project needs, timeline, and goals..."
                  required
                />
              </div>

              {/* Feedback messages */}
              {status === 'success' && (
                <div className="rounded-lg bg-green-900/50 p-3 text-center text-green-300">
                  ✅ Thank you! I'll respond within 24 hours.
                </div>
              )}
              {status === 'error' && (
                <div className="rounded-lg bg-red-900/50 p-3 text-center text-red-300">
                  ❌ Message failed. Please email me directly at <strong>socialgo70@gmail.com</strong>
                </div>
              )}

              {/* Submit button */}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full rounded-lg py-3 font-medium text-white transition-all ${
                  isSubmitting 
                    ? 'bg-gray-600 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Get Free Quote'}
              </button>
            </div>
          </form>

          {/* WhatsApp Button */}
          <div className="mt-8 text-center">
            <a
              href="https://wa.me/2349012466301"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-500 transition-all"
            >
              💬 Message Me on WhatsApp
            </a>
          </div>

          {/* Back link */}
          <div className="mt-12 text-center">
            <Link 
              href="/" 
              className="inline-flex items-center text-purple-400 hover:text-purple-300"
            >
              ← Back to Home Page
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
