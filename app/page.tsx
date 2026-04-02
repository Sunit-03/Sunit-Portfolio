import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { EducationTimeline } from "@/components/education-timeline"
import { ProjectCard } from "@/components/project-card"
import { SkillsGrid } from "@/components/skills-grid"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <ExperienceTimeline />
      <EducationTimeline />
      <ProjectCard />
      <SkillsGrid />
      <ContactSection />
    </div>
  )
}