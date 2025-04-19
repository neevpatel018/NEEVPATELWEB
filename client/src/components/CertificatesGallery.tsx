import React from 'react';

interface Certificate {
  id: number;
  title: string;
  platform: string;
  description: string;
  imagePath: string;
  completionDate?: string;
  duration?: string;
  credentials?: string[];
}

// Helper function to get the correct image path with base URL
const getImagePath = (path: string) => {
  return `/NEEVPATELWEB${path}`;
};

const certificateData: Certificate[] = [
  {
    id: 1,
    title: 'AI for Managers by Microsoft and LinkedIn',
    platform: 'LinkedIn Learning & Microsoft',
    description: 'Apr 12, 2025 • 4 hours 24 minutes',
    imagePath: '/certificates/AI_for_Managers.png',
    completionDate: 'Apr 12, 2025',
    duration: '4 hours 24 minutes',
    credentials: [
      'Artificial Intelligence for Business',
      'Cross-team Collaboration',
      'AI Productivity'
    ]
  },
  {
    id: 2,
    title: 'Enhance Your Coaching Impact with Generative AI',
    platform: 'LinkedIn Learning',
    description: 'Apr 12, 2025 • 38 minutes',
    imagePath: '/certificates/Enhance_Coaching_Impact_1.png',
    completionDate: 'Apr 12, 2025',
    duration: '38 minutes',
    credentials: [
      'Artificial Intelligence for Business',
      'Coaching & Mentoring',
      'Generative AI Tools'
    ]
  },
  {
    id: 3,
    title: 'Amplify Your Critical Thinking with Generative AI',
    platform: 'LinkedIn Learning',
    description: 'Apr 12, 2025 • 1 hour',
    imagePath: '/certificates/Amplify_Critical_Thinking_1.png',
    completionDate: 'Apr 12, 2025',
    duration: '1 hour',
    credentials: [
      'Artificial Intelligence for Business',
      'Critical Thinking'
    ]
  },
  {
    id: 4,
    title: 'Building a Collaborative Team Culture with AI',
    platform: 'LinkedIn Learning',
    description: 'Apr 12, 2025 • 39 minutes',
    imagePath: '/certificates/Building_Collaborative_Team_1.png',
    completionDate: 'Apr 12, 2025',
    duration: '39 minutes',
    credentials: [
      'Artificial Intelligence for Business',
      'Cross-team Collaboration',
      'Team Culture'
    ]
  },
  {
    id: 5,
    title: "The Manager's Guide to Career Conversations in the Age of AI",
    platform: 'LinkedIn Learning',
    description: 'Apr 08, 2025 • 57 minutes',
    imagePath: '/certificates/Career_Conversations_AI_1.png',
    completionDate: 'Apr 08, 2025',
    duration: '57 minutes',
    credentials: [
      'Career Management',
      'Artificial Intelligence for Business',
      'People Management'
    ]
  },
  {
    id: 6,
    title: 'Become an AI-Powered People Manager',
    platform: 'LinkedIn Learning',
    description: 'Apr 08, 2025 • 45 minutes',
    imagePath: '/certificates/AI_Powered_People_Manager.png',
    completionDate: 'Apr 08, 2025',
    duration: '45 minutes',
    credentials: [
      'Artificial Intelligence for Business',
      'People Management'
    ]
  }
];

const CertificatesGallery: React.FC = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-white mb-12 text-center neon-glow">Professional Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificateData.map((cert, index) => (
          <div key={index} className="bg-[#001233]/50 backdrop-blur-sm border border-blue-500/20 rounded-lg overflow-hidden hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-[1.02]">
            <div className="relative aspect-[4/3] overflow-hidden bg-[#000510]/50">
              <img
                src={`/NEEVPATELWEB${cert.imagePath}`}
                alt={cert.title}
                className="w-full h-full object-contain p-2"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = '/NEEVPATELWEB/certificates/Microsoft_AI_Skills_Badge.png';
                }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
              <div className="text-gray-300 mb-4">
                <p className="mb-1">{cert.platform}</p>
                <p className="text-sm">{cert.description}</p>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Skills Covered</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.credentials?.map((skill, i) => (
                    <span
                      key={i}
                      className="inline-block px-3 py-1 text-sm bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificatesGallery; 