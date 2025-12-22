import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Astronaut } from "../components/Astronaut";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense, useEffect, useState } from "react";
import Loader from "../components/Loader";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const [animateIcons, setAnimateIcons] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimateIcons(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  // const socialIcons = [
  //   <FaLinkedinIn />, 
  //   <FaXTwitter />,
  //   <FaInstagram />,
  //   <AiOutlineMail />,
  //   <FaGithub />, 
  // ];

  const socialLinks = [
    { icon: <FaLinkedinIn />, href: "https://linkedin.com/in/tanisha-negi19" },
    { icon: <FaXTwitter />, href: "https://twitter.com/tanisha22071603" },
    { icon: <FaInstagram />, href: "https://instagram.com/tanishaa_negii" },
    { icon: <AiOutlineMail />, href: "mailto:tan.negi19@gmail.com" },
    { icon: <FaGithub />, href: "https://github.com/Tanisha-negi" },
  ];
  
  return (
    <section  id="home" className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
      <HeroText />
      {/* <ParallaxBackground /> */}
      <figure className="absolute inset-0" style={{ width: "100vw", height: "100vh" }}>
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Suspense fallback={<Loader />}>
            <Float>
              <Astronaut
                scale={isMobile && 0.23}
                position={isMobile && [0, -1.5, 0]}
              />
            </Float>
            <Rig />
          </Suspense>
        </Canvas>
      </figure>

      {/* Right Section: Social Icons with Animation */}
      {/* <div className="absolute right-10 top-54 z-50">
        <div className="hidden md:flex flex-col gap-8 text-4xl text-neutral-300">
          {socialIcons.map((Icon, index) => (
            <a
              key={index}
              href="#"
              className={`hover:text-[#8245ec] hover:scale-110 transition duration-300 ease-out transform
                ${animateIcons ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
            >
              {Icon}
            </a>
          ))}
        </div>
      </div> */}
      
      <div className="absolute right-10 top-1/2 -translate-y-1/2 z-50">
        <div className="hidden md:flex flex-col gap-8 text-4xl text-neutral-300">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className={`hover:text-[#8245ec] hover:scale-110 transition duration-200 ease-out transform
                ${animateIcons ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default Hero;