"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function DijitalReklam() {
  const adPlatforms = [
    {
      title: "Google Ads",
      description: "Arama, görüntülü reklam ağı ve YouTube reklamları ile potansiyel müşterilerinize ulaşın.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      color: "bg-indigo-100",
      textColor: "text-indigo-600"
    },
    {
      title: "Facebook & Instagram Ads",
      description: "Hedef kitle odaklı kampanyalar ile sosyal medya kullanıcılarına ulaşın.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      color: "bg-blue-100",
      textColor: "text-blue-600"
    },
    {
      title: "TikTok Ads",
      description: "Genç kullanıcılara yaratıcı içeriklerle ulaşın ve markanızı tanıtın.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14v-4z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14a3 3 0 100-6 3 3 0 000 6z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "bg-gray-800",
      textColor: "text-white"
    }
  ];

  const features = [
    {
      title: "Hedef Kitle Analizi",
      description: "Potansiyel müşterilerinizi demografik, coğrafi ve davranışsal verilerle tanımlıyoruz.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      title: "Anahtar Kelime Araştırması",
      description: "Sektörünüze ve ürünlerinize uygun anahtar kelimeleri belirleyerek, arama odaklı reklam kampanyaları oluşturuyoruz.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
        </svg>
      )
    },
    {
      title: "Reklam Metni Oluşturma",
      description: "Hedef kitlenizi harekete geçiren, dikkat çekici ve dönüşüm odaklı reklam metinleri yazıyoruz.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    },
    {
      title: "Rekabet Analizi",
      description: "Rakiplerinizin reklam stratejilerini inceleyerek, sizin için fırsatlar yaratıyoruz.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "A/B Testleri",
      description: "Farklı reklam metinleri, görseller ve hedefleme seçenekleri ile sürekli testler yaparak, en iyi performansı yakalıyoruz.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      )
    },
    {
      title: "Performans Takibi ve Optimizasyon",
      description: "Reklam kampanyalarınızın performansını sürekli izleyerek, ROI'nizi maksimize edecek optimizasyonlar yapıyoruz.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  const metrics = [
    { name: "Dönüşüm Oranı", value: "+85%" },
    { name: "Reklam Harcaması Getirisi", value: "+120%" },
    { name: "Tıklama Oranı", value: "+60%" },
    { name: "Maliyet Tasarrufu", value: "-30%" }
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
              backgroundImage: "url('https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/80 via-indigo-800/70 to-purple-900/80"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 pt-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Dijital Reklam Yönetimi
            </h1>
            <p className="text-base md:text-lg text-indigo-100 mb-6">
              Hedefli dijital reklam kampanyaları ile markanızın görünürlüğünü artırıyor, 
              potansiyel müşterilerinize doğrudan ulaşıyoruz.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/iletisim" 
                className="px-5 py-2.5 bg-white text-indigo-700 font-medium rounded-lg hover:bg-indigo-50 transition-colors duration-300 inline-flex items-center shadow-lg"
              >
                <span>Hemen Teklif Alın</span>
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
                <div className="bg-indigo-50 rounded-lg p-2 inline-block mb-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Doğru Hedef Kitleye Doğru Mesajla Ulaşın
                </h2>
                <p className="text-gray-600 mb-6">
                  Dijital reklam yönetimi, markanızın doğru zamanda, doğru yerde ve doğru kişilere görünmesini sağlar. Karasu Medya olarak, veri odaklı stratejilerle reklam kampanyalarınızı yönetiyor, ROI&apos;nizi maksimize ediyoruz.
                </p>
                <p className="text-gray-600 mb-6">
                  Her markanın ihtiyaçları ve hedefleri farklıdır. Bu nedenle size özel reklam stratejileri geliştiriyor, bütçenizi en verimli şekilde kullanmanızı sağlıyoruz. Google Ads, sosyal medya reklamları ve diğer platformlarda uzmanlaşmış ekibimizle yanınızdayız.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {metrics.map((metric, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-indigo-600 text-3xl font-bold">{metric.value}</p>
                      <p className="text-gray-600 text-sm">{metric.name}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-xl overflow-hidden shadow-xl h-96 bg-gradient-to-br from-indigo-100 to-indigo-200 p-2">
                  <div className="rounded-lg overflow-hidden h-full">
                    <Image 
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                      alt="Dijital Reklam Yönetimi" 
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Platforms Section */}
      <section className="py-16 bg-gradient-to-b from-indigo-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Yönettiğimiz Reklam Platformları
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Her platformun kendine özgü özellikleri ve avantajları vardır. Hedeflerinize uygun platformları seçerek, kampanyalarınızı optimal şekilde yönetiyoruz.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {adPlatforms.map((platform, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex gap-6">
                  <div className={`w-14 h-14 ${platform.color} rounded-xl flex-shrink-0 flex items-center justify-center ${platform.textColor}`}>
                    {platform.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{platform.title}</h3>
                    <p className="text-gray-600">{platform.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Dijital Reklam Hizmetlerimiz
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Kapsamlı dijital reklam hizmetlerimizle markanızın hedeflerine ulaşmasını sağlıyoruz.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl border border-gray-200 hover:border-indigo-200 hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study / Results Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-indigo-50 rounded-lg p-2 inline-block mb-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Sonuç Odaklı Yaklaşım
                </h2>
                <p className="text-gray-600 mb-6">
                  Yaptığımız tüm çalışmalarda somut sonuçlara odaklanıyoruz. Kampanyalarınızın performansını düzenli olarak ölçüyor, analiz ediyor ve optimize ediyoruz.
                </p>
                <p className="text-gray-600 mb-6">
                  Başarı hikayelerimiz ve elde ettiğimiz sonuçlar, stratejilerimizin etkinliğini kanıtlıyor. Size de aynı başarıyı sağlamak için hazırız.
                </p>
                <Link 
                  href="/referanslar" 
                  className="text-indigo-600 font-medium hover:text-indigo-800 inline-flex items-center"
                >
                  <span>Başarı Hikayelerimizi İnceleyin</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className="lg:col-span-3 bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Aylık Ortalama Kampanya Sonuçları</h3>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-gray-700">Tıklama Oranı</span>
                        <span className="text-indigo-600 font-medium">4.8%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-gray-700">Dönüşüm Oranı</span>
                        <span className="text-indigo-600 font-medium">3.2%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-gray-700">Reklam Harcaması Getirisi (ROAS)</span>
                        <span className="text-indigo-600 font-medium">4.5x</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-gray-700">Müşteri Başı Edinme Maliyeti (CAC)</span>
                        <span className="text-indigo-600 font-medium">-30%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Dijital Reklam Kampanyaları İçin Hemen Teklif Alın
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Markanızın dijital reklamlarda öne çıkması için uzman ekibimizle görüşün.
            </p>
            <Link 
              href="/iletisim" 
              className="px-8 py-4 bg-white text-indigo-700 font-medium rounded-xl hover:bg-indigo-50 transition-colors duration-300 inline-flex items-center shadow-lg"
            >
              <span>Hemen iletişime geçin</span>
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