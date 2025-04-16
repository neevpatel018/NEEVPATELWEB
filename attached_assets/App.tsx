import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X, Terminal, Monitor, Database, Cpu, Instagram, Award, Youtube, Palette } from 'lucide-react';
import { ProjectDetails } from './ProjectDetails';
import { CertificateDetails } from './CertificateDetails';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<null | {
    title: string;
    fullDescription: string;
    images?: string[];
    links?: { title: string; url: string }[];
  }>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<null | {
    title: string;
    platform: string;
    description: string;
    pdfContent?: string;
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
      icon: <Monitor className="w-12 h-12 text-blue-500" />
    },
    {
      title: 'Canva Creative Designs',
      shortDescription: 'Designed social media posts and marketing material using Canva.',
      fullDescription: 'This project showcases a collection of social media creatives, banners, and posters designed using Canva for personal branding and freelance clients. Focused on aesthetic alignment, brand consistency, and impactful visual messaging.',
      techStack: ['Canva', 'Social Media', 'Design'],
      icon: <Palette className="w-12 h-12 text-purple-500" />
    },
    {
      title: 'Educational YouTube Channel',
      shortDescription: 'Created and edited educational videos for YouTube.',
      fullDescription: 'I launched a YouTube channel focused on simplifying technical concepts for beginners. It includes video editing, thumbnail design, scripting, and community engagement.',
      techStack: ['Video Editing', 'Content Creation', 'YouTube'],
      icon: <Youtube className="w-12 h-12 text-red-500" />
    }
  ];

  const certifications = [
    {
      title: 'Azure Fundamentals',
      platform: 'Microsoft Learn',
      description: 'Learned the fundamentals of cloud computing and Azure services.',
      icon: <Award className="w-8 h-8 text-blue-500" />
    },
    {
      title: 'LinkedIn Learning',
      platform: 'LinkedIn Learning',
      description: 'Covered Python basics, data structures, and data visualization using libraries like pandas and matplotlib.',
      icon: <Award className="w-8 h-8 text-blue-500" />,
      pdfContent: `%PDF-1.4
%����
1 0 obj
<<
/Type /Catalog
/Version /1.7
/Pages 2 0 R
>>
endobj...`
    }
  ];

  const skills = [
    { category: 'Programming', items: ['Python', 'JavaScript', 'C++', 'Java'] },
    { category: 'Web Technologies', items: ['React', 'Node.js', 'HTML/CSS', 'TypeScript'] },
    { category: 'Tools & Platforms', items: ['Git', 'Docker', 'AWS', 'Arduino'] },
    { category: 'Design', items: ['Figma', 'Canva', 'Adobe XD', 'Sketch'] }
  ];

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
                  className="bg-[#000510]/50 backdrop-blur-sm border border-blue-500/20 rounded-lg p-6 hover:border-blue-400/40 transition-all duration-300 cursor-pointer"
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
                  className="bg-[#001233]/50 backdrop-blur-sm border border-blue-500/20 rounded-lg p-6 cursor-pointer hover:border-blue-400/40 transition-all duration-300"
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
                <div key={index} className="bg-[#000510]/50 backdrop-blur-sm border border-blue-500/20 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm border border-blue-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
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
            <div className="bg-[#001233]/50 backdrop-blur-sm border border-blue-500/20 rounded-lg p-6">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full bg-[#001233] border-blue-500/20 rounded-md focus:border-blue-400 focus:ring focus:ring-blue-400/20 text-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full bg-[#001233] border-blue-500/20 rounded-md focus:border-blue-400 focus:ring focus:ring-blue-400/20 text-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full bg-[#001233] border-blue-500/20 rounded-md focus:border-blue-400 focus:ring focus:ring-blue-400/20 text-white"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500/20 border border-blue-500/20 text-blue-400 py-2 px-4 rounded-md hover:bg-blue-500/30 hover:border-blue-400/40 transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
              <div className="mt-8 flex justify-center space-x-6">
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
                <a
                  href="mailto:contact@example.com"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

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