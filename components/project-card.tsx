"use client"
import { motion } from "framer-motion"
import { ExternalLink, FolderGit2 } from "lucide-react"
import { portfolioData } from "@/data/portfolio"

export function ProjectCard() {
  return (
    <section id="projects" className="py-24 container px-4 md:px-6 max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
          <span className="text-neon-purple">03.</span> Projects
          <div className="h-[1px] flex-1 bg-border ml-4 relative"><div className="absolute left-0 top-0 h-full w-12 bg-neon-purple shadow-[0_0_10px_#8a2be2]"></div></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.projects.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.1 }} viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl flex flex-col h-full neon-border-hover relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-neon-purple to-transparent -translate-x-full group-hover:animate-[slide-right_2s_infinite]" />
              
              <div className="flex justify-between items-center mb-6">
                <FolderGit2 className="w-10 h-10 text-neon-purple" />
                <a href={project.link} target="blank" className="hover:text-neon-blue transition-colors">
                  <ExternalLink size={24} />
                </a>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 hover:text-neon-blue cursor-pointer transition-colors">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              </h3>
              <p className="text-muted-foreground flex-grow mb-6">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto text-sm font-mono text-cyan-700 dark:text-neon-blue/80">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-2 py-1 glass-card rounded-md hover:text-neon-blue hover:border-neon-blue hover:shadow-[0_0_10px_rgba(0,240,255,0.4)] transition-all cursor-default">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
