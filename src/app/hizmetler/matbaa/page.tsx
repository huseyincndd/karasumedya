"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function Matbaa() {
  const benefits = [
    {
      title: "Yüksek Kalite Baskı",
      description: "En son teknoloji baskı ekipmanlarımız ile markanıza yakışır kalitede materyaller üretiyoruz.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      title: "Hızlı Teslimat",
      description: "Acil işleriniz için hızlı üretim ve teslimat seçenekleri sunuyoruz, projelerinizin zamanında tamamlanmasını sağlıyoruz.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Özel Tasarım",
      description: "Markanızın kimliğine uygun, özel tasarım materyaller ile rakiplerinizden farklılaşmanızı sağlıyoruz.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Ekonomik Çözümler",
      description: "Her bütçeye uygun çözümler sunarak, matbaa ihtiyaçlarınızı karşılıyoruz.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const products = [
    {
      name: "Kartvizit",
      icon: "/images/business-card.svg",
      description: "Profesyonel görünüm için kaliteli kartvizitler"
    },
    {
      name: "Broşür",
      icon: "/images/brochure.svg",
      description: "Ürün ve hizmetlerinizi tanıtan etkileyici broşürler"
    },
    {
      name: "Katalog",
      icon: "/images/catalog.svg",
      description: "Ürün kataloğunuzu profesyonel şekilde basıyoruz"
    },
    {
      name: "Afiş",
      icon: "/images/poster.svg",
      description: "Dikkat çekici afişler ile etkinliklerinizi duyurun"
    },
    {
      name: "Davetiye",
      icon: "/images/invitation.svg",
      description: "Özel günleriniz için şık davetiyeler"
    },
    {
      name: "Promosyon Ürünleri",
      icon: "/images/promotional.svg",
      description: "Markalı promosyon ürünleri ile akılda kalın"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Tasarım ve Konsept",
      description: "İhtiyaçlarınızı dinliyor, markanıza uygun tasarım konseptleri geliştiriyoruz."
    },
    {
      number: "02",
      title: "Prova Baskı",
      description: "Onayınız için prova baskı hazırlıyor, gerekli düzeltmeleri yapıyoruz."
    },
    {
      number: "03",
      title: "Kalite Kontrol",
      description: "Üretim öncesi ve sonrası detaylı kalite kontrol yapıyoruz."
    },
    {
      number: "04",
      title: "Baskı ve Üretim",
      description: "Yüksek kaliteli ekipmanlarla baskı ve üretim sürecini gerçekleştiriyoruz."
    },
    {
      number: "05",
      title: "Son İşlemler",
      description: "Kesim, katlama, ciltleme gibi son işlemleri titizlikle uyguluyoruz."
    },
    {
      number: "06",
      title: "Teslimat",
      description: "Ürünlerinizi zamanında ve güvenli bir şekilde teslim ediyoruz."
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
              backgroundImage: "url('https://berkmatbaa.com.tr/assets/uploads/66544393001fd171679835555.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-teal-900/80 via-teal-800/70 to-teal-900/80"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 pt-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Matbaa Hizmetleri
            </h1>
            <p className="text-base md:text-lg text-teal-100 mb-6">
              Markanızın fiziksel materyallerini en yüksek kalitede üretiyor, 
              profesyonel görünümünüzü güçlendiriyoruz.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/iletisim" 
                className="px-5 py-2.5 bg-white text-teal-700 font-medium rounded-lg hover:bg-teal-50 transition-colors duration-300 inline-flex items-center shadow-lg"
              >
                <span>Teklif Alın</span>
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
                <div className="bg-teal-50 rounded-lg p-2 inline-block mb-4">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Kaliteli Baskı Çözümleri
                </h2>
                <p className="text-gray-600 mb-6">
                  Karasu Matbaa olarak, en son teknoloji baskı ekipmanlarımız ve uzman ekibimizle markanızın ihtiyaç duyduğu tüm basılı materyalleri üretiyoruz. Kartvizitlerden kataloglara, broşürlerden afişlere kadar her türlü baskı ihtiyacınızı karşılıyoruz.
                </p>
                <p className="text-gray-600 mb-6">
                  Yüksek kaliteli baskı, hızlı teslimat ve rekabetçi fiyatlarımızla, işletmenizin profesyonel görünümünü güçlendiriyoruz. Her proje için özel çözümler sunuyor, markanızın değerini artıracak basılı materyaller üretiyoruz.
                </p>
                <div className="flex items-center gap-4 text-gray-700">
                  <span className="flex items-center gap-2 text-sm">
                    <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Yüksek Kalite</span>
                  </span>
                  <span className="flex items-center gap-2 text-sm">
                    <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Hızlı Teslimat</span>
                  </span>
                  <span className="flex items-center gap-2 text-sm">
                    <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Uygun Fiyat</span>
                  </span>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-xl overflow-hidden shadow-xl h-96 bg-gradient-to-br from-teal-100 to-teal-200 p-2">
                  <div className="rounded-lg overflow-hidden h-full">
                    <Image 
                      src="https://berkmatbaa.com.tr/assets/uploads/66544393001fd171679835555.jpg" 
                      alt="Matbaa Hizmetleri" 
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
                Karasu Matbaa olarak, müşterilerimize en iyi hizmeti sunmak için sürekli kendimizi geliştiriyoruz. 
                İşte bizi tercih etmeniz için birkaç neden:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 text-teal-600">
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

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ürünlerimiz</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                İşletmenizin ihtiyaç duyduğu tüm basılı materyalleri en yüksek kalitede üretiyoruz.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-teal-50 p-6 rounded-xl hover:bg-teal-100 transition-colors duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-teal-600 shadow-sm">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
                      <p className="text-gray-600 text-sm">{product.description}</p>
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
                Projelerinizi en yüksek kalitede ve zamanında teslim etmek için sistematik bir süreç izliyoruz.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
                  <div className="absolute -top-2 -left-2 w-16 h-16 bg-teal-500 rounded-br-2xl flex items-center justify-center">
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

      {/* CTA Section */}
      <section className="py-16 bg-teal-600">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Matbaa İhtiyaçlarınız İçin Hemen Bizimle İletişime Geçin
            </h2>
            <p className="text-teal-100 mb-8 max-w-3xl mx-auto">
              Profesyonel ekibimiz, ihtiyaçlarınızı dinleyerek size özel çözümler sunmak için hazır.
              Hemen teklif alın, markanızı güçlendirecek materyalleri birlikte tasarlayalım.
            </p>
            <Link 
              href="/iletisim" 
              className="px-8 py-3 bg-white text-teal-700 font-medium rounded-lg hover:bg-teal-50 transition-colors duration-300 inline-flex items-center shadow-lg"
            >
              <span>Hemen Teklif Alın</span>
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
