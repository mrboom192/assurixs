import { motion } from "motion/react";

interface Shape {
  id: number;
  size: number;
  color: string;
  initialX: number;
  initialY: number;
  duration: number;
  delay: number;
}

export function AnimatedBackground() {
  // Generate random shapes with brand colors
  const shapes: Shape[] = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 200 + 100, // 100-300px
    color: [
      "rgba(43, 46, 74, 0.03)", // navy
      "rgba(44, 74, 124, 0.04)", // blue
      "rgba(90, 159, 63, 0.03)", // green
      "rgba(201, 162, 39, 0.04)", // gold
    ][Math.floor(Math.random() * 4)],
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    duration: Math.random() * 20 + 20, // 20-40s
    delay: Math.random() * 5,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute rounded-full"
          style={{
            width: shape.size,
            height: shape.size,
            backgroundColor: shape.color,
            left: `${shape.initialX}%`,
            top: `${shape.initialY}%`,
          }}
          animate={{
            x: [
              0,
              Math.random() * 200 - 100,
              Math.random() * 200 - 100,
              Math.random() * 200 - 100,
              0,
            ],
            y: [
              0,
              Math.random() * 200 - 100,
              Math.random() * 200 - 100,
              Math.random() * 200 - 100,
              0,
            ],
            scale: [
              1,
              Math.random() * 0.5 + 0.8,
              Math.random() * 0.5 + 0.8,
              Math.random() * 0.5 + 0.8,
              1,
            ],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
