"use client"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background/50 backdrop-blur-md py-8">
      <div className="container px-4 md:px-6 mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Sunit Mohan. All rights reserved.
        </p>
        
        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/sunit-mohan-4809a2229/" target="blank" className="text-muted-foreground hover:text-neon-blue transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="https://github.com/Sunit-03" target="blank" className="text-muted-foreground hover:text-neon-purple transition-colors">
            <Github size={20} />
          </a>
          <a href="sunitmohan030303@gmail.com" className="text-muted-foreground hover:text-neon-blue transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}
