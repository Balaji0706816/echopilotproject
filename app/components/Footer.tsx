'use client';

import React from 'react';
import {
  Command,
  ArrowRight,
  Twitter,
  Linkedin,
  Github,
  ShieldCheck,
  Globe,
  Mic,
} from 'lucide-react';

const SOCIAL_LINKS = [
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Github, label: 'GitHub', href: '#' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#F3F5F8] pt-24 pb-12 font-sans dark:bg-black">
      {/* Top Fade */}
      {/* <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent dark:from-black" /> */}

      {/* Decorative Background */}
      <div className="pointer-events-none absolute inset-0">
        {/* <div className="absolute -top-[10%] -right-[5%] h-[500px] w-[500px] rounded-full bg-blue-100/50 blur-3xl" /> */}
        <div className="absolute -bottom-[10%] -left-[10%] h-[600px] w-[600px] rounded-full bg-purple-100/40 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* CTA Section */}
        <section className="mb-20 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="group relative overflow-hidden rounded-[40px] border border-white/50 bg-white/80 p-10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] backdrop-blur-md lg:col-span-7">
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 bg-gradient-to-tr from-transparent via-white/40 to-transparent" />

            <div className="relative z-10">
              <div className="mb-8 flex items-center gap-2">
                {/* <div className="rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 p-1.5 text-white">
                  <Mic size={20} fill="currentColor" />
                </div> */}
              </div>

              <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">
                Ready to upgrade your workflow?
              </h2>

              <p className="mb-8 max-w-md text-xl leading-relaxed text-gray-500">
                Join 10,000+ teams using Cluely to automate meeting notes and insights.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <button
                  className="flex items-center justify-center gap-2 rounded-full bg-[#1A1C20] px-8 py-3 text-lg font-medium text-white shadow-xl transition-all hover:-translate-y-1 hover:bg-black hover:shadow-2xl"
                  aria-label="Get started for free"
                >
                  Get Started Free <ArrowRight size={18} />
                </button>

                <button
                  className="rounded-full border border-gray-200 bg-white px-8 py-3 text-lg font-medium text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
                  aria-label="Book a demo"
                >
                  Book Demo
                </button>
              </div>
            </div>

            <Command
              className="absolute -bottom-10 -right-10 rotate-[-15deg] text-gray-100"
              size={240}
              strokeWidth={0.5}
            />
          </div>

          {/* Status & Review */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            {/* Status */}
            <div className="relative flex flex-1 flex-col justify-between overflow-hidden rounded-[40px] bg-[#1A1C20] p-8 text-white shadow-xl">
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-20 blur-2xl" />

              <div>
                <div className="mb-2 flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-wide text-green-400">
                    Operational
                  </span>
                </div>

                <h3 className="mb-1 text-2xl font-semibold">99.99% Uptime</h3>
                <p className="text-gray-400">Enterprise-grade reliability.</p>
              </div>

              <div className="mt-8 flex gap-3 opacity-50">
                <ShieldCheck size={28} />
                <Globe size={28} />
              </div>
            </div>

            {/* Review */}
            <div className="rounded-[40px] border border-gray-100 bg-white p-8 shadow-sm">
              <div className="mb-3 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-5 w-5 rounded-sm bg-yellow-400"
                    style={{
                      clipPath:
                        'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                    }}
                  />
                ))}
              </div>

              <p className="text-lg font-medium leading-snug text-gray-900">
                “The most impactful AI tool we’ve adopted this year.”
              </p>
            </div>
          </div>
        </section>

        {/* Links */}
        <section className="mb-16 grid grid-cols-2 gap-8 border-t border-gray-200 dark:border-white/10   pt-16 md:grid-cols-4 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center gap-2">
              <div className="rounded-lg bg-black p-1.5 text-white">
                <Mic size={20} fill="currentColor" />
              </div>
            </div>

            <p className="mb-6 text-gray-500 dark:text-white">
              Making meetings actionable, searchable, and useful for modern teams.
            </p>

            <div className="flex gap-4">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition hover:border-gray-400 hover:text-black"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {[
            ['Product', ['Features', 'Integrations', 'Pricing', 'Changelog']],
            ['Company', ['About', 'Careers', 'Blog', 'Contact']],
            ['Legal', ['Privacy', 'Terms', 'Security']],
          ].map(([title, links]) => (
            <div key={title as string}>
              <h4 className="mb-6 font-bold text-gray-900 dark:text-white">{title}</h4>
              <ul className="space-y-4 font-medium text-gray-500 dark:text-white">
                {(links as string[]).map((link) => (
                  <li key={link}>
                    <a href="#" className="transition hover:text-blue-600">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 dark:border-white/10   pt-8 text-center md:text-left">
          <p className="text-sm text-gray-400">
            © 2026 Echopi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
