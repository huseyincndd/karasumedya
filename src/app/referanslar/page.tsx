"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function Referanslar() {
  // Featured clients with testimonials
  const testimonials = [
    {
      client: "Metropol İnşaat",
      logo: "https://dummyimage.com/150x80/0047ab/ffffff&text=Metropol",
      quote: "Karasu Medya ile çalışmaya başladıktan sonra, sosyal medya hesaplarımızdaki etkileşim oranımız %50'den fazla arttı. Profesyonel ekipleri ve stratejik yaklaşımları sayesinde dijital varlığımız güçlendi.",
      person: "Mehmet Koç",
      title: "Pazarlama Direktörü",
      image: "https://randomuser.me/api/portraits/men/42.jpg",
      industry: "İnşaat",
      services: ["Sosyal Medya Yönetimi", "Dijital Pazarlama"]
    },
    {
      client: "Lezzet Restoran Zinciri",
      logo: "https://dummyimage.com/150x80/e74c3c/ffffff&text=Lezzet",
      quote: "İçerik stratejisi ve profesyonel fotoğraf çekimleri sayesinde markamızın dijital dünyada duruşu tamamen değişti. Karasu Medya ile yaptığımız çalışma sonucu online siparişlerimiz %70 arttı.",
      person: "Zeynep Yılmaz",
      title: "Genel Müdür",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      industry: "Yiyecek & İçecek",
      services: ["İçerik Üretimi", "Sosyal Medya Yönetimi"]
    },
    {
      client: "TeknoPlus",
      logo: "https://dummyimage.com/150x80/3498db/ffffff&text=TeknoPlus",
      quote: "Karasu Medya'nın dijital pazarlama stratejileri ve Google Ads kampanyaları sayesinde web sitemizin trafik hacmi 3 katına çıktı ve dönüşüm oranımız %25 arttı.",
      person: "Ali Kaya",
      title: "Dijital Pazarlama Yöneticisi",
      image: "https://randomuser.me/api/portraits/men/36.jpg",
      industry: "Teknoloji",
      services: ["Dijital Pazarlama", "SEO"]
    },
  ];

  // Project showcases
  const projectShowcases = [
    {
      client: "Modavizyon",
      title: "E-Ticaret İçerik Stratejisi",
      description: "Modavizyon için hazırladığımız kapsamlı içerik stratejisi ve sosyal medya planlaması ile markayı sektörün öncülerinden biri haline getirdik.",
      image: "https://images.pexels.com/photos/6169/woman-hand-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      results: [
        { label: "Takipçi Artışı", value: "+240%" },
        { label: "E-Ticaret Satışları", value: "+85%" },
        { label: "Marka Bilinirliği", value: "+120%" }
      ],
      color: "blue"
    },
    {
      client: "EcoBiz",
      title: "Kurumsal Kimlik Yenileme",
      description: "EcoBiz'in kurumsal kimliğini yenileyerek, modern ve sürdürülebilir değerlerini yansıtan yeni bir marka imajı oluşturduk.",
      image: "https://images.pexels.com/photos/6956/person-woman-apple-laptop.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      results: [
        { label: "Marka Algısı", value: "+95%" },
        { label: "Web Sitesi Trafiği", value: "+70%" },
        { label: "Müşteri Memnuniyeti", value: "+65%" }
      ],
      color: "green"
    },
    {
      client: "SportActive",
      title: "Dijital Reklam Kampanyası",
      description: "SportActive için özel olarak hazırladığımız dijital reklam kampanyası ile yeni spor merkezlerinin açılışını duyurduk ve üyelik kayıtlarında rekor kırdık.",
      image: "https://images.pexels.com/photos/669584/pexels-photo-669584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      results: [
        { label: "Reklam Etkileşimi", value: "+130%" },
        { label: "Üyelik Kayıtları", value: "+95%" },
        { label: "ROI", value: "4.5x" }
      ],
      color: "purple"
    }
  ];

  // Client logos
  const clientLogos = [
    "https://dummyimage.com/180x90/0047ab/ffffff&text=Marka1",
    "https://dummyimage.com/180x90/e74c3c/ffffff&text=Marka2",
    "https://dummyimage.com/180x90/3498db/ffffff&text=Marka3",
    "https://dummyimage.com/180x90/2ecc71/ffffff&text=Marka4",
    "https://dummyimage.com/180x90/9b59b6/ffffff&text=Marka5",
    "https://dummyimage.com/180x90/f1c40f/ffffff&text=Marka6",
    "https://dummyimage.com/180x90/1abc9c/ffffff&text=Marka7",
    "https://dummyimage.com/180x90/34495e/ffffff&text=Marka8",
    "https://dummyimage.com/180x90/d35400/ffffff&text=Marka9",
    "https://dummyimage.com/180x90/8e44ad/ffffff&text=Marka10",
    "https://dummyimage.com/180x90/2c3e50/ffffff&text=Marka11",
    "https://dummyimage.com/180x90/27ae60/ffffff&text=Marka12",
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
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
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
              Referanslarımız
            </h1>
            <p className="text-base md:text-lg text-blue-100 mb-6">
              Markalarla birlikte çıktığımız yolculukta elde ettiğimiz başarılar ve müşterilerimizle kurduğumuz güçlü ilişkiler.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/iletisim" 
                className="px-5 py-2.5 bg-white text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-300 inline-flex items-center shadow-lg"
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

      {/* Statistics Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
              {statistics.map((stat, index) => (
                <div key={index} className="p-6 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                  <p className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.value}</p>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="bg-blue-50 rounded-lg p-2 inline-block mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Müşteri Hikayelerimiz
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Karasu Medya olarak, müşterilerimizin başarılarını kendi başarımız olarak görüyoruz. 
                İşte birlikte çalıştığımız markalardan bazılarının dijital başarı hikayeleri.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-12">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className={`rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-white flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="md:w-1/3 relative h-64 md:h-auto bg-gradient-to-br from-blue-900 to-indigo-800 p-8 flex flex-col justify-center items-center text-center">
                    <div className="bg-white p-4 rounded-lg mb-6 w-40 h-20 flex items-center justify-center">
                      <img 
                        src={testimonial.logo} 
                        alt={`${testimonial.client} logo`} 
                        className="max-h-12 max-w-full"
                      />
                    </div>
                    <div className="mb-4 relative">
                      <div className="w-24 h-24 rounded-full overflow-hidden mx-auto border-4 border-white">
                        <Image 
                          src={testimonial.image} 
                          alt={testimonial.person} 
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{testimonial.person}</h3>
                    <p className="text-blue-100 text-sm mb-4">{testimonial.title}</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {testimonial.services.map((service, idx) => (
                        <span 
                          key={idx} 
                          className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-white/10 text-white whitespace-nowrap"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8 md:p-10 flex flex-col">
                    <div className="mb-6">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-blue-600">
                        {testimonial.client}
                      </h3>
                      <div className="flex mb-6">
                        <div className="text-blue-400 mr-1">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9.983 3v4.577c0 .553-.448 1-1 1H4.38c.637 2.12 2.167 3.4 4.365 4.73l-2.547 4.865C1.35 14.654.106 11.08 0 7.12V4c0-.553.447-1 1-1h7.983c.553 0 1 .447 1 1zm14.014 0v4.577c0 .553-.448 1-1 1h-4.603c.637 2.12 2.167 3.4 4.365 4.73l-2.547 4.865c-4.847-3.518-6.09-7.092-6.194-11.052V4c0-.553.447-1 1-1h7.984c.552 0 .999.447.999 1h-.004z" />
                          </svg>
                        </div>
                        <div className="text-gray-700 italic text-lg leading-relaxed">
                        &quot;{testimonial.quote}&quot;
                        </div>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <span>Sektör: {testimonial.industry}</span>
                      </div>
                      <Link 
                        href="/hizmetler" 
                        className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
                      >
                        <span>Benzer projeler için hizmetlerimizi inceleyin</span>
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
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

      {/* Project Showcases */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="bg-blue-100 rounded-lg p-2 inline-block mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Öne Çıkan Projelerimiz
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Her proje, müşterilerimizin ihtiyaçlarına göre özelleştirilmiş stratejiler ve yaratıcı çözümlerle hayata geçiriliyor.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projectShowcases.map((project, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full"
                >
                  <div className="h-56 relative overflow-hidden">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 hover:scale-110"
                    />
                    {project.color === "blue" && (
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent"></div>
                    )}
                    {project.color === "green" && (
                      <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 to-transparent"></div>
                    )}
                    {project.color === "purple" && (
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent"></div>
                    )}
                    <div className="absolute bottom-0 left-0 p-6 z-10">
                      <span className="text-xs text-white/80 uppercase tracking-wider font-medium mb-1 block">{project.client}</span>
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-gray-600 mb-6">{project.description}</p>
                    <div className="mt-auto">
                      <h4 className="text-sm font-medium text-gray-500 mb-3 uppercase tracking-wider">Sonuçlar</h4>
                      <div className="grid grid-cols-3 gap-4">
                        {project.results.map((result, idx) => (
                          <div key={idx} className="text-center">
                            {project.color === "blue" && (
                              <p className="text-lg font-bold text-blue-600 mb-1">{result.value}</p>
                            )}
                            {project.color === "green" && (
                              <p className="text-lg font-bold text-green-600 mb-1">{result.value}</p>
                            )}
                            {project.color === "purple" && (
                              <p className="text-lg font-bold text-purple-600 mb-1">{result.value}</p>
                            )}
                            <p className="text-xs text-gray-500">{result.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Güven Duyan Markalar
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Yüzlerce markaya hizmet verdik. İşte bize güvenen markalardan bazıları.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {clientLogos.map((logo, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300">
                  <Image src={logo} alt={`Client ${index + 1}`} width={72} height={36} className="max-h-12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Sizin Başarı Hikayenizi de Yazalım
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Dijital dünyada markanızı bir adım öne çıkarmak için bizimle iletişime geçin.
            </p>
            <Link 
              href="/iletisim" 
              className="px-8 py-4 bg-white text-blue-700 font-medium rounded-xl hover:bg-blue-50 transition-colors duration-300 inline-flex items-center shadow-lg"
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