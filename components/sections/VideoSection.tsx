"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

export default function VideoSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <Container>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text-blue mb-6">
            What is Macrovesta?
          </h2>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Discover how our platform is transforming the cotton industry.
            Macrovesta combines a comprehensive database of cotton industry data
            across the supply chain with AI-backed analytical tools designed to
            map market sentiment and forecast seasonal volatility. Macrovesta
            empowers you to cut down on extensive research, focus on strategic
            planning, and stay ahead of significant market developments.
          </p>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto glass-card overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative aspect-video">
            <iframe
              src="https://www.youtube.com/embed/jar9GeTyWIw?autoplay=0"
              title="What is Macrovesta?"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full rounded-lg"
            />
          </div>
        </motion.div>

        <motion.p
          className="text-center text-gray-400 mt-8 max-w-4xl mx-auto text-sm md:text-base leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          As your digital market advisor, Macrovesta simplifies processes to save
          time, reduce costs, and mitigate risks, ultimately enhancing your
          business's profitability. Watch now to see how you can leverage
          Macrovesta's innovative tools to revolutionise how you approach pricing
          strategy and risk management in the cotton industry.
        </motion.p>
      </Container>

      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-mv-blue-600/5 to-transparent blur-3xl pointer-events-none" />
    </section>
  );
}
