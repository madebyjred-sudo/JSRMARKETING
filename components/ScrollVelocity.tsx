import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";

// Helper to wrap value within a range
const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

interface ScrollVelocityProps {
  children?: React.ReactNode;
  velocity?: number; // Base velocity
  className?: string;
  texts?: string[]; 
}

export default function ScrollVelocity({ children, velocity = 1, className = "" }: ScrollVelocityProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  
  // Adjusted spring physics for smoother reaction to scroll
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 300 
  });
  
  // Map scroll speed to an acceleration factor
  // Reduced the output range [0, 5] -> [0, 2.5] to prevent it from going too fast on scroll
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 2.5], {
    clamp: false
  });

  // We are duplicating the children 4 times.
  // The wrap logic resets the position once it has moved -25% (1/4th of the total width).
  const x = useTransform(baseX, (v) => `${wrap(0, -25, v)}%`);

  const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    // Calculate base movement: velocity * time
    let moveBy = directionFactor.current * velocity * (delta / 1000);

    // Get current scroll velocity influence
    const currentVelocityFactor = velocityFactor.get();

    // Change direction based on scroll polarity
    if (currentVelocityFactor < 0) {
      directionFactor.current = -1;
    } else if (currentVelocityFactor > 0) {
      directionFactor.current = 1;
    }

    // Apply acceleration based on scroll speed. 
    // We add the base movement to the accelerated movement.
    moveBy += directionFactor.current * moveBy * Math.abs(currentVelocityFactor);

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className={`overflow-hidden whitespace-nowrap w-full ${className}`} style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
      <motion.div className="flex flex-nowrap gap-16 w-max" style={{ x }}>
        {/* Render 4 copies for seamless looping */}
        <div className="flex gap-16 items-center">
           {children}
        </div>
        <div className="flex gap-16 items-center">
           {children}
        </div>
        <div className="flex gap-16 items-center">
           {children}
        </div>
        <div className="flex gap-16 items-center">
           {children}
        </div>
      </motion.div>
    </div>
  );
}