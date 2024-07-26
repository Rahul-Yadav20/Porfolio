import { motion } from 'framer-motion';

const skills = [
  { name: 'ReactJS', icon: '🔵', progress: 80 },
  { name: 'JavaScript', icon: '🟡', progress: 90 },
  { name: 'NodeJS', icon: '🟢', progress: 75 },
  { name: 'MongoDB', icon: '🟢', progress: 70 }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-800 text-white">
      <h2 className="text-3xl text-center mb-8">Skills</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {skills.map(skill => (
          <div key={skill.name} className="flex items-center space-x-4">
            <span className="text-3xl">{skill.icon}</span>
            <div className="w-full">
              <h3 className="text-xl">{skill.name}</h3>
              <div className="bg-gray-700 h-4 rounded-full overflow-hidden">
                <motion.div
                  className="bg-blue-500 h-full"
                  style={{ width: `${skill.progress}%` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.progress}%` }}
                  transition={{ duration: 1 }}
                ></motion.div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
