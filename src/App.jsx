import React, { useState } from "react";
import {
  Phone,
  ShieldCheck,
  Clock,
  MapPin,
  Star,
  Wrench,
  Droplets,
  Truck,
  CheckCircle2,
  Camera,
  Construction,
  Waves,
} from "lucide-react";
import { motion } from "framer-motion";

export default function App() {
  const phone = "779-221-7536";
  const phoneHref = "tel:+17792217536";
  const textHref = "sms:+17792217536";
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const lead = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      address: formData.get("address"),
      service: formData.get("service"),
      message: formData.get("message"),
      source: "815 Septic Guy Website",
    };

    try {
      await fetch("/api/send-lead-text", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Lead text failed", error);
      setSubmitted(true);
    }
  };

  return (
    <main className="min-h-screen bg-stone-50 pb-24 text-stone-900 md:pb-0">
      <section className="relative overflow-hidden bg-stone-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(132,204,22,.28),transparent_28%),linear-gradient(120deg,rgba(0,0,0,.95),rgba(20,24,18,.92),rgba(0,0,0,.98))]" />
        <div className="absolute inset-x-0 top-0 h-1 bg-lime-400" />

        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex items-center justify-center gap-3 border-b border-white/10 py-3 text-xs font-black uppercase tracking-widest text-stone-300 md:justify-between">
            <span className="hidden items-center gap-2 md:inline-flex">
              <Clock className="h-4 w-4 text-lime-300" /> 24/7 Emergency Service
            </span>
            <span>Licensed · Insured · Family Owned & Operated</span>
            <span className="hidden items-center gap-2 md:inline-flex">
              <MapPin className="h-4 w-4 text-lime-300" /> Machesney Park, IL
            </span>
          </div>

          <header className="flex items-center justify-between gap-4 py-5">
            <div className="flex items-center gap-4">

<div className="rounded-2xl bg-transparent p-0">
  <img 
    src="/images/logo-clean.png" 
    alt="815 Septic Guy Logo" 
    className="h-16 w-auto md:h-20 invert brightness-0" 
  />
</div>              

              <div className="hidden sm:block">
                <p className="text-xl font-black tracking-tight">815 Septic Guy</p>
                <p className="text-sm text-stone-300">Septic Pumping & Repair</p>
              </div>
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <a href="#services" className="font-bold text-stone-200 transition hover:text-lime-300">
                Services
              </a>
              <a href="#gallery" className="font-bold text-stone-200 transition hover:text-lime-300">
                Real Work
              </a>
              <a href="#reviews" className="font-bold text-stone-200 transition hover:text-lime-300">
                Reviews
              </a>
              <a href="#request-service" className="font-bold text-stone-200 transition hover:text-lime-300">
                Request
              </a>
              <a href={textHref} className="rounded-full border border-white/20 px-5 py-3 font-black text-white transition hover:bg-white/10">
                Text
              </a>
              <a href={phoneHref} className="rounded-full bg-lime-400 px-5 py-3 font-black text-stone-950 shadow-lg shadow-lime-400/20 transition hover:bg-lime-300">
                Call {phone}
              </a>
            </div>
          </header>

          <div className="grid gap-10 pb-16 pt-8 md:grid-cols-[1.05fr_.95fr] md:pb-24 md:pt-14">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center"
            >
              <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-lime-300/30 bg-lime-300/10 px-4 py-2 text-sm font-bold text-lime-100 backdrop-blur">
                <ShieldCheck className="h-4 w-4 text-lime-300" /> 18 years experience · Straight answers · Fair service
              </div>
              <h1 className="max-w-3xl text-5xl font-black leading-[.95] tracking-tight md:text-7xl">
                Your neighborhood septic expert.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-200 md:text-xl">
                Septic pumping, repairs, troubleshooting, pump alarms, backups, and 24/7 emergency service across the 815 area.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={phoneHref} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-lime-400 px-7 py-4 text-lg font-black text-stone-950 shadow-xl shadow-lime-400/20 transition hover:bg-lime-300">
                  <Phone className="h-5 w-5" /> Call or Text {phone}
                </a>
                <a href="#request-service" className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-7 py-4 text-lg font-black text-white transition hover:bg-white/10">
                  Request Service
                </a>
              </div>
              <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 text-sm font-bold md:grid-cols-4">
                {["Family Owned", "Licensed & Insured", "24/7 Emergency", "Local 815 Area"].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                    <CheckCircle2 className="mb-2 h-5 w-5 text-lime-300" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55 }}
              className="relative"
            >
             <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-stone-950 shadow-2xl">
  <img 
    src="/images/truck7.jpg" 
    alt="815 Septic Guy septic pumping truck on a residential service call" 
    className="h-[420px] w-full object-cover opacity-90"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
