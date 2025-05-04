"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full transition-all duration-300 z-50 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 z-10">
            <div className={`w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-800 rounded-full flex items-center justify-center transition-all ${
              scrolled ? 'scale-90' : 'scale-100'
            }`}>
              <span className="text-white font-bold text-xl">K</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-800 inline-block text-transparent bg-clip-text">KARASU</h1>
              <p className={`text-xs tracking-wider -mt-1 ${
                scrolled ? 'text-gray-500' : 'text-white'
              }`}>REKLAM & SOSYAL MEDYA</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink href="/" text="Ana Sayfa" scrolled={scrolled} />
            
            <div className="relative group">
              <button className={`px-4 py-2 rounded-md flex items-center space-x-1 transition-colors ${
                scrolled 
                  ? 'text-gray-700 hover:text-blue-600 group-hover:text-blue-600' 
                  : 'text-white hover:text-blue-200 group-hover:text-blue-200'
              }`}>
                <span>Hizmetler</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-1 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left">
                <div className="bg-white shadow-lg rounded-md py-2 px-3 border border-gray-100">
                  <Link href="/hizmetler" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md font-medium border-b border-gray-100 mb-1">
                    Tüm Hizmetler
                  </Link>
                  <Link href="/hizmetler/sosyal-medya" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">
                    Sosyal Medya Yönetimi
                  </Link>
                  <Link href="/hizmetler/dijital-pazarlama" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">
                    Dijital Pazarlama
                  </Link>
                  <Link href="/hizmetler/icerik" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">
                    İçerik Üretimi
                  </Link>
                  <Link href="/hizmetler/grafik" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">
                    Grafik Tasarım
                  </Link>
                </div>
              </div>
            </div>
            
            <NavLink href="/hakkimizda" text="Hakkımızda" scrolled={scrolled} />
            <NavLink href="/referanslar" text="Referanslar" scrolled={scrolled} />
            <NavLink href="/iletisim" text="İletişim" scrolled={scrolled} />
          </nav>

          {/* Call to Action Button */}
          <div className="hidden md:block">
            <Link 
              href="/iletisim" 
              className={`${
                scrolled 
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-800 text-white' 
                  : 'bg-white text-blue-600 hover:bg-blue-50'
              } px-6 py-2 rounded-full hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-0.5`}
            >
              Ücretsiz Danışmanlık
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden z-10 focus:outline-none ${
              scrolled ? 'text-gray-700' : 'text-white'
            } p-3 rounded-md`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="relative w-6 h-5">
              <span className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
              <span className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out top-2 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out top-4 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`fixed inset-0 bg-gradient-to-br from-blue-50 to-white z-40 transform transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="container mx-auto px-6 py-16 h-full overflow-y-auto">
          <div className="max-w-md mx-auto">
            <nav className="flex flex-col space-y-5">
              <MobileNavLink href="/" text="Ana Sayfa" onClick={() => setIsMenuOpen(false)} special={true} />
              <div className="py-4 px-4 rounded-xl bg-blue-50/70 border border-blue-100 shadow-sm">
                <h3 className="font-semibold text-blue-700 text-sm mb-3 uppercase tracking-wider">Hizmetlerimiz</h3>
                <div className="space-y-3 pl-2">
                  <MobileNavLink href="/hizmetler" text="Tüm Hizmetler" onClick={() => setIsMenuOpen(false)} />
                  <MobileNavLink href="/hizmetler/sosyal-medya" text="Sosyal Medya Yönetimi" onClick={() => setIsMenuOpen(false)} />
                  <MobileNavLink href="/hizmetler/dijital-pazarlama" text="Dijital Pazarlama" onClick={() => setIsMenuOpen(false)} />
                  <MobileNavLink href="/hizmetler/icerik" text="İçerik Üretimi" onClick={() => setIsMenuOpen(false)} />
                  <MobileNavLink href="/hizmetler/grafik" text="Grafik Tasarım" onClick={() => setIsMenuOpen(false)} />
                </div>
              </div>
              <MobileNavLink href="/hakkimizda" text="Hakkımızda" onClick={() => setIsMenuOpen(false)} special={true} />
              <MobileNavLink href="/referanslar" text="Referanslar" onClick={() => setIsMenuOpen(false)} special={true} />
              <MobileNavLink href="/iletisim" text="İletişim" onClick={() => setIsMenuOpen(false)} special={true} />
              
              <div className="mt-8">
                <Link 
                  href="/iletisim" 
                  className="inline-block bg-gradient-to-r from-blue-600 to-indigo-800 text-white px-6 py-4 rounded-xl text-center w-full shadow-lg hover:shadow-blue-200/50 transition-all duration-300 hover:-translate-y-1 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ücretsiz Danışmanlık
                </Link>
              </div>
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
      className={`px-4 py-2 rounded-md transition-colors ${
        scrolled 
          ? 'text-gray-700 hover:text-blue-600' 
          : 'text-white hover:text-blue-200'
      }`}
    >
      {text}
    </Link>
  );
}

function MobileNavLink({ href, text, onClick, special = false }: { href: string; text: string; onClick: () => void; special?: boolean }) {
  return (
    <Link 
      href={href} 
      className={`py-3.5 text-gray-800 text-lg flex justify-between items-center transition-all duration-200 ${
        special 
          ? 'px-4 rounded-lg bg-white shadow-sm border border-gray-100 hover:bg-gradient-to-r hover:from-blue-50 hover:to-white hover:border-blue-100 hover:shadow-md hover:scale-102'
          : 'border-b border-blue-50 hover:pl-2'
      } hover:text-blue-700`}
      onClick={onClick}
    >
      <span className="font-medium">{text}</span>
      <div className={`${special ? 'bg-blue-50 p-1.5 rounded-full' : ''}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className={`${special ? 'h-4 w-4' : 'h-5 w-5'} text-blue-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
} 