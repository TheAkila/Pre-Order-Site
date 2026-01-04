'use client';

import { Package, Shirt, Award, Ruler } from 'lucide-react';

export default function Details() {
  const features = [
    {
      icon: <Shirt size={28} strokeWidth={1.5} />,
      title: 'Premium Fabric',
      description: '100% combed cotton. Pre-shrunk. Breathable and built to last through your toughest sessions.',
    },
    {
      icon: <Package size={28} strokeWidth={1.5} />,
      title: 'Perfect Fit',
      description: 'Athletic cut with reinforced stitching. Designed for comfort during training and casual wear.',
    },
    {
      icon: <Award size={28} strokeWidth={1.5} />,
      title: 'Limited Edition',
      description: 'Exclusive drop. Once they\'re gone, they\'re gone. Be part of the Lifting Social movement.',
    },
  ];

  return (
    <section id="details" className="py-12 sm:py-16 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-black mb-2 sm:mb-3 md:mb-4 px-2">
            Built Different
          </h2>
          <p className="font-body text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto px-3 sm:px-4 leading-relaxed">
            Quality you can feel. Style that stands out. Performance that matters.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-slate-200 hover:border-brand-red transition-all duration-300 card-hover"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-red/10 rounded-xl flex items-center justify-center text-brand-red mb-4 sm:mb-6">
                {feature.icon}
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-brand-black mb-2 sm:mb-3">{feature.title}</h3>
              <p className="font-body text-sm sm:text-base text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Size Chart */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 overflow-hidden shadow-lg">
          <div className="bg-gradient-to-r from-brand-red to-brand-red-dark p-6 sm:p-8">
            <div className="flex items-center gap-3 text-white">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Ruler className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold">Size Guide</h3>
                <p className="font-body text-xs sm:text-sm text-white/90 mt-1">Find your perfect fit</p>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="w-full min-w-[320px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="py-3 sm:py-4 px-4 sm:px-6 text-left font-body text-xs sm:text-sm font-semibold text-slate-900">SIZE</th>
                  <th className="py-3 sm:py-4 px-4 sm:px-6 text-left font-body text-xs sm:text-sm font-semibold text-slate-900">CHEST (in)</th>
                  <th className="py-3 sm:py-4 px-4 sm:px-6 text-left font-body text-xs sm:text-sm font-semibold text-slate-900">LENGTH (in)</th>
                </tr>
              </thead>
              <tbody className="font-body">
                {[
                  { size: 'S', chest: '36-38', length: '27-28' },
                  { size: 'M', chest: '38-40', length: '28-29' },
                  { size: 'L', chest: '40-42', length: '29-30' },
                  { size: 'XL', chest: '42-44', length: '30-31' },
                  { size: 'XXL', chest: '44-46', length: '31-32' },
                ].map((row, index) => (
                  <tr key={row.size} className={`border-b border-slate-100 hover:bg-slate-50 transition-colors ${index === 4 ? 'border-b-0' : ''}`}>
                    <td className="py-3 sm:py-4 px-4 sm:px-6 font-bold text-brand-red text-sm sm:text-base">{row.size}</td>
                    <td className="py-3 sm:py-4 px-4 sm:px-6 text-slate-600 text-sm sm:text-base">{row.chest}</td>
                    <td className="py-3 sm:py-4 px-4 sm:px-6 text-slate-600 text-sm sm:text-base">{row.length}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-6 bg-slate-50 border-t border-slate-200">
            <p className="font-body text-sm text-slate-600 text-center">
              <span className="font-medium text-slate-900">Pro Tip:</span> If you&apos;re between sizes, we recommend sizing up for a relaxed fit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
