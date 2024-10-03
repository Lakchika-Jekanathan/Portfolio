"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
    {
        num: '01',
        title: 'Website Development',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, et eligendi.',
        href: '/website-development'
    },
    {
        num: '02',
        title: 'UI/UX design',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, et eligendi.',
        href: '/ui-ux-design'
    },
    {
        num: '03',
        title: 'Application Development',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, et eligendi.',
        href: '/application-development'
    },
    {
        num: '04',
        title: 'Web Development',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, et eligendi.',
        href: '/web-development'
    }
];

const Services = () => {
    return (
        <section className="min-h-[50vh] flex flex-col justify-center py-5 xl:py-0">
            <div className="container max-w-screen-xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[50px]"
                >
                    {services.map((service, index) => {
                        return (
                            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold text-outline group-hover:text-outline-hover transition-all duration-50">
                                        {service.num}
                                    </div>
                                    <Link href={service.href} className="w-[50px] h-[50px] rounded-full bg-accent group-hover:bg-accent-hover text-outline group-hover:text-outline-hover cursor-pointer transition-all duration-500 flex justify-center items-center hover:rotate-45">
                                        <BsArrowDownRight className="text-primary text-3xl"/>
                                    </Link>
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-[30px] font-bold leading-none text-white cursor-pointer group-hover:text-accent transition-all duration-500">{service.title}</h2>
                                    <p className="text-white/60">{service.description}</p>
                                    <div className="border-b border-white/20 w-full"></div>
                                </div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;