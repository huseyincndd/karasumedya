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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      gradient: "from-indigo-600 to-purple-600"
    },
    {
      title: "Facebook & Instagram Ads",
      description: "Hedef kitle odaklı kampanyalar ile sosyal medya kullanıcılarına ulaşın.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      title: "TikTok Ads",
      description: "Genç kullanıcılara yaratıcı içeriklerle ulaşın ve markanızı tanıtın.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14v-4z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14a3 3 0 100-6 3 3 0 000 6z" />
        </svg>
      ),
      gradient: "from-gray-800 to-gray-600"
    }
  ];

  const features = [
    {
      title: "Hedef Kitle Analizi",
      description: "Potansiyel müşterilerinizi demografik, coğrafi ve davranışsal verilerle tanımlıyoruz.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      title: "Anahtar Kelime Araştırması",
      description: "Sektörünüze ve ürünlerinize uygun anahtar kelimeleri belirleyerek, arama odaklı reklam kampanyaları oluşturuyoruz.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
        </svg>
      )
    },
    {
      title: "Reklam Metni Oluşturma",
      description: "Hedef kitlenizi harekete geçiren, dikkat çekici ve dönüşüm odaklı reklam metinleri yazıyoruz.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    },
    {
      title: "Rekabet Analizi",
      description: "Rakiplerinizin reklam stratejilerini inceleyerek, sizin için fırsatlar yaratıyoruz.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "A/B Testleri",
      description: "Farklı reklam metinleri, görseller ve hedefleme seçenekleri ile sürekli testler yaparak, en iyi performansı yakalıyoruz.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      )
    },
    {
      title: "Performans Takibi ve Optimizasyon",
      description: "Reklam kampanyalarınızın performansını sürekli izleyerek, ROI&apos;nizi maksimize edecek optimizasyonlar yapıyoruz.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  const metrics = [
    { name: "Dönüşüm Oranı", value: "+85%", color: "from-green-600 to-emerald-600" },
    { name: "Reklam Harcaması Getirisi", value: "+120%", color: "from-blue-600 to-indigo-600" },
    { name: "Tıklama Oranı", value: "+60%", color: "from-purple-600 to-pink-600" },
    { name: "Maliyet Tasarrufu", value: "-30%", color: "from-amber-600 to-orange-600" }
  ];

  return (
    <main className="min-h-screen pb-16">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-800">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10 pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-6 shadow-lg">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span className="font-medium">Dijital Reklam Yönetimi</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Dijital Pazarlama
            </h1>
            <p className="text-lg md:text-xl text-indigo-100 mb-8 leading-relaxed">
              Hedefli dijital reklam kampanyaları ile markanızın görünürlüğünü artırıyor, 
              potansiyel müşterilerinize doğrudan ulaşıyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 mb-6">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <span className="font-semibold text-sm">ROI Odaklı Yaklaşım</span>
                </div>
                
                <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 inline-block text-transparent bg-clip-text mb-6">
                  Doğru Hedef Kitleye Doğru Mesajla Ulaşın
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  Dijital reklam yönetimi, markanızın doğru zamanda, doğru yerde ve doğru kişilere görünmesini sağlar. Karasu Medya olarak, veri odaklı stratejilerle reklam kampanyalarınızı yönetiyor, ROI&apos;nizi maksimize ediyoruz.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  Her markanın ihtiyaçları ve hedefleri farklıdır. Bu nedenle size özel reklam stratejileri geliştiriyor, bütçenizi en verimli şekilde kullanmanızı sağlıyoruz. Google Ads, sosyal medya reklamları ve diğer platformlarda uzmanlaşmış ekibimizle yanınızdayız.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {metrics.map((metric, index) => (
                    <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200 hover:border-indigo-300 transition-all duration-300 hover:shadow-lg">
                      <p className={`text-3xl font-bold bg-gradient-to-r ${metric.color} inline-block text-transparent bg-clip-text`}>{metric.value}</p>
                      <p className="text-gray-600 text-sm mt-1">{metric.name}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl blur-2xl opacity-20"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                    alt="Dijital Reklam Yönetimi" 
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

      {/* Ad Platforms Section */}
      <section className="py-24 bg-gradient-to-b from-indigo-50 via-purple-50 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 inline-block text-transparent bg-clip-text mb-4">
                Yönettiğimiz Reklam Platformları
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Her platformun kendine özgü özellikleri ve avantajları vardır. Hedeflerinize uygun platformları seçerek, kampanyalarınızı optimal şekilde yönetiyoruz.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {adPlatforms.map((platform, index) => (
                <div key={index} className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-indigo-200">
                  <div className={`w-16 h-16 bg-gradient-to-br ${platform.gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {platform.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{platform.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{platform.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 inline-block text-transparent bg-clip-text mb-4">
                Dijital Reklam Hizmetlerimiz
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Kapsamlı dijital reklam hizmetlerimizle markanızın hedeflerine ulaşmasını sağlıyoruz.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl border border-indigo-100 hover:border-indigo-300 hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-800">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Dijital Reklam Kampanyaları İçin Hemen Teklif Alın
            </h2>
            <p className="text-xl text-indigo-100 mb-10 leading-relaxed">
              Markanızın dijital reklamlarda öne çıkması için uzman ekibimizle görüşün.
            </p>
            <Link 
              href="/iletisim" 
              className="px-10 py-5 bg-white text-indigo-700 font-bold rounded-2xl hover:bg-indigo-50 transition-all duration-300 inline-flex items-center shadow-2xl hover:shadow-indigo-200/50 hover:scale-105 text-lg"
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
