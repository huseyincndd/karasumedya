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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
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
      bgColor: "bg-blue-50",
      accentColor: "text-blue-600",
      buttonColor: "bg-blue-600 hover:bg-blue-700"
    },
    {
      id: "dijital-pazarlama",
      title: "Dijital Pazarlama",
      description: "Hedef kitlenize ulaşmanın en etkili yollarını buluyoruz. Google Ads, sosyal medya reklamları ve yeniden pazarlama stratejileri ile markanızın görünürlüğünü artırıyoruz.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
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
      bgColor: "bg-indigo-50",
      accentColor: "text-indigo-600",
      buttonColor: "bg-indigo-600 hover:bg-indigo-700"
    },
    {
      id: "icerik",
      title: "İçerik Üretimi",
      description: "Markanızın hikayesini anlatmanın en etkileyici yollarını buluyoruz. Blog yazıları, sosyal medya içerikleri ve görsel tasarımlarla hedef kitlenizle bağ kuruyoruz.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
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
      bgColor: "bg-purple-50",
      accentColor: "text-purple-600",
      buttonColor: "bg-purple-600 hover:bg-purple-700"
    },
    {
      id: "grafik",
      title: "Grafik Tasarım",
      description: "Markanızın görsel kimliğini güçlendiriyoruz. Logo tasarımı, kurumsal kimlik ve pazarlama materyalleri ile markanızı rakiplerinizden farklılaştırıyoruz.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
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
      bgColor: "bg-pink-50",
      accentColor: "text-pink-600",
      buttonColor: "bg-pink-600 hover:bg-pink-700"
    },
    {
      id: "matbaa",
      title: "Matbaa Hizmetleri",
      description: "Markanızın fiziksel materyallerini en yüksek kalitede üretiyoruz. Kartvizit, broşür, katalog, afiş ve davetiye gibi tüm basılı materyallerinizi profesyonel olarak hazırlıyoruz.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
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
      bgColor: "bg-teal-50",
      accentColor: "text-teal-600",
      buttonColor: "bg-teal-600 hover:bg-teal-700"
    },
    {
      id: "organizasyon",
      title: "Organizasyon Hizmetleri",
      description: "Cinsiyet partisi, evlilik teklifi, balayı tatili, doğum günü ve iş toplantıları gibi özel anlarınızı unutulmaz kılıyoruz. Her detayı düşünen profesyonel ekibimizle yanınızdayız.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
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
      bgColor: "bg-amber-50",
      accentColor: "text-amber-600",
      buttonColor: "bg-amber-600 hover:bg-amber-700"
    }
  ];

  return (
    <main className="min-h-screen pb-16">
      {/* Hero Section - Enhanced for transparent header */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
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
              Dijital Medya Hizmetlerimiz
            </h1>
            <p className="text-base md:text-lg text-blue-100 mb-6">
              Markanızın dijital dünyada başarılı olması için ihtiyaç duyduğu tüm hizmetleri tek bir çatı altında sunuyoruz. 
              Stratejik yaklaşımımız ve yaratıcı çözümlerimiz ile işletmenizi bir adım öne taşıyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Uzman Olduğumuz Alanlar</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Dijital dünyada markanızı en iyi şekilde temsil edecek çözümler sunuyoruz.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-12">
              {services.map((service, index) => (
                <div 
                  key={service.id} 
                  className={`rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ${service.bgColor} flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="md:w-2/5 relative h-64 md:h-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10"></div>
                    <div className="w-full h-full relative">
                      <div className="absolute inset-0 w-full h-full" style={{
                        backgroundImage: `url(${service.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}></div>
                    </div>
                  </div>
                  <div className="md:w-3/5 p-8 md:p-10 flex flex-col">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${service.accentColor} bg-white shadow-md`}>
                      {service.icon}
                    </div>
                    <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${service.accentColor}`}>
                      {service.title}
                    </h2>
                    <p className="text-gray-700 mb-6">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <svg className={`w-5 h-5 mr-2 ${service.accentColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-auto">
                      <Link 
                        href={`/hizmetler/${service.id}`} 
                        className={`inline-flex items-center px-6 py-3 ${service.buttonColor} text-white rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg`}
                      >
                        <span>Detaylı Bilgi</span>
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 via-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Dijital Başarı Yolculuğunuza Bugün Başlayın
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Markanızın potansiyelini keşfetmek ve dijital varlığınızı güçlendirmek için uzman ekibimizle tanışın.
              Ücretsiz danışmanlık ile neler yapabileceğimizi görelim.
            </p>
            <Link 
              href="/iletisim" 
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-colors duration-300 inline-flex items-center shadow-xl hover:shadow-blue-200/50"
            >
              <span>Hemen İletişime Geçin</span>
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