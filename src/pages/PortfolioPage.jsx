import Portfolio from '../components/Portfolio';

export default function PortfolioPage() {
  return (
    <div className="space-y-16 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 to-slate-800 text-white pt-28 pb-16">
        <div className="mx-auto max-w-6xl px-6 text-center sm:px-8">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-300">Curated Interiors</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">A portfolio of refined spaces</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Explore projects that blend materials, light, and spatial intelligence for homes, kitchens, and living areas.
          </p>
        </div>
      </section>

      <Portfolio />
    </div>
  );
}
