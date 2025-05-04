"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function IcerikUretimi() {
  const contentTypes = [
    {
      title: "Blog Yazıları",
      description: "SEO uyumlu, bilgilendirici ve etkileyici blog içerikleri ile web sitenizin trafik ve dönüşüm oranlarını artırın.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1M19 20a2 2 0 002-2V8a2 2 0 00-2-2h-5a2 2 0 00-2 2v12a2 2 0 002 2h5zm-9-3h2m-2-4h4m-4-4h6m-6-4h8" />
        </svg>
      )
    },
    {
      title: "Sosyal Medya İçerikleri",
      description: "Her platforma özel, etkileşim odaklı içerikler ile sosyal medya hesaplarınızı canlandırın ve takipçi sayınızı artırın.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      )
    },
    {
      title: "Video İçerikler",
      description: "Görsel hikaye anlatımı ile markanızı tanıtın, ürünlerinizi sergileyin ve hedef kitlenizle etkileşime geçin.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "E-posta Pazarlama İçerikleri",
      description: "Açılma ve tıklanma oranları yüksek, dönüşüm odaklı e-posta kampanyaları ile potansiyel müşterilerinize ulaşın.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Web Sitesi İçerikleri",
      description: "Anasayfa, hakkımızda, hizmetler ve ürün sayfaları için konversiyon odaklı metinler oluşturun.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      title: "Grafik ve Görsel İçerikler",
      description: "İnfografikler, sosyal medya görselleri ve banner tasarımları ile içeriklerinizi görsel olarak zenginleştirin.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  const benefits = [
    {
      title: "Artan Trafik ve SEO Performansı",
      description: "Kaliteli içerikler Google sıralamalarında yükselmenizi ve organik trafiğinizi artırmanızı sağlar.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: "Güçlü Marka Algısı",
      description: "Profesyonel içerikler markanızın güvenilirliğini ve otoritesini artırır.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Artan Müşteri Etkileşimi",
      description: "Değerli içerikler hedef kitlenizle bağ kurmanızı ve etkileşimi artırmanızı sağlar.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Yüksek Dönüşüm Oranları",
      description: "İkna edici içerikler potansiyel müşterilerinizi gerçek müşterilere dönüştürür.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Hedef Kitle ve Amaç Analizi",
      description: "Hedef kitlenizi, sektörünüzü ve içerik amaçlarınızı detaylı olarak analiz ediyoruz."
    },
    {
      number: "02",
      title: "İçerik Stratejisi Geliştirme",
      description: "Analiz sonuçlarına göre kapsamlı bir içerik stratejisi ve içerik takvimi oluşturuyoruz."
    },
    {
      number: "03",
      title: "Araştırma ve Konu Belirleme",
      description: "Hedef kitlenizin ilgilendiği konuları belirliyor ve kapsamlı araştırma yapıyoruz."
    },
    {
      number: "04",
      title: "İçerik Üretimi",
      description: "SEO uyumlu, etkileyici ve değerli içerikler üretiyoruz."
    },
    {
      number: "05",
      title: "Görsel Tasarım",
      description: "İçeriklerinizi destekleyecek görseller, infografikler ve videolar hazırlıyoruz."
    },
    {
      number: "06",
      title: "Yayınlama ve Dağıtım",
      description: "İçerikleri doğru platformlarda yayınlıyor ve dağıtım stratejisini uyguluyoruz."
    },
    {
      number: "07",
      title: "Analiz ve Optimizasyon",
      description: "İçerik performansını analiz ediyor ve sürekli iyileştirmeler yapıyoruz."
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
              backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/80 via-purple-800/70 to-pink-900/80"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 pt-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              İçerik Üretimi
            </h1>
            <p className="text-base md:text-lg text-purple-100 mb-6">
              Etkileyici, özgün ve amaca yönelik içerikler ile markanızın hikayesini anlatıyor, 
              hedef kitlenizle güçlü bağlar kuruyoruz.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/iletisim" 
                className="px-5 py-2.5 bg-white text-purple-700 font-medium rounded-lg hover:bg-purple-50 transition-colors duration-300 inline-flex items-center shadow-lg"
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
                <div className="bg-purple-50 rounded-lg p-2 inline-block mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Markanızın Hikayesini Etkili Bir Şekilde Anlatın
                </h2>
                <p className="text-gray-600 mb-6">
                  İçerik pazarlaması, markanızın değerlerini, ürünlerinizi ve hizmetlerinizi hedef kitlenize en etkili şekilde anlatmanın yoludur. Karasu Medya olarak, markanızın sesini bulan ve hedef kitlenizle güçlü bağlar kuran içerikler üretiyoruz.
                </p>
                <p className="text-gray-600 mb-6">
                  Stratejik içerik üretimi sürecimizde, hedef kitlenizi ve amaçlarınızı analiz ederek, her platforma ve amaca uygun içerikler geliştiriyoruz. SEO uyumlu blog yazıları, sosyal medya içerikleri, video içerikler ve daha fazlasını markanıza özel bir yaklaşımla hazırlıyoruz.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">SEO İçerikleri</span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">Sosyal Medya</span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">Blog Yazıları</span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">Video İçerikler</span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">E-posta Pazarlama</span>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-purple-100 rounded-2xl transform rotate-3"></div>
                <div className="absolute -inset-4 bg-purple-200 rounded-2xl transform -rotate-3 opacity-70"></div>
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                    alt="İçerik Üretimi" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Sunduğumuz İçerik Hizmetleri
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Her platforma ve amaca uygun, stratejik ve özgün içerikler üretiyor, markanızın hedeflerine ulaşmasını sağlıyoruz.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contentTypes.map((type, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-6">
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{type.title}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                İçerik Üretiminin Avantajları
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Stratejik içerik üretimi ile markanızın dijital varlığını güçlendiriyor, hedeflerinize ulaşmanızı sağlıyoruz.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex gap-6">
                  <div className="w-14 h-14 bg-purple-100 rounded-xl flex-shrink-0 flex items-center justify-center text-purple-600">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
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
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                İçerik Üretim Sürecimiz
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Stratejik ve sistematik yaklaşımımızla, markanıza özel içerikler üretiyoruz.
              </p>
            </div>
            
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-10">
                  <div className="md:w-32 flex-shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:block h-12 border-l-2 border-purple-200 ml-10 mt-4"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sample Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                İçerik Örneklerimiz
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Çeşitli sektörler için ürettiğimiz içerik örneklerini inceleyin.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1551651653-c5186a1fbba2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Blog İçeriği" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-0 right-0 p-2 bg-purple-600 text-white text-sm font-medium">
                    Blog
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    "Dijital Pazarlamada Başarının 10 Sırrı"
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Dijital pazarlama stratejileri, SEO teknikleri ve sosyal medya ipuçlarını içeren kapsamlı bir blog yazısı.
                  </p>
                  <div className="flex items-center gap-2 text-purple-600 font-medium">
                    <span>Örneği İncele</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Sosyal Medya İçeriği" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-0 right-0 p-2 bg-pink-600 text-white text-sm font-medium">
                    Sosyal Medya
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    "Instagram Kampanya Serisi"
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Bir kozmetik markası için hazırladığımız hikaye, gönderi ve carousel içeriklerinden oluşan kampanya serisi.
                  </p>
                  <div className="flex items-center gap-2 text-purple-600 font-medium">
                    <span>Örneği İncele</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1574717024079-a518649d56c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Video İçeriği" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-0 right-0 p-2 bg-blue-600 text-white text-sm font-medium">
                    Video
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    "Ürün Tanıtım Videosu"
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Bir teknoloji firması için hazırladığımız, yeni ürünün özelliklerini anlatan tanıtım videosu.
                  </p>
                  <div className="flex items-center gap-2 text-purple-600 font-medium">
                    <span>Örneği İncele</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <Link 
                href="/referanslar" 
                className="inline-flex items-center text-purple-600 font-medium hover:text-purple-800"
              >
                <span>Tüm İçerik Örneklerimizi İnceleyin</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Markanız İçin Etkili İçerikler Üretelim
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              İçerik ihtiyaçlarınızı karşılamak için uzman ekibimizle görüşün.
            </p>
            <Link 
              href="/iletisim" 
              className="px-8 py-4 bg-white text-purple-700 font-medium rounded-xl hover:bg-purple-50 transition-colors duration-300 inline-flex items-center shadow-lg"
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