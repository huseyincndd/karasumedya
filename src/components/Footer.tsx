import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-6 lg:px-8 py-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-14 h-14 overflow-hidden rounded-2xl shadow-lg">
                <Image 
                  src="https://villaqrmenu.b-cdn.net/447297083_1488295202123950_879512158476665056_n.jpg"
                  alt="Karasu Logo"
                  width={56}
                  height={56}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 inline-block text-transparent bg-clip-text">KARASU</h3>
                <p className="text-xs text-gray-400 tracking-wider">REKLAM & TANITIM</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 text-sm">
              Profesyonel reklam hizmetleri ve sosyal medya yönetimi ile markanızı bir adım öne taşıyın.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-3">
              <a 
                href="https://www.instagram.com/karasureklamajansi/" 
                target="_blank"
                rel="noopener noreferrer"
                className="group w-11 h-11 bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl flex items-center justify-center hover:from-blue-600 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/karasureklamajansi" 
                target="_blank"
                rel="noopener noreferrer"
                className="group w-11 h-11 bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl flex items-center justify-center hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-pink-500/50 hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full mr-3"></span>
              Hızlı Bağlantılar
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="group flex items-center text-gray-400 hover:text-white transition-all duration-300">
                  <svg className="w-4 h-4 mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Ana Sayfa</span>
                </Link>
              </li>
              <li>
                <Link href="/hizmetler" className="group flex items-center text-gray-400 hover:text-white transition-all duration-300">
                  <svg className="w-4 h-4 mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Hizmetlerimiz</span>
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="group flex items-center text-gray-400 hover:text-white transition-all duration-300">
                  <svg className="w-4 h-4 mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Hakkımızda</span>
                </Link>
              </li>
              <li>
                <Link href="/referanslar" className="group flex items-center text-gray-400 hover:text-white transition-all duration-300">
                  <svg className="w-4 h-4 mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Referanslar</span>
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="group flex items-center text-gray-400 hover:text-white transition-all duration-300">
                  <svg className="w-4 h-4 mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">İletişim</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full mr-3"></span>
              Hizmetlerimiz
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/hizmetler/sosyal-medya" className="group flex items-center text-gray-400 hover:text-white transition-all duration-300">
                  <svg className="w-4 h-4 mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Sosyal Medya</span>
                </Link>
              </li>
              <li>
                <Link href="/hizmetler/dijital-pazarlama" className="group flex items-center text-gray-400 hover:text-white transition-all duration-300">
                  <svg className="w-4 h-4 mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Dijital Pazarlama</span>
                </Link>
              </li>
              <li>
                <Link href="/hizmetler/grafik" className="group flex items-center text-gray-400 hover:text-white transition-all duration-300">
                  <svg className="w-4 h-4 mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Grafik Tasarım</span>
                </Link>
              </li>
              <li>
                <Link href="/hizmetler/matbaa" className="group flex items-center text-gray-400 hover:text-white transition-all duration-300">
                  <svg className="w-4 h-4 mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Matbaa Hizmetleri</span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full mr-3"></span>
              İletişim
            </h3>
            <address className="not-italic text-gray-400 space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl flex items-center justify-center group-hover:from-blue-500 group-hover:to-indigo-500 transition-all duration-300 flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-sm leading-relaxed pt-2">Yalova, Türkiye</p>
              </div>
              
              <div className="flex items-start space-x-3 group">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl flex items-center justify-center group-hover:from-blue-500 group-hover:to-indigo-500 transition-all duration-300 flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+905314732377" className="text-sm hover:text-white transition-colors pt-2">+90 531 473 23 77</a>
              </div>
              
              <div className="flex items-start space-x-3 group">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl flex items-center justify-center group-hover:from-blue-500 group-hover:to-indigo-500 transition-all duration-300 flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:info@karasureklamajansi.com.tr" className="text-sm hover:text-white transition-colors pt-2 break-all">info@karasureklamajansi.com.tr</a>
              </div>
            </address>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} <span className="font-semibold bg-gradient-to-r from-blue-400 to-indigo-400 inline-block text-transparent bg-clip-text">Karasu Reklam Ajansı</span>. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="/iletisim" className="hover:text-white transition-colors">Gizlilik Politikası</Link>
              <span className="text-gray-600">•</span>
              <Link href="/iletisim" className="hover:text-white transition-colors">Kullanım Şartları</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 