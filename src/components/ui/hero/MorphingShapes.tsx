import { useMotionValue, useSpring, useTransform } from 'framer-motion'
import  { useCallback, useEffect, useState } from 'react'
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

      {/* Floating Hexagon */}
      <motion.div
        className='absolute top-20 right-20 opacity-10'
        animate={{
            x: mousePosition.x * 0.3,
            y:mousePosition.y * 0.3,
            rotate:[0, 60, 0]
        }}
        transition={{
            x: { type:'spring', stiffness:30 },
            y: { type:'spring', stiffness:30 },
            rotate: { duration:20, repeat:Infinity, ease:'easeInOut' }
        }}
      >
       <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          <polygon
            points="100,10 190,55 190,145 100,190 10,145 10,55"
            stroke="hsl(var(--primary))"
            strokeWidth="1"
            fill="none"
          />
          <polygon
            points="100,30 170,65 170,135 100,170 30,135 30,65"
            stroke="hsl(var(--primary))"
            strokeWidth="0.5"
            fill="none"
          />
        </svg>

      </motion.div>

      {/* Animated line patterns */}
      <motion.div
        className='absolute bottom-32 left-20 opacity-20'
        animate={{
            x:mousePosition.x * -0.5,
            y:mousePosition.y * 0.5
        }}
        transition={{ type:'spring', stiffness:20 }}
      >
        <svg width='150' height='150' viewBox='0 0 150 150'>
            {[0,1,2,3,4].map(i=>(
                <motion.line
                    key={i}
                    x1='0'
                    y1={i*30}
                    x2='150'
                    y2={i*30}
                    stroke='hsl(var(--primary))'
                    strokeWidth='1'
                    initial={{ pathLength:0 }}
                    animate={{ pathLength: [0, 1, 0] }}
                    transition={{
                        duration:3,
                        repeat: Infinity,
                        delay:i*0.2,
                        ease:'easeInOut'
                    }}
                />
            ))}
        </svg>
      </motion.div>

      {/* Dynamic rings */}
      <motion.div
        className='absolute top-1/3 right-1/4 w-64 h-64 opacity-15'
        animate={{
            x: mousePosition.x * 0.8,
            y:mousePosition.y * 0.8,
            rotate:360
        }}
        transition={{
            x: { type:'spring', stiffness:40, damping:20 },
            y: { type:'spring', stiffness:40, damping:20 },
            rotate: { duration:30, repeat:Infinity, ease:'linear' }
        }}
      >
        <div className='w-full h-full border-2 border-primary/40 rounded-full'/>
        <motion.div
            className='absolute inset-4 border border-glow-secondary/30 rounded-full'
            animate={{ rotate:-360 }}
            transition={{ duration:20, repeat: Infinity, ease:'linear' }}
        />
        <motion.div 
            className='absolute inset-8 border border-primary/20 rounded-full'
            animate={{ scale:[1,1.1,1] }}
            transition={{ duration:4, repeat:Infinity, ease:'easeInOut' }}
        />

      </motion.div>

      {/* Pulsing corner - top left */}
      <motion.div
        className='absolute top-10 left-10 w-32 h-32 opacity-20'
        animate={{
            scale:[1,1.2,1],
            opacity:[0.1, 0.3, 0.1]
        }}
        transition={{ duration:4, repeat:Infinity, ease:'easeInOut' }}
      >
        <div className='w-full h-full border-l-2 border-t-2 border-primary/50 rounded-tl-3xl'/>

      </motion.div>

      {/* Pulsing corner - bottom right */}
      <motion.div
        className='absolute bottom-10 right-10 w-32 h-32 opacity-20'
        animate={{
            scale: [1, 1.2, 1],
            opacity:[0.1, 0.3, 0.1]
        }}
        transition={{ duration:4, repeat:Infinity, ease:'easeInOut', delay:2 }}
      >
        <div className='w-full h-full border-r-2 border-b-2 border-primary/50 rounded-br-3xl'/>

      </motion.div>


    </div>
  )
}

export default MorphingShapes2