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
        <div className="h-full bg-primary/30">
            <div className="container mx-auto py-27 text-center flex justify-center h-full">
                <div className="flex flex-col w-full max-w-[700px] bg-green-500/5">
                    <h2 className="h2 text-center mb-12">
                        Let's <span className="text-accent">Connect.</span>
                    </h2>
                    <form ref={formRef} onSubmit={sendEmail} className="flex-1 flex flex-col gap-6 w-full mx-auto">
                        <div className="flex gap-x-20">
                            <input type="text" name="user_name" placeholder="Name" className="border w-80 border-gray-300 rounded-lg outline-none focus:border-cyan-500 p-2 bg-transparent" />
                            <input type="email" name="user_email" placeholder="E-Mail" className="border w-80 border-gray-300 rounded-lg outline-none focus:border-cyan-500 p-2 bg-transparent" />
                        </div>
                        <input type="text" name="subject" placeholder="Subject" className="border border-gray-300 rounded-lg outline-none focus:border-cyan-500 p-2 bg-transparent" />
                        <textarea name="message" placeholder="Message" className="border border-gray-300 rounded-lg outline-none focus:border-cyan-500 p-2 bg-transparent"></textarea>
                        <div className="flex gap-3">
                        <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center hover:border-accent group">
                            <span className='group-hover:translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                                Let's talk
                            </span>
                            <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
                        </button>
                        <div className="mb-1 xl:mb-0">
                    <Social
                    containerStyles="flex gap-6"
                     iconStyles="w-11 h-11 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent-hover hover:text-primary hover:transition-all duration-500"
                />
              </div>
              </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
