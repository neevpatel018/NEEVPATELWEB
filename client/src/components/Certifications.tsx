import React from 'react';

const Certifications: React.FC = () => {
  const certificates = [
    { name: 'Microsoft AI Skills Fest', image: '/certificates/Microsoft-AI-Skills-Fest.png' },
    { name: 'AI for Managers', image: '/certificates/AI-for-Managers.png' },
    { name: 'AI Powered People Manager', image: '/certificates/AI-Powered-People-Manager.png' },
    { name: 'Career Conversations AI', image: '/certificates/Career-Conversations-AI.png' },
    { name: 'Building Collaborative Teams', image: '/certificates/Building-Collaborative-Teams.png' },
    { name: 'Critical Thinking AI', image: '/certificates/Critical-Thinking-AI.png' },
    { name: 'Coaching Impact AI', image: '/certificates/Coaching-Impact-AI.png' },
    { name: 'Describe Cloud Computing', image: '/certificates/Describe-cloud-computing.png' },
    { name: 'Introduction to Information Security and Compliance', image: '/certificates/Introduction-to-information-security-and-compliance.png' },
    { name: 'Create and Manage Sensitive Information Type', image: '/certificates/Create-and-manage-sensitive-information-type.png' },
    { name: 'Plan and Prepare to Develop AI Solutions on Azure', image: '/certificates/Plan-and-prepare-to-develop-AI-solutions-on-Azure.png' },
    { name: 'Enhance Public Sector Services with Generative AI', image: '/certificates/Enhance-public-sector-services-with-generative-AI.png' }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">My Certifications</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={cert.image}
              alt={cert.name}
              className="w-full h-64 object-contain p-4"
              onError={(e) => {
                console.error(`Failed to load image: ${e.currentTarget.src}`);
                e.currentTarget.src = '/placeholder.png';
              }}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{cert.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications; 