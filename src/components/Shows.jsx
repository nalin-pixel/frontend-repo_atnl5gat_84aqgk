import React from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

const shows = [
  { title: 'Morning Mashup', host: 'Liam & Ava', time: '6 AM - 10 AM', color: 'from-[#2E65EB] to-[#FF4199]' },
  { title: 'Midday Mix', host: 'Maya', time: '10 AM - 1 PM', color: 'from-[#FF4199] to-[#2E65EB]' },
  { title: 'Drive Time', host: 'Zoe', time: '4 PM - 7 PM', color: 'from-[#2E65EB] to-[#2E65EB]' },
]

export default function Shows() {
  return (
    <section id="shows" className="relative py-16 bg-[#0F1B33]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Featured Shows</h2>
          <a href="#" className="text-sm text-white/70 hover:text-white">View schedule</a>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shows.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className={`h-24 bg-gradient-to-br ${s.color}`}></div>
              <div className="p-4">
                <div className="text-white font-semibold">{s.title}</div>
                <div className="text-white/70 text-sm">{s.host} • {s.time}</div>
                <button className="mt-4 inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 text-white hover:bg-white/20">
                  <Play className="w-4 h-4" /> Listen
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
