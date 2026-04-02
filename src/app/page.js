import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ExperienceSection from '@/components/ExperienceSection'
import ProjectSection from '@/components/ProjectSection'
import SpeakingSection from '@/components/SpeakingSection'
import PressSection from '@/components/PressSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <SpeakingSection />
      <PressSection />
    </main>
  )
}