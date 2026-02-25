import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Users, Lightbulb, Target, Award, ChevronRight } from 'lucide-react';
import abt_robo from '../assets/images/abt_robo.png';

const Home = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { value: '500+', label: 'Active Members' },
    { value: '150+', label: 'Projects Completed' },
    { value: '50+', label: 'Industry Partners' },
    { value: '95%', label: 'Success Rate' },
  ];

  const features = [
    {
      icon: Lightbulb,
      title: 'Learn AI & ML',
      description: 'Master machine learning through hands-on workshops and expert-led training sessions.',
    },
    {
      icon: Users,
      title: 'Join Community',
      description: 'Connect with like-minded students, mentors, and industry professionals.',
    },
    {
      icon: Target,
      title: 'Build Projects',
      description: 'Work on real-world AI projects that solve actual problems.',
    },
    {
      icon: Award,
      title: 'Win Competitions',
      description: 'Participate in hackathons and showcase your skills to win prizes.',
    },
  ];

  return (
    <div>
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="/robot.png"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-city-11748-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container-custom pt-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">AI Revolution Starts Here</span>
            </div>

            {/* Title */}
            <h1 className="text-hero text-white mb-6">
              Circuit Breakers
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-emerald-400 font-medium mb-6">
              Where AI Meets Innovation
            </p>

            {/* Description */}
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10">
              Join Sol Plaatje University's premier AI and Machine Learning club. 
              Learn, build, and innovate with a community of passionate students.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary text-lg">
                Join the Club
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/projects" className="btn-outline-white text-lg">
                <Play className="w-5 h-5" />
                View Projects
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <span className="tag mb-4">About Us</span>
              <h2 className="section-title mb-6">
                Pioneering the Future of <span className="gradient-text">Artificial Intelligence</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Circuit Breakers is a student-led club at Sol Plaatje University dedicated to 
                exploring the exciting world of Machine Learning and Artificial Intelligence. 
                Our mission is to empower students with knowledge, hands-on experience, and 
                opportunities in the field of intelligent computing.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Through workshops, coding challenges, and real-world projects, we bridge the 
                gap between theory and practical application. Whether you're a beginner or 
                an experienced developer, Circuit Breakers is the perfect place to collaborate, 
                learn, and innovate.
              </p>
              <Link to="/about" className="btn-secondary">
                Learn More About Us
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={abt_robo}
                  alt="AI Innovation"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-emerald-500 text-white p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-bold">3+</div>
                <div className="text-emerald-100">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="tag mb-4">What We Do</span>
            <h2 className="section-title">Why Join Circuit Breakers?</h2>
            <p className="section-subtitle mx-auto">
              Discover the benefits of being part of our vibrant AI community
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="card group">
                <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors">
                  <feature.icon className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="card-green rounded-2xl p-6">
                  <div className="text-4xl mb-2">🎓</div>
                  <h4 className="font-semibold text-lg mb-1">Training</h4>
                  <p className="text-emerald-100 text-sm">Hands-on ML workshops</p>
                </div>
                <div className="bg-gray-900 text-white rounded-2xl p-6">
                  <div className="text-4xl mb-2">🏆</div>
                  <h4 className="font-semibold text-lg mb-1">Hackathons</h4>
                  <p className="text-gray-400 text-sm">Compete and win prizes</p>
                </div>
                <div className="bg-gray-100 rounded-2xl p-6">
                  <div className="text-4xl mb-2">🔬</div>
                  <h4 className="font-semibold text-lg mb-1 text-gray-900">Research</h4>
                  <p className="text-gray-600 text-sm">Cutting-edge projects</p>
                </div>
                <div className="card-green rounded-2xl p-6">
                  <div className="text-4xl mb-2">💼</div>
                  <h4 className="font-semibold text-lg mb-1">Consulting</h4>
                  <p className="text-emerald-100 text-sm">AI solutions for business</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <span className="tag mb-4">Our Services</span>
              <h2 className="section-title mb-6">
                Comprehensive <span className="gradient-text">ML Services</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We offer a range of machine learning services designed to help students, 
                researchers, and businesses harness the power of AI. From training programs 
                to consulting services, we've got you covered.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Machine Learning Training & Workshops',
                  'Hackathons & Competitions',
                  'Research Collaborations',
                  'ML Consulting for Businesses',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/services" className="btn-primary">
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-4 text-emerald-400 text-sm font-medium">
                Our Work
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Featured Projects
              </h2>
            </div>
            <Link to="/projects" className="btn-outline-white mt-6 md:mt-0">
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'AI Face Recognition',
                description: 'Smart security system using deep learning for real-time identification.',
                image: '/Deep-removebg-preview.png',
                tags: ['Python', 'TensorFlow', 'OpenCV'],
              },
              {
                title: 'Stock Market Predictor',
                description: 'ML models analyzing financial trends to predict stock prices.',
                image: '/finance-removebg-preview.png',
                tags: ['Python', 'Pandas', 'Scikit-learn'],
              },
              {
                title: 'AI Chatbot',
                description: 'Intelligent chatbot with human-like conversations using NLP.',
                image: '/nlp-removebg-preview.png',
                tags: ['Python', 'NLTK', 'Transformers'],
              },
            ].map((project) => (
              <div key={project.title} className="group bg-gray-800 rounded-2xl overflow-hidden hover:bg-gray-750 transition-colors">
                <div className="h-48 overflow-hidden bg-gray-700 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-emerald-500">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your AI Journey?
          </h2>
          <p className="text-emerald-100 text-lg max-w-2xl mx-auto mb-8">
            Join Circuit Breakers today and be part of a community that's shaping the future 
            of artificial intelligence in South Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2">
              Join Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
