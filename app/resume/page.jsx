"use client"

import { Description } from "@radix-ui/react-dialog";
import { info } from "autoprefixer";
import { FaHtml5,FaCss3,FaReact, FaJs,FaFigma,FaNodeJs, FaJava, FaPhp, FaPython } from "react-icons/fa";

import { SiTailwindcss,SiNextdotjs, SiTypescript, SiMongodb, SiMysql, SiFirebase, SiGit, SiC} from "react-icons/si";

//about me
const about = {
    title: "About me",
    description: "Passionate software development with a knack for creating innovative solutions. My enthusiasm for tackling new challenges and collaborating with dynamic teams drives me to deliver impactful results.",
    info: [
        {
            fieldName:"Name",
            fieldValue:"Lakchika"
        },

        {
            fieldName:"Email",
            fieldValue:"jlaksika2001@gmail.com"
        },

        {
            fieldName:"Phone",
            fieldValue:"(+94) 779203883"
        },

        {
            fieldName:"Languages",
            fieldValue:"Tamil, English"
        },

        {
            fieldName:"Freelance",
            fieldValue:"Available"
        },
        {
            fieldName:"Nationality",
            fieldValue:"Sri Lankan"
        }
    ]
};

//Education
const education= {
    icon: "/assets/resume/cap.svg",
    title: "My Education",
    description:
    "Passionate software development with a knack for creating innovative solutions. My enthusiasm for tackling new challenges and collaborating with dynamic teams drives me to deliver impactful results.",
    items:[
        {
            institution:"DVTC Mullaitivu",
            degree:"Graphic designing-NVQ 4",
            duration:"2021"
        },
        {
            institution:"Sabaragamuwa University",
            degree:"Computing information systems",
            faculty:"Faculty of computing",
            duration:"2022 - present"
        },
        {
            institution:"University of Moratuwa",
            degree:"Front-end Web Development",
            duration:"2023"
        },
        {
            institution:"University of Moratuwa",
            degree:"Python Programming",
            duration:"2023"
        },
        {
            institution:"SoloLearn",
            degree:"Java Programming",
            duration:"2024"
        },
        {
            institution:"Atlassian University",
            degree:"Jira Fundamental Assesment",
            duration:"2024"
        },
        
        
    ]
};

//Education
const experience= {
    icon: "/assets/resume/tabs.svg",
    title: "My Experience",
    description:
    "Passionate software development with a knack for creating innovative solutions. My enthusiasm for tackling new challenges and collaborating with dynamic teams drives me to deliver impactful results.",
    items:[
        {
            company:"Samurdhi Bank, Mullaitivu",
            position:"Trainee student",
            duration:"2021 - [6 Months]"
        },   
        
    ]
};

//Skills
const skills = {
    title:"My Skills",
    description:"Passionate software development with a knack for creating innovative solutions. My enthusiasm for tackling new challenges and collaborating with dynamic teams drives me to deliver impactful results.",
    skillList:[
        {
            icon:<FaHtml5/>,
            name:"html",
        },
        {
            icon:<FaCss3/>,
            name:"Css",
        },
        {
            icon:<FaNodeJs/>,
            name:"NodeJs",
        },
        {
            icon:<SiTailwindcss/>,
            name:"Tailwindcss",
        },
        {
            icon:<SiC/>,
            name:"C",
        },
        {
            icon:<FaJs/>,
            name:"JavaScript",
        },
        {
            icon:<FaReact/>,
            name:"ReactJs",
        },
        
        {
            icon:<SiTypescript/>,
            name:"TypeScript",
        },
        {
            icon:<FaJava/>,
            name:"Java",
        },
        {
            icon:<FaPhp/>,
            name:"Php",
        },
        {
            icon:<FaPython/>,
            name:"Python",
        },
        {
            icon:<SiMongodb/>,
            name:"MongoDB",
        },
        {
            icon:<SiMysql/>,
            name:"MySQL",
        },
        {
            icon:<SiFirebase/>,
            name:"Firebase",
        },
        {
            icon:<SiGit/>,
            name:"Git",
        },
        {
            icon:<FaFigma/>,
            name:"Figma",
        },
        
    ]
}

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/UI/tabs";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/UI/tooltip"

import { ScrollArea } from "@/components/UI/scroll-area";
import { motion } from "framer-motion";


const Resume = () => {
    return(
        <motion.div initial={{opacity:0}}animate={{opacity:1, transition:{delay:2.4, duration:3.4, ease:"easeIn"},
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-8"
    >
        <div className="container mx-auto">
            <Tabs defaultValue="about me"
            className="flex gap-[60px]">
                <TabsList className="flex flex-col w-full max-w-[300px] xl:mx-0 gap-4">
                    <TabsTrigger value="about me">About me</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                </TabsList>
                <div className="min-h-[70vh] w-full">
                    <TabsContent value="about me" className="w-full text-center xl:text-left">
                        <div className="flex flex-col gap-[20px] text-left">
                            <h3 className="text-4xl font-bold ">{about.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-left">{about.description}</p>
                            <ul className="grid grid-cols-2 gap-y-2 max-w-[620px] mx-auto xl:mx-0">
                                {about.info.map((item, index) =>{
                                    return(
                                        <li key={index} className="flex gap-4">
                                               <span className="text-white/60">{item.fieldName}</span>
                                               <span className="text-accent">{item.fieldValue}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                            
                        </div>

                    </TabsContent>
                    
                    <TabsContent value="education" className="w-full">
  <div className="flex flex-col gap-[20px] xl:text-left">
    <h3 className="text-4xl font-bold">{education.title}</h3>
    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
      {education.description}
    </p>

    <ScrollArea className="h-[480px]">
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
        {education.items.map((item, index) => {
          return (
            <li
              key={index}
              className="bg-[#232329] py-2 px-2 rounded-xl flex flex-col justify-center items-start gap-2 min-h-[140px]"
            >
              <span className="text-accent">{item.duration}</span>
              <h3 className="text-xl max-w-[260px] text-center">{item.degree}</h3>
              <div className="flex items-center gap-2">
                <span className="w-[8px] h-[8px] rounded-full bg-accent shrink-0"></span>
                <p className="text-white/60">{item.institution}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </ScrollArea>
  </div>
</TabsContent>



                    <TabsContent value="skills" className="w-full h-full">
                        <div className="flex flex-col gap-[30px]">
                            <div className="flex flex-col gap-[30px] text-left">
                            <h3 className="text-4xl font-bold">{skills.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                            {skills.description}</p>
                        </div>
                        <ul className="grid grid-cols-4 gap-3">
                            {skills.skillList.map((skill, index)=>{
                                return (
                                <li key={index}>
                                <TooltipProvider delayDuration={100}>
    <Tooltip>
        <TooltipTrigger className="w-[100px] h-[100px] bg-[#232329] rounded-xl flex justify-center items-center group">
            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
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
                    <TabsContent value="experience" className="w-full">
                        <div className="flex flex-col gap-[20px] xl:text-left">
                            <h3 className="text-4xl font-bold">{experience.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>

                            <ScrollArea className="h-[480px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {experience.items.map((item, index) =>{
                                        return (
                                            <li key={index} className="bg-[#232329] h-[120px] py-2 rounded-xl flex flex-col justify-center items-center gap-0">
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[10px] text-center">{item.position}</h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent" ></span>
                                                    <p className="text-white/60">{item.company}</p>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>
                    
                    </div>
            </Tabs>
        </div>
                
    </motion.div>
    )
}

export default Resume;