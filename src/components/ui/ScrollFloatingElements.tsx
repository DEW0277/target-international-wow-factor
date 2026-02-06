
import { motion, useScroll, useTransform, useVelocity, useSpring, MotionValue } from "framer-motion";
import { BookOpen, GraduationCap, Atom, Palette, Globe, Calculator, Microscope, Music, Laptop, School, Pencil, Brain, Lightbulb, LucideIcon } from "lucide-react";
import { useRef } from "react";

const icons = [
  { Icon: BookOpen, color: "text-blue-500", top: "10%", left: "5%", size: 48, speed: 0.2 },
  { Icon: GraduationCap, color: "text-red-500", top: "25%", right: "8%", size: 64, speed: 0.5 },
  { Icon: Atom, color: "text-indigo-500", top: "45%", left: "10%", size: 40, speed: 0.3 },
  { Icon: Palette, color: "text-pink-500", top: "60%", right: "12%", size: 56, speed: 0.4 },
  { Icon: Globe, color: "text-green-500", top: "80%", left: "8%", size: 48, speed: 0.2 },
  { Icon: Calculator, color: "text-orange-500", top: "15%", right: "20%", size: 32, speed: 0.6 },
  { Icon: Microscope, color: "text-teal-500", top: "35%", left: "25%", size: 40, speed: 0.3 },
  { Icon: Music, color: "text-purple-500", top: "70%", left: "15%", size: 36, speed: 0.5 },
  { Icon: Laptop, color: "text-cyan-500", top: "90%", right: "25%", size: 44, speed: 0.4 },
  { Icon: School, color: "text-yellow-600", top: "5%", left: "40%", size: 50, speed: 0.25 },
  { Icon: Pencil, color: "text-yellow-500", top: "50%", right: "40%", size: 38, speed: 0.45 },
  { Icon: Brain, color: "text-rose-500", top: "75%", left: "35%", size: 42, speed: 0.35 },
  { Icon: Lightbulb, color: "text-amber-500", top: "20%", left: "60%", size: 46, speed: 0.55 },
];

interface IconItem {
  Icon: LucideIcon;
  color: string;
  top: string;
  left?: string;
  right?: string;
  size: number;
  speed: number;
}

const FloatingIcon = ({ item, scrollYProgress, velocityOpacity, index }: { item: IconItem; scrollYProgress: MotionValue<number>; velocityOpacity: MotionValue<number>; index: number }) => {
  // Create a unique parallax effect for each icon based on its speed
  // Since we are fixed, y will move the icon relative to the viewport.
  // speed * 200 provides a gentle drift.
  const y = useTransform(scrollYProgress, [0, 1], [0, item.speed * 200]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360 * (index % 2 === 0 ? 1 : -1)]);
  
  return (
    <motion.div
      style={{
        position: "absolute",
        top: item.top,
        left: item.left,
        right: item.right,
        y,
        rotate,
        opacity: velocityOpacity,
      }}
      className={`${item.color}`}
    >
      <item.Icon size={item.size} strokeWidth={1.5} />
    </motion.div>
  );
};

export const ScrollFloatingElements = () => {
  const { scrollY, scrollYProgress } = useScroll(); // Use window scroll
  
  // Create visibility based on scroll velocity
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  
  // If velocity is near 0, opacity is 0. High velocity -> opacity 1.
  // Range [-50, 0, 50] -> [1, 0, 1] means slow movement (near 0) is invisible.
  // Expanded range to make it sensitive but not flicker: [-100, -20, 0, 20, 100]
  const velocityOpacity = useTransform(smoothVelocity, [-100, -5, 0, 5, 100], [1, 1, 0, 1, 1]);

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden h-screen">
      {icons.map((item, index) => (
        <FloatingIcon 
          key={index} 
          item={item} 
          scrollYProgress={scrollYProgress} 
          velocityOpacity={velocityOpacity} 
          index={index} 
        />
      ))}
    </div>
  );
};

export default ScrollFloatingElements;
