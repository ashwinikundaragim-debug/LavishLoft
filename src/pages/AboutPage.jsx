export default function AboutPage() {
  return (
    <div className="space-y-16 pb-24">
      <section className="relative overflow-hidden bg-slate-950 text-white pt-28 pb-16">
        <div className="mx-auto max-w-6xl px-6 text-center sm:px-8">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-300">About Us</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Design with thoughtful luxury at every turn</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            We bring beautiful spaces to life through expert planning, premium materials, and a personalized approach.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid gap-8 py-16 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold text-slate-950">Our story</h2>
            <p className="mt-4 text-slate-600 leading-8">
              LavishLoft combines modern aesthetics with timeless comfort. Our team partners with clients to create interiors that feel indulgent, practical, and unmistakably unique.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold text-slate-950">What we do</h2>
            <p className="mt-4 text-slate-600 leading-8">
              From concept development to final installation, we manage every detail so you can enjoy a finished space that truly reflects your lifestyle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
