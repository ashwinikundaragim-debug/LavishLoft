import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <NavLink to="/" className="text-2xl font-serif font-bold tracking-tight text-slate-950">
          LavishLoft
        </NavLink>

        <button
          className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-sm md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          Menu
          <span>{open ? '✕' : '☰'}</span>
        </button>

        <div className={`hidden md:flex items-center gap-6 text-sm font-medium ${open ? 'block' : ''}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `transition ${isActive ? 'text-slate-950 font-semibold' : 'text-slate-700 hover:text-slate-900'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-slate-700 transition ${isActive ? 'font-semibold text-slate-950' : 'hover:text-slate-900'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
