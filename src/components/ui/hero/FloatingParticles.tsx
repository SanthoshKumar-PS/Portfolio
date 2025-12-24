import { useMemo } from "react"
import { motion } from "framer-motion"

const FloatingParticles = () => {
  const particles = useMemo(()=>{
    return Array.from({length:50},(_,i)=>({
      id: i,
      x: Math.random()*100,
      y:Math.random()*100,
      size:Math.random()*4+ 1,
      duration: Math.random()*20 +10,
      delay:Math.random()*5
    }))
  },[])
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none ">
      {particles.map((particle)=>(
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y:[0,-100,0],
            x:[0,Math.random()*50-25,0],
            opacity: [0,1,0],
            scale:[0,1,0]
          }}
          transition={{
            duration:particle.duration,
            repeat:Infinity,
            ease:'easeInOut'
          }}
        />
      ))}
    </div>
  )
}

export default FloatingParticles