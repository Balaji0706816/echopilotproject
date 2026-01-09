'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Menu,
  X,
  Mic,
  ChevronRight,
  ChevronDown,
  Code,
  Users,
  Brain,
  Activity,
  Video,
  BookOpen,
  PlayCircle,
  FileText,
  Sparkles,
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/*                                    Data                                    */
/* -------------------------------------------------------------------------- */

type NavChild = {
  label: string;
  desc: string;
  href: string;
  icon: React.ElementType;
};

type NavItem = {
  label: string;
  href: string;
  children: NavChild[];
};

const NAV_ITEMS: NavItem[] = [
  {
    label: 'Practice',
    href: '#',
    children: [
      { label: 'Behavioral', desc: 'Master soft skills & STAR method', icon: Users, href: '#' },
      { label: 'Technical', desc: 'Coding challenges & algorithm prep', icon: Code, href: '#' },
      { label: 'System Design', desc: 'Architecture & scalability interviews', icon: Brain, href: '#' },
    ],
  },
  {
    label: 'Features',
    href: '#',
    children: [
      { label: 'Real-time Feedback', desc: 'Instant AI analysis of your answers', icon: Activity, href: '#' },
      { label: '3D Body Language', desc: 'Spatial tracking via MediaPipe', icon: Video, href: '#' },
      { label: 'Resume Analysis', desc: 'ATS optimization & keyword matching', icon: FileText, href: '#' },
    ],
  },
  {
    label: 'Library',
    href: '#',
    children: [
      { label: 'Question Bank', desc: '500+ top company questions', icon: BookOpen, href: '#' },
      { label: 'My Recordings', desc: 'Review your past sessions', icon: PlayCircle, href: '#' },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMobile, setActiveMobile] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  /* Lock scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const toggleMobile = (label: string) => {
    setActiveMobile((prev) => (prev === label ? null : label));
  };

  return (
    <>
      {/* ============================== NAVBAR ============================== */}
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-lg dark:border-white/10 dark:bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 font-bold tracking-tight text-slate-900 transition-transform hover:scale-105 dark:text-white"
            >
              <span className="rounded-xl bg-slate-900 p-2 text-white shadow-sm dark:bg-white dark:text-black">
                <Mic size={18} fill="currentColor" />
              </span>
              EchoPilot
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden h-full items-center md:flex">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="relative flex h-full items-center"
                  onMouseEnter={() => setHoveredItem(item.label)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <button
                    className={`flex cursor-pointer items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition
                      ${
                        hoveredItem === item.label
                          ? 'bg-slate-50 text-slate-900 dark:bg-white/10 dark:text-white'
                          : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                      }`}
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${
                        hoveredItem === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Dropdown */}
                  <div
                    className={`absolute left-1/2 top-full w-[320px] -translate-x-1/2 pt-4 transition-all
                      ${
                        hoveredItem === item.label
                          ? 'visible translate-y-0 opacity-100'
                          : 'invisible translate-y-2 opacity-0'
                      }`}
                  >
                    <div className="rounded-2xl border border-slate-100 bg-white p-2 shadow-xl dark:border-white/10 dark:bg-black">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="group flex gap-4 rounded-xl p-3 transition hover:bg-slate-50 dark:hover:bg-white/5"
                        >
                          <span className="mt-1 rounded-lg bg-slate-50 p-2 text-slate-600 transition group-hover:bg-white group-hover:text-blue-600 group-hover:shadow-sm dark:bg-white/10 dark:text-slate-300">
                            <child.icon size={18} />
                          </span>
                          <div>
                            <p className="text-sm font-semibold text-slate-900 transition group-hover:text-blue-600 dark:text-white">
                              {child.label}
                            </p>
                            <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                              {child.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden items-center gap-4 md:flex">
              <button className="text-sm font-medium cursor-pointer text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
                Log in
              </button>
              <button className="flex items-center gap-2 cursor-pointer rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white shadow-md transition hover:-translate-y-0.5 hover:bg-black hover:shadow-lg">
                <Sparkles size={16} />
                Start Mock Interview
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="p-2 text-slate-500 transition hover:text-slate-900 md:hidden dark:text-slate-300 dark:hover:text-white"
              aria-label="Open menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </nav>

      {/* =========================== MOBILE DRAWER =========================== */}
      <div className={`fixed inset-0 z-[60] md:hidden ${mobileOpen ? 'visible' : 'invisible'}`}>
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer */}
        <aside
          className={`absolute left-0 top-0 h-full w-[85%] max-w-[360px] bg-white shadow-2xl transition-transform dark:bg-black ${
            mobileOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Header */}
          <div className="flex h-20 items-center justify-between border-b px-6 dark:border-white/10">
            <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
              <span className="rounded-lg bg-slate-900 p-1.5 text-white dark:bg-white dark:text-black">
                <Mic size={16} fill="currentColor" />
              </span>
              EchoPilot
            </div>
            <button onClick={() => setMobileOpen(false)}>
              <X size={20} className="text-slate-500 dark:text-slate-300" />
            </button>
          </div>

          {/* Content */}
          <div className="flex h-full flex-col overflow-y-auto px-4 py-6">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="mb-2">
                <button
                  onClick={() => toggleMobile(item.label)}
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-slate-700 transition hover:bg-slate-50 dark:text-white dark:hover:bg-white/10"
                >
                  {item.label}
                  <ChevronRight
                    size={16}
                    className={`transition-transform ${
                      activeMobile === item.label ? 'rotate-90 text-blue-600' : 'text-slate-300'
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all ${
                    activeMobile === item.label ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-blue-400"
                    >
                      <child.icon size={18} className="opacity-70" />
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* CTA */}
            <div className="mt-auto pt-6">
              <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-3.5 font-semibold text-white shadow-lg transition hover:bg-black">
                <Sparkles size={18} />
                Start Mock Interview
              </button>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
