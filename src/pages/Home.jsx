import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />

      <section id="about" className="py-20 bg-slate-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-amber-500">About Us</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Creating interiors that feel luxurious and lived-in.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
                LavishLoft designs spaces with intention, balancing high-end finishes with thoughtful flow. Every project is tailored to your lifestyle, resulting in rooms that are both beautiful and functional.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-xl font-semibold text-slate-950">Custom concepts</h3>
                <p className="mt-4 text-slate-600">Bespoke designs that bring your vision to life with precision and polish.</p>
              </div>
              <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-xl font-semibold text-slate-950">Premium service</h3>
                <p className="mt-4 text-slate-600">A seamless design experience from first consultation to final installation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Services />
      <Portfolio />
      <Pricing />

      <section id="blogs" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-500">Blogs</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Design insights worth reading</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Stories, styling tips, and trend inspiration to help you create interiors that feel intentional and elevated.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: 'Styling small spaces',
                description: 'Learn how to maximize impact with thoughtful layouts and layered textures.',
              },
              {
                title: 'Choosing luxe finishes',
                description: 'A guide to selecting materials that add warmth, durability, and sophistication.',
              },
              {
                title: 'Creating inviting rooms',
                description: 'Design strategies to make every room feel welcoming and well-considered.',
              },
            ].map((post) => (
              <article key={post.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-950">{post.title}</h3>
                <p className="mt-4 text-slate-600 leading-7">{post.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
