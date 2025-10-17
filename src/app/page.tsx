"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// Modern Potansiyel Simülatörü Bileşeni
function PotentialSimulator() {
  // State'ler
  const [currentEngagement, setCurrentEngagement] = useState(25);
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
    <div className="relative">
      {/* Modern Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-violet-500/5 to-fuchsia-500/5 rounded-[3rem] blur-3xl"></div>
      
      {/* Main Container with Glassmorphism */}
      <div className="relative bg-white/80 backdrop-blur-xl rounded-[3rem] shadow-2xl border border-gray-200/50 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-violet-400/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-400/10 to-fuchsia-400/10 rounded-full blur-3xl -ml-20 -mb-20"></div>
        
        {/* Content Wrapper */}
        <div className="relative p-8 md:p-12 lg:p-16">
          {/* Modern Header */}
          <div className="text-center mb-12">
            {/* Floating Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/10 to-violet-500/10 backdrop-blur-xl border border-blue-200/50 mb-6 shadow-lg">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span className="text-sm font-bold uppercase tracking-wider text-gray-700">Potansiyel Analizi</span>
      </div>
      
            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                Dijital Potansiyelinizi Keşfedin
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Markanızın dijital dünyada ne kadar büyüyebileceğini hesaplayın ve fırsatları keşfedin
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Sol Taraf - Modern Form */}
        <div className="relative">
          {/* Form Container */}
          <div className="bg-gradient-to-br from-white via-blue-50/30 to-violet-50/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-xl">
            {/* Form Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
                </div>
                <h3 className="text-2xl font-black text-gray-900">
                  Markanızın Profili
          </h3>
              </div>
              <p className="text-gray-600 text-sm">Bilgilerinizi girerek potansiyelinizi hesaplayın</p>
            </div>
          
          {/* Modern Slider Section */}
          <div className="mb-8">
            <div className="flex justify-between items-start mb-4">
              <div>
                <label className="text-gray-900 font-bold text-sm uppercase tracking-wider flex items-center gap-2 mb-1">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  Sosyal Medya Etkileşimi
                </label>
                <p className="text-xs text-gray-500">Mevcut performansınız</p>
                </div>
              <div className="px-4 py-2 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-black rounded-xl shadow-lg text-lg min-w-[70px] text-center">
                {currentEngagement}%
              </div>
            </div>
            
            {/* Modern Custom Slider */}
            <div className="relative bg-gradient-to-r from-blue-50/50 to-violet-50/50 rounded-2xl p-6 border border-blue-100/50">
              <div className="relative mb-8">
                {/* Track Background */}
                <div className="absolute top-1/2 left-0 right-0 h-3 bg-gray-200 rounded-full transform -translate-y-1/2"></div>
                
                {/* Filled Track with Gradient */}
                <div 
                  className="absolute top-1/2 left-0 h-3 rounded-full transform -translate-y-1/2 bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 transition-all duration-300 shadow-lg"
                style={{ width: `${currentEngagement * 2}%` }}
              ></div>
              
                {/* Modern Thumb */}
                <div className="relative h-12">
                  <div 
                    className="absolute top-1/2 transform -translate-y-1/2 transition-all duration-300 z-20"
                    style={{ left: `calc(${currentEngagement * 2}% - 24px)` }}
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full blur-md opacity-60"></div>
                      <div className="relative w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-blue-600 cursor-grab active:cursor-grabbing hover:scale-110 transition-transform duration-200">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-600 to-violet-600"></div>
                      </div>
                    </div>
                </div>
              </div>
              
                {/* Hidden Input */}
              <input 
                type="range" 
                min="5" 
                max="50" 
                step="1"
                value={currentEngagement}
                onChange={(e) => setCurrentEngagement(parseInt(e.target.value))}
                  className="absolute inset-0 w-full h-12 opacity-0 cursor-pointer z-30"
              />
            </div>
            
              {/* Labels */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-blue-600 font-black text-sm mb-1">Düşük</div>
                  <div className="text-xs text-gray-500">5-20%</div>
              </div>
                <div className="text-center">
                  <div className="text-violet-600 font-black text-sm mb-1">Orta</div>
                  <div className="text-xs text-gray-500">20-35%</div>
              </div>
                <div className="text-center">
                  <div className="text-fuchsia-600 font-black text-sm mb-1">Yüksek</div>
                  <div className="text-xs text-gray-500">35-50%</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Modern Growth Goal Selection */}
          <div className="mb-8">
            <label className="text-gray-900 font-bold text-sm uppercase tracking-wider flex items-center gap-2 mb-4">
              <svg className="w-4 h-4 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              Büyüme Hedefi
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: 'conservative', label: 'Istikrarlı', description: '%20-40', gradient: 'from-green-500 to-teal-500', bgGradient: 'from-green-50 to-teal-50' },
                { id: 'moderate', label: 'Dengeli', description: '%40-70', gradient: 'from-blue-500 to-violet-500', bgGradient: 'from-blue-50 to-violet-50' },
                { id: 'aggressive', label: 'Agresif', description: '%70-100+', gradient: 'from-purple-500 to-fuchsia-500', bgGradient: 'from-purple-50 to-fuchsia-50' }
              ].map((option) => (
                <div 
                  key={option.id}
                  onClick={() => setGrowthGoal(option.id)}
                  className={`relative group cursor-pointer transition-all duration-300 ${
                    growthGoal === option.id ? 'scale-105' : 'hover:scale-102'
                  }`}
                >
                  {/* Glow Effect */}
                  {growthGoal === option.id && (
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${option.gradient} rounded-2xl blur opacity-40 group-hover:opacity-60 transition-opacity duration-300`}></div>
                  )}
                  
                  {/* Card */}
                  <div className={`relative rounded-2xl p-4 border-2 transition-all duration-300 ${
                    growthGoal === option.id 
                      ? `bg-gradient-to-br ${option.bgGradient} border-transparent shadow-lg` 
                      : 'bg-white border-gray-200 hover:border-gray-300'
                  }`}>
                    <div className={`font-black text-sm mb-1 ${
                      growthGoal === option.id 
                        ? `bg-gradient-to-r ${option.gradient} bg-clip-text text-transparent` 
                        : 'text-gray-700'
                    }`}>
                      {option.label}
                    </div>
                    <div className="text-xs text-gray-600 font-medium">{option.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Modern Industry Selection */}
          <div className="mb-8">
            <label className="text-gray-900 font-bold text-sm uppercase tracking-wider flex items-center gap-2 mb-4">
              <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Sektörünüz
            </label>
            <div className="relative">
            <select 
              value={industryType}
              onChange={(e) => setIndustryType(e.target.value)}
                className="w-full p-4 pr-12 border-2 border-gray-200 bg-white text-gray-900 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all shadow-sm hover:border-gray-300 font-semibold appearance-none cursor-pointer"
              >
                <option value="retail">Perakende & E-Ticaret</option>
                <option value="services">Hizmet Sektörü</option>
                <option value="tech">Teknoloji & Yazılım</option>
                <option value="food">Gıda & Restoran</option>
                <option value="other">Diğer</option>
            </select>
              <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          
          {/* Modern Action Button */}
          {!showResults ? (
            <button 
              onClick={handleCalculate}
              className="group relative w-full py-5 px-8 bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 hover:from-blue-500 hover:via-violet-500 hover:to-fuchsia-500 text-white font-black text-base rounded-2xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              <span className="relative flex items-center justify-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
                Potansiyelimi Hesapla
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          ) : (
            <button 
              onClick={handleReset}
              className="group w-full py-5 px-8 bg-white hover:bg-gray-50 text-gray-900 font-bold text-base rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-gray-300 flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Yeniden Hesapla
            </button>
          )}
          </div>
        </div>
        
        {/* Sağ Taraf - Modern Results */}
        <div className={`relative transition-all duration-700 ${!showResults ? 'opacity-40 pointer-events-none' : 'opacity-100'}`}>
          {/* Results Container */}
          <div className="bg-gradient-to-br from-white via-violet-50/30 to-fuchsia-50/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-xl">
            {/* Results Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-violet-500/10 mb-4">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-700">Sonuçlarınız</span>
              </div>
              <h3 className="text-2xl font-black bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-2">
                Karasu ile Potansiyeliniz
              </h3>
            </div>
            
            {/* Modern Circular Progress */}
            <div className="relative h-72 mb-8 flex items-center justify-center">
              <div className="relative w-56 h-56">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                
                {/* Progress Ring */}
                <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  {/* Background Circle */}
                  <circle 
                    cx="50" cy="50" r="42" 
                    fill="none" 
                    stroke="#e5e7eb" 
                    strokeWidth="6"
                  />
                  {/* Progress Circle with Gradient */}
                  <circle 
                    cx="50" cy="50" r="42" 
                    fill="none" 
                    stroke="url(#potentialGradient)" 
                    strokeWidth="6"
                    strokeDasharray="264"
                    strokeDashoffset={264 - (264 * animateValue / 100)}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out drop-shadow-lg"
                  />
                  <defs>
                    <linearGradient id="potentialGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#d946ef" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Center Content */}
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-6xl font-black bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent mb-2 drop-shadow-sm">
                    {animateValue}%
                  </span>
                  <span className="text-sm font-bold text-gray-600 uppercase tracking-wider">Potansiyel</span>
              </div>
            </div>
          </div>
          
          {/* Modern Result Message */}
          <div className="relative overflow-hidden rounded-2xl mb-6">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-violet-500/10"></div>
            
            {/* Content */}
            <div className="relative p-6 border border-blue-200/50 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
                </div>
                
                {/* Text Content */}
                <div className="flex-1">
                  <h4 className="text-xl font-black text-gray-900 mb-2">
                    {animateValue < 40 ? '🚀 Büyük Potansiyel Mevcut!' : 
                     animateValue < 70 ? '⭐ Etkileyici Fırsatlar!' : 
                     '🏆 Olağanüstü Başarı Yolunda!'}
                </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                  {animateValue < 40 ? 
                      'Markanızın dijital potansiyeli henüz tam olarak kullanılmamış. Karasu Medya ile bu fırsatları değerlendirin.' : 
                   animateValue < 70 ? 
                      'Markanız iyi bir temele sahip. Karasu Medya ile hedeflerinizi aşabilirsiniz.' : 
                      'Markanız güçlü bir performans gösteriyor. Karasu Medya ile bu başarıyı kalıcı hale getirin.'}
                </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Modern CTA Button */}
          <Link 
            href="/iletisim"
            className="group relative block w-full py-5 px-8 bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 hover:from-blue-500 hover:via-violet-500 hover:to-fuchsia-500 text-white font-black text-base rounded-2xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
            <span className="relative flex items-center justify-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            Ücretsiz Danışmanlık Alın
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>
          </div>
        </div>
      </div>
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
    <div className="w-full overflow-hidden">
      {/* 1. Hero Section - Modernized */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Background Image with Enhanced Overlay */}
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              {/* Desktop Image */}
              <Image 
                src="https://villaqrmenu.b-cdn.net/karasubasin/KARASU%20BANNER.png"
                alt="Karasu Hero Background"
                fill
                sizes="100vw"
                priority
                className="hidden sm:block object-cover object-center"
              />
              {/* Mobile Image */}
              <Image 
                src="https://villaqrmenu.b-cdn.net/karasubasin/KARASUBANNERMB.png"
                alt="Karasu Hero Background - Mobil"
                fill
                sizes="100vw"
                priority
                className="block sm:hidden object-cover object-center"
              />
            </div>
          </div>
          {/* Modern Gradient Overlay with Mesh Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-indigo-900/90 to-violet-900/95 z-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)] z-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(139,92,246,0.1),transparent_50%)] z-10"></div>
          
          {/* Modern Animated Particles with Glassmorphism */}
          <div className="absolute inset-0 z-20">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/30 rounded-full mix-blend-overlay filter blur-3xl animate-float"></div>
            <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-violet-500/30 rounded-full mix-blend-overlay filter blur-3xl animate-float animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-overlay filter blur-3xl animate-float animation-delay-4000"></div>
            <div className="absolute bottom-1/3 right-1/3 w-56 h-56 bg-fuchsia-500/30 rounded-full mix-blend-overlay filter blur-3xl animate-float animation-delay-3000"></div>
          </div>
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 z-15 opacity-[0.02]">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-screen z-30 flex flex-col justify-center items-center text-center md:text-left md:items-start">
          <div className="w-full max-w-5xl">
            {/* Mobile Premium Badge - Visible on Mobile */}
            <div className="sm:hidden inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white mb-6 shadow-xl">
              <span className="flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-white">Dijital Lider</span>
            </div>
            
            {/* Desktop Premium Badge */}
            <div className="hidden sm:inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white mb-8 shadow-2xl shadow-blue-500/10 hover:bg-white/15 transition-all duration-300 group">
              <div className="relative">
                <span className="flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-gradient-to-r from-blue-400 to-violet-400"></span>
                </span>
              </div>
              <span className="text-sm font-semibold uppercase tracking-widest bg-gradient-to-r from-blue-200 to-violet-200 bg-clip-text text-transparent">Dijital Pazarlamanın Lideri</span>
              <svg className="w-4 h-4 text-blue-300 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
            
            {/* Mobile Title - Optimized */}
            <div className="sm:hidden mb-8">
              <h1 className="text-4xl font-black leading-tight text-white mb-4 drop-shadow-2xl">
                Sosyal Medyada
              </h1>
              <div className="relative inline-block">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-violet-400 rounded-xl blur-lg opacity-50"></div>
                <h1 className="relative text-4xl font-black bg-gradient-to-r from-blue-300 via-violet-300 to-fuchsia-200 bg-clip-text text-transparent drop-shadow-lg">
                  Sınırları Aşın
                </h1>
              </div>
            </div>
            
            {/* Desktop Title with Typewriter */}
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-black mb-10 leading-[1.1] min-h-[2.4em] hidden sm:block">
              <div className="mb-2">
                <span className="text-white drop-shadow-2xl">
                {desktopTitle1}
                </span>
                {currentStep === 'title1' && showCursor && <span className="text-blue-400 animate-pulse">|</span>}
              </div>
              <div className="relative inline-block">
                <span className="absolute -inset-2 bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 rounded-2xl blur-2xl opacity-40 animate-pulse"></span>
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-violet-300 to-fuchsia-200 drop-shadow-lg">
                  {desktopTitle2}
                  {currentStep === 'title2' && showCursor && <span className="text-blue-300 animate-pulse">|</span>}
                </span>
              </div>
            </h1>
            
            {/* Modern Description - Mobile Optimized */}
            <div className="mt-6 sm:mt-12">
              {/* Mobile Description - Simplified */}
              <div className="sm:hidden bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-xl">
                <p className="text-base text-blue-50/90 leading-relaxed">
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-violet-300">Karasu</span> ile markanızın dijital izini güçlendirin.
                </p>
              </div>
              
              {/* Desktop Description - Full */}
              <div className="hidden sm:block bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-8 max-w-3xl shadow-2xl shadow-blue-500/5">
                <p className="text-lg md:text-xl text-blue-50/90 leading-relaxed font-normal min-h-[2.4em]">
                {descriptionText && (
                  <>
                    {descriptionText.includes("Karasu") ? (
                      <>
                          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-violet-300">Karasu</span>
                        {descriptionText.replace("Karasu", "")}
                      </>
                    ) : (
                      descriptionText
                    )}
                    {currentStep === 'description' && showCursor && (
                        <span className="text-blue-400 animate-pulse ml-0.5">|</span>
                    )}
                  </>
                )}
              </p>
              </div>
            </div>
            
            {/* Modern CTA Buttons - Mobile Optimized */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 sm:mt-12 mb-8 sm:mb-12 w-full sm:w-auto">
              {/* Primary Button */}
              <Link
                href="/hizmetler"
                className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 font-bold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 rounded-xl sm:rounded-2xl hover:shadow-2xl hover:shadow-blue-500/50 sm:hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-400/50 overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute inset-0 w-full h-full">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                </span>
                <span className="relative flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="font-black">Hizmetleri Keşfet</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              
              {/* Secondary Button */}
              <Link
                href="/iletisim"
                className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 font-semibold text-white transition-all duration-300 bg-white/10 backdrop-blur-xl border-2 border-white/20 rounded-xl sm:rounded-2xl hover:bg-white/20 hover:border-white/30 hover:shadow-xl hover:shadow-white/10 sm:hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/30"
              >
                <span className="relative flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span className="font-bold">İletişim</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
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

      {/* 2. Karasu Hizmetleri Section - Modernized */}
      <section className="relative bg-gradient-to-b from-slate-50 via-white to-blue-50/30 pt-24 pb-32 overflow-hidden">
        {/* Modern Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-100 to-violet-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-100 to-fuchsia-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-pink-100 to-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
          
          {/* Dot Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          {/* Modern Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-100 to-violet-100 text-blue-700 mb-6 shadow-lg shadow-blue-100/50">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <span className="font-bold text-sm uppercase tracking-wider">Hizmetlerimiz</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black mb-8 bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent leading-tight">
              Markanızı Zirveye Taşıyoruz
            </h2>
            <p className="text-gray-600 text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Karasu Medya olarak, markanızın dijital dünyada parlayan bir yıldız olması için çalışıyoruz. Modern pazarlama stratejileri ve yaratıcı içerik üretimi ile işletmenizi bir üst seviyeye taşıyoruz.
            </p>
            <div className="flex items-center justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="text-4xl font-black bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-1">500+</div>
                <div className="text-sm text-gray-500 font-medium">Mutlu Müşteri</div>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
              <div className="text-center">
                <div className="text-4xl font-black bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent mb-1">10+</div>
                <div className="text-sm text-gray-500 font-medium">Yıllık Tecrübe</div>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
              <div className="text-center">
                <div className="text-4xl font-black bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent mb-1">1000+</div>
                <div className="text-sm text-gray-500 font-medium">Tamamlanan Proje</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 mx-auto max-w-7xl">
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
              <div 
                key={index} 
                className="group relative perspective-1000 h-full"
                style={{ perspective: '1000px' }}
              >
                {/* Outer Glow Ring */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${service.buttonGradient} rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700 group-hover:animate-pulse`}></div>
                
                {/* Main Card - 3D Transform Container */}
                <div className="relative h-full bg-gradient-to-br from-white via-gray-50/50 to-white rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden transition-all duration-700 group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] group-hover:scale-[1.02] group-hover:[transform:rotateX(2deg)_rotateY(-2deg)] flex flex-col">
                  
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-500">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                      backgroundSize: '32px 32px'
                    }}></div>
                  </div>
                  
                  {/* Top Section - Icon + Title */}
                  <div className="relative p-8 pb-6 h-48 flex flex-col justify-between">
                    {/* Mega Icon */}
                    <div className="relative mb-6">
                      {/* Icon Glow */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.buttonGradient} rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition-all duration-500 group-hover:scale-110`}></div>
                      
                      {/* Icon Container */}
                      <div className={`relative w-20 h-20 bg-gradient-to-br ${service.buttonGradient} rounded-3xl flex items-center justify-center shadow-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-[-8deg]`}>
                        <div className="text-white scale-125">
                          {service.icon}
                        </div>
                      </div>
                      
                      {/* Floating Particles */}
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-blue-400 to-violet-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gradient-to-br from-violet-400 to-fuchsia-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    
                    {/* Title Section - Fixed Height */}
                    <div className="flex-1 flex flex-col justify-end">
                      {/* Title */}
                      <h3 className={`text-3xl font-black mb-3 bg-gradient-to-r ${service.buttonGradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 origin-left leading-tight`}>
                        {service.title}
                      </h3>
                      
                      {/* Decorative Line */}
                      <div className={`h-1.5 w-16 bg-gradient-to-r ${service.buttonGradient} rounded-full transition-all duration-500 group-hover:w-full`}></div>
                    </div>
                  </div>
                  
                  {/* Image Preview - Compact */}
                  <div className="relative h-48 mx-8 mt-8 md:mt-12 mb-6 rounded-2xl overflow-hidden shadow-xl">
                  <Image 
                    src={service.image}
                    alt={service.title}
                    layout="fill" 
                    objectFit="cover" 
                      className="transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                  />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} to-black/50 mix-blend-overlay opacity-60 group-hover:opacity-40 transition-opacity duration-500`}></div>
                    
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 skew-x-12 group-hover:animate-[shine_1.5s_ease-in-out]"></div>
                </div>
                  
                  {/* Description */}
                  <div className="px-8 mb-6">
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {service.description}
                    </p>
                      </div>
                  
                  {/* Tags - Minimal Pills */}
                  <div className="px-8 mb-6 flex flex-wrap gap-2">
                    {service.tags.slice(0, 4).map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${service.tagBg} ${service.tagColor} backdrop-blur-sm`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  
                  {/* CTA Button - Full Width Bottom */}
                  <div className="p-8 pt-4 mt-auto">
                    <Link 
                      href={service.link} 
                      className="group/btn relative block w-full"
                    >
                      {/* Button Background with Gradient */}
                      <div className={`relative w-full py-4 px-6 bg-gradient-to-r ${service.buttonGradient} rounded-2xl overflow-hidden transition-all duration-300 group-hover/btn:shadow-2xl group-hover/btn:shadow-${service.titleColor}/50`}>
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                        
                        {/* Button Text */}
                        <div className="relative flex items-center justify-between text-white">
                          <span className="font-black text-base uppercase tracking-wide">Keşfet</span>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold opacity-90">Detaylı Bilgi</span>
                            <svg className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  
                  {/* Corner Accent */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${service.buttonGradient} opacity-5 rounded-bl-[100px] transition-all duration-500 group-hover:opacity-10 group-hover:scale-110`}></div>
                </div>
              </div>
            ))}
          </div>
          
           {/* Premium Feature Section */}
           <div className="relative mt-20 mb-20">
             {/* Elegant Header */}
             <div className="text-center mb-16">
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-100 to-gray-50 border border-gray-200 mb-6">
                 <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600"></div>
                 <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Hizmetlerimiz</span>
               </div>
               <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                 Sizin İçin Neler Yapabiliriz?
               </h3>
               <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light">
                 Profesyonel dijital çözümlerimizle markanızı büyütüyor, hedeflerinize ulaşmanızı sağlıyoruz
               </p>
            </div>
            
             {/* Premium Cards Grid */}
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
               {/* Card 1 - Dijital Pazarlama */}
               <div className="group relative h-full">
                 {/* Outer Glow Effect */}
                 <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-blue-600 rounded-[2rem] blur-lg opacity-0 group-hover:opacity-30 transition-all duration-700"></div>
                 
                 {/* Card Container */}
                 <div className="relative h-full bg-gradient-to-br from-white to-blue-50/30 rounded-[2rem] p-8 shadow-xl border-2 border-white hover:border-blue-100/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl backdrop-blur-sm flex flex-col">
                   {/* Top Corner Decoration */}
                   <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-[2rem] rounded-tr-[2rem]"></div>
                   
                   {/* Premium Icon with Floating Effect */}
                   <div className="mb-6 relative">
                     <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl blur-md opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                     <div className="relative w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6">
                       <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
            </div>

                   {/* Content Section - Flex Grow */}
                   <div className="flex-1 flex flex-col">
                     {/* Title */}
                     <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                       Dijital Pazarlama
                     </h4>
                     
                     {/* Description */}
                     <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                       SEO, SEM ve Sosyal Medya Yönetimi ile dijital varlığınızı güçlendirin
                     </p>
                     
                     {/* Arrow CTA */}
                     <div className="flex items-center text-blue-600 text-sm font-bold mt-auto">
                       <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">Detaylı İncele</span>
                       <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
                   </div>
                 </div>
            </div>

               {/* Card 2 - Yaratıcı Tasarım */}
               <div className="group relative h-full">
                 <div className="absolute -inset-1 bg-gradient-to-br from-purple-500 to-purple-600 rounded-[2rem] blur-lg opacity-0 group-hover:opacity-30 transition-all duration-700"></div>
                 
                 <div className="relative h-full bg-gradient-to-br from-white to-purple-50/30 rounded-[2rem] p-8 shadow-xl border-2 border-white hover:border-purple-100/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl backdrop-blur-sm flex flex-col">
                   <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-[2rem] rounded-tr-[2rem]"></div>
                   
                   <div className="mb-6 relative">
                     <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl blur-md opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                     <div className="relative w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6">
                       <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
            </div>

                   <div className="flex-1 flex flex-col">
                     <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                       Yaratıcı Tasarım
                     </h4>
                     
                     <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                       Logo, Web ve Marka Kimliği ile markanızı öne çıkarın
                     </p>
                     
                     <div className="flex items-center text-purple-600 text-sm font-bold mt-auto">
                       <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">Detaylı İncele</span>
                       <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
                   </div>
                 </div>
               </div>

               {/* Card 3 - Organizasyon */}
               <div className="group relative h-full">
                 <div className="absolute -inset-1 bg-gradient-to-br from-amber-500 to-amber-600 rounded-[2rem] blur-lg opacity-0 group-hover:opacity-30 transition-all duration-700"></div>
                 
                 <div className="relative h-full bg-gradient-to-br from-white to-amber-50/30 rounded-[2rem] p-8 shadow-xl border-2 border-white hover:border-amber-100/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl backdrop-blur-sm flex flex-col">
                   <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-500/10 to-transparent rounded-bl-[2rem] rounded-tr-[2rem]"></div>
                   
                   <div className="mb-6 relative">
                     <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl blur-md opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                     <div className="relative w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6">
                       <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                       </svg>
                     </div>
                   </div>
                   
                   <div className="flex-1 flex flex-col">
                     <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                       Organizasyon
                     </h4>
                     
                     <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                       Etkinlik ve Özel Organizasyonlar ile unutulmaz anılar yaratın
                     </p>
                     
                     <div className="flex items-center text-amber-600 text-sm font-bold mt-auto">
                       <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">Detaylı İncele</span>
                       <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                       </svg>
                     </div>
                   </div>
                 </div>
               </div>

               {/* Card 4 - Matbaa */}
               <div className="group relative h-full">
                 <div className="absolute -inset-1 bg-gradient-to-br from-teal-500 to-teal-600 rounded-[2rem] blur-lg opacity-0 group-hover:opacity-30 transition-all duration-700"></div>
                 
                 <div className="relative h-full bg-gradient-to-br from-white to-teal-50/30 rounded-[2rem] p-8 shadow-xl border-2 border-white hover:border-teal-100/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl backdrop-blur-sm flex flex-col">
                   <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-teal-500/10 to-transparent rounded-bl-[2rem] rounded-tr-[2rem]"></div>
                   
                   <div className="mb-6 relative">
                     <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl blur-md opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                     <div className="relative w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6">
                       <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                       </svg>
                     </div>
                   </div>
                   
                   <div className="flex-1 flex flex-col">
                     <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors duration-300">
                       Matbaa
                     </h4>
                     
                     <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                       Kartvizit, Broşür ve Katalog ile profesyonel baskı çözümleri
                     </p>
                     
                     <div className="flex items-center text-teal-600 text-sm font-bold mt-auto">
                       <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">Detaylı İncele</span>
                       <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                       </svg>
                     </div>
                   </div>
                 </div>
               </div>
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

      {/* 3. Instagram Latest Posts - Modernized */}
      <section className="py-32 bg-gradient-to-b from-white via-purple-50/30 to-pink-50/30 relative overflow-hidden">
        {/* Modern Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-pink-200/40 to-fuchsia-200/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-violet-200/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative">
          {/* Premium Header Section */}
          <div className="text-center mb-16 relative">
            {/* Elegant Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-100 to-gray-50 border border-gray-200 mb-6">
              <div className="w-6 h-6 relative">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="opacity-80"
                />
              </div>
              <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Sosyal Medya Hesaplarımız</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Instagram&apos;da Bizi Takip Edin
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg font-light">
              Tüm hizmetlerimiz hakkında güncel bilgiler ve projelerimiz için Instagram hesaplarımızı takip edebilirsiniz
            </p>
          </div>
          
          {/* Premium Instagram Accounts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {/* Instagram Account 1 */}
            <a href="https://www.instagram.com/karasureklamajansi" target="_blank" rel="noopener noreferrer" className="group relative h-full">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-blue-600 rounded-[2rem] blur-lg opacity-0 group-hover:opacity-25 transition-all duration-500"></div>
              
              {/* Card Container */}
              <div className="relative h-full bg-gradient-to-br from-white to-blue-50/20 rounded-[2rem] shadow-xl border-2 border-white hover:border-blue-100/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl backdrop-blur-sm overflow-hidden">
                {/* Top Corner Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-[2rem] rounded-tr-[2rem]"></div>
                
                {/* Account Header */}
                <div className="flex items-center p-5 border-b border-gray-100/50">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden mr-3 ring-2 ring-blue-500/30 group-hover:ring-blue-500/50 transition-all duration-300">
                    <Image 
                      src="https://villaqrmenu.b-cdn.net/447297083_1488295202123950_879512158476665056_n.jpg" 
                      alt="Karasu Reklam Ajansı"
                      width={56}
                      height={56}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">karasureklamajansi</p>
                    <p className="text-xs text-gray-500 font-medium">Reklam Ajansı</p>
                  </div>
                  <div className="text-blue-500 transform group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </div>
                </div>
                
                {/* Account Preview */}
                <div className="p-5">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Reklam ve tanıtım hizmetlerimiz hakkında güncel bilgiler ve çalışmalarımız için takip edin
                  </p>
                  <div className="flex items-center text-blue-600 text-sm font-bold">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">Profili Görüntüle</span>
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
            
            {/* Instagram Account 2 */}
            <a href="https://www.instagram.com/karasumedya_" target="_blank" rel="noopener noreferrer" className="group relative h-full">
              <div className="absolute -inset-1 bg-gradient-to-br from-purple-500 to-purple-600 rounded-[2rem] blur-lg opacity-0 group-hover:opacity-25 transition-all duration-500"></div>
              
              <div className="relative h-full bg-gradient-to-br from-white to-purple-50/20 rounded-[2rem] shadow-xl border-2 border-white hover:border-purple-100/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl backdrop-blur-sm overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-[2rem] rounded-tr-[2rem]"></div>
                
                <div className="flex items-center p-5 border-b border-gray-100/50">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden mr-3 ring-2 ring-purple-500/30 group-hover:ring-purple-500/50 transition-all duration-300">
                    <Image 
                      src="https://villaqrmenu.b-cdn.net/karasuekip/karasu_medya.jpg" 
                      alt="Karasu Medya"
                      width={56}
                      height={56}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">karasumedya_</p>
                    <p className="text-xs text-gray-500 font-medium">Sosyal Medya Yönetimi</p>
                  </div>
                  <div className="text-purple-500 transform group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </div>
                </div>
                
                <div className="p-5">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Sosyal medya içeriklerimiz, stratejilerimiz ve başarı hikayelerimiz için takip edin
                  </p>
                  <div className="flex items-center text-purple-600 text-sm font-bold">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">Profili Görüntüle</span>
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
            
            {/* Instagram Account 3 */}
            <a href="https://www.instagram.com/karasumatbaahizmetleri" target="_blank" rel="noopener noreferrer" className="group relative h-full">
              <div className="absolute -inset-1 bg-gradient-to-br from-teal-500 to-teal-600 rounded-[2rem] blur-lg opacity-0 group-hover:opacity-25 transition-all duration-500"></div>
              
              <div className="relative h-full bg-gradient-to-br from-white to-teal-50/20 rounded-[2rem] shadow-xl border-2 border-white hover:border-teal-100/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl backdrop-blur-sm overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-teal-500/10 to-transparent rounded-bl-[2rem] rounded-tr-[2rem]"></div>
                
                <div className="flex items-center p-5 border-b border-gray-100/50">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden mr-3 ring-2 ring-teal-500/30 group-hover:ring-teal-500/50 transition-all duration-300">
                    <Image 
                      src="https://villaqrmenu.b-cdn.net/karasuekip/karasumatbaa.jpg" 
                      alt="Karasu Matbaa Hizmetleri"
                      width={56}
                      height={56}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-900 group-hover:text-teal-600 transition-colors duration-300">karasumatbaahizmetleri</p>
                    <p className="text-xs text-gray-500 font-medium">Matbaa Hizmetleri</p>
                  </div>
                  <div className="text-teal-500 transform group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </div>
                </div>
                
                <div className="p-5">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Yüksek kaliteli baskı çözümlerimiz ve matbaa hizmetlerimiz hakkında bilgi almak için takip edin
                  </p>
                  <div className="flex items-center text-teal-600 text-sm font-bold">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">Profili Görüntüle</span>
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
            
            {/* Instagram Account 4 */}
            <a href="https://www.instagram.com/karasuorganizasyon_" target="_blank" rel="noopener noreferrer" className="group relative h-full">
              <div className="absolute -inset-1 bg-gradient-to-br from-amber-500 to-amber-600 rounded-[2rem] blur-lg opacity-0 group-hover:opacity-25 transition-all duration-500"></div>
              
              <div className="relative h-full bg-gradient-to-br from-white to-amber-50/20 rounded-[2rem] shadow-xl border-2 border-white hover:border-amber-100/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl backdrop-blur-sm overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-amber-500/10 to-transparent rounded-bl-[2rem] rounded-tr-[2rem]"></div>
                
                <div className="flex items-center p-5 border-b border-gray-100/50">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden mr-3 ring-2 ring-amber-500/30 group-hover:ring-amber-500/50 transition-all duration-300">
                    <Image 
                      src="https://villaqrmenu.b-cdn.net/karasuekip/karasuorganizasyon.jpg" 
                      alt="Karasu Organizasyon"
                      width={56}
                      height={56}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-900 group-hover:text-amber-600 transition-colors duration-300">karasuorganizasyon_</p>
                    <p className="text-xs text-gray-500 font-medium">Organizasyon Hizmetleri</p>
                  </div>
                  <div className="text-amber-500 transform group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </div>
                </div>
                
                <div className="p-5">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Özel günleriniz için organizasyon hizmetlerimiz ve gerçekleştirdiğimiz etkinlikler için takip edin
                  </p>
                  <div className="flex items-center text-amber-600 text-sm font-bold">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">Profili Görüntüle</span>
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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

      {/* Müşteri Yorumları Section - Modernized */}
      <section className="py-32 bg-gradient-to-br from-blue-50 via-indigo-50/30 to-violet-50/30 relative overflow-hidden">
        {/* Modern Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-blue-200/50 to-indigo-200/50 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-br from-indigo-200/50 to-violet-200/50 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-gradient-to-br from-pink-200/40 to-blue-200/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-3000"></div>
          
          {/* Decorative Lines */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(59, 130, 246, 0.4) 35px, rgba(59, 130, 246, 0.4) 36px)`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          {/* Premium Header */}
          <div className="text-center mb-16 relative">
            {/* Elegant Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-100 to-gray-50 border border-gray-200 mb-6">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map((i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
                ))}
            </div>
              <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Müşteri Memnuniyeti</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Müşterilerimiz Ne Diyor?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg font-light">
              Müşterilerimizle kurduğumuz güçlü iş birlikleri ve onlara sunduğumuz katma değerli hizmetler hakkında görüşleri
            </p>
          </div>

          {/* Premium Testimonials Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Testimonial 1 */}
              <div className="group relative h-full">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-[2rem] blur-lg opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
                
                {/* Card */}
                <div className="relative h-full bg-gradient-to-br from-white to-blue-50/20 rounded-[2rem] p-8 shadow-xl border-2 border-white hover:border-blue-100/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl backdrop-blur-sm flex flex-col">
                  {/* Top Corner Decoration */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-[2rem] rounded-tr-[2rem]"></div>
                  
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <svg className="w-10 h-10 text-blue-500/30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  </div>
                  
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  
                  {/* Content */}
                  <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-1">
                    &quot;Karasu Medya ile çalışmaya başladıktan sonra sosyal medya etkileşimlerimiz %120 arttı. Profesyonel yaklaşımları ve stratejik önerileri sayesinde marka bilinirliğimiz önemli ölçüde gelişti.&quot;
                  </p>
                  
                  {/* Author */}
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <p className="font-bold text-gray-900">Ayşe Yılmaz</p>
                    <p className="text-gray-500 text-xs font-medium">Pazarlama Direktörü, TechSoft</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="group relative h-full">
                <div className="absolute -inset-1 bg-gradient-to-br from-purple-500 to-pink-500 rounded-[2rem] blur-lg opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
                
                <div className="relative h-full bg-gradient-to-br from-white to-purple-50/20 rounded-[2rem] p-8 shadow-xl border-2 border-white hover:border-purple-100/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl backdrop-blur-sm flex flex-col">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-[2rem] rounded-tr-[2rem]"></div>
                  
                  <div className="mb-6">
                    <svg className="w-10 h-10 text-purple-500/30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  </div>
                  
                  <div className="flex items-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  
                  <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-1">
                    &quot;E-ticaret sitemiz için SEO ve dijital reklam çalışmaları yapan Karasu ekibi, satışlarımızı ilk 3 ayda %85 artırmayı başardı. Verimli bütçe kullanımı ve şeffaf raporlama anlayışları için teşekkür ederiz.&quot;
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <p className="font-bold text-gray-900">Mehmet Kaya</p>
                    <p className="text-gray-500 text-xs font-medium">Genel Müdür, ModaVista</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="group relative h-full">
                <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-[2rem] blur-lg opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
                
                <div className="relative h-full bg-gradient-to-br from-white to-indigo-50/20 rounded-[2rem] p-8 shadow-xl border-2 border-white hover:border-indigo-100/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl backdrop-blur-sm flex flex-col">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-bl-[2rem] rounded-tr-[2rem]"></div>
                  
                  <div className="mb-6">
                    <svg className="w-10 h-10 text-indigo-500/30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  </div>
                  
                  <div className="flex items-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  
                  <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-1">
                    &quot;Karasu Medya&apos;nın içerik üretim ekibi, markamızın sesini mükemmel bir şekilde yakaladı. Blog ve sosyal medya içeriklerimizin etkileşimleri arttı, organik erişimimiz genişledi. Yaratıcı ve sonuç odaklı yaklaşımları için teşekkürler.&quot;
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <p className="font-bold text-gray-900">Zeynep Demir</p>
                    <p className="text-gray-500 text-xs font-medium">İçerik Yöneticisi, HealthPlus</p>
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

      {/* 4. About Us Section - Modernized */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        {/* Modern Background Effects */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="opacity-5"
          />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 via-indigo-900/50 to-violet-950/50"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(139,92,246,0.15),transparent_50%)]"></div>
          
          {/* Animated Particles */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl animate-float"></div>
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-violet-500/20 rounded-full filter blur-3xl animate-float animation-delay-2000"></div>
        </div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          {/* Premium Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            {/* Elegant Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-violet-400"></div>
              <span className="text-sm font-semibold uppercase tracking-wide text-white/90">Hakkımızda</span>
            </div>
            
            {/* Modern Heading */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-blue-200 via-violet-200 to-fuchsia-200 bg-clip-text text-transparent">Farklı Düşün,</span>{' '}
              <span className="text-white">Fark Yarat</span>
            </h2>
            
            <p className="text-lg md:text-xl text-blue-100/80 leading-relaxed max-w-2xl mx-auto font-light">
              Dijitalleşen dünyada sizin en büyük yardımcınız <span className="font-semibold text-white">Karasu</span> ile markanızı zirveye taşıyoruz
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
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


      {/* 6. Teklif Al CTA - Modernized */}
      <section className="py-32 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 relative overflow-hidden">
        {/* Modern Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent_50%)]"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(139,92,246,0.3),transparent_50%)]"></div>
          
          {/* Animated Particles */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full filter blur-3xl animate-float"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-300/20 rounded-full filter blur-3xl animate-float animation-delay-2000"></div>
          </div>
          
          {/* Decorative Wave */}
          <svg className="absolute bottom-0 left-0 w-full opacity-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="1" d="M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,240C672,213,768,171,864,149.3C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            {/* Premium Header */}
            <div className="text-center mb-12">
              {/* Elegant Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
                <div className="w-2 h-2 rounded-full bg-white"></div>
                <span className="text-sm font-semibold uppercase tracking-wide text-white/90">Hemen Başlayın</span>
              </div>
              
              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight tracking-tight">
                Projeniz İçin Hemen Teklif Alın
              </h2>
              
              <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto font-light">
                Size özel çözümler için ekibimiz hızlıca dönüş yapacaktır
              </p>
            </div>
            
            {/* Premium Form Container */}
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-white/20 to-white/10 rounded-[2rem] blur-xl"></div>
              
              {/* Form Card */}
              <div className="relative bg-white/10 backdrop-blur-2xl p-8 md:p-10 rounded-[2rem] border-2 border-white/20 shadow-2xl">
                <form className="space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white text-sm font-semibold mb-2">İsim Soyisim</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-5 py-3.5 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white/30 transition-all duration-300 hover:bg-white/15 hover:border-white/30"
                        placeholder="Ad Soyad"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white text-sm font-semibold mb-2">E-posta</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-5 py-3.5 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white/30 transition-all duration-300 hover:bg-white/15 hover:border-white/30"
                        placeholder="ornek@mail.com"
                      />
                    </div>
                  </div>
                  
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-white text-sm font-semibold mb-2">Telefon</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-5 py-3.5 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white/30 transition-all duration-300 hover:bg-white/15 hover:border-white/30"
                      placeholder="0555 555 55 55"
                    />
                  </div>
                  
                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-white text-sm font-semibold mb-2">Mesaj</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-5 py-3.5 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white/30 transition-all duration-300 hover:bg-white/15 hover:border-white/30 resize-none"
                      placeholder="Projeniz hakkında detaylı bilgi verin..."
                    ></textarea>
                  </div>
                  
                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="group relative w-full inline-flex items-center justify-center px-8 py-4 font-bold text-lg text-blue-700 bg-white rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-white/30 hover:scale-[1.02] overflow-hidden"
                    >
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-50 to-violet-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      <span className="relative flex items-center gap-3">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Teklif Al
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern CSS Animations & Styles */}
      <style jsx global>{`
        /* Smooth Blob Animation */
        @keyframes blob {
          0%, 100% { 
            transform: translate(0, 0) scale(1) rotate(0deg); 
          }
          25% { 
            transform: translate(30px, -30px) scale(1.15) rotate(90deg); 
          }
          50% { 
            transform: translate(-20px, 30px) scale(0.95) rotate(180deg); 
          }
          75% { 
            transform: translate(-30px, -20px) scale(1.08) rotate(270deg); 
          }
        }
        
        .animate-blob {
          animation: blob 15s infinite cubic-bezier(0.4, 0, 0.6, 1);
        }
        
        /* Float Animation for Particles */
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-15px) translateX(15px);
          }
        }
        
        .animate-float {
          animation: float 8s infinite ease-in-out;
        }
        
        /* Spin Slow Animation */
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        /* Reverse Animation */
        .animation-reverse {
          animation-direction: reverse;
        }
        
        /* Animation Delays */
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        /* Scroll Down Animation */
        @keyframes scroll-down {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          40% {
            opacity: 1;
          }
          80% {
            transform: translateY(20px);
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        }
        
        .animate-scroll-down {
          animation: scroll-down 2s infinite ease-in-out;
        }
        
        /* Wave Animation */
        @keyframes wave {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-wave {
          animation: wave 10s linear infinite;
        }
        
        .animate-wave-slow {
          animation: wave 15s linear infinite;
        }
        
        /* Fade In Animation */
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        
        /* Slide Up Animation */
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        
        /* Gradient Animation */
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 5s ease infinite;
        }
        
        /* Pulse Glow Animation */
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.6);
          }
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        /* Smooth Scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 12px;
        }
        
        ::-webkit-scrollbar-track {
          background: linear-gradient(to bottom, #f1f5f9, #e2e8f0);
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
          border-radius: 6px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #7c3aed);
        }
        
        /* Shine Animation */
        @keyframes shine {
          from {
            transform: translateX(-100%) skewX(-12deg);
          }
          to {
            transform: translateX(200%) skewX(-12deg);
          }
        }
        
        /* 3D Perspective */
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
}

// Modern About Card Component
function AboutCard({ title, description, icon }: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="group relative h-full">
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-violet-500 rounded-[2rem] blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
      
      {/* Card Container */}
      <div className="relative h-full bg-white/10 backdrop-blur-xl rounded-[2rem] p-8 border-2 border-white/20 hover:border-white/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col">
        {/* Top Corner Decoration */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-transparent rounded-bl-[2rem] rounded-tr-[2rem]"></div>
        
        {/* Icon Container */}
        <div className="mb-6">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-violet-600 rounded-2xl blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
            <div className="relative bg-gradient-to-br from-blue-500 to-violet-600 p-4 rounded-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl">
        {icon}
            </div>
          </div>
      </div>
      
        {/* Title */}
        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-200 group-hover:to-violet-200 transition-all duration-300">
        {title}
      </h3>
      
        {/* Description */}
        <p className="text-blue-100/70 leading-relaxed text-sm flex-1">
        {description}
      </p>
      </div>
    </div>
  );
}

