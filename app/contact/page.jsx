"use client";

import { useRef } from "react";
import { BsArrowRight } from "react-icons/bs";
import emailjs from "emailjs-com"; // Import EmailJS
import Social from "@/components/Social";

const Contact = () => {
    const formRef = useRef(); // Create a ref for the form

    const sendEmail = (e) => {
        e.preventDefault(); // Prevent default form submission

        emailjs.sendForm('service_2001', '__ejs-test-mail-service__', formRef.current, 'iIRA0a7GF3dcEJJ8g')
            .then((result) => {
                console.log(result.text);
                alert("Message sent successfully!");
            }, (error) => {
                console.log(error.text);
                alert("Failed to send message, please try again.");
            });

        e.target.reset(); // Reset the form after submission
    };

    return (
        <div className="h-[75vh] bg-primary/30">
            <div className="container mx-auto px-4 flex flex-col items-center">
                <div className="flex flex-col w-full max-w-[700px] bg-green-500/5 rounded-lg shadow-md">
                    {/* Header */}
                    <h2 className="text-4xl font-semibold text-center mb-8">
                        Let's <span className="text-accent">Connect.</span>
                    </h2>

                    {/* Form */}
                    <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-3">
                        {/* Name & Email */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="text"
                                name="user_name"
                                placeholder="Name"
                                className="flex-1 border border-gray-300 rounded-lg outline-none focus:border-cyan-500 p-3 bg-transparent"
                            />
                            <input
                                type="email"
                                name="user_email"
                                placeholder="E-Mail"
                                className="flex-1 border border-gray-300 rounded-lg outline-none focus:border-cyan-500 p-3 bg-transparent"
                            />
                        </div>

                        {/* Subject */}
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            className="border border-gray-300 rounded-lg outline-none focus:border-cyan-500 p-3 bg-transparent"
                        />

                        {/* Message */}
                        <textarea
                            name="message"
                            placeholder="Message"
                            className="border border-gray-300 rounded-lg outline-none focus:border-cyan-500 p-3 bg-transparent resize-none min-h-[150px]"
                        ></textarea>

                        {/* Button & Social */}
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <button
                                type="submit"
                                className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center hover:border-accent group"
                            >
                                <span className="group-hover:translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                                    Let's talk
                                </span>
                                <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
                            </button>

                            {/* Social Links */}
                            <div className="flex gap-4">
                                <Social
                                    containerStyles="flex gap-4"
                                    iconStyles="w-11 h-11 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent-hover hover:text-primary transition-all duration-500"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
