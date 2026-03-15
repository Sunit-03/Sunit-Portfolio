"use client"
import { motion } from "framer-motion"
import { portfolioData } from "@/data/portfolio"

export function SkillsGrid() {
  return (
    <section id="skills" className="py-24 container px-4 md:px-6 max-w-4xl mx-auto text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center justify-center gap-4">
          <span className="text-neon-blue">04.</span> Core Tech Stack
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {portfolioData.skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="px-6 mx-2 py-3 glass-card rounded-full font-medium border border-white/5 hover:border-neon-blue hover:text-neon-blue hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all cursor-default relative overflow-hidden group"
            >
              <span className="relative z-10">{skill}</span>
              <div className="absolute inset-0 bg-neon-blue/5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
