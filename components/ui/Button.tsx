"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  children,
  className,
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "glass-strong hover:bg-white/20 border-white/30 text-white px-6 py-3 rounded-lg font-medium hover-lift hover-glow transition-all duration-300",
    secondary:
      "text-white underline decoration-mv-accent-turquoise underline-offset-4 px-6 py-3 hover:decoration-2 transition-all duration-300",
    ghost:
      "glass hover:bg-white/10 border-white/10 text-white px-6 py-3 rounded-lg transition-all duration-300",
  };

  return (
    <motion.button
      className={cn(variants[variant], className)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
