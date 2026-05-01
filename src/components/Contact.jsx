import { useState } from 'react';
import emailjs from '@emailjs/browser';

const initialForm = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus('missing');
      return;
    }

    try {
      await emailjs.send(serviceId, templateId, {
        from_name: form.name,
        reply_to: form.email,
        message: form.message,
      }, publicKey);

      setStatus('success');
      setForm(initialForm);
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-200">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="rounded-3xl bg-white p-10 shadow-xl">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Get in touch</p>
            <h2 className="mt-4 text-3xl font-bold text-slate-950">Contact Us</h2>
            <p className="mt-4 text-slate-600">
              Share your project details and we’ll help you bring luxury interior design to life.
            </p>
          </div>

          <form className="grid gap-6" onSubmit={handleSubmit}>
            <div className="grid gap-6 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition focus:border-slate-900"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition focus:border-slate-900"
              />
            </div>
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              required
              className="rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition focus:border-slate-900"
            />
            <button
              type="submit"
              className="rounded-2xl bg-slate-950 px-6 py-4 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-center text-sm text-slate-600">
            {status === 'success' && <p className="text-emerald-600">Message sent successfully.</p>}
            {status === 'error' && <p className="text-rose-600">Something went wrong. Please try again.</p>}
            {status === 'missing' && (
              <p className="text-amber-600">
                EmailJS keys are missing. Add `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY` to `.env`.
              </p>
            )}
            {!status && <p>Powered by EmailJS. Your message will be sent securely through the service.</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
