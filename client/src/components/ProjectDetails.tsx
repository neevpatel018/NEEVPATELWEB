import React from 'react';
import { X } from 'lucide-react';

interface ProjectDetailsProps {
  project: {
    title: string;
    fullDescription: string;
    techStack: string[];
    images?: string[];
    links?: { title: string; url: string }[];
  };
  onClose: () => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, onClose }) => {
  // Close modal when clicking outside of it
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-[#000510] border border-blue-500/20 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-[#000510] border-b border-blue-500/20 p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">{project.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          <p className="text-gray-300 mb-6">{project.fullDescription}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm border border-blue-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
          
          {project.images && project.images.length > 0 && (
            <div className="space-y-4 mb-6">
              {project.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="rounded-lg w-full"
                />
              ))}
            </div>
          )}
          
          {project.links && project.links.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white mb-2">Links</h3>
              {project.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-400 hover:text-blue-300 transition-colors"
                >
                  {link.title}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
