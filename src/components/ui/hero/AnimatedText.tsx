import { delay, useMotionValue, useSpring, useTransform } from "framer-motion"
import React, { useRef } from "react"

const AnimatedText = () => {
    const name = "Santhosh Kumar P S"
    const title = "Full Stack Developer"
    const subtitle = "React & MySql Specialist"
    const containerRef = useRef<HTMLDivElement>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness:150, damping:20 })
    const springY = useSpring(mouseY, { stiffness:150, damping:20 })

    const rotateX = useTransform(springY, [-0.5,0.5],[5,-5]);
    const rotateY = useTransform(springX, [-0.5,0.5],[5,-5]);

    const handleMouseMove = (e:React.MouseEvent) => {
        if(!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y)
    }

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    }

    const letterVariants = {
        hidden: { opacity:0, y:50, rotateX:-90 },
        visible: (i:number) => ({
            opacity:1,
            y:0,
            rotateX:0,
            transition : {
                delay : i*0.03,
                duration : 0.6,
                ease: [0.22, 1, 0.36, 1]
            }
        })
    }

    const wordVariants = {
        hidden: { opacity:0, y:30, scale:0.9 },
        visible: (i:number) => ({
            opacity:1,
            y:0,
            scale:1,
            transition: {
                delay: 0.6 + i*0.15,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1]
            }
        })
    }

    const glowVariants = {
        initial: { opacity:0.5 },
        animate:{
            opacity: [0.5, 1, 0.5],
            transition: {
                duration: 2,
                repeat:Infinity,
                ease: 'easeInOut'
            }
        }
    }

  return (
    <div>AnimatedText</div>
  )
}

export default AnimatedText