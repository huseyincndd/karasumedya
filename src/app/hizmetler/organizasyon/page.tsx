"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function Organizasyon() {
  const benefits = [
    {
      title: "Kişiye Özel Konsept",
      description: "Her organizasyonu sizin isteklerinize ve tarzınıza uygun olarak özel tasarlıyoruz.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
        </svg>
      )
    },
    {
      title: "Profesyonel Ekip",
      description: "Deneyimli organizasyon ekibimiz, her detayı düşünerek mükemmel bir deneyim sunuyor.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Stressiz Planlama",
      description: "Tüm organizasyon sürecini sizin adınıza yönetiyor, size sadece keyif almak kalıyor.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Bütçe Dostu Seçenekler",
      description: "Her bütçeye uygun organizasyon paketleri ile hayallerinizi gerçekleştiriyoruz.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const services = [
    {
      name: "Cinsiyet Partisi",
      icon: "/images/gender-reveal.svg",
      description: "Bebeğinizin cinsiyetini sevdiklerinizle birlikte öğrenmenin en eğlenceli yolu"
    },
    {
      name: "Evlilik Teklifi",
      icon: "/images/proposal.svg",
      description: "Hayatınızın en önemli sorusunu soracağınız unutulmaz bir an yaratıyoruz"
    },
    {
      name: "Balayı Tatili",
      icon: "/images/honeymoon.svg",
      description: "Evliliğinizin ilk günlerini unutulmaz kılacak özel balayı organizasyonları"
    },
    {
      name: "Doğum Günü",
      icon: "/images/birthday.svg",
      description: "Her yaşa uygun, kişiye özel doğum günü kutlamaları"
    },
    {
      name: "İş Toplantıları",
      icon: "/images/business-meeting.svg",
      description: "Profesyonel iş toplantıları ve kurumsal etkinlikler"
    },
    {
      name: "Özel Etkinlikler",
      icon: "/images/special-event.svg",
      description: "Yıldönümü, mezuniyet gibi özel günleriniz için organizasyonlar"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Konsept Belirleme",
      description: "İsteklerinizi dinliyor, hayalinizdeki organizasyonun konseptini belirliyoruz."
    },
    {
      number: "02",
      title: "Planlama",
      description: "Mekan, ikram, dekorasyon, müzik gibi tüm detayları planlıyoruz."
    },
    {
      number: "03",
      title: "Tedarikçi Koordinasyonu",
      description: "En kaliteli tedarikçilerle çalışarak, tüm hizmetleri koordine ediyoruz."
    },
    {
      number: "04",
      title: "Hazırlık",
      description: "Organizasyon öncesi tüm hazırlıkları tamamlıyor, son kontrolleri yapıyoruz."
    },
    {
      number: "05",
      title: "Organizasyon Günü",
      description: "Profesyonel ekibimiz organizasyon günü tüm süreci yönetiyor."
    },
    {
      number: "06",
      title: "Memnuniyet Takibi",
      description: "Organizasyon sonrası memnuniyetinizi ölçüyor, geri bildirimlerinizi alıyoruz."
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
              backgroundImage: "url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-amber-900/80 via-amber-800/70 to-amber-900/80"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 pt-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Organizasyon Hizmetleri
            </h1>
            <p className="text-base md:text-lg text-amber-100 mb-6">
              Özel anlarınızı unutulmaz kılacak, profesyonel organizasyon hizmetleri ile 
              hayallerinizi gerçeğe dönüştürüyoruz.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/iletisim" 
                className="px-5 py-2.5 bg-white text-amber-700 font-medium rounded-lg hover:bg-amber-50 transition-colors duration-300 inline-flex items-center shadow-lg"
              >
                <span>Organizasyon Planla</span>
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
                <div className="bg-amber-50 rounded-lg p-2 inline-block mb-4">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Özel Anlarınız İçin Profesyonel Organizasyon
                </h2>
                <p className="text-gray-600 mb-6">
                  Karasu Organizasyon olarak, hayatınızdaki özel anları unutulmaz kılmak için buradayız. Cinsiyet partileri, evlilik teklifleri, balayı tatilleri, doğum günleri ve iş toplantıları gibi her türlü organizasyonu profesyonel ekibimizle planlıyor ve yönetiyoruz.
                </p>
                <p className="text-gray-600 mb-6">
                  Her organizasyonu sizin isteklerinize ve tarzınıza uygun olarak özel tasarlıyor, tüm detayları düşünerek mükemmel bir deneyim sunuyoruz. Siz sadece anın tadını çıkarın, gerisini bize bırakın.
                </p>
                <div className="flex items-center gap-4 text-gray-700">
                  <span className="flex items-center gap-2 text-sm">
                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Kişiye Özel</span>
                  </span>
                  <span className="flex items-center gap-2 text-sm">
                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Profesyonel Ekip</span>
                  </span>
                  <span className="flex items-center gap-2 text-sm">
                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Tam Hizmet</span>
                  </span>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-xl overflow-hidden shadow-xl h-96 bg-gradient-to-br from-amber-100 to-amber-200 p-2">
                  <div className="rounded-lg overflow-hidden h-full">
                    <Image 
                      src="https://www.veraevent.com/media/vera/services/ceremony.jpg" 
                      alt="Organizasyon Hizmetleri" 
                      layout="fill" 
                      objectFit="cover" 
                      className="transform transition-transform duration-500 hover:scale-105"
                    />
                  </div>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Neden Bizi Tercih Etmelisiniz?</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Karasu Organizasyon olarak, her detayı düşünerek mükemmel organizasyonlar sunuyoruz. 
                İşte bizi tercih etmeniz için birkaç neden:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4 text-amber-600">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Hizmetlerimiz</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Hayatınızdaki özel anları unutulmaz kılmak için profesyonel organizasyon hizmetleri sunuyoruz.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-amber-50 p-6 rounded-xl hover:bg-amber-100 transition-colors duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-amber-600 shadow-sm">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{service.name}</h3>
                      <p className="text-gray-600 text-sm">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Çalışma Sürecimiz</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Organizasyonunuzu mükemmel bir şekilde gerçekleştirmek için sistematik bir süreç izliyoruz.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
                  <div className="absolute -top-2 -left-2 w-16 h-16 bg-amber-500 rounded-br-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                  <div className="pt-8 pl-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section - Çalışmalarımızdan Örnekler */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 text-amber-800 mb-6">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="font-medium">Organizasyon Hizmetlerimiz</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-6">
                Gerçekleştirdiğimiz Organizasyonlar
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Özel anlarınızı unutulmaz kılmak için profesyonel organizasyon hizmetleri sunuyoruz.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* 1. Düğün */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden" style={{ height: '480px' }}>
                  <Image 
                    src="https://villaqrmenu.b-cdn.net/karasubasin/IMG_7350.PNG" 
                    alt="Düğün Organizasyonu" 
                    width={1170}
                    height={1437}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Düğün
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Düğün Organizasyonu
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Hayatınızın en özel günü için mükemmel bir düğün organizasyonu. Her detay özenle planlanır.
                  </p>
                </div>
              </div>

              {/* 2. Balayı Tatili */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden" style={{ height: '480px' }}>
                  <Image 
                    src="https://villaqrmenu.b-cdn.net/karasubasin/IMG_7352.PNG" 
                    alt="Balayı Tatili Organizasyonu" 
                    width={1170}
                    height={1437}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Balayı
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Balayı Tatili
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Evliliğinizin ilk günlerini unutulmaz kılacak romantik balayı tatili organizasyonları.
                  </p>
                </div>
              </div>

              {/* 3. Tekne Turu ve Doğum Günü */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden" style={{ height: '480px' }}>
                  <Image 
                    src="https://villaqrmenu.b-cdn.net/karasubasin/IMG_7354.PNG" 
                    alt="Tekne Turu ve Doğum Günü" 
                    width={1170}
                    height={1437}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Tekne & Doğum Günü
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Tekne Turu & Doğum Günü
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Denizde unutulmaz anlar yaşayın. Tekne turları ve özel doğum günü kutlamaları.
                  </p>
                </div>
              </div>

              {/* 4. Sünnet Yemek */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden" style={{ height: '480px' }}>
                  <Image 
                    src="https://villaqrmenu.b-cdn.net/karasubasin/IMG_7349.PNG" 
                    alt="Sünnet Yemek Organizasyonu" 
                    width={1170}
                    height={1437}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Sünnet
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Sünnet Yemek Organizasyonu
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Çocuğunuzun özel günü için geleneksel sünnet yemek organizasyonları düzenliyoruz.
                  </p>
                </div>
              </div>

              {/* 5. Cinsiyet Partisi */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden" style={{ height: '480px' }}>
                  <Image 
                    src="https://villaqrmenu.b-cdn.net/karasubasin/IMG_7351.PNG" 
                    alt="Cinsiyet Partisi Organizasyonu" 
                    width={1170}
                    height={1437}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Cinsiyet Partisi
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Cinsiyet Partisi
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Bebeğinizin cinsiyetini sevdiklerinizle öğrenmenin en eğlenceli yolu.
                  </p>
                </div>
              </div>

              {/* 6. Toplantı Organizasyonları */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden" style={{ height: '480px' }}>
                  <Image 
                    src="https://villaqrmenu.b-cdn.net/karasuekip/IMG_7353.PNG" 
                    alt="Toplantı Organizasyonu" 
                    width={1170}
                    height={1437}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    İş Toplantısı
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Toplantı Organizasyonları
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Profesyonel iş toplantıları ve kurumsal etkinlik organizasyonları.
                  </p>
                </div>
              </div>
            </div>

            {/* Tüm Hizmetlerimiz Butonu */}
            <div className="text-center mt-12">
              <Link 
                href="/iletisim" 
                className="px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-medium rounded-lg hover:from-amber-700 hover:to-orange-700 transition-colors duration-300 inline-flex items-center shadow-lg hover:shadow-amber-200/50"
              >
                <span>Tüm Organizasyon Hizmetlerimizi İnceleyin</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-600">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Hayalinizdeki Organizasyonu Gerçekleştirelim
            </h2>
            <p className="text-amber-100 mb-8 max-w-3xl mx-auto">
              Özel anlarınızı unutulmaz kılmak için profesyonel ekibimizle yanınızdayız.
              Hemen iletişime geçin, hayalinizdeki organizasyonu birlikte planlayalım.
            </p>
            <Link 
              href="/iletisim" 
              className="px-8 py-3 bg-white text-amber-700 font-medium rounded-lg hover:bg-amber-50 transition-colors duration-300 inline-flex items-center shadow-lg"
            >
              <span>Organizasyon Planla</span>
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
