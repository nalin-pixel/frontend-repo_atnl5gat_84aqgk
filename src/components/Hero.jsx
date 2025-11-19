import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#0F1B33]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F1B33]/60 via-[#0F1B33]/70 to-[#0F1B33] pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-4 w-full grid md:grid-cols-2 gap-8 items-center py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs border border-white/10">
            Live • On Air Now
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Capital FM
          </h1>
          <p className="mt-4 text-white/80 text-lg">
            The fun, fresh and feel-good sound. Non‑stop hits, vibrant vibes, and exclusive shows from your favorite hosts.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#shows" className="px-5 py-3 rounded-full bg-[#2E65EB] text-white hover:brightness-110 transition shadow-lg shadow-[#2E65EB]/30">Explore Shows</a>
            <a href="#podcasts" className="px-5 py-3 rounded-full bg-[#FF4199] text-white hover:brightness-110 transition shadow-lg shadow-[#FF4199]/30">Latest Podcasts</a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="md:justify-self-end">
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-4 text-white max-w-md">
            <div className="text-sm text-white/70">Up next</div>
            <div className="mt-2 text-xl font-semibold">Drive Time with Zoe</div>
            <div className="mt-1 text-white/70">4:00 PM — 7:00 PM</div>
            <div className="mt-4 grid grid-cols-4 gap-2 text-center">
              {['Pop','Hits','RnB','Charts'].map((tag) => (
                <span key={tag} className="px-2 py-1 rounded-full bg-white/10 text-xs">{tag}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
