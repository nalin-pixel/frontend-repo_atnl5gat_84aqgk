import React from 'react'

export default function About() {
  return (
    <main className="bg-[#0F1B33] min-h-screen">
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-white">About Capital FM</h1>
        <p className="mt-4 text-white/80 max-w-3xl">
          Capital FM is all about energy, color and connection. We bring the hottest hits, the freshest hosts and a
          vibrant community together. From early morning hype to late-night chills, we keep your day moving with a
          fun, modern vibe.
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-6 text-white/80">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-white font-semibold">Feel‑Good Music</div>
            <p className="mt-2 text-sm">A curated mix of pop, RnB, dance and chart‑toppers.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-white font-semibold">Fresh Personalities</div>
            <p className="mt-2 text-sm">Hosts that bring joy, humor and connection to every hour.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-white font-semibold">Everywhere You Are</div>
            <p className="mt-2 text-sm">Listen on web, mobile and smart speakers — anytime.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
