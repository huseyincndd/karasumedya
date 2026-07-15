"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function Hakkimizda() {
  const teamMembers = [
    {
      name: "Zeliha",
      position: "Yönetim Sorumlusu",
      image: "https://villaqrmenu.b-cdn.net/karasuekip/karasucrm/zeliha.webp",
      description: ""
    },
    {
      name: "İlayda",
      position: "Takım Lider Yardımcısı ve Grafik Tasarım Uzmanı",
      image: "https://villaqrmenu.b-cdn.net/karasuekip/karasucrm/ilayda.JPG.webp",
      description: ""
    },
    {
      name: "Kader",
      position: "Sosyal Medya Yöneticisi",
      image: "https://villaqrmenu.b-cdn.net/karasuekip/2.png",
      description: ""
    },
    {
      name: "Sena",
      position: "Meta Reklam Uzmanı",
      image: "https://villaqrmenu.b-cdn.net/karasuekip/karasucrm/sena.webp",
      description: ""
    },
    {
      name: "Eren",
      position: "Reels Video Uzmanı",
      image: "https://villaqrmenu.b-cdn.net/karasuekip/karasucrm/eren.webp",
      description: ""
    },
    {
      name: "Hüseyin",
      position: "Web Tasarım Uzmanı",
      image: "https://villaqrmenu.b-cdn.net/karasuekip/16.png",
      description: ""
    },
  ];

  const values = [
    {
      title: "Yaratıcılık",
      description: "Sıradan olanın ötesine geçerek, her marka için özgün ve yenilikçi çözümler üretiyoruz.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Müşteri Odaklılık",
      description: "Her projede müşterilerimizin ihtiyaçlarını ve hedeflerini ön planda tutarak, sonuç odaklı çalışıyoruz.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Kalite",
      description: "Her projede en yüksek kaliteyi sunmayı taahhüt ediyor, detaylara özen gösteriyoruz.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Yenilikçilik",
      description: "Dijital dünyadaki gelişmeleri yakından takip ediyor, en güncel yaklaşımları ve teknolojileri kullanıyoruz.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  const milestones = [
    {
      year: "2018",
      title: "Karasu Medya'nın Mehmet Enes Karasu tarafından Kuruluşu",
      description: "Dijital pazarlama alanında kaliteli ve sonuç odaklı hizmet vermek amacıyla kurulduk."
    },
    {
      year: "2019",
      title: "Ekip Genişlemesi ve Yeni Hizmetler",
      description: "Artan müşteri talebini karşılamak için ekibimizi genişlettik ve hizmet yelpazamizi genişleterek grafik tasarım ve içerik üretimi alanlarında da çözümler sunmaya başladık."
    },
    {
      year: "2021",
      title: "Uluslararası Projeler",
      description: "Ulusal sınırların ötesine geçerek, uluslararası markalarla çalışmaya başladık."
    },
    {
      year: "2023",
      title: "Dijital Dönüşüm Danışmanlığı",
      description: "Şirketlerin dijital dönüşüm süreçlerinde danışmanlık hizmeti vermeye başladık."
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">Biz Kimiz?</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Hakkımızda
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              Karasu Medya olarak, markaların dijital dünyada başarılı olmalarını sağlamak için çözümler üretiyoruz.
            </p>
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Biz Kimiz?
                </h2>
                <p className="text-gray-600 mb-6">
                  Karasu Medya, dijital pazarlama ve reklamın gücünü kullanarak markanızı yeni bir seviyeye taşıyan bir partnerdir. Markanızı en uygun kanallarda hedef kitlenize ulaştırmanıza yardımcı olmak için yenilikçi stratejiler ve yaratıcı çözümler sunuyoruz.
                </p>
                <p className="text-gray-600 mb-6">
                  Deneyimli ekibimiz, markanızın ihtiyaçlarını anlamak ve hedeflerinize ulaşmak için size özel bir yaklaşım geliştirir. Dijital reklamcılıktan sosyal medya yönetimine, web tasarımından içerik üretimine kadar geniş bir yelpazede hizmet sunuyoruz.
                </p>
                <p className="text-gray-600 mb-6">
                  Karasu Medya olarak, müşterilerimizin başarısı bizim önceliğimizdir. Her adımda size rehberlik eder, stratejik danışmanlık sağlar ve markanızın potansiyelini maksimize etmek için çalışırız.
                </p>
                <div className="flex items-center gap-4 text-gray-700">
                  <span className="flex items-center gap-2 text-sm">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Müşteri Odaklı</span>
                  </span>
                  <span className="flex items-center gap-2 text-sm">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Sonuç Odaklı</span>
                  </span>
                  <span className="flex items-center gap-2 text-sm">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Yaratıcı</span>
                  </span>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-xl overflow-hidden shadow-xl h-96 bg-gradient-to-br from-blue-100 to-blue-200 p-2">
                  <div className="rounded-lg overflow-hidden h-full">
                    <Image 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                      alt="Karasu Medya Ekibi" 
                      layout="fill" 
                      objectFit="cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Ultra Modern */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-indigo-50">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 text-blue-800 mb-6 shadow-lg">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="font-bold text-sm">Profesyonel Ekip</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 inline-block text-transparent bg-clip-text mb-4">
                Ekibimiz
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                Karasu Medya&apos;nın başarısının arkasındaki yetenekli ve tutkulu ekibimizle tanışın.
              </p>
            </div>
            
            {/* Team Grid - Modern Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="group relative">
                  {/* Hover Gradient Background */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"></div>
                  
                  {/* Card */}
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg group-hover:shadow-2xl transition-all duration-500 flex flex-col items-center h-full">
                    {/* Image Container */}
                    <div className="relative mb-6">
                      <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                      <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl ring-2 ring-blue-100 group-hover:ring-blue-300 transition-all duration-500">
                        <Image 
                          src={member.image} 
                          alt={member.name} 
                          width={128} 
                          height={128} 
                          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      
                      {/* Status Dot */}
                      <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 border-2 border-white rounded-full shadow-lg"></div>
                    </div>
                    
                    {/* Info */}
                    <div className="text-center flex-1 flex flex-col justify-center">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {member.name}
                      </h3>
                      <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 group-hover:border-blue-300 transition-colors duration-300">
                        <p className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 inline-block text-transparent bg-clip-text">
                          {member.position}
                        </p>
                      </div>
                    </div>

                    {/* Decorative Corner */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500 rotate-45"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline/Milestones Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Yolculuğumuz
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Kurulduğumuz günden bugüne, pek çok başarıya imza attık ve sürekli büyüdük.
                İşte Karasu Medya&apos;nın kilometre taşları.
              </p>
            </div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-10">
                  <div className="md:w-32 flex-shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                    {index < milestones.length - 1 && (
                      <div className="hidden md:block h-12 border-l-2 border-blue-200 ml-10 mt-4"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Modern */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-100">
                <p className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 inline-block text-transparent bg-clip-text mb-2">33+</p>
                <p className="text-gray-700 font-semibold">Mutlu Müşteri</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-purple-100">
                <p className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 inline-block text-transparent bg-clip-text mb-2">250+</p>
                <p className="text-gray-700 font-semibold">Tamamlanan Proje</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-indigo-100">
                <p className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 inline-block text-transparent bg-clip-text mb-2">15+</p>
                <p className="text-gray-700 font-semibold">Uzman Ekip Üyesi</p>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-teal-100">
                <p className="text-5xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 inline-block text-transparent bg-clip-text mb-2">8</p>
                <p className="text-gray-700 font-semibold">Yıllık Deneyim</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Modern */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 mb-6">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="font-semibold text-sm">Temel Değerler</span>
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 inline-block text-transparent bg-clip-text mb-4">
                Değerlerimiz
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Karasu Medya olarak, her projede bizi yönlendiren temel değerlerimiz vardır.
                Bu değerler, müşterilerimize sunduğumuz hizmetin kalitesini ve yaklaşımımızı şekillendirir.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="group bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Modern */}
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
              Dijital Dünyadaki Yolculuğunuza Birlikte Başlayalım
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Markanızın hedeflerine ulaşması için ihtiyaç duyduğu dijital çözümler için bizimle iletişime geçin.
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