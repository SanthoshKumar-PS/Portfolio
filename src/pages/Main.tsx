import Layout from "@/components/layout/Layout"
import { Button } from "../components/ui/button"
import HeroSection from "./HeroSection"
import AboutSection from "./AboutSection"
import ProjectsSection from "./ProjectsSection"
import SkillsSection from "./SkillsSection"
import ExperienceSection from "./ExperienceSection"
import EducationSection from "./EducationSection"
import ContactSection from "./ContactSection"

const Main = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
    </Layout>

  )
}

export default Main