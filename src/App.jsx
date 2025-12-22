import React from 'react'
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import BlurBlob from './components/BlurBlob';
import Projects from './sections/Projects'; 
// import Education from './sections/Education';
import Contact from './sections/Contact';
import Footer from './sections/Footer';


const App = () => {
  return (
    <div className='container mx-auto max-w-7xl'>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
    <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />
    <Navbar />
    <Hero />
    <About />
    <Projects />
    {/* <Education /> */}
    <Contact />
    <Footer />
  </div>
  );
};

export default App;