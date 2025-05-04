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
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#000510]/95 border border-blue-500/20 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-[#000510]/95 border-b border-blue-500/20 p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">{project.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Close project details"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          {project.images && project.images.length > 0 && (
            <div className="mb-6 space-y-4">
              {project.images.map((image, index) => (
                <div key={index} className="relative w-full aspect-video rounded-lg overflow-hidden">
                  <img
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-contain bg-[#000510]"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>
              ))}
            </div>
          )}
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 whitespace-pre-line">{project.fullDescription}</p>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-white mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm border border-blue-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          {project.links && project.links.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-white mb-3">Links</h3>
              <div className="flex flex-wrap gap-4">
                {project.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg transition-colors"
                  >
                    {link.title}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
