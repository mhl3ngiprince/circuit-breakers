import { useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Brain, Eye, MessageSquare, Bot, HeartPulse, TrendingUp, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const focusAreas = [
  {
    icon: Brain,
    title: 'Deep Learning & Neural Networks',
    description: 'Advanced multi-layer neural networks identifying complex data patterns. Computer systems modeled after the human brain, processing information through connected nodes.',
    image: '/Deep-removebg-preview.png',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'Revolutionary image and speech recognition technologies transforming how machines interpret visual and auditory data with unprecedented accuracy.',
    image: '/voice-removebg-preview.png',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: MessageSquare,
    title: 'Natural Language Processing',
    description: 'Bridging human-computer communication through advanced language understanding, powered by transformer models and contextual intelligence.',
    image: '/nlp-removebg-preview.png',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Bot,
    title: 'Robotics & Autonomous Systems',
    description: 'Next-generation robotics and autonomous vehicles reshaping transportation and automation across industries worldwide.',
    image: '/robotics-removebg-preview.png',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: HeartPulse,
    title: 'Medical AI Research',
    description: 'Revolutionary healthcare applications using ML for diagnosis, treatment optimization, and breakthrough medical discoveries.',
    image: '/meds-removebg-preview.png',
    color: 'from-red-500 to-rose-500',
  },
  {
    icon: TrendingUp,
    title: 'Financial AI & Analysis',
    description: 'Advanced financial modeling, algorithmic trading, and predictive analytics revolutionizing investment strategies and risk management.',
    image: '/finance-removebg-preview.png',
    color: 'from-yellow-500 to-amber-500',
  },
];

const FocusAreas = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="focus"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-green-950/10 to-black" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
          >
            <Brain className="w-4 h-4 text-green-400" />
            <span className="text-sm text-green-400 font-medium">Our Expertise</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-orbitron font-black text-responsive-title gradient-text mb-6"
          >
            Our AI Focus Areas
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/60 max-w-2xl mx-auto"
          >
            Exploring the frontiers of artificial intelligence across multiple domains
          </motion.p>
        </div>

        {/* Focus Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative h-full p-6 rounded-2xl glass neon-border overflow-hidden card-hover">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon & Image */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/30">
                      <area.icon className="w-6 h-6 text-green-400" />
                    </div>
                    {area.image && (
                      <motion.img
                        src={area.image}
                        alt={area.title}
                        className="w-16 h-16 object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      />
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-orbitron font-bold text-lg text-white mb-3 group-hover:text-green-400 transition-colors">
                    {area.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 text-sm leading-relaxed mb-4">
                    {area.description}
                  </p>

                  {/* Learn More */}
                  <motion.button
                    className="flex items-center gap-2 text-green-400 text-sm font-medium group/btn"
                    whileHover={{ x: 5 }}
                  >
                    Explore
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl border border-green-500/0 group-hover:border-green-500/30 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-white/60 mb-6">
            Want to dive deeper into any of these areas?
          </p>
          <motion.button
            className="btn-secondary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Resources
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FocusAreas;
