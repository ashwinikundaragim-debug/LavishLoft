import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Home', to: '#home' },
  { label: 'About Us', to: '#about' },
  { label: 'Service', to: '#services' },
  { label: 'Portfolio', to: '#portfolio' },
  { label: 'Pricing Plans', to: '#pricing', hasDropdown: true },
  { label: 'Blogs', to: '#blogs' },
  { label: 'Contact Us', to: '#contact' },
];

const socialLinks = [
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.2v-2.9h2.2V9.5c0-2.2 1.3-3.4 3.3-3.4.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.3v1.6h2.3l-.4 2.9h-1.9v7A10 10 0 0 0 22 12Z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7Zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10Zm-5 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Zm0 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm4.7-2a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M10 15l5.2-3L10 9v6Zm10-4.4c0-1.2-.1-2.2-.3-3.1-.2-.9-.8-1.6-1.7-1.9C16.9 5.3 12 5.3 12 5.3s-4.9 0-6 0c-.9.1-1.5 0-1.7.2-.9.3-1.5 1-1.7 1.9A21.6 21.6 0 0 0 2 10.6C2 11.8 2 13.3 2 13.3s0 1.5.1 2.7c.1 1.2.4 1.9.7 2.3.3.4 1 .8 1.9 1 1 .2 5.8.2 5.8.2s4.9 0 6 0c.9-.1 1.5-.3 1.7-.5.9-.3 1.5-.8 1.7-1.7.2-.8.3-1.8.3-3.1v-1.7Z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm.02 6.5H2v12h3V10Zm7.5 0h-2.9v12h2.9v-6.5c0-3.5 4.1-3.8 4.1 0V22h2.9v-7.3c0-6.7-7.2-6.5-7.2 0V10Z" />
      </svg>
    ),
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.to.replace('#', ''));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length === 0) return;

        const topSection = visibleEntries.reduce((closest, entry) => {
          return entry.boundingClientRect.top < closest.boundingClientRect.top ? entry : closest;
        });

        setActiveSection(topSection.target.id);
      },
      {
        root: null,
        rootMargin: '-35% 0px -55% 0px',
        threshold: 0.15,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-6">
        <a href="/" className="inline-flex items-center gap-3 text-base font-semibold tracking-tight text-slate-950 md:text-lg">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-amber-400 text-slate-950">
            L
          </span>
          <span className="leading-tight">
            Lavish<span className="text-amber-400">Loft</span>
          </span>
        </a>

        <div className="hidden md:flex md:items-center md:gap-10">
          {navItems.map((item) => {
            const section = item.to.replace('#', '');
            const isActive = activeSection === section;

            return (
              <a
                key={item.to}
                href={item.to}
                className={`group inline-flex flex-col items-center gap-1 text-sm font-medium transition ${
                  isActive ? 'text-slate-950 font-semibold' : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                <span>{item.label}</span>
                {item.hasDropdown && (
                  <svg viewBox="0 0 10 6" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                )}
                {isActive && (
                  <span className="mt-1 h-1.5 w-8 rounded-full bg-amber-400 transition-all duration-300 ease-out animate-slide-in-left group-hover:w-10 group-hover:bg-amber-500" />
                )}
              </a>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <button
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? 'Close' : 'Menu'}
          <span className="text-xl">{open ? '✕' : '☰'}</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-5 pb-6 md:hidden">
          <div className="space-y-3 pt-4">
            {navItems.map((item) => {
              const section = item.to.replace('#', '');
              const isActive = activeSection === section;
              return (
                <a
                  key={item.to}
                  href={item.to}
                  onClick={() => setOpen(false)}
                  className={`group block rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? 'bg-slate-100 text-slate-950'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-950'
                  }`}
                >
                  <span className="flex items-center justify-between gap-2">
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="h-1.5 w-8 rounded-full bg-amber-400 transition-all duration-300 ease-out animate-slide-in-left group-hover:w-10 group-hover:bg-amber-500" />
                    )}
                  </span>
                </a>
              );
            })}
          </div>

          <div className="mt-5 flex items-center gap-3 rounded-3xl bg-slate-50 p-4">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-700 transition hover:bg-white hover:text-slate-950"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
