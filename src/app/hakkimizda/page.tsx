"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function Hakkimizda() {
  const teamMembers = [
    {
      name: "Ahmet Yılmaz",
      position: "Kurucu ve CEO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Dijital pazarlama alanında 15 yıllık deneyime sahip olan Ahmet, sektördeki bilgi birikimi ve vizyoner yaklaşımıyla Karasu Medya'yı kurumuştur."
    },
    {
      name: "Zeynep Kaya",
      position: "Kreatif Direktör",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Yaratıcı tasarım ve içerik stratejileri konusunda uzman olan Zeynep, markaların hikayelerini etkileyici bir şekilde anlatmalarına yardımcı olmaktadır."
    },
    {
      name: "Burak Demir",
      position: "Dijital Pazarlama Uzmanı",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "SEO, SEM ve sosyal medya reklamcılığı konularında uzmanlaşmış olan Burak, veri odaklı stratejilerle maksimum dönüşüm sağlamaktadır."
    },
    {
      name: "Elif Şahin",
      position: "Sosyal Medya Yöneticisi",
      image: "https://images.unsplash.com/photo-1507101105822-7472b28e22ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Sosyal medya trendleri ve içerik yönetimi konusunda deneyimli olan Elif, markaların sosyal platformlarda etkili bir şekilde var olmalarını sağlamaktadır."
    },
    {
      name: "Mert Özkan",
      position: "Grafik Tasarımcı",
      image: "https://images.unsplash.com/photo-1589386417686-0d34b5903d23?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Görsel iletişim ve kullanıcı deneyimi tasarımı konusunda uzmanlaşmış olan Mert, markaların görsel kimliklerini güçlendirmektedir."
    },
    {
      name: "Ayşe Yıldız",
      position: "İçerik Uzmanı",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "SEO uyumlu içerik üretimi ve içerik stratejisi geliştirme konusunda deneyimli olan Ayşe, markaların mesajlarını etkili bir şekilde iletmelerini sağlamaktadır."
    }
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
      year: "2015",
      title: "Karasu Medya'nın Kuruluşu",
      description: "Dijital pazarlama alanında kaliteli ve sonuç odaklı hizmet vermek amacıyla kurulduk."
    },
    {
      year: "2017",
      title: "Ekip Genişlemesi",
      description: "Artan müşteri talebini karşılamak için ekibimizi genişlettik ve yeni ofisimize taşındık."
    },
    {
      year: "2019",
      title: "Yeni Hizmetler",
      description: "Hizmet yelpazamizi genişleterek grafik tasarım ve içerik üretimi alanlarında da çözümler sunmaya başladık."
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
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-800/70 to-purple-900/80"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 pt-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Hakkımızda
            </h1>
            <p className="text-base md:text-lg text-blue-100 mb-6">
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
                  Karasu Medya, 2015 yılında dijital pazarlama alanında kaliteli ve sonuç odaklı hizmet vermek amacıyla kurulmuş bir dijital pazarlama ajansıdır. Kurulduğumuz günden bu yana, markaların dijital dünyada başarılı olmalarını sağlamak için yaratıcı ve stratejik çözümler üretiyoruz.
                </p>
                <p className="text-gray-600 mb-6">
                  Sosyal medya yönetiminden dijital reklam kampanyalarına, içerik üretiminden grafik tasarıma kadar geniş bir hizmet yelpazesine sahibiz. Her projede müşterilerimizin ihtiyaçlarını ve hedeflerini ön planda tutarak, onların başarısı için çalışıyoruz.
                </p>
                <p className="text-gray-600 mb-6">
                  Ekibimiz, dijital pazarlama alanında deneyimli ve uzman profesyonellerden oluşmaktadır. Yaratıcılığı, teknolojiyi ve veri analizini bir araya getirerek, her marka için özgün ve etkili çözümler üretiyoruz.
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
                <div className="absolute -inset-4 bg-blue-100 rounded-2xl transform rotate-2"></div>
                <div className="absolute -inset-4 bg-blue-200 rounded-2xl transform -rotate-2 opacity-70"></div>
                <div className="relative rounded-xl overflow-hidden shadow-xl h-96">
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
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Değerlerimiz
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Karasu Medya olarak, her projede bizi yönlendiren temel değerlerimiz vardır.
                Bu değerler, müşterilerimize sunduğumuz hizmetin kalitesini ve yaklaşımımızı şekillendirir.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
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
                İşte Karasu Medya'nın kilometre taşları.
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

      {/* Team Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ekibimiz
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Karasu Medya&apos;nın başarısının arkasında, alanında uzman ve tutkulu bir ekip var.
                Her biri kendi alanında deneyimli olan ekip üyelerimiz, markanızın başarısı için çalışıyor.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="h-64 relative overflow-hidden">
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      layout="fill" 
                      objectFit="cover" 
                      className="hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium text-sm mb-4">{member.position}</p>
                    <p className="text-gray-600">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-blue-50 p-6 rounded-xl">
                <p className="text-blue-600 text-4xl font-bold mb-2">100+</p>
                <p className="text-gray-700 font-medium">Mutlu Müşteri</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <p className="text-blue-600 text-4xl font-bold mb-2">250+</p>
                <p className="text-gray-700 font-medium">Tamamlanan Proje</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <p className="text-blue-600 text-4xl font-bold mb-2">15+</p>
                <p className="text-gray-700 font-medium">Uzman Ekip Üyesi</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <p className="text-blue-600 text-4xl font-bold mb-2">8</p>
                <p className="text-gray-700 font-medium">Yıllık Deneyim</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Dijital Dünyadaki Yolculuğunuza Birlikte Başlayalım
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Markanızın hedeflerine ulaşması için ihtiyaç duyduğu dijital çözümler için bizimle iletişime geçin.
            </p>
            <Link 
              href="/iletisim" 
              className="px-8 py-4 bg-white text-blue-700 font-medium rounded-xl hover:bg-blue-50 transition-colors duration-300 inline-flex items-center shadow-lg"
            >
              <span>Bize Ulaşın</span>
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