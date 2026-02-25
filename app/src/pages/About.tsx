import { useEffect } from 'react';
import { Target, Eye, Heart, Zap } from 'lucide-react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: 'Awande Gumbi',
      role: 'President',
      description: 'Biological Science Student leading our club\'s vision for interdisciplinary AI applications.',
      image: '/logo.png',
    },
    {
      name: 'Zwelie Langeni',
      role: 'Vice President',
      description: 'Computer Science Student driving technical excellence and algorithmic innovation.',
      image: '/zweli.jpg',
    },
    {
      name: 'Vennesa Skosana',
      role: 'Secretary',
      description: 'ICT Student ensuring seamless communication and organizational excellence.',
      image: '/vannessa.jpg',
    },
    {
      name: 'Prince Ngwenya',
      role: 'Training Coordinator',
      description: 'ICT Student architecting comprehensive learning experiences and skill development.',
      image: '/prince.jpg',
    },
    {
      name: 'Katlego Nchabeleng',
      role: 'Events Coordinator',
      description: 'ICT Student orchestrating cutting-edge events and fostering community engagement.',
      image: '/Emmanuel.jpg',
    },
    {
      name: 'Rethabile Binang',
      role: 'Research Officer',
      description: 'ICT Student spearheading breakthrough research initiatives in emerging AI technologies.',
      image: '/logo.png',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower students with the knowledge, skills, and opportunities to excel in artificial intelligence and machine learning, fostering innovation and technological advancement in South Africa.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To become the leading student AI community in Africa, producing world-class talent that drives technological innovation and solves real-world problems through artificial intelligence.',
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'We believe in collaboration, innovation, excellence, and inclusivity. Every student deserves access to quality AI education and the opportunity to make a difference.',
    },
    {
      icon: Zap,
      title: 'Our Impact',
      description: 'Through workshops, projects, and competitions, we have trained hundreds of students and developed solutions that address real challenges in our community.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gray-900">
        <div className="absolute inset-0 opacity-20">
          <img
            src={`${import.meta.env.BASE_URL}robot.png`}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900" />
        
        <div className="relative z-10 container-custom">
          <div className="max-w-3xl">
            <span className="tag mb-4">About Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Pioneering the Future of <span className="text-emerald-400">AI</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Circuit Breakers is more than just a machine learning club – we're a catalyst 
              for data-driven innovation and revolutionary solutions at Sol Plaatje University.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-title mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2022, Circuit Breakers began as a small group of passionate students 
                  who saw the transformative potential of artificial intelligence. What started 
                  as informal study sessions has grown into one of the most active tech communities 
                  at Sol Plaatje University.
                </p>
                <p>
                  Our name, "Circuit Breakers," symbolizes our mission to break down barriers 
                  in AI education and create pathways for students from all backgrounds to enter 
                  the world of machine learning. We believe that AI should be accessible to everyone, 
                  not just those with prior technical experience.
                </p>
                <p>
                  Today, we are a thriving community of over 500 members, with students from 
                  various disciplines coming together to learn, build, and innovate. Our alumni 
                  have gone on to work at leading tech companies, pursue advanced degrees, and 
                  launch their own AI startups.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={`${import.meta.env.BASE_URL}abt_robo.png`}
                alt="Our Story"
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-emerald-500 text-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-emerald-100">Active Members</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="tag mb-4">What Drives Us</span>
            <h2 className="section-title">Our Mission, Vision & Values</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div key={value.title} className="card">
                <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="tag mb-4">Our Team</span>
            <h2 className="section-title">Meet the Leaders</h2>
            <p className="section-subtitle mx-auto">
              The dedicated students behind Circuit Breakers who make everything possible
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="group">
                <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-64 overflow-hidden bg-gray-200">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-emerald-500 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding bg-emerald-500">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Achievements
            </h2>
            <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
              Milestones that mark our journey of growth and impact
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Members Trained' },
              { value: '150+', label: 'Projects Completed' },
              { value: '25+', label: 'Workshops Held' },
              { value: '10+', label: 'Awards Won' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-emerald-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="tag mb-4">Partners</span>
            <h2 className="section-title">Our Partners & Sponsors</h2>
            <p className="section-subtitle mx-auto">
              We're grateful to work with organizations that share our vision
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {['Sol Plaatje University', 'Google Developer Groups', 'Microsoft Learn', 'AWS Educate'].map((partner) => (
              <div key={partner} className="text-2xl font-bold text-gray-400">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
