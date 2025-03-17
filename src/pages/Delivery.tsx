import React from 'react';
import { Link } from 'react-router-dom';
import InteractiveHero from '../components/InteractiveHero';

function Delivery() {
  return (
    <>
      {/* Interactive Hero Section with depth effect */}
      <InteractiveHero imageSrc="/ASSETS/shop/IMG_2555.jpg" />

      {/* Content Section */}
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-black">Способы доставки</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="font-medium mr-2 text-black">•</span>
                  <div>
                    <p className="font-medium text-black">Курьерская доставка по Калининграду</p>
                    <p className="text-black">Бесплатно при заказе от 5000 ₽</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2 text-black">•</span>
                  <div>
                    <p className="font-medium text-black">Почта России</p>
                    <p className="text-black">От 300 ₽, срок доставки 3-7 дней</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2 text-black">•</span>
                  <div>
                    <p className="font-medium text-black">СДЭК</p>
                    <p className="text-black">От 400 ₽, срок доставки 2-4 дня</p>
                  </div>
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-black">Способы оплаты</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="font-medium mr-2 text-black">•</span>
                  <div>
                    <p className="font-medium text-black">Банковской картой онлайн</p>
                    <p className="text-black">Visa, MasterCard, МИР</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2 text-black">•</span>
                  <div>
                    <p className="font-medium text-black">Наличными при получении</p>
                    <p className="text-black">Только при курьерской доставке</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="relative aspect-[4/3]">
              <img
                src="/ASSETS/shop/IMG_2651.jpg"
                alt="Доставка"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
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

export default Delivery;