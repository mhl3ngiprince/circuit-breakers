import { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Instagram, MessageCircle, Linkedin, Github } from 'lucide-react';
import robot from '../assets/images/robot.png';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'info@circuitbreakers.co.za',
      link: 'mailto:info@circuitbreakers.co.za',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+27 (0) 53 491 0000',
      link: 'tel:+270534910000',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Sol Plaatje University, Kimberley, South Africa',
      link: '#',
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/spucircut?igsh=YTVxdXhjNmZrcHc2', label: 'Instagram' },
    { icon: MessageCircle, href: 'https://www.tiktok.com/@spu_circuitbreakers?_t=ZM-8ujSYcgFz8w&_r=1', label: 'TikTok' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gray-900">
        <div className="absolute inset-0 opacity-10">
          <img
            src={robot}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 to-gray-900" />
        
        <div className="relative z-10 container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="tag mb-4">Get In Touch</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Contact <span className="text-emerald-400">Us</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Have a question or want to join? We'd love to hear from you. 
              Reach out and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-6 mb-8">
                {contactInfo.map((item) => (
                  <a
                    key={item.title}
                    href={item.link}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500 transition-colors">
                      <item.icon className="w-5 h-5 text-emerald-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.content}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-emerald-500 hover:text-white transition-all"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-2xl p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-emerald-500" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600">
                      Thank you for reaching out. We'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="input-field"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="input-field"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="input-field"
                      >
                        <option value="">Select a subject</option>
                        <option value="join">I want to join the club</option>
                        <option value="training">Training & Workshops</option>
                        <option value="project">Project Collaboration</option>
                        <option value="consulting">Business Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="input-field resize-none"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="btn-primary w-full justify-center"
                    >
                      {isLoading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="section-padding bg-emerald-500">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join Circuit Breakers?
            </h2>
            <p className="text-emerald-100 text-lg mb-8">
              Become part of South Africa's premier student AI community. 
              No prior experience required – just bring your curiosity and passion for learning.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  title: 'Free Membership',
                  description: 'No fees to join our community',
                },
                {
                  title: 'Weekly Meetups',
                  description: 'Regular sessions and workshops',
                },
                {
                  title: 'Expert Mentorship',
                  description: 'Learn from industry professionals',
                },
              ].map((benefit) => (
                <div key={benefit.title} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-emerald-100 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>

            <p className="text-white/80 text-sm">
              Membership is open to all Sol Plaatje University students regardless of their field of study.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="tag mb-4">FAQ</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: 'Who can join Circuit Breakers?',
                answer: 'Any Sol Plaatje University student can join, regardless of their field of study or prior experience with AI/ML. We welcome students from all backgrounds.',
              },
              {
                question: 'Is there a membership fee?',
                answer: 'No, membership is completely free. We believe AI education should be accessible to everyone.',
              },
              {
                question: 'Do I need programming experience?',
                answer: 'Not at all! We have programs for all skill levels, from complete beginners to advanced practitioners.',
              },
              {
                question: 'How often do you meet?',
                answer: 'We have weekly meetups every Saturday, plus additional workshops and events throughout the month.',
              },
              {
                question: 'Can I work on my own projects?',
                answer: 'Absolutely! We encourage members to work on personal projects and provide mentorship and resources to help you succeed.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
