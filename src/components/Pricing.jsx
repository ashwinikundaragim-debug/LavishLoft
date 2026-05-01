const plans = [
  {
    name: 'Basic',
    description: 'Perfect for single-room refreshes.',
    price: '$1,200',
  },
  {
    name: 'Prime',
    description: 'A complete home interior solution.',
    price: '$4,500',
  },
  {
    name: 'Luxe',
    description: 'Full-service luxury design experience.',
    price: '$8,500',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Pricing</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Pricing Plans</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Choose a package tailored to your project size, style and timeline.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center shadow-sm sm:p-8">
              <h3 className="text-2xl font-semibold text-slate-950">{plan.name}</h3>
              <p className="mt-4 text-4xl font-bold tracking-tight text-slate-950">{plan.price}</p>
              <p className="mt-6 text-slate-600">{plan.description}</p>
              <button className="mt-8 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                Choose
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
