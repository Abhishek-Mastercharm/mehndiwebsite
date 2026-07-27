import React from 'react';
import { motion } from 'framer-motion';

const Card = ({
  children,
  variant = 'default',
  className = '',
  hoverEffect = true,
  ...props
}) => {
  const baseStyles = "bg-[var(--color-card)] rounded-xl overflow-hidden border border-[var(--color-border)]";
  
  const variants = {
    default: "shadow-md",
    product: "shadow-lg text-center p-4",
    feature: "shadow-md p-6 flex flex-col items-center text-center",
    gallery: "shadow-sm",
    country: "shadow-sm flex items-center p-3 rounded-full bg-[var(--color-background)] border-[var(--color-border)]",
    testimonial: "shadow-lg p-6 bg-[var(--color-accent)] border-none relative",
  };

  const MotionTag = hoverEffect ? motion.div : 'div';
  const motionProps = hoverEffect ? {
    whileHover: { y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" },
    transition: { duration: 0.2 }
  } : {};

  return (
    <MotionTag
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...motionProps}
      {...props}
    >
      {children}
    </MotionTag>
  );
};

export default Card;
