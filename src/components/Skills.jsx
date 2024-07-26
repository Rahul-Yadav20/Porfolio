import { motion } from 'framer-motion';

const skills = [
    { name: 'ReactJS', icon: 'https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png', progress: 80 },
    { name: 'JavaScript', icon: 'https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png', progress: 90 },
    { name: 'NodeJS', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUqEJ-vteZ6DrboNx5xTKwSvKZW3gW1ZodQg&usqp=CAU', progress: 75 },
    { name: 'MongoDB', icon: 'https://seeklogo.com/images/M/mongodb-logo-D13D67C930-seeklogo.com.png', progress: 70 }
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-gray-800 text-white">
            <h2 className="text-3xl text-center mb-8">Skills</h2>
            <div className="max-w-4xl mx-auto space-y-8">
                {skills.map(skill => (
                    <div key={skill.name} className="flex items-center space-x-4">
                        <img src={skill.icon} className="text-3xl w-10 h-10 rounded-full"></img>
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

