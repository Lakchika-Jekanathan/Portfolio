"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaJava,
  FaPython,
  FaPhp,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiC,
  SiTypescript,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiGit,
  SiIntellijidea,
  SiXampp,
  SiCisco,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from "react-icons/si";

const skillsData = [
  { icon: <FaHtml5 />, name: "HTML" },
  { icon: <FaCss3 />, name: "CSS" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <FaReact />, name: "React" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <FaReact />, name: "React Native" },
  { icon: <FaJava />, name: "Java" },
  { icon: <FaPython />, name: "Python" },
  { icon: <FaPhp />, name: "PHP" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <SiC />, name: "C" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <SiFirebase />, name: "Firebase" },
  { icon: <SiGit />, name: "Git" },
  { icon: <SiIntellijidea />, name: "IntelliJ" },
  { icon: <SiXampp />, name: "XAMPP" },
  { icon: <SiCisco />, name: "Cisco Packet Tracer" },
  { icon: <FaFigma />, name: "Figma" },
  { icon: <SiAdobephotoshop />, name: "Photoshop" },
  { icon: <SiAdobeillustrator />, name: "Illustrator" },
];

const Skills = () => {
  return (
    <section className="relative w-full lg:h-[400px] bg-gray-900 flex justify-center lg:overflow-hidden sm:overflow-hidden py-8">
      <div className="relative w-full max-w-6xl p-1">
        {/* First row with 6 items */}
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          {skillsData.slice(0, 9).map((skill, index) => (
            <motion.div
              key={index}
              className="group relative w-24 h-24 flex items-center justify-center bg-gray-800 rounded-full shadow-lg hover:text-accent cursor-pointer "
              whileHover={{
                scale: 1.1,
                rotate: [0, 10, -10, 0],
                transition: { duration: 0.4 },
              }}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 120,
                },
              }}
            >
              <span className="text-3xl">{skill.icon}</span>
              <span className="absolute top-[90%] left-1/2 transform -translate-x-1/2 mt-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity text-accent">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Second row with 5 items */}
        <div className="flex flex-wrap justify-center gap-8 mb-6">
          {skillsData.slice(9, 17).map((skill, index) => (
            <motion.div
              key={index}
              className="group relative w-24 h-24 flex items-center justify-center bg-gray-800 rounded-full shadow-lg hover:text-accent cursor-pointer"
              whileHover={{
                scale: 1.1,
                rotate: [0, 10, -10, 0],
                transition: { duration: 0.4 },
              }}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 120,
                },
              }}
            >
              <span className="text-3xl">{skill.icon}</span>
              <span className="absolute top-[90%] left-1/2 transform -translate-x-1/2 mt-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity text-accent">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Third row with 4 items */}
        <div className="flex flex-wrap justify-center gap-10 mb-6">
          {skillsData.slice(17, 24).map((skill, index) => (
            <motion.div
              key={index}
              className="group relative w-24 h-24 flex items-center justify-center bg-gray-800 rounded-full shadow-lg hover:text-accent cursor-pointer"
              whileHover={{
                scale: 1.1,
                rotate: [0, 10, -10, 0],
                transition: { duration: 0.4 },
              }}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 120,
                },
              }}
            >
              <span className="text-3xl">{skill.icon}</span>
              <span className="absolute top-[90%] left-1/2 transform -translate-x-1/2 mt-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity text-accent">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Fourth row (Optional) */}
        {/* <div className="flex flex-wrap justify-center gap-12 mb-6">
          {skillsData.slice(21, 24).map((skill, index) => (
            <motion.div
              key={index}
              className="group relative w-24 h-24 flex items-center justify-center bg-gray-800 rounded-full shadow-lg text-accent"
              whileHover={{
                scale: 1.1,
                rotate: [0, 10, -10, 0],
                transition: { duration: 0.4 },
              }}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 120,
                },
              }}
            >
              <span className="text-3xl">{skill.icon}</span>
              <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Skills;
