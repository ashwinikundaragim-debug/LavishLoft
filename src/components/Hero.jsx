import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-[url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center">
      <div className="flex min-h-screen items-center bg-slate-950/60 px-6 py-20 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-3xl rounded-3xl bg-white/90 p-8 shadow-2xl backdrop-blur-sm md:p-14"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-slate-500">Luxury Interior Design</p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl md:text-6xl">
            Where Luxury Meets Functionality
          </h1>
          <p className="mt-6 text-base leading-7 text-slate-700 sm:text-lg md:text-xl">
            Transform your home into a masterpiece with bespoke interiors, intelligent layouts and timeless finishes.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-8 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 sm:w-auto"
            >
              Get Started
            </a>
            <a
              href="#portfolio"
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-950 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100 sm:w-auto"
            >
              View Portfolio
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
