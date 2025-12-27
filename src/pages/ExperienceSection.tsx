import { motion, useInView } from "framer-motion";
import { Building2, Calendar, MapPin } from "lucide-react";
import { useRef } from "react";
const experiences = [
  {
    title: "Full Stack Developer",
    company: "Ventu Renewable Private Limited",
    location: "Chennai",
    period: "Jun 2025 – Present",
    description: [
      "Build and scale responsive web applications for clients using React, Node.js, and PostgreSQL",
      "Deliver high-performance, maintainable, and user-focused solutions",
      "Collaborate with cross-functional teams to define and implement new features",
      "Optimize application performance and ensure code quality through reviews",
    ],
    current: true,
  },
  {
    title: "Flutter Development Intern",
    company: "Diggibyte Technologies",
    location: "Hosur",
    period: "Jan 2025 – Apr 2025",
    description: [
      "Contributed to the design and development of an internal Asset Management System application",
      "Built responsive and user-friendly interfaces across devices using Flutter",
      "Implemented state management and API integration for seamless data flow",
      "Collaborated with senior developers to learn best practices in mobile development",
    ],
    current: false,
  },
  {
    title: "MERN Stack Developer",
    company: "VCodez",
    location: "Chennai",
    period: "Jul 2024 – Dec 2024",
    description: [
      "Collaborated on frontend and backend features for client projects",
      "Optimized APIs for improved performance and scalability",
      "Enhanced user interfaces for better user experience",
      "Participated in code reviews and contributed to team knowledge sharing",
    ],
    current: false,
  },
  {
    title: "Junior Web Developer",
    company: "PageOnTop",
    location: "Coimbatore",
    period: "Apr 2023 – Sept 2023",
    description: [
      "Gained understanding of client requirements and project specifications",
      "Planned and executed web development tasks efficiently",
      "Regularly reviewed code to ensure functionality and performance standards",
      "Performed thorough testing and debugging before website deployment",
    ],
    current: false,
  },
];
const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref,{once:true, margin:'-100px'})
  return (
    <section id="experience" className="section-padding bg-secondary/20">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{opacity:0, y:30}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{duration:0.6}}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            Career
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey through various roles and companies.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={ref} className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"/>

            {experiences.map((exp,index)=>(
              <motion.div
                key={exp.title+exp.company}
                initial={{opacity:0, y:50}}
                animate={inView?{opacity:1, y:0}:{}}
                transition={{delay:index*0.2, duration:0.6}}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index%2===0?"md:flex-row-reverse":""}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4">
                  <div className={`w-4 h-4 rounded-full border-4 ${exp.current?"bg-primary border-primary ":"bg-background border-primary "}`}
                  />
                  {exp.current && (
                    <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping"/>
                  )}
                </div>

                {/* Content */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index%2===0?"md:pl-12":"md:pr-12"}`}>
                  <div className="glass rounded-2xl p-6 card-hover">
                    {exp.current && (
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-3">
                        Current Role
                      </span>
                    )}

                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {exp.title}
                    </h3>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Building2 size={14} className="text-primary"/>
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} className="text-primary"/>
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} className="text-primary"/>
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((item,i)=>(
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 mt-2 rounded-full bg-primary shrink-0"/>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Spacer */}
                    <div className="hidden md:block md:w-1/2 bg-red-500"/>
                  </div>

                </div>
                

              </motion.div>
            ))}

          </div>

        </div>

      </div>

    </section>
  )
}

export default ExperienceSection