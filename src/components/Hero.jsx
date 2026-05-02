import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const heroSlides = [
  'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=80',
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    const nextIndex = (index + heroSlides.length) % heroSlides.length;
    setCurrentIndex(nextIndex);
  };

  const goPrev = () => goToSlide(currentIndex - 1);
  const goNext = () => goToSlide(currentIndex + 1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="flex h-full w-[400%] transition-transform duration-1000 ease-out"
          style={{ transform: `translateX(-${currentIndex * 25}%)` }}
        >
          {heroSlides.map((slide) => (
            <div
              key={slide}
              className="h-full w-full flex-shrink-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide})` }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-slate-950/60" />
      </div>

      <div className="relative flex min-h-screen items-center px-6 py-20 md:px-12">
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

      <div className="absolute inset-x-0 bottom-8 flex items-center justify-center gap-4 px-6 md:bottom-10 md:px-12">
        <button
          type="button"
          onClick={goPrev}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-white/20 text-white transition hover:bg-white/40"
          aria-label="Previous slide"
        >
          ‹
        </button>

        <div className="flex items-center gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goToSlide(index)}
              className={`h-3.5 rounded-full transition-all duration-300 ${
                currentIndex === index ? 'w-10 bg-amber-400' : 'w-3.5 bg-white/70 hover:bg-white'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={goNext}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-white/20 text-white transition hover:bg-white/40"
          aria-label="Next slide"
        >
          ›
        </button>
      </div>
    </section>
  );
}
