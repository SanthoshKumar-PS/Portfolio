import { motion } from "framer-motion"
import { Award, Calendar, GraduationCap, MapPin } from "lucide-react"

const collegeSkills = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "Database Management Systems",
  "Web Technologies",
  "Software Engineering",
  "Computer Networks",
  "Operating Systems",
  "Machine Learning",
]
const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-gradient-to-b from-secondary/20 to-background relative overflow-hidden ">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-primary rounded-full blur-3xl"/>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-glow-secondary rounded-full blur-3xl"/>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{opacity:0, y:30}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{duration:0.6}}
          className="text-center m-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            Academic Background
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The academic foundation that shaped my technical expertise.
          </p>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{opacity:0, y:30}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{delay:0.2, duration:0.6}}
          className="max-w-3xl mx-auto"
        >
          <div className="glass rounded-3xl overflow-hidden">
            {/* Header with gradient */}
            <div className="bg-gradient-to-r from-primary/20 to-glow-secondary/20 p-8 md:p-12">
              <div className="flex items-start gap-6">
                <div className="hidden sm:flex w-20 h-20 rounded-2xl bg-primary/20 items-center justify-center shrink-0">
                  <GraduationCap size={40} className="text-primary"/>
                </div>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                    Bachelor Science and Engineering
                  </h3>
                  <p className="text-xl text-primary font-semibold">
                    Computer Science and Engineering
                  </p>
                </div>
              </div>


            </div>

            {/* Details */}
            <div className="p-8 md:p-12 space-y-8">
              {/* Institution */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                  <MapPin className="text-primary" size={24}/>
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground uppercase tracking-wider mb-1">
                    Institution
                  </h4>
                  <p className="text-lg font-semibold text-foreground">
                    Sri Krishna College of Technology
                  </p>
                  <p className="text-muted-foreground">Coimbatore, Tamil Nadu</p>
                </div>

              </div>
              
              {/* Duration */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                  <Calendar className="text-primary" size={24}/>
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground uppercase tracking-wider mb-1">
                    Duration
                  </h4>
                  <p className="text-lg font-semibold text-foreground">
                    June 2020 - April 2024
                  </p>
                  <p className="text-muted-foreground">4 Years Full-Time</p>
                </div>
              </div>

              {/* CGPA */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                  <Award className="text-primary" size={24}/>
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground uppercase tracking-wider mb-1">
                    Academic Performance
                  </h4>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-display font-bold gradient-text">
                      8.55
                    </span>
                    <span className="text-lg text-muted-foreground">/ 10 CPGPA</span>
                  </div>
                  <p className="text-muted-foreground">First Class with Distinction</p>
                </div>
              </div>

              {/* Key Learnings */}
              <div className="pt-6 border-t border-border">
                <h4 className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
                  Key Areas of Study
                </h4>
                <div className="flex flex-wrap gap-2">
                  {collegeSkills.map(subject=>(
                    <span 
                      key={subject}
                      className="px-4 py-2 rounded-full bg-secondary text-muted-foreground text-sm hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {subject}
                    </span>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </motion.div>

      </div>

    </section>
  )
}

export default EducationSection