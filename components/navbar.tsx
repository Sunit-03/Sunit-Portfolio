"use client"
import { motion } from "framer-motion"
import { ThemeToggle } from "./theme-toggle"
import Link from "next/link"

export function Navbar() {
  const links = ["About", "Experience", "Projects", "Skills", "Contact"]
  
  return (
    <motion.header 
      initial={{ y: -100 }} animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 glass-card border-b border-white/10 h-16 flex items-center px-4 md:px-12"
    >
      <div className="flex-1 font-bold text-xl tracking-tighter mix-blend-difference text-gradient cursor-pointer">
        <Link href="https://www.linkedin.com/in/sunit-mohan-4809a2229/" target="blank">&lt;SM/&gt;</Link>
      </div>
      <nav className="hidden md:flex gap-6 absolute left-1/2 -translate-x-1/2">
        {links.map((link) => (
          <Link key={link} href={`#${link.toLowerCase()}`} className="text-sm font-medium hover:text-neon-blue transition-colors">
            {link}
          </Link>
        ))}
      </nav>
      <div className="flex-1 flex justify-end">
        <ThemeToggle />
      </div>
    </motion.header>
  )
}
