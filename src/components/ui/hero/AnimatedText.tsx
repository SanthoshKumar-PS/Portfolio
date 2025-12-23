import { delay, useMotionValue, useSpring, useTransform } from "framer-motion"
import React, { useRef } from "react"
import { motion } from 'framer-motion'
import type { Variants } from "framer-motion";


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

    const letterVariants : Variants = {
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

    const wordVariants : Variants = {
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

    const glowVariants : Variants = {
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
    <motion.div
        ref= {containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="text-center space-y-4 perspective-1000"
        style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d'
        }}
    >
        {/* Name with 3D letter animation */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="sr-only">{name}</span>
            <span aria-hidden='true' className="inline-block ">
                {name.split("").map((char,index)=> (
                    <motion.span
                        key={index}
                        custom={index}
                        variants={letterVariants}
                        initial='hidden'
                        animate='visible'
                        whileHover={{
                            scale:1.2,
                            color:'hsl(var(--primary))',
                            textShadow:'0 0 20px hsl(var(--primary)/0.8)',
                            transition: {duration: 0.2}
                        }}
                        className={`inline-block cursor-pointer ${char===" "?"w-3 md:w-4":""} ${index<20?"gradient-text":"text-foreground"}`}
                        style = {{ transformStyle: 'preserve-3d' }}

                    >
                        {char===" "?"\u00A0":char}
                    </motion.span>
                ))}
            </span>
        </h1>

        {/* Animated Text with Shimmer Effect */}
        <div className="overflow-hidden relative">
            <motion.h2
                custom={0}
                variants={wordVariants}
                initial='hidden'
                animate='visible'
                className="font-display text-xl sm:text-2xl md:text-3xl font-semibold relative"
            >
                <span className="relative z-10 bg-gradient-to-r from-primary via-glow-secondary to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">
                    {title}
                </span>
            </motion.h2>
        </div>

        {/* Subtitle with glow */}
        <motion.p
            custom={1}
            variants={wordVariants}
            initial='hidden'
            animate='visible'
            className="text-muted-foreground text-base md:text-lg relative "
        >
            <motion.span
                variants={glowVariants}
                initial='initial'
                animate='animate'
                className="relative"
            >
                {subtitle}

            </motion.span>

        </motion.p>

        {/* Value Statement */}
        <motion.div
            custom={2}
            variants={wordVariants}
            initial='hidden'
            animate='visible'
            className="relative"
        >
            <motion.p className="text-foreground/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                I build{" "}
                <motion.span className="relative inline-block text-primary font-medium">
                    <span className="relative z-10">scalable applications</span>
                    <motion.span
                     className="absolute inset-0 bg-primary/10 rounded-lg z-0"
                     initial={{ scaleX:0 }}
                     animate={{ scaleX:1 }}
                     transition={{ delay:1.5, duration:0.5, ease:'easeInOut' }}
                     style={{ originX:0 }}
                    />
                </motion.span>
                {" "}
                that solve real business problems.

            </motion.p>

        </motion.div>





    </motion.div>
  )
}

export default AnimatedText