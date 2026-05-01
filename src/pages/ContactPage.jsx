import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <div className="space-y-16 pb-24">
      <section className="relative overflow-hidden bg-slate-950 text-white pt-28 pb-16">
        <div className="mx-auto max-w-6xl px-6 text-center sm:px-8">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-300">Connect with us</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Start your interior journey</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Tell us about your project and we’ll reach out with a tailored proposal and next steps.
          </p>
        </div>
      </section>

      <Contact />
    </div>
  );
}
