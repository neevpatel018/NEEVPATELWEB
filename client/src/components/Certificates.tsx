import { motion } from "framer-motion";

interface Certificate {
  title: string;
  image: string;
  issuer: string;
  date: string;
  description: string;
}

const certifications: Certificate[] = [
  {
    title: "Microsoft AI Skills Badge",
    image: "/NEEVPATELWEB/certificates/Microsoft-AI-Skills-Fest.png",
    issuer: "Microsoft",
    date: "April 2024",
    description: "Official Guinness World Record Attempt Participant - AI Skills Development"
  },
  {
    title: "AI for Managers",
    image: "/NEEVPATELWEB/certificates/AI-for-Managers.png",
    issuer: "LinkedIn Learning",
    date: "April 2024",
    description: "Advanced AI implementation strategies for business management"
  },
  {
    title: "AI Powered People Manager",
    image: "/NEEVPATELWEB/certificates/AI-Powered-People-Manager.png",
    issuer: "LinkedIn Learning",
    date: "April 2024",
    description: "AI-driven approaches to people management and team leadership"
  },
  {
    title: "AI Powered People Manager 2",
    image: "/NEEVPATELWEB/certificates/AI-Powered-People-Manager-2.png",
    issuer: "LinkedIn Learning",
    date: "April 2024",
    description: "Advanced techniques in AI-assisted team management"
  },
  {
    title: "Critical Thinking with AI",
    image: "/NEEVPATELWEB/certificates/Critical-Thinking-AI.png",
    issuer: "LinkedIn Learning",
    date: "April 2024",
    description: "Enhanced decision-making using AI tools and frameworks"
  },
  {
    title: "Critical Thinking with AI 2",
    image: "/NEEVPATELWEB/certificates/Critical-Thinking-AI-2.png",
    issuer: "LinkedIn Learning",
    date: "April 2024",
    description: "Advanced problem-solving with AI assistance"
  },
  {
    title: "Building Collaborative Teams",
    image: "/NEEVPATELWEB/certificates/Building-Collaborative-Teams.png",
    issuer: "LinkedIn Learning",
    date: "April 2024",
    description: "Creating effective team dynamics with AI integration"
  },
  {
    title: "Building Collaborative Teams 2",
    image: "/NEEVPATELWEB/certificates/Building-Collaborative-Teams-2.png",
    issuer: "LinkedIn Learning",
    date: "April 2024",
    description: "Advanced team collaboration strategies using AI tools"
  },
  {
    title: "Career Conversations in AI",
    image: "/NEEVPATELWEB/certificates/Career-Conversations-AI.png",
    issuer: "LinkedIn Learning",
    date: "April 2024",
    description: "AI-powered career development and mentoring"
  },
  {
    title: "Career Conversations in AI 2",
    image: "/NEEVPATELWEB/certificates/Career-Conversations-AI-2.png",
    issuer: "LinkedIn Learning",
    date: "April 2024",
    description: "Advanced career guidance using AI technologies"
  },
  {
    title: "Coaching Impact with AI",
    image: "/NEEVPATELWEB/certificates/Coaching-Impact-AI.png",
    issuer: "LinkedIn Learning",
    date: "April 2024",
    description: "AI-enhanced coaching methodologies"
  },
  {
    title: "Coaching Impact with AI 2",
    image: "/NEEVPATELWEB/certificates/Coaching-Impact-AI-2.png",
    issuer: "LinkedIn Learning",
    date: "April 2024",
    description: "Advanced coaching techniques with AI support"
  },
  {
    title: "Coaching Impact with AI 3",
    image: "/NEEVPATELWEB/certificates/Coaching-Impact-AI-3.png",
    issuer: "LinkedIn Learning",
    date: "April 2024",
    description: "Expert-level coaching strategies using AI tools"
  }
];

const Certificates = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white neon-glow">
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-[#001233]/50 backdrop-blur-sm border border-blue-500/20 rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:border-blue-400/40">
                <div className="relative pt-[75%] w-full">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="absolute top-0 left-0 w-full h-full object-contain bg-[#000510] p-2"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      console.error(`Failed to load image: ${target.src}`);
                      target.onerror = null;
                      target.src = "/NEEVPATELWEB/certificates/placeholder.png";
                      target.alt = `${cert.title} (Image not available)`;
                      target.style.opacity = "0.7";
                    }}
                  />
                </div>
                <div className="p-4 border-t border-blue-500/20">
                  <h3 className="text-lg font-semibold text-white mb-1">{cert.title}</h3>
                  <p className="text-blue-400 text-sm mb-2">{cert.issuer} • {cert.date}</p>
                  <p className="text-gray-300 text-sm">{cert.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;