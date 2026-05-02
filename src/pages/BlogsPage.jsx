export default function BlogsPage() {
  return (
    <div className="space-y-16 pb-24">
      <section className="relative overflow-hidden bg-slate-950 text-white pt-28 pb-16">
        <div className="mx-auto max-w-6xl px-6 text-center sm:px-8">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-300">Blogs</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Insights for inspired interiors</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Explore design trends, styling tips, and project stories that help you create a home that looks luxurious and feels livable.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid gap-6 py-16 lg:grid-cols-3">
          {['Styling small spaces', 'Choosing luxury finishes', 'Living room inspiration'].map((title) => (
            <article key={title} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm uppercase tracking-[0.35em] text-amber-500">Interior guide</p>
              <h2 className="mt-4 text-xl font-semibold text-slate-950">{title}</h2>
              <p className="mt-3 text-slate-600 leading-7">
                Practical guidance for designing beautiful rooms with a polished, luxury feel.
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
