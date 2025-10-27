"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";

export default function TestimonialsSection() {
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Trusted by clients across the supply chain in 14 countries and 5
            continents
          </h2>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto">
            Over the last decade the Macrovesta team have delivered world-renowned
            commodity market consultancy to some of the largest farms, mills and
            retailers in the world. Through Macrovesta we are making our expertise
            and critical analysis available to organisations of all sizes.
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative">
            {/* Quote Icon */}
            <div className="absolute -top-6 -left-6 text-7xl text-mv-accent-turquoise/20 font-serif">
              &ldquo;
            </div>

            <p className="text-lg md:text-xl text-gray-300 italic leading-relaxed mb-8">
              I spent time in your new platform and I would like to share my
              impression about it. It is very appealing, well organized, easy to
              use but most of all I appreciate the educational part of it, how you
              explain, in simple words and with examples, what is needed to truly
              understand the cotton market. Looking forward to receiving the
              alerts.
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full glass-strong flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/greece-flag.svg"
                  alt="Greece flag"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <div>
                <p className="text-white font-semibold">
                  Cotton Ginner and Spinner
                </p>
                <p className="text-gray-400 text-sm">Greece</p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>

      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-mv-accent-turquoise/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-mv-accent-green/5 rounded-full blur-3xl -translate-y-1/2" />
    </section>
  );
}
