import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, FolderGit2, Handshake, TrendingUp, Award, Clock } from 'lucide-react';

interface StatItemProps {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  delay: number;
}

const StatItem = ({ icon: Icon, value, suffix, label, delay }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="relative p-6 sm:p-8 rounded-2xl glass neon-border text-center group"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-green-500/20 to-cyan-500/20 border border-green-500/30 flex items-center justify-center"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <Icon className="w-7 h-7 text-green-400" />
        </motion.div>

        {/* Value */}
        <div className="font-orbitron text-4xl sm:text-5xl font-bold text-white mb-2">
          <span className="gradient-text">{count}</span>
          <span className="text-green-400">{suffix}</span>
        </div>

        {/* Label */}
        <p className="text-white/60 text-sm">{label}</p>
      </div>

      {/* Decorative */}
      <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-green-400/50 animate-pulse" />
    </motion.div>
  );
};

const stats = [
  { icon: Users, value: 500, suffix: '+', label: 'Active Members', delay: 0 },
  { icon: FolderGit2, value: 150, suffix: '+', label: 'AI Projects', delay: 0.1 },
  { icon: Handshake, value: 50, suffix: '+', label: 'Industry Partners', delay: 0.2 },
  { icon: TrendingUp, value: 95, suffix: '%', label: 'Success Rate', delay: 0.3 },
  { icon: Award, value: 25, suffix: '+', label: 'Awards Won', delay: 0.4 },
  { icon: Clock, value: 3, suffix: 'yrs', label: 'Years Active', delay: 0.5 },
];

const Stats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-green-950/20 to-black" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />

      {/* Animated Background Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0,255,0,0.1) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0,255,255,0.08) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
          >
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span className="text-sm text-green-400 font-medium">Our Impact</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-orbitron font-black text-responsive-title gradient-text mb-6"
          >
            Numbers That Speak
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/60 max-w-2xl mx-auto"
          >
            Our journey in numbers - a testament to our commitment to AI excellence
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {stats.map((stat) => (
            <StatItem
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={stat.delay}
            />
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <blockquote className="text-xl sm:text-2xl text-white/80 italic max-w-3xl mx-auto">
            "The future belongs to those who believe in the beauty of their dreams."
          </blockquote>
          <p className="mt-4 text-green-400 font-medium">— Eleanor Roosevelt</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
