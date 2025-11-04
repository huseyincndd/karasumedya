"use client";

import { useState, useEffect } from 'react';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(true);
  const [showNotification, setShowNotification] = useState(false);
  const [hasShownNotification, setHasShownNotification] = useState(false);

  const whatsappNumber = "+905314732377"; // Karasu Medya WhatsApp numarası
  const defaultMessage = "Merhaba! Karasu Medya hizmetleri hakkında bilgi almak istiyorum.";
  
  // 10 saniye sonra bildirim göster
  useEffect(() => {
    if (hasShownNotification) return;

    const timer = setTimeout(() => {
      setShowNotification(true);
      setHasShownNotification(true);
      
      // Bildirim sesi çal
      playNotificationSound();
    }, 10000); // 10 saniye

    return () => clearTimeout(timer);
  }, [hasShownNotification]);

  // Bildirim sesi fonksiyonu - Web Audio API ile WhatsApp benzeri ses
  const playNotificationSound = () => {
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      const audioContext = new AudioContext();
      
      // Ses çalmak için kullanıcı etkileşimi gerekiyor olabilir, bu yüzden önce resume edelim
      if (audioContext.state === 'suspended') {
        audioContext.resume();
      }

      // İlk ton (ding)
      const oscillator1 = audioContext.createOscillator();
      const gainNode1 = audioContext.createGain();
      oscillator1.type = 'sine';
      oscillator1.frequency.setValueAtTime(800, audioContext.currentTime);
      oscillator1.frequency.exponentialRampToValueAtTime(1000, audioContext.currentTime + 0.1);
      
      gainNode1.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode1.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.01);
      gainNode1.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);

      oscillator1.connect(gainNode1);
      gainNode1.connect(audioContext.destination);

      // İkinci ton (dong) - 0.15 saniye sonra
      const oscillator2 = audioContext.createOscillator();
      const gainNode2 = audioContext.createGain();
      oscillator2.type = 'sine';
      oscillator2.frequency.setValueAtTime(800, audioContext.currentTime + 0.15);
      oscillator2.frequency.exponentialRampToValueAtTime(1000, audioContext.currentTime + 0.25);
      
      gainNode2.gain.setValueAtTime(0, audioContext.currentTime + 0.15);
      gainNode2.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.16);
      gainNode2.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

      oscillator2.connect(gainNode2);
      gainNode2.connect(audioContext.destination);

      // Sesleri çal
      oscillator1.start(audioContext.currentTime);
      oscillator1.stop(audioContext.currentTime + 0.15);
      
      oscillator2.start(audioContext.currentTime + 0.15);
      oscillator2.stop(audioContext.currentTime + 0.3);
    } catch (error) {
      // Eğer ses çalınamazsa, sessiz devam et
      console.log('Ses çalınamadı:', error);
    }
  };

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(defaultMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setShowNotification(false);
  };

  const handleNotificationClick = () => {
    handleWhatsAppClick();
  };

  const handleCloseNotification = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowNotification(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* WhatsApp Chat Mesajı Bildirimi */}
      {showNotification && (
        <div 
          onClick={handleNotificationClick}
          className="absolute bottom-24 right-0 mb-4 bg-white shadow-2xl rounded-xl sm:rounded-2xl cursor-pointer transform transition-all duration-500 ease-out animate-slide-up-notification hover:scale-[1.02] hover:shadow-3xl border border-gray-200 overflow-hidden"
          style={{
            animation: 'slideUpNotification 0.5s ease-out',
            width: '280px',
            maxWidth: 'calc(100vw - 48px)'
          }}
        >
          {/* WhatsApp Chat Header */}
          <div className="bg-[#075e54] px-3 py-2 sm:px-4 sm:py-3 flex items-center gap-2 sm:gap-3">
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                <svg 
                  className="w-5 h-5 sm:w-7 sm:h-7 text-white" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </div>
              {/* Çevrimiçi durumu */}
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 border-2 border-white rounded-full"></div>
            </div>

            {/* İsim ve durum */}
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold text-xs sm:text-sm truncate">
                Karasu Medya
              </p>
              <p className="text-green-100 text-[10px] sm:text-xs flex items-center gap-1">
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-300 rounded-full"></span>
                çevrimiçi
              </p>
            </div>

            {/* Kapatma butonu */}
            <button
              onClick={handleCloseNotification}
              className="text-white/80 hover:text-white transition-colors w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full hover:bg-white/10 flex-shrink-0"
              aria-label="Bildirimi kapat"
            >
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mesaj Balonu */}
          <div className="px-3 py-2 sm:px-4 sm:py-3 bg-[#ece5dd] relative">
            {/* WhatsApp mesaj balonu arka plan deseni */}
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'grid\' width=\'20\' height=\'20\' patternUnits=\'userSpaceOnUse\'%3E%3Cpath d=\'M 20 0 L 0 0 0 20\' fill=\'none\' stroke=\'%23000\' stroke-width=\'0.5\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'url(%23grid)\'/%3E%3C/svg%3E")',
            }}></div>
            
            {/* Mesaj içeriği */}
            <div className="relative">
              <div className="bg-white rounded-lg rounded-tl-none px-3 py-2 sm:px-4 sm:py-3 shadow-sm border border-gray-200/50 mb-1.5 sm:mb-2">
                <p className="text-gray-800 text-xs sm:text-sm leading-relaxed">
                  Merhaba! 👋 Karasu Medya&apos;ya hoş geldiniz. Size nasıl yardımcı olabiliriz?
                </p>
              </div>
              
              {/* Mesaj zamanı */}
              <div className="flex items-center justify-end gap-1 px-1.5 sm:px-2">
                <span className="text-gray-500 text-[10px] sm:text-xs">şimdi</span>
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          {/* Ok işareti */}
          <div className="absolute -bottom-2 right-6 sm:right-8 w-0 h-0 border-l-6 border-r-6 border-t-6 sm:border-l-8 sm:border-r-8 sm:border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
        </div>
      )}

      {/* Ana WhatsApp Butonu */}
      <div className="relative group">
        {/* Hover mesaj balonu */}
        <div className="absolute bottom-20 right-0 bg-white shadow-xl rounded-lg px-4 py-3 mb-2 transform translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap">
          <div className="text-gray-800 font-medium text-sm">
            WhatsApp&apos;tan Bize Ulaşın
          </div>
          <div className="text-gray-600 text-xs mt-1">
            Hemen mesaj gönderin!
          </div>
          {/* Ok işareti */}
          <div className="absolute -bottom-2 right-4 w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
        </div>

        {/* Ana Buton */}
        <button
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none group"
          aria-label="WhatsApp ile iletişime geç"
        >
          {/* Dış halka animasyonu */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
          
          {/* WhatsApp Logo */}
          <svg 
            className="w-8 h-8 relative z-10" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </button>

        {/* Kapatma butonu */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute -top-2 -right-2 bg-gray-500 hover:bg-gray-600 text-white w-6 h-6 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
          aria-label="WhatsApp butonunu kapat"
        >
          ×
        </button>
      </div>

      {/* CSS Animasyonları */}
      <style jsx>{`
        @keyframes slideUpNotification {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-slide-up-notification {
          animation: slideUpNotification 0.5s ease-out;
        }
      `}</style>
    </div>
  );
} 