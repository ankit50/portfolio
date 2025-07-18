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

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy watching
        movies, playing story-driven video games, and spending time unwinding.
        I’m passionate about{" "}
        <span className="font-medium">learning new things</span>—lately diving
        into <span className="font-medium">history and philosophy</span>, while
        also teaching myself how to play the guitar.
      </p>
    </motion.section>
  );
};
export default About;
