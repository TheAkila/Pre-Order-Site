'use client';

import { ChevronDown } from 'lucide-react';
import Logo from './Logo';

export default function Hero() {
  const scrollToForm = () =>
    document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col justify-center items-center bg-white text-gray-800 overflow-hidden py-24 sm:py-0">
      
      {/* Optional Background Image */}
      <div className="absolute inset-0 -z-10 bg-cover bg-center opacity-20"
           style={{ backgroundImage: "url('/hero-bg.jpg')" }}></div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90 -z-5"></div>

      {/* Logo */}
      <div className="mb-6 sm:mb-8">
        <Logo size="lg" className="opacity-90 scale-90 sm:scale-100" />
      </div>

      {/* Headline */}
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-extralight leading-tight text-center max-w-3xl px-4 text-balance">
        Designed for Strength. Engineered for Performance.
      </h1>

      {/* Subtext */}
      <p className="mt-4 text-sm sm:text-lg md:text-xl text-gray-600 text-center max-w-xl px-6 text-pretty">
        Premium athletic wear for the modern lifter — refined materials, elevated cut, effortless performance.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center w-full px-4 sm:px-0">
        <button
          onClick={scrollToForm}
          className="w-full sm:w-auto px-8 py-3 text-lg font-semibold text-white bg-neutral-900 hover:bg-black transition-all rounded-lg shadow-md"
        >
          Reserve Your Tee
        </button>

        <button
          onClick={() =>
            document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' })
          }
          className="w-full sm:w-auto px-8 py-3 text-lg font-medium text-neutral-900 bg-transparent border border-neutral-900 hover:bg-neutral-100 transition-all rounded-lg"
        >
          View Collection
        </button>
      </div>

      {/* Optional Stats */}
      <div className="mt-12 sm:mt-14 flex flex-wrap justify-center gap-x-8 gap-y-6 max-w-xl text-center px-4">
        <div className="min-w-[100px]">
          <div className="text-xl sm:text-2xl font-semibold">100%</div>
          <div className="text-sm text-gray-500 tracking-wide">Organic Cotton</div>
        </div>
        <div className="min-w-[100px]">
          <div className="text-xl sm:text-2xl font-semibold">Limited</div>
          <div className="text-sm text-gray-500 tracking-wide">Edition</div>
        </div>
        <div className="min-w-[100px]">
          <div className="text-xl sm:text-2xl font-semibold">Worldwide</div>
          <div className="text-sm text-gray-500 tracking-wide">Premium</div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 flex flex-col items-center text-gray-500 animate-bounce hidden sm:flex">
        <ChevronDown size={26} />
        <span className="text-xs uppercase tracking-wider">Scroll</span>
      </div>

    </section>
  );
}
