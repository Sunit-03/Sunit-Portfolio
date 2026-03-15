"use client"
import { motion } from "framer-motion"
import { portfolioData } from "@/data/portfolio"
import { Briefcase } from "lucide-react"

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 container px-4 md:px-6 max-w-4xl mx-auto">
       <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
          <span className="text-neon-blue">02.</span> Experience
          <div className="h-[1px] flex-1 bg-border ml-4 relative"><div className="absolute left-0 top-0 h-full w-12 bg-neon-blue shadow-[0_0_10px_#00f0ff]"></div></div>
        </h2>
        
        <div className="space-y-12 border-l border-white/10 dark:border-white/20 ml-3 md:ml-6">
          {portfolioData.experience.map((exp, idx) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }} viewport={{ once: true }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute -left-4 top-1 w-8 h-8 rounded-full bg-background border border-neon-blue flex items-center justify-center text-neon-blue shadow-[0_0_10px_rgba(0,240,255,0.3)]">
                <Briefcase size={14} />
              </div>
              
              <div className="glass-card p-6 rounded-2xl neon-border-hover group">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-neon-blue transition-colors">{exp.role}</h3>
                    <p className="text-lg font-medium text-muted-foreground">{exp.company}</p>
                  </div>
                  <span className="text-sm font-mono mt-2 md:mt-0 text-neon-purple bg-neon-purple/10 px-3 py-1 rounded-full">{exp.duration}</span>
                </div>
                
                <ul className="space-y-2">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex gap-2 text-muted-foreground text-sm md:text-base">
                      <span className="text-neon-blue mt-1.5">▹</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
