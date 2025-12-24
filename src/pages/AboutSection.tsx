import { motion, useInView, type Variants } from "framer-motion";
import { Book, BookOpen, BookUser, Rocket } from "lucide-react";
import { useRef } from "react"

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref,{once:true,margin:'-100px'});

  const containerVariants : Variants = {
    hidden:{ opacity:0 },
    visible: {
      opacity:1,
      transition:{
        staggerChildren:0.2
      }
    }
  }

  const itemVariants : Variants = {
    hidden: { opacity:0, y:30 },
    visible:{
      opacity:1,
      y:0,
      transition:{ duration:0.6, ease:'easeInOut' }
    }
  }


  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background to-secondary/10 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary rounded-full blur-3xl"/>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl"/>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial='hidden'
          animate={isInView?'visible':'hidden'}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-10">
            <span className="text-primary text-sm font-medium uppercase tracking-widest">
              About Me
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Carfting Digital
              <span className="gradient-text"> Experience</span>
            </h2>
          </motion.div>

          {/* Story */}
          <motion.div variants={itemVariants} className="space-y-6 text-foreground/90 leading-relaxed">
            <div className="glass rounded-2xl p-8 md:p-10">
              <h3 className="font-display text-2xl font-semibold mb-4 text-primary">
                My Journey
              </h3>
              <p className="text-muted-foreground mb-4">
                My journey into software development began during my Computer Science studies at Sri Krishna College of Technology, where I discovered my passion for building applications that make a real difference. What started as curiosity about how software works evolved into a deep commitment to creating elegant, efficient solutions.
              </p>
              <p className="text-muted-foreground mb-4">
                From developing responsive web applications with React and Node.js to crafting 
                cross-platform mobile experiences with Flutter, I've had the privilege of working 
                across the entire technology stack. Each project has been an opportunity to learn, 
                grow, and push the boundaries of what's possible.
              </p>
              <p className="text-muted-foreground">
                Today, I specialize in building full-stack applications that solve real business 
                problems. Whether it's optimizing database performance, creating intuitive user 
                interfaces, or architecting scalable backend systems, I bring the same dedication 
                and attention to detail to every challenge.
              </p>
            </div>
          </motion.div>

          {/* What I Do */}
          <motion.div variants={itemVariants} className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="glass rounded-2xl p-6 card-hover">
              <div className="flex items-center justify-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-2xl"><Rocket/></span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">
                Problems I Solve
              </h3>
              </div>

              <p className="text-muted-foreground text-sm">
                Building scalable architectures, optimizing performance bottlenecks, 
                creating seamless user experiences, and bridging the gap between 
                complex backend systems and intuitive frontends.
              </p>
            </div>


            <div className="glass rounded-2xl p-6 card-hover">
              <div className="flex items-center justify-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-2xl"><BookOpen/></span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">
                Currently Learning
              </h3>
              </div>

              <p className="text-muted-foreground text-sm">
                Always expanding my toolkit—currently diving deeper into cloud 
                architecture, microservices patterns, and exploring the latest 
                advancements in AI/ML integration for web applications.
              </p>
            </div>

          </motion.div>

        </motion.div>

      </div>

    </section>
  )
}

export default AboutSection