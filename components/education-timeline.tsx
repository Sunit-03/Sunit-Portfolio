"use client"
import { motion } from "framer-motion"
import { portfolioData } from "@/data/portfolio"
import { GraduationCap } from "lucide-react"

export function EducationTimeline() {
  return (
    <section id="education" className="py-24 container px-4 md:px-6 max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
          <span className="text-neon-purple">03.</span> Education
          <div className="h-[1px] flex-1 bg-border ml-4 relative">
            <div className="absolute left-0 top-0 h-full w-12 bg-neon-purple shadow-[0_0_10px_#8a2be2]"></div>
          </div>
        </h2>

        <div className="space-y-12 border-l border-white/10 dark:border-white/20 ml-3 md:ml-6">
          {portfolioData.education.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }} viewport={{ once: true }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute -left-4 top-1 w-8 h-8 rounded-full bg-background border border-neon-purple flex items-center justify-center text-neon-purple shadow-[0_0_10px_rgba(138,43,226,0.3)]">
                <GraduationCap size={14} />
              </div>

              <div className="glass-card p-6 rounded-2xl neon-border-hover group">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-neon-purple transition-colors">{edu.institution}</h3>
                    <p className="text-lg font-medium text-muted-foreground">{edu.degree}</p>
                  </div>
                  <span className="text-sm font-mono mt-2 md:mt-0 text-neon-blue bg-neon-blue/10 px-3 py-1 rounded-full self-start md:self-auto">
                    {edu.duration}
                  </span>
                </div>

                <div className="flex items-center gap-2 mt-2">
                  <span className="text-neon-purple mt-0.5">▹</span>
                  <span className="text-muted-foreground text-sm md:text-base">
                    Grade: <span className="text-neon-purple font-semibold">{edu.grade}</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
