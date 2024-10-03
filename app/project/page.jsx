"use client";
import { useState } from "react"; // Import useState for state management
import { FaGithub } from "react-icons/fa"; // Import GitHub icon
import Link from "next/link";
import { motion } from "framer-motion";

// Define services for Projects
const projectServices = [
    {
        num: '01',
        title: 'Website Development',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, et eligendi.',
        href: '/website-development',
        image: '/assets/photo1.jpg' // Replace with your image URL
    },
    {
        num: '02',
        title: 'UI/UX Design',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, et eligendi.',
        href: '/ui-ux-design',
        image: '/assets/photo1.jpg' // Replace with your image URL
    },
    {
        num: '03',
        title: 'Application Development',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, et eligendi.',
        href: '/application-development',
        image: '/assets/photo1.jpg' // Replace with your image URL
    },
    {
        num: '04',
        title: 'Web Development',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, et eligendi.',
        href: '/web-development',
        image: '/assets/photo1.jpg' // Replace with your image URL
    },
    {
        num: '05',
        title: 'Web Development',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, et eligendi.',
        href: '/web-development',
        image: '/assets/photo1.jpg' // Replace with your image URL
    },
    {
        num: '06',
        title: 'Web Development',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, et eligendi.',
        href: '/web-development',
        image: '/assets/photo1.jpg' // Replace with your image URL
    },
];

// Define services for Games
const gameServices = [
    {
        num: '01',
        title: 'Action Game',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, et eligendi.',
        href: '/action-game',
        image: '/assets/photo2.jpg' // Replace with your image URL
    },
    {
        num: '02',
        title: 'Puzzle Game',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, et eligendi.',
        href: '/puzzle-game',
        image: '/assets/photo2.jpg' // Replace with your image URL
    },
    {
        num: '03',
        title: 'Adventure Game',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, et eligendi.',
        href: '/adventure-game',
        image: '/assets/photo2.jpg' // Replace with your image URL
    },
];

const Services = () => {
    const [selectedCategory, setSelectedCategory] = useState("projects");

    const renderServices = () => {
        const servicesToDisplay = selectedCategory === "projects" ? projectServices : gameServices;
        return servicesToDisplay.map((service, index) => (
            <div key={index} className="flex-1 flex flex-col justify-between gap-2 group border border-white rounded-lg p-4 bg-gray-800 transition-transform transform hover:scale-105">
                <img src={service.image} alt={service.title} className="w-full h-32 object-cover rounded-md mb-2" />
                <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                        <div className="text-2xl font-extrabold text-outline group-hover:text-outline-hover transition-all duration-50">
                            {service.num}
                        </div>
                        <h2 className="text-[18px] font-bold leading-none text-white cursor-pointer group-hover:text-accent transition-all duration-500">{service.title}</h2>
                    </div>
                    <Link href={service.href} className="w-[36px] h-[36px] rounded-full bg-accent group-hover:bg-accent-hover text-outline group-hover:text-outline-hover cursor-pointer transition-all duration-500 flex justify-center items-center hover:rotate-45">
                        <FaGithub className="text-primary text-lg" />
                    </Link>
                </div>
                <p className="text-white/60 text-sm mb-1">{service.description}</p> {/* Adjusted margin here */}
                <div className="border-b border-white/20 w-full"></div>
            </div>
        ));
    };

    return (
        <section className="min-h-[50vh] flex flex-col justify-center py-5 xl:py-0">
            <div className="container max-w-screen-xl mx-auto">
                {/* Button Section */}
                <div className="flex justify-center space-x-4 mb-5">
                    <button
                        onClick={() => setSelectedCategory("projects")}
                        className={`py-2 px-4 rounded-lg ${selectedCategory === "projects" ? "bg-accent text-white" : "bg-gray-700 text-gray-200"} transition`}
                    >
                        Projects
                    </button>
                    <button
                        onClick={() => setSelectedCategory("games")}
                        className={`py-2 px-4 rounded-lg ${selectedCategory === "games" ? "bg-accent text-white" : "bg-gray-700 text-gray-200"} transition`}
                    >
                        Games
                    </button>
                </div>
                
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]"
                >
                    {renderServices()}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
