const portfolioItems = [
  {
    title: 'Modern Living Room',
    subtitle: 'Warm textures and refined neutrals',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Minimal Bedroom',
    subtitle: 'Calming layers with luxe details',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Signature Kitchen',
    subtitle: 'Smart layout meets elegant finishes',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Bold Entry',
    subtitle: 'A striking welcome statement',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=900&q=80',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Design Stories</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Our Work</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Discover finished interior spaces created for comfort, style and everyday living.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {portfolioItems.map((item, index) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-[2rem] bg-white shadow-xl transition-transform duration-500 hover:-translate-y-2"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                />
              </div>
              <div className="space-y-3 p-6">
                <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                <p className="text-slate-600">{item.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
