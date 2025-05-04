import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface LandingPageCategory {
  name: string;
  path: string;
  images: string[];
}

const LandingPagesGallery: React.FC = () => {
  const [categories, setCategories] = useState<LandingPageCategory[]>([]);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // In a real application, this would be an API call
        // For now, we'll use the existing categories from App.tsx
        const mockCategories: LandingPageCategory[] = [
          {
            name: 'GYM LANDING PAGE',
            path: '/NEEVPATELWEB/Services/Website Design/Landing Pages/GYM LANDING PAGE/',
            images: [
              '1_TRAIN-HARDER-LIVE-STRONGER.png',
              '2_UNLEASH-YOUR-INNER-BEAST.png',
              '3_FUEL-YOUR-AMBITION.png',
              '4_CUSTOMIZED-PROGRAMS-ELITE-RESULTS.png',
              '5_THE-STEEL-GRIT-DIFFERENCE.png',
              '6_ARE-YOU-READY-TO-LEVEL-UP.png',
              '7_TESTIMONIALS-FROM-ZERO-TO-HERO.png',
              '8_START-YOUR-TRANSFORMATION-TODAY.png'
            ]
          },
          {
            name: 'REAL ESTATE LANDING PAGE',
            path: '/NEEVPATELWEB/Services/Website Design/Landing Pages/REAL ESTATE LANDING PAGE/',
            images: [
              '1_FiReal-Estate-Agent-Finding-Spaces-Youll-Love-To-Live-In.png',
              '2_Discover-Your-Dream-Home.png',
              '3_Unparalleled-Expertise.png',
              '4_Client-Testimonials.png',
              '5_Featured-Luxury-Properties.png',
              '6_Virtual-Tours-Available.png',
              '7_Our-Commitment-to-Excellence.png',
              '8_Contact-Us-Today.png'
            ]
          },
          {
            name: 'DOCTOR LANDING PAGE',
            path: '/NEEVPATELWEB/Services/Website Design/Landing Pages/DOCTOR LANDING PAGE/',
            images: [
              '1_Doctor-Introduction-and-Expertise.png',
              '2_About-Our-Medical-Practice.png',
              '3_Our-Specializations-and-Services.png',
              '4_Book-an-Appointment.png',
              '5_Patient-Testimonials.png',
              '6_Insurance-and-Payment-Options.png',
              '7_Contact-Us.png',
              '8_Our-Commitment-to-You.png'
            ]
          },
          {
            name: 'LAWYER LANDING PAGE',
            path: '/NEEVPATELWEB/Services/Website Design/Landing Pages/LAWYER LANDING PAGE/',
            images: [
              '1_High-Profile-Lawyer-Landing-Page-Design-Presentation.png',
              '2_Hero-Section-Visual-Hook.png',
              '3_Hero-Section-Headline-and-Tagline.png',
              '4_Authority-and-Expertise.png',
              '5_Trust-and-Confidentiality.png',
              '6_Clear-Call-to-Action.png',
              '7_Page-Layout-and-Design-Elements.png',
              '8_Summary-and-Next-Steps.png'
            ]
          }
        ];
        setCategories(mockCategories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const toggleCategory = (categoryName: string) => {
    setExpandedCategory(expandedCategory === categoryName ? null : categoryName);
  };

  const openLightbox = (categoryIndex: number, imageIndex: number) => {
    setLightboxIndex(categoryIndex * 8 + imageIndex);
    setLightboxOpen(true);
  };

  const getLightboxImages = () => {
    return categories.flatMap(category => 
      category.images.map(image => ({
        src: category.path + image,
        alt: `${category.name} - ${image}`
      }))
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {categories.map((category, categoryIndex) => (
        <div
          key={category.name}
          className="bg-[#000510]/50 backdrop-blur-sm border border-blue-500/20 rounded-lg overflow-hidden"
        >
          <button
            onClick={() => toggleCategory(category.name)}
            className="w-full flex justify-between items-center p-4 hover:bg-[#001233]/50 transition-colors duration-200"
          >
            <span className="text-lg font-semibold text-white">{category.name}</span>
            {expandedCategory === category.name ? (
              <ChevronUp className="w-5 h-5 text-blue-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-blue-400" />
            )}
          </button>

          {expandedCategory === category.name && (
            <div className="p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {category.images.map((image, imageIndex) => (
                  <div
                    key={image}
                    className="group relative aspect-video rounded-lg overflow-hidden bg-[#001233] hover:ring-2 hover:ring-blue-500/40 transition-all duration-300"
                  >
                    <img
                      src={category.path + image}
                      alt={`${category.name} - ${image}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      onClick={() => openLightbox(categoryIndex, imageIndex)}
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button
                        onClick={() => openLightbox(categoryIndex, imageIndex)}
                        className="px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg text-blue-400 font-medium transition-all duration-300 hover:scale-105"
                      >
                        View Full Size
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={getLightboxImages()}
        carousel={{
          finite: false
        }}
      />
    </div>
  );
};

export default LandingPagesGallery; 