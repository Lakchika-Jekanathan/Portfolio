"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/UI/tabs";
import { ScrollArea } from "@/components/UI/scroll-area";

// Data objects for About, Education, and Experience
const about = {
    title: "About me",
    description: "Passionate software developer with a knack for creating innovative solutions. My enthusiasm for tackling new challenges and collaborating with dynamic teams drives me to deliver impactful results.",
    info: [
        { fieldName: "Name", fieldValue: "Lakchika" },
        { fieldName: "Email", fieldValue: "jlaksika2001@gmail.com" },
        { fieldName: "Phone", fieldValue: "(+94) 779203883" },
        { fieldName: "Languages", fieldValue: "Tamil, English" },
        { fieldName: "Freelance", fieldValue: "Available" },
        { fieldName: "Nationality", fieldValue: "Sri Lankan" },
    ],
};

const education = {
    title: "My Education",
    description:
        "Passionate software developer with a knack for creating innovative solutions. My enthusiasm for tackling new challenges and collaborating with dynamic teams drives me to deliver impactful results.",
    items: [
        { institution: "Sabaragamuwa University of sri lanka", degree: "Computing Information Systems", faculty: "Faculty of Computing", duration: "2022 - Present" },
        { institution: "DVTC Mullaitivu", degree: "Graphic designing-NVQ 4", duration: "2021 - [1 year]" },
        { institution: "Mu/Muththuiyankaddu right bank maha vidyalaya", degree: "Advance level", duration: "2017-2020" },
        { institution: "Mu/Oddusuddan maha vidyalaya", degree: "Ordinary level", duration: "2017" },
        //{ institution: "University of Moratuwa", degree: "Front-end Web Development", duration: "2023" },
       // { institution: "University of Moratuwa", degree: "Python Programming", duration: "2023" },
        //{ institution: "SoloLearn", degree: "Java Programming", duration: "2024" },
        //{ institution: "Atlassian University", degree: "Jira Fundamental Assessment", duration: "2024" },
    ],
};

const experience = {
    title: "My Experience",
    description:
        "Passionate software developer with a knack for creating innovative solutions. My enthusiasm for tackling new challenges and collaborating with dynamic teams drives me to deliver impactful results.",
    items: [
        { company: "Samurdhi Bank, Mullaitivu", position: "Trainee Staff", duration: "2021 - [6 Months]" },
    ],
};

// Resume Component
const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.8, ease: "easeIn" } }}
            className="h-[340px] py-12 flex items-center lg:overflow-hidden w-full"
        >
            <div className="container mx-auto px-2 h-[350px]">
                <Tabs defaultValue="about me" className="flex flex-col lg:flex-row gap-8">
                    {/* Tabs List */}
                    <TabsList className="flex flex-wrap top-0 lg:flex-col gap-4 w-full lg:max-w-[220px]">
                        <TabsTrigger value="about me" className="py-2 px-4 rounded-lg bg-gray-900 transition-all">About Me</TabsTrigger>
                        <TabsTrigger value="education" className="py-2 px-4 rounded-lg bg-gray-900 transition-all">Education</TabsTrigger>
                        <TabsTrigger value="experience" className="py-2 px-4 rounded-lg bg-gray-900 transition-all">Experience</TabsTrigger>
                    </TabsList>

                    {/* Tabs Content */}
                    <div className="flex-1 flex flex-col gap-6">
                        {/* About Me Tab */}
                        <TabsContent value="about me" className="w-full">
                            <h3 className="text-4xl font-bold mb-4 text-white">{about.title}</h3>
                            <p className="text-gray-400 mb-6">{about.description}</p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {about.info.map((item, index) => (
                                    <li key={index} className="flex gap-4">
                                        <span className="font-medium text-gray-300">{item.fieldName}:</span>
                                        <span className="text-accent">{item.fieldValue}</span>
                                    </li>
                                ))}
                            </ul>
                        </TabsContent>

                        {/* Education Tab */}
                        <TabsContent value="education" className="w-full sm:overflow-hidden">
                            <h3 className="text-4xl font-bold mb-4">{education.title}</h3>
                            <p className="text-gray-400 mb-6">{education.description}</p>
                            <ScrollArea className="h-[180px] lg:w-[500px] sm:w-[45%]">
                                <ul className="space-y-4">
                                    {education.items.map((item, index) => (
                                        <li
                                            key={index}
                                            className="bg-gray-800 p-2 rounded-lg flex flex-col gap-0 w-[450px] space-x-14"
                                        >
                                            <span className="text-accent font-semibold">{item.duration}</span>
                                            <h4 className="text-lg font-medium">{item.degree}</h4>
                                            <p className="text-gray-400">{item.institution}</p>
                                        </li>
                                    ))}
                                </ul>
                            </ScrollArea>
                        </TabsContent>

                        {/* Experience Tab */}
                        <TabsContent value="experience" className="w-full sm:overflow-hidden">
                            <h3 className="text-4xl font-bold mb-4">{experience.title}</h3>
                            <p className="text-gray-400 mb-6">{experience.description}</p>
                            <ScrollArea className="h-[180px] lg:w-[500px] sm:w-[45%]">
                                <ul className="space-y-4">
                                    {experience.items.map((item, index) => (
                                        <li
                                            key={index}
                                            className="bg-gray-800 p-2 rounded-lg flex flex-col gap-0 w-[450px] space-x-14"
                                        >
                                            <span className="text-accent font-semibold">{item.duration}</span>
                                            <h4 className="text-lg font-medium">{item.position}</h4>
                                            <p className="text-gray-400">{item.company}</p>
                                        </li>
                                    ))}
                                </ul>
                            </ScrollArea>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;
