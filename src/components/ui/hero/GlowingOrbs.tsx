import { motion } from "framer-motion";

const GlowingOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Pulsing glow orb 1 */}
      <motion.div
        className="absolute top-1/4 right-1/3 w-2 h-2"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full bg-primary rounded-full shadow-[0_0_20px_10px_hsl(var(--primary)/0.5)]" />
      </motion.div>

      {/* Pulsing glow orb 2 */}
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-3 h-3"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <div className="w-full h-full bg-glow-secondary rounded-full shadow-[0_0_30px_15px_hsl(var(--glow-secondary)/0.4)]" />
      </motion.div>

      {/* Orbiting particle */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64"
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "center center" }}
      >
        <motion.div
          className="absolute -top-1 left-1/2 w-2 h-2"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-full h-full bg-primary rounded-full shadow-[0_0_10px_5px_hsl(var(--primary)/0.6)]" />
        </motion.div>
      </motion.div>

      {/* Second orbiting particle - opposite direction */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "center center" }}
      >
        <motion.div
          className="absolute top-0 left-1/2 w-1.5 h-1.5"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="w-full h-full bg-glow-secondary rounded-full shadow-[0_0_8px_4px_hsl(var(--glow-secondary)/0.5)]" />
        </motion.div>
      </motion.div>

    </div>
  );
};

export default GlowingOrbs;
