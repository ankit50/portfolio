"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";

const Experience = () => {
  const { ref } = useSectionInView("Experience");

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <div className="flex flex-col sm:flex-col items-center justify-center gap-0 mb-8 ">
        {/* Logo image */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 0.2 }}
        >
          <Image
            src="/experience.jpeg"
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
        <SectionHeading>My Experience</SectionHeading>
      </div>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-semibold text-sm text-gray-800 dark:text-white">
                {item.company}
              </p>
              <p className="text-sm text-gray-600 dark:text-white/70">
                {item.location}
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700 dark:text-white/75">
                {item.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};
export default Experience;
