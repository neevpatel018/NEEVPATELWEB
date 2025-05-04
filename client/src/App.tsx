import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
  Monitor,
  Layout,
  PenTool,
  Smartphone,
  Globe
} from 'lucide-react';
import ProjectDetails from './components/ProjectDetails';
import CertificateDetails from './components/CertificateDetails';
import Certificates from './components/Certificates';
import LandingPagesGallery from './components/LandingPagesGallery';
import Navigation from './components/Navigation';
import Shop from './pages/Shop';
import { CartProvider } from './context/CartContext';
import Certifications from './components/Certifications';

interface ServiceOffering {
  icon: React.ReactNode;
  text: string;
  description?: string;
  images?: string[];
  subSections?: {
    title: string;
    description: string;
    images: string[];
  }[];
  component?: React.ReactNode;
  hasViewButton?: boolean;
}

interface Service {
  title: string;
  icon: React.ReactNode;
  description: string;
  offerings: ServiceOffering[];
}

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
  const [selectedService, setSelectedService] = useState<null | {
    title: string;
    images?: string[];
    subSections?: {
      title: string;
      images: string[];
    }[];
    component?: React.ReactNode;
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
      images: ['/NEEVPATELWEB/arduino_radar.png']
    },
    {
      title: 'Canva Creative Designs',
      shortDescription: 'Designed social media posts and marketing material using Canva.',
      fullDescription: 'This project showcases a collection of social media creatives, banners, and posters designed using Canva for personal branding and freelance clients. Focused on aesthetic alignment, brand consistency, and impactful visual messaging. The collection includes festive designs, product advertisements, and social media profile graphics.',
      techStack: ['Canva', 'Social Media', 'Design'],
      icon: <Palette className="w-12 h-12 text-purple-500" />,
      images: [
        '/NEEVPATELWEB/projects/canva-designs/canva_advertisement.png',
        '/NEEVPATELWEB/projects/canva-designs/mahavir_jayanti.png',
        '/NEEVPATELWEB/projects/canva-designs/hanuman_jayanti.png',
        '/NEEVPATELWEB/projects/canva-designs/ipl.png',
        '/NEEVPATELWEB/projects/canva-designs/beast_mode_1.jpg',
        '/NEEVPATELWEB/projects/canva-designs/beast_mode_2.jpg',
        '/NEEVPATELWEB/projects/canva-designs/profile_picture.png'
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
      imagePath: '/certificates/AI_for_Managers.png',
      completionDate: 'Apr 12, 2025',
      duration: '4 hours 24 minutes'
    },
    {
      title: 'Amplify Your Critical Thinking with Generative AI',
      platform: 'LinkedIn Learning',
      description: 'Course focusing on Artificial Intelligence for Business and Critical Thinking applications.',
      icon: <Award className="w-8 h-8 text-blue-500" />,
      imagePath: '/certificates/Amplify_Critical_Thinking_1.png',
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
      imagePath: '/certificates/AI_Powered_People_Manager.png',
      completionDate: 'Apr 08, 2025',
      duration: '45 minutes'
    },
    {
      title: 'Building a Collaborative Team Culture with AI',
      platform: 'LinkedIn Learning',
      description: 'Course focusing on AI for Business, Cross-team Collaboration, and Team Culture enhancement.',
      icon: <Award className="w-8 h-8 text-blue-500" />,
      imagePath: '/certificates/Building_Collaborative_Team_1.png',
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
      imagePath: '/certificates/Enhance_Coaching_Impact_1.png',
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
      imagePath: '/certificates/Career_Conversations_AI_1.png',
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
    { 
      category: 'Programming', 
      items: [
        { name: 'Python', icon: '🐍' },
        { name: 'JavaScript', icon: '⚡' },
        { name: 'C++', icon: '🔧' },
        { name: 'Java', icon: '☕' }
      ] 
    },
    { category: 'Tools & Platforms', items: ['Git', 'Docker', 'AWS', 'Arduino'] },
    { category: 'Design', items: ['Figma', 'Canva', 'Adobe XD', 'Sketch'] },
    { category: 'Python & SQL Achievements', items: ['Data Analysis with Python', 'SQL Database Projects', 'Python Automation Scripts', 'Web Scraping with Python'] }
  ];

  const services: Service[] = [
    {
      title: 'Graphic Design',
      icon: <PenTool className="w-12 h-12 text-purple-500" />,
      description: 'Professional design solutions for your brand',
      offerings: [
        { 
          icon: <Palette className="w-6 h-6" />, 
          text: 'Social Media Posts',
          images: [
            '/NEEVPATELWEB/Services/Graphic Design/Social Media Posts/sm 1 (1).png',
            '/NEEVPATELWEB/Services/Graphic Design/Social Media Posts/sm 1 (2).png'
          ]
        },
        { 
          icon: <Layout className="w-6 h-6" />, 
          text: 'Mockups',
          images: [
            '/NEEVPATELWEB/Services/Graphic Design/Mockups/MOCK LAP.png',
            '/NEEVPATELWEB/Services/Graphic Design/Mockups/MOCK MOBILE.png',
            '/NEEVPATELWEB/Services/Graphic Design/Mockups/MOCK WEB.png',
            '/NEEVPATELWEB/Services/Graphic Design/Mockups/ENTRANCE MOCKUP 1.webp',
            '/NEEVPATELWEB/Services/Graphic Design/Mockups/ENTRANCE MOCKUP 2.webp',
            '/NEEVPATELWEB/Services/Graphic Design/Mockups/ENTRANCE MOCKUP 3.webp',
            '/NEEVPATELWEB/Services/Graphic Design/Mockups/OFFICE MOCKKUP.webp'
          ]
        },
        { 
          icon: <Globe className="w-6 h-6" />, 
          text: 'Banners & Infographics',
          images: [
            '/NEEVPATELWEB/Services/Graphic Design/Banners & Infographics/Untitled design (2).png',
            '/NEEVPATELWEB/Services/Graphic Design/Banners & Infographics/Pink and Black Pastel brutalist Jazz Music YouTube Banner.png',
            '/NEEVPATELWEB/Services/Graphic Design/Banners & Infographics/Green Dark Brown Halftone Paper Collage Sports Podcast YouTube Banner (1).png',
            '/NEEVPATELWEB/Services/Graphic Design/Banners & Infographics/Black Red and White Brutalist Swiss Photographic Birthday Party Music YouTube Banner.png'
          ]
        },
        { 
          icon: <Youtube className="w-6 h-6" />, 
          text: 'YouTube Thumbnails',
          images: [
            '/NEEVPATELWEB/Services/Graphic Design/YouTube Thumbnails/IPL 1.png',
            '/NEEVPATELWEB/Services/Graphic Design/YouTube Thumbnails/IPL 2.png',
            '/NEEVPATELWEB/Services/Graphic Design/YouTube Thumbnails/KING.png',
            '/NEEVPATELWEB/Services/Graphic Design/YouTube Thumbnails/CAN CANVA.png',
            '/NEEVPATELWEB/Services/Graphic Design/YouTube Thumbnails/CANVA DESIGN (1).png',
            '/NEEVPATELWEB/Services/Graphic Design/YouTube Thumbnails/RCB.jpeg',
            '/NEEVPATELWEB/Services/Graphic Design/YouTube Thumbnails/0.png',
            '/NEEVPATELWEB/Services/Graphic Design/YouTube Thumbnails/2.png'
          ]
        }
      ]
    },
    {
      title: 'Website Design',
      icon: <Monitor className="w-12 h-12 text-blue-500" />,
      description: 'Custom web solutions for your business',
      offerings: [
        { 
          icon: <Layout className="w-6 h-6" />, 
          text: 'Custom UI Design',
          images: [
            '/NEEVPATELWEB/Services/Website Design/Custom UI Design/ui1 (1).png',
            '/NEEVPATELWEB/Services/Website Design/Custom UI Design/ui1 (2).png',
            '/NEEVPATELWEB/Services/Website Design/Custom UI Design/ui1 (3).png',
            '/NEEVPATELWEB/Services/Website Design/Custom UI Design/ui1 (4).png',
            '/NEEVPATELWEB/Services/Website Design/Custom UI Design/ui1 (5).png',
            '/NEEVPATELWEB/Services/Website Design/Custom UI Design/ui1 (6).png',
            '/NEEVPATELWEB/Services/Website Design/Custom UI Design/ui1 (7).png',
            '/NEEVPATELWEB/Services/Website Design/Custom UI Design/ui1 (8).png'
          ]
        },
        { 
          icon: <Globe className="w-6 h-6" />, 
          text: 'Landing Pages',
          description: 'Professional landing pages for various industries',
          component: <LandingPagesGallery />,
          hasViewButton: true,
          images: []
        },
        { icon: <Monitor className="w-6 h-6" />, text: 'Portfolio Websites' },
        { icon: <Smartphone className="w-6 h-6" />, text: 'Responsive Layouts' }
      ]
    }
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would handle the form submission here
    alert('Message sent! This is a demo, so no actual message was sent.');
  };

  const handleServiceClick = (offering: ServiceOffering) => {
    if (offering.component) {
      setSelectedService({
        title: offering.text,
        component: offering.component
      });
    } else if (offering.images && offering.images.length > 0) {
      setSelectedService({
        title: offering.text,
        images: offering.images,
        subSections: offering.subSections
      });
    }
  };

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navigation />
          
          <Routes>
            <Route path="/" element={
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
                          {project.images && project.images[0] && (
                            <div className="relative w-full mb-4 aspect-video overflow-hidden rounded-lg">
                              <img
                                src={project.images[0]}
                                alt={project.title}
                                className="absolute inset-0 w-full h-full object-cover"
                                loading="lazy"
                                onError={(e) => {
                                  console.error(`Failed to load image: ${e.currentTarget.src}`);
                                  e.currentTarget.src = '/NEEVPATELWEB/placeholder.png';
                                }}
                              />
                            </div>
                          )}
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

                {/* Certificates Section */}
                <section id="certificates" className="relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-purple-900/20 pointer-events-none"></div>
                  <Certificates />
                </section>

                {/* Skills Section */}
                <section
                  id="skills"
                  className="py-16 bg-[#001233] section-fade"
                >
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-white mb-8 neon-glow">Skills</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {skills.map((skillGroup, index) => (
                        <div key={index} className="bg-[#000510]/50 backdrop-blur-sm border border-blue-500/20 rounded-lg p-6 hover:border-blue-400/40 transition-all duration-300">
                          <h3 className="text-xl font-semibold text-white mb-4">
                            {skillGroup.category}
                          </h3>
                          <ul className="space-y-2">
                            {skillGroup.items.map((skill, skillIndex) => (
                              <li key={skillIndex} className="flex items-center space-x-2">
                                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                {typeof skill === 'string' ? (
                                  <span className="text-gray-300">{skill}</span>
                                ) : (
                                  <span className="text-gray-300">
                                    <span className="mr-2">{skill.icon}</span>
                                    {skill.name}
                                  </span>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Services Section */}
                <section id="services" className="py-20 bg-[#001233] section-fade">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center neon-glow">Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {services.map((service, index) => (
                        <div 
                          key={index}
                          className="bg-[#000510]/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8 hover:border-blue-400/40 transition-all duration-300 hover:translate-y-[-5px]"
                        >
                          <div className="flex items-center mb-6">
                            <div className="bg-blue-500/10 p-3 rounded-lg mr-4">
                              {service.icon}
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold text-white mb-1">{service.title}</h3>
                              <p className="text-gray-400">{service.description}</p>
                            </div>
                          </div>
                          <div className="space-y-4">
                            {service.offerings.map((offering, idx) => (
                              <div 
                                key={idx} 
                                className="flex items-center justify-between px-6 py-4 bg-[#000510]/80 rounded-xl hover:bg-[#001233] transition-all duration-300 group border border-blue-500/10 hover:border-blue-500/30"
                              >
                                <div className="flex items-center space-x-4">
                                  <div className="text-blue-400 transition-transform duration-300 group-hover:scale-110">
                                    {offering.icon}
                                  </div>
                                  <span className="font-medium text-gray-200 group-hover:text-white transition-colors duration-300">
                                    {offering.text}
                                  </span>
                                </div>
                                {(offering.hasViewButton || (offering.images?.length ?? 0) > 0) && (
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleServiceClick(offering);
                                    }}
                                    className="px-5 py-2 text-sm font-semibold text-blue-400 bg-blue-500/10 hover:bg-blue-500 hover:text-white rounded-lg transition-all duration-300 flex items-center space-x-2 group-hover:scale-105"
                                    aria-label={`View ${offering.text} examples`}
                                  >
                                    <span>View</span>
                                  </button>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Service Preview Modal */}
                {selectedService && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
                    <div className="relative w-full max-w-5xl p-8 mx-4 bg-[#000510] border border-blue-500/20 rounded-xl">
                      <button
                        onClick={() => setSelectedService(null)}
                        className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200"
                        aria-label="Close preview"
                      >
                        <X className="w-6 h-6" />
                      </button>
                      <h3 className="mb-6 text-2xl font-semibold text-white">
                        {selectedService.title}
                        <span className="ml-2 text-base font-normal text-gray-400">Examples</span>
                      </h3>
                      {selectedService.component ? (
                        selectedService.component
                      ) : selectedService.subSections ? (
                        <div className="space-y-8">
                          {selectedService.subSections.map((section, sectionIndex) => (
                            <div key={sectionIndex} className="space-y-4">
                              <h4 className="text-xl font-semibold text-white">{section.title}</h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {section.images.map((image, idx) => (
                                  <div 
                                    key={idx} 
                                    className="group relative aspect-video rounded-lg overflow-hidden bg-[#001233] hover:ring-2 hover:ring-blue-500/40 transition-all"
                                  >
                                    <img
                                      src={image}
                                      alt={`${section.title} example ${idx + 1}`}
                                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                      loading={idx < 4 ? "eager" : "lazy"}
                                    />
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                      <button 
                                        onClick={() => window.open(image, '_blank')}
                                        className="px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg text-blue-400 font-medium transition-all duration-300 hover:scale-105"
                                      >
                                        View Full Size
                                      </button>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {selectedService.images?.map((image, idx) => (
                            <div 
                              key={idx} 
                              className="group relative aspect-video rounded-lg overflow-hidden bg-[#001233] hover:ring-2 hover:ring-blue-500/40 transition-all"
                            >
                              <img
                                src={image}
                                alt={`${selectedService.title} example ${idx + 1}`}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                loading={idx < 4 ? "eager" : "lazy"}
                              />
                              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button 
                                  onClick={() => window.open(image, '_blank')}
                                  className="px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg text-blue-400 font-medium transition-all duration-300 hover:scale-105"
                                >
                                  View Full Size
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}

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
            } />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
