import React from 'react'
import { motion } from 'framer-motion'
import { PlayCircle } from 'lucide-react'

const pods = [
  { title: 'Capital Chats', desc: 'Artist interviews and behind‑the‑scenes stories.', color: 'bg-[#2E65EB]' },
  { title: 'New Music Now', desc: 'Fresh tracks and first plays every week.', color: 'bg-[#FF4199]' },
  { title: 'Night Drive', desc: 'Late‑night vibes and chilled beats.', color: 'bg-[#2E65EB]' },
]

export default function Podcasts() {
  return (
    <section id="podcasts" className="py-16 bg-[#0F1B33]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Latest Podcasts</h2>
          <a href="#" className="text-sm text-white/70 hover:text-white">Browse all</a>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pods.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className={`h-2 ${p.color}`}></div>
              <div className="p-5">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl ${p.color} grid place-items-center text-white`}>
                    <PlayCircle className="w-5 h-5" />
                  </div>
                  <div className="text-white font-semibold">{p.title}</div>
                </div>
                <p className="mt-3 text-white/70 text-sm">{p.desc}</p>
                <button className="mt-4 px-3 py-2 rounded-full bg-white/10 text-white text-sm hover:bg-white/20">Play episode</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
