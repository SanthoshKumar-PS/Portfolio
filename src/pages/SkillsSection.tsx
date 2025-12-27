import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
type SkillCategory = {
  title: string;
  skills: { name: string; level: number }[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Java", level: 75 },
      { name: "Python", level: 70 },
      { name: "Dart", level: 80 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "Flutter", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Next.js", level: 75 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "GraphQL", level: 65 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 75 },
      { name: "Redis", level: 70 },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "Postman", level: 85 },
      { name: "Docker", level: 70 },
      { name: "VS Code", level: 95 },
    ],
  },
];
const otherSkills = [
  "Problem Solving",
  "Agile/Scrum",
  "Code Review",
  "Team Collaboration",
  "Technical Writing",
  "Debugging",
  "Performance Optimization",
  "Responsive Design",
  "Version Control",
  "API Design",
  "Testing",
  "CI/CD Basics",
];

const AnimatedCounter = ({ value, inView } : { value:number; inView:boolean }) => {
  const [count, setCount] = useState<number>(0)

  useEffect(()=>{
    if(!inView) return;

    let start = 0;
    const duration = 1500
    const increment = value/(duration/16)

    const timer = setInterval(()=>{
      start+=increment;
      if(start>=value){
        setCount(value)
        clearInterval(timer)
      } else{
        setCount(Math.floor(start))
      }
    },16)
    return ()=>clearInterval(timer)
  },[value,inView])

  return <span>{count}%</span>
}

const SkillBar = ({ skill, index, inView }:{ skill: { name: string; level: number }, index:number, inView:boolean }) => {
  return (
    <motion.div
      initial={{opacity:0, x:-20}}
      animate={inView?{opacity:1, x:0}:{}}
      transition={{ delay:index*0.1, duration:0.5 }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="text-sm text-primary font-semibold">
          <AnimatedCounter value={skill.level} inView={inView}/>
        </span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{width:0}}
          animate={inView?{width:`${skill.level}%`}:{width:0}}
          transition={{ delay:0.3+index*0.1, duration:1, ease:'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-glow-secondary"
        />

      </div>

    </motion.div>
  )
}

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref,{once:true, margin:'-100px'})
  return (
    <section id="skills" className="relative section-padding bg-gradient-to-b from-secondary/20 to-background overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-1/4 w-80 h-80 bg-primary rounded-full blur-3xl"/>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-glow-secondary rounded-full blue-3xl"/>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{opacity:0, y:30}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{duration:0.6}}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">Enterprise</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical toolkit and proficiency levels.
          </p>
        </motion.div>

        {/* Skills */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category,categoryIndex)=>(
            <motion.div
              key={category.title}
              initial={{opacity:0, y:30}}
              animate={inView?{opacity:1, y:0}:{}}
              transition={{delay:categoryIndex*0.1,duration:0.5}}
              className="glass rounded-2xl p-6 card-hover"
            >
              <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-gradient-to-b from-primary to-glow-secondary rounded-full"></span>
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill,skillIndex)=>(
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    index={skillIndex}
                    inView={inView}
                  />
                ))}

              </div>

            </motion.div>
          ))}

        </div>

        {/* AdditionalSkills */}
        <motion.div
          initial={{opacity:0, y:30}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{delay:0.5, duration:0.5}}
          className="mt-12 glass rounded-2xl p-8"
        >
          <h3>
            Other Skills & Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {otherSkills.map((skill, index)=>(
              <motion.span
                key={skill}
                initial={{opacity:0, scale:0.8,x:-40}}
                whileInView={{opacity:1, scale:1,x:0}}
                viewport={{once:true}}
                transition={{delay:0.6+index*0.05,ease:'easeInOut'}}
                className="px-4 py-2 rounded-full bg-secondary text-muted-foreground text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}

          </div>

        </motion.div>

      </div>

    </section>
  )
};

export default SkillsSection;
