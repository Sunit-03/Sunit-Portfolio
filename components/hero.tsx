"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Terminal } from "lucide-react"

export function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-hero-glow blur-[100px] opacity-20 dark:opacity-40 animate-pulse rounded-full pointer-events-none" />

            <div className="container px-4 md:px-6 relative z-10 text-center flex flex-col items-center">
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border-neon-purple/30 text-sm mb-6 text-neon-purple">
                        <Terminal size={14} /> <span>System Online</span>
                    </div>
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4"
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                >
                    Hi, I am <span className="text-gradient">Sunit Mohan</span>
                </motion.h1>

                <motion.p
                    className="text-lg md:text-2xl text-muted-foreground max-w-2xl mb-8"
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                >
                    AI first Software Engineer enhancing high-traffic platforms with userbase in <span className="font-bold">millions</span> and building scalable production experiences.
                </motion.p>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="gap-4 flex">
                    <Button asChild className="bg-neon-blue text-black hover:bg-neon-blue/80 hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] rounded-full px-8 py-6 text-lg transition-all border border-transparent">
                        <a href="#experience" className="flex items-center">
                            View Experience <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
