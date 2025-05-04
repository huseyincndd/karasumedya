"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function SosyalMedya() {
  const benefits = [
    {
      title: "Artan Marka Bilinirliği",
      description: "Etkili sosyal medya stratejileri ile markanızın bilinirliğini artırıyoruz, daha geniş kitlelere ulaşmanızı sağlıyoruz.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: "Artan Etkileşim",
      description: "Özgün ve etkileşim odaklı içerikler ile takipçilerinizin dikkatini çekiyor, markanızla bağ kurmalarını sağlıyoruz.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      title: "Hedef Kitle Genişletme",
      description: "Doğru hedefleme ve içerik stratejileri ile mevcut takipçilerinizi korurken, yeni hedef kitlelere ulaşmanızı sağlıyoruz.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Veri Odaklı Stratejiler",
      description: "Performans analizleri ile içerik ve kampanyalarınızı sürekli olarak iyileştiriyor, en yüksek geri dönüşü almanızı sağlıyoruz.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  const platforms = [
    {
      name: "Instagram",
      icon: "/images/instagram.svg",
      color: "bg-pink-500"
    },
    {
      name: "Facebook",
      icon: "/images/facebook.svg",
      color: "bg-blue-600"
    },
    {
      name: "Twitter",
      icon: "/images/twitter.svg",
      color: "bg-blue-400"
    },
    {
      name: "LinkedIn",
      icon: "/images/linkedin.svg",
      color: "bg-blue-700"
    },
    {
      name: "TikTok",
      icon: "/images/tiktok.svg",
      color: "bg-black"
    },
    {
      name: "YouTube",
      icon: "/images/youtube.svg",
      color: "bg-red-600"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Hesap Analizi ve Strateji Geliştirme",
      description: "Mevcut sosyal medya hesaplarınızı ve rakiplerinizi detaylı olarak analiz ederek, markanıza özel stratejiler geliştiriyoruz."
    },
    {
      number: "02",
      title: "İçerik Planı Oluşturma",
      description: "Hedef kitlenizin ilgi alanlarına ve platformların özelliklerine uygun içerik planları hazırlıyoruz."
    },
    {
      number: "03",
      title: "İçerik Üretimi ve Paylaşımı",
      description: "Profesyonel ve özgün içerikler üreterek, planlı bir şekilde paylaşımları gerçekleştiriyoruz."
    },
    {
      number: "04",
      title: "Topluluk Yönetimi",
      description: "Takipçilerinizle aktif iletişim kurarak, yorumları ve mesajları zamanında yanıtlıyor, topluluk aidiyetini güçlendiriyoruz."
    },
    {
      number: "05",
      title: "Reklam Yönetimi",
      description: "Hedef kitlenize ulaşmak için etkili reklam kampanyaları oluşturuyor ve yönetiyoruz."
    },
    {
      number: "06",
      title: "Performans Analizi ve Raporlama",
      description: "Düzenli analizler ve raporlarla, stratejimizi sürekli iyileştiriyor ve sonuçları sizinle paylaşıyoruz."
    }
  ];

  return (
    <main className="min-h-screen pb-16">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-800/70 to-indigo-900/80"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 pt-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Sosyal Medya Yönetimi
            </h1>
            <p className="text-base md:text-lg text-blue-100 mb-6">
              Markanızın sosyal medya platformlarında etkin bir şekilde temsil edilmesini sağlayarak, 
              hedef kitlenizle güçlü bağlar kuruyoruz.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/iletisim" 
                className="px-5 py-2.5 bg-white text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-300 inline-flex items-center shadow-lg"
              >
                <span>Ücretsiz Danışmanlık Alın</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-blue-50 rounded-lg p-2 inline-block mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Sosyal Medyada Güçlü Bir Varlık Oluşturun
                </h2>
                <p className="text-gray-600 mb-6">
                  Günümüz dijital dünyasında, sosyal medya pazarlaması markalar için artık bir lüks değil, bir zorunluluktur. Karasu Medya olarak, markanızın sosyal medyada başarılı olması için gereken tüm hizmetleri sunuyoruz.
                </p>
                <p className="text-gray-600 mb-6">
                  Stratejik sosyal medya yönetimi ile markanızın bilinirliğini artırıyor, hedef kitlenizle güçlü bağlar kuruyor ve satışlarınızı artırıyoruz. Her marka için özel olarak tasarlanmış sosyal medya stratejileri geliştiriyor, içerik üretiyor ve performans analizi yapıyoruz.
                </p>
                <div className="flex items-center gap-4 text-gray-700">
                  <span className="flex items-center gap-2 text-sm">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Profesyonel Strateji</span>
                  </span>
                  <span className="flex items-center gap-2 text-sm">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Özgün İçerik</span>
                  </span>
                  <span className="flex items-center gap-2 text-sm">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Veri Analizi</span>
                  </span>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-100 rounded-2xl transform rotate-2"></div>
                <div className="absolute -inset-4 bg-blue-200 rounded-2xl transform -rotate-2 opacity-70"></div>
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                    alt="Sosyal Medya Yönetimi" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Sosyal Medya Yönetiminin Avantajları
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Profesyonel sosyal medya yönetimi ile markanızı rakiplerinizden farklılaştırıyor, 
                dijital varlığınızı güçlendiriyoruz.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Sosyal Medya Yönetim Sürecimiz
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Sistematik ve veri odaklı yaklaşımımızla sosyal medya varlığınızı yönetiyoruz.
              </p>
            </div>
            
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-10">
                  <div className="md:w-32 flex-shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:block h-12 border-l-2 border-blue-200 ml-10 mt-4"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Yönettiğimiz Platformlar
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Her sosyal medya platformunun kendine özgü dinamiklerini anlıyor, 
                buna göre stratejiler geliştiriyoruz.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {platforms.map((platform, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-shadow duration-300 text-center">
                  <div className={`w-12 h-12 ${platform.color} rounded-full flex items-center justify-center text-white mb-4`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{platform.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Sosyal Medya Yönetimi İçin Hemen Teklif Alın
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Markanızın sosyal medya potansiyelini keşfetmek için uzman ekibimizle görüşün.
            </p>
            <Link 
              href="/iletisim" 
              className="px-8 py-4 bg-white text-blue-700 font-medium rounded-xl hover:bg-blue-50 transition-colors duration-300 inline-flex items-center shadow-lg"
            >
              <span>Ücretsiz Danışmanlık Alın</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 