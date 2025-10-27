"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import { rotatingTexts } from "@/lib/utils";

export default function RotatingTextSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      <Container className="text-center">
        <motion.p
          className="text-xl md:text-2xl lg:text-3xl font-extrabold text-mv-blue-400 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          With Macrovesta, you can confidently navigate the complexities of
        </motion.p>

        <div className="h-32 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h2
              key={currentIndex}
              className="text-4xl md:text-6xl lg:text-8xl font-extrabold gradient-text-blue"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ duration: 0.6 }}
            >
              {rotatingTexts[currentIndex]}
            </motion.h2>
          </AnimatePresence>
        </div>
      </Container>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-mv-blue-600/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-mv-accent-turquoise/10 rounded-full blur-3xl -translate-y-1/2" />
    </section>
  );
}
