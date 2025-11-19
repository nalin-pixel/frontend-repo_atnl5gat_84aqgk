import React from 'react'
import Hero from '../components/Hero'
import Shows from '../components/Shows'
import Podcasts from '../components/Podcasts'

export default function Home() {
  return (
    <main className="bg-[#0F1B33]">
      <Hero />
      <Shows />
      <Podcasts />
    </main>
  )
}
