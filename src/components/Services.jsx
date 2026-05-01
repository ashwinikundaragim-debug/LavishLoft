import { motion } from 'framer-motion';

const services = [
  'Space Planning',
  'Furniture Design',
  'Lighting Design',
  '3D Visualization',
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Our Expertise</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Our Services</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Curated design services for sophisticated interiors that balance beauty, function and comfort.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8"
            >
              <h3 className="text-xl font-semibold text-slate-950">{service}</h3>
              <p className="mt-3 text-slate-600">
                Thoughtful design, elegant materials, and expert execution for every space.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
