import React from 'react';
import { Link } from 'react-router-dom';
import InteractiveHero from '../components/InteractiveHero';

function About() {
  // Shop images array
  const shopImages = [
    "/ASSETS/shop/IMG_2555.jpg",
    "/ASSETS/shop/IMG_2651.jpg",
    "/ASSETS/shop/IMG_2619.jpg",
    "/ASSETS/shop/IMG_2633.jpg",
    "/ASSETS/shop/IMG_2638.jpg",
    "/ASSETS/shop/IMG_2553.jpg",
    "/ASSETS/shop/IMG_2538.jpg",
    "/ASSETS/shop/IMG_2546.jpg"
  ];

  return (
    <>
      {/* Interactive Hero Section with depth effect */}
      <InteractiveHero imageSrc={shopImages[0]} />

      {/* Content Section */}
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-black mb-6">
                СОЮЗ - это современный бренд одежды, созданный в Калининграде. Мы создаем уникальные предметы гардероба, которые сочетают в себе комфорт, стиль и качество.
              </p>
              <p className="text-lg text-black mb-6">
                Наша миссия - создавать одежду, которая станет неотъемлемой частью вашего гардероба, сохраняя при этом доступные цены и высокое качество.
              </p>
              <p className="text-lg text-black">
                Мы гордимся тем, что все наши изделия производятся в России с использованием современных технологий и материалов высочайшего качества.
              </p>
            </div>
            <div className="relative aspect-[4/3]">
              <img
                src={shopImages[1]}
                alt="О нас"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Shop Images Grid */}
        <div className="w-full grid grid-cols-4 gap-0">
          {shopImages.slice(2).map((image, index) => (
            <div key={index} className="aspect-[4/5] w-full">
              <img
                src={image}
                alt={`СОЮЗ магазин ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        
        {/* Enhanced tech-inspired button with sophisticated animation */}
        <div className="flex justify-center mt-12 px-4 pb-16">
          <Link 
            to="/" 
            className="tech-button relative inline-flex items-center justify-center px-12 py-3 min-w-[220px] text-lg font-medium tracking-wider text-black bg-white hover:bg-gray-100 transition-all duration-700 border border-black"
          >
            <span className="text-fade relative z-10 w-full text-center uppercase tracking-widest">
              На главную
            </span>
            <img 
              src="/ASSETS/союз лого пнг.png" 
              alt="Союз лого" 
              className="logo-reveal w-full h-full object-contain p-2"
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default About;