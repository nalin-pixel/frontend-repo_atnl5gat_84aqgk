import React from 'react'

export default function Contact() {
  return (
    <main className="bg-[#0F1B33] min-h-screen">
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-white">Contact Us</h1>
        <p className="mt-3 text-white/70">We'd love to hear from you. Drop us a message and our team will get back soon.</p>

        <form className="mt-8 grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-white/80 text-sm mb-2">Name</label>
            <input className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#2E65EB]" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-white/80 text-sm mb-2">Email</label>
            <input type="email" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#2E65EB]" placeholder="you@email.com" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-white/80 text-sm mb-2">Message</label>
            <textarea rows="5" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#2E65EB]" placeholder="Tell us what's up"></textarea>
          </div>
          <div className="md:col-span-2">
            <button type="button" className="px-5 py-3 rounded-full bg-[#FF4199] text-white hover:brightness-110">Send message</button>
          </div>
        </form>
      </section>
    </main>
  )
}
