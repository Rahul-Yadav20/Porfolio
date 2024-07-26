import { Link } from 'react-scroll';

const Footer = () => {
  const menuItems = ['Home', 'Experience', 'Projects', 'Skills', 'Contact'];

  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          {menuItems.map(menu => (
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
        <div className="flex space-x-4">
          <a href="https://github.com/yourprofile" className="hover:text-gray-400 transition duration-300">GitHub</a>
          <a href="https://www.linkedin.com/in/yourprofile" className="hover:text-gray-400 transition duration-300">LinkedIn</a>
          <a href="https://www.instagram.com/yourprofile" className="hover:text-gray-400 transition duration-300">Instagram</a>
        </div>
        <div>© 2024 Your Name</div>
      </div>
    </footer>
  );
};

export default Footer;
