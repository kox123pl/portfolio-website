import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const location = useLocation();
  const projectRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo && projectRefs.current[state.scrollTo]) {
      projectRefs.current[state.scrollTo]?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  const projects = [
    {
      category: 'Kuchnie',
      images: [
        'https://i.imgur.com/c8K1TPc.jpeg',
        'https://i.imgur.com/v9JA1u1.png',
        'https://i.imgur.com/OPyFKPr.jpeg',
        'https://i.imgur.com/nqCEnLL.png',
        'https://i.imgur.com/lAv9iuz.png',
        'https://i.imgur.com/QIc2ZBU.png',
        'https://i.imgur.com/BF3EQeM.png',
        'https://i.imgur.com/ZakKzYr.jpeg',
        'https://i.imgur.com/9UziX3U.jpeg',
        'https://i.imgur.com/DAyAMge.png',
        'https://i.imgur.com/8VRGWHw.png',
        'https://i.imgur.com/87R8flU.png',
        'https://i.imgur.com/oQUwId8.png',
        'https://i.imgur.com/y40HTe8.png',
        'https://i.imgur.com/VMOjndP.png',
        'https://i.imgur.com/sz95m0z.png'
      ]
    },
    {
      category: 'Szafy',
      images: [
        'https://i.imgur.com/l6L4Qf1.png',
        'https://i.imgur.com/inHOQgX.png',
        'https://i.imgur.com/ZHnEehI.jpeg',
        'https://i.imgur.com/ALxlg0Z.png',
        'https://i.imgur.com/ga6BvBV.png',
        'https://i.imgur.com/is42Kvb.jpeg',
        'https://i.imgur.com/lHojAih.jpeg',
        'https://i.imgur.com/Yg5l2Ak.jpeg',
        'https://i.imgur.com/TskA5nn.png',
        'https://i.imgur.com/nXMK7In.png',
        'https://i.imgur.com/7vgkspz.png',
        'https://i.imgur.com/yYRRxXL.png',
        'https://i.imgur.com/ASSsYye.png',
        'https://i.imgur.com/So9UoZg.png'
      ]
    },
    {
      category: 'Łazienki',
      images: [
        'https://i.imgur.com/M098Lu6.jpeg',
        'https://i.imgur.com/krPcfel.jpeg',
        'https://i.imgur.com/SC04bRg.jpeg'
      ]
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Nasze realizacje
          </h1>
          <p className="text-xl text-gray-600">
            Zobacz przykłady naszych projektów i realizacji
          </p>
        </div>

        {projects.map((project, index) => (
          <div 
            key={index} 
            className="mb-16"
            ref={el => projectRefs.current[project.category] = el}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              {project.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.images.map((image, imageIndex) => (
                <div
                  key={imageIndex}
                  className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image}
                    alt={`${project.category} ${imageIndex + 1}`}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      🔍 Powiększ
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh] flex items-center justify-center">
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img
              src={selectedImage}
              alt="Powiększone zdjęcie"
              className="max-w-full max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}