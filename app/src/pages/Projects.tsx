import { useEffect, useState } from 'react';
import { ExternalLink, Github, Cpu, LineChart, MessageCircle, Sprout, Brain, Eye } from 'lucide-react';

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: 'AI-Based Face Recognition',
      description: 'A smart security system using deep learning to identify individuals in real-time with 99.5% accuracy. Features include face detection, recognition, and tracking.',
      image: '/Deep-removebg-preview.png',
      category: 'Computer Vision',
      tags: ['Python', 'TensorFlow', 'OpenCV', 'Deep Learning'],
      icon: Eye,
      github: '#',
      demo: '#',
      status: 'Completed',
    },
    {
      title: 'Stock Market Prediction',
      description: 'Utilizing ML models to analyze financial trends and predict stock prices with high precision. Includes data visualization and risk analysis.',
      image: '/finance-removebg-preview.png',
      category: 'Finance',
      tags: ['Python', 'Pandas', 'Scikit-learn', 'LSTM'],
      icon: LineChart,
      github: '#',
      demo: '#',
      status: 'Completed',
    },
    {
      title: 'AI Chatbot with NLP',
      description: 'Developed an intelligent chatbot capable of human-like conversations using advanced NLP techniques. Supports multiple languages and contexts.',
      image: '/nlp-removebg-preview.png',
      category: 'NLP',
      tags: ['Python', 'NLTK', 'Transformers', 'BERT'],
      icon: MessageCircle,
      github: '#',
      demo: '#',
      status: 'In Progress',
    },
    {
      title: 'Smart Agriculture',
      description: 'AI-powered system to optimize crop yields and monitor plant health using IoT sensors. Provides real-time recommendations to farmers.',
      image: '/robotics-removebg-preview.png',
      category: 'IoT',
      tags: ['Python', 'IoT', 'Machine Learning', 'Sensors'],
      icon: Sprout,
      github: '#',
      demo: '#',
      status: 'Completed',
    },
    {
      title: 'Medical Diagnosis Assistant',
      description: 'AI system that assists doctors in diagnosing diseases from medical images. Achieves high accuracy in detecting various conditions.',
      image: '/meds-removebg-preview.png',
      category: 'Healthcare',
      tags: ['Python', 'CNN', 'Medical Imaging', 'TensorFlow'],
      icon: Brain,
      github: '#',
      demo: '#',
      status: 'In Progress',
    },
    {
      title: 'Autonomous Robot Navigation',
      description: 'Robotics project focused on creating autonomous navigation systems for robots using computer vision and path planning algorithms.',
      image: '/robot.png',
      category: 'Robotics',
      tags: ['Python', 'ROS', 'Computer Vision', 'SLAM'],
      icon: Cpu,
      github: '#',
      demo: '#',
      status: 'In Progress',
    },
  ];

  const categories = ['All', 'Computer Vision', 'NLP', 'Finance', 'IoT', 'Healthcare', 'Robotics'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gray-900">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/robot.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 to-gray-900" />
        
        <div className="relative z-10 container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="tag mb-4">Our Work</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Featured <span className="text-emerald-400">Projects</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Explore the innovative machine learning projects developed by our talented 
              community of students at Circuit Breakers.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-5 py-2 rounded-full font-medium transition-all ${
                  filter === category
                    ? 'bg-emerald-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.title} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                {/* Image */}
                <div className="h-56 bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Status Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completed'
                        ? 'bg-emerald-100 text-emerald-600'
                        : 'bg-amber-100 text-amber-600'
                    }`}>
                      {project.status}
                    </span>
                    <project.icon className="w-5 h-5 text-gray-400" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '150+', label: 'Total Projects' },
              { value: '80+', label: 'Completed' },
              { value: '70+', label: 'In Progress' },
              { value: '25+', label: 'Awards Won' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-emerald-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Project CTA */}
      <section className="section-padding bg-emerald-500">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Have a Project Idea?
            </h2>
            <p className="text-emerald-100 text-lg mb-8">
              We're always looking for new and innovative projects. If you have an idea 
              you'd like to work on with our community, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:projects@circuitbreakers.co.za"
                className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
              >
                Submit Your Idea
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
