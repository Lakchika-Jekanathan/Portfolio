"use client";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";


// Define services for Projects and Games
const projectServices = [
    {
        num: '01',
        title: 'HighWay Hub - Mobile App | Group',
        language: 'ReactNative | NodeJS | Firebase | MongoDB',
        description: 'Developed a Highway Hub app with AI chatbot, QR ticketing, vehicle registration, and journey tracking.',
        href: 'https://github.com/CapstoneProject-group9/Project_related_documents',
        image: '/assets/photo1.jpg',
       

    },
    {
        num: '02',
        title: 'Link Plus App - Group',
        language:'PHP | MySQL',
        description: 'Developed the Link Plus app, a LinkedIn-like platform with job postings, applications, and messaging, using PHP and MySQL.',
        href: '/ui-ux-design',
        image: '/assets/photo1.jpg' 
    },
    {
        num: '03',
        title: 'FrumosEase - Group',
        language:'MongoDB | ExpressJS | ReactJS |  NodeJS',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, et eligendi.',
        href: '/application-development',
        image: '/assets/photo1.jpg' 
    },
    {
        num: '04',
        title: 'ChatBot - Individual',
        language:'python',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, et eligendi.',
        href: '/web-development',
        image: '/assets/photo1.jpg' 
    },
    {
        num: '05',
        title: 'Nike Website - Individual',
        language:'HTML | CSS',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, et eligendi.',
        href: '/web-development',
        image: '/assets/photo1.jpg' 
    },
    {
        num: '06',
        title: 'Chat App - Individual',
        language:'ReactJS | Firebase',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, et eligendi.',
        href: '/web-development',
        image: '/assets/photo1.jpg' 
    },
    {
        num: '07',
        title: 'Telegram App Redesign - UI/UX | Individual',
        language:'Figma',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, et eligendi.',
        href: '/web-development',
        image: '/assets/photo1.jpg' 
    },
    {
        num: '08',
        title: 'Library Management System - Testing | Group',
        language:'PHP | Php unit',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, et eligendi.',
        href: '/web-development',
        image: '/assets/photo1.jpg' 
    },
    {
        num: '09',
        title: 'Portfolio',
        language:'Next JS | Tailwind CSS | Framer Motion',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, et eligendi.',
        href: '/web-development',
        image: '/assets/photo1.jpg' 
    },
];

const gameServices = [
    {
        num: '01',
        title: 'Snake Game',
        language:'Python',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, et eligendi.',
        href: 'https://github.com/Lakchika-Jekanathan/Snake_game',
        image: '/assets/snake.jpeg' 
    },
    {
        num: '02',
        title: 'Candy crush',
        language:'HTML | CSS | JavaScript',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, et eligendi.',
        href: 'https://github.com/Lakchika-Jekanathan/Candy-crush',
        image: '/assets/candy.jpeg' 
    },
    {
        num: '03',
        title: 'Tic Tac Toe',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, et eligendi.',
        href: 'https://github.com/Lakchika-Jekanathan/Tic-Tac-Toe',
        image: '/assets/photo2.jpg' 
    },
];

const Services = () => {
    const [selectedCategory, setSelectedCategory] = useState("projects");

    const renderServices = () => {
        const servicesToDisplay = selectedCategory === "projects" ? projectServices : gameServices;
        return servicesToDisplay.map((service, index) => (
            <div
                key={index}
                className="flex-1 flex flex-col justify-between gap-2 group border border-white rounded-lg p-4 bg-gray-800 transition-transform transform "
            >
                <img src={service.image} alt={service.title} className="w-full h-24 object-cover rounded-md mb-2" />
                <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                        <div className="text-2xl font-extrabold text-outline group-hover:text-outline-hover transition-all duration-50">
                            {service.num}
                        </div>
                        <h2 className="text-[18px] font-bold leading-none text-white cursor-pointer group-hover:text-accent transition-all duration-500">
                            {service.title}
                        </h2>
                    </div>
                    <Link
                        href={service.href}
                        className="w-[36px] h-[36px] rounded-full bg-accent group-hover:bg-accent-hover text-outline group-hover:text-outline-hover cursor-pointer transition-all duration-500 flex justify-center items-center hover:rotate-45"
                    >
                        <FaGithub className="text-primary text-lg" />
                    </Link>
                </div>
                <p className="text-white/60 text-sm mb-1">{service.description}</p>
                <h4 className="text-accent text-sm mb-1">{service.language}</h4>
                <div className="border-b border-white/20 w-full"></div>
            </div>
        ));
    };

    return (
        <section className="h-[100%] flex flex-col justify-center xl:py-0 pt-0">
            <div className="container max-w-screen-xl mx-auto">
                {/* Button Section */}
                <div className="flex justify-center mb-4 ">
                    <button
                        onClick={() => setSelectedCategory("projects")}
                        className={`py-2 px-8  ${selectedCategory === "projects" ? " border-b-4 border-accent text-white" : "bg-gray-700 text-gray-200"} transition`}
                    >
                        Projects
                    </button>
                    <button
                        onClick={() => setSelectedCategory("games")}
                        className={`py-2 px-8  ${selectedCategory === "games" ? "border-b-4 border-accent  text-white" : "bg-gray-700 text-gray-200"} transition`}
                    >
                        Games
                    </button>
                </div>

                {/* Scrollable Content Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
                    }}
                    className="h-[300px] overflow-y-auto px-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-200"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] px-12">
                        {renderServices()}
                    </div>
                </motion.div>
                
            </div>
        </section>
    );
};

export default Services;
