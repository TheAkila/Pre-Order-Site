'use client';

import { ChevronDown } from 'lucide-react';
import Logo from './Logo';

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-6 sm:mb-10 md:mb-12">
          <Logo size="xl" />
        </div>

        {/* Limited Edition Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-red/10 border border-brand-red rounded-full mb-6 sm:mb-8 touch-manipulation">
          <div className="w-2 h-2 bg-brand-red rounded-full animate-pulse"></div>
          <span className="text-xs sm:text-sm font-medium text-brand-red tracking-wide">Limited Edition Drop</span>
        </div>

        {/* Tagline */}
        <p className="font-body text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-600 mb-2 sm:mb-3 max-w-2xl mx-auto leading-relaxed">
          Built for Those Who Lift
        </p>

        <p className="font-body text-sm sm:text-base md:text-lg text-slate-500 mb-8 sm:mb-10 max-w-xl mx-auto px-2 sm:px-4 leading-relaxed">
          Premium quality athletic wear designed for champions. Limited quantities available.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-3 justify-center items-stretch mb-10 sm:mb-12 md:mb-16 px-3 sm:px-4 max-w-md mx-auto">
          <button
            onClick={scrollToForm}
            className="btn-accent w-full text-base sm:text-lg min-h-[54px] sm:min-h-[56px] touch-manipulation active:scale-95 transition-transform"
          >
            Reserve Your Tee
          </button>
          
          <button
            onClick={() => document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary w-full text-base sm:text-lg min-h-[54px] sm:min-h-[56px] touch-manipulation active:scale-95 transition-transform"
          >
            View Collection
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center gap-2 text-slate-400 animate-bounce mb-8 sm:mb-0">
          <ChevronDown size={24} strokeWidth={1.5} />
          <span className="text-xs sm:text-sm">Scroll to explore</span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 mt-10 sm:mt-16 md:mt-20 max-w-3xl mx-auto px-2 sm:px-4">
          <div className="border-l-2 border-brand-red pl-2 sm:pl-3 md:pl-4">
            <div className="font-heading text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-brand-black leading-tight">100%</div>
            <div className="font-body text-[10px] sm:text-xs md:text-sm text-slate-600 mt-0.5">Cotton</div>
          </div>
          <div className="border-l-2 border-brand-red pl-2 sm:pl-3 md:pl-4">
            <div className="font-heading text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-brand-black leading-tight">Limited</div>
            <div className="font-body text-[10px] sm:text-xs md:text-sm text-slate-600 mt-0.5">Edition</div>
          </div>
          <div className="border-l-2 border-brand-red pl-2 sm:pl-3 md:pl-4">
            <div className="font-heading text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-brand-black leading-tight">Premium</div>
            <div className="font-body text-[10px] sm:text-xs md:text-sm text-slate-600 mt-0.5">Quality</div>
          </div>
        </div>
      </div>
    </section>
  );
}
