"use client";
import Link from "next/link";
import { Button } from "./UI/button";
import Nav from "./Nav";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";


const Header = () => {
    
  const [isNavOpen, setIsNavOpen] = useState(false); // State to toggle nav visibility

  const toggleNav = () => setIsNavOpen(!isNavOpen);  // Toggle function

    return (
        <header className="py-8 xl:py-12 text-white h-[10%]">
            <div className="container mx-auto flex gap-8 justify-between">
                {/*logo*/}
                <Link href="/">
                    <h1 className="text-[40px] font-semibold mt-[-35px]">
                        Lakchika 
                        <span className="text-accent text-[60px]">.</span>
                    </h1>
                </Link>
                {/* Hamburger Icon (Visible only on mobile) */}
        <div className="lg:hidden">
          <button onClick={toggleNav}>
            {isNavOpen ? (
              <FiX className="text-2xl" />
            ) : (
              <FiMenu className="text-2xl" />
            )}
          </button>
        </div>


                {/* Desktop Navigation (Hidden on mobile) */}
        <div className="hidden lg:flex gap-8 items-center">
          <Nav />
          <Link href="/contact">
            <Button>Hire Me</Button>
          </Link>
        </div>

        {/* Mobile Navigation (Appears when isNavOpen is true) */}
        <div 
          className={`lg:hidden ${
            isNavOpen ? "block" : "hidden"
          } absolute top-5 right-0 w-70 bg-primary rounded-[15px] text-white p-4 h-[80vh] transition-all duration-300 ease-in-out shadow-lg z-50`}
        >
          <div className="flex justify-between items-center">
            <Link href="/">
              <h1 className="text-4xl font-semibold">
                Lakchika <span className="text-accent text-7xl font-semibold">.</span>
              </h1>
            </Link>
            <button onClick={toggleNav}>
              <FiX className="text-2xl" />
            </button>
          </div>

          {/* Navigation Links */}
          <Nav />

          {/* Mobile "Hire Me" button */}
          <Link href="/contact">
            <Button className="mt-4 w-20">Hire Me</Button>
          </Link>
        </div>        
            </div>
        </header>
    );
};

export default Header;