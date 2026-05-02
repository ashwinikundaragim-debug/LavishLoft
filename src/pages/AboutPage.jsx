export default function AboutPage() {
  return (
    <div className="space-y-16 pb-24">
      <section className="relative overflow-hidden bg-slate-950 text-white pt-28 pb-16">
        <div className="mx-auto max-w-6xl px-6 text-center sm:px-8">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-300">About Us</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Our Story — A Legacy of Design, Trust & Innovation</h1>
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
              At <b>Lavish Loft Interiors</b>, we believe that every space tells a story. Our mission is to transform ordinary spaces into extraordinary environments that reflect your personality, enhance your lifestyle, and inspire creativity.
            Founded by a team of passionate designers and spatial thinkers, <b>Lavish Loft Interiors</b> blends functionality with aesthetics to create interiors that are both beautiful and practical. Whether it's residential, commercial, or hospitality design, we bring a keen eye for detail and a deep understanding of client needs to every project we undertake.
            With a legacy of over 22 years in the interior design industry, Lavish Loft Interiors has been delivering customized modular solutions that meet the diverse needs of our clients. Serving over 1800+ Projects satisfied customers across Telangana and Andhra Pradesh, we have built a strong reputation for transforming spaces with an unparalleled blend of quality, innovation, and style. 
            From basic interiors to luxurious, high-end designs, we specialize in crafting customized solutions for a wide range of spaces, including offices, hospitals, apartments, independent homes, commercial spaces, and more. Whether it's creating functional workspaces or designing elegant living environments, we offer designs that are tailored to meet the unique requirements of each client. 
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
