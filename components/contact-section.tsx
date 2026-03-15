"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-32 container px-4 md:px-6 max-w-3xl mx-auto text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Get In Touch</h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="flex justify-center gap-6 mb-12">
          <a href="https://www.linkedin.com/in/sunit-mohan-4809a2229/" target="blank"><Linkedin className="w-8 h-8 hover:text-neon-blue transition-colors hover:scale-110" /></a>
          <a href="https://github.com/Sunit-03" target="blank"><Github className="w-8 h-8 hover:text-neon-purple transition-colors hover:scale-110" /></a>
          <a href="sunitmohan030303@gmail.com"><Mail className="w-8 h-8 hover:text-neon-blue transition-colors hover:scale-110" /></a>
          <a href="+91 8882362704"><Phone className="w-8 h-8 hover:text-neon-purple transition-colors hover:scale-110" /></a>
        </div>
        
        <Button className="bg-transparent border-2 border-neon-blue text-neon-blue hover:bg-neon-blue/10 rounded-full px-8 py-6 text-lg tracking-wide hover:shadow-[0_0_15px_rgba(0,240,255,0.6)] transition-all">
          Say Hello
        </Button>
      </motion.div>
    </section>
  )
}
