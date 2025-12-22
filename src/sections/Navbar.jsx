import React, { useState, useEffect } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { FiX } from "react-icons/fi";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  
  // 1. Initialize darkMode state to null. Prevents FOUC (Flash of Unstyled Content) 
  // until localStorage is checked on the client side.
  const [darkMode, setDarkMode] = useState(null); 
  const [hasMounted, setHasMounted] = useState(false);

  // --- EFFECT 1: Scroll Handling (No Change) ---
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- EFFECT 2: Initial Theme Setup (CRITICAL FIX) ---
  useEffect(() => {
    // This runs only once after the initial component render.
    const savedTheme = localStorage.getItem('theme');
    
    // Set hasMounted after theme is determined
    const timeout = setTimeout(() => setHasMounted(true), 100);
    return () => clearTimeout(timeout);
  }, []);


  


  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  


  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-700 ease-out transform ${
        hasMounted ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
      } ${
        isScrolled
          ? "bg-[#050414]/50 backdrop-blur-md shadow-md dark:bg-[#050414]/50" // Ensures navbar background is theme-aware
          : "bg-transparent"
      }`}
    >
      <div className="px-[7vw] md:px-[7vw] lg:px-[8vw] text-white py-5 flex justify-start gap-50 items-center">
        {/* Logo - Ensuring text adapts to theme (assuming light mode logo is darker) */}
        <div className="text-2xl font-semibold cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          {/* Use responsive text colors */}
          <span className="text-white dark:text-white">Tanisha</span> 
          <span className="text-[#8245ec]">/</span>
          <span className="text-white dark:text-white">Negi</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300 dark:text-gray-400">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`group relative cursor-pointer ${
                activeSection === item.id ? "text-[#8254ec]" : "text-gray-300 dark:text-gray-400"
              }`}
            >
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className="transition-colors duration-300 hover:text-[#8254ec]"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#8254ec] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
            </li>
          ))}
        </ul>

        

        {/* Mobile Menu Icon */}
        <div className="md:hidden z-50">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <CiMenuBurger
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;