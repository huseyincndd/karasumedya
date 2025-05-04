import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Video with Parallax Effect */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video 
            autoPlay 
            muted 
            loop 
            className="absolute min-w-full min-h-full object-cover scale-110"
            poster="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
          >
            <source src="https://cdn.pixabay.com/vimeo/328880139/digital-31526.mp4?width=1280&hash=d13f5e9f00e76f25cd72cf27613949546932e37f" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Premium Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-black/50 to-indigo-900/80 z-10"></div>
          
          {/* Animated Particles/Shapes */}
          <div className="absolute inset-0 z-20 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500 rounded-full mix-blend-screen filter blur-xl opacity-70 animate-float"></div>
            <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-purple-500 rounded-full mix-blend-screen filter blur-xl opacity-70 animate-float animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-indigo-500 rounded-full mix-blend-screen filter blur-xl opacity-70 animate-float animation-delay-4000"></div>
            <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-pink-500 rounded-full mix-blend-screen filter blur-xl opacity-70 animate-float animation-delay-3000"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative container mx-auto px-4 h-screen z-30 flex flex-col justify-center items-center text-center md:text-left md:items-start pt-20 md:pt-0">
          <div className="max-w-4xl">
            {/* Premium Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-4 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse mr-2"></span>
              <span className="text-sm font-medium uppercase tracking-wider">Dijital Pazarlamanın Lideri</span>
            </div>
            
            {/* Dynamic Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white leading-tight animate-text-reveal">
              Sosyal Medyada <span className="relative inline-block">
                <span className="absolute -inset-1 w-full h-full bg-gradient-to-r from-blue-400 to-violet-500 rounded-lg blur-lg opacity-50"></span>
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-100">Sınırları Aşın</span>
              </span>
            </h1>
            
            {/* Enhanced Description */}
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl leading-relaxed font-light animate-fade-in">
              <span className="font-semibold text-blue-300">Karasu</span> ile markanızın dijital izini güçlendirin. 
              Veri odaklı stratejiler ve yaratıcı içeriklerle rakiplerinizden öne geçin.
            </p>
            
            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 mb-12 animate-slide-up">
              <Link
                href="/hizmetler"
                className="relative bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full font-medium overflow-hidden group focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-600 to-indigo-700"></span>
                <span className="relative flex items-center justify-center text-white px-8 py-3.5">
                  Hizmetlerimizi Keşfedin
                </span>
              </Link>
              <Link
                href="/iletisim"
                className="relative inline-flex h-[54px] overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,theme(colors.blue.400)_0%,theme(colors.purple.500)_50%,theme(colors.indigo.500)_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-transparent px-8 py-3 text-white backdrop-blur-3xl">
                  Ücretsiz Analiz Alın
                </span>
              </Link>
            </div>
          </div>
          
          {/* Floating elements for visual interest */}
          <div className="absolute right-10 top-1/3 hidden lg:block">
            <div className="w-72 h-72 relative opacity-80">
              <div className="absolute inset-0 rounded-full border border-white/20 animate-spin-slow"></div>
              <div className="absolute inset-[15px] rounded-full border border-white/20 animate-spin-slow animation-delay-1000 animation-reverse"></div>
              <div className="absolute inset-[30px] rounded-full border border-white/20 animate-spin-slow animation-delay-2000"></div>
              <div className="w-2 h-2 absolute top-0 left-1/2 -translate-x-1/2 rounded-full bg-blue-400"></div>
              <div className="w-2 h-2 absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full bg-indigo-400"></div>
              <div className="w-2 h-2 absolute top-1/2 -translate-y-1/2 left-0 rounded-full bg-purple-400"></div>
              <div className="w-2 h-2 absolute top-1/2 -translate-y-1/2 right-0 rounded-full bg-pink-400"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll down indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center">
          <span className="text-white text-xs font-light mb-2 opacity-80">Daha Fazlası</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full animate-scroll-down"></div>
          </div>
        </div>

        {/* Wave Transition - Fixed positioning for all screen sizes */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden z-20">
          <div className="w-[200%] relative">
            <div className="w-full animate-wave">
              <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 md:h-24 lg:h-32">
                <path d="M0,0 L0,120 L1200,120 L1200,0 C1050,60 900,100 750,80 C600,60 450,20 300,40 C150,60 100,80 0,0 Z" className="fill-white"></path>
              </svg>
            </div>
            <div className="w-full absolute top-0 left-0 animate-wave-slow opacity-60">
              <svg viewBox="0 0 1400 120" preserveAspectRatio="none" className="w-[120%] h-24 md:h-32 lg:h-40" style={{marginLeft: '-10%'}}>
                <path d="M0,0 L0,120 L1400,120 L1400,30 C1300,10 1200,50 1100,70 C1000,90 900,40 800,20 C700,0 600,40 500,60 C400,80 300,30 200,10 C100,0 50,20 0,0 Z" className="fill-white"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Karasu Hizmetleri Section */}
      <section className="relative bg-white pt-16 pb-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Markanızı Yukarı Taşıyoruz
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto">
              Karasu Medya olarak, markanızın dijital dünyada parlayan bir yıldız olması için çalışıyoruz. Modern pazarlama stratejileri ve yaratıcı içerik üretimi ile işletmenizi bir üst seviyeye taşıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Hizmet Kartları */}
            {[
              {
                title: "Sosyal Medya Yönetimi",
                description: "Profesyonel içerik üretimi ve topluluk yönetimi ile sosyal medya varlığınızı güçlendiriyoruz.",
                image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                ),
                tags: ["İçerik Yönetimi", "Topluluk Yönetimi", "Analitik Raporlama"],
                link: "/hizmetler/sosyal-medya",
                bgGradient: "from-blue-900/80",
                iconBg: "bg-blue-100",
                iconColor: "text-blue-600",
                titleColor: "text-blue-600",
                tagBg: "bg-blue-100",
                tagColor: "text-blue-800",
                buttonGradient: "from-blue-600 to-blue-700",
                buttonHover: "hover:from-blue-700 hover:to-blue-800"
              },
              {
                title: "İçerik Üretimi",
                description: "Markanıza özel, etkileyici ve özgün içerikler üreterek hedef kitlenizle güçlü bağlar kuruyoruz.",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                ),
                tags: ["Metin Yazarlığı", "Görsel İçerik", "Video Prodüksiyon"],
                link: "/hizmetler/icerik-uretimi",
                bgGradient: "from-purple-900/80",
                iconBg: "bg-purple-100",
                iconColor: "text-purple-600",
                titleColor: "text-purple-600",
                tagBg: "bg-purple-100",
                tagColor: "text-purple-800",
                buttonGradient: "from-purple-600 to-purple-700",
                buttonHover: "hover:from-purple-700 hover:to-purple-800"
              },
              {
                title: "Dijital Pazarlama",
                description: "Veri odaklı stratejilerle dijital pazarlama kampanyalarınızı yönetiyor, ROI'nizi maksimize ediyoruz.",
                image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                tags: ["SEO", "Google Ads", "Dönüşüm Optimizasyonu"],
                link: "/hizmetler/dijital-pazarlama",
                bgGradient: "from-pink-900/80",
                iconBg: "bg-pink-100",
                iconColor: "text-pink-600",
                titleColor: "text-pink-600",
                tagBg: "bg-pink-100",
                tagColor: "text-pink-800",
                buttonGradient: "from-pink-600 to-pink-700",
                buttonHover: "hover:from-pink-700 hover:to-pink-800"
              },
              {
                title: "Grafik Tasarım",
                description: "Etkileyici ve profesyonel tasarımlarla markanızın görsel dilini oluşturuyor, akılda kalıcılığını artırıyoruz.",
                image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                tags: ["Logo Tasarımı", "Sosyal Medya Görselleri", "Kurumsal Kimlik"],
                link: "/hizmetler/grafik",
                bgGradient: "from-indigo-900/80",
                iconBg: "bg-indigo-100",
                iconColor: "text-indigo-600",
                titleColor: "text-indigo-600",
                tagBg: "bg-indigo-100",
                tagColor: "text-indigo-800",
                buttonGradient: "from-indigo-600 to-indigo-700",
                buttonHover: "hover:from-indigo-700 hover:to-indigo-800"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden relative flex flex-col h-full">
                <div className="h-48 relative overflow-hidden">
                  <Image 
                    src={service.image}
                    alt={service.title}
                    layout="fill" 
                    objectFit="cover" 
                    className="group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.bgGradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <div className={`w-12 h-12 rounded-full ${service.iconBg} flex items-center justify-center mb-4`}>
                      <div className={service.iconColor}>
                        {service.icon}
                      </div>
                    </div>
                    <h3 className={`text-xl font-semibold mb-3 ${service.titleColor}`}>{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-2 mb-4 min-h-[56px]">
                      {service.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${service.tagBg} ${service.tagColor} whitespace-nowrap h-6`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link 
                      href={service.link} 
                      className={`inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r ${service.buttonGradient} text-white rounded-lg ${service.buttonHover} transition-colors duration-300 w-full`}
                    >
                      <span>Detaylı Bilgi</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col md:flex-row items-stretch bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 overflow-hidden relative">
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                Özel Çözümler
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Sizin İçin Neler Yapabiliriz?</h3>
              <p className="text-gray-600 mb-8 text-lg">
                Markanızın ihtiyaçlarına özel çözümler sunarak, dijital dünyada güçlü bir varlık göstermenize yardımcı oluyoruz. 
                <span className="block mt-4">Stratejik yaklaşımımız ve yaratıcı bakış açımızla fark yaratıyoruz.</span>
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/iletisim" 
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-colors duration-300 inline-flex items-center shadow-lg hover:shadow-blue-200/50"
                >
                  <span>Ücretsiz Danışmanlık Alın</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link 
                  href="/hizmetler" 
                  className="px-6 py-3 bg-white text-blue-600 border border-blue-200 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-300 inline-flex items-center"
                >
                  <span>Tüm Hizmetlerimiz</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 opacity-90 mix-blend-multiply"></div>
              <Image 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Profesyonel Ekip" 
                layout="fill" 
                objectFit="cover"
              />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-white text-center max-w-md">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold mb-2">Yenilikçi Fikirler</h4>
                  <p className="text-white/80 text-lg">
                    Her markanın benzersiz olduğuna inanıyoruz. İhtiyaçlarınıza özel, yaratıcı çözümler geliştiriyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Instagram Latest Posts */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50/50 relative overflow-hidden">
        {/* Enhanced Background Design */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-purple-100/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-100/20 to-transparent"></div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-96 bg-gradient-to-r from-pink-100/20 to-transparent"></div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-96 bg-gradient-to-l from-blue-100/20 to-transparent"></div>
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-100/50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-100/50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/2 left-1/2 w-64 h-64 bg-blue-100/50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          {/* Header Section */}
          <div className="text-center mb-16 relative">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm mb-6 border border-purple-500/20">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-sm opacity-25 animate-pulse"></div>
            <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="relative"
                />
              </div>
              <span className="text-gray-700 font-medium ml-3">@karasu</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Instagram&apos;da Bizi Takip Edin
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              En güncel projelerimiz ve dijital pazarlama trendleri için Instagram hesabımızı takip etmeyi unutmayın.
            </p>
          </div>
          
          {/* Instagram Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Instagram Post 1 */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="flex flex-col h-full">
                {/* Post Header */}
                <div className="flex items-center p-4 border-b border-gray-100">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3 ring-2 ring-pink-500/20">
                    <Image 
                      src="https://villaqrmenu.b-cdn.net/447297083_1488295202123950_879512158476665056_n.jpg" 
                      alt="Karasu"
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">karasu</p>
                    <p className="text-xs text-gray-500">Dijital Pazarlama Ajansı</p>
                  </div>
                  <div className="text-blue-500">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 1.5a.75.75 0 01.53.22l3.75 3.75a.75.75 0 01-1.06 1.06L12.75 4.06v11.19a.75.75 0 01-1.5 0V4.06L8.78 6.53a.75.75 0 01-1.06-1.06l3.75-3.75A.75.75 0 0112 1.5zm-8 8.75a.75.75 0 01.75-.75h3a.75.75 0 010 1.5H5.5v7.5h13v-7.5h-2.25a.75.75 0 010-1.5h3a.75.75 0 01.75.75v9a.75.75 0 01-.75.75h-15a.75.75 0 01-.75-.75v-9z" />
                    </svg>
                  </div>
                </div>
                
                {/* Post Image */}
                <div className="relative aspect-[4/5]">
                  <Image 
                    src="https://villaqrmenu.b-cdn.net/SaveClip.App_485053068_17958647699907109_1601222877764803663_n.jpg"
                    alt="Sosyal Medya Stratejisi"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <p className="text-white text-sm font-medium">Dijital dünyada öne çıkmanız için yanınızdayız! 🚀</p>
                    </div>
                  </div>
                </div>
                
                {/* Post Actions */}
                <div className="p-4 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <button className="text-gray-700 hover:text-red-500 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                      <button className="text-gray-700 hover:text-blue-500 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </button>
                      <button className="text-gray-700 hover:text-blue-500 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                      </button>
                    </div>
                    <button className="text-gray-700 hover:text-gray-900 transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                    </button>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 mb-1">123 beğeni</p>
                    <p className="text-sm text-gray-600"><span className="font-medium">karasu</span> Etkili sosyal medya stratejileriyle markanızı büyütün!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Instagram Post 2 */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="flex flex-col h-full">
                {/* Post Header */}
                <div className="flex items-center p-4 border-b border-gray-100">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3 ring-2 ring-pink-500/20">
                    <Image 
                      src="https://villaqrmenu.b-cdn.net/447297083_1488295202123950_879512158476665056_n.jpg" 
                      alt="Karasu"
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">karasu</p>
                    <p className="text-xs text-gray-500">Dijital Pazarlama Ajansı</p>
                  </div>
                  <div className="text-blue-500">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 1.5a.75.75 0 01.53.22l3.75 3.75a.75.75 0 01-1.06 1.06L12.75 4.06v11.19a.75.75 0 01-1.5 0V4.06L8.78 6.53a.75.75 0 01-1.06-1.06l3.75-3.75A.75.75 0 0112 1.5zm-8 8.75a.75.75 0 01.75-.75h3a.75.75 0 010 1.5H5.5v7.5h13v-7.5h-2.25a.75.75 0 010-1.5h3a.75.75 0 01.75.75v9a.75.75 0 01-.75.75h-15a.75.75 0 01-.75-.75v-9z" />
                    </svg>
                  </div>
                </div>
                
                {/* Post Image */}
                <div className="relative aspect-[4/5]">
                  <Image 
                    src="https://villaqrmenu.b-cdn.net/SaveClip.App_482411591_17956245527907109_8442636842984988232_n.jpg"
                    alt="Marka Bilinirliği"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <p className="text-white text-sm font-medium">Markanızı bir üst seviyeye taşıyoruz! ✨</p>
                    </div>
                  </div>
                </div>
                
                {/* Post Actions */}
                <div className="p-4 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <button className="text-gray-700 hover:text-red-500 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                      <button className="text-gray-700 hover:text-blue-500 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </button>
                      <button className="text-gray-700 hover:text-blue-500 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                      </button>
                    </div>
                    <button className="text-gray-700 hover:text-gray-900 transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                    </button>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 mb-1">207 beğeni</p>
                    <p className="text-sm text-gray-600"><span className="font-medium">karasu</span> Dijital pazarlamada fark yaratıyoruz!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Instagram Post 3 */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="flex flex-col h-full">
                {/* Post Header */}
                <div className="flex items-center p-4 border-b border-gray-100">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3 ring-2 ring-pink-500/20">
                    <Image 
                      src="https://villaqrmenu.b-cdn.net/447297083_1488295202123950_879512158476665056_n.jpg" 
                      alt="Karasu"
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">karasu</p>
                    <p className="text-xs text-gray-500">Dijital Pazarlama Ajansı</p>
                  </div>
                  <div className="text-blue-500">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 1.5a.75.75 0 01.53.22l3.75 3.75a.75.75 0 01-1.06 1.06L12.75 4.06v11.19a.75.75 0 01-1.5 0V4.06L8.78 6.53a.75.75 0 01-1.06-1.06l3.75-3.75A.75.75 0 0112 1.5zm-8 8.75a.75.75 0 01.75-.75h3a.75.75 0 010 1.5H5.5v7.5h13v-7.5h-2.25a.75.75 0 010-1.5h3a.75.75 0 01.75.75v9a.75.75 0 01-.75.75h-15a.75.75 0 01-.75-.75v-9z" />
                    </svg>
                  </div>
                </div>
                
                {/* Post Image */}
                <div className="relative aspect-[4/5]">
                  <Image 
                    src="https://villaqrmenu.b-cdn.net/SaveClip.App_485468072_17958647258907109_8430283204358700045_n.jpg"
                    alt="İçerik Stratejisi"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <p className="text-white text-sm font-medium">Sosyal medyada fark yaratın! 💫</p>
                    </div>
                  </div>
                </div>
                
                {/* Post Actions */}
                <div className="p-4 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <button className="text-gray-700 hover:text-red-500 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                      <button className="text-gray-700 hover:text-blue-500 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </button>
                      <button className="text-gray-700 hover:text-blue-500 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                      </button>
                    </div>
                    <button className="text-gray-700 hover:text-gray-900 transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                    </button>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 mb-1">349 beğeni</p>
                    <p className="text-sm text-gray-600"><span className="font-medium">karasu</span> İçerik stratejinizi güçlendirin!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 blur-3xl -z-10"></div>
            <Link 
              href="https://www.instagram.com/karasureklamajansi/" 
            target="_blank"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-1"
            >
              <span className="text-lg">Instagram&apos;da Takip Et</span>
              <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Müşteri Yorumları Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 mb-6">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-medium">Müşteri Memnuniyeti</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Müşterilerimiz Ne Diyor?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Müşterilerimizle kurduğumuz güçlü iş birlikleri ve onlara sunduğumuz katma değerli hizmetler hakkında görüşleri.
            </p>
          </div>

          {/* Testimonials Slider */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
                <div className="flex-1">
                  <div className="flex items-center gap-1 text-yellow-400 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed italic">
                    "Karasu Medya ile çalışmaya başladıktan sonra sosyal medya etkileşimlerimiz %120 arttı. Profesyonel yaklaşımları ve stratejik önerileri sayesinde marka bilinirliğimiz önemli ölçüde gelişti."
                  </p>
                </div>
                <div className="flex items-center mt-6 pt-6 border-t border-gray-100">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image 
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                      alt="Ayşe Yılmaz"
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Ayşe Yılmaz</h4>
                    <p className="text-gray-500 text-sm">Pazarlama Direktörü, TechSoft</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
                <div className="flex-1">
                  <div className="flex items-center gap-1 text-yellow-400 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed italic">
                    "E-ticaret sitemiz için SEO ve dijital reklam çalışmaları yapan Karasu ekibi, satışlarımızı ilk 3 ayda %85 artırmayı başardı. Verimli bütçe kullanımı ve şeffaf raporlama anlayışları için teşekkür ederiz."
                  </p>
                </div>
                <div className="flex items-center mt-6 pt-6 border-t border-gray-100">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                      alt="Mehmet Kaya"
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Mehmet Kaya</h4>
                    <p className="text-gray-500 text-sm">Genel Müdür, ModaVista</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
                <div className="flex-1">
                  <div className="flex items-center gap-1 text-yellow-400 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed italic">
                    "Karasu Medya'nın içerik üretim ekibi, markamızın sesini mükemmel bir şekilde yakaladı. Blog ve sosyal medya içeriklerimizin etkileşimleri arttı, organik erişimimiz genişledi. Yaratıcı ve sonuç odaklı yaklaşımları için teşekkürler."
                  </p>
                </div>
                <div className="flex items-center mt-6 pt-6 border-t border-gray-100">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image 
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                      alt="Zeynep Demir"
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Zeynep Demir</h4>
                    <p className="text-gray-500 text-sm">İçerik Yöneticisi, HealthPlus</p>
                  </div>
                </div>
              </div>
            </div>

            {/* View More Testimonials Link */}
            <div className="text-center mt-12">
              <Link 
                href="/referanslar"
                className="inline-flex items-center px-6 py-3 bg-blue-50 text-blue-700 font-medium rounded-lg hover:bg-blue-100 transition-colors duration-300"
              >
                <span>Tüm Müşteri Yorumlarını Görüntüle</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. About Us Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="opacity-10"
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-8">Farklı Düşün, Fark Yarat</h2>
            <p className="text-xl leading-relaxed mb-12">
              Dijitalleşen dünyada sizin en büyük yardımcınız karasu ile markanızı zirveye taşıyoruz.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AboutCard 
              title="Biz Kimiz"
              description="karasu Medya olarak, 10 yılı aşkın tecrübemiz ile markaların dijital dünyada güçlü bir şekilde var olmaları için çalışıyoruz."
              icon={
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              }
            />
            <AboutCard 
              title="Misyonumuz"
              description="İşletmenizin dijital varlığını güçlendirerek, hedef kitlenizle anlamlı ve sürdürülebilir ilişkiler kurmanızı sağlamak."
              icon={
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              }
            />
            <AboutCard 
              title="Vizyonumuz"
              description="Türkiye'nin lider dijital pazarlama ajansı olarak, global standartlarda yenilikçi çözümler sunarak sektöre öncülük etmek."
              icon={
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* 5. Referanslar */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Referanslarımız</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Birlikte çalıştığımız değerli markalar ve başarı hikayeleri.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {['Google', 'Amazon', 'Facebook', 'Twitter', 'LinkedIn', 'Shopify'].map((brand) => (
              <div key={brand} className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <Image
                  src={`https://www.vectorlogo.zone/logos/${brand.toLowerCase()}/${brand.toLowerCase()}-ar21.svg`}
                  alt={`${brand} logo`}
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link
              href="/referanslar"
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
            >
              <span>Tüm referanslarımızı görüntüleyin</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Teklif Al CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <svg className="absolute bottom-0 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="0.05" d="M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,240C672,213,768,171,864,149.3C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Projeniz İçin Hemen Teklif Alın
            </h2>
            <p className="text-xl text-blue-100 mb-12">
              Size özel çözümler için ekibimiz hızlıca dönüş yapacaktır.
            </p>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white text-sm font-medium mb-2">İsim Soyisim</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                      placeholder="İsim Soyisim"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white text-sm font-medium mb-2">E-posta</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                      placeholder="ornek@mail.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-white text-sm font-medium mb-2">Telefon</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="0555 555 55 55"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-white text-sm font-medium mb-2">Mesaj</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="Projeniz hakkında bilgi verin..."
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="px-8 py-4 bg-white text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-300"
                  >
                    Teklif Al
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// About Card Component
function AboutCard({ title, description, icon }: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-colors duration-300">
      <div className="bg-white/20 p-4 rounded-xl inline-block mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-blue-100 leading-relaxed">{description}</p>
    </div>
  );
}

