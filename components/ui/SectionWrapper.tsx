import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className, delay = 0, id }) => {
  return (
    // @ts-ignore: Suppressing strict type check for standard motion props
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      className={cn("relative", className)}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;