import { useMotionValue, useSpring, useTransform } from 'framer-motion'
import React, { useCallback, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
const MorphingShapes2 = () => {
    const [mousePosition, setMousePosition] = useState({x:0, y:0})
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness:50, damping:20 })
    const springY = useSpring(mouseY, { stiffness:50, damping:20 })

    const rotateX = useTransform(springY,[-0.5,0.5],[15,-15])
    const rotateY = useTransform(springX,[-0.5,0.5],[-15,15])

    const handleMouseMove = useCallback((e:MouseEvent) => {
        const x = (e.clientX / window.innerWidth) - 0.5
        const y = (e.clientY / window.innerHeight) - 0.5
        mouseX.set(x)
        mouseY.set(y)
        setMousePosition({ x:x*60,y:y*60 })
    },[mouseX, mouseY])

    useEffect(()=>{
        window.addEventListener('mousemove',handleMouseMove);
        return ()=> window.removeEventListener('mousemove',handleMouseMove)

    },[handleMouseMove])

  return (
    <div className='absolute inset-0 overflow-hidden pointers-events-none'>
      {/* Main 3D morphing blob with perspective */}
      <motion.div
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px]'
        style={{
            perspective:1000,
            rotateX,
            rotateY
        }}      
      >
        <motion.div
            className='w-full h-full relative'
            animate={{
                rotate:[0,360]
            }}
            transition={{
                rotate: { duration:50, repeat: Infinity, ease:'linear' }
            }}
        >
            <motion.div
                className='absolute inset-0 opacity-20 '
                animate={{
                    scale:[1,1.1,1],
                    rotate:[0,180,360]
                }}
                transition={{
                    duration:20,
                    repeat:Infinity,
                    ease:'easeInOut'
                }}
            >
                <div className='w-full h-full bg-gradient-conic from-primary via-glow-secondary to-primary rounded-full blur-3xl '/>
            </motion.div>

            <motion.div
                className='absolute inset-12 opacity-30'
                animate={{
                    scale: [1.1,1,1.1],
                    rotate: [360, 180, 0],
                }}
                transition={{
                    duration:15, 
                    repeat: Infinity,
                    ease:'easeInOut'
                }}
            >
                <div className='w-full h-full bg-gradient-to-br from-primary/50 to-glow-secondary/50 rounded-full blur-3xl animate-morph'/>
                
            </motion.div>

        </motion.div>


      </motion.div>



    </div>
  )
}

export default MorphingShapes2