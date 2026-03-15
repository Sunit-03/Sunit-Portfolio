"use client"
import { motion } from "framer-motion"
import { portfolioData } from "@/data/portfolio"

export function About() {
  return (
    <section id="about" className="py-24 container px-4 md:px-6 max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-4">
          <span className="text-neon-purple">01.</span> About Me
          <div className="h-[1px] flex-1 bg-border ml-4 relative"><div className="absolute left-0 top-0 h-full w-12 bg-neon-purple shadow-[0_0_10px_#8a2be2]"></div></div>
        </h2>
        <div className="glass-card p-8 rounded-2xl neon-border-hover">
          <p className="text-lg leading-relaxed text-muted-foreground">
            {portfolioData.about}
          </p>
        </div>
      </motion.div>
    </section>
  )
}
