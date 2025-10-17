"use client";

import Link from 'next/link';

export default function Hizmetler() {
  const services = [
    {
      id: "sosyal-medya",
      title: "Sosyal Medya Yönetimi",
      description: "Markanızın sosyal medya platformlarında etkin şekilde temsil edilmesini sağlıyoruz. Stratejik içerik planlaması, etkileşim yönetimi ve performans analizi ile sosyal medya varlığınızı güçlendiriyoruz.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      ),
      features: [
        "Sosyal Medya Strateji Geliştirme",
        "İçerik Üretimi ve Planlama",
        "Topluluk Yönetimi ve Etkileşim",
        "Sosyal Medya Reklamları",
        "Performans Analizi ve Raporlama"
      ],
      image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      gradient: "from-blue-600 to-indigo-600",
      bgGradient: "from-blue-50 via-indigo-50 to-blue-50",
      accentColor: "blue"
    },
    {
      id: "dijital-pazarlama",
      title: "Dijital Pazarlama",
      description: "Hedef kitlenize ulaşmanın en etkili yollarını buluyoruz. Google Ads, sosyal medya reklamları ve yeniden pazarlama stratejileri ile markanızın görünürlüğünü artırıyoruz.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      features: [
        "Google Ads Kampanya Yönetimi",
        "Sosyal Medya Reklam Yönetimi",
        "Retargeting ve Remarketing",
        "Display ve Video Reklamlar",
        "Performans Odaklı Reklam Stratejileri"
      ],
      image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      gradient: "from-indigo-600 to-purple-600",
      bgGradient: "from-indigo-50 via-purple-50 to-indigo-50",
      accentColor: "indigo"
    },
    {
      id: "icerik",
      title: "İçerik Üretimi",
      description: "Markanızın hikayesini anlatmanın en etkileyici yollarını buluyoruz. Blog yazıları, sosyal medya içerikleri ve görsel tasarımlarla hedef kitlenizle bağ kuruyoruz.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
      features: [
        "Blog ve Web İçeriği Oluşturma",
        "Sosyal Medya İçerikleri",
        "Kopya Yazarlığı ve Metin Üretimi",
        "E-posta Pazarlama İçerikleri",
        "SEO Uyumlu İçerik Stratejileri"
      ],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-50 via-pink-50 to-purple-50",
      accentColor: "purple"
    },
    {
      id: "grafik",
      title: "Grafik Tasarım",
      description: "Markanızın görsel kimliğini güçlendiriyoruz. Logo tasarımı, kurumsal kimlik ve pazarlama materyalleri ile markanızı rakiplerinizden farklılaştırıyoruz.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      features: [
        "Logo ve Marka Kimliği Tasarımı",
        "Sosyal Medya Görselleri",
        "Web Sitesi UI/UX Tasarımı",
        "Dijital ve Basılı Pazarlama Materyalleri",
        "Infografik ve Veri Görselleştirme"
      ],
      image: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      gradient: "from-pink-600 to-rose-600",
      bgGradient: "from-pink-50 via-rose-50 to-pink-50",
      accentColor: "pink"
    },
    {
      id: "matbaa",
      title: "Matbaa Hizmetleri",
      description: "Markanızın fiziksel materyallerini en yüksek kalitede üretiyoruz. Kartvizit, broşür, katalog, afiş ve davetiye gibi tüm basılı materyallerinizi profesyonel olarak hazırlıyoruz.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
        </svg>
      ),
      features: [
        "Kartvizit ve Kurumsal Kimlik",
        "Broşür ve Katalog Tasarımı",
        "Afiş ve Poster Baskı",
        "Davetiye ve Özel Baskılar",
        "Promosyon Ürünleri"
      ],
      image: "https://berkmatbaa.com.tr/assets/uploads/66544393001fd171679835555.jpg",
      gradient: "from-teal-600 to-cyan-600",
      bgGradient: "from-teal-50 via-cyan-50 to-teal-50",
      accentColor: "teal"
    },
    {
      id: "organizasyon",
      title: "Organizasyon Hizmetleri",
      description: "Cinsiyet partisi, evlilik teklifi, balayı tatili, doğum günü ve iş toplantıları gibi özel anlarınızı unutulmaz kılıyoruz. Her detayı düşünen profesyonel ekibimizle yanınızdayız.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
        </svg>
      ),
      features: [
        "Cinsiyet Partisi Organizasyonu",
        "Evlilik Teklifi Planlama",
        "Balayı Tatili Organizasyonu",
        "Doğum Günü Kutlamaları",
        "İş Toplantıları ve Kurumsal Etkinlikler"
      ],
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      gradient: "from-amber-600 to-orange-600",
      bgGradient: "from-amber-50 via-orange-50 to-amber-50",
      accentColor: "amber"
    }
  ];

  return (
    <main className="min-h-screen pb-16">
      {/* Hero Section - Modern with Glassmorphism */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          </div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-6 lg:px-8 relative z-10 pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-6 shadow-lg">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="font-medium">Dijital Medya Çözümleri</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Hizmetlerimiz
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              Markanızın dijital dünyada başarılı olması için ihtiyaç duyduğu tüm hizmetleri tek bir çatı altında sunuyoruz. 
              Stratejik yaklaşımımız ve yaratıcı çözümlerimiz ile işletmenizi bir adım öne taşıyoruz.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/iletisim" 
                className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-2xl hover:bg-blue-50 transition-all duration-300 inline-flex items-center shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <span>Hemen Başlayın</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Modern Cards */}
      <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 inline-block text-transparent bg-clip-text mb-4">
                Uzman Olduğumuz Alanlar
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Dijital dünyada markanızı en iyi şekilde temsil edecek çözümler sunuyoruz.
              </p>
            </div>
            
            <div className="space-y-24">
              {services.map((service, index) => (
                <div 
                  key={service.id} 
                  className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center group`}
                >
                  {/* Image Section */}
                  <div className="lg:w-1/2">
                    <div className="relative">
                      <div className={`absolute -inset-4 bg-gradient-to-r ${service.gradient} rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                      <div className="relative rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500">
                        <div 
                          className="aspect-[4/3] sm:aspect-[4/3] bg-cover bg-center bg-no-repeat min-h-[200px] sm:min-h-0"
                          style={{ backgroundImage: `url(${service.image})` }}
                        >
                          <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:w-1/2">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    
                    <h2 className={`text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r ${service.gradient} inline-block text-transparent bg-clip-text`}>
                      {service.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-1 gap-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start group/item">
                          <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center mr-3 mt-0.5 group-hover/item:scale-110 transition-transform duration-300`}>
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link 
                      href={`/hizmetler/${service.id}`} 
                      className={`inline-flex items-center px-8 py-4 bg-gradient-to-r ${service.gradient} text-white rounded-2xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 font-semibold`}
                    >
                      <span>Detaylı Bilgi</span>
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
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
              Dijital Başarı Yolculuğunuza Bugün Başlayın
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Markanızın potansiyelini keşfetmek ve dijital varlığınızı güçlendirmek için uzman ekibimizle tanışın.
              Ücretsiz danışmanlık ile neler yapabileceğimizi görelim.
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
