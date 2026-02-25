import { useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, Cpu, LineChart, MessageCircle, Sprout } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    icon: Cpu,
    title: 'AI-Based Face Recognition',
    description: 'A smart security system using deep learning to identify individuals in real-time with 99.5% accuracy.',
    tech: ['Python', 'TensorFlow', 'OpenCV'],
    image: '/logo.png',
    github: '#',
    demo: '#',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: LineChart,
    title: 'Stock Market Prediction',
    description: 'Utilizing ML models to analyze financial trends and predict stock prices with high precision.',
    tech: ['Python', 'Pandas', 'Scikit-learn'],
    image: '/finance-removebg-preview.png',
    github: '#',
    demo: '#',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: MessageCircle,
    title: 'AI Chatbot with NLP',
    description: 'Developed an intelligent chatbot capable of human-like conversations using advanced NLP techniques.',
    tech: ['Python', 'NLTK', 'Transformers'],
    image: '/nlp-removebg-preview.png',
    github: '#',
    demo: '#',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Sprout,
    title: 'Smart Agriculture',
    description: 'AI-powered system to optimize crop yields and monitor plant health using IoT sensors.',
    tech: ['Python', 'IoT', 'Machine Learning'],
    image: '/robotics-removebg-preview.png',
    github: '#',
    demo: '#',
    color: 'from-orange-500 to-yellow-500',
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
          >
            <Cpu className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-400 font-medium">Our Work</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-orbitron font-black text-responsive-title gradient-text mb-6"
          >
            Featured Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/60 max-w-2xl mx-auto"
          >
            Explore the innovative machine learning projects developed by Circuit Breakers
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative h-full rounded-2xl glass neon-border overflow-hidden card-hover">
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain p-8"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 p-2 rounded-xl bg-black/50 backdrop-blur-sm border border-white/10">
                    <project.icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-orbitron font-bold text-xl text-white mb-3 group-hover:text-green-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-white/60 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-green-500/10 text-green-400 border border-green-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-white/70 text-sm hover:bg-white/10 hover:text-white transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/20 text-green-400 text-sm hover:bg-green-500/30 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </motion.a>
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-5`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <motion.button
            className="btn-secondary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
