"use client";
import { useState, useTransition } from "react";
import { submitContact } from "@/app/actions/contact";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "", company: "", designation: "", email: "", phone: "",
    team: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const formData = new FormData(e.currentTarget);
    startTransition(async () => {
      const result = await submitContact(formData);
      if (result.status === "success") setSubmitted(true);
      else setError(result.message);
    });
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-10">

          {/* Left — contact info */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold text-[#292929] mb-3">
              QUICKLY CONTACT US
            </h2>
            <p className="text-[#54595F] text-sm leading-relaxed mb-6">
              Give us a call or drop by anytime, we endeavor to answer all inquiries within 24 hours on business days.
            </p>

            <h3 className="text-sm font-semibold text-[#292929] mb-4">
              For Demonstration, Sales &amp; Support, contact us at
            </h3>

            {/* Phone */}
            <div className="flex items-start gap-3 mb-3">
              <div className="w-9 h-9 rounded bg-[#D9FFDE] flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-[#0B7F3B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="text-sm text-[#54595F]">
                <p>+91 882 639 0074</p>
                <p>0124 400 5408</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3 mb-3">
              <div className="w-9 h-9 rounded bg-[#D9FFDE] flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-[#0B7F3B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-sm text-[#54595F] mt-2">sales@greenwatt.co.in</p>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3 mb-6">
              <div className="w-9 h-9 rounded bg-[#D9FFDE] flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-[#0B7F3B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="text-sm text-[#54595F]">
                <p className="font-semibold text-[#292929]">Greenwatt Global Ventures PVT. LTD</p>
                <p>Palam vihar, gurugram-122017, haryana</p>
              </div>
            </div>

            <p className="text-xs text-[#54595F] italic">
              We are open from 09:30 am – 6:30pm on week days.
            </p>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3 bg-[#f9fafb] rounded-xl p-8 border border-gray-100">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-12">
                <div className="w-14 h-14 rounded-full bg-[#0B7F3B] flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#292929]">Message Sent!</h3>
                <p className="text-[#54595F] text-sm text-center max-w-xs">
                  Thank you for contacting Greenwatt. Our team will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setError(null); setForm({ name: "", company: "", designation: "", email: "", phone: "", team: "", message: "" }); }}
                  className="mt-2 px-6 py-2.5 bg-[#0B7F3B] text-white text-sm font-semibold rounded hover:bg-[#027D32] transition-colors"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded px-3 py-2">
                    {error}
                  </p>
                )}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#292929] mb-1.5">Your Name <span className="text-red-500">*</span></label>
                    <input type="text" name="name" value={form.name} onChange={set} required
                      className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#0B7F3B] focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#292929] mb-1.5">Company</label>
                    <input type="text" name="company" value={form.company} onChange={set}
                      className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#0B7F3B] focus:border-transparent" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#292929] mb-1.5">Designation</label>
                    <input type="text" name="designation" value={form.designation} onChange={set}
                      className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#0B7F3B] focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#292929] mb-1.5">Your Email <span className="text-red-500">*</span></label>
                    <input type="email" name="email" value={form.email} onChange={set} required
                      className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#0B7F3B] focus:border-transparent" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#292929] mb-1.5">Phone</label>
                    <input type="tel" name="phone" value={form.phone} onChange={set}
                      className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#0B7F3B] focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#292929] mb-1.5">Team to contact</label>
                    <div className="flex flex-wrap gap-3 pt-1">
                      {["Sales", "Support", "Demo"].map((t) => (
                        <label key={t} className="flex items-center gap-1.5 text-sm text-[#54595F] cursor-pointer">
                          <input type="radio" name="team" value={t}
                            checked={form.team === t}
                            onChange={(e) => setForm({ ...form, team: e.target.value })}
                            className="accent-[#0B7F3B]" />
                          {t}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#292929] mb-1.5">Your Message</label>
                  <textarea name="message" value={form.message} onChange={set} rows={4}
                    className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#0B7F3B] focus:border-transparent resize-none" />
                </div>
                <button type="submit" disabled={isPending}
                  className="w-full py-3 bg-[#0B7F3B] text-white font-bold text-sm uppercase tracking-wider rounded hover:bg-[#027D32] transition-colors shadow-sm disabled:opacity-60 disabled:cursor-not-allowed">
                  {isPending ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
