import React from 'react';
import { X } from 'lucide-react';

interface CertificateDetailsProps {
  certificate: {
    title: string;
    platform: string;
    description: string;
    pdfContent?: string;
    pdfPath?: string;
    imagePath?: string;
    completionDate?: string;
    duration?: string;
    credentials?: { type: string; value: string }[];
  };
  onClose: () => void;
}

const CertificateDetails: React.FC<CertificateDetailsProps> = ({ certificate, onClose }) => {
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
          <h2 className="text-2xl font-bold text-white">{certificate.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <p className="text-blue-400">{certificate.platform}</p>
            <div className="text-gray-400 text-sm mt-2 md:mt-0">
              {certificate.completionDate && (
                <span>{certificate.completionDate}</span>
              )}
              {certificate.duration && (
                <span> • {certificate.duration}</span>
              )}
            </div>
          </div>
          
          <p className="text-gray-300 mb-6">{certificate.description}</p>
          
          {certificate.credentials && certificate.credentials.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">Credentials</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certificate.credentials.map((credential, index) => (
                  <div 
                    key={index} 
                    className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3"
                  >
                    <p className="text-blue-400 text-sm">{credential.type}</p>
                    <p className="text-white font-semibold">{credential.value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {certificate.imagePath && (
            <div className="mt-4 flex justify-center">
              <div className="border border-blue-500/20 rounded-lg p-4 bg-gray-900/50 max-w-sm">
                <img 
                  src={certificate.imagePath} 
                  alt={`${certificate.title} Certificate`}
                  className="rounded-lg"
                />
              </div>
            </div>
          )}
          
          {certificate.pdfContent && (
            <div className="mt-4">
              <div className="border border-blue-500/20 rounded p-4 bg-gray-900/50">
                <p className="text-gray-300 text-sm italic mb-2">
                  Certificate PDF preview (sample content)
                </p>
                <div className="h-40 overflow-y-auto font-mono text-xs text-gray-500 bg-gray-900 p-4 rounded">
                  {certificate.pdfContent}
                </div>
              </div>
            </div>
          )}
          
          {/* Keep the View Complete Certificate button for image certificates too */}
          {(certificate.imagePath || certificate.pdfPath) && (
            <div className="mt-6 text-center">
              {certificate.imagePath && (
                <a 
                  href={certificate.imagePath}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg text-blue-400 transition-all duration-300 hover:scale-105"
                >
                  View Complete Certificate
                </a>
              )}
              {!certificate.imagePath && certificate.pdfPath && (
                <a 
                  href={certificate.pdfPath}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg text-blue-400 transition-all duration-300 hover:scale-105"
                >
                  View Complete Certificate
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificateDetails;
