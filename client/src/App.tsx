import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Menu, 
  X, 
  Instagram, 
  Award, 
  Youtube, 
  Palette, 
  Monitor 
} from 'lucide-react';
import ProjectDetails from './components/ProjectDetails';
import CertificateDetails from './components/CertificateDetails';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<null | {
    title: string;
    fullDescription: string;
    techStack: string[];
    images?: string[];
    links?: { title: string; url: string }[];
  }>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<null | {
    title: string;
    platform: string;
    description: string;
    imagePath?: string;
    pdfContent?: string;
    completionDate?: string;
    duration?: string;
    credentials?: { type: string; value: string }[];
  }>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: 'Arduino Radar System',
      shortDescription: 'Built an ultrasonic radar system using Arduino and servo motors for object detection and mapping.',
      fullDescription: 'Built an ultrasonic radar system using Arduino and servo motors for object detection and mapping. The system uses ultrasonic sensors to detect objects and creates a real-time visualization of the surrounding environment.',
      techStack: ['Arduino', 'C++', 'Processing'],
      icon: <Monitor className="w-12 h-12 text-blue-500" />,
      images: ['/projects/images/arduino_radar.png']
    },
    {
      title: 'Canva Creative Designs',
      shortDescription: 'Designed social media posts and marketing material using Canva.',
      fullDescription: 'This project showcases a collection of social media creatives, banners, and posters designed using Canva for personal branding and freelance clients. Focused on aesthetic alignment, brand consistency, and impactful visual messaging. The collection includes festive designs, product advertisements, and social media profile graphics.',
      techStack: ['Canva', 'Social Media', 'Design'],
      icon: <Palette className="w-12 h-12 text-purple-500" />,
      images: [
        '/projects/canva-designs/canva_advertisement.png',
        '/projects/canva-designs/mahavir_jayanti.png',
        '/projects/canva-designs/hanuman_jayanti.png',
        '/projects/canva-designs/ipl.png',
        '/projects/canva-designs/beast_mode_1.jpg',
        '/projects/canva-designs/beast_mode_2.jpg',
        '/projects/canva-designs/profile_picture.png'
      ]
    },
    {
      title: "Canva Tutorial YouTube Channel",
      shortDescription: "Created tutorials and design inspiration videos on Canva for YouTube.",
      fullDescription: "I launched a YouTube channel dedicated to Canva tutorials, showcasing design tips, tricks, and creative inspiration. The channel helps beginners learn how to create professional designs using the easy-to-use Canva interface.",
      techStack: ["Canva", "Video Editing", "Content Creation", "YouTube"],
      icon: <Youtube className="w-12 h-12 text-red-500" />,
      links: [
        { title: "Visit YouTube Channel", url: "https://www.youtube.com/@NEXAGENCANVA" }
      ]
    }
  ];

  const certifications = [
    {
      title: 'AI for Managers',
      platform: 'Microsoft and LinkedIn',
      description: 'Learning Path covering Artificial Intelligence for Business, Cross-team Collaboration, and AI Productivity tools.',
      icon: <Award className="w-8 h-8 text-blue-500" />,
      imagePath: '/certificates/images/AI_for_Managers.png',
      completionDate: 'Apr 12, 2025',
      duration: '4 hours 24 minutes'
    },
    {
      title: 'Amplify Your Critical Thinking with Generative AI',
      platform: 'LinkedIn Learning',
      description: 'Course focusing on Artificial Intelligence for Business and Critical Thinking applications.',
      icon: <Award className="w-8 h-8 text-blue-500" />,
      imagePath: '/certificates/images/Amplify_Critical_Thinking_1.png',
      completionDate: 'Apr 12, 2025',
      duration: '1 hour',
      credentials: [
        { type: 'NASBA CPE Credit', value: '2.00' },
        { type: 'PMI PDUs', value: '1.00' }
      ]
    },
    {
      title: 'Become an AI-Powered People Manager',
      platform: 'LinkedIn Learning',
      description: 'Course covering Artificial Intelligence for Business and People Management strategies.',
      icon: <Award className="w-8 h-8 text-blue-500" />,
      imagePath: '/certificates/images/AI_Powered_People_Manager.png',
      completionDate: 'Apr 08, 2025',
      duration: '45 minutes'
    },
    {
      title: 'Building a Collaborative Team Culture with AI',
      platform: 'LinkedIn Learning',
      description: 'Course focusing on AI for Business, Cross-team Collaboration, and Team Culture enhancement.',
      icon: <Award className="w-8 h-8 text-blue-500" />,
      imagePath: '/certificates/images/Building_Collaborative_Team_1.png',
      completionDate: 'Apr 12, 2025',
      duration: '39 minutes',
      credentials: [
        { type: 'NASBA CPE Credit', value: '1.40' }
      ]
    },
    {
      title: 'Enhance Your Coaching Impact with Generative AI',
      platform: 'LinkedIn Learning',
      description: 'Course on leveraging AI for Business, Coaching & Mentoring, and Generative AI Tools.',
      icon: <Award className="w-8 h-8 text-blue-500" />,
      imagePath: '/certificates/images/Enhance_Coaching_Impact_1.png',
      completionDate: 'Apr 12, 2025',
      duration: '38 minutes',
      credentials: [
        { type: 'NASBA CPE Credit', value: '1.20' },
        { type: 'PMI PDUs', value: '0.50' }
      ]
    },
    {
      title: 'The Manager\'s Guide to Career Conversations in the Age of AI',
      platform: 'LinkedIn Learning',
      description: 'Course covering AI for Business, Career Management, and People Management in the AI era.',
      icon: <Award className="w-8 h-8 text-blue-500" />,
      imagePath: '/certificates/images/Career_Conversations_AI_1.png',
      completionDate: 'Apr 08, 2025',
      duration: '57 minutes',
      credentials: [
        { type: 'NASBA CPE Credit', value: '1.80' }
      ]
    },
    {
      title: 'Microsoft AI Skills Fest',
      platform: 'Microsoft',
      description: 'Participated in Official Guinness World Record Attempt for "Most users to take an online multi-level artificial intelligence lesson in 24 hours"',
      icon: <Award className="w-8 h-8 text-purple-500" />,
      imagePath: '/certificates/Microsoft_AI_Skills_Badge.png',
      completionDate: 'Apr 8, 2025'
    }
  ];

  const skills = [
    { category: 'Programming', items: ['Python', 'JavaScript', 'C++', 'Java'] },
    { category: 'Web Technologies', items: ['React', 'Node.js', 'HTML/CSS', 'TypeScript'] },
    { category: 'Tools & Platforms', items: ['Git', 'Docker', 'AWS', 'Arduino'] },
    { category: 'Design', items: ['Figma', 'Canva', 'Adobe XD', 'Sketch'] },
    { category: 'Python & SQL Achievements', items: ['Data Analysis with Python', 'SQL Database Projects', 'Python Automation Scripts', 'Web Scraping with Python'] }
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would handle the form submission here
    alert('Message sent! This is a demo, so no actual message was sent.');
  };

  return (
    <div className="min-h-screen bg-[#000510]">
      {/* Navigation */}
      <nav className="fixed w-full bg-[#000510]/80 backdrop-blur-sm border-b border-blue-500/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white neon-glow">Portfolio</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'projects', 'certifications', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`${
                    activeSection === item
                      ? 'text-blue-400 neon-glow'
                      : 'text-gray-300 hover:text-blue-400'
                  } capitalize transition-colors duration-200`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-blue-400"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#000510]/95 border-b border-blue-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['home', 'about', 'projects', 'certifications', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-3 py-2 text-base font-medium capitalize text-gray-300 hover:text-blue-400 hover:bg-blue-500/10"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        {/* Home Section */}
        <section
          id="home"
          className="min-h-screen tech-grid flex items-center justify-center relative"
        >
          <div className="matrix-rain"></div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Hello, I'm <span className="text-blue-400 neon-glow">Neev Patel</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Aspiring Computer Science Engineer & Tech Enthusiast
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com/neevpatel018"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/neev-patel-640918315/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/neevpatel_018/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
            <div className="mt-12">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-full text-blue-400 font-medium transition-all duration-300 hover:scale-105"
              >
                View My Projects
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="py-16 bg-[#000510] section-fade"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8 neon-glow">About Me</h2>
            <div className="prose prose-lg">
              <p className="text-gray-300 mb-4">
                I'm a passionate tech enthusiast with a deep love for building innovative solutions that make a real impact. My journey in technology started with hands-on Arduino projects and has evolved into developing systems that solve real-world problems.
              </p>
              <p className="text-gray-300 mb-4">
                I'm especially interested in Artificial Intelligence, Robotics, and the Internet of Things. I believe in learning by doing — exploring new technologies, experimenting with bold ideas, and constantly pushing my limits.
              </p>
              <p className="text-gray-300">
                My goal is to become a leading innovator in the tech industry, creating solutions that improve lives and drive positive change. I'm always open to learning, growing, and collaborating on exciting projects that challenge the status quo.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="py-16 bg-[#001233] section-fade"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8 neon-glow">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-[#000510]/50 backdrop-blur-sm border border-blue-500/20 rounded-lg p-6 hover:border-blue-400/40 transition-all duration-300 cursor-pointer hover:translate-y-[-5px]"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="mb-4">{project.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.shortDescription}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm border border-blue-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section
          id="certifications"
          className="py-16 bg-[#000510] section-fade"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8 neon-glow">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-[#001233]/50 backdrop-blur-sm border border-blue-500/20 rounded-lg p-6 cursor-pointer hover:border-blue-400/40 transition-all duration-300 hover:translate-y-[-5px]"
                  onClick={() => setSelectedCertificate(cert)}
                >
                  <div className="flex items-center mb-4">
                    {cert.icon}
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
                      <p className="text-blue-400">{cert.platform}</p>
                    </div>
                  </div>
                  <p className="text-gray-300">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="py-16 bg-[#001233] section-fade"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8 neon-glow">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skillGroup, index) => (
                <div key={index} className="bg-[#000510]/50 backdrop-blur-sm border border-blue-500/20 rounded-lg p-6 hover:border-blue-400/40 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {skillGroup.category}
                  </h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                        <span className="text-gray-300">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-16 bg-[#000510] section-fade"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8 neon-glow">Contact Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#001233]/50 backdrop-blur-sm border border-blue-500/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Get In Touch</h3>
                <p className="text-gray-300 mb-6">Have a project idea or just want to chat? Feel free to reach out!</p>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 bg-[#000510]/70 border border-blue-500/20 rounded-lg text-gray-300 focus:outline-none focus:border-blue-400/60"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 bg-[#000510]/70 border border-blue-500/20 rounded-lg text-gray-300 focus:outline-none focus:border-blue-400/60"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 bg-[#000510]/70 border border-blue-500/20 rounded-lg text-gray-300 focus:outline-none focus:border-blue-400/60"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg text-blue-400 font-medium transition-all duration-300 hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              <div className="bg-[#001233]/50 backdrop-blur-sm border border-blue-500/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Connect With Me</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:contact@neevpatel.dev"
                    className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <Mail size={20} />
                    <span>contact@neevpatel.dev</span>
                  </a>
                  <a
                    href="https://github.com/neevpatel018"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <Github size={20} />
                    <span>github.com/neevpatel018</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/neev-patel-640918315/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <Linkedin size={20} />
                    <span>linkedin.com/in/neev-patel</span>
                  </a>
                  <a
                    href="https://www.instagram.com/neevpatel_018/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <Instagram size={20} />
                    <span>instagram.com/neevpatel_018</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-[#001233] border-t border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-xl font-bold text-white">Neev Patel</span>
              <p className="text-gray-400 text-sm">Tech Enthusiast & Computer Science Engineer</p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://github.com/neevpatel018"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/neev-patel-640918315/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/neevpatel_018/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          <div className="mt-4 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Neev Patel. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Certificate Details Modal */}
      {selectedCertificate && (
        <CertificateDetails
          certificate={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      )}
    </div>
  );
}

export default App;
