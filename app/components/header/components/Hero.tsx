'use client';

import React, { useState } from 'react';
import { ArrowRight, Video, Mic } from 'lucide-react';
import VideoCallAssistantOverlay from './VideoCallAssistantOverlay';

/* -------------------------------------------------------------------------- */
/*                                   Config                                   */
/* -------------------------------------------------------------------------- */

const BRANDS = [
  { name: 'ElevenLabs', style: 'underline decoration-blue-500/30 underline-offset-4' },
  { name: 'MediaPipe', style: '' },
  { name: 'Google Gemini', style: '' },
  { name: 'Three.js', style: '' },
];

/* -------------------------------------------------------------------------- */
/*                                   Hero                                     */
/* -------------------------------------------------------------------------- */

export default function Hero() {
  const [topic, setTopic] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen bg-white dark:bg-black font-sans pt-24 pb-24 lg:pt-48 lg:pb-32 overflow-hidden selection:bg-blue-100 selection:text-blue-900">

      {/* Ambient Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 h-[600px] w-[600px] rounded-full bg-blue-50/50 blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-slate-50 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl text-center">

          {/* Status Badge */}
          <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-black/20 bg-slate-50 px-4 py-2 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black/20 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-black/20" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-tight text-slate-600">
              v2.0 — MediaPipe 3D Spatial Tracking
            </span>
            <ArrowRight size={14} className="text-slate-400" />
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-3xl md:text-5xl font-semibold tracking-tighter leading-[1.1] text-slate-900 dark:text-white">
            Master Interviews with AI.
          </h1>

          <p className="mx-auto mb-12 max-w-2xl text-lg md:text-xl font-medium tracking-tight text-slate-500 dark:text-slate-300">
            Practice with lifelike 3D mentors. ElevenLabs-powered voice AI and
            MediaPipe tracking deliver real-time performance analytics.
          </p>

          {/* CTA Row */}
          <div className="mb-20 flex flex-col items-center justify-center gap-4 sm:flex-row">

            {/* Primary CTA */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="group relative inline-flex cursor-pointer items-center justify-center rounded-2xl bg-slate-900 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
            >
              <span className="flex items-center gap-3  ">
                Start Preparation Session
                <ArrowRight className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-white" />
              </span>
            </button>

            {/* Secondary CTA */}
            <button
              className="group inline-flex cursor-pointer items-center gap-3 rounded-2xl border border-gray-200 bg-white px-8 py-3 font-semibold text-gray-900 shadow-sm transition-all hover:bg-gray-50 hover:shadow-md active:scale-[0.98]"
            >
              <Video size={20} strokeWidth={2.5} />
              Initialize Interviewer Mode
            </button>
          </div>

<div className=' w-full pb-20'>
<VideoCallAssistantOverlay />
</div>

    {/* Dark Mode Toggle */}
          {/* Quick Start Input */}
          <div className="mx-auto mb-16 max-w-xl">
            <div className="relative flex items-center rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-200/40">
              <Mic className="ml-4 text-slate-400" size={20} />
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="E.g. Senior Software Engineer at Google…"
                className="flex-1 bg-transparent px-4 py-3 font-medium tracking-tight text-slate-900 placeholder:text-slate-400 focus:outline-none"
                aria-label="Interview role or topic"
              />
              <button
                className="rounded-xl bg-slate-900 cursor-pointer px-6 py-3 font-bold text-white transition hover:bg-slate-800 active:scale-95"
                aria-label="Quick start"
              >
                Quick Start
              </button>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="border-t dark:border-white/10 border-slate-100 pt-12">
            <p className="mb-8 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
              Engineered with Industry Standards
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60 transition-opacity hover:opacity-100">
              {BRANDS.map((brand) => (
                <span
                  key={brand.name}
                  className={`font-mono text-sm md:text-base font-bold tracking-tighter text-slate-700 ${brand.style}`}
                >
                  {brand.name}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};


