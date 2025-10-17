"use client";

import Image from 'next/image';
import { useState } from 'react';

export default function BasinPage() {
  const [selectedImage, setSelectedImage] = useState<null | { image: string; caption: string }>(null);
  const pressImages = [
    {
      image: "https://villaqrmenu.b-cdn.net/karasubasin/IMG_3299.PNG",
      caption: "TLC Haber'de şirketimizle ilgili haber"
    },
    
    {
      image: "https://villaqrmenu.b-cdn.net/karasubasin/IMG_3303.PNG",
      caption: "Basın Haberleri'nde çıkan haberimiz"
    }
    
  ];

  return (
    <main className="min-h-screen pb-16">
      {/* Hero Section - Modern */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-blue-700 to-purple-800">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10 pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-6 shadow-lg">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <span className="font-medium">Medya</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Basın Galerisi
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              Medyada yer alan haberlerimiz, televizyon röportajlarımız ve basın görüntülerimiz
            </p>
          </div>
        </div>
      </section>

      {/* Press Gallery Section - Modern */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 text-blue-800 mb-6 shadow-lg">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="font-bold text-sm">Basın Galerisi</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 inline-block text-transparent bg-clip-text mb-4">
                Medyada Karasu Reklam
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                Televizyon kanalları ve gazetelerde yer alan haberlerimizden kareler. Sektördeki başarılarımız ve projelerimizin medyada yankı uyandırdığı anlar.
              </p>
            </div>

            {/* Masonry Grid */}
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8">
              {pressImages.map((item, index) => (
                <div 
                  key={index} 
                  className="break-inside-avoid mb-8 group cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="relative overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.caption}
                        width={400}
                        height={300}
                        className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Overlay content */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Media Contact CTA - Modern */}
            <div className="mt-20">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl p-10 max-w-3xl mx-auto">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl mb-6 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 inline-block text-transparent bg-clip-text mb-4">
                      Medya İletişim
                    </h3>
                    <p className="text-gray-600 text-lg">
                      Basın mensupları ve medya temsilcileri için özel iletişim hattımız
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a 
                      href="mailto:info@karasureklamajansi.com.tr" 
                      className="group/btn px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 inline-flex items-center shadow-xl hover:shadow-2xl hover:scale-105"
                    >
                      <svg className="w-5 h-5 mr-3 group-hover/btn:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      E-posta Gönder
                    </a>
                    <a 
                      href="tel:+905314732377" 
                      className="group/btn px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-2xl hover:bg-blue-600 hover:text-white transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl hover:scale-105"
                    >
                      <svg className="w-5 h-5 mr-3 group-hover/btn:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      +90 (531) 473 23 77
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Image Container */}
            <div 
              className="relative bg-white rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.caption}
                  width={1200}
                  height={800}
                  className="w-full h-auto max-h-[80vh] object-contain"
                  quality={95}
                />
              </div>
              
              {/* Caption */}
              <div className="p-6 bg-white">
                <p className="text-gray-800 text-base leading-relaxed">
                  {selectedImage.caption}
                </p>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-16">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = pressImages.findIndex(img => img.image === selectedImage.image);
                  const prevIndex = currentIndex > 0 ? currentIndex - 1 : pressImages.length - 1;
                  setSelectedImage(pressImages[prevIndex]);
                }}
                className="text-white hover:text-gray-300 transition-colors bg-black/20 hover:bg-black/40 rounded-full p-3 backdrop-blur-sm"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 -right-16">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = pressImages.findIndex(img => img.image === selectedImage.image);
                  const nextIndex = currentIndex < pressImages.length - 1 ? currentIndex + 1 : 0;
                  setSelectedImage(pressImages[nextIndex]);
                }}
                className="text-white hover:text-gray-300 transition-colors bg-black/20 hover:bg-black/40 rounded-full p-3 backdrop-blur-sm"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}