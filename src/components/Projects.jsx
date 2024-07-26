import { motion } from 'framer-motion';

const projects = [
  { name: 'Project 1', description: 'Description of project 1', image: 'path_to_image1.png' },
  { name: 'Project 2', description: 'Description of project 2', image: 'path_to_image2.png' },
  { name: 'Project 3', description: 'Description of project 3', image: 'path_to_image3.png' },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-800 text-white">
      <h2 className="text-3xl text-center mb-8">Projects</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map(project => (
          <motion.div
            key={project.name}
            className="bg-gray-700 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={project.image} alt={project.name} className="rounded-t-lg" />
            <h3 className="text-xl mt-4">{project.name}</h3>
            <p className="text-lg">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
