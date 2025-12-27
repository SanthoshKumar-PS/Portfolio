import { motion } from "framer-motion";
import { useEffect, useState } from "react";
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
  return <div>SkillsSection</div>;
};

export default SkillsSection;
