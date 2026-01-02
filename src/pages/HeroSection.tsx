import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react"
import { motion } from 'framer-motion'
import AnimatedText from "@/components/ui/hero/AnimatedText";
import ThreeButtons from "@/components/ui/hero/ThreeButtons";
import TechStackIcons from "@/components/ui/hero/TechStackIcons";
import MorphingShapes2 from "@/components/ui/hero/MorphingShapes";
import FloatingParticles from "@/components/ui/hero/FloatingParticles";
import GlowingOrbs from "@/components/ui/hero/GlowingOrbs";

const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target:containerRef,
    offset: ['start start', 'end start']
  });

  const opacity = useTransform(scrollYProgress, [0,0.5], [1,0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1,0.8])
  const y = useTransform(scrollYProgress, [0,0.5], [0,100])

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <MorphingShapes2 />
      <FloatingParticles />
      <GlowingOrbs />

      {/* Content */}
      <motion.div
        className="relative z-10 container-custom pt-24 pb-16"
        style={{ opacity, scale, y }}
      >
        <div className="flex flex-col items-center gap-8 md:gap-12 ">
          {/* Animated Intro Badge */}
          <motion.div
            initial = {{ opacity:0, scale:0.9, y:-20 }}
            animate = {{ opacity:1, scale:1, y:0 }}
            transition= {{ duration:0.6, ease:[0.22,1,0.36,1]}}
            whileHover={{ scale:1.05 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"/>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"/>
            </span>
            <motion.span
              className="text-sm text-muted-foreground"
              animate= {{
                backgroundPosition: [ '0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration:5, repeat:Infinity, ease:'linear'}}
              style={{
                backgroundImage: "linear-gradient(90deg, hsl(var(--muted-foreground)), hsl(var(--primary)), hsl(var(--muted-foreground)))",
                backgroundSize: "200% 100%",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Available for opportunities
            </motion.span>

          </motion.div>

          {/* Main Text */}
          <AnimatedText/>

          {/* Button - View Project, Resume, Contact Page */}
          <ThreeButtons/>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity:0, y:30 }}
            animate={{ opacity:1,y:0 }}
            transition={{ delay:0.9, duration:0.6 }}
            className="mt-12 md:mt-16 space-y-4 text-center"
          >
            <motion.span
              animate={{ opacity:[0.5, 1, 0.5] }}
              transition={{ duration:2, repeat:Infinity }}
              className="block text-sm text-muted-foreground uppercase tracking-widest"
            >
              Tech Stack
            </motion.span>
            <TechStackIcons/>
            
          </motion.div>




        </div>

      </motion.div>


    </section>
  )
}

export default HeroSection