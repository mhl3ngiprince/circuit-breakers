import { useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Trophy, Microscope, Briefcase, ArrowRight, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: GraduationCap,
    title: 'Machine Learning Training',
    description: 'We provide hands-on workshops and training sessions to help students and professionals master ML techniques. From beginner to advanced levels.',
    features: ['Hands-on Workshops', 'Expert Mentorship', 'Certification Programs'],
    color: 'green',
  },
  {
    icon: Trophy,
    title: 'Hackathons & Competitions',
    description: 'We organize ML hackathons where participants solve real-world problems using AI. Compete, learn, and win exciting prizes.',
    features: ['Real-world Challenges', 'Team Building', 'Prize Pools'],
    color: 'cyan',
  },
  {
    icon: Microscope,
    title: 'Research Collaborations',
    description: 'Our team works with researchers on cutting-edge AI projects and publishes findings in academic journals.',
    features: ['Academic Partnerships', 'Publication Support', 'Research Grants'],
    color: 'purple',
  },
  {
    icon: Briefcase,
    title: 'ML Consulting',
    description: 'We assist businesses in implementing AI solutions to optimize their operations and improve efficiency.',
    features: ['Business Analysis', 'AI Strategy', 'Implementation'],
    color: 'orange',
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/10 to-black" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400 font-medium">What We Offer</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-orbitron font-black text-responsive-title gradient-text mb-6"
          >
            Our Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/60 max-w-2xl mx-auto"
          >
            Comprehensive machine learning services to help students, researchers, and businesses stay ahead in the AI revolution
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative h-full p-8 rounded-2xl glass neon-border overflow-hidden card-hover">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/20 to-cyan-500/20 border border-green-500/30 flex items-center justify-center mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <service.icon className="w-8 h-8 text-green-400" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="font-orbitron font-bold text-xl text-white mb-4 group-hover:text-green-400 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-white/70">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <motion.button
                    className="flex items-center gap-2 text-green-400 font-medium group/btn"
                    whileHover={{ x: 5 }}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden opacity-20">
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-green-500/20 to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16"
        >
          <div className="relative p-8 sm:p-12 rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-cyan-600/20 to-green-600/20" />
            <div className="absolute inset-0 glass" />
            
            {/* Content */}
            <div className="relative z-10 text-center">
              <h3 className="font-orbitron font-bold text-2xl sm:text-3xl text-white mb-4">
                Want to Work With Us?
              </h3>
              <p className="text-white/70 max-w-xl mx-auto mb-8">
                Join our training, research collaborations, or consult with our experts. Let's innovate together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="btn-primary flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  className="btn-secondary flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.button>
              </div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-green-500/20 blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-cyan-500/20 blur-3xl"
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