</div>
              <div className="absolute -bottom-6 left-6 right-6 rounded-3xl bg-stone-950/95 p-5 shadow-2xl ring-1 ring-white/10 backdrop-blur md:left-auto md:w-80">
                <div className="flex items-center gap-2 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="mt-3 text-sm font-semibold text-white">
                  “Frank showed up when he said he would, did exactly what he quoted, and left everything clean.”
                </p>
                <p className="mt-2 text-xs text-stone-400">— Local homeowner review</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-10 grid max-w-7xl gap-4 px-6 py-8 md:grid-cols-4 md:px-10">
        {[
          [Clock, "Responsive Service", "Help with urgent septic issues and routine maintenance."],
          [ShieldCheck, "Licensed & Insured", "Professional work with the right protections in place."],
          [MapPin, "Local 815 Area", "Based around Machesney Park and serving nearby communities."],
          [CheckCircle2, "No-Nonsense Quotes", "Clear expectations before the work begins."],
        ].map(([Icon, title, text]) => (
          <div key={title} className="rounded-3xl bg-white p-6 shadow-lg shadow-stone-200/60 ring-1 ring-stone-200 transition hover:-translate-y-1 hover:shadow-xl">
            <Icon className="h-8 w-8 text-lime-700" />
            <h3 className="mt-4 text-lg font-black">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-stone-600">{text}</p>
          </div>
        ))}
      </section>

      <section id="gallery" className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <p className="font-black uppercase tracking-widest text-lime-700">Real Work</p>
        <h2 className="mt-3 text-4xl font-black tracking-tight">Real septic work. Real local equipment.</h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-600">
          From pumping and camera inspections to system installs and line repairs, these photos show the kind of hands-on septic work homeowners can expect.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            ["/images/truck3.jpg", "815 Septic Guy service truck", "Local septic pumping"],
            ["/images/truck2.jpg", "Septic camera inspection equipment", "Camera inspections"],
            ["/images/truck5.jpg", "Concrete septic tank installation", "Tank installs"],
            ["/images/truck4.jpg", "Septic line repair with locator dye", "Line repairs"],
            ["/images/truck1.jpg", "Excavated septic field repair", "Drain field work"],
            ["/images/truck6.jpg", "Residential septic system work area", "System repairs"],
          ].map(([src, alt, label]) => (
            <figure key={src} className="group overflow-hidden rounded-3xl bg-white shadow-lg shadow-stone-200/60 ring-1 ring-stone-200">
              <img
                src={src}
                alt={alt}
                loading="lazy"
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <figcaption className="flex items-center justify-between px-5 py-4">
                <span className="font-black text-stone-900">{label}</span>
                <CheckCircle2 className="h-5 w-5 text-lime-700" />
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-10 md:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="font-black uppercase tracking-widest text-lime-700">Septic Services</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Practical help for tanks, pumps, lines, and system problems.
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-600">
              Whether you need a routine pump-out or someone to diagnose a septic issue, 815 Septic Guy keeps it straightforward: inspect the problem, explain the options, and get the work done cleanly.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              [Droplets, "Septic Pumping", "Routine tank pumping and maintenance reminders."],
              [Clock, "24/7 Emergency Service", "Immediate response for urgent septic issues anytime."],
              [Wrench, "Troubleshooting", "Help identifying pump, wiring, clog, and drainage issues."],
              [Camera, "Camera Inspections", "Line and system inspections to help pinpoint problems."],
              [Construction, "Tank Installs", "Support for replacement tanks and larger system work."],
              [Waves, "Drain Field Work", "Maintenance and repair guidance for drain field issues."],
            ].map(([Icon, title, text]) => (
              <div key={title} className="rounded-3xl bg-white p-7 shadow-lg shadow-stone-200/60 ring-1 ring-stone-200 transition hover:-translate-y-1 hover:shadow-xl">
                <Icon className="h-9 w-9 text-stone-900" />
                <h3 className="mt-5 text-xl font-black">{title}</h3>
                <p className="mt-2 leading-7 text-stone-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-stone-950 px-6 py-16 text-white md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <p className="font-black uppercase tracking-widest text-lime-300">Customer Reviews</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Trusted by homeowners across the 815</h2>
            <p className="mt-3 text-stone-300">Five-star service, clear communication, and practical septic help when it matters.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              "Honest, on time, and fair pricing. Hard to find that anymore.",
              "Explained everything clearly and didn’t try to oversell. Highly recommend.",
              "Quick response and fixed the issue fast. Very professional.",
            ].map((review, i) => (
              <div key={i} className="rounded-3xl bg-white p-6 shadow-lg shadow-stone-200/60 ring-1 ring-stone-200 transition hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-6 text-stone-700">"{review}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-stone-200 md:p-10">
          <p className="font-black uppercase tracking-widest text-lime-700">Service Area</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight">Septic service near Rockford, IL</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-600">
            Serving homeowners across the 815 area, including Rockford, Machesney Park, Loves Park, Roscoe, Rockton, Winnebago County, and nearby communities.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {["Rockford", "Machesney Park", "Loves Park", "Roscoe", "Rockton", "Winnebago County", "Boone County", "Northern Illinois"].map((city) => (
              <span key={city} className="rounded-full bg-stone-100 px-4 py-2 text-sm font-bold text-stone-700">
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="request-service" className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        <div className="grid gap-8 rounded-[2rem] bg-stone-950 p-8 text-white shadow-xl md:grid-cols-[.85fr_1.15fr] md:p-10">
          <div>
            <p className="font-black uppercase tracking-widest text-lime-300">Request Service</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">Tell us what’s going on.</h2>
            <p className="mt-4 text-lg leading-8 text-stone-300">
              For urgent septic backups, pump alarms, or active problems, call or text for the fastest response. For routine pumping or non-emergency service, send the form and we’ll follow up.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={phoneHref} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-lime-400 px-6 py-4 font-black text-stone-950">
                <Phone className="h-5 w-5" /> Call Now
              </a>
              <a href={textHref} className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-6 py-4 font-black text-white hover:bg-white/10">
                Text {phone}
              </a>
            </div>
          </div>

          <form
            name="service-request"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="rounded-3xl bg-white p-6 text-stone-900 shadow-lg"
          >
            <input type="hidden" name="form-name" value="service-request" />
            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-sm font-bold">
                Name
                <input name="name" required className="mt-2 w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:ring-2 focus:ring-lime-400" />
              </label>
              <label className="text-sm font-bold">
                Phone
                <input name="phone" required className="mt-2 w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:ring-2 focus:ring-lime-400" />
              </label>
              <label className="text-sm font-bold md:col-span-2">
                Address / City
                <input name="address" className="mt-2 w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:ring-2 focus:ring-lime-400" />
              </label>
              <label className="text-sm font-bold md:col-span-2">
                Service Needed
                <select name="service" className="mt-2 w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:ring-2 focus:ring-lime-400">
                  <option>Septic pumping</option>
                  <option>24/7 emergency service</option>
                  <option>Pump alarm / pump issue</option>
                  <option>Clog or backup</option>
                  <option>Inspection / troubleshooting</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="text-sm font-bold md:col-span-2">
                Message
                <textarea
                  name="message"
                  rows="4"
                  className="mt-2 w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:ring-2 focus:ring-lime-400"
                  placeholder="Briefly describe the issue, timing, and whether this is urgent."
                />
              </label>
            </div>
            <button type="submit" className="mt-5 w-full rounded-2xl bg-lime-400 px-6 py-4 text-lg font-black text-stone-950 transition hover:bg-lime-300">
              Submit Request
            </button>
            {submitted && (
              <p className="mt-4 rounded-xl bg-lime-50 p-3 text-sm font-bold text-lime-800">
                Thanks — your request was sent. For emergencies, call or text now for the fastest response.
              </p>
            )}
          </form>
        </div>
      </section>

      <section className="bg-stone-900 py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3 md:px-10">
          <div className="md:col-span-1">
            <p className="font-black uppercase tracking-widest text-lime-300">Why homeowners call</p>
            <h2 className="mt-3 text-4xl font-black">Local. Honest. Friendly.</h2>
          </div>
          <div className="grid gap-4 md:col-span-2 md:grid-cols-2">
            {[
              "Shows up when scheduled",
              "Does the job quoted",
              "Leaves the work area cleaned up",
              "Explains septic issues in plain English",
              "Focused on repair-first thinking when possible",
              "Experienced with local septic systems",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-lime-300" />
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="rounded-[2rem] bg-lime-400 p-8 text-stone-950 shadow-xl md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <h2 className="text-4xl font-black tracking-tight">Need septic help today? (Call or Text 24/7)</h2>
              <p className="mt-3 max-w-2xl text-lg font-medium text-stone-800">
                Call or text anytime for fast septic service in the Rockford / Machesney Park area. 24/7 emergency response available.
              </p>
            </div>
            <a href={phoneHref} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-stone-950 px-8 py-5 text-xl font-black text-white shadow-lg transition hover:bg-stone-800">
              <Phone className="h-6 w-6" /> {phone}
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-stone-200 bg-white px-6 py-8 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-stone-600 md:flex-row">
          <p>© {new Date().getFullYear()} 815 Septic Guy. All rights reserved.</p>
          <p>Septic service · Machesney Park, IL · Call {phone}</p>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-stone-200 bg-white/95 p-3 shadow-2xl backdrop-blur md:hidden">
        <a href={phoneHref} className="flex items-center justify-center gap-2 rounded-xl bg-lime-400 px-4 py-3 font-black text-stone-950">
          <Phone className="h-5 w-5" /> Call
        </a>
        <a href={textHref} className="flex items-center justify-center rounded-xl bg-stone-950 px-4 py-3 font-black text-white">
          Text
        </a>
      </div>
    </main>
  );
}
