"use client";

import Link from 'next/link';

export default function Referanslar() {
  // Featured clients with testimonials
  const testimonials = [
    {
      client: "Metropol İnşaat",
      quote: "Karasu Medya ile çalışmaya başladıktan sonra, sosyal medya hesaplarımızdaki etkileşim oranımız %50'den fazla arttı. Profesyonel ekipleri ve stratejik yaklaşımları sayesinde dijital varlığımız güçlendi.",
      person: "Mehmet Koç",
      title: "Pazarlama Direktörü",
      industry: "İnşaat",
      color: "blue",
      rating: 5
    },
    {
      client: "Lezzet Restoran Zinciri",
      quote: "İçerik stratejisi ve profesyonel fotoğraf çekimleri sayesinde markamızın dijital dünyada duruşu tamamen değişti. Karasu Medya ile yaptığımız çalışma sonucu online siparişlerimiz %70 arttı.",
      person: "Zeynep Yılmaz",
      title: "Genel Müdür",
      industry: "Yiyecek & İçecek",
      color: "red",
      rating: 5
    },
    {
      client: "TeknoPlus",
      quote: "Karasu Medya'nın dijital pazarlama stratejileri ve Google Ads kampanyaları sayesinde web sitemizin trafik hacmi 3 katına çıktı ve dönüşüm oranımız %25 arttı.",
      person: "Ali Kaya",
      title: "Dijital Pazarlama Yöneticisi",
      industry: "Teknoloji",
      color: "indigo",
      rating: 5
    },
    {
      client: "Moda Butik",
      quote: "Sosyal medya yönetimi konusunda Karasu Medya'nın uzmanlığı sayesinde Instagram takipçi sayımız 6 ayda 3 katına çıktı ve online satışlarımız %120 arttı.",
      person: "Selin Demir",
      title: "Marka Yöneticisi",
      industry: "Moda & Tekstil",
      color: "purple",
      rating: 5
    },
    {
      client: "Yeşil Enerji A.Ş.",
      quote: "Kurumsal kimliğimizin yenilenmesi ve dijital pazarlama stratejimizin geliştirilmesi konusunda Karasu Medya mükemmel bir iş çıkardı. Sektörümüzde fark yarattık.",
      person: "Ahmet Yıldız",
      title: "CEO",
      industry: "Enerji",
      color: "green",
      rating: 5
    },
    {
      client: "Akilli Ev Sistemleri",
      quote: "Web sitemizin yenilenmesi ve SEO çalışmaları sonucunda organik trafik hacmimiz %85 arttı. Karasu Medya ekibinin profesyonelliği ve uzmanlığı için teşekkür ederiz.",
      person: "Burak Öztürk",
      title: "Pazarlama Müdürü",
      industry: "Teknoloji",
      color: "teal",
      rating: 5
    },
  ];


  // Başarı metrikleri
  const successMetrics = [
    {
      value: "85%",
      label: "Müşteri Memnuniyeti",
      description: "Müşterilerimizin %85'i hizmetlerimizden memnun kalarak, uzun vadeli işbirliği yapıyor."
    },
    {
      value: "70%",
      label: "Trafik Artışı",
      description: "Dijital pazarlama stratejilerimiz, müşterilerimizin web sitesi trafiğini ortalama %70 artırıyor."
    },
    {
      value: "65%",
      label: "Dönüşüm Oranı",
      description: "Reklam kampanyalarımız, sektör ortalamasının üzerinde %65 dönüşüm oranı sağlıyor."
    },
    {
      value: "90%",
      label: "Sosyal Medya Etkileşimi",
      description: "Sosyal medya yönetimimiz, markaların etkileşim oranlarını %90'a kadar artırıyor."
    }
  ];

  // Industry statistics
  const statistics = [
    { value: "50+", label: "Mutlu Müşteri" },
    { value: "120+", label: "Tamamlanan Proje" },
    { value: "85%", label: "Müşteri Devamlılığı" },
    { value: "15+", label: "Sektör Deneyimi" }
  ];

  return (
    <main className="min-h-screen pb-16">
      {/* Hero Section - Modern */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10 pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-6 shadow-lg">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">Başarı Hikayeleri</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Referanslarımız
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              Markalarla birlikte çıktığımız yolculukta elde ettiğimiz başarılar ve müşterilerimizle kurduğumuz güçlü ilişkiler.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section - Modern */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
              {statistics.map((stat, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-blue-100 hover:border-blue-300">
                  <p className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 inline-block text-transparent bg-clip-text mb-2">{stat.value}</p>
                  <p className="text-gray-700 font-semibold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 mb-6">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                <span className="font-medium">Müşteri Yorumları</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
                Müşterilerimiz Ne Diyor?
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Karasu Medya olarak, müşterilerimizin başarılarını kendi başarımız olarak görüyoruz. 
                İşte birlikte çalıştığımız markalardan bazılarının görüşleri.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => {
                let gradientClass = "";
                let starColor = "";
                
                switch(testimonial.color) {
                  case "blue":
                    gradientClass = "from-blue-500 to-indigo-600";
                    starColor = "text-blue-500";
                    break;
                  case "red":
                    gradientClass = "from-red-500 to-pink-600";
                    starColor = "text-red-500";
                    break;
                  case "green":
                    gradientClass = "from-green-500 to-emerald-600";
                    starColor = "text-green-500";
                    break;
                  case "purple":
                    gradientClass = "from-purple-500 to-violet-600";
                    starColor = "text-purple-500";
                    break;
                  case "indigo":
                    gradientClass = "from-indigo-500 to-blue-600";
                    starColor = "text-indigo-500";
                    break;
                  case "teal":
                    gradientClass = "from-teal-500 to-cyan-600";
                    starColor = "text-teal-500";
                    break;
                  default:
                    gradientClass = "from-blue-500 to-indigo-600";
                    starColor = "text-blue-500";
                }
                
                return (
                  <div key={index} className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r opacity-50 group-hover:opacity-100 transition duration-300 blur-sm"></div>
                    <div className="relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                      {/* Quote Icon */}
                      <div className="absolute top-4 right-4 opacity-10">
                        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                      
                      {/* Rating Stars */}
                      <div className={`flex mb-4 ${starColor}`}>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                      
                      {/* Quote */}
                      <p className="text-gray-700 italic mb-4">
                        &quot;{testimonial.quote}&quot;
                      </p>
                      
                      {/* Client Info */}
                      <div className="mt-auto pt-4 border-t border-gray-100">
                        <div className="flex justify-between items-end">
                          <div>
                            <h3 className="font-bold text-gray-900">{testimonial.person}</h3>
                            <p className="text-sm text-gray-500">{testimonial.title}</p>
                          </div>
                          <div>
                            <span className={`text-xs font-medium px-2 py-1 rounded-full bg-gradient-to-r ${gradientClass} text-white`}>
                              {testimonial.industry}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-16 text-center">
              <Link 
                href="/iletisim" 
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 inline-flex items-center shadow-lg"
              >
                <span>Sizin Başarı Hikayeleri Oluşturalım</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Başarı Metrikleri - Modern */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 mb-6">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span className="font-semibold text-sm">Başarı Metriklerimiz</span>
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 inline-block text-transparent bg-clip-text mb-4">
                Rakamlarla Başarılarımız
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Dijital pazarlama stratejilerimizin müşterilerimize sağladığı somut faydalar ve ölçülebilir sonuçlar.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {successMetrics.map((metric, index) => (
                <div key={index} className="group bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-blue-100 hover:border-blue-300">
                  <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 inline-block text-transparent bg-clip-text mb-4">{metric.value}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{metric.label}</h3>
                  <p className="text-gray-600 leading-relaxed">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Neden Bizi Tercih Etmelisiniz */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 mb-6">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium">Fark Yaratan Hizmet</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
                Neden Bizi Tercih Etmelisiniz?
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Karasu Medya olarak, dijital dünyada markanızın öne çıkması için fark yaratan çözümler sunuyoruz.
                İşte bizi tercih etmeniz için nedenler:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Yaratıcı Çözümler</h3>
                <p className="text-gray-600">
                  Sıradanın ötesine geçen yaratıcı çözümlerle markanızı rakiplerinden ayırıyoruz. Her proje için özel olarak tasarlanmış stratejiler geliştiriyoruz.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sonuç Odaklı Yaklaşım</h3>
                <p className="text-gray-600">
                  Sadece görünüş değil, sonuç odaklı çalışıyoruz. Dijital stratejilerimiz, ölçülebilir sonuçlar ve gerçek büyüme sağlamak üzere tasarlanmıştır.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Uzman Ekip</h3>
                <p className="text-gray-600">
                  Dijital pazarlama, tasarım ve teknoloji alanlarında uzmanlaşmış ekibimiz, markanızın dijital başarısı için çalışıyor. Güncel trendleri ve teknolojileri yakından takip ediyoruz.
                </p>
              </div>
            </div>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start mb-6">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg p-3 text-white mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Hızlı ve Etkili Çözümler</h3>
                    <p className="text-gray-600">
                      Zamanın değerli olduğunu biliyoruz. Projelerinizi hızlı bir şekilde hayata geçirirken, kaliteden ödün vermiyoruz. Etkili çözümlerimizle markanızın dijital dünyada hızla yükselmesini sağlıyoruz.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start mb-6">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg p-3 text-white mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Maliyet Etkili Stratejiler</h3>
                    <p className="text-gray-600">
                      Her bütçeye uygun çözümler sunuyoruz. Dijital pazarlama stratejilerimiz, maksimum geri dönüş sağlamak üzere tasarlanmıştır. Yatırımınızın karşılığını almanız bizim önceliğimizdir.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Modern */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sizin Başarı Hikayenizi de Yazalım
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Dijital dünyada markanızı bir adım öne çıkarmak için bizimle iletişime geçin.
            </p>
            <Link 
              href="/iletisim" 
              className="px-10 py-5 bg-white text-blue-700 font-bold rounded-2xl hover:bg-blue-50 transition-all duration-300 inline-flex items-center shadow-2xl hover:shadow-blue-200/50 hover:scale-105 text-lg"
            >
              <span>Ücretsiz Danışmanlık Alın</span>
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