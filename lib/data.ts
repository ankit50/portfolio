import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import medimmet from "@/public/medimmet.png";
import ecommerce from "@/public/ecommerce.png";
import chat from "@/public/chat.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Front-End Developer Intern",
    company: " Gimmick Box Engineering Solutions Pvt. Ltd",
    location: "Kathmandu, Nepal",
    description: [
      "Developed and maintained responsive user interfaces for commercial websites using HTML, CSS, and JavaScript.",
      "Focused on clean design and intuitive user experience.",
      "Collaborated on building dynamic components for real-time interactions.",
    ],
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Assistant Teaching Professor and Project Supervisor",
    company: "Nepal College of Information Technology (NCIT)",
    location: "Lalitpur, Nepal",
    description: [
      "Instruct C/C++, Java, Data Structures & Algorithms, and Discrete Mathematics classes for undergraduate students",
      "Supervise students’ final year and semester projects, guiding research on AI/ML and mentoring web development projects.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "2020 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Medimeet",
    description:
      "A full-stack doctor appointment platform with features like appointment booking, doctor search, video consultations and pricing feature.",
    tags: ["Next.js", "MongoDB", "Vonage", "Clerk", "shadcn/ui"],
    imageUrl: medimmet,
    liveDemo: "https://medimeetbyankitkharel.vercel.app/",
    github: "https://github.com/ankit50/medimeet",
  },
  {
    title: "Ecommerce-forever",
    description:
      "E-commerce frontend with features like latest products, cart management, checkout, and payment integration and an admin panel for managing products and orders.",
    tags: [
      "React.JS",
      "JavaScript",
      "Express.js",
      "Tailwind",
      "Context API",
      "MongoDB",
    ],
    imageUrl: ecommerce,
    liveDemo: "https://ecommercebyankitkharel.vercel.app/",
    github: "https://github.com/ankit50/clothingstore",
  },
  {
    title: "Real Time Chat App",
    description:
      " Real-time chat application built using Socket.IO. Features include user authentication, live messaging, typing indicators, image sharing in chat,",
    tags: ["React.js", "Express.js", "MongoDB"],
    imageUrl: chat,
    liveDemo: "",
    github: "https://github.com/ankit50/Real-Time-Chat-Using-Mern",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "JAVA",
  "C",
  "C++",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
] as const;
