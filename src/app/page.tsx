"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// Potansiyel Simülatörü Bileşeni
function PotentialSimulator() {
  // State'ler
  const [currentEngagement, setCurrentEngagement] = useState(20);
  const [growthGoal, setGrowthGoal] = useState('moderate');
  const [industryType, setIndustryType] = useState('retail');
  const [showResults, setShowResults] = useState(false);
  const [potentialScore, setPotentialScore] = useState(0);
  const [animateValue, setAnimateValue] = useState(0);
  
  // Potansiyel skorunu hesapla
  useEffect(() => {
    
    // Büyüme hedefine göre çarpan
    const growthMultiplier = 
      growthGoal === 'conservative' ? 1.2 :
      growthGoal === 'moderate' ? 1.5 :
      growthGoal === 'aggressive' ? 1.8 : 1.5;
    
    // Sektöre göre çarpan
    const industryMultiplier = 
      industryType === 'retail' ? 1.3 :
      industryType === 'services' ? 1.5 :
      industryType === 'tech' ? 1.7 :
      industryType === 'food' ? 1.4 : 1.3;
    
    // Mevcut etkileşime göre potansiyel hesaplama
    const calculatedPotential = Math.round(currentEngagement * growthMultiplier * industryMultiplier);
    setPotentialScore(calculatedPotential > 100 ? 100 : calculatedPotential);
  }, [currentEngagement, growthGoal, industryType]);
  
  // Sonuç animasyonu
  useEffect(() => {
    if (showResults) {
      let startValue = 0;
      const duration = 1500; // ms cinsinden animasyon süresi
      const increment = potentialScore / (duration / 16); // 60fps için yaklaşık değer
      
      const timer = setInterval(() => {
        startValue += increment;
        if (startValue >= potentialScore) {
          setAnimateValue(potentialScore);
          clearInterval(timer);
        } else {
          setAnimateValue(Math.floor(startValue));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [showResults, potentialScore]);
  
  // Sonuçları göster/gizle
  const handleCalculate = () => {
    setShowResults(true);
  };
  
  const handleReset = () => {
    setShowResults(false);
    setAnimateValue(0);
  };
  
  return (
    <div className="p-6 md:p-10 bg-white rounded-2xl shadow-xl relative overflow-hidden">
      {/* Arkaplan Süslemeleri */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-full opacity-30 blur-xl -mr-10 -mt-10"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-purple-100 to-pink-200 rounded-full opacity-30 blur-xl -ml-10 -mb-10"></div>
      
      {/* Başlık */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent inline-block">Dijital Potansiyelinizi Keşfedin</h2>
        <p className="text-gray-600 mt-2">Markanızın dijital dünyada ne kadar büyüyebileceğini hesaplayın</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Sol Taraf - Giriş Formu */}
        <div className={`transition-all duration-500 bg-gradient-to-br from-white to-blue-50 rounded-xl p-6 shadow-md ${showResults ? 'lg:pr-10 border-r border-blue-100' : ''}`}>
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </span>
            Markanızın Profilini Oluşturun
          </h3>
          
          {/* Mevcut Etkileşim Kaydırgacı - Tamamen Yeniden Tasarlandı */}
          <div className="mb-8 bg-gradient-to-r from-blue-50 via-white to-indigo-50 p-6 rounded-2xl shadow-sm border border-blue-100 overflow-hidden relative">
            {/* Dekoratif arka plan elementleri */}
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-100 rounded-full opacity-30 blur-xl"></div>
            <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-indigo-100 rounded-full opacity-30 blur-xl"></div>
            
            <div className="flex justify-between items-center mb-6 relative z-10">
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg shadow-md mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-gray-800 font-semibold">Mevcut Sosyal Medya Etkileşiminiz</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Markanızın mevcut sosyal medya performansını seçin</p>
                </div>
              </div>
              <div className="flex items-center justify-center min-w-[60px] h-10 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg shadow-md">
                {currentEngagement}%
              </div>
            </div>
            
            {/* Özel Tasarım Kaydırıcı */}
            <div className="relative mb-6 px-1">
              {/* Arka plan çizgisi */}
              <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-gray-200 rounded-full transform -translate-y-1/2"></div>
              
              {/* Doluluk çizgisi - Gradient */}
              <div 
                className="absolute top-1/2 left-0 h-1.5 rounded-full transform -translate-y-1/2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transition-all duration-300 ease-out"
                style={{ width: `${currentEngagement * 2}%` }}
              ></div>
              
              {/* Doluluk noktaları - Dekoratif */}
              <div className="relative h-10">
                {/* Düşük noktası */}
                <div className={`absolute top-1/2 left-0 w-3 h-3 rounded-full transform -translate-y-1/2 transition-all duration-300 ${currentEngagement >= 5 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                
                {/* Orta nokta */}
                <div className={`absolute top-1/2 left-1/2 w-3 h-3 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${currentEngagement >= 25 ? 'bg-indigo-500' : 'bg-gray-300'}`}></div>
                
                {/* Yüksek nokta */}
                <div className={`absolute top-1/2 right-0 w-3 h-3 rounded-full transform -translate-y-1/2 transition-all duration-300 ${currentEngagement >= 45 ? 'bg-purple-500' : 'bg-gray-300'}`}></div>
                
                {/* Hareketli işaretleyici */}
                <div 
                  className="absolute top-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center cursor-grab transform -translate-y-1/2 transition-all duration-300 ease-out z-20 border-2 border-indigo-100"
                  style={{ left: `calc(${currentEngagement * 2}% - 20px)` }}
                >
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
                </div>
              </div>
              
              {/* Görünmez input */}
              <input 
                type="range" 
                min="5" 
                max="50" 
                step="1"
                value={currentEngagement}
                onChange={(e) => setCurrentEngagement(parseInt(e.target.value))}
                className="absolute inset-0 w-full h-10 opacity-0 cursor-pointer z-30"
              />
            </div>
            
            {/* Etiketler */}
            <div className="flex justify-between text-sm font-medium px-1">
              <div className="flex flex-col items-center">
                <span className="text-blue-600 font-semibold">Düşük</span>
                <span className="text-xs text-gray-500">5-20%</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-indigo-600 font-semibold">Orta</span>
                <span className="text-xs text-gray-500">20-35%</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-purple-600 font-semibold">Yüksek</span>
                <span className="text-xs text-gray-500">35-50%</span>
              </div>
            </div>
          </div>
          
          {/* Büyüme Hedefi Seçimi */}
          <div className="mb-8">
            <label className="text-gray-700 font-medium block mb-3 flex items-center">
              <svg className="w-4 h-4 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              Hedeflediğiniz Büyüme
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: 'conservative', label: 'Istikrarlı', description: '%20-40 artış', color: 'from-green-500 to-teal-500', bg: 'bg-green-50', border: 'border-green-200' },
                { id: 'moderate', label: 'Dengeli', description: '%40-70 artış', color: 'from-blue-500 to-indigo-500', bg: 'bg-blue-50', border: 'border-blue-200' },
                { id: 'aggressive', label: 'Agresif', description: '%70-100+ artış', color: 'from-purple-500 to-pink-500', bg: 'bg-purple-50', border: 'border-purple-200' }
              ].map((option) => (
                <div 
                  key={option.id}
                  onClick={() => setGrowthGoal(option.id)}
                  className={`border rounded-lg p-3 cursor-pointer transition-all duration-200 ${growthGoal === option.id ? 
                    `${option.border} ${option.bg} shadow-md transform scale-105` : 
                    'border-gray-200 bg-white hover:border-blue-300'}`}
                >
                  <div className={`font-medium ${growthGoal === option.id ? 'bg-gradient-to-r ' + option.color + ' text-transparent bg-clip-text' : 'text-gray-800'}`}>{option.label}</div>
                  <div className="text-xs text-gray-500 mt-1">{option.description}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Sektör Seçimi */}
          <div className="mb-8">
            <label className="text-gray-700 font-medium block mb-3 flex items-center">
              <svg className="w-4 h-4 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Sektörünüz
            </label>
            <select 
              value={industryType}
              onChange={(e) => setIndustryType(e.target.value)}
              className="w-full p-3 border border-blue-200 bg-white text-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all shadow-sm"
              style={{ color: '#1f2937' }} // Metin rengini koyu gri yaparak görünürlüğü artırıyoruz
            >
              <option value="retail" className="text-gray-800">Perakende & E-Ticaret</option>
              <option value="services" className="text-gray-800">Hizmet Sektörü</option>
              <option value="tech" className="text-gray-800">Teknoloji & Yazılım</option>
              <option value="food" className="text-gray-800">Gıda & Restoran</option>
              <option value="other" className="text-gray-800">Diğer</option>
            </select>
          </div>
          
          {/* Hesaplama Butonu */}
          {!showResults ? (
            <button 
              onClick={handleCalculate}
              className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Potansiyelinizi Hesaplayın
            </button>
          ) : (
            <button 
              onClick={handleReset}
              className="w-full py-4 px-6 bg-white hover:bg-gray-100 text-gray-700 font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Yeniden Hesapla
            </button>
          )}
        </div>
        
        {/* Sağ Taraf - Sonuçlar */}
        <div className={`transition-all duration-500 ${!showResults ? 'opacity-50' : 'opacity-100'}`}>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Karasu Medya ile Potansiyeliniz</h3>
          
          {/* Potansiyel Göstergesi */}
          <div className="relative h-64 mb-8">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-48 h-48">
                {/* Arka plan daire */}
                <div className="absolute inset-0 rounded-full border-8 border-gray-100"></div>
                
                {/* Doluluk dairesi - animasyonlu */}
                <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle 
                    cx="50" cy="50" r="45" 
                    fill="none" 
                    stroke="#f3f4f6" 
                    strokeWidth="8"
                  />
                  <circle 
                    cx="50" cy="50" r="45" 
                    fill="none" 
                    stroke="url(#potentialGradient)" 
                    strokeWidth="8"
                    strokeDasharray="283"
                    strokeDashoffset={283 - (283 * animateValue / 100)}
                    className="transition-all duration-1000 ease-out"
                  />
                  <defs>
                    <linearGradient id="potentialGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Merkez değer */}
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {animateValue}%
                  </span>
                  <span className="text-sm text-gray-500 mt-1">Potansiyel</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sonuç Mesajı */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 rounded-lg p-2">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-800">
                  {animateValue < 40 ? 'Büyük Potansiyel!' : 
                   animateValue < 70 ? 'Etkileyici Potansiyel!' : 
                   'Olağanüstü Potansiyel!'}
                </h4>
                <p className="text-gray-600 mt-1">
                  {animateValue < 40 ? 
                    'Markanızın sosyal medya potansiyeli henüz tam olarak kullanılmamış. Karasu Medya ile bu potansiyeli açığa çıkarabilirsiniz.' : 
                   animateValue < 70 ? 
                    'Markanız iyi bir temele sahip, ancak Karasu Medya ile çok daha fazlasını başarabilirsiniz.' : 
                    'Markanız zaten güçlü bir performans gösteriyor. Karasu Medya ile bu başarıyı sürdürülebilir kılabilir ve daha da ileriye taşıyabilirsiniz.'}
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA Butonu */}
          <Link 
            href="/iletisim"
            className="block w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 text-center transform hover:-translate-y-1"
          >
            Ücretsiz Danışmanlık Alın
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  // Typewriter Animation States
  const [isMobile, setIsMobile] = useState(false);
  const [desktopTitle1, setDesktopTitle1] = useState('');
  const [desktopTitle2, setDesktopTitle2] = useState('');
  const [descriptionText, setDescriptionText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [currentStep, setCurrentStep] = useState('waiting'); // 'waiting', 'title1', 'title2', 'description', 'finished'
  
  const title1Text = "Sosyal Medyada";
  const title2Text = "Sınırları Aşın";
  const descriptionFullText = "Karasu ile markanızın dijital izini güçlendirin. Veri odaklı stratejiler ve yaratıcı içeriklerle rakiplerinizden öne geçin.";
  
  // Mobile/Desktop detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Typewriter Animation
  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];
    
    const startTypewriter = () => {
      if (isMobile) {
        // MOBILE: Only description typewriter
        setCurrentStep('description');
        let index = 0;
        
        const typeDescription = () => {
          if (index < descriptionFullText.length) {
            setDescriptionText(descriptionFullText.slice(0, index + 1));
            index++;
            timeouts.push(setTimeout(typeDescription, 30));
          } else {
            setCurrentStep('finished');
            timeouts.push(setTimeout(() => setShowCursor(false), 2000));
          }
        };
        
        timeouts.push(setTimeout(typeDescription, 1000));
        
      } else {
        // DESKTOP: Title1 → Title2 → Description
        setCurrentStep('title1');
        let index1 = 0;
        
        const typeTitle1 = () => {
          if (index1 < title1Text.length) {
            setDesktopTitle1(title1Text.slice(0, index1 + 1));
            index1++;
            timeouts.push(setTimeout(typeTitle1, 80));
          } else {
            // Start Title2 after delay
            timeouts.push(setTimeout(() => {
              setCurrentStep('title2');
              let index2 = 0;
              
              const typeTitle2 = () => {
                if (index2 < title2Text.length) {
                  setDesktopTitle2(title2Text.slice(0, index2 + 1));
                  index2++;
                  timeouts.push(setTimeout(typeTitle2, 80));
                } else {
                  // Start Description after delay
                  timeouts.push(setTimeout(() => {
                    setCurrentStep('description');
                    let index3 = 0;
                    
                    const typeDescription = () => {
                      if (index3 < descriptionFullText.length) {
                        setDescriptionText(descriptionFullText.slice(0, index3 + 1));
                        index3++;
                        timeouts.push(setTimeout(typeDescription, 30));
                      } else {
                        setCurrentStep('finished');
                        timeouts.push(setTimeout(() => setShowCursor(false), 2000));
                      }
                    };
                    
                    typeDescription();
                  }, 500));
                }
              };
              
              typeTitle2();
            }, 300));
          }
        };
        
        timeouts.push(setTimeout(typeTitle1, 1000));
      }
    };
    
    // Start animation when component mounts
    startTypewriter();
    
    // Cursor blinking
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    
    // Cleanup
    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
      clearInterval(cursorInterval);
    };
  }, [isMobile]);

  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 w-full h-full overflow-hidden sm:scale-110 scale-100">
              {/* Desktop Image */}
              <Image 
                src="https://villaqrmenu.b-cdn.net/karasubasin/KARASU%20BANNER.png"
                alt="Karasu Hero Background"
                fill
                sizes="100vw"
                priority
                className="hidden sm:block object-cover sm:object-center object-[center_15%] transform sm:translate-y-0 -translate-y-[5%]"
              />
              {/* Mobile Image */}
              <Image 
                src="https://villaqrmenu.b-cdn.net/karasubasin/KARASUBANNERMB.png"
                alt="Karasu Hero Background - Mobil"
                fill
                sizes="100vw"
                priority
                className="block sm:hidden object-cover sm:object-center object-[center_15%] transform sm:translate-y-0 -translate-y-[0%]"
              />
            </div>
          </div>
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
            <div className="hidden sm:inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-4 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse mr-2"></span>
              <span className="text-sm font-medium uppercase tracking-wider">Dijital Pazarlamanın Lideri</span>
            </div>
            
            {/* Desktop Title with Typewriter Animation */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white leading-tight min-h-[2.4em] hidden sm:block">
              <div>
                {desktopTitle1}
                {currentStep === 'title1' && showCursor && <span className="animate-pulse">|</span>}
              </div>
              <div className="relative inline-block">
                <span className="absolute -inset-1 w-full h-full bg-gradient-to-r from-blue-400 to-violet-500 rounded-lg blur-lg opacity-50"></span>
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-100">
                  {desktopTitle2}
                  {currentStep === 'title2' && showCursor && <span className="animate-pulse">|</span>}
                </span>
              </div>
            </h1>
            
            {/* Description with Typewriter Animation */}
            <div className="mt-50 sm:mt-12 md:mt-16 px-8 sm:px-0">
              <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-[280px] sm:max-w-3xl leading-relaxed font-light min-h-[4.8em] sm:min-h-[2.4em] break-words hyphens-auto">
                {descriptionText && (
                  <>
                    {descriptionText.includes("Karasu") ? (
                      <>
                        <span className="font-semibold text-blue-300">Karasu</span>
                        {descriptionText.replace("Karasu", "")}
                      </>
                    ) : (
                      descriptionText
                    )}
                    {currentStep === 'description' && showCursor && (
                      <span className="animate-pulse text-blue-300">|</span>
                    )}
                  </>
                )}
              </p>
            </div>
            
            {/* Premium CTA Buttons - Fixed size button to prevent layout shift */}
            <div className="flex flex-col sm:flex-row gap-5 mb-12 animate-slide-up">
              <Link
                href="/hizmetler"
                className="relative bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full font-medium overflow-hidden group focus:outline-none focus:ring-4 focus:ring-blue-300 w-full sm:w-auto"
              >
                <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-600 to-indigo-700"></span>
                <span className="relative flex items-center justify-center text-white px-8 py-3.5 min-w-[360px] min-h-[56px] md:min-w-[280px]">
                  Hizmetlerimizi Keşfedin
                </span>
              </Link>
            </div>
          </div>
          
          {/* Floating elements for visual interest */}
          <div className="absolute right-16 top-9/24 hidden lg:block">
            <div className="w-80 h-80 relative opacity-80">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 mx-auto max-w-6xl">
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
                tags: ["İçerik Yönetimi", "Hesap Yükseltme", "Etkileşim Artırma", "Marka Konumlandırma", "Hedef Kitle Analizi", "Rakip Analizi"],
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
                link: "/hizmetler/icerik",
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
              },
              {
                title: "Matbaa Hizmetleri",
                description: "Profesyonel baskı çözümleri ile markanızın fiziksel materyallerini en yüksek kalitede üretiyoruz.",
                image: "https://berkmatbaa.com.tr/assets/uploads/66544393001fd171679835555.jpg",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                ),
                tags: ["Kartvizit", "Broşür", "Katalog", "Afiş", "Davetiye"],
                link: "/hizmetler/matbaa",
                bgGradient: "from-teal-900/80",
                iconBg: "bg-teal-100",
                iconColor: "text-teal-600",
                titleColor: "text-teal-600",
                tagBg: "bg-teal-100",
                tagColor: "text-teal-800",
                buttonGradient: "from-teal-600 to-teal-700",
                buttonHover: "hover:from-teal-700 hover:to-teal-800"
              },
              {
                title: "Organizasyon Hizmetleri",
                description: "Cinsiyet partisi, evlilik teklifi, balayı tatili, doğum günü ve iş toplantıları gibi özel anlarınızı unutulmaz kılıyoruz.",
                image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                  </svg>
                ),
                tags: ["Cinsiyet Partisi", "Evlilik Teklifi", "Balayı Tatili", "Doğum Günü", "İş Toplantıları"],
                link: "/hizmetler/organizasyon",
                bgGradient: "from-amber-900/80",
                iconBg: "bg-amber-100",
                iconColor: "text-amber-600",
                titleColor: "text-amber-600",
                tagBg: "bg-amber-100",
                tagColor: "text-amber-800",
                buttonGradient: "from-amber-600 to-amber-700",
                buttonHover: "hover:from-amber-700 hover:to-amber-800"
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
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <div className="col-span-full md:col-span-4 text-center mb-6">
              <h3 className="text-3xl font-bold text-gray-800">Sizin İçin Neler Yapabiliriz?</h3>
            </div>
            
            {/* Hizmet Kartları */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Dijital Pazarlama</h4>
              <p className="text-gray-600 text-sm">SEO, SEM ve Sosyal Medya Yönetimi</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Yaratıcı Tasarım</h4>
              <p className="text-gray-600 text-sm">Logo, Web ve Marka Kimliği</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Organizasyon</h4>
              <p className="text-gray-600 text-sm">Etkinlik ve Özel Organizasyonlar</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Matbaa</h4>
              <p className="text-gray-600 text-sm">Kartvizit, Broşür ve Katalog</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dijital Potansiyelinizi Keşfedin Bölümü */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <PotentialSimulator />
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
              <span className="text-gray-700 font-medium ml-3">Sosyal Medya Hesaplarımız</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Instagram&apos;da Bizi Takip Edin
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Tüm hizmetlerimiz hakkında güncel bilgiler ve projelerimiz için Instagram hesaplarımızı takip edebilirsiniz.
            </p>
          </div>
          
          {/* Instagram Accounts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Instagram Account 1 */}
            <a href="https://www.instagram.com/karasureklamajansi" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-1">
              <div className="flex flex-col h-full">
                {/* Account Header */}
                <div className="flex items-center p-4 border-b border-gray-100">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-3 ring-2 ring-blue-500/20">
                    <Image 
                      src="https://villaqrmenu.b-cdn.net/447297083_1488295202123950_879512158476665056_n.jpg" 
                      alt="Karasu Reklam Ajansı"
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">karasureklamajansi</p>
                    <p className="text-xs text-gray-500">Reklam Ajansı</p>
                  </div>
                  <div className="text-blue-500">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </div>
                </div>
                
                {/* Account Preview */}
                <div className="p-4">
                  <p className="text-gray-600 text-sm mb-3">
                    Reklam ve tanıtım hizmetlerimiz hakkında güncel bilgiler ve çalışmalarımız için takip edin.
                  </p>
                  <div className="inline-flex items-center text-blue-600 text-sm font-medium">
                    <span>Profili Görüntüle</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
            
            {/* Instagram Account 2 */}
            <a href="https://www.instagram.com/karasumedya_" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-1">
              <div className="flex flex-col h-full">
                {/* Account Header */}
                <div className="flex items-center p-4 border-b border-gray-100">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-3 ring-2 ring-purple-500/20">
                    <Image 
                      src="https://villaqrmenu.b-cdn.net/karasuekip/karasu_medya.jpg" 
                      alt="Karasu Medya"
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">karasumedya_</p>
                    <p className="text-xs text-gray-500">Sosyal Medya Yönetimi</p>
                  </div>
                  <div className="text-purple-500">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </div>
                </div>
                
                {/* Account Preview */}
                <div className="p-4">
                  <p className="text-gray-600 text-sm mb-3">
                    Sosyal medya içeriklerimiz, stratejilerimiz ve başarı hikayelerimiz için takip edin.
                  </p>
                  <div className="inline-flex items-center text-purple-600 text-sm font-medium">
                    <span>Profili Görüntüle</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
            
            {/* Instagram Account 3 */}
            <a href="https://www.instagram.com/karasumatbaahizmetleri" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-1">
              <div className="flex flex-col h-full">
                {/* Account Header */}
                <div className="flex items-center p-4 border-b border-gray-100">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-3 ring-2 ring-teal-500/20">
                    <Image 
                      src="https://villaqrmenu.b-cdn.net/karasuekip/karasumatbaa.jpg" 
                      alt="Karasu Matbaa Hizmetleri"
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">karasumatbaahizmetleri</p>
                    <p className="text-xs text-gray-500">Matbaa Hizmetleri</p>
                  </div>
                  <div className="text-teal-500">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </div>
                </div>
                
                {/* Account Preview */}
                <div className="p-4">
                  <p className="text-gray-600 text-sm mb-3">
                    Yüksek kaliteli baskı çözümlerimiz ve matbaa hizmetlerimiz hakkında bilgi almak için takip edin.
                  </p>
                  <div className="inline-flex items-center text-teal-600 text-sm font-medium">
                    <span>Profili Görüntüle</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
            
            {/* Instagram Account 4 */}
            <a href="https://www.instagram.com/karasuorganizasyon_" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-1">
              <div className="flex flex-col h-full">
                {/* Account Header */}
                <div className="flex items-center p-4 border-b border-gray-100">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-3 ring-2 ring-amber-500/20">
                    <Image 
                      src="https://villaqrmenu.b-cdn.net/karasuekip/karasuorganizasyon.jpg" 
                      alt="Karasu Organizasyon"
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">karasuorganizasyon_</p>
                    <p className="text-xs text-gray-500">Organizasyon Hizmetleri</p>
                  </div>
                  <div className="text-amber-500">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </div>
                </div>
                
                {/* Account Preview */}
                <div className="p-4">
                  <p className="text-gray-600 text-sm mb-3">
                    Özel günleriniz için organizasyon hizmetlerimiz ve gerçekleştirdiğimiz etkinlikler için takip edin.
                  </p>
                  <div className="inline-flex items-center text-amber-600 text-sm font-medium">
                    <span>Profili Görüntüle</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Instagram Gönderileri */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {/* Gönderi 1 - DGnL4ZEoiaZ */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="flex flex-col h-full">                
                {/* Post Image - Instagram Embed */}
                <div className="relative overflow-hidden" style={{ paddingBottom: "100%" }}>
                  <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-gray-100">
                    <iframe 
                      src="https://www.instagram.com/p/DGnL4ZEoiaZ/embed" 
                      className="absolute inset-0 w-full h-[170%] -top-[35%]" 
                      frameBorder="0" 
                      scrolling="no" 
                      
                    ></iframe>
                  </div>
                </div>
                
                {/* Post Footer */}
                <div className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-gray-900 mb-1">349 beğeni</p>
                  <p className="text-sm text-gray-600"><span className="font-medium">karasureklamajansi</span> Markanız için özel tasarımlar ve stratejik çözümler sunuyoruz! #dijitalpazarlama #sosyalmedya</p>
                </div>
              </div>
            </div>
            
            {/* Gönderi 2 - DAGE2KkgFxZ */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="flex flex-col h-full">
                {/* Post Image - Instagram Embed */}
                <div className="relative overflow-hidden" style={{ paddingBottom: "100%" }}>
                  <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-gray-100">
                    <iframe 
                      src="https://www.instagram.com/p/DHi6FkrIxN8/embed" 
                      className="absolute inset-0 w-full h-[170%] -top-[35%]" 
                      frameBorder="0" 
                      scrolling="no" 
                      
                    ></iframe>
                  </div>
                </div>
                
                {/* Post Footer */}
                <div className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-gray-900 mb-1">287 beğeni</p>
                  <p className="text-sm text-gray-600"><span className="font-medium">karasumatbaahizmetleri</span> Yeni matbaa ürünlerimiz ile tanışın! Kartvizitler, broşürler ve daha fazlası... #matbaa #baskı</p>
                </div>
              </div>
            </div>
            
            {/* Gönderi 3 - DGlJmB6o-TO */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="flex flex-col h-full">
                {/* Post Image - Instagram Embed */}
                <div className="relative overflow-hidden" style={{ paddingBottom: "100%" }}>
                  <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-gray-100">
                    <iframe 
                      src="https://www.instagram.com/p/DGlJmB6o-TO/embed" 
                      className="absolute inset-0 w-full h-[170%] -top-[35%]" 
                      frameBorder="0" 
                      scrolling="no" 
                      
                    ></iframe>
                  </div>
                </div>
                
                {/* Post Footer */}
                <div className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-gray-900 mb-1">412 beğeni</p>
                  <p className="text-sm text-gray-600"><span className="font-medium">karasuorganizasyon_</span> Unutulmaz organizasyonlar için bize ulaşın! #organizasyon #etkinlik #düğün</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Instagram Bağlantı Butonu */}
          <div className="flex justify-center mt-10">
            <a 
              href="https://www.instagram.com/karasureklamajansi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors duration-300 inline-flex items-center shadow-lg hover:shadow-purple-200/50"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              <span>Tüm Instagram Hesaplarımızı Takip Edin</span>
            </a>
          </div>
        </div>
      </section>

      {/* Müşteri Yorumları Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-3000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 mb-6">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-medium">Müşteri Memnuniyeti</span>
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">Müşterilerimiz Ne Diyor?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Müşterilerimizle kurduğumuz güçlü iş birlikleri ve onlara sunduğumuz katma değerli hizmetler hakkında görüşleri.
            </p>
          </div>

          {/* Testimonials Slider - Modern Design */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="relative bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full overflow-hidden group">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-bl-3xl -mr-10 -mt-10 transform rotate-12 group-hover:rotate-6 transition-transform duration-300"></div>
                
                <div className="relative">
                  <svg className="w-12 h-12 text-blue-200 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  
                  <div className="flex items-center gap-1 text-yellow-400 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed italic mb-6">
                    &quot;Karasu Medya ile çalışmaya başladıktan sonra sosyal medya etkileşimlerimiz %120 arttı. Profesyonel yaklaşımları ve stratejik önerileri sayesinde marka bilinirliğimiz önemli ölçüde gelişti.&quot;
                  </p>
                  
                  <div className="text-right">
                    <p className="font-semibold text-blue-600">Ayşe Yılmaz</p>
                    <p className="text-gray-500 text-sm">Pazarlama Direktörü, TechSoft</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="relative bg-gradient-to-br from-white to-purple-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full overflow-hidden group">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-bl-3xl -mr-10 -mt-10 transform rotate-12 group-hover:rotate-6 transition-transform duration-300"></div>
                
                <div className="relative">
                  <svg className="w-12 h-12 text-purple-200 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  
                  <div className="flex items-center gap-1 text-yellow-400 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed italic mb-6">
                    &quot;E-ticaret sitemiz için SEO ve dijital reklam çalışmaları yapan Karasu ekibi, satışlarımızı ilk 3 ayda %85 artırmayı başardı. Verimli bütçe kullanımı ve şeffaf raporlama anlayışları için teşekkür ederiz.&quot;
                  </p>
                  
                  <div className="text-right">
                    <p className="font-semibold text-purple-600">Mehmet Kaya</p>
                    <p className="text-gray-500 text-sm">Genel Müdür, ModaVista</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="relative bg-gradient-to-br from-white to-indigo-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full overflow-hidden group">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-bl-3xl -mr-10 -mt-10 transform rotate-12 group-hover:rotate-6 transition-transform duration-300"></div>
                
                <div className="relative">
                  <svg className="w-12 h-12 text-indigo-200 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  
                  <div className="flex items-center gap-1 text-yellow-400 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed italic mb-6">
                    &quot;Karasu Medya&apos;nın içerik üretim ekibi, markamızın sesini mükemmel bir şekilde yakaladı. Blog ve sosyal medya içeriklerimizin etkileşimleri arttı, organik erişimimiz genişledi. Yaratıcı ve sonuç odaklı yaklaşımları için teşekkürler.&quot;
                  </p>
                  
                  <div className="text-right">
                    <p className="font-semibold text-indigo-600">Zeynep Demir</p>
                    <p className="text-gray-500 text-sm">İçerik Yöneticisi, HealthPlus</p>
                  </div>
                </div>
              </div>
            </div>

            {/* View More Testimonials Link */}
            <div className="text-center mt-12">
              <Link 
                href="/referanslar"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-colors duration-300 shadow-lg hover:shadow-blue-200/50"
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
              description="Karasu Medya olarak, 10 yılı aşkın tecrübemiz ile markaların dijital dünyada güçlü bir şekilde var olmaları için çalışıyoruz."
              icon={
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              }
            />
            <AboutCard 
              title="Misyonumuz"
              description="Müşterilerimize en iyi hizmeti sunarak onların başarılarını maksimize etmektir. Markaların ihtiyaçlarına özel çözümler geliştirerek, hedef kitleleriyle güçlü bir bağ kurmalarına ve etkileşimi artırmalarına yardımcı oluyoruz. Müşteri memnuniyeti ve güveni odaklı bir yaklaşımla, her projeye kararlılıkla ve yaratıcılıkla yaklaşıyoruz."
              icon={
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              }
            />
            <AboutCard 
              title="Vizyonumuz"
              description="Karasu Medya olarak vizyonumuz, markaların dijital dünyada varlık göstermeleri için etkili ve yenilikçi çözümler sunarak dünya çapında tanınan bir dijital pazarlama ajansı olmaktır. Müşterilerimize değer katarken, teknolojinin gücünü kullanarak sınırları aşan başarılar elde etmeyi hedefliyoruz."
              icon={
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            />
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

      {/* CSS Styles */}
      <style jsx global>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -20px) scale(1.1); }
          50% { transform: translate(0, 20px) scale(0.9); }
          75% { transform: translate(-20px, -10px) scale(1.05); }
        }
        
        .animate-blob {
          animation: blob 10s infinite ease-in-out;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                           linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
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
    <div className="group relative bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 hover:scale-105 transform transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
      {/* Gradient border on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
      
      {/* Icon container with enhanced effects */}
      <div className="bg-white/20 group-hover:bg-white/30 p-4 rounded-xl inline-block mb-6 transform group-hover:scale-110 transition-all duration-300">
        {icon}
      </div>
      
      {/* Title with gradient text on hover */}
      <h3 className="text-2xl font-bold mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-200 group-hover:to-white transition-all duration-300">
        {title}
      </h3>
      
      {/* Description with enhanced readability */}
      <p className="text-blue-100 group-hover:text-blue-50 leading-relaxed transition-colors duration-300">
        {description}
      </p>
      
      {/* Decorative corner element */}
      <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-blue-400/20 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
}

