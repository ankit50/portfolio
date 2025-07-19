"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import { motion } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <div className="flex flex-col sm:flex-col items-center justify-center gap-0 mb-8 ">
        {/* Logo image */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 0.2 }}
        >
          <Image
            src="/project.png"
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
        <SectionHeading>My projects</SectionHeading>
      </div>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
export default Projects;
