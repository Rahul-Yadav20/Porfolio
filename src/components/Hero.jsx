import { motion } from 'framer-motion';
import heroImage from '../assets/image.png'; // Add your image path

const Hero = () => {
    return (
        <section id="home" className="h-screen flex flex-col md:flex-row items-center justify-center bg-gray-900 text-white relative overflow-hidden">
            <div className='w-full flex flex-col md:flex-row justify-evenly items-center'>
                <motion.div
                    className="flex flex-col space-y-4 max-w-lg p-8"
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-bold">Hi, I'm Rahul Yadav</h1>
                    <p className="text-lg">I'm a web developer with experience in ReactJS, NodeJS, and more. Welcome to my portfolio.</p>
                    <a
                        href="/resume.pdf"
                        download="resume.pdf"
                        className="bg-blue-500 px-4 py-2 rounded-full text-white text-center"
                    >
                         Resume
                    </a>
                </motion.div>
                <motion.div
                    className="w-60 h-60 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-blue-500 md:ml-8 mt-4 md:mt-0"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <img src={heroImage} alt="Hero" className="w-full h-full object-contain" />
                </motion.div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none"></div>
        </section>
    );
};

export default Hero;
