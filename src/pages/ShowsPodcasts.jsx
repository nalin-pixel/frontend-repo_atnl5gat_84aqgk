import React from 'react'
import Shows from '../components/Shows'
import Podcasts from '../components/Podcasts'

export default function ShowsPodcasts() {
  return (
    <main className="bg-[#0F1B33] pt-6">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-white text-3xl font-bold">Shows & Podcasts</h1>
        <p className="text-white/70 mt-2">Discover our daily lineup and latest episodes.</p>
      </div>
      <Shows />
      <Podcasts />
    </main>
  )
}
