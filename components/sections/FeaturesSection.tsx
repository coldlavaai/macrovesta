"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import ArrowIcon from "@/components/icons/ArrowIcon";
import { features } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  bullets: string[];
  index: number;
}

function FeatureCard({ title, bullets, index }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Convert markdown bold to JSX
  const renderBullet = (bullet: string) => {
    const parts = bullet.split("**");
    return parts.map((part, i) =>
      i % 2 === 1 ? <strong key={i}>{part}</strong> : part
    );
  };

  return (
    <motion.div
      className="glass-card group h-96 relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Icon Placeholder (visible when not hovered) */}
      <motion.div
        className="flex flex-col items-center justify-center h-full transition-opacity duration-300"
        initial={{ opacity: 1 }}
        animate={{ opacity: isHovered ? 0 : 1 }}
      >
        <div className="w-32 h-32 mb-6 rounded-2xl glass-strong flex items-center justify-center">
          <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-mv-accent-turquoise/20 to-mv-accent-green/20" />
        </div>
        <h3 className="text-2xl lg:text-3xl font-bold text-white px-6 text-center">
          {title}
        </h3>
      </motion.div>

      {/* Bullets (visible on hover) */}
      <motion.div
        className="absolute inset-0 p-8 flex flex-col justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-2xl font-bold text-white mb-6">{title}</h3>
        <ul className="space-y-4">
          {bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-300">
              <ArrowIcon variant="green" className="w-6 h-6 flex-shrink-0 mt-1" />
              <span className="text-base">{renderBullet(bullet)}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Hover Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-mv-accent-turquoise/5 to-mv-accent-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      />
    </motion.div>
  );
}

export default function FeaturesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <Container>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text-blue mb-6">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to make informed decisions in agricultural trading
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </Container>

      {/* Background Decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-mv-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-mv-accent-turquoise/5 rounded-full blur-3xl" />
    </section>
  );
}
