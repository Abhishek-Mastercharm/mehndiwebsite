import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaSpinner } from 'react-icons/fa';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  icon,
  className = '',
  onClick,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-[var(--color-primary)] text-[var(--color-accent)] hover:bg-[var(--color-text)] focus:ring-[var(--color-primary)]",
    secondary: "bg-[var(--color-secondary)] text-white hover:bg-[#9a7009] focus:ring-[var(--color-secondary)]",
    outline: "border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-accent)] focus:ring-[var(--color-primary)]",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#128C7E] focus:ring-[#25D366]",
    icon: "p-2 bg-transparent text-[var(--color-primary)] hover:bg-[var(--color-border)] rounded-full",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-8 py-3 text-lg",
    icon: "p-2",
  };

  const disabledStyles = isLoading || props.disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer";

  // Use framer-motion if not disabled
  const MotionTag = (isLoading || props.disabled) ? 'button' : motion.button;
  const motionProps = (isLoading || props.disabled) ? {} : { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 } };

  return (
    <MotionTag
      className={`${baseStyles} ${variants[variant]} ${variant === 'icon' ? sizes.icon : sizes[size]} ${disabledStyles} ${className}`}
      onClick={onClick}
      disabled={isLoading || props.disabled}
      {...motionProps}
      {...props}
    >
      {isLoading && <FaSpinner className="animate-spin mr-2" />}
      {!isLoading && icon && variant !== 'icon' && <span className="mr-2">{icon}</span>}
      {variant === 'whatsapp' && !isLoading && !icon && <FaWhatsapp className="mr-2 text-xl" />}
      
      {children}
      
      {!isLoading && icon && variant === 'icon' && icon}
    </MotionTag>
  );
};

export default Button;
