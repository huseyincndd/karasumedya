"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Iletisim() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        setSubmitted(true);
        // Form verilerini sıfırla
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          service: ''
        });
      } else {
        throw new Error('Form gönderilemedi');
      }
    } catch (error) {
      setError('Mesaj gönderilemedi. Lütfen tekrar deneyin.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Telefon",
      content: "+90 (531) 473 23 77",
      link: "tel:+905314732377"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "E-posta",
      content: "info@karasureklamajansi.com.tr",
      link: "mailto:info@karasureklamajansi.com.tr"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Adres",
      content: "Yalova Merkez",
      link: "https://maps.google.com/?q=Yalova Merkez"
    }
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      url: "https://instagram.com/karasumedya_"
    }
  ];

  const services = [
    "Sosyal Medya Yönetimi",
    "Dijital Pazarlama",
    "İçerik Üretimi",
    "Grafik Tasarım",
    "Diğer"
  ];

  const workingHours = [
    { day: "Pazartesi - Cuma", hours: "09:30 - 19:00" },
    { day: "Cumartesi", hours: "09:30 - 15:00" },
    { day: "Pazar", hours: "Kapalı" }
  ];

  return (
    <main className="min-h-screen pb-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/90 via-blue-800/80 to-indigo-900/90"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 pt-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              İletişim
            </h1>
            <p className="text-base md:text-lg text-blue-100 mb-6">
              Dijital pazarlama ihtiyaçlarınız için bizimle iletişime geçin. Size özel çözümler sunmak için buradayız.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactInfo.map((info, index) => (
                <a 
                  key={index} 
                  href={info.link}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-gray-600">{info.content}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-3">
                <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Bize Ulaşın</h2>
                  
                  {submitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-4">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Mesajınız Gönderildi!</h3>
                      <p className="text-gray-600 mb-6">Talebiniz ekibimize iletildi. En kısa sürede sizinle iletişime geçeceğiz.</p>
                      <button 
                        onClick={() => setSubmitted(false)}
                        className="inline-flex items-center px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
                      >
                        Yeni Mesaj Gönder
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Web3Forms Required Fields */}
                      <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "1f10b6ba-14c1-4400-a2a2-25134742da99"} />
                      <input type="hidden" name="subject" value="Yeni İletişim Formu Mesajı - Karasu Medya" />
                      <input type="hidden" name="from_name" value="Karasu Medya Website" />
                      
                      {/* Honeypot Spam Protection */}
                      <input type="checkbox" name="botcheck" className="hidden" style={{display: 'none'}} />
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">İsim Soyisim *</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder:text-gray-500"
                            placeholder="İsim Soyisim"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-posta *</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder:text-gray-500"
                            placeholder="ornek@mail.com"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder:text-gray-500"
                            placeholder="0555 555 55 55"
                          />
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Şirket / Kurum</label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder:text-gray-500"
                            placeholder="Şirket Adı"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">İlgilendiğiniz Hizmet</label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                        >
                          <option value="">Hizmet Seçin</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mesajınız *</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder:text-gray-500"
                          placeholder="Nasıl yardımcı olabiliriz?"
                        ></textarea>
                      </div>
                      {error && (
                        <div className="bg-red-50 border border-red-200 text-red-600 rounded-lg p-3 text-sm">
                          {error}
                        </div>
                      )}
                      <div>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 w-full md:w-auto ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Gönderiliyor...
                            </>
                          ) : (
                            <>
                              Gönder
                              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>

              {/* Additional Info */}
              <div className="lg:col-span-2">
                {/* Working Hours */}
                <div className="bg-blue-50 p-8 rounded-2xl shadow-lg mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                    <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Çalışma Saatlerimiz
                  </h3>
                  <div className="space-y-4">
                    {workingHours.map((item, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-gray-700 font-medium">{item.day}</span>
                        <span className="text-gray-600">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-8 rounded-2xl shadow-lg text-white">
                  <h3 className="text-xl font-semibold mb-6 text-center">Sosyal Medyada Bizi Takip Edin</h3>
                  <div className="flex justify-center">
                    {socialLinks.map((social, index) => (
                      <a 
                        key={index} 
                        href={social.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group relative bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-3"
                        aria-label={social.name}
                      >
                        <div className="w-8 h-8">
                          {social.icon}
                        </div>
                        <span className="font-medium text-lg">@karasumedya_</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </a>
                    ))}
                  </div>
                  <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-xl text-center">
                    <p className="text-sm text-blue-100">
                      Güncel projeleri ve dijital pazarlama ipuçlarını görmek için Instagram hesabımızı takip etmeyi unutmayın.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Bizi Ziyaret Edin</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Ofisimiz Yalova&apos;nın merkezi konumunda yer almaktadır. Bize ulaşmak için haritayı kullanabilir veya direkt olarak iletişime geçebilirsiniz.
              </p>
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-lg h-[450px] relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12232.580260879902!2d29.2751656!3d40.6554039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb49c71e5598f5%3A0x7ffdc8c1bcf4e994!2sYalova%2C%20Merkez%2FYalova!5e0!3m2!1str!2str!4v1717500946324!5m2!1str!2str" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Karasu Medya Ofis Konumu"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Sıkça Sorulan Sorular</h2>
              <p className="text-gray-600">İşte müşterilerimizin en çok sorduğu bazı sorular ve yanıtları.</p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: "Hizmetlerinizin fiyatları nedir?",
                  answer: "Her projenin kapsamı ve gereksinimlerine göre fiyatlandırma yapıyoruz. Size özel teklif almak için lütfen bizimle iletişime geçin."
                },
                {
                  question: "Ne kadar sürede geri dönüş yapıyorsunuz?",
                  answer: "Tüm iletişim taleplerine en geç 24 saat içerisinde dönüş yapmaya özen gösteriyoruz. Acil durumlar için telefon numaramızdan bize ulaşabilirsiniz."
                },
                {
                  question: "Ücretsiz danışmanlık hizmetiniz nasıl çalışıyor?",
                  answer: "Ücretsiz danışmanlık hizmetimiz, markanızın dijital potansiyelini değerlendirmek için bir ön görüşme içerir. Bu görüşmede ihtiyaçlarınızı analiz eder ve size özel bir strateji önerisi sunarız."
                },
                {
                  question: "Hangi sektörlerde hizmet veriyorsunuz?",
                  answer: "Perakende, turizm, teknoloji, sağlık, eğitim ve daha birçok sektörde deneyime sahibiz. Her sektörün kendine özgü dinamiklerini anlayarak, en uygun dijital stratejiyi geliştiriyoruz."
                },
                {
                  question: "Minimum sözleşme süreniz var mı?",
                  answer: "Projeden projeye değişmekle birlikte, sosyal medya yönetimi gibi süreklilik gerektiren hizmetlerde genellikle 3 aylık minimum sözleşme süremiz bulunmaktadır."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
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
              Hemen Başlamak İster misiniz?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Dijital dünyada markanızı bir adım öne çıkarmak için ilk adımı atın.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/hizmetler" 
                className="px-8 py-4 bg-white text-blue-700 font-medium rounded-xl hover:bg-blue-50 transition-colors duration-300"
              >
                Hizmetlerimizi İnceleyin
              </Link>
              <a 
                href="tel:+905314732377" 
                className="px-8 py-4 bg-transparent text-white border border-white font-medium rounded-xl hover:bg-white/10 transition-colors duration-300"
              >
                +90 (531) 473 23 77
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 