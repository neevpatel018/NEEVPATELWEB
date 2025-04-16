import React from 'react';
import { X } from 'lucide-react';

interface CertificateDetailsProps {
  certificate: {
    title: string;
    platform: string;
    description: string;
    pdfContent?: string;
  };
  onClose: () => void;
}

export function CertificateDetails({ certificate, onClose }: CertificateDetailsProps) {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
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
          <p className="text-blue-400 mb-4">{certificate.platform}</p>
          <p className="text-gray-300 mb-6">{certificate.description}</p>
          
          {certificate.pdfContent && (
            <div className="mt-4">
              <iframe
                src={`data:application/pdf;base64,${btoa(certificate.pdfContent)}`}
                className="w-full h-[600px] border border-blue-500/20 rounded"
                title="Certificate PDF"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}