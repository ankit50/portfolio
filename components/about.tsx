"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Engineering</span>, I began my
        professional journey by teaching programming and mentoring students in{" "}
        <span className="font-medium">C, C++, JAVA, and Data Structures</span>.
        Over time, my interest shifted from teaching to building, which led me
        to dive deeper into{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        thrill of cracking challenging bugs and designing efficient systems. My
        core stack includes{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
      </p>
    </motion.section>
  );
};
export default About;
