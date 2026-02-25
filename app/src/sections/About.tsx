import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Users, Lightbulb, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  {
    name: 'AWANDE GUMBI',
    role: 'President',
    description: 'Biological Science Student leading our club\'s vision for interdisciplinary AI applications in life sciences.',
    image: '/logo.png',
  },
  {
    name: 'ZWELIE LANGENI',
    role: 'Vice President',
    description: 'Computer Science Student driving technical excellence and algorithmic innovation across our projects.',
    image: '/zweli.jpg',
  },
  {
    name: 'VENNESA SKOSANA',
    role: 'Secretary',
    description: 'ICT Student ensuring seamless communication and organizational excellence within our community.',
    image: '/vannessa.jpg',
  },
  {
    name: 'PRINCE NGWENYA',
    role: 'Training Coordinator',
    description: 'ICT Student architecting comprehensive learning experiences and skill development programs.',
    image: '/prince.jpg',
  },
  {
    name: 'KATLEGO NCHABELENG',
    role: 'Events Coordinator',
    description: 'ICT Student orchestrating cutting-edge events and fostering community engagement.',
    image: '/Emmanuel.jpg',
  },
  {
    name: 'RETHABILE BINANG',
    role: 'Research Officer',
    description: 'ICT Student spearheading breakthrough research initiatives in emerging AI technologies.',
    image: '/logo.png',
  },
];

const features = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'Empower students with knowledge and hands-on experience in AI and Machine Learning.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'A vibrant network of students, mentors, and industry professionals.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Pushing boundaries through workshops, hackathons, and real-world projects.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Committed to achieving the highest standards in AI education and research.',
  },
];

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/98 to-black" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
          >
            <Users className="w-4 h-4 text-green-400" />
            <span className="text-sm text-green-400 font-medium">About Us</span>
          </motion.div>

          <h2
            ref={titleRef}
            className="font-orbitron font-black text-responsive-title gradient-text mb-6"
          >
            Pioneering the Future of AI
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
          >
            We are a student-led club at <strong className="text-green-400">Sol Plaatje University</strong> dedicated to exploring the exciting world of{' '}
            <strong className="text-green-400">Machine Learning and Artificial Intelligence</strong>. Our mission is to empower students with knowledge, hands-on experience, and opportunities in the field of intelligent computing.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative p-6 rounded-2xl glass neon-border card-hover"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/10 to-cyan-500/10 opacity-0 hover:opacity-100 transition-opacity" />
              <feature.icon className="w-10 h-10 text-green-400 mb-4" />
              <h3 className="font-orbitron font-bold text-lg text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-orbitron font-bold text-2xl sm:text-3xl gradient-text mb-4"
          >
            Meet Our Elite Team
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60"
          >
            The brilliant minds behind Circuit Breakers
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative p-6 rounded-2xl glass neon-border overflow-hidden card-hover">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Avatar */}
                  <motion.div
                    className="relative w-24 h-24 mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-cyan-400 animate-spin-slow" style={{ padding: '2px' }}>
                      <div className="w-full h-full rounded-full bg-black" />
                    </div>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-full object-cover border-2 border-green-500/50"
                    />
                  </motion.div>

                  {/* Info */}
                  <h4 className="font-orbitron font-bold text-lg text-white mb-1 group-hover:text-green-400 transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-green-400 text-sm font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>

                {/* Corner Decoration */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* About Robot Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 0.15, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute left-0 bottom-0 w-1/4 h-auto pointer-events-none hidden lg:block"
        >
          <img
            src={`${import.meta.env.BASE_URL}abt_robo.png`}
            alt="AI Robot"
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
