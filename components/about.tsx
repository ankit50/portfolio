"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";

const About = () => {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-10 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <div className="flex flex-col sm:flex-col items-center justify-center gap-0 mb-8 ">
        {/* Logo image */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 0.2 }}
        >
          <Image
            src="/logo.png"
            alt="ankit-kharel-logo"
            width={80}
            height={80}
            quality={95}
            priority
            className="
              rounded-full
              object-cover
              object-top
              border-2 border-white
              shadow-lg
              w-20 h-20
            "
          />
        </motion.div>

        {/* Section heading */}
        <SectionHeading>About me</SectionHeading>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
          Bachelor of Computer Engineering, 2019
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Kantipur Engineering College, Dhapakhel, Lalitpur, Nepal
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
          Tribhuvan University
        </p>
        <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
          After earning my degree in{" "}
          <span className="font-medium text-gray-900 dark:text-white">
            Computer Engineering
          </span>
          , I began my journey as a lecturer and instructor, teaching core
          subjects like{" "}
          <span className="font-medium text-gray-900 dark:text-white">
            C, C++, JAVA, and Data Structures
          </span>
          .{" "}
          <span className="italic text-gray-800 dark:text-gray-200">
            Teaching has been deeply fulfilling
          </span>
          , but my curiosity and love for coding led me to explore the world of
          web development. I’m now an{" "}
          <span className="font-medium text-gray-900 dark:text-white">
            aspiring full-stack developer
          </span>{" "}
          who enjoys building practical applications in my free time. My core
          stack includes{" "}
          <span className="font-medium text-gray-900 dark:text-white">
            React, Next.js, Node.js, and MongoDB
          </span>
          .
        </p>
      </div>
    </motion.section>
  );
};
export default About;
