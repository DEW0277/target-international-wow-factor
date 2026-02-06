import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AnimatedBackground = () => {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Transform background based on scroll
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const opacityblob = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="fixed inset-0 z-[-1] bg-cream" />;

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-cream selection:bg-red-cta/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8),transparent_100%)] z-10" />

      {/* CSS-based animated gradients (Performance Optimized) */}
      <motion.div 
        style={{ scale, rotate, opacity: opacityblob }}
        className="absolute inset-0"
      >
        <div 
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-400/50 rounded-full blur-[80px] animate-blob"
        />
        <div 
          className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-indigo-400/40 rounded-full blur-[80px] animate-blob animation-delay-2000"
        />
        <div 
          className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] bg-sky-400/40 rounded-full blur-[100px] animate-blob animation-delay-4000"
        />
        <div 
          className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] bg-red-400/40 rounded-full blur-[60px] animate-blob animation-delay-6000"
        />
      </motion.div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] z-20 pointer-events-none" />
      
      {/* Wave Lines (SVG) - Static or lighter CSS animation */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.3] z-20" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0,50 Q25,45 50,50 T100,50"
          fill="none"
          stroke="rgba(30, 64, 175, 0.1)"
          strokeWidth="0.5"
          className="animate-wave-slow"
          style={{ transformOrigin: "center", transform: "scale(20, 2)" }} 
        />
         <path
          d="M0,30 Q25,35 50,30 T100,30"
          fill="none"
          stroke="rgba(220, 38, 38, 0.1)"
          strokeWidth="0.5"
          className="animate-wave-slower"
          style={{ transformOrigin: "center", transform: "scale(20, 2)" }}
        />
      </svg>
    </div>
  );
};

export default AnimatedBackground;
