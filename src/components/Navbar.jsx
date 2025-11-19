import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Radio, Podcast, Phone, Info } from 'lucide-react'

const navItemClass = ({ isActive }) =>
  `px-3 py-2 rounded-full text-sm transition-colors ${
    isActive ? 'bg-[#2E65EB] text-white' : 'text-white/80 hover:text-white hover:bg-white/10'
  }`

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0F1B33]/70 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#2E65EB] to-[#FF4199] flex items-center justify-center shadow-lg shadow-[#2E65EB]/30">
              <Radio className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-bold tracking-tight text-lg group-hover:opacity-90">
              Capital FM
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            <NavLink to="/" end className={navItemClass}>Home</NavLink>
            <NavLink to="/shows" className={navItemClass}>
              <span className="inline-flex items-center gap-1"><Podcast className="w-4 h-4"/>Shows & Podcasts</span>
            </NavLink>
            <NavLink to="/about" className={navItemClass}>
              <span className="inline-flex items-center gap-1"><Info className="w-4 h-4"/>About</span>
            </NavLink>
            <NavLink to="/contact" className={navItemClass}>
              <span className="inline-flex items-center gap-1"><Phone className="w-4 h-4"/>Contact</span>
            </NavLink>
          </nav>

          <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 text-white/80">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
