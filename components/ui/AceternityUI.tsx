import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useInView, Variants } from 'framer-motion';
import { cn } from '../../utils';

// --- 3D Card Effect ---
export const ThreeDCard = ({ children, className }: { children?: React.ReactNode; className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set(clientX - left - width / 2);
    y.set(clientY - top - height / 2);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  return (
    <motion.div
      className={className}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      // @ts-ignore: perspective is a valid style but types might omit it in favor of transform
      style={{ perspective: 1000 }}
    >
      <motion.div
        // @ts-ignore: rotateX and rotateY are valid motion value props or style entries, suppressing strict type error
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative h-full w-full transition-all duration-200 ease-linear"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

// --- Text Reveal ---
export const TextReveal = ({ text, className, delay = 0 }: { text: string, className?: string, delay?: number }) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      {/* @ts-ignore: Suppressing strict type check for standard motion props */}
      <motion.h2
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      >
        {text}
      </motion.h2>
    </div>
  );
};

// --- Flip Text (Layout Text Flip) ---
export const FlipText = ({
  className,
  children,
  delay = 0,
}: {
  className?: string;
  children: string;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  // Split by words to animate smoothly
  const words = children.split(" ");

  const variants: Variants = {
    hidden: {
      rotateX: 90,
      opacity: 0,
    },
    visible: (i: number) => ({
      rotateX: 0,
      opacity: 1,
      transition: {
        delay: delay + i * 0.05,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 20
      },
    }),
  };

  return (
    <div ref={ref} className={cn("flex flex-wrap justify-center gap-x-2 gap-y-1 perspective-[1000px]", className)}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={variants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="inline-block transform-style-3d origin-bottom"
        >
          {word === "<br>" ? <br className="hidden md:block basis-full h-0" /> : word}
        </motion.span>
      ))}
    </div>
  );
};


// --- Floating Element ---
export const FloatingElement = ({ children, delay = 0 }: { children?: React.ReactNode, delay?: number }) => {
  return (
    // @ts-ignore: Suppressing strict type check for standard motion props
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: -20 }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay
      }}
    >
      {children}
    </motion.div>
  );
};

// --- Comet Card (Moving Border) ---
export const CometCard = ({
  className,
  contentClassName,
  children,
}: {
  className?: string;
  contentClassName?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={cn("relative overflow-hidden p-[1px] rounded-xl group", className)}>
      {/* 
        Updated Conic Gradient to use Brand Navy (#003366) and Luxury Silver (#c0c0c0) 
        This ensures the "comet" tail matches the site theme.
      */}
      <div className="absolute inset-[-1000%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#003366_0%,#c0c0c0_50%,#003366_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className={cn("relative h-full w-full rounded-xl bg-white dark:bg-luxury-charcoal", contentClassName)}>
        {children}
      </div>
    </div>
  );
};