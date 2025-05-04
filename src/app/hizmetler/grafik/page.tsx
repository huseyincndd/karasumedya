"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function GrafikTasarim() {
  const designServices = [
    {
      title: "Logo ve Kurumsal Kimlik Tasarımı",
      description: "Markanızın kimliğini yansıtan logo, kartvizit, antetli kağıt ve diğer kurumsal kimlik elemanları tasarlıyoruz.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    {
      title: "Sosyal Medya Görselleri",
      description: "Her platforma özel, dikkat çekici ve markanızı yansıtan sosyal medya görselleri tasarlıyoruz.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Web Sitesi Arayüz Tasarımı",
      description: "Kullanıcı dostu, modern ve estetik web sitesi arayüzleri tasarlıyoruz.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Banner ve Reklam Tasarımları",
      description: "Web siteniz, sosyal medya platformları ve dijital reklamlar için dikkat çekici banner ve reklam tasarımları oluşturuyoruz.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      )
    },
    {
      title: "Basılı Materyal Tasarımı",
      description: "Broşür, katalog, el ilanı, poster ve diğer basılı materyaller için etkileyici tasarımlar yapıyoruz.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1M19 20a2 2 0 002-2V8a2 2 0 00-2-2h-5a2 2 0 00-2 2v12a2 2 0 002 2h5z" />
        </svg>
      )
    },
    {
      title: "Ambalaj Tasarımı",
      description: "Ürünlerinizi öne çıkaracak, rafta dikkat çekecek ambalaj ve etiket tasarımları oluşturuyoruz.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    }
  ];

  const designProcess = [
    {
      number: "01",
      title: "Brief ve İhtiyaç Analizi",
      description: "Markanızı, hedef kitlenizi ve tasarım ihtiyaçlarınızı detaylı olarak analiz ediyoruz."
    },
    {
      number: "02",
      title: "Araştırma ve Konsept Geliştirme",
      description: "Rakiplerinizi ve sektörünüzü inceleyerek, markanıza özel konseptler geliştiriyoruz."
    },
    {
      number: "03",
      title: "Taslak Tasarım",
      description: "Geliştirdiğimiz konseptler doğrultusunda ilk taslak tasarımları oluşturuyoruz."
    },
    {
      number: "04",
      title: "Revizyon ve İyileştirme",
      description: "Geri bildirimleriniz doğrultusunda tasarımları revize ediyor ve iyileştiriyoruz."
    },
    {
      number: "05",
      title: "Son Tasarım ve Teslim",
      description: "Onaylanan tasarımların son halini oluşturuyor ve uygun formatlarda teslim ediyoruz."
    }
  ];

  const benefits = [
    {
      title: "Güçlü Marka Algısı",
      description: "Profesyonel tasarımlar markanızın algısını güçlendirir ve müşterilerinizde güven oluşturur.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Rakiplerden Farklılaşma",
      description: "Özgün tasarımlar ile rakiplerinizden farklılaşır ve pazarda öne çıkarsınız.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Artan Müşteri İlgisi",
      description: "Etkileyici tasarımlar müşterilerin dikkatini çeker ve etkileşimi artırır.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      title: "Tutarlı Marka İmajı",
      description: "Tüm platformlarda tutarlı tasarım dili ile güçlü bir marka imajı oluşturursunuz.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    }
  ];

  const portfolioItems = [
    {
      title: "Modern Logo Tasarımı",
      category: "Logo Tasarımı",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "E-Ticaret Arayüz Tasarımı",
      category: "Web Arayüzü",
      image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Sosyal Medya Kampanyası",
      category: "Sosyal Medya",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Ürün Ambalajı Tasarımı",
      category: "Ambalaj",
      image: "https://images.unsplash.com/photo-1636622433525-127afdf3662d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
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
              backgroundImage: "url('https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-pink-900/80 via-pink-800/70 to-rose-900/80"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 pt-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Grafik Tasarım Hizmetleri
            </h1>
            <p className="text-base md:text-lg text-pink-100 mb-6">
              Markanızın görsel kimliğini güçlendiren, etkileyici ve özgün tasarımlar ile 
              hedef kitlenize unutulmaz bir ilk izlenim bırakın.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/iletisim" 
                className="px-5 py-2.5 bg-white text-pink-700 font-medium rounded-lg hover:bg-pink-50 transition-colors duration-300 inline-flex items-center shadow-lg"
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
                <div className="bg-pink-50 rounded-lg p-2 inline-block mb-4">
                  <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Görsel Kimliğinizi Güçlendirin
                </h2>
                <p className="text-gray-600 mb-6">
                  Günümüz dijital dünyasında, görsel kimlik markanızın en önemli unsurlarından biridir. Karasu Medya olarak, markanızın değerlerini ve vizyonunu yansıtan özgün ve etkileyici tasarımlar oluşturuyoruz.
                </p>
                <p className="text-gray-600 mb-6">
                  Logo tasarımından web arayüzüne, sosyal medya görsellerinden basılı materyallere kadar tüm grafik tasarım ihtiyaçlarınızı karşılıyoruz. Profesyonel tasarım ekibimiz, her markanın kendine özgü karakterini anlayarak, hedef kitlesine uygun görsel çözümler üretiyor.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-pink-100 text-pink-800">Logo Tasarımı</span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-pink-100 text-pink-800">Kurumsal Kimlik</span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-pink-100 text-pink-800">Sosyal Medya</span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-pink-100 text-pink-800">Web Tasarım</span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-pink-100 text-pink-800">Ambalaj</span>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-pink-100 rounded-2xl transform rotate-3"></div>
                <div className="absolute -inset-4 bg-pink-200 rounded-2xl transform -rotate-3 opacity-70"></div>
                <div className="relative rounded-xl overflow-hidden shadow-xl h-96">
                  <Image 
                    src="https://images.unsplash.com/photo-1613909207039-6b173b755cc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                    alt="Grafik Tasarım" 
                    layout="fill" 
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Tasarım Hizmetlerimiz
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Her ihtiyaca özel tasarım çözümleri sunuyor, markanızın görsel dünyasını zenginleştiriyoruz.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {designServices.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center text-pink-600 mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Tasarım Sürecimiz
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Sistematik ve işbirlikçi tasarım sürecimiz ile markanızın ihtiyaçlarına uygun çözümler üretiyoruz.
              </p>
            </div>
            
            <div className="space-y-12">
              {designProcess.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-10">
                  <div className="md:w-32 flex-shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-pink-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                    {index < designProcess.length - 1 && (
                      <div className="hidden md:block h-12 border-l-2 border-pink-200 ml-10 mt-4"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-gradient-to-b from-pink-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Çalışmalarımızdan Örnekler
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Farklı sektörler ve ihtiyaçlar için hazırladığımız tasarım çalışmalarımızdan bir seçki.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {portfolioItems.map((item, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group">
                  <div className="relative h-64 overflow-hidden">
                    <Image 
                      src={item.image} 
                      alt={item.title} 
                      layout="fill" 
                      objectFit="cover" 
                      className="group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <span className="block text-xs text-pink-300 mb-1">{item.category}</span>
                        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Link 
                href="/referanslar" 
                className="inline-flex items-center text-pink-600 font-medium hover:text-pink-800"
              >
                <span>Tüm Çalışmalarımızı İnceleyin</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Profesyonel Tasarımın Avantajları
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Profesyonel tasarım hizmetleri ile markanızın değerini artırın, müşterilerinizde güven ve bağlılık oluşturun.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex gap-6">
                  <div className="w-14 h-14 bg-pink-100 rounded-xl flex-shrink-0 flex items-center justify-center text-pink-600">
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

      {/* Testimonial Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 relative">
              <div className="absolute -top-5 -left-5">
                <svg className="w-10 h-10 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-2.949 2.164-5.699 5.642-5.699v3.652c-1.718 0-2.469 1.317-2.469 2.545v0.779h4.406v6.114h-7.578zM4.341 21v-7.391c0-2.949 2.164-5.699 5.642-5.699v3.652c-1.718 0-2.469 1.317-2.469 2.545v0.779h4.406v6.114h-7.578z" />
                </svg>
              </div>
              <p className="text-lg md:text-xl text-gray-600 mb-8 italic">
                &quot;Karasu Medya ekibi, markamızın görsel kimliğini tamamen yeniledi. Yeni logo tasarımımız ve kurumsal kimlik çalışmalarımız sayesinde hem müşterilerimizden hem de çalışanlarımızdan çok olumlu geri dönüşler aldık. Profesyonel yaklaşımları ve yaratıcı çözümleri için teşekkür ederiz.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 relative">
                  <Image 
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                    alt="Müşteri" 
                    layout="fill" 
                    objectFit="cover"
                  />
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold">Ayşe Yılmaz</h4>
                  <p className="text-gray-500 text-sm">Pazarlama Müdürü, ModaTrend</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-rose-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Markanızın Görsel Kimliğini Güçlendirmeye Hazır Mısınız?
            </h2>
            <p className="text-xl text-pink-100 mb-8">
              Tasarım ihtiyaçlarınızı karşılamak için uzman ekibimizle görüşün.
            </p>
            <Link 
              href="/iletisim" 
              className="px-8 py-4 bg-white text-pink-700 font-medium rounded-xl hover:bg-pink-50 transition-colors duration-300 inline-flex items-center shadow-lg"
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