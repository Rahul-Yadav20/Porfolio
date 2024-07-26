import { useState } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = ['Home', 'Experience', 'Projects', 'Skills', 'Contact'];

  return (
    <nav className="bg-gray-800 p-4 fixed w-full z-10">
      <div className="flex justify-between items-center">
        <div className="text-white text-lg">My Portfolio</div>
        <div className="hidden md:flex space-x-4">
          {menuItems.map((menu) => (
            <Link
              key={menu}
              to={menu.toLowerCase()}
              smooth={true}
              duration={500}
              className="cursor-pointer text-white hover:text-gray-400 transition duration-300"
            >
              {menu}
            </Link>
          ))}
        </div>
        <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
          ☰
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="w-[30%] md:hidden bg-black absolute top-16 right-0 h-screen flex flex-col space-y-4 p-4 z-20"
          >
            {menuItems.map((menu) => (
              <Link
                key={menu}
                to={menu.toLowerCase()}
                smooth={true}
                duration={500}
                className="cursor-pointer text-white hover:text-gray-400 transition duration-300"
                onClick={toggleMenu}
              >
                {menu}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
