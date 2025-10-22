import { motion } from "motion/react";
import { Star } from "lucide-react";

interface FloatingTestimonialProps {
  quote: string;
  author: string;
  role: string;
  rating: number;
  position: "left" | "right";
  className?: string;
}

export function FloatingTestimonial({
  quote,
  author,
  role,
  rating,
  position,
  className = "",
}: FloatingTestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: position === "left" ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`
        hidden lg:block absolute ${
          position === "left" ? "left-4 xl:left-8" : "right-4 xl:right-8"
        } 
        w-64 xl:w-72 z-20
        ${className}
      `}
    >
      <div className="bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-lg border border-gray-200/50 hover:shadow-xl transition-shadow duration-300">
        {/* Rating stars */}
        <div className="flex gap-0.5 mb-2">
          {Array.from({ length: rating }).map((_, i) => (
            <Star
              key={i}
              className="w-3.5 h-3.5 fill-[#C9A227] text-[#C9A227]"
            />
          ))}
        </div>

        {/* Quote */}
        <p
          className="text-sm text-gray-700 mb-3 italic line-clamp-3"
          style={{ fontFamily: "DM Sans", fontWeight: 400 }}
        >
          &quot;{quote}&quot;
        </p>

        {/* Author Role */}
        <div className="border-t border-gray-200 pt-2">
          <p
            className="text-xs text-[#2B2E4A]"
            style={{ fontFamily: "DM Sans", fontWeight: 600 }}
          >
            {role}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
