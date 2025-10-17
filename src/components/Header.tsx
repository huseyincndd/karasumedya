"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full transition-all duration-700 ease-out z-50 ${
      scrolled 
        ? 'bg-white/85 backdrop-blur-2xl shadow-2xl' 
        : 'bg-transparent'
    }`}>
      {/* Gradient border effect */}
      <div className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200/50 to-transparent transition-opacity duration-700 ${
        scrolled ? 'opacity-100' : 'opacity-0'
      }`}></div>
      <div className="container mx-auto px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}>
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 z-10 group">
            <div className={`relative overflow-hidden rounded-2xl transition-all duration-500 shadow-lg group-hover:shadow-xl ${
              scrolled ? 'w-14 h-14' : 'w-16 h-16'
            }`}>
              <Image 
                src="https://villaqrmenu.b-cdn.net/447297083_1488295202123950_879512158476665056_n.jpg"
                alt="Karasu Logo"
                width={64}
                height={64}
                className="object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div>
              <h1 className={`font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 inline-block text-transparent bg-clip-text transition-all duration-500 ${
                scrolled ? 'text-2xl' : 'text-3xl'
              }`}>KARASU</h1>
              <p className={`text-xs font-medium tracking-widest -mt-1 transition-all duration-500 ${
                scrolled ? 'text-gray-600' : 'text-white drop-shadow-lg'
              }`}>REKLAM & TANITIM</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            <NavLink href="/" text="Ana Sayfa" scrolled={scrolled} />
            
            <div className="relative group">
              <button className={`px-5 py-2.5 rounded-xl font-medium flex items-center space-x-2 transition-all duration-300 ${
                scrolled 
                  ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                  : 'text-white hover:text-blue-100 hover:bg-white/10 backdrop-blur-sm'
              }`}>
                <span>Hizmetler</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <div className="bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl py-3 px-2 border border-gray-100">
                  <Link href="/hizmetler" className="block px-4 py-3 text-sm font-semibold text-gray-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 rounded-xl transition-all duration-200 border-b border-gray-100 mb-2">
                    <div className="flex items-center justify-between">
                      <span>Tüm Hizmetler</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                  <Link href="/hizmetler/sosyal-medya" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 rounded-xl transition-all duration-200">
                    Sosyal Medya Yönetimi
                  </Link>
                  <Link href="/hizmetler/dijital-pazarlama" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 rounded-xl transition-all duration-200">
                    Dijital Pazarlama
                  </Link>
                  <Link href="/hizmetler/icerik" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 rounded-xl transition-all duration-200">
                    İçerik Üretimi
                  </Link>
                  <Link href="/hizmetler/grafik" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 rounded-xl transition-all duration-200">
                    Grafik Tasarım
                  </Link>
                  <Link href="/hizmetler/matbaa" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 rounded-xl transition-all duration-200">
                    Matbaa Hizmetleri
                  </Link>
                  <Link href="/hizmetler/organizasyon" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 rounded-xl transition-all duration-200">
                    Organizasyon Hizmetleri
                  </Link>
                </div>
              </div>
            </div>
            
            <NavLink href="/hakkimizda" text="Hakkımızda" scrolled={scrolled} />
            <NavLink href="/referanslar" text="Referanslar" scrolled={scrolled} />
            <NavLink href="/basin" text="Basın" scrolled={scrolled} />
            <NavLink href="/iletisim" text="İletişim" scrolled={scrolled} />
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={`lg:hidden z-10 focus:outline-none p-2 rounded-xl transition-all duration-300 ${
              scrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10 backdrop-blur-sm'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="relative w-6 h-5">
              <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-out rounded-full ${isMenuOpen ? 'rotate-45 translate-y-2' : 'translate-y-0'}`}></span>
              <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-out rounded-full ${isMenuOpen ? 'opacity-0 translate-x-3' : 'opacity-100 translate-y-2'}`}></span>
              <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-out rounded-full ${isMenuOpen ? '-rotate-45 translate-y-2' : 'translate-y-4'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`fixed inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 backdrop-blur-2xl z-40 transform transition-all duration-500 ease-out ${
          isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="container mx-auto px-6 pt-24 pb-8 h-full overflow-y-auto">
          <div className="max-w-md mx-auto">
            <nav className="flex flex-col space-y-3">
              <MobileNavLink href="/" text="Ana Sayfa" onClick={() => setIsMenuOpen(false)} icon="home" />
              
              <div className="py-5 px-5 rounded-2xl bg-white/70 backdrop-blur-md border border-blue-200/50 shadow-lg">
                <h3 className="font-bold text-blue-700 text-xs mb-4 uppercase tracking-widest flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Hizmetlerimiz
                </h3>
                <div className="space-y-2">
                  <MobileNavLink href="/hizmetler" text="Tüm Hizmetler" onClick={() => setIsMenuOpen(false)} submenu />
                  <MobileNavLink href="/hizmetler/sosyal-medya" text="Sosyal Medya Yönetimi" onClick={() => setIsMenuOpen(false)} submenu />
                  <MobileNavLink href="/hizmetler/dijital-pazarlama" text="Dijital Pazarlama" onClick={() => setIsMenuOpen(false)} submenu />
                  <MobileNavLink href="/hizmetler/icerik" text="İçerik Üretimi" onClick={() => setIsMenuOpen(false)} submenu />
                  <MobileNavLink href="/hizmetler/grafik" text="Grafik Tasarım" onClick={() => setIsMenuOpen(false)} submenu />
                  <MobileNavLink href="/hizmetler/matbaa" text="Matbaa Hizmetleri" onClick={() => setIsMenuOpen(false)} submenu />
                  <MobileNavLink href="/hizmetler/organizasyon" text="Organizasyon Hizmetleri" onClick={() => setIsMenuOpen(false)} submenu />
                </div>
              </div>
              
              <MobileNavLink href="/hakkimizda" text="Hakkımızda" onClick={() => setIsMenuOpen(false)} icon="info" />
              <MobileNavLink href="/referanslar" text="Referanslar" onClick={() => setIsMenuOpen(false)} icon="star" />
              <MobileNavLink href="/basin" text="Basın" onClick={() => setIsMenuOpen(false)} icon="newspaper" />
              <MobileNavLink href="/iletisim" text="İletişim" onClick={() => setIsMenuOpen(false)} icon="mail" />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

function NavLink({ href, text, scrolled }: { href: string; text: string; scrolled: boolean }) {
  return (
    <Link 
      href={href} 
      className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 relative group ${
        scrolled 
          ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
          : 'text-white hover:text-blue-100 hover:bg-white/10 backdrop-blur-sm'
      }`}
    >
      {text}
      <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-4/5 transform -translate-x-1/2"></span>
    </Link>
  );
}

function MobileNavLink({ href, text, onClick, icon, submenu = false }: { href: string; text: string; onClick: () => void; icon?: string; submenu?: boolean }) {
  const getIcon = () => {
    switch(icon) {
      case 'home':
        return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />;
      case 'info':
        return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />;
      case 'star':
        return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />;
      case 'newspaper':
        return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />;
      case 'mail':
        return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />;
      default:
        return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />;
    }
  };

  if (submenu) {
    return (
      <Link 
        href={href} 
        className="py-2.5 px-3 text-gray-700 text-sm font-medium flex justify-between items-center transition-all duration-200 rounded-xl hover:bg-white/80 hover:text-blue-600 hover:shadow-sm group"
        onClick={onClick}
      >
        <span>{text}</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {getIcon()}
        </svg>
      </Link>
    );
  }

  return (
    <Link 
      href={href} 
      className="py-4 px-5 text-gray-800 text-base font-semibold flex justify-between items-center transition-all duration-300 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-md hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:border-blue-200 hover:scale-[1.02] group"
      onClick={onClick}
    >
      <div className="flex items-center space-x-3">
        {icon && (
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {getIcon()}
            </svg>
          </div>
        )}
        <span>{text}</span>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  );
} 