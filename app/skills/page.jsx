"use client";

import { FaHtml5, FaCss3, FaReact, FaJs, FaFigma, FaNodeJs, FaJava, FaPhp, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiIntellijidea, SiXampp, SiCisco, SiAdobephotoshop, SiAdobeillustrator, SiTypescript, SiMongodb, SiMysql, SiFirebase, SiGit, SiC } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/UI/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/UI/tooltip";
import { ScrollArea } from "@/components/UI/scroll-area";
import { motion } from "framer-motion";
import { useState } from "react";

// Technical Skills
const technicalSkills = {
    title: "Technical Skills",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "HTML",
        },
        {
            icon: <FaCss3 />,
            name: "CSS",
        },
        {
            icon: <FaJs />,
            name: "JavaScript",
        },
        {
            icon: <FaReact />,
            name: "React",
        },
        {
            icon: <SiNextdotjs />,
            name: "Next.js",
        },
        {
            icon: <FaReact />,
            name: "React Native",
        },
        {
            icon: <FaJava />,
            name: "Java",
        },
        {
            icon: <FaPython />,
            name: "Python",
        },
        {
            icon: <FaPhp />,
            name: "PHP",
        },
        {
            icon: <FaNodeJs />,
            name: "Node.js",
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind CSS",
        },
        {
            icon: <SiC />,
            name: "C",
        },
        {
            icon: <SiTypescript />,
            name: "TypeScript",
        },
        {
            icon: <SiMongodb />,
            name: "MongoDB",
        },
        {
            icon: <SiMysql />,
            name: "MySQL",
        },
        {
            icon: <SiFirebase />,
            name: "Firebase",
        },
        {
            icon: <SiGit />,
            name: "Git",
        },
        {
            icon: <SiIntellijidea />,
            name: "IntelliJ",
        },
        {
            icon: <SiXampp />,
            name: "XAMPP",
        },
        {
            icon: <SiCisco />,
            name: "Cisco Packet Tracer",
        },
        {
            icon: <FaFigma />,
            name: "Figma",
        },
        {
            icon: <SiAdobephotoshop />,
            name: "Photoshop",
        },
        {
            icon: <SiAdobeillustrator />,
            name: "Illustrator",
        },
    ],
};

// Soft Skills
const softSkills = {
    title: "Soft Skills",
    skillsList: [
        "Decision making",
        "Creativity",
        "Leadership",
        "Communication",
        "Adaptability",
        "Problem solving",
        "Time Management",
        "Critical Thinking",
        "Self-Motivation",
        "Active Listening",
        "Team work",
    ],
};

const Resume = () => {
    const [activeCategory, setActiveCategory] = useState("Programming-Languages");

    const categories = {
        "Programming-Languages": technicalSkills.skillList.filter(skill =>
            ["HTML", "CSS", "JavaScript", "Java", "C", "Python", "PHP"].includes(skill.name)
        ),
        Frameworks: technicalSkills.skillList.filter(skill =>
            ["React", "React Native", "Node.js", "Tailwind CSS", "Next.js", "TypeScript"].includes(skill.name)
        ),
        Databases: technicalSkills.skillList.filter(skill =>
            ["MongoDB", "MySQL", "Firebase"].includes(skill.name)
        ),
        "Tools & Technologies": technicalSkills.skillList.filter(skill =>
            ["Git", "Figma", "Photoshop", "Illustrator", "IntelliJ", "XAMPP", "Cisco Packet Tracer"].includes(skill.name)
        ),
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 3.4, ease: "easeIn" } }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-8"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="technical skills" className="flex gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[300px] xl:mx-0 gap-4 ">
                        <TabsTrigger value="technical skills">Technical Skills</TabsTrigger>
                        <TabsTrigger value="soft skills">Soft Skills</TabsTrigger>
                    </TabsList>
                    <div className="min-h-[70vh] w-full">
                        <TabsContent value="technical skills" className="w-full">
                            <div className="flex flex-col gap-[30px]">
                                {/* Category Buttons */}
                                <div className="flex gap-4 mb-2">
                                    {Object.keys(categories).map(category => (
                                        <button
                                            key={category}
                                            onClick={() => setActiveCategory(category)}
                                            className={`px-1 py-1 rounded-lg transition duration-300 ${
                                                activeCategory === category ? "bg-accent-hover text-black" : "bg-accent text-white"
                                            }`}
                                        >
                                            {category.replace(/-/g, ' ')}
                                        </button>
                                    ))}
                                </div>

                                <ul className="grid grid-cols-4 gap-3">
                                    {categories[activeCategory].map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-[100px] h-[100px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all  duration-300">{skill.icon}</div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        <TabsContent value="soft skills" className="w-full">
                            <div className="flex flex-col gap-[20px] xl:text-left">
                                {/*<h3 className="text-4xl font-bold">{softSkills.title}</h3>*/}
                                <al className="grid grid-cols-3 gap-3">
                                    {softSkills.skillsList.map((skill, index) => (
                                        <li key={index} className="text-accent  hover:text-accent-hover cursor-pointer">
                                            {skill}
                                        </li>
                                    ))}
                                </al>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;
