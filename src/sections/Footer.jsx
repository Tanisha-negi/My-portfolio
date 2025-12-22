import React from "react";
import {
  FaFacebook,
  FaXTwitter,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa6";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-500">Tanisha Negi</h2>


        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            {
              icon: <FaFacebook />,
              link: "https://www.facebook.com/tanisha.negi.9674",
            },
            {
              icon: <FaXTwitter />,
              link: "https://twitter.com/tanisha22071603",
            },
            {
              icon: <FaLinkedin />,
              link: "https://linkedin.com/in/tanisha-negi19",
            },
            {
              icon: <FaInstagram />,
              link: "https://instagram.com/tanishaa_negii",
            },
            {
              icon: <FaGithub />,
              link: "https://github.com/Tanisha-negi",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Tanisha Negi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
