"use client";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";


// Define services for Projects and Games
const projectServices = [
    {
        num: '01',
        title: 'HighWay Hub - Group Mobile App',
        language: 'ReactNative | NodeJS | Firebase | MongoDB',
        description: 'Developed a Highway Hub app with AI chatbot, QR ticketing, vehicle registration, and journey tracking.',
        href: 'https://github.com/CapstoneProject-group9/HWH_updated.git',
        image: '/assets/HWH1.png',
       

    },
    {
        num: '02',
        title: 'Link Plus App - Group',
        language:'PHP | MySQL',
        description: 'Developed the Link Plus app, a LinkedIn-like platform with job postings, applications, and messaging, using PHP laraval framework and MySQL.',
        href: '/https://github.com/PHP-GroupProject/Alumina_Netwok_WebApp',
        image: '/assets/LinkPlus.jpg' 
    },
    /*
    {
        num: '03',
        title: 'FrumosEase - Group',
        language:'MongoDB | ExpressJS | ReactJS |  NodeJS',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, et eligendi.',
        href: '/application-development',
        image: '/assets/photo1.jpg' 
    },
    */
    {
        num: '03',
        title: 'ChatBot - Individual',
        language:'python',
        description: 'Created a Python-based chatbot leveraging JSON for efficient question-and-answer handling, delivering seamless user interactions.',
        href: '/https://www.linkedin.com/posts/lakchika-jekanathan_python-ai-chatbot-activity-7235663555428036608-AsDN?utm_source=share&utm_medium=member_desktop',
        image: '/assets/chat-bot.jpg' 
    },
    {
        num: '04',
        title: 'Nike Website - Individual',
        language:'HTML | CSS',
        description: 'Designed and developed a responsive Nike-themed website using HTML and CSS, focusing on modern design and user experience',
        href: '/https://github.com/Lakchika-Jekanathan/NIKE-Website',
        image: '/assets/website.jpg' 
    },
    {
        num: '05',
        title: 'Chat App - Individual',
        language:'ReactJS | Firebase',
        description: 'Built a real-time chat application using ReactJS and Firebase, enabling seamless user communication with robust functionality.',
        href: '/https://github.com/Lakchika-Jekanathan/Chat_App',
        image: '/assets/chat app.jpg' 
    },
    /*{
        num: '06',
        title: 'Telegram App UI Individual',
        language:'Figma',
        description: 'Currently redesigning the Telegram App UI individually in Figma, focusing on modern aesthetics and enhanced user experience.',
        href: '/web-development',
        image: '/assets/photo1.jpg' 
    },
    */
    {
        num: '06',
        title: 'LMS - Testing | Group',
        language:'PHP | Php unit',
        description: 'Conducted testing for a Library Management System developed in PHP, ensuring functionality for book management and user operations.',
        href: '/https://github.com/Library-Management-Systems/Library_Management.git',
        image: '/assets/LMS.jpg' 
    },
];

const gameServices = [
    {
        num: '01',
        title: 'Snake Game',
        language:'Python',
        description: 'Developed a classic Snake Game using Python, featuring smooth gameplay and interactive controls.',
        href: 'https://github.com/Lakchika-Jekanathan/Snake_game',
        image: '/assets/snake.jpeg' 
    },
    {
        num: '02',
        title: 'Candy crush',
        language:'HTML | CSS | JavaScript',
        description: 'Created a dynamic Candy Crush game using HTML, CSS, and JavaScript, offering engaging and interactive gameplay.',
        href: 'https://github.com/Lakchika-Jekanathan/Candy-crush',
        image: '/assets/candy.jpeg' 
    },
    {
        num: '03',
        title: 'Tic Tac Toe',
        language:'Java',
        description: 'Designed and implemented a Tic Tac Toe game in Java, providing a seamless and engaging two-player experience.',
        href: 'https://github.com/Lakchika-Jekanathan/Tic-Tac-Toe',
        image: '/assets/tic-tac-toe.jpg' 
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
