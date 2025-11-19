import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[#0F1B33] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-10 text-white/60 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div>© {new Date().getFullYear()} Capital FM. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white">Instagram</a>
          <a href="#" className="hover:text-white">Twitter</a>
          <a href="#" className="hover:text-white">YouTube</a>
        </div>
      </div>
    </footer>
  )
}
