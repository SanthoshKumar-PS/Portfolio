import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import type { IconType } from "react-icons/lib";
import { 
  SiReact, 
  SiTypescript, 
  SiNodedotjs, 
  SiFlutter, 
  SiPostgresql, 
  SiGit,
  SiExpress,
  SiMysql 
} from "react-icons/si";
type TechStackType = {
    icon: IconType;
    name: string;
    color: string;
}
const techStack : TechStackType[] = [
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiFlutter, name: "Flutter", color: "#02569B" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
  { icon: SiMysql, name: "MySQL", color: "#4479A1" },
  { icon: SiExpress, name: "Express", color: "#ffffff" },
  { icon: SiGit, name: "Git", color: "#F05032" },
];

interface TechCardProps {
    tech: TechStackType,
    index:number
}

const TechCard = ({tech, index}:TechCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness:300, damping:30 })
    const springY = useSpring(mouseY, { stiffness:300, damping:30 })

    const rotateX = useTransform(springY,[-0.5,0.5],[15,-15])
    const rotateY = useTransform(springX, [-0.5,0.5], [-15,15])

    const handleMouseMove = (e:React.MouseEvent) => {
        if(!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y); 
    }

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    }

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity:0, scale:0, rotateY:-180 }}
            animate={{ opacity:1,scale:1,rotateY:0 }}
            transition={{
                delay: 1 + index*0.1,
                type:'spring',
                stiffness:200,
                damping:15
            }}
            whileHover={{scale:1.1, z:50}}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group relative perspective-1000"
            style={{
                rotateX,
                rotateY,
                transformStyle:'preserve-3d'
            }}
        >
            <motion.div
                className="p-3 md:p-4 rounded-xl bg-secondary/50 border border-border/50 transition-all duration-300 cursor-pointer relative overflow-hidden"
                whileHover={{
                    borderColor:tech.color,
                    boxShadow: `0 0 30px ${tech.color}40`
                }}
            >
                {/* Circle background while hover */}
                <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                        background: `radial-gradient(circle at center, ${tech.color}20, transparent 70%)`
                    }}
                />

                {/* Icon with color transition */}
                <motion.div
                    whileHover={{ rotate:[0,-10,10,0] }}
                    transition={{ duration:0.5 }}
                >
                    <tech.icon
                        size={24}
                        className="md:w-7 md:h-7 relative z-10 transition-all duration-300"
                        style={{
                            color:"hsl(var(--muted-foreground))"
                        }}
                    />
                </motion.div>

                {/* Shine Effect */}
                <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    initial={{ x:'-100%',opacity:0 }}
                    whileHover={{
                        x:'100%',
                        opacity: [0, 0.5, 0],
                        transition:{ duration:0.6, ease:'easeInOut' }
                    }}
                    style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2),transparent)'
                    }}
                />
            </motion.div>

            {/* Tooltip with animation */}
            <motion.span
                transition={{ duration:2, ease:'easeInOut' }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground whitespace-nowrap px-2 py-1 bg-secondary/80 rounded-md backdrop-blur-sm 
                opacity-0 group-hover:opacity-100
                -translate-y-4 group-hover:translate-y-0
                scale-70 group-hover:scale-100
                duration-300"
            >
                {tech.name}
            </motion.span>
            

            {/* Floating indicator */}
            <motion.div
                className="absolute -top-1 -right-1 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100"
                style={{ backgroundColor:tech.color }}
                animate={{
                    scale: [1, 1.2, 1]
                }}
                transition={{
                    duration:1,
                    repeat:Infinity,
                    ease:'easeInOut'
                }}
            />
                

        </motion.div>
    )


}


const TechStackIcons = () => {
  return (
    <motion.div
        initial={{opacity:0,y:20}}
        animate={{opacity:1, y:0}}
        transition={{delay:0.8, duration:0.6}}
        className="flex flex-wrap justify-center gap-4 md:gap-6"
    >
        {techStack.map((tech,index)=>(
            <TechCard tech={tech} index={index}/>

        ))}
    </motion.div>
  )
}

export default TechStackIcons