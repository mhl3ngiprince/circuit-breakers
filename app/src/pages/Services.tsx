import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Trophy, Microscope, Briefcase, ArrowRight, Check, Users, Calendar, Code } from 'lucide-react';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mainServices = [
    {
      icon: GraduationCap,
      title: 'Machine Learning Training',
      description: 'Comprehensive training programs designed to take you from beginner to advanced levels in machine learning and artificial intelligence.',
      features: [
        'Beginner to Advanced Python Programming',
        'Machine Learning Fundamentals',
        'Deep Learning & Neural Networks',
        'Hands-on Projects & Assignments',
        'Expert Mentorship & Guidance',
        'Certification Upon Completion',
      ],
      color: 'emerald',
    },
    {
      icon: Trophy,
      title: 'Hackathons & Competitions',
      description: 'Exciting competitions where you can apply your skills, collaborate with peers, and win amazing prizes while solving real-world problems.',
      features: [
        'Monthly Internal Hackathons',
        'Inter-University Competitions',
        'Real-world Problem Solving',
        'Team Building Opportunities',
        'Mentorship During Events',
        'Cash Prizes & Recognition',
      ],
      color: 'blue',
    },
    {
      icon: Microscope,
      title: 'Research Collaborations',
      description: 'Work alongside faculty and industry experts on cutting-edge research projects that push the boundaries of AI technology.',
      features: [
        'Access to Research Papers',
        'Collaboration with Faculty',
        'Publication Opportunities',
        'Research Grant Support',
        'Conference Presentations',
        'Industry Partnerships',
      ],
      color: 'purple',
    },
    {
      icon: Briefcase,
      title: 'ML Consulting',
      description: 'Professional consulting services for businesses looking to implement AI solutions and optimize their operations.',
      features: [
        'Business Process Analysis',
        'AI Strategy Development',
        'Custom Solution Design',
        'Implementation Support',
        'Performance Monitoring',
        'Ongoing Maintenance',
      ],
      color: 'orange',
    },
  ];

  const workshops = [
    {
      title: 'Python for Data Science',
      duration: '4 Weeks',
      level: 'Beginner',
      description: 'Learn Python programming with focus on data manipulation, analysis, and visualization.',
    },
    {
      title: 'Machine Learning Basics',
      duration: '6 Weeks',
      level: 'Intermediate',
      description: 'Understand core ML concepts including supervised and unsupervised learning algorithms.',
    },
    {
      title: 'Deep Learning with TensorFlow',
      duration: '8 Weeks',
      level: 'Advanced',
      description: 'Build neural networks and deep learning models using TensorFlow and Keras.',
    },
    {
      title: 'Computer Vision',
      duration: '6 Weeks',
      level: 'Intermediate',
      description: 'Learn image processing, object detection, and facial recognition techniques.',
    },
  ];

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
            <span className="tag mb-4">What We Offer</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our <span className="text-emerald-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Comprehensive machine learning services designed to help students, researchers, 
              and businesses harness the power of artificial intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="tag mb-4">Core Services</span>
            <h2 className="section-title">How We Can Help You</h2>
            <p className="section-subtitle mx-auto">
              From learning to implementation, we provide end-to-end AI solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {mainServices.map((service) => (
              <div key={service.title} className="card hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 rounded-xl bg-${service.color}-100 flex items-center justify-center flex-shrink-0`}>
                    <service.icon className={`w-8 h-8 text-${service.color}-600`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-700">
                          <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="tag mb-4">Training Programs</span>
              <h2 className="section-title mb-6">
                Upcoming <span className="gradient-text">Workshops</span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our workshops are designed to provide practical, hands-on experience with 
                the latest tools and technologies in machine learning. Led by industry 
                experts and experienced students, these sessions will accelerate your learning journey.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <Users className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Expert Instructors</div>
                    <div className="text-gray-600 text-sm">Learn from industry professionals</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Flexible Schedule</div>
                    <div className="text-gray-600 text-sm">Weekend and evening sessions</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <Code className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Hands-on Learning</div>
                    <div className="text-gray-600 text-sm">Practice with real projects</div>
                  </div>
                </div>
              </div>

              <Link to="/contact" className="btn-primary mt-8">
                Register for Workshops
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="space-y-4">
              {workshops.map((workshop) => (
                <div key={workshop.title} className="card">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        {workshop.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{workshop.description}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-600 rounded-full text-sm font-medium">
                        {workshop.level}
                      </span>
                      <span className="text-gray-500 text-sm">{workshop.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="tag mb-4">How It Works</span>
            <h2 className="section-title">Get Started in 4 Easy Steps</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Sign Up',
                description: 'Create your account and join our community of AI enthusiasts.',
              },
              {
                step: '02',
                title: 'Choose a Service',
                description: 'Select from our range of training programs, workshops, or consulting services.',
              },
              {
                step: '03',
                title: 'Learn & Build',
                description: 'Attend sessions, work on projects, and collaborate with peers.',
              },
              {
                step: '04',
                title: 'Showcase',
                description: 'Present your projects and get recognized in our community.',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-emerald-500">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your AI Journey?
            </h2>
            <p className="text-emerald-100 text-lg mb-8">
              Whether you're looking to learn, compete, or collaborate, we have something for you. 
              Get in touch with us today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2">
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/projects" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
