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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: "Artan Etkileşim",
      description: "Özgün ve etkileşim odaklı içerikler ile takipçilerinizin dikkatini çekiyor, markanızla bağ kurmalarını sağlıyoruz.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      title: "Hedef Kitle Genişletme",
      description: "Doğru hedefleme ve içerik stratejileri ile mevcut takipçilerinizi korurken, yeni hedef kitlelere ulaşmanızı sağlıyoruz.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Veri Odaklı Stratejiler",
      description: "Performans analizleri ile içerik ve kampanyalarınızı sürekli olarak iyileştiriyor, en yüksek geri dönüşü almanızı sağlıyoruz.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
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
      {/* Hero Section - Modern */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10 pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-6 shadow-lg">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
              <span className="font-medium">Sosyal Medya Çözümleri</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Sosyal Medya Yönetimi
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              Markanızın sosyal medya platformlarında etkin bir şekilde temsil edilmesini sağlayarak, 
              hedef kitlenizle güçlü bağlar kuruyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section - Modern Cards */}
      <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 mb-6">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                  <span className="font-semibold text-sm">Profesyonel Yönetim</span>
                </div>
                
                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 inline-block text-transparent bg-clip-text mb-6">
                  Sosyal Medyada Güçlü Bir Varlık Oluşturun
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  Günümüz dijital dünyasında, sosyal medya pazarlaması markalar için artık bir lüks değil, bir zorunluluktur. Karasu Medya olarak, markanızın sosyal medyada başarılı olması için gereken tüm hizmetleri sunuyoruz.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  Stratejik sosyal medya yönetimi ile markanızın bilinirliğini artırıyor, hedef kitlenizle güçlü bağlar kuruyor ve satışlarınızı artırıyoruz. Her marka için özel olarak tasarlanmış sosyal medya stratejileri geliştiriyor, içerik üretiyor ve performans analizi yapıyoruz.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {['Profesyonel Strateji', 'Özgün İçerik', 'Veri Analizi'].map((tag, idx) => (
                    <span key={idx} className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 text-blue-700 font-medium">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-2xl opacity-20"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image 
                    src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                    alt="Sosyal Medya Yönetimi" 
                    width={1000}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Modern Grid */}
      <section className="py-24 bg-gradient-to-b from-blue-50 via-indigo-50 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 inline-block text-transparent bg-clip-text mb-4">
                Sosyal Medya Yönetiminin Avantajları
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Profesyonel sosyal medya yönetimi ile markanızı rakiplerinizden farklılaştırıyor, 
                dijital varlığınızı güçlendiriyoruz.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Modern Timeline */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 inline-block text-transparent bg-clip-text mb-4">
                Sosyal Medya Yönetim Sürecimiz
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Sistematik ve veri odaklı yaklaşımımızla sosyal medya varlığınızı yönetiyoruz.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 h-full border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {step.number}
                    </div>
                    <div className="pt-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Modern Gradient */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sosyal Medya Yönetimi İçin Hemen Teklif Alın
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Markanızın sosyal medya potansiyelini keşfetmek için uzman ekibimizle görüşün.
            </p>
            <Link 
              href="/iletisim" 
              className="px-10 py-5 bg-white text-blue-700 font-bold rounded-2xl hover:bg-blue-50 transition-all duration-300 inline-flex items-center shadow-2xl hover:shadow-blue-200/50 hover:scale-105 text-lg"
            >
              <span>Hemen İletişime Geçin</span>
              <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
