import { motion } from 'framer-motion';
import Typed from 'react-typed';
import heroImage from '../assets/image.png'; // Add your image path

const Hero = () => {
  return (
    <section id="home" className="h-screen flex flex-col md:flex-row items-center justify-center bg-gray-900 text-white relative overflow-hidden">
      <motion.div
        className="flex flex-col space-y-4 max-w-lg p-8"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          <Typed
            strings={[
              'Hi, I\'m [Your Name]',
              'I\'m a Web Developer',
              'I Build Amazing Websites'
            ]}
            typeSpeed={50}
            backSpeed={25}
            backDelay={1000}
            loop
          />
        </h1>
        <p className="text-lg md:text-2xl">I'm a web developer with experience in ReactJS, NodeJS, and more. Welcome to my portfolio.</p>
        <a
          href="/resume.pdf"
          download="resume.pdf"
          className="bg-blue-500 px-4 py-2 rounded-full text-white text-base md:text-lg"
        >
          Download Resume
        </a>
      </motion.div>
      <motion.div
        className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500 md:ml-8 mt-4 md:mt-0"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img src={heroImage} alt="Hero" className="w-full h-full object-cover" />
      </motion.div>
    </section>
  );
};

export default Hero;
