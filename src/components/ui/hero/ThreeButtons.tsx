import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, Download, Mail, Sparkles } from 'lucide-react'
import { useRef } from 'react';
import { Button } from '../button';

export const RESUME_URL = 'https://drive.google.com/file/d/1dZDWePWvaQ24LwPWZB_0MkO_M04dh_TJ/view?usp=sharing'
interface AnimatedButtomProps {
    children: React.ReactNode;
    href: string;
    variant: 'hero' | 'heroOutline' | 'outline';
    delay: number;
}

const scrollToSection = (href:string) => {
    const id = href.substring(1);
    const element = document.getElementById(id);
    if(element){
        const offset = 80;
        const top = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top,behavior:'smooth' })
    } 
}

const AnimatedButton  = ({children, href, variant='hero', delay}:AnimatedButtomProps) => {
    const buttonRef = useRef<HTMLDivElement>(null)

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, {stiffness:300, damping:30})
    const springY = useSpring(mouseY, { stiffness:300, damping:30})

    const rotateX = useTransform(springY, [-0.5,0.5], [10,-10])
    const rotateY = useTransform(springX, [-0.5,0.5], [-10,10])

    const handleMouseMove = (e:React.MouseEvent) => {
        if(!buttonRef.current) return;
        const rect = buttonRef.current.getBoundingClientRect();
        const x = (e.clientX-rect.left)/ rect.width - 0.5;
        const y = (e.clientY-rect.top)/rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    }

    const handleMouseLeave = (e:React.MouseEvent) => {
        mouseX.set(0);
        mouseY.set(0);
    }

    return (
        <motion.div
            ref={buttonRef}
            initial={{ opacity:0, y:30, scale:0.9 }}
            animate={{ opacity:1, y:0, scale:1 }}
            transition={{
                delay,
                duration:0.5,
                ease:[0.22, 1, 0.36, 1]
            }}
            whileHover={{ scale:1.05 }}
            whileTap={{ scale:0.95 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className='perspective-1000'
            style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d'
            }}
        >
            <Button
                variant={variant}
                size='lg'
                className='group relative overflow-hidden cursor-pointer'
                onClick={()=>
                    href==='resume'
                        ? window.open(RESUME_URL,'_blank', 'noopener,noreferrer')
                        : scrollToSection(href)
                    }
            >
                {/* Background Shimmer Animation */}
                <motion.span
                    className='absolute inset-0 opacity-0 group-hover:opacity-100'
                    initial={{x:'-100%'}}
                    whileHover={{x:"100%"}}
                    transition={{ duration:6,ease:'easeInOut' }}
                    style={{
                        background:"linear-gradient(90deg, transparent,rgba(255,255,0.2), transparent)"
                    }}
                />
                {children}
            </Button>


        </motion.div>
    )

}
const ThreeButtons = () => {
  return (
    <motion.div
        initial='hidden'
        animate='visible'
        className='relative flex flex-col sm:flex-row items-center justify-center items-center gap-4 mt-8'
    >
        {/* Sparkles Top Left */}
        <motion.div
            className='absolute -top-4 -left-4 text-primary/50'
            animate={{
                y:[0,-10,0],
                rotate:[0,180,360],
                scale:[1, 1.2, 1]
            }}
            transition={{ duration:3, repeat:Infinity, ease:'easeInOut' }}
        >
            <Sparkles size={16}/>
        </motion.div>
        {/* Sparkles Bottom Right */}
        <motion.div
            className='absolute -bottom-4 -right-4 text-glow-secondary/50'
            animate={{
                y:[0,-10,0],
                rotate:[0,180,360],
                scale:[1, 1.2, 1]
            }}
            transition={{ duration:3, repeat:Infinity, ease:'easeInOut' }}
        >
            <Sparkles size={16}/>
        </motion.div>

        {/* Projects Button */}
        <AnimatedButton href='#projects' variant='hero' delay={1.2}>
            <span className='relative z-10 flex items-center gap-2'>
                View Projects
                <motion.span
                    animate = {{ x:[0,5,0] }}
                    transition={{ duration:1.5,repeat:Infinity, ease:'easeInOut' }}
                >
                    <ArrowRight size={18}/>
                </motion.span>
            </span>
        </AnimatedButton>

        {/* Download Resume */}
        <AnimatedButton href='resume' variant='heroOutline' delay={1.2}>
            <span className='relative z-10 flex items-center gap-2'>
                <motion.span
                    animate = {{ y:[0,-3,0] }}
                    transition={{ duration:1.5,repeat:Infinity, ease:'easeInOut' }}
                >
                    <Download size={18}/>
                </motion.span>
                Resume
            </span>
        </AnimatedButton>

        {/* Contact Button */}
        <AnimatedButton href='#contact' variant='outline' delay={1.3}>
            <span className='relative z-10 flex items-center gap-2'>
                <motion.span
                    animate={{ rotate:[0, 8, -8, 0] }}
                    transition={{ duration:2, repeat:Infinity, ease:'easeInOut' }}
                >
                    <Mail size={18}/>
                </motion.span>
                Contact
            </span>

        </AnimatedButton>

    </motion.div>
  )
}

export default ThreeButtons