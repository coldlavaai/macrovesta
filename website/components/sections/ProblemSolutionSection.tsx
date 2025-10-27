"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ArrowIcon from "@/components/icons/ArrowIcon";

export default function ProblemSolutionSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Problem Card */}
        <motion.div
          className="relative group min-h-[600px] overflow-hidden"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Background */}
          <div className="absolute inset-0">
            <Image
              src="/images/prob-bg.webp"
              alt="Problem Background"
              fill
              className="object-cover"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-mv-accent-red/30 via-mv-accent-orange/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          </div>

          {/* Person */}
          <motion.div
            className="absolute right-0 bottom-0 w-1/2 h-[110%]"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/images/prob-person.webp"
              alt="Problem"
              fill
              className="object-contain object-bottom"
              quality={90}
            />
          </motion.div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center px-8 md:px-16">
            <motion.div
              className="max-w-lg glass-strong p-8 rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <ArrowIcon
                  variant="red"
                  rotation={-90}
                  className="w-12 h-12 md:w-16 md:h-16"
                />
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  The Problem
                </h2>
              </div>

              <p className="text-lg text-gray-200 mb-6 border-l-4 border-mv-accent-red pl-4">
                To redefine resilience in the agricultural trade, we need a
                solution that answers two fundamental questions:
              </p>

              <ul className="space-y-4">
                {[
                  "Where is my **commodity price** going?",
                  "How do I **manage** my season better?",
                ].map((item, i) => {
                  const parts = item.split("**");
                  return (
                    <li key={i} className="flex items-start gap-3">
                      <ArrowIcon
                        variant="red"
                        rotation={-90}
                        className="w-6 h-6 flex-shrink-0 mt-1"
                      />
                      <span className="text-white text-lg">
                        {parts.map((part, j) =>
                          j % 2 === 1 ? (
                            <strong key={j} className="text-mv-accent-red">
                              {part}
                            </strong>
                          ) : (
                            part
                          )
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Solution Card */}
        <motion.div
          className="relative group min-h-[600px] overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Background */}
          <div className="absolute inset-0">
            <Image
              src="/images/sol-bg.webp"
              alt="Solution Background"
              fill
              className="object-cover"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-mv-accent-green/30 via-mv-accent-turquoise/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          </div>

          {/* Person */}
          <motion.div
            className="absolute left-0 bottom-0 w-1/2 h-[110%]"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/images/sol-person.webp"
              alt="Solution"
              fill
              className="object-contain object-bottom"
              quality={90}
            />
          </motion.div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-end px-8 md:px-16">
            <motion.div
              className="max-w-lg glass-strong p-8 rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-4 mb-6 justify-end">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-right">
                  Our Solution
                </h2>
                <ArrowIcon
                  variant="green"
                  rotation={90}
                  className="w-12 h-12 md:w-16 md:h-16"
                />
              </div>

              <p className="text-lg text-gray-200 border-r-4 border-mv-accent-turquoise pr-4 text-right">
                Macrovesta bridges the gap between traditional analysis and the
                scalability of AI-powered software. By combining machine learning
                techniques and simplified data visualisation with industry
                expertise, Macrovesta forecasts market trends and prescribes
                actionable insights to help you manage your season more
                effectively.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
